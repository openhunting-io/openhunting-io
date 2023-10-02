const rule = {
    "id": "43142c82-d731-4361-bcb7-618b1c664f7a",
    "info": {
        "name": "Rules Detect Cinobi",
        "author": "Openhunting",
        "date": "2021-12-28",
        "modified": "2021-04-15 00:31:25",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Cinobi",
        "tags": [
            "bottleek",
            "cinobi"
        ],
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
                        "364da9b873e03c1f298a771cbc3b431504b1ecbf7d78119f700ee8b181ecae30",
                        "3f8253a142d5d8ed4cac3e55ed999ada6397913cf49e64708cbcc1e24635ee32"
                    ]
                }
            ]
        }
    ]
};