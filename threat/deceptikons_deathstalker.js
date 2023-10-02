var threatdata = {
    "name": "Deceptikons, DeathStalker",
    "alias": "Deceptikons, DeathStalker",
    "category": "APT",
    "type": "-",
    "modified": "2022-12-27",
    "all_data": {
        "actor": "Deceptikons, DeathStalker",
        "names": [
            {
                "name": "Deceptikons",
                "name-giver": "Kaspersky"
            },
            {
                "name": "DeathStalker",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2012",
        "description": "(Kaspersky) In this blog post, we\u2019ll be focusing on DeathStalker: a unique threat group that appears to target law firms and companies in the financial sector (although we\u2019ve occasionally seen them in other verticals as well). As far as we can tell, this actor isn\u2019t motivated by financial gain. They don\u2019t deploy ransomware, steal payment information to resell it, or engage in any type of activity commonly associated with the cybercrime underworld. Their interest in gathering sensitive business information leads us to believe that DeathStalker is a group of mercenaries offering hacking-for-hire services, or acting as some sort of information broker in financial circles.\n\nDeathStalker first came to our attention through a PowerShell-based implant called Powersing. By unraveling this thread, we were able to identify activities dating back to 2018, and possibly even 2012.\n\nThere is activity overlap with {{Evilnum}}.",
        "observed-sectors": [
            "Financial",
            "law firms"
        ],
        "observed-countries": [
            "Argentina",
            "China",
            "Cyprus",
            "India",
            "Israel",
            "Jordan",
            "Lebanon",
            "Russia",
            "Switzerland",
            "Taiwan",
            "Turkey",
            "UAE",
            "UK"
        ],
        "tools": [
            "Evilnum",
            "Janicab",
            "PowerPepper",
            "Powersing",
            "VileRAT"
        ],
        "operations": [
            {
                "date": "2020",
                "activity": "DeathStalker targets legal entities with new Janicab variant\nhttps://securelist.com/deathstalker-targets-legal-entities-with-new-janicab-variant/108131/"
            },
            {
                "date": "2020-05",
                "activity": "Meet PowerPepper: the spicy implant that your bland scripts setup needed\nhttps://securelist.com/what-did-deathstalker-hide-between-two-ferns/99616/"
            },
            {
                "date": "2020-06",
                "activity": "VileRAT: DeathStalker\u2019s continuous strike at foreign and cryptocurrency exchanges\nhttps://securelist.com/vilerat-deathstalkers-continuous-strike/107075/"
            }
        ],
        "information": [
            "https://securelist.com/deathstalker-mercenary-triumvirate/98177/",
            "https://securelist.com/apt-trends-report-q2-2020/97937/"
        ],
        "uuid": "55986798-f21d-4c64-9f5b-57676bf32241",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "deceptikons_deathstalker",
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