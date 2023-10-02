const rule = {
    "id": "9ae7b90b-089b-43e4-a80d-cb37026a2a32",
    "info": {
        "name": "Rules Detect StrongPity",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2021-03-14 12:06:42",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for StrongPity",
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
                        "0f609dd490b21c85e9c8d1db8995e791",
                        "62eab80792db53bf945ff0f835790d36",
                        "d3e206ec0c7e2bb4dbe3897607e14722"
                    ]
                }
            ]
        }
    ]
};