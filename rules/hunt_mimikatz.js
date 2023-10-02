const rule = {
    "id": "13bf3c06-99b4-404e-a9d8-ee52edcd7914",
    "info": {
        "name": "Rules Detect Mimikatz",
        "author": "Openhunting",
        "date": "2020-05-14",
        "modified": "2023-08-15 15:58:09",
        "severity": "High",
        "category": "Tools",
        "description": "Rules IOC for Mimikatz",
        "tags": [
            "Gh0stRAT",
            "Mimikatz",
            "sodinokibi"
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
                        "0caad1a288815daed34c428ec855cd746a3e572924e8a30629af59740e5fab65",
                        "ad9e1593f9d992ddb9d21495f06bd31a7e39ee7746510d66f0596c5dfbc4e8ab"
                    ]
                }
            ]
        }
    ]
};