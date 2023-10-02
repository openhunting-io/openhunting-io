const rule = {
    "id": "e03cc26d-ddc5-4f22-98d2-08945b49566d",
    "info": {
        "name": "Rules Detect ZeroCleare",
        "author": "Openhunting",
        "date": "2022-09-26",
        "modified": "2022-09-12 09:22:41",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for ZeroCleare",
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
                        "64cb923be15ae255b82e7ebcf24ccfc5"
                    ]
                }
            ]
        }
    ]
};