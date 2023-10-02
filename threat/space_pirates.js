var threatdata = {
    "name": "Space Pirates",
    "alias": "Space Pirates, Webworm",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-06",
    "all_data": {
        "actor": "Space Pirates",
        "names": [
            {
                "name": "Space Pirates",
                "name-giver": "Positive Technologies"
            },
            {
                "name": "Webworm",
                "name-giver": "Symantec"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2017",
        "description": "(BleepingComputer) A previously unknown Chinese hacking group known as 'Space Pirates' targets enterprises in the Russian aerospace industry with phishing emails to install novel malware on their systems.\n\nThe threat group is believed to have started operating in 2017, and while it has links to known groups like {{APT 41}} (Winnti), {{Mustang Panda, Bronze President}}, and {{Emissary Panda, APT 27, LuckyMouse, Bronze Union}}, it is thought to be a new cluster of malicious activity.\n\nRussian threat analysts at Positive Technologies named the group 'Space Pirates' due to their espionage operations focusing on stealing confidential information from companies in the aerospace field.",
        "observed-sectors": [
            "Aerospace",
            "Energy",
            "IT"
        ],
        "observed-countries": [
            "Georgia",
            "Mongolia",
            "Serbia",
            "Russia"
        ],
        "tools": [
            "9002 RAT",
            "BH_A006",
            "Deed RAT",
            "Gh0st RAT",
            "MyKLoadClient",
            "PCShare",
            "PlugX",
            "Poison Ivy",
            "ShadowPad Winnti",
            "Trochilus RAT",
            "Zupdax"
        ],
        "operations": [
            {
                "date": "2022-09",
                "activity": "Webworm: Espionage Attackers Testing and Using Older Modified RATs\nhttps://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/webworm-espionage-rats"
            }
        ],
        "information": [
            "https://www.bleepingcomputer.com/news/security/chinese-space-pirates-are-hacking-russian-aerospace-firms/",
            "https://www.ptsecurity.com/ru-ru/research/pt-esc-threat-intelligence/space-pirates-tools-and-connections/",
            "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/space-pirates-a-look-into-the-group-s-unconventional-techniques-new-attack-vectors-and-tools/"
        ],
        "uuid": "0ca08038-12b4-4023-977f-ba63b4471cdb",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "space_pirates",
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