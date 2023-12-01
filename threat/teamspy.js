var threatdata = {
    "name": "TeamSpy",
    "alias": "TeamSpy, TVSpy, TVRAT, SpY-Agent, TeamViewerENT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-10-11",
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
            "last_update": "2023-11-20 17:08:45",
            "tags": [
                "VIAPRIVATELOADER",
                "TeamSpy",
                "Viaprivateloader",
                "ViaPrivateLoader",
                "teamspy",
                "RAT",
                "ViaPrivateloader",
                "teamSpy",
                "ViaPRivateLoader",
                "Teamspy"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://aqwxeyo.ru/single.php",
                        "timestamp": "2023-09-29 07:10:09"
                    },
                    {
                        "value": "http://aibyngu.ru/single.php",
                        "timestamp": "2023-09-26 14:07:17"
                    },
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
                        "timestamp": "2023-11-20 17:08:45"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-20 17:08:45",
    "file_name": "teamspy",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.deepinstinct.com/blog/the-russian-spyagent-a-decade-later-and-rat-tools-remain-at-risk",
            "date": "2022-10-11",
            "organization": "DeepInstinct",
            "author": "Deep Instinct Threat Lab",
            "title": "The Russian SpyAgent \u2013 a Decade Later and RAT Tools Remain at Risk",
            "categories": [
                "TeamSpy"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2020/04/24/ursnif-via-lolbins/",
            "date": "2020-04-24",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Ursnif via LOLbins",
            "categories": [
                "Cobalt Strike",
                "LOLSnif",
                "TeamSpy"
            ]
        },
        {
            "data_url": "https://blog.avast.com/a-deeper-look-into-malware-abusing-teamviewer",
            "date": "2017-04-13",
            "organization": "Avast",
            "author": "Jarom\u00edr Ho\u0159ej\u0161\u00ed",
            "title": "A deeper look into malware abusing TeamViewer",
            "categories": [
                "TeamSpy"
            ]
        },
        {
            "data_url": "https://www.cyber.nj.gov/threat-center/threat-profiles/trojan-variants/spy-agent",
            "date": "2016-08-25",
            "organization": "NJCCIC",
            "author": "NJCCIC",
            "title": "NJCCIC Threat Profile: Spy-Agent",
            "categories": [
                "TeamSpy"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/unsupported-teamviewer-versions-exploited-backdoors-keylogging",
            "date": "2016-06-15",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "Unsupported TeamViewer Versions Exploited For Backdoors, Keylogging",
            "categories": [
                "TeamSpy"
            ]
        }
    ],
    "mitre": [
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