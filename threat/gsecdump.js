var threatdata = {
    "name": "gsecdump",
    "alias": "gsecdump",
    "category": "Tools",
    "type": "Credential stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "gsecdump",
        "names": [
            {
                "name": "gsecdump"
            }
        ],
        "description": "gsecdump is a publicly-available credential dumper used to obtain password hashes and LSA secrets from Windows operating systems.",
        "category": "Tools",
        "type": [
            "Credential stealer"
        ],
        "information": [
            "https://download.openwall.net/pub/projects/john/contrib/win32/pwdump/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0008/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.gsecdump"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:GSecDump"
        ],
        "uuid": "77c08472-aa1f-41ac-aa25-7ee0568b294e",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "gsecdump",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://attack.mitre.org/wiki/Technique/T1003",
            "date": "2019-10-11",
            "organization": "MITRE",
            "author": "MITRE",
            "title": "Credential Dumping",
            "categories": [
                "gsecdump"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "gsecdump",
            "procedure_code": "s0008",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0008",
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
                    "procedure_description": "gsecdump can dump windows password hashes from the sam.[10]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/004",
                    "technique_name": "os credential dumping : lsa secrets",
                    "technique_description": "adversaries with system access to a host may attempt to access local security authority (lsa) secrets, which can contain a variety of different credential materials, such as credentials for service accounts. lsa secrets are stored in the registry at hkey_local_machine\\security\\policy\\secrets. lsa secrets can also be dumped from memory.",
                    "procedure_description": "gsecdump can dump lsa secrets.[12]"
                }
            ]
        }
    ]
};