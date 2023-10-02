var threatdata = {
    "name": "CallMe",
    "alias": "CallMe",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "CallMe",
        "names": [
            {
                "name": "CallMe"
            }
        ],
        "description": "(Palo Alto) CallMe is a Trojan designed to run on the Apple OSX operating system. This Trojan was delivered in targeted attacks on Uyghur activists in 2013 and used infrastructure associated with {{FakeM}}.\n\nIn February 2013, AlienVault performed analysis on the CallMe Trojan and found that it is based on a tool called Tiny SHell, an OSX shell tool whose source code is available on the Internet. The Trojan uses AES to encrypt the communication channel its C2 server, which will provide one of three commands to carry out activities on the compromised system.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/scarlet-mimic-years-long-espionage-targets-minority-activists/",
            "https://cybersecurity.att.com/blogs/labs-research/cyber-espionage-campaign-against-the-uyghur-community-targeting-macosx-syst"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0609"
        ],
        "uuid": "631376c6-c3e1-4edb-804a-bf09c77fc2a5",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "callme",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "callme",
            "procedure_code": "s0077",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0077",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/004",
                    "technique_name": "command and scripting interpreter : unix shell",
                    "technique_description": "adversaries may abuse unix shell commands and scripts for execution. unix shells are the primary command prompt on linux and macos systems, though many variations of the unix shell exist (e.g. sh, bash, zsh, etc.) depending on the specific os or distribution. unix shells can control every aspect of a system, with certain commands requiring elevated privileges.",
                    "procedure_description": "callme has the capability to create a reverse shell on victims.[8]"
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
                    "procedure_description": "callme uses aes to encrypt c2 traffic.[22]"
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
                    "procedure_description": "callme has the capability to download a file to the victim from the c2 server.[91]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1041",
                    "technique_link": "https://attack.mitre.org/techniques/T1041",
                    "technique_name": "exfiltration over c2 channel",
                    "technique_description": "adversaries may steal data by exfiltrating it over an existing command and control channel. stolen data is encoded into the normal communications channel using the same protocol as command and control communications.",
                    "procedure_description": "callme exfiltrates data to its c2 server over the same protocol as c2 communications.[21]"
                }
            ]
        }
    ]
};