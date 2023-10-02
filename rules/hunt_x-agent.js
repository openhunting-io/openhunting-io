const rule = {
    "id": "e7206b58-a59f-4bee-9856-e57ff288aab3",
    "info": {
        "name": "Rules Detect X-Agent",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2022-07-31 18:45:01",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for X-Agent",
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
                        "540e4a7a28ca1514e53c2564993d8d87",
                        "c0ca0af1f0f646e52dc05af024693b6f",
                        "c75ffcb1a96a4aa0700af898650aac12"
                    ]
                }
            ]
        }
    ]
};