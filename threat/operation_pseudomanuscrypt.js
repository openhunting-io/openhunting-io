var threatdata = {
    "name": "Operation PseudoManuscrypt",
    "alias": "Operation PseudoManuscrypt",
    "category": "APT",
    "type": "-",
    "modified": "2021-12-27",
    "all_data": {
        "actor": "Operation PseudoManuscrypt",
        "names": [
            {
                "name": "Operation PseudoManuscrypt",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2021",
        "description": "(Kaspersky) In June 2021, Kaspersky ICS CERT experts identified malware whose loader has some similarities to the Manuscrypt malware, which is part of the {{Lazarus Group, Hidden Cobra, Labyrinth Chollima}} APT group\u2019s arsenal. In 2020, the group used Manuscrypt in attacks on defense enterprises in different countries. These attacks are described in the report \u201cLazarus targets defense industry with ThreatNeedle\u201d.\n\nCuriously, the data exfiltration channel of the malware uses an implementation of the KCP protocol that has previously been seen in the wild only as part of the {{APT 41}} group\u2019s toolset.\n\nWe dubbed the newly-identified malware PseudoManuscrypt.\n\nThe PseudoManuscrypt loader makes its way onto user systems via a MaaS platform that distributes malware in pirated software installer archives. One specific case of the PseudoManuscrypt downloader\u2019s distribution is its installation via the Glupteba botnet (whose main installer is also distributed via the pirated software installer distribution platform). This means that the malware distribution tactics used by the threat actor behind PseudoManuscrypt demonstrate no particular targeting.\n\nDuring the period from January 20 to November 10, 2021, Kaspersky products blocked PseudoManuscrypt on more than 35,000 computers in 195 countries of the world. Such a large number of attacked systems is not characteristic of the Lazarus group or APT attacks as a whole.\n\nTargets of PseudoManuscrypt attacks include a significant number of industrial and government organizations, including enterprises in the military-industrial complex and research laboratories.",
        "observed-sectors": [
            "Construction",
            "Defense",
            "Energy",
            "Engineering",
            "Government",
            "Industrial",
            "Manufacturing",
            "Utilities"
        ],
        "observed-countries": [
            "Worldwide"
        ],
        "tools": [
            "PseudoManuscrypt"
        ],
        "information": [
            "https://ics-cert.kaspersky.com/reports/2021/12/16/pseudomanuscrypt-a-mass-scale-spyware-attack-campaign/"
        ],
        "uuid": "befea48a-5cb4-4715-a68b-5bb7d6370f5b",
        "last-card-change": "2021-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_pseudomanuscrypt",
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