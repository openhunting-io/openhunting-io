const rule = {
    "id": "37d481d5-8cbb-46de-8088-f3fb57661ceb",
    "info": {
        "name": "Rules Detect PoshC2",
        "author": "Openhunting",
        "date": "2022-09-06",
        "modified": "2022-10-17 18:59:43",
        "severity": "High",
        "category": "Tools",
        "description": "Rules IOC for PoshC2",
        "tags": [
            "PostC2",
            "Posh"
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
                        "95.213.145.101",
                        "46.243.186.112",
                        "185.255.79.26",
                        "103.39.230.213"
                    ]
                }
            ]
        }
    ]
};