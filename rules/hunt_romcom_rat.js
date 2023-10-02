const rule = {
    "id": "f567dd12-d254-4a8c-aea0-d5ca88590fc1",
    "info": {
        "name": "Rules Detect ROMCOM RAT",
        "author": "Openhunting",
        "date": "2023-09-08",
        "modified": "2023-05-09 08:13:15",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for ROMCOM RAT",
        "tags": [
            "RAT",
            "RomCom"
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
                        "wexonlake.com",
                        "104.234.10.207"
                    ]
                }
            ]
        }
    ]
};