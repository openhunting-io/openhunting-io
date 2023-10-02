var threatdata = {
    "name": "AppleJeus",
    "alias": "AppleJeus",
    "category": "Malware",
    "type": "Reconnaissance, Downloader",
    "modified": "2023-04-18",
    "all_data": {
        "tool": "AppleJeus",
        "names": [
            {
                "name": "AppleJeus"
            }
        ],
        "description": "(Kaspersky) The main purpose of Updater.exe is to collect the victim\u2019s host information and send it back to the server. Upon launch, the malware creates a unique string with the format string template \u201c%09d-%05d\u201d based on random values, which is used as a unique identifier of the infected host. This malware collects process lists, excluding \u201c[System Process]\u201d and \u201cSystem\u201d processes and gets the exact OS version from the registry value at \u201cHKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\u201d. It seems that such values only exist from Windows 10, so we assume that the author developed and tested it on Windows 10.\n\nAt the end of the installation process, the installer immediately runs the Updater.exe module with the \u201cCheckUpdate\u201d parameter. This file looks like a regular tool and most likely will not arouse the suspicion of system administrators. After all, it even contains a valid digital signature, which belongs to the same vendor. But the devil is in the detail, as usual.\n\nThe code writer developed this project under the codename \u201cjeus\u201d, which was discovered in a PDB path included in the updater and used as unique HTTP multipart message data separator string. Because of this, and the fact that the attacked platforms include Apple macOS, we decided to call this Operation AppleJeus.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Downloader"
        ],
        "information": [
            "https://securelist.com/operation-applejeus/87553/",
            "https://us-cert.cisa.gov/ncas/current-activity/2021/02/17/north-korean-malicious-cyber-activity-applejeus"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0584/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.applejeus",
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.applejeus"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:AppleJeus"
        ],
        "uuid": "2ef2a76e-950e-49fd-be23-a1f1d5c61f5e",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "applejeus",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://mandiant.widen.net/s/pkffwrbjlz/m-trends-2023",
            "date": "2023-04-18",
            "organization": "Mandiant",
            "author": "Mandiant",
            "title": "M-Trends 2023",
            "categories": [
                "QUIETEXIT",
                "AppleJeus",
                "Black Basta",
                "BlackCat",
                "CaddyWiper",
                "Cobalt Strike",
                "Dharma",
                "HermeticWiper",
                "Hive",
                "INDUSTROYER2",
                "Ladon",
                "LockBit",
                "Meterpreter",
                "PartyTicket",
                "PlugX",
                "QakBot",
                "REvil",
                "Royal Ransom",
                "SystemBC",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://blog.sekoia.io/the-dprk-delicate-sound-of-cyber/",
            "date": "2022-12-16",
            "organization": "Sekoia",
            "author": "Threat & Detection Research Team",
            "title": "The DPRK delicate sound of cyber",
            "categories": [
                "AppleJeus",
                "AppleJeus",
                "SnatchCrypto"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=rjA0Vf75cYk",
            "date": "2022-08-13",
            "organization": "YoutTube (Blue Team Village)",
            "author": "Seongsu Park",
            "title": "Attribution and Bias: My terrible mistakes in threat intelligence attribution",
            "categories": [
                "AppleJeus",
                "Olympic Destroyer"
            ]
        },
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
            "data_url": "https://www.telsy.com/download/5394/?uid=28b0a4577e",
            "date": "2021-10-11",
            "organization": "Telsy",
            "author": "Telsy",
            "title": "Lazarus Group continues AppleJeus Operation",
            "categories": [
                "AppleJeus"
            ]
        },
        {
            "data_url": "https://vblocalhost.com/uploads/VB2021-Park.pdf",
            "date": "2021-10-08",
            "organization": "Virus Bulletin",
            "author": "Seongsu Park",
            "title": "Multi-universe of adversary: multiple campaigns of the Lazarus group and their connections",
            "categories": [
                "Dacls",
                "AppleJeus",
                "AppleJeus",
                "Bankshot",
                "BookCodes RAT",
                "Dacls",
                "DRATzarus",
                "LCPDot",
                "LPEClient"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=1NkzTKkEM2k",
            "date": "2021-07-10",
            "organization": "Youtube (AhmedS Kasmani)",
            "author": "AhmedS Kasmani",
            "title": "Analysis of AppleJeus Malware by Lazarus Group",
            "categories": [
                "AppleJeus"
            ]
        },
        {
            "data_url": "https://www.blackberry.com/content/dam/blackberry-com/asset/enterprise/pdf/direct/report-bb-2021-threat-report.pdf",
            "date": "2021-03-21",
            "organization": "Blackberry",
            "author": "Blackberry Research",
            "title": "2021 Threat Report",
            "categories": [
                "Bashlite",
                "FritzFrog",
                "IPStorm",
                "Mirai",
                "Tsunami",
                "elf.wellmess",
                "AppleJeus",
                "Dacls",
                "EvilQuest",
                "Manuscrypt",
                "Astaroth",
                "BazarBackdoor",
                "Cerber",
                "Cobalt Strike",
                "Emotet",
                "FinFisher RAT",
                "Kwampirs",
                "MimiKatz",
                "NjRAT",
                "Ryuk",
                "SmokeLoader",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/lazarus-north-korea-indictment",
            "date": "2021-02-18",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Lazarus: Three North Koreans Charged for Financially Motivated Attacks",
            "categories": [
                "AppleJeus",
                "POOLRAT",
                "Unidentified macOS 001 (UnionCryptoTrader)",
                "AppleJeus",
                "Unidentified 077 (Lazarus Downloader)"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-048c",
            "date": "2021-02-17",
            "organization": "US-CERT",
            "author": "CISA",
            "title": "Malware Analysis Report (AR21-048C): AppleJeus: Union Crypto",
            "categories": [
                "AppleJeus",
                "Unidentified macOS 001 (UnionCryptoTrader)",
                "AppleJeus"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-048f",
            "date": "2021-02-17",
            "organization": "US-CERT",
            "author": "CISA",
            "title": "Malware Analysis Report (AR21-048F): AppleJeus: Dorusio",
            "categories": [
                "AppleJeus",
                "AppleJeus",
                "Unidentified 077 (Lazarus Downloader)"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-048d",
            "date": "2021-02-17",
            "organization": "US-CERT",
            "author": "CISA",
            "title": "Malware Analysis Report (AR21-048D): AppleJeus: Kupay Wallet",
            "categories": [
                "AppleJeus",
                "AppleJeus"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa21-048a",
            "date": "2021-02-17",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Alert (AA21-048A): AppleJeus: Analysis of North Korea\u2019s Cryptocurrency Malware",
            "categories": [
                "AppleJeus",
                "AppleJeus"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-048a",
            "date": "2021-02-17",
            "organization": "US-CERT",
            "author": "CISA",
            "title": "Malware Analysis Report (AR21-048A): AppleJeus: Celas Trade Pro",
            "categories": [
                "AppleJeus",
                "AppleJeus"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-048g",
            "date": "2021-02-17",
            "organization": "US-CERT",
            "author": "CISA",
            "title": "Malware Analysis Report (AR21-048G): AppleJeus: Ants2Whale",
            "categories": [
                "AppleJeus",
                "AppleJeus"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-048e",
            "date": "2021-02-17",
            "organization": "US-CERT",
            "author": "CISA",
            "title": "Malware Analysis Report (AR21-048E): AppleJeus: CoinGoTrade",
            "categories": [
                "AppleJeus",
                "AppleJeus"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-048b",
            "date": "2021-02-17",
            "organization": "US-CERT",
            "author": "CISA",
            "title": "Malware Analysis Report (AR21-048B):  AppleJeus: JMT Trading",
            "categories": [
                "AppleJeus",
                "AppleJeus"
            ]
        },
        {
            "data_url": "https://objective-see.com/blog/blog_0x5F.html",
            "date": "2021-01-01",
            "organization": "Objective-See",
            "author": "Patrick Wardle",
            "title": "The Mac Malware of 2020 - a comprehensive analysis of the year's new malware",
            "categories": [
                "AppleJeus",
                "Dacls",
                "EvilQuest",
                "FinFisher",
                "WatchCat",
                "XCSSET"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q2-2020/97937/",
            "date": "2020-07-29",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2020",
            "categories": [
                "PhantomLance",
                "Dacls",
                "Penquin Turla",
                "elf.wellmess",
                "AppleJeus",
                "Dacls",
                "AcidBox",
                "Cobalt Strike",
                "Dacls",
                "EternalPetya",
                "Godlike12",
                "Olympic Destroyer",
                "PlugX",
                "shadowhammer",
                "ShadowPad",
                "Sinowal",
                "VHD Ransomware",
                "Volgmer",
                "WellMess",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/blog/four-distinct-families-of-lazarus-malware-target-apples-macos-platform/",
            "date": "2020-07-27",
            "organization": "SentinelOne",
            "author": "Phil Stokes",
            "title": "Four Distinct Families of Lazarus Malware Target Apple\u2019s macOS Platform",
            "categories": [
                "AppleJeus",
                "Casso",
                "Dacls",
                "WatchCat"
            ]
        },
        {
            "data_url": "https://objective-see.com/blog/blog_0x54.html",
            "date": "2020-02-22",
            "organization": "Objective-See",
            "author": "Patrick Wardle",
            "title": "Weaponizing a Lazarus Group Implant: repurposing a 1st-stage loader, to execute custom 'fileless' payloads",
            "categories": [
                "AppleJeus"
            ]
        },
        {
            "data_url": "https://blog.lexfo.fr/ressources/Lexfo-WhitePaper-The_Lazarus_Constellation.pdf",
            "date": "2020-02-19",
            "organization": "Lexfo",
            "author": "Lexfo",
            "title": "The Lazarus Constellation A study on North Korean malware",
            "categories": [
                "FastCash",
                "AppleJeus",
                "BADCALL",
                "Bankshot",
                "Brambul",
                "Dtrack",
                "Duuzer",
                "DYEPACK",
                "ELECTRICFISH",
                "HARDRAIN",
                "Hermes",
                "HOPLIGHT",
                "Joanap",
                "KEYMARBLE",
                "Kimsuky",
                "MimiKatz",
                "MyDoom",
                "NACHOCHEESE",
                "NavRAT",
                "PowerRatankba",
                "RokRAT",
                "Sierra(Alfa,Bravo, ...)",
                "Volgmer",
                "WannaCryptor"
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
            "data_url": "https://securelist.com/operation-applejeus-sequel/95596/",
            "date": "2020-01-08",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Operation AppleJeus Sequel",
            "categories": [
                "AppleJeus",
                "Unidentified macOS 001 (UnionCryptoTrader)"
            ]
        },
        {
            "data_url": "https://www.vkremez.com/2019/10/lets-learn-dissecting-lazarus-windows.html",
            "date": "2019-10-17",
            "organization": "",
            "author": "Vitali Kremez",
            "title": "Let's Learn: Dissecting Lazarus Windows x86 Loader Involved in Crypto Trading App Distribution: \"snowman\" & ADVObfuscator",
            "categories": [
                "AppleJeus"
            ]
        },
        {
            "data_url": "https://objective-see.com/blog/blog_0x49.html",
            "date": "2019-10-12",
            "organization": "Objective-See",
            "author": "Patrick Wardle",
            "title": "Pass the AppleJeus",
            "categories": [
                "AppleJeus"
            ]
        },
        {
            "data_url": "https://twitter.com/VK_Intel/status/1182730637016481793",
            "date": "2019-10-11",
            "organization": "Twitter (@VK_intel)",
            "author": "Vitali Kremez",
            "title": "Possible Lazarus x86 Malware (AppleJeus)",
            "categories": [
                "AppleJeus"
            ]
        },
        {
            "data_url": "https://posts.specterops.io/introducing-venator-a-macos-tool-for-proactive-detection-34055a017e56",
            "date": "2019-04-24",
            "organization": "SpecterOps",
            "author": "Richie Cyrus",
            "title": "Introducing Venator: A macOS tool for proactive detection",
            "categories": [
                "AppleJeus",
                "WindTail"
            ]
        },
        {
            "data_url": "https://securelist.com/operation-applejeus/87553/",
            "date": "2018-08-23",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Operation AppleJeus: Lazarus hits cryptocurrency exchange with fake installer and macOS malware",
            "categories": [
                "AppleJeus",
                "Volgmer",
                "Lazarus Group"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "applejeus",
            "procedure_code": "s0584",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0584",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/002",
                    "technique_name": "phishing : spearphishing link",
                    "technique_description": "adversaries may send spearphishing emails with a malicious link in an attempt to gain access to victim systems. spearphishing with a link is a specific variant of spearphishing. it is different from other forms of spearphishing in that it employs the use of links to download malware contained in email, instead of attaching malicious files to the email itself, to avoid defenses that may inspect email attachments. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "applejeus has been distributed via spearphishing link.[5]"
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
                    "procedure_description": "applejeus has used shell scripts to execute commands after installation and set persistence mechanisms.[4][5]"
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
                    "procedure_description": "applejeus has created a scheduled system task that runs when a user logs in.[7]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1569.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1569/001",
                    "technique_name": "system services : launchctl",
                    "technique_description": "adversaries may abuse launchctl to execute commands or programs. launchctl interfaces with launchd, the service management framework for macos. launchctl supports taking subcommands on the command-line, interactively, or even redirected from standard input.",
                    "procedure_description": "applejeus has loaded a plist file using the launchctl command.[4]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/001",
                    "technique_name": "user execution : malicious link",
                    "technique_description": "an adversary may rely upon a user clicking a malicious link in order to gain execution. users may be subjected to social engineering to get them to click on a link that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing link. clicking on a link may also lead to other execution techniques such as exploitation of a browser or application vulnerability via exploitation for client execution. links may also lead users to download files that require execution via malicious file.",
                    "procedure_description": "applejeus's spearphishing links required user interaction to navigate to the malicious website.[1]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/002",
                    "technique_name": "user execution : malicious file",
                    "technique_description": "an adversary may rely upon a user opening a malicious file in order to gain execution. users may be subjected to social engineering to get them to open a file that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing attachment. adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, and .cpl.",
                    "procedure_description": "applejeus has required user execution of a malicious msi installer.[7]"
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
                    "procedure_description": "applejeus can install itself as a service.[8]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/004",
                    "technique_name": "create or modify system process : launch daemon",
                    "technique_description": "adversaries may create or modify launch daemons to execute malicious payloads as part of persistence. launch daemons are plist files used to interact with launchd, the service management framework used by macos. launch daemons require elevated privileges to install, are executed for every user on a system prior to login, and run in the background without the need for user interaction. during the macos initialization startup, the launchd process loads the parameters for launch-on-demand system-level daemons from plist files found in /system/library/launchdaemons/ and /library/launchdaemons/. required launch daemons parameters include a label to identify the task, program to provide a path to the executable, and runatload to specify when the task is run. launch daemons are often used to provide access to shared resources, updates to software, or conduct automation tasks.",
                    "procedure_description": "applejeus has placed a plist file within the launchdaemons folder and launched it manually.[8][9]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.016",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/016",
                    "technique_name": "event triggered execution : installer packages",
                    "technique_description": "adversaries may establish persistence and elevate privileges by using an installer to trigger the execution of malicious content. installer packages are os specific and contain the resources an operating system needs to install applications on a system. installer packages can include scripts that run prior to installation as well as after installation is complete. installer scripts may inherit elevated permissions when executed. developers often use these scripts to prepare the environment for installation, check requirements, download dependencies, and remove files after installation.",
                    "procedure_description": "during applejeus's installation process, it uses postinstall scripts to extract a hidden plist from the application's /resources folder and execute the plist file as a launch daemon with elevated permissions.[6]"
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
                    "procedure_description": "applejeus has created a scheduled system task that runs when a user logs in.[7]"
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
                    "procedure_description": "applejeus has presented the user with a uac prompt to elevate privileges while installing.[9]"
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
                    "procedure_description": "applejeus can install itself as a service.[8]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/004",
                    "technique_name": "create or modify system process : launch daemon",
                    "technique_description": "adversaries may create or modify launch daemons to execute malicious payloads as part of persistence. launch daemons are plist files used to interact with launchd, the service management framework used by macos. launch daemons require elevated privileges to install, are executed for every user on a system prior to login, and run in the background without the need for user interaction. during the macos initialization startup, the launchd process loads the parameters for launch-on-demand system-level daemons from plist files found in /system/library/launchdaemons/ and /library/launchdaemons/. required launch daemons parameters include a label to identify the task, program to provide a path to the executable, and runatload to specify when the task is run. launch daemons are often used to provide access to shared resources, updates to software, or conduct automation tasks.",
                    "procedure_description": "applejeus has placed a plist file within the launchdaemons folder and launched it manually.[8][9]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.016",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/016",
                    "technique_name": "event triggered execution : installer packages",
                    "technique_description": "adversaries may establish persistence and elevate privileges by using an installer to trigger the execution of malicious content. installer packages are os specific and contain the resources an operating system needs to install applications on a system. installer packages can include scripts that run prior to installation as well as after installation is complete. installer scripts may inherit elevated permissions when executed. developers often use these scripts to prepare the environment for installation, check requirements, download dependencies, and remove files after installation.",
                    "procedure_description": "during applejeus's installation process, it uses postinstall scripts to extract a hidden plist from the application's /resources folder and execute the plist file as a launch daemon with elevated permissions.[6]"
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
                    "procedure_description": "applejeus has created a scheduled system task that runs when a user logs in.[7]"
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
                    "procedure_description": "applejeus has presented the user with a uac prompt to elevate privileges while installing.[9]"
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
                    "procedure_description": "applejeus has decoded files received from a c2.[8]"
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
                    "procedure_description": "applejeus has added a leading . to plist filenames, unlisting them from the finder app and default terminal directory listings.[5]"
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
                    "procedure_description": "applejeus has deleted the msi file after installation.[4]"
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
                    "procedure_description": "applejeus has xor-encrypted collected system information prior to sending to a c2. applejeus has also used the open source advobfuscation library for its components.[15]"
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
                    "procedure_description": "applejeus has used a valid digital signature from sectigo to appear legitimate.[6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/007",
                    "technique_name": "system binary proxy execution : msiexec",
                    "technique_description": "adversaries may abuse msiexec.exe to proxy execution of malicious payloads. msiexec.exe is the command-line utility for the windows installer and is thus commonly associated with executing installation packages (.msi). the msiexec.exe binary may also be digitally signed by microsoft.",
                    "procedure_description": "applejeus has been installed via msi installer.[5]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "applejeus has waited a specified time before downloading a second stage payload.[7]"
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
                    "procedure_description": "applejeus has collected the victim host information after infection.[18]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "applejeus has waited a specified time before downloading a second stage payload.[7]"
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
                    "procedure_description": "applejeus has sent data to its c2 server via post requests.[10][11]"
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
                    "procedure_description": "applejeus has exfiltrated collected host information to a c2 server.[3]"
                }
            ]
        }
    ]
};