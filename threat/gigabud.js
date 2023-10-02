var threatdata = {
    "name": "Gigabud",
    "alias": "Gigabud, Gigabud RAT",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Credential stealer",
    "modified": "2023-09-06",
    "all_data": {
        "tool": "Gigabud",
        "names": [
            {
                "name": "Gigabud"
            },
            {
                "name": "Gigabud RAT"
            }
        ],
        "description": "(Group-IB) One of Gigabud RAT\u2019s unique features is that it doesn\u2019t execute any malicious actions until the user is authorized into the malicious application by a fraudster, as will be shown in the Distribution section, which makes it harder to detect. Instead of using HTML overlay attacks, Gigabud RAT gathers sensitive information primarily through screen recording.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://www.group-ib.com/blog/gigabud-banking-malware/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.gigabud"
        ],
        "uuid": "5a809ab7-3b4e-418f-af13-2c897c3089b5",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "gigabud",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.group-ib.com/blog/gigabud-banking-malware/",
            "date": "2023-08-14",
            "organization": "Group-IB",
            "author": "Pavel Naumov",
            "title": "Breaking down Gigabud banking malware with Group-IB Fraud Matrix",
            "categories": [
                "Gigabud"
            ]
        },
        {
            "data_url": "https://blog.cyble.com/2023/01/19/gigabud-rat-new-android-rat-masquerading-as-government-agencies/",
            "date": "2023-01-19",
            "organization": "cyble",
            "author": "Cyble",
            "title": "Gigabud RAT: New Android RAT Masquerading as Government Agencies",
            "categories": [
                "Gigabud"
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