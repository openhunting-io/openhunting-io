var threatdata = {
    "name": "HyperBro",
    "alias": "HyperBro",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Credential stealer, Keylogger",
    "modified": "2023-07-18",
    "all_data": {
        "tool": "HyperBro",
        "names": [
            {
                "name": "HyperBro"
            }
        ],
        "description": "(Kaspersky) The operators used the HyperBro Trojan as their last-stage in-memory remote administration tool (RAT). The timestamps for these modules are from December 2017 until January 2018. The anti-detection launcher and decompressor make extensive use of {{Metasploit}}\u2019s shikata_ga_nai encoder as well as LZNT1 compression.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Keylogger"
        ],
        "information": [
            "https://securelist.com/luckymouse-hits-national-data-center/86083/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0398/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hyperbro"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:hyperbro"
        ],
        "uuid": "b4c5f160-6c46-4cd3-8abe-420b314ffe0e",
        "last-card-change": "2021-11-01",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "HyperBro",
            "malware_alias": null,
            "malware": "win.hyperbro",
            "last_update": "2023-06-16 11:35:45",
            "tags": [],
            "ioc": {
                "ip:port": [
                    {
                        "value": "138.124.180.56:443",
                        "timestamp": "2023-06-16 11:35:44"
                    },
                    {
                        "value": "103.79.78.48:443",
                        "timestamp": "2023-06-16 11:35:45"
                    },
                    {
                        "value": "138.124.180.108:443",
                        "timestamp": "2023-06-16 11:35:45"
                    },
                    {
                        "value": "85.204.74.143:443",
                        "timestamp": "2023-06-16 11:35:45"
                    },
                    {
                        "value": "104.168.211.246:443",
                        "timestamp": "2023-06-16 11:35:44"
                    },
                    {
                        "value": "80.92.206.158:443",
                        "timestamp": "2023-04-21 11:35:32"
                    },
                    {
                        "value": "89.35.178.105:443",
                        "timestamp": "2023-06-16 11:35:44"
                    },
                    {
                        "value": "103.79.76.232:443",
                        "timestamp": "2023-06-16 11:35:44"
                    },
                    {
                        "value": "45.77.32.139:443",
                        "timestamp": "2023-06-16 11:35:43"
                    },
                    {
                        "value": "45.77.250.141:443",
                        "timestamp": "2023-06-16 11:35:43"
                    },
                    {
                        "value": "154.38.118.188:443",
                        "timestamp": "2023-06-16 11:35:43"
                    },
                    {
                        "value": "8.218.77.161:443",
                        "timestamp": "2023-06-16 11:35:43"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "08710b30b89f6c2eee2c250132acd9a39571f93a26736ddf4dbb4e23041f74f2",
                        "timestamp": "2022-01-26 17:15:00"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "bc259ab9cca395620b1466771d8b9c45",
                        "timestamp": "2022-01-26 17:15:00"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-06-16 11:35:45",
    "file_name": "hyperbro",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/resources/blog/chinese-espionage-tactics",
            "date": "2023-07-18",
            "organization": "Mandiant",
            "author": "Mandiant Intelligence",
            "title": "Stealth Mode: Chinese Cyber Espionage Actors Continue to Evolve Tactics to Avoid Detection",
            "categories": [
                "BPFDoor",
                "SALTWATER",
                "SEASPY",
                "SideWalk",
                "ZuoRAT",
                "Daxin",
                "HyperBro",
                "HyperSSL",
                "Waterbear"
            ]
        },
        {
            "data_url": "https://www.intrinsec.com/apt27-analysis/",
            "date": "2022-10-18",
            "organization": "Intrinsec",
            "author": "Intrinsec",
            "title": "APT27 \u2013 One Year To Exfiltrate Them All: Intrusion In-Depth Analysis",
            "categories": [
                "HyperBro",
                "MimiKatz"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/22/h/irontiger-compromises-chat-app-Mimi-targets-windows-mac-linux-users.html",
            "date": "2022-08-12",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "Iron Tiger Compromises Chat Application Mimi, Targets Windows, Mac, and Linux Users",
            "categories": [
                "Rshell",
                "HyperBro"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/h/iron-tiger-compromises-chat-application-mimi,-targets-windows,-mac,-and-linux-users/IOCs-IronTiger-compromises-chat-application-mimi-targets-windows-mac-linux-users.txt",
            "date": "2022-08-12",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "Iron Tiger Compromises Chat Application Mimi, Targets Windows, Mac, and Linux Users (IOCs)",
            "categories": [
                "HyperBro"
            ]
        },
        {
            "data_url": "https://blog.sekoia.io/luckymouse-uses-a-backdoored-electron-app-to-target-macos/",
            "date": "2022-08-12",
            "organization": "Sekoia",
            "author": "Threat & Detection Research Team",
            "title": "LuckyMouse uses a backdoored Electron app to target MacOS",
            "categories": [
                "HyperBro"
            ]
        },
        {
            "data_url": "https://cyware.com/news/apt27-group-targets-german-organizations-with-hyperbro-2c43b7cf/",
            "date": "2022-02-07",
            "organization": "Cyware",
            "author": "Cyware",
            "title": "APT27 Group Targets German Organizations with HyperBro",
            "categories": [
                "HyperBro"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/german-govt-warns-of-apt27-hackers-backdooring-business-networks/",
            "date": "2022-01-26",
            "organization": "BleepingComputer",
            "author": "Sergiu Gatlan",
            "title": "German govt warns of APT27 hackers backdooring business networks",
            "categories": [
                "HyperBro"
            ]
        },
        {
            "data_url": "https://www.verfassungsschutz.de/SharedDocs/publikationen/DE/cyberabwehr/2022-01-bfv-cyber-brief.pdf?__blob=publicationFile&v=10",
            "date": "2022-01-26",
            "organization": "Bundesamt f\u00fcr Verfassungsschutz",
            "author": "Bundesamt f\u00fcr Verfassungsschutz",
            "title": "Current cyber attack campaign against German business enterprises by APT27",
            "categories": [
                "HyperBro"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/unc215-chinese-espionage-campaign-in-israel",
            "date": "2021-08-10",
            "organization": "FireEye",
            "author": "Israel Research Team",
            "title": "UNC215: Spotlight on a Chinese Espionage Campaign in Israel",
            "categories": [
                "HyperBro",
                "HyperSSL",
                "MimiKatz"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2021/04/ESET_Industry_Report_Government.pdf",
            "date": "2021-04-29",
            "organization": "ESET Research",
            "author": "Robert Lipovsky",
            "title": "ESET Industry Report on Government: Targeted but not alone",
            "categories": [
                "Exaramel",
                "Crutch",
                "Exaramel",
                "HyperBro",
                "HyperSSL",
                "InvisiMole",
                "XDSpy"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/d/iron-tiger-apt-updates-toolkit-with-evolved-sysupdate-malware-va.html",
            "date": "2021-04-09",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "Iron Tiger APT Updates Toolkit With Evolved SysUpdate Malware",
            "categories": [
                "HyperBro",
                "HyperSSL",
                "APT27"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/12/10/luckymouse-ta428-compromise-able-desktop",
            "date": "2020-12-10",
            "organization": "ESET Research",
            "author": "Mathieu Tartare",
            "title": "Operation StealthyTrident: corporate software under attack",
            "categories": [
                "HyperBro",
                "PlugX",
                "Tmanger",
                "TA428"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/12/10/luckymouse-ta428-compromise-able-desktop/",
            "date": "2020-12-10",
            "organization": "ESET Research",
            "author": "Mathieu Tartare",
            "title": "Operation StealthyTrident: corporate software under attack",
            "categories": [
                "HyperBro",
                "PlugX",
                "ShadowPad",
                "Tmanger"
            ]
        },
        {
            "data_url": "https://decoded.avast.io/luigicamastra/apt-group-targeting-governmental-agencies-in-east-asia/",
            "date": "2020-12-09",
            "organization": "Avast Decoded",
            "author": "Luigino Camastra",
            "title": "APT Group Targeting Governmental Agencies in East Asia",
            "categories": [
                "Albaniiutas",
                "HyperBro",
                "PlugX",
                "PolPo",
                "Tmanger"
            ]
        },
        {
            "data_url": "https://decoded.avast.io/luigicamastra/apt-group-targeting-governmental-agencies-in-east-asia",
            "date": "2020-12-09",
            "organization": "Avast Decoded",
            "author": "Luigino Camastra",
            "title": "APT Group Targeting Governmental Agencies in East Asia",
            "categories": [
                "Albaniiutas",
                "HyperBro",
                "PlugX",
                "Tmanger",
                "TA428"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/incident-response-polar-ransomware-apt27/",
            "date": "2020-11-27",
            "organization": "PTSecurity",
            "author": "Denis Goydenko",
            "title": "Investigation with a twist: an accidental APT attack and averted data destruction",
            "categories": [
                "TwoFace",
                "CHINACHOPPER",
                "HyperBro",
                "MegaCortex",
                "MimiKatz"
            ]
        },
        {
            "data_url": "https://vblocalhost.com/uploads/VB2020-Shank-Piccolini.pdf",
            "date": "2020-09-30",
            "organization": "Team Cymru",
            "author": "James Shank",
            "title": "Pandamic: Emissary Pandas in the Middle East",
            "categories": [
                "HyperBro",
                "HyperSSL"
            ]
        },
        {
            "data_url": "https://www.sstic.org/media/SSTIC2020/SSTIC-actes/pivoter_tel_bernard_ou_comment_monitorer_des_attaq/SSTIC2020-Slides-pivoter_tel_bernard_ou_comment_monitorer_des_attaquants_ngligents-lunghi.pdf",
            "date": "2020-06-03",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "How to perform long term monitoring of careless threat actors",
            "categories": [
                "BBSRAT",
                "HyperBro",
                "Trochilus RAT"
            ]
        },
        {
            "data_url": "https://team-cymru.com/2020/03/25/how-the-iranian-cyber-security-agency-detects-emissary-panda-malware/",
            "date": "2020-03-25",
            "organization": "Team Cymru",
            "author": "Team Cymru",
            "title": "How the Iranian Cyber Security Agency Detects Emissary Panda Malware",
            "categories": [
                "HyperBro"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/cyber-attacks/operation-drbcontrol-uncovering-a-cyberespionage-campaign-targeting-gambling-companies-in-southeast-asia",
            "date": "2020-02-18",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "Uncovering DRBControl: Inside the Cyberespionage Campaign Targeting Gambling Operations",
            "categories": [
                "Cobalt Strike",
                "HyperBro",
                "PlugX",
                "Trochilus RAT"
            ]
        },
        {
            "data_url": "http://www.talent-jump.com/article/2020/02/17/CLAMBLING-A-New-Backdoor-Base-On-Dropbox-en/",
            "date": "2020-02-17",
            "organization": "Talent-Jump Technologies",
            "author": "Theo Chen",
            "title": "CLAMBLING - A New Backdoor Base On Dropbox",
            "categories": [
                "HyperBro",
                "PlugX"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20200307113010/https://www.sans.org/cyber-security-summit/archives/file/summit-archive-1574947864.pdf",
            "date": "2020-01",
            "organization": "FireEye",
            "author": "Tom Hall",
            "title": "Mandiant IR Grab Bag of Attacker Activity",
            "categories": [
                "TwoFace",
                "CHINACHOPPER",
                "HyperBro",
                "HyperSSL"
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
            "data_url": "https://www.tra.gov.ae/assets/mTP39Tp6.pdf.aspx",
            "date": "2019-06-13",
            "organization": "ae CERT",
            "author": "ae CERT",
            "title": "Advanced Notification of Cyber Threats against Family of Malware Giving Remote Access to Computers",
            "categories": [
                "HyperBro",
                "HyperSSL"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/a-peek-into-bronze-unions-toolbox",
            "date": "2019-02-27",
            "organization": "Secureworks",
            "author": "CTU Research Team",
            "title": "A Peek into BRONZE UNION\u2019s Toolbox",
            "categories": [
                "Ghost RAT",
                "HyperBro",
                "ZXShell"
            ]
        },
        {
            "data_url": "https://securelist.com/luckymouse-hits-national-data-center/86083/",
            "date": "2018-06-13",
            "organization": "Kaspersky Labs",
            "author": "Denis Legezo",
            "title": "LuckyMouse hits national data center to organize country-level waterholing campaign",
            "categories": [
                "HyperBro",
                "APT27"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "hyperbro",
            "procedure_code": "s0398",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0398",
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
                    "procedure_description": "hyperbro has the ability to run an application (createprocessw) or script/file (shellexecutew) via api.[96]"
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
                    "procedure_description": "hyperbro has the ability to start and stop a specified service.[29]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "hyperbro has used a legitimate application to sideload a dll to decrypt, decompress, and run a payload.[28][29]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "hyperbro has used a legitimate application to sideload a dll to decrypt, decompress, and run a payload.[28][29]"
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
                    "procedure_description": "hyperbro can run shellcode it injects into a newly created process.[29]"
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
                    "procedure_description": "hyperbro can unpack and decrypt its payload prior to execution.[53][113]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "hyperbro has used a legitimate application to sideload a dll to decrypt, decompress, and run a payload.[28][29]"
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
                    "procedure_description": "hyperbro has the ability to delete a specified file.[107]"
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
                    "procedure_description": "hyperbro can be delivered encrypted to a compromised host.[78]"
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
                    "procedure_description": "hyperbro has the ability to pack its payload.[50]"
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
                    "procedure_description": "hyperbro can run shellcode it injects into a newly created process.[29]"
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
                    "procedure_description": "hyperbro can list all services and their configurations.[27]"
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
                    "procedure_description": "hyperbro has the ability to take screenshots.[75]"
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
                    "procedure_description": "hyperbro has used https for c2 communications.[161]"
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
                    "procedure_description": "hyperbro has the ability to download additional files.[221]"
                }
            ]
        }
    ]
};