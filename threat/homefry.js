var threatdata = {
    "name": "HOMEFRY",
    "alias": "HOMEFRY",
    "category": "Malware",
    "type": "Credential stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "HOMEFRY",
        "names": [
            {
                "name": "HOMEFRY"
            }
        ],
        "description": "(FireEye) HOMEFRY: a 64-bit Windows password dumper/cracker that has previously been used in conjunction with {{AIRBREAK}} and {{BADFLICK}} backdoors. Some strings are obfuscated with XOR x56. The malware accepts up to two arguments at the command line: one to display cleartext credentials for each login session, and a second to display cleartext credentials, NTLM hashes, and malware version for each login session.",
        "category": "Malware",
        "type": [
            "Credential stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2018/03/suspected-chinese-espionage-group-targeting-maritime-and-engineering-industries.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0232/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.homefry"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:HOMEFRY"
        ],
        "uuid": "422daad9-87c7-42e2-84a4-e634f311d1ba",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "homefry",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "homefry",
            "procedure_code": "s0232",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0232",
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
                    "procedure_description": "homefry uses a command-line interface.[159]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "some strings in homefry are obfuscated with xor x56.[161]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003",
                    "technique_link": "https://attack.mitre.org/techniques/T1003",
                    "technique_name": "os credential dumping",
                    "technique_description": "adversaries may attempt to dump credentials to obtain account login and credential material, normally in the form of a hash or a clear text password, from the operating system and software. credentials can then be used to perform lateral movement and access restricted information.",
                    "procedure_description": "homefry can perform credential dumping.[9]"
                }
            ]
        }
    ]
};