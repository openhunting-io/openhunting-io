var threatdata = {
    "name": "Bankshot",
    "alias": "Bankshot, COPPERHEDGE, Trojan Manuscript",
    "category": "Malware",
    "type": "Backdoor, Tunneling",
    "modified": "2023-04-12",
    "all_data": {
        "tool": "Bankshot",
        "names": [
            {
                "name": "Bankshot"
            },
            {
                "name": "COPPERHEDGE"
            },
            {
                "name": "Trojan Manuscript"
            }
        ],
        "description": "(US-CERT) This report provides analysis of seven (7) malicious executable files. Five (5) of these files are proxy applications that all use a similar cipher algorithm to mask traffic between the malware and the remote operator. Additionally, two of the five proxies have the ability to generate fake TLS handshake sessions using valid public SSL certificates, disguising network connections with remote malicious actors. The remaining two (2) executables are remote access tools (RATs), providing remote users with the ability to run various commands on an infected system. One of these RATs uses a cipher and the OpenSSL library to add a layer of encryption to communications between the infected system and its command and control (C2) server; this RAT may have been used to install the proxy servers onto compromised systems.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://www.us-cert.gov/sites/default/files/publications/MAR-10135536-B_WHITE.PDF",
            "https://securingtomorrow.mcafee.com/mcafee-labs/hidden-cobra-targets-turkish-financial-sector-new-bankshot-implant/",
            "https://www.us-cert.gov/ncas/analysis-reports/ar20-133a"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0239/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bankshot"
        ],
        "uuid": "92386fd7-132d-4a22-a582-1d4460daa5e5",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bankshot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/the-lazarus-group-deathnote-campaign/109490/",
            "date": "2023-04-12",
            "organization": "Kaspersky Labs",
            "author": "Seongsu Park",
            "title": "Following the Lazarus group by tracking DeathNote campaign",
            "categories": [
                "Bankshot",
                "BLINDINGCAN",
                "LPEClient",
                "MimiKatz",
                "NedDnLoader",
                "Racket Downloader",
                "Volgmer"
            ]
        },
        {
            "data_url": "https://malverse.it/analisi-bankshot-copperhedge",
            "date": "2022-09-10",
            "organization": "Malverse",
            "author": "greenplan",
            "title": "Realizziamo un C&C Server in Python (Bankshot)",
            "categories": [
                "Bankshot"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/sites/default/files/publications/AA22-108A-TraderTraitor-North_Korea_APT_Targets_Blockchain_Companies.pdf",
            "date": "2022-04-18",
            "organization": "CISA",
            "author": "CISA",
            "title": "AA22-108A: TraderTraitor: North Korean State-Sponsored  APT Targets Blockchain Companies (PDF)",
            "categories": [
                "FastCash",
                "Bankshot"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-108a",
            "date": "2022-04-18",
            "organization": "CISA",
            "author": "CISA",
            "title": "Alert (AA22-108A): TraderTraitor: North Korean State-Sponsored APT Targets Blockchain Companies",
            "categories": [
                "Bankshot"
            ]
        },
        {
            "data_url": "https://vblocalhost.com/uploads/VB2021-Park.pdf",
            "date": "2021-10-08",
            "organization": "Virus Bulletin",
            "author": "Seongsu Park",
            "title": "Multi-universe of adversary: multiple campaigns of the Lazarus group and their connections",
            "categories": [
                "Dacls",
                "AppleJeus",
                "AppleJeus",
                "Bankshot",
                "BookCodes RAT",
                "Dacls",
                "DRATzarus",
                "LCPDot",
                "LPEClient"
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
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar20-232a",
            "date": "2020-08-19",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Malware Analysis Report (AR20-232A)",
            "categories": [
                "Bankshot",
                "BLINDINGCAN"
            ]
        },
        {
            "data_url": "https://blog.reversinglabs.com/blog/hidden-cobra",
            "date": "2020-06-23",
            "organization": "ReversingLabs",
            "author": "Karlo Zanki",
            "title": "Hidden Cobra - from a shed skin to the viper\u2019s nest",
            "categories": [
                "Bankshot",
                "PEBBLEDASH",
                "TAINTEDSCRIBE"
            ]
        },
        {
            "data_url": "https://www.us-cert.gov/ncas/analysis-reports/ar20-133a",
            "date": "2020-05-12",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "MAR-10288834-1.v1 \u2013 North Korean Remote Access Tool: COPPERHEDGE",
            "categories": [
                "Bankshot"
            ]
        },
        {
            "data_url": "https://blog.lexfo.fr/ressources/Lexfo-WhitePaper-The_Lazarus_Constellation.pdf",
            "date": "2020-02-19",
            "organization": "Lexfo",
            "author": "Lexfo",
            "title": "The Lazarus Constellation A study on North Korean malware",
            "categories": [
                "FastCash",
                "AppleJeus",
                "BADCALL",
                "Bankshot",
                "Brambul",
                "Dtrack",
                "Duuzer",
                "DYEPACK",
                "ELECTRICFISH",
                "HARDRAIN",
                "Hermes",
                "HOPLIGHT",
                "Joanap",
                "KEYMARBLE",
                "Kimsuky",
                "MimiKatz",
                "MyDoom",
                "NACHOCHEESE",
                "NavRAT",
                "PowerRatankba",
                "RokRAT",
                "Sierra(Alfa,Bravo, ...)",
                "Volgmer",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/nickel-gladstone",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "NICKEL GLADSTONE",
            "categories": [
                "AlphaNC",
                "Bankshot",
                "Ratankba",
                "Lazarus Group"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/uploads/pdf/magazine/2018/VB2018-Kalnai-Poslusny.pdf",
            "date": "2018-10-03",
            "organization": "Virus Bulletin",
            "author": "Peter K\u00e1lnai",
            "title": "Lazarus Group A Mahjong Game Played with Different Sets of Tiles",
            "categories": [
                "Bankshot",
                "BanPolMex RAT",
                "FuwuqiDrama",
                "HOTWAX",
                "KillDisk (Lazarus)",
                "NACHOCHEESE",
                "REDSHAWL",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://www.us-cert.gov/sites/default/files/publications/MAR-10135536-B_WHITE.PDF",
            "date": "2017-12-13",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Malware Analysis Report (MAR) - 10135536-B",
            "categories": [
                "BADCALL",
                "Bankshot"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "bankshot",
            "procedure_code": "s0239",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0239",
            "techniques": [
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
                    "procedure_description": "bankshot uses the command-line interface to execute arbitrary commands.[39][40]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1203",
                    "technique_link": "https://attack.mitre.org/techniques/T1203",
                    "technique_name": "exploitation for client execution",
                    "technique_description": "adversaries may exploit software vulnerabilities in client applications to execute code. vulnerabilities can exist in software due to unsecure coding practices that can lead to unanticipated behavior. adversaries can take advantage of certain vulnerabilities through targeted exploitation for the purpose of arbitrary code execution. oftentimes the most valuable exploits to an offensive toolkit are those that can be used to obtain code execution on a remote system because they can be used to gain access to that system. users will expect to see files related to the applications they commonly used to do work, so they are a useful target for exploit research and development because of their high utility.",
                    "procedure_description": "bankshot leverages a known zero-day vulnerability in adobe flash to execute the implant into the victims\u2019 machines.[24]"
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
                    "procedure_description": "bankshot creates processes using the windows api calls: createprocessa() and createprocessasusera().[32]"
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
                    "procedure_description": "bankshot can terminate a specific process by its process id.[20][21]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/002",
                    "technique_name": "access token manipulation : create process with token",
                    "technique_description": "adversaries may create a new process with an existing token to escalate privileges and bypass access controls. processes can be created with the token and resulting security context of another user using features such as createprocesswithtokenw and runas.",
                    "procedure_description": "bankshot grabs a user token using wtsqueryusertoken and then creates a process by impersonating a logged-on user.[4]"
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
                    "procedure_description": "bankshot can terminate a specific process by its process id.[20][21]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/002",
                    "technique_name": "access token manipulation : create process with token",
                    "technique_description": "adversaries may create a new process with an existing token to escalate privileges and bypass access controls. processes can be created with the token and resulting security context of another user using features such as createprocesswithtokenw and runas.",
                    "procedure_description": "bankshot grabs a user token using wtsqueryusertoken and then creates a process by impersonating a logged-on user.[4]"
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
                    "procedure_description": "bankshot decodes embedded xor strings.[28]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070",
                    "technique_link": "https://attack.mitre.org/techniques/T1070",
                    "technique_name": "indicator removal",
                    "technique_description": "adversaries may delete or modify artifacts generated within systems to remove evidence of their presence or hinder defenses. various artifacts may be created by an adversary or something that can be attributed to an adversary\u2019s actions. typically these artifacts are used as defensive indicators related to monitored events, such as strings from downloaded files, logs that are generated from user actions, and other data analyzed by defenders. location, format, and type of artifact (such as command or login history) are often specific to each platform.",
                    "procedure_description": "bankshot deletes all artifacts associated with the malware from the infected machine.[1]"
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
                    "procedure_description": "bankshot marks files to be deleted upon the next system reboot and uninstalls and removes itself from the system.[24]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/006",
                    "technique_name": "indicator removal : timestomp",
                    "technique_description": "adversaries may modify file time attributes to hide new or changes to existing files. timestomping is a technique that modifies the timestamps of a file (the modify, access, create, and change times), often to mimic files that are in the same folder. this is done, for example, on files that have been modified or created by the adversary so that they do not appear conspicuous to forensic investigators or file analysis tools.",
                    "procedure_description": "bankshot modifies the time of a file as specified by the control server.[9]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1112",
                    "technique_link": "https://attack.mitre.org/techniques/T1112",
                    "technique_name": "modify registry",
                    "technique_description": "adversaries may interact with the windows registry to hide configuration information within registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.",
                    "procedure_description": "bankshot writes data into the registry key hkey_local_machine\\software\\microsoft\\pniumj.[19]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/001",
                    "technique_name": "account discovery : local account",
                    "technique_description": "adversaries may attempt to get a listing of local system accounts. this information can help adversaries determine which local accounts exist on a system to aid in follow-on behavior.",
                    "procedure_description": "bankshot gathers domain and account names/information through process monitoring.[6]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/002",
                    "technique_name": "account discovery : domain account",
                    "technique_description": "adversaries may attempt to get a listing of domain accounts. this information can help adversaries determine which domain accounts exist to aid in follow-on behavior such as targeting specific accounts which possess particular privileges.",
                    "procedure_description": "bankshot gathers domain and account names/information through process monitoring.[6]"
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
                    "procedure_description": "bankshot searches for files on the victim's machine.[39]"
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
                    "procedure_description": "bankshot identifies processes and collects the process ids.[28]"
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
                    "procedure_description": "bankshot searches for certain registry keys to be configured before executing the payload.[10]"
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
                    "procedure_description": "bankshot gathers system information, network addresses, disk type, disk free space, and the operation system version.[49][50]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1119",
                    "technique_link": "https://attack.mitre.org/techniques/T1119",
                    "technique_name": "automated collection",
                    "technique_description": "once established within a system or network, an adversary may use automated techniques for collecting internal data. methods for performing this technique could include use of a command and scripting interpreter to search for and copy information fitting set criteria such as file type, location, or name at specific time intervals. in cloud-based environments, adversaries may also use cloud apis, command line interfaces, or extract, transform, and load (etl) services to automatically collect data. this functionality could also be built into remote access tools.",
                    "procedure_description": "bankshot recursively generates a list of files within a directory and sends them back to the control server.[6]"
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
                    "procedure_description": "bankshot collects files from the local system.[24]"
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
                    "procedure_description": "bankshot uses http for command and control communication.[32]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1132/002",
                    "technique_name": "data encoding : non-standard encoding",
                    "technique_description": "adversaries may encode data with a non-standard data encoding system to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a non-standard data encoding system that diverges from existing protocol specifications. non-standard data encoding schemes may be based on or related to standard data encoding schemes, such as a modified base64 encoding for the message body of an http request.",
                    "procedure_description": "bankshot encodes commands from the control server using a range of characters and gzip.[4]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/003",
                    "technique_name": "data obfuscation : protocol impersonation",
                    "technique_description": "adversaries may impersonate legitimate protocols or web service traffic to disguise command and control activity and thwart analysis efforts. by impersonating legitimate protocols or web services, adversaries can make their command and control traffic blend in with legitimate network traffic.",
                    "procedure_description": "bankshot generates a false tls handshake using a public certificate to disguise c2 network communications.[2]"
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
                    "procedure_description": "bankshot uploads files and secondary payloads to the victim's machine.[57]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1571",
                    "technique_link": "https://attack.mitre.org/techniques/T1571",
                    "technique_name": "non-standard port",
                    "technique_description": "adversaries may communicate using a protocol and port pairing that are typically not associated. for example, https over port 8088 or port 587 as opposed to the traditional port 443. adversaries may make changes to the standard port used by a protocol to bypass filtering or muddle analysis/parsing of network data.",
                    "procedure_description": "bankshot binds and listens on port 1058 for http traffic while also utilizing a faketls method.[7]"
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
                    "procedure_description": "bankshot exfiltrates data over its c2 channel.[13]"
                }
            ]
        }
    ]
};