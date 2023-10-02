const rule = {
    "id": "e53b0647-dcc3-4dc4-9218-b0f89595b44e",
    "info": {
        "name": "Rules Detect Z*Stealer",
        "author": "Openhunting",
        "date": "2022-12-27",
        "modified": "2023-05-23 23:48:12",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Z*Stealer",
        "tags": [
            "ViriBack",
            "ZStealer"
        ],
        "references": []
    },
    "method": [
        {
            "query": "SELECT * FROM files_information",
            "column_master": "path",
            "signature": [
                {
                    "name": "hash",
                    "indicator": [
                        "975da522079b40365ef3801e71714eb4",
                        "ab1448e5606aeebd04b298b41292bff2",
                        "171755fb48a0ad6464e8808dc90856a9",
                        "5b32164135c2798630f86fb25e787dde"
                    ]
                }
            ]
        },
        {
            "query": "select * from process_open_sockets",
            "column_master": "remote_access",
            "signature": [
                {
                    "name": "domain",
                    "indicator": [
                        "russiaisbetterthanukraine.me"
                    ]
                }
            ]
        }
    ]
};