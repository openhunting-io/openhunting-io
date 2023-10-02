const rule = {
    "id": "a830c89b-3b25-4f0c-8aa7-afa0f45ae619",
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
                        "market.contradecapital.com",
                        "77.105.147.140"
                    ]
                }
            ]
        }
    ]
};