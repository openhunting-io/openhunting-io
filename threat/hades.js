var threatdata = {
    "name": "Hades",
    "alias": "Hades",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-22",
    "all_data": {
        "actor": "Hades",
        "names": [
            {
                "name": "Hades",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "Russia"
        ],
        "sponsor": "State-sponsored, GRU",
        "motivation": [
            "Sabotage and destruction",
            "Financial crime"
        ],
        "first-seen": "2017",
        "description": "(Kaspersky) In March 2018 we published our research on Olympic Destroyer, an advanced attack that hit organizers, suppliers and partners of the Winter Olympic Games 2018 held in Pyeongchang, South Korea. Olympic Destroyer was a cyber-sabotage attack based on the spread of a destructive network worm. The sabotage stage was preceded by reconnaissance and infiltration into target networks to select the best launchpad for the self-replicating and self-modifying destructive malware.\n\nWe are calling the actor behind the Olympic Destroyer attack \u2013 \u201cHades\u201d. We have previously emphasized that Hades is different from other threat actors because the whole attack was a masterful operation in deception. Despite that, the attackers made serious mistakes, which helped us to spot and prove the forgery of rare attribution artefacts. The attackers behind Olympic Destroyer forged automatically generated signatures, known as Rich Header, to make it look like the malware was produced by {{Lazarus Group, Hidden Cobra, Labyrinth Chollima}} APT, an actor widely believed to be associated with North Korea. If this is new to the reader, we recommend a separate blog dedicated to the analysis of this forgery.\n\nSome of the TTPs and operational security used by Hades during the Olympic Destroyer attack bear a certain resemblance to {{Sofacy, APT 28, Fancy Bear, Sednit}} APT group activity. When it comes to false flags, mimicking TTPs is much harder than tampering with technical artefacts. It implies a deep knowledge of how the actor being mimicked operates as well as operational adaptation to these new TTPs. However, it is important to remember that Hades can be considered a master in the use of false flags: for now we assess that connection with low to moderate confidence.",
        "observed-sectors": [
            "Financial",
            "Government",
            "Healthcare"
        ],
        "observed-countries": [
            "Russia",
            "South Korea",
            "Ukraine",
            "Europe"
        ],
        "tools": [
            "Brave Prince",
            "Gold Dragon",
            "Olympic Destroyer",
            "RunningRAT"
        ],
        "operations": [
            {
                "date": "2019-06",
                "activity": "Hades, the actor behind Olympic Destroyer is still alive\nhttps://securelist.com/olympic-destroyer-is-still-alive/86169/"
            },
            {
                "date": "2020-02",
                "activity": "Operation \u201cTrickyMouse\u201d\nAttacks pretend to be from the Center for Public Health of the Ministry of Health of Ukraine and deliver bait document containing the latest news regarding #COVID-19. A backdoor written in C# gets dropped by malicious macro code to perform remote control.\nhttps://twitter.com/RedDrip7/status/1230683740508000256\nhttps://mp.weixin.qq.com/s/o6KC0k43AuOY5F8FKGbmMg"
            }
        ],
        "counter-operations": [
            {
                "date": "2020-10",
                "activity": "Six Russian GRU Officers Charged in Connection with Worldwide Deployment of Destructive Malware and Other Disruptive Actions in Cyberspace\nhttps://www.justice.gov/opa/pr/six-russian-gru-officers-charged-connection-worldwide-deployment-destructive-malware-and"
            }
        ],
        "information": [
            "https://securelist.com/olympicdestroyer-is-here-to-trick-the-industry/84295/"
        ],
        "uuid": "74367856-09d1-44d6-bff1-cb72a9514e11",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hades",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://killingthebear.jorgetesta.tech/actors/evil-corp",
            "date": "2022-06-13",
            "organization": "Jorge Testa",
            "author": "Jorge Testa",
            "title": "Killing The Bear - Evil Corp",
            "categories": [
                "FAKEUPDATES",
                "Babuk",
                "Blister",
                "DoppelPaymer",
                "Dridex",
                "Entropy",
                "FriedEx",
                "Hades",
                "Macaw",
                "Phoenix Locker",
                "WastedLoader",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/unc2165-shifts-to-evade-sanctions",
            "date": "2022-06-02",
            "organization": "Mandiant",
            "author": "Mandiant Intelligence",
            "title": "To HADES and Back: UNC2165 Shifts to LOCKBIT to Evade Sanctions",
            "categories": [
                "FAKEUPDATES",
                "Blister",
                "Cobalt Strike",
                "DoppelPaymer",
                "Dridex",
                "FriedEx",
                "Hades",
                "LockBit",
                "Macaw",
                "MimiKatz",
                "Phoenix Locker",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/wp-content/uploads/2022/02/S1_-SentinelLabs_SanctionsBeDamned_final_02.pdf",
            "date": "2022-02",
            "organization": "Sentinel LABS",
            "author": "Antonio Pirozzi",
            "title": "Sanctions be Damned | From Dridex To Macaw, The Evolution of Evil Corp",
            "categories": [
                "Dridex",
                "FriedEx",
                "Hades",
                "Phoenix Locker",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.huntandhackett.com/blog/advanced-ip-scanner-the-preferred-scanner-in-the-apt-toolbox",
            "date": "2021-10-22",
            "organization": "HUNT & HACKETT",
            "author": "Krijn de Mik",
            "title": "Advanced IP Scanner: the preferred scanner in the A(P)T toolbox",
            "categories": [
                "Conti",
                "DarkSide",
                "Dharma",
                "Egregor",
                "Hades",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/how-big-game-hunting-ttps-shifted-after-darkside-pipeline-attack/",
            "date": "2021-09-14",
            "organization": "CrowdStrike",
            "author": "CrowdStrike Intelligence Team",
            "title": "Big Game Hunting TTPs Continue to Shift After DarkSide Pipeline Attack",
            "categories": [
                "BlackMatter",
                "DarkSide",
                "REvil",
                "Avaddon",
                "BlackMatter",
                "Clop",
                "Conti",
                "CryptoLocker",
                "DarkSide",
                "DoppelPaymer",
                "Hades",
                "REvil"
            ]
        },
        {
            "data_url": "https://symantec.broadcom.com/hubfs/The_Ransomware_Threat_September_2021.pdf",
            "date": "2021-08-15",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "The Ransomware Threat",
            "categories": [
                "Babuk",
                "BlackMatter",
                "DarkSide",
                "Avaddon",
                "Babuk",
                "BADHATCH",
                "BazarBackdoor",
                "BlackMatter",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "Emotet",
                "FiveHands",
                "FriedEx",
                "Hades",
                "IcedID",
                "LockBit",
                "Maze",
                "MegaCortex",
                "MimiKatz",
                "QakBot",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/adversarial-perspective-advintel-breach-avoidance-through-monitoring-initial-vulnerabilities",
            "date": "2021-06-30",
            "organization": "Advanced Intelligence",
            "author": "Yelisey Boguslavskiy",
            "title": "Ransomware-&-CVE: Industry Insights Into Exclusive High-Value Target Adversarial Datasets",
            "categories": [
                "BlackKingdom Ransomware",
                "Clop",
                "dearcry",
                "Hades",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.accenture.com/us-en/blogs/security/ransomware-hades",
            "date": "2021-06-29",
            "organization": "Accenture",
            "author": "Accenture Security",
            "title": "HADES ransomware operators continue attacks",
            "categories": [
                "Cobalt Strike",
                "Hades",
                "MimiKatz"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/hades-ransomware-operators-use-distinctive-tactics-and-infrastructure",
            "date": "2021-06-15",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Hades Ransomware Operators Use Distinctive Tactics and Infrastructure",
            "categories": [
                "Cobalt Strike",
                "Hades"
            ]
        },
        {
            "data_url": "https://docs.google.com/spreadsheets/d/1MI8Z2tBhmqQ5X8Wf_ozv3dVjz5sJOs-3",
            "date": "2021-05-10",
            "organization": "DarkTracer",
            "author": "DarkTracer",
            "title": "Intelligence Report on Ransomware Gangs on the DarkWeb: List of victim organizations attacked by ransomware gangs released on the DarkWeb",
            "categories": [
                "RansomEXX",
                "Avaddon",
                "Babuk",
                "Clop",
                "Conti",
                "Cuba",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "Hades",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "Nefilim",
                "Nemty",
                "Pay2Key",
                "PwndLocker",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Sekhmet",
                "SunCrypt",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://blog.truesec.com/2021/05/05/are-the-notorious-cyber-criminals-evil-corp-actually-russian-spies/",
            "date": "2021-05-05",
            "organization": "TRUESEC",
            "author": "Mattias W\u00e5hl\u00e9n",
            "title": "Are The Notorious Cyber Criminals Evil Corp actually Russian Spies?",
            "categories": [
                "Cobalt Strike",
                "Hades",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://twitter.com/inversecos/status/1381477874046169089?s=20",
            "date": "2021-04-12",
            "organization": "Twitter (@inversecos)",
            "author": "inversecos",
            "title": "Tweet on TTPs associated with Hades Ransomware",
            "categories": [
                "Hades"
            ]
        },
        {
            "data_url": "https://www.accenture.com/us-en/blogs/cyber-defense/unknown-threat-group-using-hades-ransomware",
            "date": "2021-03-26",
            "organization": "Accenture",
            "author": "Eric Welling",
            "title": "It's getting hot in here! Unknown threat group using Hades ransomware to turn up the heat on their victims",
            "categories": [
                "Hades"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/evil-corp-switches-to-hades-ransomware-to-evade-sanctions/",
            "date": "2021-03-25",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "Evil Corp switches to Hades ransomware to evade sanctions",
            "categories": [
                "Hades",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://awakesecurity.com/blog/incident-response-hades-ransomware-gang-or-hafnium/",
            "date": "2021-03",
            "organization": "AWAKE",
            "author": "Jason Bevis",
            "title": "The Unseen One: Hades Ransomware Gang or Hafnium",
            "categories": [
                "Hades"
            ]
        },
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/gold-winter",
            "date": "2021",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "Threat Profile: GOLD WINTER",
            "categories": [
                "Cobalt Strike",
                "Hades",
                "Meterpreter",
                "GOLD WINTER"
            ]
        }
    ],
    "mitre": []
};