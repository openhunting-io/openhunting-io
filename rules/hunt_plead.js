const rule = {
    "id": "c40fa56f-a7d5-4ecf-b44e-f0c1baa59790",
    "info": {
        "name": "Rules Detect PLEAD",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2022-05-23 00:13:11",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for PLEAD",
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
                        "55b075250dad5c15c6386bcdecbde1eb"
                    ]
                }
            ]
        }
    ]
};