const rule = {
    "id": "31bfaa6d-66ad-4658-84e0-f0833bac4c42",
    "info": {
        "name": "Rules Detect Infy, Prince of Persia",
        "author": "Openhunting",
        "date": "2021-04-19",
        "modified": "2021-08-12 10:27:25",
        "severity": "High",
        "category": "APT",
        "description": "Rules IOC for Infy, Prince of Persia",
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