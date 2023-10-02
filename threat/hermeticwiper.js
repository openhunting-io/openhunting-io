var threatdata = {
    "name": "HermeticWiper",
    "alias": "HermeticWiper, DriveSlayer, FoxBlade, KillDisk.NCV, Trojan.Killdisk, NEARMISS",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2023-04-26",
    "all_data": {
        "tool": "HermeticWiper",
        "names": [
            {
                "name": "HermeticWiper"
            },
            {
                "name": "DriveSlayer"
            },
            {
                "name": "FoxBlade"
            },
            {
                "name": "KillDisk.NCV"
            },
            {
                "name": "Trojan.Killdisk"
            },
            {
                "name": "NEARMISS"
            }
        ],
        "description": "(SentinelOne) At first glance, HermeticWiper appears to be a custom-written application with very few standard functions. The malware sample is 114KBs in size and roughly 70% of that is composed of resources. The developers are using a tried and tested technique of wiper malware, abusing a benign partition management driver, in order to carry out the more damaging components of their attacks. Both the Lazarus Group ({{Destover}}) and APT33 ({{DistTrack}}) took advantage of Eldos {{RawDisk}} in order to get direct userland access to the filesystem without calling Windows APIs. HermeticWiper uses a similar technique by abusing a different driver, empntdrv.sys.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://www.sentinelone.com/labs/hermetic-wiper-ukraine-under-attack/",
            "https://www.welivesecurity.com/2022/02/24/hermeticwiper-new-data-wiping-malware-hits-ukraine/",
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/ukraine-wiper-malware-russia",
            "https://blog.talosintelligence.com/2022/02/threat-advisory-hermeticwiper.html",
            "https://securityintelligence.com/posts/new-destructive-malware-cyber-attacks-ukraine/",
            "https://www.cisa.gov/uscert/ncas/alerts/aa22-057a",
            "https://securelist.com/elections-goransom-and-hermeticwiper-attack/105960/",
            "https://www.deepinstinct.com/blog/hermeticwiper-malware-the-russian-ukrainian-cyber-war",
            "https://www.cybereason.com/blog/cybereason-vs.-hermeticwiper-and-isaacwiper",
            "https://blog.malwarebytes.com/threat-intelligence/2022/03/hermeticwiper-a-detailed-analysis-of-the-destructive-malware-that-targeted-ukraine/",
            "https://therecord.media/a-deeper-look-at-the-malware-being-used-on-ukrainian-targets/",
            "https://cybersecurity.att.com/blogs/labs-research/analysis-on-recent-wiper-attacks-examples-and-how-they-wiper-malware-works",
            "https://www.cyfirma.com/outofband/hermetic-wiper-malware-report/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0697/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hermeticwiper"
        ],
        "uuid": "52c5df55-aa7b-4911-8f6f-5853927e6668",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--e5388435-2f21-4cb1-bf43-3e2b990461e1",
        "pb_file": "hermeticwiper.json",
        "last_updated": "2022-02-28T13:15:07.029Z",
        "title": "HERMETICWIPER MALWARE",
        "industries": [
            "government"
        ],
        "regions": [
            "LT",
            "LV",
            "UA"
        ],
        "malwares": []
    },
    "ioc_data": [
        {
            "malware_printable": "HermeticWiper",
            "malware_alias": "DriveSlayer,FoxBlade,KillDisk.NCV,NEARMISS",
            "malware": "win.hermeticwiper",
            "last_update": "2022-03-30 00:19:42",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "a64c3e0522fad787b95bfb6a30c3aed1b5786e69e88e023c062ec7e5cebf4d3e",
                        "timestamp": "2022-03-30 00:19:42"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "ffea1266b09abbf0ceb59119746d8630",
                        "timestamp": "2022-03-29 17:27:47"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-03-30 00:19:42",
    "file_name": "hermeticwiper",
    "articles": [
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
            "data_url": "https://twitter.com/Sebdraven/status/1496878431719473155",
            "date": "2023-02-24",
            "organization": "Twitter (@Sebdraven)",
            "author": "S\u00e9bastien Larinier",
            "title": "Tweet on IOCTL manipulation in TDL4 and HermeticWiper",
            "categories": [
                "Alureon",
                "HermeticWiper"
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
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/growling-bears-make-thunderous-noise.html",
            "date": "2022-06-06",
            "organization": "Trellix",
            "author": "Trelix",
            "title": "Growling Bears Make Thunderous Noise",
            "categories": [
                "Cobalt Strike",
                "HermeticWiper",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://eclypsium.com/2022/06/02/conti-targets-critical-firmware/",
            "date": "2022-06-02",
            "organization": "Eclypsium",
            "author": "Eclypsium",
            "title": "Conti Targets Critical Firmware",
            "categories": [
                "Conti",
                "HermeticWiper",
                "TrickBot",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/information-operations-surrounding-ukraine",
            "date": "2022-05-19",
            "organization": "Mandiant",
            "author": "Alden Wahlstrom",
            "title": "The IO Offensive: Information Operations Surrounding the Russian Invasion of Ukraine",
            "categories": [
                "HermeticWiper",
                "PartyTicket"
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
            "data_url": "https://inquest.net/blog/2022/04/07/ukraine-cyberwar-overview",
            "date": "2022-04-07",
            "organization": "InQuest",
            "author": "Will MacArthur",
            "title": "Ukraine CyberWar Overview",
            "categories": [
                "CyclopsBlink",
                "Cobalt Strike",
                "GraphSteel",
                "GrimPlant",
                "HermeticWiper",
                "HermeticWizard",
                "MicroBackdoor",
                "PartyTicket",
                "Saint Bot",
                "Scieron",
                "WhisperGate"
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
            "data_url": "https://www.esentire.com/blog/esentire-threat-intelligence-malware-analysis-hermeticwiper-partyticket",
            "date": "2022-03-21",
            "organization": "eSentire",
            "author": "eSentire",
            "title": "eSentire Threat Intelligence Malware Analysis: HermeticWiper & PartyTicket",
            "categories": [
                "HermeticWiper",
                "PartyTicket"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2022/03/threat-thursday-hermeticwiper",
            "date": "2022-03-17",
            "organization": "Blackberry",
            "author": "BlackBerry Research & Intelligence Team",
            "title": "Threat Thursday: HermeticWiper Targets Defense Sectors in Ukraine",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://securelist.com/webinar-on-cyberattacks-in-ukraine-summary-and-qa/106075/",
            "date": "2022-03-14",
            "organization": "Kaspersky",
            "author": "GReAT",
            "title": "Webinar on cyberattacks in Ukraine \u2013 summary and Q&A",
            "categories": [
                "HermeticWiper",
                "HermeticWizard",
                "IsaacWiper",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.bitdefender.com/blog/hotforsecurity/five-things-you-need-to-know-about-the-cyberwar-in-ukraine/",
            "date": "2022-03-11",
            "organization": "Bitdefender",
            "author": "Radu Crahmaliuc",
            "title": "Five Things You Need to Know About the Cyberwar in Ukraine",
            "categories": [
                "HermeticWiper",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://securityboulevard.com/2022/03/isaacwiper-followed-hermeticwiper-attack-on-ukraine-orgs/",
            "date": "2022-03-11",
            "organization": "Security Boulevard",
            "author": "Teri Robinson",
            "title": "IsaacWiper Followed HermeticWiper Attack on Ukraine Orgs",
            "categories": [
                "HermeticWiper",
                "IsaacWiper"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/detecting-hermeticwiper.html",
            "date": "2022-03-10",
            "organization": "splunk",
            "author": "Splunk Threat Research Team",
            "title": "Detecting HermeticWiper",
            "categories": [
                "HermeticWiper",
                "PartyTicket"
            ]
        },
        {
            "data_url": "https://www.brighttalk.com/webcast/15591/534324",
            "date": "2022-03-10",
            "organization": "BrightTALK (Kaspersky GReAT)",
            "author": "Costin Raiu",
            "title": "BrightTALK: A look at current cyberattacks in Ukraine",
            "categories": [
                "HermeticWiper",
                "HermeticWizard",
                "IsaacWiper",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://brandefense.io/hermeticwiper-technical-analysis-report/",
            "date": "2022-03-10",
            "organization": "Brandefense",
            "author": "Brandefense",
            "title": "HermeticWiper - Technical Analysis Report",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/russia-invasion-ukraine-retaliation",
            "date": "2022-03-04",
            "organization": "Mandiant",
            "author": "James Sadowski",
            "title": "Responses to Russia's Invasion of Ukraine Likely to Spur Retaliation",
            "categories": [
                "HermeticWiper",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://eln0ty.github.io/malware%20analysis/HermeticWiper/",
            "date": "2022-03-04",
            "organization": "Github (eln0ty)",
            "author": "Abdallah Elnoty",
            "title": "HermeticWiper/FoxBlade Analysis (in-depth)",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-intelligence/2022/03/hermeticwiper-a-detailed-analysis-of-the-destructive-malware-that-targeted-ukraine/",
            "date": "2022-03-04",
            "organization": "Malwarebytes",
            "author": "Malwarebytes Threat Intelligence",
            "title": "HermeticWiper: A detailed analysis of the destructive malware that targeted Ukraine",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/networkvirtualization/2022/03/hermetic-malware-multi-component-threat-targeting-ukraine-organizations.html/",
            "date": "2022-03-04",
            "organization": "vmware",
            "author": "Giovanni Vigna",
            "title": "Hermetic Malware: Multi-component Threat Targeting Ukraine Organizations",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://cloudsek.com/technical-analysis-of-the-hermetic-wiper-malware-used-to-target-ukraine/",
            "date": "2022-03-03",
            "organization": "Cloudsek",
            "author": "Anandeshwar Unnikrishnan",
            "title": "Technical Analysis of The Hermetic Wiper Malware Used to Target Ukraine",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/c/cyberattacks-are-prominent-in-the-russia-ukraine-conflict/IOC%20Resource%20for%20Russia-Ukraine%20Conflict-Related%20Cyberattacks-03032022.pdf",
            "date": "2022-03-03",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "IOC Resource for Russia-Ukraine  Conflict-Related Cyberattacks",
            "categories": [
                "ClipBanker",
                "Conti",
                "HermeticWiper",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=sUlW45c9izU",
            "date": "2022-03-03",
            "organization": "YouTube (MBSD)",
            "author": "MBSD",
            "title": "Infection and explanation of \"Hermetic Wiper\", a destructive malware targeting Ukraine",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://lifars.com/2022/03/a-closer-look-at-the-russian-actors-targeting-organizations-in-ukraine/",
            "date": "2022-03-03",
            "organization": "LIFARS",
            "author": "LIFARS",
            "title": "A Closer Look at the Russian Actors Targeting Organizations in Ukraine",
            "categories": [
                "HermeticWiper",
                "IsaacWiper",
                "Saint Bot",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/digging-into-hermeticwiper.html",
            "date": "2022-03-02",
            "organization": "Trellix",
            "author": "Max Kersten",
            "title": "Digging into HermeticWiper",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/mtp-2022-0302.pdf",
            "date": "2022-03-02",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "HermeticWiper and  PartyTicket Targeting  Computers in Ukraine",
            "categories": [
                "HermeticWiper",
                "PartyTicket"
            ]
        },
        {
            "data_url": "https://threatpost.com/microsoft-ukraine-foxblade-trojan-hours-before-russian-invasion/178702/",
            "date": "2022-03-01",
            "organization": "Threat Post",
            "author": "Lisa Vaas",
            "title": "Ukraine Hit with Novel \u2018FoxBlade\u2019 Trojan Hours Before Invasion",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://www.deepinstinct.com/blog/hermeticwiper-malware-the-russian-ukrainian-cyber-war",
            "date": "2022-03-01",
            "organization": "DeepInstinct",
            "author": "Ido Kringel",
            "title": "What is HermeticWiper \u2013 An Analysis of the Malware and Larger Threat Landscape in the Russian Ukrainian War",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://www.kaspersky.com/blog/hermeticransom-hermeticwiper-attacks-2022/43825/",
            "date": "2022-03-01",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky",
            "title": "Ransomware as a distraction",
            "categories": [
                "HermeticWiper",
                "PartyTicket"
            ]
        },
        {
            "data_url": "https://elastic.github.io/security-research/intelligence/2022/03/01.hermeticwiper-targets-ukraine/article/",
            "date": "2022-03-01",
            "organization": "Elastic",
            "author": "Daniel Stepanic",
            "title": "Elastic protects against data wiper malware targeting Ukraine: HERMETICWIPER",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://blog.qualys.com/vulnerabilities-threat-research/2022/03/01/ukrainian-targets-hit-by-hermeticwiper-new-datawiper-malware",
            "date": "2022-03-01",
            "organization": "Qualys",
            "author": "Mayuresh Dani",
            "title": "Ukrainian Targets Hit by HermeticWiper, New Datawiper Malware",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2022/03/01/isaacwiper-hermeticwizard-wiper-worm-targeting-ukraine/",
            "date": "2022-03-01",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "IsaacWiper and HermeticWizard: New wiper and worm targeting Ukraine",
            "categories": [
                "HermeticWiper",
                "IsaacWiper",
                "PartyTicket"
            ]
        },
        {
            "data_url": "https://marcoramilli.com/2022/03/01/diskkill-hermeticwiper-and-notpetya-dissimilarities/",
            "date": "2022-03-01",
            "organization": "Marco Ramilli's Blog",
            "author": "Marco Ramilli",
            "title": "DiskKill/HermeticWiper and NotPetya (Dis)similarities",
            "categories": [
                "EternalPetya",
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/defenders-blog-on-cyberattacks-targeting-ukraine.html",
            "date": "2022-02-28",
            "organization": "Trellix",
            "author": "Taylor Mullins",
            "title": "Trellix Global Defenders: Cyberattacks Targeting Ukraine and HermeticWiper Protections",
            "categories": [
                "HermeticWiper"
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
        },
        {
            "data_url": "https://www.zdnet.com/article/microsoft-finds-foxblade-malware-on-ukrainian-systems-removing-rt-from-windows-app-store/",
            "date": "2022-02-28",
            "organization": "ZDNet",
            "author": "Jonathan Greig",
            "title": "Microsoft finds FoxBlade malware on Ukrainian systems, removes RT from Windows app store",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://msrc-blog.microsoft.com/2022/02/28/analysis-resources-cyber-threat-activity-ukraine",
            "date": "2022-02-28",
            "organization": "Microsoft",
            "author": "MSRC Team",
            "title": "Cyber threat activity in Ukraine: analysis and resources",
            "categories": [
                "HermeticWiper",
                "IsaacWiper",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://learnsentinel.blog/2022/02/28/detecting-malware-kill-chains-with-defender-and-microsoft-sentinel/",
            "date": "2022-02-28",
            "organization": "Microsoft Sentinel 101",
            "author": "mzorich",
            "title": "Detecting malware kill chains with Defender and Microsoft Sentinel",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://yoroi.company/research/diskkill-hermeticwiper-a-disruptive-cyber-weapon-targeting-ukraines-critical-infrastructures/",
            "date": "2022-02-26",
            "organization": "Yoroi",
            "author": "Luigi Martire",
            "title": "DiskKill/HermeticWiper, a disruptive cyber-weapon targeting Ukraine\u2019s critical infrastructures",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/sites/default/files/publications/AA22-057A_Destructive_Malware_Targeting_Organizations_in_Ukraine.pdf",
            "date": "2022-02-26",
            "organization": "CISA",
            "author": "CISA",
            "title": "Destructive Malware Targeting Organizations in Ukraine",
            "categories": [
                "HermeticWiper",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-057a",
            "date": "2022-02-26",
            "organization": "",
            "author": "CISA",
            "title": "Alert (AA22-057A) Destructive Malware Targeting Organizations in Ukraine",
            "categories": [
                "HermeticWiper",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.englert.one/hermetic-wiper-reverse-code-engineering",
            "date": "2022-02-25",
            "organization": "EnglertOne",
            "author": "Thomas Englert",
            "title": "Reverse Engineering | Hermetic Wiper",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://thehackernews.com/2022/02/putin-warns-russian-critical.html",
            "date": "2022-02-25",
            "organization": "The Hacker News",
            "author": "Ravie Lakshmanan",
            "title": "Putin Warns Russian Critical Infrastructure to Brace for Potential Cyber Attacks",
            "categories": [
                "HermeticWiper",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://dgc.org/en/hermeticwiper-malware/",
            "date": "2022-02-25",
            "organization": "Deutsche Gesellschaft f\u00fcr Cybersicherheit",
            "author": "Deutsche Gesellschaft f\u00fcr Cybersicherheit (DGC)",
            "title": "Breaking news! Warning about \u201cHermeticWiper Malware\u201d by Russian APT Groups",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/how-crowdstrike-falcon-protects-against-wiper-malware-used-in-ukraine-attacks/",
            "date": "2022-02-25",
            "organization": "CrowdStrike",
            "author": "william thomas",
            "title": "CrowdStrike Falcon Protects from New Wiper Malware Used in Ukraine Cyberattacks",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://socradar.io/what-you-need-to-know-about-russian-cyber-escalation-in-ukraine/",
            "date": "2022-02-25",
            "organization": "SOCRadar",
            "author": "SOCRadar",
            "title": "What You Need to Know About Russian Cyber Escalation in Ukraine",
            "categories": [
                "Mirai",
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://cyberpeaceinstitute.org/ukraine-timeline-of-cyberattacks",
            "date": "2022-02-25",
            "organization": "",
            "author": "CyberPeace Institute",
            "title": "UKRAINE: Timeline of Cyberattacks",
            "categories": [
                "VPNFilter",
                "EternalPetya",
                "HermeticWiper",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://twitter.com/fr0gger_/status/1497121876870832128",
            "date": "2022-02-25",
            "organization": "Twitter (@fr0gger)",
            "author": "Thomas Roccia",
            "title": "Tweets with an overview of HermeticWiper",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/disruptive-hermeticwiper-attacks-targeting-ukrainian-organizations",
            "date": "2022-02-25",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Disruptive HermeticWiper Attacks Targeting Ukrainian Organizations",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2022/02/24/hermeticwiper-new-data-wiping-malware-hits-ukraine/",
            "date": "2022-02-24",
            "organization": "ESET Research",
            "author": "welivesecurity",
            "title": "HermeticWiper: New data\u2011wiping malware hits Ukraine",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/new-destructive-malware-cyber-attacks-ukraine/",
            "date": "2022-02-24",
            "organization": "IBM",
            "author": "Anne Jobmann",
            "title": "IBM Security X-Force Research Advisory: New Destructive Malware Used In Cyber Attacks on Ukraine",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://community.riskiq.com/article/9f59cb85",
            "date": "2022-02-24",
            "organization": "RiskIQ",
            "author": "RiskIQ",
            "title": "RiskIQ: HermeticWiper Compromised Server Used in Attack Chain",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/hermeticwiper-resurgence-targeted-attacks-ukraine",
            "date": "2022-02-24",
            "organization": "Zscaler",
            "author": "Deepen Desai",
            "title": "HermeticWiper & resurgence of targeted attacks on Ukraine",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://cluster25.io/2022/02/24/ukraine-analysis-of-the-new-disk-wiping-malware/",
            "date": "2022-02-24",
            "organization": "",
            "author": "Cluster25",
            "title": "Ukraine: Analysis Of The New Disk-Wiping Malware (HermeticWiper)",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://t3n.de/news/cyber-attacken-ukraine-wiper-malware-1454318/",
            "date": "2022-02-24",
            "organization": "t3n",
            "author": "Elisabeth Urban",
            "title": "Cyber-Attacken auf die Ukraine: Wiper-Malware bef\u00e4llt \u201eHunderte Computer\u201c",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://blog.nviso.eu/2022/02/24/threat-update-ukraine-russia-tensions/",
            "date": "2022-02-24",
            "organization": "nviso",
            "author": "Michel Coene",
            "title": "Threat Update \u2013 Ukraine & Russia conflict",
            "categories": [
                "EternalPetya",
                "GreyEnergy",
                "HermeticWiper",
                "Industroyer",
                "KillDisk",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/ukraine-wiper-malware-russia",
            "date": "2022-02-24",
            "organization": "Symantec",
            "author": "Symantec Threat Hunter Team",
            "title": "Ukraine: Disk-wiping Attacks Precede Russian Invasion",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://www.tesorion.nl/en/resources/pdfstore/Report-OSINT-Russia-Ukraine-Conflict-Cyberaspect.pdf",
            "date": "2022-02-24",
            "organization": "Tesorion",
            "author": "TESORION",
            "title": "Report OSINT: Russia/ Ukraine Conflict Cyberaspect",
            "categories": [
                "Mirai",
                "VPNFilter",
                "BlackEnergy",
                "EternalPetya",
                "HermeticWiper",
                "Industroyer",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://twitter.com/threatintel/status/1496578746014437376",
            "date": "2022-02-23",
            "organization": "Twitter (@threatintel)",
            "author": "Symantec Threat Intelligence",
            "title": "Tweet on new wiper malware being used in attacks on Ukraine",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://therecord.media/second-data-wiper-attack-hits-ukraine-computer-networks/",
            "date": "2022-02-23",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Second data wiper attack hits Ukraine computer networks",
            "categories": [
                "HermeticWiper",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/hermetic-wiper-ukraine-under-attack/",
            "date": "2022-02-23",
            "organization": "Sentinel LABS",
            "author": "Juan Andr\u00e9s Guerrero-Saade",
            "title": "HermeticWiper | New Destructive Malware Used In Cyber Attacks on Ukraine",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://thehackernews.com/2022/02/new-wiper-malware-targeting-ukraine.html",
            "date": "2022-02-23",
            "organization": "The Hacker News",
            "author": "Ravie Lakshmanan",
            "title": "New Wiper Malware Targeting Ukraine Amid Russia's Military Operation",
            "categories": [
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/preparing-for-cyber-impact-russia-ukraine-crisis/",
            "date": "2022-02-22",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Russia-Ukraine Crisis: How to Protect Against the Cyber Impact",
            "categories": [
                "HermeticWiper"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "hermeticwiper",
            "procedure_code": "s0697",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0697",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "hermeticwiper can use cmd.exe /q/c move csidl_system_drive\\temp\\sys.tmp1 csidl_windows\\policydefinitions\\postgresql.exe 1> \\\\127.0.0.1\\admin$\\_1636727589.6007507 2>&1 to deploy on an infected system.[152]"
                },
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
                    "procedure_description": "hermeticwiper can call multiple windows api functions used for privilege escalation, service execution, and to overwrite random bites of data.[90][91][92][93]"
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
                    "procedure_description": "hermeticwiper has the ability to use scheduled tasks for execution.[78]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1569.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1569/002",
                    "technique_name": "system services : service execution",
                    "technique_description": "adversaries may abuse the windows service control manager to execute malicious commands or payloads. the windows service control manager (services.exe) is an interface to manage and manipulate services. the service control manager is accessible to users via gui components as well as system utilities such as sc.exe and net.",
                    "procedure_description": "hermeticwiper can create system services to aid in executing the payload.[23][24][25]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "hermeticwiper can load drivers by creating a new service using the createservicew api.[3]"
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
                    "procedure_description": "hermeticwiper has the ability to use scheduled tasks for execution.[78]"
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
                    "procedure_description": "hermeticwiper can use adjusttokenprivileges to grant itself privileges for debugging with sedebugprivilege, creating backups with sebackupprivilege, loading drivers with seloaddriverprivilege, and shutting down a local system with seshutdownprivilege.[12][13]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "hermeticwiper can load drivers by creating a new service using the createservicew api.[3]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1484.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1484/001",
                    "technique_name": "domain policy modification : group policy modification",
                    "technique_description": "adversaries may modify group policy objects (gpos) to subvert the intended discretionary access controls for a domain, usually with the intention of escalating privileges on the domain. group policy allows for centralized management of user and computer settings in active directory (ad). gpos are containers for group policy settings made up of files stored within a predictable network path \\<domain>\\sysvol\\<domain>\\policies\\.",
                    "procedure_description": "hermeticwiper has the ability to deploy through an infected system's default domain policy.[11]"
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
                    "procedure_description": "hermeticwiper has the ability to use scheduled tasks for execution.[78]"
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
                    "procedure_description": "hermeticwiper can use adjusttokenprivileges to grant itself privileges for debugging with sedebugprivilege, creating backups with sebackupprivilege, loading drivers with seloaddriverprivilege, and shutting down a local system with seshutdownprivilege.[12][13]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "hermeticwiper can decompress and copy driver files using lzcopy.[107]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1484.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1484/001",
                    "technique_name": "domain policy modification : group policy modification",
                    "technique_description": "adversaries may modify group policy objects (gpos) to subvert the intended discretionary access controls for a domain, usually with the intention of escalating privileges on the domain. group policy allows for centralized management of user and computer settings in active directory (ad). gpos are containers for group policy settings made up of files stored within a predictable network path \\<domain>\\sysvol\\<domain>\\policies\\.",
                    "procedure_description": "hermeticwiper has the ability to deploy through an infected system's default domain policy.[11]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/006",
                    "technique_name": "impair defenses : indicator blocking",
                    "technique_description": "an adversary may attempt to block indicators or events typically captured by sensors from being gathered and analyzed. this could include maliciously redirecting or even disabling host-based sensors, such as event tracing for windows (etw), by tampering settings that control the collection and flow of event telemetry. these settings may be stored on the system in configuration files and/or in the registry as well as being accessible via administrative utilities such as powershell or windows management instrumentation.",
                    "procedure_description": "hermeticwiper has the ability to set the hklm:\\system\\\\currentcontrolset\\\\control\\\\crashcontrol\\crashdumpenabled registry key to 0 in order to disable crash dumps.[9][10][11]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070",
                    "technique_link": "https://attack.mitre.org/techniques/T1070",
                    "technique_name": "indicator removal",
                    "technique_description": "adversaries may delete or modify artifacts generated within systems to remove evidence of their presence or hinder defenses. various artifacts may be created by an adversary or something that can be attributed to an adversary\u2019s actions. typically these artifacts are used as defensive indicators related to monitored events, such as strings from downloaded files, logs that are generated from user actions, and other data analyzed by defenders. location, format, and type of artifact (such as command or login history) are often specific to each platform.",
                    "procedure_description": "hermeticwiper can disable pop-up information about folders and desktop items and delete registry keys to hide malicious services.[9][10]"
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
                    "procedure_description": "hermeticwiper can overwrite the c:\\windows\\system32\\winevt\\logs file on a targeted system.[17]"
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
                    "procedure_description": "hermeticwiper has the ability to overwrite its own file with random bites.[98][99]"
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
                    "procedure_description": "hermeticwiper has used the name postgressql.exe to mask a malicious payload.[71]"
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
                    "procedure_description": "hermeticwiper has the ability to modify registry keys to disable crash dumps, colors for compressed files, and pop-up information about folders and desktop items.[67][68][69]"
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
                    "procedure_description": "hermeticwiper can compress 32-bit and 64-bit driver files with the lempel-ziv algorithm.[151][152][153]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "the hermeticwiper executable has been signed with a legitimate certificate issued to hermetica digital ltd.[39][40][41][42]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "hermeticwiper has the ability to receive a command parameter to sleep prior to carrying out destructive actions on a targeted host.[28]"
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
                    "procedure_description": "hermeticwiper can enumerate common folders such as my documents, desktop, and appdata.[140][141]"
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
                    "procedure_description": "hermeticwiper can determine the os version, bitness, and enumerate physical drives on a targeted host.[157][158][159][160]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "hermeticwiper has the ability to receive a command parameter to sleep prior to carrying out destructive actions on a targeted host.[28]"
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
                    "procedure_description": "hermeticwiper can recursively wipe folders and files in windows, program files, program files(x86), perflogs, boot, system, volume information, and appdata folders using fsctl_move_file. hermeticwiper can also overwrite symbolic links and big files in my documents and on the desktop with random bytes.[16]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1561.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1561/001",
                    "technique_name": "disk wipe : disk content wipe",
                    "technique_description": "adversaries may erase the contents of storage devices on specific systems or in large numbers in a network to interrupt availability to system and network resources.",
                    "procedure_description": "hermeticwiper has the ability to corrupt disk partitions and obtain raw disk access to destroy data.[6][7]"
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
                    "procedure_description": "hermeticwiper has the ability to corrupt disk partitions, damage the master boot record (mbr), and overwrite the master file table (mft) of all available physical drives.[12][13][14][15]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1490",
                    "technique_link": "https://attack.mitre.org/techniques/T1490",
                    "technique_name": "inhibit system recovery",
                    "technique_description": "adversaries may delete or remove built-in data and turn off services designed to aid in the recovery of a corrupted system to prevent recovery. this may deny access to available backups and recovery options.",
                    "procedure_description": "hermeticwiper can disable the vss service on a compromised host using the service control manager.[32][33][34]"
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
                    "procedure_description": "hermeticwiper has the ability to stop the volume shadow copy service.[19]"
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
                    "procedure_description": "hermeticwiper can initiate a system shutdown.[9][10]"
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