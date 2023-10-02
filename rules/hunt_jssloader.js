const rule = {
    "id": "e4404ac6-a326-4951-ba1d-b46e636f21c4",
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
            "jssloader",
            "fin7",
            "Jssloader"
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
                        "1ac719c744d22f42e4978e7b55828435",
                        "3b6d61add64402dc74d237e69d701ad2b0bea9a525798a376cd13f2090bb39ee",
                        "6f891127db5efdb86a63c7a60a96103f",
                        "526d56017ef5105277fe0d366c95c39d",
                        "a15023ca1745e070bca7eac35a7326b3ec1691d32ac7dc5b607f0a8f53bc0f97"
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
                        "198.98.49.19",
                        "205.185.116.79",
                        "energytoleave.com",
                        "205.185.125.223",
                        "bluelotuslasvegas.org",
                        "childrensbooksman.com",
                        "205.185.116.20",
                        "205.185.123.192",
                        "suvulaki.com",
                        "198.98.60.218",
                        "205.185.117.138",
                        "205.185.118.83",
                        "twopawandcompany.net",
                        "whiteheadscanesyrup.com",
                        "198.98.60.5",
                        "107.189.14.146",
                        "45.61.188.10",
                        "209.141.47.237",
                        "209.141.37.233",
                        "198.98.62.184",
                        "209.141.60.216",
                        "masstolis.com",
                        "its-zach-time.com",
                        "bullerdix.com",
                        "198.98.53.69",
                        "securmeawards.com",
                        "modolorem.com",
                        "sashakuznetsova.com",
                        "104.244.77.97",
                        "psychotaco.com",
                        "thelovebreakthrough.com",
                        "essentialsmassageanddayspa.com",
                        "weotophoto.com",
                        "209.141.44.201",
                        "107.189.12.93",
                        "mssibong.com",
                        "qender.com",
                        "107.189.13.196",
                        "198.98.57.105",
                        "lacoquetaantojitosyraspados.com",
                        "molkaders.com",
                        "209.141.35.112",
                        "107.189.28.147",
                        "verakhi.com",
                        "captaincoathanger.com",
                        "meditatesrilanka.com",
                        "209.141.52.48",
                        "199.195.252.118",
                        "momentumwrp.com",
                        "45.61.184.75",
                        "209.141.50.24",
                        "209.141.53.30",
                        "198.98.58.153",
                        "104.244.76.67",
                        "marioterno.com",
                        "scriptureinwood.com",
                        "massageatworknc.com",
                        "borrantore.com",
                        "peacemakerspodcast.com",
                        "209.141.48.216",
                        "divorceradio.com",
                        "107.189.1.145",
                        "205.185.121.115",
                        "107.189.4.31",
                        "209.141.57.163",
                        "209.141.34.163",
                        "apoxonbothyourhouses.org",
                        "tuschbrothersbrewery.com",
                        "122.146.8.181",
                        "southernstrongclothing.com",
                        "198.98.53.196",
                        "maxuminus.com",
                        "205.185.115.179",
                        "bamadora.com",
                        "realchickenpies.com",
                        "199.195.251.78",
                        "45.61.185.72",
                        "107.189.14.55"
                    ]
                }
            ]
        }
    ]
};