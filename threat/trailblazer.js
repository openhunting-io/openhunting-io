var threatdata = {
    "name": "TrailBlazer",
    "alias": "TrailBlazer",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "TrailBlazer",
        "names": [
            {
                "name": "TrailBlazer"
            }
        ],
        "description": "(CrowdStrike) TrailBlazer is a sophisticated malware family that provides modular functionality and a very low prevalence. The malware shares high-level functionality with other malware families. In particular, the use of random identifier strings for C2 operations and result codes, and attempts to hide C2 communications in seemingly legitimate web traffic, were previously observed tactics, techniques and procedures (TTPs) in {{GoldMax}} and {{SUNBURST}}.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.crowdstrike.com/blog/observations-from-the-stellarparticle-campaign/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0682/"
        ],
        "uuid": "ee19893f-691b-4cc4-9cdb-0ff0b2bd149c",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "trailblazer",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "trailblazer",
            "procedure_code": "s0682",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0682",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/003",
                    "technique_name": "event triggered execution : windows management instrumentation event subscription",
                    "technique_description": "adversaries may establish persistence and elevate privileges by executing malicious content triggered by a windows management instrumentation (wmi) event subscription. wmi can be used to install event filters, providers, consumers, and bindings that execute code when a defined event occurs. examples of events that may be subscribed to are the wall clock time, user loging, or the computer's uptime.",
                    "procedure_description": "trailblazer has the ability to use wmi for persistence.[21]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/003",
                    "technique_name": "event triggered execution : windows management instrumentation event subscription",
                    "technique_description": "adversaries may establish persistence and elevate privileges by executing malicious content triggered by a windows management instrumentation (wmi) event subscription. wmi can be used to install event filters, providers, consumers, and bindings that execute code when a defined event occurs. examples of events that may be subscribed to are the wall clock time, user loging, or the computer's uptime.",
                    "procedure_description": "trailblazer has the ability to use wmi for persistence.[21]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036",
                    "technique_link": "https://attack.mitre.org/techniques/T1036",
                    "technique_name": "masquerading",
                    "technique_description": "adversaries may attempt to manipulate features of their artifacts to make them appear legitimate or benign to users and/or security tools. masquerading occurs when the name or location of an object, legitimate or malicious, is manipulated or abused for the sake of evading defenses and observation. this may include manipulating file metadata, tricking users into misidentifying the file type, and giving legitimate task or service names.",
                    "procedure_description": "trailblazer has used filenames that match the name of the compromised system in attempt to avoid detection.[42]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "trailblazer has used http requests for c2.[342]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001",
                    "technique_link": "https://attack.mitre.org/techniques/T1001",
                    "technique_name": "data obfuscation",
                    "technique_description": "adversaries may obfuscate command and control traffic to make it more difficult to detect. command and control (c2) communications are hidden (but not necessarily encrypted) in an attempt to make the content more difficult to discover or decipher and to make the communication less conspicuous and hide commands from being seen. this encompasses many methods, such as adding junk data to protocol traffic, using steganography, or impersonating legitimate protocols.",
                    "procedure_description": "trailblazer can masquerade its c2 traffic as legitimate google notifications http requests.[7]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/001",
                    "technique_name": "data obfuscation : junk data",
                    "technique_description": "adversaries may add junk data to protocols used for command and control to make detection more difficult. by adding random or meaningless data to the protocols used for command and control, adversaries can prevent trivial methods for decoding, deciphering, or otherwise analyzing the traffic. examples may include appending/prepending data with junk characters or writing junk characters between significant characters.",
                    "procedure_description": "trailblazer has used random identifier strings to obscure its c2 operations and result codes.[13]"
                }
            ]
        }
    ]
};