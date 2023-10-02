const rule = {
    "id": "20f1675c-3321-4629-8fea-c8ef54f2e156",
    "info": {
        "name": "Rules Detect EnvyScout",
        "author": "Openhunting",
        "date": "2023-06-22",
        "modified": "2022-07-08 16:50:23",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for EnvyScout",
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
                        "3aa44a7951ad95d02c426e9e2a174c2e",
                        "6228d15e3bb50adfa59c1bdf5f6ce9f0",
                        "59b5d262532dab929bbe56c90a0257d2",
                        "6812031432039a89fa741e9338f8e887"
                    ]
                }
            ]
        }
    ]
};