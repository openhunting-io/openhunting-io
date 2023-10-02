var threatdata = {
    "name": "Sodinokibi",
    "alias": "Sodinokibi, Sodin, REvil",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2023-04-18",
    "all_data": {
        "tool": "Sodinokibi",
        "names": [
            {
                "name": "Sodinokibi"
            },
            {
                "name": "Sodin"
            },
            {
                "name": "REvil"
            }
        ],
        "description": "(Cybereason) The ransomware iterates through all folders on the machine, encrypts all files, and drops a ransom note in each folder. Once it has finished encryption, it changes the desktop wallpaper to help inform the user of the attack.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.cybereason.com/blog/the-sodinokibi-ransomware-attack",
            "https://blog.intel471.com/2020/05/04/changes-in-revil-ransomware-version-2-2/",
            "https://www.bleepingcomputer.com/news/security/revil-ransomware-scans-victims-network-for-point-of-sale-systems/",
            "https://www.tripwire.com/state-of-security/security-data-protection/cyber-security/revil-ryuk-tycoon-ransomware/",
            "https://www.bleepingcomputer.com/news/security/revil-ransomware-has-a-new-windows-safe-mode-encryption-mode/",
            "https://www.tripwire.com/state-of-security/featured/revil-ransomware-what-you-need-to-know/",
            "https://www.cybereason.com/blog/cybereason-vs.-revil-ransomware",
            "https://www.bleepingcomputer.com/news/security/revil-ransomwares-new-linux-encryptor-targets-esxi-virtual-machines/",
            "https://cybersecurity.att.com/blogs/labs-research/revils-new-linux-version",
            "https://www.databreaches.net/still-think-you-can-negotiate-with-revil-and-get-your-files-back-read-this-first/",
            "https://www.cybereason.com/blog/cybereason-vs-revil-ransomware-the-kaseya-chronicles",
            "https://www.bankinfosecurity.com/blogs/theres-clear-line-from-revil-ransomware-to-russia-p-3065",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/revil-ransomware-uses-dll-sideloading/",
            "https://www.elliptic.co/blog/revil-revealed-tracking-ransomware-negotiation-and-payment",
            "https://www.bleepingcomputer.com/news/security/kaseya-obtains-universal-decryptor-for-revil-ransomware-victims/",
            "https://www.flashpoint-intel.com/blog/possible-universal-revil-master-key-posted-to-xss/",
            "https://blogs.cisco.com/security/threat-protection-the-revil-ransomware",
            "https://securityintelligence.com/posts/sodinokibi-ransomware-incident-response-intelligence-together/",
            "https://www.bleepingcomputer.com/news/security/free-revil-ransomware-master-decrypter-released-for-past-victims/",
            "https://www.malvuln.com/advisory/7d7ee58c2696794b3be958b165eb61a9.txt",
            "https://www.secureworks.com/blog/revil-development-adds-confidence-about-gold-southfield-reemergence"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0496/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.revil"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Sodinokibi"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=revil-ransomware",
            "https://www.nomoreransom.org/uploads/REvil_documentation.pdf"
        ],
        "uuid": "abd10b51-212f-4403-a7df-328238d3df19",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sodinokibi",
    "analysis": null,
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
            "data_url": "https://cocomelonc.github.io/malware/2023/02/02/malware-analysis-7.html",
            "date": "2023-02-02",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "Malware analysis: part 7. Yara rule example for CRC32. CRC32 in REvil ransomware",
            "categories": [
                "REvil"
            ]
        },
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
            "data_url": "https://blogs.vmware.com/security/2022/09/esxi-targeting-ransomware-the-threats-that-are-after-your-virtual-machines-part-1.html",
            "date": "2022-09-28",
            "organization": "vmware",
            "author": "Giovanni Vigna",
            "title": "ESXi-Targeting Ransomware: The Threats That Are After Your Virtual Machines (Part 1)",
            "categories": [
                "Avoslocker",
                "Babuk",
                "Black Basta",
                "BlackCat",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "HelloKitty",
                "Hive",
                "LockBit",
                "Luna",
                "RansomEXX",
                "RedAlert Ransomware",
                "REvil"
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
            "data_url": "https://www.trendmicro.com/en_us/research/22/g/gootkit-loaders-updated-tactics-and-fileless-delivery-of-cobalt-strike.html",
            "date": "2022-07-27",
            "organization": "Trend Micro",
            "author": "Buddy Tancio",
            "title": "Gootkit Loader\u2019s Updated Tactics and Fileless Delivery of Cobalt Strike",
            "categories": [
                "Cobalt Strike",
                "GootKit",
                "Kronos",
                "REvil",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://securityscorecard.com/research/a-detailed-analysis-of-the-last-version-of-revil-ransomware",
            "date": "2022-06-13",
            "organization": "SecurityScorecard",
            "author": "Vlad Pasca",
            "title": "A Detailed Analysis Of The Last Version Of REvil Ransomware (Download PDF)",
            "categories": [
                "REvil"
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
            "data_url": "https://www.secureworks.com/blog/revil-development-adds-confidence-about-gold-southfield-reemergence?linkId=164334801",
            "date": "2022-05-09",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "REvil Development Adds Confidence About GOLD SOUTHFIELD Reemergence",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://raw.githubusercontent.com/k-vitali/Malware-Misc-RE/master/2022-05-01-revil-reborn-ransom.vk.cfg.txt",
            "date": "2022-05-01",
            "organization": "Github (k-vitali)",
            "author": "Vitali Kremez",
            "title": "REvil Reborn Ransom Config",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/revil-ransomware-returns-new-malware-sample-confirms-gang-is-back/",
            "date": "2022-05-01",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "REvil ransomware returns: New malware sample confirms gang is back",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/revils-tor-sites-come-alive-to-redirect-to-new-ransomware-operation/",
            "date": "2022-04-20",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "REvil's TOR sites come alive to redirect to new ransomware operation",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.connectwise.com/resources/revil-profile",
            "date": "2022-04-12",
            "organization": "ConnectWise",
            "author": "ConnectWise CRU",
            "title": "Threat Profile: REvil",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bankinfosecurity.com/interviews/ransomware-files-episode-6-kaseya-revil-i-5045",
            "date": "2022-04-04",
            "organization": "Bankinfo Security",
            "author": "Jeremy Kirk",
            "title": "The Ransomware Files, Episode 6: Kaseya and REvil",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.documentcloud.org/documents/21505031-hgsac-staff-report-americas-data-held-hostage-032422",
            "date": "2022-03-24",
            "organization": "United States Senate",
            "author": "U.S. Senate Committee on Homeland Security & Governmental Affairs",
            "title": "America's Data Held Hostage: Case Studies in Ransomware Attacks on American Companies",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.hsgac.senate.gov/media/minority-media/new-portman-report-demonstrates-threat-ransomware-presents-to-the-united-states",
            "date": "2022-03-24",
            "organization": "United States Senate",
            "author": "U.S. Senate Committee on Homeland Security & Governmental Affairs",
            "title": "New Portman Report Demonstrates Threat Ransomware Presents to the United States",
            "categories": [
                "REvil"
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
            "data_url": "https://documents.trendmicro.com/assets/rpt/rpt-navigating-new-frontiers-trend-micro-2021-annual-cybersecurity-report.pdf",
            "date": "2022-03-17",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "Navigating New Frontiers Trend Micro 2021 Annual Cybersecurity Report",
            "categories": [
                "REvil",
                "BazarBackdoor",
                "Buer",
                "IcedID",
                "QakBot",
                "REvil"
            ]
        },
        {
            "data_url": "https://redcanary.com/blog/uncompromised-kaseya/",
            "date": "2022-03-16",
            "organization": "Red Canary",
            "author": "Brian Donohue",
            "title": "Uncompromised: When REvil comes knocking",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.justice.gov/opa/pr/sodinokibirevil-ransomware-defendant-extradited-united-states-and-arraigned-texas",
            "date": "2022-03-09",
            "organization": "Department of Justice",
            "author": "Office of Public Affairs",
            "title": "Sodinokibi/REvil Ransomware Defendant Extradited to United States and Arraigned in Texas",
            "categories": [
                "REvil"
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
            "data_url": "https://www.darktrace.com/en/blog/staying-ahead-of-r-evils-ransomware-as-a-service-business-model/",
            "date": "2022-02-14",
            "organization": "Darktrace",
            "author": "Oakley Cox",
            "title": "Staying ahead of REvil\u2019s Ransomware-as-a-Service business model",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/docs/vmw-exposing-malware-in-linux-based-multi-cloud-environments.pdf",
            "date": "2022-02-09",
            "organization": "vmware",
            "author": "VMWare",
            "title": "Exposing Malware in Linux-Based Multi-Cloud Environments",
            "categories": [
                "ACBackdoor",
                "BlackMatter",
                "DarkSide",
                "Erebus",
                "HelloKitty",
                "Kinsing",
                "PLEAD",
                "QNAPCrypt",
                "RansomEXX",
                "REvil",
                "Sysrv-hello",
                "TeamTNT",
                "Vermilion Strike",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://analyst1.com/file-assets/History-of-REvil.pdf",
            "date": "2022-01-27",
            "organization": "ANALYST1",
            "author": "Jon DiMaggio",
            "title": "A History of Revil",
            "categories": [
                "REvil",
                "REvil"
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
            "data_url": "http://www.fsb.ru/fsb/press/message/single.htm%21id%3D10439388%40fsbMessage.html",
            "date": "2022-01-14",
            "organization": "FSB",
            "author": "FSB",
            "title": "Unlawful Activities of Members of an Organized Criminal Community were suppressed",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/storm-in-safe-haven-takeaways-from-russian-authorities-takedown-of-revil",
            "date": "2022-01-14",
            "organization": "Advanced Intelligence",
            "author": "Yelisey Boguslavskiy",
            "title": "Storm in \"Safe Haven\": Takeaways from Russian Authorities Takedown of REvil",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/ransomware-spotlight/ransomware-spotlight-revil",
            "date": "2021-12-20",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "Ransomware Spotlight: REvil",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=mDUMpYAOMOo",
            "date": "2021-12-20",
            "organization": "YouTube (Malienist)",
            "author": "Vishal Thakur",
            "title": "Revil Linux Ransomware: Revix",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://malienist.medium.com/revix-linux-ransomware-d736956150d0",
            "date": "2021-12-07",
            "organization": "",
            "author": "Vishal Thakur",
            "title": "Revix Linux Ransomware",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://angle.ankura.com/post/102hcny/revix-linux-ransomware",
            "date": "2021-12-02",
            "organization": "Ankura",
            "author": "Vishal Thakur",
            "title": "Revix Linux Ransomware",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bbc.com/news/technology-59297187",
            "date": "2021-11-17",
            "organization": "BBC",
            "author": "Joe Tidy",
            "title": "Evil Corp: 'My hunt for the world's most wanted hackers'",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.ironnet.com/blog/ransomware-graphic-blog",
            "date": "2021-11-16",
            "organization": "IronNet",
            "author": "IronNet Threat Research",
            "title": "How IronNet's Behavioral Analytics Detect REvil and Conti Ransomware",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "IcedID",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_in/research/21/k/global-operations-lead-to-arrests-of-alleged-members-of-gandcrab.html",
            "date": "2021-11-16",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "Global Operations Lead to Arrests of Alleged Members of GandCrab/REvil and Cl0p Cartels",
            "categories": [
                "REvil",
                "Clop",
                "Gandcrab",
                "REvil"
            ]
        },
        {
            "data_url": "https://russian.rt.com/russia/article/926347-barnaulec-rozysk-fbr-kibermoshennichestvo",
            "date": "2021-11-10",
            "organization": "RT on the Russian",
            "author": "Ekaterina Suslova",
            "title": "\"He does not get in touch\": what is known about Barnaul, wanted by the FBI on charges of cybercrime",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2021/11/revil-under-the-microscope",
            "date": "2021-11-10",
            "organization": "Blackberry",
            "author": "Codi Starks",
            "title": "REvil Under the Microscope",
            "categories": [
                "GootKit",
                "REvil"
            ]
        },
        {
            "data_url": "https://storage.courtlistener.com/recap/gov.uscourts.txnd.351760/gov.uscourts.txnd.351760.1.0_3.pdf",
            "date": "2021-11-08",
            "organization": "Department of Justice",
            "author": "Department of Justice",
            "title": "Indictment of Yaroslav Vasinskyi (REvil affiliate)",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2021/11/revil-ransom-arrest-6m-seizure-and-10m-reward/",
            "date": "2021-11-08",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "REvil Ransom Arrest, $6M Seizure, and $10M Reward",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://home.treasury.gov/news/press-releases/jy0471",
            "date": "2021-11-08",
            "organization": "U.S. Department of the Treasury",
            "author": "U.S. Department of the Treasury",
            "title": "Treasury Continues to Counter Ransomware as Part of Whole-of-Government Effort; Sanctions Ransomware Operators and Virtual Currency Exchange (Yaroslav Vasinskyi & Yevgeniy Polyanin)",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.justice.gov/opa/pr/ukrainian-arrested-and-charged-ransomware-attack-kaseya",
            "date": "2021-11-08",
            "organization": "Department of Justice",
            "author": "Department of Justice",
            "title": "Ukrainian Arrested and Charged with Ransomware Attack on Kaseya",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://therecord.media/us-arrests-and-charges-ukrainian-man-for-kaseya-ransomware-attack/",
            "date": "2021-11-08",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "US arrests and charges Ukrainian man for Kaseya ransomware attack",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://diicot.ro/mass-media/3341-comunicat-de-presa-2-08-11-2021",
            "date": "2021-11-08",
            "organization": "DIICOT (Romanian Directorate for Investigating Organized Crime and Terrorism)",
            "author": "DIICOT (Romanian Directorate for Investigating Organized Crime and Terrorism)",
            "title": "Press release 2 08.11.2021",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.europol.europa.eu/newsroom/news/five-affiliates-to-sodinokibi/revil-unplugged",
            "date": "2021-11-08",
            "organization": "Europol",
            "author": "Europol",
            "title": "Five Affiliates to Sodinokibi/REvil Unplugged",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.fincen.gov/sites/default/files/advisory/2021-11-08/FinCEN%20Ransomware%20Advisory_FINAL_508_.pdf",
            "date": "2021-11-08",
            "organization": "U.S. Department of the Treasury",
            "author": "U.S. Department of the Treasury",
            "title": "Advisory on Ransomware and the Use of the Financial  System to Facilitate Ransom Payments",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.fbi.gov/wanted/cyber/yevgyeniy-igoryevich-polyanin",
            "date": "2021-11-08",
            "organization": "FBI",
            "author": "FBI",
            "title": "WANTED poster for Yevhgyeniy Polyanin (REvil affiliate)",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://storage.courtlistener.com/recap/gov.uscourts.txnd.352371/gov.uscourts.txnd.352371.1.0_1.pdf",
            "date": "2021-11-08",
            "organization": "Department of Justice",
            "author": "Department of Justice",
            "title": "Indictment of Yevgeniy Polyanin, one off the REvil affliates",
            "categories": [
                "REvil",
                "REvil"
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
            "data_url": "https://www.br.de/nachrichten/deutschland-welt/mutmasslicher-ransomware-millionaer-identifiziert,Sn3iHgJ",
            "date": "2021-10-28",
            "organization": "BR.DE",
            "author": "Maximilian Zierer",
            "title": "Mutma\u00dflicher Ransomware-Million\u00e4r identifiziert",
            "categories": [
                "REvil",
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
            "data_url": "https://twitter.com/IntezerLabs/status/1452980772953071619",
            "date": "2021-10-26",
            "organization": "Intezer",
            "author": "Twitter (IntezerLabs)",
            "title": "Tweet on Linux version of REvil ransomware",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://ke-la.com/will-the-revils-story-finally-be-over/",
            "date": "2021-10-25",
            "organization": "KELA",
            "author": "Victoria Kivilevich",
            "title": "Will the REvil Story Finally be Over?",
            "categories": [
                "REvil",
                "REvil"
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
            "data_url": "https://www.darkowl.com/blog-content/page-not-found-revil-darknet-services-offline-after-attack-last-weekend",
            "date": "2021-10-22",
            "organization": "Darkowl",
            "author": "Darkowl",
            "title": "\u201cPage Not Found\u201d: REvil Darknet Services Offline After Attack Last Weekend",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.reuters.com/technology/exclusive-governments-turn-tables-ransomware-gang-revil-by-pushing-it-offline-2021-10-21/",
            "date": "2021-10-22",
            "organization": "Reuters",
            "author": "Joseph Menn",
            "title": "EXCLUSIVE Governments turn tables on ransomware gang REvil by pushing it offline",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.flashpoint-intel.com/blog/revil-disappears-again/",
            "date": "2021-10-18",
            "organization": "Flashpoint",
            "author": "Flashpoint",
            "title": "REvil Disappears Again: \u2018Something Is Rotten in the State of Ransomware\u2019",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/revil-ransomware-shuts-down-again-after-tor-sites-were-hijacked/",
            "date": "2021-10-17",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "REvil ransomware shuts down again after Tor sites were hijacked",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/big-game-hunting-on-the-rise-again-according-to-ecrime-index/",
            "date": "2021-10-12",
            "organization": "CrowdStrike",
            "author": "CrowdStrike Intelligence Team",
            "title": "ECX: Big Game Hunting on the Rise Following a Notable Reduction in Activity",
            "categories": [
                "Babuk",
                "BlackMatter",
                "DarkSide",
                "REvil",
                "Avaddon",
                "Babuk",
                "BlackMatter",
                "DarkSide",
                "LockBit",
                "Mailto",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.accenture.com/us-en/blogs/cyber-defense/moving-left-ransomware-boom",
            "date": "2021-10-11",
            "organization": "Accenture",
            "author": "Accenture Cyber Threat Intelligence",
            "title": "Moving Left of the Ransomware Boom",
            "categories": [
                "REvil",
                "Cobalt Strike",
                "MimiKatz",
                "RagnarLocker",
                "REvil"
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
            "data_url": "https://www.flashpoint-intel.com/blog/interview-with-revil-affiliated-ransomware-contractor/",
            "date": "2021-09-29",
            "organization": "Flashpoint",
            "author": "Flashpoint",
            "title": "Russian hacker Q&A: An Interview With REvil-Affiliated Ransomware Contractor",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.flashpoint-intel.com/blog/revils-cryptobackdoor-con-ransomware-groups-tactics-roil-affiliates-sparking-a-fallout/",
            "date": "2021-09-28",
            "organization": "Flashpoint",
            "author": "Flashpoint",
            "title": "REvil\u2019s \u201cCryptobackdoor\u201d Con: Ransomware Group\u2019s Tactics Roil Affiliates, Sparking a Fallout",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/revil-ransomware-devs-added-a-backdoor-to-cheat-affiliates/",
            "date": "2021-09-23",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "REVil ransomware devs added a backdoor to cheat affiliates",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/revil-ransomware-reemerges-after-shutdown-universal-decryptor-released",
            "date": "2021-09-22",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "REvil Ransomware Reemerges After Shutdown; Universal Decryptor Released",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.washingtonpost.com/national-security/ransomware-fbi-revil-decryption-key/2021/09/21/4a9417d0-f15f-11eb-a452-4da5fe48582d_story.html",
            "date": "2021-09-21",
            "organization": "Washington Post",
            "author": "Ellen Nakashima",
            "title": "FBI held back ransomware decryption key from businesses to run operation targeting hackers",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/how-big-game-hunting-ttps-shifted-after-darkside-pipeline-attack/",
            "date": "2021-09-14",
            "organization": "CrowdStrike",
            "author": "CrowdStrike Intelligence Team",
            "title": "Big Game Hunting TTPs Continue to Shift After DarkSide Pipeline Attack",
            "categories": [
                "BlackMatter",
                "DarkSide",
                "REvil",
                "Avaddon",
                "BlackMatter",
                "Clop",
                "Conti",
                "CryptoLocker",
                "DarkSide",
                "DoppelPaymer",
                "Hades",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/revil-ransomwares-servers-mysteriously-come-back-online/",
            "date": "2021-09-07",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "REvil ransomware's servers mysteriously come back online",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/sodinokibi-ransomware-incident-response-intelligence-together/",
            "date": "2021-09-03",
            "organization": "IBM",
            "author": "Camille Singleton",
            "title": "Dissecting Sodinokibi Ransomware Attacks: Bringing Incident Response and Intelligence Together in the Fight",
            "categories": [
                "Valak",
                "QakBot",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-embraces-big-game-hunting-part-1/",
            "date": "2021-08-30",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "CARBON SPIDER Embraces Big Game Hunting, Part 1",
            "categories": [
                "Bateleur",
                "Griffon",
                "Carbanak",
                "DarkSide",
                "JSSLoader",
                "PILLOWMINT",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/hypervisor-jackpotting-ecrime-actors-increase-targeting-of-esxi-servers/",
            "date": "2021-08-30",
            "organization": "CrowdStrike",
            "author": "Michael Dawson",
            "title": "Hypervisor Jackpotting, Part 2: eCrime Actors Increase Targeting of ESXi Servers with Ransomware",
            "categories": [
                "Babuk",
                "HelloKitty",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.goggleheadedhacker.com/blog/post/reversing-crypto-functions",
            "date": "2021-08-25",
            "organization": "GoggleHeadedHacker Blog",
            "author": "Jacob Pimental",
            "title": "Reverse Engineering Crypto Functions: RC4 and Salsa20",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://teamt5.org/tw/posts/revil-dll-sideloading-technique-used-by-other-hackers/",
            "date": "2021-08-20",
            "organization": "TEAMT5",
            "author": "TeamT5",
            "title": "See REvil again?! See how hackers use the same encryption ransomware program REvil to annihilate the attack evidence",
            "categories": [
                "REvil"
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
            "data_url": "https://www.bleepingcomputer.com/news/security/kaseyas-universal-revil-decryption-key-leaked-on-a-hacking-forum/",
            "date": "2021-08-11",
            "organization": "BleepingComputer",
            "author": "Lawrence Abrams",
            "title": "Kaseya's universal REvil decryption key leaked on a hacking forum",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.flashpoint-intel.com/blog/possible-universal-revil-master-key-posted-to-xss/",
            "date": "2021-08-10",
            "organization": "Flashpoint",
            "author": "Flashpoint",
            "title": "REvil Master Key for Kaseya Attack Posted to XSS",
            "categories": [
                "REvil"
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
            "data_url": "https://www.trendmicro.com/en_us/research/21/h/supply-chain-attacks-from-a-managed-detection-and-response-persp.html",
            "date": "2021-08-04",
            "organization": "Trend Micro",
            "author": "Ryan Maglaque",
            "title": "Supply Chain Attacks from a Managed Detection and Response Perspective",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://therecord.media/an-interview-with-blackmatter-a-new-ransomware-group-thats-learning-from-the-mistakes-of-darkside-and-revil/",
            "date": "2021-08-02",
            "organization": "The Record",
            "author": "Dmitry Smilyanets",
            "title": "An interview with BlackMatter: A new ransomware group that\u2019s learning from the mistakes of DarkSide and REvil",
            "categories": [
                "DarkSide",
                "LockBit",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/blackmatter-ransomware-gang-rises-from-the-ashes-of-darkside-revil/",
            "date": "2021-07-31",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "BlackMatter ransomware gang rises from the ashes of DarkSide, REvil",
            "categories": [
                "DarkSide",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.digitalshadows.com/blog-and-research/revil-analysis-of-competing-hypotheses/",
            "date": "2021-07-28",
            "organization": "Digital Shadows",
            "author": "Photon Research Team",
            "title": "REvil: Analysis of Competing Hypotheses",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/blackmatter-ransomware-successor-darkside-revil/",
            "date": "2021-07-27",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "BlackMatter Ransomware Emerges As Successor to DarkSide, REvil",
            "categories": [
                "DarkSide",
                "LockBit",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=tZVFMVm5GAk",
            "date": "2021-07-27",
            "organization": "Youtube (SANS Institute)",
            "author": "Katie Nickels",
            "title": "SANS Threat Analysis Rundown - Kaseya VSA attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/fwosar/status/1420119812815138824",
            "date": "2021-07-27",
            "organization": "Twitter (@fwosar)",
            "author": "Fabian Wosar",
            "title": "Tweet on new REvil variant",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.flashpoint-intel.com/blog/chatter-indicates-blackmatter-as-revil-successor/",
            "date": "2021-07-27",
            "organization": "Flashpoint",
            "author": "Flashpoint",
            "title": "Chatter Indicates BlackMatter as REvil Successor",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=P8o6GItci5w",
            "date": "2021-07-25",
            "organization": "Youtube (AhmedS Kasmani)",
            "author": "AhmedS Kasmani",
            "title": "Analysis of Malware from Kaseya/Revil Supply Chain attack.",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/kaseya-obtains-universal-decryptor-for-revil-ransomware-victims/",
            "date": "2021-07-22",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Kaseya obtains universal decryptor for REvil ransomware victims",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.huntress.com/blog/security-researchers-hunt-to-discover-origins-of-the-kaseya-vsa-mass-ransomware-incident",
            "date": "2021-07-20",
            "organization": "Huntress Labs",
            "author": "John Hammond",
            "title": "Security Researchers\u2019 Hunt to Discover Origins of the Kaseya VSA Mass Ransomware Incident",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.elliptic.co/blog/revil-revealed-tracking-ransomware-negotiation-and-payment",
            "date": "2021-07-19",
            "organization": "Elliptic",
            "author": "Elliptic",
            "title": "REvil Revealed - Tracking a Ransomware Negotiation and Payment",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=QYQQUUpU04s",
            "date": "2021-07-15",
            "organization": "YouTube ( DuMp-GuY TrIcKsTeR)",
            "author": "Ji\u0159\u00ed Vinopal",
            "title": "Fast API resolving of REvil Ransomware related to Kaseya attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/revil-vanishes-from-underground-infrastructure-down-support-staff-adverts-silent",
            "date": "2021-07-14",
            "organization": "Advanced Intelligence",
            "author": "Yelisey Boguslavskiy",
            "title": "REvil Vanishes From Underground - Infrastructure Down",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/revil-ransomware-gangs-web-sites-mysteriously-shut-down/",
            "date": "2021-07-13",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "REvil ransomware gang's web sites mysteriously shut down",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://threatpost.com/ransomware-revil-sites-disappears/167745/",
            "date": "2021-07-13",
            "organization": "Threat Post",
            "author": "Lisa Vaas",
            "title": "Ransomware Giant REvil\u2019s Sites Disappear",
            "categories": [
                "REvil",
                "REvil"
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
            "data_url": "https://www.cyjax.com/2021/07/09/revilevolution/",
            "date": "2021-07-09",
            "organization": "cyjax",
            "author": "william thomas",
            "title": "REvil-ution \u2013 A Persistent Ransomware Operation",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/SophosLabs/status/1413616952313004040?s=20",
            "date": "2021-07-09",
            "organization": "Twitter (@SophosLabs)",
            "author": "SophosLabs",
            "title": "Tweet on speed at which Kaseya REvil attack was conducted",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://blog.gigamon.com/2021/07/08/observations-and-recommendations-from-the-ongoing-revil-kaseya-incident/",
            "date": "2021-07-08",
            "organization": "Gigamon",
            "author": "Joe Slowik",
            "title": "Observations and Recommendations from the Ongoing REvil-Kaseya Incident",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://ke-la.com/ransomware-gangs-are-starting-to-look-like-oceans-11/",
            "date": "2021-07-08",
            "organization": "KELA",
            "author": "Victoria Kivilevich",
            "title": "Ransomware Gangs are Starting to Look Like Ocean\u2019s 11",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://f.hubspotusercontent10.net/hubfs/7095517/FLINT-Kaseya-Another%20Massive%20Heist%20by%20REvil.pdf",
            "date": "2021-07-08",
            "organization": "Sekoia",
            "author": "sekoia",
            "title": "Kaseya: Another Massive Heist by REvil",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.netskope.com/blog/netskope-threat-coverage-revil",
            "date": "2021-07-07",
            "organization": "Netskope",
            "author": "Gustavo Palazolo",
            "title": "Netskope Threat Coverage: REvil",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/how-crowdstrike-stops-revil-ransomware-from-kaseya-attack/",
            "date": "2021-07-07",
            "organization": "CrowdStrike",
            "author": "Karan Sood",
            "title": "How CrowdStrike Falcon Stops REvil Ransomware Used in the Kaseya Attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/diving-deeper-into-the-kaseya-vsa-attack-revil-returns-and-other-hackers-are-riding-their-coattails/",
            "date": "2021-07-07",
            "organization": "Trustwave",
            "author": "Rodel Mendrez",
            "title": "Diving Deeper Into the Kaseya VSA Attack: REvil Returns and Other Hackers Are Riding Their Coattails",
            "categories": [
                "Cobalt Strike",
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/resecurity_com/status/1412662343796813827",
            "date": "2021-07-07",
            "organization": "Twitter (@resecurity_com)",
            "author": "Resecurity",
            "title": "Tweet REvil attack chain used against Kaseya",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.elastic.co/blog/elastic-security-prevents-100-percent-of-revil-ransomware-samples?utm_content=&utm_medium=social&utm_source=twitter",
            "date": "2021-07-07",
            "organization": "Elastic",
            "author": "Jamie Butler",
            "title": "Elastic Security prevents 100% of REvil ransomware samples",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/revil-threat-actors/",
            "date": "2021-07-06",
            "organization": "paloalto Networks Unit 42",
            "author": "John Martineau",
            "title": "Understanding REvil: The Ransomware Gang Behind the Kaseya Attack",
            "categories": [
                "Gandcrab",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/cybereason-vs-revil-ransomware-the-kaseya-chronicles",
            "date": "2021-07-06",
            "organization": "Cybereason",
            "author": "Tom Fakterman",
            "title": "Cybereason vs. REvil Ransomware: The Kaseya Chronicles",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/revil-ransomware-threat-research-update-and-detections.html",
            "date": "2021-07-06",
            "organization": "splunk",
            "author": "Splunk Threat Research Team",
            "title": "REvil Ransomware Threat Research Update and Detections",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/kaseya-supply-chain-ransomware-attack-technical-analysis-revil-payload",
            "date": "2021-07-06",
            "organization": "Zscaler",
            "author": "Zscaler",
            "title": "Kaseya Supply Chain Ransomware Attack - Technical Analysis of the REvil Payload",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://blog.truesec.com/2021/07/06/kaseya-vsa-zero-day-exploit",
            "date": "2021-07-06",
            "organization": "TRUESEC",
            "author": "Alexander Andersson",
            "title": "How the Kaseya VSA Zero Day Exploit Worked",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/_alex_il_/status/1412403420217159694",
            "date": "2021-07-06",
            "organization": "Twitter (@_alex_il_)",
            "author": "Alex Ilgayev",
            "title": "Tweet on REvil ransomware actor using vulnerable defender executable in its infection flow in early may before Kaseya attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/the-evolution-of-revil-ransomware-and-pinchy-spider/",
            "date": "2021-07-06",
            "organization": "CrowdStrike",
            "author": "Adam Meyers",
            "title": "The Evolution of PINCHY SPIDER from GandCrab to REvil",
            "categories": [
                "Gandcrab",
                "REvil"
            ]
        },
        {
            "data_url": "https://github.com/f0wl/REconfig-linux",
            "date": "2021-07-05",
            "organization": "Github (f0wl)",
            "author": "Marius Genheimer",
            "title": "REvil Linux Configuration Extractor",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/kaseya-sera-what-revil-shall-encrypt-shall-encrypt.html",
            "date": "2021-07-05",
            "organization": "splunk",
            "author": "Ryan Kovar",
            "title": "Kaseya, Sera. What REvil Shall Encrypt, Shall Encrypt",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/real-time-prevention-of-the-kaseya-vsa-supply-chain-revil-ransomware-attack",
            "date": "2021-07-05",
            "organization": "Morphisec",
            "author": "Morphisec",
            "title": "Real-Time Prevention of the Kaseya VSA Supply Chain REvil Ransomware Attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/SophosLabs/status/1412056467201462276",
            "date": "2021-07-05",
            "organization": "Twitter (@SophosLabs)",
            "author": "SophosLabs",
            "title": "Tweet with a REvil ransomware execution demo",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://drive.google.com/file/d/1ph1E0onZ7TiNyG87k4WjofCKNuCafMLk/view",
            "date": "2021-07-05",
            "organization": "S2W LAB Inc.",
            "author": "S2W LAB INTELLIGENCE TEAM",
            "title": "Kaseya supply chain attack delivers mass ransomware",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://securelist.com/revil-ransomware-attack-on-msp-companies/103075/",
            "date": "2021-07-05",
            "organization": "Kaspersky",
            "author": "Kaspersky",
            "title": "REvil ransomware attack against MSPs and its clients around the world",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/R3MRUM/status/1412064882623713283",
            "date": "2021-07-05",
            "organization": "Twitter (@R3MRUM)",
            "author": "R3MRUM",
            "title": "Twitter thread with additional context on C2 domains found in REvil configuration",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/current-activity/2021/07/04/cisa-fbi-guidance-msps-and-their-customers-affected-kaseya-vsa",
            "date": "2021-07-04",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "CISA-FBI Guidance for MSPs and their Customers Affected by the Kaseya VSA Supply-Chain Ransomware Attack",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://blog.truesec.com/2021/07/04/kaseya-supply-chain-attack-targeting-msps-to-deliver-revil-ransomware/",
            "date": "2021-07-04",
            "organization": "TRUESEC",
            "author": "Fabio Viggiani",
            "title": "Kaseya supply chain attack targeting MSPs to deliver REvil ransomware",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/svch0st/status/1411537562380816384",
            "date": "2021-07-04",
            "organization": "Twitter (@svch0st)",
            "author": "Zach",
            "title": "Tweet on  #Kaseya detection tool for detecting REvil",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2021/07/04/independence-day-revil-uses-supply-chain-exploit-to-attack-hundreds-of-businesses",
            "date": "2021-07-04",
            "organization": "Sophos",
            "author": "Mark Loman",
            "title": "Independence Day: REvil uses supply chain exploit to attack hundreds of businesses",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/fwosar/status/1411281334870368260",
            "date": "2021-07-03",
            "organization": "Twitter (@fwosar)",
            "author": "Fabian Wosar",
            "title": "Twitter thread on REvil's cryptographic scheme",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/LloydLabs/status/1411098844209819648",
            "date": "2021-07-03",
            "organization": "Twitter (@LloydLabs)",
            "author": "Lloyd",
            "title": "Twitter Thread on Revil sideloading DLL used in Kaseya attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://doublepulsar.com/kaseya-supply-chain-attack-delivers-mass-ransomware-event-to-us-companies-76e4ec6ec64b",
            "date": "2021-07-03",
            "organization": "Medium Doublepulsar",
            "author": "Kevin Beaumont",
            "title": "Kaseya supply chain attack delivers mass ransomware event to US companies",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/kaseya-ransomware-supply-chain",
            "date": "2021-07-03",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Kaseya Ransomware Supply Chain Attack: What You Need To Know",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.kaseya.com/potential-attack-on-kaseya-vsa/",
            "date": "2021-07-03",
            "organization": "Kaseya",
            "author": "Kaseya",
            "title": "Updates Regarding VSA Security Incident",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://kaseya.app.box.com/s/0ysvgss7w48nxh8k1xt7fqhbcjxhas40",
            "date": "2021-07-03",
            "organization": "Kaseya",
            "author": "Kaseya",
            "title": "Kaseya VSA Detection Tool",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://cybleinc.com/2021/07/03/uncensored-interview-with-revil-sodinokibi-ransomware-operators/",
            "date": "2021-07-03",
            "organization": "Cybleinc",
            "author": "cybleinc",
            "title": "Uncensored Interview with REvil / Sodinokibi Ransomware Operators",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/threat-brief-kaseya-vsa-ransomware-attacks/",
            "date": "2021-07-03",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Threat Brief: Kaseya VSA Ransomware Attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://gist.githubusercontent.com/fwosar/a63e1249bfccb8395b961d3d780c0354/raw/312b2bbc566cbee2dac7b143dc143c1913ddb729/revil.json",
            "date": "2021-07-02",
            "organization": "Github (fwosar)",
            "author": "Fabian Wosar",
            "title": "REvil configuration dump used in Kaseya attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/SyscallE/status/1411074271875670022",
            "date": "2021-07-02",
            "organization": "Twitter (@SyscallE)",
            "author": "SeAccessCheck",
            "title": "Tweet on Revil dropper used in Kaseya attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://velzart.nl/blog/ransomeware/",
            "date": "2021-07-02",
            "organization": "Velzart",
            "author": "Niels den Hild",
            "title": "Ransomware attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.reddit.com/r/msp/comments/ocggbv/crticial_ransomware_incident_in_progress/",
            "date": "2021-07-02",
            "organization": "Huntress Labs",
            "author": "Huntress Labs",
            "title": "Crticial Ransomware Incident in Progress",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/revil-ransomware-hits-1-000-plus-companies-in-msp-supply-chain-attack/",
            "date": "2021-07-02",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "REvil ransomware hits 1,000+ companies in MSP supply-chain attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/VK_Intel/status/1411066870350942213",
            "date": "2021-07-02",
            "organization": "Twitter (@VK_intel)",
            "author": "Vitali Kremez",
            "title": "Tweet on Revil ransomware analysis used in Kaseya attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://therecord.media/revil-ransomware-executes-supply-chain-attack-via-malicious-kaseya-update/",
            "date": "2021-07-02",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "REvil ransomware gang executes supply chain attack via malicious Kaseya update",
            "categories": [
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
            "data_url": "https://cybersecurity.att.com/blogs/labs-research/revils-new-linux-version",
            "date": "2021-07-01",
            "organization": "AT&T Cybersecurity",
            "author": "Ofer Caspi",
            "title": "REvil\u2019s new Linux version",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://threatpost.com/linux-variant-ransomware-vmwares-nas/167511/",
            "date": "2021-07-01",
            "organization": "Threatpost",
            "author": "Tom Spring",
            "title": "Linux Variant of REvil Ransomware Targets VMware\u2019s ESXi, NAS Devices",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2021/06/30/mtr-in-real-time-hand-to-hand-combat-with-revil-ransomware-chasing-a-2-5-million-pay-day/",
            "date": "2021-06-30",
            "organization": "Sophos",
            "author": "Tilly Travers",
            "title": "MTR in Real Time: Hand-to-hand combat with REvil ransomware chasing a $2.5 million pay day",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2021/06/30/what-to-expect-when-youve-been-hit-with-revil-ransomware/",
            "date": "2021-06-30",
            "organization": "Sophos SecOps",
            "author": "Tilly Travers",
            "title": "What to expect when you\u2019ve been hit with REvil ransomware",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://blog.group-ib.com/REvil_RaaS",
            "date": "2021-06-30",
            "organization": "Group-IB",
            "author": "Oleg Skulkin",
            "title": "REvil Twins Deep Dive into Prolific RaaS Affiliates' TTPs",
            "categories": [
                "Cobalt Strike",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/adversarial-perspective-advintel-breach-avoidance-through-monitoring-initial-vulnerabilities",
            "date": "2021-06-30",
            "organization": "Advanced Intelligence",
            "author": "Yelisey Boguslavskiy",
            "title": "Ransomware-&-CVE: Industry Insights Into Exclusive High-Value Target Adversarial Datasets",
            "categories": [
                "BlackKingdom Ransomware",
                "Clop",
                "dearcry",
                "Hades",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=ptbNMlWxYnE",
            "date": "2021-06-29",
            "organization": "YouTube (C. Beek)",
            "author": "Christiaan Beek",
            "title": "Demo of REvil/Sodinokibi Linux variant encrypting a Linux system",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/VK_Intel/status/1409601311092490248?s=20",
            "date": "2021-06-29",
            "organization": "Twitter (@VK_intel)",
            "author": "Vitali Kremez",
            "title": "Tweet on Linux version of REvil ransomware",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://otx.alienvault.com/pulse/60da2c80aa5400db8f1561d5",
            "date": "2021-06-28",
            "organization": "AT&T",
            "author": "AlienVault",
            "title": "REvil ransomware Linux version (with YARA rule)",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/VK_Intel/status/1409601311092490248",
            "date": "2021-06-28",
            "organization": "Twitter (@VK_intel)",
            "author": "Vitali Kremez",
            "title": "Tweet on ELF version of REvil",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/AdamTheAnalyst/status/1409499591452639242?s=20",
            "date": "2021-06-28",
            "organization": "Twitter (@AdamTheAnalyst)",
            "author": "AdamTheAnalyst",
            "title": "Tweet on suspected REvil exfiltration (over RClone FTP) server",
            "categories": [
                "REvil",
                "REvil"
            ]
        },
        {
            "data_url": "https://medium.com/s2wlab/deep-analysis-of-revil-ransomware-written-in-korean-d1899c0e9317",
            "date": "2021-06-23",
            "organization": "Medium s2wlab",
            "author": "Sojun Ryu",
            "title": "Deep analysis of REvil Ransomware",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/lv-ransomware",
            "date": "2021-06-22",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "LV Ransomware",
            "categories": [
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
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/ransomware-double-extortion-and-beyond-revil-clop-and-conti",
            "date": "2021-06-15",
            "organization": "Trend Micro",
            "author": "Janus Agcaoili",
            "title": "Ransomware Double Extortion and Beyond: REvil, Clop, and Conti",
            "categories": [
                "Clop",
                "Conti",
                "REvil"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2021/06/11/relentless-revil-revealed/",
            "date": "2021-06-11",
            "organization": "SophosLabs Uncut",
            "author": "Andrew Brandt",
            "title": "Relentless REvil, revealed: RaaS as variable as the criminals who use it",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.huntandhackett.com/blog/revil-the-usage-of-legitimate-remote-admin-tooling",
            "date": "2021-06-10",
            "organization": "HUNT & HACKETT",
            "author": "Krijn de Mik",
            "title": "REvil: the usage of legitimate remote admin tooling",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/prometheus-ransomware/",
            "date": "2021-06-09",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Doel Santos",
            "title": "Prometheus Ransomware Gang: A Group of REvil?",
            "categories": [
                "Hakbit",
                "Prometheus",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/from-qbot-with-revil-ransomware-initial-attack-exposure-of-jbs",
            "date": "2021-06-08",
            "organization": "Advanced Intelligence",
            "author": "Vitali Kremez",
            "title": "From QBot...with REvil Ransomware: Initial Attack Exposure of JBS",
            "categories": [
                "QakBot",
                "REvil"
            ]
        },
        {
            "data_url": "https://teamt5.org/en/posts/introducing-the-most-profitable-ransomware-revil/",
            "date": "2021-06-02",
            "organization": "TEAMT5",
            "author": "TeamT5",
            "title": "Introducing The Most Profitable Ransomware REvil",
            "categories": [
                "Gandcrab",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/how-to-defend-against-conti-darkside-revil-and-other-ransomware/",
            "date": "2021-06-02",
            "organization": "CrowdStrike",
            "author": "Josh Dalman",
            "title": "Under Attack: Protecting Against Conti, DarkSide, REvil and Other Ransomware",
            "categories": [
                "DarkSide",
                "Conti",
                "DarkSide",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/fbi-revil-cybergang-behind-the-jbs-ransomware-attack/",
            "date": "2021-06-02",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "FBI: REvil cybergang behind the JBS ransomware attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/Jacob_Pimental/status/1398356030489251842?s=20",
            "date": "2021-05-28",
            "organization": "Twitter (@Jacob_Pimental)",
            "author": "Jacob Pimental",
            "title": "Tweet on REvil ver 2.07",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://medium.com/s2wlab/w4-may-en-story-of-the-week-ransomware-on-the-darkweb-5f5b8d4c3b6f",
            "date": "2021-05-25",
            "organization": "Medium s2wlab",
            "author": "Hyunmin Suh",
            "title": "W4 May | EN | Story of the week: Ransomware on the Darkweb",
            "categories": [
                "Babuk",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/how-falcon-complete-thwarted-a-revil-ransomware-attack/",
            "date": "2021-05-20",
            "organization": "CrowdStrike",
            "author": "joshua fraser",
            "title": "Response When Minutes Matter: When Good Tools Are Used for (R)Evil",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.digitalshadows.com/blog-and-research/ransomware-as-a-service-rogue-affiliates-and-whats-next/",
            "date": "2021-05-20",
            "organization": "Digital Shadows",
            "author": "Stefano De Blasi",
            "title": "Ransomware-as-a-Service, Rogue Affiliates, and What\u2019s Next",
            "categories": [
                "DarkSide",
                "DarkSide",
                "REvil"
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
            "data_url": "https://therecord.media/darkside-ransomware-gang-says-it-lost-control-of-its-servers-money-a-day-after-biden-threat/",
            "date": "2021-05-14",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Darkside ransomware gang says it lost control of its servers & money a day after Biden threat",
            "categories": [
                "DarkSide",
                "Avaddon",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/popular-russian-hacking-forum-xss-bans-all-ransomware-topics/",
            "date": "2021-05-13",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Popular Russian hacking forum XSS bans all ransomware topics",
            "categories": [
                "DarkSide",
                "DarkSide",
                "LockBit",
                "REvil"
            ]
        },
        {
            "data_url": "https://securelist.com/ransomware-world-in-2021/102169/",
            "date": "2021-05-12",
            "organization": "Kaspersky",
            "author": "Dmitry Galov",
            "title": "Ransomware world in 2021: who, how and why",
            "categories": [
                "Babuk",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.flashpoint-intel.com/blog/darkside-ransomware-links-to-revil-difficult-to-dismiss/",
            "date": "2021-05-11",
            "organization": "Flashpoint",
            "author": "Flashpoint",
            "title": "DarkSide Ransomware Links to REvil Group Difficult to Dismiss",
            "categories": [
                "DarkSide",
                "REvil"
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
            "data_url": "https://twitter.com/Jacob_Pimental/status/1391055792774729728",
            "date": "2021-05-08",
            "organization": "Twitter (@Jacob_Pimental)",
            "author": "Jacob Pimental",
            "title": "Tweet on CyberChef recipe to extract Revil Ransomware configuration",
            "categories": [
                "REvil"
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
            "data_url": "https://blogs.blackberry.com/en/2021/05/threat-thursday-dr-revil-ransomware-strikes-again-employs-double-extortion-tactics",
            "date": "2021-05-06",
            "organization": "Blackberry",
            "author": "BlackBerry Research and Intelligence team",
            "title": "Threat Thursday: Dr. REvil Ransomware Strikes Again, Employs Double Extortion Tactics",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.goggleheadedhacker.com/blog/post/sodinokibi-ransomware-analysis",
            "date": "2021-05-02",
            "organization": "GoggleHeadedHacker Blog",
            "author": "Jacob Pimental",
            "title": "Sodinokibi Ransomware Analysis",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/sodinokibi-revil-ransomware-disrupt-trade-secrets/",
            "date": "2021-04-28",
            "organization": "IBM",
            "author": "Limor Kessem",
            "title": "The Sodinokibi Chronicles: A (R)Evil Cybercrime Gang Disrupts Organizations for Trade Secrets and Cash",
            "categories": [
                "REvil"
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
            "data_url": "https://vulnerability.ch/2021/04/ransomware-and-date-leak-site-publication-time-analysis/",
            "date": "2021-04-25",
            "organization": "Vulnerability.ch Blog",
            "author": "Corsin Camichel",
            "title": "Ransomware and Data Leak Site Publication Time Analysis",
            "categories": [
                "Avaddon",
                "Babuk",
                "Clop",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Mespinoza",
                "Nefilim",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.cnbc.com/2021/04/23/axis-of-revil-inside-the-hacker-collective-taunting-apple.html",
            "date": "2021-04-23",
            "organization": "CNBC",
            "author": "Eamon Javers",
            "title": "Axis of REvil: What we know about the hacker collective taunting Apple",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/revil-gang-tries-to-extort-apple-threatens-to-sell-stolen-blueprints/",
            "date": "2021-04-20",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "REvil gang tries to extort Apple, threatens to sell stolen blueprints",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/03/29/sodinokibi-aka-revil-ransomware/",
            "date": "2021-03-29",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Sodinokibi (aka REvil) Ransomware",
            "categories": [
                "Cobalt Strike",
                "IcedID",
                "REvil"
            ]
        },
        {
            "data_url": "https://twitter.com/VK_Intel/status/1374571480370061312?s=20",
            "date": "2021-03-24",
            "organization": "Twitter (@VK_intel)",
            "author": "Vitali Kremez",
            "title": "Tweet on REvil ransomware",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2021/03/ctir-trends-winter-2020-21.html",
            "date": "2021-03-24",
            "organization": "Cisco",
            "author": "David Liebenberg",
            "title": "Quarterly Report: Incident Response trends from Winter 2020-21",
            "categories": [
                "Egregor",
                "REvil",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/revil-ransomware-has-a-new-windows-safe-mode-encryption-mode/",
            "date": "2021-03-19",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "REvil ransomware has a new \u2018Windows Safe Mode\u2019 encryption mode",
            "categories": [
                "REvil"
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
            "data_url": "https://therecord.media/i-scrounged-through-the-trash-heaps-now-im-a-millionaire-an-interview-with-revils-unknown/",
            "date": "2021-03-16",
            "organization": "The Record",
            "author": "Dmitry Smilyanets",
            "title": "\u2018I scrounged through the trash heaps\u2026 now I\u2019m a millionaire:\u2019 An interview with REvil\u2019s Unknown",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.flashpoint-intel.com/blog/cl0p-and-revil-escalate-their-ransomware-tactics/",
            "date": "2021-03-11",
            "organization": "Flashpoint",
            "author": "Flashpoint",
            "title": "CL0P and REvil Escalate Their Ransomware Tactics",
            "categories": [
                "Clop",
                "REvil"
            ]
        },
        {
            "data_url": "https://searchsecurity.techtarget.com/feature/Ransomware-negotiations-An-inside-look-at-the-process",
            "date": "2021-03",
            "organization": "Techtarget",
            "author": "Rob Wright",
            "title": "Ransomware negotiations: An inside look at the process",
            "categories": [
                "REvil"
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
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-sprite-spider-target-esxi-servers-with-ransomware/?utm_campaign=blog&utm_medium=soc&utm_source=twtr&utm_content=sprout",
            "date": "2021-02-26",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "Hypervisor Jackpotting: CARBON SPIDER and SPRITE SPIDER Target ESXi Servers With Ransomware to Maximize Impact",
            "categories": [
                "DarkSide",
                "RansomEXX",
                "Griffon",
                "Carbanak",
                "Cobalt Strike",
                "DarkSide",
                "IcedID",
                "MimiKatz",
                "PyXie",
                "RansomEXX",
                "REvil"
            ]
        },
        {
            "data_url": "https://ibm.ent.box.com/s/hs5pcayhbbhjvj8di5sqdpbbd88tsh89",
            "date": "2021-02-24",
            "organization": "IBM",
            "author": "IBM SECURITY X-FORCE",
            "title": "X-Force Threat Intelligence Index 2021",
            "categories": [
                "Emotet",
                "QakBot",
                "Ramnit",
                "REvil",
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
            "data_url": "https://asec.ahnlab.com/ko/19860/",
            "date": "2021-02-01",
            "organization": "AhnLab",
            "author": "ASEC Analysis Team",
            "title": "BlueCrab ransomware, CobaltStrike hacking tool installed in corporate environment",
            "categories": [
                "Cobalt Strike",
                "REvil"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/ko/19640/",
            "date": "2021-01-28",
            "organization": "AhnLab",
            "author": "ASEC Analysis Team",
            "title": "BlueCrab ransomware constantly trying to bypass detection",
            "categories": [
                "Cobalt Strike",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/a/sodinokibi-ransomware.html",
            "date": "2021-01-26",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "Examining a Sodinokibi Attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/diary/27012",
            "date": "2021-01-21",
            "organization": "InfoSec Handlers Diary Blog",
            "author": "Xavier Mertens",
            "title": "Powershell Dropping a REvil Ransomware",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://ke-la.com/darknet-threat-actors-are-not-playing-games-with-the-gaming-industry/",
            "date": "2021-01-04",
            "organization": "KELA",
            "author": "Almog Zoosman",
            "title": "Darknet Threat Actors Are Not Playing Games with the Gaming Industry",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.acronis.com/en-sg/articles/sodinokibi-ransomware/",
            "date": "2021",
            "organization": "Acronis",
            "author": "Ravikant Tiwari",
            "title": "Taking Deep Dive into Sodinokibi Ransomware",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/gold-southfield",
            "date": "2021",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "Threat Profile: GOLD SOUTHFIELD",
            "categories": [
                "REvil",
                "GOLD SOUTHFIELD"
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
            "data_url": "https://f.hubspotusercontent10.net/hubfs/5943619/Whitepaper-Downloads/Ransomware_in_ICS_Environments_Whitepaper_10_12_20.pdf",
            "date": "2020-12-16",
            "organization": "Dragos",
            "author": "Selena Larson",
            "title": "Assessing Ransomware and Extortion Activities Impacting Industrial Organizations: Ransomware in ICS Environments",
            "categories": [
                "REvil"
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
            "data_url": "https://i.blackhat.com/eu-20/Wednesday/eu-20-Clarke-Its-Not-FINished-The-Evolving-Maturity-In-Ransomware-Operations-wp.pdf",
            "date": "2020-12-09",
            "organization": "FireEye",
            "author": "Mitchell Clarke",
            "title": "It's not FINished The Evolving Maturity in  Ransomware Operations (SLIDES)",
            "categories": [
                "Cobalt Strike",
                "DoppelPaymer",
                "QakBot",
                "REvil"
            ]
        },
        {
            "data_url": "https://ke-la.com/easy-way-in-5-ransomware-victims-had-their-pulse-secure-vpn-credentials-leaked/",
            "date": "2020-12-03",
            "organization": "KELA",
            "author": "Victoria Kivilevich",
            "title": "Easy Way In? 5 Ransomware Victims Had Their Pulse Secure VPN Credentials Leaked",
            "categories": [
                "REvil"
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
            "data_url": "https://i.blackhat.com/eu-20/Wednesday/eu-20-Clarke-Its-Not-FINished-The-Evolving-Maturity-In-Ransomware-Operations.pdf",
            "date": "2020-11-30",
            "organization": "FireEye",
            "author": "Mitchell Clarke",
            "title": "It's not FINished The Evolving Maturity in  Ransomware Operations",
            "categories": [
                "Cobalt Strike",
                "DoppelPaymer",
                "MimiKatz",
                "QakBot",
                "REvil"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2020/11/german-users-targeted-with-gootkit-banker-or-revil-ransomware/",
            "date": "2020-11-30",
            "organization": "Malwarebytes",
            "author": "hasherezade",
            "title": "German users targeted with Gootkit banker or REvil ransomware",
            "categories": [
                "GootKit",
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
            "data_url": "https://www.bleepingcomputer.com/news/security/revil-ransomware-hits-managedcom-hosting-provider-500k-ransom/",
            "date": "2020-11-18",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "REvil ransomware hits Managed.com hosting provider, 500K ransom",
            "categories": [
                "REvil"
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
            "data_url": "https://awakesecurity.com/blog/threat-hunting-for-revil-ransomware/",
            "date": "2020-11-10",
            "organization": "AP News",
            "author": "Ashish Gahlot",
            "title": "Threat Hunting for REvil Ransomware",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/revil-ransomware-gang-acquires-kpot-malware/",
            "date": "2020-11-04",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "REvil ransomware gang 'acquires' KPOT malware",
            "categories": [
                "KPOT Stealer",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/revil-ransomware-gang-claims-over-100-million-profit-in-a-year/",
            "date": "2020-10-29",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "REvil ransomware gang claims over $100 million profit in a year",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://public.intel471.com/blog/revil-ransomware-interview-russian-osint-100-million/",
            "date": "2020-10-28",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Alleged REvil member spills details on group\u2019s ransomware operations",
            "categories": [
                "REvil"
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
            "data_url": "https://community.riskiq.com/article/3315064b",
            "date": "2020-08-21",
            "organization": "RiskIQ",
            "author": "Steve Ginty",
            "title": "Pinchy Spider: Ransomware Infrastructure Connected to Dark Web Marketplace",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://vimeo.com/449849549",
            "date": "2020-08-21",
            "organization": "Vimeo (RiskIQ)",
            "author": "Josh Burgess",
            "title": "The Evolution of Ransomware & Pinchy Spider's Shot at the Title",
            "categories": [
                "Gandcrab",
                "REvil"
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
            "data_url": "https://www.domaintools.com/resources/blog/revealing-revil-ransomware-with-domaintools-and-maltego",
            "date": "2020-08-20",
            "organization": "DomainTools",
            "author": "Chad Anderson",
            "title": "Revealing REvil Ransomware With DomainTools and Maltego",
            "categories": [
                "REvil"
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
            "data_url": "https://threatintel.blog/OPBlueRaven-Part1/",
            "date": "2020-07-31",
            "organization": "PRODAFT Threat Intelligence",
            "author": "PRODAFT",
            "title": "OpBlueRaven: Unveiling Fin7/Carbanak - Part 1 : Tirion",
            "categories": [
                "Carbanak",
                "REvil",
                "FIN7"
            ]
        },
        {
            "data_url": "https://blog.amossys.fr/sodinokibi-malware-analysis.html",
            "date": "2020-07-29",
            "organization": "AmosSys",
            "author": "Nicolas Guillois",
            "title": "Sodinokibi / REvil Malware Analysis",
            "categories": [
                "REvil"
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
            "data_url": "https://tehtris.com/fr/peut-on-neutraliser-un-ransomware-lance-en-tant-que-system-sur-des-milliers-de-machines-en-meme-temps/",
            "date": "2020-07-22",
            "organization": "TEHTRIS",
            "author": "TEHTRIS",
            "title": "Peut-on neutraliser un ransomware lanc\u00e9 en tant que SYSTEM sur des milliers de machines en m\u00eame temps?",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/inside-revil-extortionist-machine-predictive-insights",
            "date": "2020-07-15",
            "organization": "Advanced Intelligence",
            "author": "Yelisey Boguslavskiy",
            "title": "Inside REvil Extortionist \u201cMachine\u201d: Predictive Insights",
            "categories": [
                "Gandcrab",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/the-dark-web-of-intrigue-how-revil-used-the-underground-ecosystem-to-form-an-extortion-cartel",
            "date": "2020-07-10",
            "organization": "Advanced Intelligence",
            "author": "Advanced Intelligence",
            "title": "The Dark Web of Intrigue: How REvil Used the Underground Ecosystem to Form an Extortion Cartel",
            "categories": [
                "Gandcrab",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.appgate.com/blog/electric-company-ransomware-attack-calls-for-14-million-in-ransom",
            "date": "2020-06-30",
            "organization": "AppGate",
            "author": "The Immunity Team",
            "title": "Electric Company Ransomware Attack Calls for $14 Million in Ransom",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/sodinokibi-ransomware-cobalt-strike-pos",
            "date": "2020-06-23",
            "organization": "Symantec",
            "author": "Critical Attack Discovery and Intelligence Team",
            "title": "Sodinokibi: Ransomware Attackers also Scanning for PoS Software, Leveraging Cobalt Strike",
            "categories": [
                "Cobalt Strike",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.pandasecurity.com/emailhtml/2007-CAM-RANSOMWARE-AD360-WG/2006-Report-Sodinokibi-EN.pdf",
            "date": "2020-06-19",
            "organization": "Panda Security",
            "author": "Jorge Barelles Menes",
            "title": "Sodinokibi Malware report",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/revil-ransomware-gang-launches-auction-site-to-sell-stolen-data/",
            "date": "2020-06-02",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "REvil ransomware gang launches auction site to sell stolen data",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://areteir.com/wp-content/uploads/2020/07/Arete_Insight_Sodino-Ransomware_June-2020.pdf",
            "date": "2020-06",
            "organization": "Arete",
            "author": "Arete Incident Response",
            "title": "Sodinokibi / REvil Ransomware attacks against the Education Sector",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.databreaches.net/a-former-darkside-listing-shows-up-on-revils-leak-site/",
            "date": "2020-05-26",
            "organization": "DataBreaches.net",
            "author": "Dissent",
            "title": "A former DarkSide listing shows up on REvil\u2019s leak site",
            "categories": [
                "DarkSide",
                "REvil"
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
            "data_url": "https://intel471.com/blog/changes-in-revil-ransomware-version-2-2",
            "date": "2020-05-04",
            "organization": "Intel 471",
            "author": "Intel 471 Malware Intelligence team",
            "title": "Changes in REvil ransomware version 2.2",
            "categories": [
                "REvil"
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
            "data_url": "https://www.bleepingcomputer.com/news/security/sodinokibi-ransomware-to-stop-taking-bitcoin-to-hide-money-trail/",
            "date": "2020-04-11",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Sodinokibi Ransomware to stop taking Bitcoin to hide money trail",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.grahamcluley.com/travelex-paid-ransom/",
            "date": "2020-04-09",
            "organization": "Graham Cluley Blog",
            "author": "Graham Cluley",
            "title": "Travelex paid hackers $2.3 million worth of Bitcoin after ransomware attack",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://blog.intel471.com/2020/03/31/revil-ransomware-as-a-service-an-analysis-of-a-ransomware-affiliate-operation/",
            "date": "2020-03-31",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "REvil Ransomware-as-a-Service \u2013 An analysis of a ransomware affiliate operation",
            "categories": [
                "Gandcrab",
                "REvil"
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
            "data_url": "https://www.bleepingcomputer.com/news/security/ransomware-threatens-to-reveal-companys-dirty-secrets/",
            "date": "2020-03-07",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Ransomware Threatens to Reveal Company's 'Dirty' Secrets",
            "categories": [
                "REvil"
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
            "data_url": "https://securityaffairs.co/wordpress/98694/malware/sodinokibi-kenneth-cole-data-breach.html",
            "date": "2020-02-29",
            "organization": "Security Affairs",
            "author": "Pierluigi Paganini",
            "title": "Sodinokibi Ransomware gang threatens to disclose data from Kenneth Cole fashion firm",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/sodinokibi-ransomware-may-tip-nasdaq-on-attacks-to-hurt-stock-prices/",
            "date": "2020-02-26",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Sodinokibi Ransomware May Tip NASDAQ on Attacks to Hurt Stock Prices",
            "categories": [
                "REvil"
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
            "data_url": "https://blag.nullteilerfrei.de/2020/02/02/defeating-sodinokibi-revil-string-obfuscation-in-ghidra/",
            "date": "2020-02-02",
            "organization": "Nullteilerfrei Blog",
            "author": "Lars Wallenborn",
            "title": "Defeating Sodinokibi/REvil String-Obfuscation in Ghidra",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.digitalshadows.com/blog-and-research/competitions-on-russian-language-cybercriminal-forums-sharing-expertise-or-threat-actor-showboating/",
            "date": "2020-01-30",
            "organization": "Digital Shadows",
            "author": "Photon Research Team",
            "title": "Competitions on Russian-language cybercriminal forums: Sharing expertise or threat actor showboating?",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://medium.com/@underthebreach/tracking-down-revils-lalartu-by-utilizing-multiple-osint-methods-2bf3a6c65a80",
            "date": "2020-01-30",
            "organization": "Under The Breach",
            "author": "Under The Breach",
            "title": "Tracking Down REvil\u2019s \u201cLalartu\u201d by utilizing multiple OSINT methods",
            "categories": [
                "REvil"
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
            "data_url": "https://www.kpn.com/security-blogs/Tracking-REvil.htm",
            "date": "2020-01-28",
            "organization": "KPN",
            "author": "KPN",
            "title": "Tracking REvil",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=l2P5CMH9TE0",
            "date": "2020-01-26",
            "organization": "Youtube (OALabs)",
            "author": "Sergei Frankoff",
            "title": "IDA Pro Automated String Decryption For REvil Ransomware",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/sodinokibi-ransomware-threatens-to-publish-data-of-automotive-group/",
            "date": "2020-01-23",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "Sodinokibi Ransomware Threatens to Publish Data of Automotive Group",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/new-jersey-synagogue-suffers-sodinokibi-ransomware-attack/",
            "date": "2020-01-18",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "New Jersey Synagogue Suffers Sodinokibi Ransomware Attack",
            "categories": [
                "REvil"
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
            "data_url": "https://www.bleepingcomputer.com/news/security/sodinokibi-ransomware-publishes-stolen-data-for-the-first-time/",
            "date": "2020-01-11",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Sodinokibi Ransomware Publishes Stolen Data for the First Time",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/sodinokibi-ransomware-hits-new-york-airport-systems/",
            "date": "2020-01-10",
            "organization": "BleepingComputer",
            "author": "Sergiu Gatlan",
            "title": "Sodinokibi Ransomware Hits New York Airport Systems",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/sodinokibi-ransomware-says-travelex-will-pay-one-way-or-another/",
            "date": "2020-01-09",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Sodinokibi Ransomware Says Travelex Will Pay, One Way or Another",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/sodinokibi-ransomware-hits-travelex-demands-3-million/",
            "date": "2020-01-06",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "Sodinokibi Ransomware Hits Travelex, Demands $3 Million",
            "categories": [
                "REvil"
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
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-southfield",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD SOUTHFIELD",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/undressing-the-revil/",
            "date": "2019-12-20",
            "organization": "Trustwave",
            "author": "Rodel Mendrez",
            "title": "Undressing the REvil",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://hatching.io/blog/ransomware-part2",
            "date": "2019-12-18",
            "organization": "Hatching.io",
            "author": "Pete Cowman",
            "title": "Understanding Ransomware Series: Detecting Sodin",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/another-ransomware-will-now-publish-victims-data-if-not-paid/",
            "date": "2019-12-12",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Another Ransomware Will Now Publish Victims' Data If Not Paid",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.elastic.co/blog/ransomware-interrupted-sodinokibi-and-the-supply-chain",
            "date": "2019-12-04",
            "organization": "Elastic",
            "author": "David French",
            "title": "Ransomware, interrupted: Sodinokibi and the supply chain",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://blag.nullteilerfrei.de/2019/11/09/api-hashing-why-and-how/",
            "date": "2019-11-09",
            "organization": "",
            "author": "Lars Wallenborn",
            "title": "API-Hashing in the Sodinokibi/Revil Ransomware - Why and How?",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://securingtomorrow.mcafee.com/other-blogs/mcafee-labs/mcafee-atr-analyzes-sodinokibi-aka-revil-ransomware-as-a-service-crescendo/",
            "date": "2019-10-20",
            "organization": "McAfee",
            "author": "Jessica Saavedra-Morales",
            "title": "McAfee ATR Analyzes Sodinokibi aka REvil Ransomware-as-a-Service \u2013 Crescendo",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://securingtomorrow.mcafee.com/other-blogs/mcafee-labs/mcafee-atr-analyzes-sodinokibi-aka-revil-ransomware-as-a-service-what-the-code-tells-us/",
            "date": "2019-10-02",
            "organization": "McAfee",
            "author": "McAfee Labs",
            "title": "McAfee ATR Analyzes Sodinokibi aka REvil Ransomware-as-a-Service \u2013 What The Code Tells Us",
            "categories": [
                "Gandcrab",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/revil-the-gandcrab-connection",
            "date": "2019-09-24",
            "organization": "Secureworks",
            "author": "CTU Research Team",
            "title": "REvil: The GandCrab Connection",
            "categories": [
                "REvil",
                "GOLD SOUTHFIELD"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/revil-sodinokibi-ransomware",
            "date": "2019-09-24",
            "organization": "Secureworks",
            "author": "CTU Research Team",
            "title": "REvil/Sodinokibi Ransomware",
            "categories": [
                "REvil",
                "GOLD SOUTHFIELD"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/a-look-inside-the-highly-profitable-sodinokibi-ransomware-business/",
            "date": "2019-08-30",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "A Look Inside the Highly Profitable Sodinokibi Ransomware Business",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.nytimes.com/2019/08/22/us/ransomware-attacks-hacking.html",
            "date": "2019-08-23",
            "organization": "The New York Times",
            "author": "Manny Fernandez",
            "title": "Ransomware Attacks Are Testing Resolve of Cities Across America",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://dissectingmalwa.re/germanwipers-big-brother-gandgrabs-kid-sodinokibi.html",
            "date": "2019-08-10",
            "organization": "Dissecting Malware",
            "author": "Marius Genheimer",
            "title": "GermanWiper's big Brother? GandGrab's kid ? Sodinokibi!",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2019/07/is-revil-the-new-gandcrab-ransomware/",
            "date": "2019-07-15",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Is \u2018REvil\u2019 the New GandCrab Ransomware?",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://securelist.com/sodin-ransomware/91473/",
            "date": "2019-07-03",
            "organization": "Kaspersky Labs",
            "author": "Orkhan Mamedov",
            "title": "Sodin ransomware exploits Windows vulnerability and processor architecture",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.tgsoft.it/english/news_archivio_eng.asp?id=1004",
            "date": "2019-06-24",
            "organization": "VirIT",
            "author": "Gianfranco Tonello",
            "title": "Ransomware REvil - Sodinokibi: Technical analysis and Threat Intelligence Report",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.certego.net/en/news/malware-tales-sodinokibi/",
            "date": "2019-06-14",
            "organization": "Certego",
            "author": "Matteo Lodi",
            "title": "Malware Tales: Sodinokibi",
            "categories": [
                "REvil"
            ]
        },
        {
            "data_url": "https://www.boll.ch/datasheets/WG_Threat_Report_EN.pdf",
            "date": "2019-05",
            "organization": "WatchGuard",
            "author": "WatchGuard",
            "title": "Internet Security Report",
            "categories": [
                "REvil",
                "RobinHood"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2019/04/sodinokibi-ransomware-exploits-weblogic.html",
            "date": "2019-04-30",
            "organization": "Cisco Talos",
            "author": "Pierre Cadieux",
            "title": "Sodinokibi ransomware exploits WebLogic Server vulnerability",
            "categories": [
                "REvil"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "revil",
            "procedure_code": "s0496",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0496",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1189",
                    "technique_link": "https://attack.mitre.org/techniques/T1189",
                    "technique_name": "drive-by compromise",
                    "technique_description": "adversaries may gain access to a system through a user visiting a website over the normal course of browsing. with this technique, the user's web browser is typically targeted for exploitation, but adversaries may also use compromised websites for non-exploitation behavior such as acquiring application access token.",
                    "procedure_description": "revil has infected victim machines through compromised websites and exploit kits.[43][44][45][46]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/001",
                    "technique_name": "phishing : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. spearphishing attachment is a specific variant of spearphishing. spearphishing attachment is different from other forms of spearphishing in that it employs the use of malware attached to an email. all forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. in this scenario, adversaries attach a file to the spearphishing email and usually rely upon user execution to gain execution. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "revil has been distributed via malicious e-mail attachments including ms word documents.[191][192][193][194][195]"
                },
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
                    "procedure_description": "revil has used powershell to delete volume shadow copies and download files.[199][200][201][202]"
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
                    "procedure_description": "revil can use the windows command line to delete volume shadow copies and disable recovery.[282][283][284][285]"
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
                    "procedure_description": "revil has used obfuscated vba macros for execution.[134][135]"
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
                    "procedure_description": "revil can use native api for execution and to retrieve active services.[145][146]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/002",
                    "technique_name": "user execution : malicious file",
                    "technique_description": "an adversary may rely upon a user opening a malicious file in order to gain execution. users may be subjected to social engineering to get them to open a file that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing attachment. adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, and .cpl.",
                    "procedure_description": "revil has been executed via malicious ms word e-mail attachments.[201][202][203]"
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
                    "procedure_description": "revil can use wmi to monitor for and kill specific processes listed in its configuration file.[110][111]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/001",
                    "technique_name": "access token manipulation : token impersonation/theft",
                    "technique_description": "adversaries may duplicate then impersonate another user's existing token to escalate privileges and bypass access controls. for example, an adversary can duplicate an existing token using duplicatetoken or duplicatetokenex. the token can then be used with impersonateloggedonuser to allow the calling thread to impersonate a logged on user's security context, or with setthreadtoken to assign the impersonated token to a thread.",
                    "procedure_description": "revil can obtain the token from the user that launched the explorer.exe process to avoid affecting the desktop of the system user.[11]"
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
                    "procedure_description": "revil can launch an instance of itself with administrative rights using runas.[12]"
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
                    "procedure_description": "revil can inject itself into running processes on a compromised host.[52]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/001",
                    "technique_name": "access token manipulation : token impersonation/theft",
                    "technique_description": "adversaries may duplicate then impersonate another user's existing token to escalate privileges and bypass access controls. for example, an adversary can duplicate an existing token using duplicatetoken or duplicatetokenex. the token can then be used with impersonateloggedonuser to allow the calling thread to impersonate a logged on user's security context, or with setthreadtoken to assign the impersonated token to a thread.",
                    "procedure_description": "revil can obtain the token from the user that launched the explorer.exe process to avoid affecting the desktop of the system user.[11]"
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
                    "procedure_description": "revil can launch an instance of itself with administrative rights using runas.[12]"
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
                    "procedure_description": "revil can decode encrypted strings to enable execution of commands and payloads.[191][192][193][194][195][196]"
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
                    "procedure_description": "revil can connect to and disable the symantec server on the victim's network.[75]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/009",
                    "technique_name": "impair defenses : safe mode boot",
                    "technique_description": "adversaries may abuse windows safe mode to disable endpoint defenses. safe mode starts up the windows operating system with a limited set of drivers and services. third-party security software such as endpoint detection and response (edr) tools may not start after booting windows in safe mode. there are two versions of safe mode: safe mode and safe mode with networking. it is possible to start additional services after a safe mode boot.",
                    "procedure_description": "revil can force a reboot in safe mode with networking.[6]"
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
                    "procedure_description": "revil can mark its binary code for deletion after reboot.[201]"
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
                    "procedure_description": "revil can mimic the names of known executables.[141]"
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
                    "procedure_description": "revil can modify the registry to save encryption parameters and system information.[133][134][135][136][137]"
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
                    "procedure_description": "revil has used encrypted strings and configuration files.[273][274][275][276][277][278][279]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/011",
                    "technique_name": "obfuscated files or information : fileless storage",
                    "technique_description": "adversaries may store data in \"fileless\" formats to conceal malicious activity from defenses. fileless storage can be broadly defined as any format other than a file. common examples of non-volatile fileless storage include the windows registry, event logs, or wmi repository.",
                    "procedure_description": "revil can save encryption parameters and system information in the registry.[23][24][25][26][27]"
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
                    "procedure_description": "revil can inject itself into running processes on a compromised host.[52]"
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
                    "procedure_description": "revil has the ability to identify specific files and directories that are not to be encrypted.[253][254][255][256][257][258]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/002",
                    "technique_name": "permission groups discovery : domain groups",
                    "technique_description": "adversaries may attempt to find domain-level groups and permission settings. the knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as domain administrators.",
                    "procedure_description": "revil can identify the domain membership of a compromised host.[25][26][27]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1012",
                    "technique_link": "https://attack.mitre.org/techniques/T1012",
                    "technique_name": "query registry",
                    "technique_description": "adversaries may interact with the windows registry to gather information about the system, configuration, and installed software.",
                    "procedure_description": "revil can query the registry to get random file extensions to append to encrypted files.[78]"
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
                    "procedure_description": "revil can identify the username, machine name, system language, keyboard layout, os version, and system drive information on a compromised host.[303][304][305][306][306][307][308][309]"
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
                    "procedure_description": "revil can check the system language using getuserdefaultuilanguage and getsystemdefaultuilanguage. if the language is found in the list, the process terminates.[19]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1007",
                    "technique_link": "https://attack.mitre.org/techniques/T1007",
                    "technique_name": "system service discovery",
                    "technique_description": "adversaries may try to gather information about registered local system services. adversaries may obtain information about services using tools as well as os utility commands such as sc query, tasklist /svc, systemctl --type=service, and net start.",
                    "procedure_description": "revil can enumerate active services.[45]"
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
                    "procedure_description": "revil has used http and https in communication with c2.[280][281][282][283][284]"
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
                    "procedure_description": "revil has encrypted c2 communications with the ecies algorithm.[45]"
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
                    "procedure_description": "revil can download a copy of itself from an attacker controlled ip address to the victim machine.[382][383][384]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1041",
                    "technique_link": "https://attack.mitre.org/techniques/T1041",
                    "technique_name": "exfiltration over c2 channel",
                    "technique_description": "adversaries may steal data by exfiltrating it over an existing command and control channel. stolen data is encoded into the normal communications channel using the same protocol as command and control communications.",
                    "procedure_description": "revil can exfiltrate host and malware information to c2 servers.[107]"
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
                    "procedure_description": "revil has the capability to destroy files and folders.[26][27][28][28][29][30][31]"
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
                    "procedure_description": "revil can encrypt files on victim systems and demands a ransom to decrypt the files.[69][70][71][72][73][74][75][76]"
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
                    "procedure_description": "revil can use vssadmin to delete volume shadow copies and bcdedit to disable recovery features.[47][48][49][50][51][52][53][54][55]"
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
                    "procedure_description": "revil has the capability to stop services and kill processes.[34][35]"
                }
            ]
        }
    ]
};