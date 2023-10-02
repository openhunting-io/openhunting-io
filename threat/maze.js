var threatdata = {
    "name": "Maze",
    "alias": "Maze, ChaCha",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2023-01-30",
    "all_data": {
        "tool": "Maze",
        "names": [
            {
                "name": "Maze"
            },
            {
                "name": "ChaCha"
            }
        ],
        "description": "Maze Ransomware encrypts files and makes them inaccessible while adding a custom extension containing part of the ID of the victim. The ransom note is placed inside a text file and an htm file. There are a few different extensions appended to files which are randomly generated.\n\nActors are known to exfiltrate the data from the network for further extortion. It spreads mainly using email spam and various exploit kits (Spelevo, Fallout).\n\nThe code of Maze ransomware is highly complicated and obfuscated, which helps to evade security solutions using signature-based detections.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.bleepingcomputer.com/news/security/fbi-warns-of-maze-ransomware-focusing-on-us-companies/",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/ransomware-maze",
            "https://www.kroll.com/en/insights/publications/cyber/latest-maze-ransomware-ttps",
            "https://www.tripwire.com/state-of-security/healthcare/maze-ransomware-targets-hospitals-labs-fighting-coronavirus/",
            "https://www.fireeye.com/blog/threat-research/2020/05/tactics-techniques-procedures-associated-with-maze-ransomware-incidents.html",
            "https://unit42.paloaltonetworks.com/threat-brief-maze-ransomware-activities/",
            "https://blog.malwarebytes.com/threat-spotlight/2020/05/maze-the-ransomware-that-introduced-an-extra-twist/",
            "https://www.bleepingcomputer.com/news/security/maze-ransomware-adds-ragnar-locker-to-its-extortion-cartel/",
            "https://labs.sentinelone.com/enter-the-maze-demystifying-an-affiliate-involved-in-maze-snow/",
            "https://news.sophos.com/en-us/2020/09/17/maze-attackers-adopt-ragnar-locker-virtual-machine-technique/",
            "https://nakedsecurity.sophos.com/2020/09/18/a-real-life-maze-ransomware-attack-if-at-first-you-dont-succeed/",
            "https://securelist.com/maze-ransomware/99137/",
            "https://www.webroot.com/blog/2021/01/13/maze-ransomware-is-dead-or-is-it/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0449/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.maze"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=maze-ransomware",
            "https://www.bleepingcomputer.com/news/security/ransomware-dev-releases-egregor-maze-master-decryption-keys/",
            "https://www.emsisoft.com/ransomware-decryption-tools/maze-sekhmet-egregor"
        ],
        "uuid": "6b19a42e-91bb-4261-a38f-06cd033e2781",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--0f86dccd-29bd-46c6-83fd-e79ba040bf05",
        "pb_file": "maze-ransomware.json",
        "last_updated": "2021-09-30T00:00:00.000Z",
        "title": "MAZE RANSOMWARE",
        "industries": [
            "construction",
            "financial-services",
            "healthcare",
            "pharmaceuticals",
            "technology"
        ],
        "regions": [
            "AU",
            "BR",
            "CN",
            "ES",
            "IT",
            "US"
        ],
        "malwares": [
            "Maze"
        ]
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "maze",
    "articles": [
        {
            "data_url": "https://research.checkpoint.com/2023/following-the-scent-of-trickgate-6-year-old-packer-used-to-deploy-the-most-wanted-malware/",
            "date": "2023-01-30",
            "organization": "Checkpoint",
            "author": "Arie Olshtein",
            "title": "Following the Scent of TrickGate: 6-Year-Old Packer Used to Deploy the Most Wanted Malware",
            "categories": [
                "Agent Tesla",
                "Azorult",
                "Buer",
                "Cerber",
                "Cobalt Strike",
                "Emotet",
                "Formbook",
                "HawkEye Keylogger",
                "Loki Password Stealer (PWS)",
                "Maze",
                "NetWire RC",
                "Remcos",
                "REvil",
                "TrickBot"
            ]
        },
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
            "data_url": "https://intel471.com/blog/conti-ransomware-cooperation-maze-lockbit-ragnar-locker",
            "date": "2022-05-05",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Cybercrime loves company: Conti cooperated with other ransomware gangs",
            "categories": [
                "LockBit",
                "Maze",
                "RagnarLocker",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/conti-leaks-examining-the-panama-papers-of-ransomware.html",
            "date": "2022-03-31",
            "organization": "Trellix",
            "author": "John Fokker",
            "title": "Conti Leaks: Examining the Panama Papers of Ransomware",
            "categories": [
                "LockBit",
                "Amadey",
                "Buer",
                "Conti",
                "IcedID",
                "LockBit",
                "Mailto",
                "Maze",
                "PhotoLoader",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/gone-in-52-seconds-and-42-minutes-a-comparative-analysis-of-ransomware-encryption-speed.html",
            "date": "2022-03-23",
            "organization": "splunk",
            "author": "Shannon Davis",
            "title": "Gone in 52 Seconds\u2026and 42 Minutes: A Comparative Analysis of Ransomware Encryption Speed",
            "categories": [
                "Avaddon",
                "Babuk",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "LockBit",
                "Maze",
                "Mespinoza",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2022/03/17/the-ransomware-threat-intelligence-center/",
            "date": "2022-03-17",
            "organization": "Sophos",
            "author": "Tilly Travers",
            "title": "The Ransomware Threat Intelligence Center",
            "categories": [
                "ATOMSILO",
                "Avaddon",
                "AvosLocker",
                "BlackKingdom Ransomware",
                "BlackMatter",
                "Conti",
                "Cring",
                "DarkSide",
                "dearcry",
                "Dharma",
                "Egregor",
                "Entropy",
                "Epsilon Red",
                "Gandcrab",
                "Karma",
                "LockBit",
                "LockFile",
                "Mailto",
                "Maze",
                "Nefilim",
                "RagnarLocker",
                "Ragnarok",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SamSam",
                "Snatch",
                "WannaCryptor",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/pdfs/resources/whitepaper/an-empirically-comparative-analysis-of-ransomware-binaries.pdf",
            "date": "2022-02-23",
            "organization": "splunk",
            "author": "Shannon Davis",
            "title": "An Empirically Comparative Analysis of Ransomware Binaries",
            "categories": [
                "Avaddon",
                "Babuk",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "LockBit",
                "Maze",
                "Mespinoza",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/ransomware-dev-releases-egregor-maze-master-decryption-keys/",
            "date": "2022-02-09",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Ransomware dev releases Egregor, Maze master decryption keys",
            "categories": [
                "Egregor",
                "Maze",
                "Sekhmet"
            ]
        },
        {
            "data_url": "https://securityaffairs.co/wordpress/127826/malware/egregor-sekhmet-decryption-keys.html",
            "date": "2022-02-09",
            "organization": "Security Affairs",
            "author": "Pierluigi Paganini",
            "title": "Master decryption keys for Maze, Egregor, and Sekhmet ransomware leaked online",
            "categories": [
                "Egregor",
                "m0yv",
                "Maze",
                "Sekhmet"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/cti/CERTFR-2021-CTI-009/",
            "date": "2021-11-03",
            "organization": "CERT-FR",
            "author": "ANSSI",
            "title": "Identification of a new cybercriminal group: Lockean",
            "categories": [
                "DoppelPaymer",
                "Egregor",
                "Maze",
                "PwndLocker",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2021-CTI-009.pdf",
            "date": "2021-10-26",
            "organization": "",
            "author": "ANSSI",
            "title": "Identification of a new cyber criminal group: Lockean",
            "categories": [
                "Cobalt Strike",
                "DoppelPaymer",
                "Egregor",
                "Maze",
                "PwndLocker",
                "QakBot",
                "REvil"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2021/09/06/simple-malware-av-evasion-2.html",
            "date": "2021-09-06",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "AV engines evasion for C++ simple malware: part 2",
            "categories": [
                "Agent Tesla",
                "Amadey",
                "Anchor",
                "AnchorMTea",
                "Carbanak",
                "Carberp",
                "Cardinal RAT",
                "Felixroot",
                "Konni",
                "Loki Password Stealer (PWS)",
                "Maze"
            ]
        },
        {
            "data_url": "https://symantec.broadcom.com/hubfs/The_Ransomware_Threat_September_2021.pdf",
            "date": "2021-08-15",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "The Ransomware Threat",
            "categories": [
                "Babuk",
                "BlackMatter",
                "DarkSide",
                "Avaddon",
                "Babuk",
                "BADHATCH",
                "BazarBackdoor",
                "BlackMatter",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "Emotet",
                "FiveHands",
                "FriedEx",
                "Hades",
                "IcedID",
                "LockBit",
                "Maze",
                "MegaCortex",
                "MimiKatz",
                "QakBot",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/crytek-confirms-egregor-ransomware-attack-customer-data-theft/",
            "date": "2021-08-10",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "Crytek confirms Egregor ransomware attack, customer data theft",
            "categories": [
                "Egregor",
                "Maze"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2021/08/ransomware-gangs-and-the-name-game-distraction/",
            "date": "2021-08-05",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Ransomware Gangs and the Name Game Distraction",
            "categories": [
                "DarkSide",
                "RansomEXX",
                "Babuk",
                "Cerber",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "FriedEx",
                "Gandcrab",
                "Hermes",
                "Maze",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet"
            ]
        },
        {
            "data_url": "https://therecord.media/ransomwhere-project-wants-to-create-a-database-of-past-ransomware-payments/",
            "date": "2021-07-09",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Ransomwhere project wants to create a database of past ransomware payments",
            "categories": [
                "Egregor",
                "Mailto",
                "Maze",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.domaintools.com/resources/blog/the-most-prolific-ransomware-families-a-defenders-guide",
            "date": "2021-07-01",
            "organization": "DomainTools",
            "author": "Chad Anderson",
            "title": "The Most Prolific Ransomware Families: A Defenders Guide",
            "categories": [
                "REvil",
                "Conti",
                "Egregor",
                "Maze",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/first-step-initial-access-leads-ransomware",
            "date": "2021-06-16",
            "organization": "Proofpoint",
            "author": "Selena Larson",
            "title": "The First Step: Initial Access Leads to Ransomware",
            "categories": [
                "BazarBackdoor",
                "Egregor",
                "IcedID",
                "Maze",
                "QakBot",
                "REvil",
                "Ryuk",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/darkside-ransomware-made-90-million-in-just-nine-months/",
            "date": "2021-05-18",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "DarkSide ransomware made $90 million in just nine months",
            "categories": [
                "DarkSide",
                "DarkSide",
                "Egregor",
                "Gandcrab",
                "Mailto",
                "Maze",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://therecord.media/darkside-gang-estimated-to-have-made-over-90-million-from-ransomware-attacks/",
            "date": "2021-05-18",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Darkside gang estimated to have made over $90 million from ransomware attacks",
            "categories": [
                "DarkSide",
                "DarkSide",
                "Mailto",
                "Maze",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://docs.google.com/spreadsheets/d/1MI8Z2tBhmqQ5X8Wf_ozv3dVjz5sJOs-3",
            "date": "2021-05-10",
            "organization": "DarkTracer",
            "author": "DarkTracer",
            "title": "Intelligence Report on Ransomware Gangs on the DarkWeb: List of victim organizations attacked by ransomware gangs released on the DarkWeb",
            "categories": [
                "RansomEXX",
                "Avaddon",
                "Babuk",
                "Clop",
                "Conti",
                "Cuba",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "Hades",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "Nefilim",
                "Nemty",
                "Pay2Key",
                "PwndLocker",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Sekhmet",
                "SunCrypt",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/data-leak-marketplaces-aim-to-take-over-the-extortion-economy/",
            "date": "2021-05-07",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Data leak marketplaces aim to take over the extortion economy",
            "categories": [
                "Babuk",
                "Maze"
            ]
        },
        {
            "data_url": "https://www.cyborgsecurity.com/cyborg_labs/hunting-ransomware-inhibiting-system-backup-or-recovery/",
            "date": "2021-05-06",
            "organization": "Cyborg Security",
            "author": "Brandon Denker",
            "title": "Ransomware: Hunting for Inhibiting System Backup or Recovery",
            "categories": [
                "Avaddon",
                "Conti",
                "DarkSide",
                "LockBit",
                "Mailto",
                "Maze",
                "Mespinoza",
                "Nemty",
                "PwndLocker",
                "RagnarLocker",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Snatch",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/ransomware-preparedness-a-call-to-action/",
            "date": "2021-04-27",
            "organization": "CrowdStrike",
            "author": "Josh Dalman",
            "title": "Ransomware Preparedness: A Call to Action",
            "categories": [
                "Dharma",
                "GlobeImposter",
                "Maze",
                "Phobos",
                "CIRCUS SPIDER",
                "TRAVELING SPIDER"
            ]
        },
        {
            "data_url": "https://analyst1.com/blog/ransom-mafia-analysis-of-the-worlds-first-ransomware-cartel",
            "date": "2021-04-07",
            "organization": "ANALYST1",
            "author": "Jon DiMaggio",
            "title": "Ransom Mafia - Analysis of the World's First Ransomware Cartel",
            "categories": [
                "Conti",
                "Egregor",
                "LockBit",
                "Maze",
                "RagnarLocker",
                "SunCrypt",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://analyst1.com/file-assets/RANSOM-MAFIA-ANALYSIS-OF-THE-WORLD%E2%80%99S-FIRST-RANSOMWARE-CARTEL.pdf",
            "date": "2021-04-07",
            "organization": "ANALYST1",
            "author": "Jon DiMaggio",
            "title": "Ransom Mafia Analysis of the World's First Ransomware Cartel",
            "categories": [
                "Conti",
                "Egregor",
                "LockBit",
                "Maze",
                "RagnarLocker",
                "Ryuk",
                "SunCrypt",
                "TA2101",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/reports/Unit_42/unit42-ransomware-threat-report-2021.pdf",
            "date": "2021-03-17",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit42",
            "title": "Ransomware Threat Report 2021",
            "categories": [
                "RansomEXX",
                "Dharma",
                "DoppelPaymer",
                "Gandcrab",
                "Mailto",
                "Maze",
                "Phobos",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/cti/CERTFR-2021-CTI-007/",
            "date": "2021-03-02",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "The Egregor Ransomware",
            "categories": [
                "Egregor",
                "Maze",
                "Sekhmet"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20210305181115/https://cisoclub.ru/doc/otchet-kompanii-group-ib-ransomware-uncovered-2020-2021/?bp-attachment=group-ib_ransomware_uncovered_2020-2021.pdf",
            "date": "2021-03",
            "organization": "Group-IB",
            "author": "Oleg Skulkin",
            "title": "Ransomware Uncovered 2020/2021",
            "categories": [
                "RansomEXX",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "IcedID",
                "Maze",
                "PwndLocker",
                "QakBot",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "SDBbot",
                "TrickBot",
                "Zloader"
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
            "data_url": "https://www.fireeye.com/blog/threat-research/2021/02/melting-unc2198-icedid-to-ransomware-operations.html",
            "date": "2021-02-25",
            "organization": "FireEye",
            "author": "Bryce Abdo",
            "title": "So Unchill: Melting UNC2198 ICEDID to Ransomware Operations",
            "categories": [
                "MOUSEISLAND",
                "Cobalt Strike",
                "Egregor",
                "IcedID",
                "Maze",
                "SystemBC"
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
            "data_url": "https://cti-league.com/wp-content/uploads/2021/02/CTI-League-Darknet-Report-2021.pdf",
            "date": "2021-02-11",
            "organization": "CTI LEAGUE",
            "author": "CTI LEAGUE",
            "title": "CTIL Darknet Report \u2013 2021",
            "categories": [
                "Conti",
                "Mailto",
                "Maze",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://blog.chainalysis.com/reports/ransomware-connections-maze-egregor-suncrypt-doppelpaymer",
            "date": "2021-02-04",
            "organization": "Chainanalysis",
            "author": "Chainalysis Team",
            "title": "Blockchain Analysis Shows Connections Between Four of 2020\u2019s Biggest Ransomware Strains",
            "categories": [
                "DoppelPaymer",
                "Egregor",
                "Maze",
                "SunCrypt"
            ]
        },
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/gold-village",
            "date": "2021",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "Threat Profile: GOLD VILLAGE",
            "categories": [
                "Maze",
                "TA2101"
            ]
        },
        {
            "data_url": "https://s3.amazonaws.com/talos-intelligence-site/production/document_files/files/000/095/543/original/CTIR_casestudy_1.pdf",
            "date": "2021",
            "organization": "Talos",
            "author": "Talos Incident Response",
            "title": "Evicting Maze",
            "categories": [
                "Cobalt Strike",
                "Maze"
            ]
        },
        {
            "data_url": "https://www.accenture.com/us-en/blogs/cyber-defense/evolving-danger-ransomware-extortion",
            "date": "2020-12-16",
            "organization": "Accenture",
            "author": "Paul Mansfield",
            "title": "Tracking and combatting an evolving danger: Ransomware extortion",
            "categories": [
                "DarkSide",
                "Egregor",
                "Maze",
                "Nefilim",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://killbit.medium.com/applying-the-diamond-model-to-cognizant-msp-and-maze-ransomware-and-a-policy-assessment-498f01bd723f",
            "date": "2020-12-14",
            "organization": "Medium Killbit",
            "author": "killbit",
            "title": "Applying the Diamond Model to Cognizant (MSP) vs. Maze Ransomware",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa20-345a",
            "date": "2020-12-10",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Alert (AA20-345A): Cyber Actors Target K-12 Distance Learning Education to Cause Disruptions and Steal Data",
            "categories": [
                "PerlBot",
                "Shlayer",
                "Agent Tesla",
                "Cerber",
                "Dridex",
                "Ghost RAT",
                "Kovter",
                "Maze",
                "MedusaLocker",
                "Nanocore RAT",
                "Nefilim",
                "REvil",
                "Ryuk",
                "Zeus"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/12/quarterly-ir-report-fall-2020-q4.html",
            "date": "2020-12-09",
            "organization": "Cisco",
            "author": "David Liebenberg",
            "title": "Quarterly Report: Incident Response trends from Fall 2020",
            "categories": [
                "Cobalt Strike",
                "IcedID",
                "Maze",
                "RansomEXX",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/12/08/egregor-ransomware-mazes-heir-apparent/",
            "date": "2020-12-08",
            "organization": "Sophos",
            "author": "Sean Gallagher",
            "title": "Egregor ransomware: Maze\u2019s heir apparent",
            "categories": [
                "Egregor",
                "Maze"
            ]
        },
        {
            "data_url": "https://blog.minerva-labs.com/egregor-ransomware-an-in-depth-analysis",
            "date": "2020-12-07",
            "organization": "Minerva Labs",
            "author": "Tom Roter",
            "title": "Egregor Ransomware - An In-Depth Analysis",
            "categories": [
                "Egregor",
                "Maze",
                "Sekhmet"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/20/l/the-impact-of-modern-ransomware-on-manufacturing-networks.html",
            "date": "2020-12-01",
            "organization": "Trend Micro",
            "author": "Ryan Flores",
            "title": "The Impact of Modern Ransomware on Manufacturing Networks",
            "categories": [
                "Maze",
                "Petya",
                "REvil"
            ]
        },
        {
            "data_url": "https://ke-la.com/zooming-into-darknet-threats-targeting-jp-orgs-kela/",
            "date": "2020-11-18",
            "organization": "KELA",
            "author": "Victoria Kivilevich",
            "title": "Zooming into Darknet Threats Targeting Japanese Organizations",
            "categories": [
                "Conti",
                "DoppelPaymer",
                "Egregor",
                "LockBit",
                "Maze",
                "REvil",
                "Snake"
            ]
        },
        {
            "data_url": "https://public.intel471.com/blog/ransomware-as-a-service-2020-ryuk-maze-revil-egregor-doppelpaymer/",
            "date": "2020-11-16",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Ransomware-as-a-service: The pandemic within a pandemic",
            "categories": [
                "Avaddon",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Egregor",
                "Hakbit",
                "Mailto",
                "Maze",
                "Mespinoza",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "SunCrypt",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://securelist.com/targeted-ransomware-encrypting-data/99255/",
            "date": "2020-11-11",
            "organization": "Kaspersky Labs",
            "author": "Dmitry Bestuzhev",
            "title": "Targeted ransomware: it\u2019s not just about encrypting your data! Part 1 - \u201cOld and New Friends\u201d",
            "categories": [
                "Egregor",
                "Maze",
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://www.telsy.com/wp-content/uploads/Maze_Vaccine.pdf",
            "date": "2020-11-06",
            "organization": "Telsy",
            "author": "Telsy Research Team",
            "title": "Malware Analysis Report: Trying not to walk in the dark woods. A way out of the Maze",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/maze-ransomware-is-shutting-down-its-cybercrime-operation/",
            "date": "2020-10-29",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Maze ransomware is shutting down its cybercrime operation",
            "categories": [
                "Egregor",
                "Maze"
            ]
        },
        {
            "data_url": "https://www.bitdefender.com/files/News/CaseStudies/study/377/Bitdefender-Whitepaper-WMI-creat4871-en-EN-GenericUse.pdf",
            "date": "2020-10-28",
            "organization": "Bitdefender",
            "author": "Ruben Andrei Condor",
            "title": "A Decade of WMI Abuse \u2013 an Overview of Techniques in Modern Malware",
            "categories": [
                "sLoad",
                "Emotet",
                "Maze"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2020/graphology-of-an-exploit-playbit/",
            "date": "2020-10-26",
            "organization": "Checkpoint",
            "author": "Itay Cohen",
            "title": "Exploit Developer Spotlight: The Story of PlayBit",
            "categories": [
                "Dyre",
                "Maze",
                "PyLocky",
                "Ramnit",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.hornetsecurity.com/en/security-informationen-en/leakware-ransomware-hybrid-attacks/",
            "date": "2020-10-23",
            "organization": "Hornetsecurity",
            "author": "Hornetsecurity Security Lab",
            "title": "Leakware-Ransomware-Hybrid Attacks",
            "categories": [
                "Avaddon",
                "Clop",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Mailto",
                "Maze",
                "Mespinoza",
                "Nefilim",
                "RagnarLocker",
                "REvil",
                "Sekhmet",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://securelist.com/maze-ransomware/99137/",
            "date": "2020-10-21",
            "organization": "Kaspersky Labs",
            "author": "Fedor Sinitsyn",
            "title": "Life of Maze ransomware",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/double-trouble-ransomware-data-leak-extortion-part-2/",
            "date": "2020-10-06",
            "organization": "CrowdStrike",
            "author": "The Crowdstrike Intel Team",
            "title": "Double Trouble: Ransomware with Data Leak Extortion, Part 2",
            "categories": [
                "Maze",
                "MedusaLocker",
                "REvil",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://ke-la.com/to-attack-or-not-to-attack-targeting-the-healthcare-sector-in-the-underground-ecosystem/",
            "date": "2020-10-01",
            "organization": "KELA",
            "author": "Victoria Kivilevich",
            "title": "To Attack or Not to Attack: Targeting the Healthcare Sector in the Underground Ecosystem",
            "categories": [
                "Conti",
                "DoppelPaymer",
                "Mailto",
                "Maze",
                "REvil",
                "Ryuk",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://download.microsoft.com/download/f/8/1/f816b8b6-bee3-41e5-b6cc-e925a5688f61/Microsoft_Digital_Defense_Report_2020_September.pdf",
            "date": "2020-09-29",
            "organization": "Microsoft",
            "author": "Microsoft",
            "title": "Microsoft Digital Defense Report",
            "categories": [
                "Emotet",
                "IcedID",
                "Mailto",
                "Maze",
                "QakBot",
                "REvil",
                "RobinHood",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://statescoop.com/baltimore-ransomware-crowdstrike-extortion/",
            "date": "2020-09-25",
            "organization": "StateScoop",
            "author": "Benjamin Freed",
            "title": "Baltimore ransomware attack was early attempt at data extortion, new report shows",
            "categories": [
                "Maze",
                "RobinHood",
                "OUTLAW SPIDER"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/double-trouble-ransomware-data-leak-extortion-part-1/",
            "date": "2020-09-25",
            "organization": "CrowdStrike",
            "author": "The Crowdstrike Intel Team",
            "title": "Double Trouble: Ransomware with Data Leak Extortion, Part 1",
            "categories": [
                "DoppelPaymer",
                "FriedEx",
                "LockBit",
                "Maze",
                "MedusaLocker",
                "RagnarLocker",
                "REvil",
                "RobinHood",
                "SamSam",
                "WastedLocker",
                "MIMIC SPIDER",
                "PIZZO SPIDER",
                "TA2101",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/double-trouble-ransomware-data-leak-extortion-part-1",
            "date": "2020-09-24",
            "organization": "CrowdStrike",
            "author": "CrowdStrike Intelligence Team",
            "title": "Double Trouble: Ransomware with Data Leak Extortion, Part 1",
            "categories": [
                "DoppelPaymer",
                "Gandcrab",
                "LockBit",
                "Maze",
                "MedusaLocker",
                "RagnarLocker",
                "SamSam",
                "OUTLAW SPIDER",
                "OVERLORD SPIDER"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/09/22/mtr-casebook-blocking-a-15-million-maze-ransomware-attack/",
            "date": "2020-09-22",
            "organization": "Sophos SecOps",
            "author": "Greg Iddon",
            "title": "MTR Casebook: Blocking a $15 million Maze ransomware attack",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/09/17/maze-attackers-adopt-ragnar-locker-virtual-machine-technique/",
            "date": "2020-09-17",
            "organization": "SophosLabs Uncut",
            "author": "Andrew Brandt",
            "title": "Maze attackers adopt Ragnar Locker virtual machine technique",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/maze-ransomware-now-encrypts-via-virtual-machines-to-evade-detection/",
            "date": "2020-09-17",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Maze ransomware now encrypts via virtual machines to evade detection",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/09/CTIR-quarterly-trends-Q4-2020.html",
            "date": "2020-09-01",
            "organization": "Cisco Talos",
            "author": "David Liebenberg",
            "title": "Quarterly Report: Incident Response trends in Summer 2020",
            "categories": [
                "Cobalt Strike",
                "LockBit",
                "Mailto",
                "Maze",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://ke-la.com/how-ransomware-gangs-find-new-monetization-schemes-and-evolve-in-marketing/",
            "date": "2020-08-25",
            "organization": "KELA",
            "author": "Victoria Kivilevich",
            "title": "How Ransomware Gangs Find New Monetization Schemes and Evolve in Marketing",
            "categories": [
                "Avaddon",
                "Clop",
                "DarkSide",
                "DoppelPaymer",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Nefilim",
                "RagnarLocker",
                "REvil",
                "Sekhmet"
            ]
        },
        {
            "data_url": "https://blog.sensecy.com/2020/08/20/global-ransomware-attacks-in-2020-the-top-4-vulnerabilities/",
            "date": "2020-08-20",
            "organization": "sensecy",
            "author": "cyberthreatinsider",
            "title": "Global Ransomware Attacks in 2020: The Top 4 Vulnerabilities",
            "categories": [
                "Clop",
                "Maze",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/case-study-catching-a-human-operated-maze-ransomware-attack-in-action/",
            "date": "2020-08-13",
            "organization": "SentinelOne",
            "author": "SentinelLabs",
            "title": "Case Study: Catching a Human-Operated Maze Ransomware Attack In Action",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/ransomware-gang-publishes-tens-of-gbs-of-internal-data-from-lg-and-xerox/",
            "date": "2020-08-04",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "Ransomware gang publishes tens of GBs of internal data from LG and Xerox",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://sites.temple.edu/care/ci-rw-attacks/",
            "date": "2020-08",
            "organization": "Temple University",
            "author": "CARE",
            "title": "Critical Infrastructure Ransomware Attacks",
            "categories": [
                "CryptoLocker",
                "Cryptowall",
                "DoppelPaymer",
                "FriedEx",
                "Mailto",
                "Maze",
                "REvil",
                "Ryuk",
                "SamSam",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2020/07/ESET_Threat_Report_Q22020.pdf",
            "date": "2020-07-29",
            "organization": "ESET Research",
            "author": "welivesecurity",
            "title": "THREAT REPORT Q2 2020",
            "categories": [
                "DEFENSOR ID",
                "HiddenAd",
                "Bundlore",
                "Pirrit",
                "Agent.BTZ",
                "Cerber",
                "ClipBanker",
                "CROSSWALK",
                "Cryptowall",
                "CTB Locker",
                "DanaBot",
                "Dharma",
                "Formbook",
                "Gandcrab",
                "Grandoreiro",
                "Houdini",
                "ISFB",
                "LockBit",
                "Locky",
                "Mailto",
                "Maze",
                "Microcin",
                "Nemty",
                "NjRAT",
                "Phobos",
                "PlugX",
                "Pony",
                "REvil",
                "Socelars",
                "STOP",
                "Tinba",
                "TrickBot",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/enter-the-maze-demystifying-an-affiliate-involved-in-maze-snow/",
            "date": "2020-07-22",
            "organization": "SentinelOne",
            "author": "Jason Reaves",
            "title": "Enter the Maze: Demystifying an Affiliate Involved in Maze (SNOW)",
            "categories": [
                "ISFB",
                "Maze",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/financially-motivated-actors-are-expanding-access-into-ot",
            "date": "2020-07-15",
            "organization": "Mandiant",
            "author": "Nathan Brubaker",
            "title": "Financially Motivated Actors Are Expanding Access Into OT: Analysis of Kill Lists That Include OT Processes Used With Seven Malware Families",
            "categories": [
                "Clop",
                "DoppelPaymer",
                "LockerGoga",
                "Maze",
                "MegaCortex",
                "Nefilim",
                "Snake"
            ]
        },
        {
            "data_url": "https://blogs.quickheal.com/maze-ransomware-continues-threat-consumers/",
            "date": "2020-06-18",
            "organization": "Quick Heal",
            "author": "Preksha Saxena",
            "title": "Maze ransomware continues to be a threat to the consumers",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://oag.ca.gov/system/files/Letter%204.pdf",
            "date": "2020-06-17",
            "organization": "Cognizant",
            "author": "Cognizant",
            "title": "Notice of Data Breach",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/chipmaker-maxlinear-reports-data-breach-after-maze-ransomware-attack/",
            "date": "2020-06-16",
            "organization": "BleepingComputer",
            "author": "Sergiu Gatlan",
            "title": "Chipmaker MaxLinear reports data breach after Maze Ransomware attack",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://nakedsecurity.sophos.com/2020/06/04/nuclear-missile-contractor-hacked-in-maze-ransomware-attack/",
            "date": "2020-06-04",
            "organization": "Sophos Naked Security",
            "author": "Lisa Vaas",
            "title": "Nuclear missile contractor hacked in Maze ransomware attack",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.brighttalk.com/webcast/7451/408167/navigating-maze-analysis-of-a-rising-ransomware-threat",
            "date": "2020-05-21",
            "organization": "BrightTALK (FireEye)",
            "author": "Kimberly Goody",
            "title": "Navigating MAZE: Analysis of a Rising Ransomware Threat",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/05/12/maze-ransomware-1-year-counting/",
            "date": "2020-05-12",
            "organization": "SophosLabs Uncut",
            "author": "Sophos",
            "title": "Maze ransomware: extorting victims for 1 year and counting",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://blog.redteam.pl/2020/05/sodinokibi-revil-ransomware.html",
            "date": "2020-05-07",
            "organization": "REDTEAM.PL",
            "author": "Adam Ziaja",
            "title": "Sodinokibi / REvil ransomware",
            "categories": [
                "Maze",
                "MimiKatz",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2020/05/tactics-techniques-procedures-associated-with-maze-ransomware-incidents.html",
            "date": "2020-05-07",
            "organization": "FireEye Inc",
            "author": "Kimberly Goody",
            "title": "Navigating the MAZE: Tactics, Techniques and Procedures Associated With MAZE Ransomware Incidents",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.blueliv.com/cyber-security-and-cyber-threat-intelligence-blog-blueliv/escape-from-the-maze/",
            "date": "2020-05-04",
            "organization": "Blueliv",
            "author": "Blueliv Team",
            "title": "Escape from the Maze",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/maze-ransomware-deobfuscation/",
            "date": "2020-05-01",
            "organization": "CrowdStrike",
            "author": "Shaun Hurley",
            "title": "The Many Paths Through Maze",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2020/04/28/ransomware-groups-continue-to-target-healthcare-critical-services-heres-how-to-reduce-risk/",
            "date": "2020-04-28",
            "organization": "Microsoft",
            "author": "Microsoft Threat Protection Intelligence Team",
            "title": "Ransomware groups continue to target healthcare, critical services; here\u2019s how to reduce risk",
            "categories": [
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Paradise",
                "RagnarLocker",
                "REvil",
                "RobinHood"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/it-services-giant-cognizant-suffers-maze-ransomware-cyber-attack/",
            "date": "2020-04-18",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "IT services giant Cognizant suffers Maze Ransomware cyber attack",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://web.archive.org/save/https://news.cognizant.com/2020-04-18-cognizant-security-update",
            "date": "2020-04-18",
            "organization": "Cognizant",
            "author": "Cognizant",
            "title": "Cognizant Security Incident Update",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/ransomware-maze/",
            "date": "2020-03-26",
            "organization": "McAfee",
            "author": "Alexandre Mundo",
            "title": "Ransomware Maze",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://techcrunch.com/2020/03/26/chubb-insurance-breach-ransomware/",
            "date": "2020-03-26",
            "organization": "TechCrunch",
            "author": "Zack Whittaker",
            "title": "Cyber insurer Chubb had data stolen in Maze ransomware attack",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://download.bitdefender.com/resources/files/News/CaseStudies/study/318/Bitdefender-TRR-Whitepaper-Maze-creat4351-en-EN-GenericUse.pdf",
            "date": "2020-03-25",
            "organization": "Bitdefender",
            "author": "Bitdefender Team",
            "title": "A Technical Look into Maze Ransomware",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/three-more-ransomware-families-create-sites-to-leak-stolen-data/",
            "date": "2020-03-24",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Three More Ransomware Families Create Sites to Leak Stolen Data",
            "categories": [
                "Clop",
                "DoppelPaymer",
                "Maze",
                "Nefilim",
                "Nemty",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.docdroid.net/dUpPY5s/maze.pdf",
            "date": "2020-03-12",
            "organization": "Cyberbit",
            "author": "Dor Neemani",
            "title": "Lost in the Maze",
            "categories": [
                "Maze"
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
            "data_url": "https://www.bleepingcomputer.com/news/security/ransomware-attackers-use-your-cloud-backups-against-you/",
            "date": "2020-03-03",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Ransomware Attackers Use Your Cloud Backups Against You",
            "categories": [
                "DoppelPaymer",
                "Maze"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/csi-evidence-indicators-for-targeted-ransomware-attacks-part-ii/",
            "date": "2020-02-20",
            "organization": "McAfee",
            "author": "Christiaan Beek",
            "title": "CSI: Evidence Indicators for Targeted Ransomware Attacks \u2013 Part II",
            "categories": [
                "Cobalt Strike",
                "LockerGoga",
                "Maze",
                "MegaCortex"
            ]
        },
        {
            "data_url": "https://www.zataz.com/cyber-attaque-a-lencontre-des-serveurs-de-bouygues-construction/",
            "date": "2020-01-30",
            "organization": "ZATAZ",
            "author": "Damien Bancal",
            "title": "Cyber attaque \u00e0 l\u2019encontre des serveurs de Bouygues Construction",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-001.pdf",
            "date": "2020-01-29",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "\u00c9tat de la menace ran\u00e7ongiciel",
            "categories": [
                "Clop",
                "Dharma",
                "FriedEx",
                "Gandcrab",
                "LockerGoga",
                "Maze",
                "MegaCortex",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SamSam"
            ]
        },
        {
            "data_url": "https://www.cityofpensacola.com/DocumentCenter/View/18879/Deloitte-Executive-Summary-PDF",
            "date": "2020-01-22",
            "organization": "Deloitte",
            "author": "Deloitte",
            "title": "Project Lurus",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.blackberry.com/content/dam/blackberry-com/asset/enterprise/pdf/wp-spark-state-of-ransomware.pdf",
            "date": "2020",
            "organization": "Blackberry",
            "author": "Blackberry Research",
            "title": "State of Ransomware",
            "categories": [
                "Maze",
                "MedusaLocker",
                "Nefilim",
                "Phobos",
                "REvil",
                "Ryuk",
                "STOP"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-village",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD VILLAGE",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/maze-ransomware-releases-files-stolen-from-city-of-pensacola/",
            "date": "2019-12-24",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Maze Ransomware Releases Files Stolen from City of Pensacola",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://github.com/albertzsigovits/malware-notes/blob/master/Ransomware/Maze.md",
            "date": "2019-12-18",
            "organization": "Github (albertzsigovits)",
            "author": "Albert Zsigovits",
            "title": "Maze ransomware",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2019/12/IR-Lessons-Maze.html",
            "date": "2019-12-17",
            "organization": "Cisco",
            "author": "JJ Cummings",
            "title": "Incident Response lessons from recent Maze ransomware attacks",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2019/12/ransomware-gangs-now-outing-victim-businesses-that-dont-pay-up/",
            "date": "2019-12-16",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Ransomware Gangs Now Outing Victim Businesses That Don\u2019t Pay Up",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/maze-ransomware-behind-pensacola-cyberattack-1m-ransom-demand/",
            "date": "2019-12-11",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Maze Ransomware Behind Pensacola Cyberattack, $1M Ransom Demand",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/allied-universal-breached-by-maze-ransomware-stolen-data-leaked/",
            "date": "2019-11-21",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Allied Universal Breached by Maze Ransomware, Stolen Data Leaked",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/ta2101-plays-government-imposter-distribute-malware-german-italian-and-us",
            "date": "2019-11-14",
            "organization": "Proofpoint",
            "author": "Bryan Campbell",
            "title": "TA2101 plays government imposter to distribute malware to German, Italian, and US organizations",
            "categories": [
                "Maze",
                "TA2101"
            ]
        },
        {
            "data_url": "https://twitter.com/certbund/status/1192756294307995655",
            "date": "2019-11-08",
            "organization": "Twitter (@certbund)",
            "author": "CERT-Bund",
            "title": "Tweet on Spam Mails containing MAZE",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/maze-ransomware-now-delivered-by-spelevo-exploit-kit/",
            "date": "2019-10-18",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "Maze Ransomware Now Delivered by Spelevo Exploit Kit",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://id-ransomware.blogspot.com/2019/05/chacha-ransomware.html",
            "date": "2019-05-13",
            "organization": "",
            "author": "Amigo A",
            "title": "ChaCha Ransomware",
            "categories": [
                "Maze"
            ]
        },
        {
            "data_url": "https://adversary.crowdstrike.com/adversary/twisted-spider/",
            "date": "2019",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "Twisted Spider",
            "categories": [
                "Maze",
                "TA2101"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "maze",
            "procedure_code": "s0449",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0449",
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
                    "procedure_description": "the maze encryption process has used batch scripts with various commands.[206][207]"
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
                    "procedure_description": "maze has used several windows api functions throughout the encryption process including isdebuggerpresent, terminateprocess, process32firstw, among others.[117]"
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
                    "procedure_description": "maze has created scheduled tasks using name variants such as \"windows update security\", \"windows update security patches\", and \"google chrome security update\", to launch maze at a specific time.[105]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "maze has used wmi to attempt to delete the shadow volumes on a machine, and to connect a virtual machine to the network domain of the victim organization's network.[73][74]"
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
                    "procedure_description": "maze has created a file named \"startup_vrun.bat\" in the startup folder of a virtual machine to establish persistence.[157]"
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
                    "procedure_description": "maze has created scheduled tasks using name variants such as \"windows update security\", \"windows update security patches\", and \"google chrome security update\", to launch maze at a specific time.[105]"
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
                    "procedure_description": "maze has created a file named \"startup_vrun.bat\" in the startup folder of a virtual machine to establish persistence.[157]"
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
                    "procedure_description": "maze has injected the malware dll into a target process.[44][45]"
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
                    "procedure_description": "maze has created scheduled tasks using name variants such as \"windows update security\", \"windows update security patches\", and \"google chrome security update\", to launch maze at a specific time.[105]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/006",
                    "technique_name": "hide artifacts : run virtual instance",
                    "technique_description": "adversaries may carry out malicious operations using a virtual instance to avoid detection. a wide variety of virtualization technologies exist that allow for the emulation of a computer or computing environment. by running malicious code inside of a virtual instance, adversaries can hide artifacts associated with their behavior from security tools that are unable to monitor activity inside the virtual instance. additionally, depending on the virtual networking implementation (ex: bridged adapter), network traffic generated by the virtual instance can be difficult to trace back to the compromised host as the ip address and hostname might not match known values.",
                    "procedure_description": "maze operators have used virtualbox and a windows 7 virtual machine to run the ransomware; the virtual machine's configuration file mapped the shared network drives of the target company, presumably so maze can encrypt files on the shared drives as well as the local machine.[4]"
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
                    "procedure_description": "maze has disabled dynamic analysis and other security tools including ida debugger, x32dbg, and ollydbg.[56] it has also disabled windows defender's real-time monitoring feature and attempted to disable endpoint protection services.[57]"
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
                    "procedure_description": "maze has used the \"wow64revertwow64fsredirection\" function following attempts to delete the shadow volumes, in order to leave the system in the same state as it was prior to redirection.[12]"
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
                    "procedure_description": "maze operators have created scheduled tasks masquerading as \"windows update security\", \"windows update security patches\", and \"google chrome security update\" designed to launch the ransomware.[47]"
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
                    "procedure_description": "maze has decrypted strings and other important information during the encryption process. maze also calls certain functions dynamically to hinder analysis.[205]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/001",
                    "technique_name": "obfuscated files or information : binary padding",
                    "technique_description": "adversaries may use binary padding to add junk data and change the on-disk representation of malware. this can be done without affecting the functionality or behavior of a binary, but can increase the size of the binary beyond what some security tools are capable of handling due to file size limitations.",
                    "procedure_description": "maze has inserted large blocks of junk code, including some components to decrypt strings and other important information for later in the encryption process.[27]"
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
                    "procedure_description": "maze has injected the malware dll into a target process.[44][45]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/007",
                    "technique_name": "system binary proxy execution : msiexec",
                    "technique_description": "adversaries may abuse msiexec.exe to proxy execution of malicious payloads. msiexec.exe is the command-line utility for the windows installer and is thus commonly associated with executing installation packages (.msi). the msiexec.exe binary may also be digitally signed by microsoft.",
                    "procedure_description": "maze has delivered components for its ransomware attacks using msi files, some of which have been executed from the command-line using msiexec.[15]"
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
                    "procedure_description": "maze has gathered all of the running system processes.[169]"
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
                    "procedure_description": "maze has checked the language of the infected system using the \"getuserdefaultuilanguage\" function.[222]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1614.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1614/001",
                    "technique_name": "system location discovery : system language discovery",
                    "technique_description": "adversaries may attempt to gather information about the system language of a victim in order to infer the geographical location of that host. this information may be used to shape follow-on behaviors, including whether the adversary infects the target and/or attempts specific actions. this decision may be employed by malware developers and operators to reduce their risk of attracting the attention of specific law enforcement agencies or prosecution/scrutiny from other entities.",
                    "procedure_description": "maze has checked the language of the machine with function getuserdefaultuilanguage and terminated execution if the language matches with an entry in the predefined list.[16]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1049",
                    "technique_link": "https://attack.mitre.org/techniques/T1049",
                    "technique_name": "system network connections discovery",
                    "technique_description": "adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.",
                    "procedure_description": "maze has used the \"wnetopenenumw\", \"wnetenumresourcew\", \"wnetcloseenum\" and \"wnetaddconnection2w\" functions to enumerate the network resources on the infected machine.[51]"
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
                    "procedure_description": "maze has communicated to hard-coded ip addresses via http.[202]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1568",
                    "technique_link": "https://attack.mitre.org/techniques/T1568",
                    "technique_name": "dynamic resolution",
                    "technique_description": "adversaries may dynamically establish connections to command and control infrastructure to evade common detections and remediations. this may be achieved by using malware that shares a common algorithm with the infrastructure the adversary uses to receive the malware's communications. these calculations can be used to dynamically adjust parameters such as the domain name, ip address, or port number the malware uses for command and control.",
                    "procedure_description": "maze has forged post strings with a random choice from a list of possibilities including \"forum\", \"php\", \"view\", etc. while making connection with the c2, hindering detection efforts.[8]"
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
                    "procedure_description": "maze has disrupted systems by encrypting files on targeted machines, claiming to decrypt files if a ransom payment is made. maze has used the chacha algorithm, based on salsa20, and an rsa algorithm to encrypt files.[56]"
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
                    "procedure_description": "maze has attempted to delete the shadow volumes of infected machines, once before and once after the encryption process.[37][38]"
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
                    "procedure_description": "maze has stopped sql services to ensure it can encrypt any database.[26]"
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
                    "procedure_description": "maze has issued a shutdown command on a victim machine that, upon reboot, will run the ransomware within a vm.[15]"
                }
            ]
        }
    ]
};