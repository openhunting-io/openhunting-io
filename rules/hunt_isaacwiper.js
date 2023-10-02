const rule = {
    "id": "1e5b7d3a-7f2c-4dc3-bb0a-bc2e3248812d",
    "info": {
        "name": "Rules Detect IsaacWiper",
        "author": "Openhunting",
        "date": "2023-03-15",
        "modified": "2022-03-13 21:39:14",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for IsaacWiper",
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
                        "6C10466AD7C153E7F949FA3C6600B6AC"
                    ]
                }
            ]
        }
    ]
};