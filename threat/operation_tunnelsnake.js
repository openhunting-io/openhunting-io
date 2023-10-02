var threatdata = {
    "name": "Operation TunnelSnake",
    "alias": "Operation TunnelSnake",
    "category": "APT",
    "type": "-",
    "modified": "2021-05-15",
    "all_data": {
        "actor": "Operation TunnelSnake",
        "names": [
            {
                "name": "Operation TunnelSnake",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2018",
        "description": "(Kaspersky) In this blog post we will focus on the following key findings that came up in our investigation:\n\n\u2022 A newly discovered rootkit that we dub \u2018Moriya\u2019 is used by an unknown actor to deploy passive backdoors on public facing servers, facilitating the creation of a covert C&C communication channel through which they can be silently controlled;\n\u2022 The rootkit was found on networks of regional diplomatic organizations in Asia and Africa, detected on several instances dating back to October 2019 and May 2020, where the infection persisted in the targeted networks for several months after each deployment of the malware;\n\u2022 We observed an additional victim in South Asia, where the threat actor deployed a broad toolset for lateral movement along with the rootkit, including a tool that was formerly used by APT1. Based on the detection timestamps of that toolset, we assess that the attacker had a foothold in the network from as early as 2018;\n\u2022 A couple of other tools that have significant code overlaps with Moriya were found as well. These contain a user mode version of the malware and another driver-based utility used to defeat AV software.",
        "observed-countries": [
            "Asia and Africa"
        ],
        "tools": [
            "Moriya"
        ],
        "information": [
            "https://securelist.com/operation-tunnelsnake-and-moriya-rootkit/101831/"
        ],
        "uuid": "841c5da3-a545-4f1b-b26b-098ede8fa700",
        "last-card-change": "2021-05-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_tunnelsnake",
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