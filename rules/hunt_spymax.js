const rule = {
    "id": "2a89d596-5609-4865-b3a3-07b8ba72258b",
    "info": {
        "name": "Rules Detect SpyMax",
        "author": "Openhunting",
        "date": "2023-06-22",
        "modified": "2022-01-25 11:39:25",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for SpyMax",
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
                        "8f05ecbb5f9fe721dfcd380669ab7ebb1dffc433ee0c4d5dce9936afa69564b0",
                        "8cce54b541f8b47f56d3e799a7281b7c285904fe4dcee8ca9212722cc59ee3ac",
                        "6b7aaaacd33b8da0c8cb4a43d60259a0"
                    ]
                }
            ]
        }
    ]
};