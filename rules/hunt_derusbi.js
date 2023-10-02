const rule = {
    "id": "0b2852c5-343d-42ee-8601-96e948fa4c52",
    "info": {
        "name": "Rules Detect Derusbi",
        "author": "Openhunting",
        "date": "2022-12-29",
        "modified": "2021-07-10 21:52:39",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Derusbi",
        "tags": [
            "derusbi"
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
                        "8af282aa37b9eff8ec3f9b9f9c275e1f"
                    ]
                }
            ]
        }
    ]
};