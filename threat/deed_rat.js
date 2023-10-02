var threatdata = {
    "name": "Deed RAT",
    "alias": "Deed RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Loader",
    "modified": "2022-07-19",
    "all_data": {
        "tool": "Deed RAT",
        "names": [
            {
                "name": "Deed RAT"
            }
        ],
        "description": "(BleepingComputer) Deed RAT's functions depend on which plugins are fetched and loaded. For example, PT has seen eight plugins for startup, C2 config, installation, code injection into processes, network interactions, connection management, registry editing, registry monitoring, and proxy sniffing.\n\nThe supported protocols for C2 communication include TCP, TLS, HTTP, HTTPS, UDP, and DNS, so there's generally a high level of versatility.\n\nThe commands supported by Deed RAT are the following:\n\u2022 Collect system information\n\u2022 Create a separate communication channel for a plugin\n\u2022 Self-remove\n\u2022 Ping\n\u2022 Deactivate connection\n\u2022 Update the shellcode for an injection stored in the registry\n\u2022 Update the main shellcode on disk and delete all plugins",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Loader"
        ],
        "information": [
            "https://www.bleepingcomputer.com/news/security/chinese-space-pirates-are-hacking-russian-aerospace-firms/",
            "https://www.ptsecurity.com/ru-ru/research/pt-esc-threat-intelligence/space-pirates-tools-and-connections/"
        ],
        "uuid": "53fff35a-7a4a-466a-8baa-02ffb46929ec",
        "last-card-change": "2022-07-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "deed_rat",
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