const rule = {
    "id": "0b02e388-49d8-4298-91fb-7b19881a9297",
    "info": {
        "name": "Rules Detect WellMail",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2021-07-13 14:41:10",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for WellMail",
        "tags": [
            "apt29",
            "golang",
            "wellmail"
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
                        "01d322dcac438d2bb6bce2bae8d613cb",
                        "d5c26128127f2fac6e3ff2c87b473d74"
                    ]
                }
            ]
        }
    ]
};