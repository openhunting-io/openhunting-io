var threatdata = {
    "name": "LazyCat",
    "alias": "LazyCat",
    "category": "Malware",
    "type": "Credential stealer",
    "modified": "2020-09-24",
    "all_data": {
        "tool": "LazyCat",
        "names": [
            {
                "name": "LazyCat"
            }
        ],
        "description": "(Yoroi) The malware is named LazyCat, mainly derived by the famous {{Mimikatz}} pentest tool.",
        "category": "Malware",
        "type": [
            "Credential stealer"
        ],
        "information": [
            "https://yoroi.company/research/the-arsenal-behind-the-australian-parliament-hack/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.lazycat"
        ],
        "uuid": "f9ce54c8-473a-46a7-8e0d-6a779d319113",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "lazycat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.microsoft.com/security/blog/2020/09/24/gadolinium-detecting-empires-cloud/",
            "date": "2020-09-24",
            "organization": "Microsoft",
            "author": "Ben Koehl",
            "title": "Microsoft Security\u2014detecting empires in the cloud",
            "categories": [
                "CACTUSTORCH",
                "LazyCat",
                "APT40"
            ]
        },
        {
            "data_url": "https://blog.yoroi.company/research/the-arsenal-behind-the-australian-parliament-hack/",
            "date": "2019-02-26",
            "organization": "Yoroi",
            "author": "ZLAB-Yoroi",
            "title": "The Arsenal Behind the Australian Parliament Hack",
            "categories": [
                "LazyCat",
                "powerkatz",
                "Unidentified 057"
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