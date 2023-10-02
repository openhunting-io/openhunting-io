const rule = {
    "id": "ee933986-bbc0-459f-8dc8-745b9c05bed3",
    "info": {
        "name": "Rules Detect RDAT",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2021-09-19 03:28:36",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for RDAT",
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
                        "d5e4e7bdd4dea654740d7c60503452fd"
                    ]
                }
            ]
        }
    ]
};