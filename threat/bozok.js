var threatdata = {
    "name": "Bozok",
    "alias": "Bozok, Bozok RAT",
    "category": "Tools",
    "type": "Backdoor",
    "modified": "2021-04-27",
    "all_data": {
        "tool": "Bozok",
        "names": [
            {
                "name": "Bozok"
            },
            {
                "name": "Bozok RAT"
            }
        ],
        "description": "(FireEye) Bozok, like many other popular RATs, is freely available. The author of the Bozok RAT goes by the moniker \u201cSlayer616\u201d and has created another RAT known as Schwarze Sonne, or \u201cSS-RAT\u201d for short. Both of these RATs are free and easy to find \u2014 various APT actors have used both in previous targeted attacks.",
        "category": "Tools",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2013/10/know-your-enemy-tracking-a-rapidly-evolving-apt-actor.html",
            "https://unit42.paloaltonetworks.com/unit42-projectm-link-found-between-pakistani-actor-and-operation-transparent-tribe"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bozok"
        ],
        "uuid": "3b84982d-1de9-4e8b-8ac3-316cb15e5ed8",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bozok",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/apt-trends-report-q1-2021/101967/",
            "date": "2021-04-27",
            "organization": "Kaspersky",
            "author": "GReAT",
            "title": "APT trends report Q1 2021",
            "categories": [
                "PAS",
                "Artra Downloader",
                "BadNews",
                "Bozok",
                "DILLJUICE",
                "Kazuar",
                "Quasar RAT",
                "SodaMaster"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-projectm-link-found-between-pakistani-actor-and-operation-transparent-tribe",
            "date": "2016-03-25",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "ProjectM: Link Found Between Pakistani Actor and Operation Transparent Tribe",
            "categories": [
                "Bozok",
                "Operation C-Major"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2013/10/know-your-enemy-tracking-a-rapidly-evolving-apt-actor.html",
            "date": "2013-10-31",
            "organization": "FireEye",
            "author": "Thoufique Haq",
            "title": "Know Your Enemy: Tracking A Rapidly Evolving APT Actor",
            "categories": [
                "Bozok",
                "Poison Ivy",
                "TEMPER PANDA"
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