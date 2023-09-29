var threatdata = {
    "name": "DNSpionage",
    "alias": "DNSpionage, Agent Drable, AgentDrable",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "DNSpionage",
        "names": [
            {
                "name": "DNSpionage"
            },
            {
                "name": "Agent Drable"
            },
            {
                "name": "AgentDrable"
            }
        ],
        "description": "(Talos) Based on this actor's infrastructure and TTPs, we haven't been able to connect them with any other campaign or actor that's been observed recently. This particular campaign utilizes two fake, malicious websites containing job postings that are used to compromise targets via malicious Microsoft Office documents with embedded macros. The malware utilized by this actor, which we are calling 'DNSpionage,' supports HTTP and DNS communication with the attackers.\n\nIn a separate campaign, the attackers used the same IP to redirect the DNS of legitimate .gov and private company domains. During each DNS compromise, the actor carefully generated Let's Encrypt certificates for the redirected domains. These certificates provide X.509 certificates for TLS free of charge to the user. We don't know at this time if the DNS redirections were successful.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.talosintelligence.com/2018/11/dnspionage-campaign-targets-middle-east.html",
            "https://www.us-cert.gov/ncas/alerts/AA19-024A",
            "https://blog-cert.opmd.fr/dnspionage-focus-on-internal-actions/",
            "https://www.zdnet.com/article/source-code-of-iranian-cyber-espionage-tools-leaked-on-telegram/",
            "https://www.fireeye.com/blog/threat-research/2019/01/global-dns-hijacking-campaign-dns-record-manipulation-at-scale.html",
            "https://www.lastline.com/labsblog/threat-actor-cold-river-network-traffic-analysis-and-a-deep-dive-on-agent-drable/",
            "https://blog.talosintelligence.com/2019/04/dnspionage-brings-out-karkoff.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dnspionage"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DNSpionage"
        ],
        "uuid": "3b9f0a41-e890-4c2e-aacb-fab6def66f87",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
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
    ]
};