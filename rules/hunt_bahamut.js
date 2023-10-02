const rule = {
    "id": "b68533d7-091b-4c2c-a377-9c0483d91fdb",
    "info": {
        "name": "Rules Detect Bahamut",
        "author": "Openhunting",
        "date": "2023-09-06",
        "modified": "2023-06-09 23:48:11",
        "severity": "High",
        "category": "APT",
        "description": "Rules IOC for Bahamut",
        "tags": [
            "ViriBack",
            "Bahamut"
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