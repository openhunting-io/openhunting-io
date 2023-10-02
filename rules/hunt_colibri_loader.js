const rule = {
    "id": "b78ae37f-fbc1-4084-9054-750a857fc301",
    "info": {
        "name": "Rules Detect Colibri Loader",
        "author": "Openhunting",
        "date": "2022-12-27",
        "modified": "2023-02-13 10:45:28",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Colibri Loader",
        "tags": [
            "Colibri",
            "MarsWallet",
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
                        "zpltcmgodhvvedxtfcygvbgjkvgvcguygytfigj.cc",
                        "yugyuvyugguitgyuigtfyutdtoghghbbgyv.cx",
                        "65.109.7.23",
                        "176.113.115.240"
                    ]
                }
            ]
        }
    ]
};