var threatdata = {
    "name": "Fxmsp",
    "alias": "Fxmsp, ATK 134, TAG-CR17",
    "category": "APT",
    "type": "-",
    "modified": "2021-12-09",
    "all_data": {
        "actor": "Fxmsp",
        "names": [
            {
                "name": "Fxmsp",
                "name-giver": "self given"
            },
            {
                "name": "ATK 134",
                "name-giver": "Thales"
            },
            {
                "name": "TAG-CR17",
                "name-giver": "Recorded Future"
            }
        ],
        "country": [
            "Kazakhstan"
        ],
        "motivation": [
            "Financial gain"
        ],
        "first-seen": "2016",
        "description": "(AdvIntel) Throughout 2017 and 2018, Fxmsp established a network of trusted proxy resellers to promote their breaches on the criminal underground. Some of the known Fxmsp TTPs included accessing network environments via externally available remote desktop protocol (RDP) servers and exposed active directory.\n\nMost recently, the actor claimed to have developed a credential-stealing botnet capable of infecting high-profile targets in order to exfiltrate sensitive usernames and passwords. Fxmsp has claimed that developing this botnet and improving its capabilities for stealing information from secured systems is their main goal.",
        "observed-sectors": [
            "Aviation",
            "Education",
            "Energy",
            "Financial",
            "Food and Agriculture",
            "Government",
            "Manufacturing",
            "Retail",
            "Transportation"
        ],
        "observed-countries": [
            "Australia",
            "Brazil",
            "Canada",
            "Chile",
            "China",
            "Colombia",
            "Cyprus",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Germany",
            "Ghana",
            "Hong Kong",
            "India",
            "Indonesia",
            "Ireland",
            "Italy",
            "Jamaica",
            "Japan",
            "Kenya",
            "Kuwait",
            "Malaysia",
            "Maldives",
            "Mexico",
            "Netherlands",
            "Nigeria",
            "Oman",
            "Pakistan",
            "Philippines",
            "Russia",
            "Saudi Arabia",
            "Singapore",
            "South Africa",
            "South Korea",
            "Sri Lanka",
            "Thailand",
            "UAE",
            "UK",
            "USA",
            "Zimbabwe"
        ],
        "tools": [
            "RDP",
            "exposed AD"
        ],
        "operations": [
            {
                "date": "2019-05",
                "activity": "Breaches of Three Major Anti-Virus Companies\nhttps://www.advanced-intel.com/blog/top-tier-russian-hacking-collective-claims-breaches-of-three-major-anti-virus-companies"
            }
        ],
        "counter-operations": [
            {
                "date": "2020-07",
                "activity": "Feds indict 'fxmsp' in connection with million-dollar hacking operation\nhttps://www.cyberscoop.com/fxmsp-andrey-turchin-indictment-fraud-stolen-data/"
            }
        ],
        "information": [
            "https://www.advanced-intel.com/blog/top-tier-russian-hacking-collective-claims-breaches-of-three-major-anti-virus-companies",
            "https://www.group-ib.com/resources/threat-research/fxmsp-report.html"
        ],
        "uuid": "9d6819bf-0b1d-45a8-9042-f0873e2e5227",
        "last-card-change": "2021-12-09",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "fxmsp",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.advanced-intel.com/blog/top-tier-russian-hacking-collective-claims-breaches-of-three-major-anti-virus-companies",
            "date": "2019-05-09",
            "organization": "Advanced Intelligence",
            "author": "Advanced Intelligence",
            "title": "Top-Tier Russian Hacking Collective Claims Breaches of Three Major Anti-Virus Companies",
            "categories": [
                "Fxmsp"
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