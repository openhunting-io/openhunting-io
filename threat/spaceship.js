var threatdata = {
    "name": "Spaceship",
    "alias": "Spaceship",
    "category": "Malware",
    "type": "Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Spaceship",
        "names": [
            {
                "name": "Spaceship"
            }
        ],
        "description": "(FireEye) SPACESHIP searches for files with a specified set of file extensions and copies them to a removable drive. FireEye believes that SHIPSHAPE is used to copy SPACESHIP to a removable drive, which could be used to infect another victim computer, including an air-gapped computer. SPACESHIP is then used to steal documents from the air-gapped system, copying them to a removable drive inserted into the SPACESHIP-infected system.",
        "category": "Malware",
        "type": [
            "Exfiltration"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2015/05/20081935/rpt-apt30.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0035/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.spaceship"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:spaceship"
        ],
        "uuid": "61a36a16-f4cb-4174-9151-7c5890c874b7",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "spaceship",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "spaceship",
            "procedure_code": "s0035",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0035",
            "techniques": [
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
                    "procedure_description": "spaceship achieves persistence by creating a shortcut in the current user's startup folder.[39]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "spaceship achieves persistence by creating a shortcut in the current user's startup folder.[5]"
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
                    "procedure_description": "spaceship achieves persistence by creating a shortcut in the current user's startup folder.[39]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "spaceship achieves persistence by creating a shortcut in the current user's startup folder.[5]"
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
                    "procedure_description": "spaceship identifies files and directories for collection by searching for specific file extensions or file modification time.[34]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/003",
                    "technique_name": "archive collected data : archive via custom method",
                    "technique_description": "an adversary may compress or encrypt data that is collected prior to exfiltration using a custom method. adversaries may choose to use custom archival methods, such as encryption with xor or stream ciphers implemented with no external library or utility references. custom implementations of well-known compression algorithms have also been used.",
                    "procedure_description": "data spaceship copies to the staging area is compressed with zlib. bytes are rotated by four positions and xor'ed with 0x23.[10]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1074/001",
                    "technique_name": "data staged : local data staging",
                    "technique_description": "adversaries may stage collected data in a central location or directory on the local system prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "spaceship identifies files with certain extensions and copies them to a directory in the user's profile.[35]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1052.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1052/001",
                    "technique_name": "exfiltration over physical medium : exfiltration over usb",
                    "technique_description": "adversaries may attempt to exfiltrate data over a usb connected physical device. in certain circumstances, such as an air-gapped network compromise, exfiltration could occur via a usb device introduced by a user. the usb device could be used as the final exfiltration point or to hop between otherwise disconnected systems.",
                    "procedure_description": "spaceship copies staged data to removable drives when they are inserted into the system.[6]"
                }
            ]
        }
    ]
};