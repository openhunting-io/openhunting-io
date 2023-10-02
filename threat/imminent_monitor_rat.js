var threatdata = {
    "name": "Imminent Monitor RAT",
    "alias": "Imminent Monitor RAT, Imminent Monitor",
    "category": "Tools",
    "type": "Backdoor, Info stealer, Credential stealer",
    "modified": "2022-02-26",
    "all_data": {
        "tool": "Imminent Monitor RAT",
        "names": [
            {
                "name": "Imminent Monitor RAT"
            },
            {
                "name": "Imminent Monitor"
            }
        ],
        "description": "(Palo Alto) A RAT offered for sale since 2012.\n\nThe ImminentMonitor Client Control Panel offers a clean, easy-to-use interface to build and control ImminentMonitor client malware. As well as the full Remote Desktop access of any RAT, features less noticeable by the victim include:\n\n\u2022 File manager\n\u2022 Process manager\n\u2022 Window manager\n\u2022 Clipboard manager\n\u2022 Registry manager\n\u2022 Startup manager\n\u2022 Command prompt\n\u2022 TCP connection\n\u2022 Remote webcam monitoring\n\u2022 Remote microphone monitoring\n\u2022 Password recovery",
        "category": "Tools",
        "type": [
            "Backdoor",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/imminent-monitor-a-rat-down-under/",
            "https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/",
            "https://itsjack.cc/blog/2016/01/imminent-monitor-4-rat-analysis-a-glance/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.imminent_monitor_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Imminent%20Monitor"
        ],
        "uuid": "b9236211-46f9-4e2c-89ca-a1fed4f2ea04",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Imminent Monitor RAT",
            "malware_alias": null,
            "malware": "win.imminent_monitor_rat",
            "last_update": "2021-06-27 16:30:33",
            "tags": [
                "imminent"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "8067ef9073fdb633e0be1d590c03c0091b1801202ad070cf3872e8fda2a41639",
                        "timestamp": "2021-06-27 16:30:33"
                    },
                    {
                        "value": "6a2f2e1af097e8c7698ed3288f70da4a437811d17d4629bf3c2b7c37ce6b5f08",
                        "timestamp": "2021-06-27 16:30:32"
                    },
                    {
                        "value": "c54e959ac27aedd00ff31809ab211fcbaada77f402c8a1a67bef52b5e294d9f4",
                        "timestamp": "2021-06-27 16:30:31"
                    },
                    {
                        "value": "8514ff9c2ada6af82ac8353ebafe4f9c924f3df51adafc416df5bde0726b3dfa",
                        "timestamp": "2021-06-27 16:30:31"
                    },
                    {
                        "value": "f2a489976001d04ddd83ba0cb2e49b0a523b6a6ccb25d0d8735f52796896be3c",
                        "timestamp": "2021-06-11 06:30:31"
                    },
                    {
                        "value": "c130f3858f4692d6f6d4aa0c4cd2275fafc170131d0c9cb0fcfb455c6f3e211b",
                        "timestamp": "2021-06-11 06:30:30"
                    },
                    {
                        "value": "f74aa451fbd3135edc4874a628e4b2280561459c0933b9285ffad8a89e84d6bf",
                        "timestamp": "2021-06-11 06:30:30"
                    },
                    {
                        "value": "b1a76dd042b5b4c825472ae3d0ecbdbe9b73049c457814aaa54997e16a37a33f",
                        "timestamp": "2021-06-11 06:30:30"
                    },
                    {
                        "value": "ad6d58c9d9a1a75e8c1e482d53df649427acf132ea82f3d205b78cdf0f5e438c",
                        "timestamp": "2021-06-09 17:30:24"
                    },
                    {
                        "value": "2c53417a6b4c4e4ba05f683ec402dbfca125384655e8fc6c529c696995860b81",
                        "timestamp": "2021-06-09 17:30:24"
                    },
                    {
                        "value": "efb143b7e8186a9761f9a88fbcbb8fb67e1dab6133961779060477ed6013e886",
                        "timestamp": "2021-06-09 17:30:24"
                    },
                    {
                        "value": "9f505b6b238543bdf2f4dedea6e0d2d2b72f285ebcea82b76311878975857b62",
                        "timestamp": "2021-06-09 17:30:24"
                    },
                    {
                        "value": "2b21124d1683a0732c14190ec17c0aba4d33e3e00567607d8f7b7ed9754305b5",
                        "timestamp": "2021-06-07 16:17:28"
                    },
                    {
                        "value": "047c69ac4531bdf644f8a0a0a930958589930f86fdc4bfce992b76c9775fc906",
                        "timestamp": "2021-06-07 16:17:28"
                    },
                    {
                        "value": "dc1f93435a858fed72eee637cb23ad024ba309ec030dfa53f2495cb16776ccfd",
                        "timestamp": "2021-06-07 16:17:28"
                    },
                    {
                        "value": "975cc3f3bd2bc6b0c3ba35733f0a3aee2b7772ab0410be735bf6f708cd379820",
                        "timestamp": "2021-06-07 16:17:28"
                    },
                    {
                        "value": "b7ef9f5137720932895dbc0e1231e71451eace1e82f2baac3e208c969ec1e966",
                        "timestamp": "2021-06-03 22:19:53"
                    },
                    {
                        "value": "820e12af8f79fb8a108b80eea3bcf26dcc5d31c2c79072ee3cfceba1b22e355f",
                        "timestamp": "2021-06-03 22:19:52"
                    },
                    {
                        "value": "acc69ae8822c6facb03542af4fcca5588408b41d351f7bc7988d462a7f8c60d2",
                        "timestamp": "2021-06-03 22:19:52"
                    },
                    {
                        "value": "9e691357776fa8552f8bb78a89bccc3d4c92870708e303a07b8e157dd35f57ac",
                        "timestamp": "2021-06-03 22:19:52"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-06-27 16:30:33",
    "file_name": "imminent_monitor_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.atomicmatryoshka.com/post/infographic-apts-in-south-america",
            "date": "2022-02-26",
            "organization": "Atomic Matryoshka",
            "author": "z3r0day_504",
            "title": "Infographic: APTs in South America",
            "categories": [
                "Imminent Monitor RAT",
                "Machete"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/21/i/apt-c-36-updates-its-long-term-spam-campaign-against-south-american-entities-with-commodity-rats/BlindEagleIOCList.txt",
            "date": "2021-09-13",
            "organization": "Trend Micro",
            "author": "Jarom\u00edr Ho\u0159ej\u0161\u00ed",
            "title": "APT-C-36 Updates Its Spam Campaign Against South American Entities With Commodity RATs (IOCs)",
            "categories": [
                "AsyncRAT",
                "Ave Maria",
                "BitRAT",
                "Imminent Monitor RAT",
                "LimeRAT",
                "NjRAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/i/apt-c-36-updates-its-long-term-spam-campaign-against-south-ameri.html",
            "date": "2021-09-13",
            "organization": "Trend Micro",
            "author": "Jarom\u00edr Ho\u0159ej\u0161\u00ed",
            "title": "APT-C-36 Updates Its Spam Campaign Against South American Entities With Commodity RATs",
            "categories": [
                "AsyncRAT",
                "Ave Maria",
                "BitRAT",
                "Imminent Monitor RAT",
                "LimeRAT",
                "NjRAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.politie.nl/nieuws/2021/mei/19/04-aanhouding-in-onderzoek-naar-cybercrime.html",
            "date": "2021-05-19",
            "organization": "Politie NL",
            "author": "Politie NL",
            "title": "Aanhouding in onderzoek naar cybercrime",
            "categories": [
                "Imminent Monitor RAT"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/uploads/2020/02/13/cb78386a082f465f259b37dae5df4884.pdf",
            "date": "2020-02-13",
            "organization": "Qianxin",
            "author": "Qi Anxin Threat Intelligence Center",
            "title": "APT Report 2019",
            "categories": [
                "Chrysaor",
                "Exodus",
                "Dacls",
                "VPNFilter",
                "DNSRat",
                "Griffon",
                "KopiLuwak",
                "More_eggs",
                "SQLRat",
                "AppleJeus",
                "BONDUPDATER",
                "Agent.BTZ",
                "Anchor",
                "AndroMut",
                "AppleJeus",
                "BOOSTWRITE",
                "Brambul",
                "Carbanak",
                "Cobalt Strike",
                "Dacls",
                "DistTrack",
                "DNSpionage",
                "Dtrack",
                "ELECTRICFISH",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Grateful POS",
                "HOPLIGHT",
                "Imminent Monitor RAT",
                "jason",
                "Joanap",
                "KerrDown",
                "KEYMARBLE",
                "Lambert",
                "LightNeuron",
                "LoJax",
                "MiniDuke",
                "PolyglotDuke",
                "PowerRatankba",
                "Rising Sun",
                "SDBbot",
                "ServHelper",
                "Snatch",
                "Stuxnet",
                "TinyMet",
                "tRat",
                "TrickBot",
                "Volgmer",
                "X-Agent",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://www.tripwire.com/state-of-security/featured/man-jailed-using-webcam-rat-women-bedrooms/",
            "date": "2020-01-09",
            "organization": "The State of Security",
            "author": "Graham Clueley",
            "title": "Man jailed for using webcam RAT to spy on women in their bedrooms",
            "categories": [
                "Imminent Monitor RAT"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/cobalt-trinity",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT TRINITY",
            "categories": [
                "POWERTON",
                "pupy",
                "Imminent Monitor RAT",
                "Koadic",
                "Nanocore RAT",
                "NetWire RC",
                "PoshC2",
                "APT33"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/imminent-monitor-a-rat-down-under/",
            "date": "2019-12-02",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Imminent Monitor \u2013 a RAT Down Under",
            "categories": [
                "Imminent Monitor RAT"
            ]
        },
        {
            "data_url": "https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/",
            "date": "2019-02-18",
            "organization": "360 Threat Intelligence",
            "author": "Anxin Threat Intelligence Center",
            "title": "APT-C-36: Continuous Attacks Targeting Colombian Government Institutions and Corporations",
            "categories": [
                "Imminent Monitor RAT",
                "APT-C-36"
            ]
        },
        {
            "data_url": "https://itsjack.cc/blog/2016/01/imminent-monitor-4-rat-analysis-a-glance/",
            "date": "2016-01-23",
            "organization": "LinkCabin",
            "author": "LinkCabin",
            "title": "Imminent Monitor 4 RAT Analysis \u2013 A Glance",
            "categories": [
                "Imminent Monitor RAT"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "imminent monitor",
            "procedure_code": "s0434",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0434",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059",
                    "technique_link": "https://attack.mitre.org/techniques/T1059",
                    "technique_name": "command and scripting interpreter",
                    "technique_description": "adversaries may abuse command and script interpreters to execute commands, scripts, or binaries. these interfaces and languages provide ways of interacting with computer systems and are a common feature across many different platforms. most systems come with some built-in command-line interface and scripting capabilities, for example, macos and linux distributions include some flavor of unix shell while windows installations include the windows command shell and powershell.",
                    "procedure_description": "imminent monitor has a commandpromptpacket and scriptpacket module(s) for creating a remote shell and executing scripts.[28]"
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
                    "procedure_description": "imminent monitor has leveraged createprocessw() call to execute the debugger.[99]"
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
                    "procedure_description": "imminent monitor has decoded malware components that are then dropped to the system.[115]"
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
                    "procedure_description": "imminent monitor has a dynamic debugging feature to set the file attribute to hidden.[22]"
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
                    "procedure_description": "imminent monitor has a feature to disable windows task manager.[43]"
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
                    "procedure_description": "imminent monitor has deleted files related to its dynamic debugger feature.[109]"
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
                    "procedure_description": "imminent monitor has encrypted the spearphish attachments to avoid detection from email gateways; the debugger also encrypts information before sending to the c2.[17]"
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
                    "procedure_description": "imminent monitor has a passwordrecoverypacket module for recovering browser passwords.[32]"
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
                    "procedure_description": "imminent monitor has a keylogging module.[81]"
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
                    "procedure_description": "imminent monitor has a dynamic debugging feature to check whether it is located in the %temp% directory, otherwise it copies itself there.[149]"
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
                    "procedure_description": "imminent monitor has a \"process watcher\" feature to monitor processes in case the client ever crashes or gets closed.[128]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/001",
                    "technique_name": "remote services : remote desktop protocol",
                    "technique_description": "adversaries may use valid accounts to log into a computer using the remote desktop protocol (rdp). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "imminent monitor has a module for performing remote desktop access.[29]"
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
                    "procedure_description": "imminent monitor has a remote microphone monitoring capability.[14][15]"
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
                    "procedure_description": "imminent monitor has a keylogging module.[81]"
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
                    "procedure_description": "imminent monitor has a remote webcam monitoring capability.[18][19]"
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
                    "procedure_description": "imminent monitor has uploaded a file containing debugger logs, network information and system information to the c2.[61]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1496",
                    "technique_link": "https://attack.mitre.org/techniques/T1496",
                    "technique_name": "resource hijacking",
                    "technique_description": "adversaries may leverage the resources of co-opted systems in order to solve resource intensive problems, which may impact system and/or hosted service availability.",
                    "procedure_description": "imminent monitor has the capability to run a cryptocurrency miner on the victim machine.[11]"
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
        },
        {
            "procedure_name": "tor",
            "procedure_code": "s0183",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0183",
            "techniques": [
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
                    "procedure_description": "tor encapsulates traffic in multiple layers of encryption, using tls by default.[59]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "traffic traversing the tor network will be forwarded to multiple nodes before exiting the tor network and continuing on to its intended destination.[21]"
                }
            ]
        }
    ]
};