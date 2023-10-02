var threatdata = {
    "name": "Atmosphere",
    "alias": "Atmosphere",
    "category": "Malware",
    "type": "ATM malware",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Atmosphere",
        "names": [
            {
                "name": "Atmosphere"
            }
        ],
        "description": "(Group-IB) To control the ATM dispenser, Silence uses a unique software called Atmosphere. Over time the Trojan has significantly evolved to address the needs of the criminals. For example, the developers have changed the logic of injection into processes and added the flexible injector, which has expanded the list of targeted ATMs. They have also removed the redundant features that interrupted the operation or were not used by the criminals. For example, the last version of the software didn\u2019t process commands from the PIN pad and the generated log got smaller. In the initial stages, the software was recompiled a lot, which resulted in several unsuccessful cashout attempts.",
        "category": "Malware",
        "type": [
            "ATM malware"
        ],
        "information": [
            "https://www.group-ib.com/resources/threat-research/silence_moving-into-the-darkside.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.atmosphere"
        ],
        "uuid": "a06e89c3-ca40-496d-a7eb-183f2816ae94",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "atmosphere",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.zdnet.com/article/new-silence-hacking-group-suspected-of-having-ties-to-cyber-security-industry/",
            "date": "2018-09-05",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "New Silence hacking group suspected of having ties to cyber-security industry",
            "categories": [
                "Atmosphere"
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