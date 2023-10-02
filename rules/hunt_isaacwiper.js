const rule = {
    "id": "74902cc1-3967-4ecc-8c96-1019f131e646",
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