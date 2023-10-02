var threatdata = {
    "name": "EKANS",
    "alias": "EKANS, Snake, SNAKEHOSE",
    "category": "Malware",
    "type": "ICS malware, Ransomware, Big Game Hunting",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "EKANS",
        "names": [
            {
                "name": "EKANS"
            },
            {
                "name": "Snake"
            },
            {
                "name": "SNAKEHOSE"
            }
        ],
        "description": "(Dragos) EKANS ransomware emerged in mid-December 2019, and Dragos published a private report to Dragos WorldView Threat Intelligence customers early January 2020. While relatively straightforward as a ransomware sample in terms of encrypting files and displaying a ransom note, EKANS featured additional functionality to forcibly stop a number of processes, including multiple items related to ICS operations. While all indications at present show a relatively primitive attack mechanism on control system networks, the specificity of processes listed in a static \u201ckill list\u201d shows a level of intentionality previously absent from ransomware targeting the industrial space. ICS asset owners and operators are therefore strongly encouraged to review their attack surface and determine mechanisms to deliver and distribute disruptive malware, such as ransomware, with ICS-specific characteristics.",
        "category": "Malware",
        "type": [
            "ICS malware",
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.dragos.com/blog/industry-news/ekans-ransomware-and-ics-operations/",
            "https://blog.malwarebytes.com/threat-analysis/2020/06/honda-and-enel-impacted-by-cyber-attack-suspected-to-be-ransomware/",
            "https://unit42.paloaltonetworks.com/threat-assessment-ekans-ransomware/",
            "https://www.deepinstinct.com/2020/06/29/the-snake-attacks-holding-the-industrial-sector-ransom/",
            "https://www.fortinet.com/blog/threat-research/ekans-ransomware-targeting-ot-ics-systems"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0605/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.snake"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ekans"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=ekans-ransomware"
        ],
        "uuid": "8236a50f-f937-4e6e-b935-8dea58971dfa",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--def4456e-1b28-4686-a3e7-128d06b99895",
        "pb_file": "ekans-ransomware.json",
        "last_updated": "2021-09-30T00:00:00.000Z",
        "title": "EKANS RANSOMWARE",
        "industries": [
            "automotive",
            "energy",
            "healthcare"
        ],
        "regions": [],
        "malwares": [
            "EKANS"
        ]
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ekans",
    "articles": [
        {
            "data_url": "https://www.0ffset.net/reverse-engineering/analysing-snake-ransomware/",
            "date": "2022-08-03",
            "organization": "0ffset Blog",
            "author": "Gabriele Orini",
            "title": "Reversing Golang Developed Ransomware: SNAKE",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://www.blackberry.com/content/dam/blackberry-com/asset/enterprise/pdf/direct/report-old-dogs-new-tricks.pdf",
            "date": "2021-07-27",
            "organization": "Blackberry",
            "author": "BlackBerry Research & Intelligence Team",
            "title": "Old Dogs New Tricks: Attackers Adopt Exotic Programming Languages",
            "categories": [
                "elf.wellmess",
                "ElectroRAT",
                "BazarNimrod",
                "Buer",
                "Cobalt Strike",
                "Remcos",
                "Snake",
                "TeleBot",
                "WellMess",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://www.goggleheadedhacker.com/blog/post/22",
            "date": "2021-03-17",
            "organization": "GoggleHeadedHacker Blog",
            "author": "Jacob Pimental",
            "title": "Automatic Gobfuscator Deobfuscation with EKANS Ransomware",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2021GTR.pdf",
            "date": "2021-02-23",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2021 Global Threat Report",
            "categories": [
                "RansomEXX",
                "Amadey",
                "Anchor",
                "Avaddon",
                "BazarBackdoor",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "Cutwail",
                "DanaBot",
                "DarkSide",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "Hakbit",
                "IcedID",
                "JSOutProx",
                "KerrDown",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "NedDnLoader",
                "Nemty",
                "Pay2Key",
                "PlugX",
                "Pushdo",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "Quasar RAT",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet",
                "ShadowPad",
                "SmokeLoader",
                "Snake",
                "SUNBURST",
                "SunCrypt",
                "TEARDROP",
                "TrickBot",
                "WastedLocker",
                "Winnti",
                "Zloader",
                "KNOCKOUT SPIDER",
                "OUTLAW SPIDER",
                "RIDDLE SPIDER",
                "SOLAR SPIDER",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://ke-la.com/zooming-into-darknet-threats-targeting-jp-orgs-kela/",
            "date": "2020-11-18",
            "organization": "KELA",
            "author": "Victoria Kivilevich",
            "title": "Zooming into Darknet Threats Targeting Japanese Organizations",
            "categories": [
                "Conti",
                "DoppelPaymer",
                "Egregor",
                "LockBit",
                "Maze",
                "REvil",
                "Snake"
            ]
        },
        {
            "data_url": "https://hub.dragos.com/hubfs/Whitepaper-Downloads/Dragos_Manufacturing%20Threat%20Perspective_1120.pdf",
            "date": "2020-11-12",
            "organization": "Dragos",
            "author": "Dragos",
            "title": "Cyber Threat Perspective MANUFACTURING SECTOR",
            "categories": [
                "Industroyer",
                "Snake"
            ]
        },
        {
            "data_url": "https://ics-cert.kaspersky.com/media/KASPERSKY_H1_2020_ICS_REPORT_EN.pdf",
            "date": "2020-09-24",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky Lab ICS CERT",
            "title": "Threat landscape for industrial automation systems - H1 2020",
            "categories": [
                "Poet RAT",
                "Mailto",
                "Milum",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "Snake"
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
            "data_url": "https://www.crowdstrike.com/blog/adversaries-targeting-the-manufacturing-industry/",
            "date": "2020-07-14",
            "organization": "CrowdStrike",
            "author": "Falcon OverWatch Team",
            "title": "Manufacturing Industry in the Adversaries\u2019 Crosshairs",
            "categories": [
                "ShadowPad",
                "Snake"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/ekans-ransomware-targeting-ot-ics-systems",
            "date": "2020-07-01",
            "organization": "Fortinet",
            "author": "Ben Hunter",
            "title": "EKANS Ransomware Targeting OT ICS Systems",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://www.dragos.com/blog/industry-news/ekans-ransomware-misconceptions-and-misunderstandings/",
            "date": "2020-06-18",
            "organization": "Dragos",
            "author": "Joe Slowik",
            "title": "EKANS Ransomware Misconceptions and Misunderstandings",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://ics-cert.kaspersky.com/alerts/2020/06/17/targeted-attacks-on-industrial-companies-using-snake-ransomware/",
            "date": "2020-06-17",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky Lab ICS CERT",
            "title": "Targeted attacks on industrial companies using Snake ransomware",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://twitter.com/bad_packets/status/1270957214300135426",
            "date": "2020-06-11",
            "organization": "Twitter (@bad_packets)",
            "author": "Bad Packets Report",
            "title": "Tweet on Honda & Enel Critix(NetScaler) VPN server vulnerable to CVE-2019-19781, possibly targeted by SNAKE ransomware",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2020/06/honda-and-enel-impacted-by-cyber-attack-suspected-to-be-ransomware/",
            "date": "2020-06-09",
            "organization": "Malwarebytes",
            "author": "Threat Intelligence Team",
            "title": "Honda and Enel impacted by cyber attack suspected to be ransomware",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://twitter.com/milkr3am/status/1270019326976786432",
            "date": "2020-06-08",
            "organization": "Twitter (@milkr3am)",
            "author": "milkream",
            "title": "First public tweet on cyber incident that Honda & Enelint was hit by Snake/Ekans ransomware",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/honda-investigates-possible-ransomware-attack-networks-impacted/",
            "date": "2020-06-08",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "Honda investigates possible ransomware attack, networks impacted",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://medium.com/@nishanmaharjan17/malware-analysis-snake-ransomware-a0e66f487017",
            "date": "2020-05-15",
            "organization": "",
            "author": "Nishan Maharjan",
            "title": "Malware Analysis: Snake Ransomware",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2020/05/europes-largest-private-hospital-operator-fresenius-hit-by-ransomware",
            "date": "2020-05-06",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Europe\u2019s Largest Private Hospital Operator Fresenius Hit by Ransomware",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://www.ccn-cert.cni.es/pdf/5045-ccn-cert-id-15-20-snake-locker-english-1/file.html",
            "date": "2020-05",
            "organization": "CCN-CERT",
            "author": "CCN-CERT",
            "title": "Malware report CCN-CERT ID-15/20 Snake Locker",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://insights.sei.cmu.edu/cert/2020/03/snake-ransomware-analysis-updates.html",
            "date": "2020-03-23",
            "organization": "Carnegie Mellon University",
            "author": "Kyle O'Meara",
            "title": "Snake Ransomware Analysis Updates",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://dragos.com/blog/industry-news/ekans-ransomware-and-ics-operations/",
            "date": "2020-02-03",
            "organization": "Dragos",
            "author": "Dragos",
            "title": "EKANS Ransomware and ICS Operations",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/new-snake-ransomware-adds-itself-to-the-increasing-collection-of-golang-crimeware/",
            "date": "2020-01-23",
            "organization": "SentinelOne",
            "author": "Jim Walter",
            "title": "New Snake Ransomware Adds Itself to the Increasing Collection of Golang Crimeware",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://github.com/albertzsigovits/malware-notes/blob/master/Snake.md",
            "date": "2020-01-10",
            "organization": "Github (albertzsigovits)",
            "author": "Albert Zsigovits",
            "title": "SNAKE / EKANS ransomware",
            "categories": [
                "Snake"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/snake-ransomware-is-the-next-threat-targeting-business-networks/",
            "date": "2020-01-08",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "SNAKE Ransomware Is the Next Threat Targeting Business Networks",
            "categories": [
                "Snake"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "ekans",
            "procedure_code": "s0605",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0605",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "ekans can use windows mangement instrumentation (wmi) calls to execute operations.[38]"
                },
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
                    "procedure_description": "ekans stops processes related to security and management software.[32][33]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "ekans has been disguised as update.exe to appear as a valid executable.[52]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "ekans uses encoded strings in its process kill list.[111]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "ekans looks for processes from a hard-coded list.[88][89][90]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "ekans can determine the domain of a compromised host.[77]"
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
                    "procedure_description": "ekans uses standard encryption library functions to encrypt files.[44][45]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1490",
                    "technique_link": "https://attack.mitre.org/techniques/T1490",
                    "technique_name": "inhibit system recovery",
                    "technique_description": "adversaries may delete or remove built-in data and turn off services designed to aid in the recovery of a corrupted system to prevent recovery. this may deny access to available backups and recovery options.",
                    "procedure_description": "ekans removes backups of volume shadow copies to disable any restoration capabilities.[28][29]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1489",
                    "technique_link": "https://attack.mitre.org/techniques/T1489",
                    "technique_name": "service stop",
                    "technique_description": "adversaries may stop or disable services on a system to render those services unavailable to legitimate users. stopping critical services or processes can inhibit or stop response to an incident or aid in the adversary's overall objectives to cause damage to the environment.",
                    "procedure_description": "ekans stops database, data backup solution, antivirus, and ics-related processes.[16][17][18]"
                }
            ]
        }
    ]
};