var threatdata = {
    "name": "JHUHUGIT",
    "alias": "JHUHUGIT, Seduploader, JKEYSKW, Sednit, Downrage, GAMEFISH, carberplike, SofacyCarberp, Carberp, Trojan.Sofacy",
    "category": "Malware",
    "type": "Reconnaissance, Banking trojan, Backdoor, Info stealer, Dropper, Downloader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "JHUHUGIT",
        "names": [
            {
                "name": "JHUHUGIT"
            },
            {
                "name": "Seduploader"
            },
            {
                "name": "JKEYSKW"
            },
            {
                "name": "Sednit"
            },
            {
                "name": "Downrage"
            },
            {
                "name": "GAMEFISH"
            },
            {
                "name": "carberplike"
            },
            {
                "name": "SofacyCarberp"
            },
            {
                "name": "Carberp"
            },
            {
                "name": "Trojan.Sofacy"
            }
        ],
        "description": "(ESET) We define Seduploader as a two-binary component, comprising a dropper and the payload usually contained in this dropper. While those two have sometimes been used independently of each other, they usually are deployed together and remain the most-used first-stage malware of the Sednit group since the beginning of 2015. The payload component of Seduploader has been compiled for Windows and OS X, but our analysisis based solely on the Windows version. Nevertheless, the OS X version is very similar, and has been described by BAE Systems in June 2015.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Dropper",
            "Downloader"
        ],
        "information": [
            "https://securelist.com/sofacy-apt-hits-high-profile-targets-with-updated-toolset/72924/",
            "https://www.welivesecurity.com/wp-content/uploads/2016/10/eset-sednit-part1.pdf",
            "https://labsblog.f-secure.com/2015/09/08/sofacy-recycles-carberp-and-metasploit-code/",
            "https://www.fireeye.com/blog/threat-research/2017/08/apt28-targets-hospitality-sector.html",
            "https://www.welivesecurity.com/2017/12/21/sednit-update-fancy-bear-spent-year/",
            "http://blog.talosintelligence.com/2017/10/cyber-conflict-decoy-document.html",
            "https://contagiodump.blogspot.de/2017/02/russian-apt-apt28-collection-of-samples.html",
            "http://www.welivesecurity.com/2015/07/10/sednit-apt-group-meets-hacking-team/",
            "http://blog.trendmicro.com/trendlabs-security-intelligence/new-adobe-flash-zero-day-used-in-pawn-storm-campaign/",
            "https://www.welivesecurity.com/2017/05/09/sednit-adds-two-zero-day-exploits-using-trumps-attack-syria-decoy/",
            "https://blog.xpnsec.com/apt28-hospitality-malware-part-2/",
            "https://www.proofpoint.com/us/threat-insight/post/apt28-racing-exploit-cve-2017-11292-flash-vulnerability-patches-are-deployed"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0044/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.seduploader",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.downrage"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:JHUHUGIT"
        ],
        "uuid": "07298c2b-b4cd-4c87-ba6b-dce8e942e1da",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "jhuhugit",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cocomelonc.github.io/malware/2022/07/30/malware-av-evasion-8.html",
            "date": "2022-07-30",
            "organization": "",
            "author": "cocomelonc",
            "title": "Malware AV evasion - part 8. Encode payload via Z85",
            "categories": [
                "Agent Tesla",
                "Carbanak",
                "Carberp",
                "Cardinal RAT",
                "Cobalt Strike",
                "donut_injector"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2021/09/06/simple-malware-av-evasion-2.html",
            "date": "2021-09-06",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "AV engines evasion for C++ simple malware: part 2",
            "categories": [
                "Agent Tesla",
                "Amadey",
                "Anchor",
                "AnchorMTea",
                "Carbanak",
                "Carberp",
                "Cardinal RAT",
                "Felixroot",
                "Konni",
                "Loki Password Stealer (PWS)",
                "Maze"
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
            "data_url": "https://www.secureworks.com/research/threat-profiles/iron-twilight",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "IRON TWILIGHT",
            "categories": [
                "X-Agent",
                "X-Agent",
                "X-Agent",
                "Computrace",
                "HideDRV",
                "Sedreco",
                "Seduploader",
                "X-Agent",
                "XTunnel",
                "Zebrocy",
                "Zebrocy (AutoIT)"
            ]
        },
        {
            "data_url": "https://blog.yoroi.company/research/apt28-and-upcoming-elections-possible-interference-signals-part-ii/",
            "date": "2019-04-18",
            "organization": "Yoroi",
            "author": "ZLAB-Yoroi",
            "title": "APT28 and Upcoming Elections: Evidence of Possible Interference (Part II)",
            "categories": [
                "Seduploader"
            ]
        },
        {
            "data_url": "https://www.emanueledelucia.net/apt28-sofacy-seduploader-under-the-christmas-tree/",
            "date": "2018-12-21",
            "organization": "",
            "author": "Emanuele De Lucia",
            "title": "APT28 / Sofacy \u2013 SedUploader under the Christmas tree",
            "categories": [
                "Seduploader"
            ]
        },
        {
            "data_url": "https://symantec-blogs.broadcom.com/blogs/election-security/apt28-espionage-military-government",
            "date": "2018-10-04",
            "organization": "Symantec",
            "author": "Critical Attack Discovery and Intelligence Team",
            "title": "APT28: New Espionage Operations Target Military and Government Organizations",
            "categories": [
                "LoJax",
                "Seduploader",
                "X-Agent",
                "XTunnel",
                "Zebrocy",
                "APT28"
            ]
        },
        {
            "data_url": "https://securelist.com/a-slice-of-2017-sofacy-activity/83930/",
            "date": "2018-02-20",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "A Slice of 2017 Sofacy Activity",
            "categories": [
                "Seduploader",
                "APT28"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2017/12/21/sednit-update-fancy-bear-spent-year/",
            "date": "2017-12-21",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "Sednit update: How Fancy Bear Spent the Year",
            "categories": [
                "Seduploader",
                "X-Agent"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2017/10/cyber-conflict-decoy-document.html",
            "date": "2017-10-22",
            "organization": "Cisco",
            "author": "Warren Mercer",
            "title": "\u201cCyber Conflict\u201d Decoy Document Used In Real Cyber Conflict",
            "categories": [
                "Seduploader"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/apt28-racing-exploit-cve-2017-11292-flash-vulnerability-patches-are-deployed",
            "date": "2017-10-19",
            "organization": "Proofpoint",
            "author": "Kafeine",
            "title": "APT28 racing to exploit CVE-2017-11292 Flash vulnerability before patches are deployed",
            "categories": [
                "Seduploader"
            ]
        },
        {
            "data_url": "https://blog.xpnsec.com/apt28-hospitality-malware-part-2/",
            "date": "2017-08-13",
            "organization": "",
            "author": "Adam Chester",
            "title": "Analysis of APT28 hospitality malware (Part 2)",
            "categories": [
                "Seduploader"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/08/apt28-targets-hospitality-sector.html",
            "date": "2017-08-11",
            "organization": "FireEye",
            "author": "Lindsay Smith",
            "title": "APT28 Targets Hospitality Sector, Presents Threat to Travelers",
            "categories": [
                "Seduploader"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2017/05/09/sednit-adds-two-zero-day-exploits-using-trumps-attack-syria-decoy/",
            "date": "2017-05-09",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "Sednit adds two zero\u2011day exploits using \u2018Trump\u2019s attack on Syria\u2019 as a decoy",
            "categories": [
                "Seduploader"
            ]
        },
        {
            "data_url": "https://contagiodump.blogspot.de/2017/02/russian-apt-apt28-collection-of-samples.html",
            "date": "2017-02-20",
            "organization": "Contagio Dump",
            "author": "Mila Parkour",
            "title": "Part I. Russian APT - APT28 collection of samples including OSX XAgent",
            "categories": [
                "X-Agent",
                "Komplex",
                "Coreshell",
                "Downdelph",
                "HideDRV",
                "SEADADDY",
                "Sedreco",
                "Seduploader",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/sites/default/files/2021-09/APT28-Center-of-Storm-2017.pdf",
            "date": "2017-01-10",
            "organization": "FireEye",
            "author": "FireEye iSIGHT Intelligence",
            "title": "APT28:  At The Center  Of The Storm",
            "categories": [
                "Coreshell",
                "OLDBAIT",
                "Sedreco",
                "Seduploader",
                "X-Agent"
            ]
        },
        {
            "data_url": "http://www.welivesecurity.com/wp-content/uploads/2016/10/eset-sednit-part1.pdf",
            "date": "2016-08",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "En Route with Sednit - Part 1: Approaching the Target",
            "categories": [
                "Komplex",
                "Seduploader"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/bears-midst-intrusion-democratic-national-committee/",
            "date": "2016-06-15",
            "organization": "CrowdStrike",
            "author": "Dmitri Alperovitch",
            "title": "Bears in the Midst: Intrusion into the Democratic National Committee",
            "categories": [
                "X-Agent",
                "ATI-Agent",
                "SEADADDY",
                "Seduploader",
                "X-Agent",
                "XTunnel",
                "APT28"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2016/06/unit42-new-sofacy-attacks-against-us-government-agency/",
            "date": "2016-06-14",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "New Sofacy Attacks Against US Government Agency",
            "categories": [
                "Seduploader",
                "APT28"
            ]
        },
        {
            "data_url": "https://securelist.com/sofacy-apt-hits-high-profile-targets-with-updated-toolset/72924/",
            "date": "2015-12-04",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Sofacy APT hits high profile targets with updated toolset",
            "categories": [
                "Coreshell",
                "Sedreco",
                "Seduploader",
                "X-Agent",
                "APT28"
            ]
        },
        {
            "data_url": "http://blog.trendmicro.com/trendlabs-security-intelligence/new-adobe-flash-zero-day-used-in-pawn-storm-campaign/",
            "date": "2015-10-13",
            "organization": "Trend Micro",
            "author": "Brooks Li",
            "title": "New Adobe Flash Zero-Day Used in Pawn Storm Campaign Targeting Foreign Affairs Ministries",
            "categories": [
                "Seduploader"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/cloud-content/us/pdfs/security-intelligence/white-papers/wp-operation-pawn-storm.pdf",
            "date": "2014-10-27",
            "organization": "Trend Micro",
            "author": "Loucif Kharouni",
            "title": "Operation Pawn Storm: Using Decoys to Evade Detection",
            "categories": [
                "Sedreco",
                "Seduploader",
                "APT28"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20150713145858/http://www.rsaconference.com/writable/presentations/file_upload/ht-t06-dissecting-banking-trojan-carberp_copy1.pdf",
            "date": "2013-10-29",
            "organization": "RSA Conference",
            "author": "Peter K\u00e1lnai",
            "title": "Dissecting Banking Trojan Carberp",
            "categories": [
                "Carberp"
            ]
        },
        {
            "data_url": "https://blog.avast.com/2013/04/08/carberp_epitaph/",
            "date": "2013-04-08",
            "organization": "Avast",
            "author": "Peter K\u00e1lnai",
            "title": "Banking Trojan Carberp: An Epitaph?",
            "categories": [
                "Carberp"
            ]
        },
        {
            "data_url": "https://cdn1.esetstatic.com/eset/US/resources/docs/white-papers/white-papers-win-32-carberp.pdf",
            "date": "2012-03-02",
            "organization": "ESET Research",
            "author": "Aleksandr Matrosov",
            "title": "Win32/Carberp: When You're in a Black Hole, Stop Digging",
            "categories": [
                "Carberp"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "jhuhugit",
            "procedure_code": "s0044",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0044",
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
                    "procedure_description": "jhuhugit uses a .bat file to execute a .dll.[15]"
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
                    "procedure_description": "jhuhugit has registered itself as a scheduled task to run each time the current user logs in.[87][88]"
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
                    "procedure_description": "jhuhugit has used a registry run key to establish persistence by executing javascript code within the rundll32.exe process.[127]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1037.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1037/001",
                    "technique_name": "boot or logon initialization scripts : logon script (windows)",
                    "technique_description": "adversaries may use windows logon scripts automatically executed at logon initialization to establish persistence. windows allows logon scripts to be run whenever a specific user or group of users log into a system. this is done via adding a path to a script to the hkcu\\environment\\userinitmprlogonscript registry key.",
                    "procedure_description": "jhuhugit has registered a windows shell script under the registry key hkcu\\environment\\userinitmprlogonscript to establish persistence.[6][7]"
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
                    "procedure_description": "jhuhugit has registered itself as a service to establish persistence.[67]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.015",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/015",
                    "technique_name": "event triggered execution : component object model hijacking",
                    "technique_description": "adversaries may establish persistence by executing malicious content triggered by hijacked references to component object model (com) objects. com is a system within windows to enable interaction between software components through the operating system.  references to various com objects are stored in the registry.",
                    "procedure_description": "jhuhugit has used com hijacking to establish persistence by hijacking a class named mmdeviceenumerator and also by registering the payload as a shell icon overlay handler com object ({3543619c-d563-43f7-95ea-4da7e1cc396a}).[4][9]"
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
                    "procedure_description": "jhuhugit has registered itself as a scheduled task to run each time the current user logs in.[87][88]"
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
                    "procedure_description": "jhuhugit has used a registry run key to establish persistence by executing javascript code within the rundll32.exe process.[127]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1037.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1037/001",
                    "technique_name": "boot or logon initialization scripts : logon script (windows)",
                    "technique_description": "adversaries may use windows logon scripts automatically executed at logon initialization to establish persistence. windows allows logon scripts to be run whenever a specific user or group of users log into a system. this is done via adding a path to a script to the hkcu\\environment\\userinitmprlogonscript registry key.",
                    "procedure_description": "jhuhugit has registered a windows shell script under the registry key hkcu\\environment\\userinitmprlogonscript to establish persistence.[6][7]"
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
                    "procedure_description": "jhuhugit has registered itself as a service to establish persistence.[67]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.015",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/015",
                    "technique_name": "event triggered execution : component object model hijacking",
                    "technique_description": "adversaries may establish persistence by executing malicious content triggered by hijacked references to component object model (com) objects. com is a system within windows to enable interaction between software components through the operating system.  references to various com objects are stored in the registry.",
                    "procedure_description": "jhuhugit has used com hijacking to establish persistence by hijacking a class named mmdeviceenumerator and also by registering the payload as a shell icon overlay handler com object ({3543619c-d563-43f7-95ea-4da7e1cc396a}).[4][9]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1068",
                    "technique_link": "https://attack.mitre.org/techniques/T1068",
                    "technique_name": "exploitation for privilege escalation",
                    "technique_description": "adversaries may exploit software vulnerabilities in an attempt to elevate privileges. exploitation of a software vulnerability occurs when an adversary takes advantage of a programming error in a program, service, or within the operating system software or kernel itself to execute adversary-controlled code. security constructs such as permission levels will often hinder access to information and use of certain techniques, so adversaries will likely need to perform privilege escalation to include use of software exploitation to circumvent those restrictions.",
                    "procedure_description": "jhuhugit has exploited cve-2015-1701 and cve-2015-2387 to escalate privileges.[23][24]"
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
                    "procedure_description": "jhuhugit performs code injection injecting its own functions to browser processes.[32][33]"
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
                    "procedure_description": "jhuhugit has registered itself as a scheduled task to run each time the current user logs in.[87][88]"
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
                    "procedure_description": "the jhuhugit dropper can delete itself from the victim. another jhuhugit variant has the capability to delete specified files.[114][115]"
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
                    "procedure_description": "many strings in jhuhugit are obfuscated with a xor algorithm.[172][173][22]"
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
                    "procedure_description": "jhuhugit performs code injection injecting its own functions to browser processes.[32][33]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/011",
                    "technique_name": "system binary proxy execution : rundll32",
                    "technique_description": "adversaries may abuse rundll32.exe to proxy execution of malicious code. using rundll32.exe, vice executing directly (i.e. shared modules), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. rundll32.exe is commonly associated with executing dll payloads (ex: rundll32.exe {dllname, dllfunction}).",
                    "procedure_description": "jhuhugit is executed using rundll32.exe.[55][56]"
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
                    "procedure_description": "jhuhugit obtains a list of running processes on the victim.[136][137]"
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
                    "procedure_description": "jhuhugit obtains a build identifier as well as victim hard drive information from windows registry key hklm\\system\\currentcontrolset\\services\\disk\\enum. another jhuhugit variant gathers the victim storage volume serial number and the storage device name.[177][178]"
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
                    "procedure_description": "a jhuhugit variant gathers network interface card information.[112]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1115",
                    "technique_link": "https://attack.mitre.org/techniques/T1115",
                    "technique_name": "clipboard data",
                    "technique_description": "adversaries may collect data stored in the clipboard from users copying information within or between applications.",
                    "procedure_description": "a jhuhugit variant accesses a screenshot saved in the clipboard and converts it to a jpg image.[26]"
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
                    "procedure_description": "a jhuhugit variant takes screenshots by simulating the user pressing the \"take screenshot\" key (vk_screenshot), accessing the screenshot saved in the clipboard, and converting it to a jpg image.[80][81]"
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
                    "procedure_description": "jhuhugit variants have communicated with c2 servers over http and https.[170][171][172]"
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
                    "procedure_description": "a jhuhugit variant encodes c2 post data base64.[45]"
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
                    "procedure_description": "jhuhugit tests if it can reach its c2 server by first attempting a direct connection, and if it fails, obtaining proxy settings and sending the connection through a proxy, and finally injecting code into a running browser if the proxy method fails.[23]"
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
                    "procedure_description": "jhuhugit can retrieve an additional payload from its c2 server.[230][231] jhuhugit has a command to download files to the victim\u2019s machine.[232]"
                }
            ]
        },
        {
            "procedure_name": "carberp",
            "procedure_code": "s0484",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0484",
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
                    "procedure_description": "carberp has used the ntquerydirectoryfile and zwquerydirectoryfile functions to hide files and directories.[50]"
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
                    "procedure_description": "carberp has maintained persistence by placing itself inside the current user's startup folder.[53]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1542.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1542/003",
                    "technique_name": "pre-os boot : bootkit",
                    "technique_description": "adversaries may use bootkits to persist on systems. bootkits reside at a layer below the operating system and may make it difficult to perform full remediation unless an organization suspects one was used and can act accordingly.",
                    "procedure_description": "carberp has installed a bootkit on the system to maintain persistence.[7]"
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
                    "procedure_description": "carberp has maintained persistence by placing itself inside the current user's startup folder.[53]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1068",
                    "technique_link": "https://attack.mitre.org/techniques/T1068",
                    "technique_name": "exploitation for privilege escalation",
                    "technique_description": "adversaries may exploit software vulnerabilities in an attempt to elevate privileges. exploitation of a software vulnerability occurs when an adversary takes advantage of a programming error in a program, service, or within the operating system software or kernel itself to execute adversary-controlled code. security constructs such as permission levels will often hinder access to information and use of certain techniques, so adversaries will likely need to perform privilege escalation to include use of software exploitation to circumvent those restrictions.",
                    "procedure_description": "carberp has exploited multiple windows vulnerabilities (cve-2010-2743, cve-2010-3338, cve-2010-4398, cve-2008-1084) and a .net runtime optimization vulnerability for privilege escalation.[12][13]"
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
                    "procedure_description": "carberp's bootkit can inject a malicious dll into the address space of running processes.[11]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/004",
                    "technique_name": "process injection : asynchronous procedure call",
                    "technique_description": "adversaries may inject malicious code into processes via the asynchronous procedure call (apc) queue in order to evade process-based defenses as well as possibly elevate privileges. apc injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "carberp has queued an apc routine to explorer.exe by calling zwqueueapcthread.[7]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/001",
                    "technique_name": "hide artifacts : hidden files and directories",
                    "technique_description": "adversaries may set files and directories to be hidden to evade detection mechanisms. to prevent normal users from accidentally changing special files on a system, most operating systems have the concept of a \u2018hidden\u2019 file. these files don\u2019t show up when a user browses the file system with a gui or when using normal commands on the command line. users must explicitly ask to show the hidden files either via a series of graphical user interface (gui) prompts or with command line switches (dir /a for windows and ls \u2013a for linux and macos).",
                    "procedure_description": "carberp has created a hidden file in the startup folder of the current user.[12]"
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
                    "procedure_description": "carberp has attempted to disable security software by creating a suspended process for the security software and injecting code to delete antivirus core files when the process is resumed.[20]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "carberp has masqueraded as windows system file names, as well as \"chkntfs.exe\" and \"syscron.exe\".[36][37]"
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
                    "procedure_description": "carberp has used xor-based encryption to mask c2 server locations within the trojan.[70]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1542.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1542/003",
                    "technique_name": "pre-os boot : bootkit",
                    "technique_description": "adversaries may use bootkits to persist on systems. bootkits reside at a layer below the operating system and may make it difficult to perform full remediation unless an organization suspects one was used and can act accordingly.",
                    "procedure_description": "carberp has installed a bootkit on the system to maintain persistence.[7]"
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
                    "procedure_description": "carberp's bootkit can inject a malicious dll into the address space of running processes.[11]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/004",
                    "technique_name": "process injection : asynchronous procedure call",
                    "technique_description": "adversaries may inject malicious code into processes via the asynchronous procedure call (apc) queue in order to evade process-based defenses as well as possibly elevate privileges. apc injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "carberp has queued an apc routine to explorer.exe by calling zwqueueapcthread.[7]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1014",
                    "technique_link": "https://attack.mitre.org/techniques/T1014",
                    "technique_name": "rootkit",
                    "technique_description": "adversaries may use rootkits to hide the presence of programs, files, network connections, services, drivers, and other system components. rootkits are programs that hide the existence of malware by intercepting/hooking and modifying operating system api calls that supply system information.",
                    "procedure_description": "carberp has used user mode rootkit techniques to remain hidden on the system.[9]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497",
                    "technique_link": "https://attack.mitre.org/techniques/T1497",
                    "technique_name": "virtualization/sandbox evasion",
                    "technique_description": "adversaries may employ various means to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "carberp has removed various hooks before installing the trojan or bootkit to evade sandbox analysis or other analysis software.[8]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555",
                    "technique_link": "https://attack.mitre.org/techniques/T1555",
                    "technique_name": "credentials from password stores",
                    "technique_description": "adversaries may search for common password storage locations to obtain user credentials. passwords are stored in several places on a system, depending on the operating system or application holding the credentials. there are also specific applications that store passwords to make it easier for users manage and maintain. once credentials are obtained, they can be used to perform lateral movement and access restricted information.",
                    "procedure_description": "carberp's passw.plug plugin can gather account information from multiple instant messaging, email, and social media services, as well as ftp, vnc, and vpn clients.[6]"
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
                    "procedure_description": "carberp's passw.plug plugin can gather passwords saved in opera, internet explorer, safari, firefox, and chrome.[17]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/004",
                    "technique_name": "input capture : credential api hooking",
                    "technique_description": "adversaries may hook into windows application programming interface (api) functions to collect user credentials. malicious hooking mechanisms may capture api calls that include parameters that reveal user authentication credentials. unlike keylogging,  this technique focuses specifically on api functions that include parameters that reveal user credentials. hooking involves redirecting calls to these functions and can be implemented via:",
                    "procedure_description": "carberp has hooked several windows api functions to steal credentials.[7]"
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
                    "procedure_description": "carberp has collected a list of running processes.[52]"
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
                    "procedure_description": "carberp has searched the image file execution options registry key for \"debugger\" within every subkey.[19]"
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
                    "procedure_description": "carberp has queried the infected system's registry searching for specific registry keys associated with antivirus products.[17]"
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
                    "procedure_description": "carberp has collected the operating system version from the infected system.[79]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497",
                    "technique_link": "https://attack.mitre.org/techniques/T1497",
                    "technique_name": "virtualization/sandbox evasion",
                    "technique_description": "adversaries may employ various means to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "carberp has removed various hooks before installing the trojan or bootkit to evade sandbox analysis or other analysis software.[8]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/005",
                    "technique_name": "remote services : vnc",
                    "technique_description": "adversaries may use valid accounts to remotely control machines using virtual network computing (vnc).  vnc is a platform-independent desktop sharing system that uses the rfb (\"remote framebuffer\") protocol to enable users to remotely control another computer\u2019s display by relaying the screen, mouse, and keyboard inputs over the network.",
                    "procedure_description": "carberp can start a remote vnc session by downloading a new plugin.[10]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1185",
                    "technique_link": "https://attack.mitre.org/techniques/T1185",
                    "technique_name": "browser session hijacking",
                    "technique_description": "adversaries may take advantage of security vulnerabilities and inherent functionality in browser software to change content, modify user-behaviors, and intercept information as part of various browser session hijacking techniques.",
                    "procedure_description": "carberp has captured credentials when a user performs login through a ssl session.[6][7]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/004",
                    "technique_name": "input capture : credential api hooking",
                    "technique_description": "adversaries may hook into windows application programming interface (api) functions to collect user credentials. malicious hooking mechanisms may capture api calls that include parameters that reveal user authentication credentials. unlike keylogging,  this technique focuses specifically on api functions that include parameters that reveal user credentials. hooking involves redirecting calls to these functions and can be implemented via:",
                    "procedure_description": "carberp has hooked several windows api functions to steal credentials.[7]"
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
                    "procedure_description": "carberp can capture display screenshots with the screens_dll.dll plugin.[33]"
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
                    "procedure_description": "carberp has connected to c2 servers via http.[55]"
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
                    "procedure_description": "carberp can download and execute new plugins from the c2 server. [93][94]"
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
                    "procedure_description": "carberp has exfiltrated data via http to already established c2 servers.[23][24]"
                }
            ]
        }
    ]
};