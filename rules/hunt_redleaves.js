const rule = {
    "id": "88d4a214-ef07-40d0-ac4f-5be23b59e230",
    "info": {
        "name": "Rules Detect RedLeaves",
        "author": "Openhunting",
        "date": "2020-05-14",
        "modified": "2022-03-03 10:38:51",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for RedLeaves",
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
                        "2b7e4e5758699f924f50615e8fe48e13bf428d7aa1fcbfb2ed4f64a0fd6a8f93"
                    ]
                }
            ]
        }
    ]
};