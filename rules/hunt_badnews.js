const rule = {
    "id": "d67f37f5-ff7c-41f9-aede-2748883e8549",
    "info": {
        "name": "Rules Detect BADNEWS",
        "author": "Openhunting",
        "date": "2021-05-16",
        "modified": "2022-07-18 07:03:41",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for BADNEWS",
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
                        "5dc86d29f26cb9792a285533fdff8835"
                    ]
                }
            ]
        }
    ]
};