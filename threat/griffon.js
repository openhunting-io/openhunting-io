var threatdata = {
    "name": "Griffon",
    "alias": "Griffon, Harpy",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Griffon",
        "names": [
            {
                "name": "Griffon"
            },
            {
                "name": "Harpy"
            }
        ],
        "description": "(Kaspersky) The GRIFFON implant is a lightweight JScript validator-style implant without any persistence mechanism. The malware is designed for receiving modules to be executed in-memory and sending the results to C2s. We were able to obtain four different modules during the investigation.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://securelist.com/fin7-5-the-infamous-cybercrime-rig-fin7-continues-its-activities/90703/",
            "https://www.africacybersecurityconference.com/document/CrowdStrike_GTR_2019.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0417/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.griffon"
        ],
        "uuid": "5be696af-2b6d-4673-a2c4-81a80023fb67",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Griffon",
            "malware_alias": "Harpy",
            "malware": "js.griffon",
            "last_update": "2021-09-14 13:11:48",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "caa7667bfdbcb04ceb9d81df93fe805dfe4ac8a04b9dd3eaab7b5f7c87c4fc9c",
                        "timestamp": "2021-09-14 13:11:48"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "f1680aa55c88220bcf83e24d89628cc9",
                        "timestamp": "2021-09-03 09:32:40"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-09-14 13:11:48",
    "file_name": "griffon",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/05/09/ransomware-as-a-service-understanding-the-cybercrime-gig-economy-and-how-to-protect-yourself",
            "date": "2022-05-09",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "Ransomware-as-a-service: Understanding the cybercrime gig economy and how to protect yourself",
            "categories": [
                "AnchorDNS",
                "BlackCat",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "HelloKitty",
                "Hive",
                "LockBit",
                "REvil",
                "FAKEUPDATES",
                "Griffon",
                "ATOMSILO",
                "BazarBackdoor",
                "BlackCat",
                "BlackMatter",
                "Blister",
                "Cobalt Strike",
                "Conti",
                "DarkSide",
                "Emotet",
                "FiveHands",
                "Gozi",
                "HelloKitty",
                "Hive",
                "IcedID",
                "ISFB",
                "JSSLoader",
                "LockBit",
                "LockFile",
                "Maze",
                "NightSky",
                "Pandora",
                "Phobos",
                "Phoenix Locker",
                "PhotoLoader",
                "QakBot",
                "REvil",
                "Rook",
                "Ryuk",
                "SystemBC",
                "TrickBot",
                "WastedLocker",
                "BRONZE STARLIGHT"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/05/09/ransomware-as-a-service-understanding-the-cybercrime-gig-economy-and-how-to-protect-yourself/",
            "date": "2022-05-09",
            "organization": "Microsoft Security",
            "author": "Microsoft Threat Intelligence Center",
            "title": "Ransomware-as-a-service: Understanding the cybercrime gig economy and how to protect yourself",
            "categories": [
                "Griffon",
                "BazarBackdoor",
                "BlackCat",
                "BlackMatter",
                "Blister",
                "Gozi",
                "LockBit",
                "Pandora",
                "Rook",
                "SystemBC",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://cert.ssi.gouv.fr/uploads/20220427_NP_TLPWHITE_ANSSI_FIN7.pdf",
            "date": "2022-04-27",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "LE GROUPE CYBERCRIMINEL FIN7",
            "categories": [
                "Bateleur",
                "BELLHOP",
                "Griffon",
                "SQLRat",
                "POWERSOURCE",
                "Andromeda",
                "BABYMETAL",
                "BlackCat",
                "BlackMatter",
                "BOOSTWRITE",
                "Carbanak",
                "Cobalt Strike",
                "DNSMessenger",
                "Dridex",
                "DRIFTPIN",
                "Gameover P2P",
                "MimiKatz",
                "Murofet",
                "Qadars",
                "Ranbyus",
                "SocksBot"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/evolution-of-fin7",
            "date": "2022-04-04",
            "organization": "Mandiant",
            "author": "Bryce Abdo",
            "title": "FIN7 Power Hour: Adversary Archaeology and the Evolution of FIN7",
            "categories": [
                "Griffon",
                "BABYMETAL",
                "Carbanak",
                "Cobalt Strike",
                "JSSLoader",
                "Termite"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-embraces-big-game-hunting-part-2/",
            "date": "2021-11-04",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "CARBON SPIDER Embraces Big Game Hunting, Part 2",
            "categories": [
                "BlackMatter",
                "Griffon",
                "BlackMatter",
                "DarkSide",
                "HiddenTear",
                "JSSLoader"
            ]
        },
        {
            "data_url": "https://www.deepinstinct.com/blog/understanding-the-windows-javascript-threat-landscape",
            "date": "2021-11-04",
            "organization": "Deep instinct",
            "author": "Shaul Vilkomir-Preisman",
            "title": "Understanding the Windows JavaScript Threat Landscape",
            "categories": [
                "STRRAT",
                "Griffon",
                "BlackByte",
                "Houdini",
                "Vjw0rm",
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-embraces-big-game-hunting-part-1/",
            "date": "2021-08-30",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "CARBON SPIDER Embraces Big Game Hunting, Part 1",
            "categories": [
                "Bateleur",
                "Griffon",
                "Carbanak",
                "DarkSide",
                "JSSLoader",
                "PILLOWMINT",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-sprite-spider-target-esxi-servers-with-ransomware/?utm_campaign=blog&utm_medium=soc&utm_source=twtr&utm_content=sprout",
            "date": "2021-02-26",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "Hypervisor Jackpotting: CARBON SPIDER and SPRITE SPIDER Target ESXi Servers With Ransomware to Maximize Impact",
            "categories": [
                "DarkSide",
                "RansomEXX",
                "Griffon",
                "Carbanak",
                "Cobalt Strike",
                "DarkSide",
                "IcedID",
                "MimiKatz",
                "PyXie",
                "RansomEXX",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/would-you-exchange-your-security-for-a-gift-card/",
            "date": "2020-03-26",
            "organization": "SpiderLabs Blog",
            "author": "Alejandro Baca",
            "title": "Would You Exchange Your Security for a Gift Card?",
            "categories": [
                "Griffon"
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
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-niagara",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD NIAGARA",
            "categories": [
                "Bateleur",
                "Griffon",
                "Carbanak",
                "Cobalt Strike",
                "DRIFTPIN",
                "TinyMet",
                "FIN7"
            ]
        },
        {
            "data_url": "https://securelist.com/fin7-5-the-infamous-cybercrime-rig-fin7-continues-its-activities/90703/",
            "date": "2019-05-08",
            "organization": "Kaspersky Labs",
            "author": "Yury Namestnikov",
            "title": "FIN7.5: the infamous cybercrime rig \u201cFIN7\u201d continues its activities",
            "categories": [
                "Griffon",
                "Ave Maria",
                "FIN7"
            ]
        },
        {
            "data_url": "https://twitter.com/ItsReallyNick/status/1059898708286939136",
            "date": "2018-11-06",
            "organization": "Twitter (@ItsReallyNick)",
            "author": "Nick Carr",
            "title": "Tweet on a GRIFFON sample",
            "categories": [
                "Griffon"
            ]
        },
        {
            "data_url": "https://summit.fireeye.com/content/dam/fireeye-www/summit/cds-2018/presentations/cds18-technical-s05-att&cking-fin7.pdf",
            "date": "2018-10-01",
            "organization": "FireEye",
            "author": "Regina Elwell",
            "title": "ATT&CKing FIN7",
            "categories": [
                "Bateleur",
                "BELLHOP",
                "Griffon",
                "ANTAK",
                "POWERPIPE",
                "POWERSOURCE",
                "HALFBAKED",
                "BABYMETAL",
                "Carbanak",
                "Cobalt Strike",
                "DNSMessenger",
                "DRIFTPIN",
                "PILLOWMINT",
                "SocksBot"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "griffon",
            "procedure_code": "s0417",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0417",
            "techniques": [
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
                    "procedure_description": "griffon has used powershell to execute the meterpreter downloader tinymet.[109]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/007",
                    "technique_name": "command and scripting interpreter : javascript",
                    "technique_description": "adversaries may abuse various implementations of javascript for execution. javascript (js) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though js can be executed in runtime environments outside the browser.",
                    "procedure_description": "griffon is written in and executed as javascript.[37]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "griffon has used sctasks for persistence. [75]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "griffon has used a persistence module that stores the implant inside the registry, which executes at logon.[110]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "griffon has used sctasks for persistence. [75]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "griffon has used a persistence module that stores the implant inside the registry, which executes at logon.[110]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "griffon has used sctasks for persistence. [75]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/002",
                    "technique_name": "permission groups discovery : domain groups",
                    "technique_description": "adversaries may attempt to find domain-level groups and permission settings. the knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as domain administrators.",
                    "procedure_description": "griffon has used a reconnaissance module that can be used to retrieve windows domain membership information.[15]"
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
                    "procedure_description": "griffon has used a reconnaissance module that can be used to retrieve information about a victim's computer, including the resolution of the workstation .[152]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1124",
                    "technique_link": "https://attack.mitre.org/techniques/T1124",
                    "technique_name": "system time discovery",
                    "technique_description": "an adversary may gather the system time and/or time zone from a local or remote system. the system time is set and stored by the windows time service within a domain to maintain time synchronization between systems and services in an enterprise network.",
                    "procedure_description": "griffon has used a reconnaissance module that can be used to retrieve the date and time of the system.[43]"
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
                    "procedure_description": "griffon has used a screenshot module that can be used to take a screenshot of the remote system.[70]"
                }
            ]
        },
        {
            "procedure_name": "arp",
            "procedure_code": "s0099",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0099",
            "techniques": [
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "arp can be used to display a host's arp cache, which may include address resolutions for remote systems.[14][15]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "arp can be used to display arp configuration information on the host.[22]"
                }
            ]
        }
    ]
};