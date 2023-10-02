var threatdata = {
    "name": "CryWiper",
    "alias": "CryWiper",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "CryWiper",
        "names": [
            {
                "name": "CryWiper"
            }
        ],
        "description": "(BleepingComputer) A previously undocumented data wiper named CryWiper is masquerading as ransomware,\u00a0but in reality, destroys data beyond recovery in attacks against\u00a0Russian mayor's offices and courts.\n\nCryWiper was first discovered by Kaspersky this fall, where they say the malware was used in an attack against a Russian organization.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://www.bleepingcomputer.com/news/security/new-crywiper-data-wiper-targets-russian-courts-mayor-s-offices/",
            "https://securelist.ru/novyj-troyanec-crywiper/106114/"
        ],
        "uuid": "72e7a2af-d9f4-4449-abf3-91f6689c7db4",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "crywiper",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "wiper",
            "procedure_code": "s0041",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0041",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1072",
                    "technique_link": "https://attack.mitre.org/techniques/T1072",
                    "technique_name": "software deployment tools",
                    "technique_description": "adversaries may gain access to and use third-party software suites installed within an enterprise network, such as administration, monitoring, and deployment systems, to move laterally through the network. third-party applications and software deployment systems may be in use in the network environment for administration purposes (e.g., sccm, hbss, altiris, etc.).",
                    "procedure_description": "it is believed that a patch management system for an anti-virus product commonly installed among targeted companies was used to distribute the wiper malware.[6]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1072",
                    "technique_link": "https://attack.mitre.org/techniques/T1072",
                    "technique_name": "software deployment tools",
                    "technique_description": "adversaries may gain access to and use third-party software suites installed within an enterprise network, such as administration, monitoring, and deployment systems, to move laterally through the network. third-party applications and software deployment systems may be in use in the network environment for administration purposes (e.g., sccm, hbss, altiris, etc.).",
                    "procedure_description": "it is believed that a patch management system for an anti-virus product commonly installed among targeted companies was used to distribute the wiper malware.[6]"
                }
            ]
        }
    ]
};