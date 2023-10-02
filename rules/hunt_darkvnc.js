const rule = {
    "id": "438c90c7-403f-4799-aedf-ee459e34480d",
    "info": {
        "name": "Rules Detect DarkVNC",
        "author": "Openhunting",
        "date": "2022-12-27",
        "modified": "2023-08-14 06:07:11",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for DarkVNC",
        "tags": [
            "rat",
            "DarkVNC",
            "hvnc"
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
                        "aimtech.ddns.net",
                        "2.152.208.135",
                        "137.74.104.108",
                        "212.114.52.91",
                        "135.181.175.108",
                        "91.238.50.80"
                    ]
                }
            ]
        }
    ]
};