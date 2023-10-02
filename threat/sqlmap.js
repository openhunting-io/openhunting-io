var threatdata = {
    "name": "sqlmap",
    "alias": "sqlmap",
    "category": "Tools",
    "type": "Vulnerability scanner",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "sqlmap",
        "names": [
            {
                "name": "sqlmap"
            }
        ],
        "description": "sqlmap is an open source penetration testing tool that can be used to automate the process of detecting and exploiting SQL injection flaws.",
        "category": "Tools",
        "type": [
            "Vulnerability scanner"
        ],
        "information": [
            "https://github.com/sqlmapproject/sqlmap"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0225/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:sqlmap"
        ],
        "uuid": "48db6cff-fc70-494a-9118-fe120457976e",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sqlmap",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "sqlmap",
            "procedure_code": "s0225",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0225",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1190",
                    "technique_link": "https://attack.mitre.org/techniques/T1190",
                    "technique_name": "exploit public-facing application",
                    "technique_description": "adversaries may attempt to exploit a weakness in an internet-facing host or system to initially access a network. the weakness in the system can be a software bug, a temporary glitch, or a misconfiguration.",
                    "procedure_description": "sqlmap can be used to automate exploitation of sql injection vulnerabilities.[56]"
                }
            ]
        }
    ]
};