var threatdata = {
    "name": "Truvasys",
    "alias": "Truvasys",
    "category": "Malware",
    "type": "Loader",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "Truvasys",
        "names": [
            {
                "name": "Truvasys"
            }
        ],
        "description": "(Microsoft) A first-stage malware that has been in circulation for several years. Truvasys has been involved in several attack campaigns, where it has masqueraded as one of server common computer utilities, including WinUtils, TrueCrypt, WinRAR, or SanDisk.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2016/12/14/twin-zero-day-attacks-promethium-and-neodymium-target-individuals-in-europe/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0178/"
        ],
        "uuid": "11dd235d-2f18-48d2-8fb6-24ca6fbcfda2",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "truvasys",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "truvasys",
            "procedure_code": "s0178",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0178",
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
                    "procedure_description": "truvasys adds a registry run key to establish persistence.[266]"
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
                    "procedure_description": "truvasys adds a registry run key to establish persistence.[266]"
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
                    "procedure_description": "to establish persistence, truvasys adds a registry run key with a value \"taskmgr\" in an attempt to masquerade as the legitimate windows task manager.[74]"
                }
            ]
        }
    ]
};