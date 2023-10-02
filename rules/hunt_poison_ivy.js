const rule = {
    "id": "4a7cab0c-a2a3-4790-a205-37ddab2dadaf",
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