var threatdata = {
    "name": "WhisperGate",
    "alias": "WhisperGate, WhisperKill, PAYWIPE",
    "category": "Malware",
    "type": "Ransomware, Wiper",
    "modified": "2023-06-14",
    "all_data": {
        "tool": "WhisperGate",
        "names": [
            {
                "name": "WhisperGate"
            },
            {
                "name": "WhisperKill"
            },
            {
                "name": "PAYWIPE"
            }
        ],
        "description": "(Microsoft) The malware resides in various working directories, including C:\\PerfLogs, C:\\ProgramData, C:\\, and C:\\temp, and is often named stage1.exe. In the observed intrusions, the malware executes via Impacket, a publicly available capability often used by threat actors for lateral movement and execution.\nThe two-stage malware overwrites the Master Boot Record (MBR) on victim systems with a ransom note (Stage 1). The MBR is the part of a hard drive that tells the computer how to load its operating system. The ransom note contains a Bitcoin wallet and Tox ID (a unique account identifier used in the Tox encrypted messaging protocol) that have not been previously observed by MSTIC.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Wiper"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2022/01/15/destructive-malware-targeting-ukrainian-organizations/",
            "https://elastic.github.io/security-research/malware/2022/01/01.operation-bleeding-bear/article/",
            "https://unit42.paloaltonetworks.com/ukraine-cyber-conflict-cve-2021-32648-whispergate/",
            "https://blog.talosintelligence.com/2022/01/ukraine-campaign-delivers-defacement.html",
            "https://www.deepinstinct.com/blog/the-ukrainian-government-cyberattack-what-you-need-to-know",
            "https://therecord.media/ukrainian-government-calls-out-false-flag-operation-in-recent-data-wiping-attack/",
            "https://www.cybereason.com/blog/cybereason-vs.-whispergate-wiper",
            "https://therecord.media/a-deeper-look-at-the-malware-being-used-on-ukrainian-targets/",
            "https://cybersecurity.att.com/blogs/labs-research/analysis-on-recent-wiper-attacks-examples-and-how-they-wiper-malware-works"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0689/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.whispergate"
        ],
        "uuid": "fb9145d6-3e77-48f0-80ae-a2897eaf49d3",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "WhisperGate",
            "malware_alias": "PAYWIPE",
            "malware": "win.whispergate",
            "last_update": "2022-02-23 20:41:00",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "5d5c99a08a7d927346ca2dafa7973fc1",
                        "timestamp": "2022-02-23 20:41:00"
                    },
                    {
                        "value": "3F4A16B29F2F0532B7CE3E7656799125",
                        "timestamp": "2022-02-23 20:41:00"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-02-23 20:41:00",
    "file_name": "whispergate",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.microsoft.com/en-us/security/blog/2023/06/14/cadet-blizzard-emerges-as-a-novel-and-distinct-russian-threat-actor/",
            "date": "2023-06-14",
            "organization": "Microsoft",
            "author": "Microsoft Threat Intelligence",
            "title": "Cadet Blizzard emerges as a novel and distinct Russian threat actor",
            "categories": [
                "p0wnyshell",
                "reGeorg",
                "WhisperGate"
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
            "data_url": "https://unit42.paloaltonetworks.com/atoms/ruinousursa/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Ruinous Ursa",
            "categories": [
                "WhisperGate",
                "DEV-0586"
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
            "data_url": "https://blogs.blackberry.com/en/2022/05/dot-net-stubs-sowing-the-seeds-of-discord",
            "date": "2022-05-19",
            "organization": "Blackberry",
            "author": "The BlackBerry Research & Intelligence Team",
            "title": ".NET Stubs: Sowing the Seeds of Discord (PureCrypter)",
            "categories": [
                "Aberebot",
                "AbstractEmu",
                "AdoBot",
                "404 Keylogger",
                "Agent Tesla",
                "Amadey",
                "AsyncRAT",
                "Ave Maria",
                "BitRAT",
                "BluStealer",
                "Formbook",
                "LimeRAT",
                "Loki Password Stealer (PWS)",
                "Nanocore RAT",
                "Orcus RAT",
                "Quasar RAT",
                "Raccoon",
                "RedLine Stealer",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2022/05/dot-net-stubs-sowing-the-seeds-of-discord?",
            "date": "2022-05-19",
            "organization": "Blackberry",
            "author": "The BlackBerry Research & Intelligence Team",
            "title": ".NET Stubs: Sowing the Seeds of Discord",
            "categories": [
                "Agent Tesla",
                "Quasar RAT",
                "WhisperGate"
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
            "data_url": "https://www.crowdstrike.com/blog/who-is-ember-bear/",
            "date": "2022-03-30",
            "organization": "CrowdStrike",
            "author": "CrowdStrike Threat Intel Team",
            "title": "Who is EMBER BEAR?",
            "categories": [
                "WhisperGate"
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
            "data_url": "https://www.trendmicro.com/en_us/research/22/c/cyberattacks-are-prominent-in-the-russia-ukraine-conflict.html",
            "date": "2022-03-03",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "Cyberattacks are Prominent in the Russia-Ukraine Conflict",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti",
                "Emotet",
                "WhisperGate"
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
            "data_url": "https://intel471.com/blog/russia-ukraine-conflict-cybercrime-underground",
            "date": "2022-02-15",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "How the Russia-Ukraine conflict is impacting cybercrime",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://inquest.net/blog/2022/02/10/380-glowspark",
            "date": "2022-02-10",
            "organization": "InQuest",
            "author": "Josiah Smith",
            "title": "+380-GlowSpark",
            "categories": [
                "GlowSpark",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2022/02/threat-spotlight-whispergate-wiper-wreaks-havoc-in-ukraine",
            "date": "2022-02-03",
            "organization": "Blackberry",
            "author": "The BlackBerry Research & Intelligence Team",
            "title": "Threat Spotlight: WhisperGate Wiper Wreaks Havoc in Ukraine",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=Ek3URIaC5O8",
            "date": "2022-02-03",
            "organization": "YouTube (Malfind Labs)",
            "author": "Lasq",
            "title": "Analyzing WhisperGate - destructive malware targeting Ukraine - part 1",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://info.cyborgsecurity.com/hubfs/Emerging%20Threats/WhisperGate%20Malware%20Update%20-%20Emerging%20Threat.pdf",
            "date": "2022-02-01",
            "organization": "Cyborg Security",
            "author": "Brandon Denker",
            "title": "WhisperGate Malware - Update",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://maxkersten.nl/binary-analysis-course/malware-analysis/dumping-whispergates-wiper-from-an-eazfuscator-obfuscated-loader/",
            "date": "2022-02-01",
            "organization": "Max Kersten's Blog",
            "author": "Max Kersten",
            "title": "Dumping WhisperGate\u2019s wiper from an Eazfuscator obfuscated loader",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/how-crowdstrike-protects-against-data-wiping-malware/",
            "date": "2022-01-31",
            "organization": "CrowdStrike",
            "author": "Sarang Sonawane",
            "title": "CrowdStrike Falcon Proactively Protects Against Wiper Malware as CISA Warns U.S. Companies of Potential Attacks",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/lessons-from-past-cyber-operations-against-ukraine/",
            "date": "2022-01-28",
            "organization": "CrowdStrike",
            "author": "CrowdStrike Intelligence Team",
            "title": "Lessons Learned From Successive Use of Offensive Cyber Operations Against Ukraine and What May Be Next",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/whispergate-malware-corrupts-computers-ukraine/",
            "date": "2022-01-28",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "WhisperGate Malware Corrupts Computers in Ukraine",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/threat-advisory-strt-ta02-destructive-software.html?splunk",
            "date": "2022-01-27",
            "organization": "splunk",
            "author": "Splunk Threat Research Team",
            "title": "Threat Advisory: STRT-TA02 - Destructive Software",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/pov-2022-0127.pdf",
            "date": "2022-01-27",
            "organization": "Recorded Future",
            "author": "John Wetzel",
            "title": "Russia\u2019s Biggest Threat Is Its Instability",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/threat-advisory-strt-ta02-destructive-software.html",
            "date": "2022-01-27",
            "organization": "splunk",
            "author": "Splunk Threat Research Team",
            "title": "Threat Advisory: STRT-TA02 - Destructive Software",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://blog.gigamon.com/2022/01/28/focusing-on-left-of-boom/",
            "date": "2022-01-27",
            "organization": "Gigamon",
            "author": "Joe Slowik",
            "title": "Focusing on \u201cLeft of Boom\u201d",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2022/01/threat-thursday-whispergate-wiper",
            "date": "2022-01-27",
            "organization": "Blackberry",
            "author": "The BlackBerry Research & Intelligence Team",
            "title": "Threat Thursday: WhisperGate Wiper Targets Government, Non-profit, and IT Organizations in Ukraine",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://cert.gov.ua/article/18101",
            "date": "2022-01-26",
            "organization": "Cert-UA",
            "author": "Cert-UA",
            "title": "Fragment of cyberattack research 14.01.2022",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.netskope.com/blog/netskope-threat-coverage-whispergate",
            "date": "2022-01-26",
            "organization": "Netskope",
            "author": "Gustavo Palazolo",
            "title": "Netskope Threat Coverage: WhisperGate",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://csirt-mon.wp.mil.pl/pl/articles6-aktualnosci/analysis-cyberattack-ukrainian-government-resources/",
            "date": "2022-01-22",
            "organization": "csirt-mon",
            "author": "csirt-mon",
            "title": "Analysis of the Cyberattack on Ukrainian Government Resources",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/disruptive-attacks-in-ukraine-likely-linked-to-escalating-tensions",
            "date": "2022-01-21",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Disruptive Attacks in Ukraine Likely Linked to Escalating Tensions",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/whispergate-not-notpetya",
            "date": "2022-01-21",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "WhisperGate: Not NotPetya",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/01/ukraine-campaign-delivers-defacement.html",
            "date": "2022-01-21",
            "organization": "Talos Intelligence",
            "author": "Nick Biasini",
            "title": "Ukraine Campaign Delivers Defacement and Wipers, in Continued Escalation",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://github.com/OALabs/Lab-Notes/blob/main/WhisperGate/WhisperGate.ipynb",
            "date": "2022-01-21",
            "organization": "Github (OALabs)",
            "author": "OALabs",
            "title": "WhisperGate Malware",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://zetter.substack.com/p/hackers-were-in-ukraine-systems-months",
            "date": "2022-01-21",
            "organization": "Zero Day",
            "author": "Kim Zetter",
            "title": "Hackers Were in Ukraine Systems Months Before Deploying Wiper",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://lifars.com/2022/01/a-detailed-analysis-of-whispergate-targeting-ukrainian-organizations/",
            "date": "2022-01-20",
            "organization": "LIFARS",
            "author": "Vlad Pasca",
            "title": "A Detailed Analysis of WhisperGate Targeting Ukrainian Organizations",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/ukraine-cyber-conflict-cve-2021-32648-whispergate/",
            "date": "2022-01-20",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Threat Brief: Ongoing Russia and Ukraine Cyber Conflict",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/update-on-whispergate-destructive-malware-targeting-ukraine.html",
            "date": "2022-01-20",
            "organization": "Trellix",
            "author": "Raj Samani",
            "title": "Update on WhisperGate, Destructive Malware Targeting Ukraine \u2013 Threat Intelligence & Protections Update",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://twitter.com/nunohaien/status/1484088885575622657",
            "date": "2022-01-20",
            "organization": "Twitter (@nunohaien)",
            "author": "Tillmann Werner",
            "title": "Tweet on key points of Whispergate wiper",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/return-of-pseudo-ransomware.html",
            "date": "2022-01-20",
            "organization": "Trellix",
            "author": "Christiaan Beek",
            "title": "Return of Pseudo Ransomware",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.elastic.co/fr/security-labs/operation-bleeding-bear",
            "date": "2022-01-19",
            "organization": "Elastic",
            "author": "Daniel Stepanic",
            "title": "Operation Bleeding Bear",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://elastic.github.io/security-research/malware/2022/01/01.operation-bleeding-bear/article/",
            "date": "2022-01-19",
            "organization": "Elastic",
            "author": "Daniel Stepanic",
            "title": "Operation Bleeding Bear",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/technical-analysis-of-whispergate-malware/",
            "date": "2022-01-19",
            "organization": "CrowdStrike",
            "author": "CrowdStrike Intelligence Team",
            "title": "Technical Analysis of the WhisperGate Malicious Bootloader",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=2nd-f1dIfD4",
            "date": "2022-01-19",
            "organization": "Youtube (HEXORCIST)",
            "author": "Nicolas Brulez",
            "title": "WhisperGate: MBR Wiper Malware Analysis. Ukraine Cyber Attack 2022",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://rxored.github.io/post/analysis/whispergate/whispergate/",
            "date": "2022-01-19",
            "organization": "rxOred's blog",
            "author": "rxored",
            "title": "WhisperGate",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/01/26/evolved-phishing-device-registration-trick-adds-to-phishers-toolbox-for-victims-without-mfa/",
            "date": "2022-01-18",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "Evolved phishing: Device registration trick adds to phishers\u2019 toolbox for victims without MFA",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://stairwell.com/news/whispers-in-the-noise-microsoft-ukraine-whispergate/",
            "date": "2022-01-18",
            "organization": "Stairwell",
            "author": "Silas Cutler",
            "title": "Whispers in the noise",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://medium.com/s2wblog/analysis-of-destructive-malware-whispergate-targeting-ukraine-9d5d158f19f3",
            "date": "2022-01-18",
            "organization": "S2W Inc.",
            "author": "BLKSMTH",
            "title": "Analysis of Destructive Malware (WhisperGate) targeting Ukraine",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://zetter.substack.com/p/dozens-of-computers-in-ukraine-wiped",
            "date": "2022-01-18",
            "organization": "zetter substack",
            "author": "Kim Zetter",
            "title": "Dozens of Computers in Ukraine Wiped with Destructive Malware in Coordinated Attack",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://twitter.com/knight0x07/status/1483401072102502400",
            "date": "2022-01-18",
            "organization": "Twitter (@knight0x07)",
            "author": "neeraj",
            "title": "Thread on yet another comprehensive analysis of WHISPERGATE",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://twitter.com/HuskyHacksMK/status/1482876242047258628",
            "date": "2022-01-17",
            "organization": "Twitter (@HuskyHacksMK)",
            "author": "Matt | HuskyHacks",
            "title": "WhisperGate Wiper Malware Analysis Live Thread",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://twitter.com/Libranalysis/status/1483128221956808704",
            "date": "2022-01-17",
            "organization": "Twitter (@Libranalysis)",
            "author": "Max Kersten",
            "title": "Tweet on short analysis of WHISPERGATE stage 3 malware",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://github.com/Dump-GUY/Malware-analysis-and-Reverse-engineering/blob/main/Debugging%20MBR%20-%20IDA%20+%20Bochs%20Emulator/Debugging%20MBR%20-%20IDA%20+%20Bochs%20Emulator.md",
            "date": "2022-01-17",
            "organization": "Github (Dump-GUY)",
            "author": "Ji\u0159\u00ed Vinopal",
            "title": "Debugging MBR - IDA + Bochs Emulator (CTF example)",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.cadosecurity.com/resources-for-dfir-professionals-responding-to-whispergate-malware/",
            "date": "2022-01-17",
            "organization": "Cado Security",
            "author": "Cado Security",
            "title": "Resources for DFIR Professionals Responding to WhisperGate Malware",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://blogs.microsoft.com/on-the-issues/2022/01/15/mstic-malware-cyberattacks-ukraine-government/",
            "date": "2022-01-15",
            "organization": "Microsoft",
            "author": "Tom Burt",
            "title": "Malware attacks targeting Ukraine government (DEV-0586)",
            "categories": [
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/01/15/destructive-malware-targeting-ukrainian-organizations/",
            "date": "2022-01-15",
            "organization": "Microsoft",
            "author": "Microsoft",
            "title": "Destructive malware targeting Ukrainian organizations (DEV-0586)",
            "categories": [
                "WhisperGate",
                "DEV-0586"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "whispergate",
            "procedure_code": "s0689",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0689",
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
                    "procedure_description": "whispergate can use powershell to support multiple actions including execution and defense evasion.[240][241][242]"
                },
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
                    "procedure_description": "whispergate can use cmd.exe to execute commands.[350]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "whispergate can use a visual basic script to exclude the c:\\ drive from windows defender.[164][165]"
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
                    "procedure_description": "whispergate has used the exitwindowsex to flush file buffers to disk and stop running processes and other api calls.[183][184]"
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
                    "procedure_description": "whispergate can download and execute advancedrun.exe via sc.exe.[61][62]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1542.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1542/003",
                    "technique_name": "pre-os boot : bootkit",
                    "technique_description": "adversaries may use bootkits to persist on systems. bootkits reside at a layer below the operating system and may make it difficult to perform full remediation unless an organization suspects one was used and can act accordingly.",
                    "procedure_description": "whispergate overwrites the mbr with a bootloader component that performs destructive wiping operations on hard drives and displays a fake ransom note when the host boots.[13][14][15][16][17]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/002",
                    "technique_name": "access token manipulation : create process with token",
                    "technique_description": "adversaries may create a new process with an existing token to escalate privileges and bypass access controls. processes can be created with the token and resulting security context of another user using features such as createprocesswithtokenw and runas.",
                    "procedure_description": "the whispergate third stage can use the advancedrun.exe tool to execute commands in the context of the windows trustedinstaller group via %temp%\\advancedrun.exe\" /exefilename \"c:\\windows\\system32\\sc.exe\" /windowstate 0 /commandline \"stop windefend\" /startdirectory \"\" /runas 8 /run.[14]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/012",
                    "technique_name": "process injection : process hollowing",
                    "technique_description": "adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses. process hollowing is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "whispergate has the ability to inject its fourth stage into a suspended process created by the legitimate windows utility installutil.exe.[44][45]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/002",
                    "technique_name": "access token manipulation : create process with token",
                    "technique_description": "adversaries may create a new process with an existing token to escalate privileges and bypass access controls. processes can be created with the token and resulting security context of another user using features such as createprocesswithtokenw and runas.",
                    "procedure_description": "the whispergate third stage can use the advancedrun.exe tool to execute commands in the context of the windows trustedinstaller group via %temp%\\advancedrun.exe\" /exefilename \"c:\\windows\\system32\\sc.exe\" /windowstate 0 /commandline \"stop windefend\" /startdirectory \"\" /runas 8 /run.[14]"
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
                    "procedure_description": "whispergate can deobfuscate downloaded files stored in reverse byte order and decrypt embedded resources using multiple xor operations.[254][255]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/001",
                    "technique_name": "impair defenses : disable or modify tools",
                    "technique_description": "adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. this may take many forms, such as killing security software processes or services, modifying / deleting registry keys or configuration files so that tools do not operate properly, or other methods to interfere with security tools scanning or reporting information. adversaries may also disable updates to prevent the latest security patches from reaching tools on victim systems.",
                    "procedure_description": "whispergate can download and execute advancedrun.exe to disable the windows defender theat protection service and set an exclusion path for the c:\\ drive.[94][95][96]"
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
                    "procedure_description": "whispergate can delete tools from a compromised host after execution.[250]"
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
                    "procedure_description": "whispergate has been disguised as a jpg extension to avoid detection as a malicious pe file.[44]"
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
                    "procedure_description": "whispergate can base64 encode strings, store downloaded files in reverse byte order,  and use the eazfuscator tool to obfuscate its third stage.[351][352][353]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1542.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1542/003",
                    "technique_name": "pre-os boot : bootkit",
                    "technique_description": "adversaries may use bootkits to persist on systems. bootkits reside at a layer below the operating system and may make it difficult to perform full remediation unless an organization suspects one was used and can act accordingly.",
                    "procedure_description": "whispergate overwrites the mbr with a bootloader component that performs destructive wiping operations on hard drives and displays a fake ransom note when the host boots.[13][14][15][16][17]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/012",
                    "technique_name": "process injection : process hollowing",
                    "technique_description": "adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses. process hollowing is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "whispergate has the ability to inject its fourth stage into a suspended process created by the legitimate windows utility installutil.exe.[44][45]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1620",
                    "technique_link": "https://attack.mitre.org/techniques/T1620",
                    "technique_name": "reflective code loading",
                    "technique_description": "adversaries may reflectively load code into a process in order to conceal the execution of malicious payloads. reflective loading involves allocating then executing payloads directly within the memory of the process, vice creating a thread or process backed by a file path on disk. reflectively loaded payloads may be compiled binaries, anonymous files (only present in ram), or just snubs of fileless executable code (ex: position-independent shellcode).",
                    "procedure_description": "whispergate's downloader can reverse its third stage file bytes and reflectively load the file as a .net assembly.[22]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/004",
                    "technique_name": "system binary proxy execution : installutil",
                    "technique_description": "adversaries may use installutil to proxy execution of code through a trusted windows utility. installutil is a command-line utility that allows for installation and uninstallation of resources by executing specific installer components specified in .net binaries.  the installutil binary may also be digitally signed by microsoft and located in the .net directories on a windows system: c:\\windows\\microsoft.net\\framework\\v\\installutil.exe and c:\\windows\\microsoft.net\\framework64\\v\\installutil.exe.",
                    "procedure_description": "whispergate has used installutil.exe as part of its process to disable windows defender.[7]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "whispergate can stop its execution when it recognizes the presence of certain monitoring tools.[61]"
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
                    "procedure_description": "whispergate can pause for 20 seconds to bypass antivirus solutions.[44][45]"
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
                    "procedure_description": "whispergate can locate files based on hardcoded file extensions.[320][321][322][323]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1135",
                    "technique_link": "https://attack.mitre.org/techniques/T1135",
                    "technique_name": "network share discovery",
                    "technique_description": "adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for collection and to identify potential systems of interest for lateral movement. networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.",
                    "procedure_description": "whispergate can enumerate connected remote logical drives.[60]"
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
                    "procedure_description": "whispergate can recognize the presence of monitoring tools on a target system.[113]"
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
                    "procedure_description": "whispergate has the ability to enumerate fixed logical drives on a targeted system.[395]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "whispergate can stop its execution when it recognizes the presence of certain monitoring tools.[61]"
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
                    "procedure_description": "whispergate can pause for 20 seconds to bypass antivirus solutions.[44][45]"
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
                    "procedure_description": "whispergate can make an https connection to download additional files.[364][365]"
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
                    "procedure_description": "whispergate can download additional stages of malware from a discord cdn channel.[472][473][474][475]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102",
                    "technique_link": "https://attack.mitre.org/techniques/T1102",
                    "technique_name": "web service",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for relaying data to/from a compromised system. popular websites and social media acting as a mechanism for c2 may give a significant amount of cover due to the likelihood that hosts within a network are already communicating with them prior to a compromise. using common services, such as those offered by google or twitter, makes it easier for adversaries to hide in expected noise. web service providers commonly use ssl/tls encryption, giving adversaries an added level of protection.",
                    "procedure_description": "whispergate can download additional payloads hosted on a discord channel.[36][37][38][39][40]"
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
                    "procedure_description": "whispergate can corrupt files by overwriting the first 1 mb with 0xcc and appending random extensions.[36][37][38][39][40][41]"
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
                    "procedure_description": "whispergate can overwrite sectors of a victim host's hard drive at periodic offsets.[10][11][12]"
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
                    "procedure_description": "whispergate can overwrite the master book record (mbr) on victim systems with a malicious 16-bit bootloader.[22][23][24][25][26][27]"
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
                    "procedure_description": "whispergate can shutdown a compromised host through execution of exitwindowsex with the exw_shutdown flag.[19]"
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