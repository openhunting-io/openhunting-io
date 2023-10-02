var threatdata = {
    "name": "POWERTON",
    "alias": "POWERTON",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-07-13",
    "all_data": {
        "tool": "POWERTON",
        "names": [
            {
                "name": "POWERTON"
            }
        ],
        "description": "(FireEye) POWERTON is a backdoor written in PowerShell; FireEye has not yet identified any publicly available toolset with a similar code base, indicating that it is likely custom-built. POWERTON is designed to support multiple persistence mechanisms, including WMI and auto-run registry key. Communications with the C2 are over TCP/HTTP(S) and leverage AES encryption for communication traffic to and from the C2. POWERTON typically gets deployed as a later stage backdoor and is obfuscated several layers.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2018/12/overruled-containing-a-potentially-destructive-adversary.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0371/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.powerton"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:powerton"
        ],
        "uuid": "cdb68988-cc6c-4324-9767-7bffc666d6de",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "powerton",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2020/07/scandalous-external-detection-using-network-scan-data-and-automation.html",
            "date": "2020-07-13",
            "organization": "FireEye",
            "author": "Andrew Thompson",
            "title": "SCANdalous! (External Detection Using Network Scan Data and Automation)",
            "categories": [
                "POWERTON",
                "QUADAGENT",
                "PoshC2"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2020/06/18/inside-microsoft-threat-protection-mapping-attack-chains-from-cloud-to-endpoint/",
            "date": "2020-06-18",
            "organization": "Microsoft",
            "author": "Microsoft Threat Protection Intelligence Team",
            "title": "Inside Microsoft Threat Protection: Mapping attack chains from cloud to endpoint (APT33/HOLMIUM)",
            "categories": [
                "POWERTON"
            ]
        },
        {
            "data_url": "https://blog.telsy.com/meeting-powerband-the-apt33-net-powerton-variant/",
            "date": "2020-02-12",
            "organization": "Telsy",
            "author": "Telsy",
            "title": "Meeting POWERBAND: The APT33 .NET POWERTON Variant",
            "categories": [
                "POWERTON",
                "POWERBAND"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/cobalt-trinity",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT TRINITY",
            "categories": [
                "POWERTON",
                "pupy",
                "Imminent Monitor RAT",
                "Koadic",
                "Nanocore RAT",
                "NetWire RC",
                "PoshC2",
                "APT33"
            ]
        },
        {
            "data_url": "https://norfolkinfosec.com/apt33-powershell-malware/",
            "date": "2019-07-22",
            "organization": "One Night in Norfolk",
            "author": "Kevin Perlow",
            "title": "APT33 PowerShell Malware",
            "categories": [
                "POWERTON"
            ]
        },
        {
            "data_url": "https://www.symantec.com/security-center/writeup/2019-062513-4935-99",
            "date": "2019-06-24",
            "organization": "Symantec",
            "author": "Benjamin Moench",
            "title": "Backdoor.Powerton",
            "categories": [
                "POWERTON"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2018/12/overruled-containing-a-potentially-destructive-adversary.html",
            "date": "2018-12-21",
            "organization": "FireEye",
            "author": "Geoff Ackerman",
            "title": "OVERRULED: Containing a Potentially Destructive Adversary",
            "categories": [
                "POWERTON",
                "PoshC2",
                "pupy"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "powerton",
            "procedure_code": "s0371",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0371",
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
                    "procedure_description": "powerton is written in powershell.[187]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "powerton can install a registry run key for persistence.[203]"
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
                    "procedure_description": "powerton can use wmi for persistence.[17]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "powerton can install a registry run key for persistence.[203]"
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
                    "procedure_description": "powerton can use wmi for persistence.[17]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/002",
                    "technique_name": "os credential dumping : security account manager",
                    "technique_description": "adversaries may attempt to extract credential material from the security account manager (sam) database either through in-memory techniques or through the windows registry where the sam database is stored. the sam is a database file that contains local accounts for the host, typically those found with the net user command. enumerating the sam database requires system level access.",
                    "procedure_description": "powerton has the ability to dump password hashes.[26]"
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
                    "procedure_description": "powerton has used http/https for c2 traffic.[251]"
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
                    "procedure_description": "powerton has used aes for encrypting c2 traffic.[4]"
                }
            ]
        }
    ]
};