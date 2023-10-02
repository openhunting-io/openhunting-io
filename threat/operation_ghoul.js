var threatdata = {
    "name": "Operation Ghoul",
    "alias": "Operation Ghoul",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "Operation Ghoul",
        "names": [
            {
                "name": "Operation Ghoul",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2016",
        "description": "(Kaspersky) Kaspersky Lab has observed new waves of attacks that started on the 8th and the 27th of June 2016. These have been highly active in the Middle East region and unveiled ongoing targeted attacks in multiple regions. The attackers try to lure targets through spear phishing emails that include compressed executables. The malware collects all data such as passwords, keystrokes and screenshots, then sends it to the attackers.\n\nWe found that the group behind this campaign targeted mainly industrial, engineering and manufacturing organizations in more than 30 countries. In total, over 130 organizations have been identified as victims of this campaign. Using the Kaspersky Security Network (KSN) and artifacts from malware files and attack sites, we were able to trace the attacks back to March 2015. Noteworthy is that since the beginning of their activities, the attackers\u2019 motivations are apparently financial, whether through the victims\u2019 banking accounts or through selling their intellectual property to interested parties, most infiltrated victim organizations are considered SMBs (Small to Medium size businesses, 30-300 employees), the utilization of commercial off-the-shelf malware makes the attribution of the attacks more difficult.",
        "observed-sectors": [
            "Education",
            "Engineering",
            "Industrial",
            "Manufacturing",
            "IT",
            "Pharmaceutical",
            "Shipping and Logistics",
            "Tourism and Trading"
        ],
        "observed-countries": [
            "Azerbaijan",
            "China",
            "Egypt",
            "France",
            "Germany",
            "Gibraltar",
            "India",
            "Iran",
            "Iraq",
            "Italy",
            "Pakistan",
            "Portugal",
            "Romania",
            "Qatar",
            "Saudi Arabia",
            "Spain",
            "Sweden",
            "Switzerland",
            "Taiwan",
            "Turkey",
            "UAE",
            "UK",
            "USA"
        ],
        "tools": [
            "OpGhoul"
        ],
        "information": [
            "https://securelist.com/operation-ghoul-targeted-attacks-on-industrial-and-engineering-organizations/75718/"
        ],
        "uuid": "7ad2d47f-2f79-4d4a-aeaa-137747a961df",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_ghoul",
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