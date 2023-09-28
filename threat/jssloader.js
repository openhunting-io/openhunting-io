var threatdata = {
    "name": "JSSLoader",
    "alias": "JSSLoader, FOWLGAZE",
    "category": "Malware",
    "type": "Backdoor, Downloader, Exfiltration",
    "modified": "2022-04-05",
    "all_data": {
        "tool": "JSSLoader",
        "names": [
            {
                "name": "JSSLoader"
            },
            {
                "name": "FOWLGAZE"
            }
        ],
        "description": "(Morphisec) The JSSLoader is a RAT (Remote Access Trojan) with multiple capabilities that were introduced over time. These various capabilities are documented throughout this report. In the specific attack chain that was recently intercepted, the RAT typically executes a DiceLoader which is responsible for the reflective loading and execution of a Cobalt beacon.\nNot surprisingly, the C2 hosting provider is a company named FranTech Solutions, which has been used before by the FIN7 group.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://blog.morphisec.com/the-evolution-of-the-fin7-jssloader"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.jssloader"
        ],
        "uuid": "7947f799-39c9-4585-8693-92a483ea15e7",
        "last-card-change": "2022-04-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "JSSLoader",
            "malware_alias": null,
            "malware": "win.jssloader",
            "last_update": "2023-05-11 17:22:47",
            "tags": [
                "jssloader",
                "Jssloader",
                "JSSLoader",
                "fin7"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "twopawandcompany.net",
                        "timestamp": "2023-03-28 18:54:50"
                    },
                    {
                        "value": "bluelotuslasvegas.org",
                        "timestamp": "2023-03-28 18:30:01"
                    },
                    {
                        "value": "its-zach-time.com",
                        "timestamp": "2023-03-23 18:15:21"
                    },
                    {
                        "value": "peacemakerspodcast.com",
                        "timestamp": "2022-10-03 17:07:31"
                    },
                    {
                        "value": "sashakuznetsova.com",
                        "timestamp": "2022-09-28 19:11:04"
                    },
                    {
                        "value": "scriptureinwood.com",
                        "timestamp": "2022-09-28 19:10:06"
                    },
                    {
                        "value": "thelovebreakthrough.com",
                        "timestamp": "2022-09-20 19:03:45"
                    },
                    {
                        "value": "meditatesrilanka.com",
                        "timestamp": "2022-09-20 19:01:19"
                    },
                    {
                        "value": "verakhi.com",
                        "timestamp": "2022-09-06 17:58:46"
                    },
                    {
                        "value": "molkaders.com",
                        "timestamp": "2022-09-06 09:10:22"
                    },
                    {
                        "value": "energytoleave.com",
                        "timestamp": "2022-09-06 09:09:07"
                    },
                    {
                        "value": "qender.com",
                        "timestamp": "2022-08-20 08:17:24"
                    },
                    {
                        "value": "modolorem.com",
                        "timestamp": "2022-08-10 17:49:38"
                    },
                    {
                        "value": "essentialsmassageanddayspa.com",
                        "timestamp": "2022-07-25 17:44:08"
                    },
                    {
                        "value": "realchickenpies.com",
                        "timestamp": "2022-07-21 09:06:31"
                    },
                    {
                        "value": "weotophoto.com",
                        "timestamp": "2022-06-27 09:07:51"
                    },
                    {
                        "value": "massageatworknc.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "momentumwrp.com",
                        "timestamp": "2022-06-27 09:17:16"
                    },
                    {
                        "value": "divorceradio.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "mssibong.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "maxuminus.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "southernstrongclothing.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "marioterno.com",
                        "timestamp": "2022-12-06 07:08:54"
                    },
                    {
                        "value": "psychotaco.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "bullerdix.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "securmeawards.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "apoxonbothyourhouses.org",
                        "timestamp": "2022-07-21 09:06:31"
                    },
                    {
                        "value": "bamadora.com",
                        "timestamp": "2022-12-06 07:08:54"
                    },
                    {
                        "value": "borrantore.com",
                        "timestamp": "2022-07-21 09:06:31"
                    },
                    {
                        "value": "captaincoathanger.com",
                        "timestamp": "2022-07-21 09:06:31"
                    },
                    {
                        "value": "childrensbooksman.com",
                        "timestamp": "2022-07-21 09:06:31"
                    },
                    {
                        "value": "lacoquetaantojitosyraspados.com",
                        "timestamp": "2022-06-27 07:46:10"
                    },
                    {
                        "value": "masstolis.com",
                        "timestamp": "2022-07-21 09:06:31"
                    },
                    {
                        "value": "suvulaki.com",
                        "timestamp": "2022-07-21 09:06:32"
                    },
                    {
                        "value": "tuschbrothersbrewery.com",
                        "timestamp": "2022-07-21 09:06:32"
                    },
                    {
                        "value": "whiteheadscanesyrup.com",
                        "timestamp": "2022-07-21 09:06:32"
                    }
                ],
                "ip:port": [
                    {
                        "value": "209.141.35.112:443",
                        "timestamp": "2023-03-28 19:09:28"
                    },
                    {
                        "value": "198.98.60.218:443",
                        "timestamp": "2023-05-11 17:22:47"
                    },
                    {
                        "value": "198.98.60.5:443",
                        "timestamp": "2023-04-21 17:24:48"
                    },
                    {
                        "value": "205.185.123.192:443",
                        "timestamp": "2023-03-28 19:09:29"
                    },
                    {
                        "value": "45.61.184.75:443",
                        "timestamp": "2023-03-07 17:26:31"
                    },
                    {
                        "value": "198.98.49.19:443",
                        "timestamp": "2023-01-31 17:25:31"
                    },
                    {
                        "value": "209.141.34.163:443",
                        "timestamp": "2023-01-14 17:23:05"
                    },
                    {
                        "value": "209.141.57.163:443",
                        "timestamp": "2023-01-18 17:24:35"
                    },
                    {
                        "value": "122.146.8.181:443",
                        "timestamp": "2022-10-03 17:08:17"
                    },
                    {
                        "value": "209.141.48.216:443",
                        "timestamp": "2022-09-28 19:11:49"
                    },
                    {
                        "value": "205.185.125.223:443",
                        "timestamp": "2022-09-28 19:10:36"
                    },
                    {
                        "value": "45.61.185.72:443",
                        "timestamp": "2022-09-20 19:04:27"
                    },
                    {
                        "value": "198.98.58.153:443",
                        "timestamp": "2022-09-20 19:02:06"
                    },
                    {
                        "value": "107.189.12.93:443",
                        "timestamp": "2022-09-06 17:59:32"
                    },
                    {
                        "value": "104.244.76.67:443",
                        "timestamp": "2022-09-06 09:10:53"
                    },
                    {
                        "value": "205.185.118.83:443",
                        "timestamp": "2022-09-06 09:09:36"
                    },
                    {
                        "value": "198.98.57.105:443",
                        "timestamp": "2022-08-20 08:18:09"
                    },
                    {
                        "value": "205.185.121.115:443",
                        "timestamp": "2022-08-10 17:50:14"
                    },
                    {
                        "value": "205.185.116.20:443",
                        "timestamp": "2022-07-25 17:45:00"
                    },
                    {
                        "value": "104.244.77.97:443",
                        "timestamp": "2022-07-21 08:57:48"
                    },
                    {
                        "value": "107.189.4.31:443",
                        "timestamp": "2022-07-21 08:57:48"
                    },
                    {
                        "value": "209.141.53.30:443",
                        "timestamp": "2022-06-27 09:48:12"
                    },
                    {
                        "value": "209.141.60.216:443",
                        "timestamp": "2022-06-27 09:48:12"
                    },
                    {
                        "value": "205.185.117.138:443",
                        "timestamp": "2022-06-27 09:48:11"
                    },
                    {
                        "value": "209.141.37.233:443",
                        "timestamp": "2022-06-27 09:48:11"
                    },
                    {
                        "value": "209.141.44.201:443",
                        "timestamp": "2022-06-27 09:48:11"
                    },
                    {
                        "value": "198.98.62.184:443",
                        "timestamp": "2022-06-27 09:48:10"
                    },
                    {
                        "value": "199.195.252.118:443",
                        "timestamp": "2022-06-27 09:48:10"
                    },
                    {
                        "value": "107.189.28.147:443",
                        "timestamp": "2022-06-27 09:48:09"
                    },
                    {
                        "value": "198.98.53.69:443",
                        "timestamp": "2022-06-27 09:48:09"
                    },
                    {
                        "value": "45.61.188.10:443",
                        "timestamp": "2022-06-27 09:48:08"
                    },
                    {
                        "value": "107.189.1.145:443",
                        "timestamp": "2022-06-27 09:48:08"
                    },
                    {
                        "value": "205.185.116.79:443",
                        "timestamp": "2022-07-21 08:57:49"
                    },
                    {
                        "value": "209.141.50.24:443",
                        "timestamp": "2022-07-21 08:57:49"
                    },
                    {
                        "value": "107.189.14.146:443",
                        "timestamp": "2022-07-21 08:57:48"
                    },
                    {
                        "value": "198.98.53.196:443",
                        "timestamp": "2022-07-21 08:57:48"
                    },
                    {
                        "value": "199.195.251.78:443",
                        "timestamp": "2022-07-21 08:57:48"
                    },
                    {
                        "value": "205.185.115.179:443",
                        "timestamp": "2022-07-21 08:57:48"
                    },
                    {
                        "value": "107.189.13.196:443",
                        "timestamp": "2022-07-21 08:57:48"
                    },
                    {
                        "value": "107.189.14.55:443",
                        "timestamp": "2022-07-05 09:17:52"
                    },
                    {
                        "value": "209.141.47.237:443",
                        "timestamp": "2022-07-21 08:57:49"
                    },
                    {
                        "value": "209.141.52.48:443",
                        "timestamp": "2022-07-21 08:57:49"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "a15023ca1745e070bca7eac35a7326b3ec1691d32ac7dc5b607f0a8f53bc0f97",
                        "timestamp": "2022-06-27 07:52:37"
                    },
                    {
                        "value": "3b6d61add64402dc74d237e69d701ad2b0bea9a525798a376cd13f2090bb39ee",
                        "timestamp": "2021-09-14 03:23:27"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "1ac719c744d22f42e4978e7b55828435",
                        "timestamp": "2021-06-11 00:43:06"
                    },
                    {
                        "value": "526d56017ef5105277fe0d366c95c39d",
                        "timestamp": "2021-06-11 00:43:06"
                    },
                    {
                        "value": "6f891127db5efdb86a63c7a60a96103f",
                        "timestamp": "2021-06-08 22:21:03"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-05-11 17:22:47",
    "mitre": [],
    "file_name": "jssloader",
    "analysis": null
};