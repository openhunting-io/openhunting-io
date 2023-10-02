var threatdata = {
    "name": "httpclient",
    "alias": "httpclient",
    "category": "Malware",
    "type": "Backdoor, Downloader",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "httpclient",
        "names": [
            {
                "name": "httpclient"
            }
        ],
        "description": "(CrowdStrike)  simple tool that provides a limited range of functionality and uses HTTP for its C2 channel. This malware also initially performs a connectivity check to www.microsoft.com using the hard-coded user agent Mozilla/4.0 (Compatible; MsIE 6.0;), although in this variant no attempt is made to extract proxy credentials. The malware will then connect to its configured C2 infrastructure (file.anyoffice.info) and perform a HTTP request.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "https://cdn0.vox-cdn.com/assets/4589853/crowdstrike-intelligence-report-putter-panda.original.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0068/"
        ],
        "uuid": "f53a60a0-7988-4ef0-9493-3d22909f6638",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "httpclient",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "httpclient",
            "procedure_code": "s0068",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0068",
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
                    "procedure_description": "httpclient opens cmd.exe on the victim.[3]"
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
                    "procedure_description": "httpclient uses http for command and control.[1]"
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
                    "procedure_description": "httpclient encrypts c2 content with xor using a single byte, 0x12.[1]"
                }
            ]
        }
    ]
};