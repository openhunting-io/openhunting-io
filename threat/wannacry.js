var threatdata = {
    "name": "WannaCry",
    "alias": "WannaCry, WannaCrypt, WannaCryptor, Wcry, WanaCry, WanaCrypt, WanaCrypt0r, Wana Decrypt0r",
    "category": "Malware",
    "type": "Ransomware, Worm, Remote command",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "WannaCry",
        "names": [
            {
                "name": "WannaCry"
            },
            {
                "name": "WannaCrypt"
            },
            {
                "name": "WannaCryptor"
            },
            {
                "name": "Wcry"
            },
            {
                "name": "WanaCry"
            },
            {
                "name": "WanaCrypt"
            },
            {
                "name": "WanaCrypt0r"
            },
            {
                "name": "Wana Decrypt0r"
            }
        ],
        "description": "WannaCry is ransomware that was first seen in a global attack during May 2017, which affected more than 150 countries. It contains worm-like features to spread itself across a computer network using the SMBv1 exploit EternalBlue.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Worm",
            "Remote command"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/alerts/TA17-132A",
            "https://blog.avast.com/ransomware-that-infected-telefonica-and-nhs-hospitals-is-spreading-aggressively-with-over-50000-attacks-so-far-today",
            "https://baesystemsai.blogspot.de/2017/05/wanacrypt0r-ransomworm.html",
            "http://www.independent.co.uk/news/uk/home-news/wannacry-malware-hack-nhs-report-cybercrime-north-korea-uk-ben-wallace-a8022491.html",
            "https://gist.github.com/rain-1/989428fa5504f378b993ee6efbc0b168",
            "https://blog.comae.io/wannacry-new-variants-detected-b8908fefea7e",
            "https://blog.comae.io/wannacry-the-largest-ransom-ware-infection-in-history-f37da8e30a58",
            "https://blog.comae.io/wannacry-decrypting-files-with-wanakiwi-demo-86bafb81112d",
            "https://themoscowtimes.com/news/wcry-virus-reportedly-infects-russian-interior-ministrys-computer-network-57984",
            "https://krebsonsecurity.com/2017/05/u-k-hospitals-hit-in-widespread-ransomware-attack/",
            "https://securelist.com/blog/incidents/78351/wannacry-ransomware-used-in-widespread-attacks-all-over-the-world/",
            "https://www.malwaretech.com/2017/05/how-to-accidentally-stop-a-global-cyber-attacks.html",
            "https://www.symantec.com/connect/blogs/wannacry-ransomware-attacks-show-strong-links-lazarus-group",
            "https://blog.gdatasoftware.com/2017/05/29751-wannacry-ransomware-campaign",
            "https://blog.malwarebytes.com/cybercrime/2017/05/how-did-wannacry-ransomworm-spread/",
            "https://www.flashpoint-intel.com/blog/linguistic-analysis-wannacry-ransomware/",
            "http://blog.emsisoft.com/2017/05/12/wcry-ransomware-outbreak/",
            "https://www.dropbox.com/s/hpr9fas9xbzo2uz/Whitepaper%20WannaCry%20Ransomware.pdf?dl=0"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0366/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.wannacryptor"
        ],
        "uuid": "611f8147-2bcf-40aa-97ee-e4ac5d958f8c",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "wannacry",
    "analysis": null,
    "articles": [
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
            "data_url": "https://github.com/0xZuk0/rules-of-yaras/blob/main/reports/Wannacry%20Ransomware%20Report.pdf",
            "date": "2022-03-01",
            "organization": "Github (0xZuk0)",
            "author": "Dipankar Lama",
            "title": "Malware Analysis Report: WannaCry Ransomware",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2021/03/15/dearcry-ransomware-attacks-exploit-exchange-server-vulnerabilities/",
            "date": "2021-03-15",
            "organization": "Sophos Labs",
            "author": "Mark Loman",
            "title": "DearCry ransomware attacks exploit Exchange server vulnerabilities",
            "categories": [
                "dearcry",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://i.blackhat.com/eu-20/Wednesday/eu-20-Rivera-From-Zero-To-Sixty-The-Story-Of-North-Koreas-Rapid-Ascent-To-Becoming-A-Global-Cyber-Superpower.pdf",
            "date": "2020-12-09",
            "organization": "CrowdStrike",
            "author": "Josh Burgess",
            "title": "From Zero to SixtyThe Story of North Korea\u2019s Rapid Ascent to Becoming a Global Cyber Superpower",
            "categories": [
                "FastCash",
                "Hermes",
                "WannaCryptor"
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
            "data_url": "https://securelist.com/big-threats-using-code-similarity-part-1/97239/",
            "date": "2020-06-09",
            "organization": "Kaspersky Labs",
            "author": "Costin Raiu",
            "title": "Looking at Big Threats Using Code Similarity. Part 1",
            "categories": [
                "Penquin Turla",
                "CCleaner Backdoor",
                "EternalPetya",
                "Regin",
                "WannaCryptor",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2020/03/05/human-operated-ransomware-attacks-a-preventable-disaster/",
            "date": "2020-03-05",
            "organization": "Microsoft",
            "author": "Microsoft Threat Protection Intelligence Team",
            "title": "Human-operated ransomware attacks: A preventable disaster",
            "categories": [
                "Dharma",
                "DoppelPaymer",
                "Dridex",
                "EternalPetya",
                "Gandcrab",
                "Hermes",
                "LockerGoga",
                "MegaCortex",
                "MimiKatz",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SamSam",
                "TrickBot",
                "WannaCryptor",
                "PARINACOTA"
            ]
        },
        {
            "data_url": "https://swanleesec.github.io/posts/Malware-Lazarus-group's-Brambul-worm-of-the-former-Wannacry-1",
            "date": "2020-02-26",
            "organization": "MetaSwan's Lab",
            "author": "MetaSwan",
            "title": "Lazarus group's Brambul worm of the former Wannacry - 1",
            "categories": [
                "Brambul",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://blog.lexfo.fr/ressources/Lexfo-WhitePaper-The_Lazarus_Constellation.pdf",
            "date": "2020-02-19",
            "organization": "Lexfo",
            "author": "Lexfo",
            "title": "The Lazarus Constellation A study on North Korean malware",
            "categories": [
                "FastCash",
                "AppleJeus",
                "BADCALL",
                "Bankshot",
                "Brambul",
                "Dtrack",
                "Duuzer",
                "DYEPACK",
                "ELECTRICFISH",
                "HARDRAIN",
                "Hermes",
                "HOPLIGHT",
                "Joanap",
                "KEYMARBLE",
                "Kimsuky",
                "MimiKatz",
                "MyDoom",
                "NACHOCHEESE",
                "NavRAT",
                "PowerRatankba",
                "RokRAT",
                "Sierra(Alfa,Bravo, ...)",
                "Volgmer",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://resources.malwarebytes.com/files/2020/02/2020_State-of-Malware-Report.pdf",
            "date": "2020-02-10",
            "organization": "Malwarebytes",
            "author": "Adam Kujawa",
            "title": "2020 State of Malware Report",
            "categories": [
                "magecart",
                "Emotet",
                "QakBot",
                "REvil",
                "Ryuk",
                "TrickBot",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=Q90uZS3taG0",
            "date": "2020-02-02",
            "organization": "Youtube (Ghidra Ninja)",
            "author": "Ghidra Ninja",
            "title": "Reversing WannaCry Part 2 - Diving into the malware with #Ghidra",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2019/09/18/the-wannacry-hangover/",
            "date": "2019-09-18",
            "organization": "SophosLabs Uncut",
            "author": "Peter Mackenzie",
            "title": "The WannaCry hangover",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://www.sophos.com/en-us/medialibrary/PDFs/technical-papers/WannaCry-Aftershock.pdf",
            "date": "2019-09-17",
            "organization": "SophosLabs",
            "author": "Peter Mackenzie",
            "title": "WannaCry Aftershock",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://dissectingmalwa.re/third-times-the-charm-analysing-wannacry-samples.html",
            "date": "2019-07-28",
            "organization": "Dissecting Malware",
            "author": "Marius Genheimer",
            "title": "Third time's the charm? Analysing WannaCry samples",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://www.il-pib.pl/czasopisma/JTIT/2019/1/113.pdf",
            "date": "2019-01",
            "organization": "Journal of Telecommunications and Information Technology",
            "author": "Maxat Akbanov",
            "title": "WannaCry Ransomware: Analysis of Infection, Persistence, Recovery Prevention and Propagation Mechanisms",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/uploads/pdf/magazine/2018/VB2018-Kalnai-Poslusny.pdf",
            "date": "2018-10-03",
            "organization": "Virus Bulletin",
            "author": "Peter K\u00e1lnai",
            "title": "Lazarus Group A Mahjong Game Played with Different Sets of Tiles",
            "categories": [
                "Bankshot",
                "BanPolMex RAT",
                "FuwuqiDrama",
                "HOTWAX",
                "KillDisk (Lazarus)",
                "NACHOCHEESE",
                "REDSHAWL",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://storage.googleapis.com/pub-tools-public-publication-data/pdf/ce44cbda9fdc061050c1d2a5dec0270874a9dc85.pdf",
            "date": "2018-07-26",
            "organization": "IEEE Symposium on Security and Privacy (SP)",
            "author": "Danny Yuxing Huang",
            "title": "Tracking Ransomware End-to-end",
            "categories": [
                "Cerber",
                "Locky",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "http://www.independent.co.uk/news/uk/home-news/wannacry-malware-hack-nhs-report-cybercrime-north-korea-uk-ben-wallace-a8022491.html",
            "date": "2017-10-27",
            "organization": "Independent.co.uk",
            "author": "Adam Withnall",
            "title": "British security minister says North Korea was behind WannaCry hack on NHS",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07170728/Guerrero-Saade-Raiu-VB2017.pdf",
            "date": "2017-08-25",
            "organization": "Kaspersky Labs",
            "author": "Juan Andr\u00e9s Guerrero-Saade",
            "title": "Walking in your Enemy's Shadow: When Fourth-Party Collection becomes Attribution Hell",
            "categories": [
                "NetTraveler",
                "RCS",
                "WannaCryptor",
                "Dancing Salome"
            ]
        },
        {
            "data_url": "https://www.flashpoint-intel.com/blog/linguistic-analysis-wannacry-ransomware/",
            "date": "2017-05-25",
            "organization": "Flashpoint",
            "author": "Flashpoint",
            "title": "Linguistic Analysis of WannaCry Ransomware Messages Suggests Chinese-Speaking Authors",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/wannacry-ransomware-attacks-show-strong-links-lazarus-group",
            "date": "2017-05-22",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "WannaCry: Ransomware attacks show strong links to Lazarus group",
            "categories": [
                "AlphaNC",
                "BravoNC",
                "Duuzer",
                "Sierra(Alfa,Bravo, ...)",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://blog.comae.io/wannacry-decrypting-files-with-wanakiwi-demo-86bafb81112d",
            "date": "2017-05-19",
            "organization": "Comae",
            "author": "Matt Suiche",
            "title": "WannaCry \u2014 Decrypting files with WanaKiwi + Demos",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/cybercrime/2017/05/how-did-wannacry-ransomworm-spread/",
            "date": "2017-05-19",
            "organization": "Malwarebytes",
            "author": "Adam McNeil",
            "title": "How did the WannaCry ransomworm spread?",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://baesystemsai.blogspot.de/2017/05/wanacrypt0r-ransomworm.html",
            "date": "2017-05-16",
            "organization": "",
            "author": "Sergei Shevchenko",
            "title": "Wannacryptor Ransomworm",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://blog.comae.io/wannacry-new-variants-detected-b8908fefea7e",
            "date": "2017-05-14",
            "organization": "Comae",
            "author": "Matt Suiche",
            "title": "WannaCry \u2014 New Variants Detected!",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://www.malwaretech.com/2017/05/how-to-accidentally-stop-a-global-cyber-attacks.html",
            "date": "2017-05-13",
            "organization": "MalwareTech",
            "author": "MalwareTech",
            "title": "How to Accidentally Stop a Global Cyber Attacks",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://themoscowtimes.com/news/wcry-virus-reportedly-infects-russian-interior-ministrys-computer-network-57984",
            "date": "2017-05-12",
            "organization": "The Moscow Times",
            "author": "The Moscow Times",
            "title": "\u2018WCry\u2019 Virus Reportedly Infects Russian Interior Ministry's Computer Network",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://blog.avast.com/ransomware-that-infected-telefonica-and-nhs-hospitals-is-spreading-aggressively-with-over-50000-attacks-so-far-today",
            "date": "2017-05-12",
            "organization": "Avast",
            "author": "Jakub K\u0159oustek",
            "title": "WannaCry ransomware that infected Telefonica and NHS hospitals is spreading aggressively, with over 50,000 attacks so far today",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "http://blog.emsisoft.com/2017/05/12/wcry-ransomware-outbreak/",
            "date": "2017-05-12",
            "organization": "Emsisoft",
            "author": "Holger Keller",
            "title": "Global WannaCry ransomware outbreak uses known NSA exploits",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://blog.gdatasoftware.com/2017/05/29751-wannacry-ransomware-campaign",
            "date": "2017-05-12",
            "organization": "G Data",
            "author": "G Data",
            "title": "Warning: Massive \"WannaCry\" Ransomware campaign launched",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2017/05/u-k-hospitals-hit-in-widespread-ransomware-attack/",
            "date": "2017-05-12",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "U.K. Hospitals Hit in Widespread Ransomware Attack",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2017/05/12/wannacrypt-ransomware-worm-targets-out-of-date-systems/",
            "date": "2017-05-12",
            "organization": "Microsoft",
            "author": "Karthik Selvaraj",
            "title": "WannaCrypt ransomware worm targets out-of-date systems",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://blog.comae.io/wannacry-the-largest-ransom-ware-infection-in-history-f37da8e30a58",
            "date": "2017-05-12",
            "organization": "Comae",
            "author": "Matt Suiche",
            "title": "WannaCry \u2014 The largest ransom-ware infection in History",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://securelist.com/blog/incidents/78351/wannacry-ransomware-used-in-widespread-attacks-all-over-the-world/",
            "date": "2017-05-12",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "WannaCry ransomware used in widespread attacks all over the world",
            "categories": [
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://gist.github.com/rain-1/989428fa5504f378b993ee6efbc0b168",
            "date": "2017",
            "organization": "Github (rain-1)",
            "author": "rain1",
            "title": "WannaCry|WannaDecrypt0r NSA-Cyberweapon-Powered Ransomware Worm",
            "categories": [
                "WannaCryptor"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "wannacry",
            "procedure_code": "s0366",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0366",
            "techniques": [
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
                    "procedure_description": "wannacry utilizes wmic to delete shadow copies.[129][130][131]"
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
                    "procedure_description": "wannacry creates the service \"mssecsvc2.0\" with the display name \"microsoft security center (2.0) service.\"[133][134]"
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
                    "procedure_description": "wannacry creates the service \"mssecsvc2.0\" with the display name \"microsoft security center (2.0) service.\"[133][134]"
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
                    "procedure_description": "wannacry uses attrib +h and icacls . /grant everyone:f /t /c /q to make some of its files hidden and grant all users full access controls.[11]"
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
                    "procedure_description": "wannacry uses attrib +h to make some of its files hidden.[51]"
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
                    "procedure_description": "wannacry searches for variety of user files by file extension before encrypting them using rsa and aes, including office, pdf, image, audio, video, source code, archive/compression format, and key and certificate files.[316][317]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1120",
                    "technique_link": "https://attack.mitre.org/techniques/T1120",
                    "technique_name": "peripheral device discovery",
                    "technique_description": "adversaries may attempt to gather information about attached peripheral devices and components connected to a computer system. peripheral devices could include auxiliary resources that support a variety of functionalities such as keyboards, printers, cameras, smart card readers, or removable storage. the information may be used to enhance their awareness of the system and network environment or may be used for further actions.",
                    "procedure_description": "wannacry contains a thread that will attempt to scan for new attached drives every few seconds. if one is identified, it will encrypt the files on the attached device.[50]"
                },
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
                    "procedure_description": "wannacry scans its local network segment for remote systems to try to exploit and copy itself to.[90]"
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
                    "procedure_description": "wannacry will attempt to determine the local network segment it is a part of.[246]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1210",
                    "technique_link": "https://attack.mitre.org/techniques/T1210",
                    "technique_name": "exploitation of remote services",
                    "technique_description": "adversaries may exploit remote services to gain unauthorized access to internal systems once inside of a network. exploitation of a software vulnerability occurs when an adversary takes advantage of a programming error in a program, service, or within the operating system software or kernel itself to execute adversary-controlled code.\u00a0a common goal for post-compromise exploitation of remote services is for lateral movement to enable access to a remote system.",
                    "procedure_description": "wannacry uses an exploit in smbv1 to spread itself to other remote systems on a network.[36][37][38]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1570",
                    "technique_link": "https://attack.mitre.org/techniques/T1570",
                    "technique_name": "lateral tool transfer",
                    "technique_description": "adversaries may transfer tools or other files between systems in a compromised environment. once brought into the victim environment (i.e. ingress tool transfer) files may then be copied from one system to another to stage adversary tools or other files over the course of an operation. adversaries may copy files between internal victim systems to support lateral movement using inherent file sharing protocols such as file sharing over smb/windows admin shares to connected network shares or with authenticated connections via remote desktop protocol.",
                    "procedure_description": "wannacry attempts to copy itself to remote computers after gaining access via an smb exploit.[31]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1563.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1563/002",
                    "technique_name": "remote service session hijacking : rdp hijacking",
                    "technique_description": "adversaries may hijack a legitimate user\u2019s remote desktop session to move laterally within an environment. remote desktop is a common feature in operating systems. it allows a user to log into an interactive session with a system desktop graphical user interface on a remote system. microsoft refers to its implementation of the remote desktop protocol (rdp) as remote desktop services (rds).",
                    "procedure_description": "wannacry enumerates current remote desktop sessions and tries to execute the malware on each session.[6]"
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
                    "procedure_description": "wannacry uses tor for command and control traffic and routes a custom cryptographic protocol over the tor circuit.[64]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "wannacry uses tor for command and control traffic.[24]"
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
                    "procedure_description": "wannacry encrypts user files and demands that a ransom be paid in bitcoin to decrypt those files.[88][2][89]"
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
                    "procedure_description": "wannacry uses vssadmin, wbadmin, bcdedit, and wmic to delete and disable operating system recovery features.[61][2][62]"
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
                    "procedure_description": "wannacry attempts to kill processes associated with exchange, microsoft sql server, and mysql to make it possible to encrypt their data stores.[40][3]"
                }
            ]
        },
        {
            "procedure_name": "tor",
            "procedure_code": "s0183",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0183",
            "techniques": [
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
                    "procedure_description": "tor encapsulates traffic in multiple layers of encryption, using tls by default.[59]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "traffic traversing the tor network will be forwarded to multiple nodes before exiting the tor network and continuing on to its intended destination.[21]"
                }
            ]
        }
    ]
};