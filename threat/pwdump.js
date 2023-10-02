var threatdata = {
    "name": "pwdump",
    "alias": "pwdump",
    "category": "Tools",
    "type": "Credential stealer",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "pwdump",
        "names": [
            {
                "name": "pwdump"
            }
        ],
        "description": "pwdump is a credential dumper.",
        "category": "Tools",
        "type": [
            "Credential stealer"
        ],
        "information": [
            "https://www.openwall.com/passwords/windows-pwdump"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0006/"
        ],
        "uuid": "dc6aeaf1-a30a-4b70-94d6-fd771826171d",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pwdump",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "pwdump",
            "procedure_code": "s0006",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0006",
            "techniques": [
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/002",
                    "technique_name": "os credential dumping : security account manager",
                    "technique_description": "adversaries may attempt to extract credential material from the security account manager (sam) database either through in-memory techniques or through the windows registry where the sam database is stored. the sam is a database file that contains local accounts for the host, typically those found with the net user command. enumerating the sam database requires system level access.",
                    "procedure_description": "pwdump can be used to dump credentials from the sam.[27]"
                }
            ]
        }
    ]
};