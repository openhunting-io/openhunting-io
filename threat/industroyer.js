var threatdata = {
    "name": "Industroyer",
    "alias": "Industroyer, Crash, CrashOverride, CRASHOVERRIDE, Win32/Industroyer",
    "category": "Malware",
    "type": "ICS malware, Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Industroyer",
        "names": [
            {
                "name": "Industroyer"
            },
            {
                "name": "Crash"
            },
            {
                "name": "CrashOverride"
            },
            {
                "name": "CRASHOVERRIDE"
            },
            {
                "name": "Win32/Industroyer"
            }
        ],
        "description": "(ESET) Industroyer is a particularly dangerous threat, since it is capable of controlling electricity substation switches and circuit breakers directly. To do so, it uses industrial communication protocols used worldwide in power supply infrastructure, transportation control systems, and other critical infrastructure systems (such as water and gas).\n\nThese switches and circuit breakers are digital equivalents of analogue switches; technically they can be engineered to perform various functions. Thus, the potential impact may range from simply turning off power distribution, cascading failures and more serious damage to equipment. The severity may also vary from one substation to another, as well. Needless to say, disruption of such systems can directly or indirectly affect the functioning of vital services.\n\nIndustroyer\u2019s dangerousness lies in the fact that it uses protocols in the way they were designed to be used. The problem is that these protocols were designed decades ago, and back then industrial systems were meant to be isolated from the outside world. Thus, their communication protocols were not designed with security in mind. That means that the attackers didn\u2019t need to be looking for protocol vulnerabilities; all they needed was to teach the malware \u201cto speak\u201d those protocols.",
        "category": "Malware",
        "type": [
            "ICS malware",
            "Backdoor"
        ],
        "information": [
            "https://www.welivesecurity.com/2017/06/12/industroyer-biggest-threat-industrial-control-systems-since-stuxnet/",
            "https://dragos.com/blog/crashoverride/CrashOverride-01.pdf",
            "https://www.welivesecurity.com/wp-content/uploads/2017/06/Win32_Industroyer.pdf",
            "https://www.welivesecurity.com/2018/10/11/new-telebots-backdoor-linking-industroyer-notpetya/",
            "https://en.wikipedia.org/wiki/Industroyer"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0604/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.industroyer"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Industroyer"
        ],
        "uuid": "1b2b82e5-fac6-4864-bdca-2a55695dbed4",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "industroyer",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/resources/mandiant-red-team-emulates-fin11-tactics",
            "date": "2022-07-26",
            "organization": "Mandiant",
            "author": "Thibault van Geluwe de Berlaere",
            "title": "Mandiant Red Team Emulates FIN11 Tactics To Control Operational Technology Servers",
            "categories": [
                "Clop",
                "Industroyer",
                "MimiKatz",
                "Triton"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/sites/default/files/publications/AA22-110A_Joint_CSA_Russian_State-Sponsored_and_Criminal_Cyber_Threats_to_Critical_Infrastructure_4_20_22_Final.pdf",
            "date": "2022-04-20",
            "organization": "CISA",
            "author": "CISA",
            "title": "AA22-110A Joint CSA: Russian State-Sponsored and Criminal Cyber  Threats to Critical Infrastructure",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "DanaBot",
                "DoppelDridex",
                "Emotet",
                "EternalPetya",
                "GoldMax",
                "Industroyer",
                "Sality",
                "SmokeLoader",
                "TrickBot",
                "Triton",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-110a",
            "date": "2022-04-20",
            "organization": "CISA",
            "author": "CISA",
            "title": "Alert (AA22-110A): Russian State-Sponsored and Criminal Cyber Threats to Critical Infrastructure",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "DanaBot",
                "DoppelDridex",
                "Emotet",
                "EternalPetya",
                "GoldMax",
                "Industroyer",
                "Sality",
                "SmokeLoader",
                "TrickBot",
                "Triton",
                "Zloader",
                "Killnet"
            ]
        },
        {
            "data_url": "https://cert.gov.ua/article/39518",
            "date": "2022-04-12",
            "organization": "Cert-UA",
            "author": "Cert-UA",
            "title": "Cyberattack of Sandworm Group (UAC-0082) on energy facilities of Ukraine using malicious programs INDUSTROYER2 and CADDYWIPER (CERT-UA # 4435)",
            "categories": [
                "CaddyWiper",
                "Industroyer",
                "INDUSTROYER2"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2022/04/12/industroyer2-industroyer-reloaded/",
            "date": "2022-04-12",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "Industroyer2: Industroyer reloaded",
            "categories": [
                "ArguePatch",
                "CaddyWiper",
                "Industroyer",
                "INDUSTROYER2"
            ]
        },
        {
            "data_url": "https://blog.nviso.eu/2022/02/24/threat-update-ukraine-russia-tensions/",
            "date": "2022-02-24",
            "organization": "nviso",
            "author": "Michel Coene",
            "title": "Threat Update \u2013 Ukraine & Russia conflict",
            "categories": [
                "EternalPetya",
                "GreyEnergy",
                "HermeticWiper",
                "Industroyer",
                "KillDisk",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.tesorion.nl/en/resources/pdfstore/Report-OSINT-Russia-Ukraine-Conflict-Cyberaspect.pdf",
            "date": "2022-02-24",
            "organization": "Tesorion",
            "author": "TESORION",
            "title": "Report OSINT: Russia/ Ukraine Conflict Cyberaspect",
            "categories": [
                "Mirai",
                "VPNFilter",
                "BlackEnergy",
                "EternalPetya",
                "HermeticWiper",
                "Industroyer",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.domaintools.com/resources/blog/visibility-monitoring-and-critical-infrastructure-security",
            "date": "2021-02-11",
            "organization": "DomainTools",
            "author": "Joe Slowik",
            "title": "Visibility, Monitoring, and Critical Infrastructure Security",
            "categories": [
                "Industroyer",
                "Stuxnet",
                "Triton"
            ]
        },
        {
            "data_url": "https://www.ironnet.com/blog/russian-cyber-attack-campaigns-and-actors",
            "date": "2020-12-21",
            "organization": "IronNet",
            "author": "Adam Hlavek",
            "title": "Russian cyber attack campaigns and actors",
            "categories": [
                "WellMail",
                "elf.wellmess",
                "Agent.BTZ",
                "BlackEnergy",
                "EternalPetya",
                "Havex RAT",
                "Industroyer",
                "Ryuk",
                "Triton",
                "WellMess"
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
            "data_url": "https://www.riskint.blog/post/revisited-fancy-bear-s-new-faces-and-sandworms-too",
            "date": "2020-10-19",
            "organization": "Riskint Blog",
            "author": "Curtis",
            "title": "Revisited: Fancy Bear's New Faces...and Sandworms' too",
            "categories": [
                "BlackEnergy",
                "EternalPetya",
                "Industroyer",
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://www.gov.uk/government/news/uk-exposes-series-of-russian-cyber-attacks-against-olympic-and-paralympic-games",
            "date": "2020-10-19",
            "organization": "UK Government",
            "author": "ForeignCommonwealth & Development Office",
            "title": "UK exposes series of Russian cyber attacks against Olympic and Paralympic Games",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "EternalPetya",
                "Industroyer"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/virusbulletin/2020/01/vb2019-paper-rich-headers-leveraging-mysterious-artifact-pe-format/",
            "date": "2020-01-31",
            "organization": "Virus Bulletin",
            "author": "Michal Poslu\u0161n\u00fd",
            "title": "Rich Headers: leveraging this mysterious artifact of the PE format",
            "categories": [
                "Dridex",
                "Exaramel",
                "Industroyer",
                "Neutrino",
                "RCS",
                "Sathurbot"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/iron-viking",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "IRON VIKING",
            "categories": [
                "BlackEnergy",
                "EternalPetya",
                "GreyEnergy",
                "Industroyer",
                "KillDisk",
                "TeleBot",
                "TeleDoor"
            ]
        },
        {
            "data_url": "https://pylos.co/wp-content/uploads/2020/02/Threat-Intelligence-and-the-Limits-of-Malware-Analysis.pdf",
            "date": "2020-01",
            "organization": "Dragos",
            "author": "Joe Slowik",
            "title": "Threat Intelligence and the Limits of Malware Analysis",
            "categories": [
                "Exaramel",
                "Exaramel",
                "Industroyer",
                "Lookback",
                "NjRAT",
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2018/10/11/new-telebots-backdoor-linking-industroyer-notpetya/",
            "date": "2018-10-11",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "New TeleBots backdoor: First evidence linking Industroyer to NotPetya",
            "categories": [
                "Exaramel",
                "EternalPetya",
                "Exaramel",
                "Industroyer"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/conference/vb2017/abstracts/last-minute-paper-industroyer-biggest-threat-industrial-control-systems-stuxnet/",
            "date": "2017-10-05",
            "organization": "Virus Bulletin",
            "author": "Anton Cherepanov",
            "title": "Industroyer: Biggest threat to industrial control systems since Stuxnet",
            "categories": [
                "Industroyer"
            ]
        },
        {
            "data_url": "https://en.wikipedia.org/wiki/Industroyer",
            "date": "2017-07-04",
            "organization": "Wikipedia",
            "author": "Various",
            "title": "Industroyer",
            "categories": [
                "Industroyer"
            ]
        },
        {
            "data_url": "https://dragos.com/blog/crashoverride/CrashOverride-01.pdf",
            "date": "2017-06-13",
            "organization": "Dragos",
            "author": "Dragos",
            "title": "CRASHOVERRIDE: Analysis of the Threatto Electric Grid Operations",
            "categories": [
                "Industroyer",
                "Sandworm"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2017/06/Win32_Industroyer.pdf",
            "date": "2017-06-12",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "WIN32/INDUSTROYER: A new threat for industrial control systems",
            "categories": [
                "Industroyer",
                "Sandworm"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2017/06/12/industroyer-biggest-threat-industrial-control-systems-since-stuxnet/",
            "date": "2017-06-12",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "Industroyer: Biggest threat to industrial control systems since Stuxnet",
            "categories": [
                "Industroyer"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "industroyer",
            "procedure_code": "s0604",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0604",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "industroyer can use supplied user credentials to execute processes and stop services.[36]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1554",
                    "technique_link": "https://attack.mitre.org/techniques/T1554",
                    "technique_name": "compromise client software binary",
                    "technique_description": "adversaries may modify client software binaries to establish persistent access to systems. client software enables users to access services provided by a server. common client software types are ssh clients, ftp clients, email clients, and web browsers.",
                    "procedure_description": "industroyer has used a trojanized version of the windows notepad application for an additional backdoor persistence mechanism.[1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "industroyer can use an arbitrary system service to load at system boot for persistence and replaces the imagepath registry value of a windows service with a new backdoor binary.[6]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "industroyer can use supplied user credentials to execute processes and stop services.[36]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "industroyer can use an arbitrary system service to load at system boot for persistence and replaces the imagepath registry value of a windows service with a new backdoor binary.[6]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "industroyer can use supplied user credentials to execute processes and stop services.[36]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "industroyer decrypts code to connect to a remote c2 server.[116]"
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
                    "procedure_description": "industroyer uses heavily obfuscated code in its windows notepad backdoor.[7]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "industroyer can use supplied user credentials to execute processes and stop services.[36]"
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
                    "procedure_description": "industroyer\u2019s data wiper component enumerates specific files on all the windows drives.[151]"
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
                    "procedure_description": "industroyer uses a custom port scanner to map out a network.[33]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1012",
                    "technique_link": "https://attack.mitre.org/techniques/T1012",
                    "technique_name": "query registry",
                    "technique_description": "adversaries may interact with the windows registry to gather information about the system, configuration, and installed software.",
                    "procedure_description": "industroyer has a data wiper component that enumerates keys in the registry hkey_local_machine\\system\\currentcontrolset\\services.[50]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "industroyer can enumerate remote computers in the compromised network.[50]"
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
                    "procedure_description": "industroyer collects the victim machine\u2019s windows guid.[172]"
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
                    "procedure_description": "industroyer\u2019s 61850 payload component enumerates connected network adapters and their corresponding ip addresses.[108]"
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
                    "procedure_description": "industroyer\u2019s main backdoor connected to a remote c2 server using https.[166]"
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
                    "procedure_description": "industroyer downloads a shellcode payload from a remote c2 server and loads it into memory.[226]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1572",
                    "technique_link": "https://attack.mitre.org/techniques/T1572",
                    "technique_name": "protocol tunneling",
                    "technique_description": "adversaries may tunnel network communications to and from a victim system within a separate protocol to avoid detection/network filtering and/or enable access to otherwise unreachable systems. tunneling involves explicitly encapsulating a protocol within another. this behavior may conceal malicious traffic by blending in with existing traffic and/or provide an outer layer of encryption (similar to a vpn). tunneling could also enable routing of network packets that would otherwise not reach their intended destination, such as smb, rdp, or other traffic that would be filtered by network appliances or not routed over the internet.",
                    "procedure_description": "industroyer attempts to perform an http connect via an internal proxy to establish a tunnel.[21]"
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
                    "procedure_description": "industroyer used tor nodes for c2.[13]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1041",
                    "technique_link": "https://attack.mitre.org/techniques/T1041",
                    "technique_name": "exfiltration over c2 channel",
                    "technique_description": "adversaries may steal data by exfiltrating it over an existing command and control channel. stolen data is encoded into the normal communications channel using the same protocol as command and control communications.",
                    "procedure_description": "industroyer sends information about hardware profiles and previously-received commands back to the c2 server in a post-request.[62]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1485",
                    "technique_link": "https://attack.mitre.org/techniques/T1485",
                    "technique_name": "data destruction",
                    "technique_description": "adversaries may destroy data and files on specific systems or in large numbers on a network to interrupt availability to systems, services, and network resources. data destruction is likely to render stored data irrecoverable by forensic techniques through overwriting files or data on local and remote drives. common operating system file deletion commands such as del and rm often only remove pointers to files without wiping the contents of the files themselves, making the files recoverable by proper forensic methodology. this behavior is distinct from disk content wipe and disk structure wipe because individual files are destroyed rather than sections of a storage disk or the disk's logical structure.",
                    "procedure_description": "industroyer\u2019s data wiper module clears registry keys and overwrites both ics configuration and windows files.[17]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1499.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1499/004",
                    "technique_name": "endpoint denial of service : application or system exploitation",
                    "technique_description": "adversaries may exploit software vulnerabilities that can cause an application or system to crash and deny availability to users.  some systems may automatically restart critical applications and services when crashes occur, but they can likely be re-exploited to cause a persistent denial of service (dos) condition.",
                    "procedure_description": "industroyer uses a custom dos tool that leverages cve-2015-5374 and targets hardcoded ip addresses of siemens siprotec devices.[2]"
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
                    "procedure_description": "industroyer\u2019s data wiper module writes zeros into the registry keys in system\\currentcontrolset\\services to render a system inoperable.[22]"
                }
            ]
        }
    ]
};