const rule = {
    "id": "ac91a552-cd11-4f7b-a197-fbce5ae37d7f",
    "info": {
        "name": "Rules Detect sLoad",
        "author": "Openhunting",
        "date": "2021-06-21",
        "modified": "2022-02-07 14:39:30",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for sLoad",
        "tags": [
            "sLoad"
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
                        "hgjui.eu",
                        "hkjt.eu",
                        "opoietj.eu",
                        "sertyty.eu"
                    ]
                }
            ]
        }
    ]
};