var threatdata = {
    "name": "GlobeImposter",
    "alias": "GlobeImposter, Fake Globe",
    "category": "Malware",
    "type": "Ransomware",
    "modified": "2023-04-25",
    "all_data": {
        "tool": "GlobeImposter",
        "names": [
            {
                "name": "GlobeImposter"
            },
            {
                "name": "Fake Globe"
            }
        ],
        "description": "(Malwarebytes) Ransom.GlobeImposter is a ransomware application that will encrypt files on a victim machine and demand payment to retrieve the information. Ransom.GlobeImposter is also known as Fake Globe due to how the software mimics the Globe ransomware family. Ransom.GlobeImposter may be distributed through a malicious spam campaign, recognizable only with their lack of message content and an attached ZIP file. This type of spam is called a \u201cblank slate.\u201d Ransom.GlobeImposter is also distributed via exploits and malicious advertising, fake updates, and repacked infected installers.",
        "category": "Malware",
        "type": [
            "Ransomware"
        ],
        "information": [
            "https://blog.malwarebytes.com/detections/ransom-globeimposter/",
            "https://www.bleepingcomputer.com/news/security/new-doc-globeimposter-ransomware-variant-malspam-campaign-underway/",
            "https://blog.fortinet.com/2017/08/05/analysis-of-new-globeimposter-ransomware-variant",
            "https://info.phishlabs.com/blog/globe-imposter-ransomware-makes-a-new-run",
            "https://isc.sans.edu/diary/23417",
            "https://blog.ensilo.com/globeimposter-ransomware-technical",
            "https://www.acronis.com/en-us/blog/posts/globeimposter-ransomware-holiday-gift-necurs-botnet",
            "https://asec.ahnlab.com/en/48940/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.globeimposter"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:GlobeImposter"
        ],
        "playbook": [
            "https://decrypter.emsisoft.com/howtos/emsisoft_howto_globeimposter.pdf"
        ],
        "uuid": "6b34667c-43b9-4922-b9ee-465414f601a5",
        "last-card-change": "2023-04-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "globeimposter",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://asec.ahnlab.com/en/48940/",
            "date": "2023-03-08",
            "organization": "AhnLab",
            "author": "ASEC",
            "title": "GlobeImposter Ransomware Being Distributed with MedusaLocker via RDP",
            "categories": [
                "GlobeImposter",
                "MedusaLocker"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/blog/recent-tzw-campaigns-revealed-as-part-of-globeimposter-malware-family/",
            "date": "2023-02-15",
            "organization": "SentinelOne",
            "author": "Jim Walter",
            "title": "Recent TZW Campaigns Revealed As Part of GlobeImposter Malware Family",
            "categories": [
                "GlobeImposter"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/ko/30284/",
            "date": "2021-12-28",
            "organization": "AhnLab",
            "author": "ASEC Analysis Team",
            "title": "Cases of Lockis ransomware infection",
            "categories": [
                "GlobeImposter"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/ransomware-preparedness-a-call-to-action/",
            "date": "2021-04-27",
            "organization": "CrowdStrike",
            "author": "Josh Dalman",
            "title": "Ransomware Preparedness: A Call to Action",
            "categories": [
                "Dharma",
                "GlobeImposter",
                "Maze",
                "Phobos",
                "CIRCUS SPIDER",
                "TRAVELING SPIDER"
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
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-swathmore",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD SWATHMORE",
            "categories": [
                "GlobeImposter",
                "Gozi",
                "IcedID",
                "TrickBot",
                "LUNAR SPIDER"
            ]
        },
        {
            "data_url": "https://blog.360totalsecurity.com/en/globeimposter-which-has-more-than-20-variants-is-still-wildly-growing/",
            "date": "2018-08-30",
            "organization": "360 Total Security",
            "author": "Elley",
            "title": "GlobeImposter which has more than 20 variants, is still wildly growing",
            "categories": [
                "GlobeImposter"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/diary/23417",
            "date": "2018-03-07",
            "organization": "InfoSec Handlers Diary Blog",
            "author": "Brad Duncan",
            "title": "Ransomware news: GlobeImposter gets a facelift, GandCrab is still out there",
            "categories": [
                "Gandcrab",
                "GlobeImposter"
            ]
        },
        {
            "data_url": "https://blog.ensilo.com/globeimposter-ransomware-technical",
            "date": "2018-01-16",
            "organization": "enSilo",
            "author": "Alon Hadar",
            "title": "GlobeImposter Ransomware",
            "categories": [
                "GlobeImposter"
            ]
        },
        {
            "data_url": "https://www.acronis.com/en-us/blog/posts/globeimposter-ransomware-holiday-gift-necurs-botnet",
            "date": "2018-01-15",
            "organization": "Acronis",
            "author": "Acronis Security",
            "title": "GlobeImposter ransomware: A holiday gift from the Necurs botnet",
            "categories": [
                "GlobeImposter"
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
            "data_url": "https://go.group-ib.com/rs/689-LRE-818/images/Group-IB_Ransomware_whitepaper_eng.pdf",
            "date": "2018",
            "organization": "Group-IB",
            "author": "Group-IB",
            "title": "The evolution of ransomware and its distribution methods",
            "categories": [
                "GlobeImposter"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/new-doc-globeimposter-ransomware-variant-malspam-campaign-underway/",
            "date": "2017-12-22",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "New .DOC GlobeImposter Ransomware Variant Malspam Campaign Underway",
            "categories": [
                "GlobeImposter"
            ]
        },
        {
            "data_url": "https://info.phishlabs.com/blog/globe-imposter-ransomware-makes-a-new-run",
            "date": "2017-08-10",
            "organization": "PhishLabs",
            "author": "Amanda Kline",
            "title": "Globe Imposter Ransomware Makes a New Run",
            "categories": [
                "GlobeImposter"
            ]
        },
        {
            "data_url": "https://blog.fortinet.com/2017/08/05/analysis-of-new-globeimposter-ransomware-variant",
            "date": "2017-08-05",
            "organization": "Fortinet",
            "author": "Xiaopeng Zhang",
            "title": "Analysis of New GlobeImposter Ransomware Variant",
            "categories": [
                "GlobeImposter"
            ]
        },
        {
            "data_url": "https://www.emsisoft.com/ransomware-decryption-tools/globeimposter",
            "date": "2016-12-23",
            "organization": "",
            "author": "Emsisoft",
            "title": "Emsisoft Decryptor for GlobeImposter",
            "categories": [
                "GlobeImposter"
            ]
        }
    ],
    "mitre": []
};