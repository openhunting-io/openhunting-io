var threatdata = {
    "name": "MysterySnail RAT",
    "alias": "MysterySnail RAT, MysterySnail",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "MysterySnail RAT",
        "names": [
            {
                "name": "MysterySnail RAT"
            },
            {
                "name": "MysterySnail"
            }
        ],
        "description": "(Kaspersky) Our deep dive into the MysterySnail RAT family started with an analysis of a previously unknown remote shell-type Trojan that was intended to be executed by an elevation of privilege exploit. The sample which we analyzed was also uploaded to VT on August 10, 2021. The sample is very big \u2013 8.29MB. One of the reasons for the file size is that it\u2019s statically compiled with the OpenSSL library and contains unused code and data belonging to that library. But the main reason for its size is the presence of two very large functions that do nothing but waste processor clock cycles. These functions also \u201cuse\u201d randomly generated strings that are also present in a binary.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://securelist.com/mysterysnail-attacks-with-windows-zero-day/104509/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.mystery_snail"
        ],
        "uuid": "582092bf-4d53-40c0-bb80-c7c1508127b2",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "mysterysnail_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/mysterysnail-attacks-with-windows-zero-day/104509/",
            "date": "2021-10-12",
            "organization": "",
            "author": "Boris Larin",
            "title": "MysterySnail attacks with Windows zero-day",
            "categories": [
                "MysterySnail"
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