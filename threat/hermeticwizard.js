var threatdata = {
    "name": "HermeticWizard",
    "alias": "HermeticWizard",
    "category": "Malware",
    "type": "Worm",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "HermeticWizard",
        "names": [
            {
                "name": "HermeticWizard"
            }
        ],
        "description": "(ESET) A custom worm that we have named HermeticWizard was used to spread {{HermeticWiper}} across the compromised networks via SMB and WMI.",
        "category": "Malware",
        "type": [
            "Worm"
        ],
        "information": [
            "https://www.welivesecurity.com/2022/03/01/isaacwiper-hermeticwizard-wiper-worm-targeting-ukraine/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0698/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hermeticwizard"
        ],
        "uuid": "98ce3991-5d04-48e2-9cab-3ad797f14617",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hermeticwizard",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.youtube.com/watch?v=mrTdSdMMgnk",
            "date": "2022-10-24",
            "organization": "Youtube (Virus Bulletin)",
            "author": "Alexander Adamov",
            "title": "Russian wipers in the cyberwar against Ukraine",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "DesertBlade",
                "DoubleZero",
                "EternalPetya",
                "HermeticWiper",
                "HermeticWizard",
                "INDUSTROYER2",
                "IsaacWiper",
                "KillDisk",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://inquest.net/blog/2022/04/07/ukraine-cyberwar-overview",
            "date": "2022-04-07",
            "organization": "InQuest",
            "author": "Will MacArthur",
            "title": "Ukraine CyberWar Overview",
            "categories": [
                "CyclopsBlink",
                "Cobalt Strike",
                "GraphSteel",
                "GrimPlant",
                "HermeticWiper",
                "HermeticWizard",
                "MicroBackdoor",
                "PartyTicket",
                "Saint Bot",
                "Scieron",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://securelist.com/webinar-on-cyberattacks-in-ukraine-summary-and-qa/106075/",
            "date": "2022-03-14",
            "organization": "Kaspersky",
            "author": "GReAT",
            "title": "Webinar on cyberattacks in Ukraine \u2013 summary and Q&A",
            "categories": [
                "HermeticWiper",
                "HermeticWizard",
                "IsaacWiper",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://twitter.com/ET_Labs/status/1502494650640351236",
            "date": "2022-03-12",
            "organization": "Twitter (@ET_Labs)",
            "author": "ET Labs",
            "title": "A quick thread examining the network artifacts of the  HermeticWizard spreading",
            "categories": [
                "HermeticWizard"
            ]
        },
        {
            "data_url": "https://www.brighttalk.com/webcast/15591/534324",
            "date": "2022-03-10",
            "organization": "BrightTALK (Kaspersky GReAT)",
            "author": "Costin Raiu",
            "title": "BrightTALK: A look at current cyberattacks in Ukraine",
            "categories": [
                "HermeticWiper",
                "HermeticWizard",
                "IsaacWiper",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://twitter.com/silascutler/status/1501668345640366091",
            "date": "2022-03-09",
            "organization": "Twitter (@silascutler)",
            "author": "Silas Cutler",
            "title": "Tweet on HermeticWizard's self-spreading mechanism",
            "categories": [
                "HermeticWizard"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "hermeticwizard",
            "procedure_code": "s0698",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0698",
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
                    "procedure_description": "hermeticwizard can use cmd.exe for execution on compromised hosts.[152]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1559.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1559/001",
                    "technique_name": "inter-process communication : component object model",
                    "technique_description": "adversaries may use the windows component object model (com) for local code execution. com is an inter-process communication (ipc) component of the native windows application programming interface (api) that enables interaction between software objects, or executable code that implements one or more interfaces. through com, a client object can call methods of server objects, which are typically binary dynamic link libraries (dll) or executables (exe). remote com execution is facilitated by remote services such as  distributed component object model (dcom).",
                    "procedure_description": "hermeticwizard can execute files on remote machines using dcom.[9]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "hermeticwizard can connect to remote shares using wnetaddconnection2w.[92]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1569.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1569/002",
                    "technique_name": "system services : service execution",
                    "technique_description": "adversaries may abuse the windows service control manager to execute malicious commands or payloads. the windows service control manager (services.exe) is an interface to manage and manipulate services. the service control manager is accessible to users via gui components as well as system utilities such as sc.exe and net.",
                    "procedure_description": "hermeticwizard can use openremoteservicemanager to create a service.[26]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "hermeticwizard can use wmi to create a new process on a remote machine via c:\\windows\\system32\\cmd.exe /c start c:\\windows\\system32\\\\regsvr32.exe /s /ic:\\windows\\<filename>.dll.[57]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/001",
                    "technique_name": "indicator removal : clear windows event logs",
                    "technique_description": "adversaries may clear windows event logs to hide the activity of an intrusion. windows event logs are a record of a computer's alerts and notifications. there are three system-defined sources of events: system, application, and security, with five event types: error, warning, information, success audit, and failure audit.",
                    "procedure_description": "hermeticwizard has the ability to use wevtutil cl system to clear event logs.[17]"
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
                    "procedure_description": "hermeticwizard has been named exec_32.dll to mimic a legitimate ms outlook .dll.[71]"
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
                    "procedure_description": "hermeticwizard has the ability to encrypt pe files with a reverse xor loop.[154]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "hermeticwizard has been signed by valid certificates assigned to hermetica digital.[43]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/010",
                    "technique_name": "system binary proxy execution : regsvr32",
                    "technique_description": "adversaries may abuse regsvr32.exe to proxy execution of malicious code. regsvr32.exe is a command-line program used to register and unregister object linking and embedding controls, including dynamic link libraries (dlls), on windows systems. the regsvr32.exe binary may also be signed by microsoft.",
                    "procedure_description": "hermeticwizard has used regsvr32.exe /s /i to execute malicious payloads.[20]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/011",
                    "technique_name": "system binary proxy execution : rundll32",
                    "technique_description": "adversaries may abuse rundll32.exe to proxy execution of malicious code. using rundll32.exe, vice executing directly (i.e. shared modules), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. rundll32.exe is commonly associated with executing dll payloads (ex: rundll32.exe {dllname, dllfunction}).",
                    "procedure_description": "hermeticwizard has the ability to create a new process using rundll32.[52]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1110.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1110/001",
                    "technique_name": "brute force : password guessing",
                    "technique_description": "adversaries with no prior knowledge of legitimate credentials within the system or environment may guess passwords to attempt access to accounts. without knowledge of the password for an account, an adversary may opt to systematically guess the password using a repetitive or iterative mechanism. an adversary may guess login credentials without prior knowledge of system or environment passwords during an operation by using a list of common passwords. password guessing may or may not take into account the target's policies on password complexity or use policies that may lock accounts out after a number of failed attempts.",
                    "procedure_description": "hermeticwizard can use a list of hardcoded credentials in attempt to authenticate to smb shares.[14]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1046",
                    "technique_link": "https://attack.mitre.org/techniques/T1046",
                    "technique_name": "network service discovery",
                    "technique_description": "adversaries may attempt to get a listing of services running on remote hosts and local network infrastructure devices, including those that may be vulnerable to remote software exploitation. common methods to acquire this information include port and/or vulnerability scans using tools that are brought onto a system.",
                    "procedure_description": "hermeticwizard has the ability to scan ports on a compromised network.[31]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "hermeticwizard can find machines on the local network by gathering known local ip addresses through dnsgetcachedatatable, getipnettable,wnetopenenumw(resource_globalnet, resourcetype_any),netserverenum,gettcptable, and getadaptersaddresses.[47]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1570",
                    "technique_link": "https://attack.mitre.org/techniques/T1570",
                    "technique_name": "lateral tool transfer",
                    "technique_description": "adversaries may transfer tools or other files between systems in a compromised environment. once brought into the victim environment (i.e. ingress tool transfer) files may then be copied from one system to another to stage adversary tools or other files over the course of an operation. adversaries may copy files between internal victim systems to support lateral movement using inherent file sharing protocols such as file sharing over smb/windows admin shares to connected network shares or with authenticated connections via remote desktop protocol.",
                    "procedure_description": "hermeticwizard can copy files to other machines on a compromised network.[19]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/002",
                    "technique_name": "remote services : smb/windows admin shares",
                    "technique_description": "adversaries may use valid accounts to interact with a remote network share using server message block (smb). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "hermeticwizard can use a list of hardcoded credentials to to authenticate via ntlmssp to the smb shares on remote systems.[29]"
                }
            ]
        }
    ]
};