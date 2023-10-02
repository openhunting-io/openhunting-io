const rule = {
    "id": "c5296398-224d-47ec-8384-e9bd3b5462fa",
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