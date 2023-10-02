var threatdata = {
    "name": "ROCKBOOT",
    "alias": "ROCKBOOT",
    "category": "Malware",
    "type": "Loader",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "ROCKBOOT",
        "names": [
            {
                "name": "ROCKBOOT"
            }
        ],
        "description": "(FireEye) ROCKBOOT can access and write to the compromised system's hard disk drive beneath the operating system and file system to bypass the normal MBR boot sequence and execute malware prior to the host operating system being initialized. ROCKBOOT does not contain a malicious payload but relies on a secondary payload for malicious activities, which is specified at install time.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://paper.bobylive.com/Security/APT_Report/APT-41.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0112/"
        ],
        "uuid": "135aca6a-613b-46e9-92c3-b812c08643fb",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rockboot",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "rockboot",
            "procedure_code": "s0112",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0112",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1542.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1542/003",
                    "technique_name": "pre-os boot : bootkit",
                    "technique_description": "adversaries may use bootkits to persist on systems. bootkits reside at a layer below the operating system and may make it difficult to perform full remediation unless an organization suspects one was used and can act accordingly.",
                    "procedure_description": "rockboot is a master boot record (mbr) bootkit that uses the mbr to establish persistence.[5]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1542.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1542/003",
                    "technique_name": "pre-os boot : bootkit",
                    "technique_description": "adversaries may use bootkits to persist on systems. bootkits reside at a layer below the operating system and may make it difficult to perform full remediation unless an organization suspects one was used and can act accordingly.",
                    "procedure_description": "rockboot is a master boot record (mbr) bootkit that uses the mbr to establish persistence.[5]"
                }
            ]
        }
    ]
};