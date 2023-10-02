var threatdata = {
    "name": "adbupd",
    "alias": "adbupd",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "adbupd",
        "names": [
            {
                "name": "adbupd"
            }
        ],
        "description": "adbupd is a backdoor used by PLATINUM that is similar to {{RedSalt}}.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://download.microsoft.com/download/2/2/5/225BFE3E-E1DE-4F5B-A77B-71200928D209/Platinum%20feature%20article%20-%20Targeted%20attacks%20in%20South%20and%20Southeast%20Asia%20April%202016.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0202/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:adbupd"
        ],
        "uuid": "6feeed67-6b81-421c-b338-2ec6d29bb49e",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "adbupd",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "adbupd",
            "procedure_code": "s0202",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0202",
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
                    "procedure_description": "adbupd can run a copy of cmd.exe.[6]"
                },
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
                    "procedure_description": "adbupd can use a wmi script to achieve persistence.[6]"
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
                    "procedure_description": "adbupd can use a wmi script to achieve persistence.[6]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "adbupd contains a copy of the openssl library to encrypt c2 traffic.[1]"
                }
            ]
        }
    ]
};