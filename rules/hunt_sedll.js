const rule = {
    "id": "d909ad27-381d-424b-b593-39d7f3fd6d5f",
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