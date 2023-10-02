const rule = {
    "id": "2fbbc8d4-d227-42c2-a205-5aaec9a37c3b",
    "info": {
        "name": "Rules Detect TinyNuke",
        "author": "Openhunting",
        "date": "2022-08-08",
        "modified": "2023-06-19 12:29:34",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for TinyNuke",
        "tags": [
            "TinyNuke"
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
                        "77.105.147.140",
                        "market.contradecapital.com"
                    ]
                }
            ]
        }
    ]
};