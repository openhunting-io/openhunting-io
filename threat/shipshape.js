var threatdata = {
    "name": "Shipshape",
    "alias": "Shipshape",
    "category": "Malware",
    "type": "Worm, Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Shipshape",
        "names": [
            {
                "name": "Shipshape"
            }
        ],
        "description": "SHIPSHAPE is malware developed by APT30 that allows propagation and exfiltration of data over removable devices. APT30 may use this capability to exfiltrate data across air-gaps.",
        "category": "Malware",
        "type": [
            "Worm",
            "Exfiltration"
        ],
        "information": [
            "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2015/rpt-apt30.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0028/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.shipshape"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:SHIPSHAPE"
        ],
        "uuid": "716fb64d-8dc0-4d92-96b6-60604a14aab2",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "shipshape",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "shipshape",
            "procedure_code": "s0028",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0028",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1091",
                    "technique_link": "https://attack.mitre.org/techniques/T1091",
                    "technique_name": "replication through removable media",
                    "technique_description": "adversaries may move onto systems, possibly those on disconnected or air-gapped networks, by copying malware to removable media and taking advantage of autorun features when the media is inserted into a system and executes. in the case of lateral movement, this may occur through modification of executable files stored on removable media or by copying malware and renaming it to look like a legitimate file to trick users into executing it on a separate system. in the case of initial access, this may occur through manual manipulation of the media, modification of systems used to initially format the media, or modification to the media's firmware itself.",
                    "procedure_description": "apt30 may have used the shipshape malware to move onto air-gapped networks. shipshape targets removable drives to spread to other systems by modifying the drive to use autorun to execute or by hiding legitimate document files and copying an executable to the folder with the same name as the legitimate document.[24]"
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
                    "procedure_description": "shipshape achieves persistence by creating a shortcut in the startup folder.[39]"
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
                    "procedure_description": "shipshape achieves persistence by creating a shortcut in the startup folder.[5]"
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
                    "procedure_description": "shipshape achieves persistence by creating a shortcut in the startup folder.[39]"
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
                    "procedure_description": "shipshape achieves persistence by creating a shortcut in the startup folder.[5]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1091",
                    "technique_link": "https://attack.mitre.org/techniques/T1091",
                    "technique_name": "replication through removable media",
                    "technique_description": "adversaries may move onto systems, possibly those on disconnected or air-gapped networks, by copying malware to removable media and taking advantage of autorun features when the media is inserted into a system and executes. in the case of lateral movement, this may occur through modification of executable files stored on removable media or by copying malware and renaming it to look like a legitimate file to trick users into executing it on a separate system. in the case of initial access, this may occur through manual manipulation of the media, modification of systems used to initially format the media, or modification to the media's firmware itself.",
                    "procedure_description": "apt30 may have used the shipshape malware to move onto air-gapped networks. shipshape targets removable drives to spread to other systems by modifying the drive to use autorun to execute or by hiding legitimate document files and copying an executable to the folder with the same name as the legitimate document.[24]"
                }
            ]
        }
    ]
};