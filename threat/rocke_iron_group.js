var threatdata = {
    "name": "Rocke, Iron Group",
    "alias": "Rocke, Iron Group",
    "category": "APT",
    "type": "-",
    "modified": "2022-12-30",
    "all_data": {
        "actor": "Rocke, Iron Group",
        "names": [
            {
                "name": "Rocke",
                "name-giver": "Talos"
            },
            {
                "name": "Iron Group",
                "name-giver": "Intezer"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Financial gain"
        ],
        "first-seen": "2018",
        "description": "(Talos) This threat actor initially came to our attention in April 2018, leveraging both Western and Chinese Git repositories to deliver malware to honeypot systems vulnerable to an Apache Struts vulnerability.\n\nIn late July, we became aware that the same actor was engaged in another similar campaign. Through our investigation into this new campaign, we were able to uncover more details about the actor.",
        "tools": [
            "Godlua",
            "Kerberods",
            "LSD",
            "Pro-Ocean",
            "Xbash",
            "several 0-day vulnerabilities"
        ],
        "operations": [
            {
                "date": "2018-04",
                "activity": "This threat actor initially came to our attention in April 2018, leveraging both Western and Chinese Git repositories to deliver malware to honeypot systems vulnerable to an Apache Struts vulnerability.\nhttps://blog.talosintelligence.com/2018/08/rocke-champion-of-monero-miners.html"
            },
            {
                "date": "2018-12",
                "activity": "By analyzing NetFlow data from December 2018 to June 16, 2019, we found that 28.1% of the cloud environments we surveyed had at least one fully established network connection with at least one known Rocke command-and-control (C2) domain. Several of those organizations maintained near daily connections. Meanwhile, 20% of the organizations maintained hourly heartbeats consistent with Rocke tactics, techniques, and procedures (TTPs).\nhttps://unit42.paloaltonetworks.com/rockein-the-netflow/"
            },
            {
                "date": "2019-01",
                "activity": "Palo Alto Networks Unit 42 recently captured and investigated new samples of the Linux coin mining malware used by the Rocke group. The family was suspected to be developed by the Iron cybercrime group and it\u2019s also associated with the Xbash malware we reported on in September of 2018. The threat actor Rocke was originally revealed by Talos in August of 2018 and many remarkable behaviors were disclosed in their blog post. The samples described in this report were collected in October of 2018, and since that time the command and control servers they use have been shut down.\nhttps://unit42.paloaltonetworks.com/malware-used-by-rocke-group-evolves-to-evade-detection-by-cloud-security-products/"
            },
            {
                "date": "2019-05",
                "activity": "{{Pacha Group}} Competing against Rocke Group for Cryptocurrency Mining Foothold on the Cloud\nhttps://www.intezer.com/blog-technical-analysis-cryptocurrency-mining-war-on-the-cloud/"
            },
            {
                "date": "2019-05",
                "activity": "Over the past month we have seen new features constantly being added to the malware. For instance, in their latest major update, they have added a function that exploits systems running the software development automation server Jenkins to increase their chance of infecting more systems, thereby generating more profits. In addition, they have also evolved their malware by adding new attack stages, as well as new redundancies in its multi-component execution to make it more dynamic and flexible.\nhttps://www.fortinet.com/blog/threat-research/rocke-variant-ready-to-box-mining-challengers.html"
            },
            {
                "date": "2019 Summer",
                "activity": "Rocke, a China-based cryptomining threat actor, has changed its Command and Control (C2) infrastructure away from Pastebin to a self-hosted solution during the summer of 2019.\nhttps://www.anomali.com/blog/illicit-cryptomining-threat-actor-rocke-changes-tactics-now-more-difficult-to-detect#When:14:00:00Z"
            },
            {
                "date": "2021-01",
                "activity": "Pro-Ocean: Rocke Group\u2019s New Cryptojacking Malware\nhttps://unit42.paloaltonetworks.com/pro-ocean-rocke-groups-new-cryptojacking-malware/"
            },
            {
                "date": "2021-04",
                "activity": "Rocke Group Actively Targeting the Cloud: Wants Your SSH Keys\nhttps://www.intezer.com/blog/cloud-security/rocke-group-actively-targeting-the-cloud-wants-your-ssh-keys/"
            }
        ],
        "information": [
            "https://redcanary.com/blog/rocke-cryptominer/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0106/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=rockegroup"
        ],
        "uuid": "bacc587d-719b-4555-bc37-db7a9455dc6a",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rocke_iron_group",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/agedlibra/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Aged Libra",
            "categories": [
                "Xbash",
                "Rocke"
            ]
        },
        {
            "data_url": "https://www.intezer.com/blog-technical-analysis-cryptocurrency-mining-war-on-the-cloud/",
            "date": "2019-05-09",
            "organization": "Intezer",
            "author": "Ignacio Sanmillan",
            "title": "Technical Analysis: Pacha Group Competing against Rocke Group for Cryptocurrency Mining Foothold on the Cloud",
            "categories": [
                "GreedyAntd",
                "Pacha Group",
                "Rocke"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/malware-used-by-rocke-group-evolves-to-evade-detection-by-cloud-security-products/",
            "date": "2019-01-17",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Xingyu Jin",
            "title": "Malware Used by \u201cRocke\u201d Group Evolves to Evade Detection by Cloud Security Products",
            "categories": [
                "Rocke"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2018/08/rocke-champion-of-monero-miners.html",
            "date": "2018-08-30",
            "organization": "Cisco Talos",
            "author": "David Liebenberg",
            "title": "Rocke: The Champion of Monero Miners",
            "categories": [
                "Rocke"
            ]
        },
        {
            "data_url": "https://www.intezer.com/iron-cybercrime-group-under-the-scope-2/",
            "date": "2018-05-29",
            "organization": "Intezer",
            "author": "Omri Ben Bassat",
            "title": "Iron Cybercrime Group Under The Scope",
            "categories": [
                "Maktub",
                "Iron Group"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "rocke",
            "procedure_code": "g0106",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0106",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1190",
                    "technique_link": "https://attack.mitre.org/techniques/T1190",
                    "technique_name": "exploit public-facing application",
                    "technique_description": "adversaries may attempt to exploit a weakness in an internet-facing host or system to initially access a network. the weakness in the system can be a software bug, a temporary glitch, or a misconfiguration.",
                    "procedure_description": "rocke exploited apache struts, oracle weblogic (cve-2017-10271), and adobe coldfusion (cve-2017-3066) vulnerabilities to deliver malware.[51][52]"
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
                    "procedure_description": "rocke used shell scripts to run commands which would obtain persistence and execute the cryptocurrency mining malware.[38]"
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
                    "procedure_description": "rocke has used python-based malware to install and spread their coinminer.[38]"
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
                    "procedure_description": "rocke installed a cron job that downloaded and executed files from the c2.[11][12][13]"
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
                    "procedure_description": "rocke's miner has created upx-packed files in the windows start menu folder.[225]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1037",
                    "technique_link": "https://attack.mitre.org/techniques/T1037",
                    "technique_name": "boot or logon initialization scripts",
                    "technique_description": "adversaries may use scripts automatically executed at boot or logon initialization to establish persistence. initialization scripts can be used to perform administrative functions, which may often execute other programs or send information to an internal logging server. these scripts can vary based on operating system and whether applied locally or remotely.",
                    "procedure_description": "rocke has installed an \"init.d\" startup script to maintain persistence.[1]"
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
                    "procedure_description": "rocke has installed a systemd service script to maintain persistence.[4]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/006",
                    "technique_name": "hijack execution flow : dynamic linker hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking environment variables the dynamic linker uses to load shared libraries. during the execution preparation phase of a program, the dynamic linker loads specified absolute paths of shared libraries from environment variables and files, such as ld_preload on linux or dyld_insert_libraries on macos. libraries specified in environment variables are loaded first, taking precedence over system libraries with the same function name. these variables are often used by developers to debug binaries without needing to recompile, deconflict mapped symbols, and implement custom functions without changing the original library.",
                    "procedure_description": "rocke has modified /etc/ld.so.preload to hook libc functions in order to hide the installed dropper and mining software in process lists.[16]"
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
                    "procedure_description": "rocke installed a cron job that downloaded and executed files from the c2.[11][12][13]"
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
                    "procedure_description": "rocke's miner has created upx-packed files in the windows start menu folder.[225]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1037",
                    "technique_link": "https://attack.mitre.org/techniques/T1037",
                    "technique_name": "boot or logon initialization scripts",
                    "technique_description": "adversaries may use scripts automatically executed at boot or logon initialization to establish persistence. initialization scripts can be used to perform administrative functions, which may often execute other programs or send information to an internal logging server. these scripts can vary based on operating system and whether applied locally or remotely.",
                    "procedure_description": "rocke has installed an \"init.d\" startup script to maintain persistence.[1]"
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
                    "procedure_description": "rocke has installed a systemd service script to maintain persistence.[4]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/006",
                    "technique_name": "hijack execution flow : dynamic linker hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking environment variables the dynamic linker uses to load shared libraries. during the execution preparation phase of a program, the dynamic linker loads specified absolute paths of shared libraries from environment variables and files, such as ld_preload on linux or dyld_insert_libraries on macos. libraries specified in environment variables are loaded first, taking precedence over system libraries with the same function name. these variables are often used by developers to debug binaries without needing to recompile, deconflict mapped symbols, and implement custom functions without changing the original library.",
                    "procedure_description": "rocke has modified /etc/ld.so.preload to hook libc functions in order to hide the installed dropper and mining software in process lists.[16]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/002",
                    "technique_name": "process injection : portable executable injection",
                    "technique_description": "adversaries may inject portable executables (pe) into processes in order to evade process-based defenses as well as possibly elevate privileges. pe injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "rocke's miner, \"termshost.exe\", evaded defenses by injecting itself into windows processes, including notepad.exe.[7]"
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
                    "procedure_description": "rocke installed a cron job that downloaded and executed files from the c2.[11][12][13]"
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
                    "procedure_description": "rocke has extracted tar.gz files after downloading them from a c2 server.[199]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1222.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1222/002",
                    "technique_name": "file and directory permissions modification : linux and mac file and directory permissions modification",
                    "technique_description": "adversaries may modify file or directory permissions/attributes to evade access control lists (acls) and access protected files. file and directory permissions are commonly managed by acls configured by the file or directory owner, or users with the appropriate permissions. file and directory acl implementations vary by platform, but generally explicitly designate which users or groups can perform which actions (read, write, execute, etc.).",
                    "procedure_description": "rocke has changed file permissions of files so they could not be modified.[13]"
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
                    "procedure_description": "rocke downloaded a file \"libprocesshider\", which could hide files on the target system.[43][44]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/006",
                    "technique_name": "hijack execution flow : dynamic linker hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking environment variables the dynamic linker uses to load shared libraries. during the execution preparation phase of a program, the dynamic linker loads specified absolute paths of shared libraries from environment variables and files, such as ld_preload on linux or dyld_insert_libraries on macos. libraries specified in environment variables are loaded first, taking precedence over system libraries with the same function name. these variables are often used by developers to debug binaries without needing to recompile, deconflict mapped symbols, and implement custom functions without changing the original library.",
                    "procedure_description": "rocke has modified /etc/ld.so.preload to hook libc functions in order to hide the installed dropper and mining software in process lists.[16]"
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
                    "procedure_description": "rocke used scripts which detected and uninstalled antivirus software.[77][78]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/004",
                    "technique_name": "impair defenses : disable or modify system firewall",
                    "technique_description": "adversaries may disable or modify system firewalls in order to bypass controls limiting network usage. changes could be disabling the entire mechanism as well as adding, deleting, or modifying particular rules. this can be done numerous ways depending on the operating system, including via command-line, editing windows registry keys, and windows control panel.",
                    "procedure_description": "rocke used scripts which killed processes and added firewall rules to block traffic related to other cryptominers.[33]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/002",
                    "technique_name": "indicator removal : clear linux or mac system logs",
                    "technique_description": "adversaries may clear system logs to hide evidence of an intrusion. macos and linux both keep track of system or user-initiated actions via system logs. the majority of native system logging is stored under the /var/log/ directory. subfolders in this directory categorize logs by their related functions, such as:",
                    "procedure_description": "rocke has cleared log files within the /var/log/ folder.[4]"
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
                    "procedure_description": "rocke has deleted files on infected machines.[203]"
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
                    "procedure_description": "rocke has changed the time stamp of certain files.[46]"
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
                    "procedure_description": "rocke has used shell scripts which download mining executables and saves them with the filename \"java\".[142]"
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
                    "procedure_description": "rocke has modified upx headers after packing files to break unpackers.[281]"
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
                    "procedure_description": "rocke's miner has created upx-packed files in the windows start menu folder.[71][72][73]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/004",
                    "technique_name": "obfuscated files or information : compile after delivery",
                    "technique_description": "adversaries may attempt to make payloads difficult to discover and analyze by delivering files to victims as uncompiled code. text-based source code files may subvert analysis and scrutiny from protections targeting executables/binaries. these payloads will need to be compiled before execution; typically via native utilities such as csc.exe or gcc/mingw.",
                    "procedure_description": "rocke has compiled malware, delivered to victims as .c files, with the gnu compiler collection (gcc).[8]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/002",
                    "technique_name": "process injection : portable executable injection",
                    "technique_description": "adversaries may inject portable executables (pe) into processes in order to evade process-based defenses as well as possibly elevate privileges. pe injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "rocke's miner, \"termshost.exe\", evaded defenses by injecting itself into windows processes, including notepad.exe.[7]"
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
                    "procedure_description": "rocke has modified /etc/ld.so.preload to hook libc functions in order to hide the installed dropper and mining software in process lists.[22]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1552.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1552/004",
                    "technique_name": "unsecured credentials : private keys",
                    "technique_description": "adversaries may search for private key certificate files on compromised systems for insecurely stored credentials. private cryptographic keys and certificates are used for authentication, encryption/decryption, and digital signatures. common key and certificate file extensions include: .key, .pgp, .gpg, .ppk., .p12, .pem, .pfx, .cer, .p7b, .asc.",
                    "procedure_description": "rocke has used ssh private keys on the infected machine to spread its coinminer throughout a network.[18]"
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
                    "procedure_description": "rocke conducted scanning for exposed tcp port 7001 as well as ssh and redis servers.[54][55]"
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
                    "procedure_description": "rocke can detect a running process's pid on the infected machine.[217]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "rocke has looked for ip addresses in the known_hosts file on the infected system and attempted to ssh into them.[76]"
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
                    "procedure_description": "rocke used scripts which detected and uninstalled antivirus software.[86][87]"
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
                    "procedure_description": "rocke has used uname -m to collect the name and information about the infected system's kernel.[312]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/004",
                    "technique_name": "remote services : ssh",
                    "technique_description": "adversaries may use valid accounts to log into remote machines using secure shell (ssh). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "rocke has spread its coinminer via ssh.[14]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071",
                    "technique_link": "https://attack.mitre.org/techniques/T1071",
                    "technique_name": "application layer protocol",
                    "technique_description": "adversaries may communicate using osi application layer protocols to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "rocke issued wget requests from infected systems to the c2.[11]"
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
                    "procedure_description": "rocke has executed wget and curl commands to pastebin over the https protocol.[288]"
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
                    "procedure_description": "rocke used malware to download additional malicious files to the target system.[386]"
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
                    "procedure_description": "rocke's miner connects to a c2 server using port 51640.[32]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102",
                    "technique_link": "https://attack.mitre.org/techniques/T1102",
                    "technique_name": "web service",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for relaying data to/from a compromised system. popular websites and social media acting as a mechanism for c2 may give a significant amount of cover due to the likelihood that hosts within a network are already communicating with them prior to a compromise. using common services, such as those offered by google or twitter, makes it easier for adversaries to hide in expected noise. web service providers commonly use ssl/tls encryption, giving adversaries an added level of protection.",
                    "procedure_description": "rocke has used pastebin, gitee, and gitlab for command and control.[29][30]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/001",
                    "technique_name": "web service : dead drop resolver",
                    "technique_description": "adversaries may use an existing, legitimate external web service to host information that points to additional command and control (c2) infrastructure. adversaries may post content, known as a dead drop resolver, on web services with embedded (and often obfuscated/encoded) domains or ip addresses. once infected, victims will reach out to and be redirected by these resolvers.",
                    "procedure_description": "rocke has used pastebin to check the version of beaconing malware and redirect to another pastebin hosting updated malware.[17]"
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
                    "procedure_description": "rocke has distributed cryptomining malware.[16][17]"
                }
            ]
        }
    ]
};