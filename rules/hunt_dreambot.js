const rule = {
    "id": "e72335fa-4d31-4b5b-87d2-4a731bcbdb9d",
    "info": {
        "name": "Rules Detect DreamBot",
        "author": "Openhunting",
        "date": "2022-08-08",
        "modified": "2022-08-18 17:41:15",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for DreamBot",
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
                        "4103f92313df741c926014545472ca43",
                        "a908e3261ee99c8fe331293b2fc11d6f"
                    ]
                }
            ]
        }
    ]
};