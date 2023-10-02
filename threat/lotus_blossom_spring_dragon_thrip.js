var threatdata = {
    "name": "Lotus Blossom, Spring Dragon, Thrip",
    "alias": "Lotus Blossom, Spring Dragon, Dragonfish, Billbug, Thrip, Bronze Elgin, CTG-8171, ATK 1, ATK 78",
    "category": "APT",
    "type": "-",
    "modified": "2022-11-19",
    "all_data": {
        "actor": "Lotus Blossom, Spring Dragon, Thrip",
        "names": [
            {
                "name": "Lotus Blossom",
                "name-giver": "Palo Alto"
            },
            {
                "name": "Spring Dragon",
                "name-giver": "Kaspersky"
            },
            {
                "name": "Dragonfish",
                "name-giver": "iDefense"
            },
            {
                "name": "Billbug",
                "name-giver": "Symantec"
            },
            {
                "name": "Thrip",
                "name-giver": "Symantec"
            },
            {
                "name": "Bronze Elgin",
                "name-giver": "SecureWorks"
            },
            {
                "name": "CTG-8171",
                "name-giver": "SecureWorks"
            },
            {
                "name": "ATK 1",
                "name-giver": "Thales"
            },
            {
                "name": "ATK 78",
                "name-giver": "Thales"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2012",
        "description": "(Kaspersky) Spring Dragon is a long running APT actor that operates on a massive scale. The group has been running campaigns, mostly in countries and territories around the South China Sea, since as early as 2012. The main targets of Spring Dragon attacks are high profile governmental organizations and political parties, education institutions such as universities, as well as companies from the telecommunications sector.\n\nSpring Dragon is known for spear phishing and watering hole techniques and some of its tools have previously been analyzed and reported on by security researchers, including Kaspersky Lab.\n\n{{Operation Poisoned News, TwoSail Junk}} may be one of their campaigns.",
        "observed-sectors": [
            "Aerospace",
            "Defense",
            "Education",
            "Government",
            "High-Tech",
            "Satellites",
            "Telecommunications"
        ],
        "observed-countries": [
            "ASEAN",
            "Brunei",
            "Cambodia",
            "Hong Kong",
            "Indonesia",
            "Japan",
            "Laos",
            "Macao",
            "Malaysia",
            "Myanmar",
            "Philippines",
            "Singapore",
            "Taiwan",
            "Thailand",
            "USA",
            "Vietnam"
        ],
        "tools": [
            "Catchamas",
            "Elise",
            "Emissary",
            "gpresult",
            "Hannotog",
            "Mimikatz",
            "PsExec",
            "Rikamanu",
            "Sagerunex",
            "Spedear",
            "WMI Ghost",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2015-06",
                "activity": "Operation \u201cLotus Blossom\u201d\nToday Unit 42 published new research identifying a persistent cyber espionage campaign targeting government and military organizations in Southeast Asia. The adversary group responsible for the campaign, which we named \u201cLotus Blossom,\u201d is well organized and likely state-sponsored, with support from a country that has interests in Southeast Asia. The campaign has been in operation for some time; we have identified over 50 different attacks taking place over the past three years.\nhttps://unit42.paloaltonetworks.com/operation-lotus-blossom/"
            },
            {
                "date": "2015-11",
                "activity": "Attack on French Diplomat\nWe observed a targeted attack in November directed at an individual working for the French Ministry of Foreign Affairs. The attack involved a spear-phishing email sent to a single French diplomat based in Taipei, Taiwan and contained an invitation to a Science and Technology support group event.\nhttps://unit42.paloaltonetworks.com/attack-on-french-diplomat-linked-to-operation-lotus-blossom/"
            },
            {
                "date": "2017 Early",
                "activity": "In the beginning of 2017, Kaspersky Lab became aware of new activities by an APT actor we have been tracking for several years called Spring Dragon (also known as LotusBlossom).\nInformation about the new attacks arrived from a research partner in Taiwan and we decided to review the actor\u2019s tools, techniques and activities.\nUsing Kaspersky Lab telemetry data we detected the malware in attacks against some high-profile organizations around the South China Sea.\nhttps://securelist.com/spring-dragon-updated-activity/79067/"
            },
            {
                "date": "2018-01",
                "activity": "Attacks on Association of South East Asian Nations (ASEAN) countries\nDuring the last weeks of January (2018), nation state actors from Lotus Blossom conducted a targeted malware spam campaign against the Association of South East Asian Nations (ASEAN) countries.\nhttps://community.rsa.com/community/products/netwitness/blog/2018/02/13/lotus-blossom-continues-asean-targeting\nhttps://www.accenture.com/t20180127T003755Z_w_/us-en/_acnmedia/PDF-46/Accenture-Security-Dragonfish-Threat-Analysis.pdf"
            },
            {
                "date": "2018-01",
                "activity": "Back in January 2018, TAA triggered an alert at a large telecoms operator in Southeast Asia.\nhttps://www.symantec.com/blogs/threat-intelligence/thrip-hits-satellite-telecoms-defense-targets"
            },
            {
                "date": "2018-06",
                "activity": "Since Symantec first exposed the Thrip group in 2018, the stealthy China-based espionage group has continued to mount attacks in South East Asia, hitting military organizations, satellite communications operators, and a diverse range of other targets in the region.\nhttps://www.symantec.com/blogs/threat-intelligence/thrip-apt-south-east-asia"
            },
            {
                "date": "2022-03",
                "activity": "Billbug: State-sponsored Actor Targets Cert Authority, Government Agencies in Multiple Asian Countries\nhttps://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/espionage-asia-governments-cert-authority"
            }
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0030/",
            "https://attack.mitre.org/groups/G0076/"
        ],
        "uuid": "3b0d3a5d-1858-4be6-b23e-c2620e6e1065",
        "last-card-change": "2022-11-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "lotus_blossom_spring_dragon_thrip",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cyberthreat.thalesgroup.com/sites/default/files/2022-05/THALES%20THREAT%20HANDBOOK%202022%20Light%20Version_1.pdf",
            "date": "2022-05-31",
            "organization": "Thales",
            "author": "Thales",
            "title": "Cyber Threat Handbook 2002",
            "categories": [
                "GOBLIN PANDA",
                "Thrip"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2020CrowdStrikeGlobalThreatReport.pdf",
            "date": "2020-03-04",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2020 CrowdStrike Global Threat Report",
            "categories": [
                "MESSAGETAP",
                "More_eggs",
                "8.t Dropper",
                "Anchor",
                "BabyShark",
                "BadNews",
                "Clop",
                "Cobalt Strike",
                "CobInt",
                "Cobra Carbon System",
                "Cutwail",
                "DanaBot",
                "Dharma",
                "DoppelDridex",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FlawedAmmyy",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "IcedID",
                "ISFB",
                "KerrDown",
                "LightNeuron",
                "LockerGoga",
                "Maze",
                "MECHANICAL",
                "Necurs",
                "Nokki",
                "Outlook Backdoor",
                "Phobos",
                "Predator The Thief",
                "QakBot",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SDBbot",
                "Skipper",
                "SmokeLoader",
                "TerraRecon",
                "TerraStealer",
                "TerraTV",
                "TinyLoader",
                "TrickBot",
                "Vidar",
                "Winnti",
                "ANTHROPOID SPIDER",
                "APT23",
                "APT31",
                "APT39",
                "APT40",
                "BlackTech",
                "BuhTrap",
                "Charming Kitten",
                "CLOCKWORK SPIDER",
                "DOPPEL SPIDER",
                "FIN7",
                "Gamaredon Group",
                "GOBLIN PANDA",
                "MONTY SPIDER",
                "MUSTANG PANDA",
                "NARWHAL SPIDER",
                "NOCTURNAL SPIDER",
                "PINCHY SPIDER",
                "SALTY SPIDER",
                "SCULLY SPIDER",
                "SMOKY SPIDER",
                "Thrip",
                "VENOM SPIDER",
                "VICEROY TIGER"
            ]
        },
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/thrip",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Thrip",
            "categories": [
                "Thrip"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0076/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: Thrip",
            "categories": [
                "Thrip"
            ]
        },
        {
            "data_url": "https://www.symantec.com/blogs/threat-intelligence/thrip-hits-satellite-telecoms-defense-targets",
            "date": "2018-06-19",
            "organization": "Symantec",
            "author": "Security Response Attack Investigation Team",
            "title": "Thrip: Espionage Group Hits Satellite, Telecoms, and Defense Companies",
            "categories": [
                "Catchamas",
                "Rikamanu",
                "Spedear",
                "WMI Ghost",
                "Thrip"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "thrip",
            "procedure_code": "g0076",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0076",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1588.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1588/002",
                    "technique_name": "obtain capabilities : tool",
                    "technique_description": "adversaries may buy, steal, or download software tools that can be used during targeting. tools can be open or closed source, free or commercial. a tool can be used for malicious purposes by an adversary, but (unlike malware) were not intended to be used for those purposes (ex: psexec). tool acquisition can involve the procurement of commercial software licenses, including for red teaming tools such as cobalt strike. commercial software may be obtained through purchase, stealing licenses (or licensed copies of the software), or cracking trial versions.",
                    "procedure_description": "thrip has obtained and used tools such as mimikatz and psexec.[95]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "thrip leveraged powershell to run commands to download payloads, traverse the compromised networks, and carry out reconnaissance.[229]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1219",
                    "technique_link": "https://attack.mitre.org/techniques/T1219",
                    "technique_name": "remote access software",
                    "technique_description": "an adversary may use legitimate desktop support and remote access software, such as team viewer, anydesk, go2assist, logmein, ammyyadmin, etc, to establish an interactive command and control channel to target systems within networks. these services are commonly used as legitimate technical support software, and may be allowed by application control within a target environment. remote access tools like vnc, ammyy, and teamviewer are used frequently when compared with other legitimate software commonly used by adversaries.",
                    "procedure_description": "thrip used a cloud-based remote access software called logmein for their attacks.[29]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1048.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1048/003",
                    "technique_name": "exfiltration over alternative protocol : exfiltration over unencrypted non-c2 protocol",
                    "technique_description": "adversaries may steal data by exfiltrating it over an un-encrypted network protocol other than that of the existing command and control channel. the data may also be sent to an alternate network location from the main command and control server.",
                    "procedure_description": "thrip has used winscp to exfiltrate data from a targeted organization over ftp.[30]"
                }
            ]
        },
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