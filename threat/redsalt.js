var threatdata = {
    "name": "RedSalt",
    "alias": "RedSalt, Dipsind",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "RedSalt",
        "names": [
            {
                "name": "RedSalt"
            },
            {
                "name": "Dipsind"
            }
        ],
        "description": "Dipsind is a malware family of backdoors that appear to be used exclusively by PLATINUM.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://summit.fireeye.com/content/dam/fireeye-www/summit/cds-2018/presentations/cds18-technical-s01-hunting-for-platinum.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0200/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.redsalt"
        ],
        "uuid": "38b97777-759f-4bb2-9e26-3bfc8e4c9cee",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "redsalt",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "dipsind",
            "procedure_code": "s0200",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0200",
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
                    "procedure_description": "dipsind can spawn remote shells.[6]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/004",
                    "technique_name": "boot or logon autostart execution : winlogon helper dll",
                    "technique_description": "adversaries may abuse features of winlogon to execute dlls and/or executables when a user logs in. winlogon.exe is a windows component responsible for actions at logon/logoff as well as the secure attention sequence (sas) triggered by ctrl-alt-delete. registry entries in hklm\\software[\\wow6432node\\]\\microsoft\\windows nt\\currentversion\\winlogon\\ and hkcu\\software\\microsoft\\windows nt\\currentversion\\winlogon\\ are used to manage additional helper programs and functionalities that support winlogon.",
                    "procedure_description": "a dipsind variant registers as a winlogon event notify dll to establish persistence.[5]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/004",
                    "technique_name": "boot or logon autostart execution : winlogon helper dll",
                    "technique_description": "adversaries may abuse features of winlogon to execute dlls and/or executables when a user logs in. winlogon.exe is a windows component responsible for actions at logon/logoff as well as the secure attention sequence (sas) triggered by ctrl-alt-delete. registry entries in hklm\\software[\\wow6432node\\]\\microsoft\\windows nt\\currentversion\\winlogon\\ and hkcu\\software\\microsoft\\windows nt\\currentversion\\winlogon\\ are used to manage additional helper programs and functionalities that support winlogon.",
                    "procedure_description": "a dipsind variant registers as a winlogon event notify dll to establish persistence.[5]"
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
                    "procedure_description": "dipsind uses http for c2.[98]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1132/001",
                    "technique_name": "data encoding : standard encoding",
                    "technique_description": "adversaries may encode data with a standard data encoding system to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a standard data encoding system that adheres to existing protocol specifications. common data encoding schemes include ascii, unicode, hexadecimal, base64, and mime. some data encoding systems may also result in data compression, such as gzip.",
                    "procedure_description": "dipsind encodes c2 traffic with base64.[30]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/001",
                    "technique_name": "encrypted channel : symmetric cryptography",
                    "technique_description": "adversaries may employ a known symmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. symmetric encryption algorithms use the same key for plaintext encryption and ciphertext decryption. common symmetric encryption algorithms include aes, des, 3des, blowfish, and rc4.",
                    "procedure_description": "dipsind encrypts c2 data with aes256 in ecb mode.[37]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "dipsind can download remote files.[145]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1029",
                    "technique_link": "https://attack.mitre.org/techniques/T1029",
                    "technique_name": "scheduled transfer",
                    "technique_description": "adversaries may schedule data exfiltration to be performed only at certain times of day or at certain intervals. this could be done to blend traffic patterns with normal activity or availability.",
                    "procedure_description": "dipsind can be configured to only run during normal working hours, which would make its communications harder to distinguish from normal traffic.[5]"
                }
            ]
        }
    ]
};