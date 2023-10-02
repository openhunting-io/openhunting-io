const rule = {
    "id": "970ea5c7-a1db-4ce2-86ed-51db4ecc16b8",
    "info": {
        "name": "Rules Detect ARTFULPIE",
        "author": "Openhunting",
        "date": "2021-04-24",
        "modified": "2021-05-03 14:05:06",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for ARTFULPIE",
        "tags": [
            "rtf"
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
                        "694d433a729b65993dae758e862077c2d82c92018e8e310e121e1fa051567dba"
                    ]
                }
            ]
        }
    ]
};