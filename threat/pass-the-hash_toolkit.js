var threatdata = {
    "name": "Pass-The-Hash Toolkit",
    "alias": "Pass-The-Hash Toolkit",
    "category": "Tools",
    "type": "Credential stealer",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "Pass-The-Hash Toolkit",
        "names": [
            {
                "name": "Pass-The-Hash Toolkit"
            }
        ],
        "description": "Pass-The-Hash Toolkit is a toolkit that allows an adversary to 'pass' a password hash (without knowing the original password) to log in to systems.",
        "category": "Tools",
        "type": [
            "Credential stealer"
        ],
        "information": [
            "https://en.wikipedia.org/wiki/Pass_the_hash"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0122/"
        ],
        "uuid": "b3d41ddb-d6df-469c-97be-3ecc4fe31cd7",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pass-the-hash_toolkit",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "pass-the-hash toolkit",
            "procedure_code": "s0122",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0122",
            "techniques": [
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1550.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1550/002",
                    "technique_name": "use alternate authentication material : pass the hash",
                    "technique_description": "adversaries may \"pass the hash\" using stolen password hashes to move laterally within an environment, bypassing normal system access controls. pass the hash (pth) is a method of authenticating as a user without having access to the user's cleartext password. this method bypasses standard authentication steps that require a cleartext password, moving directly into the portion of the authentication that uses the password hash.",
                    "procedure_description": "pass-the-hash toolkit can perform pass the hash.[2]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1550.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1550/002",
                    "technique_name": "use alternate authentication material : pass the hash",
                    "technique_description": "adversaries may \"pass the hash\" using stolen password hashes to move laterally within an environment, bypassing normal system access controls. pass the hash (pth) is a method of authenticating as a user without having access to the user's cleartext password. this method bypasses standard authentication steps that require a cleartext password, moving directly into the portion of the authentication that uses the password hash.",
                    "procedure_description": "pass-the-hash toolkit can perform pass the hash.[2]"
                }
            ]
        }
    ]
};