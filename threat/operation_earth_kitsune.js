var threatdata = {
    "name": "Operation Earth Kitsune",
    "alias": "Operation Earth Kitsune",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-25",
    "all_data": {
        "actor": "Operation Earth Kitsune",
        "names": [
            {
                "name": "Operation Earth Kitsune",
                "name-giver": "Trend Micro"
            }
        ],
        "country": [
            "North Korea"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2019",
        "description": "(Trend Micro) We previously wrote about the SLUB malware in 2019, noting that it abused (among others) Slack and GitHub as part of its routine. Its previous campaigns used watering hole tactics as an infection vector, using websites that discussed topics related to North Korea. Our continuous monitoring of this threat campaign shows that the threat actor behind SLUB didn\u2019t stop their attacks even during the pandemic. In 2020, we found multiple instances of their attacks in March, May, and September, delivering a new variant of the malware \u2014 this time incorporating new techniques and capabilities.\nIn addition, we found two unknown malware variants delivered along with SLUB during the latest attack at the end of September. Besides the CVEs already mentioned in the previous SLUB blog, we also found new exploits for the vulnerabilities CVE-2016-0189, CVE-2019-1458, CVE-2020-0674, and CVE-2019-5782, chained with another Chrome bug that does not have an associated CVE.\nThe campaign is very diversified, deploying numerous samples to the victim machines and using multiple command-and-control (C&C) servers during this operation. In total, we found the campaign using five C&C servers, seven samples, and exploits for four N-day bugs. The scale of the attack and the samples\u2019 custom design suggest that there is a group behind this operation. We dubbed the campaign as Operation Earth Kitsune.",
        "observed-countries": [
            "Worldwide except South Korea"
        ],
        "tools": [
            "agfSpy",
            "dneSpy",
            "SLUB",
            "WhiskerSpy"
        ],
        "operations": [
            {
                "date": "2022 Late",
                "activity": "Earth Kitsune Delivers New WhiskerSpy Backdoor via Watering Hole Attack\nhttps://www.trendmicro.com/en_us/research/23/b/earth-kitsune-delivers-new-whiskerspy-backdoor.html"
            }
        ],
        "information": [
            "https://documents.trendmicro.com/assets/white_papers/wp-operation-earth-kitsune.pdf"
        ],
        "uuid": "877ff46d-bf14-444e-aa77-5a0a88c8b8c2",
        "last-card-change": "2023-04-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_earth_kitsune",
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