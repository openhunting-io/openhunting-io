const rule = {
    "id": "f5657427-77de-4b3b-b68f-a688f1d83497",
    "info": {
        "name": "Rules Detect Evilnum",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2022-08-01 20:06:39",
        "severity": "High",
        "category": "APT",
        "description": "Rules IOC for Evilnum",
        "tags": [
            "EVILNUM",
            "EvilNum"
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
                        "cec06262d1d35f8ea013670c540e30e8",
                        "4b357bdd7d34050f85b7ef1d497a87dc"
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
                        "kalpoipolpmi.net",
                        "8as1s2.com",
                        "cspapop110.com",
                        "forme539.ddns.net",
                        "5.206.227.72"
                    ]
                }
            ]
        }
    ]
};