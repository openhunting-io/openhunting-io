var threatdata = {
    "name": "Ploutus",
    "alias": "Ploutus, Ploutus ATM, Plotus",
    "category": "Malware",
    "type": "ATM malware",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Ploutus",
        "names": [
            {
                "name": "Ploutus"
            },
            {
                "name": "Ploutus ATM"
            },
            {
                "name": "Plotus"
            }
        ],
        "description": "(Symantec) According to external sources, the malware is transferred to the ATM by physically inserting a new boot disk into the CD-ROM drive. The boot disk then transfers malware.\n\nThe criminals created an interface to interact with the ATM software on a compromised ATM, and are therefore able to withdraw all the available money from the containers holding the cash, also known as cassettes.\n\nOne interesting part to note is that the criminals are also able to read all the information typed by cardholders through the ATM keypad, enabling them to steal the sensitive information without using any external device.",
        "category": "Malware",
        "type": [
            "ATM malware"
        ],
        "information": [
            "https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=4274cb7f-d65d-4928-bdf4-0275eedc80d2&CommunityKey=1ecf5f55-9545-44d6-b0f4-4e4a7f5f5e68&tab=librarydocuments",
            "https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=54602160-07ea-4dbb-8794-14725ea4c8ba&CommunityKey=1ecf5f55-9545-44d6-b0f4-4e4a7f5f5e68&tab=librarydocuments",
            "https://www.fireeye.com/blog/threat-research/2017/01/new_ploutus_variant.html",
            "http://antonioparata.blogspot.co.uk/2018/02/analyzing-nasty-net-protection-of.html",
            "https://documents.trendmicro.com/assets/white_papers/wp-cashing-in-on-atm-malware.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ploutus_atm"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ploutus"
        ],
        "uuid": "fdf897ad-2431-44a2-b3da-b9a3d55d0387",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ploutus",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.crowdstrike.com/blog/ploutus-atm-malware-deobfuscation-case-study",
            "date": "2021-11-10",
            "organization": "CrowdStrike",
            "author": "Antonio Parata",
            "title": "Ploutus ATM Malware Case Study: Automated Deobfuscation of a Strongly Obfuscated .NET Binary",
            "categories": [
                "Ploutus ATM"
            ]
        },
        {
            "data_url": "https://www.metabaseq.com/recursos/ploutus-is-back-targeting-itautec-atms-in-latin-america",
            "date": "2021-03-02",
            "organization": "Metabase Q",
            "author": "Jesus Dominguez",
            "title": "Ploutus is back, targeting Itautec ATMs in Latin America",
            "categories": [
                "Ploutus ATM"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/economic-growth-digital-inclusion-specialized-crime-financial-cyber-fraud-in-latam",
            "date": "2021-02-22",
            "organization": "AdvIntel",
            "author": "Beatriz Pimenta Klein",
            "title": "Economic Growth, Digital Inclusion, & Specialized Crime: Financial Cyber Fraud in LATAM",
            "categories": [
                "BRATA",
                "Mekotio",
                "Metamorfo",
                "Ploutus ATM",
                "VictoryGate"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2019/05/10-years-of-virtual-dynamite.html",
            "date": "2019-05-30",
            "organization": "Talos Intelligence",
            "author": "Vanja Svajcer",
            "title": "10 years of virtual dynamite: A high-level retrospective of ATM malware",
            "categories": [
                "FastCash",
                "Project Alice",
                "Cutlet",
                "Ploutus ATM",
                "Skimer",
                "Tyupkin"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/white_papers/wp-cashing-in-on-atm-malware.pdf",
            "date": "2018-03-30",
            "organization": "Trend Micro",
            "author": "David Sancho",
            "title": "Cashing in on ATM Malware: A Comprehensive Look at Various Attack Types",
            "categories": [
                "Project Alice",
                "ATMitch",
                "Ploutus ATM",
                "Ripper ATM",
                "Skimer",
                "SUCEFUL",
                "Tyupkin"
            ]
        },
        {
            "data_url": "http://antonioparata.blogspot.co.uk/2018/02/analyzing-nasty-net-protection-of.html",
            "date": "2018-02-26",
            "organization": "Secure coding and more blog",
            "author": "Antonio Parata",
            "title": "Analyzing the nasty .NET protection of the Ploutus.D malware",
            "categories": [
                "Ploutus ATM"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/01/new_ploutus_variant.html",
            "date": "2017-01-12",
            "organization": "FireEye",
            "author": "Daniel Regalado",
            "title": "New Variant of Ploutus ATM Malware Observed in the Wild in Latin America",
            "categories": [
                "Ploutus ATM"
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