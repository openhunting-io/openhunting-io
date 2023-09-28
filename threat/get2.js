var threatdata = {
    "name": "Get2",
    "alias": "Get2, FRIENDSPEAK, GetandGo",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Get2",
        "names": [
            {
                "name": "Get2"
            },
            {
                "name": "FRIENDSPEAK"
            },
            {
                "name": "GetandGo"
            }
        ],
        "description": "(Proofpoint) Get2 is a new downloader. Get2 was, in turn, observed downloading {{FlawedGrace}}, {{FlawedAmmyy}}, {{Snatch}}, and {{SDBbot}} (a new RAT) as secondary payloads.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/ta505-distributes-new-sdbbot-remote-access-trojan-get2-downloader"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0460/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.get2"
        ],
        "uuid": "a4b9a235-29d6-4af1-a7ad-990854110c9f",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Get2",
            "malware_alias": "FRIENDSPEAK,GetandGo",
            "malware": "win.get2",
            "last_update": "2023-09-26 12:05:42",
            "tags": [
                "TA505",
                "Get2"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "220.69.33.111:443",
                        "timestamp": "2023-09-26 12:05:42"
                    },
                    {
                        "value": "101.78.26.130:443",
                        "timestamp": "2023-09-26 04:46:25"
                    },
                    {
                        "value": "180.210.112.158:443",
                        "timestamp": "2023-09-26 04:46:20"
                    },
                    {
                        "value": "210.90.168.176:10443",
                        "timestamp": "2023-09-25 18:20:36"
                    },
                    {
                        "value": "125.141.145.174:443",
                        "timestamp": "2023-09-24 08:46:46"
                    },
                    {
                        "value": "125.141.145.252:443",
                        "timestamp": "2023-09-24 07:04:49"
                    },
                    {
                        "value": "124.243.53.149:443",
                        "timestamp": "2023-09-24 07:04:48"
                    },
                    {
                        "value": "125.141.145.164:443",
                        "timestamp": "2023-09-24 07:04:47"
                    },
                    {
                        "value": "125.141.144.228:443",
                        "timestamp": "2023-09-24 07:04:47"
                    },
                    {
                        "value": "125.141.145.241:443",
                        "timestamp": "2023-09-24 07:04:47"
                    },
                    {
                        "value": "27.101.221.227:443",
                        "timestamp": "2023-09-24 07:03:46"
                    },
                    {
                        "value": "125.141.145.165:443",
                        "timestamp": "2023-09-24 07:03:42"
                    }
                ],
                "domain": [
                    {
                        "value": "docs-downloading.com",
                        "timestamp": "2020-12-16 11:07:32"
                    },
                    {
                        "value": "ms-pipes-service.com",
                        "timestamp": "2020-12-18 07:33:41"
                    },
                    {
                        "value": "ms-debug-services.com",
                        "timestamp": "2020-12-14 19:18:13"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-26 12:05:42",
    "mitre": [],
    "file_name": "get2",
    "analysis": null
};