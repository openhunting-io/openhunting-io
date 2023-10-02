var threatdata = {
    "name": "GrimPlant",
    "alias": "GrimPlant, Elephant Implant",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Tunneling",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "GrimPlant",
        "names": [
            {
                "name": "GrimPlant"
            },
            {
                "name": "Elephant Implant"
            }
        ],
        "description": "(SOC Investigation) GrimPlant capabilities:\n\u2022 Gather IP address, hostname, OS, username, home dir\n\u2022 Execute commands received remotely and return results to C2\n\u2022 Use gRPC (HTTP/2+SSL) for C2 communication",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://www.socinvestigation.com/ukraines-cert-warns-russian-threat-actors-for-fake-av-updates/",
            "https://blog.malwarebytes.com/threat-intelligence/2022/04/new-uac-0056-activity-theres-a-go-elephant-in-the-room/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.grimplant"
        ],
        "uuid": "67d565f3-f9ef-4e87-81a9-99917bd4d7a7",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "grimplant",
    "analysis": null,
    "articles": [
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
            "data_url": "https://www.cybercom.mil/Media/News/Article/3098856/cyber-national-mission-force-discloses-iocs-from-ukrainian-networks/",
            "date": "2022-07-20",
            "organization": "U.S. Cyber Command",
            "author": "Cyber National Mission Force Public Affairs",
            "title": "Cyber National Mission Force discloses IOCs from Ukrainian networks",
            "categories": [
                "Cobalt Strike",
                "GraphSteel",
                "GrimPlant",
                "MicroBackdoor"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/spear-phish-ukrainian-entities",
            "date": "2022-07-20",
            "organization": "Mandiant",
            "author": "Mandiant Threat Intelligence",
            "title": "Evacuation and Humanitarian Documents used to Spear Phish Ukrainian Entities",
            "categories": [
                "Cobalt Strike",
                "GraphSteel",
                "GrimPlant",
                "MicroBackdoor"
            ]
        },
        {
            "data_url": "https://businessinsights.bitdefender.com/deep-dive-into-the-elephant-framework-a-new-cyber-threat-in-ukraine",
            "date": "2022-04-25",
            "organization": "Bitdefender",
            "author": "Martin Zugec",
            "title": "Deep Dive into the Elephant Framework \u2013 A New Cyber Threat in Ukraine",
            "categories": [
                "GraphSteel",
                "GrimPlant"
            ]
        },
        {
            "data_url": "https://inquest.net/blog/2022/04/07/ukraine-cyberwar-overview",
            "date": "2022-04-07",
            "organization": "InQuest",
            "author": "Will MacArthur",
            "title": "Ukraine CyberWar Overview",
            "categories": [
                "CyclopsBlink",
                "Cobalt Strike",
                "GraphSteel",
                "GrimPlant",
                "HermeticWiper",
                "HermeticWizard",
                "MicroBackdoor",
                "PartyTicket",
                "Saint Bot",
                "Scieron",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.intezer.com/blog/research/elephant-malware-targeting-ukrainian-orgs/",
            "date": "2022-04-04",
            "organization": "Intezer",
            "author": "Joakim Kennedy",
            "title": "Elephant Framework Delivered in Phishing Attacks Against Ukrainian Organizations",
            "categories": [
                "GraphSteel",
                "GrimPlant",
                "SaintBear"
            ]
        },
        {
            "data_url": "https://www.govinfosecurity.com/cyber-espionage-actor-deploying-malware-using-excel-a-18830",
            "date": "2022-04-02",
            "organization": "GovInfo Security",
            "author": "Prajeet Nair",
            "title": "Cyber Espionage Actor Deploying Malware Using Excel",
            "categories": [
                "GraphSteel",
                "GrimPlant"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-intelligence/2022/04/new-uac-0056-activity-theres-a-go-elephant-in-the-room/",
            "date": "2022-04-01",
            "organization": "Malwarebytes",
            "author": "Ankur Saini",
            "title": "New UAC-0056 activity: There\u2019s a Go Elephant in the room",
            "categories": [
                "GrimPlant",
                "SaintBear"
            ]
        },
        {
            "data_url": "https://cert.gov.ua/article/38374",
            "date": "2022-03-28",
            "organization": "Cert-UA",
            "author": "Cert-UA",
            "title": "UAC-0056 cyberattack on Ukrainian state authorities using GraphSteel and GrimPlant malware (CERT-UA#4293)",
            "categories": [
                "GraphSteel",
                "GrimPlant",
                "SaintBear"
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
            "data_url": "https://www.sentinelone.com/blog/threat-actor-uac-0056-targeting-ukraine-with-fake-translation-software/",
            "date": "2022-03-15",
            "organization": "SentinelOne",
            "author": "Amitai Ben Shushan Ehrlich",
            "title": "Threat Actor UAC-0056 Targeting Ukraine with Fake Translation Software",
            "categories": [
                "Cobalt Strike",
                "GraphSteel",
                "GrimPlant",
                "SaintBear"
            ]
        }
    ],
    "mitre": []
};