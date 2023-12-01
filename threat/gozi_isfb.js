var threatdata = {
    "name": "Gozi ISFB",
    "alias": "Gozi ISFB, ISFB, Pandemyia",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Credential stealer, Botnet",
    "modified": "2023-10-13",
    "all_data": {
        "tool": "Gozi ISFB",
        "names": [
            {
                "name": "Gozi ISFB"
            },
            {
                "name": "ISFB"
            },
            {
                "name": "Pandemyia"
            }
        ],
        "description": "2006 {{Gozi}} v1.0, Gozi CRM, CRM, Papras\n2010 Gozi v2.0, Gozi ISFB, ISFB, Pandemyia(*)\n\nIn September 2010, the source code of a particular Gozi CRM dll version was leaked. This led to two main branches: one became known as {{Gozi v2}}, which was merged with Pony and became {{Vawtrak}}/Neverquest.\n\nThe other branch became known as Gozi ISFB, or ISFB in short. Webinject functionality was added to this version.\n\nThere is one panel which often was used in combination with ISFB: {{IAP}}. The panel's login page comes with the title 'Login - IAP'. The body contains 'AUTHORIZATION', 'Name:', 'Password:' and a single button 'Sign in' in a minimal design. Often, the panel is directly accessible by entering the C2 IP address in a browser. But there are ISFB versions which are not directly using IAP. The bot accesses a gate, which is called the '{{DreamBot}}' gate.\n\nISFB often was protected by Rovnix. This led to a further complication in the naming scheme - many companies started to call ISFB Rovnix. Because the signatures started to look for Rovnix, other trojans protected by Rovnix (in particular ReactorBot and Rerdom) sometimes got wrongly labelled.\n\nIn April 2016 a combination of Gozi ISFB and {{Nymaim}} was detected. This breed became known as {{GozNym}}. The merge uses a shellcode-like version of Gozi ISFB, that needs Nymaim to run. The C2 communication is performed by Nymaim.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.prodefence.org/malware-analysis-gozi-ifsb-bank-trojan-aka-ursnif/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/ursnif-emotet-dridex-and-bitpaymer-gangs-linked-by-a-similar-loader/",
            "https://blog.talosintelligence.com/2019/01/amp-tracks-ursnif.html",
            "https://blog.minerva-labs.com/attackers-insert-themselves-into-the-email-conversation-to-spread-malware",
            "https://lokalhost.pl/gozi_tree.txt",
            "https://isc.sans.edu/forums/diary/Reviewing+the+spam+filters+Malspam+pushing+GoziISFB/23245",
            "http://blog.talosintelligence.com/2018/03/gozi-isfb-remains-active-in-2018.html",
            "https://www.cylance.com/en_us/blog/threat-spotlight-ursnif-infostealer-malware.html",
            "https://www.vkremez.com/2018/08/lets-learn-in-depth-reversing-of-recent.html",
            "https://www.rsa.com/de-de/resources/pandemiya-emerges-new-malware-alternative-zeus-based",
            "https://blog.malwarebytes.com/threat-analysis/2017/04/binary-options-malvertising-campaign-drops-isfb-banking-trojan/",
            "https://www.cyberbit.com/blog/endpoint-security/new-ursnif-malware-variant/",
            "https://journal.cecyf.fr/ojs/index.php/cybin/article/view/15",
            "https://0ffset.net/reverse-engineering/analyzing-com-mechanisms-in-malware/",
            "https://www.fireeye.com/blog/threat-research/2017/11/ursnif-variant-malicious-tls-callback-technique.html",
            "https://0ffset.net/reverse-engineering/malware-analysis/analysing-isfb-loader/",
            "https://arielkoren.com/blog/2016/11/01/ursnif-malware-deep-technical-dive/",
            "https://github.com/gbrindisi/malware/tree/master/windows/gozi-isfb",
            "https://blog.yoroi.company/research/ursnif-the-latest-evolution-of-the-most-popular-banking-malware/",
            "https://www.cybereason.com/blog/new-ursnif-variant-targets-japan-packed-with-new-features",
            "https://www.telekom.com/en/blog/group/article/lolsnif-tracking-another-ursnif-based-targeted-campaign-600062"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0386/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.isfb"
        ],
        "uuid": "9bbd1a95-2295-44d3-9bbf-9db87a98adb3",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "gozi_isfb",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://twitter.com/JAMESWT_MHT/status/1712783250446328114?t=iLKXzsZuS1TTa0i9sZFkQA&s=19",
            "date": "2023-10-13",
            "organization": "Twitter (@JAMESWT_MHT)",
            "author": "JamesWT",
            "title": "Tweets on Wikiloader delivering ISFB",
            "categories": [
                "ISFB",
                "WikiLoader"
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
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/out-sandbox-wikiloader-digs-sophisticated-evasion",
            "date": "2023-07-31",
            "organization": "Proofpoint",
            "author": "Kelsey Merriman",
            "title": "Out of the Sandbox: WikiLoader Digs Sophisticated Evasion",
            "categories": [
                "ISFB",
                "WikiLoader"
            ]
        },
        {
            "data_url": "https://kostas-ts.medium.com/ursnif-vs-italy-il-pdf-del-destino-5c83d6281072",
            "date": "2023-07-18",
            "organization": "Kostas TS",
            "author": "Kostas",
            "title": "Ursnif VS Italy: Il PDF del Destino",
            "categories": [
                "Gozi",
                "ISFB",
                "Snifula"
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
            "data_url": "https://www.bridewell.com/insights/news/detail/hunting-for-ursnif",
            "date": "2023-05-10",
            "organization": "Bridewell",
            "author": "Bridewell",
            "title": "Hunting for Ursnif",
            "categories": [
                "ISFB",
                "Royal Ransom"
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
            "data_url": "https://www.esentire.com/blog/esentire-threat-intelligence-malware-analysis-batloader",
            "date": "2023-03-30",
            "organization": "eSentire",
            "author": "eSentire Threat Response Unit (TRU)",
            "title": "eSentire Threat Intelligence Malware Analysis: BatLoader",
            "categories": [
                "BATLOADER",
                "Cobalt Strike",
                "ISFB",
                "SystemBC",
                "Vidar"
            ]
        },
        {
            "data_url": "https://0xtoxin.github.io/threat%20breakdown/Gozi-Italy-Campaign/",
            "date": "2023-03-19",
            "organization": "0xToxin Labs",
            "author": "@0xToxin",
            "title": "Gozi - Italian ShellCode Dance",
            "categories": [
                "Gozi",
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.esentire.com/blog/batloader-continues-to-abuse-google-search-ads-to-deliver-vidar-stealer-and-ursnif",
            "date": "2023-03-09",
            "organization": "eSentire",
            "author": "eSentire Threat Response Unit (TRU)",
            "title": "BatLoader Continues to Abuse Google Search Ads to Deliver Vidar Stealer and Ursnif",
            "categories": [
                "BATLOADER",
                "ISFB",
                "Vidar"
            ]
        },
        {
            "data_url": "https://www.prodaft.com/m/reports/RIG___TLP_CLEAR-1.pdf",
            "date": "2023-02-27",
            "organization": "PRODAFT Threat Intelligence",
            "author": "PRODAFT",
            "title": "RIG Exploit Kit: In-Depth Analysis",
            "categories": [
                "Dridex",
                "IcedID",
                "ISFB",
                "PureCrypter",
                "Raccoon",
                "RecordBreaker",
                "RedLine Stealer",
                "Royal Ransom",
                "Silence",
                "SmokeLoader",
                "Zloader"
            ]
        },
        {
            "data_url": "https://insight-jp.nttsecurity.com/post/102i7af/steelclovergoogle",
            "date": "2023-02-08",
            "organization": "NTT Security",
            "author": "Ryu Hiyoshi",
            "title": "SteelClover Attacks Distributing Malware Via Google Ads Increased",
            "categories": [
                "BATLOADER",
                "ISFB",
                "RedLine Stealer"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2023/01/09/unwrapping-ursnifs-gifts/",
            "date": "2023-01-09",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Unwrapping Ursnifs Gifts",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://medium.com/csis-techblog/chapter-1-from-gozi-to-isfb-the-history-of-a-mythical-malware-family-82e592577fef",
            "date": "2022-10-24",
            "organization": "Medium CSIS Techblog",
            "author": "Beno\u00eet Ancel",
            "title": "Chapter 1 \u2014 From Gozi to ISFB: The history of a mythical malware family.",
            "categories": [
                "Gozi",
                "ISFB",
                "Snifula"
            ]
        },
        {
            "data_url": "https://medium.com/csis-techblog/inside-view-of-brazzzersff-infrastructure-89b9188fd145",
            "date": "2022-08-08",
            "organization": "Medium CSIS Techblog",
            "author": "Beno\u00eet Ancel",
            "title": "An inside view of domain anonymization as-a-service \u2014 the BraZZZerSFF infrastructure",
            "categories": [
                "Riltok",
                "magecart",
                "Anubis",
                "Azorult",
                "BetaBot",
                "Buer",
                "CoalaBot",
                "CryptBot",
                "DiamondFox",
                "DreamBot",
                "GCleaner",
                "ISFB",
                "Loki Password Stealer (PWS)",
                "MedusaLocker",
                "MeguminTrojan",
                "Nemty",
                "PsiX",
                "RedLine Stealer",
                "SmokeLoader",
                "STOP",
                "TinyNuke",
                "Vidar",
                "Zloader"
            ]
        },
        {
            "data_url": "https://blog.group-ib.com/gozi-latest-ttps",
            "date": "2022-06-24",
            "organization": "Group-IB",
            "author": "Albert Priego",
            "title": "We see you, Gozi Hunting the latest TTPs used for delivering the Trojan",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/phishing-campaigns-featuring-ursnif-trojan/",
            "date": "2022-06-07",
            "organization": "McAfee",
            "author": "Jyothi Naveen",
            "title": "Phishing Campaigns featuring Ursnif Trojan on the Rise",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/itg23-crypters-cooperation-between-cybercriminal-groups/",
            "date": "2022-05-19",
            "organization": "IBM",
            "author": "Charlotte Hammond",
            "title": "ITG23 Crypters Highlight Cooperation Between Cybercriminal Groups",
            "categories": [
                "IcedID",
                "ISFB",
                "Mount Locker"
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
            "data_url": "https://blog.qualys.com/vulnerabilities-threat-research/2022/05/08/ursnif-malware-banks-on-news-events-for-phishing-attacks",
            "date": "2022-05-08",
            "organization": "Qualys",
            "author": "Amit Gadhave",
            "title": "Ursnif Malware Banks on News Events for Phishing Attacks",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://decoded.avast.io/vladimirmartyanov/zloader-the-silent-night/",
            "date": "2022-04-14",
            "organization": "Avast Decoded",
            "author": "Vladimir Martyanov",
            "title": "Zloader 2: The Silent Night",
            "categories": [
                "ISFB",
                "Raccoon",
                "Zloader"
            ]
        },
        {
            "data_url": "https://medium.com/walmartglobaltech/signed-dll-campaigns-as-a-service-7760ac676489",
            "date": "2022-01-11",
            "organization": "Medium walmartglobaltech",
            "author": "Jason Reaves",
            "title": "Signed DLL campaigns as a service",
            "categories": [
                "BATLOADER",
                "Cobalt Strike",
                "ISFB",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.cleafy.com/cleafy-labs/digital-banking-fraud-how-the-gozi-malware-work",
            "date": "2021-10-25",
            "organization": "Cleafy",
            "author": "Cleafy",
            "title": "Digital banking fraud: how the Gozi malware works",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/security-briefs/ta544-targets-italian-organizations-ursnif-malware",
            "date": "2021-09-29",
            "organization": "Proofpoint",
            "author": "Selena Larson",
            "title": "TA544 Targets Italian Organizations with Ursnif Malware",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/21/i/ssl-tls-technical-brief/ssl-tls-technical-brief.pdf",
            "date": "2021-09-03",
            "organization": "Trend Micro",
            "author": "Mohamad Mokbel",
            "title": "The State of SSL/TLS Certificate Usage in  Malware C&C Communications",
            "categories": [
                "AdWind",
                "ostap",
                "AsyncRAT",
                "BazarBackdoor",
                "BitRAT",
                "Buer",
                "Chthonic",
                "CloudEyE",
                "Cobalt Strike",
                "DCRat",
                "Dridex",
                "FindPOS",
                "GootKit",
                "Gozi",
                "IcedID",
                "ISFB",
                "Nanocore RAT",
                "Orcus RAT",
                "PandaBanker",
                "Qadars",
                "QakBot",
                "Quasar RAT",
                "Rockloader",
                "ServHelper",
                "Shifu",
                "SManager",
                "TorrentLocker",
                "TrickBot",
                "Vawtrak",
                "Zeus",
                "Zloader"
            ]
        },
        {
            "data_url": "https://threatresearch.ext.hp.com/detecting-ta551-domains/",
            "date": "2021-07-30",
            "organization": "HP",
            "author": "Patrick Schl\u00e4pfer",
            "title": "Detecting TA551 domains",
            "categories": [
                "Valak",
                "Dridex",
                "IcedID",
                "ISFB",
                "QakBot"
            ]
        },
        {
            "data_url": "https://therecord.media/gozi-malware-gang-member-arrested-in-colombia/",
            "date": "2021-06-30",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Gozi malware gang member arrested in Colombia",
            "categories": [
                "Gozi",
                "ISFB"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/ursnif-cerberus-android-malware-bank-transfers-italy/",
            "date": "2021-06-23",
            "organization": "IBM",
            "author": "Itzik Chimino",
            "title": "Ursnif Leverages Cerberus to Automate Fraudulent Bank Transfers in Italy",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.deepinstinct.com/2021/05/26/deep-dive-packing-software-cryptone/",
            "date": "2021-05-26",
            "organization": "DeepInstinct",
            "author": "Ron Ben Yizhak",
            "title": "A Deep Dive into Packing Software CryptOne",
            "categories": [
                "Cobalt Strike",
                "Dridex",
                "Emotet",
                "Gozi",
                "ISFB",
                "Mailto",
                "QakBot",
                "SmokeLoader",
                "WastedLocker",
                "Zloader"
            ]
        },
        {
            "data_url": "https://mal-eats.net/2021/05/10/campo_new_attack_campaign_targeting_japan/",
            "date": "2021-05-10",
            "organization": "Mal-Eats",
            "author": "mal_eats",
            "title": "Overview of Campo, a new attack campaign targeting Japan",
            "categories": [
                "AnchorDNS",
                "BazarBackdoor",
                "Cobalt Strike",
                "ISFB",
                "Phobos",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://research.nccgroup.com/2021/05/04/rm3-curiosities-of-the-wildest-banking-malware/",
            "date": "2021-05-04",
            "organization": "NCC Group",
            "author": "fumik0",
            "title": "RM3 \u2013 Curiosities of the wildest banking malware",
            "categories": [
                "ISFB",
                "RM3"
            ]
        },
        {
            "data_url": "https://blog.fox-it.com/2021/05/04/rm3-curiosities-of-the-wildest-banking-malware/",
            "date": "2021-05-04",
            "organization": "Fox-IT",
            "author": "fumik0",
            "title": "RM3 \u2013 Curiosities of the wildest banking malware",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/paas-or-how-hackers-evade-antivirus-software/",
            "date": "2021-04-12",
            "organization": "PTSecurity",
            "author": "PTSecurity",
            "title": "PaaS, or how hackers evade antivirus software",
            "categories": [
                "Amadey",
                "Bunitu",
                "Cerber",
                "Dridex",
                "ISFB",
                "KPOT Stealer",
                "Mailto",
                "Nemty",
                "Phobos",
                "Pony",
                "Predator The Thief",
                "QakBot",
                "Raccoon",
                "RTM",
                "SmokeLoader",
                "Zloader"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/ettersilent-maldoc-builder-macro-trickbot-qbot/",
            "date": "2021-04-06",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "EtterSilent: the underground\u2019s new favorite maldoc builder",
            "categories": [
                "BazarBackdoor",
                "ISFB",
                "QakBot",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/ursnif-trojan-has-targeted-over-100-italian-banks/",
            "date": "2021-02-03",
            "organization": "ZDNet",
            "author": "Charlie Osborne",
            "title": "Ursnif Trojan has targeted over 100 Italian banks",
            "categories": [
                "ISFB",
                "Snifula"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/new-variant-of-ursnif-continuously-targeting-italy",
            "date": "2021-01-12",
            "organization": "Fortinet",
            "author": "Xiaopeng Zhang",
            "title": "New Variant of Ursnif Continuously Targeting Italy",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://marcoramilli.com/2021/01/09/c2-traffic-patterns-personal-notes/",
            "date": "2021-01-09",
            "organization": "Marco Ramilli's Blog",
            "author": "Marco Ramilli",
            "title": "Command and Control Traffic Patterns",
            "categories": [
                "ostap",
                "LaZagne",
                "Agent Tesla",
                "Azorult",
                "Buer",
                "Cobalt Strike",
                "DanaBot",
                "DarkComet",
                "Dridex",
                "Emotet",
                "Formbook",
                "IcedID",
                "ISFB",
                "NetWire RC",
                "PlugX",
                "Quasar RAT",
                "SmokeLoader",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://0xc0decafe.com/malware-analysts-guide-to-aplib-decompression/",
            "date": "2021-01-08",
            "organization": "0xC0DECAFE",
            "author": "Thomas Barabosch",
            "title": "The malware analyst\u2019s guide to aPLib decompression",
            "categories": [
                "ISFB",
                "Rovnix"
            ]
        },
        {
            "data_url": "https://malware.love/malware_analysis/reverse_engineering/2020/11/27/analyzing-a-vbs-dropper.html",
            "date": "2020-11-27",
            "organization": "malware.love",
            "author": "Robert Giczewski",
            "title": "Having fun with a Ursnif VBS dropper",
            "categories": [
                "ISFB",
                "Snifula"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/cybereason-vs-egregor-ransomware",
            "date": "2020-11-26",
            "organization": "Cybereason",
            "author": "Lior Rochberger",
            "title": "Cybereason vs. Egregor Ransomware",
            "categories": [
                "Cobalt Strike",
                "Egregor",
                "IcedID",
                "ISFB",
                "QakBot"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-010.pdf",
            "date": "2020-10-29",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "LE MALWARE-AS-A-SERVICE EMOTET",
            "categories": [
                "Dridex",
                "Emotet",
                "ISFB",
                "QakBot"
            ]
        },
        {
            "data_url": "https://www.justice.gov/opa/pr/officials-announce-international-operation-targeting-transnational-criminal-organization",
            "date": "2020-10-15",
            "organization": "Department of Justice",
            "author": "Department of Justice",
            "title": "Officials Announce International Operation Targeting Transnational Criminal Organization QQAAZZ that Provided Money Laundering Services to High-Level Cybercriminals",
            "categories": [
                "Dridex",
                "ISFB",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/09/salfram-robbing-place-without-removing.html",
            "date": "2020-09-02",
            "organization": "Cisco Talos",
            "author": "Holger Unterbrink",
            "title": "Salfram: Robbing the place without removing your name tag",
            "categories": [
                "Ave Maria",
                "ISFB",
                "SmokeLoader",
                "Zloader"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2020/gozi-the-malware-with-a-thousand-faces/",
            "date": "2020-08-28",
            "organization": "Checkpoint",
            "author": "Check Point Research",
            "title": "Gozi: The Malware with a Thousand Faces",
            "categories": [
                "DreamBot",
                "ISFB",
                "LOLSnif",
                "SaiGon"
            ]
        },
        {
            "data_url": "https://www.tgsoft.it/files/report/download.asp?id=7481257469",
            "date": "2020-08",
            "organization": "TG Soft",
            "author": "TG Soft",
            "title": "TG Soft Cyber - Threat Report",
            "categories": [
                "DarkComet",
                "Darktrack RAT",
                "Emotet",
                "ISFB"
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
            "data_url": "https://www.darktrace.com/en/blog/the-resurgence-of-the-ursnif-banking-trojan/",
            "date": "2020-07-23",
            "organization": "Darktrace",
            "author": "Max Heinemeyer",
            "title": "The resurgence of the Ursnif banking trojan",
            "categories": [
                "ISFB",
                "Snifula"
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
            "data_url": "https://www.hornetsecurity.com/en/security-information/firefox-send-sends-ursnif-malware/",
            "date": "2020-07-18",
            "organization": "Hornetsecurity",
            "author": "Hornetsecurity Security Lab",
            "title": "Firefox Send sends Ursnif malware",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-008.pdf",
            "date": "2020-07-17",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "The Malware Dridex: Origins and Uses",
            "categories": [
                "Andromeda",
                "CryptoLocker",
                "Cutwail",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FriedEx",
                "Gameover P2P",
                "Gandcrab",
                "ISFB",
                "Murofet",
                "Necurs",
                "Predator The Thief",
                "Zeus"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/07/valak-emerges.html",
            "date": "2020-07-01",
            "organization": "Cisco Talos",
            "author": "Nick Biasini",
            "title": "Threat Spotlight: Valak Slithers Its Way Into Manufacturing and Transportation Networks",
            "categories": [
                "Valak",
                "IcedID",
                "ISFB",
                "MyKings Spreader"
            ]
        },
        {
            "data_url": "https://www.tgsoft.it/files/report/download.asp?id=568531345",
            "date": "2020-07-01",
            "organization": "TG Soft",
            "author": "TG Soft",
            "title": "Cyber-Threat Report on the cyber attacks of June 2020 in Italy",
            "categories": [
                "Avaddon",
                "ISFB"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/obfuscated-vbscript-drops-zloader-ursnif-qakbot-dridex",
            "date": "2020-06-24",
            "organization": "Morphisec",
            "author": "Arnold Osipov",
            "title": "Obfuscated VBScript Drops Zloader, Ursnif, Qakbot, Dridex",
            "categories": [
                "Dridex",
                "ISFB",
                "QakBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://research.nccgroup.com/2020/06/23/wastedlocker-a-new-ransomware-variant-developed-by-the-evil-corp-group/",
            "date": "2020-06-23",
            "organization": "NCC Group",
            "author": "Nikolaos Pantazopoulos",
            "title": "WastedLocker: A New Ransomware Variant Developed By The Evil Corp Group",
            "categories": [
                "Cobalt Strike",
                "ISFB",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://redcanary.com/resources/webinars/deep-dive-process-injection/",
            "date": "2020-06-17",
            "organization": "Youtube (Red Canary)",
            "author": "Erika Noerenberg",
            "title": "ATT&CK\u00ae Deep Dive: Process Injection",
            "categories": [
                "ISFB",
                "Ramnit",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.lastline.com/labsblog/evolution-of-excel-4-0-macro-weaponization/",
            "date": "2020-06-02",
            "organization": "Lastline Labs",
            "author": "James Haughom",
            "title": "Evolution of Excel 4.0 Macro Weaponization",
            "categories": [
                "Agent Tesla",
                "DanaBot",
                "ISFB",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/ursnif/gozi-delivery-excel-macro-4.0-utilization-uptick-ocr-bypass",
            "date": "2020-06-02",
            "organization": "Morphisec",
            "author": "Arnold Osipov",
            "title": "Ursnif/Gozi Delivery - Excel Macro 4.0 Utilization Uptick & OCR Bypass",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://github.com/mlodic/ursnif_beacon_decryptor",
            "date": "2020-05-07",
            "organization": "Github (mlodic)",
            "author": "Matteo Lodi",
            "title": "Ursnif beacon decryptor",
            "categories": [
                "Gozi",
                "ISFB"
            ]
        },
        {
            "data_url": "https://intezer.com/blog/intezer-analyze/fantastic-payloads-and-where-we-find-them",
            "date": "2020-03-30",
            "organization": "Intezer",
            "author": "Michael Kajiloti",
            "title": "Fantastic payloads and where we find them",
            "categories": [
                "Dridex",
                "Emotet",
                "ISFB",
                "TrickBot"
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
            "data_url": "https://isc.sans.edu/forums/diary/German+language+malspam+pushes+Ursnif/25732/",
            "date": "2020-01-23",
            "organization": "SANS ISC InfoSec Forums",
            "author": "Brad Duncan",
            "title": "German language malspam pushes Ursnif",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://0xc0decafe.com/malware-analyst-guide-to-pe-timestamps/",
            "date": "2020-01-22",
            "organization": "",
            "author": "Thomas Barabosch",
            "title": "The malware analyst\u2019s guide to PE timestamps",
            "categories": [
                "Azorult",
                "Gozi",
                "IcedID",
                "ISFB",
                "LOLSnif",
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://jsac.jpcert.or.jp/archive/2020/pdf/JSAC2020_5_sajo-takeda-niwa_en.pdf",
            "date": "2020-01-17",
            "organization": "",
            "author": "Ken Sajo",
            "title": "Battle Against Ursnif Malspam Campaign targeting Japan",
            "categories": [
                "Cutwail",
                "ISFB",
                "TrickBot",
                "UrlZone"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2019/12/24/gozi-v3-tracked-by-their-own-stealth/",
            "date": "2019-12-24",
            "organization": "Sophos",
            "author": "SophosLabs Threat Research",
            "title": "Gozi V3: tracked by their own stealth",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/wireshark-tutorial-examining-ursnif-infections/",
            "date": "2019-12-23",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Brad Duncan",
            "title": "Wireshark Tutorial: Examining Ursnif Infections",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.botconf.eu/wp-content/uploads/2019/12/B2019-OReilly-Jarvis-End-to-end-Botnet-Monitoring.pdf",
            "date": "2019-12-07",
            "organization": "Secureworks",
            "author": "Kevin O\u2019Reilly",
            "title": "End-to-end Botnet  Monitoring... Botconf 2019",
            "categories": [
                "Emotet",
                "ISFB",
                "QakBot"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/ursnif-variant-spreading-word-document.html",
            "date": "2019-08-07",
            "organization": "Fortinet",
            "author": "Xiaopeng Zhang",
            "title": "New Ursnif Variant Spreading by Word Document",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/threat-actor-profile-ta544-targets-geographies-italy-japan-range-malware",
            "date": "2019-07-11",
            "organization": "Proofpoint",
            "author": "Proofpoint Threat Insight Team",
            "title": "Threat Actor Profile: TA544 targets geographies from Italy to Japan with a range of malware",
            "categories": [
                "ISFB",
                "PandaBanker",
                "UrlZone",
                "NARWHAL SPIDER"
            ]
        },
        {
            "data_url": "https://www.vmray.com/cyber-security-blog/analyzing-ursnif-behavior-malware-sandbox/",
            "date": "2019-06-25",
            "organization": "VMRay",
            "author": "Tamas Boczan",
            "title": "Analyzing Ursnif\u2019s Behavior Using a Malware Sandbox",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/urlzone-top-malware-japan-while-emotet-and-line-phishing-round-out-landscape-0",
            "date": "2019-06-19",
            "organization": "Proofpoint",
            "author": "Proofpoint Threat Insight Team",
            "title": "URLZone top malware in Japan, while Emotet and LINE Phishing round out the landscape",
            "categories": [
                "ISFB",
                "UrlZone",
                "NARWHAL SPIDER"
            ]
        },
        {
            "data_url": "https://0ffset.net/reverse-engineering/malware-analysis/analyzing-isfb-second-loader/",
            "date": "2019-05-25",
            "organization": "0ffset Blog",
            "author": "0verfl0w_",
            "title": "Analyzing ISFB \u2013 The Second Loader",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=KvOpNznu_3w",
            "date": "2019-04-06",
            "organization": "Youtube (hasherezade)",
            "author": "hasherezade",
            "title": "Unpacking ISFB (including the custom 'PX' format)",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://blog.yoroi.company/research/ursnif-the-latest-evolution-of-the-most-popular-banking-malware/",
            "date": "2019-04-05",
            "organization": "Yoroi",
            "author": "Davide Testa",
            "title": "Ursnif: The Latest Evolution of the Most Popular Banking Malware",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://blog.yoroi.company/research/the-ursnif-gangs-keep-threatening-italy/",
            "date": "2019-03-26",
            "organization": "Yoroi",
            "author": "Luigi Martire",
            "title": "The Ursnif Gangs keep Threatening Italy",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://0ffset.net/reverse-engineering/malware-analysis/analysing-isfb-loader/",
            "date": "2019-03-13",
            "organization": "0ffset Blog",
            "author": "0verfl0w_",
            "title": "Analysing ISFB \u2013 The First Loader",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/new-ursnif-variant-targets-japan-packed-with-new-features",
            "date": "2019-03-12",
            "organization": "Cybereason",
            "author": "Assaf Dahan",
            "title": "New Ursnif Variant targets Japan packed with new Features",
            "categories": [
                "ISFB",
                "UrlZone"
            ]
        },
        {
            "data_url": "https://blog.minerva-labs.com/attackers-insert-themselves-into-the-email-conversation-to-spread-malware",
            "date": "2019-03-11",
            "organization": "Minerva",
            "author": "Minerva Labs",
            "title": "Attackers Insert Themselves into the Email Conversation to Spread Malware",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://blog.yoroi.company/research/ursnif-long-live-the-steganography/",
            "date": "2019-02-07",
            "organization": "Yoroi",
            "author": "Antonio Farina",
            "title": "Ursnif: Long Live the Steganography!",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.cyberbit.com/new-ursnif-malware-variant/",
            "date": "2019-01-30",
            "organization": "Cyberbit",
            "author": "Hod Gavriel",
            "title": "New Ursnif Malware Variant \u2013 a Stunning Matryoshka (\u041c\u0430\u0442\u0440\u0451\u0448\u043a\u0430)",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2019/01/amp-tracks-ursnif.html",
            "date": "2019-01-24",
            "organization": "Cisco Talos",
            "author": "John Arneson",
            "title": "Cisco AMP tracks new campaign that delivers Ursnif",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://0ffset.net/reverse-engineering/analyzing-com-mechanisms-in-malware/",
            "date": "2019-01-15",
            "organization": "0ffset Blog",
            "author": "0verfl0w_",
            "title": "Analyzing COMmunication in Malware",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "http://benkow.cc/DreambotSAS19.pdf",
            "date": "2019",
            "organization": "CSIS",
            "author": "Beno\u00eet Ancel",
            "title": "Dreambot Business overview 2019",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/ursnif-emotet-dridex-and-bitpaymer-gangs-linked-by-a-similar-loader/",
            "date": "2018-12-18",
            "organization": "Trend Micro",
            "author": "Trendmicro",
            "title": "URSNIF, EMOTET, DRIDEX and BitPaymer Gangs Linked by a Similar Loader",
            "categories": [
                "Dridex",
                "Emotet",
                "FriedEx",
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.fidelissecurity.com/threatgeek/threat-intelligence/gozi-v3-technical-update/",
            "date": "2018-05-17",
            "organization": "Fidelis",
            "author": "Threat Research Team",
            "title": "Gozi V3 Technical Update",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=jlc7Ahp8Iqg",
            "date": "2018-03-19",
            "organization": "",
            "author": "hasherezade",
            "title": "Unpacking Ursnif",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2018/03/gozi-isfb-remains-active-in-2018.html",
            "date": "2018-03-06",
            "organization": "Cisco Talos",
            "author": "Edmund Brumaghin",
            "title": "Gozi ISFB Remains Active in 2018, Leverages \"Dark Cloud\" Botnet For Distribution",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.cylance.com/en_us/blog/threat-spotlight-ursnif-infostealer-malware.html",
            "date": "2018-02-07",
            "organization": "Cylance",
            "author": "Threat Research Team",
            "title": "Threat Spotlight: URSNIF Infostealer Malware",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/forums/diary/Reviewing+the+spam+filters+Malspam+pushing+GoziISFB/23245",
            "date": "2018-01-17",
            "organization": "SANS ISC",
            "author": "brad",
            "title": "Reviewing the spam filters: Malspam pushing Gozi-ISFB",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/holiday-lull-not-so-much",
            "date": "2018-01-12",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "Holiday lull? Not so much",
            "categories": [
                "Dridex",
                "Emotet",
                "GlobeImposter",
                "ISFB",
                "Necurs",
                "PandaBanker",
                "UrlZone",
                "NARWHAL SPIDER"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/11/ursnif-variant-malicious-tls-callback-technique.html",
            "date": "2017-11-28",
            "organization": "FireEye",
            "author": "Sandor Nemes",
            "title": "Newly Observed Ursnif Variant Employs Malicious TLS Callback Technique to Achieve Process Injection",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://journal.cecyf.fr/ojs/index.php/cybin/article/view/15",
            "date": "2017-07-02",
            "organization": "CERT.PL",
            "author": "Maciej Kotowicz",
            "title": "ISFB: Still Live and Kicking",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://lokalhost.pl/gozi_tree.txt",
            "date": "2017-05-29",
            "organization": "Lokalhost.pl",
            "author": "Maciej Kotowicz",
            "title": "Gozi Tree",
            "categories": [
                "DreamBot",
                "Gozi",
                "ISFB",
                "Powersniff"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2017/04/binary-options-malvertising-campaign-drops-isfb-banking-trojan/",
            "date": "2017-04-20",
            "organization": "Malwarebytes",
            "author": "J\u00e9r\u00f4me Segura",
            "title": "Binary Options malvertising campaign drops ISFB banking Trojan",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://arielkoren.com/blog/2016/11/01/ursnif-malware-deep-technical-dive/",
            "date": "2016-11-01",
            "organization": "Ariel Koren's Blog",
            "author": "Ariel Koren",
            "title": "Ursnif Malware: Deep Technical Dive",
            "categories": [
                "ISFB"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/meet-goznym-the-banking-malware-offspring-of-gozi-isfb-and-nymaim/",
            "date": "2016-04-14",
            "organization": "SecurityIntelligence",
            "author": "Limor Kessem",
            "title": "Meet GozNym: The Banking Malware Offspring of Gozi ISFB and Nymaim",
            "categories": [
                "ISFB",
                "Nymaim",
                "GozNym"
            ]
        },
        {
            "data_url": "https://github.com/gbrindisi/malware/tree/master/windows/gozi-isfb",
            "date": "2016-03-23",
            "organization": "Github (gbrindisi)",
            "author": "gbrindisi",
            "title": "Gozi ISFB Sourceccode",
            "categories": [
                "ISFB"
            ]
        }
    ],
    "mitre": []
};