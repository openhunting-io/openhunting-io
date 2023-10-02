var threatdata = {
    "name": "POSHSPY",
    "alias": "POSHSPY",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "POSHSPY",
        "names": [
            {
                "name": "POSHSPY"
            }
        ],
        "description": "(FireEye) POSHSPY makes the most of using built-in Windows features \u2013 so-called \u201c{{Living off the Land}}\u201d \u2013 to make an especially stealthy backdoor. POSHSPY's use of WMI to both store and persist the backdoor code makes it nearly invisible to anyone not familiar with the intricacies of WMI. Its use of a PowerShell payload means that only legitimate system processes are utilized and that the malicious code execution can only be identified through enhanced logging or in memory. The backdoor's infrequent beaconing, traffic obfuscation, extensive encryption and use of geographically local, legitimate websites for command and control (C2) make identification of its network traffic difficult. Every aspect of POSHSPY is efficient and covert.\n\nMandiant initially identified an early variant of the POSHSPY backdoor deployed as PowerShell scripts during an incident response engagement in 2015. Later in that same engagement, the attacker updated the deployment of the backdoor to use WMI for storage and persistence. Mandiant has since identified POSHSPY in several other environments compromised by APT29 over the past two years.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2017/03/dissecting_one_ofap.html",
            "https://github.com/matthewdunwoody/POSHSPY"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0150/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.poshspy"
        ],
        "uuid": "28eff50b-ad42-43e6-b5ee-2bbabd58d9b6",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "poshspy",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://github.com/matthewdunwoody/POSHSPY",
            "date": "2017-04-04",
            "organization": "GitHub (matthewdunwoody)",
            "author": "Matthew Dunwoody",
            "title": "POSHSPY backdoor code",
            "categories": [
                "POSHSPY"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/03/dissecting_one_ofap.html",
            "date": "2017-04-03",
            "organization": "FireEye",
            "author": "Matthew Dunwoody",
            "title": "Dissecting One of APT29\u2019s Fileless WMI and PowerShell Backdoors (POSHSPY)",
            "categories": [
                "POSHSPY",
                "APT29"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "poshspy",
            "procedure_code": "s0150",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0150",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "poshspy uses powershell to execute various commands, one to execute its payload.[178]"
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
                    "procedure_description": "poshspy uses a wmi event subscription to establish persistence.[16]"
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
                    "procedure_description": "poshspy uses a wmi event subscription to establish persistence.[16]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/006",
                    "technique_name": "indicator removal : timestomp",
                    "technique_description": "adversaries may modify file time attributes to hide new or changes to existing files. timestomping is a technique that modifies the timestamps of a file (the modify, access, create, and change times), often to mimic files that are in the same folder. this is done, for example, on files that have been modified or created by the adversary so that they do not appear conspicuous to forensic investigators or file analysis tools.",
                    "procedure_description": "poshspy modifies timestamps of all downloaded executables to match a randomly selected file created prior to 2013.[43]"
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
                    "procedure_description": "poshspy appends a file signature header (randomly selected from six file types) to encrypted data prior to upload or download.[255]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1568.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1568/002",
                    "technique_name": "dynamic resolution : domain generation algorithms",
                    "technique_description": "adversaries may make use of domain generation algorithms (dgas) to dynamically identify a destination domain for command and control traffic rather than relying on a list of static ip addresses or domains. this has the advantage of making it much harder for defenders to block, track, or take over the command and control channel, as there potentially could be thousands of domains that malware can check for instructions.",
                    "procedure_description": "poshspy uses a dga to derive command and control urls from a word list.[6]"
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
                    "procedure_description": "poshspy encrypts c2 traffic with aes and rsa.[42]"
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
                    "procedure_description": "poshspy downloads and executes additional powershell code and windows binaries.[353]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1030",
                    "technique_link": "https://attack.mitre.org/techniques/T1030",
                    "technique_name": "data transfer size limits",
                    "technique_description": "an adversary may exfiltrate data in fixed size chunks instead of whole files or limit packet sizes below certain thresholds. this approach may be used to avoid triggering network data transfer threshold alerts.",
                    "procedure_description": "poshspy uploads data in 2048-byte chunks.[13]"
                }
            ]
        }
    ]
};