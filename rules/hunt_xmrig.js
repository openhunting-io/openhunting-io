const rule = {
    "id": "700e2a1d-7eb6-430c-a7b7-1aa37614b6f9",
    "info": {
        "name": "Rules Detect XMRig",
        "author": "Openhunting",
        "date": "2023-06-22",
        "modified": "2023-08-27 20:12:23",
        "severity": "High",
        "category": "Tools",
        "description": "Rules IOC for XMRig",
        "tags": [
            "POST"
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
                        "77.105.147.158:5001"
                    ]
                }
            ]
        }
    ]
};