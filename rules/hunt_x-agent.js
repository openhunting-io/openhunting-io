const rule = {
    "id": "4b82facb-1f5a-49b8-a02a-e509982dad82",
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
                        "c75ffcb1a96a4aa0700af898650aac12",
                        "c0ca0af1f0f646e52dc05af024693b6f",
                        "540e4a7a28ca1514e53c2564993d8d87"
                    ]
                }
            ]
        }
    ]
};