var threatdata = {
    "name": "TinyLoader",
    "alias": "TinyLoader",
    "category": "Malware",
    "type": "Botnet, Downloader",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "TinyLoader",
        "names": [
            {
                "name": "TinyLoader"
            }
        ],
        "description": "(Fidelis) Tinyloader has a few unique characteristics\n\n\u2022 It is, in fact, tiny \u2014 typically weighing in under 5 KB.\n\u2022 Its command-and-control (C2) server runs on Microsoft Windows, which is fairly uncommon in malware today.\n\u2022 Finally, it is extremely versatile due to its modular C2 mechanism. This mechanism allows the C2 server to pass custom bytecode directly into the running memory of the bot making it easy to load new malware or augment additional malicious behaviors.",
        "category": "Malware",
        "type": [
            "Botnet",
            "Downloader"
        ],
        "information": [
            "https://www.fidelissecurity.com/threatgeek/threat-intelligence/deconstructing-tinyloader/",
            "https://www.proofpoint.com/us/threat-insight/post/AbaddonPOS-A-New-Point-Of-Sale-Threat-Linked-To-Vawtrak",
            "https://www.proofpoint.com/us/threat-insight/post/abaddonpos-now-targeting-specific-pos-software"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tinyloader"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:TinyLoader"
        ],
        "uuid": "d69d3400-c249-4a42-aa2f-69ccee84c77a",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tinyloader",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2020CrowdStrikeGlobalThreatReport.pdf",
            "date": "2020-03-04",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2020 CrowdStrike Global Threat Report",
            "categories": [
                "MESSAGETAP",
                "More_eggs",
                "8.t Dropper",
                "Anchor",
                "BabyShark",
                "BadNews",
                "Clop",
                "Cobalt Strike",
                "CobInt",
                "Cobra Carbon System",
                "Cutwail",
                "DanaBot",
                "Dharma",
                "DoppelDridex",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FlawedAmmyy",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "IcedID",
                "ISFB",
                "KerrDown",
                "LightNeuron",
                "LockerGoga",
                "Maze",
                "MECHANICAL",
                "Necurs",
                "Nokki",
                "Outlook Backdoor",
                "Phobos",
                "Predator The Thief",
                "QakBot",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SDBbot",
                "Skipper",
                "SmokeLoader",
                "TerraRecon",
                "TerraStealer",
                "TerraTV",
                "TinyLoader",
                "TrickBot",
                "Vidar",
                "Winnti",
                "ANTHROPOID SPIDER",
                "APT23",
                "APT31",
                "APT39",
                "APT40",
                "BlackTech",
                "BuhTrap",
                "Charming Kitten",
                "CLOCKWORK SPIDER",
                "DOPPEL SPIDER",
                "FIN7",
                "Gamaredon Group",
                "GOBLIN PANDA",
                "MONTY SPIDER",
                "MUSTANG PANDA",
                "NARWHAL SPIDER",
                "NOCTURNAL SPIDER",
                "PINCHY SPIDER",
                "SALTY SPIDER",
                "SCULLY SPIDER",
                "SMOKY SPIDER",
                "Thrip",
                "VENOM SPIDER",
                "VICEROY TIGER"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/abaddonpos-now-targeting-specific-pos-software",
            "date": "2016-05-10",
            "organization": "Proofpoint",
            "author": "Matthew Mesa",
            "title": "Setting Sights On Retail: AbaddonPOS Now Targeting Specific POS Software",
            "categories": [
                "AbaddonPOS",
                "TinyLoader"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/AbaddonPOS-A-New-Point-Of-Sale-Threat-Linked-To-Vawtrak",
            "date": "2015-11-11",
            "organization": "Proofpoint",
            "author": "Darien Huss",
            "title": "AbaddonPOS: A new point of sale threat linked to Vawtrak",
            "categories": [
                "AbaddonPOS",
                "TinyLoader"
            ]
        }
    ],
    "mitre": []
};