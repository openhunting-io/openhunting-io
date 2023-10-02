var threatdata = {
    "name": "Outlook Backdoor",
    "alias": "Outlook Backdoor, FACADE",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Outlook Backdoor",
        "names": [
            {
                "name": "Outlook Backdoor"
            },
            {
                "name": "FACADE"
            }
        ],
        "description": "(ESET) The Turla Outlook backdoor has two interesting functionalities.\nFirst, it steals emails by forwarding all outgoing emails to the attackers. It mainly targets Microsoft Outlook, a widely used mail client, but also targets The Bat!, a mail client very popular in Eastern Europe.\nSecond, it uses email messages as a transport layer for its Command & Control (C&C) protocol. Data, such as files requested via a command of the backdoor, is exfiltrated in specially-crafted PDF documents attached to emails, and commands are also received in PDF attachments. Thus, its behavior is particularly stealthy. It is important to note that no vulnerabilities were used either in PDF readers nor in Outlook. What actually happens is that the malware is able to decode data from the PDF documents and interpret it as commands for the backdoor.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.welivesecurity.com/wp-content/uploads/2018/08/Eset-Turla-Outlook-Backdoor.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.outlook_backdoor"
        ],
        "uuid": "4deb4745-67e2-4865-ad95-c02d48c33726",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "outlook_backdoor",
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
            "data_url": "https://twitter.com/VK_Intel/status/1085820673811992576",
            "date": "2019-01-17",
            "organization": "Twitter (@VK_intel)",
            "author": "Vitali Kremez",
            "title": "Tweet on Turla Outlook Backdoor",
            "categories": [
                "Outlook Backdoor"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2018/08/Eset-Turla-Outlook-Backdoor.pdf",
            "date": "2018-08-22",
            "organization": "ESET Research",
            "author": "ESET researchers",
            "title": "Turla Outlook Backdoor",
            "categories": [
                "Outlook Backdoor"
            ]
        }
    ],
    "mitre": []
};