var threatdata = {
    "name": "Sea Turtle",
    "alias": "Sea Turtle, Silicon, UNC1326, Marbled Dust",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "Sea Turtle",
        "names": [
            {
                "name": "Sea Turtle",
                "name-giver": "Talos"
            },
            {
                "name": "Silicon",
                "name-giver": "Microsoft"
            },
            {
                "name": "UNC1326",
                "name-giver": "FireEye"
            },
            {
                "name": "Marbled Dust",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "Turkey"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2017",
        "description": "(Talos) Cisco Talos has discovered a new cyber threat campaign that we are calling \u201cSea Turtle,\u201d which is targeting public and private entities, including national security organizations, located primarily in the Middle East and North Africa. The ongoing operation likely began as early as January 2017 and has continued through the first quarter of 2019. Our investigation revealed that at least 40 different organizations across 13 different countries were compromised during this campaign. We assess with high confidence that this activity is being carried out by an advanced, state-sponsored actor that seeks to obtain persistent access to sensitive networks and systems.\n\nThe actors behind this campaign have focused on using DNS hijacking as a mechanism for achieving their ultimate objectives. DNS hijacking occurs when the actor can illicitly modify DNS name records to point users to actor-controlled servers. The Department of Homeland Security (DHS) issued an alert about this activity on Jan. 24 2019, warning that an attacker could redirect user traffic and obtain valid encryption certificates for an organization\u2019s domain names.",
        "observed-sectors": [
            "Aerospace",
            "Defense",
            "Energy",
            "Government",
            "NGOs",
            "Think Tanks",
            "Intelligence agencies"
        ],
        "observed-countries": [
            "Albania",
            "Armenia",
            "Cyprus",
            "Egypt",
            "Greece",
            "Iraq",
            "Jordan",
            "Lebanon",
            "Libya",
            "Sudan",
            "Sweden",
            "Switzerland",
            "Syria",
            "Turkey",
            "UAE",
            "USA"
        ],
        "tools": [
            "Drupalgeddon",
            "DNS hijacking"
        ],
        "operations": [
            {
                "date": "2018-01",
                "activity": "Talos now has moderate confidence that the threat actors behind Sea Turtle have been using another DNS hijacking technique. This new technique has been used very sparingly, and thus far have only identified two entities that were targeted in 2018, though we believe there are likely more."
            },
            {
                "date": "2019-04",
                "activity": "The Institute of Computer Science of the Foundation for Research and Technology \u2013 Hellas (ICS-Forth), the ccTLD for Greece, acknowledged on its public website that its network had been compromised on April 19, 2019. Based on Cisco telemetry, we determined that the actors behind the Sea Turtle campaign had access to the ICS-Forth network.\nhttps://blog.talosintelligence.com/2019/07/sea-turtle-keeps-on-swimming.html"
            }
        ],
        "information": [
            "https://blog.talosintelligence.com/2019/04/seaturtle.html"
        ],
        "uuid": "4227fdb4-8b95-410d-9b06-3697c5edd064",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sea_turtle",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2022GTR.pdf",
            "date": "2022-02-16",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "Global Threat Report 2022",
            "categories": [
                "Sea Turtle"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/pdf/pwc-cyber-threats-2020-a-year-in-retrospect.pdf",
            "date": "2021-02-28",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2020: A Year in Retrospect",
            "categories": [
                "elf.wellmess",
                "FlowerPower",
                "PowGoop",
                "8.t Dropper",
                "Agent.BTZ",
                "Agent Tesla",
                "Appleseed",
                "Ave Maria",
                "Bankshot",
                "BazarBackdoor",
                "BLINDINGCAN",
                "Chinoxy",
                "Conti",
                "Cotx RAT",
                "Crimson RAT",
                "DUSTMAN",
                "Emotet",
                "FriedEx",
                "FunnyDream",
                "Hakbit",
                "Mailto",
                "Maze",
                "METALJACK",
                "Nefilim",
                "Oblique RAT",
                "Pay2Key",
                "PlugX",
                "QakBot",
                "REvil",
                "Ryuk",
                "StoneDrill",
                "StrongPity",
                "SUNBURST",
                "SUPERNOVA",
                "TrickBot",
                "TurlaRPC",
                "Turla SilentMoon",
                "WastedLocker",
                "WellMess",
                "Winnti",
                "ZeroCleare",
                "APT10",
                "APT23",
                "APT27",
                "APT31",
                "APT41",
                "BlackTech",
                "BRONZE EDGEWOOD",
                "Inception Framework",
                "MUSTANG PANDA",
                "Red Charon",
                "Red Nue",
                "Sea Turtle",
                "Tonto Team"
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
            "data_url": "https://blog.talosintelligence.com/2019/04/seaturtle.html",
            "date": "2019-04-17",
            "organization": "Cisco Talos",
            "author": "Danny Adamitis",
            "title": "DNS Hijacking Abuses Trust In Core Internet Service",
            "categories": [
                "Sea Turtle"
            ]
        }
    ],
    "mitre": []
};