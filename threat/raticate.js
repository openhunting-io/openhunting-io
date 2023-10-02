var threatdata = {
    "name": "RATicate",
    "alias": "RATicate",
    "category": "APT",
    "type": "-",
    "modified": "2020-07-15",
    "all_data": {
        "actor": "RATicate",
        "names": [
            {
                "name": "RATicate",
                "name-giver": "Sophos"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2019",
        "description": "(Sophos) In a series of malspam campaigns dating back to November of 2019, an unidentified group sent out waves of installers that drop remote administration tool (RAT) and information stealing malware on victims\u2019 computers.\n\nWe\u2019ve identified five separate campaigns between November, 2019 and January, 2020 in which the payloads used similar packing code and pointed to the same command and control (C&C) infrastructure. The campaigns targeted industrial companies in Europe, the Middle East, and the Republic of Korea. This leads us to believe that they are all the work of the same actors\u2014a group we\u2019ve dubbed RATicate.\n\nA new campaign we believe connected to the same actors leverages concern about the global COVID-19 pandemic to convince victims to open the payloads. This is a shift in tactics, but we suspect that this group constantly changes the way they deploy malware\u2014and that the group has conducted campaigns prior to this past November.",
        "observed-sectors": [
            "Industrial",
            "Manufacturing",
            "Media",
            "Telecommunications"
        ],
        "observed-countries": [
            "Romania",
            "Japan",
            "Kuwait",
            "South Korea",
            "Switzerland",
            "UK",
            "Europe and Middle East"
        ],
        "tools": [
            "Agent Tesla",
            "BetaBot",
            "BlackRAT",
            "Formbook",
            "GuLoader",
            "LokiBot",
            "NetWire RC",
            "njRAT",
            "NSIS",
            "RemcosRAT"
        ],
        "information": [
            "https://news.sophos.com/en-us/2020/05/14/raticate/",
            "https://news.sophos.com/en-us/2020/07/14/raticate-rats-as-service-with-commercial-crypter/"
        ],
        "uuid": "30e5ac74-bfff-470f-ba68-a9f34ea7c57b",
        "last-card-change": "2020-07-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "raticate",
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