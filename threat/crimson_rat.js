var threatdata = {
    "name": "Crimson RAT",
    "alias": "Crimson RAT, Crimson, SEEDOOR, Scarimson, MSIL, MSIL/Crimson",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
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
            "last_update": "2023-09-21 12:14:16",
            "tags": [
                "crimson",
                "APT36",
                "CrimsonRAT",
                "TransparentTribe",
                "APT",
                "Crimson RAT",
                "RAT",
                "Transparenttribe",
                "Crimson"
            ],
            "ioc": {
                "ip:port": [
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
                    },
                    {
                        "value": "richa-sharma.ddns.net",
                        "timestamp": "2023-04-28 14:05:40"
                    },
                    {
                        "value": "richa-sharma.ddns.net",
                        "timestamp": "2023-03-29 05:53:32"
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
    "last_ioc_update": "2023-09-21 12:14:16",
    "mitre": [],
    "file_name": "crimson_rat",
    "analysis": null
};