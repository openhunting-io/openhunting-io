var threatdata = {
    "name": "MagicRAT",
    "alias": "MagicRAT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-05-25",
    "all_data": {
        "tool": "MagicRAT",
        "names": [
            {
                "name": "MagicRAT"
            }
        ],
        "description": "(Talos) MagicRAT is programmed in C++ programming language and uses the Qt Framework by statically linking it to the RAT on 32- and 64-bit versions. The Qt Framework is a programming library for developing graphical user interfaces, of which this RAT has none. Talos believes that the objective was to increase the complexity of the code, thus making human analysis harder. On the other hand, since there are very few examples (if any) of malware programmed with Qt Framework, this also makes machine learning and heuristic analysis detection less reliable.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.talosintelligence.com/2022/09/lazarus-magicrat.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.magic_rat"
        ],
        "uuid": "8894b29c-bd50-4b79-a549-6b2fd2d5d93b",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "magicrat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.youtube.com/watch?v=nUjxH1gW53s",
            "date": "2023-05-25",
            "organization": "YouTube (BSidesCharm)",
            "author": "Asheer Malhotra",
            "title": "it\u2019s all Magic(RAT) \u2013 A look into recent North Korean nation-state attacks",
            "categories": [
                "MagicRAT",
                "VSingle",
                "YamaBot"
            ]
        },
        {
            "data_url": "https://media.defense.gov/2023/Feb/09/2003159161/-1/-1/0/CSA_RANSOMWARE_ATTACKS_ON_CI_FUND_DPRK_ACTIVITIES.PDF",
            "date": "2023-02-09",
            "organization": "",
            "author": "NSA",
            "title": "#StopRansomware: Ransomware Attacks on Critical Infrastructure Fund DPRK Malicious Cyber Activities",
            "categories": [
                "Dtrack",
                "MagicRAT",
                "Maui Ransomware",
                "SiennaBlue",
                "SiennaPurple",
                "Tiger RAT",
                "YamaBot"
            ]
        },
        {
            "data_url": "https://www.attackiq.com/2023/01/05/emulating-the-highly-sophisticated-north-korean-adversary-lazarus-group/",
            "date": "2023-01-05",
            "organization": "AttackIQ",
            "author": "Francis Guibernau",
            "title": "Emulating the Highly Sophisticated North Korean Adversary Lazarus Group",
            "categories": [
                "MagicRAT",
                "Tiger RAT"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/09/lazarus-three-rats.html",
            "date": "2022-09-08",
            "organization": "Cisco Talos",
            "author": "Jung soo An",
            "title": "Lazarus and the tale of three RATs",
            "categories": [
                "MagicRAT",
                "MimiKatz",
                "VSingle",
                "YamaBot"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/09/lazarus-magicrat.html",
            "date": "2022-09-07",
            "organization": "Cisco Talos",
            "author": "Jung soo An",
            "title": "MagicRAT: Lazarus\u2019 latest gateway into victim networks",
            "categories": [
                "MagicRAT",
                "Tiger RAT"
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