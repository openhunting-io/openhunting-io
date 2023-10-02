const rule = {
    "id": "48df5c74-8464-4b83-be09-fc4ad5e6a206",
    "info": {
        "name": "Rules Detect TeamSpy",
        "author": "Openhunting",
        "date": "2022-10-11",
        "modified": "2023-10-02 06:36:11",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for TeamSpy",
        "tags": [
            "teamspy",
            "TeamSpy",
            "ViaPrivateloader",
            "Teamspy",
            "teamSpy",
            "ViaPRivateLoader",
            "RAT",
            "VIAPRIVATELOADER",
            "Viaprivateloader",
            "ViaPrivateLoader"
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
                        "cegbqbq.net",
                        "efeuhot.ua",
                        "185.141.63.172",
                        "aqwxeyo.ru",
                        "eeonagf.ua",
                        "exokckg.ua",
                        "eodqdlj.ua",
                        "ebelkye.ua",
                        "aioeuqo.ru",
                        "ddcedue.info",
                        "diixuoo.info",
                        "ddpkzaq.info",
                        "eojyaqr.ua",
                        "aibyngu.ru",
                        "ccodoom.net",
                        "eeepdcn.ua"
                    ]
                }
            ]
        }
    ]
};