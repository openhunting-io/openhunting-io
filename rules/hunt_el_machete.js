const rule = {
    "id": "2b9d7526-f3f7-45f4-ad45-f1fa6e2386e0",
    "info": {
        "name": "Rules Detect El Machete",
        "author": "Openhunting",
        "date": "2022-04-05",
        "modified": "2022-05-03 22:25:55",
        "severity": "High",
        "category": "APT",
        "description": "Rules IOC for El Machete",
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