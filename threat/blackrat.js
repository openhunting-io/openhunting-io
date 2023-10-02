var threatdata = {
    "name": "BlackRAT",
    "alias": "BlackRAT, BlackRemote",
    "category": "Tools",
    "type": "Backdoor",
    "modified": "2023-08-31",
    "all_data": {
        "tool": "BlackRAT",
        "names": [
            {
                "name": "BlackRAT"
            },
            {
                "name": "BlackRemote"
            }
        ],
        "description": "this my first full project using Java\nRemote Administrator Tool with a bunch of opretions to execute on the Target Device\nCompatible with Windows,Linux,MacOS ( Not Tested )",
        "category": "Tools",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://github.com/blackhacker511/blackrat"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.blackremote"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:blackrat"
        ],
        "uuid": "bcd493e5-4cee-48d5-a147-d49244841d68",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "blackrat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://asec.ahnlab.com/en/56405/",
            "date": "2023-08-31",
            "organization": "AhnLab",
            "author": "Sanseo",
            "title": "Analysis of Andariel\u2019s New Attack Activities",
            "categories": [
                "Andardoor",
                "BlackRemote",
                "Tiger RAT",
                "Volgmer"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/05/14/raticate/",
            "date": "2020-05-14",
            "organization": "SophosLabs",
            "author": "Markel Picado",
            "title": "RATicate: an attacker\u2019s waves of information-stealing malware",
            "categories": [
                "Agent Tesla",
                "BetaBot",
                "BlackRemote",
                "Formbook",
                "Loki Password Stealer (PWS)",
                "NetWire RC",
                "NjRAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.jp/blackremote-money-money-money-a-swedish-actor-peddles-an-expensive-new-rat/",
            "date": "2019-10-19",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit42",
            "title": "\u5546\u7528RAT\u306e\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0: Unit 42\u3001\u9ad8\u6a5f\u80fd\u5546\u7528RAT Blackremote RAT\u306e\u4f5c\u8005\u3092\u516c\u958b\u5f8c\u6570\u65e5\u3067\u7279\u5b9a",
            "categories": [
                "BlackRemote"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/blackremote-money-money-money-a-swedish-actor-peddles-an-expensive-new-rat/",
            "date": "2019-10-15",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit42",
            "title": "Blackremote: Money Money Money \u2013 A Swedish Actor Peddles an Expensive New RAT",
            "categories": [
                "BlackRemote"
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