var threatdata = {
    "name": "hcdLoader",
    "alias": "hcdLoader",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "hcdLoader",
        "names": [
            {
                "name": "hcdLoader"
            }
        ],
        "description": "(Anomali) The Wekby group has exhibited a preference to use a tool named HcdLoader which often persists as a Windows Service on externally facing servers for remote access.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.anomali.com/blog/evasive-maneuvers-the-wekby-group-attempts-to-evade-analysis-via-custom-rop"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0071/"
        ],
        "uuid": "a16b2002-e66b-4202-b032-44a0d43acb65",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hcdloader",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "hcdloader",
            "procedure_code": "s0071",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0071",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "hcdloader provides command-line access to the compromised system.[150]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "hcdloader installs itself as a service for persistence.[61][62]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "hcdloader installs itself as a service for persistence.[61][62]"
                }
            ]
        }
    ]
};