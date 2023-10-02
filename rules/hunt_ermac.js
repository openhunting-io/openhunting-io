const rule = {
    "id": "d561c185-b79b-4f57-9ffe-3282a99406ba",
    "info": {
        "name": "Rules Detect ERMAC",
        "author": "Openhunting",
        "date": "2023-02-15",
        "modified": "2023-09-06 13:29:54",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for ERMAC",
        "tags": [
            "C2",
            "Android",
            "C2Panel",
            "ERMAC",
            "HOOKBOT PANEL",
            "ERMAC 3.0"
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
                        "5.42.199.22",
                        "84.32.214.56",
                        "91.228.10.228",
                        "45.93.201.92",
                        "92.243.88.25",
                        "185.225.75.134",
                        "5.42.199.3",
                        "91.215.85.213",
                        "5.42.199.91",
                        "176.113.115.66",
                        "176.113.115.67",
                        "62.204.41.98"
                    ]
                }
            ]
        }
    ]
};