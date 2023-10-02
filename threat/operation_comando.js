var threatdata = {
    "name": "Operation Comando",
    "alias": "Operation Comando",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "Operation Comando",
        "names": [
            {
                "name": "Operation Comando",
                "name-giver": "Palo Alto"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime"
        ],
        "first-seen": "2018",
        "description": "(Palo Alto) In December 2018, Palo Alto Networks Unit 42 researchers identified an ongoing campaign with a strong focus on the hospitality sector, specifically on hotel reservations. Although our initial analysis didn\u2019t show any novel or advanced techniques, we did observe strong persistence during the campaign that triggered our curiosity.\n\nWe followed network traces and pivoted on the information left behind by this actor, such as open directories, document metadata, and binary peculiarities, which enabled us to find a custom-made piece of malware, that we named \u201cCapturaTela\u201d. Our discovery of this malware family shows the reason for the persistent focus on hotel reservations as a primary vector: stealing credit card information from customers.\n\nWe profiled this threat actor and that has resulted in uncovering not only their delivery mechanisms, but also their arsenal of remote access tools and info-stealing trojans, both acquired from underground forums as well as open source tools found in GitHub repositories.",
        "observed-sectors": [
            "Hospitality",
            "specifically on hotel reservations"
        ],
        "observed-countries": [
            "Brazil"
        ],
        "tools": [
            "AsyncRAT",
            "CapturaTela",
            "LimeRAT",
            "NanoCore RAT",
            "njRAT",
            "RemcosRAT",
            "RevengeRAT"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/operation-comando-or-how-to-run-a-cheap-and-effective-credit-card-business/"
        ],
        "uuid": "06343cf4-1911-4cc4-8e5d-501194314650",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_comando",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/operation-comando-or-how-to-run-a-cheap-and-effective-credit-card-business/",
            "date": "2019-03-12",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Operation Comando: How to Run a Cheap and Effective Credit Card Business",
            "categories": [
                "Operation Comando"
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