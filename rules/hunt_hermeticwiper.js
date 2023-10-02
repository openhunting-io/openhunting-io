const rule = {
    "id": "95ead790-42a2-4550-8acd-2cc3f7e01ef7",
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
                        "a64c3e0522fad787b95bfb6a30c3aed1b5786e69e88e023c062ec7e5cebf4d3e",
                        "ffea1266b09abbf0ceb59119746d8630"
                    ]
                }
            ]
        }
    ]
};