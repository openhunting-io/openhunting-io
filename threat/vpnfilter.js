var threatdata = {
    "name": "VPNFilter",
    "alias": "VPNFilter",
    "category": "Malware",
    "type": "Backdoor, Botnet, Worm",
    "modified": "2022-04-20",
    "all_data": {
        "tool": "VPNFilter",
        "names": [
            {
                "name": "VPNFilter"
            }
        ],
        "description": "(Talos) For several months, Talos has been working with public- and private-sector threat intelligence partners and law enforcement in researching an advanced, likely state-sponsored or state-affiliated actor's widespread use of a sophisticated modular malware system we call 'VPNFilter.' We have not completed our research, but recent events have convinced us that the correct way forward is to now share our findings so that affected parties can take the appropriate action to defend themselves.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Botnet",
            "Worm"
        ],
        "information": [
            "https://blog.talosintelligence.com/2018/05/VPNFilter.html",
            "https://blog.talosintelligence.com/2018/06/vpnfilter-update.html",
            "https://blog.talosintelligence.com/2018/09/vpnfilter-part-3.html",
            "https://securelist.com/vpnfilter-exif-to-c2-mechanism-analysed/85721/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/vpnfilter-affected-devices-still-riddled-with-19-vulnerabilities",
            "https://www.sophos.com/en-us/medialibrary/PDFs/technical-papers/sophos-VPN-Filter-analysis-v2.pdf",
            "https://www.dropbox.com/s/9lkeenhveb3xbkq/Whitepaper%20VPNFilter%20IoT%20botnet%20seized%20by%20the%20FBI.pdf?dl=0"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.vpnfilter"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:vpnfilter"
        ],
        "uuid": "2b224eef-4ed5-4267-8c56-acd46592cb6d",
        "last-card-change": "2020-05-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "vpnfilter",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cisa.gov/uscert/sites/default/files/publications/AA22-110A_Joint_CSA_Russian_State-Sponsored_and_Criminal_Cyber_Threats_to_Critical_Infrastructure_4_20_22_Final.pdf",
            "date": "2022-04-20",
            "organization": "CISA",
            "author": "CISA",
            "title": "AA22-110A Joint CSA: Russian State-Sponsored and Criminal Cyber  Threats to Critical Infrastructure",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "DanaBot",
                "DoppelDridex",
                "Emotet",
                "EternalPetya",
                "GoldMax",
                "Industroyer",
                "Sality",
                "SmokeLoader",
                "TrickBot",
                "Triton",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-110a",
            "date": "2022-04-20",
            "organization": "CISA",
            "author": "CISA",
            "title": "Alert (AA22-110A): Russian State-Sponsored and Criminal Cyber Threats to Critical Infrastructure",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "DanaBot",
                "DoppelDridex",
                "Emotet",
                "EternalPetya",
                "GoldMax",
                "Industroyer",
                "Sality",
                "SmokeLoader",
                "TrickBot",
                "Triton",
                "Zloader",
                "Killnet"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/acidrain-a-modem-wiper-rains-down-on-europe/",
            "date": "2022-03-31",
            "organization": "Sentinel LABS",
            "author": "Juan Andr\u00e9s Guerrero-Saade",
            "title": "AcidRain | A Modem Wiper Rains Down on Europe",
            "categories": [
                "AcidRain",
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://cyberpeaceinstitute.org/ukraine-timeline-of-cyberattacks",
            "date": "2022-02-25",
            "organization": "",
            "author": "CyberPeace Institute",
            "title": "UKRAINE: Timeline of Cyberattacks",
            "categories": [
                "VPNFilter",
                "EternalPetya",
                "HermeticWiper",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/02/current-executive-guidance-for-ongoing.html",
            "date": "2022-02-24",
            "organization": "Talos",
            "author": "Mitch Neff",
            "title": "Threat Advisory: Current executive guidance for ongoing cyberattacks in Ukraine",
            "categories": [
                "VPNFilter",
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/02/threat-advisory-cyclops-blink.html",
            "date": "2022-02-24",
            "organization": "Cisco Talos",
            "author": "Talos",
            "title": "Threat Advisory: Cyclops Blink",
            "categories": [
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://www.tesorion.nl/en/resources/pdfstore/Report-OSINT-Russia-Ukraine-Conflict-Cyberaspect.pdf",
            "date": "2022-02-24",
            "organization": "Tesorion",
            "author": "TESORION",
            "title": "Report OSINT: Russia/ Ukraine Conflict Cyberaspect",
            "categories": [
                "Mirai",
                "VPNFilter",
                "BlackEnergy",
                "EternalPetya",
                "HermeticWiper",
                "Industroyer",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/sites/default/files/publications/AA22-054A%20New%20Sandworm%20Malware%20Cyclops%20Blink%20Replaces%20VPN%20Filter.pdf",
            "date": "2022-02-23",
            "organization": "",
            "author": "CISA",
            "title": "Advisory: New Sandworm malware Cyclops Blink replaces VPNFilter",
            "categories": [
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-054a",
            "date": "2022-02-23",
            "organization": "CISA",
            "author": "CISA",
            "title": "Alert (AA22-054A) New Sandworm Malware Cyclops Blink Replaces VPNFilter",
            "categories": [
                "CyclopsBlink",
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://www.ncsc.gov.uk/news/joint-advisory-shows-new-sandworm-malware-cyclops-blink-replaces-vpnfilter",
            "date": "2022-02-23",
            "organization": "NCSC UK",
            "author": "NCSC UK",
            "title": "New Sandworm malware Cyclops Blink replaces VPNFilter",
            "categories": [
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://www.lacework.com/blog/mirai-goes-stealth-tls-iot-malware/",
            "date": "2021-09-30",
            "organization": "lacework",
            "author": "Lacework Labs",
            "title": "Mirai goes Stealth \u2013 TLS & IoT Malware",
            "categories": [
                "Mirai",
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/a/vpnfilter-two-years-later-routers-still-compromised-.html",
            "date": "2021-01-19",
            "organization": "Trend Micro",
            "author": "Stephen Hilt",
            "title": "VPNFilter Two Years Later: Routers Still Compromised",
            "categories": [
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://www.gov.uk/government/news/uk-exposes-series-of-russian-cyber-attacks-against-olympic-and-paralympic-games",
            "date": "2020-10-19",
            "organization": "UK Government",
            "author": "ForeignCommonwealth & Development Office",
            "title": "UK exposes series of Russian cyber attacks against Olympic and Paralympic Games",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "EternalPetya",
                "Industroyer"
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
            "data_url": "https://i.blackhat.com/USA-19/Thursday/us-19-Doerr-The-Enemy-Within-Modern-Supply-Chain-Attacks.pdf",
            "date": "2019-08-08",
            "organization": "BlackHat",
            "author": "Eric Doerr",
            "title": "The Enemy Within: Modern Supply Chain Attacks",
            "categories": [
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://msrc-blog.microsoft.com/2019/08/05/corporate-iot-a-path-to-intrusion/",
            "date": "2019-08-05",
            "organization": "Microsoft",
            "author": "MSRC Team",
            "title": "Corporate IoT \u2013 a path to intrusion (APT28/STRONTIUM)",
            "categories": [
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2019/05/one-year-later-vpnfilter-catastrophe.html",
            "date": "2019-05-23",
            "organization": "Cisco Talos",
            "author": "Martin Lee",
            "title": "One year later: The VPNFilter catastrophe that wasn't",
            "categories": [
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2018/09/vpnfilter-part-3.html",
            "date": "2018-09-26",
            "organization": "Cisco",
            "author": "Edmund Brumaghin",
            "title": "VPNFilter III: More Tools for the Swiss Army Knife of Malware",
            "categories": [
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/vpnfilter-affected-devices-still-riddled-with-19-vulnerabilities",
            "date": "2018-07-13",
            "organization": "Trend Micro",
            "author": "Tony Yang",
            "title": "VPNFilter-affected Devices Still Riddled with 19 Vulnerabilities",
            "categories": [
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2018/06/vpnfilter-update.html?m=1",
            "date": "2018-06-06",
            "organization": "Cisco Talos",
            "author": "William Largent",
            "title": "VPNFilter Update - VPNFilter exploits endpoints, targets new devices",
            "categories": [
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://securelist.com/vpnfilter-exif-to-c2-mechanism-analysed/85721/",
            "date": "2018-05-24",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "VPNFilter EXIF to C2 mechanism analysed",
            "categories": [
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2018/05/VPNFilter.html",
            "date": "2018-05-23",
            "organization": "Cisco Talos",
            "author": "Cisco Talos",
            "title": "New VPNFilter malware targets at least 500K networking devices worldwide",
            "categories": [
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://www.symantec.com/blogs/threat-intelligence/vpnfilter-iot-malware",
            "date": "2018-05-23",
            "organization": "Symantec",
            "author": "Symantec Security Response Team",
            "title": "VPNFilter: New Router Malware with Destructive Capabilities",
            "categories": [
                "VPNFilter"
            ]
        },
        {
            "data_url": "https://www.justice.gov/opa/pr/justice-department-announces-actions-disrupt-advanced-persistent-threat-28-botnet-infected",
            "date": "2018-05-23",
            "organization": "Department of Justice",
            "author": "Office of Public Affairs",
            "title": "Justice Department Announces Actions to Disrupt Advanced Persistent Threat 28 Botnet of Infected Routers and Network Storage Devices",
            "categories": [
                "VPNFilter",
                "APT28"
            ]
        },
        {
            "data_url": "https://www.sophos.com/en-us/medialibrary/PDFs/technical-papers/sophos-VPN-Filter-analysis-v2.pdf?la=en",
            "date": "2018-05",
            "organization": "Sophos",
            "author": "Sergei Shevchenko",
            "title": "VPNFilter Botnet - a SophosLabs Analysis",
            "categories": [
                "VPNFilter"
            ]
        }
    ],
    "mitre": []
};