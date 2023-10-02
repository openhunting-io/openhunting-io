var threatdata = {
    "name": "SamSam",
    "alias": "SamSam, Samas",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-03-17",
    "all_data": {
        "tool": "SamSam",
        "names": [
            {
                "name": "SamSam"
            },
            {
                "name": "Samas"
            }
        ],
        "description": "(US-CERT) After gaining access to a particular network, the SamSam actors escalate privileges for administrator rights, drop malware onto the server, and run an executable file, all without victims\u2019 action or authorization. While many ransomware campaigns rely on a victim completing an action, such as opening an email or visiting a compromised website, RDP allows cyber actors to infect victims with minimal detection.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/alerts/AA18-337A",
            "https://blog.malwarebytes.com/threat-analysis/2018/06/samsam-ransomware-controlled-distribution/",
            "http://blog.talosintel.com/2016/03/samsam-ransomware.html",
            "https://www.sophos.com/en-us/medialibrary/pdfs/technical-papers/samsam-ransomware-chooses-its-targets-carefully-wpna.aspx",
            "https://www.crowdstrike.com/blog/an-in-depth-analysis-of-samsam-ransomware-and-boss-spider/",
            "https://nakedsecurity.sophos.com/2018/05/01/samsam-ransomware-a-mean-old-dog-with-a-nasty-new-trick-report/",
            "http://blog.talosintelligence.com/2018/01/samsam-evolution-continues-netting-over.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0370/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.samsam"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:samsam"
        ],
        "uuid": "bd75f106-8065-4882-b343-73e924e16c99",
        "last-card-change": "2020-07-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "samsam",
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
            "data_url": "https://therecord.media/iranian-hackers-behind-cox-media-group-ransomware-attack/",
            "date": "2021-12-28",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Iranian hackers behind Cox Media Group ransomware attack (DEV-0270)",
            "categories": [
                "SamSam"
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
            "data_url": "https://www.youtube.com/watch?v=LUxOcpIRxmg",
            "date": "2020-02-25",
            "organization": "RSA Conference",
            "author": "Joel DeCapua",
            "title": "Feds Fighting Ransomware: How the FBI Investigates and How You Can Help",
            "categories": [
                "FastCash",
                "Cerber",
                "Defray",
                "Dharma",
                "FriedEx",
                "Gandcrab",
                "GlobeImposter",
                "Mamba",
                "Phobos",
                "Rapid Ransom",
                "REvil",
                "Ryuk",
                "SamSam",
                "Zeus"
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
            "data_url": "https://jsac.jpcert.or.jp/archive/2020/pdf/JSAC2020_1_tamada-yamazaki-nakatsuru_en.pdf",
            "date": "2020-01-17",
            "organization": "Secureworks",
            "author": "Tamada Kiyotaka",
            "title": "Is It Wrong to Try to Find APT Techniques in Ransomware Attack?",
            "categories": [
                "Defray",
                "Dharma",
                "FriedEx",
                "Gandcrab",
                "GlobeImposter",
                "Matrix Ransom",
                "MedusaLocker",
                "Phobos",
                "REvil",
                "Ryuk",
                "SamSam",
                "Scarab Ransomware"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-lowell",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD LOWELL",
            "categories": [
                "SamSam",
                "BOSS SPIDER"
            ]
        },
        {
            "data_url": "https://enterprise.verizon.com/resources/reports/2019-data-breach-investigations-report.pdf",
            "date": "2019-05-08",
            "organization": "Verizon Communications Inc.",
            "author": "Verizon Communications Inc.",
            "title": "2019 Data Breach Investigations Report",
            "categories": [
                "BlackEnergy",
                "Cobalt Strike",
                "DanaBot",
                "Gandcrab",
                "GreyEnergy",
                "Mirai",
                "Olympic Destroyer",
                "SamSam"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2018/11/29/how-a-samsam-like-attack-happens-and-what-you-can-do-about-it/",
            "date": "2018-11-29",
            "organization": "SophosLabs Uncut",
            "author": "Andrew Brandt",
            "title": "How a SamSam-like attack happens, and what you can do about it",
            "categories": [
                "SamSam"
            ]
        },
        {
            "data_url": "https://www.justice.gov/opa/pr/two-iranian-men-indicted-deploying-ransomware-extort-hospitals-municipalities-and-public",
            "date": "2018-11-28",
            "organization": "Department of Justice",
            "author": "Office of Public Affairs",
            "title": "Two Iranian Men Indicted for Deploying Ransomware to Extort Hospitals, Municipalities, and Public Institutions, Causing Over $30 Million in Losses",
            "categories": [
                "SamSam"
            ]
        },
        {
            "data_url": "https://nakedsecurity.sophos.com/2018/09/11/the-rise-of-targeted-ransomware/",
            "date": "2018-09-11",
            "organization": "Sophos Naked Security",
            "author": "Mark Stockley",
            "title": "The Rise of Targeted Ransomware",
            "categories": [
                "Dharma",
                "FriedEx",
                "SamSam"
            ]
        },
        {
            "data_url": "https://nakedsecurity.sophos.com/2018/08/02/how-to-defend-yourself-against-samsam-ransomware/",
            "date": "2018-08-02",
            "organization": "Sophos Naked Security",
            "author": "Mark Stockley",
            "title": "How to defend yourself against SamSam ransomware",
            "categories": [
                "SamSam"
            ]
        },
        {
            "data_url": "https://www.sophos.com/en-us/medialibrary/PDFs/technical-papers/SamSam-The-Almost-Six-Million-Dollar-Ransomware.pdf",
            "date": "2018-08-01",
            "organization": "SophosLabs",
            "author": "Peter Mackenzie",
            "title": "SamSam: The (Almost) Six  Million Dollar Ransomware",
            "categories": [
                "SamSam"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2018/07/31/sophoslabs-releases-samsam-ransomware-report/",
            "date": "2018-07-31",
            "organization": "SophosLabs Uncut",
            "author": "Andrew Brandt",
            "title": "Sophos releases SamSam ransomware report",
            "categories": [
                "SamSam"
            ]
        },
        {
            "data_url": "https://nakedsecurity.sophos.com/2018/07/31/samsam-the-almost-6-million-ransomware/",
            "date": "2018-07-31",
            "organization": "Sophos Naked Security",
            "author": "Mark Stockley",
            "title": "SamSam: The (almost) $6 million ransomware",
            "categories": [
                "SamSam"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2018/07/31/samsam-guide-to-coverage/",
            "date": "2018-07-31",
            "organization": "SophosLabs Uncut",
            "author": "Andrew Brandt",
            "title": "SamSam guide to coverage",
            "categories": [
                "SamSam"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/an-in-depth-analysis-of-samsam-ransomware-and-boss-spider/",
            "date": "2018-05-21",
            "organization": "CrowdStrike",
            "author": "Karan Sood",
            "title": "An In-Depth Analysis of Samsam Ransomware and BOSS SPIDER",
            "categories": [
                "SamSam"
            ]
        },
        {
            "data_url": "https://www.sophos.com/en-us/medialibrary/pdfs/technical-papers/samsam-ransomware-chooses-its-targets-carefully-wpna.aspx",
            "date": "2018-04",
            "organization": "Sophos",
            "author": "Dorka Palotay",
            "title": "SamSam Ransomware Chooses Its Targets Carefully",
            "categories": [
                "SamSam"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/samsam-ransomware-campaigns",
            "date": "2018-02-15",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "SamSam Ransomware Campaigns",
            "categories": [
                "MimiKatz",
                "reGeorg",
                "SamSam",
                "BOSS SPIDER"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/samsam-converting-opportunity-into-profit",
            "date": "2018-02-15",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "SamSam: Converting Opportunity into Profit",
            "categories": [
                "SamSam",
                "BOSS SPIDER"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2018/01/samsam-evolution-continues-netting-over.html",
            "date": "2018-01-22",
            "organization": "Talos Intelligence",
            "author": "Vitor Ventura",
            "title": "SamSam - The Evolution Continues Netting Over $325,000 in 4 Weeks",
            "categories": [
                "SamSam"
            ]
        },
        {
            "data_url": "https://www.justice.gov/opa/press-release/file/1114746/download",
            "date": "2017-10-11",
            "organization": "FBI",
            "author": "FBI",
            "title": "Wanted By The FBI: SamSam Subjects",
            "categories": [
                "SamSam"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/samas-ransomware",
            "date": "2016-05-03",
            "organization": "Secureworks",
            "author": "Kevin Strickland",
            "title": "The Continuing Evolution of Samas Ransomware",
            "categories": [
                "SamSam",
                "BOSS SPIDER"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/ransomware-deployed-by-adversary",
            "date": "2016-03-30",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Ransomware Deployed by Adversary with Established Foothold",
            "categories": [
                "MimiKatz",
                "reGeorg",
                "SamSam",
                "BOSS SPIDER"
            ]
        },
        {
            "data_url": "http://blog.talosintel.com/2016/03/samsam-ransomware.html",
            "date": "2016-03-23",
            "organization": "Cisco Talos",
            "author": "Cisco Talos",
            "title": "SamSam: The Doctor Will See You, After He Pays The Ransom",
            "categories": [
                "SamSam"
            ]
        },
        {
            "data_url": "https://nakedsecurity.sophos.com/2018/05/01/samsam-ransomware-a-mean-old-dog-with-a-nasty-new-trick-report/",
            "date": "2015-06-03",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "Thamar Reservoir \u2013 An Iranian cyber-attack campaign against targets in the Middle East",
            "categories": [
                "SamSam"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "samsam",
            "procedure_code": "s0370",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0370",
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
                    "procedure_description": "samsam uses custom batch scripts to execute some of its components.[294]"
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
                    "procedure_description": "samsam has been seen deleting its own files and payloads to make analysis of the attack more difficult.[208]"
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
                    "procedure_description": "samsam has been seen using aes or des to encrypt payloads and payload components.[286][287]"
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
                    "procedure_description": "samsam has used garbage code to pad some of its malware components.[35]"
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
                    "procedure_description": "samsam encrypts victim files using rsa-2048 encryption and demands a ransom be paid in bitcoin to decrypt those files.[82]"
                }
            ]
        }
    ]
};