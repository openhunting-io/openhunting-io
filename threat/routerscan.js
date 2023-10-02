var threatdata = {
    "name": "ROUTERSCAN",
    "alias": "ROUTERSCAN",
    "category": "Malware",
    "type": "-",
    "modified": "2021-05-15",
    "all_data": {
        "tool": "ROUTERSCAN",
        "names": [
            {
                "name": "ROUTERSCAN"
            }
        ],
        "description": "No description available yet.",
        "category": "Malware",
        "information": [
            "https://www.fireeye.com/blog/threat-research/2021/04/unc2447-sombrat-and-fivehands-ransomware-sophisticated-financial-threat.html"
        ],
        "uuid": "6598071d-e2e5-4d8c-8d5d-a9a529b07c32",
        "last-card-change": "2021-05-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "routerscan",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "route",
            "procedure_code": "s0103",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0103",
            "techniques": [
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "route can be used to discover routing configuration information."
                }
            ]
        }
    ]
};