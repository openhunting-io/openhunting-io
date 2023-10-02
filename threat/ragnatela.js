var threatdata = {
    "name": "Ragnatela",
    "alias": "Ragnatela, Ragnatela RAT",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Keylogger, Downloader, Exfiltration",
    "modified": "2022-01-25",
    "all_data": {
        "tool": "Ragnatela",
        "names": [
            {
                "name": "Ragnatela"
            },
            {
                "name": "Ragnatela RAT"
            }
        ],
        "description": "(Malwarebytes) We identified what we believe is a new variant of the {{BADNEWS}} RAT called Ragnatela being distributed via spear phishing emails to targets of interest in Pakistan. Ragnatela, which means spider web in Italian, is also the project name and panel used by Patchwork APT.\n\nRagnatela RAT was built sometime in late November as seen in its Program Database (PDB) path \u201cE:\\new_ops\\jlitest __change_ops -29no \u2013 Copy\\Release\\jlitest.pdb\u201d. It features the following capabilities:\n\u2022 Executing commands via cmd\n\u2022 Capturing screenshots\n\u2022 Logging Keystrokes\n\u2022 Collecting list of all the files in victim\u2019s machine\n\u2022 Collecting list of the running applications in the victim\u2019s machine at a specific time periods\n\u2022 Downing addition payloads\n\u2022 Uploading files",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Keylogger",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://blog.malwarebytes.com/threat-intelligence/2022/01/patchwork-apt-caught-in-its-own-web/"
        ],
        "uuid": "2e9285ec-5ef6-4191-b13a-7c871bfb6e9f",
        "last-card-change": "2022-01-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ragnatela",
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