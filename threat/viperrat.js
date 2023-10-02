var threatdata = {
    "name": "ViperRAT",
    "alias": "ViperRAT, Viper RAT",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "ViperRAT",
        "names": [
            {
                "name": "ViperRAT"
            },
            {
                "name": "Viper RAT"
            }
        ],
        "description": "(Lookout) ViperRAT is an active, advanced persistent threat (APT) that sophisticated threat actors are actively using to target and spy on the Israeli Defense Force.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.lookout.com/viperrat-mobile-apt",
            "https://securelist.com/blog/incidents/77562/breaking-the-weakest-link-of-the-strongest-chain/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0506/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.viper_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ViperRAT"
        ],
        "uuid": "d85829da-432f-406b-9cb7-b6d94dc2db87",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "viperrat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://about.fb.com/wp-content/uploads/2021/04/Technical-threat-report-Arid-Viper-April-2021.pdf",
            "date": "2021-04-21",
            "organization": "Facebook",
            "author": "Michael Flossman",
            "title": "Technical Paper // Taking Action Against Arid Viper",
            "categories": [
                "Viper RAT",
                "Micropsia"
            ]
        },
        {
            "data_url": "https://blog.lookout.com/blog/2017/02/16/viperrat-mobile-apt/",
            "date": "2017-02-16",
            "organization": "Lookout",
            "author": "Michael Flossman",
            "title": "ViperRAT: The mobile APT targeting the Israeli Defense Force that should be on your radar",
            "categories": [
                "Viper RAT",
                "AridViper"
            ]
        },
        {
            "data_url": "https://securelist.com/blog/incidents/77562/breaking-the-weakest-link-of-the-strongest-chain/",
            "date": "2017-02-16",
            "organization": "Kaspersky Labs",
            "author": "IDF C4I",
            "title": "Breaking The Weakest Link Of The Strongest Chain",
            "categories": [
                "Viper RAT",
                "AridViper"
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