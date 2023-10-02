const rule = {
    "id": "6af13d74-5a5e-4692-b8a6-536403e5ad29",
    "info": {
        "name": "Rules Detect PhantomNet",
        "author": "Openhunting",
        "date": "2021-09-03",
        "modified": "2022-07-13 06:36:14",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for PhantomNet",
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
                        "840c2aa0d5e5217bc73e2607a74ec2f979c76f77cae2a70dd9d87ad49adda922"
                    ]
                }
            ]
        }
    ]
};