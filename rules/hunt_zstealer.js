const rule = {
    "id": "e3d0ff8c-e4a2-4571-b992-70d23e8b6696",
    "info": {
        "name": "Rules Detect Z*Stealer",
        "author": "Openhunting",
        "date": "2022-12-27",
        "modified": "2023-05-23 23:48:12",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Z*Stealer",
        "tags": [
            "ZStealer",
            "ViriBack"
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
                        "5b32164135c2798630f86fb25e787dde",
                        "171755fb48a0ad6464e8808dc90856a9",
                        "975da522079b40365ef3801e71714eb4",
                        "ab1448e5606aeebd04b298b41292bff2"
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