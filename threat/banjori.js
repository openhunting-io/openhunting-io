var threatdata = {
    "name": "Banjori",
    "alias": "Banjori, BankPatch, BackPatcher, MultiBanker 2",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Credential stealer, Botnet",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "Banjori",
        "names": [
            {
                "name": "Banjori"
            },
            {
                "name": "BankPatch"
            },
            {
                "name": "BackPatcher"
            },
            {
                "name": "MultiBanker 2"
            }
        ],
        "description": "(johannesbader) This post analyses the domain generation algorithm (DGA) of the banking trojan Banjori, also known as MultiBanker 2 or BankPatch/BackPatcher. The DGA was active mostly between April and November of 2013 (at least thats when I found most seeds).",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://johannesbader.ch/blog/the-dga-of-banjori/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.banjori"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Banjori"
        ],
        "uuid": "294d088c-ca14-443c-b714-46a6fc485726",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "banjori",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://osint.bambenekconsulting.com/feeds/",
            "date": "2016-05-02",
            "organization": "John Bambenek",
            "author": "John Bambenek",
            "title": "OSINT Feed",
            "categories": [
                "Mirai",
                "Banjori"
            ]
        },
        {
            "data_url": "https://www.johannesbader.ch/2015/02/the-dga-of-banjori/",
            "date": "2015-02-10",
            "organization": "Johannes Bader's Blog",
            "author": "Johannes Bader",
            "title": "The DGA of Banjori",
            "categories": [
                "Banjori"
            ]
        },
        {
            "data_url": "http://blog.kleissner.org/?p=192",
            "date": "2013-05-21",
            "organization": "Kleissner & Associates",
            "author": "Peter Kleissner",
            "title": "News on MultiBanker, features now a jabber p2p functionality",
            "categories": [
                "Banjori"
            ]
        },
        {
            "data_url": "http://blog.kleissner.org/?p=69",
            "date": "2013-03-26",
            "organization": "Kleissner & Associates",
            "author": "Peter Kleissner",
            "title": "Behind MultiBanker, what the security industry doesn\u2019t tell you and its money mule network",
            "categories": [
                "Banjori"
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