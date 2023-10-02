var threatdata = {
    "name": "Retefe Gang, Operation Emmental",
    "alias": "Retefe Gang, Operation Emmental",
    "category": "APT",
    "type": "-",
    "modified": "2020-05-22",
    "all_data": {
        "actor": "Retefe Gang, Operation Emmental",
        "names": [
            {
                "name": "Retefe Gang",
                "name-giver": "GovCERT.ch"
            },
            {
                "name": "Operation Emmental",
                "name-giver": "Trend Micro"
            }
        ],
        "country": [
            "Russia"
        ],
        "motivation": [
            "Financial crime"
        ],
        "first-seen": "2013",
        "description": "(GovCERT.ch) Surprisingly, there is a lot of media attention going on at the moment on a macOS malware called OSX/Dok. In the recent weeks, various anti-virus vendors and security researchers published blog posts on this threat, presenting their analysis and findings. While some findings where very interesting, others were misleading or simply wrong.\n\nWe don\u2019t know where the sudden media interest and the attention from anti-virus vendors on this threat actor are coming from. As a matter of fact, the threat actor behind OSX/Dok, which we call the the Retefe gang or Operation Emmental, has already been around for many years and GovCERT.ch is tracking their activities since the very beginning (2013). The purpose of this blog post is to put the puzzle pieces together and trying to bust some of the myths that have made the round in the media recently.",
        "observed-sectors": [
            "Financial"
        ],
        "observed-countries": [
            "Austria",
            "Germany",
            "Japan",
            "Romania",
            "Sweden",
            "Switzerland",
            "Turkey",
            "UK"
        ],
        "tools": [
            "Citadel",
            "Retefe",
            "Retefe (Android)",
            "Tinba"
        ],
        "information": [
            "https://www.govcert.ch/blog/the-retefe-saga/",
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp-finding-holes-operation-emmental.pdf"
        ],
        "uuid": "58b1974b-2091-492a-901f-a25d9372d9a6",
        "last-card-change": "2020-05-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "retefe_gang_operation_emmental",
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