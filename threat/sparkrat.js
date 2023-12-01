var threatdata = {
    "name": "SparkRAT",
    "alias": "SparkRAT",
    "category": "Tools",
    "type": "Backdoor",
    "modified": "2023-09-05",
    "all_data": {
        "tool": "SparkRAT",
        "names": [
            {
                "name": "SparkRAT"
            }
        ],
        "description": "(SentinelLabs) SparkRAT is a RAT developed in Golang and released as open source software by the Chinese-speaking developer XZB-1248. SparkRAT is a feature-rich and multi-platform tool that supports the Windows, Linux, and macOS operating systems.\n\nSparkRAT uses the WebSocket protocol to communicate with the C2 server and features an upgrade system. This enables the RAT to automatically upgrade itself to the latest version available on the C2 server upon startup by issuing an upgrade request. This is an HTTP POST request, with the commit query parameter storing the current version of the tool.",
        "category": "Tools",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.sentinelone.com/labs/dragonspark-attacks-evade-detection-with-sparkrat-and-golang-source-code-interpretation/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.spark_rat"
        ],
        "uuid": "b566744a-fe14-45fd-83f9-7ccbf4325fac",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "SparkRAT",
            "malware_alias": null,
            "malware": "win.spark_rat",
            "last_update": "2023-10-12 06:11:16",
            "tags": [
                "TransparentTribe",
                "SparkRAT",
                "APT36",
                "trojan",
                "spyware",
                "RAT",
                "APT",
                "gorat",
                "spark",
                "rat"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://www.rakishevkenes.com/search/ws",
                        "timestamp": "2023-10-12 06:11:16"
                    },
                    {
                        "value": "http://www.rakishevkenes.com/ws/ws",
                        "timestamp": "2023-10-12 06:11:15"
                    },
                    {
                        "value": "http://www.rakishevkenes.com/bin/ws",
                        "timestamp": "2023-10-12 06:11:15"
                    },
                    {
                        "value": "http://www.rakishevkenes.com/ws",
                        "timestamp": "2023-10-12 06:11:15"
                    },
                    {
                        "value": "https://www.rakishevkenes.com:443/search/ws/ws",
                        "timestamp": "2023-10-12 06:11:14"
                    },
                    {
                        "value": "https://www.rakishevkenes.com/",
                        "timestamp": "2023-10-12 06:11:13"
                    }
                ],
                "domain": [
                    {
                        "value": "rakishevkenes.com",
                        "timestamp": "2023-10-12 06:11:13"
                    },
                    {
                        "value": "www.rakishevkenes.com",
                        "timestamp": "2023-10-12 06:11:12"
                    },
                    {
                        "value": "6jxbmkpe.torontobotdns.com",
                        "timestamp": "2023-07-24 12:02:10"
                    }
                ],
                "ip:port": [
                    {
                        "value": "43.140.252.169:8000",
                        "timestamp": "2023-09-07 06:40:25"
                    },
                    {
                        "value": "130.185.238.251:7777",
                        "timestamp": "2023-05-08 12:21:21"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "8942c78d1c9abee21c58ba2444083b40",
                        "timestamp": "2023-09-05 07:56:41"
                    },
                    {
                        "value": "606115347958dca7ac3c206c643d5419",
                        "timestamp": "2023-07-24 12:00:05"
                    },
                    {
                        "value": "f7e2dac6a8edf639212bdd4af905ba2c",
                        "timestamp": "2023-07-24 12:00:04"
                    },
                    {
                        "value": "ca77027959864b4809487127321694f7",
                        "timestamp": "2023-07-24 12:00:04"
                    },
                    {
                        "value": "ebc8f74281e0481b9da06b8c0d421ba6",
                        "timestamp": "2023-07-24 12:00:04"
                    },
                    {
                        "value": "2e66189aa1b6fd345a9c13124844ebbc",
                        "timestamp": "2023-07-24 12:00:04"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-10-12 06:11:16",
    "file_name": "sparkrat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://asec.ahnlab.com/ko/56715/",
            "date": "2023-09-05",
            "organization": "AhnLab",
            "author": "Sanseo",
            "title": "BlueShell malware used in APT attacks targeting Korea and Thailand",
            "categories": [
                "BlueShell",
                "SparkRAT"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/52899/",
            "date": "2023-05-18",
            "organization": "AhnLab",
            "author": "ASEC",
            "title": "SparkRAT Being Distributed Within a Korean VPN Installer",
            "categories": [
                "SparkRAT"
            ]
        },
        {
            "data_url": "https://blog.exatrack.com/melofee/",
            "date": "2023-03-28",
            "organization": "ExaTrack",
            "author": "ExaTrack",
            "title": "M\u00e9lof\u00e9e: a new alien malware in the Panda's toolset targeting Linux hosts",
            "categories": [
                "HelloBot",
                "Melofee",
                "Winnti",
                "Cobalt Strike",
                "SparkRAT",
                "STOWAWAY"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/dragonspark-attacks-evade-detection-with-sparkrat-and-golang-source-code-interpretation/",
            "date": "2023-01-24",
            "organization": "SentinelOne",
            "author": "Aleksandar Milenkoski",
            "title": "DragonSpark | Attacks Evade Detection with SparkRAT and Golang Source Code Interpretation",
            "categories": [
                "SparkRAT"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/en-us/security/blog/2022/12/21/microsoft-research-uncovers-new-zerobot-capabilities/",
            "date": "2022-12-21",
            "organization": "Microsoft",
            "author": "Microsoft Security Threat Intelligence",
            "title": "Microsoft research uncovers new Zerobot capabilities",
            "categories": [
                "ZeroBot",
                "SparkRAT"
            ]
        },
        {
            "data_url": "https://github.com/XZB-1248/Spark",
            "date": "2022-03-16",
            "organization": "Github (XZB-1248)",
            "author": "XZB-1248",
            "title": "Github Repository for Spark RAT",
            "categories": [
                "SparkRAT"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "spark",
            "procedure_code": "s0543",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0543",
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
                    "procedure_description": "spark can use cmd.exe to run commands.[314]"
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
                    "procedure_description": "spark has used a custom xor algorithm to decrypt the payload.[218]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/002",
                    "technique_name": "obfuscated files or information : software packing",
                    "technique_description": "adversaries may perform software packing or virtual machine software protection to conceal their code. software packing is a method of compressing or encrypting an executable. packing an executable changes the file signature in an attempt to avoid signature-based detection. most decompression techniques decompress the executable code in memory. virtual machine software protection translates an executable's original code into a special format that only a special virtual machine can run. a virtual machine is then called to run this code.",
                    "procedure_description": "spark has been packed with enigma protector to obfuscate its contents.[78]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/002",
                    "technique_name": "virtualization/sandbox evasion : user activity based checks",
                    "technique_description": "adversaries may employ various user activity checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "spark has used a splash screen to check whether an user actively clicks on the screen before running malicious code.[7]"
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
                    "procedure_description": "spark can collect the hostname, keyboard layout, and language from the system.[344]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1614.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1614/001",
                    "technique_name": "system location discovery : system language discovery",
                    "technique_description": "adversaries may attempt to gather information about the system language of a victim in order to infer the geographical location of that host. this information may be used to shape follow-on behaviors, including whether the adversary infects the target and/or attempts specific actions. this decision may be employed by malware developers and operators to reduce their risk of attracting the attention of specific law enforcement agencies or prosecution/scrutiny from other entities.",
                    "procedure_description": "spark has checked the results of the getkeyboardlayoutlist and the language name returned by getlocaleinfoa to make sure they contain the word \"arabic\" before executing.[20]"
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
                    "procedure_description": "spark has run the whoami command and has a built-in command to identify the user logged in.[175]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/002",
                    "technique_name": "virtualization/sandbox evasion : user activity based checks",
                    "technique_description": "adversaries may employ various user activity checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "spark has used a splash screen to check whether an user actively clicks on the screen before running malicious code.[7]"
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
                    "procedure_description": "spark has used http post requests to communicate with its c2 server to receive commands.[315]"
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
                    "procedure_description": "spark has encoded communications with the c2 server with base64.[85]"
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
                    "procedure_description": "spark has exfiltrated data over the c2 channel.[119]"
                }
            ]
        },
        {
            "procedure_name": "at",
            "procedure_code": "s0110",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0110",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                }
            ]
        }
    ]
};