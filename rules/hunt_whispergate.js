const rule = {
    "id": "fff32963-7f06-44ab-8c5f-ac63e0b7bb94",
    "info": {
        "name": "Rules Detect WhisperGate",
        "author": "Openhunting",
        "date": "2023-06-14",
        "modified": "2022-02-23 20:41:00",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for WhisperGate",
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
                        "5d5c99a08a7d927346ca2dafa7973fc1",
                        "3F4A16B29F2F0532B7CE3E7656799125"
                    ]
                }
            ]
        }
    ]
};