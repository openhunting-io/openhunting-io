const rule = {
    "id": "96fdd366-8738-408a-b164-7295473802d8",
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
                        "05a9724fc96b9a8093a1f437c3030ca8",
                        "21388527c8e63a333892d922faae5826",
                        "2f665e4c068d2f09fef3ddf10caaef6f"
                    ]
                }
            ]
        }
    ]
};