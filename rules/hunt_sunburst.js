const rule = {
    "id": "af17fa00-1f86-4b46-875f-42945847c548",
    "info": {
        "name": "Rules Detect SUNBURST",
        "author": "Openhunting",
        "date": "2023-04-13",
        "modified": "2022-04-29 13:31:13",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for SUNBURST",
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
                        "CE77D116A074DAB7A22A0FD4F2C1AB475F16EEC42E1DED3C0B0AA8211FE858D6"
                    ]
                }
            ]
        }
    ]
};