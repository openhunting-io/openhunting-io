const rule = {
    "id": "8c0c6668-8fd4-4510-b90c-0c23373f8a18",
    "info": {
        "name": "Rules Detect BlackMatter",
        "author": "Openhunting",
        "date": "2022-09-28",
        "modified": "2022-12-28 18:02:59",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for BlackMatter",
        "tags": [
            "blackmatter",
            "BlackMatter",
            "checkin",
            "pe"
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
                        "8561226f674aeb4abc1b9910ddc4855ac8ac2fcd4f5face1f84e34878ac98afc",
                        "bf9511517f610387d714553bed6ff59d55c21cd0aa18ae00714585e699a332a3",
                        "4524784688e60313b8fefdebde441ca447c1330d90b86885fb55d099071c6ec9",
                        "22d7d67c3af10b1a37f277ebabe2d1eb4fd25afbd6437d4377400e148bcc08d6",
                        "7f6dd0ca03f04b64024e86a72a6d7cfab6abccc2173b85896fc4b431990a5984",
                        "6155637f8b98426258f5d4321bce4104df56c7771967813d61362c2118632a7b",
                        "706f3eec328e91ff7f66c8f0a2fb9b556325c153a329a2062dc85879c540839d",
                        "8f1b0affffb2f2f58b477515d1ce54f4daa40a761d828041603d5536c2d53539",
                        "e81ead735c4baf75702a3a591c87734e7d0914dac55d09b118ff9d14eb2740d6",
                        "62e9edb7e44dc3eecd59ad14f9324dff"
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
                        "fluentzip.org"
                    ]
                }
            ]
        }
    ]
};