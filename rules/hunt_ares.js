const rule = {
    "id": "4e9fd636-502a-4769-87cb-1dca302ad6ab",
    "info": {
        "name": "Rules Detect Ares",
        "author": "Openhunting",
        "date": "2022-12-29",
        "modified": "2022-09-16 15:03:04",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Ares",
        "tags": [
            "Ares"
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
                        "tomolina.top",
                        "142.11.236.77"
                    ]
                }
            ]
        }
    ]
};