const rule = {
    "id": "4ad627b2-a3f0-428b-bc94-a7fd6bbe13ca",
    "info": {
        "name": "Rules Detect Infy",
        "author": "Openhunting",
        "date": "2021-02-18",
        "modified": "2021-08-12 10:27:25",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Infy",
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
                        "7cfe6b3d43caf0e6d990caf7b778d9c68e8e95f9ea6a44f9fefb46be5476c083",
                        "16adbfb16dd14a5aa74c1f56545643c3",
                        "85b1fd8784862fa44a5076debf0c44d5"
                    ]
                }
            ]
        }
    ]
};