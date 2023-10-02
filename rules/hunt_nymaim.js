const rule = {
    "id": "5c92f6ee-bf40-48c8-825a-7c7529ae4599",
    "info": {
        "name": "Rules Detect Nymaim",
        "author": "Openhunting",
        "date": "2022-09-15",
        "modified": "2022-11-14 17:06:57",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Nymaim",
        "tags": [
            "Nymaim",
            "GCleaner"
        ],
        "references": []
    },
    "method": [
        {
            "query": "select * from process_open_sockets",
            "column_master": "remote_access",
            "signature": [
                {
                    "name": "domain",
                    "indicator": [
                        "107.182.129.235",
                        "45.139.105.171",
                        "171.22.30.106",
                        "85.31.46.167"
                    ]
                }
            ]
        }
    ]
};