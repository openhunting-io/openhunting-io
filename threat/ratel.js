var threatdata = {
    "name": "RATel",
    "alias": "RATel",
    "category": "Tools",
    "type": "Backdoor",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "RATel",
        "names": [
            {
                "name": "RATel"
            }
        ],
        "description": "RAT-el is an open source penetration test tool that allows you to take control of a windows machine.\n\nIt works on the client-server model, the server sends commands and the client executes the commands and sends the result back to the server.\n\nThe client is completely undetectable by anti-virus software.",
        "category": "Tools",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://github.com/frenchcisco/ratel"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ratel"
        ],
        "uuid": "086b803d-1cef-4fcb-aad1-ec14c1980109",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ratel",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/tomiris-called-they-want-their-turla-malware-back/109552/",
            "date": "2023-04-24",
            "organization": "Kaspersky Labs",
            "author": "Pierre Delcher",
            "title": "Tomiris called, they want their Turla malware back",
            "categories": [
                "KopiLuwak",
                "Andromeda",
                "Ave Maria",
                "GoldMax",
                "JLORAT",
                "Kazuar",
                "Meterpreter",
                "QUIETCANARY",
                "RATel",
                "Roopy",
                "Telemiris",
                "tomiris",
                "Topinambour"
            ]
        },
        {
            "data_url": "https://businessinsights.bitdefender.com/tech-advisory-manageengine-cve-2022-47966",
            "date": "2023-02-23",
            "organization": "Bitdefender",
            "author": "Martin Zugec",
            "title": "Technical Advisory: Various Threat Actors Targeting ManageEngine Exploit CVE-2022-47966",
            "categories": [
                "Cobalt Strike",
                "DarkComet",
                "QuiteRAT",
                "RATel"
            ]
        },
        {
            "data_url": "https://github.com/FrenchCisco/RATel",
            "date": "2021-04-06",
            "organization": "Github (FrenchCisco)",
            "author": "FrenchCisco",
            "title": "Github Repository: RATel",
            "categories": [
                "RATel"
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