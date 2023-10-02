const rule = {
    "id": "124b4907-0c7c-42d8-817a-60df1c9c6c4b",
    "info": {
        "name": "Rules Detect BlackNET RAT",
        "author": "Openhunting",
        "date": "2023-02-17",
        "modified": "2023-09-25 23:48:14",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for BlackNET RAT",
        "tags": [
            "RAT",
            "panel",
            "ViriBack",
            "BlackNet",
            "blacknet",
            "BlackNET",
            "rat"
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
                        "94bcc274b54ed4fd6f9d0b3b6e07225d63e058f2961fffc225cc144b68bc0188",
                        "55ff1e0a4e5866d565ceeb9baafac73fdcb4464160fc6c78104d935009935cd7",
                        "af4586015e689d670854702df4aa5748eb90da472dc6c479f065bfb49e624d0c",
                        "150a0f0a59a04f7023a5f7e8c1739949b1cd40d15550fdbc58f7616af24e2a30",
                        "a94970a63494de9eecb666dd6a91b43d"
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
                        "f0575824.xsph.ru",
                        "bankslip.info",
                        "bankslip.info",
                        "cofix.best",
                        "ecrew.sytes.net",
                        "18.117.193.148",
                        "74.208.16.112",
                        "zee.zight.ru",
                        "noctorships.ga",
                        "zenginlerclubmuck.xyz",
                        "91.134.238.134:8010",
                        "valsinki.xyz",
                        "finalb.xyz",
                        "finalb.xyz",
                        "23c1-128-199-237-110.ngrok.io",
                        "theblogreader-blog.wtf",
                        "hksec.hk",
                        "gpay-safe.ru",
                        "officialcomerce1.xyz",
                        "furyx.de",
                        "100.26.17.80",
                        "54.237.66.139",
                        "185.212.44.211",
                        "weboss.in",
                        "monomolecular-tone.000webhostapp.com",
                        "34.227.13.244",
                        "45.130.138.51",
                        "ytgyuityuity.ru",
                        "a0541862.xsph.ru",
                        "142.202.136.146",
                        "chomotrov.rf.gd",
                        "www.rtmmodz.a2hosted.com",
                        "micros0ftcenter.xyz",
                        "crypromo.com",
                        "maddoxdevelopment.online",
                        "pako.saturncnc.tk",
                        "qube.host",
                        "146.19.191.190",
                        "80.85.157.98",
                        "45.133.1.98"
                    ]
                }
            ]
        }
    ]
};