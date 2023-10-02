const rule = {
    "id": "c2b75756-26c4-49fb-b7e5-7cde6cf68c9d",
    "info": {
        "name": "Rules Detect Micropsia",
        "author": "Openhunting",
        "date": "2023-04-04",
        "modified": "2021-08-14 22:45:08",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Micropsia",
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
                        "8c560cf2281320736e03f126d978ba28",
                        "cb142b1fe66cd3720b7d2cb054d50f82"
                    ]
                }
            ]
        }
    ]
};