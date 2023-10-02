const rule = {
    "id": "7895ccd1-65bd-4671-8489-8cc4bd7ae1c6",
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