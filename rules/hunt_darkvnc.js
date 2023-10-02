const rule = {
    "id": "f55bd336-3353-408c-9cb0-5f952064fb24",
    "info": {
        "name": "Rules Detect DarkVNC",
        "author": "Openhunting",
        "date": "2022-12-27",
        "modified": "2023-08-14 06:07:11",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for DarkVNC",
        "tags": [
            "DarkVNC",
            "hvnc",
            "rat"
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
                        "91.238.50.80",
                        "212.114.52.91",
                        "2.152.208.135",
                        "aimtech.ddns.net",
                        "137.74.104.108",
                        "135.181.175.108"
                    ]
                }
            ]
        }
    ]
};