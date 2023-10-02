var threatdata = {
    "name": "DOUBLEFANTASY",
    "alias": "DOUBLEFANTASY, DoubleFantasy, VALIDATOR",
    "category": "Malware",
    "type": "Reconnaissance, Downloader",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "DOUBLEFANTASY",
        "names": [
            {
                "name": "DOUBLEFANTASY"
            },
            {
                "name": "DoubleFantasy"
            },
            {
                "name": "VALIDATOR"
            }
        ],
        "description": "(Kaspersky) The Equation Group\u2019s DoubleFantasy implant is a validator-style Trojan which sends basic information about the system to the attackers. It also allows them to upload a more sophisticated Trojan platform, such as {{EQUATIONDRUG}} or {{GRAYFISH}}. In general, after one of these sophisticated platforms are installed, the attackers remove the DoubleFantasy implant. In case the victim doesn\u2019t check out, for example, if they are a researcher analysing the malware, the attackers can simply choose to uninstall the DoubleFantasy implant and clean up the victim\u2019s machine.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Downloader"
        ],
        "information": [
            "https://securelist.com/equation-group-from-houston-with-love/68877/",
            "https://www.antiy.com/response/FROM_EQUATION_TO_EQUATIONS.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.doublefantasy",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.doublefantasy"
        ],
        "uuid": "7e44cd7d-5496-4c09-9a9f-d823f9637796",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "doublefantasy",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/an-overview-of-targeted-attacks-and-apts-on-linux/98440/",
            "date": "2020-09-10",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "An overview of targeted attacks and APTs on Linux",
            "categories": [
                "Cloud Snooper",
                "Dacls",
                "DoubleFantasy",
                "MESSAGETAP",
                "Penquin Turla",
                "Tsunami",
                "elf.wellmess",
                "X-Agent"
            ]
        },
        {
            "data_url": "https://fmnagisa.wordpress.com/2020/08/27/revisiting-equationgroups-fanny-worm-or-dementiawheel/",
            "date": "2020-08-27",
            "organization": "fmnagisa wordpress",
            "author": "Facundo M",
            "title": "Revisiting EquationGroup\u2019s FANNY\u2026 or is it DEMENTIAWHEEL?",
            "categories": [
                "DoubleFantasy",
                "Fanny"
            ]
        },
        {
            "data_url": "https://twitter.com/Int2e_/status/1294565186939092994",
            "date": "2020-08-15",
            "organization": "Twitter (@Int2e_)",
            "author": "Adrien B",
            "title": "Tweet on DoubleFantasy",
            "categories": [
                "DoubleFantasy"
            ]
        },
        {
            "data_url": "https://www.antiy.com/response/FROM_EQUATION_TO_EQUATIONS.pdf",
            "date": "2016-11-04",
            "organization": "Antiy CERT",
            "author": "Antiy CERT",
            "title": "FROM EQUATION TO EQUATIONS",
            "categories": [
                "DoubleFantasy"
            ]
        },
        {
            "data_url": "https://securelist.com/equation-the-death-star-of-malware-galaxy/68750/",
            "date": "2015-02-16",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Equation: The Death Star of Malware Galaxy",
            "categories": [
                "DoubleFantasy",
                "EquationDrug",
                "Fanny",
                "GROK"
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
        },
        {
            "procedure_name": "tor",
            "procedure_code": "s0183",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0183",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "tor encapsulates traffic in multiple layers of encryption, using tls by default.[59]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "traffic traversing the tor network will be forwarded to multiple nodes before exiting the tor network and continuing on to its intended destination.[21]"
                }
            ]
        }
    ]
};