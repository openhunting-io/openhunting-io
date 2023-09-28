var threatdata = {
    "name": "Orcus RAT",
    "alias": "Orcus RAT, Orcus, Schnorchel",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Credential stealer, Info stealer, DDoS",
    "modified": "2023-02-15",
    "all_data": {
        "tool": "Orcus RAT",
        "names": [
            {
                "name": "Orcus RAT"
            },
            {
                "name": "Orcus"
            },
            {
                "name": "Schnorchel"
            }
        ],
        "description": "(Morphisec) In a successful attack, the Orcus RAT can steal browser cookies and passwords, launch server stress tests (DDoS attacks), disable the webcam activity light, record microphone input, spoof file extensions, log keystrokes and more.\n\nThe Orcus RAT masquerades as a legitimate remote administration tool, although it is clear from its features and functionality that it is not and was never intended to be. (Brian Krebs published an interesting expose on the man behind the supposed administration tool.) Until two weeks ago, it was publicly sold and licensed by a company calling itself Orcus Technologies. The project is now closed, according to this \u201cpress release\u201d issued, and a license-free version available for download, as well as software development tools and documentation. Interestingly, the author also claims there is a \u201ckill switch\u201d available for download by security researchers to remotely shut down and lock out any Orcus control server that they find are being used for malicious purposes.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Credential stealer",
            "Info stealer",
            "DDoS"
        ],
        "information": [
            "https://blog.morphisec.com/new-campaign-delivering-orcus-rat",
            "https://orcusremote.com/",
            "https://krebsonsecurity.com/2016/07/canadian-man-is-author-of-popular-orcus-rat/",
            "https://krebsonsecurity.com/2019/04/canadian-police-raid-orcus-rat-author/",
            "https://unit42.paloaltonetworks.com/unit42-orcus-birth-of-an-unusual-plugin-builder-rat/",
            "https://www.fortinet.com/blog/threat-research/a-peculiar-case-of-orcus-rat-targeting-bitcoin-investors.html",
            "https://asec.ahnlab.com/en/45462/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.orcus_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Orcus%20RAT"
        ],
        "uuid": "9c969fa3-3382-4713-901d-a864b6c55549",
        "last-card-change": "2023-02-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Orcus RAT",
            "malware_alias": "Schnorchel",
            "malware": "win.orcus_rat",
            "last_update": "2023-09-22 05:58:19",
            "tags": [
                "RAT",
                "orcus",
                "OrcusRAT"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "116.122.117.97:8081",
                        "timestamp": "2023-09-22 05:58:19"
                    },
                    {
                        "value": "86.105.9.67:5650",
                        "timestamp": "2023-09-19 11:59:24"
                    },
                    {
                        "value": "209.25.141.212:49446",
                        "timestamp": "2023-03-12 12:05:21"
                    },
                    {
                        "value": "147.185.221.229:56094",
                        "timestamp": "2023-03-06 17:45:27"
                    },
                    {
                        "value": "84.21.172.55:1339",
                        "timestamp": "2023-03-03 16:50:47"
                    },
                    {
                        "value": "209.25.142.180:10569",
                        "timestamp": "2023-02-26 16:20:30"
                    },
                    {
                        "value": "209.25.141.180:10569",
                        "timestamp": "2023-02-26 01:00:36"
                    },
                    {
                        "value": "209.25.140.180:10569",
                        "timestamp": "2023-02-26 00:35:32"
                    },
                    {
                        "value": "193.138.195.211:10134",
                        "timestamp": "2023-02-15 20:05:22"
                    },
                    {
                        "value": "89.190.226.232:10134",
                        "timestamp": "2023-02-01 17:55:27"
                    },
                    {
                        "value": "193.111.248.239:10134",
                        "timestamp": "2023-01-11 14:50:24"
                    },
                    {
                        "value": "194.110.112.45:54956",
                        "timestamp": "2022-11-22 08:15:19"
                    },
                    {
                        "value": "209.25.141.180:60302",
                        "timestamp": "2022-10-09 21:15:44"
                    },
                    {
                        "value": "179.61.251.127:4768",
                        "timestamp": "2022-09-08 10:00:07"
                    },
                    {
                        "value": "107.182.128.18:3030",
                        "timestamp": "2022-06-17 21:18:13"
                    },
                    {
                        "value": "80.80.130.104:350",
                        "timestamp": "2022-05-15 07:02:08"
                    },
                    {
                        "value": "20.89.177.186:21245",
                        "timestamp": "2022-05-09 14:31:37"
                    },
                    {
                        "value": "109.171.5.62:7139",
                        "timestamp": "2022-04-12 07:21:09"
                    },
                    {
                        "value": "122.186.23.243:10134",
                        "timestamp": "2022-02-18 17:45:34"
                    },
                    {
                        "value": "217.114.43.29:1268",
                        "timestamp": "2022-02-10 18:01:00"
                    },
                    {
                        "value": "94.103.87.238:10135",
                        "timestamp": "2022-02-06 08:24:04"
                    },
                    {
                        "value": "84.201.188.187:666",
                        "timestamp": "2021-11-14 09:36:09"
                    },
                    {
                        "value": "136.144.41.171:10134",
                        "timestamp": "2021-09-15 10:35:49"
                    },
                    {
                        "value": "185.175.56.98:50721",
                        "timestamp": "2021-09-10 15:06:03"
                    },
                    {
                        "value": "216.250.97.121:50721",
                        "timestamp": "2021-09-08 14:16:43"
                    },
                    {
                        "value": "199.195.253.181:50721",
                        "timestamp": "2021-09-06 22:05:54"
                    },
                    {
                        "value": "61.69.245.176:42069",
                        "timestamp": "2021-08-31 19:00:32"
                    },
                    {
                        "value": "45.146.253.103:420",
                        "timestamp": "2021-08-30 18:41:46"
                    },
                    {
                        "value": "13.53.37.168:777",
                        "timestamp": "2021-08-22 00:50:48"
                    },
                    {
                        "value": "93.108.180.0:4444",
                        "timestamp": "2021-08-21 23:45:42"
                    },
                    {
                        "value": "94.60.124.63:4444",
                        "timestamp": "2021-08-21 23:45:42"
                    },
                    {
                        "value": "115.79.199.11:4444",
                        "timestamp": "2021-08-15 17:50:23"
                    },
                    {
                        "value": "162.244.82.93:10134",
                        "timestamp": "2021-07-30 22:36:56"
                    },
                    {
                        "value": "193.32.219.170:10134",
                        "timestamp": "2021-07-24 06:46:04"
                    },
                    {
                        "value": "67.242.2.35:10134",
                        "timestamp": "2021-07-17 07:51:42"
                    },
                    {
                        "value": "3.137.146.78:777",
                        "timestamp": "2021-07-12 16:01:40"
                    },
                    {
                        "value": "3.137.146.78:6666",
                        "timestamp": "2021-07-12 14:01:01"
                    },
                    {
                        "value": "74.201.28.60:4296",
                        "timestamp": "2021-06-29 06:15:55"
                    },
                    {
                        "value": "3.143.239.116:10134",
                        "timestamp": "2021-06-27 20:55:36"
                    },
                    {
                        "value": "178.154.244.45:666",
                        "timestamp": "2021-06-24 15:06:31"
                    },
                    {
                        "value": "178.154.244.45:777",
                        "timestamp": "2021-06-20 20:41:02"
                    },
                    {
                        "value": "178.154.244.45:2",
                        "timestamp": "2021-06-20 20:35:49"
                    },
                    {
                        "value": "178.154.244.45:1",
                        "timestamp": "2021-06-20 19:06:13"
                    },
                    {
                        "value": "134.122.84.252:10134",
                        "timestamp": "2021-06-20 07:40:46"
                    },
                    {
                        "value": "95.217.123.5:10134",
                        "timestamp": "2021-06-19 06:01:52"
                    },
                    {
                        "value": "18.117.142.49:2",
                        "timestamp": "2021-06-19 02:11:47"
                    },
                    {
                        "value": "176.58.61.217:10134",
                        "timestamp": "2021-06-09 20:00:54"
                    },
                    {
                        "value": "135.148.12.151:10134",
                        "timestamp": "2021-05-27 18:53:20"
                    },
                    {
                        "value": "3.133.207.110:16788",
                        "timestamp": "2021-05-21 17:35:41"
                    },
                    {
                        "value": "3.129.187.220:16788",
                        "timestamp": "2021-05-21 17:35:38"
                    },
                    {
                        "value": "79.134.225.92:9030",
                        "timestamp": "2021-05-15 15:30:39"
                    },
                    {
                        "value": "185.163.47.163:10134",
                        "timestamp": "2021-05-02 10:55:08"
                    },
                    {
                        "value": "98.229.214.124:10134",
                        "timestamp": "2021-04-18 03:35:14"
                    }
                ],
                "domain": [
                    {
                        "value": "sudorat.top",
                        "timestamp": "2023-09-21 05:58:36"
                    },
                    {
                        "value": "realitygaming.us",
                        "timestamp": "2023-09-19 11:59:27"
                    },
                    {
                        "value": "sellygg.tk",
                        "timestamp": "2023-09-19 11:59:27"
                    },
                    {
                        "value": "ab.realitygaming.us",
                        "timestamp": "2023-09-19 11:59:25"
                    },
                    {
                        "value": "blog.sellygg.tk",
                        "timestamp": "2023-09-19 11:59:25"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "3e40414d3d75b88373027c33bbe22e90a6ef7fdf7c98b8b6e8a8e51b4b781a56",
                        "timestamp": "2021-07-09 12:30:35"
                    },
                    {
                        "value": "a9fe52010982ccd3628a5a882c019556b361c3fa7c29cb8052ff66f02bd28490",
                        "timestamp": "2021-07-09 12:30:35"
                    },
                    {
                        "value": "e29f4bf53c18db917e9b29daa1d2b1efb442a37c41d2c8bcd7840f3f9db2534f",
                        "timestamp": "2021-07-09 12:30:34"
                    },
                    {
                        "value": "dd3df410ec256d46fb3a3a5e5d5a62d7ba48175926c58d8100d422c62540a395",
                        "timestamp": "2021-07-09 12:30:34"
                    },
                    {
                        "value": "aaee81218658e32ec29047708178447f479f7e57298f6a1416696a291ac18f25",
                        "timestamp": "2021-06-24 15:30:22"
                    },
                    {
                        "value": "ef629de5eaab1c1627d208934f991ebe171d997d44b14bfec7a40e1a9fa89acb",
                        "timestamp": "2021-06-24 15:30:22"
                    },
                    {
                        "value": "a28549c1130d3ac6360078c6223be51046fd6ef442644975ff735a9a36c8922f",
                        "timestamp": "2021-06-24 15:30:22"
                    },
                    {
                        "value": "28027fae1edf2324a8165c9f1a82273f958385c4947e8750a6bdcf29ec2e4906",
                        "timestamp": "2021-06-24 15:30:21"
                    },
                    {
                        "value": "83ee132d4ae14e9a0963af00c2a937d70da63d696bfbbcbc4e1b5d976beeb4a7",
                        "timestamp": "2021-06-20 21:00:31"
                    },
                    {
                        "value": "424eb42fa596ee2e87a3498979a56ceea933c35d61604d87a0acab76b6baed93",
                        "timestamp": "2021-06-20 21:00:30"
                    },
                    {
                        "value": "9e8275b30324d42e998d3cf2d666e666465b3c48fb66ab0de2cf890c6552e8f7",
                        "timestamp": "2021-06-20 21:00:30"
                    },
                    {
                        "value": "5fe03c646fcc7a7b912b2266fe54c645f203d22bfae171bf5f089e9934711dbb",
                        "timestamp": "2021-06-20 21:00:30"
                    },
                    {
                        "value": "b5be399ecc2efefe63a79f5f36350aaa27250726b1760560845f1aa5f8aeee78",
                        "timestamp": "2021-06-09 20:30:25"
                    },
                    {
                        "value": "c961c19943e6b90918070b48e4570d83605820f9ea198bc6078e8cbf84b434d2",
                        "timestamp": "2021-06-09 20:30:25"
                    },
                    {
                        "value": "4bc2d84d15ae45ccbb03aa55b17d1a03fdf2f55efe3540d7e1762d4b58a538c9",
                        "timestamp": "2021-06-09 20:30:25"
                    },
                    {
                        "value": "a3455a1192f8d9cdaeb56087f2884d9a3d13da199e8bc4f4ce96245bb831c4fe",
                        "timestamp": "2021-06-09 20:30:25"
                    },
                    {
                        "value": "53943895601cbc79561cb30c9957715400d82a255d97ce36fe1b383bf3c240da",
                        "timestamp": "2021-05-02 11:30:23"
                    },
                    {
                        "value": "3e4ef7b0224b4601e28838ec6319634315025d824c1404a2a9e114139dbdbe21",
                        "timestamp": "2021-05-02 11:30:23"
                    },
                    {
                        "value": "a22f48f8311869ea019de57004372b3ce4da2757ac5ede342368b0bc381fe857",
                        "timestamp": "2021-05-02 11:30:23"
                    },
                    {
                        "value": "d20fc189729837d2f7b39f976fdcc66318b7c5358001d13057b46c32d36a5260",
                        "timestamp": "2021-05-02 11:30:23"
                    },
                    {
                        "value": "0c3a1e4598b32bfcdf0226964c07af858c56e22c112fc4719f833738733958b8",
                        "timestamp": "2021-04-06 13:14:27"
                    },
                    {
                        "value": "0b0b33ac7db4c1d33b44265f722c064189a19f2a0381cc877301a1aba7b02910",
                        "timestamp": "2021-04-06 13:14:27"
                    },
                    {
                        "value": "f79e81bc04c4450e167307625f7a181aaf8884f71cc6b53dbe4adfaa767e2b54",
                        "timestamp": "2021-04-06 13:14:27"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-22 05:58:19",
    "mitre": [],
    "file_name": "orcus_rat",
    "analysis": null
};