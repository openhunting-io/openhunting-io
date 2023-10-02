const rule = {
    "id": "a4ba30d4-dccc-42cb-a1ac-f1654bfe1825",
    "info": {
        "name": "Rules Detect Bahamut",
        "author": "Openhunting",
        "date": "2023-09-06",
        "modified": "2023-06-09 23:48:11",
        "severity": "High",
        "category": "APT",
        "description": "Rules IOC for Bahamut",
        "tags": [
            "Bahamut",
            "ViriBack"
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
                        "hbx5adg6vk.de"
                    ]
                }
            ]
        }
    ]
};