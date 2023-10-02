var threatdata = {
    "name": "Pat Bear, APT-C-37",
    "alias": "Pat Bear, APT-C-37, Racquet Bear",
    "category": "APT",
    "type": "-",
    "modified": "2023-01-01",
    "all_data": {
        "actor": "Pat Bear, APT-C-37",
        "names": [
            {
                "name": "Pat Bear",
                "name-giver": "Qihoo 360"
            },
            {
                "name": "APT-C-37",
                "name-giver": "Qihoo 360"
            },
            {
                "name": "Racquet Bear",
                "name-giver": "CrowdStrike"
            }
        ],
        "country": [
            "Syria"
        ],
        "sponsor": "Syrian Electronic Army",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2015",
        "description": "A subgroup of {{Syrian Electronic Army (SEA), Deadeye Jackal}}.\n\n(Qihoo 360) Since October 2015, the Pat Bear Organization (APT-C-37) has launched a well-organized, targeted and persistent attack against the \u201cIslamic State\u201d. Watering hole was used to delivery sample in this attack. The malicious samples were mainly disguised as chat software and some common software in specific fields. This Trojan has many functions such as stealing messages, contacts, WhatsApp and Telegram data, and uploading files using FTP. After reversing and correlation, we found that there is a strong correlation between the Pat Bear Organization and the Golden Rat issue, so this attack activity belongs to another branch of the Syrian Electronic Army.",
        "observed-sectors": [
            "Defense"
        ],
        "observed-countries": [
            "Egypt",
            "Israel",
            "\u201cIslamic State\u201d"
        ],
        "tools": [
            "DroidJack",
            "H-Worm",
            "njRAT",
            "SpyNote RAT",
            "SSLove RAT"
        ],
        "information": [
            "http://blogs.360.cn/post/SEA_role_influence_cyberattacks.html",
            "https://cybersecurity.att.com/blogs/labs-research/alien-labs-2019-analysis-of-threat-groups-molerats-and-apt-c-37#When:14:00:00Z"
        ],
        "uuid": "01751615-25f0-4ad7-9db9-65abe62e506a",
        "last-card-change": "2023-01-01",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pat_bear_apt-c-37",
    "analysis": null,
    "articles": [],
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