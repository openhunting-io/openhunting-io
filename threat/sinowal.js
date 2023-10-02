var threatdata = {
    "name": "Sinowal",
    "alias": "Sinowal, Anserin, Mebroot, Quarian, Theola, Torpig",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Credential stealer, Downloader, Exfiltration",
    "modified": "2020-07-29",
    "all_data": {
        "tool": "Sinowal",
        "names": [
            {
                "name": "Sinowal"
            },
            {
                "name": "Anserin"
            },
            {
                "name": "Mebroot"
            },
            {
                "name": "Quarian"
            },
            {
                "name": "Theola"
            },
            {
                "name": "Torpig"
            }
        ],
        "description": "(Fortinet) The installer drops a dynamic-link library (DLL) onto the local hard disk. The DLL acts as a loader module and will load other components, if any exist, and download a manager module which plays a central role in conducting banking fraud. The manager module downloads several plug-in modules from the C&C server, aimed at different target applications. These modules are used to steal sensitive information including bank account details, email addresses and FTP accounts. All plug-in modules contact the manager module through a named pipe, while the manager module communicates directly with the C&C server, uploading stolen information, reporting the local status of the trojan and downloading configuration and plug-in modules, as well as script commands for the plug-in modules to run.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.virusbulletin.com/virusbulletin/2014/06/sinowal-banking-trojan",
            "https://www.welivesecurity.com/2013/03/13/how-theola-malware-uses-a-chrome-plugin-for-banking-fraud/",
            "https://en.wikipedia.org/wiki/Torpig"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sinowal"
        ],
        "uuid": "40636fe0-6160-4e7e-a7d0-e0dbc599d7aa",
        "last-card-change": "2020-05-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sinowal",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/apt-trends-report-q2-2020/97937/",
            "date": "2020-07-29",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2020",
            "categories": [
                "PhantomLance",
                "Dacls",
                "Penquin Turla",
                "elf.wellmess",
                "AppleJeus",
                "Dacls",
                "AcidBox",
                "Cobalt Strike",
                "Dacls",
                "EternalPetya",
                "Godlike12",
                "Olympic Destroyer",
                "PlugX",
                "shadowhammer",
                "ShadowPad",
                "Sinowal",
                "VHD Ransomware",
                "Volgmer",
                "WellMess",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/turla-apt-infrastructure/",
            "date": "2020-03-12",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Swallowing the Snake\u2019s Tail: Tracking Turla Infrastructure",
            "categories": [
                "Mosquito",
                "Sinowal"
            ]
        },
        {
            "data_url": "https://en.wikipedia.org/wiki/Torpig",
            "date": "2018-12-05",
            "organization": "Wikipedia",
            "author": "Wikipedia",
            "title": "Torpig",
            "categories": [
                "Sinowal"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2017/10/20114955/Bartholomew-GuerreroSaade-VB2016.pdf",
            "date": "2016-09-07",
            "organization": "Virus Bulletin",
            "author": "Brian Bartholomew",
            "title": "Wave Your False Flags! Deception Tactics Muddying Attribution in Targeted Attacks",
            "categories": [
                "DuQu",
                "JripBot",
                "Sinowal",
                "Stuxnet",
                "Wipbot"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20200509171721/https://raw.githubusercontent.com/fdiskyou/threat-INTel/master/2015/GlobalThreatIntelReport.pdf",
            "date": "2015-02-06",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "CrowdStrike Global Threat Intel Report 2014",
            "categories": [
                "BlackPOS",
                "CryptoLocker",
                "Derusbi",
                "Elise",
                "Enfal",
                "EvilGrab",
                "Gameover P2P",
                "HttpBrowser",
                "Medusa",
                "Mirage",
                "Naikon",
                "NetTraveler",
                "pirpi",
                "PlugX",
                "Poison Ivy",
                "Sakula RAT",
                "Sinowal",
                "sykipot",
                "taidoor"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/virusbulletin/2014/06/sinowal-banking-trojan",
            "date": "2014-06-02",
            "organization": "Virus Bulletin",
            "author": "Chao Chen",
            "title": "Sinowal banking trojan",
            "categories": [
                "Sinowal"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2013/03/13/how-theola-malware-uses-a-chrome-plugin-for-banking-fraud/",
            "date": "2013-03-13",
            "organization": "ESET Research",
            "author": "Aleksandr Matrosov",
            "title": "How Theola malware uses a Chrome plugin for banking fraud",
            "categories": [
                "Sinowal"
            ]
        },
        {
            "data_url": "https://www.symantec.com/security_response/writeup.jsp?docid=2008-010718-3448-99&tabid=2",
            "date": "2012-08-08",
            "organization": "Symantec",
            "author": "Symantec",
            "title": "Trojan.Mebroot",
            "categories": [
                "Sinowal"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20160616170611/https://media.blackhat.com/bh-eu-10/presentations/Carrera_Silberman/BlackHat-EU-2010-Carrera-Silberman-State-of-Malware-slides.pdf",
            "date": "2010",
            "organization": "Mandiant",
            "author": "Ero Carrera",
            "title": "State of Malware: Family Ties",
            "categories": [
                "Bredolab",
                "Conficker",
                "Cutwail",
                "KoobFace",
                "Oderoor",
                "Poison Ivy",
                "Rustock",
                "Sinowal",
                "Szribi",
                "Zeus"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "tor",
            "procedure_code": "s0183",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0183",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "tor encapsulates traffic in multiple layers of encryption, using tls by default.[59]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "traffic traversing the tor network will be forwarded to multiple nodes before exiting the tor network and continuing on to its intended destination.[21]"
                }
            ]
        }
    ]
};