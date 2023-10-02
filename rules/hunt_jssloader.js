const rule = {
    "id": "f8a460c6-0caf-4d33-ab09-1792e8154718",
    "info": {
        "name": "Rules Detect JSSLoader",
        "author": "Openhunting",
        "date": "2023-09-12",
        "modified": "2023-05-11 17:22:47",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for JSSLoader",
        "tags": [
            "JSSLoader",
            "fin7",
            "Jssloader",
            "jssloader"
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
                        "a15023ca1745e070bca7eac35a7326b3ec1691d32ac7dc5b607f0a8f53bc0f97",
                        "3b6d61add64402dc74d237e69d701ad2b0bea9a525798a376cd13f2090bb39ee",
                        "1ac719c744d22f42e4978e7b55828435",
                        "526d56017ef5105277fe0d366c95c39d",
                        "6f891127db5efdb86a63c7a60a96103f"
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
                        "twopawandcompany.net",
                        "bluelotuslasvegas.org",
                        "its-zach-time.com",
                        "peacemakerspodcast.com",
                        "sashakuznetsova.com",
                        "scriptureinwood.com",
                        "thelovebreakthrough.com",
                        "meditatesrilanka.com",
                        "verakhi.com",
                        "molkaders.com",
                        "energytoleave.com",
                        "qender.com",
                        "modolorem.com",
                        "essentialsmassageanddayspa.com",
                        "realchickenpies.com",
                        "weotophoto.com",
                        "massageatworknc.com",
                        "momentumwrp.com",
                        "divorceradio.com",
                        "mssibong.com",
                        "maxuminus.com",
                        "southernstrongclothing.com",
                        "marioterno.com",
                        "psychotaco.com",
                        "bullerdix.com",
                        "securmeawards.com",
                        "apoxonbothyourhouses.org",
                        "bamadora.com",
                        "borrantore.com",
                        "captaincoathanger.com",
                        "childrensbooksman.com",
                        "lacoquetaantojitosyraspados.com",
                        "masstolis.com",
                        "suvulaki.com",
                        "tuschbrothersbrewery.com",
                        "whiteheadscanesyrup.com",
                        "209.141.35.112",
                        "198.98.60.218",
                        "198.98.60.5",
                        "205.185.123.192",
                        "45.61.184.75",
                        "198.98.49.19",
                        "209.141.34.163",
                        "209.141.57.163",
                        "122.146.8.181",
                        "209.141.48.216",
                        "205.185.125.223",
                        "45.61.185.72",
                        "198.98.58.153",
                        "107.189.12.93",
                        "104.244.76.67",
                        "205.185.118.83",
                        "198.98.57.105",
                        "205.185.121.115",
                        "205.185.116.20",
                        "104.244.77.97",
                        "107.189.4.31",
                        "209.141.53.30",
                        "209.141.60.216",
                        "205.185.117.138",
                        "209.141.37.233",
                        "209.141.44.201",
                        "198.98.62.184",
                        "199.195.252.118",
                        "107.189.28.147",
                        "198.98.53.69",
                        "45.61.188.10",
                        "107.189.1.145",
                        "205.185.116.79",
                        "209.141.50.24",
                        "107.189.14.146",
                        "198.98.53.196",
                        "199.195.251.78",
                        "205.185.115.179",
                        "107.189.13.196",
                        "107.189.14.55",
                        "209.141.47.237",
                        "209.141.52.48"
                    ]
                }
            ]
        }
    ]
};