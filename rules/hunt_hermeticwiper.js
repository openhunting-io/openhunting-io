const rule = {
    "id": "3209459d-a99c-4847-9a72-59c74015da06",
    "info": {
        "name": "Rules Detect HermeticWiper",
        "author": "Openhunting",
        "date": "2023-04-26",
        "modified": "2022-03-30 00:19:42",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for HermeticWiper",
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
                        "ffea1266b09abbf0ceb59119746d8630",
                        "a64c3e0522fad787b95bfb6a30c3aed1b5786e69e88e023c062ec7e5cebf4d3e"
                    ]
                }
            ]
        }
    ]
};