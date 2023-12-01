var threatdata = {
    "name": "Ryuk",
    "alias": "Ryuk",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2023-09-12",
    "all_data": {
        "tool": "Ryuk",
        "names": [
            {
                "name": "Ryuk"
            }
        ],
        "description": "Ryuk is a ransomware which encrypts its victim's files and asks for a ransom via bitcoin to release the original files. It is has been observed being used to attack companies or professional environments. Cybersecurity experts figured out that Ryuk and {{Hermes}} ransomware shares pieces of codes. Hermes is commodity ransomware that has been observed for sale on dark-net forums and used by multiple threat actors.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.crowdstrike.com/blog/big-game-hunting-with-ryuk-another-lucrative-targeted-ransomware/",
            "https://www.csoonline.com/article/3541810/ryuk-ransomware-explained-a-targeted-devastatingly-effective-attack.html",
            "https://www.cybereason.com/blog/triple-threat-emotet-deploys-trickbot-to-steal-data-spread-ryuk-ransomware",
            "https://research.checkpoint.com/ryuk-ransomware-targeted-campaign-break/",
            "https://www.fireeye.com/blog/threat-research/2019/01/a-nasty-trick-from-credential-theft-malware-to-business-disruption.html",
            "https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html",
            "https://securingtomorrow.mcafee.com/other-blogs/mcafee-labs/ryuk-ransomware-attack-rush-to-attribution-misses-the-point/",
            "https://thedfirreport.com/2020/10/08/ryuks-return/",
            "https://cofense.com/the-ryuk-threat-why-bazarbackdoor-matters-most/",
            "https://www.deepinstinct.com/2020/11/24/ryuk-ransomware-the-deviance-is-in-the-variance/",
            "https://www.cybereason.com/blog/cybereason-vs.-ryuk-ransomware",
            "https://www.advanced-intel.com/post/crime-laundering-primer-inside-ryuk-crime-crypto-ledger-risky-asian-crypto-traders",
            "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2021-CTI-006.pdf",
            "https://www.darkreading.com/vulnerabilities---threats/ryuks-rampage-has-lessons-for-the-enterprise/a/d-id/1340533",
            "https://www.advanced-intel.com/post/adversary-dossier-ryuk-ransomware-anatomy-of-an-attack-in-2021",
            "https://news.sophos.com/en-us/2021/05/06/mtr-in-real-time-pirates-pave-way-for-ryuk-ransomware/",
            "https://securityintelligence.com/articles/ryuk-ransomware-operators-shift-tactics/",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/new-ryuk-ransomware-sample%e2%80%aftargets-webservers/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0446/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ryuk"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Ryuk"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=ryuk-ransomware"
        ],
        "uuid": "7ecebee3-176f-47c2-9b9d-4d086f283711",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--3d690b19-f459-4a76-a5dd-b76d289251c5",
        "pb_file": "ryuk-ransomware.json",
        "last_updated": "2021-09-30T00:00:00.000Z",
        "title": "RYUK RANSOMWARE",
        "industries": [
            "healthcare"
        ],
        "regions": [],
        "malwares": [
            "Ryuk"
        ]
    },
    "ioc_data": [
        {
            "malware_printable": "Ryuk",
            "malware_alias": null,
            "malware": "win.ryuk",
            "last_update": "2021-04-03 06:08:28",
            "tags": [
                "Ransomware",
                "UNC1878",
                "Ryuk"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://microsoftestore.top/gate.php",
                        "timestamp": "2021-04-03 06:08:28"
                    },
                    {
                        "value": "http://microsoftltdcorp.com.pl/gate.php",
                        "timestamp": "2021-04-03 06:08:28"
                    },
                    {
                        "value": "http://microsofttop.wiki/gate.php",
                        "timestamp": "2021-04-03 06:08:28"
                    },
                    {
                        "value": "http://microsoftupdate.work/gate.php",
                        "timestamp": "2021-04-03 06:08:28"
                    },
                    {
                        "value": "http://mirosoftplaymarket.top/gate.php",
                        "timestamp": "2021-04-03 06:08:28"
                    }
                ],
                "domain": [
                    {
                        "value": "microsoftestore.top",
                        "timestamp": "2021-04-03 06:07:46"
                    },
                    {
                        "value": "microsoftltdcorp.com.pl",
                        "timestamp": "2021-04-03 06:07:46"
                    },
                    {
                        "value": "microsofttop.wiki",
                        "timestamp": "2021-04-03 06:07:46"
                    },
                    {
                        "value": "mirosoftplaymarket.top",
                        "timestamp": "2021-04-03 06:07:46"
                    },
                    {
                        "value": "microsoftupdate.work",
                        "timestamp": "2021-04-03 06:07:46"
                    }
                ],
                "ip:port": [
                    {
                        "value": "8.208.103.182:80",
                        "timestamp": "2021-04-02 18:26:30"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "88b1b4966650de59cef20c340b28739c52dc9ead91d9959a338a8e531ad38335",
                        "timestamp": "2021-03-11 03:30:13"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "6cad2f7dc809b9353a31753a438aef4e",
                        "timestamp": "2021-03-10 17:59:46"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-04-03 06:08:28",
    "file_name": "ryuk",
    "articles": [
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2023-CTI-007.pdf",
            "date": "2023-09-12",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "FIN12: A Cybercriminal Group with Multiple Ransomware",
            "categories": [
                "BlackCat",
                "Cobalt Strike",
                "Conti",
                "Hive",
                "MimiKatz",
                "Nokoyawa Ransomware",
                "PLAY",
                "Royal Ransom",
                "Ryuk",
                "SystemBC"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/advintel-s-state-of-emotet-aka-spmtools-displays-over-million-compromised-machines-through-2022",
            "date": "2022-09-13",
            "organization": "AdvIntel",
            "author": "Advanced Intelligence",
            "title": "AdvIntel's State of Emotet aka \"SpmTools\" Displays Over Million Compromised Machines Through 2022",
            "categories": [
                "Conti",
                "Cobalt Strike",
                "Emotet",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://fourcore.io/blogs/ryuk-ransomware-simulation-mitre-ttp",
            "date": "2022-08-31",
            "organization": "Fourcore",
            "author": "Hardik Manocha",
            "title": "Ryuk Ransomware: History, Timeline, And Adversary Simulation",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE54L7v",
            "date": "2022-08-22",
            "organization": "Microsoft",
            "author": "Microsoft",
            "title": "Extortion Economics - Ransomware\u2019s new business model",
            "categories": [
                "BlackCat",
                "Conti",
                "Hive",
                "REvil",
                "AgendaCrypt",
                "Black Basta",
                "BlackCat",
                "Brute Ratel C4",
                "Cobalt Strike",
                "Conti",
                "Hive",
                "Mount Locker",
                "Nokoyawa Ransomware",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://thehackernews.com/2022/05/malware-analysis-trickbot.html",
            "date": "2022-05-24",
            "organization": "The Hacker News",
            "author": "Florian Goutin",
            "title": "Malware Analysis: Trickbot",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "Ryuk",
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
            "data_url": "https://blog.bushidotoken.net/2022/04/lessons-from-conti-leaks.html",
            "date": "2022-04-17",
            "organization": "BushidoToken Blog",
            "author": "BushidoToken",
            "title": "Lessons from the Conti Leaks",
            "categories": [
                "BazarBackdoor",
                "Conti",
                "Emotet",
                "IcedID",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://arcticwolf.com/resources/blog/karakurt-web",
            "date": "2022-04-15",
            "organization": "Arctic Wolf",
            "author": "Arctic Wolf",
            "title": "The Karakurt Web: Threat Intel and Blockchain Analysis Reveals Extension of Conti Business Model",
            "categories": [
                "Conti",
                "Diavol",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://blogs.microsoft.com/on-the-issues/2022/04/13/zloader-botnet-disrupted-malware-ukraine/",
            "date": "2022-04-13",
            "organization": "Microsoft",
            "author": "Amy Hogan-Burney",
            "title": "Notorious cybercrime gang\u2019s botnet disrupted",
            "categories": [
                "Ryuk",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/04/13/dismantling-zloader-how-malicious-ads-led-to-disabled-security-tools-and-ransomware/",
            "date": "2022-04-13",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "Dismantling ZLoader: How malicious ads led to disabled security tools and ransomware",
            "categories": [
                "BlackMatter",
                "Cobalt Strike",
                "DarkSide",
                "Ryuk",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.trmlabs.com/post/analysis-corroborates-suspected-ties-between-conti-and-ryuk-ransomware-groups-and-wizard-spider",
            "date": "2022-04-06",
            "organization": "TRM Labs",
            "author": "TRM Labs",
            "title": "TRM Analysis Corroborates Suspected Ties Between Conti and Ryuk Ransomware Groups and Wizard Spider",
            "categories": [
                "Conti",
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
            "data_url": "https://www.eldiario.es/tecnologia/capos-cibercrimen-avisan-contratacaran-si-hackea-rusia_1_8795458.html",
            "date": "2022-03-02",
            "organization": "elDiario",
            "author": "Carlos del Castillo",
            "title": "Cybercrime bosses warn that they will \"fight back\" if Russia is hacked",
            "categories": [
                "Conti",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2022/03/conti-ransomware-group-diaries-part-ii-the-office/",
            "date": "2022-03-02",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Conti Ransomware Group Diaries, Part II: The Office",
            "categories": [
                "Conti",
                "Emotet",
                "Ryuk",
                "TrickBot"
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
            "data_url": "https://blogs.blackberry.com/en/2022/01/kraken-the-code-on-prometheus",
            "date": "2022-01-19",
            "organization": "Blackberry",
            "author": "The BlackBerry Research & Intelligence Team",
            "title": "Kraken the Code on Prometheus",
            "categories": [
                "Prometheus Backdoor",
                "BlackMatter",
                "Cerber",
                "Cobalt Strike",
                "DCRat",
                "Ficker Stealer",
                "QakBot",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://0xchina.medium.com/malware-reverse-engineering-31039450af27",
            "date": "2021-11-18",
            "organization": "Medium 0xchina",
            "author": "Hamad Alnakal",
            "title": "Malware reverse engineering (Ryuk Ransomware)",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.huntandhackett.com/blog/advanced-ip-scanner-the-preferred-scanner-in-the-apt-toolbox",
            "date": "2021-10-22",
            "organization": "HUNT & HACKETT",
            "author": "Krijn de Mik",
            "title": "Advanced IP Scanner: the preferred scanner in the A(P)T toolbox",
            "categories": [
                "Conti",
                "DarkSide",
                "Dharma",
                "Egregor",
                "Hades",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/fin12-ransomware-intrusion-actor-pursuing-healthcare-targets",
            "date": "2021-10-07",
            "organization": "Mandiant",
            "author": "Joshua Shilko",
            "title": "FIN12: The Prolific Ransomware Intrusion Threat Actor That Has Aggressively Pursued Healthcare Targets",
            "categories": [
                "BazarBackdoor",
                "GRIMAGENT",
                "Ryuk"
            ]
        },
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
            "data_url": "https://community.riskiq.com/article/c88cf7e6",
            "date": "2021-09-16",
            "organization": "RiskIQ",
            "author": "RiskIQ",
            "title": "Untangling the Spider Web: The Curious Connection Between WIZARD SPIDER\u2019s Ransomware Infrastructure and a Windows Zero-Day Exploit",
            "categories": [
                "Cobalt Strike",
                "Ryuk"
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
            "data_url": "https://www.mcafee.com/enterprise/en-us/assets/reports/rp-ryuk-ransomware-targeting-webservers.pdf",
            "date": "2021-07-07",
            "organization": "McAfee",
            "author": "McAfee Labs",
            "title": "Ryuk Ransomware Now Targeting Webservers",
            "categories": [
                "Cobalt Strike",
                "Ryuk"
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
            "data_url": "https://twitter.com/SecurityJoes/status/1402603695578157057",
            "date": "2021-06-09",
            "organization": "Twitter (@SecurityJoes)",
            "author": "SecurityJoes",
            "title": "Tweet on .NET builder of a Ryuk imposter malware",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://medium.com/walmartglobaltech/inside-the-systembc-malware-as-a-service-9aa03afd09c6",
            "date": "2021-06-07",
            "organization": "Medium walmartglobaltech",
            "author": "Joshua Platt",
            "title": "Inside the SystemBC Malware-As-A-Service",
            "categories": [
                "Ryuk",
                "SystemBC",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=HwfRxjV2wok",
            "date": "2021-05-22",
            "organization": "Youtube (ACPEnw)",
            "author": "YouTube (ACPEnw)",
            "title": "Lessons Learned from a Cyber Attack System Admin Perspective",
            "categories": [
                "Ryuk"
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
            "data_url": "https://news.sophos.com/en-us/2021/05/06/mtr-in-real-time-pirates-pave-way-for-ryuk-ransomware/",
            "date": "2021-05-06",
            "organization": "Sophos Labs",
            "author": "Tilly Travers",
            "title": "MTR in Real Time: Pirates pave way for Ryuk ransomware",
            "categories": [
                "Ryuk"
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
            "data_url": "https://www.coveware.com/blog/ransomware-attack-vectors-shift-as-new-software-vulnerability-exploits-abound",
            "date": "2021-04-26",
            "organization": "CoveWare",
            "author": "CoveWare",
            "title": "Ransomware Attack Vectors Shift as New Software Vulnerability Exploits Abound",
            "categories": [
                "Avaddon",
                "Clop",
                "Conti",
                "DarkSide",
                "Egregor",
                "LockBit",
                "Mailto",
                "Phobos",
                "REvil",
                "Ryuk",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/adversary-dossier-ryuk-ransomware-anatomy-of-an-attack-in-2021",
            "date": "2021-04-17",
            "organization": "Advanced Intelligence",
            "author": "Vitali Kremez",
            "title": "Adversary Dossier: Ryuk Ransomware Anatomy of an Attack in 2021",
            "categories": [
                "Ryuk"
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
            "data_url": "https://www.blackberry.com/content/dam/blackberry-com/asset/enterprise/pdf/direct/report-bb-2021-threat-report.pdf",
            "date": "2021-03-21",
            "organization": "Blackberry",
            "author": "Blackberry Research",
            "title": "2021 Threat Report",
            "categories": [
                "Bashlite",
                "FritzFrog",
                "IPStorm",
                "Mirai",
                "Tsunami",
                "elf.wellmess",
                "AppleJeus",
                "Dacls",
                "EvilQuest",
                "Manuscrypt",
                "Astaroth",
                "BazarBackdoor",
                "Cerber",
                "Cobalt Strike",
                "Emotet",
                "FinFisher RAT",
                "Kwampirs",
                "MimiKatz",
                "NjRAT",
                "Ryuk",
                "SmokeLoader",
                "TrickBot"
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
            "data_url": "https://research.nccgroup.com/2021/03/04/deception-engineering-exploring-the-use-of-windows-service-canaries-against-ransomware/",
            "date": "2021-03-04",
            "organization": "NCC Group",
            "author": "Ollie Whitehouse",
            "title": "Deception Engineering: exploring the use of Windows Service Canaries against ransomware",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.ccn-cert.cni.es/informes/informes-ccn-cert-publicos/5768-ccn-cert-id-03-21-ryuk-ransomware/file.html",
            "date": "2021-03",
            "organization": "CCN-CERT",
            "author": "CCN-CERT",
            "title": "Informe C\u00f3digo Da\u00f1inoCCN-CERT ID-03/21: RyukRansomware",
            "categories": [
                "Ryuk"
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
            "data_url": "https://www.youtube.com/watch?v=Of_KjNG9DHc",
            "date": "2021-03-01",
            "organization": "YouTube ( Malware_Analyzing_&_RE_Tips_Tricks)",
            "author": "Ji\u0159\u00ed Vinopal",
            "title": "Ryuk Ransomware - Advanced using of Scylla for Imports reconstruction",
            "categories": [
                "Ryuk"
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
            "data_url": "https://4rchib4ld.github.io/blog/NiceToMeetYouRyuk/",
            "date": "2021-02-27",
            "organization": "4rchibld",
            "author": "4rchibld",
            "title": "Nice to meet you, too. My name is Ryuk.",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2021-CTI-006.pdf",
            "date": "2021-02-25",
            "organization": "ANSSI",
            "author": "CERT-FR",
            "title": "Ryuk Ransomware",
            "categories": [
                "BazarBackdoor",
                "Buer",
                "Conti",
                "Emotet",
                "Ryuk",
                "TrickBot"
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
            "data_url": "https://www.youtube.com/watch?v=7xxRunBP5XA",
            "date": "2021-02-22",
            "organization": "YouTube ( Malware_Analyzing_&_RE_Tips_Tricks)",
            "author": "Ji\u0159\u00ed Vinopal",
            "title": "Ryuk Ransomware API Resolving in 10 minutes",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/q4-2020-threat-report-quarterly-analysis-cybersecurity-trends-tactics-and-themes",
            "date": "2021-02-16",
            "organization": "Proofpoint",
            "author": "Proofpoint Threat Research Team",
            "title": "Q4 2020 Threat Report: A Quarterly Analysis of Cybersecurity Trends, Tactics and Themes",
            "categories": [
                "Emotet",
                "Ryuk",
                "NARWHAL SPIDER",
                "TA800"
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
            "data_url": "https://www.clearskysec.com/wp-content/uploads/2021/02/Conti-Ransomware.pdf",
            "date": "2021-02-04",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "CONTI Modus Operandi and Bitcoin Tracking",
            "categories": [
                "Conti",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.cronup.com/post/de-ataque-con-malware-a-incidente-de-ransomware",
            "date": "2021-02-02",
            "organization": "CRONUP",
            "author": "Germ\u00e1n Fern\u00e1ndez",
            "title": "De ataque con Malware a incidente de Ransomware",
            "categories": [
                "Avaddon",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DanaBot",
                "Dharma",
                "Dridex",
                "Egregor",
                "Emotet",
                "Empire Downloader",
                "FriedEx",
                "GootKit",
                "IcedID",
                "MegaCortex",
                "Nemty",
                "Phorpiex",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "SDBbot",
                "SmokeLoader",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://twitter.com/IntelAdvanced/status/1356114606780002308",
            "date": "2021-02-01",
            "organization": "Twitter (@IntelAdvanced)",
            "author": "Advanced Intelligence",
            "title": "Tweet on Active Directory Exploitation by RYUK \"one\" group",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/01/31/bazar-no-ryuk/",
            "date": "2021-01-31",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Bazar, No Ryuk?",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://storage.pardot.com/652283/16118467480sqebwq7/MSP_Security_Summit___John_Hammond_Huntress___Analyzing_Ryuk.pdf",
            "date": "2021-01-28",
            "organization": "Huntress Labs",
            "author": "John Hammond",
            "title": "Analyzing Ryuk Another Link in the Cyber Attack Chain",
            "categories": [
                "BazarBackdoor",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://twitter.com/IntelAdvanced/status/1353546534676258816",
            "date": "2021-01-25",
            "organization": "Twitter (@IntelAdvanced)",
            "author": "Advanced Intelligence",
            "title": "Tweet on Ryuk Ransomware group's post exploitation tactics including usage of Keethief tool",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/crime-laundering-primer-inside-ryuk-crime-crypto-ledger-risky-asian-crypto-traders",
            "date": "2021-01-07",
            "organization": "Advanced Intelligence",
            "author": "Vitali Kremez",
            "title": "Crime Laundering Primer: Inside Ryuk Crime (Crypto) Ledger & Risky Asian Crypto Traders",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://0xc0decafe.com/2020/12/28/never-upload-ransomware-samples-to-the-internet/",
            "date": "2020-12-28",
            "organization": "0xC0DECAFE",
            "author": "Thomas Barabosch",
            "title": "Never upload ransomware samples to the Internet",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://blog.truesec.com/2020/12/22/collaboration-between-fin7-and-the-ryuk-group-a-truesec-investigation/",
            "date": "2020-12-22",
            "organization": "TRUESEC",
            "author": "Mattias W\u00e5hl\u00e9n",
            "title": "Collaboration between FIN7 and the RYUK group, a Truesec Investigation",
            "categories": [
                "Carbanak",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.ironnet.com/blog/russian-cyber-attack-campaigns-and-actors",
            "date": "2020-12-21",
            "organization": "IronNet",
            "author": "Adam Hlavek",
            "title": "Russian cyber attack campaigns and actors",
            "categories": [
                "WellMail",
                "elf.wellmess",
                "Agent.BTZ",
                "BlackEnergy",
                "EternalPetya",
                "Havex RAT",
                "Industroyer",
                "Ryuk",
                "Triton",
                "WellMess"
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
            "data_url": "https://www.cybereason.com/blog/cybereason-vs.-ryuk-ransomware",
            "date": "2020-12-10",
            "organization": "Cybereason",
            "author": "Joakim Kandefelt",
            "title": "Cybereason vs. Ryuk Ransomware",
            "categories": [
                "BazarBackdoor",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://blog.cyberint.com/ryuk-crypto-ransomware",
            "date": "2020-12-10",
            "organization": "CyberInt",
            "author": "CyberInt",
            "title": "Ryuk Crypto-Ransomware",
            "categories": [
                "Ryuk",
                "TrickBot"
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
            "data_url": "https://www.zdnet.com/article/the-malware-that-usually-installs-ransomware-and-you-need-to-remove-right-away/",
            "date": "2020-11-20",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "The malware that usually installs ransomware and you need to remove right away",
            "categories": [
                "Avaddon",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "FriedEx",
                "MegaCortex",
                "Phorpiex",
                "PwndLocker",
                "QakBot",
                "Ryuk",
                "SDBbot",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://threatpost.com/apt-exploits-zerologon-targets-japanese-companies/161383/",
            "date": "2020-11-19",
            "organization": "Threatpost",
            "author": "Elizabeth Montalbano",
            "title": "APT Exploits Microsoft Zerologon Bug: Targets Japanese Companies",
            "categories": [
                "Quasar RAT",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.domaintools.com/resources/blog/analyzing-network-infrastructure-as-composite-objects",
            "date": "2020-11-18",
            "organization": "DomainTools",
            "author": "Joe Slowik",
            "title": "Analyzing Network Infrastructure as Composite Objects",
            "categories": [
                "Ryuk"
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
            "data_url": "https://medium.com/ax1al/reversing-ryuk-eef8ffd55f12",
            "date": "2020-11-14",
            "organization": "Medium 0xastrovax",
            "author": "astrovax",
            "title": "Deep Dive Into Ryuk Ransomware",
            "categories": [
                "Hermes",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/anatomy-of-attack-inside-bazarbackdoor-to-ryuk-ransomware-one-group-via-cobalt-strike",
            "date": "2020-11-06",
            "organization": "Advanced Intelligence",
            "author": "Vitali Kremez",
            "title": "Anatomy of Attack: Inside BazarBackdoor to Ryuk Ransomware \"one\" Group via Cobalt Strike",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2020/11/05/ryuk-speed-run-2-hours-to-ransom/",
            "date": "2020-11-05",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Ryuk Speed Run, 2 Hours to Ransom",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://twitter.com/ffforward/status/1324281530026524672",
            "date": "2020-11-05",
            "organization": "Twitter (@ffforward)",
            "author": "TheAnalyst",
            "title": "Tweet on Zloader infection leads to Cobaltstrike Installation and deployment of RYUK",
            "categories": [
                "Cobalt Strike",
                "Ryuk",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.scythe.io/library/threatthursday-ryuk",
            "date": "2020-11-05",
            "organization": "SCYTHE",
            "author": "Jorge Orchilles",
            "title": "#ThreatThursday - Ryuk",
            "categories": [
                "BazarBackdoor",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://github.com/scythe-io/community-threats/tree/master/Ryuk",
            "date": "2020-11-05",
            "organization": "Github (scythe-io)",
            "author": "SCYTHE",
            "title": "Ryuk Adversary Emulation Plan",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/networkvirtualization/2020/11/trick-or-threat-ryuk-ransomware-targets-the-health-care-industry.html/",
            "date": "2020-11-04",
            "organization": "VMRay",
            "author": "Giovanni Vigna",
            "title": "Trick or Threat: Ryuk ransomware targets the health care industry",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/ryuk-and-splunk-detections.html",
            "date": "2020-10-31",
            "organization": "splunk",
            "author": "Ryan Kovar",
            "title": "Ryuk and Splunk Detections",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://cofense.com/the-ryuk-threat-why-bazarbackdoor-matters-most/",
            "date": "2020-10-30",
            "organization": "Cofense",
            "author": "The Cofense Intelligence Team",
            "title": "The Ryuk Threat: Why BazarBackdoor Matters Most",
            "categories": [
                "BazarBackdoor",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://github.com/ThreatConnect-Inc/research-team/blob/master/IOCs/WizardSpider-UNC1878-Ryuk.csv",
            "date": "2020-10-30",
            "organization": "Github (ThreatConnect-Inc)",
            "author": "ThreatConnect",
            "title": "UNC 1878 Indicators from Threatconnect",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://community.riskiq.com/article/0bcefe76",
            "date": "2020-10-29",
            "organization": "RiskIQ",
            "author": "RiskIQ",
            "title": "Ryuk Ransomware: Extensive Attack Infrastructure Revealed",
            "categories": [
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://twitter.com/SophosLabs/status/1321844306970251265",
            "date": "2020-10-29",
            "organization": "Twitter (@SophosLabs)",
            "author": "SophosLabs",
            "title": "Tweet on similarities between BUER in-memory loader & RYUK in-memory loader",
            "categories": [
                "Buer",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://twitter.com/anthomsec/status/1321865315513520128",
            "date": "2020-10-29",
            "organization": "Twitter (@anthomsec)",
            "author": "Andrew Thompson",
            "title": "Tweet on UNC1878 activity",
            "categories": [
                "BazarBackdoor",
                "Ryuk",
                "TrickBot",
                "UNC1878"
            ]
        },
        {
            "data_url": "https://edition.cnn.com/2020/10/28/politics/hospitals-targeted-ransomware-attacks/index.html",
            "date": "2020-10-29",
            "organization": "CNN",
            "author": "Vivian Salama",
            "title": "Several hospitals targeted in new wave of ransomware attacks",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://kc.mcafee.com/resources/sites/MCAFEE/content/live/CORP_KNOWLEDGEBASE/91000/KB91844/en_US/McAfee%20Labs%20Threat%20Advisory%20-%20Ransom-Ryukv6.pdf",
            "date": "2020-10-29",
            "organization": "McAfee",
            "author": "McAfee Labs",
            "title": "McAfee Labs Threat Advisory Ransom-Ryuk",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://redcanary.com/blog/how-one-hospital-thwarted-a-ryuk-ransomware-outbreak/",
            "date": "2020-10-29",
            "organization": "Red Canary",
            "author": "The Red Canary Team",
            "title": "A Bazar start: How one hospital thwarted a Ryuk ransomware outbreak",
            "categories": [
                "Cobalt Strike",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.reuters.com/article/usa-healthcare-cyber-idUSKBN27E0EP",
            "date": "2020-10-29",
            "organization": "Reuters",
            "author": "Christopher Bing",
            "title": "Building wave of ransomware attacks strike U.S. hospitals",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/hacking-group-is-targeting-us-hospitals-with-ryuk-ransomware/",
            "date": "2020-10-29",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Hacking group is targeting US hospitals with Ryuk ransomware",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/ryuk-ransomware/",
            "date": "2020-10-29",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Brittany Barbehenn",
            "title": "Threat Assessment: Ryuk Ransomware and Trickbot Targeting U.S. Healthcare and Public Health Sector",
            "categories": [
                "Anchor",
                "BazarBackdoor",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=BhjQ6zsCVSc",
            "date": "2020-10-28",
            "organization": "Youtube (SANS Digital Forensics and Incident Response)",
            "author": "Van Ta",
            "title": "STAR Webcast: Spooky RYUKy: The Return of UNC1878",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=CgDtm05qApE",
            "date": "2020-10-28",
            "organization": "Youtube (SANS Institute)",
            "author": "Katie Nickels",
            "title": "Spooky RYUKy: The Return of UNC1878 | SANS STAR Webcast",
            "categories": [
                "Ryuk",
                "UNC1878"
            ]
        },
        {
            "data_url": "https://gist.github.com/aaronst/6aa7f61246f53a8dd4befea86e832456",
            "date": "2020-10-28",
            "organization": "Github (aaronst)",
            "author": "Aaron Stephens",
            "title": "UNC1878 indicators",
            "categories": [
                "Ryuk",
                "UNC1878"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2020/10/kegtap-and-singlemalt-with-a-ransomware-chaser.html",
            "date": "2020-10-28",
            "organization": "FireEye",
            "author": "Kimberly Goody",
            "title": "Unhappy Hour Special: KEGTAP and SINGLEMALT With a Ransomware Chaser",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk",
                "UNC1878"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/sites/default/files/publications/AA20-302A_Ransomware%20_Activity_Targeting_the_Healthcare_and_Public_Health_Sector.pdf",
            "date": "2020-10-28",
            "organization": "CISA",
            "author": "CISA",
            "title": "AA20-302A: Ransomware Activity Targeting the Healthcare and Public Health Sector",
            "categories": [
                "AnchorDNS",
                "Anchor",
                "BazarBackdoor",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/10/28/hacks-for-sale-inside-the-buer-loader-malware-as-a-service/",
            "date": "2020-10-28",
            "organization": "SophosLabs Uncut",
            "author": "Sean Gallagher",
            "title": "Hacks for sale: inside the Buer Loader malware-as-a-service",
            "categories": [
                "Buer",
                "Ryuk",
                "Zloader"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2020/10/fbi-dhs-hhs-warn-of-imminent-credible-ransomware-threat-against-u-s-hospitals/",
            "date": "2020-10-28",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "FBI, DHS, HHS Warn of Imminent, Credible Ransomware Threat Against U.S. Hospitals",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/steelcase-furniture-giant-hit-by-ryuk-ransomware-attack/",
            "date": "2020-10-27",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Steelcase furniture giant hit by Ryuk ransomware attack",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://threatconnect.com/blog/threatconnect-research-roundup-ryuk-and-domains-spoofing-eset-and-microsoft/",
            "date": "2020-10-26",
            "organization": "ThreatConnect",
            "author": "ThreatConnect Research Team",
            "title": "ThreatConnect Research Roundup: Ryuk and Domains Spoofing ESET and Microsoft",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/an-inside-look-at-how-ryuk-evolved-its-encryption-and-evasion-techniques/",
            "date": "2020-10-22",
            "organization": "Sentinel LABS",
            "author": "Marco Figueroa",
            "title": "An Inside Look at How Ryuk Evolved Its Encryption and Evasion Techniques",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/french-it-giant-sopra-steria-hit-by-ryuk-ransomware/",
            "date": "2020-10-22",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "French IT giant Sopra Steria hit by Ryuk ransomware",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Lageberichte/Lagebericht2020.pdf?__blob=publicationFile&v=2",
            "date": "2020-10-20",
            "organization": "Bundesamt f\u00fcr Sicherheit in der Informationstechnik",
            "author": "BSI",
            "title": "Die Lage der IT-Sicherheit in Deutschland 2020",
            "categories": [
                "Clop",
                "Emotet",
                "REvil",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2020/10/18/ryuk-in-5-hours/",
            "date": "2020-10-18",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Ryuk in 5 Hours",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/wizard-spider-adversary-update/",
            "date": "2020-10-16",
            "organization": "CrowdStrike",
            "author": "The Crowdstrike Intel Team",
            "title": "WIZARD SPIDER Update: Resilient, Reactive and Resolute",
            "categories": [
                "BazarBackdoor",
                "Conti",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://threatconnect.com/blog/threatconnect-research-roundup-possible-ryuk-infrastructure/",
            "date": "2020-10-16",
            "organization": "ThreatConnect",
            "author": "ThreatConnect Research Team",
            "title": "ThreatConnect Research Roundup: Possible Ryuk Infrastructure",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/10/14/inside-a-new-ryuk-ransomware-attack/",
            "date": "2020-10-14",
            "organization": "Sophos",
            "author": "Sean Gallagher",
            "title": "They\u2019re back: inside a new Ryuk ransomware attack",
            "categories": [
                "Cobalt Strike",
                "Ryuk",
                "SystemBC"
            ]
        },
        {
            "data_url": "https://blog.virustotal.com/2020/10/tracing-fresh-ryuk-campaigns-itw.html",
            "date": "2020-10-13",
            "organization": "VirusTotal",
            "author": "Gerardo Fern\u00e1ndez",
            "title": "Tracing fresh Ryuk campaigns itw",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://blogs.microsoft.com/on-the-issues/2020/10/12/trickbot-ransomware-cyberthreat-us-elections/",
            "date": "2020-10-12",
            "organization": "Microsoft",
            "author": "Tom Burt",
            "title": "New action to combat ransomware ahead of U.S. elections",
            "categories": [
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/front-door-into-bazarbackdoor-stealthy-cybercrime-weapon",
            "date": "2020-10-12",
            "organization": "Advanced Intelligence",
            "author": "Roman Marshanski",
            "title": "\"Front Door\" into BazarBackdoor: Stealthy Cybercrime Weapon",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/trickbot-botnet-ransomware-disruption",
            "date": "2020-10-12",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Trickbot: U.S. Court Order Hits Botnet\u2019s Infrastructure",
            "categories": [
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2020/10/08/ryuks-return/",
            "date": "2020-10-08",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Ryuk\u2019s Return",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.hhs.gov/sites/default/files/bazarloader.pdf",
            "date": "2020-10-02",
            "organization": "Health Sector Cybersecurity Coordination Center (HC3)",
            "author": "Health Sector Cybersecurity Coordination Center (HC3)",
            "title": "Report 202010021600: Recent Bazarloader Use in Ransomware Campaigns",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk",
                "TrickBot"
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
            "data_url": "https://www.pwc.co.uk/issues/cyber-security-services/insights/what-is-behind-ransomware-attacks-increase.html",
            "date": "2020-09-29",
            "organization": "PWC UK",
            "author": "Andy Auld",
            "title": "What's behind the increase in ransomware attacks this year?",
            "categories": [
                "DarkSide",
                "Avaddon",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FriedEx",
                "Mailto",
                "PwndLocker",
                "QakBot",
                "REvil",
                "Ryuk",
                "SMAUG",
                "SunCrypt",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://ics-cert.kaspersky.com/media/KASPERSKY_H1_2020_ICS_REPORT_EN.pdf",
            "date": "2020-09-24",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky Lab ICS CERT",
            "title": "Threat landscape for industrial automation systems - H1 2020",
            "categories": [
                "Poet RAT",
                "Mailto",
                "Milum",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "Snake"
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
            "data_url": "https://areteir.com/wp-content/uploads/2020/08/Arete_Insight_Is-Conti-the-new-Ryuk_August2020.pdf",
            "date": "2020-08-18",
            "organization": "Arete",
            "author": "Arete Incident Response",
            "title": "Is Conti the New Ryuk?",
            "categories": [
                "Conti",
                "Ryuk"
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
            "data_url": "https://www.bleepingcomputer.com/news/security/ryuk-ransomware-deployed-two-weeks-after-trickbot-infection/",
            "date": "2020-06-23",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "Ryuk ransomware deployed two weeks after Trickbot infection",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/06/CTIR-trends-q3-2020.html#more",
            "date": "2020-06-15",
            "organization": "Cisco Talos",
            "author": "David Liebenberg",
            "title": "Quarterly report: Incident Response trends in Summer 2020",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://n1ght-w0lf.github.io/malware%20analysis/ryuk-ransomware/",
            "date": "2020-05-05",
            "organization": "N1ght-W0lf Blog",
            "author": "Abdallah Elshinbary",
            "title": "Deep Analysis of Ryuk Ransomware",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://securityliterate.com/reversing-ryuk-a-technical-analysis-of-ryuk-ransomware/",
            "date": "2020-04-19",
            "organization": "SecurityLiterate",
            "author": "Kyle Cucci",
            "title": "Reversing Ryuk: A Technical Analysis of Ryuk Ransomware",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://blog.intel471.com/2020/04/14/understanding-the-relationship-between-emotet-ryuk-and-trickbot/",
            "date": "2020-04-14",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Understanding the relationship between Emotet, Ryuk and TrickBot",
            "categories": [
                "Emotet",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2020/03/the-cycle-of-adversary-pursuit.html",
            "date": "2020-03-31",
            "organization": "FireEye",
            "author": "Van Ta",
            "title": "It\u2019s Your Money and They Want It Now - The Cycle of Adversary Pursuit",
            "categories": [
                "Ryuk",
                "TrickBot",
                "UNC1878"
            ]
        },
        {
            "data_url": "https://www.wilbursecurity.com/2020/03/trickbot-to-ryuk-in-two-hours/",
            "date": "2020-03-25",
            "organization": "Wilbur Security",
            "author": "JW",
            "title": "Trickbot to Ryuk in Two Hours",
            "categories": [
                "Cobalt Strike",
                "Ryuk",
                "TrickBot"
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
            "data_url": "https://www.bleepingcomputer.com/news/security/ryuk-ransomware-attacked-epiq-global-via-trickbot-infection/",
            "date": "2020-03-04",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Ryuk Ransomware Attacked Epiq Global Via TrickBot Infection",
            "categories": [
                "Ryuk",
                "TrickBot"
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
            "data_url": "https://www.heise.de/ct/artikel/Was-Emotet-anrichtet-und-welche-Lehren-die-Opfer-daraus-ziehen-4665958.html",
            "date": "2020-03-02",
            "organization": "c't",
            "author": "Christian W\u00f6lbert",
            "title": "Was Emotet anrichtet \u2013 und welche Lehren die Opfer daraus ziehen",
            "categories": [
                "Emotet",
                "Ryuk"
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
            "data_url": "https://blogs.quickheal.com/deep-dive-wakeup-lan-wol-implementation-ryuk/",
            "date": "2020-02-13",
            "organization": "Quick Heal",
            "author": "Goutam Tripathy",
            "title": "A Deep Dive Into Wakeup On Lan (WoL) Implementation of Ryuk",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.carbonblack.com/blog/vmware-carbon-black-tau-ryuk-ransomware-technical-analysis/",
            "date": "2020-02-12",
            "organization": "VMWare Carbon Black",
            "author": "Rachel E. King",
            "title": "Ryuk Ransomware Technical Analysis",
            "categories": [
                "Ryuk"
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
            "data_url": "https://www.zdnet.com/article/dod-contractor-suffers-ransomware-infection/",
            "date": "2020-01-29",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "DOD contractor suffers ransomware infection",
            "categories": [
                "Ryuk"
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
            "data_url": "https://blog.reversinglabs.com/blog/hunting-for-ransomware",
            "date": "2020-01-24",
            "organization": "ReversingLabs",
            "author": "Robert Simmons",
            "title": "Hunting for Ransomware",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/new-ryuk-info-stealer-targets-government-and-military-secrets/",
            "date": "2020-01-24",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "New Ryuk Info Stealer Targets Government and Military Secrets",
            "categories": [
                "Ryuk"
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
            "data_url": "https://www.bleepingcomputer.com/news/security/ryuk-ransomware-uses-wake-on-lan-to-encrypt-offline-devices/",
            "date": "2020-01-14",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Ryuk Ransomware Uses Wake-on-Lan To Encrypt Offline Devices",
            "categories": [
                "Ryuk"
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
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-ulrick",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD ULRICK",
            "categories": [
                "Empire Downloader",
                "Ryuk",
                "TrickBot",
                "WIZARD SPIDER"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/ryuk-ransomware-stops-encrypting-linux-folders/",
            "date": "2019-12-26",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Ryuk Ransomware Stops Encrypting Linux Folders",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://decrypt.co/15394/how-ransomware-exploded-in-the-age-of-btc",
            "date": "2019-12-21",
            "organization": "Decrypt",
            "author": "Adriana Hamacher",
            "title": "How ransomware exploded in the age of Bitcoin",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-spotlight/2019/12/threat-spotlight-the-curious-case-of-ryuk-ransomware/",
            "date": "2019-12-19",
            "organization": "Malwarebytes",
            "author": "Jovi Umawing",
            "title": "Threat spotlight: the curious case of Ryuk ransomware",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/ryuk-ransomware-likely-behind-new-orleans-cyberattack/",
            "date": "2019-12-15",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Ryuk Ransomware Likely Behind New Orleans Cyberattack",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://blog.emsisoft.com/en/35023/bug-in-latest-ryuk-decryptor-may-cause-data-loss/",
            "date": "2019-12-09",
            "organization": "Emsisoft",
            "author": "EmsiSoft Malware Lab",
            "title": "Caution! Ryuk Ransomware decryptor damages larger files, even if you pay",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://twitter.com/Prosegur/status/1199732264386596864",
            "date": "2019-11-27",
            "organization": "Twitter (@Prosegur)",
            "author": "Prosegur",
            "title": "Tweet on Incident of Information Security",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.heise.de/security/artikel/Emotet-Trickbot-Ryuk-ein-explosiver-Malware-Cocktail-4573848.html",
            "date": "2019-11-06",
            "organization": "Heise Security",
            "author": "Thomas Hungenberg",
            "title": "Emotet, Trickbot, Ryuk \u2013 ein explosiver Malware-Cocktail",
            "categories": [
                "Emotet",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://ia.acs.org.au/article/2019/hospital-cyberattack-could-have-been-avoided.html",
            "date": "2019-11-05",
            "organization": "Information Age",
            "author": "David Braue",
            "title": "Hospital cyberattack could have been avoided",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/wizard-spider-adds-new-feature-to-ryuk-ransomware/",
            "date": "2019-11-01",
            "organization": "CrowdStrike",
            "author": "Alexander Hanel",
            "title": "WIZARD SPIDER Adds New Features to Ryuk for Targeting Hosts on LAN",
            "categories": [
                "Ryuk",
                "WIZARD SPIDER"
            ]
        },
        {
            "data_url": "https://www.ccn-cert.cni.es/informes/informes-ccn-cert-publicos/4217-ccn-cert-id-26-19-ryuk-1/file.html",
            "date": "2019-11",
            "organization": "CCN-CERT",
            "author": "CCN-CERT",
            "title": "Informe C\u00f3digo Da\u00f1ino CCN-CERT ID-26/19",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.govcert.admin.ch/blog/36/severe-ransomware-attacks-against-swiss-smes",
            "date": "2019-05-09",
            "organization": "GovCERT.ch",
            "author": "GovCERT.ch",
            "title": "Severe Ransomware Attacks Against Swiss SMEs",
            "categories": [
                "Emotet",
                "LockerGoga",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html",
            "date": "2019-04-05",
            "organization": "FireEye",
            "author": "Brendan McKeague",
            "title": "Pick-Six: Intercepting a FIN6 Intrusion, an Actor Recently Tied to Ryuk and LockerGoga Ransomware",
            "categories": [
                "LockerGoga",
                "Ryuk",
                "FIN6"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/triple-threat-emotet-deploys-trickbot-to-steal-data-spread-ryuk-ransomware",
            "date": "2019-04-02",
            "organization": "Cybereason",
            "author": "Noa Pinkas",
            "title": "Triple Threat: Emotet Deploys Trickbot to Steal Data & Spread Ryuk",
            "categories": [
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2019-ACT-005.pdf",
            "date": "2019-03-26",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "INFORMATIONS CONCERNANTLES RAN\u00c7ONGICIELSLOCKERGOGA ET RYUK",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2019/01/a-nasty-trick-from-credential-theft-malware-to-business-disruption.html",
            "date": "2019-01-11",
            "organization": "FireEye",
            "author": "Kimberly Goody",
            "title": "A Nasty Trick: From Credential Theft Malware to Business Disruption",
            "categories": [
                "Ryuk",
                "TrickBot",
                "GRIM SPIDER",
                "WIZARD SPIDER"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/big-game-hunting-with-ryuk-another-lucrative-targeted-ransomware/",
            "date": "2019-01-10",
            "organization": "CrowdStrike",
            "author": "Alexander Hanel",
            "title": "Big Game Hunting with Ryuk: Another Lucrative Targeted Ransomware",
            "categories": [
                "Ryuk",
                "GRIM SPIDER",
                "MUMMY SPIDER",
                "STARDUST CHOLLIMA",
                "WIZARD SPIDER"
            ]
        },
        {
            "data_url": "https://securingtomorrow.mcafee.com/other-blogs/mcafee-labs/ryuk-ransomware-attack-rush-to-attribution-misses-the-point/",
            "date": "2019-01-09",
            "organization": "McAfee",
            "author": "John Fokker",
            "title": "Ryuk Ransomware Attack: Rush to Attribution Misses the Point",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/uploads/pdf/conference_slides/2019/VB2019-NicolaoMartins.pdf",
            "date": "2019",
            "organization": "Virus Bulletin",
            "author": "Gabriela Nicolao",
            "title": "Shinigami's Revenge: The Long Tail of Ryuk Malware",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.latimes.com/local/lanow/la-me-ln-times-delivery-disruption-20181229-story.html",
            "date": "2018-12-29",
            "organization": "Los Angeles Times",
            "author": "Tony Barboza",
            "title": "Malware attack disrupts delivery of L.A. Times and Tribune papers across the U.S.",
            "categories": [
                "Ryuk"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/ryuk-ransomware-targeted-campaign-break/",
            "date": "2018-08-20",
            "organization": "Check Point",
            "author": "Itay Cohen",
            "title": "Ryuk Ransomware: A Targeted Campaign Break-Down",
            "categories": [
                "Ryuk"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "ryuk",
            "procedure_code": "s0446",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0446",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "ryuk can use stolen domain admin accounts to move laterally within a victim domain.[16]"
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
                    "procedure_description": "ryuk has used cmd.exe to create a registry entry to establish persistence.[292]"
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
                    "procedure_description": "ryuk has used multiple native apis including shellexecutew to run executables,getwindowsdirectoryw to create folders, and virtualalloc, writeprocessmemory, and createremotethread for process injection.[150]"
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
                    "procedure_description": "ryuk can remotely create a scheduled task to execute itself on a system.[153]"
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
                    "procedure_description": "ryuk has used the windows command line to create a registry entry under hkey_current_user\\software\\microsoft\\windows\\currentversion\\run to establish persistence.[230]"
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
                    "procedure_description": "ryuk can remotely create a scheduled task to execute itself on a system.[153]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1205",
                    "technique_link": "https://attack.mitre.org/techniques/T1205",
                    "technique_name": "traffic signaling",
                    "technique_description": "adversaries may use traffic signaling to hide open ports or other malicious functionality used for persistence or command and control. traffic signaling involves the use of a magic value or sequence that must be sent to a system to trigger a special response, such as opening a closed port or executing a malicious task. this may take the form of sending a series of packets with certain characteristics before a port will be opened that the adversary can use for command and control. usually this series of packets consists of attempted connections to a predefined sequence of closed ports (i.e. port knocking), but can involve unusual flags, specific strings, or other unique characteristics. after the sequence is completed, opening a port may be accomplished by the host-based firewall, but could also be implemented by custom software.",
                    "procedure_description": "ryuk has used wake-on-lan to power on turned off systems for lateral movement.[5]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "ryuk can use stolen domain admin accounts to move laterally within a victim domain.[16]"
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
                    "procedure_description": "ryuk has attempted to adjust its token privileges to have the sedebugprivilege.[21]"
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
                    "procedure_description": "ryuk has used the windows command line to create a registry entry under hkey_current_user\\software\\microsoft\\windows\\currentversion\\run to establish persistence.[230]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "ryuk has injected itself into remote processes to encrypt files using a combination of virtualalloc, writeprocessmemory, and createremotethread.[54]"
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
                    "procedure_description": "ryuk can remotely create a scheduled task to execute itself on a system.[153]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "ryuk can use stolen domain admin accounts to move laterally within a victim domain.[16]"
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
                    "procedure_description": "ryuk has attempted to adjust its token privileges to have the sedebugprivilege.[21]"
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
                    "procedure_description": "ryuk can launch icacls  /grant everyone:f /t /c /q to delete every access-based restrictions on files and directories.[10]"
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
                    "procedure_description": "ryuk has stopped services related to anti-virus.[79]"
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
                    "procedure_description": "ryuk can create .dll files that actually contain a rich text file format document.[35]"
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
                    "procedure_description": "ryuk has constructed legitimate appearing installation folder paths by calling getwindowsdirectoryw and then inserting a null byte at the fourth character of the path. for windows vista or higher, the path would appear as c:\\users\\public.[143]"
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
                    "procedure_description": "ryuk can use anti-disassembly and code transformation obfuscation techniques.[48]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "ryuk has injected itself into remote processes to encrypt files using a combination of virtualalloc, writeprocessmemory, and createremotethread.[54]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1205",
                    "technique_link": "https://attack.mitre.org/techniques/T1205",
                    "technique_name": "traffic signaling",
                    "technique_description": "adversaries may use traffic signaling to hide open ports or other malicious functionality used for persistence or command and control. traffic signaling involves the use of a magic value or sequence that must be sent to a system to trigger a special response, such as opening a closed port or executing a malicious task. this may take the form of sending a series of packets with certain characteristics before a port will be opened that the adversary can use for command and control. usually this series of packets consists of attempted connections to a predefined sequence of closed ports (i.e. port knocking), but can involve unusual flags, specific strings, or other unique characteristics. after the sequence is completed, opening a port may be accomplished by the host-based firewall, but could also be implemented by custom software.",
                    "procedure_description": "ryuk has used wake-on-lan to power on turned off systems for lateral movement.[5]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "ryuk can use stolen domain admin accounts to move laterally within a victim domain.[16]"
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
                    "procedure_description": "ryuk has enumerated files and folders on all mounted drives.[268]"
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
                    "procedure_description": "ryuk has called createtoolhelp32snapshot to enumerate all running processes.[223]"
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
                    "procedure_description": "ryuk has called getlogicaldrives to emumerate all mounted drives, and getdrivetypew to determine the drive type.[323]"
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
                    "procedure_description": "ryuk has been observed to query the registry key hkey_local_machine\\system\\currentcontrolset\\control\\nls\\language and the value installlanguage. if the machine has the value 0x419 (russian), 0x422 (ukrainian), or 0x423 (belarusian), it stops execution.[2]"
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
                    "procedure_description": "ryuk has called getipnettable in attempt to identify all mounted drives and hosts that have address resolution protocol (arp) entries.[202][203]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/002",
                    "technique_name": "remote services : smb/windows admin shares",
                    "technique_description": "adversaries may use valid accounts to interact with a remote network share using server message block (smb). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "ryuk has used the c$ network share for lateral movement.[46]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1205",
                    "technique_link": "https://attack.mitre.org/techniques/T1205",
                    "technique_name": "traffic signaling",
                    "technique_description": "adversaries may use traffic signaling to hide open ports or other malicious functionality used for persistence or command and control. traffic signaling involves the use of a magic value or sequence that must be sent to a system to trigger a special response, such as opening a closed port or executing a malicious task. this may take the form of sending a series of packets with certain characteristics before a port will be opened that the adversary can use for command and control. usually this series of packets consists of attempted connections to a predefined sequence of closed ports (i.e. port knocking), but can involve unusual flags, specific strings, or other unique characteristics. after the sequence is completed, opening a port may be accomplished by the host-based firewall, but could also be implemented by custom software.",
                    "procedure_description": "ryuk has used wake-on-lan to power on turned off systems for lateral movement.[5]"
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
                    "procedure_description": "ryuk has used a combination of symmetric (aes) and asymmetric (rsa) encryption to encrypt files. files have been encrypted with their own aes key and given a file extension of .ryk. encrypted directories have had a ransom note of ryukreadme.txt written to the directory.[81][38]"
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
                    "procedure_description": "ryuk has used vssadmin delete shadows /all /quiet to to delete volume shadow copies and vssadmin resize shadowstorage to force deletion of shadow copies created by third-party applications.[60]"
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
                    "procedure_description": "ryuk has called kill.bat for stopping services, disabling services and killing processes.[38]"
                }
            ]
        }
    ]
};