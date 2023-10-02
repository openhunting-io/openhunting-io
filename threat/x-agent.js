var threatdata = {
    "name": "X-Agent",
    "alias": "X-Agent, Xagent, Popr-d30, SPLM, CHOPSTICK, fysbis, Backdoor.SofacyX, webhp",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Info stealer, Tunneling",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "X-Agent",
        "names": [
            {
                "name": "X-Agent"
            },
            {
                "name": "Xagent"
            },
            {
                "name": "Popr-d30"
            },
            {
                "name": "SPLM"
            },
            {
                "name": "CHOPSTICK"
            },
            {
                "name": "fysbis"
            },
            {
                "name": "Backdoor.SofacyX"
            },
            {
                "name": "webhp"
            }
        ],
        "description": "CHOPSTICK is a malware family of modular backdoors used by APT28. It has been used since at least 2012 and is usually dropped on victims as second-stage malware, though it has been used as first-stage malware in several cases. It has both Windows and Linux variants. It is tracked separately from the X-Agent for Android.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Tunneling"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/rpt-apt28.pdf",
            "http://blog.crysys.hu/2017/01/technical-details-on-the-fancy-bear-android-malware-poprd30-apk/",
            "http://blog.crysys.hu/2017/03/update-on-the-fancy-bear-android-malware-poprd30-apk/",
            "https://contagiodump.blogspot.de/2017/02/russian-apt-apt28-collection-of-samples.html",
            "https://download.bitdefender.com/resources/files/News/CaseStudies/study/143/Bitdefender-Whitepaper-APT-Mac-A4-en-EN-web.pdf",
            "http://www.welivesecurity.com/wp-content/uploads/2016/10/eset-sednit-part-2.pdf",
            "https://www.welivesecurity.com/2017/12/21/sednit-update-fancy-bear-spent-year/",
            "https://www.thecssc.com/wp-content/uploads/2018/10/4OctoberIOC-APT28-malware-advisory.pdf",
            "http://www2.fireeye.com/rs/fireye/images/rpt-apt28.pdf",
            "https://www.crowdstrike.com/blog/bears-midst-intrusion-democratic-national-committee/",
            "http://csecybsec.com/download/zlab/20180713_CSE_APT28_X-Agent_Op-Roman%20Holiday-Report_v6_1.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0023/",
            "https://attack.mitre.org/software/S0410/",
            "https://attack.mitre.org/software/S0161/",
            "https://attack.mitre.org/software/S0314/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.popr-d30",
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.xagent",
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.xagent",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.xagent"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:X-Agent"
        ],
        "uuid": "d4eb88ba-57f3-4528-bda2-5c05b113e924",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "X-Agent",
            "malware_alias": "splm,chopstick,fysbis",
            "malware": "elf.xagent",
            "last_update": "2022-07-31 18:45:01",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "c75ffcb1a96a4aa0700af898650aac12",
                        "timestamp": "2022-07-31 18:45:01"
                    },
                    {
                        "value": "c0ca0af1f0f646e52dc05af024693b6f",
                        "timestamp": "2022-07-31 18:45:01"
                    },
                    {
                        "value": "540e4a7a28ca1514e53c2564993d8d87",
                        "timestamp": "2022-07-31 18:45:01"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-07-31 18:45:01",
    "file_name": "x-agent",
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
            "data_url": "https://www.secureworks.com/research/threat-profiles/iron-twilight",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "IRON TWILIGHT",
            "categories": [
                "X-Agent",
                "X-Agent",
                "X-Agent",
                "Computrace",
                "HideDRV",
                "Sedreco",
                "Seduploader",
                "X-Agent",
                "XTunnel",
                "Zebrocy",
                "Zebrocy (AutoIT)"
            ]
        },
        {
            "data_url": "https://symantec-blogs.broadcom.com/blogs/election-security/apt28-espionage-military-government",
            "date": "2018-10-04",
            "organization": "Symantec",
            "author": "Critical Attack Discovery and Intelligence Team",
            "title": "APT28: New Espionage Operations Target Military and Government Organizations",
            "categories": [
                "LoJax",
                "Seduploader",
                "X-Agent",
                "XTunnel",
                "Zebrocy",
                "APT28"
            ]
        },
        {
            "data_url": "https://www.thecssc.com/wp-content/uploads/2018/10/4OctoberIOC-APT28-malware-advisory.pdf",
            "date": "2018-10-04",
            "organization": "NCSC UK",
            "author": "NCSC UK",
            "title": "Indicators of Compromise for Malware used by APT28",
            "categories": [
                "X-Agent"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2017/12/21/sednit-update-fancy-bear-spent-year/",
            "date": "2017-12-21",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "Sednit update: How Fancy Bear Spent the Year",
            "categories": [
                "Seduploader",
                "X-Agent"
            ]
        },
        {
            "data_url": "https://twitter.com/PhysicalDrive0/status/845009226388918273",
            "date": "2017-03-23",
            "organization": "Twitter (PhysicalDrive0)",
            "author": "PhysicalDrive0",
            "title": "Tweet on XAgent for macOS",
            "categories": [
                "X-Agent"
            ]
        },
        {
            "data_url": "http://blog.crysys.hu/2017/03/update-on-the-fancy-bear-android-malware-poprd30-apk/",
            "date": "2017-03-02",
            "organization": "Laboratory of Cryptography and System Security",
            "author": "Boldizsar Bencsath",
            "title": "Update on the Fancy Bear Android malware (poprd30.apk)",
            "categories": [
                "X-Agent"
            ]
        },
        {
            "data_url": "https://download.bitdefender.com/resources/files/News/CaseStudies/study/143/Bitdefender-Whitepaper-APT-Mac-A4-en-EN-web.pdf",
            "date": "2017-02-21",
            "organization": "Bitdefender",
            "author": "Bitdefender",
            "title": "Dissecting the APT28 Mac OS X Payload",
            "categories": [
                "X-Agent"
            ]
        },
        {
            "data_url": "https://contagiodump.blogspot.de/2017/02/russian-apt-apt28-collection-of-samples.html",
            "date": "2017-02-20",
            "organization": "Contagio Dump",
            "author": "Mila Parkour",
            "title": "Part I. Russian APT - APT28 collection of samples including OSX XAgent",
            "categories": [
                "X-Agent",
                "Komplex",
                "Coreshell",
                "Downdelph",
                "HideDRV",
                "SEADADDY",
                "Sedreco",
                "Seduploader",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2017/02/unit42-xagentosx-sofacys-xagent-macos-tool/",
            "date": "2017-02-14",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "XAgentOSX: Sofacy\u2019s XAgent macOS Tool",
            "categories": [
                "X-Agent"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/sites/default/files/2021-09/APT28-Center-of-Storm-2017.pdf",
            "date": "2017-01-10",
            "organization": "FireEye",
            "author": "FireEye iSIGHT Intelligence",
            "title": "APT28:  At The Center  Of The Storm",
            "categories": [
                "Coreshell",
                "OLDBAIT",
                "Sedreco",
                "Seduploader",
                "X-Agent"
            ]
        },
        {
            "data_url": "http://blog.crysys.hu/2017/01/technical-details-on-the-fancy-bear-android-malware-poprd30-apk/",
            "date": "2017-01-03",
            "organization": "CrySyS Lab",
            "author": "Boldizsar Bencsath",
            "title": "Technical details on the Fancy Bear Android malware (poprd30.apk)",
            "categories": [
                "X-Agent"
            ]
        },
        {
            "data_url": "http://www.welivesecurity.com/wp-content/uploads/2016/10/eset-sednit-part-2.pdf",
            "date": "2016-10-20",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "En Route with Sednit Part 2: Observing the Comings and Goings",
            "categories": [
                "X-Agent",
                "Sedreco",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/bears-midst-intrusion-democratic-national-committee/",
            "date": "2016-06-15",
            "organization": "CrowdStrike",
            "author": "Dmitri Alperovitch",
            "title": "Bears in the Midst: Intrusion into the Democratic National Committee",
            "categories": [
                "X-Agent",
                "ATI-Agent",
                "SEADADDY",
                "Seduploader",
                "X-Agent",
                "XTunnel",
                "APT28"
            ]
        },
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2016/02/a-look-into-fysbis-sofacys-linux-backdoor/",
            "date": "2016-02-12",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Bryan Lee",
            "title": "A Look Into Fysbis: Sofacy\u2019s Linux Backdoor",
            "categories": [
                "X-Agent"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/a-look-into-fysbis-sofacys-linux-backdoor/",
            "date": "2016-02-12",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Bryan Lee",
            "title": "A Look Into Fysbis: Sofacy\u2019s Linux Backdoor",
            "categories": [
                "X-Agent"
            ]
        },
        {
            "data_url": "https://download.bitdefender.com/resources/media/materials/white-papers/en/Bitdefender_In-depth_analysis_of_APT28%E2%80%93The_Political_Cyber-Espionage.pdf",
            "date": "2015-12-17",
            "organization": "Bitdefender",
            "author": "Bitdefender",
            "title": "APT28 Under the Scope: A Journey into Exfiltrating Intelligence and Government Information",
            "categories": [
                "X-Agent",
                "XP PrivEsc (CVE-2014-4076)"
            ]
        },
        {
            "data_url": "https://securelist.com/sofacy-apt-hits-high-profile-targets-with-updated-toolset/72924/",
            "date": "2015-12-04",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Sofacy APT hits high profile targets with updated toolset",
            "categories": [
                "Coreshell",
                "Sedreco",
                "Seduploader",
                "X-Agent",
                "APT28"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/pawn-storm-update-ios-espionage-app-found/",
            "date": "2015-02-04",
            "organization": "Trend Micro",
            "author": "Lambert Sun",
            "title": "Pawn Storm Update: iOS Espionage App Found",
            "categories": [
                "X-Agent"
            ]
        },
        {
            "data_url": "https://assets.documentcloud.org/documents/3461560/Google-Aquarium-Clean.pdf",
            "date": "2014-09-05",
            "organization": "Google",
            "author": "Neel Mehta",
            "title": "Peering Into the Aquarium: Analysis of a Sophisticated Multi-Stage Malware Family",
            "categories": [
                "X-Agent"
            ]
        },
        {
            "data_url": "http://www2.fireeye.com/rs/fireye/images/rpt-apt28.pdf",
            "date": "2014",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "APT28",
            "categories": [
                "Coreshell",
                "Sedreco",
                "X-Agent"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "chopstick",
            "procedure_code": "s0023",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0023",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1091",
                    "technique_link": "https://attack.mitre.org/techniques/T1091",
                    "technique_name": "replication through removable media",
                    "technique_description": "adversaries may move onto systems, possibly those on disconnected or air-gapped networks, by copying malware to removable media and taking advantage of autorun features when the media is inserted into a system and executes. in the case of lateral movement, this may occur through modification of executable files stored on removable media or by copying malware and renaming it to look like a legitimate file to trick users into executing it on a separate system. in the case of initial access, this may occur through manual manipulation of the media, modification of systems used to initially format the media, or modification to the media's firmware itself.",
                    "procedure_description": "part of apt28's operation involved using chopstick modules to copy itself to air-gapped machines and using files written to usb sticks to transfer data and command traffic.[7][6][8]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059",
                    "technique_link": "https://attack.mitre.org/techniques/T1059",
                    "technique_name": "command and scripting interpreter",
                    "technique_description": "adversaries may abuse command and script interpreters to execute commands, scripts, or binaries. these interfaces and languages provide ways of interacting with computer systems and are a common feature across many different platforms. most systems come with some built-in command-line interface and scripting capabilities, for example, macos and linux distributions include some flavor of unix shell while windows installations include the windows command shell and powershell.",
                    "procedure_description": "chopstick is capable of performing remote command execution.[11][12]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1112",
                    "technique_link": "https://attack.mitre.org/techniques/T1112",
                    "technique_name": "modify registry",
                    "technique_description": "adversaries may interact with the windows registry to hide configuration information within registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.",
                    "procedure_description": "chopstick may modify registry keys to store rc4 encrypted configuration information.[35]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/011",
                    "technique_name": "obfuscated files or information : fileless storage",
                    "technique_description": "adversaries may store data in \"fileless\" formats to conceal malicious activity from defenses. fileless storage can be broadly defined as any format other than a file. common examples of non-volatile fileless storage include the windows registry, event logs, or wmi repository.",
                    "procedure_description": "chopstick may store rc4 encrypted configuration information in the windows registry.[5]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497",
                    "technique_link": "https://attack.mitre.org/techniques/T1497",
                    "technique_name": "virtualization/sandbox evasion",
                    "technique_description": "adversaries may employ various means to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "chopstick  includes runtime checks to identify an analysis environment and prevent execution on it.[9]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "chopstick is capable of performing keylogging.[37][3][14]"
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
                    "procedure_description": "an older version of chopstick has a module that monitors all mounted volumes for files with the extensions .doc, .docx, .pgp, .gpg, .m2f, or .m2o.[6]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1012",
                    "technique_link": "https://attack.mitre.org/techniques/T1012",
                    "technique_name": "query registry",
                    "technique_description": "adversaries may interact with the windows registry to gather information about the system, configuration, and installed software.",
                    "procedure_description": "chopstick provides access to the windows registry, which can be used to gather information.[24]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1518/001",
                    "technique_name": "software discovery : security software discovery",
                    "technique_description": "adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. this may include things such as firewall rules and anti-virus. adversaries may use the information from security software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "chopstick checks for antivirus and forensics software.[18]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497",
                    "technique_link": "https://attack.mitre.org/techniques/T1497",
                    "technique_name": "virtualization/sandbox evasion",
                    "technique_description": "adversaries may employ various means to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "chopstick  includes runtime checks to identify an analysis environment and prevent execution on it.[9]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1091",
                    "technique_link": "https://attack.mitre.org/techniques/T1091",
                    "technique_name": "replication through removable media",
                    "technique_description": "adversaries may move onto systems, possibly those on disconnected or air-gapped networks, by copying malware to removable media and taking advantage of autorun features when the media is inserted into a system and executes. in the case of lateral movement, this may occur through modification of executable files stored on removable media or by copying malware and renaming it to look like a legitimate file to trick users into executing it on a separate system. in the case of initial access, this may occur through manual manipulation of the media, modification of systems used to initially format the media, or modification to the media's firmware itself.",
                    "procedure_description": "part of apt28's operation involved using chopstick modules to copy itself to air-gapped machines and using files written to usb sticks to transfer data and command traffic.[7][6][8]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "chopstick is capable of performing keylogging.[37][3][14]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "chopstick has the capability to capture screenshots.[12]"
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
                    "procedure_description": "various implementations of chopstick communicate with c2 over http.[64]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/003",
                    "technique_name": "application layer protocol : mail protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with electronic mail delivery to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "various implementations of chopstick communicate with c2 over smtp and pop3.[10]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1092",
                    "technique_link": "https://attack.mitre.org/techniques/T1092",
                    "technique_name": "communication through removable media",
                    "technique_description": "adversaries can perform command and control between compromised hosts on potentially disconnected networks using removable media to transfer commands from system to system. both systems would need to be compromised, with the likelihood that an internet-connected system was compromised first and the second through lateral movement by replication through removable media. commands and files would be relayed from the disconnected system to the internet-connected system to which the adversary has direct access.",
                    "procedure_description": "part of apt28's operation involved using chopstick modules to copy itself to air-gapped machines, using files written to usb sticks to transfer data and command traffic.[2][3][1]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1568.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1568/002",
                    "technique_name": "dynamic resolution : domain generation algorithms",
                    "technique_description": "adversaries may make use of domain generation algorithms (dgas) to dynamically identify a destination domain for command and control traffic rather than relying on a list of static ip addresses or domains. this has the advantage of making it much harder for defenders to block, track, or take over the command and control channel, as there potentially could be thousands of domains that malware can check for instructions.",
                    "procedure_description": "chopstick can use a dga for fallback channels, domains are generated by concatenating words from lists.[7]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/001",
                    "technique_name": "encrypted channel : symmetric cryptography",
                    "technique_description": "adversaries may employ a known symmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. symmetric encryption algorithms use the same key for plaintext encryption and ciphertext decryption. common symmetric encryption algorithms include aes, des, 3des, blowfish, and rc4.",
                    "procedure_description": "chopstick encrypts c2 communications with rc4.[30]"
                },
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
                    "procedure_description": "chopstick encrypts c2 communications with tls.[8]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1008",
                    "technique_link": "https://attack.mitre.org/techniques/T1008",
                    "technique_name": "fallback channels",
                    "technique_description": "adversaries may use fallback or alternate communication channels if the primary channel is compromised or inaccessible in order to maintain reliable command and control and to avoid data transfer thresholds.",
                    "procedure_description": "chopstick can switch to a new c2 channel if the current one is broken.[11]"
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
                    "procedure_description": "chopstick is capable of performing remote file transmission.[111]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/001",
                    "technique_name": "proxy : internal proxy",
                    "technique_description": "adversaries may use an internal proxy to direct command and control traffic between two or more systems in a compromised environment. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use internal proxies to manage command and control communications inside a compromised environment, to reduce the number of simultaneous outbound network connections, to provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between infected systems to avoid suspicion. internal proxy connections may use common peer-to-peer (p2p) networking protocols, such as smb, to better blend in with the environment.",
                    "procedure_description": "chopstick used a proxy server between victims and the c2 server.[5]"
                }
            ]
        },
        {
            "procedure_name": "fysbis",
            "procedure_code": "s0410",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0410",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/004",
                    "technique_name": "command and scripting interpreter : unix shell",
                    "technique_description": "adversaries may abuse unix shell commands and scripts for execution. unix shells are the primary command prompt on linux and macos systems, though many variations of the unix shell exist (e.g. sh, bash, zsh, etc.) depending on the specific os or distribution. unix shells can control every aspect of a system, with certain commands requiring elevated privileges.",
                    "procedure_description": "fysbis has the ability to create and execute commands in a remote shell for cli.[18]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.013",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/013",
                    "technique_name": "boot or logon autostart execution : xdg autostart entries",
                    "technique_description": "adversaries may modify xdg autostart entries to execute programs or commands during system boot. linux desktop environments that are xdg compliant implement functionality for xdg autostart entries. these entries will allow an application to automatically start during the startup of a desktop environment after user logon. by default, xdg autostart entries are stored within the /etc/xdg/autostart or ~/.config/autostart directories and have a .desktop file extension.",
                    "procedure_description": "fysbis has installed itself as an autostart entry under ~/.config/autostart/dbus-inotifier.desktop to establish persistence.[3]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/002",
                    "technique_name": "create or modify system process : systemd service",
                    "technique_description": "adversaries may create or modify systemd services to repeatedly execute malicious payloads as part of persistence. systemd is a system and service manager commonly used for managing background daemon processes (also known as services) and other system resources. systemd is the default initialization (init) system on many linux distributions replacing legacy init systems, including sysvinit and upstart, while remaining backwards compatible.",
                    "procedure_description": "fysbis has established persistence using a systemd service.[8]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.013",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/013",
                    "technique_name": "boot or logon autostart execution : xdg autostart entries",
                    "technique_description": "adversaries may modify xdg autostart entries to execute programs or commands during system boot. linux desktop environments that are xdg compliant implement functionality for xdg autostart entries. these entries will allow an application to automatically start during the startup of a desktop environment after user logon. by default, xdg autostart entries are stored within the /etc/xdg/autostart or ~/.config/autostart directories and have a .desktop file extension.",
                    "procedure_description": "fysbis has installed itself as an autostart entry under ~/.config/autostart/dbus-inotifier.desktop to establish persistence.[3]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/002",
                    "technique_name": "create or modify system process : systemd service",
                    "technique_description": "adversaries may create or modify systemd services to repeatedly execute malicious payloads as part of persistence. systemd is a system and service manager commonly used for managing background daemon processes (also known as services) and other system resources. systemd is the default initialization (init) system on many linux distributions replacing legacy init systems, including sysvinit and upstart, while remaining backwards compatible.",
                    "procedure_description": "fysbis has established persistence using a systemd service.[8]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "fysbis has the ability to delete files.[77]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/004",
                    "technique_name": "masquerading : masquerade task or service",
                    "technique_description": "adversaries may attempt to manipulate the name of a task or service to make it appear legitimate or benign. tasks/services executed by the task scheduler or systemd will typically be given a name and/or description. windows services will have a service name as well as a display name. many benign tasks and services exist that have commonly associated names. adversaries may give tasks or services names that are similar or identical to those of legitimate ones.",
                    "procedure_description": "fysbis has masqueraded as the rsyncd and dbus-inotifier services.[4]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "fysbis has masqueraded as trusted software rsyncd and dbus-inotifier.[61]"
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
                    "procedure_description": "fysbis has been encrypted using xor and rc4.[132]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "fysbis can perform keylogging.[71]"
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
                    "procedure_description": "fysbis has the ability to search for files.[132]"
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
                    "procedure_description": "fysbis can collect information about running processes.[109]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "fysbis has used the command ls /etc | egrep -e\"fedora*|debian*|gentoo*|mandriva*|mandrake*|meego*|redhat*|lsb-*|sun-*|suse*|release\" to determine which linux os version is running.[141]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "fysbis can perform keylogging.[71]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1132/001",
                    "technique_name": "data encoding : standard encoding",
                    "technique_description": "adversaries may encode data with a standard data encoding system to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a standard data encoding system that adheres to existing protocol specifications. common data encoding schemes include ascii, unicode, hexadecimal, base64, and mime. some data encoding systems may also result in data compression, such as gzip.",
                    "procedure_description": "fysbis can use base64 to encode its c2 traffic.[37]"
                }
            ]
        }
    ]
};