var threatdata = {
    "name": "RemcosRAT",
    "alias": "RemcosRAT, Remcos, Remvio, Socmer",
    "category": "Tools",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2023-10-27",
    "all_data": {
        "tool": "RemcosRAT",
        "names": [
            {
                "name": "RemcosRAT"
            },
            {
                "name": "Remcos"
            },
            {
                "name": "Remvio"
            },
            {
                "name": "Socmer"
            }
        ],
        "description": "Remcos is a closed-source tool that is marketed as a remote control and surveillance software by a company called Breaking Security. Remcos has been observed being used in malware campaigns.",
        "category": "Tools",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/analysis-new-remcos-rat-arrives-via-phishing-email/",
            "https://www.riskiq.com/blog/labs/spear-phishing-turkish-defense-contractors/",
            "https://researchcenter.paloaltonetworks.com/2018/08/unit42-gorgon-group-slithering-nation-state-cybercrime/",
            "http://malware-traffic-analysis.net/2017/12/22/index.html",
            "https://blog.fortinet.com/2017/02/14/remcos-a-new-rat-in-the-wild-2",
            "https://krabsonsecurity.com/2018/03/02/analysing-remcos-rats-executable/",
            "https://myonlinesecurity.co.uk/fake-order-spoofed-from-finchers-ltd-sankyo-rubber-delivers-remcos-rat-via-ace-attachments/",
            "https://blog.talosintelligence.com/2018/08/picking-apart-remcos.html",
            "https://secrary.com/ReversingMalware/RemcosRAT/",
            "https://blog.malwarebytes.com/threat-analysis/2021/07/remcos-rat-delivered-via-visual-basic/",
            "https://blog.morphisec.com/remcos-trojan-analyzing-attack-chain",
            "https://www.fortinet.com/blog/threat-research/latest-remcos-rat-phishing",
            "https://therecord.media/remcos-spyware-ukraine-government-agencies-uac0050/",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/peeling-back-the-layers-of-remcosrat-malware/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0332/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.remcos"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:RemcosRAT"
        ],
        "uuid": "2463414b-7294-4e18-9b34-276292047462",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "remcosrat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://embee-research.ghost.io/decoding-a-remcos-loader-script-visual-basic-deobfuscation/",
            "date": "2023-10-27",
            "organization": "Twitter (@embee_research)",
            "author": "Embee_research",
            "title": "Remcos Downloader Analysis - Manual Deobfuscation of Visual Basic and Powershell",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://info.spamhaus.com/hubfs/Botnet%20Reports/2023%20Q3%20Botnet%20Threat%20Update.pdf",
            "date": "2023-10-12",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Spamhaus Botnet Threat Update Q3 2023",
            "categories": [
                "FluBot",
                "AsyncRAT",
                "Ave Maria",
                "Cobalt Strike",
                "DCRat",
                "Havoc",
                "IcedID",
                "ISFB",
                "Nanocore RAT",
                "NjRAT",
                "QakBot",
                "Quasar RAT",
                "RecordBreaker",
                "RedLine Stealer",
                "Remcos",
                "Rhadamanthys",
                "Sliver",
                "Stealc",
                "Tofsee",
                "Vidar"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2023/unveiling-the-shadows-the-dark-alliance-between-guloader-and-remcos/",
            "date": "2023-09-19",
            "organization": "Checkpoint",
            "author": "Alexey  Bukhteyev",
            "title": "Unveiling the Shadows: The Dark Alliance between GuLoader and Remcos",
            "categories": [
                "CloudEyE",
                "Remcos"
            ]
        },
        {
            "data_url": "https://info.spamhaus.com/hubfs/Botnet%20Reports/2023%20Q2%20Botnet%20Threat%20Update.pdf",
            "date": "2023-07-11",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Spamhaus Botnet Threat Update Q2 2023",
            "categories": [
                "Hydra",
                "AsyncRAT",
                "Aurora Stealer",
                "Ave Maria",
                "BumbleBee",
                "Cobalt Strike",
                "DCRat",
                "Havoc",
                "IcedID",
                "ISFB",
                "NjRAT",
                "QakBot",
                "Quasar RAT",
                "RecordBreaker",
                "RedLine Stealer",
                "Remcos",
                "Rhadamanthys",
                "Sliver",
                "Tofsee"
            ]
        },
        {
            "data_url": "https://gi7w0rm.medium.com/cloudeye-from-lnk-to-shellcode-4b5f1d6d877",
            "date": "2023-07-08",
            "organization": "",
            "author": "Gi7w0rm",
            "title": "CloudEyE \u2014 From .lnk to Shellcode",
            "categories": [
                "CloudEyE",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.jaiminton.com/reverse-engineering/remcos#",
            "date": "2023-05-16",
            "organization": "CyberRaiju",
            "author": "Jai Minton",
            "title": "Remcos RAT - Malware Analysis Lab",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/en-us/security/blog/2023/04/13/threat-actors-strive-to-cause-tax-day-headaches/",
            "date": "2023-04-13",
            "organization": "Microsoft",
            "author": "Microsoft Threat Intelligence",
            "title": "Threat actors strive to cause Tax Day headaches",
            "categories": [
                "CloudEyE",
                "Remcos"
            ]
        },
        {
            "data_url": "https://info.spamhaus.com/hubfs/Botnet%20Reports/2023%20Q1%20Botnet%20Threat%20Update.pdf",
            "date": "2023-04-12",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Spamhaus Botnet Threat Update Q1 2023",
            "categories": [
                "FluBot",
                "Amadey",
                "AsyncRAT",
                "Aurora",
                "Ave Maria",
                "BumbleBee",
                "Cobalt Strike",
                "DCRat",
                "Emotet",
                "IcedID",
                "ISFB",
                "NjRAT",
                "QakBot",
                "RecordBreaker",
                "RedLine Stealer",
                "Remcos",
                "Rhadamanthys",
                "Sliver",
                "Tofsee",
                "Vidar"
            ]
        },
        {
            "data_url": "https://blog.checkpoint.com/security/march-2023s-most-wanted-malware-new-emotet-campaign-bypasses-microsoft-blocks-to-distribute-malicious-onenote-files/",
            "date": "2023-04-10",
            "organization": "Check Point",
            "author": "Check Point",
            "title": "March 2023\u2019s Most Wanted Malware: New Emotet Campaign Bypasses Microsoft Blocks to Distribute Malicious OneNote Files",
            "categories": [
                "Agent Tesla",
                "CloudEyE",
                "Emotet",
                "Formbook",
                "Nanocore RAT",
                "NjRAT",
                "QakBot",
                "Remcos",
                "Tofsee"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/dbatloader-actively-distributing-malwares-targeting-european-businesses",
            "date": "2023-03-27",
            "organization": "Zscaler",
            "author": "Meghraj Nandanwar",
            "title": "DBatLoader: Actively Distributing Malwares Targeting European Businesses",
            "categories": [
                "DBatLoader",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/ipfs-a-new-data-frontier-or-a-new-cybercriminal-hideout",
            "date": "2023-03-16",
            "organization": "Trend Micro",
            "author": "Cedric Pernet",
            "title": "IPFS: A New Data Frontier or a New Cybercriminal Hideout?",
            "categories": [
                "Agent Tesla",
                "Formbook",
                "RedLine Stealer",
                "Remcos"
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
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/research/cyberattacks-targeting-ukraine-increase.html",
            "date": "2023-01-24",
            "organization": "Trellix",
            "author": "Daksh Kapur",
            "title": "Cyberattacks Targeting Ukraine Increase 20-fold at End of 2022 Fueled by Russia-linked Gamaredon Activity",
            "categories": [
                "Andromeda",
                "Formbook",
                "Houdini",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.malwarebytes.com/blog/threat-intelligence/2022/20221121-threat-intel-report-final.pdf",
            "date": "2022-11-21",
            "organization": "Malwarebytes",
            "author": "Malwarebytes",
            "title": "2022-11-21 Threat Intel Report",
            "categories": [
                "404 Keylogger",
                "Agent Tesla",
                "Formbook",
                "Hive",
                "Remcos"
            ]
        },
        {
            "data_url": "https://info.spamhaus.com/hubfs/Botnet%20Reports/2022%20Q3%20Botnet%20Threat%20Update.pdf",
            "date": "2022-10-13",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Spamhaus Botnet Threat Update Q3 2022",
            "categories": [
                "FluBot",
                "Arkei Stealer",
                "AsyncRAT",
                "Ave Maria",
                "BumbleBee",
                "Cobalt Strike",
                "DCRat",
                "Dridex",
                "Emotet",
                "Loki Password Stealer (PWS)",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "QakBot",
                "RecordBreaker",
                "RedLine Stealer",
                "Remcos",
                "Socelars",
                "Tofsee",
                "Vjw0rm"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/nft-malware-new-evasion-abilities",
            "date": "2022-09-22",
            "organization": "Morphisec",
            "author": "Morphisec Labs",
            "title": "Watch Out For The New NFT-001",
            "categories": [
                "Eternity Stealer",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.socinvestigation.com/remcos-rat-new-ttps-detection-response/",
            "date": "2022-08-29",
            "organization": "Soc Investigation",
            "author": "BalaGanesh",
            "title": "Remcos RAT New TTPS - Detection & Response",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://perception-point.io/behind-the-attack-remcos-rat/",
            "date": "2022-08-21",
            "organization": "Perception Point",
            "author": "Igal Lytzki",
            "title": "Behind the Attack: Remcos RAT",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.connectwise.com/resources/formbook-remcos-rat",
            "date": "2022-08-04",
            "organization": "ConnectWise",
            "author": "Stu Gonzalez",
            "title": "Formbook and Remcos Backdoor RAT by ConnectWise CRU",
            "categories": [
                "Formbook",
                "Remcos"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2022/07/20/ooda-x-ops-takes-on-burgeoning-sql-server-attacks/",
            "date": "2022-07-20",
            "organization": "Sophos",
            "author": "Colin Cowie",
            "title": "OODA: X-Ops Takes On Burgeoning SQL Server Attacks",
            "categories": [
                "Maoloa",
                "Remcos",
                "TargetCompany"
            ]
        },
        {
            "data_url": "https://muha2xmad.github.io/mal-document/remcosdoc/",
            "date": "2022-05-05",
            "organization": "Github (muha2xmad)",
            "author": "Muhammad Hasan Ali",
            "title": "Analysis of MS Word to drop Remcos RAT | VBA extraction and analysis | IoCs",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://threatresearch.ext.hp.com/malware-campaigns-targeting-african-banking-sector/",
            "date": "2022-04-12",
            "organization": "HP",
            "author": "Patrick Schl\u00e4pfer",
            "title": "Malware Campaigns Targeting African Banking Sector",
            "categories": [
                "CloudEyE",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/latest-remcos-rat-phishing",
            "date": "2022-04-06",
            "organization": "Fortinet",
            "author": "Xiaopeng Zhang",
            "title": "The Latest Remcos RAT Driven By Phishing Campaign",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/remcos-trojan-analyzing-attack-chain",
            "date": "2022-03-30",
            "organization": "Morphisec",
            "author": "Hido Cohen",
            "title": "New Wave Of Remcos RAT Phishing Campaign",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/cyber-attackers-leverage-russia-ukraine-conflict-in-multiple-spam-campaigns",
            "date": "2022-03-25",
            "organization": "Trustwave",
            "author": "Trustwave SpiderLabs",
            "title": "Cyber Attackers Leverage Russia-Ukraine Conflict in Multiple Spam Campaigns",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/32376/",
            "date": "2022-03-07",
            "organization": "ASEC",
            "author": "ASEC",
            "title": "Distribution of Remcos RAT Disguised as Tax Invoice",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.bitdefender.com/blog/hotforsecurity/bitdefender-labs-sees-increased-malicious-and-scam-activity-exploiting-the-war-in-ukraine",
            "date": "2022-03-04",
            "organization": "Bitdefender",
            "author": "Alina Bizga",
            "title": "Bitdefender Labs Sees Increased Malicious and Scam Activity Exploiting the War in Ukraine",
            "categories": [
                "Agent Tesla",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/russia-ukraine-war-exploited-as-lure-for-malware-distribution/",
            "date": "2022-03-04",
            "organization": "Bleeping Computer",
            "author": "Bill Toulas",
            "title": "Russia-Ukraine war exploited as lure for malware distribution",
            "categories": [
                "Agent Tesla",
                "Remcos"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/ko/32101/",
            "date": "2022-02-28",
            "organization": "ASEC",
            "author": "ASEC",
            "title": "Remcos RAT malware disseminated by pretending to be tax invoices",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/forums/diary/Remcos+RAT+Delivered+Through+Double+Compressed+Archive/28354/",
            "date": "2022-02-18",
            "organization": "SANS ISC",
            "author": "Xavier Mertens",
            "title": "Remcos RAT Delivered Through Double Compressed Archive",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/hubfs/Journey%20of%20a%20Crypto%20Scammer%20-%20NFT-001%20%7C%20Morphisec%20%7C%20Threat%20Report.pdf",
            "date": "2022-02-14",
            "organization": "Morphisec",
            "author": "Hido Cohen",
            "title": "Journey of a Crypto Scammer - NFT-001",
            "categories": [
                "AsyncRAT",
                "BitRAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/privateloader-malware",
            "date": "2022-02-08",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "PrivateLoader: The first step in many malware schemes",
            "categories": [
                "Dridex",
                "Kronos",
                "LockBit",
                "Nanocore RAT",
                "NjRAT",
                "PrivateLoader",
                "Quasar RAT",
                "RedLine Stealer",
                "Remcos",
                "SmokeLoader",
                "STOP",
                "Tofsee",
                "TrickBot",
                "Vidar"
            ]
        },
        {
            "data_url": "https://github.com/itaymigdal/malware-analysis-writeups/blob/main/Remcos/Remcos.md",
            "date": "2022-02-08",
            "organization": "",
            "author": "Itay Migdal",
            "title": "Remcos Analysis",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.esentire.com/blog/remcos-rat",
            "date": "2022-01-28",
            "organization": "eSentire",
            "author": "eSentire Threat Response Unit (TRU)",
            "title": "Remcos RAT",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://muha2xmad.github.io/unpacking/remcos/",
            "date": "2022-01-13",
            "organization": "muha2xmad",
            "author": "Muhammad Hasan Ali",
            "title": "Unpacking Remcos malware",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/detecting-malware-script-loaders-using-remcos-threat-research-release-december-2021.html",
            "date": "2022-01-10",
            "organization": "splunk",
            "author": "Splunk Threat Research Team",
            "title": "Detecting Malware Script Loaders using Remcos: Threat Research Release December 2021",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://medium.com/@amgedwageh/analysis-of-an-autoit-script-that-wraps-a-remcos-rat-6b5b66075b87",
            "date": "2022-01-02",
            "organization": "Medium amgedwageh",
            "author": "Amged Wageh",
            "title": "Automating The Analysis Of An AutoIT Script That Wraps A Remcos RAT",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/k/campaign-abusing-rats-uses-fake-websites.html",
            "date": "2021-11-29",
            "organization": "Trend Micro",
            "author": "Jarom\u00edr Ho\u0159ej\u0161\u00ed",
            "title": "Campaign Abusing Legitimate Remote Administrator Tools Uses Fake Cryptocurrency Websites",
            "categories": [
                "AsyncRAT",
                "Azorult",
                "Nanocore RAT",
                "NjRAT",
                "RedLine Stealer",
                "Remcos"
            ]
        },
        {
            "data_url": "https://threatresearch.ext.hp.com/javascript-malware-dispensing-rats-into-the-wild/",
            "date": "2021-11-23",
            "organization": "HP",
            "author": "Patrick Schl\u00e4pfer",
            "title": "RATDispenser: Stealthy JavaScript Loader Dispensing RATs into the Wild",
            "categories": [
                "AdWind",
                "Ratty",
                "STRRAT",
                "CloudEyE",
                "Formbook",
                "Houdini",
                "Panda Stealer",
                "Remcos"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/the-babadeda-crypter-targeting-crypto-nft-defi-communities",
            "date": "2021-11-23",
            "organization": "Morphisec",
            "author": "Hido Cohen",
            "title": "Babadeda Crypter targeting crypto, NFT, and DeFi communities",
            "categories": [
                "Babadeda",
                "BitRAT",
                "LockBit",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/fin7-tools-resurface-in-the-field-splinter-or-copycat.html",
            "date": "2021-11-11",
            "organization": "splunk",
            "author": "Splunk Threat Research Team",
            "title": "FIN7 Tools Resurface in the Field \u2013 Splinter or Copycat?",
            "categories": [
                "JSSLoader",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/new-threat-actor-spoofs-philippine-government-covid-19-health-data-widespread",
            "date": "2021-10-27",
            "organization": "Proofpoint",
            "author": "Selena Larson",
            "title": "New Threat Actor Spoofs Philippine Government, COVID-19 Health Data in Widespread RAT Campaigns",
            "categories": [
                "Nanocore RAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2021/10/06/moon-hack-fake-safemoon-cryptocurrency-app-drops-malware-spy/",
            "date": "2021-10-06",
            "organization": "ESET Research",
            "author": "Martina L\u00f3pez",
            "title": "To the moon and hack: Fake SafeMoon app drops malware to spy on you",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://threatresearch.ext.hp.com/wp-content/uploads/2021/10/HP-Wolf-Security-Threat-Insights-Report-Q3-2021.pdf",
            "date": "2021-10",
            "organization": "HP",
            "author": "HP Wolf Security",
            "title": "Threat Insights  Report Q3 - 2021",
            "categories": [
                "STRRAT",
                "CloudEyE",
                "NetWire RC",
                "Remcos",
                "TrickBot",
                "Vjw0rm"
            ]
        },
        {
            "data_url": "https://www.telsy.com/download/4832/",
            "date": "2021-09-15",
            "organization": "Telsy",
            "author": "Telsy",
            "title": "REMCOS and Agent Tesla loaded into memory with Rezer0 loader",
            "categories": [
                "Agent Tesla",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/21/i/apt-c-36-updates-its-long-term-spam-campaign-against-south-american-entities-with-commodity-rats/BlindEagleIOCList.txt",
            "date": "2021-09-13",
            "organization": "Trend Micro",
            "author": "Jarom\u00edr Ho\u0159ej\u0161\u00ed",
            "title": "APT-C-36 Updates Its Spam Campaign Against South American Entities With Commodity RATs (IOCs)",
            "categories": [
                "AsyncRAT",
                "Ave Maria",
                "BitRAT",
                "Imminent Monitor RAT",
                "LimeRAT",
                "NjRAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/i/apt-c-36-updates-its-long-term-spam-campaign-against-south-ameri.html",
            "date": "2021-09-13",
            "organization": "Trend Micro",
            "author": "Jarom\u00edr Ho\u0159ej\u0161\u00ed",
            "title": "APT-C-36 Updates Its Spam Campaign Against South American Entities With Commodity RATs",
            "categories": [
                "AsyncRAT",
                "Ave Maria",
                "BitRAT",
                "Imminent Monitor RAT",
                "LimeRAT",
                "NjRAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/ko/25837/",
            "date": "2021-08-04",
            "organization": "ASEC",
            "author": "ASEC",
            "title": "S/W Download Camouflage, Spreading Various Kinds of Malware",
            "categories": [
                "Raccoon",
                "RedLine Stealer",
                "Remcos",
                "Vidar"
            ]
        },
        {
            "data_url": "https://www.blackberry.com/content/dam/blackberry-com/asset/enterprise/pdf/direct/report-old-dogs-new-tricks.pdf",
            "date": "2021-07-27",
            "organization": "Blackberry",
            "author": "BlackBerry Research & Intelligence Team",
            "title": "Old Dogs New Tricks: Attackers Adopt Exotic Programming Languages",
            "categories": [
                "elf.wellmess",
                "ElectroRAT",
                "BazarNimrod",
                "Buer",
                "Cobalt Strike",
                "Remcos",
                "Snake",
                "TeleBot",
                "WellMess",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2021/07/remcos-rat-delivered-via-visual-basic/",
            "date": "2021-07-19",
            "organization": "Malwarebytes",
            "author": "Erika Noerenberg",
            "title": "Remcos RAT delivered via Visual Basic",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/roboski-global-recovery-automation/",
            "date": "2021-07-12",
            "organization": "IBM",
            "author": "Melissa Frydrych",
            "title": "RoboSki and Global Recovery: Automation to Combat Evolving Obfuscation",
            "categories": [
                "404 Keylogger",
                "Agent Tesla",
                "AsyncRAT",
                "Ave Maria",
                "Azorult",
                "BitRAT",
                "Formbook",
                "HawkEye Keylogger",
                "Loki Password Stealer (PWS)",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "Quasar RAT",
                "RedLine Stealer",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.ciphertechsolutions.com/roboski-global-recovery-automation/",
            "date": "2021-07-12",
            "organization": "Cipher Tech Solutions",
            "author": "Melissa Frydrych",
            "title": "RoboSki and Global Recovery: Automation to Combat Evolving Obfuscation",
            "categories": [
                "404 Keylogger",
                "Agent Tesla",
                "AsyncRAT",
                "Ave Maria",
                "Azorult",
                "BitRAT",
                "Formbook",
                "HawkEye Keylogger",
                "Loki Password Stealer (PWS)",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "Quasar RAT",
                "RedLine Stealer",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.anomali.com/blog/threat-actors-use-msbuild-to-deliver-rats-filelessly",
            "date": "2021-05-13",
            "organization": "Anomali",
            "author": "Tara Gould",
            "title": "Threat Actors Use MSBuild to Deliver RATs Filelessly",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/catching-rats-over-custom-protocols",
            "date": "2021-05-05",
            "organization": "Zscaler",
            "author": "Aniruddha Dolas",
            "title": "Catching RATs Over Custom Protocols Analysis of top non-HTTP/S threats",
            "categories": [
                "Agent Tesla",
                "AsyncRAT",
                "Crimson RAT",
                "CyberGate",
                "Ghost RAT",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "Quasar RAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/cybereason-exposes-malware-targeting-us-taxpayers",
            "date": "2021-03-18",
            "organization": "Cybereason",
            "author": "Daniel Frank",
            "title": "Cybereason Exposes Campaign Targeting US Taxpayers with NetWire and Remcos Malware",
            "categories": [
                "NetWire RC",
                "Remcos"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/tracking-hcrypt-an-active-crypter-as-a-service",
            "date": "2021-03-16",
            "organization": "Morphisec",
            "author": "Nadav Lorber",
            "title": "Tracking HCrypt: An Active Crypter as a Service",
            "categories": [
                "AsyncRAT",
                "LimeRAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/antisandbox-techniques/",
            "date": "2021-02-18",
            "organization": "PTSecurity",
            "author": "PTSecurity",
            "title": "https://www.ptsecurity.com/ww-en/analytics/antisandbox-techniques/",
            "categories": [
                "Poet RAT",
                "Gravity RAT",
                "Ketrican",
                "Okrum",
                "OopsIE",
                "Remcos",
                "RogueRobinNET",
                "RokRAT",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.bitdefender.com/files/News/CaseStudies/study/390/Bitdefender-PR-Whitepaper-Remcos-creat5080-en-EN-GenericUse.pdf",
            "date": "2021-01-13",
            "organization": "Bitdefender",
            "author": "Janos Gergo Szeles",
            "title": "Remcos RAT Revisited:  A Colombian Coronavirus-Themed Campaign",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2021/01/12/operation-spalax-targeted-malware-attacks-colombia/",
            "date": "2021-01-11",
            "organization": "ESET Research",
            "author": "Mat\u00edas Porolli",
            "title": "Operation Spalax: Targeted malware attacks in Colombia",
            "categories": [
                "Agent Tesla",
                "AsyncRAT",
                "NjRAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/commodity-net-packers-use-embedded-images-hide-payloads",
            "date": "2020-12-07",
            "organization": "Proofpoint",
            "author": "Proofpoint Threat Research Team",
            "title": "Commodity .NET Packers use Embedded Images to Hide Payloads",
            "categories": [
                "Agent Tesla",
                "Loki Password Stealer (PWS)",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.gdatasoftware.com/blog/global-pandemic-remcos-tesla-netwire",
            "date": "2020-11-18",
            "organization": "G Data",
            "author": "G-Data",
            "title": "Business as usual: Criminal Activities in Times of a Global Pandemic",
            "categories": [
                "Agent Tesla",
                "Nanocore RAT",
                "NetWire RC",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.spamhaus.org/news/images/botnet-report-2020-q2/2020-q2-spamhaus-botnet-threat-report.pdf",
            "date": "2020-07-30",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Spamhaus Botnet Threat Update Q2 2020",
            "categories": [
                "AdWind",
                "Agent Tesla",
                "Arkei Stealer",
                "AsyncRAT",
                "Ave Maria",
                "Azorult",
                "DanaBot",
                "Emotet",
                "IcedID",
                "ISFB",
                "KPOT Stealer",
                "Loki Password Stealer (PWS)",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "Pony",
                "Raccoon",
                "RedLine Stealer",
                "Remcos",
                "Zloader"
            ]
        },
        {
            "data_url": "https://github.com/1d8/analyses/blob/master/RemcosDocDropper.MD",
            "date": "2020-07-13",
            "organization": "Github (1d8)",
            "author": "1d8",
            "title": "Remcos RAT Macro Dropper Doc",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/06/tor2mine-is-up-to-their-old-tricks-and_11.html",
            "date": "2020-06-11",
            "organization": "Talos Intelligence",
            "author": "Kendall McKay",
            "title": "Tor2Mine is up to their old tricks \u2014 and adds a few new ones",
            "categories": [
                "Azorult",
                "Remcos"
            ]
        },
        {
            "data_url": "https://blog.360totalsecurity.com/en/vendetta-new-threat-actor-from-europe/",
            "date": "2020-05-14",
            "organization": "360 Total Security",
            "author": "kate",
            "title": "Vendetta - new threat actor from Europe",
            "categories": [
                "Nanocore RAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/05/14/raticate/",
            "date": "2020-05-14",
            "organization": "SophosLabs",
            "author": "Markel Picado",
            "title": "RATicate: an attacker\u2019s waves of information-stealing malware",
            "categories": [
                "Agent Tesla",
                "BetaBot",
                "BlackRemote",
                "Formbook",
                "Loki Password Stealer (PWS)",
                "NetWire RC",
                "NjRAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/04/azorult-brings-friends-to-party.html",
            "date": "2020-04-02",
            "organization": "Cisco Talos",
            "author": "Vanja Svajcer",
            "title": "AZORult brings friends to the party",
            "categories": [
                "Azorult",
                "Remcos"
            ]
        },
        {
            "data_url": "https://labs.bitdefender.com/2020/03/5-times-more-coronavirus-themed-malware-reports-during-march/?utm_campaign=twitter&utm_medium=twitter&utm_source=twitter",
            "date": "2020-03-20",
            "organization": "Bitdefender",
            "author": "Liviu Arsene",
            "title": "5 Times More Coronavirus-themed Malware Reports during March",
            "categories": [
                "ostap",
                "HawkEye Keylogger",
                "Koadic",
                "Loki Password Stealer (PWS)",
                "Nanocore RAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/coronavirus-threat-landscape-update",
            "date": "2020-03-18",
            "organization": "Proofpoint",
            "author": "Axel F",
            "title": "Coronavirus Threat Landscape Update",
            "categories": [
                "Agent Tesla",
                "Get2",
                "ISFB",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/new-variant-of-remcos-rat-observed-in-the-wild.html",
            "date": "2019-10-21",
            "organization": "Fortinet",
            "author": "Xiaopeng Zhang",
            "title": "New Variant of Remcos RAT Observed In the Wild",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/new-whiteshadow-downloader-uses-microsoft-sql-retrieve-malware",
            "date": "2019-09-26",
            "organization": "Proofpoint",
            "author": "Bryan Campbell",
            "title": "New WhiteShadow downloader uses Microsoft SQL to retrieve malware",
            "categories": [
                "WhiteShadow",
                "Agent Tesla",
                "Azorult",
                "Crimson RAT",
                "Formbook",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://dissectingmalwa.re/malicious-ratatouille.html",
            "date": "2019-09-07",
            "organization": "Dissecting Malware",
            "author": "Marius Genheimer",
            "title": "Malicious RATatouille",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=DIH4SvKuktM",
            "date": "2019-08-22",
            "organization": "Youtube (OALabs)",
            "author": "Sergei Frankoff",
            "title": "Remcos RAT Unpacked From VB6 With x64dbg Debugger",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_ca/research/19/h/analysis-new-remcos-rat-arrives-via-phishing-email.html",
            "date": "2019-08-15",
            "organization": "Trend Micro",
            "author": "Aliakbar Zahravi",
            "title": "Analysis: New Remcos RAT Arrives Via Phishing Email",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://blog.checkpoint.com/2019/06/19/sandblast-agent-phishing-germany-campaign-security-hack-ransomware/",
            "date": "2019-06-19",
            "organization": "Check Point",
            "author": "Kobi Eisenkraft",
            "title": "Check Point\u2019s Threat Emulation Stops Large-Scale Phishing Campaign in Germany",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.vmray.com/cyber-security-blog/smart-memory-dumping/",
            "date": "2019-05-08",
            "organization": "VMRay",
            "author": "Francis Montesino",
            "title": "Get Smart with Enhanced Memory Dumping in VMRay Analyzer 3.0",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.symantec.com/blogs/threat-intelligence/elfin-apt33-espionage",
            "date": "2019-03-27",
            "organization": "Symantec",
            "author": "Security Response Attack Investigation Team",
            "title": "Elfin: Relentless Espionage Group Targets Multiple Organizations in Saudi Arabia and U.S.",
            "categories": [
                "DarkComet",
                "Nanocore RAT",
                "pupy",
                "Quasar RAT",
                "Remcos",
                "TURNEDUP",
                "APT33"
            ]
        },
        {
            "data_url": "https://symantec-blogs.broadcom.com/blogs/threat-intelligence/elfin-apt33-espionage",
            "date": "2019-03-27",
            "organization": "Symantec",
            "author": "Critical Attack Discovery and Intelligence Team",
            "title": "Elfin: Relentless Espionage Group Targets Multiple Organizations in Saudi Arabia and U.S.",
            "categories": [
                "DarkComet",
                "MimiKatz",
                "Nanocore RAT",
                "NetWire RC",
                "pupy",
                "Quasar RAT",
                "Remcos",
                "StoneDrill",
                "TURNEDUP",
                "APT33"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2018/08/picking-apart-remcos.html",
            "date": "2018-08-22",
            "organization": "Cisco Talos",
            "author": "Edmund Brumaghin",
            "title": "Picking Apart Remcos Botnet-In-A-Box",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2018/08/unit42-gorgon-group-slithering-nation-state-cybercrime/",
            "date": "2018-08-02",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "The Gorgon Group: Slithering Between Nation State and Cybercrime",
            "categories": [
                "Loki Password Stealer (PWS)",
                "Nanocore RAT",
                "NjRAT",
                "Quasar RAT",
                "Remcos",
                "Revenge RAT"
            ]
        },
        {
            "data_url": "https://krabsonsecurity.com/2018/03/02/analysing-remcos-rats-executable/",
            "date": "2018-03-02",
            "organization": "KrabsOnSecurity",
            "author": "Mr. Krabs",
            "title": "Analysing Remcos RAT\u2019s executable",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://myonlinesecurity.co.uk/fake-order-spoofed-from-finchers-ltd-sankyo-rubber-delivers-remcos-rat-via-ace-attachments/",
            "date": "2018-03-01",
            "organization": "My Online Security",
            "author": "My Online Security",
            "title": "Fake order spoofed from Finchers ltd Sankyo-Rubber delivers Remcos RAT via ACE attachments",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.riskiq.com/blog/labs/spear-phishing-turkish-defense-contractors/",
            "date": "2018-01-23",
            "organization": "RiskIQ",
            "author": "Yonathan Klijnsma",
            "title": "Espionage Campaign Leverages Spear Phishing, RATs Against Turkish Defense Contractors",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "http://malware-traffic-analysis.net/2017/12/22/index.html",
            "date": "2017-12-22",
            "organization": "Malware Traffic Analysis",
            "author": "Brad Duncan",
            "title": "MALSPAM USES CVE-2017-0199 TO DISTRIBUTE REMCOS RAT",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://secrary.com/ReversingMalware/RemcosRAT/",
            "date": "2017-07-01",
            "organization": "Secrary Blog",
            "author": "lasha",
            "title": "Remcos RAT",
            "categories": [
                "Remcos"
            ]
        },
        {
            "data_url": "https://blog.fortinet.com/2017/02/14/remcos-a-new-rat-in-the-wild-2",
            "date": "2017-02-14",
            "organization": "Fortinet",
            "author": "Floser Bacurio",
            "title": "REMCOS: A New RAT In The Wild",
            "categories": [
                "Remcos"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "remcos",
            "procedure_code": "s0332",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0332",
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
                    "procedure_description": "remcos can launch a remote command line to execute commands on the victim\u2019s machine.[279]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/006",
                    "technique_name": "command and scripting interpreter : python",
                    "technique_description": "adversaries may abuse python commands and scripts for execution. python is a very popular scripting/programming language, with capabilities to perform many functions. python can be executed interactively from the command-line (via the python.exe interpreter) or via scripts (.py) that can be written and distributed to different systems. python code can also be compiled into binary executables.",
                    "procedure_description": "remcos uses python scripts.[37]"
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
                    "procedure_description": "remcos can add itself to the registry key hkcu\\software\\microsoft\\windows\\currentversion\\run for persistence.[221]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "remcos has a command for uac bypassing.[53]"
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
                    "procedure_description": "remcos can add itself to the registry key hkcu\\software\\microsoft\\windows\\currentversion\\run for persistence.[221]"
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
                    "procedure_description": "remcos has a command to hide itself through injecting into another process.[51]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "remcos has a command for uac bypassing.[53]"
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
                    "procedure_description": "remcos has full control of the registry, including the ability to modify it.[132]"
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
                    "procedure_description": "remcos uses rc4 and base64 to obfuscate data, including registry entries and file paths.[269]"
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
                    "procedure_description": "remcos has a command to hide itself through injecting into another process.[51]"
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
                    "procedure_description": "remcos searches for sandboxie and vmware on the system.[45]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "remcos has a command for keylogging.[150][151]"
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
                    "procedure_description": "remcos can search for files on the infected machine.[247]"
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
                    "procedure_description": "remcos searches for sandboxie and vmware on the system.[45]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1123",
                    "technique_link": "https://attack.mitre.org/techniques/T1123",
                    "technique_name": "audio capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., microphones and webcams) or applications (e.g., voice and video call services) to capture audio recordings for the purpose of listening into sensitive conversations to gather information.",
                    "procedure_description": "remcos can capture data from the system\u2019s microphone.[32]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1115",
                    "technique_link": "https://attack.mitre.org/techniques/T1115",
                    "technique_name": "clipboard data",
                    "technique_description": "adversaries may collect data stored in the clipboard from users copying information within or between applications.",
                    "procedure_description": "remcos steals and modifies data from the clipboard.[38]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "remcos has a command for keylogging.[150][151]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "remcos takes automated screenshots of the infected machine.[139]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1125",
                    "technique_link": "https://attack.mitre.org/techniques/T1125",
                    "technique_name": "video capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., integrated cameras or webcams) or applications (e.g., video call services) to capture video recordings for the purpose of gathering information. images may also be captured from devices or applications, potentially in specified intervals, in lieu of video files.",
                    "procedure_description": "remcos can access a system\u2019s webcam and take pictures.[38]"
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
                    "procedure_description": "remcos can upload and download files to and from the victim\u2019s machine.[377]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090",
                    "technique_link": "https://attack.mitre.org/techniques/T1090",
                    "technique_name": "proxy",
                    "technique_description": "adversaries may use a connection proxy to direct network traffic between systems or act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, reduce the number of simultaneous outbound network connections, provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between victims to avoid suspicion. adversaries may chain together multiple proxies to further disguise the source of malicious traffic.",
                    "procedure_description": "remcos uses the infected hosts as socks5 proxies to allow for tunneling and proxying.[40]"
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