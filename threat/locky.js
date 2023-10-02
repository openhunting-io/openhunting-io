var threatdata = {
    "name": "Locky",
    "alias": "Locky",
    "category": "Malware",
    "type": "Ransomware",
    "modified": "2021-10-05",
    "all_data": {
        "tool": "Locky",
        "names": [
            {
                "name": "Locky"
            }
        ],
        "description": "Locky is a high profile ransomware family that first appeared in early 2016 and was observed being active until end of 2017. It encrypts files on the victim system and asks for ransom in order to have back original files. In its first version it added a .locky extension to the encrypted files, and in recent versions it added the .lukitus extension. The ransom amount is defined in BTC and depends on the actor.",
        "category": "Malware",
        "type": [
            "Ransomware"
        ],
        "information": [
            "https://threatvector.cylance.com/en_us/home/threat-spotlight-locky-ransomware.html",
            "https://blog.malwarebytes.com/threat-analysis/2017/01/locky-bart-ransomware-and-backend-server-analysis/",
            "http://blog.talosintelligence.com/2017/06/necurs-locky-campaign.html",
            "https://www.bleepingcomputer.com/news/security/locky-ransomware-returns-but-targets-only-windows-xp-and-vista/",
            "https://blog.malwarebytes.com/threat-analysis/2016/03/look-into-locky/",
            "https://en.wikipedia.org/wiki/Locky"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.locky"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Locky"
        ],
        "uuid": "5142b595-a174-46d6-984f-838a926e3799",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Locky",
            "malware_alias": null,
            "malware": "win.locky",
            "last_update": "2021-03-13 04:07:16",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "771deb8b720dbd784d6715403a41bdcc",
                        "timestamp": "2021-03-13 04:07:16"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-03-13 04:07:16",
    "file_name": "locky",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/ransomware-as-a-service-enabler-of-widespread-attacks",
            "date": "2021-10-05",
            "organization": "Trend Micro",
            "author": "Fyodor Yarochkin",
            "title": "Ransomware as a Service: Enabler of Widespread Attacks",
            "categories": [
                "Cerber",
                "Conti",
                "DarkSide",
                "Gandcrab",
                "Locky",
                "Nefilim",
                "REvil",
                "Ryuk"
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
            "data_url": "https://threatpost.com/ransomware-gang-arrested-locky-hospitals/155842/",
            "date": "2020-05-18",
            "organization": "Threatpost",
            "author": "Tara Seals",
            "title": "Ransomware Gang Arrested for Spreading Locky to Hospitals",
            "categories": [
                "Locky"
            ]
        },
        {
            "data_url": "https://vixra.org/pdf/2002.0183v1.pdf",
            "date": "2020-02-10",
            "organization": "viXra",
            "author": "Jason Reaves",
            "title": "A Case Study into solving Crypters/Packers in Malware Obfuscation using an SMT approach",
            "categories": [
                "Locky"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/evolution-of-malware-sandbox-evasion-tactics-a-retrospective-study/",
            "date": "2019-09-09",
            "organization": "McAfee",
            "author": "Thomas Roccia",
            "title": "Evolution of Malware Sandbox Evasion Tactics \u2013 A Retrospective Study",
            "categories": [
                "Cutwail",
                "Dridex",
                "Dyre",
                "Kovter",
                "Locky",
                "Phorpiex",
                "Simda"
            ]
        },
        {
            "data_url": "https://dissectingmalwa.re/picking-locky.html",
            "date": "2019-07-30",
            "organization": "Dissecting Malware",
            "author": "Marius Genheimer",
            "title": "Picking Locky",
            "categories": [
                "Locky"
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
            "data_url": "https://thisissecurity.stormshield.com/2018/03/20/de-obfuscating-jump-chains-with-binary-ninja/",
            "date": "2018-03-20",
            "organization": "Stormshield",
            "author": "Mehdi Talbi",
            "title": "De-obfuscating Jump Chains with Binary Ninja",
            "categories": [
                "Locky"
            ]
        },
        {
            "data_url": "https://www.cylance.com/en_us/blog/threat-spotlight-locky-ransomware.html",
            "date": "2017-11-07",
            "organization": "ThreatVector",
            "author": "Cylance Threat Research Team",
            "title": "Locky Ransomware",
            "categories": [
                "Locky"
            ]
        },
        {
            "data_url": "http://web.archive.org/web/20181007211751/https://myonlinesecurity.co.uk/return-of-fake-ups-cannot-deliver-malspam-with-an-updated-nemucod-ransomware-and-kovter-payload/",
            "date": "2017-08-20",
            "organization": "MyOnlineSecurity",
            "author": "MyOnlineSecurity",
            "title": "return of fake UPS cannot deliver malspam with an updated nemucod ransomware and Kovter payload",
            "categories": [
                "Cold$eal",
                "Locky"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/locky-ransomware-switches-to-the-lukitus-extension-for-encrypted-files/",
            "date": "2017-08-16",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Locky Ransomware switches to the Lukitus extension for Encrypted Files",
            "categories": [
                "Locky"
            ]
        },
        {
            "data_url": "https://blog.botfrei.de/2017/08/weltweite-spamwelle-verbreitet-teufliche-variante-des-locky/",
            "date": "2017-08-10",
            "organization": "botfrei Blog",
            "author": "Tom Berchem",
            "title": "Weltweite Spamwelle verbreitet teuflische Variante des Locky",
            "categories": [
                "Locky"
            ]
        },
        {
            "data_url": "https://www.elastic.co/blog/ten-process-injection-techniques-technical-survey-common-and-trending-process",
            "date": "2017-07-18",
            "organization": "Elastic",
            "author": "Ashkan Hosseini",
            "title": "Ten process injection techniques: A technical survey of common and trending process injection techniques",
            "categories": [
                "Cryakl",
                "CyberGate",
                "Dridex",
                "FinFisher RAT",
                "Locky"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/locky-ransomware-returns-but-targets-only-windows-xp-and-vista/",
            "date": "2017-06-22",
            "organization": "Bleeping Computer",
            "author": "Catalin Cimpanu",
            "title": "Locky Ransomware Returns, but Targets Only Windows XP & Vista",
            "categories": [
                "Locky"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2017/06/necurs-locky-campaign.html",
            "date": "2017-06-21",
            "organization": "Cisco",
            "author": "Alex Chiu",
            "title": "Player 1 Limps Back Into the Ring - Hello again, Locky!",
            "categories": [
                "Locky"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2017/01/locky-bart-ransomware-and-backend-server-analysis/",
            "date": "2017-01-31",
            "organization": "Malwarebytes",
            "author": "Malwarebytes Labs",
            "title": "Locky Bart ransomware and backend server analysis",
            "categories": [
                "Locky"
            ]
        },
        {
            "data_url": "http://securityaffairs.co/wordpress/49094/malware/zepto-ransomware.html",
            "date": "2016-07-07",
            "organization": "",
            "author": "Pierluigi Paganini",
            "title": "New threat dubbed Zepto Ransomware is spreading out with a new email spam campaign. It is a variant of the recent Locky Ransomware.",
            "categories": [
                "Locky"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2016/03/look-into-locky/",
            "date": "2016-03-01",
            "organization": "Malwarebytes",
            "author": "hasherezade",
            "title": "Look Into Locky Ransomware",
            "categories": [
                "Locky"
            ]
        }
    ],
    "mitre": []
};