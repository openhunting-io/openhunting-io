var threatdata = {
    "name": "Roaming Mantis",
    "alias": "Roaming Mantis, MoqHao, XLoader, Wroba",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Miner",
    "modified": "2023-03-31",
    "all_data": {
        "tool": "Roaming Mantis",
        "names": [
            {
                "name": "Roaming Mantis"
            },
            {
                "name": "MoqHao"
            },
            {
                "name": "XLoader"
            },
            {
                "name": "Wroba"
            }
        ],
        "description": "(Kaspersky) The Roaming Mantis mobile banking trojan is roaming further afield than it ever has before. Recent analysis shows that the malware has rapidly evolved just in the past month. It\u2019s now targeting Europe and the Middle East in addition to Asian countries. According to researchers, it\u2019s following the cyber-zeitgeist by expanding its capabilities to include cryptomining (and iOS phishing).\n\nRoaming Mantis is a mostly-mobile malware which this year has been spreading via DNS hijacking. Potential victims are typically redirected to a malicious webpage that distributes a trojanized application that pretends to be either Facebook or Chrome. Once installed manually by users, a trojan banker will execute.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Miner"
        ],
        "information": [
            "https://threatpost.com/roaming-mantis-swarms-globally-spawning-ios-phishing-cryptomining/132149/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/xloader-android-spyware-and-banking-trojan-distributed-via-dns-spoofing/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/a-look-into-the-connection-between-xloader-and-fakespy-and-their-possible-ties-with-the-yanbian-gang/",
            "https://research.checkpoint.com/2021/top-prevalent-malware-with-a-thousand-campaigns-migrates-to-macos/",
            "https://blog.malwarebytes.com/mac/2021/07/osx-xloader-hides-little-except-its-main-purpose-what-we-learned-in-the-installation-process/",
            "https://securelist.com/roaming-mantis-reaches-europe/105596/",
            "https://securelist.com/roaming-mantis-dns-changer-in-malicious-mobile-app/108464/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0318/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.roaming_mantis",
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.moqhao",
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.xloader"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Roaming%20Mantis"
        ],
        "uuid": "aa243282-d977-4d61-81a2-b81c17ac47f3",
        "last-card-change": "2023-02-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Roaming Mantis",
            "malware_alias": null,
            "malware": "apk.roaming_mantis",
            "last_update": "2022-07-18 09:47:37",
            "tags": [
                "RoamingMantis"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "udsuc.com",
                        "timestamp": "2022-07-18 09:47:37"
                    },
                    {
                        "value": "mrheu.com",
                        "timestamp": "2022-07-18 09:47:37"
                    },
                    {
                        "value": "xpddg.com",
                        "timestamp": "2022-07-18 09:47:34"
                    },
                    {
                        "value": "220104bei.top",
                        "timestamp": "2022-02-12 07:57:47"
                    },
                    {
                        "value": "220104.top",
                        "timestamp": "2022-02-12 07:57:47"
                    },
                    {
                        "value": "220105bei.top",
                        "timestamp": "2022-02-12 07:57:47"
                    },
                    {
                        "value": "220105.top",
                        "timestamp": "2022-02-12 07:57:47"
                    },
                    {
                        "value": "210302bei.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210302.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210512eng.xyz",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210815bei.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210815.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210902bei.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210902.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210913bei.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210913.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "211103bei.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "211103.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "220103beip.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "220103.top",
                        "timestamp": "2022-02-12 07:57:46"
                    }
                ],
                "ip:port": [
                    {
                        "value": "91.204.227.84:80",
                        "timestamp": "2022-07-18 09:45:36"
                    },
                    {
                        "value": "192.51.188.106:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "192.51.188.111:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "192.51.188.14:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "91.204.227.79:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "91.204.227.80:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "91.204.227.81:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "91.204.227.82:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "91.204.227.83:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "103.80.134.51:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "103.80.134.52:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "103.80.134.53:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "103.80.134.54:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "103.80.134.55:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "103.80.134.58:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "115.91.26.2:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "192.51.188.101:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "192.51.188.103:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "103.80.134.26:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.27:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.29:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.30:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.31:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.33:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.34:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.37:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.38:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "172.81.131.12:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "172.81.131.14:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "172.81.131.10:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "172.81.131.11:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "172.81.131.13:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "103.80.134.41:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "103.80.134.40:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "103.80.134.42:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "91.204.227.21:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "91.204.227.22:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "91.204.227.23:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "91.204.227.24:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "91.204.227.25:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "91.204.227.26:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "91.204.227.27:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "91.204.227.28:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "192.51.188.145:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "192.51.188.146:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "27.124.36.32:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "27.124.36.34:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "27.124.36.52:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "27.124.39.241:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "27.124.39.242:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "27.124.39.243:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "91.204.227.19:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "91.204.227.20:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "146.0.74.202:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "146.0.74.203:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "146.0.74.205:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "146.0.74.206:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "146.0.74.228:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "192.51.188.107:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "192.51.188.108:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "192.51.188.109:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "192.51.188.142:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "142.0.136.50:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "142.0.136.52:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "142.4.97.105:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "142.4.97.106:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "142.4.97.107:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "142.4.97.108:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "142.4.97.109:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "146.0.74.157:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "146.0.74.197:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "146.0.74.199:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "134.119.193.106:80",
                        "timestamp": "2022-07-18 09:45:27"
                    },
                    {
                        "value": "134.119.193.108:80",
                        "timestamp": "2022-07-18 09:45:27"
                    },
                    {
                        "value": "134.119.193.109:80",
                        "timestamp": "2022-07-18 09:45:27"
                    },
                    {
                        "value": "134.119.193.110:80",
                        "timestamp": "2022-07-18 09:45:27"
                    },
                    {
                        "value": "134.119.205.18:80",
                        "timestamp": "2022-07-18 09:45:27"
                    },
                    {
                        "value": "134.119.205.21:80",
                        "timestamp": "2022-07-18 09:45:27"
                    },
                    {
                        "value": "134.119.205.22:80",
                        "timestamp": "2022-07-18 09:45:27"
                    },
                    {
                        "value": "142.0.136.49:80",
                        "timestamp": "2022-07-18 09:45:27"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-07-18 09:47:37",
    "mitre": [],
    "file_name": "roaming_mantis",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/moqhao-masters-new-tricks-1031484",
            "date": "2023-03-31",
            "organization": "Telekom",
            "author": "TR4xx",
            "title": "Moqhao masters new tricks",
            "categories": [
                "MoqHao"
            ]
        },
        {
            "data_url": "https://www.team-cymru.com/post/moqhao-part-3-recent-global-targeting-trends",
            "date": "2023-03-16",
            "organization": "Team Cymru",
            "author": "S2 Research Team",
            "title": "MoqHao Part 3: Recent Global Targeting Trends",
            "categories": [
                "MoqHao"
            ]
        },
        {
            "data_url": "https://securelist.com/roaming-mantis-dns-changer-in-malicious-mobile-app/108464/",
            "date": "2023-01-19",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Roaming Mantis implements new DNS changer in its malicious mobile app in 2022",
            "categories": [
                "MoqHao"
            ]
        },
        {
            "data_url": "https://www.xanhacks.xyz/p/moqhao-malware-analysis",
            "date": "2022-08-11",
            "organization": "xanhacks' infosec blog",
            "author": "xanhacks",
            "title": "MoqHao Android malware analysis and phishing campaign",
            "categories": [
                "MoqHao"
            ]
        },
        {
            "data_url": "https://blog.sekoia.io/ongoing-roaming-mantis-smishing-campaign-targeting-france/",
            "date": "2022-07-18",
            "organization": "Sekoia",
            "author": "Threat & Detection Research Team",
            "title": "Ongoing Roaming Mantis smishing campaign targeting France",
            "categories": [
                "MoqHao"
            ]
        },
        {
            "data_url": "https://team-cymru.com/blog/2022/04/07/moqhao-part-2-continued-european-expansion/",
            "date": "2022-04-07",
            "organization": "Team Cymru",
            "author": "Josh Hopkins",
            "title": "MoqHao Part 2: Continued European Expansion",
            "categories": [
                "MoqHao"
            ]
        },
        {
            "data_url": "https://securelist.com/roaming-mantis-reaches-europe/105596/",
            "date": "2022-02-07",
            "organization": "Kaspersky Labs",
            "author": "Suguru Ishimaru",
            "title": "Roaming Mantis reaches Europe",
            "categories": [
                "Roaming Mantis",
                "Wroba"
            ]
        },
        {
            "data_url": "https://team-cymru.com/blog/2021/08/11/moqhao-part-1-5-high-level-trends-of-recent-campaigns-targeting-japan/",
            "date": "2021-08-11",
            "organization": "Team Cymru",
            "author": "Josh Hopkins",
            "title": "MoqHao Part 1.5: High-Level Trends of Recent Campaigns Targeting Japan",
            "categories": [
                "MoqHao"
            ]
        },
        {
            "data_url": "https://cryptax.medium.com/a-native-packer-for-android-moqhao-6362a8412fe1",
            "date": "2021-05-18",
            "organization": "Medium (Cryptax)",
            "author": "Axelle Apvrille",
            "title": "A native packer for Android/MoqHao",
            "categories": [
                "MoqHao"
            ]
        },
        {
            "data_url": "https://www.kashifali.ca/2021/05/05/roaming-mantis-amplifies-smishing-campaign-with-os-specific-android-malware/",
            "date": "2021-05-05",
            "organization": "Kashif Ali  Surfeit and Blas\u00e9 Security",
            "author": "Kashif Ali",
            "title": "Roaming Mantis Amplifies Smishing Campaign with OS-Specific Android Malware",
            "categories": [
                "MoqHao",
                "Roaming Mantis"
            ]
        },
        {
            "data_url": "https://team-cymru.com/blog/2021/01/20/moqhao-part-1-identifying-phishing-infrastructure/",
            "date": "2021-01-20",
            "organization": "Team Cymru",
            "author": "Andy Kraus",
            "title": "MoqHao Part 1: Identifying Phishing Infrastructure",
            "categories": [
                "MoqHao"
            ]
        },
        {
            "data_url": "https://www.avira.com/en/blog/the-android-banking-trojan-wroba-shifts-attack-from-south-korea-to-target-users-in-japan",
            "date": "2020-11-11",
            "organization": "Avira",
            "author": "Avira Protection Labs",
            "title": "Wroba Android banking trojan targets Japan",
            "categories": [
                "Wroba"
            ]
        },
        {
            "data_url": "https://medium.com/csis-techblog/the-roamingmantis-groups-expansion-to-european-apple-accounts-and-android-devices-e6381723c681",
            "date": "2020-06-25",
            "organization": "Medium CSIS Techblog",
            "author": "Aleksejs Kuprins",
            "title": "The RoamingMantis Group\u2019s Expansion to European Apple Accounts and Android Devices",
            "categories": [
                "FakeSpy",
                "FunkyBot",
                "MoqHao"
            ]
        },
        {
            "data_url": "https://securelist.com/roaming-mantis-part-v/96250/",
            "date": "2020-02-27",
            "organization": "Kaspersky Labs",
            "author": "Suguru Ishimaru",
            "title": "Roaming Mantis, part V: Distributed in 2019 using SMiShing and enhanced anti-researcher techniques",
            "categories": [
                "FunkyBot",
                "MoqHao",
                "Roaming Mantis"
            ]
        },
        {
            "data_url": "https://jsac.jpcert.or.jp/archive/2020/pdf/JSAC2020_4_ogawa-niseki_en.pdf",
            "date": "2020-01-17",
            "organization": "",
            "author": "Hiroaki Ogawa",
            "title": "100 more behind cockroaches?",
            "categories": [
                "MoqHao",
                "Emotet",
                "Predator The Thief"
            ]
        },
        {
            "data_url": "https://hitcon.org/2019/CMT/slide-files/d2_s1_r1.pdf",
            "date": "2019",
            "organization": "Kaspersky Labs",
            "author": "Suguru Ishimaru",
            "title": "Roaming Mantis: an Anatomy of a DNS Hijacking Campaign",
            "categories": [
                "MoqHao",
                "Roaming Mantis"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/a-look-into-the-connection-between-xloader-and-fakespy-and-their-possible-ties-with-the-yanbian-gang/",
            "date": "2018-11-26",
            "organization": "Trend Micro",
            "author": "Lorin Wu",
            "title": "A Look into the Connection Between XLoader and FakeSpy, and Their Possible Ties With the Yanbian Gang",
            "categories": [
                "FakeSpy",
                "MoqHao"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/18/k/a-look-into-the-connection-between-xloader-and-fakespy-and-their-possible-ties-with-the-yanbian-gang.html",
            "date": "2018-11-26",
            "organization": "Trend Micro",
            "author": "Lorin Wu",
            "title": "Examining XLoader, FakeSpy, and the Yanbian Gang",
            "categories": [
                "FakeSpy",
                "MoqHao",
                "Yanbian Gang"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/roaming-mantis-group-testing-coinhive-miner-redirects-on-iphones/",
            "date": "2018-10-01",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Roaming Mantis Group Testing Coinhive Miner Redirects on iPhones",
            "categories": [
                "Roaming Mantis"
            ]
        },
        {
            "data_url": "https://securelist.com/roaming-mantis-dabbles-in-mining-and-phishing-multilingually/85607/",
            "date": "2018-05-18",
            "organization": "Kaspersky Labs",
            "author": "Suguru Ishimaru",
            "title": "Roaming Mantis dabbles in mining and phishing multilingually",
            "categories": [
                "Roaming Mantis"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/18/d/xloader-android-spyware-and-banking-trojan-distributed-via-dns-spoofing.html",
            "date": "2018-04-20",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "XLoader Android Spyware and Banking Trojan Distributed via DNS Spoofing",
            "categories": [
                "MoqHao",
                "Yanbian Gang"
            ]
        },
        {
            "data_url": "https://securelist.com/roaming-mantis-uses-dns-hijacking-to-infect-android-smartphones/85178/",
            "date": "2018-04-16",
            "organization": "Kaspersky Labs",
            "author": "Suguru Ishimaru",
            "title": "Roaming Mantis uses DNS hijacking to infect Android smartphones",
            "categories": [
                "Roaming Mantis"
            ]
        }
    ]
};