var threatdata = {
    "name": "IGT supertool",
    "alias": "IGT supertool, Information Gathering Tool",
    "category": "Malware",
    "type": "Reconnaissance, Credential stealer",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "IGT supertool",
        "names": [
            {
                "name": "IGT supertool"
            },
            {
                "name": "Information Gathering Tool"
            }
        ],
        "description": "(Kaspersky) A noteworthy addition to the Poseidon toolkit is the IGT supertool (Information Gathering toolkit), a bulking 15 megabyte executable that orchestrates a series of different information collections steps, exfiltration, and the cleanup of components. This tool appears to be designed to operate on high-value corporate systems like Domain Controllers or IIS servers that act as repositories of valuable information, particularly for lateral movement. The Information Gathering Tool (IGT) tool is coded in Delphi and includes powershell and SQL components across a dozen different drops. This tool contains several other executable files made in different programming languages ranging from Visual Basic 6 to C#, each one performing a very clear task devised by the group when trying to obtain more information from an objective. The main purpose of the IGT tool is to make an inventory of the system, saving information from the network interfaces and addresses, credentials belonging to the Domain and database server, services being run from the OS and everything that could help the Poseidon Group make its attack more customized to its victim.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Credential stealer"
        ],
        "information": [
            "https://securelist.com/poseidon-group-a-targeted-attack-boutique-specializing-in-global-cyber-espionage/73673/"
        ],
        "uuid": "aec9cf8f-47ca-4f6e-af5d-e12865e5bd4b",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "igt_supertool",
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