const rule = {
    "id": "3e1854b1-fb55-4c2c-a5ab-3079a4f34601",
    "info": {
        "name": "Rules Detect Poison Ivy",
        "author": "Openhunting",
        "date": "2022-12-29",
        "modified": "2022-10-03 13:10:02",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Poison Ivy",
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
                        "c616002f3cce0fd52d6ead8621a9f1f1"
                    ]
                }
            ]
        }
    ]
};