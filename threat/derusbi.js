var threatdata = {
    "name": "Derusbi",
    "alias": "Derusbi, PHOTO",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Derusbi",
        "names": [
            {
                "name": "Derusbi"
            },
            {
                "name": "PHOTO"
            }
        ],
        "description": "(Palo Alto) Derusbi is a backdoor Trojan believed to be used among a small group of attackers, which includes the Rancor group. This particular sample is a loader that loads an encrypted payload for its functionality. This DLL requires the loading executable to include a 32-byte key on the command line to be able to decrypt the embedded payload, which unfortunately we do not have. Even though we don\u2019t have the decryption key or loader, we have uncovered some interesting artifacts.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/rancor-cyber-espionage-group-uses-new-custom-malware-to-attack-southeast-asia/",
            "http://www.novetta.com/wp-content/uploads/2014/11/Derusbi.pdf",
            "https://www.threatconnect.com/the-anthem-hack-all-roads-lead-to-china/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0021/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.derusbi"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Derusbi"
        ],
        "uuid": "70e712fe-753d-4fdb-9da3-4b760cab51ee",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Derusbi",
            "malware_alias": "PHOTO",
            "malware": "win.derusbi",
            "last_update": "2021-07-10 21:52:39",
            "tags": [
                "derusbi"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "8af282aa37b9eff8ec3f9b9f9c275e1f",
                        "timestamp": "2021-07-10 21:52:39"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-07-10 21:52:39",
    "file_name": "derusbi",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/g/biopass-rat-new-malware-sniffs-victims-via-live-streaming.html",
            "date": "2021-07-07",
            "organization": "Trend Micro",
            "author": "Joseph C Chen",
            "title": "BIOPASS RAT: New Malware Sniffs Victims via Live Streaming",
            "categories": [
                "BIOPASS",
                "Cobalt Strike",
                "Derusbi"
            ]
        },
        {
            "data_url": "https://twitter.com/IntezerLabs/status/1407676522534735873?s=20",
            "date": "2021-06-23",
            "organization": "Twitter (@IntezerLabs)",
            "author": "Intezer",
            "title": "Tweet on linux version of Derusbi",
            "categories": [
                "Derusbi"
            ]
        },
        {
            "data_url": "https://cybergeeks.tech/analyzing-apt19-malware-using-a-step-by-step-method/",
            "date": "2020-12-26",
            "organization": "CYBER GEEKS  All Things Infosec",
            "author": "CyberMasterV",
            "title": "Analyzing APT19 malware using a step-by-step method",
            "categories": [
                "Derusbi"
            ]
        },
        {
            "data_url": "https://nao-sec.org/2020/01/an-overhead-view-of-the-royal-road.html",
            "date": "2020-01-29",
            "organization": "nao_sec blog",
            "author": "nao_sec",
            "title": "An Overhead View of the Royal Road",
            "categories": [
                "BLACKCOFFEE",
                "Cotx RAT",
                "Datper",
                "DDKONG",
                "Derusbi",
                "Icefog",
                "Korlia",
                "NewCore RAT",
                "PLAINTEE",
                "Poison Ivy",
                "Sisfader"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-mohawk",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE MOHAWK",
            "categories": [
                "AIRBREAK",
                "scanbox",
                "BLACKCOFFEE",
                "CHINACHOPPER",
                "Cobalt Strike",
                "Derusbi",
                "homefry",
                "murkytop",
                "SeDll",
                "APT40"
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
            "data_url": "https://unit42.paloaltonetworks.com/rancor-cyber-espionage-group-uses-new-custom-malware-to-attack-southeast-asia/",
            "date": "2019-12-17",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Jen Miller-Osborn",
            "title": "Rancor: Cyber Espionage Group Uses New Custom Malware to Attack Southeast Asia",
            "categories": [
                "DDKONG",
                "Derusbi",
                "KHRAT"
            ]
        },
        {
            "data_url": "https://summit.fireeye.com/content/dam/fireeye-www/summit/cds-2019/presentations/cds19-executive-s08-achievement-unlocked.pdf",
            "date": "2019-11-19",
            "organization": "FireEye",
            "author": "Kelli Vanderlee",
            "title": "Achievement Unlocked: Chinese Cyber Espionage Evolves to Support Higher Level Missions",
            "categories": [
                "MESSAGETAP",
                "TSCookie",
                "ACEHASH",
                "CHINACHOPPER",
                "Cobalt Strike",
                "Derusbi",
                "Empire Downloader",
                "Ghost RAT",
                "HIGHNOON",
                "HTran",
                "MimiKatz",
                "NetWire RC",
                "poisonplug",
                "Poison Ivy",
                "pupy",
                "Quasar RAT",
                "ZXShell"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0096",
            "date": "2019-09-23",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "APT41",
            "categories": [
                "Derusbi",
                "MESSAGETAP",
                "Winnti",
                "ASPXSpy",
                "BLACKCOFFEE",
                "CHINACHOPPER",
                "Cobalt Strike",
                "Derusbi",
                "Empire Downloader",
                "Ghost RAT",
                "MimiKatz",
                "NjRAT",
                "PlugX",
                "ShadowPad",
                "Winnti",
                "ZXShell",
                "APT41"
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
            "data_url": "https://web.archive.org/web/20180310053107/https://www.rsaconference.com/writable/presentations/file_upload/hta-w02-dissecting-derusbi.pdf",
            "date": "2016-03-02",
            "organization": "RSA Conference",
            "author": "Vanja Svajcer",
            "title": "Dissecting Derusbi",
            "categories": [
                "Derusbi"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20151216071054/http://blog.airbuscybersecurity.com/post/2015/11/Newcomers-in-the-Derusbi-family",
            "date": "2015-12-15",
            "organization": "Airbus Defence & Space",
            "author": "Fabien Perigaud",
            "title": "Newcomers in the Derusbi family",
            "categories": [
                "Derusbi"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/uploads/pdf/conference_slides/2015/Pun-etal-VB2015.pdf",
            "date": "2015-10-08",
            "organization": "Virus Bulletin",
            "author": "Micky Pun",
            "title": "Catching the silent whisper: Understanding the Derusbi family tree",
            "categories": [
                "Derusbi"
            ]
        },
        {
            "data_url": "https://www.threatconnect.com/the-anthem-hack-all-roads-lead-to-china/",
            "date": "2015-02-27",
            "organization": "ThreatConnect",
            "author": "ThreatConnect Research Team",
            "title": "The Anthem Hack: All Roads Lead to China",
            "categories": [
                "Derusbi"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20200509171721/https://raw.githubusercontent.com/fdiskyou/threat-INTel/master/2015/GlobalThreatIntelReport.pdf",
            "date": "2015-02-06",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "CrowdStrike Global Threat Intel Report 2014",
            "categories": [
                "BlackPOS",
                "CryptoLocker",
                "Derusbi",
                "Elise",
                "Enfal",
                "EvilGrab",
                "Gameover P2P",
                "HttpBrowser",
                "Medusa",
                "Mirage",
                "Naikon",
                "NetTraveler",
                "pirpi",
                "PlugX",
                "Poison Ivy",
                "Sakula RAT",
                "Sinowal",
                "sykipot",
                "taidoor"
            ]
        },
        {
            "data_url": "http://www.novetta.com/wp-content/uploads/2014/11/Derusbi.pdf",
            "date": "2014-10-28",
            "organization": "Novetta",
            "author": "Novetta",
            "title": "Derusbi  (Server  Variant)  Analysis",
            "categories": [
                "Derusbi"
            ]
        },
        {
            "data_url": "https://www.rsa.com/content/dam/en/white-paper/rsa-incident-response-emerging-threat-profile-shell-crew.pdf",
            "date": "2014-01",
            "organization": "RSA",
            "author": "RSA Research",
            "title": "RSA Incident Response: Emerging Threat Profile Shell_Crew",
            "categories": [
                "Derusbi"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "derusbi",
            "procedure_code": "s0021",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0021",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/004",
                    "technique_name": "command and scripting interpreter : unix shell",
                    "technique_description": "adversaries may abuse unix shell commands and scripts for execution. unix shells are the primary command prompt on linux and macos systems, though many variations of the unix shell exist (e.g. sh, bash, zsh, etc.) depending on the specific os or distribution. unix shells can control every aspect of a system, with certain commands requiring elevated privileges.",
                    "procedure_description": "derusbi is capable of creating a remote bash shell and executing commands.[12][13]"
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
                    "procedure_description": "derusbi injects itself into the secure shell (ssh) process.[20]"
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
                    "procedure_description": "derusbi is capable of deleting files. it has been observed loading a linux kernel module (lkm) and then deleting it from the hard disk as well as overwriting the data with null bytes.[55][56]"
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
                    "procedure_description": "the derusbi malware supports timestomping.[20][21]"
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
                    "procedure_description": "derusbi injects itself into the secure shell (ssh) process.[20]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/010",
                    "technique_name": "system binary proxy execution : regsvr32",
                    "technique_description": "adversaries may abuse regsvr32.exe to proxy execution of malicious code. regsvr32.exe is a command-line program used to register and unregister object linking and embedding controls, including dynamic link libraries (dlls), on windows systems. the regsvr32.exe binary may also be signed by microsoft.",
                    "procedure_description": "derusbi variants have been seen that use registry persistence to proxy execution through regsvr32.exe.[17]"
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
                    "procedure_description": "derusbi is capable of logging keystrokes.[55]"
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
                    "procedure_description": "derusbi is capable of obtaining directory, file, and drive listings.[103][74]"
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
                    "procedure_description": "derusbi collects current and parent process ids.[76][77]"
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
                    "procedure_description": "derusbi is capable of enumerating registry keys and values.[33]"
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
                    "procedure_description": "derusbi gathers the name of the local host, version of gnu compiler collection (gcc), and the system information about the cpu, machine, and operating system.[112]"
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
                    "procedure_description": "a linux version of derusbi checks if the victim user id is anything other than zero (normally used for root), and the malware will not execute if it does not have root privileges. derusbi also gathers the username of the victim.[48]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1123",
                    "technique_link": "https://attack.mitre.org/techniques/T1123",
                    "technique_name": "audio capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., microphones and webcams) or applications (e.g., voice and video call services) to capture audio recordings for the purpose of listening into sensitive conversations to gather information.",
                    "procedure_description": "derusbi is capable of performing audio captures.[9]"
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
                    "procedure_description": "derusbi is capable of logging keystrokes.[55]"
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
                    "procedure_description": "derusbi is capable of performing screen captures.[50]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1125",
                    "technique_link": "https://attack.mitre.org/techniques/T1125",
                    "technique_name": "video capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., integrated cameras or webcams) or applications (e.g., video call services) to capture video recordings for the purpose of gathering information. images may also be captured from devices or applications, potentially in specified intervals, in lieu of video files.",
                    "procedure_description": "derusbi is capable of capturing video.[13]"
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
                    "procedure_description": "derusbi obfuscates c2 traffic with variable 4-byte xor keys.[36]"
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
                    "procedure_description": "derusbi uses a backup communication method with an http beacon.[13]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1095",
                    "technique_link": "https://attack.mitre.org/techniques/T1095",
                    "technique_name": "non-application layer protocol",
                    "technique_description": "adversaries may use an osi non-application layer protocol for communication between host and c2 server or among infected hosts within a network. the list of possible protocols is extensive. specific examples include use of network layer protocols, such as the internet control message protocol (icmp), transport layer protocols, such as the user datagram protocol (udp), session layer protocols, such as socket secure (socks), as well as redirected/tunneled protocols, such as serial over lan (sol).",
                    "procedure_description": "derusbi binds to a raw socket on a random source port between 31800 and 31900 for c2.[22]"
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
                    "procedure_description": "derusbi has used unencrypted http on port 443 for c2.[12]"
                }
            ]
        }
    ]
};