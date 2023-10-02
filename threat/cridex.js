var threatdata = {
    "name": "Cridex",
    "alias": "Cridex, Bugat, Feodo",
    "category": "Malware",
    "type": "Banking trojan, Credential stealer, Worm",
    "modified": "2020-10-03",
    "all_data": {
        "tool": "Cridex",
        "names": [
            {
                "name": "Cridex"
            },
            {
                "name": "Bugat"
            },
            {
                "name": "Feodo"
            }
        ],
        "description": "(Kaspersky) {{Dridex}} made its first appearance as an independent malicious program (under the name \u201cCridex\u201d) around September 2011. An analysis of a Cridex sample (MD5: 78cc821b5acfc017c855bc7060479f84) demonstrated that, even in its early days, the malware could receive dynamic configuration files, use web injections to steal money, and was able to infect USB media. This ability influenced the name under which the \u201czero\u201d version of Cridex was detected \u2014 Worm.Win32.Cridex.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Credential stealer",
            "Worm"
        ],
        "information": [
            "https://securelist.com/analysis/publications/78531/dridex-a-history-of-evolution/",
            "http://www.sempersecurus.org/2012/08/cridex-analysis-using-volatility.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.feodo"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:cridex"
        ],
        "uuid": "a4d512bf-990c-4bb4-93bc-6cca12d429f9",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cridex",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://en.wikipedia.org/wiki/Maksim_Yakubets",
            "date": "2020-10-03",
            "organization": "Wikipedia",
            "author": "Wikpedia",
            "title": "Wikipedia Page: Maksim Yakubets",
            "categories": [
                "Dridex",
                "Feodo",
                "Evil Corp"
            ]
        },
        {
            "data_url": "https://feodotracker.abuse.ch/",
            "date": "2018",
            "organization": "abuse.ch",
            "author": "abuse.ch",
            "title": "Feodo Tracker",
            "categories": [
                "Feodo"
            ]
        },
        {
            "data_url": "https://securelist.com/analysis/publications/78531/dridex-a-history-of-evolution/",
            "date": "2017-05-25",
            "organization": "Kaspersky Labs",
            "author": "Nikita Slepogin",
            "title": "Dridex: A History of Evolution",
            "categories": [
                "Dridex",
                "Feodo"
            ]
        },
        {
            "data_url": "http://contagiodump.blogspot.com/2012/08/cridex-analysis-using-volatility-by.html",
            "date": "2012-08-03",
            "organization": "Contagio Dump",
            "author": "Andre DiMino",
            "title": "Cridex Analysis using Volatility",
            "categories": [
                "Feodo"
            ]
        },
        {
            "data_url": "http://www.sempersecurus.org/2012/08/cridex-analysis-using-volatility.html",
            "date": "2012-08-02",
            "organization": "",
            "author": "Andre M. DiMino",
            "title": "Cridex Analysis using Volatility",
            "categories": [
                "Feodo"
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