var threatdata = {
    "name": "Naikon",
    "alias": "Naikon, XsFunction, Sacto",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Naikon",
        "names": [
            {
                "name": "Naikon"
            },
            {
                "name": "XsFunction"
            },
            {
                "name": "Sacto"
            }
        ],
        "description": "(Kaspersky) The Naikon tool of choice generates a special, small, encrypted file which is 8,000 bytes in size, containing code to be injected into the browser along with configuration data. With the help of a start-up module, this whole file is injected into the browser memory and decrypts the configuration block containing the following:\n\n\u2022 C&C server\n\u2022 Ports and path to the server\n\u2022 User-agent string\n\u2022 Filenames and paths to its components\n\u2022 Hash sums of the user API functions\n\nThe same code then downloads its main body from the C&C server using the SSL protocol, loads it independently from the operating system functions and, without saving it to the hard drive, hands over control to the XS02 function. All functionality is handled in memory.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://securelist.com/the-naikon-apt/69953/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.naikon"
        ],
        "uuid": "52cf9ec4-416a-49b4-9d0c-ade91208018e",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "naikon",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/resources/insights/apt-groups",
            "date": "2022-08-04",
            "organization": "Mandiant",
            "author": "Mandiant",
            "title": "Advanced Persistent Threats (APTs)",
            "categories": [
                "APT1",
                "APT10",
                "APT12",
                "APT14",
                "APT15",
                "APT16",
                "APT17",
                "APT18",
                "APT19",
                "APT2",
                "APT20",
                "APT21",
                "APT22",
                "APT23",
                "APT24",
                "APT27",
                "APT3",
                "APT30",
                "APT31",
                "APT4",
                "APT40",
                "APT5",
                "APT9",
                "Naikon"
            ]
        },
        {
            "data_url": "https://cyware.com/news/chinese-naikon-group-back-with-new-espionage-attack-66a8413d",
            "date": "2022-05-04",
            "organization": "Cyware",
            "author": "Cyware",
            "title": "Chinese Naikon Group Back with New Espionage Attack",
            "categories": [
                "APT30",
                "Naikon"
            ]
        },
        {
            "data_url": "https://cluster25.io/2022/04/29/lotus-panda-awake-last-strike/",
            "date": "2022-04-29",
            "organization": "Cluster25",
            "author": "Cluster25",
            "title": "The LOTUS PANDA Is Awake, Again. Analysis Of Its Last Strike.",
            "categories": [
                "APT30",
                "Naikon"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-geneva",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE GENEVA",
            "categories": [
                "backspace",
                "APT30",
                "Naikon"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/content/dam/fireeye-www/summit/cds-2019/presentations/cds19-executive-s08-achievement-unlocked.pdf",
            "date": "2019-11-19",
            "organization": "FireEye",
            "author": "Nalani Fraser",
            "title": "Achievement Unlocked: Chinese Cyber Espionage Evolves to Support Higher Level Missions",
            "categories": [
                "APT1",
                "APT10",
                "APT2",
                "APT26",
                "APT3",
                "APT30",
                "APT41",
                "Naikon",
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0019/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: Naikon",
            "categories": [
                "APT30",
                "Naikon"
            ]
        },
        {
            "data_url": "https://usa.kaspersky.com/resource-center/threats/naikon-targeted-attacks",
            "date": "2017-08-24",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky",
            "title": "Naikon Targeted Attacks",
            "categories": [
                "APT30",
                "Naikon"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07205555/TheNaikonAPT-MsnMM1.pdf",
            "date": "2015-05-29",
            "organization": "Kaspersky Labs",
            "author": "Kurt Baumgartner",
            "title": "THE MsnMM CAMPAIGNS: The Earliest Naikon APT Campaigns",
            "categories": [
                "APT30",
                "Naikon"
            ]
        },
        {
            "data_url": "https://securelist.com/analysis/publications/69953/the-naikon-apt/",
            "date": "2015-05-14",
            "organization": "Kaspersky Labs",
            "author": "Kurt Baumgartner",
            "title": "The Naikon APT",
            "categories": [
                "Naikon",
                "SslMM",
                "Sys10",
                "WinMM",
                "xsPlus",
                "APT30",
                "Naikon"
            ]
        },
        {
            "data_url": "https://www2.fireeye.com/rs/fireye/images/rpt-apt30.pdf",
            "date": "2015-04",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "APT30 AND THE MECHANICS OF A LONG-RUNNING CYBER ESPIONAGE OPERATION",
            "categories": [
                "BACKBEND",
                "backspace",
                "CREAMSICLE",
                "FLASHFLOOD",
                "GEMCUTTER",
                "MILKMAID",
                "Naikon",
                "NETEAGLE",
                "ORANGEADE",
                "SHIPSHAPE",
                "SPACESHIP",
                "SslMM",
                "Sys10",
                "WinMM",
                "xsPlus",
                "APT30"
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
            "data_url": "https://threatconnect.com/blog/tag/naikon/",
            "date": "2015",
            "organization": "ThreatConnect",
            "author": "ThreatConnect",
            "title": "Naikon Tag in ThreatConnect Blogs",
            "categories": [
                "APT30",
                "Naikon"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2014/03/spear-phishing-the-news-cycle-apt-actors-leverage-interest-in-the-disappearance-of-malaysian-flight-mh-370.html",
            "date": "2014-03-25",
            "organization": "FireEye",
            "author": "Alex Lanstein",
            "title": "Spear Phishing the News Cycle: APT Actors Leverage Interest in the Disappearance of Malaysian Flight MH 370",
            "categories": [
                "APT30",
                "Naikon"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20210925164035/https://blog.trendmicro.com/trendlabs-security-intelligence/bkdr_rarstone-new-rat-to-watch-out-for/",
            "date": "2013-02-27",
            "organization": "Trend Micro",
            "author": "Abraham Camba",
            "title": "BKDR_RARSTONE: New RAT to Watch Out For",
            "categories": [
                "PlugX",
                "Naikon"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "naikon",
            "procedure_code": "g0019",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0019",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/001",
                    "technique_name": "phishing : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. spearphishing attachment is a specific variant of spearphishing. spearphishing attachment is different from other forms of spearphishing in that it employs the use of malware attached to an email. all forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. in this scenario, adversaries attach a file to the spearphishing email and usually rely upon user execution to gain execution. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "naikon has used malicious e-mail attachments to deliver malware.[161]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "naikon has used administrator credentials for lateral movement in compromised networks.[11]"
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
                    "procedure_description": "naikon has used schtasks.exe for lateral movement in compromised networks.[116]"
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
                    "procedure_description": "naikon has convinced victims to open malicious attachments to execute malware.[166]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "naikon has used wmic.exe for lateral movement.[89]"
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
                    "procedure_description": "naikon has modified a victim's windows run registry to establish persistence.[174]"
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
                    "procedure_description": "naikon has used dll side-loading to load malicious dll's into legitimate executables.[47]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1137.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1137/006",
                    "technique_name": "office application startup : add-ins",
                    "technique_description": "adversaries may abuse microsoft office add-ins to obtain persistence on a compromised system. office add-ins can be used to add functionality to office programs.  there are different types of add-ins that can be used by the various office products; including word/excel add-in libraries (wll/xll), vba add-ins, office component object model (com) add-ins, automation add-ins, vba editor (vbe), visual studio tools for office (vsto) add-ins, and outlook add-ins.",
                    "procedure_description": "naikon has used the royalroad exploit builder to drop a second stage loader, intel.wll, into the word startup folder on the compromised host.[5]"
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
                    "procedure_description": "naikon has used schtasks.exe for lateral movement in compromised networks.[116]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "naikon has used administrator credentials for lateral movement in compromised networks.[11]"
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
                    "procedure_description": "naikon has modified a victim's windows run registry to establish persistence.[174]"
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
                    "procedure_description": "naikon has used dll side-loading to load malicious dll's into legitimate executables.[47]"
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
                    "procedure_description": "naikon has used schtasks.exe for lateral movement in compromised networks.[116]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "naikon has used administrator credentials for lateral movement in compromised networks.[11]"
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
                    "procedure_description": "naikon has used dll side-loading to load malicious dll's into legitimate executables.[47]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/004",
                    "technique_name": "masquerading : masquerade task or service",
                    "technique_description": "adversaries may attempt to manipulate the name of a task or service to make it appear legitimate or benign. tasks/services executed by the task scheduler or systemd will typically be given a name and/or description. windows services will have a service name as well as a display name. many benign tasks and services exist that have commonly associated names. adversaries may give tasks or services names that are similar or identical to those of legitimate ones.",
                    "procedure_description": "naikon renamed a malicious service taskmgr to appear to be a legitimate version of task manager.[49]"
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
                    "procedure_description": "naikon has disguised malicious programs as google chrome, adobe, and vmware executables.[106]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "naikon has used administrator credentials for lateral movement in compromised networks.[11]"
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
                    "procedure_description": "naikon has used the ladongo scanner to scan target networks.[41]"
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
                    "procedure_description": "naikon has used a netbios scanner for remote machine identification.[59]"
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
                    "procedure_description": "naikon uses commands such as netsh advfirewall firewall to discover local firewall settings.[70]"
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
                    "procedure_description": "naikon uses commands such as netsh interface show to discover network interface settings.[151]"
                }
            ]
        }
    ]
};