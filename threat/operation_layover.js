var threatdata = {
    "name": "Operation Layover",
    "alias": "Operation Layover",
    "category": "APT",
    "type": "-",
    "modified": "2021-11-02",
    "all_data": {
        "actor": "Operation Layover",
        "names": [
            {
                "name": "Operation Layover",
                "name-giver": "Talos"
            }
        ],
        "country": [
            "Nigeria"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2013",
        "description": "(Talos) Cisco Talos and other security researchers have recently reported on a series of malicious campaigns targeting the aviation industry. These reports mainly center around the crypter that hides the usage of commodity malicious remote access tools.\n\nWe decided this would be a good starting point to demonstrate how a researcher can pivot from the initial discovery of a RAT and eventually profile a threat actor. This post will show how we discovered previous campaigns targeting the aviation industry, which links back to an actor that's been active for approximately six years.\n\nWe believe the actor is based out of Nigeria with a high degree of confidence and doesn't seem to be technically sophisticated, using off-the-shelf malware since the beginning of its activities without developing its own malware. The actor also buys the crypters that allow the usage of such malware without being detected, throughout the years it has used several different cryptors, mostly bought on online forums.\n\nWe also believe with a high degree of confidence that the actor has been active for at least five years. For the last two, they've been targeting the aviation industry, while conducting other campaigns at the same time. Pivoting from an initial discovery is not an exact science \u2014 in this process, a researcher must assert a certain level of confidence in these associations.",
        "tools": [
            "AsyncRAT",
            "CyberGate RAT",
            "njRAT"
        ],
        "information": [
            "https://blog.talosintelligence.com/2021/09/operation-layover-how-we-tracked-attack.html"
        ],
        "uuid": "3c999046-a518-4df5-acc2-b96146331ac7",
        "last-card-change": "2021-11-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_layover",
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