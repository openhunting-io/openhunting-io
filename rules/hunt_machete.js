const rule = {
    "id": "33843b62-4c5b-498b-8bde-767bdfb17abb",
    "info": {
        "name": "Rules Detect Machete",
        "author": "Openhunting",
        "date": "2022-02-26",
        "modified": "2022-05-03 22:25:55",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Machete",
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
                        "2f665e4c068d2f09fef3ddf10caaef6f",
                        "05a9724fc96b9a8093a1f437c3030ca8",
                        "21388527c8e63a333892d922faae5826"
                    ]
                }
            ]
        }
    ]
};