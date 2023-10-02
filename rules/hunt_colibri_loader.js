const rule = {
    "id": "d9e74c38-7d8e-4454-9e9c-cd046a8cdf46",
    "info": {
        "name": "Rules Detect Colibri Loader",
        "author": "Openhunting",
        "date": "2022-12-27",
        "modified": "2023-02-13 10:45:28",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Colibri Loader",
        "tags": [
            "MarsWallet",
            "Colibri",
            "ColibriLoader"
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
                        "194.4.49.243",
                        "176.113.115.240",
                        "yugyuvyugguitgyuigtfyutdtoghghbbgyv.cx",
                        "65.109.7.23",
                        "zpltcmgodhvvedxtfcygvbgjkvgvcguygytfigj.cc",
                        "176.113.115.240",
                        "65.109.7.23"
                    ]
                }
            ]
        }
    ]
};