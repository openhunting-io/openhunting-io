const rule = {
    "id": "0737ef7f-0282-4a95-a813-6d86652b8626",
    "info": {
        "name": "Rules Detect AndroRAT",
        "author": "Openhunting",
        "date": "2022-05-11",
        "modified": "2023-05-11 05:43:05",
        "severity": "High",
        "category": "Tools",
        "description": "Rules IOC for AndroRAT",
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
                        "347f1b018f643de0b9c946c94bd490a7426503869a0828b0a70b4d318fa097d6"
                    ]
                }
            ]
        }
    ]
};