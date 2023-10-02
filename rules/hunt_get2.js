const rule = {
    "id": "eb584d4f-d158-41c3-905b-a9e2d975d1b4",
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
                        "125.141.145.252",
                        "125.141.145.175",
                        "188.160.7.36",
                        "ms-pipes-service.com",
                        "210.90.168.176",
                        "220.69.33.111",
                        "125.141.145.174",
                        "101.78.26.130",
                        "110.15.243.148",
                        "125.141.145.241",
                        "180.210.112.158",
                        "docs-downloading.com",
                        "202.211.4.65",
                        "ms-debug-services.com",
                        "124.243.53.149",
                        "125.141.144.228",
                        "125.141.145.165",
                        "220.69.33.51",
                        "27.101.221.227",
                        "133.186.222.87",
                        "125.141.145.164"
                    ]
                }
            ]
        }
    ]
};