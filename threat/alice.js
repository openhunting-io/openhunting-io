var threatdata = {
    "name": "Alice",
    "alias": "Alice, AliceATM, PrAlice, Project Alice",
    "category": "Malware",
    "type": "ATM malware",
    "modified": "2020-05-25",
    "all_data": {
        "tool": "Alice",
        "names": [
            {
                "name": "Alice"
            },
            {
                "name": "AliceATM"
            },
            {
                "name": "PrAlice"
            },
            {
                "name": "Project Alice"
            }
        ],
        "description": "(Trend Micro) Trend Micro has discovered a new family of ATM malware called Alice, which is the most stripped down ATM malware family we have ever encountered. Unlike other ATM malware families, Alice cannot be controlled via the numeric pad of ATMs; neither does it have information stealing features. It is meant solely to empty the safe of ATMs. We detect this new malware family as BKDR_ALICE.A.",
        "category": "Malware",
        "type": [
            "ATM malware"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/alice-lightweight-compact-no-nonsense-atm-malware/",
            "https://www.s21sec.com/en/blog/2017/01/alice-simplicity-for-atm-jackpotting/",
            "https://documents.trendmicro.com/assets/white_papers/wp-cashing-in-on-atm-malware.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.alice_atm"
        ],
        "uuid": "32a8dc6e-35d9-4e06-81cc-57f5dad0153e",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "alice",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.talosintelligence.com/2019/05/10-years-of-virtual-dynamite.html",
            "date": "2019-05-30",
            "organization": "Talos Intelligence",
            "author": "Vanja Svajcer",
            "title": "10 years of virtual dynamite: A high-level retrospective of ATM malware",
            "categories": [
                "FastCash",
                "Project Alice",
                "Cutlet",
                "Ploutus ATM",
                "Skimer",
                "Tyupkin"
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
            "data_url": "http://blog.trendmicro.com/trendlabs-security-intelligence/alice-lightweight-compact-no-nonsense-atm-malware/",
            "date": "2016-12-20",
            "organization": "Trend Micro",
            "author": "David Sancho",
            "title": "Alice: A Lightweight, Compact, No-Nonsense ATM Malware",
            "categories": [
                "Project Alice"
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