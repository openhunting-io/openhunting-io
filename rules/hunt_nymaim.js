const rule = {
    "id": "6cac9452-7a74-4c23-96d3-0f62ef28743f",
    "info": {
        "name": "Rules Detect Nymaim",
        "author": "Openhunting",
        "date": "2022-09-15",
        "modified": "2022-11-14 17:06:57",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Nymaim",
        "tags": [
            "GCleaner",
            "Nymaim"
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
                        "45.139.105.171",
                        "85.31.46.167",
                        "107.182.129.235",
                        "171.22.30.106"
                    ]
                }
            ]
        }
    ]
};