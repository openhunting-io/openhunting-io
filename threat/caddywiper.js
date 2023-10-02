var threatdata = {
    "name": "CaddyWiper",
    "alias": "CaddyWiper, KillDisk.NCX",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2023-07-12",
    "all_data": {
        "tool": "CaddyWiper",
        "names": [
            {
                "name": "CaddyWiper"
            },
            {
                "name": "KillDisk.NCX"
            }
        ],
        "description": "(ESET) ESET researchers have uncovered yet another destructive data wiper that was used in attacks against organizations in Ukraine.\nDubbed CaddyWiper by ESET analysts, the malware was first detected at 11.38 a.m. local time (9.38 a.m. UTC) on Monday. The wiper, which destroys user data and partition information from attached drives, was spotted on several dozen systems in a limited number of organizations. It is detected by ESET products as Win32/KillDisk.NCX.\nCaddyWiper bears no major code similarities to either {{HermeticWiper}} or {{IsaacWiper}}, the other two new data wipers that have struck organizations in Ukraine since February 23rd.\nMuch like with HermeticWiper, however, there\u2019s evidence to suggest that the bad actors behind CaddyWiper infiltrated the target\u2019s network before unleashing the wiper.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://www.welivesecurity.com/2022/03/15/caddywiper-new-wiper-malware-discovered-ukraine/",
            "https://blog.talosintelligence.com/2022/03/threat-advisory-caddywiper.html",
            "https://blog.malwarebytes.com/threat-intelligence/2022/03/double-header-isaacwiper-and-caddywiper/",
            "https://blog.morphisec.com/caddywiper-analysis-new-malware-attacking-ukraine",
            "https://www.welivesecurity.com/2022/04/12/industroyer2-industroyer-reloaded/",
            "https://therecord.media/a-deeper-look-at-the-malware-being-used-on-ukrainian-targets/",
            "https://cybersecurity.att.com/blogs/labs-research/analysis-on-recent-wiper-attacks-examples-and-how-they-wiper-malware-works"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0693/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.caddywiper"
        ],
        "uuid": "ed300463-d915-45b0-b79f-0a31acfe6bb0",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "CaddyWiper",
            "malware_alias": "KillDisk.NCX",
            "malware": "win.caddywiper",
            "last_update": "2022-03-16 23:20:57",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "a294620543334a721a2ae8eaaf9680a0786f4b9a216d75b55cfd28f39e9430ea",
                        "timestamp": "2022-03-16 23:20:57"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-03-16 23:20:57",
    "file_name": "caddywiper",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/resources/blog/gru-disruptive-playbook",
            "date": "2023-07-12",
            "organization": "Mandiant",
            "author": "Dan Black",
            "title": "The GRU's Disruptive Playbook",
            "categories": [
                "CaddyWiper",
                "INDUSTROYER2"
            ]
        },
        {
            "data_url": "https://mandiant.widen.net/s/pkffwrbjlz/m-trends-2023",
            "date": "2023-04-18",
            "organization": "Mandiant",
            "author": "Mandiant",
            "title": "M-Trends 2023",
            "categories": [
                "QUIETEXIT",
                "AppleJeus",
                "Black Basta",
                "BlackCat",
                "CaddyWiper",
                "Cobalt Strike",
                "Dharma",
                "HermeticWiper",
                "Hive",
                "INDUSTROYER2",
                "Ladon",
                "LockBit",
                "Meterpreter",
                "PartyTicket",
                "PlugX",
                "QakBot",
                "REvil",
                "Royal Ransom",
                "SystemBC",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/en-us/security/business/security-insider/wp-content/uploads/2023/03/A-year-of-Russian-hybrid-warfare-in-Ukraine_MS-Threat-Intelligence-1.pdf",
            "date": "2023-03-15",
            "organization": "Microsoft",
            "author": "Microsoft Threat Intelligence",
            "title": "A year of Russian hybrid warfare in Ukraine",
            "categories": [
                "CaddyWiper",
                "DesertBlade",
                "DoubleZero",
                "HermeticWiper",
                "INDUSTROYER2",
                "IsaacWiper",
                "PartyTicket",
                "SwiftSlicer",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://services.google.com/fh/files/blogs/google_fog_of_war_research_report.pdf",
            "date": "2023-02-15",
            "organization": "Google",
            "author": "Google Threat Analysis Group",
            "title": "Fog of War: How the Ukraine Conflict Transformed the Cyber Threat Landscape",
            "categories": [
                "CaddyWiper",
                "Dharma",
                "HermeticWiper",
                "INDUSTROYER2",
                "PartyTicket",
                "WhisperGate",
                "Callisto",
                "Curious Gorge",
                "MUSTANG PANDA",
                "Turla"
            ]
        },
        {
            "data_url": "https://cert.gov.ua/article/3718487",
            "date": "2023-01-27",
            "organization": "Cert-UA",
            "author": "Cert-UA",
            "title": "Cyber attack on the Ukrinform information and communication system",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/the-year-of-the-wiper",
            "date": "2023-01-24",
            "organization": "Fortinet",
            "author": "Geri Revay",
            "title": "The Year of the Wiper",
            "categories": [
                "Azov Wiper",
                "Bruh Wiper",
                "CaddyWiper",
                "Cobalt Strike",
                "Vidar"
            ]
        },
        {
            "data_url": "https://blogs.microsoft.com/on-the-issues/2022/12/03/preparing-russian-cyber-offensive-ukraine/",
            "date": "2022-12-03",
            "organization": "Microsoft",
            "author": "Cliff Watts",
            "title": "Preparing for a Russian cyber offensive against Ukraine this winter",
            "categories": [
                "CaddyWiper",
                "HermeticWiper",
                "Prestige"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=mrTdSdMMgnk",
            "date": "2022-10-24",
            "organization": "Youtube (Virus Bulletin)",
            "author": "Alexander Adamov",
            "title": "Russian wipers in the cyberwar against Ukraine",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "DesertBlade",
                "DoubleZero",
                "EternalPetya",
                "HermeticWiper",
                "HermeticWizard",
                "INDUSTROYER2",
                "IsaacWiper",
                "KillDisk",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/the-anatomy-of-wiper-malware-part-3/",
            "date": "2022-09-26",
            "organization": "CrowdStrike",
            "author": "Ioan Iacob",
            "title": "The Anatomy of Wiper Malware, Part 3: Input/Output Controls",
            "categories": [
                "CaddyWiper",
                "DEADWOOD",
                "DistTrack",
                "DoubleZero",
                "DUSTMAN",
                "HermeticWiper",
                "IsaacWiper",
                "Meteor",
                "Petya",
                "Sierra(Alfa,Bravo, ...)",
                "StoneDrill",
                "WhisperGate",
                "ZeroCleare"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/blog/gru-rise-telegram-minions",
            "date": "2022-09-23",
            "organization": "Mandiant",
            "author": "Mandiant Intelligence",
            "title": "GRU: Rise of the (Telegram) MinIOns",
            "categories": [
                "ArguePatch",
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/overview-of-the-cyber-weapons-used-in-the-ukraine-russia-war/",
            "date": "2022-08-18",
            "organization": "Trustwave",
            "author": "Pawel Knapczyk",
            "title": "Overview of the Cyber Weapons Used in the Ukraine - Russia War",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "Cobalt Strike",
                "CredoMap",
                "DCRat",
                "DoubleZero",
                "GraphSteel",
                "GrimPlant",
                "HermeticWiper",
                "INDUSTROYER2",
                "InvisiMole",
                "IsaacWiper",
                "PartyTicket"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/overview-of-the-cyber-weapons-used-in-the-ukraine-russia-war",
            "date": "2022-08-18",
            "organization": "Trustwave",
            "author": "Pawel Knapczyk",
            "title": "Overview of the Cyber Weapons Used in the Ukraine - Russia War",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "Cobalt Strike",
                "CredoMap",
                "DCRat",
                "DoubleZero",
                "GraphSteel",
                "GrimPlant",
                "HermeticWiper",
                "INDUSTROYER2",
                "InvisiMole",
                "IsaacWiper",
                "PartyTicket"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/the-anatomy-of-wiper-malware-part-1/",
            "date": "2022-08-12",
            "organization": "CrowdStrike",
            "author": "Ioan Iacob",
            "title": "The Anatomy of Wiper Malware, Part 1: Common Techniques",
            "categories": [
                "Apostle",
                "CaddyWiper",
                "DEADWOOD",
                "DistTrack",
                "DoubleZero",
                "DUSTMAN",
                "HermeticWiper",
                "IsaacWiper",
                "IsraBye",
                "KillDisk",
                "Meteor",
                "Olympic Destroyer",
                "Ordinypt",
                "Petya",
                "Sierra(Alfa,Bravo, ...)",
                "StoneDrill",
                "WhisperGate",
                "ZeroCleare"
            ]
        },
        {
            "data_url": "https://cybersecurity.att.com/blogs/labs-research/analysis-on-recent-wiper-attacks-examples-and-how-they-wiper-malware-works",
            "date": "2022-05-02",
            "organization": "AT&T",
            "author": "Fernando Martinez",
            "title": "Analysis on recent wiper attacks: examples and how wiper malware works",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "DoubleZero",
                "HermeticWiper",
                "INDUSTROYER2",
                "IsaacWiper"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/the-increasing-wiper-malware-threat",
            "date": "2022-04-28",
            "organization": "Fortinet",
            "author": "Gergely Revay",
            "title": "An Overview of the Increasing Wiper Malware Threat",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "DistTrack",
                "DoubleZero",
                "EternalPetya",
                "HermeticWiper",
                "IsaacWiper",
                "Olympic Destroyer",
                "Ordinypt",
                "WhisperGate",
                "ZeroCleare"
            ]
        },
        {
            "data_url": "https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4Vwwd",
            "date": "2022-04-27",
            "organization": "Microsoft",
            "author": "Microsoft Digital Security Unit (DSU)",
            "title": "Special Report: Ukraine An overview of Russia\u2019s cyberattack activity in Ukraine",
            "categories": [
                "CaddyWiper",
                "DoubleZero",
                "HermeticWiper",
                "INDUSTROYER2",
                "IsaacWiper",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://cert.gov.ua/article/39518",
            "date": "2022-04-12",
            "organization": "Cert-UA",
            "author": "Cert-UA",
            "title": "Cyberattack of Sandworm Group (UAC-0082) on energy facilities of Ukraine using malicious programs INDUSTROYER2 and CADDYWIPER (CERT-UA # 4435)",
            "categories": [
                "CaddyWiper",
                "Industroyer",
                "INDUSTROYER2"
            ]
        },
        {
            "data_url": "https://maxkersten.nl/binary-analysis-course/analysis-scripts/ghidra-script-to-handle-stack-strings/",
            "date": "2022-04-12",
            "organization": "Max Kersten's Blog",
            "author": "Max Kersten",
            "title": "Ghidra script to handle stack strings",
            "categories": [
                "CaddyWiper",
                "PlugX"
            ]
        },
        {
            "data_url": "https://twitter.com/silascutler/status/1513870210398363651",
            "date": "2022-04-12",
            "organization": "Twitter (@silascutler)",
            "author": "Silas Cutler",
            "title": "Tweet on analysis of CADDYWIPER used alongside with INDUSTROYER2",
            "categories": [
                "CaddyWiper",
                "INDUSTROYER2"
            ]
        },
        {
            "data_url": "https://blog.eset.ie/2022/04/12/industroyer2-industroyer-reloaded/",
            "date": "2022-04-12",
            "organization": "ESET Research",
            "author": "ESET Ireland",
            "title": "Industroyer2: Industroyer reloaded",
            "categories": [
                "CaddyWiper",
                "INDUSTROYER2"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2022/04/12/industroyer2-industroyer-reloaded/",
            "date": "2022-04-12",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "Industroyer2: Industroyer reloaded",
            "categories": [
                "ArguePatch",
                "CaddyWiper",
                "Industroyer",
                "INDUSTROYER2"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/caddywiper-analysis-new-malware-attacking-ukraine",
            "date": "2022-04-05",
            "organization": "Morphisec",
            "author": "Michael Dereviashkin",
            "title": "New Analysis: The CaddyWiper Malware Attacking Ukraine",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/threat-update-caddywiper.html",
            "date": "2022-04-01",
            "organization": "splunk",
            "author": "Splunk Threat Research Team",
            "title": "Threat Update: CaddyWiper",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://www.esentire.com/blog/esentire-threat-intelligence-malware-analysis-caddywiper",
            "date": "2022-03-31",
            "organization": "eSentire",
            "author": "eSentire Threat Response Unit (TRU)",
            "title": "eSentire Threat Intelligence Malware Analysis: CaddyWiper",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://n0p.me/2022/03/2022-03-26-caddywiper/",
            "date": "2022-03-26",
            "organization": "n0p Blog",
            "author": "Ali Mosajjal",
            "title": "Analysis of a Caddy Wiper Sample Targeting Ukraine",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://cip.gov.ua/en/news/khto-stoyit-za-kiberatakami-na-ukrayinsku-kritichnu-informaciinu-infrastrukturu-statistika-15-22-bereznya",
            "date": "2022-03-25",
            "organization": "GOV.UA",
            "author": "State Service of Special Communication and Information Protection of Ukraine (CIP)",
            "title": "Who is behind the Cyberattacks on Ukraine's Critical Information Infrastructure: Statistics for March 15-22",
            "categories": [
                "Xloader",
                "Agent Tesla",
                "CaddyWiper",
                "Cobalt Strike",
                "DoubleZero",
                "GraphSteel",
                "GrimPlant",
                "HeaderTip",
                "HermeticWiper",
                "IsaacWiper",
                "MicroBackdoor",
                "Pandora RAT"
            ]
        },
        {
            "data_url": "https://www.nextgov.com/cybersecurity/2022/03/ukrainian-cyber-lead-least-4-types-malware-are-targeting-ukrainian-institutions/363558/",
            "date": "2022-03-24",
            "organization": "NextGov",
            "author": "Brandi Vincent",
            "title": "Ukrainian Cyber Lead Says \u2018At Least 4 Types of Malware\u2019 in Use to Target Critical Infrastructure and Humanitarian Aid",
            "categories": [
                "CaddyWiper",
                "DoubleZero",
                "HermeticWiper",
                "IsaacWiper"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-intelligence/2022/03/double-header-isaacwiper-and-caddywiper/",
            "date": "2022-03-18",
            "organization": "Malwarebytes",
            "author": "Threat Intelligence Team",
            "title": "Double header: IsaacWiper and CaddyWiper",
            "categories": [
                "CaddyWiper",
                "IsaacWiper"
            ]
        },
        {
            "data_url": "https://www.nioguard.com/2022/03/analysis-of-caddywiper.html",
            "date": "2022-03-17",
            "organization": "NioGuard",
            "author": "NioGuard Security Lab",
            "title": "Analysis of CaddyWiper",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://cybersecuritynews.com/destructive-data-wiper-malware/",
            "date": "2022-03-16",
            "organization": "Cyber Security News",
            "author": "Gurubaran",
            "title": "Destructive Data Wiper Malware Targeting high-profile Ukrainian Organizations",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://twitter.com/HackPatch/status/1503538555611607042",
            "date": "2022-03-15",
            "organization": "Twitter (@HackNPatch)",
            "author": "HackNPatch",
            "title": "Tweet on Exploring CaddyWiper API resolution",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/caddywiper-malware-targeting-ukrainian-organizations/",
            "date": "2022-03-15",
            "organization": "SecurityIntelligence",
            "author": "Christopher Del Fierro",
            "title": "CaddyWiper: Third Wiper Malware Targeting Ukrainian Organizations",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://thehackernews.com/2022/03/caddywiper-yet-another-data-wiping.html",
            "date": "2022-03-15",
            "organization": "The Hacker News",
            "author": "Ravie Lakshmanan",
            "title": "CaddyWiper: Yet Another Data Wiping Malware Targeting Ukrainian Networks",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://www.truesec.com/hub/blog/analysis-of-caddywiper-wiper-targeting-ukraine",
            "date": "2022-03-15",
            "organization": "TRUESEC",
            "author": "Nicklas Keijser",
            "title": "Analysis of CaddyWiper, wiper targeting Ukraine",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://securityaffairs.co/wordpress/129069/cyber-warfare-2/caddywiper-wiper-hits-ukraine.html",
            "date": "2022-03-15",
            "organization": "SecurityAffairs",
            "author": "Pierluigi Paganini",
            "title": "CaddyWiper, a new data wiper hits Ukraine",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/03/threat-advisory-caddywiper.html",
            "date": "2022-03-15",
            "organization": "Cisco",
            "author": "Cisco Talos",
            "title": "Threat Advisory: CaddyWiper",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2022/03/15/caddywiper-new-wiper-malware-discovered-ukraine/",
            "date": "2022-03-15",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "CaddyWiper: New wiper malware discovered in Ukraine",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://cybernews.com/cyber-war/new-destructive-wiper-malware-deployed-in-ukraine/",
            "date": "2022-03-14",
            "organization": "Cybernews",
            "author": "Jurgita Lapienyt\u0117",
            "title": "New destructive wiper malware deployed in Ukraine",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://twitter.com/ESETresearch/status/1503436420886712321",
            "date": "2022-03-14",
            "organization": "Twitter (@ESETresearch)",
            "author": "ESET Research",
            "title": "Tweet on CaddyWiper as 3rd destructive wiper found deployed against Ukraine",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/new-caddywiper-data-wiping-malware-hits-ukrainian-networks/",
            "date": "2022-03-14",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "New CaddyWiper data wiping malware hits Ukrainian networks",
            "categories": [
                "CaddyWiper"
            ]
        },
        {
            "data_url": "https://msrc-blog.microsoft.com/2022/02/28/analysis-resources-cyber-threat-activity-ukraine/",
            "date": "2022-02-28",
            "organization": "Microsoft",
            "author": "MSRC Team",
            "title": "Cyber threat activity in Ukraine: analysis and resources",
            "categories": [
                "CaddyWiper",
                "DesertBlade",
                "DoubleZero",
                "HermeticWiper",
                "INDUSTROYER2",
                "IsaacWiper",
                "PartyTicket",
                "WhisperGate",
                "DEV-0586"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "caddywiper",
            "procedure_code": "s0693",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0693",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "caddywiper has the ability to dynamically resolve and use apis, including setakeownershipprivilege.[49]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1222.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1222/001",
                    "technique_name": "file and directory permissions modification : windows file and directory permissions modification",
                    "technique_description": "adversaries may modify file or directory permissions/attributes to evade access control lists (acls) and access protected files. file and directory permissions are commonly managed by acls configured by the file or directory owner, or users with the appropriate permissions. file and directory acl implementations vary by platform, but generally explicitly designate which users or groups can perform which actions (read, write, execute, etc.).",
                    "procedure_description": "caddywiper can modify acl entries to take ownership of files.[7]"
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
                    "procedure_description": "caddywiper can enumerate all files and directories on a compromised host.[66]"
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
                    "procedure_description": "caddywiper can obtain a list of current processes.[48]"
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
                    "procedure_description": "caddywiper can use dsrolegetprimarydomaininformation to determine the role of the infected machine. caddywiper can also halt execution if the compromised host is identified as a domain controller.[74][75]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1485",
                    "technique_link": "https://attack.mitre.org/techniques/T1485",
                    "technique_name": "data destruction",
                    "technique_description": "adversaries may destroy data and files on specific systems or in large numbers on a network to interrupt availability to systems, services, and network resources. data destruction is likely to render stored data irrecoverable by forensic techniques through overwriting files or data on local and remote drives. common operating system file deletion commands such as del and rm often only remove pointers to files without wiping the contents of the files themselves, making the files recoverable by proper forensic methodology. this behavior is distinct from disk content wipe and disk structure wipe because individual files are destroyed rather than sections of a storage disk or the disk's logical structure.",
                    "procedure_description": "caddywiper can work alphabetically through drives on a compromised system to take ownership of and overwrite all files.[12][13]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1561.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1561/002",
                    "technique_name": "disk wipe : disk structure wipe",
                    "technique_description": "adversaries may corrupt or wipe the disk data structures on a hard drive necessary to boot a system; targeting specific critical systems or in large numbers in a network to interrupt availability to system and network resources.",
                    "procedure_description": "caddywiper has the ability to destroy information about a physical drive's partitions including the mbr, gpt, and partition entries.[10][11]"
                }
            ]
        },
        {
            "procedure_name": "killdisk",
            "procedure_code": "s0607",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0607",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "killdisk has called the windows api to retrieve the hard disk handle and shut down the machine.[103]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1129",
                    "technique_link": "https://attack.mitre.org/techniques/T1129",
                    "technique_name": "shared modules",
                    "technique_description": "adversaries may execute malicious payloads via loading shared modules. the windows module loader can be instructed to load dlls from arbitrary local paths and arbitrary universal naming convention (unc) network paths. this functionality resides in ntdll.dll and is part of the windows native api which is called from functions like createprocess, loadlibrary, etc. of the win32 api.",
                    "procedure_description": "killdisk loads and executes functions from a dll.[13]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134",
                    "technique_link": "https://attack.mitre.org/techniques/T1134",
                    "technique_name": "access token manipulation",
                    "technique_description": "adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls. windows uses access tokens to determine the ownership of a running process. a user can manipulate access tokens to make a running process appear as though it is the child of a different process or belongs to someone other than the user that started the process. when this occurs, the process also takes on the security context associated with the new token.",
                    "procedure_description": "killdisk has attempted to get the access token of a process by calling openprocesstoken. if killdisk gets the access token, then it attempt to modify the token privileges with adjusttokenprivileges.[15]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134",
                    "technique_link": "https://attack.mitre.org/techniques/T1134",
                    "technique_name": "access token manipulation",
                    "technique_description": "adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls. windows uses access tokens to determine the ownership of a running process. a user can manipulate access tokens to make a running process appear as though it is the child of a different process or belongs to someone other than the user that started the process. when this occurs, the process also takes on the security context associated with the new token.",
                    "procedure_description": "killdisk has attempted to get the access token of a process by calling openprocesstoken. if killdisk gets the access token, then it attempt to modify the token privileges with adjusttokenprivileges.[15]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/001",
                    "technique_name": "indicator removal : clear windows event logs",
                    "technique_description": "adversaries may clear windows event logs to hide the activity of an intrusion. windows event logs are a record of a computer's alerts and notifications. there are three system-defined sources of events: system, application, and security, with five event types: error, warning, information, success audit, and failure audit.",
                    "procedure_description": "killdisk deletes application, security, setup, and system windows event logs.[8]"
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
                    "procedure_description": "killdisk has the ability to quit and delete itself.[121]"
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
                    "procedure_description": "killdisk registers as a service under the plug-and-play support name.[40]"
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
                    "procedure_description": "killdisk uses vmprotect to make reverse engineering the malware more difficult.[184]"
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
                    "procedure_description": "killdisk has used the findnextfile command as part of its file deletion process.[165]"
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
                    "procedure_description": "killdisk has called getcurrentprocess.[145]"
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
                    "procedure_description": "killdisk retrieves the hard disk name by calling the createfilea to \\.\\physicaldrive0 api.[191]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1485",
                    "technique_link": "https://attack.mitre.org/techniques/T1485",
                    "technique_name": "data destruction",
                    "technique_description": "adversaries may destroy data and files on specific systems or in large numbers on a network to interrupt availability to systems, services, and network resources. data destruction is likely to render stored data irrecoverable by forensic techniques through overwriting files or data on local and remote drives. common operating system file deletion commands such as del and rm often only remove pointers to files without wiping the contents of the files themselves, making the files recoverable by proper forensic methodology. this behavior is distinct from disk content wipe and disk structure wipe because individual files are destroyed rather than sections of a storage disk or the disk's logical structure.",
                    "procedure_description": "killdisk deletes system files to make the os unbootable. killdisk also targets and deletes files with 35 different file extensions.[19]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1486",
                    "technique_link": "https://attack.mitre.org/techniques/T1486",
                    "technique_name": "data encrypted for impact",
                    "technique_description": "adversaries may encrypt data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources. they can attempt to render stored data inaccessible by encrypting files or data on local and remote drives and withholding access to a decryption key. this may be done in order to extract monetary compensation from a victim in exchange for decryption or a decryption key (ransomware) or to render data permanently inaccessible in cases where the key is not saved or transmitted.",
                    "procedure_description": "killdisk has a ransomware component that encrypts files with an aes key that is also rsa-1028 encrypted.[50]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1561.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1561/002",
                    "technique_name": "disk wipe : disk structure wipe",
                    "technique_description": "adversaries may corrupt or wipe the disk data structures on a hard drive necessary to boot a system; targeting specific critical systems or in large numbers in a network to interrupt availability to system and network resources.",
                    "procedure_description": "killdisk overwrites the first sector of the master boot record with \"0x00\".[16]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1489",
                    "technique_link": "https://attack.mitre.org/techniques/T1489",
                    "technique_name": "service stop",
                    "technique_description": "adversaries may stop or disable services on a system to render those services unavailable to legitimate users. stopping critical services or processes can inhibit or stop response to an incident or aid in the adversary's overall objectives to cause damage to the environment.",
                    "procedure_description": "killdisk terminates various processes to get the user to reboot the victim machine.[23]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1529",
                    "technique_link": "https://attack.mitre.org/techniques/T1529",
                    "technique_name": "system shutdown/reboot",
                    "technique_description": "adversaries may shutdown/reboot systems to interrupt access to, or aid in the destruction of, those systems. operating systems may contain commands to initiate a shutdown/reboot of a machine or network device. in some cases, these commands may also be used to initiate a shutdown/reboot of a remote computer or network device via network device cli (e.g. reload).",
                    "procedure_description": "killdisk attempts to reboot the machine by terminating specific processes.[11]"
                }
            ]
        },
        {
            "procedure_name": "wiper",
            "procedure_code": "s0041",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0041",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1072",
                    "technique_link": "https://attack.mitre.org/techniques/T1072",
                    "technique_name": "software deployment tools",
                    "technique_description": "adversaries may gain access to and use third-party software suites installed within an enterprise network, such as administration, monitoring, and deployment systems, to move laterally through the network. third-party applications and software deployment systems may be in use in the network environment for administration purposes (e.g., sccm, hbss, altiris, etc.).",
                    "procedure_description": "it is believed that a patch management system for an anti-virus product commonly installed among targeted companies was used to distribute the wiper malware.[6]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1072",
                    "technique_link": "https://attack.mitre.org/techniques/T1072",
                    "technique_name": "software deployment tools",
                    "technique_description": "adversaries may gain access to and use third-party software suites installed within an enterprise network, such as administration, monitoring, and deployment systems, to move laterally through the network. third-party applications and software deployment systems may be in use in the network environment for administration purposes (e.g., sccm, hbss, altiris, etc.).",
                    "procedure_description": "it is believed that a patch management system for an anti-virus product commonly installed among targeted companies was used to distribute the wiper malware.[6]"
                }
            ]
        }
    ]
};