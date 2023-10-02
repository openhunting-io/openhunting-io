const rule = {
    "id": "bdcd5c42-43d9-44f4-9e00-a0ff53307776",
    "info": {
        "name": "Rules Detect RagnarLocker",
        "author": "Openhunting",
        "date": "2023-03-30",
        "modified": "2021-12-08 15:54:52",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for RagnarLocker",
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
                        "afab912c41c920c867f1b2ada34114b22dcc9c5f3666edbfc4e9936c29a17a68"
                    ]
                }
            ]
        }
    ]
};