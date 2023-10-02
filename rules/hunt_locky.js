const rule = {
    "id": "41ad0e07-3b39-4b5b-939e-b46680b53bf1",
    "info": {
        "name": "Rules Detect Locky",
        "author": "Openhunting",
        "date": "2021-10-05",
        "modified": "2021-03-13 04:07:16",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Locky",
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
                        "771deb8b720dbd784d6715403a41bdcc"
                    ]
                }
            ]
        }
    ]
};