var threatdata = {
    "name": "Muddled Libra",
    "alias": "Muddled Libra, 0ktapus, Scattered Spider, Scatter Swine",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-22",
    "all_data": {
        "actor": "Muddled Libra",
        "names": [
            {
                "name": "Muddled Libra",
                "name-giver": "Palo Alto"
            },
            {
                "name": "0ktapus",
                "name-giver": "Group-IB"
            },
            {
                "name": "Scattered Spider",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Scatter Swine",
                "name-giver": "Okta"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage",
            "Financial gain"
        ],
        "first-seen": "2022",
        "description": "(Palo Alto) Muddled Libra is a methodical adversary that poses a substantial threat to organizations in the software automation, BPO, telecommunications and technology industries. They are proficient in a range of security disciplines, able to thrive in relatively secure environments and execute rapidly to complete devastating attack chains.\n\nMuddled Libra doesn\u2019t bring anything new to the table except for the uncanny knack of stringing together weaknesses to disastrous effect. Defenders must combine cutting-edge technology and comprehensive security hygiene, as well as diligent monitoring of external threats and internal events. The high-stakes risk of loss of internal and customer data is a strong incentive to modernize information security programs.",
        "observed-sectors": [
            "IT",
            "Technology",
            "Telecommunications"
        ],
        "tools": [
            "DCSync",
            "Impacket",
            "Mimikatz",
            "ProcDump",
            "PsExec",
            "SharpHound",
            "WinRAR"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/muddled-libra/#post-128741-_rfqbe8ejs15o"
        ],
        "uuid": "863b90f7-7e0a-45d4-b815-072442335e05",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "muddled_libra",
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