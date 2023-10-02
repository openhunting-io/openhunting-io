const rule = {
    "id": "a2b0fb2f-281d-4d1a-9890-963eefb33712",
    "info": {
        "name": "Rules Detect Albaniiutas",
        "author": "Openhunting",
        "date": "2022-12-28",
        "modified": "2021-03-24 15:29:16",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Albaniiutas",
        "tags": [
            "albaniiutas"
        ],
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
                        "32060465223315a1da24c0fb4a6e51f5"
                    ]
                }
            ]
        }
    ]
};