const rule = {
    "id": "f1a8b7d6-c0ed-4654-b3bd-1218d41af62a",
    "info": {
        "name": "Rules Detect BlackNET RAT",
        "author": "Openhunting",
        "date": "2023-02-17",
        "modified": "2023-09-25 23:48:14",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for BlackNET RAT",
        "tags": [
            "BlackNet",
            "panel",
            "BlackNET",
            "ViriBack",
            "blacknet",
            "rat",
            "RAT"
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
                        "af4586015e689d670854702df4aa5748eb90da472dc6c479f065bfb49e624d0c",
                        "150a0f0a59a04f7023a5f7e8c1739949b1cd40d15550fdbc58f7616af24e2a30",
                        "a94970a63494de9eecb666dd6a91b43d",
                        "55ff1e0a4e5866d565ceeb9baafac73fdcb4464160fc6c78104d935009935cd7",
                        "94bcc274b54ed4fd6f9d0b3b6e07225d63e058f2961fffc225cc144b68bc0188"
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
                        "100.26.17.80",
                        "45.130.138.51",
                        "valsinki.xyz",
                        "142.202.136.146",
                        "bankslip.info",
                        "ytgyuityuity.ru",
                        "185.212.44.211",
                        "pako.saturncnc.tk",
                        "finalb.xyz",
                        "54.237.66.139",
                        "cofix.best",
                        "23c1-128-199-237-110.ngrok.io",
                        "furyx.de",
                        "18.117.193.148",
                        "91.134.238.134:8010",
                        "officialcomerce1.xyz",
                        "zee.zight.ru",
                        "micros0ftcenter.xyz",
                        "146.19.191.190",
                        "34.227.13.244",
                        "f0575824.xsph.ru",
                        "qube.host",
                        "noctorships.ga",
                        "maddoxdevelopment.online",
                        "80.85.157.98",
                        "a0541862.xsph.ru",
                        "weboss.in",
                        "crypromo.com",
                        "gpay-safe.ru",
                        "hksec.hk",
                        "zenginlerclubmuck.xyz",
                        "www.rtmmodz.a2hosted.com",
                        "chomotrov.rf.gd",
                        "45.133.1.98",
                        "theblogreader-blog.wtf",
                        "74.208.16.112",
                        "monomolecular-tone.000webhostapp.com",
                        "ecrew.sytes.net"
                    ]
                }
            ]
        }
    ]
};