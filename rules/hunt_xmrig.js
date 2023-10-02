const rule = {
    "id": "9070fb48-9f77-4d29-ac6e-71c41d3e0b78",
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