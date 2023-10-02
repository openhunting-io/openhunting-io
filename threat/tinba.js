var threatdata = {
    "name": "Tinba",
    "alias": "Tinba, Tiny Banker, TinyBanker, Tina, Illi, Zusy",
    "category": "Malware",
    "type": "Banking trojan, Credential stealer",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Tinba",
        "names": [
            {
                "name": "Tinba"
            },
            {
                "name": "Tiny Banker"
            },
            {
                "name": "TinyBanker"
            },
            {
                "name": "Tina"
            },
            {
                "name": "Illi"
            },
            {
                "name": "Zusy"
            }
        ],
        "description": "(Trend Micro) Tinba is a small data stealing Trojan-banker. It hooks into browsers and steals login data, as well as sniffs network traffic. As with several other sophisticated banker-Trojans, it also uses Man in the Browser (MiTB) tricks and Web injects to change the look and feel of certain Web pages. Its purpose is to circumvent Two Factor Authentication (2FA) or to trick the infected user into providing additional sensitive data such as credit card data.\n\nTinba is the smallest Trojan-banker CSIS has encountered to date, and it belongs to a new family of malware. The code is approximately 20 KB in size (including configuration and Web injects) and is simple without any packing or advanced encryption. Analyzed samples show that the antivirus detection is low.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Credential stealer"
        ],
        "information": [
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp_w32-tinba-tinybanker.pdf",
            "https://labsblog.f-secure.com/2016/01/18/analyzing-tinba-configuration-data/",
            "http://www.theregister.co.uk/2012/06/04/small_banking_trojan/",
            "https://securityintelligence.com/tinba-trojan-sets-its-sights-on-romania/",
            "https://securityblog.switch.ch/2015/06/18/so-long-and-thanks-for-all-the-domains/",
            "http://contagiodump.blogspot.com/2012/06/amazon.html",
            "https://www.zscaler.com/blogs/research/look-recent-tinba-banking-trojan-variant",
            "http://stopmalvertising.com/malware-reports/mini-analysis-of-the-tinybanker-tinba.html",
            "http://securityintelligence.com/tinba-malware-reloaded-and-attacking-banks-around-the-world/",
            "https://github.com/nyx0/Tinba"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tinba"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:TinyBanker"
        ],
        "uuid": "b3b23d2b-3498-486f-a47f-e24ce93ed5fd",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tinba",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.talosintelligence.com/2022/02/threat-roundup-0204-0211.html",
            "date": "2022-02-11",
            "organization": "Cisco Talos",
            "author": "Talos",
            "title": "Threat Roundup for February 4 to February 11",
            "categories": [
                "DarkComet",
                "Ghost RAT",
                "Loki Password Stealer (PWS)",
                "Tinba",
                "Tofsee",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.f5.com/labs/articles/education/banking-trojans-a-reference-guide-to-the-malware-family-tree",
            "date": "2020-08-09",
            "organization": "F5 Labs",
            "author": "Remi Cohen",
            "title": "Banking Trojans: A Reference Guide to the Malware Family Tree",
            "categories": [
                "BackSwap",
                "Carberp",
                "Citadel",
                "DanaBot",
                "Dridex",
                "Dyre",
                "Emotet",
                "Gozi",
                "Kronos",
                "PandaBanker",
                "Ramnit",
                "Shylock",
                "SpyEye",
                "Tinba",
                "TrickBot",
                "Vawtrak",
                "Zeus"
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
            "data_url": "https://adalogics.com/blog/the-state-of-advanced-code-injections",
            "date": "2019-08-13",
            "organization": "Adalogics",
            "author": "David Korczynski",
            "title": "The state of advanced code injections",
            "categories": [
                "Dridex",
                "Emotet",
                "Tinba"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2019/03/blackberry-cylance-vs-tinba-banking-trojan",
            "date": "2019-03-13",
            "organization": "Cylance",
            "author": "Tatsuya Hasegawa",
            "title": "BlackBerry Cylance vs. Tinba Banking Trojan",
            "categories": [
                "Tinba"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/research/look-recent-tinba-banking-trojan-variant",
            "date": "2018-07-05",
            "organization": "Zscaler",
            "author": "Dhanalakshmi",
            "title": "A Look At Recent Tinba Banking Trojan Variant",
            "categories": [
                "Tinba"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/tinba-trojan-sets-its-sights-on-romania/",
            "date": "2015-08-12",
            "organization": "SecurityIntelligence",
            "author": "Limor Kessem",
            "title": "Tinba Trojan Sets Its Sights on Romania",
            "categories": [
                "Tinba"
            ]
        },
        {
            "data_url": "https://securityblog.switch.ch/2015/06/18/so-long-and-thanks-for-all-the-domains/",
            "date": "2015-06-18",
            "organization": "SWITCH Security Blog",
            "author": "Slavo Greminger",
            "title": "So Long, and Thanks for All the Domains",
            "categories": [
                "Tinba"
            ]
        },
        {
            "data_url": "http://securityintelligence.com/tinba-malware-reloaded-and-attacking-banks-around-the-world/",
            "date": "2014-09-22",
            "organization": "SecurityIntelligence",
            "author": "Assaf Regev",
            "title": "Tinba Malware Reloaded and Attacking Banks Around the World",
            "categories": [
                "Tinba"
            ]
        },
        {
            "data_url": "http://stopmalvertising.com/malware-reports/mini-analysis-of-the-tinybanker-tinba.html",
            "date": "2014-07-16",
            "organization": "StopMalvertising",
            "author": "Kimberly",
            "title": "Mini Analysis of the TinyBanker Tinba",
            "categories": [
                "Tinba"
            ]
        },
        {
            "data_url": "http://contagiodump.blogspot.com/2012/06/amazon.html",
            "date": "2012-06-06",
            "organization": "Contagio Dump",
            "author": "Mila Parkour",
            "title": "Tinba / Zusy - tiny banker trojan",
            "categories": [
                "Tinba"
            ]
        },
        {
            "data_url": "http://www.theregister.co.uk/2012/06/04/small_banking_trojan/",
            "date": "2012-06-04",
            "organization": "",
            "author": "John Leyden",
            "title": "Small banking Trojan poses major risk",
            "categories": [
                "Tinba"
            ]
        },
        {
            "data_url": "http://www.trendmicro.com/cloud-content/us/pdfs/security-intelligence/white-papers/wp_w32-tinba-tinybanker.pdf",
            "date": "2012",
            "organization": "CSIS Trend Micro",
            "author": "Peter Kruse (CSIS)",
            "title": "W32.Tinba (Tinybanker) The Turkish Incident",
            "categories": [
                "Tinba"
            ]
        }
    ],
    "mitre": []
};