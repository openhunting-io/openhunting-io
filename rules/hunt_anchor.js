const rule = {
    "id": "818add5b-3435-4fe5-b03c-55998fe94815",
    "info": {
        "name": "Rules Detect Anchor",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2021-07-27 20:01:12",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Anchor",
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
                        "ba801f1c2e2c5f5cd961e887cb0776f2d5cee8d17164f29b138a8952dd162165",
                        "a8a8c66b155fcf9bfdf34ba0aca98991440c3d34b8a597c3fdebc8da251c9634"
                    ]
                }
            ]
        }
    ]
};