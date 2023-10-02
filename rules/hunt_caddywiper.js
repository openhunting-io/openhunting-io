const rule = {
    "id": "52f90ef6-b837-4e04-9c7a-89cc96d4e8d2",
    "info": {
        "name": "Rules Detect CaddyWiper",
        "author": "Openhunting",
        "date": "2023-07-12",
        "modified": "2022-03-16 23:20:57",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for CaddyWiper",
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
                        "a294620543334a721a2ae8eaaf9680a0786f4b9a216d75b55cfd28f39e9430ea"
                    ]
                }
            ]
        }
    ]
};