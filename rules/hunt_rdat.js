const rule = {
    "id": "de284b47-7857-4795-9f63-7cc3aab88e95",
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