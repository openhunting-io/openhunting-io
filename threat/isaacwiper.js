var threatdata = {
    "name": "IsaacWiper",
    "alias": "IsaacWiper, LASAINRAW",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2023-03-15",
    "all_data": {
        "tool": "IsaacWiper",
        "names": [
            {
                "name": "IsaacWiper"
            },
            {
                "name": "LASAINRAW"
            }
        ],
        "description": "(ESET) On February 24th, 2022, we detected yet another new wiper in a Ukrainian governmental network. We named it IsaacWiper and we are currently assessing its links, if any, with {{HermeticWiper}}. It is important to note that it was seen in an organization that was not affected by HermeticWiper.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://www.welivesecurity.com/2022/03/01/isaacwiper-hermeticwizard-wiper-worm-targeting-ukraine/",
            "https://www.cybereason.com/blog/cybereason-vs.-hermeticwiper-and-isaacwiper",
            "https://securityintelligence.com/posts/new-wiper-malware-used-against-ukranian-organizations/",
            "https://blog.malwarebytes.com/threat-intelligence/2022/03/double-header-isaacwiper-and-caddywiper/",
            "https://therecord.media/a-deeper-look-at-the-malware-being-used-on-ukrainian-targets/",
            "https://cybersecurity.att.com/blogs/labs-research/analysis-on-recent-wiper-attacks-examples-and-how-they-wiper-malware-works"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.isaacwiper"
        ],
        "uuid": "c8111f64-f7e7-4ff8-92b2-ebf4478ddb9c",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "IsaacWiper",
            "malware_alias": "LASAINRAW",
            "malware": "win.isaacwiper",
            "last_update": "2022-03-13 21:39:14",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "6C10466AD7C153E7F949FA3C6600B6AC",
                        "timestamp": "2022-03-13 21:39:14"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-03-13 21:39:14",
    "file_name": "isaacwiper",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.microsoft.com/en-us/security/business/security-insider/wp-content/uploads/2023/03/A-year-of-Russian-hybrid-warfare-in-Ukraine_MS-Threat-Intelligence-1.pdf",
            "date": "2023-03-15",
            "organization": "Microsoft",
            "author": "Microsoft Threat Intelligence",
            "title": "A year of Russian hybrid warfare in Ukraine",
            "categories": [
                "CaddyWiper",
                "DesertBlade",
                "DoubleZero",
                "HermeticWiper",
                "INDUSTROYER2",
                "IsaacWiper",
                "PartyTicket",
                "SwiftSlicer",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=mrTdSdMMgnk",
            "date": "2022-10-24",
            "organization": "Youtube (Virus Bulletin)",
            "author": "Alexander Adamov",
            "title": "Russian wipers in the cyberwar against Ukraine",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "DesertBlade",
                "DoubleZero",
                "EternalPetya",
                "HermeticWiper",
                "HermeticWizard",
                "INDUSTROYER2",
                "IsaacWiper",
                "KillDisk",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/the-anatomy-of-wiper-malware-part-3/",
            "date": "2022-09-26",
            "organization": "CrowdStrike",
            "author": "Ioan Iacob",
            "title": "The Anatomy of Wiper Malware, Part 3: Input/Output Controls",
            "categories": [
                "CaddyWiper",
                "DEADWOOD",
                "DistTrack",
                "DoubleZero",
                "DUSTMAN",
                "HermeticWiper",
                "IsaacWiper",
                "Meteor",
                "Petya",
                "Sierra(Alfa,Bravo, ...)",
                "StoneDrill",
                "WhisperGate",
                "ZeroCleare"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/overview-of-the-cyber-weapons-used-in-the-ukraine-russia-war/",
            "date": "2022-08-18",
            "organization": "Trustwave",
            "author": "Pawel Knapczyk",
            "title": "Overview of the Cyber Weapons Used in the Ukraine - Russia War",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "Cobalt Strike",
                "CredoMap",
                "DCRat",
                "DoubleZero",
                "GraphSteel",
                "GrimPlant",
                "HermeticWiper",
                "INDUSTROYER2",
                "InvisiMole",
                "IsaacWiper",
                "PartyTicket"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/overview-of-the-cyber-weapons-used-in-the-ukraine-russia-war",
            "date": "2022-08-18",
            "organization": "Trustwave",
            "author": "Pawel Knapczyk",
            "title": "Overview of the Cyber Weapons Used in the Ukraine - Russia War",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "Cobalt Strike",
                "CredoMap",
                "DCRat",
                "DoubleZero",
                "GraphSteel",
                "GrimPlant",
                "HermeticWiper",
                "INDUSTROYER2",
                "InvisiMole",
                "IsaacWiper",
                "PartyTicket"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/the-anatomy-of-wiper-malware-part-1/",
            "date": "2022-08-12",
            "organization": "CrowdStrike",
            "author": "Ioan Iacob",
            "title": "The Anatomy of Wiper Malware, Part 1: Common Techniques",
            "categories": [
                "Apostle",
                "CaddyWiper",
                "DEADWOOD",
                "DistTrack",
                "DoubleZero",
                "DUSTMAN",
                "HermeticWiper",
                "IsaacWiper",
                "IsraBye",
                "KillDisk",
                "Meteor",
                "Olympic Destroyer",
                "Ordinypt",
                "Petya",
                "Sierra(Alfa,Bravo, ...)",
                "StoneDrill",
                "WhisperGate",
                "ZeroCleare"
            ]
        },
        {
            "data_url": "https://experience.mandiant.com/trending-evil-2/p/1",
            "date": "2022-06-02",
            "organization": "Mandiant",
            "author": "Mandiant",
            "title": "TRENDING EVIL Q2 2022",
            "categories": [
                "CloudEyE",
                "Cobalt Strike",
                "CryptBot",
                "Emotet",
                "IsaacWiper",
                "QakBot"
            ]
        },
        {
            "data_url": "https://twitter.com/ESETresearch/status/1521910890072842240",
            "date": "2022-05-04",
            "organization": "Twitter (@ESETresearch)",
            "author": "Twitter (@ESETresearch)",
            "title": "Twitter thread on code similarity analysis, focussing on IsaacWiper and recent Cluster25 publication",
            "categories": [
                "IsaacWiper"
            ]
        },
        {
            "data_url": "https://cluster25.io/2022/05/03/a-strange-link-between-a-destructive-malware-and-the-loader-of-a-ransomware-group-isaacwiper-vs-vatet/",
            "date": "2022-05-03",
            "organization": "Cluster25",
            "author": "Cluster25",
            "title": "The Strange Link Between A Destructive Malware And A Ransomware-Gang Linked Custom Loader: IsaacWiper Vs Vatet",
            "categories": [
                "Cobalt Strike",
                "IsaacWiper",
                "PyXie"
            ]
        },
        {
            "data_url": "https://cybersecurity.att.com/blogs/labs-research/analysis-on-recent-wiper-attacks-examples-and-how-they-wiper-malware-works",
            "date": "2022-05-02",
            "organization": "AT&T",
            "author": "Fernando Martinez",
            "title": "Analysis on recent wiper attacks: examples and how wiper malware works",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "DoubleZero",
                "HermeticWiper",
                "INDUSTROYER2",
                "IsaacWiper"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/the-increasing-wiper-malware-threat",
            "date": "2022-04-28",
            "organization": "Fortinet",
            "author": "Gergely Revay",
            "title": "An Overview of the Increasing Wiper Malware Threat",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "DistTrack",
                "DoubleZero",
                "EternalPetya",
                "HermeticWiper",
                "IsaacWiper",
                "Olympic Destroyer",
                "Ordinypt",
                "WhisperGate",
                "ZeroCleare"
            ]
        },
        {
            "data_url": "https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4Vwwd",
            "date": "2022-04-27",
            "organization": "Microsoft",
            "author": "Microsoft Digital Security Unit (DSU)",
            "title": "Special Report: Ukraine An overview of Russia\u2019s cyberattack activity in Ukraine",
            "categories": [
                "CaddyWiper",
                "DoubleZero",
                "HermeticWiper",
                "INDUSTROYER2",
                "IsaacWiper",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://cip.gov.ua/en/news/khto-stoyit-za-kiberatakami-na-ukrayinsku-kritichnu-informaciinu-infrastrukturu-statistika-15-22-bereznya",
            "date": "2022-03-25",
            "organization": "GOV.UA",
            "author": "State Service of Special Communication and Information Protection of Ukraine (CIP)",
            "title": "Who is behind the Cyberattacks on Ukraine's Critical Information Infrastructure: Statistics for March 15-22",
            "categories": [
                "Xloader",
                "Agent Tesla",
                "CaddyWiper",
                "Cobalt Strike",
                "DoubleZero",
                "GraphSteel",
                "GrimPlant",
                "HeaderTip",
                "HermeticWiper",
                "IsaacWiper",
                "MicroBackdoor",
                "Pandora RAT"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/isaacwiper-continues-trend-wiper-attacks-against-ukraine/",
            "date": "2022-03-24",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "IsaacWiper Continues Trend of Wiper Attacks Against Ukraine",
            "categories": [
                "IsaacWiper"
            ]
        },
        {
            "data_url": "https://www.nextgov.com/cybersecurity/2022/03/ukrainian-cyber-lead-least-4-types-malware-are-targeting-ukrainian-institutions/363558/",
            "date": "2022-03-24",
            "organization": "NextGov",
            "author": "Brandi Vincent",
            "title": "Ukrainian Cyber Lead Says \u2018At Least 4 Types of Malware\u2019 in Use to Target Critical Infrastructure and Humanitarian Aid",
            "categories": [
                "CaddyWiper",
                "DoubleZero",
                "HermeticWiper",
                "IsaacWiper"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/mtp-2022-0324.pdf",
            "date": "2022-03-24",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "IsaacWiper Continues Trend of Wiper Attacks Against Ukraine",
            "categories": [
                "IsaacWiper"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-intelligence/2022/03/double-header-isaacwiper-and-caddywiper/",
            "date": "2022-03-18",
            "organization": "Malwarebytes",
            "author": "Threat Intelligence Team",
            "title": "Double header: IsaacWiper and CaddyWiper",
            "categories": [
                "CaddyWiper",
                "IsaacWiper"
            ]
        },
        {
            "data_url": "https://securelist.com/webinar-on-cyberattacks-in-ukraine-summary-and-qa/106075/",
            "date": "2022-03-14",
            "organization": "Kaspersky",
            "author": "GReAT",
            "title": "Webinar on cyberattacks in Ukraine \u2013 summary and Q&A",
            "categories": [
                "HermeticWiper",
                "HermeticWizard",
                "IsaacWiper",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://securityboulevard.com/2022/03/isaacwiper-followed-hermeticwiper-attack-on-ukraine-orgs/",
            "date": "2022-03-11",
            "organization": "Security Boulevard",
            "author": "Teri Robinson",
            "title": "IsaacWiper Followed HermeticWiper Attack on Ukraine Orgs",
            "categories": [
                "HermeticWiper",
                "IsaacWiper"
            ]
        },
        {
            "data_url": "https://www.brighttalk.com/webcast/15591/534324",
            "date": "2022-03-10",
            "organization": "BrightTALK (Kaspersky GReAT)",
            "author": "Costin Raiu",
            "title": "BrightTALK: A look at current cyberattacks in Ukraine",
            "categories": [
                "HermeticWiper",
                "HermeticWizard",
                "IsaacWiper",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/new-wiper-malware-used-against-ukranian-organizations/",
            "date": "2022-03-04",
            "organization": "IBM",
            "author": "John Dwyer",
            "title": "New Wiper Malware Used Against Ukranian Organizations",
            "categories": [
                "IsaacWiper"
            ]
        },
        {
            "data_url": "https://lifars.com/2022/03/a-closer-look-at-the-russian-actors-targeting-organizations-in-ukraine/",
            "date": "2022-03-03",
            "organization": "LIFARS",
            "author": "LIFARS",
            "title": "A Closer Look at the Russian Actors Targeting Organizations in Ukraine",
            "categories": [
                "HermeticWiper",
                "IsaacWiper",
                "Saint Bot",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://thehackernews.com/2022/03/second-new-isaacwiper-data-wiper.html",
            "date": "2022-03-01",
            "organization": "The Hacker News",
            "author": "Ravie Lakshmanan",
            "title": "Second New 'IsaacWiper' Data Wiper Targets Ukraine After Russian Invasion",
            "categories": [
                "IsaacWiper"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2022/03/01/isaacwiper-hermeticwizard-wiper-worm-targeting-ukraine/",
            "date": "2022-03-01",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "IsaacWiper and HermeticWizard: New wiper and worm targeting Ukraine",
            "categories": [
                "HermeticWiper",
                "IsaacWiper",
                "PartyTicket"
            ]
        },
        {
            "data_url": "https://msrc-blog.microsoft.com/2022/02/28/analysis-resources-cyber-threat-activity-ukraine/",
            "date": "2022-02-28",
            "organization": "Microsoft",
            "author": "MSRC Team",
            "title": "Cyber threat activity in Ukraine: analysis and resources",
            "categories": [
                "CaddyWiper",
                "DesertBlade",
                "DoubleZero",
                "HermeticWiper",
                "INDUSTROYER2",
                "IsaacWiper",
                "PartyTicket",
                "WhisperGate",
                "DEV-0586"
            ]
        },
        {
            "data_url": "https://msrc-blog.microsoft.com/2022/02/28/analysis-resources-cyber-threat-activity-ukraine",
            "date": "2022-02-28",
            "organization": "Microsoft",
            "author": "MSRC Team",
            "title": "Cyber threat activity in Ukraine: analysis and resources",
            "categories": [
                "HermeticWiper",
                "IsaacWiper",
                "PartyTicket",
                "WhisperGate"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "wiper",
            "procedure_code": "s0041",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0041",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1072",
                    "technique_link": "https://attack.mitre.org/techniques/T1072",
                    "technique_name": "software deployment tools",
                    "technique_description": "adversaries may gain access to and use third-party software suites installed within an enterprise network, such as administration, monitoring, and deployment systems, to move laterally through the network. third-party applications and software deployment systems may be in use in the network environment for administration purposes (e.g., sccm, hbss, altiris, etc.).",
                    "procedure_description": "it is believed that a patch management system for an anti-virus product commonly installed among targeted companies was used to distribute the wiper malware.[6]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1072",
                    "technique_link": "https://attack.mitre.org/techniques/T1072",
                    "technique_name": "software deployment tools",
                    "technique_description": "adversaries may gain access to and use third-party software suites installed within an enterprise network, such as administration, monitoring, and deployment systems, to move laterally through the network. third-party applications and software deployment systems may be in use in the network environment for administration purposes (e.g., sccm, hbss, altiris, etc.).",
                    "procedure_description": "it is believed that a patch management system for an anti-virus product commonly installed among targeted companies was used to distribute the wiper malware.[6]"
                }
            ]
        }
    ]
};