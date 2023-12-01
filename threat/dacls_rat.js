var threatdata = {
    "name": "Dacls RAT",
    "alias": "Dacls RAT, Dacls",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-10-18",
    "all_data": {
        "tool": "Dacls RAT",
        "names": [
            {
                "name": "Dacls RAT"
            },
            {
                "name": "Dacls"
            }
        ],
        "description": "(Qihoo 360) Dacls is a new type of remote-control software targeting both Windows and Linux environment. Its functions are modular, the C2 protocol uses TLS and RC4 double-layer encryption, the configuration file uses AES encryption and supports C2 instruction dynamic update. The Win32.Dacls plug-in module is dynamically loaded through a remote URL, and the Linux version of the plug-in is compiled directly in the Bot program.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.netlab.360.com/dacls-the-dual-platform-rat-en/",
            "https://blog.malwarebytes.com/threat-analysis/2020/05/new-mac-variant-of-lazarus-dacls-rat-distributed-via-trojanized-2fa-app/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.dacls",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dacls",
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.dacls"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Dacls"
        ],
        "uuid": "ece6a72a-df67-40cb-8f1a-17bb6fee43cc",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dacls_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2023/10/18092216/Updated-MATA-attacks-Eastern-Europe_full-report_ENG.pdf",
            "date": "2023-10-18",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Updated MATA attacks industrial companies in Eastern Europe",
            "categories": [
                "Dacls",
                "Unidentified 106"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/dark-river-you-can-t-see-them-but-they-re-there/",
            "date": "2023-09-27",
            "organization": "Positive Technologies",
            "author": "Denis Kuvshinov",
            "title": "Dark River. You can't see them, but they're there",
            "categories": [
                "Dacls",
                "Unidentified 106"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/security/2022/11/threat-analysis-active-c2-discovery-using-protocol-emulation-part4-dacls-aka-mata.html",
            "date": "2022-11-21",
            "organization": "vmware",
            "author": "Threat Analysis Unit",
            "title": "Threat Analysis: Active C2 Discovery Using Protocol Emulation Part4 (Dacls, aka MATA)",
            "categories": [
                "Dacls"
            ]
        },
        {
            "data_url": "https://vblocalhost.com/uploads/VB2021-Park.pdf",
            "date": "2021-10-08",
            "organization": "Virus Bulletin",
            "author": "Seongsu Park",
            "title": "Multi-universe of adversary: multiple campaigns of the Lazarus group and their connections",
            "categories": [
                "Dacls",
                "AppleJeus",
                "AppleJeus",
                "Bankshot",
                "BookCodes RAT",
                "Dacls",
                "DRATzarus",
                "LCPDot",
                "LPEClient"
            ]
        },
        {
            "data_url": "https://malwareandstuff.com/peb-where-magic-is-stored/",
            "date": "2021-08-22",
            "organization": "Malware and Stuff",
            "author": "Andreas Klopsch",
            "title": "PEB: Where Magic Is Stored",
            "categories": [
                "Dacls"
            ]
        },
        {
            "data_url": "https://www.blackberry.com/content/dam/blackberry-com/asset/enterprise/pdf/direct/report-bb-2021-threat-report.pdf",
            "date": "2021-03-21",
            "organization": "Blackberry",
            "author": "Blackberry Research",
            "title": "2021 Threat Report",
            "categories": [
                "Bashlite",
                "FritzFrog",
                "IPStorm",
                "Mirai",
                "Tsunami",
                "elf.wellmess",
                "AppleJeus",
                "Dacls",
                "EvilQuest",
                "Manuscrypt",
                "Astaroth",
                "BazarBackdoor",
                "Cerber",
                "Cobalt Strike",
                "Emotet",
                "FinFisher RAT",
                "Kwampirs",
                "MimiKatz",
                "NjRAT",
                "Ryuk",
                "SmokeLoader",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.sygnia.co/mata-framework",
            "date": "2021-03-03",
            "organization": "SYGNIA",
            "author": "Amitai Ben Shushan",
            "title": "Lazarus Group\u2019s MATA Framework Leveraged to Deploy TFlower Ransomware",
            "categories": [
                "Dacls",
                "Dacls",
                "Dacls",
                "TFlower"
            ]
        },
        {
            "data_url": "https://objective-see.com/blog/blog_0x5F.html",
            "date": "2021-01-01",
            "organization": "Objective-See",
            "author": "Patrick Wardle",
            "title": "The Mac Malware of 2020 - a comprehensive analysis of the year's new malware",
            "categories": [
                "AppleJeus",
                "Dacls",
                "EvilQuest",
                "FinFisher",
                "WatchCat",
                "XCSSET"
            ]
        },
        {
            "data_url": "https://www.intezer.com/blog/cloud-security/top-linux-cloud-threats-of-2020/",
            "date": "2020-12-21",
            "organization": "Intezer",
            "author": "Intezer",
            "title": "Top Linux Cloud Threats of 2020",
            "categories": [
                "AgeLocker",
                "AnchorDNS",
                "Blackrota",
                "Cloud Snooper",
                "Dacls",
                "Doki",
                "FritzFrog",
                "IPStorm",
                "Kaiji",
                "Kinsing",
                "NOTROBIN",
                "Penquin Turla",
                "PLEAD",
                "Prometei",
                "RansomEXX",
                "Stantinko",
                "TeamTNT",
                "TSCookie",
                "WellMail",
                "elf.wellmess",
                "TeamTNT"
            ]
        },
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
            "data_url": "https://securelist.com/apt-trends-report-q2-2020/97937/",
            "date": "2020-07-29",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2020",
            "categories": [
                "PhantomLance",
                "Dacls",
                "Penquin Turla",
                "elf.wellmess",
                "AppleJeus",
                "Dacls",
                "AcidBox",
                "Cobalt Strike",
                "Dacls",
                "EternalPetya",
                "Godlike12",
                "Olympic Destroyer",
                "PlugX",
                "shadowhammer",
                "ShadowPad",
                "Sinowal",
                "VHD Ransomware",
                "Volgmer",
                "WellMess",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://securelist.com/lazarus-on-the-hunt-for-big-game/97757/",
            "date": "2020-07-28",
            "organization": "Kaspersky Labs",
            "author": "Ivan Kwiatkowski",
            "title": "Lazarus on the hunt for big game",
            "categories": [
                "Dacls",
                "Dacls",
                "Dacls",
                "VHD Ransomware"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/blog/four-distinct-families-of-lazarus-malware-target-apples-macos-platform/",
            "date": "2020-07-27",
            "organization": "SentinelOne",
            "author": "Phil Stokes",
            "title": "Four Distinct Families of Lazarus Malware Target Apple\u2019s macOS Platform",
            "categories": [
                "AppleJeus",
                "Casso",
                "Dacls",
                "WatchCat"
            ]
        },
        {
            "data_url": "https://securelist.com/mata-multi-platform-targeted-malware-framework/97746/",
            "date": "2020-07-22",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "MATA: Multi-platform targeted malware framework",
            "categories": [
                "Dacls",
                "Dacls",
                "Dacls"
            ]
        },
        {
            "data_url": "https://intezer.com/blog/linux/elf-malware-analysis-101-linux-threats-no-longer-an-afterthought",
            "date": "2020-06-16",
            "organization": "Intezer",
            "author": "Aviygayil Mechtinger",
            "title": "ELF Malware Analysis 101: Linux Threats No Longer an Afterthought",
            "categories": [
                "Cloud Snooper",
                "Dacls",
                "EvilGnome",
                "HiddenWasp",
                "MESSAGETAP",
                "NOTROBIN",
                "QNAPCrypt",
                "Winnti"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/new-macos-dacls-rat-backdoor-show-lazarus-multi-platform-attack-capability",
            "date": "2020-05-11",
            "organization": "Trend Micro",
            "author": "Gabrielle Joyce Mabutas",
            "title": "New MacOS Dacls RAT Backdoor Shows Lazarus\u2019 Multi-Platform Attack Capability",
            "categories": [
                "Dacls"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/new-macos-dacls-rat-backdoor-show-lazarus-multi-platform-attack-capability/",
            "date": "2020-05-11",
            "organization": "Trend Micro",
            "author": "Gabrielle Joyce Mabutas",
            "title": "New MacOS Dacls RAT Backdoor Show Lazarus\u2019 Multi-Platform Attack Capability",
            "categories": [
                "Dacls"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2020/05/new-mac-variant-of-lazarus-dacls-rat-distributed-via-trojanized-2fa-app/",
            "date": "2020-05-06",
            "organization": "Malwarebytes",
            "author": "Hossein Jazi",
            "title": "New Mac variant of Lazarus Dacls RAT distributed via Trojanized 2FA app",
            "categories": [
                "Dacls"
            ]
        },
        {
            "data_url": "https://objective-see.com/blog/blog_0x57.html",
            "date": "2020-05-05",
            "organization": "Objective-See",
            "author": "Patrick Wardle",
            "title": "The Dacls RAT ...now on macOS! deconstructing the mac variant of a lazarus group implant",
            "categories": [
                "Dacls"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/uploads/2020/02/13/cb78386a082f465f259b37dae5df4884.pdf",
            "date": "2020-02-13",
            "organization": "Qianxin",
            "author": "Qi Anxin Threat Intelligence Center",
            "title": "APT Report 2019",
            "categories": [
                "Chrysaor",
                "Exodus",
                "Dacls",
                "VPNFilter",
                "DNSRat",
                "Griffon",
                "KopiLuwak",
                "More_eggs",
                "SQLRat",
                "AppleJeus",
                "BONDUPDATER",
                "Agent.BTZ",
                "Anchor",
                "AndroMut",
                "AppleJeus",
                "BOOSTWRITE",
                "Brambul",
                "Carbanak",
                "Cobalt Strike",
                "Dacls",
                "DistTrack",
                "DNSpionage",
                "Dtrack",
                "ELECTRICFISH",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Grateful POS",
                "HOPLIGHT",
                "Imminent Monitor RAT",
                "jason",
                "Joanap",
                "KerrDown",
                "KEYMARBLE",
                "Lambert",
                "LightNeuron",
                "LoJax",
                "MiniDuke",
                "PolyglotDuke",
                "PowerRatankba",
                "Rising Sun",
                "SDBbot",
                "ServHelper",
                "Snatch",
                "Stuxnet",
                "TinyMet",
                "tRat",
                "TrickBot",
                "Volgmer",
                "X-Agent",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://blog.netlab.360.com/dacls-the-dual-platform-rat/",
            "date": "2019-12-17",
            "organization": "Netlab",
            "author": "Jinye",
            "title": "Lazarus Group uses Dacls RAT to attack Linux platform",
            "categories": [
                "Dacls",
                "Log Collector",
                "Dacls"
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
            "procedure_name": "dacls",
            "procedure_code": "s0497",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0497",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/001",
                    "technique_name": "create or modify system process : launch agent",
                    "technique_description": "adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence. when a user logs in, a per-user launchd process is started which loads the parameters for each launch-on-demand user agent from the property list (.plist) file found in /system/library/launchagents, /library/launchagents, and ~/library/launchagents.  property list files use the label, programarguments , and runatload keys to identify the launch agent's name, executable location, and execution time. launch agents are often installed to perform updates to programs, launch user specified programs at login, or to conduct other developer tasks.",
                    "procedure_description": "dacls can establish persistence via a launchagent.[14][15]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/004",
                    "technique_name": "create or modify system process : launch daemon",
                    "technique_description": "adversaries may create or modify launch daemons to execute malicious payloads as part of persistence. launch daemons are plist files used to interact with launchd, the service management framework used by macos. launch daemons require elevated privileges to install, are executed for every user on a system prior to login, and run in the background without the need for user interaction. during the macos initialization startup, the launchd process loads the parameters for launch-on-demand system-level daemons from plist files found in /system/library/launchdaemons/ and /library/launchdaemons/. required launch daemons parameters include a label to identify the task, program to provide a path to the executable, and runatload to specify when the task is run. launch daemons are often used to provide access to shared resources, updates to software, or conduct automation tasks.",
                    "procedure_description": "dacls can establish persistence via a launch daemon.[11][12]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/001",
                    "technique_name": "create or modify system process : launch agent",
                    "technique_description": "adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence. when a user logs in, a per-user launchd process is started which loads the parameters for each launch-on-demand user agent from the property list (.plist) file found in /system/library/launchagents, /library/launchagents, and ~/library/launchagents.  property list files use the label, programarguments , and runatload keys to identify the launch agent's name, executable location, and execution time. launch agents are often installed to perform updates to programs, launch user specified programs at login, or to conduct other developer tasks.",
                    "procedure_description": "dacls can establish persistence via a launchagent.[14][15]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/004",
                    "technique_name": "create or modify system process : launch daemon",
                    "technique_description": "adversaries may create or modify launch daemons to execute malicious payloads as part of persistence. launch daemons are plist files used to interact with launchd, the service management framework used by macos. launch daemons require elevated privileges to install, are executed for every user on a system prior to login, and run in the background without the need for user interaction. during the macos initialization startup, the launchd process loads the parameters for launch-on-demand system-level daemons from plist files found in /system/library/launchdaemons/ and /library/launchdaemons/. required launch daemons parameters include a label to identify the task, program to provide a path to the executable, and runatload to specify when the task is run. launch daemons are often used to provide access to shared resources, updates to software, or conduct automation tasks.",
                    "procedure_description": "dacls can establish persistence via a launch daemon.[11][12]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/001",
                    "technique_name": "hide artifacts : hidden files and directories",
                    "technique_description": "adversaries may set files and directories to be hidden to evade detection mechanisms. to prevent normal users from accidentally changing special files on a system, most operating systems have the concept of a \u2018hidden\u2019 file. these files don\u2019t show up when a user browses the file system with a gui or when using normal commands on the command line. users must explicitly ask to show the hidden files either via a series of graphical user interface (gui) prompts or with command line switches (dir /a for windows and ls \u2013a for linux and macos).",
                    "procedure_description": "dacls has had its payload named with a dot prefix to make it hidden from view in the finder application.[16][17]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036",
                    "technique_link": "https://attack.mitre.org/techniques/T1036",
                    "technique_name": "masquerading",
                    "technique_description": "adversaries may attempt to manipulate features of their artifacts to make them appear legitimate or benign to users and/or security tools. masquerading occurs when the name or location of an object, legitimate or malicious, is manipulated or abused for the sake of evading defenses and observation. this may include manipulating file metadata, tricking users into misidentifying the file type, and giving legitimate task or service names.",
                    "procedure_description": "the dacls mach-o binary has been disguised as a .nib file.[10]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "dacls can encrypt its configuration file with aes cbc.[91]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "dacls can scan directories on a compromised host.[95]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "dacls can collect data on running and parent processes.[71]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "dacls can use https in c2 communications.[88][89]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "dacls can download its payload from a c2 server.[129][134]"
                }
            ]
        }
    ]
};