var threatdata = {
    "name": "Anchor",
    "alias": "Anchor, Anchor_DNS",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Anchor",
        "names": [
            {
                "name": "Anchor"
            },
            {
                "name": "Anchor_DNS"
            }
        ],
        "description": "(Cybereason) During our investigation, we found several unidentified malware samples related to {{TrickBot}} infections. The malware is dubbed Anchor by its authors and has been active since August 2018. Unlike Anchor_DNS, the Anchor malware does not implement communication over DNS. However, it does share many behavioral, code, and string similarities with Anchor_DNS and some similarities to TrickBot.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.cybereason.com/blog/dropping-anchor-from-a-trickbot-infection-to-the-discovery-of-the-anchor-malware",
            "https://www.bleepingcomputer.com/news/security/trickbots-new-linux-malware-covertly-infects-windows-devices/",
            "https://thedfirreport.com/2021/03/08/bazar-drops-the-anchor"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0504/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.anchor"
        ],
        "uuid": "6bbe4681-573c-417b-bb91-657aef026509",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Anchor",
            "malware_alias": null,
            "malware": "win.anchor",
            "last_update": "2021-07-27 20:01:12",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "a8a8c66b155fcf9bfdf34ba0aca98991440c3d34b8a597c3fdebc8da251c9634",
                        "timestamp": "2021-07-27 20:01:12"
                    },
                    {
                        "value": "ba801f1c2e2c5f5cd961e887cb0776f2d5cee8d17164f29b138a8952dd162165",
                        "timestamp": "2021-07-27 20:01:12"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-07-27 20:01:12",
    "file_name": "anchor",
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
            "data_url": "https://www.bleepingcomputer.com/news/security/karakurt-revealed-as-data-extortion-arm-of-conti-cybercrime-syndicate/",
            "date": "2022-04-15",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "Karakurt revealed as data extortion arm of Conti cybercrime syndicate",
            "categories": [
                "Anchor",
                "BazarBackdoor",
                "Conti",
                "TrickBot"
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
            "data_url": "https://www.kryptoslogic.com/blog/2021/07/adjusting-the-anchor/",
            "date": "2021-07-15",
            "organization": "Kryptos Logic",
            "author": "Kryptos Logic Vantage Team",
            "title": "Adjusting the Anchor",
            "categories": [
                "Anchor"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/diary/27308",
            "date": "2021-04-14",
            "organization": "InfoSec Handlers Diary Blog",
            "author": "Brad Duncan",
            "title": "April 2021 Forensic Quiz: Answers and Analysis",
            "categories": [
                "Anchor",
                "BazarBackdoor",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/03/08/bazar-drops-the-anchor/",
            "date": "2021-03-08",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Bazar Drops the Anchor",
            "categories": [
                "Anchor",
                "BazarBackdoor",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2021GTR.pdf",
            "date": "2021-02-23",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2021 Global Threat Report",
            "categories": [
                "RansomEXX",
                "Amadey",
                "Anchor",
                "Avaddon",
                "BazarBackdoor",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "Cutwail",
                "DanaBot",
                "DarkSide",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "Hakbit",
                "IcedID",
                "JSOutProx",
                "KerrDown",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "NedDnLoader",
                "Nemty",
                "Pay2Key",
                "PlugX",
                "Pushdo",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "Quasar RAT",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet",
                "ShadowPad",
                "SmokeLoader",
                "Snake",
                "SUNBURST",
                "SunCrypt",
                "TEARDROP",
                "TrickBot",
                "WastedLocker",
                "Winnti",
                "Zloader",
                "KNOCKOUT SPIDER",
                "OUTLAW SPIDER",
                "RIDDLE SPIDER",
                "SOLAR SPIDER",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://medium.com/walmartglobaltech/anchor-and-lazarus-together-again-24744e516607",
            "date": "2021-01-20",
            "organization": "Medium walmartglobaltech",
            "author": "Jason Reaves",
            "title": "Anchor and Lazarus together again?",
            "categories": [
                "Anchor",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/ryuk-ransomware/",
            "date": "2020-10-29",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Brittany Barbehenn",
            "title": "Threat Assessment: Ryuk Ransomware and Trickbot Targeting U.S. Healthcare and Public Health Sector",
            "categories": [
                "Anchor",
                "BazarBackdoor",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/sites/default/files/publications/AA20-302A_Ransomware%20_Activity_Targeting_the_Healthcare_and_Public_Health_Sector.pdf",
            "date": "2020-10-28",
            "organization": "CISA",
            "author": "CISA",
            "title": "AA20-302A: Ransomware Activity Targeting the Healthcare and Public Health Sector",
            "categories": [
                "AnchorDNS",
                "Anchor",
                "BazarBackdoor",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.netscout.com/blog/asert/dropping-anchor",
            "date": "2020-10-26",
            "organization": "Arbor Networks",
            "author": "Suweera De Souza",
            "title": "Dropping the Anchor",
            "categories": [
                "AnchorDNS",
                "Anchor",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://cybersecurity.att.com/blogs/labs-research/trickbot-bazarloader-in-depth",
            "date": "2020-05-19",
            "organization": "AlienLabs",
            "author": "Ofer Caspi",
            "title": "TrickBot BazarLoader In-Depth",
            "categories": [
                "Anchor",
                "BazarBackdoor",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/deep-dive-into-trickbot-executor-module-mexec-hidden-anchor-bot-nexus-operations/",
            "date": "2020-04-08",
            "organization": "SentinelOne",
            "author": "Jason Reaves",
            "title": "Deep Dive Into TrickBot Executor Module \u201cmexec\u201d: Hidden \u201cAnchor\u201d Bot Nexus Operations",
            "categories": [
                "Anchor",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/itg08-aka-fin6-partners-with-trickbot-gang-uses-anchor-framework/",
            "date": "2020-04-07",
            "organization": "SecurityIntelligence",
            "author": "Ole Villadsen",
            "title": "ITG08 (aka FIN6) Partners With TrickBot Gang, Uses Anchor Framework",
            "categories": [
                "More_eggs",
                "Anchor",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2020CrowdStrikeGlobalThreatReport.pdf",
            "date": "2020-03-04",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2020 CrowdStrike Global Threat Report",
            "categories": [
                "MESSAGETAP",
                "More_eggs",
                "8.t Dropper",
                "Anchor",
                "BabyShark",
                "BadNews",
                "Clop",
                "Cobalt Strike",
                "CobInt",
                "Cobra Carbon System",
                "Cutwail",
                "DanaBot",
                "Dharma",
                "DoppelDridex",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FlawedAmmyy",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "IcedID",
                "ISFB",
                "KerrDown",
                "LightNeuron",
                "LockerGoga",
                "Maze",
                "MECHANICAL",
                "Necurs",
                "Nokki",
                "Outlook Backdoor",
                "Phobos",
                "Predator The Thief",
                "QakBot",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SDBbot",
                "Skipper",
                "SmokeLoader",
                "TerraRecon",
                "TerraStealer",
                "TerraTV",
                "TinyLoader",
                "TrickBot",
                "Vidar",
                "Winnti",
                "ANTHROPOID SPIDER",
                "APT23",
                "APT31",
                "APT39",
                "APT40",
                "BlackTech",
                "BuhTrap",
                "Charming Kitten",
                "CLOCKWORK SPIDER",
                "DOPPEL SPIDER",
                "FIN7",
                "Gamaredon Group",
                "GOBLIN PANDA",
                "MONTY SPIDER",
                "MUSTANG PANDA",
                "NARWHAL SPIDER",
                "NOCTURNAL SPIDER",
                "PINCHY SPIDER",
                "SALTY SPIDER",
                "SCULLY SPIDER",
                "SMOKY SPIDER",
                "Thrip",
                "VENOM SPIDER",
                "VICEROY TIGER"
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
            "data_url": "https://www.cybereason.com/blog/dropping-anchor-from-a-trickbot-infection-to-the-discovery-of-the-anchor-malware",
            "date": "2019-12-11",
            "organization": "Cybereason",
            "author": "Assaf Dahan",
            "title": "Dropping Anchor: From a TrickBot Infection to the Discovery of the Anchor Malware",
            "categories": [
                "Anchor",
                "WIZARD SPIDER"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/the-deadly-planeswalker-how-the-trickbot-group-united-high-tech-crimeware-apt/",
            "date": "2019-12-10",
            "organization": "Sentinel LABS",
            "author": "Vitali Kremez",
            "title": "Anchor Project | The Deadly Planeswalker: How The TrickBot Group United High-Tech Crimeware & APT",
            "categories": [
                "Anchor"
            ]
        },
        {
            "data_url": "https://hello.global.ntt/zh-cn/insights/blog/trickbot-variant-communicating-over-dns",
            "date": "2019-10-18",
            "organization": "NTT",
            "author": "NTT Security",
            "title": "TrickBot variant \u201cAnchor_DNS\u201d communicating over DNS",
            "categories": [
                "Anchor"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "anchor",
            "procedure_code": "s0504",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0504",
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
                    "procedure_description": "anchor has used cmd.exe to run its self deletion routine.[10]"
                },
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
                    "procedure_description": "anchor can execute payloads via shell scripting.[3]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/003",
                    "technique_name": "scheduled task/job : cron",
                    "technique_description": "adversaries may abuse the cron utility to perform task scheduling for initial or recurring execution of malicious code. the cron utility is a time-based job scheduler for unix-like operating systems.  the  crontab file contains the schedule of cron entries to be run and the specified times for execution. any crontab files are stored in operating system-specific file paths.",
                    "procedure_description": "anchor can install itself as a cron job.[2]"
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
                    "procedure_description": "anchor can create a scheduled task for persistence.[6]"
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
                    "procedure_description": "anchor can create and execute services to load its payload.[3][4]"
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
                    "procedure_description": "anchor can establish persistence by creating a service.[7]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/003",
                    "technique_name": "scheduled task/job : cron",
                    "technique_description": "adversaries may abuse the cron utility to perform task scheduling for initial or recurring execution of malicious code. the cron utility is a time-based job scheduler for unix-like operating systems.  the  crontab file contains the schedule of cron entries to be run and the specified times for execution. any crontab files are stored in operating system-specific file paths.",
                    "procedure_description": "anchor can install itself as a cron job.[2]"
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
                    "procedure_description": "anchor can create a scheduled task for persistence.[6]"
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
                    "procedure_description": "anchor can establish persistence by creating a service.[7]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/003",
                    "technique_name": "scheduled task/job : cron",
                    "technique_description": "adversaries may abuse the cron utility to perform task scheduling for initial or recurring execution of malicious code. the cron utility is a time-based job scheduler for unix-like operating systems.  the  crontab file contains the schedule of cron entries to be run and the specified times for execution. any crontab files are stored in operating system-specific file paths.",
                    "procedure_description": "anchor can install itself as a cron job.[2]"
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
                    "procedure_description": "anchor can create a scheduled task for persistence.[6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1480",
                    "technique_link": "https://attack.mitre.org/techniques/T1480",
                    "technique_name": "execution guardrails",
                    "technique_description": "adversaries may use execution guardrails to constrain execution or actions based on adversary supplied and environment specific conditions that are expected to be present on the target. guardrails ensure that a payload only executes against an intended target and reduces collateral damage from an adversary\u2019s campaign. values an adversary can provide about a target system or environment to use as guardrails may include specific network share names, attached physical devices, files, joined active directory (ad) domains, and local/external ip addresses.",
                    "procedure_description": "anchor can terminate itself if specific execution flags are not present.[3]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/004",
                    "technique_name": "hide artifacts : ntfs file attributes",
                    "technique_description": "adversaries may use ntfs file attributes to hide their malicious data in order to evade detection. every new technology file system (ntfs) formatted partition contains a master file table (mft) that maintains a record for every file/directory on the partition.  within mft entries are file attributes,  such as extended attributes (ea) and data [known as alternate data streams (adss) when more than one data attribute is present], that can be used to store arbitrary data (and even complete files).",
                    "procedure_description": "anchor has used ntfs to hide files.[7]"
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
                    "procedure_description": "anchor can self delete its dropper after the malware is successfully deployed.[3]"
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
                    "procedure_description": "anchor has obfuscated code with stack strings and string encryption.[14]"
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
                    "procedure_description": "anchor has come with a packed payload.[4]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "anchor has been signed with valid certificates to evade detection by security tools.[5]"
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
                    "procedure_description": "anchor can determine the hostname and linux version on a compromised host.[17]"
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
                    "procedure_description": "anchor can determine the public ip and location of a compromised host.[12]"
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
                    "procedure_description": "anchor can support windows execution via smb shares.[5]"
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
                    "procedure_description": "anchor has used http and https in c2 communications.[9]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/004",
                    "technique_name": "application layer protocol : dns",
                    "technique_description": "adversaries may communicate using the domain name system (dns) application layer protocol to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "variants of anchor can use dns tunneling to communicate with c2.[3][4]"
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
                    "procedure_description": "anchor can use secondary c2 servers for communication after establishing connectivity and relaying victim information to primary c2 servers.[1]"
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
                    "procedure_description": "anchor can download additional payloads.[10][11]"
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
                    "procedure_description": "anchor has used icmp in c2 communications.[4]"
                }
            ]
        }
    ]
};