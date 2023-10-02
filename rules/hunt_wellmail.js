const rule = {
    "id": "4c59d96e-e499-4f00-8a32-60820ea265c8",
    "info": {
        "name": "Rules Detect WellMail",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2021-07-13 14:41:10",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for WellMail",
        "tags": [
            "wellmail",
            "apt29",
            "golang"
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
                        "d5c26128127f2fac6e3ff2c87b473d74",
                        "01d322dcac438d2bb6bce2bae8d613cb"
                    ]
                }
            ]
        }
    ]
};