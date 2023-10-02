const rule = {
    "id": "b4bdfa16-ecaa-4209-984a-65380dcd4fc6",
    "info": {
        "name": "Rules Detect Evilnum",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2022-08-01 20:06:39",
        "severity": "High",
        "category": "APT",
        "description": "Rules IOC for Evilnum",
        "tags": [
            "EvilNum",
            "EVILNUM"
        ],
        "references": []
    },
    "method": [
        {
            "query": "SELECT * FROM files_information",
            "column_master": "path",
            "signature": [
                {
                    "name": "hash",
                    "indicator": [
                        "4b357bdd7d34050f85b7ef1d497a87dc",
                        "cec06262d1d35f8ea013670c540e30e8"
                    ]
                }
            ]
        },
        {
            "query": "select * from process_open_sockets",
            "column_master": "remote_access",
            "signature": [
                {
                    "name": "domain",
                    "indicator": [
                        "cspapop110.com",
                        "5.206.227.72",
                        "8as1s2.com",
                        "forme539.ddns.net",
                        "kalpoipolpmi.net"
                    ]
                }
            ]
        }
    ]
};