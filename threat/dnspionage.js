var threatdata = {
    "name": "DNSpionage",
    "alias": "DNSpionage",
    "category": "APT",
    "type": "-",
    "modified": "2021-04-08",
    "all_data": {
        "actor": "DNSpionage",
        "names": [
            {
                "name": "DNSpionage",
                "name-giver": "Talos"
            }
        ],
        "country": [
            "Iran"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2019",
        "description": "(Talos) Cisco Talos recently discovered a new campaign targeting Lebanon and the United Arab Emirates (UAE) affecting .gov domains, as well as a private Lebanese airline company. Based on our research, it\u2019s clear that this adversary spent time understanding the victims\u2019 network infrastructure in order to remain under the radar and act as inconspicuous as possible during their attacks.\n\nBased on this actor\u2019s infrastructure and TTPs, we haven\u2019t been able to connect them with any other campaign or actor that\u2019s been observed recently. This particular campaign utilizes two fake, malicious websites containing job postings that are used to compromise targets via malicious Microsoft Office documents with embedded macros. The malware utilized by this actor, which we are calling \u201cDNSpionage,\u201d supports HTTP and DNS communication with the attackers.\n\nTalos found a possible relationship between DNSpionage and {{OilRig, APT 34, Helix Kitten, Chrysene}}.",
        "observed-sectors": [
            "Aviation",
            "Government",
            "Law enforcement",
            "Telecommunications",
            "Internet infrastructure"
        ],
        "observed-countries": [
            "Albania",
            "Cyprus",
            "Egypt",
            "Iraq",
            "Jordan",
            "Kuwait",
            "Lebanon",
            "Libya",
            "Sweden",
            "UAE",
            "USA",
            "North Africa"
        ],
        "tools": [
            "DNSpionage",
            "Karkoff"
        ],
        "operations": [
            {
                "date": "2019-04",
                "activity": "DNSpionage brings out the Karkoff\nhttps://blog.talosintelligence.com/2019/04/dnspionage-brings-out-karkoff.html"
            }
        ],
        "information": [
            "https://blog.talosintelligence.com/2018/11/dnspionage-campaign-targets-middle-east.html",
            "https://www.fireeye.com/blog/threat-research/2019/01/global-dns-hijacking-campaign-dns-record-manipulation-at-scale.html",
            "https://www.crowdstrike.com/blog/widespread-dns-hijacking-activity-targets-multiple-sectors/",
            "https://krebsonsecurity.com/tag/dnspionage/"
        ],
        "uuid": "bada63ae-9429-4f84-b141-2970799ac9d5",
        "last-card-change": "2020-04-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dnspionage",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://research.checkpoint.com/2021/irans-apt34-returns-with-an-updated-arsenal/",
            "date": "2021-04-08",
            "organization": "Checkpoint",
            "author": "Check Point Research",
            "title": "Iran\u2019s APT34 Returns with an Updated Arsenal",
            "categories": [
                "DNSpionage",
                "SideTwist",
                "TONEDEAF"
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
            "data_url": "https://ti.qianxin.com/uploads/2020/02/13/cb78386a082f465f259b37dae5df4884.pdf",
            "date": "2020-02-13",
            "organization": "Qianxin",
            "author": "Qi Anxin Threat Intelligence Center",
            "title": "APT Report 2019",
            "categories": [
                "Chrysaor",
                "Exodus",
                "Dacls",
                "VPNFilter",
                "DNSRat",
                "Griffon",
                "KopiLuwak",
                "More_eggs",
                "SQLRat",
                "AppleJeus",
                "BONDUPDATER",
                "Agent.BTZ",
                "Anchor",
                "AndroMut",
                "AppleJeus",
                "BOOSTWRITE",
                "Brambul",
                "Carbanak",
                "Cobalt Strike",
                "Dacls",
                "DistTrack",
                "DNSpionage",
                "Dtrack",
                "ELECTRICFISH",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Grateful POS",
                "HOPLIGHT",
                "Imminent Monitor RAT",
                "jason",
                "Joanap",
                "KerrDown",
                "KEYMARBLE",
                "Lambert",
                "LightNeuron",
                "LoJax",
                "MiniDuke",
                "PolyglotDuke",
                "PowerRatankba",
                "Rising Sun",
                "SDBbot",
                "ServHelper",
                "Snatch",
                "Stuxnet",
                "TinyMet",
                "tRat",
                "TrickBot",
                "Volgmer",
                "X-Agent",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/cobalt-edgewater",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT EDGEWATER",
            "categories": [
                "DNSpionage",
                "Karkoff",
                "DNSpionage"
            ]
        },
        {
            "data_url": "https://nsfocusglobal.com/apt34-event-analysis-report/",
            "date": "2019-11-09",
            "organization": "NSFOCUS",
            "author": "Mina Hao",
            "title": "APT34 Event Analysis Report",
            "categories": [
                "BONDUPDATER",
                "DNSpionage"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=ws1k44ZhJ3g",
            "date": "2019-11-07",
            "organization": "Virus Bulletin",
            "author": "Warren Mercer",
            "title": "DNS on FIre",
            "categories": [
                "DNSpionage"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/uploads/pdf/magazine/2019/VB2019-Mercer-Rascagneres.pdf",
            "date": "2019-11-07",
            "organization": "Virus Bulletin",
            "author": "Warren Mercer",
            "title": "DNS on Fire",
            "categories": [
                "DNSpionage"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2019/04/dnspionage-brings-out-karkoff.html",
            "date": "2019-04-23",
            "organization": "Talos",
            "author": "Warren Mercer",
            "title": "DNSpionage brings out the Karkoff",
            "categories": [
                "DNSpionage",
                "Karkoff",
                "DNSpionage"
            ]
        },
        {
            "data_url": "https://marcoramilli.com/2019/04/23/apt34-webmask-project/",
            "date": "2019-04-23",
            "organization": "",
            "author": "Marco Ramilli",
            "title": "APT34: webmask project",
            "categories": [
                "DNSpionage"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/tag/dnspionage/",
            "date": "2019-02-18",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "A Deep Dive on the Recent Widespread DNS Hijacking Attacks",
            "categories": [
                "DNSpionage"
            ]
        },
        {
            "data_url": "https://www.us-cert.gov/ncas/alerts/AA19-024A",
            "date": "2019-02-13",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Alert (AA19-024A): DNS Infrastructure Hijacking Campaign",
            "categories": [
                "DNSpionage"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/widespread-dns-hijacking-activity-targets-multiple-sectors/",
            "date": "2019-01-25",
            "organization": "CrowdStrike",
            "author": "Matt Dahl",
            "title": "Widespread DNS Hijacking Activity Targets Multiple Sectors",
            "categories": [
                "DNSpionage"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2019/01/global-dns-hijacking-campaign-dns-record-manipulation-at-scale.html",
            "date": "2019-01-10",
            "organization": "FireEye",
            "author": "Muks Hirani",
            "title": "Global DNS Hijacking Campaign: DNS Record Manipulation at Scale",
            "categories": [
                "DNSpionage",
                "DNSpionage"
            ]
        },
        {
            "data_url": "https://blog-cert.opmd.fr/dnspionage-focus-on-internal-actions/",
            "date": "2019-01-10",
            "organization": "CERT-OPMD",
            "author": "CERT-OPMD",
            "title": "[DNSPIONAGE] \u2013 Focus on internal actions",
            "categories": [
                "DNSpionage"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/blog/global-dns-hijacking-campaign-dns-record-manipulation-at-scale",
            "date": "2019-01-09",
            "organization": "Mandiant",
            "author": "Muks Hirani",
            "title": "Global DNS Hijacking Campaign: DNS Record Manipulation at Scale",
            "categories": [
                "DNSpionage"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2018/11/dnspionage-campaign-targets-middle-east.html",
            "date": "2018-11-27",
            "organization": "Cisco Talos",
            "author": "Warren Mercer",
            "title": "DNSpionage Campaign Targets Middle East",
            "categories": [
                "DNSpionage",
                "DNSpionage"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/source-code-of-iranian-cyber-espionage-tools-leaked-on-telegram/",
            "date": "2015-09-17",
            "organization": "F-Secure",
            "author": "F-Secure Global",
            "title": "The Dukes: 7 Years Of Russian Cyber-Espionage",
            "categories": [
                "TwoFace",
                "BONDUPDATER",
                "DNSpionage"
            ]
        }
    ],
    "mitre": []
};