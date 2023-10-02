const rule = {
    "id": "002fba2e-937b-4f65-b98a-928b8c7f1f16",
    "info": {
        "name": "Rules Detect Titan",
        "author": "Openhunting",
        "date": "2020-04-23",
        "modified": "2023-01-31 12:01:55",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Titan",
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
                        "82040e02a2c16b12957659e1356a5e19"
                    ]
                }
            ]
        }
    ]
};