var threatdata = {
    "name": "ROCK",
    "alias": "ROCK, yellowalbatross",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Credential stealer",
    "modified": "2020-05-21",
    "all_data": {
        "tool": "ROCK",
        "names": [
            {
                "name": "ROCK"
            },
            {
                "name": "yellowalbatross"
            }
        ],
        "description": "(Qihoo 360) ROCK Trojan plays a main role in the Sphinx attacks. This malware family was developed by the attackers themselves or was customer-made by a third party group.\n\nThe  malware impersonated Word documents, images or installation programs in the attempt to disguise itself as PDF files, pictures or Flash installers to induce the users to click.\n\nThe main purpose is to steal sensitive information from  the victims, such as system information, account & password and search history saved in the browser. It also monitors victims through Skype chatting history, cameras, microphones and keyboard & mouse logging. The information collected will then be encrypted and passed back to specific C2 servers.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://docplayer.net/83717233-Sphinx-apt-c-15-targeted-cyber-attack-in-the-middle-east-table-of-contents.html",
            "https://github.com/securitykitten/malware_references/blob/master/rmshixdAPT-C-15-20160630.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.rock"
        ],
        "uuid": "e87646c0-03af-4547-9f37-6bf9a2e99cde",
        "last-card-change": "2020-05-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rock",
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