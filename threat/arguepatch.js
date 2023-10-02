var threatdata = {
    "name": "ArguePatch",
    "alias": "ArguePatch",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "ArguePatch",
        "names": [
            {
                "name": "ArguePatch"
            }
        ],
        "description": "(ESET) The ESET research team has now spotted an updated version of the ArguePatch malware loader that was used in the {{Industroyer2}} attack against a Ukrainian energy provider and in multiple attacks involving data wiping malware called {{CaddyWiper}}.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.welivesecurity.com/2022/05/20/sandworm-ukraine-new-version-arguepatch-malware-loader/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.arguepatch"
        ],
        "uuid": "e50d2611-217a-4571-aa05-fa87425d8f36",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "arguepatch",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/resources/blog/gru-rise-telegram-minions",
            "date": "2022-09-23",
            "organization": "Mandiant",
            "author": "Mandiant Intelligence",
            "title": "GRU: Rise of the (Telegram) MinIOns",
            "categories": [
                "ArguePatch",
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2022/04/12/industroyer2-industroyer-reloaded/",
            "date": "2022-04-12",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "Industroyer2: Industroyer reloaded",
            "categories": [
                "ArguePatch",
                "CaddyWiper",
                "Industroyer",
                "INDUSTROYER2"
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