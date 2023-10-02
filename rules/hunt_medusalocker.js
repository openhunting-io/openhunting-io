const rule = {
    "id": "fb0644d3-e5b5-4f0d-92c6-3f60a9c728ac",
    "info": {
        "name": "Rules Detect MedusaLocker",
        "author": "Openhunting",
        "date": "2023-04-19",
        "modified": "2021-03-29 11:30:30",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for MedusaLocker",
        "tags": [
            "medusalocker"
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
                        "4dd950fcdcd8483ec9346b4a5214931134975c439cf463daa3a0518cfc5db9a6",
                        "613f0384286bf9956143e5cd7f885cc9b2cf30acaab2fe67a891ff26aaa162fc",
                        "8894becff9f3ebc9c2d734b5f3341fd73017ef3bd42c2a40008b3325586cd0ee",
                        "38ad791e5f0df27a55116ec18f2c31cc41feaaf7d235d85497a6cfa39ebfbebb"
                    ]
                }
            ]
        }
    ]
};