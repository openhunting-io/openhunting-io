var threatdata = {
    "name": "SodaMaster",
    "alias": "SodaMaster, DelfsCake, dfls, DARKTOWN, HEAVYPOT",
    "category": "Malware",
    "type": "Backdoor, Downloader, Loader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "SodaMaster",
        "names": [
            {
                "name": "SodaMaster"
            },
            {
                "name": "DelfsCake"
            },
            {
                "name": "dfls"
            },
            {
                "name": "DARKTOWN"
            },
            {
                "name": "HEAVYPOT"
            }
        ],
        "description": "(Kaspersky) Another payload of the {{Ecipekac}} loader, which we call SodaMaster (a.k.a DelfsCake), is also a new fileless malware. In our research we found more than 10 samples of SodaMaster. All the collected samples of this module were almost identical, with the offsets and hex patterns of all functions perfectly matching. The only differences were in the configuration data, including a hardcoded C2, an encoded RSA key and additional data for calculating a mutex value.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader",
            "Loader"
        ],
        "information": [
            "https://securelist.com/apt10-sophisticated-multi-layered-loader-ecipekac-discovered-in-a41apt-campaign/101519/",
            "https://jsac.jpcert.or.jp/archive/2021/pdf/JSAC2021_202_niwa-yanagishita_en.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0627/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sodamaster"
        ],
        "uuid": "583bd930-612c-400d-b0c0-ac4ec05023b0",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sodamaster",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secureworks.com/research/bronze-starlight-ransomware-operations-use-hui-loader",
            "date": "2022-06-23",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "BRONZE STARLIGHT Ransomware Operations Use HUI Loader",
            "categories": [
                "ATOMSILO",
                "Cobalt Strike",
                "HUI Loader",
                "LockFile",
                "NightSky",
                "Pandora",
                "PlugX",
                "Quasar RAT",
                "Rook",
                "SodaMaster"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/cicada-apt10-china-ngo-government-attacks",
            "date": "2022-04-05",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Cicada: Chinese APT Group Widens Targeting in Recent Espionage Activity",
            "categories": [
                "MimiKatz",
                "SodaMaster"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/chinese-hackers-abuse-vlc-media-player-to-launch-malware-loader/",
            "date": "2022-04-05",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "Chinese hackers abuse VLC Media Player to launch malware loader",
            "categories": [
                "SodaMaster"
            ]
        },
        {
            "data_url": "https://jsac.jpcert.or.jp/archive/2022/pdf/JSAC2022_9_yanagishita-tamada-nakatsuru-ishimaru_en.pdf",
            "date": "2022-01-27",
            "organization": "JSAC 2021",
            "author": "Hajime Yanagishita",
            "title": "What We Can Do against the Chaotic  A41APT Campaign",
            "categories": [
                "CHINACHOPPER",
                "Cobalt Strike",
                "HUI Loader",
                "SodaMaster"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q1-2021/101967/",
            "date": "2021-04-27",
            "organization": "Kaspersky",
            "author": "GReAT",
            "title": "APT trends report Q1 2021",
            "categories": [
                "PAS",
                "Artra Downloader",
                "BadNews",
                "Bozok",
                "DILLJUICE",
                "Kazuar",
                "Quasar RAT",
                "SodaMaster"
            ]
        },
        {
            "data_url": "https://jsac.jpcert.or.jp/archive/2021/pdf/JSAC2021_202_niwa-yanagishita_en.pdf",
            "date": "2021-02-24",
            "organization": "",
            "author": "Yusuke Niwa",
            "title": "A41APT case - Analysis of the Stealth APT Campaign Threatening Japan",
            "categories": [
                "SodaMaster"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "sodamaster",
            "procedure_code": "s0627",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0627",
            "techniques": [
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
                    "procedure_description": "sodamaster can use regopenkeyw to access the registry.[160]"
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
                    "procedure_description": "sodamaster can use \"stackstrings\" for obfuscation.[110]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "sodamaster can check for the presence of the registry key hkey_classes_root\\applications\\vmwarehostopen.exe before proceeding to its main functionality.[39]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "sodamaster has the ability to put itself to \"sleep\" for a specified time.[32]"
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
                    "procedure_description": "sodamaster can search a list of running processes.[191]"
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
                    "procedure_description": "sodamaster has the ability to query the registry to detect a key specific to vmware.[85]"
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
                    "procedure_description": "sodamaster can enumerate the host name and os version on a target system.[339]"
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
                    "procedure_description": "sodamaster can identify the username on a compromised host.[172]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "sodamaster can check for the presence of the registry key hkey_classes_root\\applications\\vmwarehostopen.exe before proceeding to its main functionality.[39]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "sodamaster has the ability to put itself to \"sleep\" for a specified time.[32]"
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
                    "procedure_description": "sodamaster can use rc4 to encrypt c2 communications.[125]"
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
                    "procedure_description": "sodamaster can use a hardcoded rsa key to encrypt some of its c2 traffic.[52]"
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
                    "procedure_description": "sodamaster has the ability to download additional payloads from c2 to the targeted system.[159]"
                }
            ]
        }
    ]
};