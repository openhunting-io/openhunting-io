var threatdata = {
    "name": "CapraRAT",
    "alias": "CapraRAT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-03-07",
    "all_data": {
        "tool": "CapraRAT",
        "names": [
            {
                "name": "CapraRAT"
            }
        ],
        "description": "(Trend Micro) We observed this group using another Android RAT \u2014 TrendMicro has named this \u201cCapraRat\u201d\u2014 which is possibly a modified version of an open-source RAT called {{AndroRAT}}. While analyzing this android RAT, we saw several similar capabilities to the {{Crimson RAT}} malware that the group usually uses to infect Windows systems.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.trendmicro.com/en_us/research/22/a/investigating-apt36-or-earth-karkaddans-attack-chain-and-malware.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.capra_rat"
        ],
        "uuid": "0ea4bc6d-2ca2-407e-92ee-d0c07d3d9339",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "caprarat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2023/03/07/love-scam-espionage-transparent-tribe-lures-indian-pakistani-officials/",
            "date": "2023-03-07",
            "organization": "ESET Research",
            "author": "Luk\u00e1\u0161 \u0160tefanko",
            "title": "Love scam or espionage? Transparent Tribe lures Indian and Pakistani officials",
            "categories": [
                "CapraRAT"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/22/a/investigating-apt36-or-earth-karkaddans-attack-chain-and-malware.html",
            "date": "2022-01-24",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "Investigating APT36 or Earth Karkaddan\u2019s Attack Chain and Malware Arsenal",
            "categories": [
                "CapraRAT",
                "Crimson RAT",
                "Oblique RAT"
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