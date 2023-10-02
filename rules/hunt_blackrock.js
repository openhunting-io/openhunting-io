const rule = {
    "id": "f874a456-b0cc-4171-9eaa-f4fa5ccbead1",
    "info": {
        "name": "Rules Detect BlackRock",
        "author": "Openhunting",
        "date": "2022-12-29",
        "modified": "2021-03-08 20:45:28",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for BlackRock",
        "tags": [
            "android",
            "blackrock",
            "banker"
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