const rule = {
    "id": "f0a4352d-536a-4848-9131-8514386354e3",
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
                        "a8a8c66b155fcf9bfdf34ba0aca98991440c3d34b8a597c3fdebc8da251c9634",
                        "ba801f1c2e2c5f5cd961e887cb0776f2d5cee8d17164f29b138a8952dd162165"
                    ]
                }
            ]
        }
    ]
};