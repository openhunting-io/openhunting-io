var threatdata = {
    "name": "Banatrix",
    "alias": "Banatrix",
    "category": "Malware",
    "type": "Banking trojan, Credential stealer",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "Banatrix",
        "names": [
            {
                "name": "Banatrix"
            }
        ],
        "description": "(CERT.PL) Of all of the Polish malware families that we have seen last year, Banatrix seems to be the most technologically advanced one. This malware was used to replace the bank account number in the browser memory, however its implementation allowed an attacker to execute any arbitrary code on the victim\u2019s machine. This was used to extract passwords saved in the Mozilla Firefox browser.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Credential stealer"
        ],
        "information": [
            "https://www.cert.pl/en/news/single/banatrix-an-indepth-look/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.banatrix"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:banatrix"
        ],
        "uuid": "79453630-610b-4b32-872c-a9b2de74cb41",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "banatrix",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cert.pl/en/news/single/banatrix-an-indepth-look/",
            "date": "2014-12-15",
            "organization": "CERT.PL",
            "author": "CERT.PL",
            "title": "Banatrix \u2013 an indepth look",
            "categories": [
                "Banatrix"
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