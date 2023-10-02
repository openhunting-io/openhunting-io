var threatdata = {
    "name": "8.t Dropper",
    "alias": "8.t Dropper, 8.t RTF exploit builder, 8t_dropper, RoyalRoad",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2023-04-05",
    "all_data": {
        "tool": "8.t Dropper",
        "names": [
            {
                "name": "8.t Dropper"
            },
            {
                "name": "8.t RTF exploit builder"
            },
            {
                "name": "8t_dropper"
            },
            {
                "name": "RoyalRoad"
            }
        ],
        "description": "8T_Dropper has been used by Chinese threat actor TA428 in order to install Cotx RAT onto victim's machines during Operation LagTime IT. According to Proofpoint the attack was developed against a number of government agencies in East Asia overseeing government information technology, domestic affairs, foreign affairs, economic development, and political processes. The dropper was delivered through an RTF document exploiting CVE-2018-0798.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://nao-sec.org/2020/01/an-overhead-view-of-the-royal-road.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.8t_dropper"
        ],
        "uuid": "fc849859-2aa0-4b98-8573-36d9041fd1c2",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "8.t Dropper",
            "malware_alias": "8t_dropper,RoyalRoad",
            "malware": "win.8t_dropper",
            "last_update": "2022-12-01 18:11:47",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "f2779c63373e33fdbd001f336df36b01b0360cd6787c1cd29a6524cc7bcf1ffb",
                        "timestamp": "2022-12-01 18:11:47"
                    },
                    {
                        "value": "ca7f297dc04acad2fab04d5dc2de9475aed4186805f6c237c10b8f56b384cf30",
                        "timestamp": "2022-12-01 18:11:46"
                    },
                    {
                        "value": "7a7e519f82af8091b9ddd14e765357e8900522d422606aefda949270b9bf1a04",
                        "timestamp": "2022-07-16 21:24:33"
                    },
                    {
                        "value": "ba2c89192643f05e64f49b5cb3513a6a5bbfa719225af3b72c83587b8b774e8d",
                        "timestamp": "2022-05-29 04:07:00"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-12-01 18:11:47",
    "file_name": "8.t_dropper",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://medium.com/@Ilandu/portdoor-malware-afc9d0796cba",
            "date": "2023-04-05",
            "organization": "Medium Ilandu",
            "author": "Ilan Duhin",
            "title": "PortDoor - APT Backdoor analysis",
            "categories": [
                "ACBackdoor",
                "8.t Dropper",
                "PortDoor"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2023/pandas-with-a-soul-chinese-espionage-attacks-against-southeast-asian-government-entities/",
            "date": "2023-03-07",
            "organization": "Check Point Research",
            "author": "Check Point Research",
            "title": "Pandas with a Soul: Chinese Espionage Attacks Against Southeast Asian Government Entities",
            "categories": [
                "5.t Downloader",
                "8.t Dropper",
                "Soul"
            ]
        },
        {
            "data_url": "https://malgamy.github.io/malware-analysis/The-Approach-of-TA413-for-Tibetan-Targets/#third-stage",
            "date": "2023-02-07",
            "organization": "MalGamy",
            "author": "MalGamy",
            "title": "The Approach of TA413 for Tibetan Targets",
            "categories": [
                "8.t Dropper",
                "LOWZERO"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2022-0922.pdf",
            "date": "2022-09-22",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "Chinese State-Sponsored  Group TA413 Adopts New  Capabilities in Pursuit of  Tibetan Targets",
            "categories": [
                "8.t Dropper",
                "LOWZERO"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/targets-of-interest-russian-organizations-increasingly-under-attack-by-chinese-apts/",
            "date": "2022-07-07",
            "organization": "Sentinel LABS",
            "author": "Tom Hegel",
            "title": "Targets of Interest - Russian Organizations Increasingly Under Attack By Chinese APTs",
            "categories": [
                "8.t Dropper",
                "Korlia"
            ]
        },
        {
            "data_url": "https://ics-cert.kaspersky.com/media/Kaspersky-ICS-CERT-APT-attacks-on-industrial-organizations-in-H1-2021-En.pdf",
            "date": "2021-10-26",
            "organization": "Kaspersky",
            "author": "Kaspersky Lab ICS CERT",
            "title": "APT attacks  on industrial  organizations  in H1 2021",
            "categories": [
                "8.t Dropper",
                "AllaKore",
                "AsyncRAT",
                "GoldMax",
                "LimeRAT",
                "NjRAT",
                "NoxPlayer",
                "Raindrop",
                "ReverseRAT",
                "ShadowPad",
                "Zebrocy"
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
            "data_url": "https://cdn-cybersecurity.att.com/docs/global-perspective-of-the-sidewinder-apt.pdf",
            "date": "2021-01-13",
            "organization": "AlienVault",
            "author": "Tom Hegel",
            "title": "A Global Perspective of the SideWinder APT",
            "categories": [
                "8.t Dropper",
                "Koadic",
                "SideWinder"
            ]
        },
        {
            "data_url": "https://nao-sec.org/2021/01/royal-road-redive.html",
            "date": "2021-01-04",
            "organization": "nao_sec blog",
            "author": "nao_sec",
            "title": "Royal Road! Re:Dive",
            "categories": [
                "8.t Dropper",
                "Chinoxy",
                "FlowCloud",
                "FunnyDream",
                "Lookback"
            ]
        },
        {
            "data_url": "https://community.riskiq.com/article/56fa1b2f",
            "date": "2020-09-16",
            "organization": "RiskIQ",
            "author": "Jon Gross",
            "title": "RiskIQ: Adventures in Cookie Land - Part 2",
            "categories": [
                "8.t Dropper",
                "Chinoxy",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://community.riskiq.com/article/5fe2da7f",
            "date": "2020-08-19",
            "organization": "RiskIQ",
            "author": "Jon Gross",
            "title": "RiskIQ Adventures in Cookie Land - Part 1",
            "categories": [
                "8.t Dropper",
                "Chinoxy"
            ]
        },
        {
            "data_url": "https://vb2020.vblocalhost.com/uploads/VB2020-20.pdf",
            "date": "2020-08-19",
            "organization": "NTT Security",
            "author": "Fumio Ozawa",
            "title": "Operation LagTime IT: Colorful Panda Footprint",
            "categories": [
                "8.t Dropper",
                "Cotx RAT",
                "Poison Ivy",
                "TA428"
            ]
        },
        {
            "data_url": "https://securelist.com/cycldek-bridging-the-air-gap/97157/",
            "date": "2020-06-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Cycldek: Bridging the (air) gap",
            "categories": [
                "8.t Dropper",
                "NewCore RAT",
                "PlugX",
                "USBCulprit",
                "GOBLIN PANDA",
                "Hellsing"
            ]
        },
        {
            "data_url": "https://blog.malwarelab.pl/posts/on_the_royal_road/",
            "date": "2020-03-21",
            "organization": "MalwareLab.pl",
            "author": "Maciej Kotowicz",
            "title": "On the Royal Road",
            "categories": [
                "8.t Dropper"
            ]
        },
        {
            "data_url": "https://medium.com/@Sebdraven/new-version-of-chinoxy-backdoor-using-covid19-document-lure-83fa294c0746",
            "date": "2020-03-20",
            "organization": "Medium Sebdraven",
            "author": "S\u00e9bastien Larinier",
            "title": "New version of chinoxy backdoor using COVID19 alerts document lure",
            "categories": [
                "8.t Dropper",
                "Chinoxy"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2020/vicious-panda-the-covid-campaign",
            "date": "2020-03-12",
            "organization": "Check Point Research",
            "author": "Check Point",
            "title": "Vicious Panda: The COVID Campaign",
            "categories": [
                "8.t Dropper",
                "Vicious Panda"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2020/vicious-panda-the-covid-campaign/",
            "date": "2020-03-12",
            "organization": "Check Point",
            "author": "Check Point Research",
            "title": "Vicious Panda: The COVID Campaign",
            "categories": [
                "8.t Dropper",
                "BYEBY",
                "Enfal",
                "Korlia",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/virusbulletin/2020/03/vb2019-paper-attribution-object-using-rtf-object-dimensions-track-apt-phishing-weaponizers/",
            "date": "2020-03-11",
            "organization": "Virus Bulletin",
            "author": "Ghareeb Saad",
            "title": "Attribution is in the object: using RTF object dimensions to track APT phishing weaponizers",
            "categories": [
                "8.t Dropper"
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
            "data_url": "https://research.checkpoint.com/2019/rancor-the-year-of-the-phish/",
            "date": "2019-09-22",
            "organization": "Check Point Research",
            "author": "Check Point Research",
            "title": "Rancor: The Year of The Phish",
            "categories": [
                "8.t Dropper",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/chinese-apt-operation-lagtime-it-targets-government-information-technology",
            "date": "2019-07-23",
            "organization": "Proofpoint",
            "author": "Michael Raggi",
            "title": "Chinese APT \u201cOperation LagTime IT\u201d Targets Government Information Technology Agencies in Eastern Asia",
            "categories": [
                "8.t Dropper",
                "Cotx RAT",
                "Poison Ivy",
                "TA428"
            ]
        },
        {
            "data_url": "https://www.accenture.com/_acnmedia/pdf-96/accenture-security-mudcarp.pdf",
            "date": "2019-03-05",
            "organization": "Accenture",
            "author": "Accenture",
            "title": "MUDCARP's Focus on Submarine Technologies",
            "categories": [
                "8.t Dropper",
                "APT40"
            ]
        },
        {
            "data_url": "https://tradahacking.vn/another-malicious-document-with-cve-2017-11882-839e9c0bbf2f",
            "date": "2019-01-03",
            "organization": "",
            "author": "m4n0w4r",
            "title": "Another malicious document with CVE-2017\u201311882",
            "categories": [
                "8.t Dropper"
            ]
        },
        {
            "data_url": "https://tradahacking.vn/l%C3%A0-1937cn-hay-oceanlotus-hay-lazarus-6ca15fe1b241",
            "date": "2018-11-03",
            "organization": "",
            "author": "m4n0w4r",
            "title": "L\u00e0 1937CN hay OceanLotus hay Lazarus \u2026",
            "categories": [
                "8.t Dropper"
            ]
        },
        {
            "data_url": "https://medium.com/@Sebdraven/malicious-document-targets-vietnamese-officials-acb3b9d8b80a?",
            "date": "2018-07-31",
            "organization": "Medium Sebdraven",
            "author": "S\u00e9bastien Larinier",
            "title": "Malicious document targets Vietnamese officials",
            "categories": [
                "8.t Dropper"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "royal",
            "procedure_code": "s1073",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S1073",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566",
                    "technique_link": "https://attack.mitre.org/techniques/T1566",
                    "technique_name": "phishing",
                    "technique_description": "adversaries may send phishing messages to gain access to victim systems. all forms of phishing are electronically delivered social engineering. phishing can be targeted, known as spearphishing. in spearphishing, a specific individual, company, or industry will be targeted by the adversary. more generally, adversaries can conduct non-targeted phishing, such as in mass malware spam campaigns.",
                    "procedure_description": "royal has been spread through the use of phishing campaigns including \"call back phishing\" where victims are lured into calling a number provided through email.[11][12][13]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "royal can use multiple apis for discovery, communication, and execution.[148]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "royal can identify specific files and directories to exclude from the encryption process.[264][265][266]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1046",
                    "technique_link": "https://attack.mitre.org/techniques/T1046",
                    "technique_name": "network service discovery",
                    "technique_description": "adversaries may attempt to get a listing of services running on remote hosts and local network infrastructure devices, including those that may be vulnerable to remote software exploitation. common methods to acquire this information include port and/or vulnerability scans using tools that are brought onto a system.",
                    "procedure_description": "royal can scan the network interfaces of targeted systems.[56]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1135",
                    "technique_link": "https://attack.mitre.org/techniques/T1135",
                    "technique_name": "network share discovery",
                    "technique_description": "adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for collection and to identify potential systems of interest for lateral movement. networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.",
                    "procedure_description": "royal can enumerate the shared resources of a given ip addresses using the api call netshareenum.[50]"
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
                    "procedure_description": "royal can use getcurrentprocess to enumerate processes.[221]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "royal can use getnativesysteminfo and getlogicaldrives to enumerate system processors and logical drives.[320][321]"
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
                    "procedure_description": "royal can enumerate ip addresses using getipaddrtable.[201]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/002",
                    "technique_name": "remote services : smb/windows admin shares",
                    "technique_description": "adversaries may use valid accounts to interact with a remote network share using server message block (smb). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "royal can use smb to connect to move laterally.[45]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1095",
                    "technique_link": "https://attack.mitre.org/techniques/T1095",
                    "technique_name": "non-application layer protocol",
                    "technique_description": "adversaries may use an osi non-application layer protocol for communication between host and c2 server or among infected hosts within a network. the list of possible protocols is extensive. specific examples include use of network layer protocols, such as the internet control message protocol (icmp), transport layer protocols, such as the user datagram protocol (udp), session layer protocols, such as socket secure (socks), as well as redirected/tunneled protocols, such as serial over lan (sol).",
                    "procedure_description": "royal establishes a tcp socket for c2 communication using the api wsasocketw.[62]"
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
                    "procedure_description": "royal uses a multi-threaded encryption process that can partially encrypt targeted files with the openssl library and the aes256 algorithm.[78][79][80]"
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
                    "procedure_description": "royal can delete shadow copy backups with vssadmin.exe using the command delete shadows /all /quiet.[57][58][59]"
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
                    "procedure_description": "royal can use rmshutdown to kill  applications and services using the resources that are targeted for encryption.[37]"
                }
            ]
        }
    ]
};