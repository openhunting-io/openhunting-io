var threatdata = {
    "name": "updater.mod",
    "alias": "updater.mod",
    "category": "Malware",
    "type": "Backdoor, Exfiltration, Downloader",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "updater.mod",
        "names": [
            {
                "name": "updater.mod"
            }
        ],
        "description": "(Kaspersky) This module is implemented as a dynamic-link library with only one exported function, called callme@16. This module is responsible for such tasks as providing communication with the C2 server, providing the malware integrity and persistence mechanism and managing other malware modules.\n\nThe persistence mechanism is provided by a link file, which is placed by updater.mod into the startup folder, ensuring malware execution after a reboot. If the link file becomes corrupted, the updater.mod module restores it.\n\nIn this campaign the C2 servers were mostly based on cloud storage at mydrive.ch. For every victim, the operators created a new account there and uploaded additional malware modules and a configuration file with commands to execute it. Once executed, the updater.mod module connected to the C2 and performed the following actions:\n\u2022 downloaded the command file to the working directory;\n\u2022 uploaded files collected and prepared by additional malicious modules (if any) to the C2. These files were located in a directory called \u2018queue\u2019 or \u2018ntfsrecover\u2019 in the working directory. Files in this directory could have one of two extensions: .d or .upd depending on whether they had already been uploaded to the server or not.\n\u2022 downloaded additional malware modules:\no {{dfrgntfs5.sqt}} \u2013 a module for executing commands from the C2;\no {{msvcrt58.sqt}} \u2013 a module for stealing mail credentials and emails;\no {{zl4vq.sqt}} \u2013 legitimate zlib library used by dfrgntfs5;\no %victim_ID%.upe \u2013 optional plug-in for dfrgntfs5. Unfortunately, we were unable to obtain this file.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration",
            "Downloader"
        ],
        "information": [
            "https://securelist.com/darkuniverse-the-mysterious-apt-framework-27/94897/"
        ],
        "uuid": "e268f978-6c07-4c3f-85d8-23749fcba4ce",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "updater.mod",
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