const rule = {
    "id": "7330d9ee-b145-49f2-9b17-bf1d788eba6e",
    "info": {
        "name": "Rules Detect FlawedGrace",
        "author": "Openhunting",
        "date": "2023-06-12",
        "modified": "2021-10-20 12:13:33",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for FlawedGrace",
        "tags": [],
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
                        "cdn-wfs-nspod.com"
                    ]
                }
            ]
        }
    ]
};