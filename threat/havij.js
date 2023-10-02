var threatdata = {
    "name": "Havij",
    "alias": "Havij",
    "category": "Tools",
    "type": "Info stealer, Exfiltration",
    "modified": "2020-05-08",
    "all_data": {
        "tool": "Havij",
        "names": [
            {
                "name": "Havij"
            }
        ],
        "description": "(Check Point) Havij, an automatic SQL Injection tool, is distributed by ITSecTeam, an Iranian security company. The name Havij means \u201ccarrot\u201d, which is the tool\u2019s icon.\n\nThe tool is designed with a user-friendly GUI that makes it easy for an operator to retrieve the desired data. Such ease of use may be the reason behind the transition from attacks deployed by code-writing hackers to those by non-technical users.",
        "category": "Tools",
        "type": [
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.checkpoint.com/2015/05/14/analysis-havij-sql-injection-tool/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0224/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:havij"
        ],
        "uuid": "76ac3306-33c5-44b6-b5da-4dcb7d7930a9",
        "last-card-change": "2020-05-08",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "havij",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "havij",
            "procedure_code": "s0224",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0224",
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
                    "procedure_description": "havij is used to automate sql injection.[37]"
                }
            ]
        }
    ]
};