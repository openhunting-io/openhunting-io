var threatdata = {
    "name": "POOLRAT",
    "alias": "POOLRAT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "POOLRAT",
        "names": [
            {
                "name": "POOLRAT"
            }
        ],
        "description": "(Mandiant) POOLRAT is a C/C++ macOS backdoor capable of collecting basic system information and executing commands. The commands performed include running arbitrary commands, secure deleting files, reading and writing files, updating the configuration.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.mandiant.com/resources/blog/3cx-software-supply-chain-compromise"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.poolrat"
        ],
        "uuid": "d41c61a9-8bab-48da-873d-5f733d9e218c",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "poolrat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/resources/blog/3cx-software-supply-chain-compromise",
            "date": "2023-04-20",
            "organization": "Mandiant",
            "author": "JEFF JOHNSON",
            "title": "3CX Software Supply Chain Compromise Initiated by a Prior Software Supply Chain Compromise; Suspected North Korean Actor Responsible",
            "categories": [
                "POOLRAT",
                "IconicStealer"
            ]
        },
        {
            "data_url": "https://www.3cx.com/blog/news/mandiant-security-update2/",
            "date": "2023-04-20",
            "organization": "3CX",
            "author": "Agathocles Prodromou",
            "title": "Security Update Thursday 20 April 2023 \u2013 Initial Intrusion Vector Found",
            "categories": [
                "POOLRAT"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/lazarus-north-korea-indictment",
            "date": "2021-02-18",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Lazarus: Three North Koreans Charged for Financially Motivated Attacks",
            "categories": [
                "AppleJeus",
                "POOLRAT",
                "Unidentified macOS 001 (UnionCryptoTrader)",
                "AppleJeus",
                "Unidentified 077 (Lazarus Downloader)"
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