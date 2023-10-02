const rule = {
    "id": "fbcf73c4-afb9-413b-8b41-851c3466bdd9",
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