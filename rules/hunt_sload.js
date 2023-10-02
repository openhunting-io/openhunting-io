const rule = {
    "id": "d0ea9da9-7aa7-4b11-91f7-7f471fd1f5c4",
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
                        "opoietj.eu",
                        "hgjui.eu",
                        "sertyty.eu",
                        "hkjt.eu"
                    ]
                }
            ]
        }
    ]
};