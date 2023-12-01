var threatdata = {
    "name": "Loda",
    "alias": "Loda, Loda RAT, LodaRAT, Nymeria",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-03-14",
    "all_data": {
        "tool": "Loda",
        "names": [
            {
                "name": "Loda"
            },
            {
                "name": "Loda RAT"
            },
            {
                "name": "LodaRAT"
            },
            {
                "name": "Nymeria"
            }
        ],
        "description": "(Talos) Loda is a simple, yet effective, RAT that has matured over time. This RAT is a good example of how effective relatively simple techniques combined with basic obfuscation can be. The techniques this malware employs are of fairly low complexity and show that slight changes in implementation can significantly reduce detection rates.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.talosintelligence.com/2020/02/loda-rat-grows-up.html",
            "https://blog.talosintelligence.com/get-a-loda-this/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.loda"
        ],
        "uuid": "2f870afa-6fdb-46fb-b479-df270e6d0bb7",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Loda",
            "malware_alias": "LodaRAT,Nymeria",
            "malware": "win.loda",
            "last_update": "2023-11-13 12:58:41",
            "tags": [
                "LodaRAT",
                "Loda",
                "PDF"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "microsoft.net.linkpc.net",
                        "timestamp": "2023-11-13 12:58:41"
                    },
                    {
                        "value": "storageapis.gotdns.ch",
                        "timestamp": "2023-11-13 12:58:40"
                    },
                    {
                        "value": "presh147osidufhj.ddns.net",
                        "timestamp": "2023-09-10 21:55:53"
                    }
                ],
                "ip:port": [
                    {
                        "value": "194.187.251.115:62848",
                        "timestamp": "2023-11-13 12:58:40"
                    },
                    {
                        "value": "37.0.14.214:35152",
                        "timestamp": "2023-09-10 14:34:52"
                    },
                    {
                        "value": "167.88.166.159:4000",
                        "timestamp": "2023-07-08 17:00:42"
                    },
                    {
                        "value": "172.111.138.100:5552",
                        "timestamp": "2023-06-15 13:10:15"
                    },
                    {
                        "value": "149.50.211.160:7777",
                        "timestamp": "2023-05-26 17:53:06"
                    },
                    {
                        "value": "104.243.251.229:5552",
                        "timestamp": "2023-05-15 16:45:25"
                    },
                    {
                        "value": "185.241.208.138:4000",
                        "timestamp": "2023-03-21 11:30:35"
                    },
                    {
                        "value": "2.58.56.188:4000",
                        "timestamp": "2023-03-04 20:00:23"
                    },
                    {
                        "value": "46.105.113.84:4000",
                        "timestamp": "2023-02-07 08:10:34"
                    },
                    {
                        "value": "46.246.14.12:1199",
                        "timestamp": "2023-01-24 21:10:37"
                    },
                    {
                        "value": "185.254.96.226:4000",
                        "timestamp": "2023-01-16 14:40:24"
                    },
                    {
                        "value": "3.141.204.47:27816",
                        "timestamp": "2023-01-15 01:40:16"
                    },
                    {
                        "value": "185.181.165.188:443",
                        "timestamp": "2022-12-26 00:00:49"
                    },
                    {
                        "value": "165.22.244.84:4000",
                        "timestamp": "2022-11-09 11:14:28"
                    },
                    {
                        "value": "13.40.105.36:4000",
                        "timestamp": "2022-10-29 18:50:34"
                    },
                    {
                        "value": "194.5.98.212:5552",
                        "timestamp": "2022-10-10 06:40:32"
                    },
                    {
                        "value": "46.246.82.70:1199",
                        "timestamp": "2022-10-07 11:30:51"
                    },
                    {
                        "value": "109.248.150.140:4000",
                        "timestamp": "2022-09-28 22:51:07"
                    },
                    {
                        "value": "178.73.192.65:1199",
                        "timestamp": "2022-08-18 17:35:17"
                    },
                    {
                        "value": "34.174.95.150:12345",
                        "timestamp": "2022-06-27 20:17:23"
                    },
                    {
                        "value": "194.5.98.212:5005",
                        "timestamp": "2023-09-10 20:37:33"
                    },
                    {
                        "value": "194.132.123.93:9800",
                        "timestamp": "2022-06-16 15:02:16"
                    },
                    {
                        "value": "192.99.175.89:4000",
                        "timestamp": "2022-04-09 15:45:44"
                    },
                    {
                        "value": "185.140.53.198:62748",
                        "timestamp": "2023-09-10 22:08:44"
                    },
                    {
                        "value": "185.140.53.161:1999",
                        "timestamp": "2021-12-22 13:57:50"
                    },
                    {
                        "value": "79.142.76.244:29769",
                        "timestamp": "2021-11-14 01:06:26"
                    },
                    {
                        "value": "195.123.221.123:7842",
                        "timestamp": "2021-10-28 10:11:46"
                    },
                    {
                        "value": "79.142.76.244:9735",
                        "timestamp": "2021-08-22 11:06:08"
                    },
                    {
                        "value": "194.5.98.212:4001",
                        "timestamp": "2023-09-10 22:05:43"
                    },
                    {
                        "value": "194.187.251.163:58867",
                        "timestamp": "2021-07-16 19:06:13"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "86a95def10c2b7a23b7762126f12203915d83d3d27263cc002f6602c7f01ddd2",
                        "timestamp": "2023-01-27 12:10:59"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "fae47086c34007307f6e2cd0c47a97d8",
                        "timestamp": "2022-11-29 23:58:02"
                    }
                ],
                "url": [
                    {
                        "value": "http://funmustsolutions.site/wp-includes/icex/Script.php",
                        "timestamp": "2022-05-13 04:53:18"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-13 12:58:41",
    "file_name": "loda",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.talosintelligence.com/yorotrooper-espionage-campaign-cis-turkey-europe/",
            "date": "2023-03-14",
            "organization": "Cisco Talos",
            "author": "Asheer Malhotra",
            "title": "Talos uncovers espionage campaigns targeting CIS countries, embassies and EU health care agency",
            "categories": [
                "Poet RAT",
                "Loda"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/blog/articles/Kasablanka-Group-Probably-Conducted-Compaigns-Targeting-Russia/",
            "date": "2023-01-17",
            "organization": "Qianxin",
            "author": "Red Raindrop Team",
            "title": "Kasablanka Group Probably Conducted Compaigns Targeting Russia",
            "categories": [
                "Ave Maria",
                "Loda"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/reservations-requested-ta558-targets-hospitality-and-travel",
            "date": "2022-08-18",
            "organization": "Proofpoint",
            "author": "Joe Wise",
            "title": "Reservations Requested: TA558 Targets Hospitality and Travel",
            "categories": [
                "AsyncRAT",
                "Loda",
                "NjRAT",
                "Ozone RAT",
                "Revenge RAT",
                "Vjw0rm"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/mstwBMkS0G3Et4GOji2mwA",
            "date": "2022-08-17",
            "organization": "360",
            "author": "360 Threat Intelligence Center",
            "title": "Kasablanka organizes attacks against political groups and non-profit organizations in the Middle East",
            "categories": [
                "SpyNote",
                "Loda",
                "Nanocore RAT",
                "NjRAT"
            ]
        },
        {
            "data_url": "https://www.silentpush.com/blog/more-lodarat-infrastructure-targeting-bangladesh-uncovered",
            "date": "2021-02-15",
            "organization": "Silent Push",
            "author": "Martijn Grooten",
            "title": "More LodaRAT infrastructure targeting Bangladesh uncovered",
            "categories": [
                "Loda"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2021/02/kasablanka-lodarat.html",
            "date": "2021-02-09",
            "organization": "Talos",
            "author": "Warren Mercer",
            "title": "Kasablanka Group's LodaRAT improves espionage capabilities on Android and Windows",
            "categories": [
                "Loda"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/09/lodarat-update-alive-and-well.html",
            "date": "2020-09-29",
            "organization": "Cisco Talos",
            "author": "Chris Neal",
            "title": "LodaRAT Update: Alive and Well",
            "categories": [
                "Loda"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/02/loda-rat-grows-up.html",
            "date": "2020-02-12",
            "organization": "Cisco Talos",
            "author": "Chris Neal",
            "title": "Loda RAT Grows Up",
            "categories": [
                "Loda"
            ]
        },
        {
            "data_url": "https://zerophagemalware.com/2018/01/23/maldoc-rtf-drop-loda-logger/",
            "date": "2018-01-23",
            "organization": "",
            "author": "Zerophage",
            "title": "Maldoc (RTF) drops Loda Logger",
            "categories": [
                "Loda"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/introducing-loda-malware",
            "date": "2017-05-10",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "Introducing Loda Malware",
            "categories": [
                "Loda"
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