var threatdata = {
    "name": "Lslsass",
    "alias": "Lslsass",
    "category": "Tools",
    "type": "Credential stealer",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Lslsass",
        "names": [
            {
                "name": "Lslsass"
            }
        ],
        "description": "Lslsass is a publicly-available tool that can dump active logon session password hashes from the lsass process.",
        "category": "Tools",
        "type": [
            "Credential stealer"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0121/"
        ],
        "uuid": "459979cc-a0d7-49ae-8a20-5626863aa0d6",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "lslsass",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "lslsass",
            "procedure_code": "s0121",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0121",
            "techniques": [
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/001",
                    "technique_name": "os credential dumping : lsass memory",
                    "technique_description": "adversaries may attempt to access credential material stored in the process memory of the local security authority subsystem service (lsass). after a user logs on, the system generates and stores a variety of credential materials in lsass process memory. these credential materials can be harvested by an administrative user or system and used to conduct lateral movement using use alternate authentication material.",
                    "procedure_description": "lslsass can dump active logon session password hashes from the lsass process.[6]"
                }
            ]
        }
    ]
};