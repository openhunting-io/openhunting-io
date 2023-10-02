var threatdata = {
    "name": "POWERSTATS",
    "alias": "POWERSTATS, Valyria",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-06-29",
    "all_data": {
        "tool": "POWERSTATS",
        "names": [
            {
                "name": "POWERSTATS"
            },
            {
                "name": "Valyria"
            }
        ],
        "description": "(Palo Alto) MuddyWater attacks are characterized by the use of a slowly evolving PowerShell-based first stage backdoor we call \u201cPOWERSTATS\u201d.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-muddying-the-water-targeted-attacks-in-the-middle-east/",
            "https://www.clearskysec.com/muddywater-operations-in-lebanon-and-oman/",
            "https://www.fireeye.com/blog/threat-research/2018/03/iranian-threat-group-updates-ttps-in-spear-phishing-campaign.html",
            "https://blog.malwarebytes.com/threat-analysis/2017/09/elaborate-scripting-fu-used-in-espionage-attack-against-saudi-arabia-government_entity/",
            "https://reaqta.com/2017/11/muddywater-apt-targeting-middle-east/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/campaign-possibly-connected-muddywater-surfaces-middle-east-central-asia/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0223/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.powerstats"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:POWERSTATS"
        ],
        "uuid": "2bde4b8c-ab64-4510-a248-d7eabe428a8a",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "powerstats",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.deepinstinct.com/blog/phonyc2-revealing-a-new-malicious-command-control-framework-by-muddywater",
            "date": "2023-06-29",
            "organization": "DeepInstinct",
            "author": "Simon Kenin",
            "title": "PhonyC2: Revealing a New Malicious Command & Control Framework by MuddyWater",
            "categories": [
                "PhonyC2",
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/boggyserpens/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Boggy Serpens",
            "categories": [
                "POWERSTATS",
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://www.inforisktoday.com/muddywater-targets-critical-infrastructure-in-asia-europe-a-18611",
            "date": "2022-02-25",
            "organization": "infoRisk TODAY",
            "author": "Prajeet Nair",
            "title": "MuddyWater Targets Critical Infrastructure in Asia, Europe",
            "categories": [
                "POWERSTATS",
                "PowGoop",
                "STARWHALE",
                "GRAMDOOR",
                "MoriAgent"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-055a",
            "date": "2022-02-24",
            "organization": "",
            "author": "FBI",
            "title": "Alert (AA22-055A) Iranian Government-Sponsored Actors Conduct Cyber Operations Against Global Government and Commercial Networks",
            "categories": [
                "POWERSTATS",
                "PowGoop",
                "MoriAgent"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/sites/default/files/publications/AA22-055A_Iranian_Government-Sponsored_Actors_Conduct_Cyber_Operations.pdf",
            "date": "2022-02-24",
            "organization": "",
            "author": "FBI",
            "title": "Iranian Government-Sponsored Actors Conduct Cyber Operations Against Global Government  and Commercial Networks",
            "categories": [
                "POWERSTATS",
                "PowGoop",
                "GRAMDOOR",
                "MoriAgent"
            ]
        },
        {
            "data_url": "https://shells.systems/reviving-leaked-muddyc3-used-by-muddywater-apt/",
            "date": "2021-01-13",
            "organization": "Shells.System blog",
            "author": "Ahmed Khlief",
            "title": "Reviving MuddyC3 Used by MuddyWater (IRAN) APT",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://marcoramilli.com/2020/01/15/iranian-threat-actors-preliminary-analysis/",
            "date": "2020-01-15",
            "organization": "Marco Ramilli's Blog",
            "author": "Marco Ramilli",
            "title": "Iranian Threat Actors: Preliminary Analysis",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://blog.prevailion.com/2020/01/summer-mirage.html",
            "date": "2020-01-07",
            "organization": "Prevailion",
            "author": "Danny Adamitis",
            "title": "Summer Mirage",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/cobalt-ulster",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT ULSTER",
            "categories": [
                "POWERSTATS",
                "Koadic",
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q2-2019/91897/",
            "date": "2019-08-01",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2019",
            "categories": [
                "ZooPark",
                "magecart",
                "POWERSTATS",
                "Chaperone",
                "COMpfun",
                "EternalPetya",
                "FinFisher RAT",
                "HawkEye Keylogger",
                "HOPLIGHT",
                "Microcin",
                "NjRAT",
                "Olympic Destroyer",
                "PLEAD",
                "RokRAT",
                "Triton",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/muddywater-resurfaces-uses-multi-stage-backdoor-powerstats-v3-and-new-post-exploitation-tools/",
            "date": "2019-06-10",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "MuddyWater Resurfaces, Uses Multi-Stage Backdoor POWERSTATS V3 and New Post-Exploitation Tools",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://www.group-ib.com/blog/muddywater/",
            "date": "2019-05-29",
            "organization": "Group-IB",
            "author": "Group-IB",
            "title": "Catching fish in muddy waters",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://www.clearskysec.com/muddywater-targets-kurdish-groups-turkish-orgs/",
            "date": "2019-04-15",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "Iranian APT MuddyWater Attack Infrastructure Targeting Kurdish Political Groups and Organizations in Turkey",
            "categories": [
                "POWERSTATS",
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2019/the-muddy-waters-of-apt-attacks/",
            "date": "2019-04-10",
            "organization": "Check Point",
            "author": "Check Point Research",
            "title": "The Muddy Waters of APT Attacks",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/NN_iRvwA6yOHFS9Z3A0RBA",
            "date": "2019-03-21",
            "organization": "Qianxin",
            "author": "Qi Anxin",
            "title": "Analysis of the latest attack activities of the suspected MuddyWater APT group against the Iraqi mobile operator Korek Telecom",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://www.clearskysec.com/muddywater-operations-in-lebanon-and-oman/",
            "date": "2018-11-28",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "MuddyWater Operations in Lebanon and Oman",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://www.clearskysec.com/wp-content/uploads/2019/06/Clearsky-Iranian-APT-group-%E2%80%98MuddyWater%E2%80%99-Adds-Exploits-to-Their-Arsenal.pdf",
            "date": "2018-06-06",
            "organization": "ClearSky",
            "author": "ClearSky Cyber Security",
            "title": "Iranian APT group \u2018MuddyWater\u2019 Adds Exploits to Their Arsenal",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://sec0wn.blogspot.com/2018/05/clearing-muddywater-analysis-of-new.html",
            "date": "2018-05-08",
            "organization": "Security 0wnage",
            "author": "Mo Bustami",
            "title": "Clearing the MuddyWater - Analysis of new MuddyWater Samples",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20180807105755/https://www.sekoia.fr/blog/falling-on-muddywater/",
            "date": "2018-03-22",
            "organization": "Sekoia",
            "author": "sekoia",
            "title": "Falling on MuddyWater",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2018/03/iranian-threat-group-updates-ttps-in-spear-phishing-campaign.html",
            "date": "2018-03-13",
            "organization": "FireEye",
            "author": "Sudeep Singh",
            "title": "Iranian Threat Group Updates Tactics, Techniques and Procedures in Spear Phishing Campaign",
            "categories": [
                "POWERSTATS",
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/campaign-possibly-connected-muddywater-surfaces-middle-east-central-asia/",
            "date": "2018-03-12",
            "organization": "Trend Micro",
            "author": "Jarom\u00edr Ho\u0159ej\u0161\u00ed",
            "title": "Campaign Possibly Connected to \u201cMuddyWater\u201d Surfaces in the Middle East and Central Asia",
            "categories": [
                "POWERSTATS",
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://sec0wn.blogspot.com/2018/03/a-quick-dip-into-muddywaters-recent.html",
            "date": "2018-03-01",
            "organization": "Security 0wnage",
            "author": "Mo Bustami",
            "title": "A Quick Dip into MuddyWater's Recent Activity",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://sec0wn.blogspot.com/2018/02/burping-on-muddywater.html",
            "date": "2018-01-02",
            "organization": "Security 0wnage",
            "author": "Mo Bustami",
            "title": "Burping on MuddyWater",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://reaqta.com/2017/11/muddywater-apt-targeting-middle-east/",
            "date": "2017-11-22",
            "organization": "Reaqta",
            "author": "Reaqta",
            "title": "A dive into MuddyWater APT targeting Middle-East",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-muddying-the-water-targeted-attacks-in-the-middle-east/",
            "date": "2017-11-14",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tom Lancaster",
            "title": "Muddying the Water: Targeted Attacks in the Middle East",
            "categories": [
                "POWERSTATS",
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://sec0wn.blogspot.com/2017/10/continued-activity-targeting-middle-east.html",
            "date": "2017-10-04",
            "organization": "Security 0wnage",
            "author": "Mo Bustami",
            "title": "Continued Activity targeting the Middle East",
            "categories": [
                "POWERSTATS"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2017/09/elaborate-scripting-fu-used-in-espionage-attack-against-saudi-arabia-government_entity/",
            "date": "2017-09-26",
            "organization": "Malwarebytes",
            "author": "Malwarebytes Labs",
            "title": "Elaborate scripting-fu used in espionage attack against Saudi Arabia Government entity",
            "categories": [
                "POWERSTATS"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "powerstats",
            "procedure_code": "s0223",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0223",
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
                    "procedure_description": "powerstats uses powershell for obfuscation and execution.[185][156][186][160]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "powerstats can use vbscript (vbe) code for execution.[93][120]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/007",
                    "technique_name": "command and scripting interpreter : javascript",
                    "technique_description": "adversaries may abuse various implementations of javascript for execution. javascript (js) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though js can be executed in runtime environments outside the browser.",
                    "procedure_description": "powerstats can use javascript code for execution.[52]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1559.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1559/001",
                    "technique_name": "inter-process communication : component object model",
                    "technique_description": "adversaries may use the windows component object model (com) for local code execution. com is an inter-process communication (ipc) component of the native windows application programming interface (api) that enables interaction between software objects, or executable code that implements one or more interfaces. through com, a client object can call methods of server objects, which are typically binary dynamic link libraries (dll) or executables (exe). remote com execution is facilitated by remote services such as  distributed component object model (dcom).",
                    "procedure_description": "powerstats can use dcom (targeting the 127.0.0.1 loopback address) to execute additional payloads on compromised hosts.[16]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1559.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1559/002",
                    "technique_name": "inter-process communication : dynamic data exchange",
                    "technique_description": "adversaries may use windows dynamic data exchange (dde) to execute arbitrary commands. dde is a client-server protocol for one-time and/or continuous inter-process communication (ipc) between applications. once a link is established, applications can autonomously exchange transactions consisting of strings, warm data links (notifications when a data item changes), hot data links (duplications of changes to a data item), and requests for command execution.",
                    "procedure_description": "powerstats can use dde to execute additional payloads on compromised hosts.[27]"
                },
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
                    "procedure_description": "powerstats has established persistence through a scheduled task using the command \"c:\\windows\\system32\\schtasks.exe\" /create /f /sc daily /st 12:00 /tn microsoftedge /tr \"c:\\windows\\system32\\wscript.exe c:\\windows\\temp\\windows.vbe\".[131]"
                },
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
                    "procedure_description": "powerstats can use wmi queries to retrieve data from compromised hosts.[102][84]"
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
                    "procedure_description": "powerstats has established persistence through a scheduled task using the command \"c:\\windows\\system32\\schtasks.exe\" /create /f /sc daily /st 12:00 /tn microsoftedge /tr \"c:\\windows\\system32\\wscript.exe c:\\windows\\temp\\windows.vbe\".[131]"
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
                    "procedure_description": "powerstats has established persistence through a scheduled task using the command \"c:\\windows\\system32\\schtasks.exe\" /create /f /sc daily /st 12:00 /tn microsoftedge /tr \"c:\\windows\\system32\\wscript.exe c:\\windows\\temp\\windows.vbe\".[131]"
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
                    "procedure_description": "powerstats can deobfuscate the main backdoor code.[155]"
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
                    "procedure_description": "powerstats can disable microsoft office protected view by changing registry keys.[69]"
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
                    "procedure_description": "powerstats can delete all files on the c:\\, d:\\, e:\\ and, f:\\ drives using powershell remove-item commands.[182]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/004",
                    "technique_name": "masquerading : masquerade task or service",
                    "technique_description": "adversaries may attempt to manipulate the name of a task or service to make it appear legitimate or benign. tasks/services executed by the task scheduler or systemd will typically be given a name and/or description. windows services will have a service name as well as a display name. many benign tasks and services exist that have commonly associated names. adversaries may give tasks or services names that are similar or identical to those of legitimate ones.",
                    "procedure_description": "powerstats has created a scheduled task named \"microsoftedge\" to establish persistence.[56]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/001",
                    "technique_name": "obfuscated files or information : binary padding",
                    "technique_description": "adversaries may use binary padding to add junk data and change the on-disk representation of malware. this can be done without affecting the functionality or behavior of a binary, but can increase the size of the binary beyond what some security tools are capable of handling due to file size limitations.",
                    "procedure_description": "powerstats has used useless code blocks to counter analysis.[31]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/010",
                    "technique_name": "obfuscated files or information : command obfuscation",
                    "technique_description": "adversaries may obfuscate content during command execution to impede detection. command-line obfuscation is a method of making strings and patterns within commands and scripts more difficult to signature and analyze. this type of obfuscation can be included within commands executed by delivered payloads (e.g., phishing and drive-by compromise) or interactively via command and scripting interpreter.",
                    "procedure_description": "powerstats uses character replacement, powershell environment variables, and xor encoding to obfuscate code. powerstats's backdoor code is a multi-layer obfuscated, encoded, and compressed blob. [56][70] powerstats has used powershell code with custom string obfuscation [71]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/005",
                    "technique_name": "system binary proxy execution : mshta",
                    "technique_description": "adversaries may abuse mshta.exe to proxy execution of malicious .hta files and javascript or vbscript through a trusted windows utility. there are several examples of different types of threats leveraging mshta.exe during initial compromise and for execution of code",
                    "procedure_description": "powerstats can use mshta.exe to execute additional payloads on compromised hosts.[26]"
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
                    "procedure_description": "powerstats can retrieve usernames from compromised hosts.[36]"
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
                    "procedure_description": "powerstats has used get_tasklist to discover processes on the compromised host.[207]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1518/001",
                    "technique_name": "software discovery : security software discovery",
                    "technique_description": "adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. this may include things such as firewall rules and anti-virus. adversaries may use the information from security software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "powerstats has detected security tools.[78]"
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
                    "procedure_description": "powerstats can retrieve os name/architecture and computer/domain name information from compromised hosts.[284][285]"
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
                    "procedure_description": "powerstats can retrieve ip, network adapter configuration information, and domain from compromised hosts.[179][180]"
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
                    "procedure_description": "powerstats has the ability to identify the username on the compromised host.[143]"
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
                    "procedure_description": "powerstats can upload files from compromised hosts.[145]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "powerstats can retrieve screenshots from compromised hosts.[125][126]"
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
                    "procedure_description": "powerstats encoded c2 traffic with base64.[69]"
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
                    "procedure_description": "powerstats has encrypted c2 traffic with rsa.[43]"
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
                    "procedure_description": "powerstats can retrieve and execute additional powershell payloads from the c2 server.[357]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/002",
                    "technique_name": "proxy : external proxy",
                    "technique_description": "adversaries may use an external proxy to act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, to provide resiliency in the face of connection loss, or to ride over existing trusted communications paths to avoid suspicion.",
                    "procedure_description": "powerstats has connected to c2 servers through proxies.[20]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1029",
                    "technique_link": "https://attack.mitre.org/techniques/T1029",
                    "technique_name": "scheduled transfer",
                    "technique_description": "adversaries may schedule data exfiltration to be performed only at certain times of day or at certain intervals. this could be done to blend traffic patterns with normal activity or availability.",
                    "procedure_description": "powerstats can sleep for a given number of seconds.[13]"
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