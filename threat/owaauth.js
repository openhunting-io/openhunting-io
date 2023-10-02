var threatdata = {
    "name": "OwaAuth",
    "alias": "OwaAuth, luckyowa",
    "category": "Malware",
    "type": "Backdoor, Credential stealer",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "OwaAuth",
        "names": [
            {
                "name": "OwaAuth"
            },
            {
                "name": "luckyowa"
            }
        ],
        "description": "(SecureWorks) A web shell and credential stealer deployed to Microsoft Exchange servers. It is installed as an ISAPI filter. Captured credentials are DES-encrypted using the password '12345678' and are written to the log.txt file in the root directory. Like the {{China Chopper}} web shell, the OwaAuth web shell requires a password. However, the OwaAuth web shell password contains the victim organization's name.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Credential stealer"
        ],
        "information": [
            "https://www.secureworks.com/research/threat-group-3390-targets-organizations-for-cyberespionage",
            "https://threatpost.com/targeted-attack-exposes-owa-weakness/114925/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0072/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.owaauth"
        ],
        "uuid": "0dd041d7-9044-4ec3-b5cc-485b6bf92f8f",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "owaauth",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "owaauth",
            "procedure_code": "s0072",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0072",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1505.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1505/003",
                    "technique_name": "server software component : web shell",
                    "technique_description": "adversaries may backdoor web servers with web shells to establish persistent access to systems. a web shell is a web script that is placed on an openly accessible web server to allow an adversary to use the web server as a gateway into a network. a web shell may provide a set of functions to execute or a command-line interface on the system that hosts the web server.",
                    "procedure_description": "owaauth is a web shell that appears to be exclusively used by threat group-3390. it is installed as an isapi filter on exchange servers and shares characteristics with the china chopper web shell.[8]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1505.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1505/004",
                    "technique_name": "server software component : iis components",
                    "technique_description": "adversaries may install malicious components that run on internet information services (iis) web servers to establish persistence. iis provides several mechanisms to extend the functionality of the web servers. for example, internet server application programming interface (isapi) extensions and filters can be installed to examine and/or modify incoming and outgoing iis web requests. extensions and filters are deployed as dll files that export three functions: get{extension/filter}version, http{extension/filter}proc, and (optionally) terminate{extension/filter}. iis modules may also be installed to extend iis web servers.",
                    "procedure_description": "owaauth has been loaded onto exchange servers and disguised as an isapi filter (owaauth.dll). the iis w3wp.exe process then loads the malicious dll.[6]"
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
                    "procedure_description": "owaauth has a command to timestop a file or directory.[41]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "owaauth uses the filename owaauth.dll, which is a legitimate file that normally resides in %programfiles%\\microsoft\\exchange server\\clientaccess\\owa\\auth\\; the malicious file by the same name is saved in %programfiles%\\microsoft\\exchange server\\clientaccess\\owa\\bin\\.[118]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "owaauth captures and des-encrypts credentials before writing the username and password to a log file, c:\\log.txt.[80]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "owaauth has a command to list its directory and logical drives.[144]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/003",
                    "technique_name": "archive collected data : archive via custom method",
                    "technique_description": "an adversary may compress or encrypt data that is collected prior to exfiltration using a custom method. adversaries may choose to use custom archival methods, such as encryption with xor or stream ciphers implemented with no external library or utility references. custom implementations of well-known compression algorithms have also been used.",
                    "procedure_description": "owaauth des-encrypts captured credentials using the key 12345678 before writing the credentials to a log file.[30]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "owaauth captures and des-encrypts credentials before writing the username and password to a log file, c:\\log.txt.[80]"
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
                    "procedure_description": "owaauth uses incoming http requests with a username keyword and commands and handles them as instructions to perform actions.[159]"
                }
            ]
        }
    ]
};