const rule = {
    "id": "c40b524b-53eb-4002-a17d-6a8107cf097b",
    "info": {
        "name": "Rules Detect Brata",
        "author": "Openhunting",
        "date": "2022-12-28",
        "modified": "2022-08-25 22:56:43",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Brata",
        "tags": [
            "BRATA"
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
                        "kisiremot.ga",
                        "192.227.134.72",
                        "kisiremot.tk",
                        "new-acc.ga",
                        "nazi-ziba.tk",
                        "kospedarpari.gq",
                        "medive.ga",
                        "new-acc.cf",
                        "saham-daraen.tk",
                        "publiveum.ml",
                        "edalatum.tk",
                        "myumlive.cf",
                        "kisiremot.ml",
                        "umlive.ml",
                        "wuiwidudiei.tk",
                        "umlive.gq",
                        "eblagh-markaz.tk",
                        "myumlive.ml",
                        "sahaamdar.tk",
                        "samaneha-sahaeam.tk",
                        "liveum.ga",
                        "publiveum.ga",
                        "saham-edalat-t.tk",
                        "publiveum.gq",
                        "edalatum.gq",
                        "drsazihstdie.tk"
                    ]
                }
            ]
        }
    ]
};