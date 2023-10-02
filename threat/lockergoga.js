var threatdata = {
    "name": "LockerGoga",
    "alias": "LockerGoga",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-11-18",
    "all_data": {
        "tool": "LockerGoga",
        "names": [
            {
                "name": "LockerGoga"
            }
        ],
        "description": "(Fortinet) The binary for this particular variant of LockerGoga does not utilize any type of security evasion or obfuscation. Instead, the binary only goes as far as encoding the RSA public key that is used in its later stages for file encryption. It\u2019s possible to speculate that the attackers may have already been fully aware of the target companies\u2019 security measures, and were therefore confident that their malware would not be intercepted even without any obfuscation.\n\nAnother interesting fact is that the malware uses open-source Boost libraries for its filesystem, and inter-process communication and Crypto++ (Cryptopp) for file encryption. One of the advantages of using these libraries is easier development and implementation since developers only need to work with wrapper functions instead of calling individual native APIs to achieve the same goal. And since this utilizes a higher level of programming, statically and dynamically analysing the application without source code is more complicated than just reading a straight sequence of Windows APIs. However, since they do not use standard libraries, they need to be manually linked and the functions need to be physically added to the final binary, which results a larger file size than usual.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.fortinet.com/blog/threat-research/lockergoga-ransomeware-targeting-critical-infrastructure.html",
            "https://www.trendmicro.com/vinfo/us/security/news/cyber-attacks/what-you-need-to-know-about-the-lockergoga-ransomware",
            "https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html",
            "https://www.abuse.io/lockergoga.txt",
            "https://doublepulsar.com/how-lockergoga-took-down-hydro-ransomware-used-in-targeted-attacks-aimed-at-big-business-c666551f5880",
            "https://www.bleepingcomputer.com/news/security/new-lockergoga-ransomware-allegedly-used-in-altran-attack/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0372/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.lockergoga"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:LockerGoga"
        ],
        "playbook": [
            "https://www.bleepingcomputer.com/news/security/bitdefender-releases-free-decryptor-for-lockergoga-ransomware/"
        ],
        "uuid": "8cdd2a40-7ddd-4caf-b7d0-94af5984a979",
        "last-card-change": "2022-11-18",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "lockergoga",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.npu.gov.ua/news/kiberzlochini/kiberpolicziya-vikrila-transnaczionalne-zlochinne-ugrupovannya-u-nanesenni-inozemnim-kompaniyam-120-miljoniv-dolariv-zbitkiv/",
            "date": "2021-10-29",
            "organization": "\u041d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0430 \u043f\u043e\u043b\u0456\u0446\u0456\u044f \u0423\u043a\u0440\u0430\u0457\u043d\u0438",
            "author": "\u041d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0430 \u043f\u043e\u043b\u0456\u0446\u0456\u044f \u0423\u043a\u0440\u0430\u0457\u043d\u0438",
            "title": "Cyberpolice exposes transnational criminal group in causing $ 120 million in damage to foreign companies",
            "categories": [
                "Cobalt Strike",
                "Dharma",
                "LockerGoga",
                "MegaCortex",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.europol.europa.eu/newsroom/news/12-targeted-for-involvement-in-ransomware-attacks-against-critical-infrastructure",
            "date": "2021-10-29",
            "organization": "Europol",
            "author": "Europol",
            "title": "12 targeted for involvement in ransomware attacks against critical infrastructure",
            "categories": [
                "Cobalt Strike",
                "Dharma",
                "LockerGoga",
                "MegaCortex",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/financially-motivated-actors-are-expanding-access-into-ot",
            "date": "2020-07-15",
            "organization": "Mandiant",
            "author": "Nathan Brubaker",
            "title": "Financially Motivated Actors Are Expanding Access Into OT: Analysis of Kill Lists That Include OT Processes Used With Seven Malware Families",
            "categories": [
                "Clop",
                "DoppelPaymer",
                "LockerGoga",
                "Maze",
                "MegaCortex",
                "Nefilim",
                "Snake"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2020/03/05/human-operated-ransomware-attacks-a-preventable-disaster/",
            "date": "2020-03-05",
            "organization": "Microsoft",
            "author": "Microsoft Threat Protection Intelligence Team",
            "title": "Human-operated ransomware attacks: A preventable disaster",
            "categories": [
                "Dharma",
                "DoppelPaymer",
                "Dridex",
                "EternalPetya",
                "Gandcrab",
                "Hermes",
                "LockerGoga",
                "MegaCortex",
                "MimiKatz",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SamSam",
                "TrickBot",
                "WannaCryptor",
                "PARINACOTA"
            ]
        },
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
            "data_url": "https://dragos.com/wp-content/uploads/Spyware-Stealer-Locker-Wiper-LockerGoga-Revisited.pdf",
            "date": "2020-03",
            "organization": "Dragos",
            "author": "Joe Slowik",
            "title": "Spyware Stealer Locker Wiper Locker Goga Revisited",
            "categories": [
                "LockerGoga"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/csi-evidence-indicators-for-targeted-ransomware-attacks-part-ii/",
            "date": "2020-02-20",
            "organization": "McAfee",
            "author": "Christiaan Beek",
            "title": "CSI: Evidence Indicators for Targeted Ransomware Attacks \u2013 Part II",
            "categories": [
                "Cobalt Strike",
                "LockerGoga",
                "Maze",
                "MegaCortex"
            ]
        },
        {
            "data_url": "https://content.fireeye.com/m-trends/rpt-m-trends-2020",
            "date": "2020-02-19",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "M-Trends 2020",
            "categories": [
                "Cobalt Strike",
                "Grateful POS",
                "LockerGoga",
                "QakBot",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-001.pdf",
            "date": "2020-01-29",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "\u00c9tat de la menace ran\u00e7ongiciel",
            "categories": [
                "Clop",
                "Dharma",
                "FriedEx",
                "Gandcrab",
                "LockerGoga",
                "Maze",
                "MegaCortex",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SamSam"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/fbi-issues-alert-for-lockergoga-and-megacortex-ransomware/",
            "date": "2019-12-23",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "FBI Issues Alert For LockerGoga and MegaCortex Ransomware",
            "categories": [
                "LockerGoga",
                "MegaCortex"
            ]
        },
        {
            "data_url": "https://www.nrk.no/norge/skreddersydd-dobbeltangrep-mot-hydro-1.14480202",
            "date": "2019-05-19",
            "organization": "nrk",
            "author": "Henrik Lied",
            "title": "Skreddersydd dobbeltangrep mot Hydro",
            "categories": [
                "LockerGoga"
            ]
        },
        {
            "data_url": "https://www.govcert.admin.ch/blog/36/severe-ransomware-attacks-against-swiss-smes",
            "date": "2019-05-09",
            "organization": "GovCERT.ch",
            "author": "GovCERT.ch",
            "title": "Severe Ransomware Attacks Against Swiss SMEs",
            "categories": [
                "Emotet",
                "LockerGoga",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.abuse.io/lockergoga.txt",
            "date": "2019-05-04",
            "organization": "Abuse.io",
            "author": "Abuse.io",
            "title": "Abuse.io Report - Lockergoga",
            "categories": [
                "LockerGoga"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=o6eEN0mUakM",
            "date": "2019-04-16",
            "organization": "Youtube (Norsk Hydro)",
            "author": "Norsk Hydro",
            "title": "The cyber attack rescue operation in Hydro Toulouse",
            "categories": [
                "LockerGoga"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html",
            "date": "2019-04-05",
            "organization": "FireEye",
            "author": "Brendan McKeague",
            "title": "Pick-Six: Intercepting a FIN6 Intrusion, an Actor Recently Tied to Ryuk and LockerGoga Ransomware",
            "categories": [
                "LockerGoga",
                "Ryuk",
                "FIN6"
            ]
        },
        {
            "data_url": "https://www.helpnetsecurity.com/2019/04/02/aurora-decrypter-mira-decrypter/",
            "date": "2019-04-02",
            "organization": "HelpNetSecurity",
            "author": "Zeljka Zorz",
            "title": "A LockerGoga primer and decrypters for Mira and Aurora ransomwares",
            "categories": [
                "LockerGoga"
            ]
        },
        {
            "data_url": "https://doublepulsar.com/how-lockergoga-took-down-hydro-ransomware-used-in-targeted-attacks-aimed-at-big-business-c666551f5880",
            "date": "2019-03-21",
            "organization": "DoublePulsar",
            "author": "Kevin Beaumont",
            "title": "How Lockergoga took down Hydro \u2014 ransomware used in targeted attacks aimed at big business",
            "categories": [
                "LockerGoga"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/lockergoga/",
            "date": "2019-03-20",
            "organization": "Cisco Talos",
            "author": "Nick Biasini",
            "title": "Ransomware or Wiper? LockerGoga Straddles the Line",
            "categories": [
                "LockerGoga"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/new-lockergoga-ransomware-allegedly-used-in-altran-attack/",
            "date": "2019-01-30",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "New LockerGoga Ransomware Allegedly Used in Altran Attack",
            "categories": [
                "LockerGoga"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "lockergoga",
            "procedure_code": "s0372",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0372",
            "techniques": [
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/001",
                    "technique_name": "impair defenses : disable or modify tools",
                    "technique_description": "adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. this may take many forms, such as killing security software processes or services, modifying / deleting registry keys or configuration files so that tools do not operate properly, or other methods to interfere with security tools scanning or reporting information. adversaries may also disable updates to prevent the latest security patches from reaching tools on victim systems.",
                    "procedure_description": "lockergoga installation has been immediately preceded by a \"task kill\" command in order to disable anti-virus.[53]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "lockergoga has been observed deleting its original launcher after execution.[132]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "lockergoga has been signed with stolen certificates in order to make it look more legitimate.[49]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1570",
                    "technique_link": "https://attack.mitre.org/techniques/T1570",
                    "technique_name": "lateral tool transfer",
                    "technique_description": "adversaries may transfer tools or other files between systems in a compromised environment. once brought into the victim environment (i.e. ingress tool transfer) files may then be copied from one system to another to stage adversary tools or other files over the course of an operation. adversaries may copy files between internal victim systems to support lateral movement using inherent file sharing protocols such as file sharing over smb/windows admin shares to connected network shares or with authenticated connections via remote desktop protocol.",
                    "procedure_description": "lockergoga has been observed moving around the victim network via smb, indicating the actors behind this ransomware are manually copying files form computer to computer instead of self-propagating.[1]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1531",
                    "technique_link": "https://attack.mitre.org/techniques/T1531",
                    "technique_name": "account access removal",
                    "technique_description": "adversaries may interrupt availability of system and network resources by inhibiting access to accounts utilized by legitimate users. accounts may be deleted, locked, or manipulated (ex: changed credentials) to remove access to accounts. adversaries may also subsequently log off and/or perform a system shutdown/reboot to set malicious changes into place.",
                    "procedure_description": "lockergoga has been observed changing account passwords and logging off current users.[1][2]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1486",
                    "technique_link": "https://attack.mitre.org/techniques/T1486",
                    "technique_name": "data encrypted for impact",
                    "technique_description": "adversaries may encrypt data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources. they can attempt to render stored data inaccessible by encrypting files or data on local and remote drives and withholding access to a decryption key. this may be done in order to extract monetary compensation from a victim in exchange for decryption or a decryption key (ransomware) or to render data permanently inaccessible in cases where the key is not saved or transmitted.",
                    "procedure_description": "lockergoga has encrypted files, including core windows os files, using rsa-oaep mgf1 and then demanded bitcoin be paid for the decryption key.[51][52][53]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1529",
                    "technique_link": "https://attack.mitre.org/techniques/T1529",
                    "technique_name": "system shutdown/reboot",
                    "technique_description": "adversaries may shutdown/reboot systems to interrupt access to, or aid in the destruction of, those systems. operating systems may contain commands to initiate a shutdown/reboot of a machine or network device. in some cases, these commands may also be used to initiate a shutdown/reboot of a remote computer or network device via network device cli (e.g. reload).",
                    "procedure_description": "lockergoga has been observed shutting down infected systems.[13]"
                }
            ]
        }
    ]
};