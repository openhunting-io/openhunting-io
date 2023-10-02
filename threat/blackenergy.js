var threatdata = {
    "name": "BlackEnergy",
    "alias": "BlackEnergy, Black Energy",
    "category": "Malware",
    "type": "ICS malware, Reconnaissance, Backdoor, Rootkit, Banking trojan, Keylogger, Info stealer, Wiper, DDoS, Worm",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "BlackEnergy",
        "names": [
            {
                "name": "BlackEnergy"
            },
            {
                "name": "Black Energy"
            }
        ],
        "description": "BlackEnergy, its first version shortened as BE1, started as a crimeware being sold in the Russian cyber underground as early as 2007. Initially, it was designed as a toolkit for creating botnets for conducting DDoS attacks. It supported a variety of flooding commands including protocols like ICMP, TCP SYN, UDP, HTTP and DNS. Among the high profile targets of cyber attacks utilising BE1 were a Norwegian bank and government websites in Georgia three weeks before Russo-Georgian War.\n\nVersion 2 of BlackEnergy, BE2, came in 2008 with a complete code rewrite that introduced a protective layer, a kernel-mode rootkit and a modular architecture. Plugins included mostly DDoS attacks, a spam plugin and two banking authentication plugins to steal from Russian nad Ukrainian banks. The banking plugin was paired with a module designed to destroy the filesystem. Moreover, BE2 was able to\n- download and execute a remote file;\n- execute a local file on the infected computer;\n- update the bot and its plugins;\n\nThe Industrial Control Systems Cyber Emergency Response Team issued an alert warning that BE2 was leveraging the human-machine interfaces of industrial control systems like GE CIMPLICITY, Advantech/Broadwin WebAccess, and Siemens WinCC to gain access to critical infrastructure networks.\n\nIn 2014, the BlackEnergy toolkit, BE3, switched to a lighter footprint with no kernel-mode driver component. Its plugins included:\n- operations with victim's filesystem\n- spreading with a parasitic infector\n- spying features like keylogging, screenshoots or a robust password stealer\n- Team viewer and a simple pseudo \u201cremote desktop\u201d\n- listing Windows accounts and scanning network\n- destroying the system\n\nTypical for distribution of BE3 was heavy use of spear-phishing emails containing Microsoft Word or Excel documents with a malicious VBA macro, Rich Text Format (RTF) documents embedding exploits or a PowerPoint presentation with zero-day exploit CVE-2014-4114.\n\nOn 23 December 2015, attackers behind the BlackEnergy malware successfully caused power outages for several hours in different regions of Ukraine. This cyber sabotage against three energy companies has been confirmed by the Ukrainian government. The power grid compromise has become known as the first-of-its-kind cyber warfare attack affecting civilians.",
        "category": "Malware",
        "type": [
            "ICS malware",
            "Reconnaissance",
            "Backdoor",
            "Rootkit",
            "Banking trojan",
            "Keylogger",
            "Info stealer",
            "Wiper",
            "DDoS",
            "Worm"
        ],
        "information": [
            "https://www.recordedfuture.com/blackenergy-malware-analysis/",
            "https://threatconnect.com/blog/casting-a-light-on-blackenergy/",
            "https://securelist.com/blackenergy-apt-attacks-in-ukraine-employ-spearphishing-with-word-documents/73440/",
            "https://securelist.com/be2-extraordinary-plugins-siemens-targeting-dev-fails/68838/",
            "https://securelist.com/be2-custom-plugins-router-abuse-and-target-profiles/67353/",
            "https://marcusedmondson.com/2019/01/18/black-energy-analysis/",
            "https://en.wikipedia.org/wiki/BlackEnergy"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0089/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.blackenergy"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:blackenergy"
        ],
        "uuid": "71a41973-bea6-4f24-a218-afb42673d16d",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "blackenergy",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2022/05/09/malware-pers-4.html",
            "date": "2022-05-09",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "Malware development: persistence - part 4. Windows services. Simple C++ example.",
            "categories": [
                "Anchor",
                "AppleJeus",
                "Attor",
                "BBSRAT",
                "BlackEnergy",
                "Carbanak",
                "Cobalt Strike",
                "DuQu"
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
            "data_url": "https://cocomelonc.github.io/tutorial/2022/04/20/malware-pers-1.html",
            "date": "2022-04-20",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "Malware development: persistence - part 1. Registry run keys. C++ example.",
            "categories": [
                "Agent Tesla",
                "Amadey",
                "BlackEnergy",
                "Cobian RAT",
                "COZYDUKE",
                "Emotet",
                "Empire Downloader",
                "Kimsuky"
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
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2021-0909.pdf",
            "date": "2021-09-09",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Dark Covenant: Connections Between the Russian State and Criminal Actors",
            "categories": [
                "BlackEnergy",
                "EternalPetya",
                "Gameover P2P",
                "Zeus"
            ]
        },
        {
            "data_url": "https://symantec.broadcom.com/hubfs/Attacks-Against-Critical_Infrastructrure.pdf",
            "date": "2021-08-05",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Attacks Against Critical Infrastructure: A Global Concern",
            "categories": [
                "BlackEnergy",
                "DarkSide",
                "DistTrack",
                "Stuxnet"
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
            "data_url": "https://www.picussecurity.com/blog/picus-10-critical-mitre-attck-techniques-t1055-process-injection",
            "date": "2020-05-21",
            "organization": "PICUS Security",
            "author": "S\u00fcleyman \u00d6zarslan",
            "title": "T1055 Process Injection",
            "categories": [
                "BlackEnergy",
                "Cardinal RAT",
                "Downdelph",
                "Emotet",
                "Kazuar",
                "RokRAT",
                "SOUNDBITE"
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
            "data_url": "https://enterprise.verizon.com/resources/reports/2019-data-breach-investigations-report.pdf",
            "date": "2019-05-08",
            "organization": "Verizon Communications Inc.",
            "author": "Verizon Communications Inc.",
            "title": "2019 Data Breach Investigations Report",
            "categories": [
                "BlackEnergy",
                "Cobalt Strike",
                "DanaBot",
                "Gandcrab",
                "GreyEnergy",
                "Mirai",
                "Olympic Destroyer",
                "SamSam"
            ]
        },
        {
            "data_url": "https://marcusedmondson.com/2019/01/18/black-energy-analysis/",
            "date": "2019-01-18",
            "organization": "",
            "author": "Mark Edmondson",
            "title": "BLACK ENERGY \u2013 Analysis",
            "categories": [
                "BlackEnergy"
            ]
        },
        {
            "data_url": "https://threatconnect.com/blog/casting-a-light-on-blackenergy/",
            "date": "2017-09-18",
            "organization": "ThreatConnect",
            "author": "Paul Vann",
            "title": "Casting a Light on BlackEnergy",
            "categories": [
                "BlackEnergy"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/uploads/pdf/magazine/2016/VB2016-Cherepanov-Lipovsky.pdf",
            "date": "2017-07-03",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "BlackEnergy \u2013 what we really know about the notorious cyber attacks",
            "categories": [
                "BlackEnergy"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0034",
            "date": "2017-05-31",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Sandworm Team",
            "categories": [
                "CyclopsBlink",
                "Exaramel",
                "BlackEnergy",
                "EternalPetya",
                "Exaramel",
                "GreyEnergy",
                "KillDisk",
                "MimiKatz",
                "Olympic Destroyer",
                "Sandworm"
            ]
        },
        {
            "data_url": "https://securelist.com/blackenergy-apt-attacks-in-ukraine-employ-spearphishing-with-word-documents/73440/",
            "date": "2016-01-28",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "BlackEnergy APT Attacks in Ukraine employ spearphishing with Word documents",
            "categories": [
                "BlackEnergy"
            ]
        },
        {
            "data_url": "https://securelist.com/be2-extraordinary-plugins-siemens-targeting-dev-fails/68838/",
            "date": "2015-02-17",
            "organization": "Kaspersky Labs",
            "author": "Kurt Baumgartner",
            "title": "BE2 extraordinary plugins, Siemens targeting, dev fails",
            "categories": [
                "BlackEnergy"
            ]
        },
        {
            "data_url": "https://securelist.com/be2-custom-plugins-router-abuse-and-target-profiles/67353/",
            "date": "2014-11-03",
            "organization": "Kaspersky Labs",
            "author": "Kurt Baumgartner",
            "title": "BE2 custom plugins, router abuse, and target profiles",
            "categories": [
                "BlackEnergy"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2014/10/14/cve-2014-4114-details-august-blackenergy-powerpoint-campaigns/",
            "date": "2014-10-14",
            "organization": "ESET Research",
            "author": "Robert Lipovsky",
            "title": "CVE\u20112014\u20114114: Details on August BlackEnergy PowerPoint Campaigns",
            "categories": [
                "BlackEnergy"
            ]
        },
        {
            "data_url": "https://securelist.com/black-ddos/36309/",
            "date": "2010-07-15",
            "organization": "Kaspersky Labs",
            "author": "Dmitry Tarakanov",
            "title": "Black DDoS",
            "categories": [
                "BlackEnergy"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20140428201836/http://www.fireeye.com/blog/technical/malware-research/2010/03/black-energy-crypto.html",
            "date": "2010-03-03",
            "organization": "FireEye",
            "author": "Julia Wolf",
            "title": "Black Energy Crypto",
            "categories": [
                "BlackEnergy"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/blackenergy2",
            "date": "2010-03-03",
            "organization": "Secureworks",
            "author": "Joe Stewart",
            "title": "BlackEnergy Version 2 Threat Analysis",
            "categories": [
                "BlackEnergy"
            ]
        },
        {
            "data_url": "http://pds15.egloos.com/pds/201001/01/66/BlackEnergy_DDoS_Bot_Analysis.pdf",
            "date": "2007-10",
            "organization": "Arbor Networks",
            "author": "Jose Nazario",
            "title": "BlackEnergy DDoS Bot Analysis",
            "categories": [
                "BlackEnergy"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "blackenergy",
            "procedure_code": "s0089",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0089",
            "techniques": [
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
                    "procedure_description": "a blackenergy 2 plug-in uses wmi to gather victim host details.[17]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "the blackenergy 3 variant drops its main dll component and then creates a .lnk shortcut to that file in the startup folder.[47]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "the blackenergy 3 variant drops its main dll component and then creates a .lnk shortcut to that file in the startup folder.[8]"
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
                    "procedure_description": "one variant of blackenergy creates a new service using either a hard-coded or randomly generated name.[27]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/010",
                    "technique_name": "hijack execution flow : services file permissions weakness",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the binaries used by services. adversaries may use flaws in the permissions of windows services to replace the binary that is executed upon service start. these service processes may automatically execute specific binaries as part of their functionality or to perform other actions. if the permissions on the file system directory containing a target binary, or permissions on the binary itself are improperly set, then the target binary may be overwritten with another binary using user-level permissions and executed by the original process. if the original process and thread are running under a higher permissions level, then the replaced binary will also execute under higher-level permissions, which could include system.",
                    "procedure_description": "one variant of blackenergy locates existing driver services that have been disabled and drops its driver component into one of those service's paths, replacing the legitimate executable. the malware then sets the hijacked service to start automatically to establish persistence.[1]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "blackenergy attempts to bypass default user access control (uac) settings by exploiting a backward-compatibility setting found in windows 7 and later.[17]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "the blackenergy 3 variant drops its main dll component and then creates a .lnk shortcut to that file in the startup folder.[47]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "the blackenergy 3 variant drops its main dll component and then creates a .lnk shortcut to that file in the startup folder.[8]"
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
                    "procedure_description": "one variant of blackenergy creates a new service using either a hard-coded or randomly generated name.[27]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/010",
                    "technique_name": "hijack execution flow : services file permissions weakness",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the binaries used by services. adversaries may use flaws in the permissions of windows services to replace the binary that is executed upon service start. these service processes may automatically execute specific binaries as part of their functionality or to perform other actions. if the permissions on the file system directory containing a target binary, or permissions on the binary itself are improperly set, then the target binary may be overwritten with another binary using user-level permissions and executed by the original process. if the original process and thread are running under a higher permissions level, then the replaced binary will also execute under higher-level permissions, which could include system.",
                    "procedure_description": "one variant of blackenergy locates existing driver services that have been disabled and drops its driver component into one of those service's paths, replacing the legitimate executable. the malware then sets the hijacked service to start automatically to establish persistence.[1]"
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
                    "procedure_description": "blackenergy injects its dll component into svchost.exe.[7]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "blackenergy attempts to bypass default user access control (uac) settings by exploiting a backward-compatibility setting found in windows 7 and later.[17]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/010",
                    "technique_name": "hijack execution flow : services file permissions weakness",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the binaries used by services. adversaries may use flaws in the permissions of windows services to replace the binary that is executed upon service start. these service processes may automatically execute specific binaries as part of their functionality or to perform other actions. if the permissions on the file system directory containing a target binary, or permissions on the binary itself are improperly set, then the target binary may be overwritten with another binary using user-level permissions and executed by the original process. if the original process and thread are running under a higher permissions level, then the replaced binary will also execute under higher-level permissions, which could include system.",
                    "procedure_description": "one variant of blackenergy locates existing driver services that have been disabled and drops its driver component into one of those service's paths, replacing the legitimate executable. the malware then sets the hijacked service to start automatically to establish persistence.[1]"
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
                    "procedure_description": "blackenergy has removed the watermark associated with enabling the testsigning boot configuration option by removing the relevant strings in the user32.dll.mui of the system.[2]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/001",
                    "technique_name": "indicator removal : clear windows event logs",
                    "technique_description": "adversaries may clear windows event logs to hide the activity of an intrusion. windows event logs are a record of a computer's alerts and notifications. there are three system-defined sources of events: system, application, and security, with five event types: error, warning, information, success audit, and failure audit.",
                    "procedure_description": "the blackenergy component killdisk is capable of deleting windows event logs.[8]"
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
                    "procedure_description": "blackenergy injects its dll component into svchost.exe.[7]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/006",
                    "technique_name": "subvert trust controls : code signing policy modification",
                    "technique_description": "adversaries may modify code signing policies to enable execution of unsigned or self-signed code. code signing provides a level of authenticity on a program from a developer and a guarantee that the program has not been tampered with. security controls can include enforcement mechanisms to ensure that only valid, signed code can be run on an operating system.",
                    "procedure_description": "blackenergy has enabled the testsigning boot configuration option to facilitate loading of a driver component.[7]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "blackenergy has used a plug-in to gather credentials from web browsers including firefox, google chrome, and internet explorer.[14][15]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "blackenergy has run a keylogger plug-in on a victim.[31]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1552.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1552/001",
                    "technique_name": "unsecured credentials : credentials in files",
                    "technique_description": "adversaries may search local file systems and remote file shares for files containing insecurely stored credentials. these can be files created by users to store their own credentials, shared credential stores for a group of individuals, configuration files containing passwords for a system or service, or source code/binary files containing embedded passwords.",
                    "procedure_description": "blackenergy has used a plug-in to gather credentials stored in files on the host by various software programs, including the bat! email client, outlook, and windows credential store.[12][13]"
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
                    "procedure_description": "blackenergy gathers a list of installed apps from the uninstall program registry. it also gathers registered mail, browser, and instant messaging clients from the registry. blackenergy has searched for given file types.[55][56]"
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
                    "procedure_description": "blackenergy has conducted port scans on a host.[10]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1120",
                    "technique_link": "https://attack.mitre.org/techniques/T1120",
                    "technique_name": "peripheral device discovery",
                    "technique_description": "adversaries may attempt to gather information about attached peripheral devices and components connected to a computer system. peripheral devices could include auxiliary resources that support a variety of functionalities such as keyboards, printers, cameras, smart card readers, or removable storage. the information may be used to enhance their awareness of the system and network environment or may be used for further actions.",
                    "procedure_description": "blackenergy can gather very specific information about attached usb devices, to include device instance id and drive geometry.[11]"
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
                    "procedure_description": "blackenergy has gathered a process list by using tasklist.exe.[36][37][38]"
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
                    "procedure_description": "blackenergy has used systeminfo to gather the os version, as well as information on the system configuration, bios, the motherboard, and the processor.[60][61]"
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
                    "procedure_description": "blackenergy has gathered information about network ip configurations using ipconfig.exe and about routing tables using route.exe.[37][38]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1049",
                    "technique_link": "https://attack.mitre.org/techniques/T1049",
                    "technique_name": "system network connections discovery",
                    "technique_description": "adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.",
                    "procedure_description": "blackenergy has gathered information about local network connections using netstat.[18][19]"
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
                    "procedure_description": "blackenergy has run a plug-in on a victim to spread through the local network by using psexec and accessing admin shares.[11]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "blackenergy has run a keylogger plug-in on a victim.[31]"
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
                    "procedure_description": "blackenergy is capable of taking screenshots.[25]"
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
                    "procedure_description": "blackenergy communicates with its c2 server over http.[41]"
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
                    "procedure_description": "blackenergy has the capability to communicate over a backup channel via plus.google.com.[7]"
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
                    "procedure_description": "blackenergy 2 contains a \"destroy\" plug-in that destroys data stored on victim hard drives by overwriting file contents.[10][11]"
                }
            ]
        }
    ]
};