var threatdata = {
    "name": "Get2",
    "alias": "Get2, FRIENDSPEAK, GetandGo",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Get2",
        "names": [
            {
                "name": "Get2"
            },
            {
                "name": "FRIENDSPEAK"
            },
            {
                "name": "GetandGo"
            }
        ],
        "description": "(Proofpoint) Get2 is a new downloader. Get2 was, in turn, observed downloading {{FlawedGrace}}, {{FlawedAmmyy}}, {{Snatch}}, and {{SDBbot}} (a new RAT) as secondary payloads.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/ta505-distributes-new-sdbbot-remote-access-trojan-get2-downloader"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0460/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.get2"
        ],
        "uuid": "a4b9a235-29d6-4af1-a7ad-990854110c9f",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Get2",
            "malware_alias": "FRIENDSPEAK,GetandGo",
            "malware": "win.get2",
            "last_update": "2023-11-29 22:04:27",
            "tags": [
                "TA505",
                "Get2"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "220.69.33.57:443",
                        "timestamp": "2023-11-29 22:04:27"
                    },
                    {
                        "value": "125.60.95.157:443",
                        "timestamp": "2023-11-22 01:04:00"
                    },
                    {
                        "value": "27.101.222.24:443",
                        "timestamp": "2023-11-17 17:04:02"
                    },
                    {
                        "value": "125.60.0.199:443",
                        "timestamp": "2023-11-17 10:03:58"
                    },
                    {
                        "value": "124.243.43.9:443",
                        "timestamp": "2023-11-16 00:02:21"
                    },
                    {
                        "value": "125.60.95.154:443",
                        "timestamp": "2023-11-05 09:05:13"
                    },
                    {
                        "value": "117.52.115.212:443",
                        "timestamp": "2023-11-04 07:04:15"
                    },
                    {
                        "value": "125.7.199.169:443",
                        "timestamp": "2023-11-04 03:04:54"
                    },
                    {
                        "value": "125.141.145.185:443",
                        "timestamp": "2023-10-28 12:03:10"
                    },
                    {
                        "value": "220.69.33.60:443",
                        "timestamp": "2023-10-27 22:04:43"
                    },
                    {
                        "value": "220.69.33.123:443",
                        "timestamp": "2023-10-27 08:04:49"
                    },
                    {
                        "value": "27.101.222.186:443",
                        "timestamp": "2023-10-25 21:03:52"
                    },
                    {
                        "value": "220.69.33.47:443",
                        "timestamp": "2023-10-16 18:03:33"
                    },
                    {
                        "value": "220.69.33.164:443",
                        "timestamp": "2023-10-16 06:46:07"
                    },
                    {
                        "value": "125.141.145.178:443",
                        "timestamp": "2023-10-16 06:46:06"
                    },
                    {
                        "value": "220.69.33.44:443",
                        "timestamp": "2023-10-03 18:28:20"
                    },
                    {
                        "value": "203.252.173.121:443",
                        "timestamp": "2023-10-02 13:34:23"
                    },
                    {
                        "value": "110.15.243.148:443",
                        "timestamp": "2023-10-01 20:30:38"
                    },
                    {
                        "value": "133.186.222.87:443",
                        "timestamp": "2023-10-01 20:30:32"
                    },
                    {
                        "value": "188.160.7.36:443",
                        "timestamp": "2023-09-30 16:11:17"
                    },
                    {
                        "value": "202.211.4.65:443",
                        "timestamp": "2023-09-28 13:16:29"
                    },
                    {
                        "value": "220.69.33.51:443",
                        "timestamp": "2023-09-28 05:53:49"
                    },
                    {
                        "value": "125.141.145.175:443",
                        "timestamp": "2023-09-27 05:22:27"
                    },
                    {
                        "value": "220.69.33.111:443",
                        "timestamp": "2023-09-26 12:05:42"
                    },
                    {
                        "value": "101.78.26.130:443",
                        "timestamp": "2023-09-26 04:46:25"
                    },
                    {
                        "value": "180.210.112.158:443",
                        "timestamp": "2023-09-26 04:46:20"
                    },
                    {
                        "value": "210.90.168.176:10443",
                        "timestamp": "2023-09-25 18:20:36"
                    },
                    {
                        "value": "125.141.145.174:443",
                        "timestamp": "2023-09-24 08:46:46"
                    },
                    {
                        "value": "125.141.145.252:443",
                        "timestamp": "2023-09-24 07:04:49"
                    },
                    {
                        "value": "124.243.53.149:443",
                        "timestamp": "2023-09-24 07:04:48"
                    },
                    {
                        "value": "125.141.145.164:443",
                        "timestamp": "2023-09-24 07:04:47"
                    },
                    {
                        "value": "125.141.144.228:443",
                        "timestamp": "2023-09-24 07:04:47"
                    },
                    {
                        "value": "125.141.145.241:443",
                        "timestamp": "2023-09-24 07:04:47"
                    },
                    {
                        "value": "27.101.221.227:443",
                        "timestamp": "2023-09-24 07:03:46"
                    },
                    {
                        "value": "125.141.145.165:443",
                        "timestamp": "2023-09-24 07:03:42"
                    }
                ],
                "domain": [
                    {
                        "value": "docs-downloading.com",
                        "timestamp": "2020-12-16 11:07:32"
                    },
                    {
                        "value": "ms-pipes-service.com",
                        "timestamp": "2020-12-18 07:33:41"
                    },
                    {
                        "value": "ms-debug-services.com",
                        "timestamp": "2020-12-14 19:18:13"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-29 22:04:27",
    "file_name": "get2",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://elis531989.medium.com/funtastic-packers-and-where-to-find-them-41429a7ef9a7",
            "date": "2021-01-19",
            "organization": "Medium elis531989",
            "author": "Eli Salem",
            "title": "Funtastic Packers And Where To Find Them",
            "categories": [
                "Get2",
                "IcedID",
                "QakBot"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/ta505-get2-loader-malware-december-2020/",
            "date": "2020-12-18",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "TA505\u2019s modified loader means new attack campaign could be coming",
            "categories": [
                "Get2"
            ]
        },
        {
            "data_url": "https://blog.fox-it.com/2020/11/16/ta505-a-brief-history-of-their-time/",
            "date": "2020-11-16",
            "organization": "Fox-IT",
            "author": "Antonis Terefos",
            "title": "TA505: A Brief History Of Their Time",
            "categories": [
                "Clop",
                "Get2",
                "SDBbot",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/eager-beaver-a-short-overview-of-the-restless-threat-actor-ta505-609546",
            "date": "2020-10-06",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "Eager Beaver: A Short Overview of the Restless Threat Actor TA505",
            "categories": [
                "Clop",
                "Get2",
                "SDBbot",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-009.pdf",
            "date": "2020-08-20",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "Development of the Activity of the TA505 Cybercriminal Group",
            "categories": [
                "AndroMut",
                "Bart",
                "Clop",
                "Dridex",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Locky",
                "Marap",
                "QuantLoader",
                "SDBbot",
                "ServHelper",
                "tRat",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://blog.intel471.com/2020/07/15/flowspec-ta505s-bulletproof-hoster-of-choice/",
            "date": "2020-07-15",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Flowspec \u2013 TA505\u2019s bulletproof hoster of choice",
            "categories": [
                "Get2"
            ]
        },
        {
            "data_url": "https://www.hornetsecurity.com/en/security-information/clop-clop-ta505-html-malspam-analysis/",
            "date": "2020-07-07",
            "organization": "Hornetsecurity",
            "author": "Hornetsecurity Security Lab",
            "title": "Clop, Clop! It\u2019s a TA505 HTML malspam analysis",
            "categories": [
                "Clop",
                "Get2"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-006.pdf",
            "date": "2020-06-22",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "\u00c9volution De Lactivit\u00e9 du Groupe Cybercriminel TA505",
            "categories": [
                "Amadey",
                "AndroMut",
                "Bart",
                "Clop",
                "Dridex",
                "FlawedGrace",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Jaff",
                "Locky",
                "Marap",
                "Philadephia Ransom",
                "QuantLoader",
                "Scarab Ransomware",
                "SDBbot",
                "ServHelper",
                "Silence",
                "tRat",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/cybersecurity-ta505-returns-with-a-new-bag-of-tricks-602104",
            "date": "2020-06-16",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "TA505 returns with a new bag of tricks",
            "categories": [
                "Clop",
                "Get2",
                "SDBbot",
                "TA505"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/a-brief-history-of-ta505",
            "date": "2020-05-21",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "A brief history of TA505",
            "categories": [
                "AndroMut",
                "Bart",
                "Dridex",
                "FlawedAmmyy",
                "FlawedGrace",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Jaff",
                "Kegotip",
                "Locky",
                "Necurs",
                "Philadephia Ransom",
                "Pony",
                "QuantLoader",
                "Rockloader",
                "SDBbot",
                "ServHelper",
                "Shifu",
                "Snatch",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/cybersecurity-ta505-s-box-of-chocolate-597672",
            "date": "2020-03-26",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "TA505's Box of Chocolate - On Hidden Gems packed with the TA505 Packer",
            "categories": [
                "Amadey",
                "Azorult",
                "Clop",
                "FlawedGrace",
                "Get2",
                "SDBbot",
                "Silence",
                "TinyMet",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/coronavirus-threat-landscape-update",
            "date": "2020-03-18",
            "organization": "Proofpoint",
            "author": "Axel F",
            "title": "Coronavirus Threat Landscape Update",
            "categories": [
                "Agent Tesla",
                "Get2",
                "ISFB",
                "Remcos"
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
            "data_url": "https://www.pwc.co.uk/cyber-security/assets/cyber-threats-2019-retrospect.pdf",
            "date": "2020-03-03",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2019:A Year in Retrospect",
            "categories": [
                "KevDroid",
                "MESSAGETAP",
                "magecart",
                "AndroMut",
                "Cobalt Strike",
                "CobInt",
                "Crimson RAT",
                "DNSpionage",
                "Dridex",
                "Dtrack",
                "Emotet",
                "FlawedAmmyy",
                "FlawedGrace",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Grateful POS",
                "ISFB",
                "Kazuar",
                "LockerGoga",
                "Nokki",
                "QakBot",
                "Ramnit",
                "REvil",
                "Rifdoor",
                "RokRAT",
                "Ryuk",
                "shadowhammer",
                "ShadowPad",
                "Shifu",
                "Skipper",
                "StoneDrill",
                "Stuxnet",
                "TrickBot",
                "Winnti",
                "ZeroCleare",
                "APT41",
                "MUSTANG PANDA",
                "Sea Turtle"
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
            "data_url": "https://www.telekom.com/en/blog/group/article/inside-of-cl0p-s-ransomware-operation-615824",
            "date": "2020-01-14",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "Inside of CL0P\u2019s ransomware operation",
            "categories": [
                "Clop",
                "Get2",
                "SDBbot"
            ]
        },
        {
            "data_url": "https://github.com/Tera0017/TAFOF-Unpacker",
            "date": "2020-01-13",
            "organization": "Github (Tera0017)",
            "author": "Tera0017",
            "title": "TAFOF Unpacker",
            "categories": [
                "Clop",
                "Get2",
                "Silence"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-tahoe",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD TAHOE",
            "categories": [
                "Clop",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "SDBbot",
                "ServHelper",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.goggleheadedhacker.com/blog/post/13",
            "date": "2019-11-24",
            "organization": "",
            "author": "Jacob Pimental",
            "title": "TA505 Get2 Analysis",
            "categories": [
                "Get2"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/ta505-distributes-new-sdbbot-remote-access-trojan-get2-downloader",
            "date": "2019-10-16",
            "organization": "Proofpoint",
            "author": "Dennis Schwarz",
            "title": "TA505 Distributes New SDBbot Remote Access Trojan with Get2 Downloader",
            "categories": [
                "Get2",
                "SDBbot",
                "TA505"
            ]
        },
        {
            "data_url": "https://github.com/StrangerealIntel/CyberThreatIntel/blob/master/cybercriminal%20groups/TA505/04-10-2019/Malware%20Analysis%2004-10-2019.md",
            "date": "2019-10-10",
            "organization": "Github (StrangerealIntel)",
            "author": "StrangerealIntel",
            "title": "Analysis of the new TA505 campaign",
            "categories": [
                "Get2"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "get2",
            "procedure_code": "s0460",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0460",
            "techniques": [
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
                    "procedure_description": "get2 has the ability to run executables with command-line arguments.[25]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "get2 has the ability to inject dlls into processes.[33]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "get2 has the ability to inject dlls into processes.[33]"
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
                    "procedure_description": "get2 has the ability to identify running processes on an infected host.[114]"
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
                    "procedure_description": "get2 has the ability to identify the computer name and windows version of an infected host.[145]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1033",
                    "technique_link": "https://attack.mitre.org/techniques/T1033",
                    "technique_name": "system owner/user discovery",
                    "technique_description": "adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. they may do this, for example, by retrieving account usernames or by using os credential dumping. the information may be collected in a number of different ways using other discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. adversaries may use the information from system owner/user discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "get2 has the ability to identify the current username of an infected host.[73]"
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
                    "procedure_description": "get2 has the ability to use http to send information collected from an infected host to c2.[140]"
                }
            ]
        }
    ]
};