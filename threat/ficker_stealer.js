var threatdata = {
    "name": "Ficker Stealer",
    "alias": "Ficker Stealer",
    "category": "Malware",
    "type": "Info stealer, Credential stealer",
    "modified": "2022-01-19",
    "all_data": {
        "tool": "Ficker Stealer",
        "names": [
            {
                "name": "Ficker Stealer"
            }
        ],
        "description": "(Minerva) FickerStealer is a MaaS (Malware as a Service) stealer that is sold on hacking forums. Its main goal is to steal sensitive information cached by the user - specifically browser passwords -  and send it back to the virus\u2019 owner. In Minerva\u2019s lab environment we even saw Ficker downloading {{Kronos}} RAT, making this threat more dangerous than it initially seems.",
        "category": "Malware",
        "type": [
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://blog.minerva-labs.com/minerva-labs-stops-fickerstealer"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.fickerstealer"
        ],
        "uuid": "6a1efd0a-772a-4210-b1f9-b729d052f9fc",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Ficker Stealer",
            "malware_alias": null,
            "malware": "win.fickerstealer",
            "last_update": "2023-03-21 23:48:21",
            "tags": [
                "Ficker Stealer",
                "Fickerstealer",
                "FickerStealer",
                "C2Panel"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "91.228.224.98:8080",
                        "timestamp": "2023-02-24 04:35:23"
                    },
                    {
                        "value": "91.228.224.98:8000",
                        "timestamp": "2023-03-21 23:48:21"
                    },
                    {
                        "value": "77.246.156.93:8000",
                        "timestamp": "2023-03-21 23:48:21"
                    },
                    {
                        "value": "79.143.73.170:8000",
                        "timestamp": "2023-03-21 23:48:21"
                    },
                    {
                        "value": "80.66.64.219:8080",
                        "timestamp": "2023-01-24 06:35:39"
                    },
                    {
                        "value": "90.156.230.53:8080",
                        "timestamp": "2023-01-23 15:35:39"
                    },
                    {
                        "value": "5.178.2.214:8080",
                        "timestamp": "2023-01-12 18:10:24"
                    },
                    {
                        "value": "95.213.216.165:8080",
                        "timestamp": "2023-01-07 22:15:27"
                    },
                    {
                        "value": "94.103.90.147:8080",
                        "timestamp": "2023-01-05 20:50:22"
                    },
                    {
                        "value": "94.103.88.115:8080",
                        "timestamp": "2022-12-24 18:55:26"
                    },
                    {
                        "value": "45.143.137.61:8080",
                        "timestamp": "2022-12-19 13:25:08"
                    },
                    {
                        "value": "95.213.216.212:8080",
                        "timestamp": "2022-11-30 22:30:23"
                    },
                    {
                        "value": "80.66.64.195:8080",
                        "timestamp": "2022-11-21 21:55:18"
                    },
                    {
                        "value": "109.234.36.165:8080",
                        "timestamp": "2022-11-17 14:10:25"
                    },
                    {
                        "value": "45.143.136.12:8080",
                        "timestamp": "2022-11-17 08:16:05"
                    },
                    {
                        "value": "45.91.8.125:8080",
                        "timestamp": "2022-11-15 00:15:24"
                    },
                    {
                        "value": "80.66.64.12:8080",
                        "timestamp": "2022-11-11 07:00:22"
                    },
                    {
                        "value": "45.143.136.208:8080",
                        "timestamp": "2022-11-08 01:25:47"
                    },
                    {
                        "value": "193.222.62.238:8080",
                        "timestamp": "2022-10-31 14:25:15"
                    },
                    {
                        "value": "193.233.205.71:8080",
                        "timestamp": "2022-10-24 13:15:36"
                    },
                    {
                        "value": "209.209.112.124:8080",
                        "timestamp": "2022-10-12 23:35:50"
                    },
                    {
                        "value": "87.251.79.110:8080",
                        "timestamp": "2022-10-01 17:30:50"
                    },
                    {
                        "value": "80.87.192.115:80",
                        "timestamp": "2022-05-06 19:14:07"
                    },
                    {
                        "value": "47.251.40.103:80",
                        "timestamp": "2021-12-29 12:25:32"
                    },
                    {
                        "value": "8.209.71.17:80",
                        "timestamp": "2021-11-17 06:11:18"
                    },
                    {
                        "value": "82.146.50.68:80",
                        "timestamp": "2021-08-28 21:51:08"
                    },
                    {
                        "value": "47.254.170.221:80",
                        "timestamp": "2021-08-25 18:20:36"
                    },
                    {
                        "value": "45.142.212.149:80",
                        "timestamp": "2021-08-19 13:41:25"
                    },
                    {
                        "value": "217.12.201.112:80",
                        "timestamp": "2021-08-15 17:52:10"
                    },
                    {
                        "value": "195.2.73.253:80",
                        "timestamp": "2021-08-09 22:36:30"
                    },
                    {
                        "value": "8.208.86.224:80",
                        "timestamp": "2021-08-05 09:26:05"
                    },
                    {
                        "value": "37.0.8.225:80",
                        "timestamp": "2021-07-20 03:11:40"
                    },
                    {
                        "value": "80.249.131.115:80",
                        "timestamp": "2021-07-15 16:16:04"
                    },
                    {
                        "value": "195.133.40.204:80",
                        "timestamp": "2021-07-08 19:46:58"
                    },
                    {
                        "value": "8.211.195.96:80",
                        "timestamp": "2021-07-03 00:20:56"
                    },
                    {
                        "value": "94.103.80.188:80",
                        "timestamp": "2021-06-29 18:56:19"
                    },
                    {
                        "value": "195.2.85.152:80",
                        "timestamp": "2021-06-26 09:20:57"
                    },
                    {
                        "value": "95.213.179.67:80",
                        "timestamp": "2021-06-22 14:46:18"
                    },
                    {
                        "value": "185.66.15.228:80",
                        "timestamp": "2021-06-10 08:21:08"
                    },
                    {
                        "value": "176.111.174.250:80",
                        "timestamp": "2021-05-16 20:10:28"
                    },
                    {
                        "value": "203.159.80.162:80",
                        "timestamp": "2021-05-14 18:55:55"
                    },
                    {
                        "value": "94.103.86.101:80",
                        "timestamp": "2021-05-10 21:10:28"
                    },
                    {
                        "value": "51.195.94.249:80",
                        "timestamp": "2021-05-03 23:46:14"
                    },
                    {
                        "value": "82.148.19.199:80",
                        "timestamp": "2021-04-26 20:39:51"
                    },
                    {
                        "value": "35.203.73.169:80",
                        "timestamp": "2021-04-25 20:25:43"
                    },
                    {
                        "value": "185.215.113.109:80",
                        "timestamp": "2021-04-22 23:55:57"
                    },
                    {
                        "value": "34.94.171.115:80",
                        "timestamp": "2021-04-22 22:15:57"
                    },
                    {
                        "value": "45.93.201.181:80",
                        "timestamp": "2021-04-20 21:30:56"
                    },
                    {
                        "value": "34.106.112.240:80",
                        "timestamp": "2021-04-19 13:10:28"
                    },
                    {
                        "value": "84.38.181.56:80",
                        "timestamp": "2021-04-18 07:25:10"
                    },
                    {
                        "value": "92.62.115.177:80",
                        "timestamp": "2021-04-13 20:16:48"
                    },
                    {
                        "value": "34.91.253.186:80",
                        "timestamp": "2021-04-09 15:00:20"
                    },
                    {
                        "value": "157.90.16.209:80",
                        "timestamp": "2021-04-08 03:05:30"
                    },
                    {
                        "value": "176.111.174.143:80",
                        "timestamp": "2021-04-05 20:10:10"
                    },
                    {
                        "value": "188.68.221.233:80",
                        "timestamp": "2021-04-04 19:40:18"
                    },
                    {
                        "value": "35.228.242.21:80",
                        "timestamp": "2021-03-28 21:26:26"
                    },
                    {
                        "value": "62.113.117.9:80",
                        "timestamp": "2021-03-28 07:08:39"
                    },
                    {
                        "value": "34.90.166.4:80",
                        "timestamp": "2021-03-24 07:13:00"
                    },
                    {
                        "value": "34.65.142.243:80",
                        "timestamp": "2021-03-22 17:28:45"
                    },
                    {
                        "value": "45.141.87.55:80",
                        "timestamp": "2021-03-22 15:05:51"
                    },
                    {
                        "value": "185.18.52.47:80",
                        "timestamp": "2022-07-02 20:39:03"
                    }
                ],
                "domain": [
                    {
                        "value": "asfasfvcxvdbs.com",
                        "timestamp": "2021-08-05 15:20:00"
                    },
                    {
                        "value": "pospvisis.com",
                        "timestamp": "2021-08-03 15:26:27"
                    },
                    {
                        "value": "gurums.space",
                        "timestamp": "2021-06-03 17:16:42"
                    },
                    {
                        "value": "truzen.club",
                        "timestamp": "2021-06-03 17:16:42"
                    },
                    {
                        "value": "truzen.site",
                        "timestamp": "2021-06-03 17:16:42"
                    },
                    {
                        "value": "truzen.space",
                        "timestamp": "2021-06-03 17:16:42"
                    },
                    {
                        "value": "gurums.best",
                        "timestamp": "2021-06-03 17:16:41"
                    },
                    {
                        "value": "gurums.club",
                        "timestamp": "2021-06-03 17:16:41"
                    },
                    {
                        "value": "gurums.link",
                        "timestamp": "2021-06-03 17:16:41"
                    },
                    {
                        "value": "bukkva.site",
                        "timestamp": "2021-06-03 17:16:41"
                    },
                    {
                        "value": "bukkva.best",
                        "timestamp": "2021-05-23 14:17:01"
                    },
                    {
                        "value": "bukkva.online",
                        "timestamp": "2021-05-23 14:17:01"
                    },
                    {
                        "value": "lukkeze.best",
                        "timestamp": "2021-05-23 14:17:01"
                    },
                    {
                        "value": "truzen.best",
                        "timestamp": "2021-05-23 14:17:01"
                    },
                    {
                        "value": "sodaandcoke.top",
                        "timestamp": "2021-04-18 07:35:58"
                    },
                    {
                        "value": "lukkeze.space",
                        "timestamp": "2021-06-03 17:16:42"
                    },
                    {
                        "value": "lukkeze.club",
                        "timestamp": "2021-06-03 17:16:42"
                    }
                ],
                "url": [
                    {
                        "value": "http://pirijinko.ru/6jkiuwf43.exe",
                        "timestamp": "2021-03-18 15:38:27"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-03-21 23:48:21",
    "file_name": "ficker_stealer",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blogs.blackberry.com/en/2022/01/kraken-the-code-on-prometheus",
            "date": "2022-01-19",
            "organization": "Blackberry",
            "author": "The BlackBerry Research & Intelligence Team",
            "title": "Kraken the Code on Prometheus",
            "categories": [
                "Prometheus Backdoor",
                "BlackMatter",
                "Cerber",
                "Cobalt Strike",
                "DCRat",
                "Ficker Stealer",
                "QakBot",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2021/08/threat-thursday-ficker-infostealer-malware",
            "date": "2021-08-12",
            "organization": "Blackberry",
            "author": "BlackBerry Research & Intelligence Team",
            "title": "Threat Thursday: Ficker Infostealer Malware",
            "categories": [
                "Ficker Stealer"
            ]
        },
        {
            "data_url": "https://www.cyberark.com/resources/threat-research-blog/fickerstealer-a-new-rust-player-in-the-market",
            "date": "2021-07-19",
            "organization": "CyberArk",
            "author": "Ben Cohen",
            "title": "FickerStealer: A New Rust Player in the Market",
            "categories": [
                "Ficker Stealer"
            ]
        },
        {
            "data_url": "https://www.binarydefense.com/analysis-of-hancitor-when-boring-begets-beacon",
            "date": "2021-06-17",
            "organization": "Binary Defense",
            "author": "Brandon George",
            "title": "Analysis of Hancitor \u2013 When Boring Begets Beacon",
            "categories": [
                "Cobalt Strike",
                "Ficker Stealer",
                "Hancitor"
            ]
        },
        {
            "data_url": "https://www.spamhaus.com/custom-content/uploads/2021/04/Botnet-update-Q1-2021.pdf",
            "date": "2021-04-22",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Spamhaus Botnet Threat Update Q1 2021",
            "categories": [
                "Emotet",
                "Ficker Stealer",
                "Raccoon"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/fake-microsoft-store-spotify-sites-spread-info-stealing-malware/",
            "date": "2021-04-20",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Fake Microsoft Store, Spotify sites spread info-stealing malware",
            "categories": [
                "Ficker Stealer"
            ]
        },
        {
            "data_url": "https://threatresearch.ext.hp.com/wp-content/uploads/2021/03/HP_Bromium_Threat_Insights_Report_Q4_2020.pdf",
            "date": "2021-03-17",
            "organization": "HP",
            "author": "HP Bromium",
            "title": "Threat Insights Report Q4-2020",
            "categories": [
                "Agent Tesla",
                "BitRAT",
                "ComodoSec",
                "Dridex",
                "Emotet",
                "Ficker Stealer",
                "Formbook",
                "Zloader"
            ]
        },
        {
            "data_url": "https://medium.com/csis-techblog/gcleaner-garbage-provider-since-2019-2708e7c87a8a",
            "date": "2021-01-18",
            "organization": "Medium csis-techblog",
            "author": "Beno\u00eet Ancel",
            "title": "GCleaner \u2014 Garbage Provider Since 2019",
            "categories": [
                "Amadey",
                "Ficker Stealer",
                "Raccoon",
                "RedLine Stealer",
                "SmokeLoader",
                "STOP"
            ]
        },
        {
            "data_url": "https://twitter.com/3xp0rtblog/status/1321209656774135810",
            "date": "2020-10-27",
            "organization": "Twitter (@3xp0rtblog)",
            "author": "3xp0rt",
            "title": "Tweet on Ficker Stealer",
            "categories": [
                "Ficker Stealer"
            ]
        }
    ],
    "mitre": []
};