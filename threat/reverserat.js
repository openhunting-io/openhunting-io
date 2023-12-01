var threatdata = {
    "name": "ReverseRAT",
    "alias": "ReverseRAT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-02-16",
    "all_data": {
        "tool": "ReverseRAT",
        "names": [
            {
                "name": "ReverseRAT"
            }
        ],
        "description": "(Talos) Another previously undiscovered C#-based reverse shell that also monitors removable drives. It is based on {{CetaRAT}}.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://s3.amazonaws.com/talos-intelligence-site/production/document_files/files/000/095/591/original/062521_SideCopy_%281%29.pdf?1625657388",
            "https://www.seqrite.com/documents/en/white-papers/Whitepaper-OperationSideCopy.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.reverse_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/global/pulses?q=tag:reverserat"
        ],
        "uuid": "c5f9f121-65c4-471d-a300-1296f3fe9619",
        "last-card-change": "2021-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "ReverseRAT",
            "malware_alias": null,
            "malware": "win.reverse_rat",
            "last_update": "2023-10-16 08:30:32",
            "tags": [
                "RAT",
                "ReverseRAT"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "mazagondoc.com",
                        "timestamp": "2023-10-16 08:30:32"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "1325ff46b5ae1bce48ad444ea3d3f7cb",
                        "timestamp": "2023-10-16 08:29:50"
                    },
                    {
                        "value": "f0f322dcfe9953991c03746984b923ed",
                        "timestamp": "2023-10-16 08:29:50"
                    },
                    {
                        "value": "eb7da7abb0254469d4db4f85d8d91c6b",
                        "timestamp": "2023-10-16 08:29:50"
                    },
                    {
                        "value": "0baa1d0cc20d80fa47eeb764292b9e98",
                        "timestamp": "2023-02-01 08:35:34"
                    }
                ],
                "ip:port": [
                    {
                        "value": "185.174.102.54:443",
                        "timestamp": "2023-02-01 08:36:07"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-10-16 08:30:32",
    "file_name": "reverserat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://threatmon.io/apt-sidecopy-targeting-indian-government-entities/",
            "date": "2023-02-16",
            "organization": "ThreatMon",
            "author": "ThreatMon Malware Research Team",
            "title": "APT SideCopy Targeting Indian Government Entities - Analysis of the new version of ReverseRAT",
            "categories": [
                "Unidentified 005 (Sidecopy)",
                "ReverseRAT"
            ]
        },
        {
            "data_url": "https://ics-cert.kaspersky.com/media/Kaspersky-ICS-CERT-APT-attacks-on-industrial-organizations-in-H1-2021-En.pdf",
            "date": "2021-10-26",
            "organization": "Kaspersky",
            "author": "Kaspersky Lab ICS CERT",
            "title": "APT attacks  on industrial  organizations  in H1 2021",
            "categories": [
                "8.t Dropper",
                "AllaKore",
                "AsyncRAT",
                "GoldMax",
                "LimeRAT",
                "NjRAT",
                "NoxPlayer",
                "Raindrop",
                "ReverseRAT",
                "ShadowPad",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://blog.lumen.com/reverserat-reemerges-with-a-nightfury-new-campaign-and-new-developments-same-familiar-side-actor/",
            "date": "2021-08-11",
            "organization": "Lumen",
            "author": "Black Lotus Labs",
            "title": "ReverseRat Reemerges With A (Night)Fury New Campaign And New Developments, Same Familiar Side-Actor",
            "categories": [
                "ReverseRAT"
            ]
        },
        {
            "data_url": "https://www.seqrite.com/documents/en/white-papers/Whitepaper-OperationSideCopy.pdf",
            "date": "2021-07-09",
            "organization": "Seqrite",
            "author": "Chaitanya Haritash",
            "title": "Seqrite uncovers second wave of Operation SideCopy targeting Indian critical infrastructure PSUs",
            "categories": [
                "NjRAT",
                "ReverseRAT"
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
        },
        {
            "data_url": "https://blog.lumen.com/suspected-pakistani-actor-compromises-indian-power-company-with-new-reverserat/",
            "date": "2021-06-22",
            "organization": "Lumen",
            "author": "Black Lotus Labs",
            "title": "Suspected Pakistani Actor Compromises Indian Power Company with New ReverseRat",
            "categories": [
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