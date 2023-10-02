var threatdata = {
    "name": "HTran",
    "alias": "HTran, HUC Packet Transmit Tool",
    "category": "Tools",
    "type": "Tunneling",
    "modified": "2021-09-03",
    "all_data": {
        "tool": "HTran",
        "names": [
            {
                "name": "HTran"
            },
            {
                "name": "HUC Packet Transmit Tool"
            }
        ],
        "description": "HTRAN is a tool that proxies connections through intermediate hops and aids users in disguising their true geographical location. It can be used by adversaries to hide their location when interacting with the victim networks.",
        "category": "Tools",
        "type": [
            "Tunneling"
        ],
        "information": [
            "https://github.com/HiwinCN/HTran",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/in-depth-look-apt-attack-tools-of-the-trade/",
            "https://www.secureworks.com/research/htran"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0040/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.htran"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:HTran"
        ],
        "uuid": "d48a7428-6615-44e8-bdb5-b8b5615e039d",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "htran",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2021/09/proxyshell-exploiting-microsoft-exchange-servers.html",
            "date": "2021-09-03",
            "organization": "FireEye",
            "author": "Adrian Sanchez Hernandez",
            "title": "PST, Want a Shell? ProxyShell Exploiting Microsoft Exchange Servers",
            "categories": [
                "CHINACHOPPER",
                "HTran"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/05/21/no-game-over-winnti-group/",
            "date": "2020-05-21",
            "organization": "ESET Research",
            "author": "Mathieu Tartare",
            "title": "No \u201cGame over\u201d for the Winnti Group",
            "categories": [
                "ACEHASH",
                "HTran",
                "MimiKatz",
                "PipeMon"
            ]
        },
        {
            "data_url": "https://lab52.io/blog/the-energy-reserves-in-the-eastern-mediterranean-sea-and-a-malicious-campaign-of-apt10-against-turkey/",
            "date": "2020-05-14",
            "organization": "Lab52",
            "author": "Dex",
            "title": "The energy reserves in the Eastern Mediterranean Sea and a malicious campaign of APT10 against Turkey",
            "categories": [
                "Cobalt Strike",
                "HTran",
                "MimiKatz",
                "PlugX",
                "Quasar RAT"
            ]
        },
        {
            "data_url": "https://adeo.com.tr/wp-content/uploads/2020/02/APT10_Report.pdf",
            "date": "2020-02-21",
            "organization": "ADEO DFIR",
            "author": "ADEO DFIR",
            "title": "APT10 Threat Analysis Report",
            "categories": [
                "CHINACHOPPER",
                "HTran",
                "MimiKatz",
                "PlugX",
                "Quasar RAT"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-mayfair",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE MAYFAIR",
            "categories": [
                "HTran",
                "pirpi",
                "APT3"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-atlas",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE ATLAS",
            "categories": [
                "Speculoos",
                "Winnti",
                "ACEHASH",
                "CCleaner Backdoor",
                "CHINACHOPPER",
                "Empire Downloader",
                "HTran",
                "MimiKatz",
                "PlugX",
                "Winnti",
                "APT41"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2019/12/12/gallium-targeting-global-telecom/",
            "date": "2019-12-12",
            "organization": "Microsoft",
            "author": "Microsoft Threat Intelligence Center",
            "title": "GALLIUM: Targeting global telecom",
            "categories": [
                "CHINACHOPPER",
                "Ghost RAT",
                "HTran",
                "MimiKatz",
                "Poison Ivy",
                "GALLIUM"
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
            "data_url": "https://www.cybereason.com/blog/operation-soft-cell-a-worldwide-campaign-against-telecommunications-providers",
            "date": "2019-06-25",
            "organization": "Cybereason",
            "author": "Cybereason Nocturnus",
            "title": "OPERATION SOFT CELL: A WORLDWIDE CAMPAIGN AGAINST TELECOMMUNICATIONS PROVIDERS",
            "categories": [
                "CHINACHOPPER",
                "HTran",
                "MimiKatz",
                "Poison Ivy",
                "Operation Soft Cell"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/in-depth-look-apt-attack-tools-of-the-trade/",
            "date": "2013-03-04",
            "organization": "Trend Micro",
            "author": "Kyle Wilhoit",
            "title": "In-Depth Look: APT Attack Tools of the Trade",
            "categories": [
                "HTran"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/htran",
            "date": "2011-08-03",
            "organization": "Secureworks",
            "author": "Joe Stewart",
            "title": "HTran and the Advanced Persistent Threat",
            "categories": [
                "HTran"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "htran",
            "procedure_code": "s0040",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0040",
            "techniques": [
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
                    "procedure_description": "htran can inject into into running processes.[28]"
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
                    "procedure_description": "htran can inject into into running processes.[28]"
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
                    "procedure_description": "htran can install a rootkit to hide network connections from the host os.[19]"
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
                    "procedure_description": "htran can proxy tcp socket connections to obfuscate command and control infrastructure.[22][23]"
                }
            ]
        }
    ]
};