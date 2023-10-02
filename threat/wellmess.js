var threatdata = {
    "name": "WellMess",
    "alias": "WellMess, elf.wellmess",
    "category": "Malware",
    "type": "Backdoor, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "WellMess",
        "names": [
            {
                "name": "WellMess"
            },
            {
                "name": "elf.wellmess"
            }
        ],
        "description": "(NCSC-UK) WellMess is malware written in either Golang or .NET and has been in use since at least 2018. WellMess was first reported on by JPCERT and LAC researchers in July 2018. It is named after one of the function names in the malware -\u2018wellmess\u2019. WellMess is a lightweight malware designed to execute arbitrary shell commands, upload and download files. The malware supports HTTP, TLS and DNS communications methods.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://www.ncsc.gov.uk/files/Advisory-APT29-targets-COVID-19-vaccine-development.pdf",
            "https://blogs.jpcert.or.jp/en/2018/07/malware-wellmes-9b78.html",
            "https://www.lac.co.jp/lacwatch/pdf/20180614_cecreport_vol3.pdf",
            "https://www.botconf.eu/wp-content/uploads/2018/12/2018-Y-Ishikawa-S-Nagano-Lets-go-with-a-Go-RAT-_final.pdf",
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar20-198b"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0514/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.wellmess"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:WellMess"
        ],
        "uuid": "5619706d-69a0-45a6-9e40-f1c0e9ba2eed",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "wellmess",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://services.global.ntt/en-us/insights/blog/the-layered-infrastructure-operated-by-apt29",
            "date": "2021-10-19",
            "organization": "NTT",
            "author": "Threat Detection Team Security division of NTT",
            "title": "The layered infrastructure operated by APT29",
            "categories": [
                "elf.wellmess"
            ]
        },
        {
            "data_url": "https://community.riskiq.com/article/541a465f/description",
            "date": "2021-07-30",
            "organization": "RiskIQ",
            "author": "Team Atlas",
            "title": "Bear Tracks: Infrastructure Patterns Lead to More Than 30 Active APT29 C2 Servers",
            "categories": [
                "elf.wellmess",
                "WellMess"
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
            "data_url": "https://us-cert.cisa.gov/sites/default/files/publications/AA21-116A_Russian_Foreign_Intelligence_Service_Cyber_Operations_508C.pdf",
            "date": "2021-04-26",
            "organization": "CISA",
            "author": "CISA",
            "title": "Russian Foreign Intelligence Service (SVR)Cyber Operations: Trends and Best Practices for Network Defenders",
            "categories": [
                "elf.wellmess",
                "WellMess"
            ]
        },
        {
            "data_url": "https://www.blackberry.com/content/dam/blackberry-com/asset/enterprise/pdf/direct/report-bb-2021-threat-report.pdf",
            "date": "2021-03-21",
            "organization": "Blackberry",
            "author": "Blackberry Research",
            "title": "2021 Threat Report",
            "categories": [
                "Bashlite",
                "FritzFrog",
                "IPStorm",
                "Mirai",
                "Tsunami",
                "elf.wellmess",
                "AppleJeus",
                "Dacls",
                "EvilQuest",
                "Manuscrypt",
                "Astaroth",
                "BazarBackdoor",
                "Cerber",
                "Cobalt Strike",
                "Emotet",
                "FinFisher RAT",
                "Kwampirs",
                "MimiKatz",
                "NjRAT",
                "Ryuk",
                "SmokeLoader",
                "TrickBot"
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
            "data_url": "https://www.intezer.com/wp-content/uploads/2021/02/Intezer-2020-Go-Malware-Round-Up.pdf",
            "date": "2021-02-25",
            "organization": "Intezer",
            "author": "Intezer",
            "title": "Year of the Gopher A 2020 Go Malware Round-Up",
            "categories": [
                "NiuB",
                "WellMail",
                "elf.wellmess",
                "ArdaMax",
                "AsyncRAT",
                "CyberGate",
                "DarkComet",
                "Glupteba",
                "Nanocore RAT",
                "Nefilim",
                "NjRAT",
                "Quasar RAT",
                "WellMess",
                "Zebrocy"
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
            "data_url": "https://www.intezer.com/blog/cloud-security/top-linux-cloud-threats-of-2020/",
            "date": "2020-12-21",
            "organization": "Intezer",
            "author": "Intezer",
            "title": "Top Linux Cloud Threats of 2020",
            "categories": [
                "AgeLocker",
                "AnchorDNS",
                "Blackrota",
                "Cloud Snooper",
                "Dacls",
                "Doki",
                "FritzFrog",
                "IPStorm",
                "Kaiji",
                "Kinsing",
                "NOTROBIN",
                "Penquin Turla",
                "PLEAD",
                "Prometei",
                "RansomEXX",
                "Stantinko",
                "TeamTNT",
                "TSCookie",
                "WellMail",
                "elf.wellmess",
                "TeamTNT"
            ]
        },
        {
            "data_url": "https://securelist.com/an-overview-of-targeted-attacks-and-apts-on-linux/98440/",
            "date": "2020-09-10",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "An overview of targeted attacks and APTs on Linux",
            "categories": [
                "Cloud Snooper",
                "Dacls",
                "DoubleFantasy",
                "MESSAGETAP",
                "Penquin Turla",
                "Tsunami",
                "elf.wellmess",
                "X-Agent"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/issues/cyber-security-services/insights/wellmess-analysis-command-control.html",
            "date": "2020-08-17",
            "organization": "PWC",
            "author": "PWC UK",
            "title": "WellMess malware: analysis of its Command and Control (C2) server",
            "categories": [
                "elf.wellmess"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/08/attribution-puzzle.html",
            "date": "2020-08-13",
            "organization": "Talos Intelligence",
            "author": "Martin Lee",
            "title": "Attribution: A Puzzle",
            "categories": [
                "WellMail",
                "elf.wellmess",
                "AcidBox",
                "WellMess"
            ]
        },
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
            "data_url": "https://www.ncsc.gov.uk/files/Advisory-APT29-targets-COVID-19-vaccine-development.pdf",
            "date": "2020-07-16",
            "organization": "NCSC UK",
            "author": "NCSC UK",
            "title": "Advisory: APT29 targets COVID-19 vaccine development",
            "categories": [
                "WellMail",
                "elf.wellmess",
                "SoreFang",
                "WellMess"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/issues/cyber-security-services/insights/cleaning-up-after-wellmess.html",
            "date": "2020-07-16",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "How WellMess malware has been used to target Covid-19 vaccines",
            "categories": [
                "elf.wellmess",
                "WellMess"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar20-198b",
            "date": "2020-07-16",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "Malware Analysis Report (AR20-198B)",
            "categories": [
                "WellMess"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa21-116a",
            "date": "2020-05-26",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "Alert (AA21-116A): Russian Foreign Intelligence Service (SVR) Cyber Operations: Trends and Best Practices for Network Defenders",
            "categories": [
                "elf.wellmess",
                "WellMess"
            ]
        },
        {
            "data_url": "https://www.botconf.eu/wp-content/uploads/2018/12/2018-Y-Ishikawa-S-Nagano-Lets-go-with-a-Go-RAT-_final.pdf",
            "date": "2018-12-01",
            "organization": "Botconf",
            "author": "Yoshihiro Ishikawa",
            "title": "Let's go with a Go RAT!",
            "categories": [
                "elf.wellmess",
                "WellMess"
            ]
        },
        {
            "data_url": "https://blogs.jpcert.or.jp/en/2018/07/malware-wellmes-9b78.html",
            "date": "2018-07-06",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "Malware \u201cWellMess\u201d Targeting Linux and Windows",
            "categories": [
                "elf.wellmess",
                "WellMess"
            ]
        },
        {
            "data_url": "https://blog.jpcert.or.jp/2018/07/malware-wellmes-9b78.html",
            "date": "2018-07-06",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "Malware \u201cWellMess\u201d Targeting Linux and Windows",
            "categories": [
                "WellMess"
            ]
        },
        {
            "data_url": "https://www.lac.co.jp/lacwatch/pdf/20180614_cecreport_vol3.pdf",
            "date": "2018-06-14",
            "organization": "LAC",
            "author": "Cyber \u200b\u200bEmergency Center",
            "title": "Cyber \u200b\u200bEmergency Center Report No. 3",
            "categories": [
                "WellMess"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "wellmess",
            "procedure_code": "s0514",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0514",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "wellmess can execute powershell scripts received from c2.[238][239]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "wellmess can execute command line scripts received from c2.[349]"
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
                    "procedure_description": "wellmess can decode and decrypt data received from c2.[251][252][253]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/002",
                    "technique_name": "permission groups discovery : domain groups",
                    "technique_description": "adversaries may attempt to find domain-level groups and permission settings. the knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as domain administrators.",
                    "procedure_description": "wellmess can identify domain group membership for the current user.[32]"
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
                    "procedure_description": "wellmess can identify the computer name of a compromised host.[393][394]"
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
                    "procedure_description": "wellmess can identify the ip address and user domain on the target machine.[248][249]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1033",
                    "technique_link": "https://attack.mitre.org/techniques/T1033",
                    "technique_name": "system owner/user discovery",
                    "technique_description": "adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. they may do this, for example, by retrieving account usernames or by using os credential dumping. the information may be collected in a number of different ways using other discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. adversaries may use the information from system owner/user discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "wellmess can collect the username on the victim machine to send to c2.[198]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "wellmess can send files from the victim machine to c2.[192][193]"
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
                    "procedure_description": "wellmess can use http and https in c2 communications.[361][362][363][314]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/004",
                    "technique_name": "application layer protocol : dns",
                    "technique_description": "adversaries may communicate using the domain name system (dns) application layer protocol to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "wellmess has the ability to use dns tunneling for c2 communications.[69][70]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1132/001",
                    "technique_name": "data encoding : standard encoding",
                    "technique_description": "adversaries may encode data with a standard data encoding system to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a standard data encoding system that adheres to existing protocol specifications. common data encoding schemes include ascii, unicode, hexadecimal, base64, and mime. some data encoding systems may also result in data compression, such as gzip.",
                    "procedure_description": "wellmess has used base64 encoding to uniquely identify communication to and from the c2.[95]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/001",
                    "technique_name": "data obfuscation : junk data",
                    "technique_description": "adversaries may add junk data to protocols used for command and control to make detection more difficult. by adding random or meaningless data to the protocols used for command and control, adversaries can prevent trivial methods for decoding, deciphering, or otherwise analyzing the traffic. examples may include appending/prepending data with junk characters or writing junk characters between significant characters.",
                    "procedure_description": "wellmess can use junk data in the base64 string for additional obfuscation.[15]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/001",
                    "technique_name": "encrypted channel : symmetric cryptography",
                    "technique_description": "adversaries may employ a known symmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. symmetric encryption algorithms use the same key for plaintext encryption and ciphertext decryption. common symmetric encryption algorithms include aes, des, 3des, blowfish, and rc4.",
                    "procedure_description": "wellmess can encrypt http post data using rc6 and a dynamically generated aes key encrypted with a hard coded rsa public key.[143][144][145]"
                },
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
                    "procedure_description": "wellmess can communicate to c2 with mutual tls where client and server mutually check certificates.[67][68][69][66]"
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
                    "procedure_description": "wellmess can write files to a compromised host.[21][471]"
                }
            ]
        }
    ]
};