var threatdata = {
    "name": "Comfoo",
    "alias": "Comfoo, Comfoo RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Comfoo",
        "names": [
            {
                "name": "Comfoo"
            },
            {
                "name": "Comfoo RAT"
            }
        ],
        "description": "(SecureWorks)  The Comfoo RAT has the following features:\n\n\u2022 System/network information gathering\n\u2022 Keystroke logging\n\u2022 Screenshots\n\u2022 File upload/download/execute\n\u2022 Command shell",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.secureworks.com/research/secrets-of-the-comfoo-masters"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.comfoo"
        ],
        "uuid": "c46d5fa4-33e9-4eb2-af78-8a09bc34e605",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "comfoo",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secureworks.com/research/secrets-of-the-comfoo-masters",
            "date": "2013-07-31",
            "organization": "Secureworks",
            "author": "Joe Stewart",
            "title": "Secrets of the Comfoo Masters",
            "categories": [
                "Comfoo"
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