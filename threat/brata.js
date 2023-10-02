var threatdata = {
    "name": "Brata",
    "alias": "Brata, AmexTroll",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Credential stealer",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Brata",
        "names": [
            {
                "name": "Brata"
            },
            {
                "name": "AmexTroll"
            }
        ],
        "description": "(Cleafy) The attack chain usually starts with a fake SMS containing a link to a website. The SMS seems to come from the bank (the so-called spoofing scam), and it tries to convince the victim to download an anti-spam app, with the promise to be contacted soon by a bank operator.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://www.cleafy.com/cleafy-labs/mobile-banking-fraud-brata-strikes-again",
            "https://securelist.com/spying-android-rat-from-brazil-brata/92775/",
            "https://www.cleafy.com/cleafy-labs/how-brata-is-monitoring-your-bank-account",
            "https://www.cleafy.com/cleafy-labs/brata-is-evolving-into-an-advanced-persistent-threat"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.brata"
        ],
        "uuid": "780ef3b8-fd64-488f-a73f-e96ab1bd1f00",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "BRATA",
            "malware_alias": "AmexTroll",
            "malware": "apk.brata",
            "last_update": "2022-08-25 22:56:43",
            "tags": [
                "BRATA"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "192.227.134.72:443",
                        "timestamp": "2022-08-14 11:10:11"
                    }
                ],
                "domain": [
                    {
                        "value": "nazi-ziba.tk",
                        "timestamp": "2022-08-14 11:07:54"
                    },
                    {
                        "value": "new-acc.cf",
                        "timestamp": "2022-08-14 11:07:54"
                    },
                    {
                        "value": "new-acc.ga",
                        "timestamp": "2022-08-14 11:07:54"
                    },
                    {
                        "value": "publiveum.ga",
                        "timestamp": "2022-08-14 11:07:54"
                    },
                    {
                        "value": "publiveum.gq",
                        "timestamp": "2022-08-14 11:07:54"
                    },
                    {
                        "value": "publiveum.ml",
                        "timestamp": "2022-08-16 01:57:52"
                    },
                    {
                        "value": "sahaamdar.tk",
                        "timestamp": "2022-08-14 11:07:54"
                    },
                    {
                        "value": "saham-daraen.tk",
                        "timestamp": "2022-08-14 11:07:54"
                    },
                    {
                        "value": "saham-edalat-t.tk",
                        "timestamp": "2022-08-14 11:07:54"
                    },
                    {
                        "value": "samaneha-sahaeam.tk",
                        "timestamp": "2022-08-14 11:07:54"
                    },
                    {
                        "value": "umlive.gq",
                        "timestamp": "2022-08-14 11:07:54"
                    },
                    {
                        "value": "umlive.ml",
                        "timestamp": "2022-08-14 11:07:54"
                    },
                    {
                        "value": "wuiwidudiei.tk",
                        "timestamp": "2022-08-14 11:07:54"
                    },
                    {
                        "value": "drsazihstdie.tk",
                        "timestamp": "2022-08-14 11:07:53"
                    },
                    {
                        "value": "eblagh-markaz.tk",
                        "timestamp": "2022-08-14 11:07:53"
                    },
                    {
                        "value": "edalatum.gq",
                        "timestamp": "2022-08-14 11:07:53"
                    },
                    {
                        "value": "edalatum.tk",
                        "timestamp": "2022-08-14 11:07:53"
                    },
                    {
                        "value": "kisiremot.ga",
                        "timestamp": "2022-08-14 11:07:53"
                    },
                    {
                        "value": "kisiremot.ml",
                        "timestamp": "2022-08-14 11:07:53"
                    },
                    {
                        "value": "kisiremot.tk",
                        "timestamp": "2022-08-14 11:07:53"
                    },
                    {
                        "value": "kospedarpari.gq",
                        "timestamp": "2022-08-14 11:07:53"
                    },
                    {
                        "value": "liveum.ga",
                        "timestamp": "2022-08-14 11:07:53"
                    },
                    {
                        "value": "medive.ga",
                        "timestamp": "2022-08-25 22:56:43"
                    },
                    {
                        "value": "myumlive.cf",
                        "timestamp": "2022-08-14 11:07:53"
                    },
                    {
                        "value": "myumlive.ml",
                        "timestamp": "2022-08-14 11:07:53"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-08-25 22:56:43",
    "file_name": "brata",
    "analysis": null,
    "articles": [],
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