var threatdata = {
    "name": "DEV-0270, Nemesis Kitten",
    "alias": "DEV-0270, Nemesis Kitten, DireFate",
    "category": "APT",
    "type": "-",
    "modified": "2023-01-01",
    "all_data": {
        "actor": "DEV-0270, Nemesis Kitten",
        "names": [
            {
                "name": "DEV-0270",
                "name-giver": "Microsoft"
            },
            {
                "name": "Nemesis Kitten",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "DireFate",
                "name-giver": "BAE Systems"
            }
        ],
        "country": [
            "Iran"
        ],
        "motivation": [
            "Financial gain"
        ],
        "first-seen": "2022",
        "description": "A subgroup of {{Magic Hound, APT 35, Cobalt Illusion, Charming Kitten}}.\n\n(Microsoft) Microsoft threat intelligence teams have been tracking multiple ransomware campaigns and have tied these attacks to DEV-0270, also known as Nemesis Kitten, a sub-group of Iranian actor PHOSPHORUS. Microsoft assesses with moderate confidence that DEV-0270 conducts malicious network operations, including widespread vulnerability scanning, on behalf of the government of Iran. However, judging from their geographic and sectoral targeting, which often lacked a strategic value for the regime, we assess with low confidence that some of DEV-0270\u2019s ransomware attacks are a form of moonlighting for personal or company-specific revenue generation.",
        "tools": [
            "Impacket",
            "WmiExec",
            "Living off the Land"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2022/09/07/profiling-dev-0270-phosphorus-ransomware-operations/"
        ],
        "uuid": "e96efff5-793f-430f-b8fb-5c64c83fa232",
        "last-card-change": "2023-01-01",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dev-0270_nemesis_kitten",
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