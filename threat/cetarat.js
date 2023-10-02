var threatdata = {
    "name": "CetaRAT",
    "alias": "CetaRAT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "CetaRAT",
        "names": [
            {
                "name": "CetaRAT"
            }
        ],
        "description": "(Talos) SideCopy\u2019s staple RAT first seen in the wild in 2019. This was already disclosed publicly. We are calling it \u201cCetaRAT\u201d to identify it throughout this research piece.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://s3.amazonaws.com/talos-intelligence-site/production/document_files/files/000/095/591/original/062521_SideCopy_%281%29.pdf?1625657388"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ceta_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/global/pulses?q=tag:cetarat"
        ],
        "uuid": "af1983b4-7f79-40c4-aca5-8b0812ec8007",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cetarat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blogs.quickheal.com/cetarat-apt-group-targeting-the-government-agencies/",
            "date": "2021-10-13",
            "organization": "Quick Heal",
            "author": "Prashant Tilekar",
            "title": "CetaRAT APT Group \u2013 Targeting the Government Agencies",
            "categories": [
                "CetaRAT"
            ]
        },
        {
            "data_url": "https://s3.amazonaws.com/talos-intelligence-site/production/document_files/files/000/095/591/original/062521_SideCopy_%281%29.pdf?1625657388",
            "date": "2021-07-02",
            "organization": "Cisco",
            "author": "Asheer Malhotra",
            "title": "InSideCopy: How this APT continues to evolve its arsenal",
            "categories": [
                "AllaKore",
                "CetaRAT",
                "Lilith",
                "NjRAT",
                "ReverseRAT"
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