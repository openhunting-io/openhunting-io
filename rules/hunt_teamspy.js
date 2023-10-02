const rule = {
    "id": "f5d710a0-5f34-447a-b433-700cf09a9360",
    "info": {
        "name": "Rules Detect TeamSpy",
        "author": "Openhunting",
        "date": "2022-10-11",
        "modified": "2023-10-02 06:36:11",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for TeamSpy",
        "tags": [
            "ViaPrivateLoader",
            "TeamSpy",
            "RAT",
            "ViaPRivateLoader",
            "VIAPRIVATELOADER",
            "teamspy",
            "ViaPrivateloader",
            "Viaprivateloader",
            "Teamspy",
            "teamSpy"
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
                        "aqwxeyo.ru",
                        "aibyngu.ru",
                        "cegbqbq.net",
                        "eojyaqr.ua",
                        "ddpkzaq.info",
                        "ccodoom.net",
                        "eeepdcn.ua",
                        "efeuhot.ua",
                        "diixuoo.info",
                        "aioeuqo.ru",
                        "exokckg.ua",
                        "ddcedue.info",
                        "eodqdlj.ua",
                        "eeonagf.ua",
                        "ebelkye.ua",
                        "185.141.63.172"
                    ]
                }
            ]
        }
    ]
};