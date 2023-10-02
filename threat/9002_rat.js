var threatdata = {
    "name": "9002 RAT",
    "alias": "9002 RAT, McRAT, MdmBot, Homux, Hydraq, HidraQ, HOMEUNIX, Aurora, Roarur",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2023-04-18",
    "all_data": {
        "tool": "9002 RAT",
        "names": [
            {
                "name": "9002 RAT"
            },
            {
                "name": "McRAT"
            },
            {
                "name": "MdmBot"
            },
            {
                "name": "Homux"
            },
            {
                "name": "Hydraq"
            },
            {
                "name": "HidraQ"
            },
            {
                "name": "HOMEUNIX"
            },
            {
                "name": "Aurora"
            },
            {
                "name": "Roarur"
            }
        ],
        "description": "9002 RAT is a Remote Access Tool typically observed to be used by an APT to control a victim's machine. It has been spread over via zero day exploits (e.g. targeting Internet Explorer) as well as via email attachments. The infection chain starts by opening a .LNK (an OLE packager shell object) that executes a Powershell command.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2013/11/operation-ephemeral-hydra-ie-zero-day-linked-to-deputydog-uses-diskless-method.html",
            "https://www.arbornetworks.com/blog/asert/wp-content/uploads/2016/01/ASERT-Threat-Intelligence-Brief-2015-08-Uncovering-the-Seven-Point-Dagger.pdf",
            "https://community.hpe.com/t5/Security-Research/9002-RAT-a-second-building-on-the-left/ba-p/6894315",
            "http://researchcenter.paloaltonetworks.com/2016/07/unit-42-attack-delivers-9002-trojan-through-google-drive/",
            "https://www.fireeye.com/blog/threat-research/2013/05/ready-for-summer-the-sunshop-campaign.html",
            "https://researchcenter.paloaltonetworks.com/2015/09/chinese-actors-use-3102-malware-in-attacks-on-us-government-and-eu-media/",
            "https://www.proofpoint.com/us/threat-insight/post/operation-rat-cook-chinese-apt-actors-use-fake-game-thrones-leaks-lures",
            "https://www.fireeye.com/blog/threat-research/2013/02/lady-boyle-comes-to-town-with-a-new-exploit.html",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/supply-chain-attack-operation-red-signature-targets-south-korean-organizations/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0203/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.9002"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:9002"
        ],
        "uuid": "f3993a74-3133-4926-aeab-2b93ef6ed81d",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "9002_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.morphisec.com/in2al5d-p3in4er",
            "date": "2023-04-18",
            "organization": "Morphisec",
            "author": "Arnold Osipov",
            "title": "What Makes Invalid Printer Loader So Stealthy?",
            "categories": [
                "Aurora"
            ]
        },
        {
            "data_url": "https://info.spamhaus.com/hubfs/Botnet%20Reports/2023%20Q1%20Botnet%20Threat%20Update.pdf",
            "date": "2023-04-12",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Spamhaus Botnet Threat Update Q1 2023",
            "categories": [
                "FluBot",
                "Amadey",
                "AsyncRAT",
                "Aurora",
                "Ave Maria",
                "BumbleBee",
                "Cobalt Strike",
                "DCRat",
                "Emotet",
                "IcedID",
                "ISFB",
                "NjRAT",
                "QakBot",
                "RecordBreaker",
                "RedLine Stealer",
                "Remcos",
                "Rhadamanthys",
                "Sliver",
                "Tofsee",
                "Vidar"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/webworm-espionage-rats",
            "date": "2022-09-15",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Webworm: Espionage Attackers Testing and Using Older Modified RATs",
            "categories": [
                "9002 RAT",
                "Ghost RAT",
                "Trochilus RAT"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-union",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE UNION",
            "categories": [
                "9002 RAT",
                "CHINACHOPPER",
                "Enfal",
                "Ghost RAT",
                "HttpBrowser",
                "HyperBro",
                "owaauth",
                "PlugX",
                "Poison Ivy",
                "ZXShell",
                "APT27"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-firestone",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE FIRESTONE",
            "categories": [
                "9002 RAT",
                "Derusbi",
                "Empire Downloader",
                "PlugX",
                "Poison Ivy",
                "APT19"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-keystone",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE KEYSTONE",
            "categories": [
                "9002 RAT",
                "BLACKCOFFEE",
                "DeputyDog",
                "Derusbi",
                "HiKit",
                "PlugX",
                "Poison Ivy",
                "ZXShell",
                "APT17"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-express",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE EXPRESS",
            "categories": [
                "9002 RAT",
                "CHINACHOPPER",
                "IsSpace",
                "NewCT",
                "PlugX",
                "smac",
                "APT26"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/ransomware/decryptor/how-to-decrypt-the-aurora-ransomware-with-auroradecrypter/",
            "date": "2019-01-04",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "How to Decrypt the Aurora Ransomware with AuroraDecrypter",
            "categories": [
                "Aurora"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/supply-chain-attack-operation-red-signature-targets-south-korean-organizations/",
            "date": "2018-08-21",
            "organization": "Trend Micro",
            "author": "Jarom\u00edr Ho\u0159ej\u0161\u00ed",
            "title": "Supply Chain Attack Operation Red Signature Targets South Korean Organizations",
            "categories": [
                "9002 RAT"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/azorult-trojan-serving-aurora-ransomware-by-malactor-oktropys/",
            "date": "2018-08-18",
            "organization": "Bleeping Computer",
            "author": "Vishal Thakur",
            "title": "AZORult Trojan Serving Aurora Ransomware by MalActor Oktropys",
            "categories": [
                "Aurora",
                "Azorult"
            ]
        },
        {
            "data_url": "https://twitter.com/malwrhunterteam/status/1001461507513880576",
            "date": "2018-05-29",
            "organization": "Twitter (@malwrhunterteam)",
            "author": "MalwareHunterTeam",
            "title": "Tweet on Aurora / OneKeyLocker Ransomware",
            "categories": [
                "Aurora"
            ]
        },
        {
            "data_url": "https://www.crysys.hu/publications/files/tedi/ukatemicrysys_territorialdispute.pdf",
            "date": "2018-03",
            "organization": "CrySyS Lab",
            "author": "Boldizsar Bencsath",
            "title": "Territorial Dispute \u2013 NSA\u2019s perspective on APT landscape",
            "categories": [
                "9002 RAT",
                "Agent.BTZ",
                "DuQu",
                "EYService",
                "Flame",
                "FlowerShop",
                "Stuxnet",
                "Uroburos"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/operation-rat-cook-chinese-apt-actors-use-fake-game-thrones-leaks-lures",
            "date": "2017-08-25",
            "organization": "Proofpoint",
            "author": "Darien Huss",
            "title": "Operation RAT Cook: Chinese APT actors use fake Game of Thrones leaks as lures",
            "categories": [
                "9002 RAT"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0001/",
            "date": "2017-05-31",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Axiom",
            "categories": [
                "Derusbi",
                "9002 RAT",
                "BLACKCOFFEE",
                "Derusbi",
                "Ghost RAT",
                "HiKit",
                "PlugX",
                "ZXShell",
                "APT17"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2015/09/chinese-actors-use-3102-malware-in-attacks-on-us-government-and-eu-media/",
            "date": "2015-09-23",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Chinese Actors Use \u20183102\u2019 Malware in Attacks on US Government and EU Media",
            "categories": [
                "9002 RAT"
            ]
        },
        {
            "data_url": "https://app.box.com/s/z1uanuv1vn3vw5iket1r6bqrmlra0gpn",
            "date": "2015-08",
            "organization": "Arbor Networks",
            "author": "ASERT Team",
            "title": "Uncovering the Seven Pointed Dagger",
            "categories": [
                "9002 RAT",
                "EvilGrab",
                "PlugX",
                "Trochilus RAT",
                "APT9"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2013/11/operation-ephemeral-hydra-ie-zero-day-linked-to-deputydog-uses-diskless-method.html",
            "date": "2013-11-10",
            "organization": "FireEye",
            "author": "Sai Omkar Vashisht",
            "title": "Operation Ephemeral Hydra: IE Zero-Day Linked to DeputyDog Uses Diskless Method",
            "categories": [
                "9002 RAT"
            ]
        },
        {
            "data_url": "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2013/hidden_lynx.pdf",
            "date": "2013-09-17",
            "organization": "Symantec",
            "author": "Stephen Doherty",
            "title": "Hidden Lynx \u2013 Professional Hackers for Hire",
            "categories": [
                "9002 RAT",
                "HiKit",
                "APT17"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2013/05/ready-for-summer-the-sunshop-campaign.html",
            "date": "2013-05-20",
            "organization": "FireEye",
            "author": "Ned Moran",
            "title": "Ready for Summer: The Sunshop Campaign",
            "categories": [
                "9002 RAT"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2013/02/lady-boyle-comes-to-town-with-a-new-exploit.html",
            "date": "2013-02-07",
            "organization": "FireEye",
            "author": "J. Gomez",
            "title": "LadyBoyle Comes to Town with a New Exploit",
            "categories": [
                "9002 RAT"
            ]
        },
        {
            "data_url": "https://www.infopoint-security.de/medien/the-elderwood-project.pdf",
            "date": "2012-09-07",
            "organization": "Symantec",
            "author": "Gavin O'Gorman",
            "title": "The Elderwood Project",
            "categories": [
                "9002 RAT",
                "Beijing Group"
            ]
        }
    ],
    "mitre": [
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
        },
        {
            "procedure_name": "hydraq",
            "procedure_code": "s0203",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0203",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1129",
                    "technique_link": "https://attack.mitre.org/techniques/T1129",
                    "technique_name": "shared modules",
                    "technique_description": "adversaries may execute malicious payloads via loading shared modules. the windows module loader can be instructed to load dlls from arbitrary local paths and arbitrary universal naming convention (unc) network paths. this functionality resides in ntdll.dll and is part of the windows native api which is called from functions like createprocess, loadlibrary, etc. of the win32 api.",
                    "procedure_description": "hydraq creates a backdoor through which remote attackers can load and call dll functions.[11][12]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1569.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1569/002",
                    "technique_name": "system services : service execution",
                    "technique_description": "adversaries may abuse the windows service control manager to execute malicious commands or payloads. the windows service control manager (services.exe) is an interface to manage and manipulate services. the service control manager is accessible to users via gui components as well as system utilities such as sc.exe and net.",
                    "procedure_description": "hydraq uses svchost.exe to execute a malicious dll included in a new service group.[28]"
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
                    "procedure_description": "hydraq creates new services to establish persistence.[63][64][65]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134",
                    "technique_link": "https://attack.mitre.org/techniques/T1134",
                    "technique_name": "access token manipulation",
                    "technique_description": "adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls. windows uses access tokens to determine the ownership of a running process. a user can manipulate access tokens to make a running process appear as though it is the child of a different process or belongs to someone other than the user that started the process. when this occurs, the process also takes on the security context associated with the new token.",
                    "procedure_description": "hydraq creates a backdoor through which remote attackers can adjust token privileges.[14]"
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
                    "procedure_description": "hydraq creates new services to establish persistence.[63][64][65]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134",
                    "technique_link": "https://attack.mitre.org/techniques/T1134",
                    "technique_name": "access token manipulation",
                    "technique_description": "adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls. windows uses access tokens to determine the ownership of a running process. a user can manipulate access tokens to make a running process appear as though it is the child of a different process or belongs to someone other than the user that started the process. when this occurs, the process also takes on the security context associated with the new token.",
                    "procedure_description": "hydraq creates a backdoor through which remote attackers can adjust token privileges.[14]"
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
                    "procedure_description": "hydraq creates a backdoor through which remote attackers can clear all system event logs.[18][19]"
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
                    "procedure_description": "hydraq creates a backdoor through which remote attackers can delete files.[105][106]"
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
                    "procedure_description": "hydraq creates a registry subkey to register its created service, and can also uninstall itself later by deleting this value. hydraq's backdoor also enables remote attackers to modify and delete subkeys.[71][72]"
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
                    "procedure_description": "hydraq uses basic obfuscation in the form of spaghetti code.[112][164]"
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
                    "procedure_description": "hydraq creates a backdoor through which remote attackers can check for the existence of files, including its own components, as well as retrieve a list of logical drives.[146][147]"
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
                    "procedure_description": "hydraq creates a backdoor through which remote attackers can monitor processes.[126][127]"
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
                    "procedure_description": "hydraq creates a backdoor through which remote attackers can retrieve system information, such as cpu speed, from registry keys.[48][49]"
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
                    "procedure_description": "hydraq creates a backdoor through which remote attackers can retrieve information such as computer name, os version, processor speed, memory size, and cpu speed.[168]"
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
                    "procedure_description": "hydraq creates a backdoor through which remote attackers can retrieve ip addresses of compromised machines.[104][105]"
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
                    "procedure_description": "hydraq creates a backdoor through which remote attackers can monitor services.[25][26]"
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
                    "procedure_description": "hydraq creates a backdoor through which remote attackers can read data from files.[85][86]"
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
                    "procedure_description": "hydraq includes a component based on the code of vnc that can stream a live feed of the desktop of an infected host.[74]"
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
                    "procedure_description": "hydraq c2 traffic is encrypted using bitwise not and xor operations.[68]"
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
                    "procedure_description": "hydraq creates a backdoor through which remote attackers can download files and additional malware components.[219][220]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1048",
                    "technique_link": "https://attack.mitre.org/techniques/T1048",
                    "technique_name": "exfiltration over alternative protocol",
                    "technique_description": "adversaries may steal data by exfiltrating it over a different protocol than that of the existing command and control channel. the data may also be sent to an alternate network location from the main command and control server.",
                    "procedure_description": "hydraq connects to a predefined domain on port 443 to exfil gathered information.[6]"
                }
            ]
        }
    ]
};