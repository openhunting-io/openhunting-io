var threatdata = {
    "name": "KHRAT",
    "alias": "KHRAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer",
    "modified": "2022-07-18",
    "all_data": {
        "tool": "KHRAT",
        "names": [
            {
                "name": "KHRAT"
            }
        ],
        "description": "(Palo Alto) KHRAT is a Trojan that registers victims using their infected machine\u2019s username, system language and local IP address. KHRAT provides the threat actors typical RAT features and access to the victim system, including keylogging, screenshot capabilities, remote shell access and so on.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-updated-khrat-malware-used-in-cambodia-attacks/",
            "https://blogs.forcepoint.com/security-labs/trojanized-adobe-installer-used-install-dragonok%E2%80%99s-new-custom-backdoor"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.khrat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:KHRAT"
        ],
        "uuid": "550bfaa7-7fce-4967-b03e-a1e14dddba03",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "khrat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/rancortaurus/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Rancor Taurus",
            "categories": [
                "DDKONG",
                "KHRAT",
                "PLAINTEE",
                "RANCOR"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/rancor-cyber-espionage-group-uses-new-custom-malware-to-attack-southeast-asia/",
            "date": "2019-12-17",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Jen Miller-Osborn",
            "title": "Rancor: Cyber Espionage Group Uses New Custom Malware to Attack Southeast Asia",
            "categories": [
                "DDKONG",
                "Derusbi",
                "KHRAT"
            ]
        },
        {
            "data_url": "https://www.forcepoint.com/de/blog/x-labs/trojanized-adobe-installer-used-install-dragonok-s-new-custom-backdoor",
            "date": "2017-03-29",
            "organization": "Forcepoint",
            "author": "Roland Dela Paz",
            "title": "Trojanized Adobe installer used to install DragonOK\u2019s new custom backdoor",
            "categories": [
                "KHRAT",
                "DragonOK"
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