var threatdata = {
    "name": "TDTESS",
    "alias": "TDTESS",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Downloader",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "TDTESS",
        "names": [
            {
                "name": "TDTESS"
            }
        ],
        "description": "(ClearSky) TDTESS is 64-bit .NET binary backdoor that provides a reverse shell with an option to download and execute files. It routinely calls in to the command and control server for new instructions using basic authentication. Commands are sent via a web page. The malware creates a stealth service, which will not show on the service manager or other tools that enumerate services from WINAPI or Windows Management Instrumentation.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://www.clearskysec.com/wp-content/uploads/2017/07/Operation_Wilted_Tulip.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0164/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tdtess"
        ],
        "uuid": "c5b4a58f-1972-434b-bc58-b018be0f8276",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tdtess",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://www.clearskysec.com/tulip/",
            "date": "2017-07-25",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "Operation Wilted Tulip \u2013 Exposing a Cyber Espionage Apparatus",
            "categories": [
                "Matryoshka RAT",
                "TDTESS",
                "CopyKittens"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "tdtess",
            "procedure_code": "s0164",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0164",
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
                    "procedure_description": "tdtess provides a reverse shell on the victim.[326]"
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
                    "procedure_description": "if running as administrator, tdtess installs itself as a new service named bmwappushservice to establish persistence.[118]"
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
                    "procedure_description": "if running as administrator, tdtess installs itself as a new service named bmwappushservice to establish persistence.[118]"
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
                    "procedure_description": "tdtess creates then deletes log files during installation of itself as a service.[235]"
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
                    "procedure_description": "after creating a new service for persistence, tdtess sets the file creation time for the service to the creation time of the victim's legitimate svchost.exe file.[52]"
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
                    "procedure_description": "tdtess has a command to download and execute an additional file.[438]"
                }
            ]
        }
    ]
};