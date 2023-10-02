const rule = {
    "id": "d0609dbe-d02d-4de9-a254-912ff2bec758",
    "info": {
        "name": "Rules Detect ERMAC",
        "author": "Openhunting",
        "date": "2023-02-15",
        "modified": "2023-09-06 13:29:54",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for ERMAC",
        "tags": [
            "C2Panel",
            "C2",
            "ERMAC 3.0",
            "Android",
            "ERMAC",
            "HOOKBOT PANEL"
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
                        "84.32.214.56",
                        "185.225.75.134",
                        "91.228.10.228",
                        "91.215.85.213",
                        "84.32.214.56",
                        "185.225.75.134",
                        "5.42.199.3",
                        "5.42.199.91",
                        "176.113.115.66",
                        "176.113.115.67",
                        "5.42.199.22",
                        "45.93.201.92",
                        "92.243.88.25",
                        "62.204.41.98"
                    ]
                }
            ]
        }
    ]
};