var threatdata = {
    "name": "Operation WizardOpium",
    "alias": "Operation WizardOpium",
    "category": "APT",
    "type": "-",
    "modified": "2020-07-02",
    "all_data": {
        "actor": "Operation WizardOpium",
        "names": [
            {
                "name": "Operation WizardOpium",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "North Korea"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2019",
        "description": "(Kaspersky) Kaspersky Exploit Prevention is a component part of Kaspersky products that has successfully detected a number of zero-day attacks in the past. Recently, it caught a new unknown exploit for Google\u2019s Chrome browser. We promptly reported this to the Google Chrome security team. After reviewing of the PoC we provided, Google confirmed there was a zero-day vulnerability and assigned it CVE-2019-13720.\n\nWe are calling these attacks Operation WizardOpium. So far, we have been unable to establish a definitive link with any known threat actors. There are certain very weak code similarities with {{Lazarus Group, Hidden Cobra, Labyrinth Chollima}} attacks, although these could very well be a false flag. The profile of the targeted website is more in line with earlier {{DarkHotel}} attacks that have recently deployed similar false flag attacks.",
        "observed-countries": [
            "South Korea"
        ],
        "information": [
            "https://securelist.com/chrome-0-day-exploit-cve-2019-13720-used-in-operation-wizardopium/94866/",
            "https://securelist.com/windows-0-day-exploit-cve-2019-1458-used-in-operation-wizardopium/95432/",
            "https://securelist.com/the-zero-day-exploits-of-operation-wizardopium/97086/"
        ],
        "uuid": "d25e7c98-dbe9-45c7-8052-1108add0a929",
        "last-card-change": "2020-07-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_wizardopium",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/chrome-0-day-exploit-cve-2019-13720-used-in-operation-wizardopium/94866/",
            "date": "2019-11-01",
            "organization": "Kaspersky Labs",
            "author": "AMR",
            "title": "Chrome 0-day exploit CVE-2019-13720 used in Operation WizardOpium",
            "categories": [
                "Operation WizardOpium"
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