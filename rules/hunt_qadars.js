const rule = {
    "id": "09a59ad4-ffda-43f3-b106-9592651aab3c",
    "info": {
        "name": "Rules Detect Qadars",
        "author": "Openhunting",
        "date": "2022-04-27",
        "modified": "2021-04-30 12:55:36",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Qadars",
        "tags": [
            "qakbot",
            "qadars"
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
                        "29516452f5a958474c9ed362a9e3f71909148d950945c27a3e83fdfcc8184728",
                        "e9d6516853f869788a26b4ef80b0fbcc"
                    ]
                }
            ]
        }
    ]
};