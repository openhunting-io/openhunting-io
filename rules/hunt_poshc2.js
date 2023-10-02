const rule = {
    "id": "b298052a-2e22-48b7-9766-4d010b272a69",
    "info": {
        "name": "Rules Detect PoshC2",
        "author": "Openhunting",
        "date": "2022-09-06",
        "modified": "2022-10-17 18:59:43",
        "severity": "High",
        "category": "Tools",
        "description": "Rules IOC for PoshC2",
        "tags": [
            "Posh",
            "PostC2"
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