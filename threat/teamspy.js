var threatdata = {
    "name": "TeamSpy",
    "alias": "TeamSpy, TVSpy, TVRAT, SpY-Agent, TeamViewerENT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "TeamSpy",
        "names": [
            {
                "name": "TeamSpy"
            },
            {
                "name": "TVSpy"
            },
            {
                "name": "TVRAT"
            },
            {
                "name": "SpY-Agent"
            },
            {
                "name": "TeamViewerENT"
            }
        ],
        "description": "(Avast) TeamSpy infects computers by tricking people into downloading a malicious attachment and enabling macros. After that, the malware secretly installs {{TeamViewer}}, giving the cybercriminals full control of the infected computer.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.avast.com/a-deeper-look-into-malware-abusing-teamviewer",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/unsupported-teamviewer-versions-exploited-backdoors-keylogging",
            "https://www.cyber.nj.gov/threat-center/threat-profiles/trojan-variants/spy-agent"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.teamspy"
        ],
        "uuid": "279fa508-a023-488b-b8bf-8c4d5e38ecb4",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "TeamSpy",
            "malware_alias": "TVSPY,TeamViewerENT,TVRAT",
            "malware": "win.teamspy",
            "last_update": "2023-09-26 13:36:10",
            "tags": [
                "Teamspy",
                "teamSpy",
                "Viaprivateloader",
                "VIAPRIVATELOADER",
                "RAT",
                "TeamSpy",
                "teamspy",
                "ViaPrivateLoader",
                "ViaPrivateloader"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://cegbqbq.net/single.php",
                        "timestamp": "2023-09-25 10:53:25"
                    },
                    {
                        "value": "http://eojyaqr.ua/single.php",
                        "timestamp": "2023-09-24 07:03:41"
                    },
                    {
                        "value": "http://ddpkzaq.info/single.php",
                        "timestamp": "2023-09-23 05:25:47"
                    },
                    {
                        "value": "http://ccodoom.net/single.php",
                        "timestamp": "2023-09-22 07:42:25"
                    },
                    {
                        "value": "http://eeepdcn.ua/single.php",
                        "timestamp": "2023-09-22 05:58:09"
                    },
                    {
                        "value": "http://efeuhot.ua/single.php",
                        "timestamp": "2023-09-22 05:57:56"
                    },
                    {
                        "value": "http://diixuoo.info/single.php",
                        "timestamp": "2023-09-21 12:14:19"
                    },
                    {
                        "value": "http://aioeuqo.ru/single.php",
                        "timestamp": "2023-09-20 16:06:35"
                    },
                    {
                        "value": "http://exokckg.ua/single.php",
                        "timestamp": "2023-09-11 10:00:05"
                    },
                    {
                        "value": "http://ddcedue.info/single.php",
                        "timestamp": "2023-09-11 09:21:45"
                    },
                    {
                        "value": "http://eodqdlj.ua/single.php",
                        "timestamp": "2023-09-11 09:16:22"
                    },
                    {
                        "value": "http://eeonagf.ua/single.php",
                        "timestamp": "2023-09-11 09:16:21"
                    },
                    {
                        "value": "http://ebelkye.ua/single.php",
                        "timestamp": "2023-09-11 09:03:53"
                    }
                ],
                "ip:port": [
                    {
                        "value": "185.141.63.172:80",
                        "timestamp": "2023-09-26 13:36:10"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-26 13:36:10",
    "mitre": [],
    "file_name": "teamspy",
    "analysis": null
};