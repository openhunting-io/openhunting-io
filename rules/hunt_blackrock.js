const rule = {
    "id": "eb9bb3a2-2808-4e83-b282-f7faa087bd28",
    "info": {
        "name": "Rules Detect BlackRock",
        "author": "Openhunting",
        "date": "2022-12-29",
        "modified": "2021-03-08 20:45:28",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for BlackRock",
        "tags": [
            "banker",
            "blackrock",
            "android"
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
                        "91.214.124.196"
                    ]
                }
            ]
        }
    ]
};