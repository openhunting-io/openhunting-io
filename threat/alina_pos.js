var threatdata = {
    "name": "Alina POS",
    "alias": "Alina POS, Track, alina_eagle, alina_spark, aline_joker, katrina",
    "category": "Malware",
    "type": "POS malware, Reconnaissance, Credential stealer",
    "modified": "2020-07-02",
    "all_data": {
        "tool": "Alina POS",
        "names": [
            {
                "name": "Alina POS"
            },
            {
                "name": "Track"
            },
            {
                "name": "alina_eagle"
            },
            {
                "name": "alina_spark"
            },
            {
                "name": "aline_joker"
            },
            {
                "name": "katrina"
            }
        ],
        "description": "(Trustwave) Alina is a well-documented family of malware used to scrape Credit Card (CC) data from Point of Sale (POS) software. We published a series of in-depth write-ups on the capabilities Alina possesses as well as the progression of the versions. Xylitol has a nice write-up on the Command and Control (C&C) aspects of Alina.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Reconnaissance",
            "Credential stealer"
        ],
        "information": [
            "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/alina-pos-malware-sparks-off-a-new-variant/",
            "https://www.trustwave.com/Resources/SpiderLabs-Blog/Alina--Casting-a-Shadow-on-POS/",
            "https://www.trustwave.com/Resources/SpiderLabs-Blog/Alina--Following-The-Shadow-Part-1/",
            "https://www.trustwave.com/Resources/SpiderLabs-Blog/Alina--Following-The-Shadow-Part-2/",
            "http://www.xylibox.com/2013/02/alina-34-pos-malware.html",
            "https://www.xylibox.com/2013/10/inside-malware-campaign-alina-dexter.html",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/two-new-pos-malware-affecting-us-smbs/",
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp-pos-ram-scraper-malware.pdf",
            "https://www.secureworks.com/research/point-of-sale-malware-threats",
            "https://blog.centurylink.com/alina-point-of-sale-malware-still-lurking-in-dns/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.alina_pos"
        ],
        "uuid": "4682195b-5e67-4d26-bde7-1d915344b84f",
        "last-card-change": "2020-07-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "alina_pos",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.centurylink.com/alina-point-of-sale-malware-still-lurking-in-dns/",
            "date": "2020-07-01",
            "organization": "Centurylink",
            "author": "Black Lotus Labs",
            "title": "Alina Point of Sale Malware Still Lurking in DNS",
            "categories": [
                "Alina POS"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/operation-black-atlas-endangers-in-store-card-payments-and-smbs-worldwide-switches-between-blackpos-and-other-tools/",
            "date": "2015-12-01",
            "organization": "Trend Micro",
            "author": "Jay Yaneza",
            "title": "Operation Black Atlas Endangers In-Store Card Payments and SMBs Worldwide; Switches between BlackPOS and Other Tools",
            "categories": [
                "Alina POS",
                "BlackPOS",
                "Kronos",
                "NewPosThings"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/two-new-pos-malware-affecting-us-smbs/",
            "date": "2015-09-28",
            "organization": "Trend Micro",
            "author": "Trend Micro Forward Looking Research Team",
            "title": "Two New PoS Malware Affecting US SMBs",
            "categories": [
                "Alina POS"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/Resources/SpiderLabs-Blog/Alina--Following-The-Shadow-Part-2/",
            "date": "2013-06-03",
            "organization": "Trustwave",
            "author": "Josh Grunzweig",
            "title": "Alina: Following The Shadow Part 2",
            "categories": [
                "Alina POS"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/Resources/SpiderLabs-Blog/Alina--Following-The-Shadow-Part-1/",
            "date": "2013-05-17",
            "organization": "Trustwave",
            "author": "Josh Grunzweig",
            "title": "Alina: Following The Shadow Part 1",
            "categories": [
                "Alina POS"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/Resources/SpiderLabs-Blog/Alina--Casting-a-Shadow-on-POS/",
            "date": "2013-05-08",
            "organization": "SpiderLabs Blog",
            "author": "Josh Grunzweig",
            "title": "Alina: Casting a Shadow on POS",
            "categories": [
                "Alina POS"
            ]
        },
        {
            "data_url": "http://www.xylibox.com/2013/02/alina-34-pos-malware.html",
            "date": "2013-02-04",
            "organization": "XyliBox",
            "author": "Xylitol",
            "title": "Alina 3.4 (POS Malware)",
            "categories": [
                "Alina POS"
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