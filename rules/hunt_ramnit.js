const rule = {
    "id": "80cc5e38-73d5-4321-8a34-00a23fd63589",
    "info": {
        "name": "Rules Detect Ramnit",
        "author": "Openhunting",
        "date": "2022-08-18",
        "modified": "2022-05-31 22:30:06",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Ramnit",
        "tags": [
            "EVILNK",
            "EVILNUM",
            "Ramnit",
            "EVILDR"
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
                        "42761e128d32aea9f3e2c0473c25a32b",
                        "2bb5aa4787a683f6cf87f5d682972e7e"
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
                        "www.treeboxmail.com",
                        "infntio.com",
                        "185.236.76.230",
                        "31.192.107.232"
                    ]
                }
            ]
        }
    ]
};