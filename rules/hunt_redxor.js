const rule = {
    "id": "164378a1-6a54-4e75-8bfa-fa409c25da33",
    "info": {
        "name": "Rules Detect RedXOR",
        "author": "Openhunting",
        "date": "2021-04-24",
        "modified": "2021-03-11 20:48:11",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for RedXOR",
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
                        "0a76c55fa88d4c134012a5136c09fb938b4be88a382f88bf2804043253b0559f",
                        "0423258b94e8a9af58ad63ea493818618de2d8c60cf75ec7980edcaa34dcc919"
                    ]
                }
            ]
        }
    ]
};