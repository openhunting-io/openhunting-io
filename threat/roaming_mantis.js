var threatdata = {
    "name": "Roaming Mantis",
    "alias": "Roaming Mantis, MoqHao, XLoader, Wroba",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Miner",
    "modified": "2023-02-15",
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
    "analysis": null
};