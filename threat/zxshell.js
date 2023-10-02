var threatdata = {
    "name": "ZXShell",
    "alias": "ZXShell, Sensocode",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Exfiltration, Tunneling, DDoS",
    "modified": "2023-05-15",
    "all_data": {
        "tool": "ZXShell",
        "names": [
            {
                "name": "ZXShell"
            },
            {
                "name": "Sensocode"
            }
        ],
        "description": "(FireEye) ZXSHELL is a backdoor that can be downloaded from the internet, particularly Chinese hacker websites. The backdoor can launch port scans, run a keylogger, capture screenshots, set up an HTTP or SOCKS proxy, launch a reverse command shell, cause SYN floods, and transfer/delete/run files. The publicly available version of the tool provides a graphical user interface that malicious actors can use to interact with victim backdoors. Simplified Chinese is the language used for the bundled ZXSHELL documentation.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Exfiltration",
            "Tunneling",
            "DDoS"
        ],
        "information": [
            "https://paper.bobylive.com/Security/APT_Report/APT-41.pdf",
            "https://github.com/smb01/zxshell",
            "https://blogs.cisco.com/security/talos/opening-zxshell"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0412/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.zxshell"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:zxshell"
        ],
        "uuid": "b63bf358-4d19-4729-b6bb-dfd6588f44e0",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "zxshell",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/lancefly-merdoor-zxshell-custom-backdoor",
            "date": "2023-05-15",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Lancefly: Group Uses Custom Backdoor to Target Orgs in Government, Aviation, Other Sectors",
            "categories": [
                "Merdoor",
                "PlugX",
                "ShadowPad",
                "ZXShell"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/iron-taurus/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Iron Taurus",
            "categories": [
                "CHINACHOPPER",
                "Ghost RAT",
                "Wonknu",
                "ZXShell",
                "APT27"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/K1uBLGqD8kgsIp1yTyYBfw",
            "date": "2022-05-09",
            "organization": "Qianxin Threat Intelligence Center",
            "author": "Red Raindrops Team",
            "title": "Operation EviLoong: An electronic party of \"borderless\" hackers",
            "categories": [
                "ZXShell"
            ]
        },
        {
            "data_url": "https://risky.biz/whatiswinnti/",
            "date": "2020-07-20",
            "organization": "Risky.biz",
            "author": "Daniel Gordon",
            "title": "What even is Winnti?",
            "categories": [
                "CCleaner Backdoor",
                "Ghost RAT",
                "PlugX",
                "ZXShell"
            ]
        },
        {
            "data_url": "https://www.blackberry.com/us/en/pdfviewer?file=/content/dam/blackberry-com/asset/enterprise/pdf/direct/report-bb-decade-of-the-rats.pdf",
            "date": "2020-04-07",
            "organization": "Blackberry",
            "author": "Blackberry Research",
            "title": "Decade of the RATS: Cross-Platform APT Espionage Attacks Targeting Linux, Windows and Android",
            "categories": [
                "Penquin Turla",
                "XOR DDoS",
                "ZXShell"
            ]
        },
        {
            "data_url": "https://lab52.io/blog/apt27-rootkit-updates/",
            "date": "2020-01-13",
            "organization": "Lab52",
            "author": "Jagaimo Kawaii",
            "title": "APT27 ZxShell RootKit module updates",
            "categories": [
                "ZXShell"
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
            "data_url": "https://meltx0r.github.io/tech/2019/09/19/emissary-panda-apt.html",
            "date": "2019-09-19",
            "organization": "",
            "author": "MeltX0R",
            "title": "Emissary Panda APT: Recent infrastructure and RAT analysis",
            "categories": [
                "ZXShell"
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
            "data_url": "https://www.virusbulletin.com/uploads/pdf/conference_slides/2019/VB2019-GuPan.pdf",
            "date": "2019",
            "organization": "Virus Bulletin",
            "author": "Lion Gu",
            "title": "A vine climbing over the Great Firewall: A long-term attack against China",
            "categories": [
                "Poison Ivy",
                "ZXShell"
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
            "data_url": "https://github.com/smb01/zxshell",
            "date": "2016-10-28",
            "organization": "Github (smb01)",
            "author": "smb01",
            "title": "zxshell repository",
            "categories": [
                "ZXShell"
            ]
        },
        {
            "data_url": "https://blogs.cisco.com/security/talos/opening-zxshell",
            "date": "2014-10-28",
            "organization": "Cisco",
            "author": "Andrea Allievi",
            "title": "Threat Spotlight: Group 72, Opening the ZxShell",
            "categories": [
                "ZXShell"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "zxshell",
            "procedure_code": "s0412",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0412",
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
                    "procedure_description": "zxshell has been dropped through exploitation of cve-2011-2462, cve-2013-3163, and cve-2014-0322.[60]"
                },
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
                    "procedure_description": "zxshell can launch a reverse command shell.[25][359][360]"
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
                    "procedure_description": "zxshell can leverage native api including registerservicectrlhandler  to register a service.registerservicectrlhandler"
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
                    "procedure_description": "zxshell can create a new service for execution.[70]"
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
                    "procedure_description": "zxshell has a feature to create local user accounts.[25]"
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
                    "procedure_description": "zxshell can create a new service using the service parser function processsccommand.[143]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/002",
                    "technique_name": "access token manipulation : create process with token",
                    "technique_description": "adversaries may create a new process with an existing token to escalate privileges and bypass access controls. processes can be created with the token and resulting security context of another user using features such as createprocesswithtokenw and runas.",
                    "procedure_description": "zxshell has a command called runas, which creates a new process as another user or process context.[15]"
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
                    "procedure_description": "zxshell can create a new service using the service parser function processsccommand.[143]"
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
                    "procedure_description": "zxshell is injected into a shared svchost process.[77]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/002",
                    "technique_name": "access token manipulation : create process with token",
                    "technique_description": "adversaries may create a new process with an existing token to escalate privileges and bypass access controls. processes can be created with the token and resulting security context of another user using features such as createprocesswithtokenw and runas.",
                    "procedure_description": "zxshell has a command called runas, which creates a new process as another user or process context.[15]"
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
                    "procedure_description": "zxshell can kill av products' processes.[100]"
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
                    "procedure_description": "zxshell can disable the firewall by modifying the registry key hklm\\system\\currentcontrolset\\services\\sharedaccess\\parameters\\firewallpolicy\\standardprofile.[37]"
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
                    "procedure_description": "zxshell has a command to clear system event logs.[32]"
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
                    "procedure_description": "zxshell can delete files from the system.[14][263]"
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
                    "procedure_description": "zxshell can create registry entries to enable services to run.[182]"
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
                    "procedure_description": "zxshell is injected into a shared svchost process.[77]"
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
                    "procedure_description": "zxshell has used rundll32.exe to execute other dlls and named pipes.[102]"
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
                    "procedure_description": "zxshell has a feature to capture a remote computer's keystrokes using a keylogger.[21][184]"
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
                    "procedure_description": "zxshell hooks several api functions to spawn system threads.[17]"
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
                    "procedure_description": "zxshell has a command to open a file manager and explorer on the system.[341]"
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
                    "procedure_description": "zxshell can launch port scans.[7][69]"
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
                    "procedure_description": "zxshell has a command, ps, to obtain a listing of processes on the system.[283]"
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
                    "procedure_description": "zxshell can query the netsvc group value data located in the svchost group registry key.[108]"
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
                    "procedure_description": "zxshell can collect the local hostname, operating system details, cpu speed, and total physical memory.[415]"
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
                    "procedure_description": "zxshell can collect the owner and organization information from the target workstation.[208]"
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
                    "procedure_description": "zxshell can check the services on the system.[61]"
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
                    "procedure_description": "zxshell has remote desktop functionality.[59]"
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
                    "procedure_description": "zxshell supports functionality for vnc sessions.[22]"
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
                    "procedure_description": "zxshell can transfer files from a compromised host.[200]"
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
                    "procedure_description": "zxshell has a feature to capture a remote computer's keystrokes using a keylogger.[21][184]"
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
                    "procedure_description": "zxshell hooks several api functions to spawn system threads.[17]"
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
                    "procedure_description": "zxshell can capture screenshots.[188]"
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
                    "procedure_description": "zxshell has a command to perform video device spying.[49]"
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
                    "procedure_description": "zxshell has used http for c2 connections.[385]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/002",
                    "technique_name": "application layer protocol : file transfer protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with transferring files to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "zxshell has used ftp for c2 connections.[18]"
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
                    "procedure_description": "zxshell has a command to transfer files from a remote host.[492]"
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
                    "procedure_description": "zxshell can use ports 1985 and 1986 in http/s communication.[47]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090",
                    "technique_link": "https://attack.mitre.org/techniques/T1090",
                    "technique_name": "proxy",
                    "technique_description": "adversaries may use a connection proxy to direct network traffic between systems or act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, reduce the number of simultaneous outbound network connections, provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between victims to avoid suspicion. adversaries may chain together multiple proxies to further disguise the source of malicious traffic.",
                    "procedure_description": "zxshell can set up an http or socks proxy.[2][54]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1499",
                    "technique_link": "https://attack.mitre.org/techniques/T1499",
                    "technique_name": "endpoint denial of service",
                    "technique_description": "adversaries may perform endpoint denial of service (dos) attacks to degrade or block the availability of services to users. endpoint dos can be performed by exhausting the system resources those services are hosted on or exploiting the system to cause a persistent crash condition. example services include websites, email services, dns, and web-based applications. adversaries have been observed conducting dos attacks for political purposes and to support other malicious activities, including distraction, hacktivism, and extortion.",
                    "procedure_description": "zxshell has a feature to perform syn flood attack on a host.[8][9]"
                }
            ]
        }
    ]
};