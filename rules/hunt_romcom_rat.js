const rule = {
    "id": "c67a80fc-6152-4a00-863d-5913e96ecb23",
    "info": {
        "name": "Rules Detect ROMCOM RAT",
        "author": "Openhunting",
        "date": "2023-09-08",
        "modified": "2023-05-09 08:13:15",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for ROMCOM RAT",
        "tags": [
            "RomCom",
            "RAT"
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