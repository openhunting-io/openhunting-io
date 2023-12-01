var threatdata = {
    "name": "Crimson RAT",
    "alias": "Crimson RAT, Crimson, SEEDOOR, Scarimson, MSIL, MSIL/Crimson",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-10-12",
    "all_data": {
        "tool": "Crimson RAT",
        "names": [
            {
                "name": "Crimson RAT"
            },
            {
                "name": "Crimson"
            },
            {
                "name": "SEEDOOR"
            },
            {
                "name": "Scarimson"
            },
            {
                "name": "MSIL"
            },
            {
                "name": "MSIL/Crimson"
            }
        ],
        "description": "Crimson is malware used as part of a campaign known as Operation Transparent Tribe that targeted Indian diplomatic and military victims.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.proofpoint.com/sites/default/files/proofpoint-operation-transparent-tribe-threat-insight-en.pdf",
            "https://s.tencent.com/research/report/669.html",
            "https://www.amnesty.org/download/Documents/ASA3383662018ENGLISH.PDF"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0115/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.crimson"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:CrimsonRAT"
        ],
        "uuid": "12f48fde-94b3-4bae-a6cd-90b31e77c31f",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Crimson RAT",
            "malware_alias": "SEEDOOR,Scarimson",
            "malware": "win.crimson",
            "last_update": "2023-11-29 09:24:28",
            "tags": [
                "Transparenttribe",
                "TransparentTribe",
                "CrimsonRAT",
                "APT36",
                "RAT",
                "APT",
                "crimson",
                "Crimson RAT",
                "Crimson"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "66.235.175.91:1051",
                        "timestamp": "2023-11-29 09:24:28"
                    },
                    {
                        "value": "66.235.175.91:23001",
                        "timestamp": "2023-11-29 09:24:27"
                    },
                    {
                        "value": "164.68.112.101:14684",
                        "timestamp": "2023-11-29 09:24:26"
                    },
                    {
                        "value": "38.242.211.87:8143",
                        "timestamp": "2023-11-29 09:24:26"
                    },
                    {
                        "value": "45.14.194.253:10243",
                        "timestamp": "2023-11-29 09:24:26"
                    },
                    {
                        "value": "84.46.251.145:901",
                        "timestamp": "2023-11-29 09:24:25"
                    },
                    {
                        "value": "84.46.251.145:1717",
                        "timestamp": "2023-11-29 09:24:25"
                    },
                    {
                        "value": "185.137.122.104:8484",
                        "timestamp": "2023-11-29 09:24:24"
                    },
                    {
                        "value": "162.245.190.24:10108",
                        "timestamp": "2023-09-21 12:14:16"
                    },
                    {
                        "value": "162.245.190.24:16197",
                        "timestamp": "2023-09-21 12:14:16"
                    },
                    {
                        "value": "162.245.190.24:18968",
                        "timestamp": "2023-09-21 12:14:16"
                    },
                    {
                        "value": "162.245.190.24:20103",
                        "timestamp": "2023-09-21 12:14:15"
                    },
                    {
                        "value": "162.245.190.24:26784",
                        "timestamp": "2023-09-21 12:14:15"
                    },
                    {
                        "value": "64.188.25.43:6816",
                        "timestamp": "2023-09-15 06:15:35"
                    },
                    {
                        "value": "64.188.19.199:8158",
                        "timestamp": "2023-08-10 17:21:49"
                    },
                    {
                        "value": "104.168.48.210:25821",
                        "timestamp": "2023-07-18 12:19:26"
                    },
                    {
                        "value": "104.168.48.210:26442",
                        "timestamp": "2023-07-18 12:19:26"
                    },
                    {
                        "value": "185.187.235.186:8149",
                        "timestamp": "2023-07-07 08:36:26"
                    },
                    {
                        "value": "172.245.80.12:8149",
                        "timestamp": "2023-07-07 08:36:26"
                    },
                    {
                        "value": "66.154.103.101:9108",
                        "timestamp": "2023-06-19 12:07:56"
                    },
                    {
                        "value": "104.168.48.210:18197",
                        "timestamp": "2023-07-18 12:19:26"
                    },
                    {
                        "value": "104.168.48.210:7516",
                        "timestamp": "2023-07-18 12:19:26"
                    },
                    {
                        "value": "104.168.48.210:12267",
                        "timestamp": "2023-07-18 12:19:26"
                    },
                    {
                        "value": "194.61.120.134:999",
                        "timestamp": "2023-03-09 06:23:18"
                    },
                    {
                        "value": "173.249.0.199:14882",
                        "timestamp": "2023-03-09 06:23:18"
                    },
                    {
                        "value": "161.97.139.248:8143",
                        "timestamp": "2023-03-09 06:23:18"
                    },
                    {
                        "value": "62.171.130.47:2201",
                        "timestamp": "2023-03-09 06:23:18"
                    },
                    {
                        "value": "151.106.19.20:12197",
                        "timestamp": "2023-02-07 12:15:09"
                    },
                    {
                        "value": "151.106.19.20:16867",
                        "timestamp": "2023-02-07 12:15:09"
                    },
                    {
                        "value": "151.106.19.20:24784",
                        "timestamp": "2023-02-07 12:15:09"
                    },
                    {
                        "value": "151.106.19.20:8248",
                        "timestamp": "2023-02-07 12:15:09"
                    },
                    {
                        "value": "151.106.19.20:23123",
                        "timestamp": "2023-02-07 12:15:09"
                    },
                    {
                        "value": "185.174.102.54:2121",
                        "timestamp": "2023-02-02 04:04:50"
                    },
                    {
                        "value": "154.127.54.168:10019",
                        "timestamp": "2023-02-02 04:02:29"
                    },
                    {
                        "value": "161.97.139.248:8143",
                        "timestamp": "2023-02-02 04:02:29"
                    },
                    {
                        "value": "161.97.176.42:12184",
                        "timestamp": "2023-02-02 04:02:29"
                    },
                    {
                        "value": "161.97.176.52:18584",
                        "timestamp": "2023-02-02 04:02:29"
                    },
                    {
                        "value": "91.229.77.1:999",
                        "timestamp": "2023-02-02 04:02:28"
                    },
                    {
                        "value": "164.68.96.32:12861",
                        "timestamp": "2023-01-19 04:45:39"
                    },
                    {
                        "value": "198.23.145.12:10480",
                        "timestamp": "2023-01-19 04:45:39"
                    },
                    {
                        "value": "161.97.139.248:12262",
                        "timestamp": "2023-01-19 04:45:39"
                    },
                    {
                        "value": "119.157.27.213:16780",
                        "timestamp": "2023-01-19 04:45:39"
                    },
                    {
                        "value": "107.172.76.170:11408",
                        "timestamp": "2023-01-19 04:45:39"
                    },
                    {
                        "value": "62.171.135.174:8589",
                        "timestamp": "2023-02-02 04:02:28"
                    },
                    {
                        "value": "144.91.72.22:8484",
                        "timestamp": "2023-02-02 04:02:29"
                    },
                    {
                        "value": "178.238.235.88:12536",
                        "timestamp": "2023-01-19 04:45:39"
                    },
                    {
                        "value": "198.23.144.126:10480",
                        "timestamp": "2023-01-19 04:45:39"
                    },
                    {
                        "value": "161.97.176.52:12468",
                        "timestamp": "2023-01-19 04:45:39"
                    },
                    {
                        "value": "173.249.50.243:22464",
                        "timestamp": "2023-01-19 04:45:39"
                    },
                    {
                        "value": "173.249.0.199:14882",
                        "timestamp": "2022-12-21 16:26:26"
                    },
                    {
                        "value": "23.226.132.105:6959",
                        "timestamp": "2022-09-28 22:50:25"
                    },
                    {
                        "value": "194.163.129.89:14427",
                        "timestamp": "2022-03-30 09:35:28"
                    },
                    {
                        "value": "5.189.170.84:3901",
                        "timestamp": "2022-03-30 09:35:28"
                    },
                    {
                        "value": "173.249.50.243:9248",
                        "timestamp": "2022-03-28 06:49:30"
                    },
                    {
                        "value": "185.197.249.247:8543",
                        "timestamp": "2022-03-28 06:49:29"
                    },
                    {
                        "value": "168.119.98.243:12184",
                        "timestamp": "2022-03-28 06:49:29"
                    },
                    {
                        "value": "160.20.147.56:6582",
                        "timestamp": "2022-03-28 06:49:29"
                    },
                    {
                        "value": "79.143.177.122:8682",
                        "timestamp": "2022-03-28 06:49:29"
                    },
                    {
                        "value": "185.136.169.214:8164",
                        "timestamp": "2022-03-28 06:49:29"
                    },
                    {
                        "value": "75.119.133.15:4401",
                        "timestamp": "2022-03-28 06:49:29"
                    },
                    {
                        "value": "62.171.130.47:2201",
                        "timestamp": "2023-02-02 04:02:28"
                    },
                    {
                        "value": "198.23.213.22:7776",
                        "timestamp": "2022-03-28 06:49:29"
                    },
                    {
                        "value": "173.249.0.199:12168",
                        "timestamp": "2023-02-02 04:02:29"
                    },
                    {
                        "value": "161.97.176.52:10015",
                        "timestamp": "2022-03-28 06:49:28"
                    },
                    {
                        "value": "144.91.125.70:8489",
                        "timestamp": "2022-03-28 06:49:28"
                    },
                    {
                        "value": "161.97.176.42:10019",
                        "timestamp": "2022-03-28 06:49:28"
                    },
                    {
                        "value": "173.249.50.34:12182",
                        "timestamp": "2023-02-02 04:02:29"
                    },
                    {
                        "value": "5.189.176.185:12262",
                        "timestamp": "2023-02-02 04:02:28"
                    },
                    {
                        "value": "194.9.178.85:9109",
                        "timestamp": "2022-03-28 06:49:28"
                    },
                    {
                        "value": "164.68.96.32:8543",
                        "timestamp": "2023-02-02 04:02:29"
                    },
                    {
                        "value": "194.163.139.252:4698",
                        "timestamp": "2022-03-28 06:49:27"
                    },
                    {
                        "value": "168.119.111.43:12184",
                        "timestamp": "2022-03-28 06:49:27"
                    },
                    {
                        "value": "5.189.170.4:8843",
                        "timestamp": "2022-03-28 06:49:27"
                    },
                    {
                        "value": "5.189.183.63:16568",
                        "timestamp": "2022-03-28 06:49:27"
                    },
                    {
                        "value": "198.23.213.44:7776",
                        "timestamp": "2022-03-28 06:49:27"
                    },
                    {
                        "value": "96.47.234.102:5898",
                        "timestamp": "2022-01-28 10:01:24"
                    },
                    {
                        "value": "185.161.208.57:1912",
                        "timestamp": "2021-09-24 15:50:35"
                    },
                    {
                        "value": "191.101.172.44:6522",
                        "timestamp": "2021-07-30 19:00:56"
                    },
                    {
                        "value": "79.143.181.178:8861",
                        "timestamp": "2021-07-18 07:25:20"
                    },
                    {
                        "value": "167.86.89.53:1443",
                        "timestamp": "2021-07-16 22:10:57"
                    },
                    {
                        "value": "167.86.105.43:6588",
                        "timestamp": "2021-07-08 06:26:01"
                    },
                    {
                        "value": "173.249.14.119:3285",
                        "timestamp": "2021-06-23 16:01:20"
                    },
                    {
                        "value": "198.23.210.211:4898",
                        "timestamp": "2021-06-22 13:56:25"
                    },
                    {
                        "value": "144.91.79.40:12427",
                        "timestamp": "2021-06-16 19:16:08"
                    },
                    {
                        "value": "167.86.71.146:3482",
                        "timestamp": "2021-06-13 10:20:18"
                    },
                    {
                        "value": "107.175.1.103:3268",
                        "timestamp": "2021-06-01 07:06:52"
                    },
                    {
                        "value": "134.119.181.142:6672",
                        "timestamp": "2021-05-30 11:20:28"
                    },
                    {
                        "value": "173.212.192.229:3364",
                        "timestamp": "2021-05-17 16:36:16"
                    },
                    {
                        "value": "173.249.50.57:2642",
                        "timestamp": "2021-05-17 09:50:19"
                    },
                    {
                        "value": "185.136.169.155:8761",
                        "timestamp": "2021-04-09 08:15:18"
                    },
                    {
                        "value": "151.106.14.125:6818",
                        "timestamp": "2021-03-25 00:53:14"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "ccc9494310731383e0af5074278d2d8c",
                        "timestamp": "2023-08-10 17:20:48"
                    },
                    {
                        "value": "5323834444ae9db2d971ac08cdf579e7",
                        "timestamp": "2023-08-10 17:20:48"
                    },
                    {
                        "value": "bf86527f04d43718f77d8670e8996e90",
                        "timestamp": "2023-08-10 17:20:47"
                    },
                    {
                        "value": "84b31b28eb89df230f06ca0e58c9cc56",
                        "timestamp": "2023-07-21 08:54:32"
                    },
                    {
                        "value": "d813f372a816805a130091933398a77a",
                        "timestamp": "2023-07-21 08:54:32"
                    },
                    {
                        "value": "5615534b6c73faaea68c94010fbdde7f",
                        "timestamp": "2023-07-21 08:54:32"
                    },
                    {
                        "value": "34d580fb24ea1747b822f02ad3bd2d87",
                        "timestamp": "2023-07-18 12:18:49"
                    },
                    {
                        "value": "2df08629cd344c1a724b5fd243a748f3",
                        "timestamp": "2023-07-18 12:18:49"
                    },
                    {
                        "value": "9ee59ab1fa03dfcb45cc705bc900c657",
                        "timestamp": "2023-07-18 12:18:49"
                    },
                    {
                        "value": "de3b62fbce59c954ca9aa690cf53ca88",
                        "timestamp": "2023-07-18 12:18:49"
                    },
                    {
                        "value": "44c494a30f83f92295c8351b86a2507a",
                        "timestamp": "2023-07-07 08:33:40"
                    },
                    {
                        "value": "fb1d84ef4d34e2f2f1e7fb3966123082",
                        "timestamp": "2023-07-07 08:33:40"
                    },
                    {
                        "value": "b63fd1d2717071eca5b95db0bda74f26",
                        "timestamp": "2023-07-07 08:33:40"
                    },
                    {
                        "value": "d72f7a7742ef69a7148981383e094ee3",
                        "timestamp": "2023-07-07 08:33:40"
                    },
                    {
                        "value": "d67c9c9d0e94f04cfe67637922b61e05",
                        "timestamp": "2023-07-07 08:33:40"
                    },
                    {
                        "value": "c9824b1a3b3f9bb1001b3bb174b44b7b",
                        "timestamp": "2023-07-07 08:33:40"
                    },
                    {
                        "value": "f1d0687821736fdfba7975d9f570f3ff",
                        "timestamp": "2023-07-07 08:33:40"
                    },
                    {
                        "value": "9ca04de899947dc06c5f0bbe677b75d8",
                        "timestamp": "2023-07-07 08:33:40"
                    },
                    {
                        "value": "d155576b68e87a50b84fe5cf82dfc73a",
                        "timestamp": "2023-07-07 08:33:40"
                    },
                    {
                        "value": "c7026aa76880ff7e889deaf6e2b416b1",
                        "timestamp": "2023-07-07 08:33:40"
                    },
                    {
                        "value": "827a3da12d83683d326d81c058c656ac",
                        "timestamp": "2023-07-07 08:33:40"
                    },
                    {
                        "value": "74f805b67565709940e952b40c8ce37c",
                        "timestamp": "2023-07-07 08:33:40"
                    },
                    {
                        "value": "66d65a321d7ad9f0d33c70e888e589ff",
                        "timestamp": "2023-06-19 12:07:32"
                    },
                    {
                        "value": "c93cb6bb245e90c1b7df9f3c55734887",
                        "timestamp": "2023-06-19 12:07:32"
                    },
                    {
                        "value": "8cc34c5f5b6ae6af649a8525ab662cbb",
                        "timestamp": "2023-06-19 12:07:32"
                    },
                    {
                        "value": "d37c72170a3841febb531486d9b4e759",
                        "timestamp": "2023-05-09 08:24:30"
                    },
                    {
                        "value": "0ddafe4ed954f73dbf1d61917538fd29",
                        "timestamp": "2023-05-09 08:24:30"
                    },
                    {
                        "value": "0030b0927b3a4cbfd30a7ffbc5956c89",
                        "timestamp": "2023-04-28 14:05:06"
                    },
                    {
                        "value": "d282e137db2d55ae8fd3a299136f277e",
                        "timestamp": "2023-04-28 14:04:45"
                    },
                    {
                        "value": "7e7994552e40d6bb4d9338d9c4527955",
                        "timestamp": "2023-04-28 14:03:46"
                    },
                    {
                        "value": "41dab718879388d28d072fb967e51347",
                        "timestamp": "2023-04-11 18:43:23"
                    },
                    {
                        "value": "b229f761519ad3d86e7ec8cd9737fde4",
                        "timestamp": "2023-04-11 18:42:57"
                    },
                    {
                        "value": "06f93224254a3b0659aa8cf7c7ac718f",
                        "timestamp": "2023-04-11 18:42:30"
                    },
                    {
                        "value": "85e9bdb40322b52c1faa450722276a86",
                        "timestamp": "2023-03-29 05:52:35"
                    },
                    {
                        "value": "04b83ed773a7b82a81db79be03cee68d",
                        "timestamp": "2023-03-29 05:52:08"
                    },
                    {
                        "value": "aac869f05f219ae6508ad279a97120d1",
                        "timestamp": "2023-03-10 09:09:28"
                    },
                    {
                        "value": "8a1f4a512fe9edbcc62ba4b1c3e08f0a",
                        "timestamp": "2023-03-10 09:09:28"
                    },
                    {
                        "value": "0498c32f2609bf06d28289a09e413aa7",
                        "timestamp": "2023-03-10 09:09:28"
                    },
                    {
                        "value": "ed50add120e6acbd68d9940c4037ef9d",
                        "timestamp": "2021-03-09 11:20:48"
                    }
                ],
                "domain": [
                    {
                        "value": "richa-sharma.ddnsa.net",
                        "timestamp": "2023-05-09 08:25:09"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "b13b52739cf3f5e95573abf87184c59f5ee29a060c900c3aea1fc19c64b09199",
                        "timestamp": "2022-03-30 09:37:46"
                    },
                    {
                        "value": "67ad0b41255eca1bba7b0dc6c7bd5bd1d5d74640f65d7a290a8d18fba1372918",
                        "timestamp": "2022-03-30 09:37:42"
                    },
                    {
                        "value": "45ed0b23cc90fbe8eade520bdc230e4103435c6e0d64f779b12da90bc1f1596f",
                        "timestamp": "2022-03-30 09:37:39"
                    },
                    {
                        "value": "d2113b820db894f08c47aa905b6f643b1e6f38cce7adf7bf7b14d8308c3eaf6e",
                        "timestamp": "2022-03-30 09:37:36"
                    },
                    {
                        "value": "b3bc8f9353558b7a07293e13dddb104ed6c3f9e5e9ce2d4b7fd8f47b0e3cc3a5",
                        "timestamp": "2022-03-30 09:37:33"
                    },
                    {
                        "value": "aadaa8d23cc2e49f9f3624038566c3ebb38f5d955b031d47b79dcfc94864ce40",
                        "timestamp": "2022-03-30 09:37:29"
                    },
                    {
                        "value": "5911f5bd310e943774a0ca7ceb308d4e03c33829bcc02a5e7bdedfeb8c18f515",
                        "timestamp": "2022-03-30 09:37:26"
                    },
                    {
                        "value": "4d14df9d5fa637dae03b08dda8fe6de909326d2a1d57221d73ab3938dfe69498",
                        "timestamp": "2022-03-30 09:37:21"
                    },
                    {
                        "value": "4a87ee5ecd46a3fab735656b77d0e4fea8d3d72f3a6e0fb791999a2dfe8d59d2",
                        "timestamp": "2022-03-30 09:37:17"
                    },
                    {
                        "value": "2bb2a640376a52b1dc9c2b7560a027f07829ae9c5398506dc506063a3e334c3a",
                        "timestamp": "2022-03-30 09:37:13"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-29 09:24:28",
    "file_name": "crimson_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.cluster25.duskrise.com/2023/10/12/cve-2023-38831-russian-attack",
            "date": "2023-10-12",
            "organization": "Cluster25",
            "author": "Cluster25 Threat Intel Team",
            "title": "CVE-2023-38831 Exploited by Pro-Russia Hacking Groups in RU-UA Conflict Zone for Credential Harvesting Operations",
            "categories": [
                "Agent Tesla",
                "Crimson RAT",
                "Nanocore RAT",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.seqrite.com/blog/transparent-tribe-apt-actively-lures-indian-army-amidst-increased-targeting-of-educational-institutions",
            "date": "2023-05-02",
            "organization": "Seqrite",
            "author": "Sathwik Ram Prakki",
            "title": "Transparent Tribe APT actively lures Indian Army amidst increased targeting of Educational Institutions",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/07/transparent-tribe-targets-education.html",
            "date": "2022-07-13",
            "organization": "Cisco",
            "author": "Nick Biasini",
            "title": "Transparent Tribe begins targeting education sector in latest campaign",
            "categories": [
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://labs.k7computing.com/index.php/transparent-tribe-targets-educational-institution/",
            "date": "2022-05-11",
            "organization": "K7 Security",
            "author": "Saikumaravel",
            "title": "Transparent Tribe Targets Educational Institution",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/hackers-use-modified-mfa-tool-against-indian-govt-employees/",
            "date": "2022-03-29",
            "organization": "Bleeping Computer",
            "author": "Bill Toulas",
            "title": "Hackers use modified MFA tool against Indian govt employees",
            "categories": [
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/03/transparent-tribe-new-campaign.html?m=1",
            "date": "2022-03-29",
            "organization": "Cisco Talos",
            "author": "Asheer Malhotra",
            "title": "Transparent Tribe campaign uses new bespoke malware to target Indian government officials",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://twitter.com/teamcymru_S2/status/1501955802025836546",
            "date": "2022-03-10",
            "organization": "Twitter (@teamcymru_S2)",
            "author": "Team Cymru",
            "title": "Tweet on Crimson RAT infrastructure used by APT36",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://twitter.com/katechondic/status/1502206599166939137",
            "date": "2022-03-10",
            "organization": "Twitter (@Katechondic)",
            "author": "Katechondic",
            "title": "Tweet on additional computer names \"desktop-g1i8n3f\" & \"desktop-j6llo2k\", seen with Crimson RAT C2 infrastructure used by APT36",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/22/a/investigating-apt36-or-earth-karkaddans-attack-chain-and-malware.html",
            "date": "2022-01-24",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "Investigating APT36 or Earth Karkaddan\u2019s Attack Chain and Malware Arsenal",
            "categories": [
                "CapraRAT",
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/a/investigating-apt36-or-earth-karkaddan-attack-chain-and-malware-arsenal/Earth%20Karkaddan%20APT-%20Adversary%20Intelligence%20and%20Monitoring%20Report.pdf",
            "date": "2022-01-24",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "Investigating APT36 or Earth Karkaddan\u2019s Attack Chain and Malware Arsenal",
            "categories": [
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/a/investigating-apt36-or-earth-karkaddan-attack-chain-and-malware-arsenal/IoCs_Investigating%20APT36%20or%20Earth%20Karkaddan%20Attack%20Chain%20and%20Malware%20Arsenal.rtf",
            "date": "2022-01-24",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "Investigating APT36 or Earth Karkaddan\u2019s Attack Chain and Malware Arsenal (IOCs)",
            "categories": [
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://www.4hou.com/posts/vLzM",
            "date": "2021-12-22",
            "organization": "Know Chuangyu",
            "author": "Know Chuangyu",
            "title": "APT Tracking Analytics: Transparent Tribe Attack Activity",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://anchorednarratives.substack.com/p/trouble-in-asia-and-the-middle-east",
            "date": "2021-10-13",
            "organization": "Anchored Narratives on Threat Intelligence and Geopolitics",
            "author": "RJM",
            "title": "Trouble in Asia and the Middle East. Tracking the TransparentTribe threat actor.",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/AhxP5HmROtMsFBiUxj0cFg",
            "date": "2021-09-08",
            "organization": "Microstep Intelligence Bureau",
            "author": "Microstep Online Research Response Center",
            "title": "Trilateral operation: years of cyberespionage against countries in south asia and the middle east (APT36)",
            "categories": [
                "AndroRAT",
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/xUM2x89GuB8uP6otN612Fg",
            "date": "2021-09-01",
            "organization": "360 Threat Intelligence Center",
            "author": "Advanced Threat Institute",
            "title": "APT-C-56 (Transparent Tribe) Latest Attack Analysis and Associated Suspected Gorgon Group Attack Analysis Alert",
            "categories": [
                "Crimson RAT",
                "NetWire RC"
            ]
        },
        {
            "data_url": "https://team-cymru.com/blog/2021/07/02/transparent-tribe-apt-infrastructure-mapping-2/",
            "date": "2021-07-02",
            "organization": "Team Cymru",
            "author": "Joshua Picolet",
            "title": "Transparent Tribe APT Infrastructure Mapping Part 2: A Deeper Dive into the Identification of CrimsonRAT Infrastructure",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2021/05/transparent-tribe-infra-and-targeting.html",
            "date": "2021-05-13",
            "organization": "Talos",
            "author": "Asheer Malhotra",
            "title": "Transparent Tribe APT expands its Windows malware arsenal",
            "categories": [
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/catching-rats-over-custom-protocols",
            "date": "2021-05-05",
            "organization": "Zscaler",
            "author": "Aniruddha Dolas",
            "title": "Catching RATs Over Custom Protocols Analysis of top non-HTTP/S threats",
            "categories": [
                "Agent Tesla",
                "AsyncRAT",
                "Crimson RAT",
                "CyberGate",
                "Ghost RAT",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "Quasar RAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://cybleinc.com/2021/04/30/transparent-tribe-operating-with-a-new-variant-of-crimson-rat/",
            "date": "2021-04-30",
            "organization": "Cybleinc",
            "author": "cybleinc",
            "title": "Transparent Tribe Operating with a New Variant of Crimson RAT",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/ELYDvdMiiy4FZ3KpmAddZQ",
            "date": "2021-04-20",
            "organization": "360 Threat Intelligence Center",
            "author": "Advanced Threat Institute",
            "title": "Transparent Tribe uses the new crown vaccine hotspot to analyze the targeted attacks on the Indian medical industry",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://team-cymru.com/blog/2021/04/16/transparent-tribe-apt-infrastructure-mapping/",
            "date": "2021-04-16",
            "organization": "Team Cymru",
            "author": "Joshua Picolet",
            "title": "Transparent Tribe APT Infrastructure Mapping Part 1: A High-Level Study of CrimsonRAT Infrastructure October 2020 \u2013 March 2021",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/pdf/pwc-cyber-threats-2020-a-year-in-retrospect.pdf",
            "date": "2021-02-28",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2020: A Year in Retrospect",
            "categories": [
                "elf.wellmess",
                "FlowerPower",
                "PowGoop",
                "8.t Dropper",
                "Agent.BTZ",
                "Agent Tesla",
                "Appleseed",
                "Ave Maria",
                "Bankshot",
                "BazarBackdoor",
                "BLINDINGCAN",
                "Chinoxy",
                "Conti",
                "Cotx RAT",
                "Crimson RAT",
                "DUSTMAN",
                "Emotet",
                "FriedEx",
                "FunnyDream",
                "Hakbit",
                "Mailto",
                "Maze",
                "METALJACK",
                "Nefilim",
                "Oblique RAT",
                "Pay2Key",
                "PlugX",
                "QakBot",
                "REvil",
                "Ryuk",
                "StoneDrill",
                "StrongPity",
                "SUNBURST",
                "SUPERNOVA",
                "TrickBot",
                "TurlaRPC",
                "Turla SilentMoon",
                "WastedLocker",
                "WellMess",
                "Winnti",
                "ZeroCleare",
                "APT10",
                "APT23",
                "APT27",
                "APT31",
                "APT41",
                "BlackTech",
                "BRONZE EDGEWOOD",
                "Inception Framework",
                "MUSTANG PANDA",
                "Red Charon",
                "Red Nue",
                "Sea Turtle",
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://twitter.com/teamcymru/status/1351228309632385027",
            "date": "2021-01-18",
            "organization": "Twitter (@teamcymru)",
            "author": "Team Cymru",
            "title": "Tweet on APT36 CrimsonRAT C2",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q3-2020/99204/",
            "date": "2020-11-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q3 2020",
            "categories": [
                "WellMail",
                "EVILNUM",
                "Janicab",
                "Poet RAT",
                "AsyncRAT",
                "Ave Maria",
                "Cobalt Strike",
                "Crimson RAT",
                "CROSSWALK",
                "Dtrack",
                "LODEINFO",
                "MoriAgent",
                "Okrum",
                "PlugX",
                "poisonplug",
                "Rover",
                "ShadowPad",
                "SoreFang",
                "Winnti"
            ]
        },
        {
            "data_url": "https://securelist.com/transparent-tribe-part-2/98233/",
            "date": "2020-08-26",
            "organization": "Kaspersky Labs",
            "author": "Giampaolo Dedola",
            "title": "Transparent Tribe: Evolution analysis, part 2",
            "categories": [
                "AhMyth",
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://www.secrss.com/articles/24995",
            "date": "2020-08-25",
            "organization": "Qianxin",
            "author": "Qi'anxin Threat Intelligence",
            "title": "\u5357\u4e9aAPT\u7ec4\u7ec7\u201c\u900f\u660e\u90e8\u843d\u201d\u5728\u79fb\u52a8\u7aef\u4e0a\u4e0e\u5bf9\u624b\u7684\u8f83\u91cf",
            "categories": [
                "AhMyth",
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://securelist.com/transparent-tribe-part-1/98127/",
            "date": "2020-08-20",
            "organization": "Kaspersky Labs",
            "author": "Giampaolo Dedola",
            "title": "Transparent Tribe: Evolution analysis, part 1",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://www.seqrite.com/blog/operation-honey-trap-apt36-targets-defense-organizations-in-india/",
            "date": "2020-07-08",
            "organization": "Seqrite",
            "author": "Kalpesh Mantri",
            "title": "Operation \u2018Honey Trap\u2019: APT36 Targets Defense Organizations in India",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/assets/cyber-threats-2019-retrospect.pdf",
            "date": "2020-03-03",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2019:A Year in Retrospect",
            "categories": [
                "KevDroid",
                "MESSAGETAP",
                "magecart",
                "AndroMut",
                "Cobalt Strike",
                "CobInt",
                "Crimson RAT",
                "DNSpionage",
                "Dridex",
                "Dtrack",
                "Emotet",
                "FlawedAmmyy",
                "FlawedGrace",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Grateful POS",
                "ISFB",
                "Kazuar",
                "LockerGoga",
                "Nokki",
                "QakBot",
                "Ramnit",
                "REvil",
                "Rifdoor",
                "RokRAT",
                "Ryuk",
                "shadowhammer",
                "ShadowPad",
                "Shifu",
                "Skipper",
                "StoneDrill",
                "Stuxnet",
                "TrickBot",
                "Winnti",
                "ZeroCleare",
                "APT41",
                "MUSTANG PANDA",
                "Sea Turtle"
            ]
        },
        {
            "data_url": "https://blog.yoroi.company/research/transparent-tribe-four-years-later",
            "date": "2020-02-21",
            "organization": "Yoroi",
            "author": "Luigi Martire",
            "title": "Transparent Tribe: Four Years Later",
            "categories": [
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/copper-fieldstone",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COPPER FIELDSTONE",
            "categories": [
                "Crimson RAT",
                "DarkComet",
                "Luminosity RAT",
                "NjRAT",
                "Operation C-Major"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/new-whiteshadow-downloader-uses-microsoft-sql-retrieve-malware",
            "date": "2019-09-26",
            "organization": "Proofpoint",
            "author": "Bryan Campbell",
            "title": "New WhiteShadow downloader uses Microsoft SQL to retrieve malware",
            "categories": [
                "WhiteShadow",
                "Agent Tesla",
                "Azorult",
                "Crimson RAT",
                "Formbook",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://s.tencent.com/research/report/669.html",
            "date": "2019-03-05",
            "organization": "Tencent",
            "author": "Tencent",
            "title": "TransparentTribe APT organizes 2019 attacks on Indian government and military targets",
            "categories": [
                "Crimson RAT",
                "Unidentified 066",
                "Operation C-Major"
            ]
        },
        {
            "data_url": "https://www.amnesty.org/download/Documents/ASA3383662018ENGLISH.PDF",
            "date": "2018-05-15",
            "organization": "Amnesty International",
            "author": "Brave",
            "title": "HUMAN RIGHTS  UNDER SURVEILLANCE DIGITAL THREATS AGAINST HUMAN RIGHTS DEFENDERS IN PAKISTAN",
            "categories": [
                "StealthAgent",
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/sites/default/files/proofpoint-operation-transparent-tribe-threat-insight-en.pdf",
            "date": "2016-03-01",
            "organization": "Proofpoint",
            "author": "Darien Huss",
            "title": "Operation Transparent Tribe",
            "categories": [
                "Andromeda",
                "beendoor",
                "Bezigate",
                "Crimson RAT",
                "Luminosity RAT",
                "Operation C-Major"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "crimson",
            "procedure_code": "s0115",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0115",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1091",
                    "technique_link": "https://attack.mitre.org/techniques/T1091",
                    "technique_name": "replication through removable media",
                    "technique_description": "adversaries may move onto systems, possibly those on disconnected or air-gapped networks, by copying malware to removable media and taking advantage of autorun features when the media is inserted into a system and executes. in the case of lateral movement, this may occur through modification of executable files stored on removable media or by copying malware and renaming it to look like a legitimate file to trick users into executing it on a separate system. in the case of initial access, this may occur through manual manipulation of the media, modification of systems used to initially format the media, or modification to the media's firmware itself.",
                    "procedure_description": "crimson can spread across systems by infecting removable media.[11]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "crimson has the ability to execute commands with the comspec environment variable.[91]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "crimson can add registry run keys for persistence.[67][68]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "crimson can add registry run keys for persistence.[67][68]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "crimson can decode its encoded pe file prior to execution.[65]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "crimson has the ability to delete files from a compromised host.[45][46][47]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1112",
                    "technique_link": "https://attack.mitre.org/techniques/T1112",
                    "technique_name": "modify registry",
                    "technique_description": "adversaries may interact with the windows registry to hide configuration information within registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.",
                    "procedure_description": "crimson can set a registry key to determine how long it has been installed and possibly to indicate the version number.[44]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "crimson can determine when it has been installed on a host for at least 15 days before downloading the final payload.[18]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "crimson contains a module to steal credentials from web browsers on the victim machine.[22][23]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "crimson can use a module to perform keylogging on compromised hosts.[45][46][47]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "crimson contains commands to list files and directories, as well as search for files matching certain extensions from a defined list.[88][89][90]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1120",
                    "technique_link": "https://attack.mitre.org/techniques/T1120",
                    "technique_name": "peripheral device discovery",
                    "technique_description": "adversaries may attempt to gather information about attached peripheral devices and components connected to a computer system. peripheral devices could include auxiliary resources that support a variety of functionalities such as keyboards, printers, cameras, smart card readers, or removable storage. the information may be used to enhance their awareness of the system and network environment or may be used for further actions.",
                    "procedure_description": "crimson has the ability to discover pluggable/removable drives to extract files from.[13][14]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "crimson contains a command to list processes.[66][67][68]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1012",
                    "technique_link": "https://attack.mitre.org/techniques/T1012",
                    "technique_name": "query registry",
                    "technique_description": "adversaries may interact with the windows registry to gather information about the system, configuration, and installed software.",
                    "procedure_description": "crimson can check the registry for the presence of hkcu\\software\\microsoft\\windows\\currentversion\\last_edate to determine how long it has been installed on a host.[30]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1518/001",
                    "technique_name": "software discovery : security software discovery",
                    "technique_description": "adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. this may include things such as firewall rules and anti-virus. adversaries may use the information from security software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "crimson contains a command to collect information about anti-virus software on the victim.[25][26]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "crimson contains a command to collect the victim pc name, disk drive information, and operating system.[98][99][100]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1614",
                    "technique_link": "https://attack.mitre.org/techniques/T1614",
                    "technique_name": "system location discovery",
                    "technique_description": "adversaries may gather information in an attempt to calculate the geographical location of a victim host. adversaries may use the information from system location discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "crimson can identify the geographical location of a victim host.[8]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "crimson contains a command to collect the victim mac address and lan ip.[63][64]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1033",
                    "technique_link": "https://attack.mitre.org/techniques/T1033",
                    "technique_name": "system owner/user discovery",
                    "technique_description": "adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. they may do this, for example, by retrieving account usernames or by using os credential dumping. the information may be collected in a number of different ways using other discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. adversaries may use the information from system owner/user discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "crimson can identify the user on a targeted system.[41][42][43]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1124",
                    "technique_link": "https://attack.mitre.org/techniques/T1124",
                    "technique_name": "system time discovery",
                    "technique_description": "an adversary may gather the system time and/or time zone from a local or remote system. the system time is set and stored by the windows time service within a domain to maintain time synchronization between systems and services in an enterprise network.",
                    "procedure_description": "crimson has the ability to determine the date and time on a compromised host.[28]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "crimson can determine when it has been installed on a host for at least 15 days before downloading the final payload.[18]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1091",
                    "technique_link": "https://attack.mitre.org/techniques/T1091",
                    "technique_name": "replication through removable media",
                    "technique_description": "adversaries may move onto systems, possibly those on disconnected or air-gapped networks, by copying malware to removable media and taking advantage of autorun features when the media is inserted into a system and executes. in the case of lateral movement, this may occur through modification of executable files stored on removable media or by copying malware and renaming it to look like a legitimate file to trick users into executing it on a separate system. in the case of initial access, this may occur through manual manipulation of the media, modification of systems used to initially format the media, or modification to the media's firmware itself.",
                    "procedure_description": "crimson can spread across systems by infecting removable media.[11]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1123",
                    "technique_link": "https://attack.mitre.org/techniques/T1123",
                    "technique_name": "audio capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., microphones and webcams) or applications (e.g., voice and video call services) to capture audio recordings for the purpose of listening into sensitive conversations to gather information.",
                    "procedure_description": "crimson can perform audio surveillance using microphones.[6]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "crimson can collect information from a compromised host.[51]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1025",
                    "technique_link": "https://attack.mitre.org/techniques/T1025",
                    "technique_name": "data from removable media",
                    "technique_description": "adversaries may search connected removable media on computers they have compromised to find files of interest. sensitive data can be collected from any removable media (optical disk drive, usb memory, etc.) connected to the compromised system prior to exfiltration. interactive command shells may be in use, and common functionality within cmd may be used to gather information.",
                    "procedure_description": "crimson contains a module to collect data from removable drives.[7][8]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1114.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1114/001",
                    "technique_name": "email collection : local email collection",
                    "technique_description": "adversaries may target user email on local systems to collect sensitive information. files containing email data can be acquired from a user\u2019s local system, such as outlook storage or cache files.",
                    "procedure_description": "crimson contains a command to collect and exfiltrate emails from outlook.[7]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "crimson can use a module to perform keylogging on compromised hosts.[45][46][47]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "crimson contains a command to perform screen captures.[46][47][48]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1125",
                    "technique_link": "https://attack.mitre.org/techniques/T1125",
                    "technique_name": "video capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., integrated cameras or webcams) or applications (e.g., video call services) to capture video recordings for the purpose of gathering information. images may also be captured from devices or applications, potentially in specified intervals, in lieu of video files.",
                    "procedure_description": "crimson can capture webcam video on targeted systems.[9][10]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "crimson can use a http get request to download its final payload.[83]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "crimson contains a command to retrieve files from its c2 server.[126][127][128]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1095",
                    "technique_link": "https://attack.mitre.org/techniques/T1095",
                    "technique_name": "non-application layer protocol",
                    "technique_description": "adversaries may use an osi non-application layer protocol for communication between host and c2 server or among infected hosts within a network. the list of possible protocols is extensive. specific examples include use of network layer protocols, such as the internet control message protocol (icmp), transport layer protocols, such as the user datagram protocol (udp), session layer protocols, such as socket secure (socks), as well as redirected/tunneled protocols, such as serial over lan (sol).",
                    "procedure_description": "crimson uses a custom tcp protocol for c2.[19][20]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1041",
                    "technique_link": "https://attack.mitre.org/techniques/T1041",
                    "technique_name": "exfiltration over c2 channel",
                    "technique_description": "adversaries may steal data by exfiltrating it over an existing command and control channel. stolen data is encoded into the normal communications channel using the same protocol as command and control communications.",
                    "procedure_description": "crimson can exfiltrate stolen information over its c2.[31]"
                }
            ]
        },
        {
            "procedure_name": "at",
            "procedure_code": "s0110",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0110",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                }
            ]
        }
    ]
};