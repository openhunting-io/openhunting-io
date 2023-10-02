const rule = {
    "id": "e7d54e56-f466-4b6a-adde-f6f9721bfb65",
    "info": {
        "name": "Rules Detect Get2",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2023-10-01 20:30:38",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Get2",
        "tags": [
            "TA505",
            "Get2"
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
                        "docs-downloading.com",
                        "ms-pipes-service.com",
                        "ms-debug-services.com",
                        "110.15.243.148",
                        "133.186.222.87",
                        "188.160.7.36",
                        "202.211.4.65",
                        "220.69.33.51",
                        "125.141.145.175",
                        "220.69.33.111",
                        "101.78.26.130",
                        "180.210.112.158",
                        "210.90.168.176",
                        "125.141.145.174",
                        "125.141.145.252",
                        "124.243.53.149",
                        "125.141.145.164",
                        "125.141.144.228",
                        "125.141.145.241",
                        "27.101.221.227",
                        "125.141.145.165"
                    ]
                }
            ]
        }
    ]
};