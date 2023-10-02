const rule = {
    "id": "99d2479b-006c-4273-95b2-4ee6f69d77b9",
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
                        "a908e3261ee99c8fe331293b2fc11d6f",
                        "4103f92313df741c926014545472ca43"
                    ]
                }
            ]
        }
    ]
};