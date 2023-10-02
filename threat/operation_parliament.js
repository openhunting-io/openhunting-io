var threatdata = {
    "name": "Operation Parliament",
    "alias": "Operation Parliament",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-15",
    "all_data": {
        "actor": "Operation Parliament",
        "names": [
            {
                "name": "Operation Parliament",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2017",
        "description": "(Kaspersky) Based on our findings, we believe the attackers represent a previously unknown geopolitically motivated threat actor. The campaign started in 2017, with the attackers doing just enough to achieve their goals. They most likely have access to additional tools when needed and appear to have access to an elaborate database of contacts in sensitive organizations and personnel worldwide, especially of vulnerable and non-trained staff. The victim systems range from personal desktop or laptop systems to large servers with domain controller roles or similar. The nature of the targeted ministries varied, including those responsible for telecommunications, health, energy, justice, finance and so on.\n\nOperation Parliament appears to be another symptom of escalating tensions in the Middle East region. The attackers have taken great care to stay under the radar, imitating another attack group in the region. They have been particularly careful to verify victim devices before proceeding with the infection, safeguarding their command and control servers. The targeting seems to have slowed down since the beginning of 2018, probably winding down when the desired data or access was obtained. The targeting of specific victims is unlike previously seen behavior in regional campaigns by Gaza Cybergang or Desert Falcons and points to an elaborate information-gathering exercise that was carried out before the attacks (physical and/or digital).\n\nWith deception and false flags increasingly being employed by threat actors, attribution is a hard and complicated task that requires solid evidence, especially in complex regions such as the Middle East.\n\nAn overlap has been found between Operation Parliament and {{Molerats, Extreme Jackal, Gaza Cybergang}}.",
        "observed-sectors": [
            "Defense",
            "Education",
            "Energy",
            "Financial",
            "Government",
            "Healthcare",
            "Media",
            "Research",
            "Shipping and Logistics",
            "Telecommunications",
            "Sports"
        ],
        "observed-countries": [
            "Afghanistan",
            "Canada",
            "Chile",
            "Denmark",
            "Djibouti",
            "Egypt",
            "Germany",
            "India",
            "Iran",
            "Iraq",
            "Israel",
            "Jordan",
            "Kuwait",
            "Lebanon",
            "Morocco",
            "Oman",
            "Palestine",
            "Qatar",
            "Russia",
            "Saudi Arabia",
            "Serbia",
            "Somalia",
            "South Korea",
            "Syria",
            "UAE",
            "UK",
            "USA"
        ],
        "tools": [
            "Remote CMD/PowerShell terminal"
        ],
        "information": [
            "https://securelist.com/operation-parliament-who-is-doing-what/85237/",
            "https://blog.talosintelligence.com/2018/02/targeted-attacks-in-middle-east.html"
        ],
        "uuid": "8fc014f7-042d-4cfe-a5e2-0822b17a7e7b",
        "last-card-change": "2020-04-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_parliament",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/operation-parliament",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Operation Parliament",
            "categories": [
                "Operation Parliament"
            ]
        },
        {
            "data_url": "https://securelist.com/operation-parliament-who-is-doing-what/85237/",
            "date": "2018-04-12",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Operation Parliament, who is doing what?",
            "categories": [
                "Operation Parliament"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2018/02/targeted-attacks-in-middle-east.html",
            "date": "2018-02-07",
            "organization": "Talos",
            "author": "Paul Rascagn\u00e8res",
            "title": "Targeted Attacks In The Middle East",
            "categories": [
                "Operation Parliament"
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