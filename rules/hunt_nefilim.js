const rule = {
    "id": "0096b29c-9453-4b90-afd9-825ec45b99b8",
    "info": {
        "name": "Rules Detect Nefilim",
        "author": "Openhunting",
        "date": "2022-03-17",
        "modified": "2021-05-17 12:24:06",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Nefilim",
        "tags": [
            "nefilim"
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
                        "f9d28f3d052718588396c4e9901a95df"
                    ]
                }
            ]
        }
    ]
};