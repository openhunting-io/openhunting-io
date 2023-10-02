const rule = {
    "id": "c2fe6955-d04e-4ced-8fcd-172509f190dd",
    "info": {
        "name": "Rules Detect Ramnit",
        "author": "Openhunting",
        "date": "2022-08-18",
        "modified": "2022-05-31 22:30:06",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Ramnit",
        "tags": [
            "EVILDR",
            "EVILNUM",
            "Ramnit",
            "EVILNK"
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
                        "31.192.107.232",
                        "185.236.76.230",
                        "infntio.com",
                        "www.treeboxmail.com"
                    ]
                }
            ]
        }
    ]
};