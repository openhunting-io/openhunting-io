var threatdata = {
    "name": "TURNEDUP",
    "alias": "TURNEDUP, Notestuk",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "TURNEDUP",
        "names": [
            {
                "name": "TURNEDUP"
            },
            {
                "name": "Notestuk"
            }
        ],
        "description": "(FireEye) Backdoor capable of uploading and downloading files, creating a reverse shell, taking screenshots, and gathering system information.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2017/09/apt33-insights-into-iranian-cyber-espionage.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0199/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.turnedup"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:TURNEDUP"
        ],
        "uuid": "4744b55e-408f-4645-84ff-f48030166fd6",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "turnedup",
    "analysis": null,
    "articles": [
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
            "data_url": "https://www.cyberbit.com/new-early-bird-code-injection-technique-discovered/",
            "date": "2018-04-11",
            "organization": "Cyberbit",
            "author": "Hod Gavriel",
            "title": "New \u2018Early Bird\u2019 Code Injection Technique Discovered",
            "categories": [
                "TURNEDUP"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/09/apt33-insights-into-iranian-cyber-espionage.html",
            "date": "2017-09-20",
            "organization": "FireEye",
            "author": "Jacqueline O\u2019Leary",
            "title": "Insights into Iranian Cyber Espionage: APT33 Targets Aerospace and Energy Sectors and has Ties to Destructive Malware",
            "categories": [
                "DROPSHOT",
                "Nanocore RAT",
                "NetWire RC",
                "SHAPESHIFT",
                "TURNEDUP",
                "APT33"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "turnedup",
            "procedure_code": "s0199",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0199",
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
                    "procedure_description": "turnedup is capable of creating a reverse shell.[341]"
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
                    "procedure_description": "turnedup is capable of writing to a registry run key to establish.[269]"
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
                    "procedure_description": "turnedup is capable of writing to a registry run key to establish.[269]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/004",
                    "technique_name": "process injection : asynchronous procedure call",
                    "technique_description": "adversaries may inject malicious code into processes via the asynchronous procedure call (apc) queue in order to evade process-based defenses as well as possibly elevate privileges. apc injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "turnedup is capable of injecting code into the apc queue of a created rundll32 process as part of an \"early bird injection.\"[2]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/004",
                    "technique_name": "process injection : asynchronous procedure call",
                    "technique_description": "adversaries may inject malicious code into processes via the asynchronous procedure call (apc) queue in order to evade process-based defenses as well as possibly elevate privileges. apc injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "turnedup is capable of injecting code into the apc queue of a created rundll32 process as part of an \"early bird injection.\"[2]"
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
                    "procedure_description": "turnedup is capable of gathering system information.[381]"
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
                    "procedure_description": "turnedup is capable of taking screenshots.[172]"
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
                    "procedure_description": "turnedup is capable of downloading additional files.[453]"
                }
            ]
        }
    ]
};