var threatdata = {
    "name": "MiniDuke",
    "alias": "MiniDuke",
    "category": "Malware",
    "type": "Downloader, Backdoor",
    "modified": "2022-09-21",
    "all_data": {
        "tool": "MiniDuke",
        "names": [
            {
                "name": "MiniDuke"
            }
        ],
        "description": "(F-Secure) The MiniDuke toolset consists of multiple downloader and backdoor components, which are commonly referred to as the MiniDuke \u201cstage 1\u201d, \u201cstage 2\u201d, and \u201cstage 3\u201d components as per Kaspersky\u2019s original MiniDuke whitepaper. Additionally, a specific loader is often associated with the MiniDuke toolset and is referred to as the \u201cMiniDuke loader\u201d.\n\nWhile the loader has often been used together with other MiniDuke components, it has also commonly been used in conjunction with {{CosmicDuke}} and {{PinchDuke}}. In fact, the oldest samples of the loader that we have found were used with PinchDuke. To avoid confusion however, we have decided to continue referring to the loader as the \u201cMiniDuke loader\u201d.\n\nTwo details about MiniDuke components are worth noting. Firstly, some of the MiniDuke components were written in Assembly language. While many malware were written in Assembly during the \u2018old days\u2018 of curiosity-driven virus writing, it has since become a rarity. Secondly, some of the MiniDuke components do not contain a hardcoded C&C server address, but instead obtain the address of a current C&C server via Twitter. The use of Twitter either to initially obtain the address of a C&C server (or as a backup if no hardcoded primary C&C server responds) is a feature also found in {{OnionDuke}}, {{CozyDuke}}, and {{HammerDuke}}.",
        "category": "Malware",
        "type": [
            "Downloader",
            "Backdoor"
        ],
        "information": [
            "https://blog-assets.f-secure.com/wp-content/uploads/2020/03/18122307/F-Secure_Dukes_Whitepaper.pdf",
            "https://securelist.com/the-miniduke-mystery-pdf-0-day-government-spy-assembler-0x29a-micro-backdoor/31112/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0051/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.miniduke"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:miniduke"
        ],
        "uuid": "a5e00272-5532-4ea6-a45c-4fe8231772a4",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "miniduke",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://research.checkpoint.com/2022/native-function-and-assembly-code-invocation/",
            "date": "2022-09-21",
            "organization": "Check Point",
            "author": "Ji\u0159\u00ed Vinopal",
            "title": "Native function and Assembly Code Invocation",
            "categories": [
                "MiniDuke"
            ]
        },
        {
            "data_url": "https://cybergeeks.tech/how-to-defeat-the-russian-dukes-a-step-by-step-analysis-of-miniduke-used-by-apt29-cozy-bear/",
            "date": "2021-09-29",
            "organization": "CYBER GEEKS  All Things Infosec",
            "author": "CyberMasterV",
            "title": "How to defeat the Russian Dukes: A step-by-step analysis of MiniDuke used by APT29/Cozy Bear",
            "categories": [
                "MiniDuke"
            ]
        },
        {
            "data_url": "https://www.carbonblack.com/2020/03/26/the-dukes-of-moscow/",
            "date": "2020-03-26",
            "organization": "VMWare Carbon Black",
            "author": "Scott Knight",
            "title": "The Dukes of Moscow",
            "categories": [
                "Cobalt Strike",
                "LiteDuke",
                "MiniDuke",
                "OnionDuke",
                "PolyglotDuke",
                "PowerDuke"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/uploads/2020/02/13/cb78386a082f465f259b37dae5df4884.pdf",
            "date": "2020-02-13",
            "organization": "Qianxin",
            "author": "Qi Anxin Threat Intelligence Center",
            "title": "APT Report 2019",
            "categories": [
                "Chrysaor",
                "Exodus",
                "Dacls",
                "VPNFilter",
                "DNSRat",
                "Griffon",
                "KopiLuwak",
                "More_eggs",
                "SQLRat",
                "AppleJeus",
                "BONDUPDATER",
                "Agent.BTZ",
                "Anchor",
                "AndroMut",
                "AppleJeus",
                "BOOSTWRITE",
                "Brambul",
                "Carbanak",
                "Cobalt Strike",
                "Dacls",
                "DistTrack",
                "DNSpionage",
                "Dtrack",
                "ELECTRICFISH",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Grateful POS",
                "HOPLIGHT",
                "Imminent Monitor RAT",
                "jason",
                "Joanap",
                "KerrDown",
                "KEYMARBLE",
                "Lambert",
                "LightNeuron",
                "LoJax",
                "MiniDuke",
                "PolyglotDuke",
                "PowerRatankba",
                "Rising Sun",
                "SDBbot",
                "ServHelper",
                "Snatch",
                "Stuxnet",
                "TinyMet",
                "tRat",
                "TrickBot",
                "Volgmer",
                "X-Agent",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/iron-hemlock",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "IRON HEMLOCK",
            "categories": [
                "FatDuke",
                "MiniDuke",
                "OnionDuke",
                "PolyglotDuke",
                "APT29"
            ]
        },
        {
            "data_url": "https://kindredsec.wordpress.com/2019/08/12/an-overview-of-public-platform-c2s/",
            "date": "2019-08-12",
            "organization": "Kindred Security",
            "author": "Kindred Security",
            "title": "An Overview of Public Platform C2\u2019s",
            "categories": [
                "HTML5 Encoding",
                "LOWBALL",
                "Makadocs",
                "MiniDuke",
                "RogueRobinNET",
                "RokRAT"
            ]
        },
        {
            "data_url": "https://www.circl.lu/files/tr-14/circl-analysisreport-miniduke-stage3-public.pdf",
            "date": "2013-05-30",
            "organization": "CIRCL",
            "author": "CIRCL",
            "title": "Analysis of a stage 3 Miniduke sample",
            "categories": [
                "MiniDuke"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2013/02/its-a-kind-of-magic-1.html",
            "date": "2013-02-28",
            "organization": "FireEye",
            "author": "James T. Bennett",
            "title": "It's a Kind of Magic",
            "categories": [
                "MiniDuke"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "miniduke",
            "procedure_code": "s0051",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0051",
            "techniques": [
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
                    "procedure_description": "miniduke can use control flow flattening to obscure code.[120]"
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
                    "procedure_description": "miniduke can enumerate local drives.[123]"
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
                    "procedure_description": "miniduke can gather the hostname on a compromised machine.[131]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "miniduke uses http and https for command and control.[66][120]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1568.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1568/002",
                    "technique_name": "dynamic resolution : domain generation algorithms",
                    "technique_description": "adversaries may make use of domain generation algorithms (dgas) to dynamically identify a destination domain for command and control traffic rather than relying on a list of static ip addresses or domains. this has the advantage of making it much harder for defenders to block, track, or take over the command and control channel, as there potentially could be thousands of domains that malware can check for instructions.",
                    "procedure_description": "miniduke can use dga to generate new twitter urls for c2.[22]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1008",
                    "technique_link": "https://attack.mitre.org/techniques/T1008",
                    "technique_name": "fallback channels",
                    "technique_description": "adversaries may use fallback or alternate communication channels if the primary channel is compromised or inaccessible in order to maintain reliable command and control and to avoid data transfer thresholds.",
                    "procedure_description": "miniduke uses google search to identify c2 servers if its primary c2 method via twitter is not working.[31]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "miniduke can download additional encrypted backdoors onto the victim via gif files.[294][263]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/001",
                    "technique_name": "proxy : internal proxy",
                    "technique_description": "adversaries may use an internal proxy to direct command and control traffic between two or more systems in a compromised environment. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use internal proxies to manage command and control communications inside a compromised environment, to reduce the number of simultaneous outbound network connections, to provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between infected systems to avoid suspicion. internal proxy connections may use common peer-to-peer (p2p) networking protocols, such as smb, to better blend in with the environment.",
                    "procedure_description": "miniduke can can use a named pipe to forward communications from one compromised machine with internet access to other compromised machines.[10]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/001",
                    "technique_name": "web service : dead drop resolver",
                    "technique_description": "adversaries may use an existing, legitimate external web service to host information that points to additional command and control (c2) infrastructure. adversaries may post content, known as a dead drop resolver, on web services with embedded (and often obfuscated/encoded) domains or ip addresses. once infected, victims will reach out to and be redirected by these resolvers.",
                    "procedure_description": "some miniduke components use twitter to initially obtain the address of a c2 server or as a backup if no hard-coded c2 server responds.[12][13][14]"
                }
            ]
        }
    ]
};