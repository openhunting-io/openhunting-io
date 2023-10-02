var threatdata = {
    "name": "Cachedump",
    "alias": "Cachedump",
    "category": "Tools",
    "type": "Credential stealer",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Cachedump",
        "names": [
            {
                "name": "Cachedump"
            }
        ],
        "description": "Cachedump is a publicly-available tool that program extracts cached password hashes from a system\u2019s registry.",
        "category": "Tools",
        "type": [
            "Credential stealer"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0119/"
        ],
        "uuid": "62a2a85f-4f83-4509-ab8d-d954f56ea290",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cachedump",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "cachedump",
            "procedure_code": "s0119",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0119",
            "techniques": [
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/005",
                    "technique_name": "os credential dumping : cached domain credentials",
                    "technique_description": "adversaries may attempt to access cached domain credentials used to allow authentication to occur in the event a domain controller is unavailable.",
                    "procedure_description": "cachedump can extract cached password hashes from cache entry information.[6]"
                }
            ]
        }
    ]
};