var threatdata = {
    "name": "PupyRAT",
    "alias": "PupyRAT, Pupy, pupy",
    "category": "Tools",
    "type": "Backdoor",
    "modified": "2023-02-15",
    "all_data": {
        "tool": "PupyRAT",
        "names": [
            {
                "name": "PupyRAT"
            },
            {
                "name": "Pupy"
            },
            {
                "name": "pupy"
            }
        ],
        "description": "Pupy is an open-source, cross-platform RAT and post-exploitation framework mainly written in python. Pupy can be loaded from various loaders, including PE EXE, reflective DLL, Linux ELF, pure python, powershell and APK. Most of the loaders bundle an embedded python runtime, python library modules in source/compiled/native forms as well as a flexible configuration. They bootstrap a python runtime environment mostly in-memory for the later stages of pupy to run in. Pupy can communicate using various transports, migrate into processes, load remote python code, python packages and python C-extensions from memory.",
        "category": "Tools",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.secureworks.com/blog/iranian-pupyrat-bites-middle-eastern-organizations",
            "https://blog.cyber4sight.com/2017/02/malicious-powershell-script-analysis-indicates-shamoon-actors-used-pupy-rat/",
            "https://www.fireeye.com/blog/threat-research/2018/12/overruled-containing-a-potentially-destructive-adversary.html",
            "https://researchcenter.paloaltonetworks.com/2017/02/unit42-magic-hound-campaign-attacks-saudi-targets/",
            "https://github.com/n1nj4sec/pupy",
            "https://labs.k7computing.com/index.php/pupy-rat-hiding-under-werfaults-cover/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0192/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.pupy",
            "https://malpedia.caad.fkie.fraunhofer.de/details/py.pupy",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pupy"
        ],
        "uuid": "7b6db856-4677-46f4-b422-1272cbb8c783",
        "last-card-change": "2023-02-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pupyrat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://labs.k7computing.com/index.php/pupy-rat-hiding-under-werfaults-cover/",
            "date": "2023-01-04",
            "organization": "K7 Security",
            "author": "Saikumaravel",
            "title": "Pupy RAT hiding under WerFault\u2019s cover",
            "categories": [
                "pupy"
            ]
        },
        {
            "data_url": "https://www.infinitumit.com.tr/apt-35/",
            "date": "2022-06-20",
            "organization": "Infinitum IT",
            "author": "infinitum IT",
            "title": "Charming Kitten (APT35)",
            "categories": [
                "LaZagne",
                "DownPaper",
                "MimiKatz",
                "pupy"
            ]
        },
        {
            "data_url": "https://www.volexity.com/blog/2022/06/15/driftingcloud-zero-day-sophos-firewall-exploitation-and-an-insidious-breach/",
            "date": "2022-06-15",
            "organization": "Volexity",
            "author": "Steven Adair",
            "title": "DriftingCloud: Zero-Day Sophos Firewall Exploitation and an Insidious Breach",
            "categories": [
                "pupy",
                "Sliver"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/white_papers/wp-operation-earth-berberoka.pdf",
            "date": "2022-05-23",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "Operation Earth Berberoka",
            "categories": [
                "reptile",
                "oRAT",
                "Ghost RAT",
                "PlugX",
                "pupy",
                "Earth Berberoka"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/txt/earth-berberoka-linux-iocs-2.txt",
            "date": "2022-04-27",
            "organization": "Trendmicro",
            "author": "Trendmicro",
            "title": "IOCs for Earth Berberoka - Linux",
            "categories": [
                "Rekoobe",
                "pupy",
                "Earth Berberoka"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2022-0330.pdf",
            "date": "2022-03-30",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Social Engineering  Remains Key Tradecraft  for Iranian APTs",
            "categories": [
                "Liderc",
                "pupy"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2021-0107.pdf",
            "date": "2021-01-07",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "Aversary Infrastructure Report 2020: A Defender's View",
            "categories": [
                "Octopus",
                "pupy",
                "Cobalt Strike",
                "Empire Downloader",
                "Meterpreter",
                "PoshC2"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2020-0123.pdf",
            "date": "2020-01-23",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "European Energy Sector Organization Targeted by PupyRAT Malware in Late 2019",
            "categories": [
                "pupy",
                "pupy",
                "pupy"
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
            "data_url": "https://www.secureworks.com/research/threat-profiles/cobalt-gypsy",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT GYPSY",
            "categories": [
                "TwoFace",
                "MacDownloader",
                "BONDUPDATER",
                "pupy",
                "Helminth",
                "jason",
                "RGDoor",
                "TinyZbot",
                "OilRig"
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
            "data_url": "https://github.com/n1nj4sec/pupy",
            "date": "2019-08-22",
            "organization": "Github (n1nj4sec)",
            "author": "n1nj4sec",
            "title": "Pupy RAT",
            "categories": [
                "pupy",
                "pupy",
                "pupy"
            ]
        },
        {
            "data_url": "https://www.symantec.com/blogs/threat-intelligence/elfin-apt33-espionage",
            "date": "2019-03-27",
            "organization": "Symantec",
            "author": "Security Response Attack Investigation Team",
            "title": "Elfin: Relentless Espionage Group Targets Multiple Organizations in Saudi Arabia and U.S.",
            "categories": [
                "DarkComet",
                "Nanocore RAT",
                "pupy",
                "Quasar RAT",
                "Remcos",
                "TURNEDUP",
                "APT33"
            ]
        },
        {
            "data_url": "https://symantec-blogs.broadcom.com/blogs/threat-intelligence/elfin-apt33-espionage",
            "date": "2019-03-27",
            "organization": "Symantec",
            "author": "Critical Attack Discovery and Intelligence Team",
            "title": "Elfin: Relentless Espionage Group Targets Multiple Organizations in Saudi Arabia and U.S.",
            "categories": [
                "DarkComet",
                "MimiKatz",
                "Nanocore RAT",
                "NetWire RC",
                "pupy",
                "Quasar RAT",
                "Remcos",
                "StoneDrill",
                "TURNEDUP",
                "APT33"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2018/12/overruled-containing-a-potentially-destructive-adversary.html",
            "date": "2018-12-21",
            "organization": "FireEye",
            "author": "Geoff Ackerman",
            "title": "OVERRULED: Containing a Potentially Destructive Adversary",
            "categories": [
                "POWERTON",
                "PoshC2",
                "pupy"
            ]
        },
        {
            "data_url": "https://securityaffairs.co/wordpress/56348/intelligence/magic-hound-campaign.html",
            "date": "2017-02-16",
            "organization": "SecurityAffairs",
            "author": "Pierluigi Paganini",
            "title": "Iranian hackers behind the Magic Hound campaign linked to Shamoon",
            "categories": [
                "pupy",
                "APT35"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2017/02/unit42-magic-hound-campaign-attacks-saudi-targets/",
            "date": "2017-02-15",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Bryan Lee",
            "title": "Magic Hound Campaign Attacks Saudi Targets",
            "categories": [
                "Leash",
                "MPKBot",
                "pupy",
                "Rocket Kitten"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/iranian-pupyrat-bites-middle-eastern-organizations",
            "date": "2017-02-15",
            "organization": "Secureworks",
            "author": "SecureWorks' Counter Threat Unit Research Team",
            "title": "Iranian PupyRAT Bites Middle Eastern Organizations",
            "categories": [
                "pupy",
                "Cleaver"
            ]
        },
        {
            "data_url": "https://blog.cyber4sight.com/2017/02/malicious-powershell-script-analysis-indicates-shamoon-actors-used-pupy-rat/",
            "date": "2017-02-10",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "Malware that infects using PowerSploit",
            "categories": [
                "pupy"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "pupy",
            "procedure_code": "s0192",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0192",
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
                    "procedure_description": "pupy has a module for loading and executing powershell scripts.[191]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/006",
                    "technique_name": "command and scripting interpreter : python",
                    "technique_description": "adversaries may abuse python commands and scripts for execution. python is a very popular scripting/programming language, with capabilities to perform many functions. python can be executed interactively from the command-line (via the python.exe interpreter) or via scripts (.py) that can be written and distributed to different systems. python code can also be compiled into binary executables.",
                    "procedure_description": "pupy can use an add on feature when creating payloads that allows you to create custom python scripts (\"scriptlets\") to perform tasks offline (without requiring a session) such as sandbox detection, adding persistence, etc.[34]"
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
                    "procedure_description": "pupy uses psexec to execute a payload or commands on a remote host.[48]"
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
                    "procedure_description": "pupy adds itself to the startup folder or adds itself to the registry key software\\microsoft\\windows\\currentversion\\run for persistence.[209]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1136.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1136/001",
                    "technique_name": "create account : local account",
                    "technique_description": "adversaries may create a local account to maintain access to victim systems. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service. with a sufficient level of access, the net user /add command can be used to create a local account. on macos systems the dscl -create command can be used to create a local account. local accounts may also be added to network devices, often via common network device cli commands such as username.",
                    "procedure_description": "pupy can user powerview to execute \"net user\" commands and create local system accounts.[21]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1136.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1136/002",
                    "technique_name": "create account : domain account",
                    "technique_description": "adversaries may create a domain account to maintain access to victim systems. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover user, administrator, and service accounts. with a sufficient level of access, the net user /add /domain command can be used to create a domain account.",
                    "procedure_description": "pupy can user powerview to execute \"net user\" commands and create domain accounts.[8]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/002",
                    "technique_name": "create or modify system process : systemd service",
                    "technique_description": "adversaries may create or modify systemd services to repeatedly execute malicious payloads as part of persistence. systemd is a system and service manager commonly used for managing background daemon processes (also known as services) and other system resources. systemd is the default initialization (init) system on many linux distributions replacing legacy init systems, including sysvinit and upstart, while remaining backwards compatible.",
                    "procedure_description": "pupy can be used to establish persistence using a systemd service.[10]"
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
                    "procedure_description": "pupy can bypass windows uac through either dll hijacking, eventvwr, or apppaths.[49]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/001",
                    "technique_name": "access token manipulation : token impersonation/theft",
                    "technique_description": "adversaries may duplicate then impersonate another user's existing token to escalate privileges and bypass access controls. for example, an adversary can duplicate an existing token using duplicatetoken or duplicatetokenex. the token can then be used with impersonateloggedonuser to allow the calling thread to impersonate a logged on user's security context, or with setthreadtoken to assign the impersonated token to a thread.",
                    "procedure_description": "pupy can obtain a list of sids and provide the option for selecting process tokens to impersonate.[10]"
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
                    "procedure_description": "pupy adds itself to the startup folder or adds itself to the registry key software\\microsoft\\windows\\currentversion\\run for persistence.[209]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/002",
                    "technique_name": "create or modify system process : systemd service",
                    "technique_description": "adversaries may create or modify systemd services to repeatedly execute malicious payloads as part of persistence. systemd is a system and service manager commonly used for managing background daemon processes (also known as services) and other system resources. systemd is the default initialization (init) system on many linux distributions replacing legacy init systems, including sysvinit and upstart, while remaining backwards compatible.",
                    "procedure_description": "pupy can be used to establish persistence using a systemd service.[10]"
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
                    "procedure_description": "pupy can migrate into another process using reflective dll injection.[55]"
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
                    "procedure_description": "pupy can bypass windows uac through either dll hijacking, eventvwr, or apppaths.[49]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/001",
                    "technique_name": "access token manipulation : token impersonation/theft",
                    "technique_description": "adversaries may duplicate then impersonate another user's existing token to escalate privileges and bypass access controls. for example, an adversary can duplicate an existing token using duplicatetoken or duplicatetokenex. the token can then be used with impersonateloggedonuser to allow the calling thread to impersonate a logged on user's security context, or with setthreadtoken to assign the impersonated token to a thread.",
                    "procedure_description": "pupy can obtain a list of sids and provide the option for selecting process tokens to impersonate.[10]"
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
                    "procedure_description": "pupy has a module to clear event logs with powershell.[28]"
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
                    "procedure_description": "pupy can migrate into another process using reflective dll injection.[55]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1550.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1550/003",
                    "technique_name": "use alternate authentication material : pass the ticket",
                    "technique_description": "adversaries may \"pass the ticket\" using stolen kerberos tickets to move laterally within an environment, bypassing normal system access controls. pass the ticket (ptt) is a method of authenticating to a system using kerberos tickets without having access to an account's password. kerberos authentication can be used as the first step to lateral movement to a remote system.",
                    "procedure_description": "pupy can also perform pass-the-ticket.[12]"
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
                    "procedure_description": "pupy has a module that checks a number of indicators on the system to determine if its running on a virtual machine.[42]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1557.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1557/001",
                    "technique_name": "adversary-in-the-middle : llmnr/nbt-ns poisoning and smb relay",
                    "technique_description": "by responding to llmnr/nbt-ns network traffic, adversaries may spoof an authoritative source for name resolution to force communication with an adversary controlled system. this activity may be used to collect or relay authentication materials.",
                    "procedure_description": "pupy can sniff plaintext network credentials and use nbns spoofing to poison name services.[13]"
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
                    "procedure_description": "pupy can use lazagne for harvesting credentials.[34]"
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
                    "procedure_description": "pupy can use lazagne for harvesting credentials.[73]"
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
                    "procedure_description": "pupy uses a keylogger to capture keystrokes it then sends back to the server after it is stopped.[142]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/001",
                    "technique_name": "os credential dumping : lsass memory",
                    "technique_description": "adversaries may attempt to access credential material stored in the process memory of the local security authority subsystem service (lsass). after a user logs on, the system generates and stores a variety of credential materials in lsass process memory. these credential materials can be harvested by an administrative user or system and used to conduct lateral movement using use alternate authentication material.",
                    "procedure_description": "pupy can execute lazagne as well as mimikatz using powershell.[76]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/004",
                    "technique_name": "os credential dumping : lsa secrets",
                    "technique_description": "adversaries with system access to a host may attempt to access local security authority (lsa) secrets, which can contain a variety of different credential materials, such as credentials for service accounts. lsa secrets are stored in the registry at hkey_local_machine\\security\\policy\\secrets. lsa secrets can also be dumped from memory.",
                    "procedure_description": "pupy can use lazagne for harvesting credentials.[31]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/005",
                    "technique_name": "os credential dumping : cached domain credentials",
                    "technique_description": "adversaries may attempt to access cached domain credentials used to allow authentication to occur in the event a domain controller is unavailable.",
                    "procedure_description": "pupy can use lazagne for harvesting credentials.[16]"
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
                    "procedure_description": "pupy can use lazagne for harvesting credentials.[29]"
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
                    "procedure_description": "pupy uses powerview and pywerview to perform discovery commands such as net user, net group, net local group, etc.[38]"
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
                    "procedure_description": "pupy can walk through directories and recursively search for strings in files.[239]"
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
                    "procedure_description": "pupy has a built-in module for port scanning.[49]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1135",
                    "technique_link": "https://attack.mitre.org/techniques/T1135",
                    "technique_name": "network share discovery",
                    "technique_description": "adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for collection and to identify potential systems of interest for lateral movement. networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.",
                    "procedure_description": "pupy can list local and remote shared drives and folders over smb.[44]"
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
                    "procedure_description": "pupy can list the running processes and get the process id and parent process\u2019s id.[209]"
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
                    "procedure_description": "pupy can grab a system\u2019s information including the os version, architecture, etc.[289]"
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
                    "procedure_description": "pupy has built in commands to identify a host\u2019s ip address and find out other network configuration settings by viewing connected sessions.[184]"
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
                    "procedure_description": "pupy has a built-in utility command for netstat, can do net session through powerview, and has an interactive shell which can be used to discover additional information.[67]"
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
                    "procedure_description": "pupy can enumerate local information for linux hosts and find currently logged on users for windows hosts.[146]"
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
                    "procedure_description": "pupy has a module that checks a number of indicators on the system to determine if its running on a virtual machine.[42]"
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
                    "procedure_description": "pupy can enable/disable rdp connection and can start a remote desktop session using a browser web socket client.[44]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1550.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1550/003",
                    "technique_name": "use alternate authentication material : pass the ticket",
                    "technique_description": "adversaries may \"pass the ticket\" using stolen kerberos tickets to move laterally within an environment, bypassing normal system access controls. pass the ticket (ptt) is a method of authenticating to a system using kerberos tickets without having access to an account's password. kerberos authentication can be used as the first step to lateral movement to a remote system.",
                    "procedure_description": "pupy can also perform pass-the-ticket.[12]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1557.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1557/001",
                    "technique_name": "adversary-in-the-middle : llmnr/nbt-ns poisoning and smb relay",
                    "technique_description": "by responding to llmnr/nbt-ns network traffic, adversaries may spoof an authoritative source for name resolution to force communication with an adversary controlled system. this activity may be used to collect or relay authentication materials.",
                    "procedure_description": "pupy can sniff plaintext network credentials and use nbns spoofing to poison name services.[13]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/001",
                    "technique_name": "archive collected data : archive via utility",
                    "technique_description": "adversaries may use utilities to compress and/or encrypt collected data prior to exfiltration. many utilities include functionalities to compress, encrypt, or otherwise package data into a format that is easier/more secure to transport.",
                    "procedure_description": "pupy can compress data with zip before sending it over c2.[62]"
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
                    "procedure_description": "pupy can record sound with the microphone.[31]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1114.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1114/001",
                    "technique_name": "email collection : local email collection",
                    "technique_description": "adversaries may target user email on local systems to collect sensitive information. files containing email data can be acquired from a user\u2019s local system, such as outlook storage or cache files.",
                    "procedure_description": "pupy can interact with a victim\u2019s outlook session and look through folders and emails.[14]"
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
                    "procedure_description": "pupy uses a keylogger to capture keystrokes it then sends back to the server after it is stopped.[142]"
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
                    "procedure_description": "pupy can drop a mouse-logger that will take small screenshots around at each click and then send back to the server.[131]"
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
                    "procedure_description": "pupy can access a connected webcam and capture pictures.[35]"
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
                    "procedure_description": "pupy can communicate over http for c2.[259]"
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
                    "procedure_description": "pupy's default encryption for its c2 communication channel is ssl, but it also has transport options for rsa and aes.[44]"
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
                    "procedure_description": "pupy can upload and download to/from a victim machine.[362]"
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
                    "procedure_description": "pupy can send screenshots files, keylogger data, files, and recorded audio back to the c2 server.[103]"
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