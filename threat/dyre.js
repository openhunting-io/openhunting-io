var threatdata = {
    "name": "Dyre",
    "alias": "Dyre, Dyreza, Dyzap, Dyranges",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Backdoor",
    "modified": "2021",
    "all_data": {
        "tool": "Dyre",
        "names": [
            {
                "name": "Dyre"
            },
            {
                "name": "Dyreza"
            },
            {
                "name": "Dyzap"
            },
            {
                "name": "Dyranges"
            }
        ],
        "description": "(SecureWorks) In early June 2014, the Dell SecureWorks Counter Threat Unit (CTU) research team discovered the Dyre banking trojan, which was being distributed by {{Cutwail}} botnet spam emails that included links to either Dropbox or Cubby file storage services. The threat actors later shifted to distribution via the {{Upatre}} downloader trojan. Dyre is also known as Dyreza, Dyzap, and Dyranges by the antivirus industry.\n\nDyre harvests credentials, primarily targeting online banking websites to perform Automated Clearing House (ACH) and wire fraud. The malware includes a modular architecture, man-in-the-browser functionality, and a backconnect server that allows threat actors to connect to a bank website through the victim's computer. The man-in-the-browser functionality is based on a unique combination of redirects to fake websites controlled by the threat actor ('web fakes') and a dynamic web inject system that allows the threat actors to manipulate a financial institution's website content. Similar to other banking trojans, Dyre hooks into the most popular web browsers to intercept traffic from a victim's system, stealing information and manipulating website content before it is rendered by the browser.\n\nEarly Dyre versions were relatively primitive, sending command and control (C2) communications and stolen data via unencrypted HTTP. Recent iterations of Dyre use SSL to encrypt all C2 communications, as well as a custom encryption algorithm. Dyre also uses RSA cryptography to digitally sign configuration files and malware plugins to prevent tampering.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Backdoor"
        ],
        "information": [
            "https://www.secureworks.com/research/dyre-banking-trojan",
            "https://www.blueliv.com/downloads/documentation/reports/Network_insights_of_Dyre_and_Dridex_Trojan_bankers.pdf",
            "https://blog.malwarebytes.com/threat-analysis/2015/11/a-technical-look-at-dyreza/",
            "https://www.forbes.com/sites/thomasbrewster/2017/05/04/dyre-hackers-stealing-millions-from-american-coporates",
            "https://www.crowdstrike.com/blog/sin-ful-spiders-wizard-spider-and-lunar-spider-sharing-the-same-web/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0024/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dyre"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Dyre"
        ],
        "uuid": "1b27f8b4-dddf-4d58-b033-3772234bdd47",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dyre",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/gold-blackburn",
            "date": "2021",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "Threat Profile: GOLD BLACKBURN",
            "categories": [
                "Buer",
                "Dyre",
                "TrickBot",
                "WIZARD SPIDER"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2020/graphology-of-an-exploit-playbit/",
            "date": "2020-10-26",
            "organization": "Checkpoint",
            "author": "Itay Cohen",
            "title": "Exploit Developer Spotlight: The Story of PlayBit",
            "categories": [
                "Dyre",
                "Maze",
                "PyLocky",
                "Ramnit",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.f5.com/labs/articles/education/banking-trojans-a-reference-guide-to-the-malware-family-tree",
            "date": "2020-08-09",
            "organization": "F5 Labs",
            "author": "Remi Cohen",
            "title": "Banking Trojans: A Reference Guide to the Malware Family Tree",
            "categories": [
                "BackSwap",
                "Carberp",
                "Citadel",
                "DanaBot",
                "Dridex",
                "Dyre",
                "Emotet",
                "Gozi",
                "Kronos",
                "PandaBanker",
                "Ramnit",
                "Shylock",
                "SpyEye",
                "Tinba",
                "TrickBot",
                "Vawtrak",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-blackburn",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD BLACKBURN",
            "categories": [
                "Dyre",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/evolution-of-malware-sandbox-evasion-tactics-a-retrospective-study/",
            "date": "2019-09-09",
            "organization": "McAfee",
            "author": "Thomas Roccia",
            "title": "Evolution of Malware Sandbox Evasion Tactics \u2013 A Retrospective Study",
            "categories": [
                "Cutwail",
                "Dridex",
                "Dyre",
                "Kovter",
                "Locky",
                "Phorpiex",
                "Simda"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/sin-ful-spiders-wizard-spider-and-lunar-spider-sharing-the-same-web/",
            "date": "2019-02-15",
            "organization": "CrowdStrike",
            "author": "Brendon Feeley",
            "title": "\u201cSin\u201d-ful SPIDERS: WIZARD SPIDER and LUNAR SPIDER Sharing the Same Web",
            "categories": [
                "Dyre",
                "IcedID",
                "TrickBot",
                "Vawtrak",
                "LUNAR SPIDER",
                "WIZARD SPIDER"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/evolution-of-the-gold-evergreen-threat-group",
            "date": "2017-05-15",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Evolution of the GOLD EVERGREEN Threat Group",
            "categories": [
                "CryptoLocker",
                "Dridex",
                "Dyre",
                "Gameover P2P",
                "Murofet",
                "TrickBot",
                "Zeus",
                "GOLD EVERGREEN"
            ]
        },
        {
            "data_url": "https://www.forbes.com/sites/thomasbrewster/2017/05/04/dyre-hackers-stealing-millions-from-american-coporates",
            "date": "2017-05-04",
            "organization": "Forbes",
            "author": "Thomas Brewster",
            "title": "Behind The Mystery Of Russia's 'Dyre' Hackers Who Stole Millions From American Business",
            "categories": [
                "Dyre"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2015/11/a-technical-look-at-dyreza/",
            "date": "2015-11-04",
            "organization": "Malwarebytes",
            "author": "hasherezade",
            "title": "A Technical Look At Dyreza",
            "categories": [
                "Dyre"
            ]
        },
        {
            "data_url": "https://www.blueliv.com/downloads/documentation/reports/Network_insights_of_Dyre_and_Dridex_Trojan_bankers.pdf",
            "date": "2015-10-26",
            "organization": "Blueliv",
            "author": "Blueliv",
            "title": "Chasing cybercrime: network insights of Dyre and Dridex Trojan bankers",
            "categories": [
                "Dridex",
                "Dyre"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2015/07/dyre_banking_trojan.html",
            "date": "2015-07-07",
            "organization": "FireEye",
            "author": "Sudeep Singh",
            "title": "Dyre Banking Trojan Exploits CVE-2015-0057",
            "categories": [
                "Dyre"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/dyre-banking-trojan",
            "date": "2014-12-17",
            "organization": "Secureworks",
            "author": "Brett Stone-Gross",
            "title": "Dyre Banking Trojan",
            "categories": [
                "Dyre",
                "Vawtrak",
                "WIZARD SPIDER"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "dyre",
            "procedure_code": "s0024",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0024",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "dyre has the ability to achieve persistence by adding a new task in the task scheduler to run every minute.[53]"
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
                    "procedure_description": "dyre registers itself as a service by adding several registry keys.[44]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "dyre has the ability to achieve persistence by adding a new task in the task scheduler to run every minute.[53]"
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
                    "procedure_description": "dyre registers itself as a service by adding several registry keys.[44]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "dyre has the ability to directly inject its code into the web browser process.[20]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "dyre injects into other processes to load modules.[22]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "dyre has the ability to achieve persistence by adding a new task in the task scheduler to run every minute.[53]"
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
                    "procedure_description": "dyre decrypts resources needed for targeting the victim.[77][78]"
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
                    "procedure_description": "dyre has been delivered with encrypted resources and must be unpacked for execution.[34]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "dyre has the ability to directly inject its code into the web browser process.[20]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "dyre injects into other processes to load modules.[22]"
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
                    "procedure_description": "dyre can detect sandbox analysis environments by inspecting the process list and registry.[16][17]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518",
                    "technique_link": "https://attack.mitre.org/techniques/T1518",
                    "technique_name": "software discovery",
                    "technique_description": "adversaries may attempt to get a listing of software and software versions that are installed on a system or in a cloud environment. adversaries may use the information from software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "dyre has the ability to identify installed programs on a compromised host.[9]"
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
                    "procedure_description": "dyre has the ability to identify the computer name, os version, and hardware configuration on a compromised host.[120]"
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
                    "procedure_description": "dyre has the ability to identify network settings on a compromised host.[75]"
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
                    "procedure_description": "dyre has the ability to identify the users on a compromised host.[54]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1007",
                    "technique_link": "https://attack.mitre.org/techniques/T1007",
                    "technique_name": "system service discovery",
                    "technique_description": "adversaries may try to gather information about registered local system services. adversaries may obtain information about services using tools as well as os utility commands such as sc query, tasklist /svc, systemctl --type=service, and net start.",
                    "procedure_description": "dyre has the ability to identify running services on a compromised host.[15]"
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
                    "procedure_description": "dyre can detect sandbox analysis environments by inspecting the process list and registry.[16][17]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1074/001",
                    "technique_name": "data staged : local data staging",
                    "technique_description": "adversaries may stage collected data in a central location or directory on the local system prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "dyre has the ability to create files in a temp folder to act as a database to store information.[30]"
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
                    "procedure_description": "dyre uses https for c2 communications.[107][108]"
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
                    "procedure_description": "dyre has a command to download and executes additional files.[158]"
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
                    "procedure_description": "dyre has the ability to send information staged on a compromised host externally to c2.[38]"
                }
            ]
        }
    ]
};