var threatdata = {
    "name": "WIPERIGHT",
    "alias": "WIPERIGHT",
    "category": "Malware",
    "type": "-",
    "modified": "2022-04-03",
    "all_data": {
        "tool": "WIPERIGHT",
        "names": [
            {
                "name": "WIPERIGHT"
            }
        ],
        "description": "(Mandiant) WIPERIGHT is an ELF utility that clears specific log entries on Linux and Unix based systems. It can remove entries associated with a given user in the lastlog, utmp/utmpx, wtmp/wtmpx, and pacct logs. It appears to have originated from available source code, and possibly a more recent version.",
        "category": "Malware",
        "information": [
            "https://www.mandiant.com/resources/unc2891-overview"
        ],
        "uuid": "1f51ec74-4997-4d38-8536-d9800eee69d4",
        "last-card-change": "2022-04-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "wiperight",
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