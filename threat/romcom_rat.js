var threatdata = {
    "name": "ROMCOM RAT",
    "alias": "ROMCOM RAT, ROMCOM",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-09-08",
    "all_data": {
        "tool": "ROMCOM RAT",
        "names": [
            {
                "name": "ROMCOM RAT"
            },
            {
                "name": "ROMCOM"
            }
        ],
        "description": "(BlackBerry) Earlier versions of RomCom RAT were distributed via fake websites spoofing the legitimate 'Advanced IP Scanner' application website.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blogs.blackberry.com/en/2022/10/unattributed-romcom-threat-actor-spoofing-popular-apps-now-hits-ukrainian-militaries"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.romcom_rat"
        ],
        "uuid": "6ceba00e-bd46-422c-b2c7-1e148a71b830",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "ROMCOM RAT",
            "malware_alias": null,
            "malware": "win.romcom_rat",
            "last_update": "2023-05-09 08:13:15",
            "tags": [
                "RAT",
                "RomCom"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "104.234.10.207:444",
                        "timestamp": "2023-05-09 08:13:15"
                    }
                ],
                "domain": [
                    {
                        "value": "wexonlake.com",
                        "timestamp": "2023-05-09 08:11:46"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-05-09 08:13:15",
    "file_name": "romcom_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://labs.k7computing.com/index.php/romcom-rat-not-your-typical-love-story/",
            "date": "2023-09-08",
            "organization": "K7 Security",
            "author": "Sudeep Waingankar",
            "title": "RomCom RAT: Not Your Typical Love Story",
            "categories": [
                "ROMCOM RAT"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/en-us/security/blog/2023/07/11/storm-0978-attacks-reveal-financial-and-espionage-motives/",
            "date": "2023-07-11",
            "organization": "Microsoft",
            "author": "Microsoft",
            "title": "Storm-0978 attacks reveal financial and espionage motives",
            "categories": [
                "ROMCOM RAT"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2023/07/romcom-targets-ukraine-nato-membership-talks-at-nato-summit",
            "date": "2023-07-08",
            "organization": "Blackberry",
            "author": "BlackBerry Research & Intelligence Team",
            "title": "RomCom Threat Actor Suspected of Targeting Ukraine's NATO Membership Talks at the NATO Summit",
            "categories": [
                "ROMCOM RAT"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/23/e/void-rabisu-s-use-of-romcom-backdoor-shows-a-growing-shift-in-th.html",
            "date": "2023-05-30",
            "organization": "Trend Micro",
            "author": "Feike Hacquebord",
            "title": "Void Rabisu\u2019s Use of RomCom Backdoor Shows a Growing Shift in Threat Actors\u2019 Goals",
            "categories": [
                "ROMCOM RAT"
            ]
        },
        {
            "data_url": "https://blog.google/threat-analysis-group/ukraine-remains-russias-biggest-cyber-focus-in-2023/",
            "date": "2023-04-19",
            "organization": "Google",
            "author": "Google Threat Analysis Group",
            "title": "Ukraine remains Russia\u2019s biggest cyber focus in 2023",
            "categories": [
                "ROMCOM RAT"
            ]
        },
        {
            "data_url": "https://cert.gov.ua/article/3349703",
            "date": "2022-12-22",
            "organization": "Cert-UA",
            "author": "Cert-UA",
            "title": "Cyber \u200b\u200battack on DELTA system users using RomCom/FateGrab/StealDeal malware (CERT-UA#5709)",
            "categories": [
                "ROMCOM RAT"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2022/11/romcom-spoofing-solarwinds-keepass",
            "date": "2022-11-02",
            "organization": "Blackberry",
            "author": "Blackberry Research",
            "title": "RomCom Threat Actor Abuses KeePass and SolarWinds to Target Ukraine and Potentially the United Kingdom",
            "categories": [
                "ROMCOM RAT",
                "RomCom"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2022/10/unattributed-romcom-threat-actor-spoofing-popular-apps-now-hits-ukrainian-militaries",
            "date": "2022-10-23",
            "organization": "Blackberry",
            "author": "The BlackBerry Research & Intelligence Team",
            "title": "Unattributed RomCom Threat Actor Spoofing Popular Apps Now Hits Ukrainian Militaries",
            "categories": [
                "ROMCOM RAT",
                "RomCom"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/cuba-ransomware-tropical-scorpius/",
            "date": "2022-08-10",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Anthony Galiette",
            "title": "Novel News on Cuba Ransomware: Greetings From Tropical Scorpius",
            "categories": [
                "Cuba",
                "ROMCOM RAT"
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