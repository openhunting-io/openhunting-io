var threatdata = {
    "name": "Operation Poison Needles",
    "alias": "Operation Poison Needles",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "Operation Poison Needles",
        "names": [
            {
                "name": "Operation Poison Needles",
                "name-giver": "Qihoo 360"
            }
        ],
        "country": [
            "Ukraine"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2018",
        "description": "(Qihoo 360) On the evening of November 29, 2018, shortly after the break-out of the Kerch Strait Incident, 360 Advanced Threat Response Team was the first security team to discover the APT attack against the FSBI \u201cPolyclinic No.2\u201d affiliated to the Presidential Administration of Russia. The lure document used to initiate the attack was a carefully forged employee questionnaire, which exploited the latest Flash 0day vulnerability CVE-2018-15982 and a customized Trojan with self-destruction function. All the technical details indicate that the APT group is determined to compromise the target at any price, but at the same time, it is also very cautious.",
        "observed-sectors": [
            "Healthcare"
        ],
        "observed-countries": [
            "Russia"
        ],
        "tools": [
            "0-day Flash exploit"
        ],
        "information": [
            "http://blogs.360.cn/post/PoisonNeedles_CVE-2018-15982_EN"
        ],
        "uuid": "e96f938a-3d98-4977-9767-5dd144595485",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_poison_needles",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://blogs.360.cn/post/PoisonNeedles_CVE-2018-15982_EN",
            "date": "2018-12-05",
            "organization": "360",
            "author": "360",
            "title": "Operation Poison Needles - APT Group Attacked the Polyclinic of the Presidential Administration of Russia, Exploiting a Zero-day",
            "categories": [
                "Operation Poison Needles"
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