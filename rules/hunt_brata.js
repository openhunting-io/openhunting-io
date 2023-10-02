const rule = {
    "id": "e641fd64-9a85-44e7-a516-d49382f5d088",
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
                        "nazi-ziba.tk",
                        "new-acc.cf",
                        "new-acc.ga",
                        "publiveum.ga",
                        "publiveum.gq",
                        "publiveum.ml",
                        "sahaamdar.tk",
                        "saham-daraen.tk",
                        "saham-edalat-t.tk",
                        "samaneha-sahaeam.tk",
                        "umlive.gq",
                        "umlive.ml",
                        "wuiwidudiei.tk",
                        "drsazihstdie.tk",
                        "eblagh-markaz.tk",
                        "edalatum.gq",
                        "edalatum.tk",
                        "kisiremot.ga",
                        "kisiremot.ml",
                        "kisiremot.tk",
                        "kospedarpari.gq",
                        "liveum.ga",
                        "medive.ga",
                        "myumlive.cf",
                        "myumlive.ml",
                        "192.227.134.72"
                    ]
                }
            ]
        }
    ]
};