var threatdata = {
    "name": "ATMitch",
    "alias": "ATMitch",
    "category": "Malware",
    "type": "ATM malware, Backdoor",
    "modified": "2020-05-25",
    "all_data": {
        "tool": "ATMitch",
        "names": [
            {
                "name": "ATMitch"
            }
        ],
        "description": "(Kaspersky) The malware, which we have dubbed ATMitch, is fairly straightforward. Once remotely installed and executed via Remote Desktop Connection (RDP) access to the ATM from within the bank, the malware looks for the \u201ccommand.txt\u201d file that should be located in the same directory as the malware and created by the attacker.\n\nAfter execution, ATMitch writes the results of this command to the log file and removes \u201ccommand.txt\u201d from the ATM\u2019s hard drive.\n\nThe malware uses the standard XFS library to control the ATM. It should be noted that it works on every ATM that supports the XFS library (which is the vast majority).",
        "category": "Malware",
        "type": [
            "ATM malware",
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/atmitch-remote-administration-of-atms/77918/",
            "https://blog.yoroi.company/research/atmitch-new-evidence-spotted-in-the-wild/",
            "https://documents.trendmicro.com/assets/white_papers/wp-cashing-in-on-atm-malware.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.atmitch"
        ],
        "uuid": "2c14cee1-e5ec-4c33-bce9-7d87d9e5ced4",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "atmitch",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/atm-pos-malware-landscape-2017-2019/96750/",
            "date": "2020-04-23",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky",
            "title": "A look at the ATM/PoS malware landscape from 2017-2019",
            "categories": [
                "ATMitch",
                "WinPot"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/white_papers/wp-cashing-in-on-atm-malware.pdf",
            "date": "2018-03-30",
            "organization": "Trend Micro",
            "author": "David Sancho",
            "title": "Cashing in on ATM Malware: A Comprehensive Look at Various Attack Types",
            "categories": [
                "Project Alice",
                "ATMitch",
                "Ploutus ATM",
                "Ripper ATM",
                "Skimer",
                "SUCEFUL",
                "Tyupkin"
            ]
        },
        {
            "data_url": "https://securelist.com/blog/sas/77918/atmitch-remote-administration-of-atms/",
            "date": "2017-04-04",
            "organization": "Kaspersky Labs",
            "author": "Sergey Golovanov",
            "title": "ATMitch: remote administration of ATMs",
            "categories": [
                "ATMitch"
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