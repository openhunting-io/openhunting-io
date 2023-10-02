var threatdata = {
    "name": "TerraWiper",
    "alias": "TerraWiper",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2020-07-10",
    "all_data": {
        "tool": "TerraWiper",
        "names": [
            {
                "name": "TerraWiper"
            }
        ],
        "description": "(QuoINT) In October 2018 while hunting for {{TerraCrypt}} variants we discovered a wiper malware we dubbed TerraWiper. TerraWiper is a Master Boot Record (MBR) wiper compiled from PureBasic, and it uses a slightly different version of the obfuscator used for TerraLoader variants. TerraWiper samples attempt to render a machine unbootable by zero-ing its MBR. Therefore, it would be possible for an infected computer to easily recover the data, or to make the machine boot again by fixing its MBR.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://quointelligence.eu/2020/01/the-chicken-keeps-laying-new-eggs-uncovering-new-gc-maas-tools-used-by-top-tier-threat-actors/"
        ],
        "uuid": "20f5dc28-f743-4940-ae85-6c77d0223dc2",
        "last-card-change": "2020-07-10",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "terrawiper",
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