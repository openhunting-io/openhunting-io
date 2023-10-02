const rule = {
    "id": "3f48ab04-b65e-479d-9ab9-a49572c299c5",
    "info": {
        "name": "Rules Detect Cuba",
        "author": "Openhunting",
        "date": "2023-09-11",
        "modified": "2021-12-09 01:28:01",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Cuba",
        "tags": [],
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
                        "672fb249e520f4496e72021f887f8bb86fec5604317d8af3f0800d49aa157be1"
                    ]
                }
            ]
        }
    ]
};