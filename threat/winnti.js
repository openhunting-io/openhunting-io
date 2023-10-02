var threatdata = {
    "name": "Winnti",
    "alias": "Winnti, BleDoor, RbDoor, RibDoor",
    "category": "Malware",
    "type": "Reconnaissance, Rootkit, Backdoor, Downloader, Tunneling, Info stealer, Exfiltration",
    "modified": "2023-08-07",
    "all_data": {
        "tool": "Winnti",
        "names": [
            {
                "name": "Winnti"
            },
            {
                "name": "BleDoor"
            },
            {
                "name": "RbDoor"
            },
            {
                "name": "RibDoor"
            }
        ],
        "description": "(Kaspersky) So what does PlusDLL control? It turns out that the target functionality is implemented in different files. Each file provides a specific remote control feature and is downloaded from the attackers\u2019 server every time the system starts up. These files are not saved on disk or in the registry but are loaded directly into the memory.\n\nAt the very start of the operation, after launching the driver, PlusDLL collects information about the infected system. A unique identifier for the infected computer is generated based on information about the hard drive and the network adapter\u2019s MAC address, e.g., TKVFP-XZTTL-KXFWH-RBJLF-FXWJR. The attackers are interested primarily in the computer\u2019s name, the program which loaded the malicious library, as well as information about remote desktop sessions (session name, client name, user name and session time). All of this data is collected in a buffer, which is then compressed and sent to the attackers\u2019 control center.\n\nIn reply to this initial message from the bot, the control center sends the list of available plugins. Plugins are DLL libraries that provide specific remote control functions. Upon receiving the list of plugins, the bot downloads them, allocates them in the memory and passes control to these libraries.\n\nAlso see {{HighNoon}}, which seems to be a variant of Winnti.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Rootkit",
            "Backdoor",
            "Downloader",
            "Tunneling",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/20134508/winnti-more-than-just-a-game-130410.pdf",
            "https://www.welivesecurity.com/wp-content/uploads/2019/10/ESET_Winnti.pdf",
            "https://github.com/TKCERT/winnti-suricata-lua",
            "https://github.com/TKCERT/winnti-nmap-script",
            "https://github.com/TKCERT/winnti-detector",
            "https://www.protectwise.com/blog/winnti-evolution-going-open-source.html",
            "http://blog.trendmicro.com/trendlabs-security-intelligence/winnti-abuses-github/",
            "http://blog.trendmicro.com/trendlabs-security-intelligence/pigs-malware-examining-possible-member-winnti-group/",
            "https://securelist.com/games-are-over/70991/",
            "https://www.novetta.com/wp-content/uploads/2015/04/novetta_winntianalysis.pdf",
            "https://blogs.blackberry.com/en/2020/04/decade-of-the-rats"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0141/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.winnti",
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.winnti",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.winnti"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:winnti"
        ],
        "uuid": "9b25ce20-0707-4676-9b8e-b60a7d794bed",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Winnti",
            "malware_alias": null,
            "malware": "elf.winnti",
            "last_update": "2022-08-22 14:54:09",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "0816e820c5380f3690a605ed21e16680",
                        "timestamp": "2022-08-22 14:54:09"
                    },
                    {
                        "value": "c99397d66e49e2def1b17f57cd0c5fb9",
                        "timestamp": "2022-04-12 04:22:48"
                    },
                    {
                        "value": "87100cb600d876bd022a4d93ce6305a0",
                        "timestamp": "2022-01-28 20:57:14"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "a512950b07384ef98d9105da98755cc99a50e007d7976bfd1242b7c0dacec3cf",
                        "timestamp": "2022-05-14 05:09:11"
                    }
                ],
                "sha1_hash": [
                    {
                        "value": "b8d7b850dc185160a24a3ee43606a9ef41d60e80",
                        "timestamp": "2021-03-10 13:26:28"
                    }
                ],
                "ip:port": [
                    {
                        "value": "161.129.64.124:443",
                        "timestamp": "2021-03-10 13:25:47"
                    }
                ],
                "domain": [
                    {
                        "value": "mm.portomnail.com",
                        "timestamp": "2021-03-10 13:25:26"
                    },
                    {
                        "value": "back.rooter.tk",
                        "timestamp": "2021-03-10 13:25:26"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-08-22 14:54:09",
    "file_name": "winnti",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2023-0808.pdf",
            "date": "2023-08-07",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "RedHotel: A Prolific, Chinese State-Sponsored Group Operating at a Global Scale",
            "categories": [
                "Winnti",
                "Brute Ratel C4",
                "Cobalt Strike",
                "FunnySwitch",
                "PlugX",
                "ShadowPad",
                "Spyder"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/55785/",
            "date": "2023-08-03",
            "organization": "AhnLab",
            "author": "ASEC",
            "title": "Reptile Malware Targeting Linux Systems",
            "categories": [
                "Melofee",
                "reptile",
                "Winnti"
            ]
        },
        {
            "data_url": "https://blog.exatrack.com/melofee/",
            "date": "2023-03-28",
            "organization": "ExaTrack",
            "author": "ExaTrack",
            "title": "M\u00e9lof\u00e9e: a new alien malware in the Panda's toolset targeting Linux hosts",
            "categories": [
                "HelloBot",
                "Melofee",
                "Winnti",
                "Cobalt Strike",
                "SparkRAT",
                "STOWAWAY"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/uploads/pdf/conference/vb2022/slides/VB2022-Tracking-the-entire-iceberg.pdf",
            "date": "2022-10-25",
            "organization": "VMware Threat Analysis Unit",
            "author": "Takahiro Haruyama",
            "title": "Tracking the entire iceberg: long-term APT malware C2 protocol emulation and scanning",
            "categories": [
                "ShadowPad",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/uploads/pdf/conference/vb2022/papers/VB2022-Tracking-the-entire-iceberg-long-term-APT-malware-C2-protocol-emulation-and-scanning.pdf",
            "date": "2022-09-19",
            "organization": "Virus Bulletin",
            "author": "Takahiro Haruyama",
            "title": "Tracking the entire iceberg - long-term APT malware C2 protocol emulation and scanning",
            "categories": [
                "ShadowPad",
                "Winnti"
            ]
        },
        {
            "data_url": "https://i.blackhat.com/Asia-22/Thursday-Materials/AS-22-LeonSilvia-NextGenPlugXShadowPad.pdf",
            "date": "2022-05-12",
            "organization": "TEAMT5",
            "author": "Leon Chang",
            "title": "The Next Gen PlugX/ShadowPad? A Dive into the Emerging China-Nexus Modular Trojan, Pangolin8RAT (slides)",
            "categories": [
                "KEYPLUG",
                "Cobalt Strike",
                "CROSSWALK",
                "FunnySwitch",
                "PlugX",
                "ShadowPad",
                "Winnti",
                "SLIME29",
                "TianWu"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/operation-cuckoobees-deep-dive-into-stealthy-winnti-techniques",
            "date": "2022-05-04",
            "organization": "Cybereason",
            "author": "Chen Erlich",
            "title": "Operation CuckooBees: Deep-Dive into Stealthy Winnti Techniques",
            "categories": [
                "PRIVATELOG",
                "Spyder",
                "STASHLOG",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/operation-cuckoobees-a-winnti-malware-arsenal-deep-dive",
            "date": "2022-05-04",
            "organization": "Cybereason",
            "author": "Chen Erlich",
            "title": "Operation CuckooBees: A Winnti Malware Arsenal Deep-Dive",
            "categories": [
                "PRIVATELOG",
                "Spyder",
                "STASHLOG",
                "Winnti"
            ]
        },
        {
            "data_url": "https://blog.bushidotoken.net/2022/05/gamer-cheater-hacker-spy.html",
            "date": "2022-05-01",
            "organization": "BushidoToken",
            "author": "BushidoToken",
            "title": "Gamer Cheater Hacker Spy",
            "categories": [
                "Egregor",
                "HelloKitty",
                "NetfilterRootkit",
                "RagnarLocker",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/a/earth-lusca-employs-sophisticated-infrastructure-varied-tools-and-techniques/technical-brief-delving-deep-an-analysis-of-earth-lusca-operations.pdf",
            "date": "2022-01-17",
            "organization": "Trend Micro",
            "author": "Joseph Chen",
            "title": "Delving Deep: An Analysis of Earth Lusca\u2019s Operations",
            "categories": [
                "BIOPASS",
                "Cobalt Strike",
                "FunnySwitch",
                "JuicyPotato",
                "ShadowPad",
                "Winnti",
                "Earth Lusca"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/security/2021/11/monitoring-winnti-4-0-c2-servers-for-two-years.html",
            "date": "2021-11-16",
            "organization": "vmware",
            "author": "Takahiro Haruyama",
            "title": "Monitoring Winnti 4.0 C2 Servers for Two Years",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/chinese-apt-groups-target-afghan-telecommunications-firm/",
            "date": "2021-09-28",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "4 Chinese APT Groups Identified Targeting Mail Server of Afghan Telecommunications Firm Roshan",
            "categories": [
                "PlugX",
                "Winnti"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2021-0921.pdf",
            "date": "2021-09-21",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "China-Linked Group TAG-28 Targets India\u2019s \u201cThe Times Group\u201d and UIDAI (Aadhaar) Government Agency With Winnti Malware",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/enterprise/mcafee-enterprise-atr/operation-harvest-a-deep-dive-into-a-long-term-campaign/",
            "date": "2021-09-14",
            "organization": "McAfee",
            "author": "Christiaan Beek",
            "title": "Operation \u2018Harvest\u2019: A Deep Dive into a Long-term Campaign",
            "categories": [
                "MimiKatz",
                "PlugX",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=_fstHQSK-kk",
            "date": "2021-07-08",
            "organization": "YouTube (PT Product Update)",
            "author": "Denis Kuvshinov",
            "title": "How winnti APT grouping works",
            "categories": [
                "Korlia",
                "ShadowPad",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/chinese-group-tag-22-targets-nepal-philippines-taiwan/",
            "date": "2021-07-08",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "Chinese State-Sponsored Activity Group TAG-22 Targets Nepal, the Philippines, and Taiwan Using Winnti and Other Tooling",
            "categories": [
                "ShadowPad",
                "Spyder",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/upload/corporate/ru-ru/webinars/ics/winnti-shadowpad.pdf",
            "date": "2021-07-08",
            "organization": "PTSecurity",
            "author": "Denis Kuvshinov",
            "title": "How winnti APT grouping works",
            "categories": [
                "Korlia",
                "ShadowPad",
                "Winnti"
            ]
        },
        {
            "data_url": "https://hello.global.ntt/-/media/ntt/global/insights/white-papers/the-operations-of-winnti-group.pdf",
            "date": "2021-04-29",
            "organization": "NTT",
            "author": "Threat Detection NTT Ltd.",
            "title": "The Operations of Winnti group",
            "categories": [
                "Cobalt Strike",
                "ShadowPad",
                "Spyder",
                "Winnti",
                "Earth Lusca"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2021/03/10/exchange-servers-under-siege-10-apt-groups/",
            "date": "2021-03-10",
            "organization": "ESET Research",
            "author": "Thomas Dupuy",
            "title": "Exchange servers under siege from at least 10 APT groups",
            "categories": [
                "Microcin",
                "MimiKatz",
                "PlugX",
                "Winnti",
                "APT27",
                "APT41",
                "Calypso",
                "Tick",
                "ToddyCat",
                "Tonto Team",
                "Vicious Panda"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/pdf/pwc-cyber-threats-2020-a-year-in-retrospect.pdf",
            "date": "2021-02-28",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2020: A Year in Retrospect",
            "categories": [
                "elf.wellmess",
                "FlowerPower",
                "PowGoop",
                "8.t Dropper",
                "Agent.BTZ",
                "Agent Tesla",
                "Appleseed",
                "Ave Maria",
                "Bankshot",
                "BazarBackdoor",
                "BLINDINGCAN",
                "Chinoxy",
                "Conti",
                "Cotx RAT",
                "Crimson RAT",
                "DUSTMAN",
                "Emotet",
                "FriedEx",
                "FunnyDream",
                "Hakbit",
                "Mailto",
                "Maze",
                "METALJACK",
                "Nefilim",
                "Oblique RAT",
                "Pay2Key",
                "PlugX",
                "QakBot",
                "REvil",
                "Ryuk",
                "StoneDrill",
                "StrongPity",
                "SUNBURST",
                "SUPERNOVA",
                "TrickBot",
                "TurlaRPC",
                "Turla SilentMoon",
                "WastedLocker",
                "WellMess",
                "Winnti",
                "ZeroCleare",
                "APT10",
                "APT23",
                "APT27",
                "APT31",
                "APT41",
                "BlackTech",
                "BRONZE EDGEWOOD",
                "Inception Framework",
                "MUSTANG PANDA",
                "Red Charon",
                "Red Nue",
                "Sea Turtle",
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2021GTR.pdf",
            "date": "2021-02-23",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2021 Global Threat Report",
            "categories": [
                "RansomEXX",
                "Amadey",
                "Anchor",
                "Avaddon",
                "BazarBackdoor",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "Cutwail",
                "DanaBot",
                "DarkSide",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "Hakbit",
                "IcedID",
                "JSOutProx",
                "KerrDown",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "NedDnLoader",
                "Nemty",
                "Pay2Key",
                "PlugX",
                "Pushdo",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "Quasar RAT",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet",
                "ShadowPad",
                "SmokeLoader",
                "Snake",
                "SUNBURST",
                "SunCrypt",
                "TEARDROP",
                "TrickBot",
                "WastedLocker",
                "Winnti",
                "Zloader",
                "KNOCKOUT SPIDER",
                "OUTLAW SPIDER",
                "RIDDLE SPIDER",
                "SOLAR SPIDER",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2021/01/emulation-of-kernel-mode-rootkits-with-speakeasy.html",
            "date": "2021-01-20",
            "organization": "FireEye",
            "author": "Andrew Davis",
            "title": "Emulation of Kernel Mode Rootkits With Speakeasy",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.ironnet.com/blog/china-cyber-attacks-the-current-threat-landscape",
            "date": "2020-12-24",
            "organization": "IronNet",
            "author": "Adam Hlavek",
            "title": "China cyber attacks: the current threat landscape",
            "categories": [
                "PLEAD",
                "TSCookie",
                "FlowCloud",
                "Lookback",
                "PLEAD",
                "PlugX",
                "Quasar RAT",
                "Winnti"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q3-2020/99204/",
            "date": "2020-11-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q3 2020",
            "categories": [
                "WellMail",
                "EVILNUM",
                "Janicab",
                "Poet RAT",
                "AsyncRAT",
                "Ave Maria",
                "Cobalt Strike",
                "Crimson RAT",
                "CROSSWALK",
                "Dtrack",
                "LODEINFO",
                "MoriAgent",
                "Okrum",
                "PlugX",
                "poisonplug",
                "Rover",
                "ShadowPad",
                "SoreFang",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.malwarebytes.com/blog/threat-intelligence/2022/winnti-apt-group-docks-in-sri-lanka-for-new-campaign-final.pdf",
            "date": "2020-10-12",
            "organization": "Malwarebytes Labs",
            "author": "Roberto Santos",
            "title": "Winnti APT group docks in Sri Lanka for new campaign",
            "categories": [
                "DBoxAgent",
                "SerialVlogger",
                "Winnti"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/apt41-indictments-china-espionage",
            "date": "2020-09-18",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "APT41: Indictments Put Chinese Espionage Group in the Spotlight",
            "categories": [
                "CROSSWALK",
                "PlugX",
                "poisonplug",
                "ShadowPad",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.wired.com/story/chinese-hackers-taiwan-semiconductor-industry-skeleton-key/",
            "date": "2020-08-06",
            "organization": "Wired",
            "author": "Andy Greenberg",
            "title": "Chinese Hackers Have Pillaged Taiwan's Semiconductor Industry",
            "categories": [
                "Cobalt Strike",
                "MimiKatz",
                "Winnti",
                "Red Charon"
            ]
        },
        {
            "data_url": "https://i.blackhat.com/USA-20/Thursday/us-20-Chen-Operation-Chimera-APT-Operation-Targets-Semiconductor-Vendors.pdf",
            "date": "2020-08-04",
            "organization": "BlackHat",
            "author": "Chung-Kuan Chen",
            "title": "Operation Chimera - APT Operation Targets Semiconductor Vendors",
            "categories": [
                "Cobalt Strike",
                "MimiKatz",
                "Winnti",
                "Red Charon"
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
            "data_url": "https://quointelligence.eu/2020/04/winnti-group-insights-from-the-past/",
            "date": "2020-04-20",
            "organization": "QuoScient",
            "author": "QuoIntelligence",
            "title": "WINNTI GROUP: Insights From the Past",
            "categories": [
                "Winnti"
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
            "data_url": "https://github.com/superkhung/winnti-sniff",
            "date": "2020-03-03",
            "organization": "GIthub (superkhung)",
            "author": "superkhung",
            "title": "GitHub Repository: winnti-sniff",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.carbonblack.com/2020/02/20/threat-analysis-active-c2-discovery-using-protocol-emulation-part2-winnti-4-0/",
            "date": "2020-02-20",
            "organization": "Carbon Black",
            "author": "Takahiro Haruyama",
            "title": "Threat Analysis: Active C2 Discovery Using Protocol Emulation Part2 (Winnti 4.0)",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.tagesschau.de/investigativ/ndr/hackerangriff-chemieunternehmen-101.html",
            "date": "2020-01-31",
            "organization": "Tagesschau",
            "author": "Jan Lukas Strozyk",
            "title": "Deutsches Chemieunternehmen gehackt",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/01/31/winnti-group-targeting-universities-hong-kong/",
            "date": "2020-01-31",
            "organization": "ESET Research",
            "author": "Mathieu Tartare",
            "title": "Winnti Group targeting universities in Hong Kong",
            "categories": [
                "ShadowPad",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-atlas",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE ATLAS",
            "categories": [
                "Speculoos",
                "Winnti",
                "ACEHASH",
                "CCleaner Backdoor",
                "CHINACHOPPER",
                "Empire Downloader",
                "HTran",
                "MimiKatz",
                "PlugX",
                "Winnti",
                "APT41"
            ]
        },
        {
            "data_url": "https://docplayer.net/162112338-Don-t-miss-the-forest-for-the-trees-gleaning-hunting-value-from-too-much-intrusion-data.html",
            "date": "2019-10",
            "organization": "CrowdStrike",
            "author": "Karl Scheuerman",
            "title": "Don't miss the forest for the trees gleaning hunting value from too much intrusion data",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.lastline.com/labsblog/helo-winnti-attack-scan/",
            "date": "2019-09-30",
            "organization": "Lastline",
            "author": "Jason Zhang",
            "title": "HELO Winnti: Attack or Scan?",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0096",
            "date": "2019-09-23",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "APT41",
            "categories": [
                "Derusbi",
                "MESSAGETAP",
                "Winnti",
                "ASPXSpy",
                "BLACKCOFFEE",
                "CHINACHOPPER",
                "Cobalt Strike",
                "Derusbi",
                "Empire Downloader",
                "Ghost RAT",
                "MimiKatz",
                "NjRAT",
                "PlugX",
                "ShadowPad",
                "Winnti",
                "ZXShell",
                "APT41"
            ]
        },
        {
            "data_url": "https://www.carbonblack.com/2019/09/04/cb-tau-threat-intelligence-notification-winnti-malware-4-0/",
            "date": "2019-09-04",
            "organization": "CarbonBlack",
            "author": "Takahiro Haruyama",
            "title": "CB TAU Threat Intelligence Notification: Winnti Malware 4.0",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "https://content.fireeye.com/api/pdfproxy?id=86840",
            "date": "2019-09-04",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "APT41: Double Dragon APT41, a dual espionage and cyber crime operation",
            "categories": [
                "EASYNIGHT",
                "Winnti"
            ]
        },
        {
            "data_url": "https://content.fireeye.com/apt-41/rpt-apt41/",
            "date": "2019-08-09",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "Double Dragon APT41, a dual espionage and cyber crime operation",
            "categories": [
                "CLASSFON",
                "crackshot",
                "CROSSWALK",
                "GEARSHIFT",
                "HIGHNOON",
                "HIGHNOON.BIN",
                "JUMPALL",
                "poisonplug",
                "Winnti"
            ]
        },
        {
            "data_url": "https://github.com/br-data/2019-winnti-analyse/",
            "date": "2019-07-24",
            "organization": "Github (br-data)",
            "author": "Hakan Tanriverdi",
            "title": "Winnti analysis",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "http://web.br.de/interaktiv/winnti/english/",
            "date": "2019-07-24",
            "organization": "Bayerischer Rundfunk",
            "author": "Hakan Tanriverdi",
            "title": "Attacking the Heart of the German Industry",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "https://medium.com/chronicle-blog/winnti-more-than-just-windows-and-gates-e4f03436031a",
            "date": "2019-05-15",
            "organization": "Chronicle",
            "author": "Silas Cutler",
            "title": "Winnti: More than just Windows and Gates",
            "categories": [
                "Winnti",
                "APT41"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/19/d/analyzing-c-c-runtime-library-code-tampering-in-software-supply-chain-attacks.html",
            "date": "2019-04-22",
            "organization": "Trend Micro",
            "author": "Mohamad Mokbel",
            "title": "C/C++ Runtime Library Code Tampering in Supply Chain",
            "categories": [
                "shadowhammer",
                "ShadowPad",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.macnica.net/file/mpressioncss_2018-1h-report_mnc_rev3_nopw.pdf",
            "date": "2018-10-01",
            "organization": "Macnica Networks",
            "author": "Macnica Networks",
            "title": "Trends in cyber espionage (targeted attacks) targeting Japan | First half of 2018",
            "categories": [
                "Anel",
                "Cobalt Strike",
                "Datper",
                "FlawedAmmyy",
                "Quasar RAT",
                "RedLeaves",
                "taidoor",
                "Winnti",
                "xxmm"
            ]
        },
        {
            "data_url": "https://github.com/TKCERT/winnti-nmap-script",
            "date": "2018-05-22",
            "organization": "Github (TKCERT)",
            "author": "thyssenkrupp CERT",
            "title": "Nmap Script to scan for Winnti infections",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "https://github.com/TKCERT/winnti-suricata-lua",
            "date": "2018-03-05",
            "organization": "Github (TKCERT)",
            "author": "TKCERT",
            "title": "Suricata rules to detect Winnti communication",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "http://blog.trendmicro.com/trendlabs-security-intelligence/pigs-malware-examining-possible-member-winnti-group/",
            "date": "2017-04-19",
            "organization": "Trend Micro",
            "author": "Trendmicro",
            "title": "Of Pigs and Malware: Examining a Possible Member of the Winnti Group",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "http://blog.trendmicro.com/trendlabs-security-intelligence/winnti-abuses-github/",
            "date": "2017-03-22",
            "organization": "Trend Micro",
            "author": "Cedric Pernet",
            "title": "Winnti Abuses GitHub for C&C Communications",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "https://github.com/TKCERT/winnti-detector",
            "date": "2016-03-06",
            "organization": "Github (TKCERT)",
            "author": "thyssenkrupp CERT",
            "title": "Network detector for Winnti malware",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "https://securelist.com/games-are-over/70991/",
            "date": "2015-06-22",
            "organization": "Kaspersky Labs",
            "author": "Dmitry Tarakanov",
            "title": "Games are over: Winnti is now targeting pharmaceutical companies",
            "categories": [
                "Winnti",
                "APT41"
            ]
        },
        {
            "data_url": "https://www.novetta.com/wp-content/uploads/2015/04/novetta_winntianalysis.pdf",
            "date": "2015-04-06",
            "organization": "Novetta",
            "author": "Novetta",
            "title": "WINNTI ANALYSIS",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "http://2015.ruxcon.org.au/assets/2015/slides/Ruxcon%202015%20-%20McCormack.pdf",
            "date": "2015",
            "organization": "Ruxcon",
            "author": "Matt McCormack",
            "title": "WHY ATTACKER TOOLSETS DO WHAT THEY DO",
            "categories": [
                "Winnti"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/20134508/winnti-more-than-just-a-game-130410.pdf",
            "date": "2013-04",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Winnti - More than just a game",
            "categories": [
                "portless",
                "Winnti"
            ]
        }
    ],
    "mitre": []
};