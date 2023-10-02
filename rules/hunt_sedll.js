const rule = {
    "id": "721b03a0-8d48-46c1-862d-508f3d016218",
    "info": {
        "name": "Rules Detect SeDLL",
        "author": "Openhunting",
        "date": "2021-04-24",
        "modified": "2021-03-27 13:50:57",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for SeDLL",
        "tags": [
            "dll",
            "suspicious"
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
                        "7523febf9a1f3c596bb1b81044d5deba4c3869eda1e947e08747d18c97858cca"
                    ]
                }
            ]
        }
    ]
};