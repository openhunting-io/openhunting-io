var threatdata = {
    "name": "DoubleZero",
    "alias": "DoubleZero, FiberLake",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2023-03-15",
    "all_data": {
        "tool": "DoubleZero",
        "names": [
            {
                "name": "DoubleZero"
            },
            {
                "name": "FiberLake"
            }
        ],
        "description": "(Talos) The Computer Emergency Response Team of Ukraine released an advisory on March 22, 2022 disclosing another wiper dubbed 'DoubleZero' targeting Ukrainian enterprises during Russia's invasion of the country. This wiper was detected as early as March 17, 2022. DoubleZero is yet another wiper discovered in addition to previously disclosed attacks we've seen in Ukraine over the past two months, such as '{{CaddyWiper}}' '{{HermeticWiper}}' and '{{WhisperGate}}.'\n\nDoubleZero is a .NET-based implant that destroys files, registry keys and trees on the infected endpoint.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://blog.talosintelligence.com/2022/03/threat-advisory-doublezero.html",
            "https://therecord.media/a-deeper-look-at-the-malware-being-used-on-ukrainian-targets/",
            "https://cybersecurity.att.com/blogs/labs-research/analysis-on-recent-wiper-attacks-examples-and-how-they-wiper-malware-works",
            "https://unit42.paloaltonetworks.com/doublezero-net-wiper/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.doublezero"
        ],
        "uuid": "52b5ac80-4227-4351-8032-52ea1a878d6e",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "doublezero",
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
            "data_url": "https://unit42.paloaltonetworks.com/doublezero-net-wiper/",
            "date": "2022-11-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Akshata Rao",
            "title": "An AI Based Solution to Detecting the DoubleZero .NET Wiper",
            "categories": [
                "DoubleZero"
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
            "data_url": "https://securelist.com/new-ransomware-trends-in-2022/106457/",
            "date": "2022-05-11",
            "organization": "Kaspersky",
            "author": "GReAT",
            "title": "New ransomware trends in 2022",
            "categories": [
                "BlackCat",
                "Conti",
                "DEADBOLT",
                "DoubleZero",
                "LockBit",
                "PartyTicket",
                "StealBit"
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
            "data_url": "https://www.esentire.com/blog/esentire-threat-intelligence-malware-analysis-doublezero",
            "date": "2022-04-05",
            "organization": "eSentire",
            "author": "eSentire Threat Response Unit (TRU)",
            "title": "eSentire Threat Intelligence Malware Analysis: DoubleZero",
            "categories": [
                "DoubleZero"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/threat-update-doublezero-destructor.html",
            "date": "2022-03-28",
            "organization": "splunk",
            "author": "Splunk Threat Research Team",
            "title": "Threat Update DoubleZero Destructor",
            "categories": [
                "DoubleZero"
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
            "data_url": "https://blog.talosintelligence.com/2022/03/threat-advisory-doublezero.html",
            "date": "2022-03-24",
            "organization": "Cisco Talos",
            "author": "Cisco Talos",
            "title": "Threat Advisory: DoubleZero",
            "categories": [
                "DoubleZero"
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
            "data_url": "https://cert.gov.ua/article/38088",
            "date": "2022-03-22",
            "organization": "Cert-UA",
            "author": "Cert-UA",
            "title": "Cyberattack on Ukrainian enterprises using the DoubleZero destructor program (CERT-UA # 4243)",
            "categories": [
                "DoubleZero"
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
        }
    ],
    "mitre": []
};