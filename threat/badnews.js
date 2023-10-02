var threatdata = {
    "name": "BADNEWS",
    "alias": "BADNEWS, JakyllHyde",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-05-16",
    "all_data": {
        "tool": "BADNEWS",
        "names": [
            {
                "name": "BADNEWS"
            },
            {
                "name": "JakyllHyde"
            }
        ],
        "description": "BADNEWS is malware that has been used by the actors responsible for the Patchwork campaign. Its name was given due to its use of RSS feeds, forums, and blogs for command and control.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-patchwork-continues-deliver-badnews-indian-subcontinent/",
            "http://blog.fortinet.com/2017/04/05/in-depth-look-at-new-variant-of-monsoon-apt-backdoor-part-1",
            "http://blog.fortinet.com/2017/04/05/in-depth-look-at-new-variant-of-monsoon-apt-backdoor-part-2",
            "https://documents.trendmicro.com/assets/tech-brief-untangling-the-patchwork-cyberespionage-group.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0128/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.badnews"
        ],
        "uuid": "47855af1-b4fe-4dc4-ad52-3e4cf90e6924",
        "last-card-change": "2021-05-16",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "BadNews",
            "malware_alias": null,
            "malware": "win.badnews",
            "last_update": "2022-07-18 07:03:41",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "5dc86d29f26cb9792a285533fdff8835",
                        "timestamp": "2022-07-18 07:03:41"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-07-18 07:03:41",
    "file_name": "badnews",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "badnews",
            "procedure_code": "s0128",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0128",
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
                    "procedure_description": "badnews is capable of executing commands via cmd.exe.[35][36]"
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
                    "procedure_description": "badnews has a command to download an .exe and execute it via createprocess api. it can also run with shellexecute.[29][30]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "badnews creates a scheduled task to establish by executing a malicious payload every subsequent minute.[26]"
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
                    "procedure_description": "badnews installs a registry run key to establish persistence.[40]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "badnews typically loads its dll file into a legitimate signed java or vmware executable.[9][10]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "badnews creates a scheduled task to establish by executing a malicious payload every subsequent minute.[26]"
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
                    "procedure_description": "badnews installs a registry run key to establish persistence.[40]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "badnews typically loads its dll file into a legitimate signed java or vmware executable.[9][10]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/012",
                    "technique_name": "process injection : process hollowing",
                    "technique_description": "adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses. process hollowing is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "badnews has a command to download an .exe and use process hollowing to inject it into a new process.[7][8]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "badnews creates a scheduled task to establish by executing a malicious payload every subsequent minute.[26]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "badnews typically loads its dll file into a legitimate signed java or vmware executable.[9][10]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/001",
                    "technique_name": "masquerading : invalid code signature",
                    "technique_description": "adversaries may attempt to mimic features of valid code signatures to increase the chance of deceiving a user, analyst, or tool. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with. adversaries can copy the metadata and signature information from a signed program, then use it as a template for an unsigned program. files with invalid code signatures will fail digital signature validation checks, but they may appear more legitimate to users and security tools may improperly handle these files.",
                    "procedure_description": "badnews is sometimes signed with an invalid authenticode certificate in an apparent effort to make it look more legitimate.[3]"
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
                    "procedure_description": "badnews attempts to hide its payloads using legitimate filenames.[20]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/012",
                    "technique_name": "process injection : process hollowing",
                    "technique_description": "adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses. process hollowing is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "badnews has a command to download an .exe and use process hollowing to inject it into a new process.[7][8]"
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
                    "procedure_description": "when it first starts, badnews spawns a new thread to log keystrokes.[25][26][27]"
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
                    "procedure_description": "badnews identifies files with certain extensions from usb devices, then copies them to a predefined directory.[36]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1120",
                    "technique_link": "https://attack.mitre.org/techniques/T1120",
                    "technique_name": "peripheral device discovery",
                    "technique_description": "adversaries may attempt to gather information about attached peripheral devices and components connected to a computer system. peripheral devices could include auxiliary resources that support a variety of functionalities such as keyboards, printers, cameras, smart card readers, or removable storage. the information may be used to enhance their awareness of the system and network environment or may be used for further actions.",
                    "procedure_description": "badnews checks for new hard drives on the victim, such as usb devices, by listening for the wm_devicechange window message.[8][9]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1119",
                    "technique_link": "https://attack.mitre.org/techniques/T1119",
                    "technique_name": "automated collection",
                    "technique_description": "once established within a system or network, an adversary may use automated techniques for collecting internal data. methods for performing this technique could include use of a command and scripting interpreter to search for and copy information fitting set criteria such as file type, location, or name at specific time intervals. in cloud-based environments, adversaries may also use cloud apis, command line interfaces, or extract, transform, and load (etl) services to automatically collect data. this functionality could also be built into remote access tools.",
                    "procedure_description": "badnews monitors usb devices and copies files with certain extensions to a predefined directory.[5]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "when it first starts, badnews crawls the victim's local drives and collects documents with the following extensions: .doc, .docx, .pdf, .ppt, .pptx, and .txt.[20][21]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1039",
                    "technique_link": "https://attack.mitre.org/techniques/T1039",
                    "technique_name": "data from network shared drive",
                    "technique_description": "adversaries may search network shares on computers they have compromised to find files of interest. sensitive data can be collected from remote systems via shared network drives (host shared directory, network file server, etc.) that are accessible from the current system prior to exfiltration. interactive command shells may be in use, and common functionality within cmd may be used to gather information.",
                    "procedure_description": "when it first starts, badnews crawls the victim's mapped drives and collects documents with the following extensions: .doc, .docx, .pdf, .ppt, .pptx, and .txt.[2]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1025",
                    "technique_link": "https://attack.mitre.org/techniques/T1025",
                    "technique_name": "data from removable media",
                    "technique_description": "adversaries may search connected removable media on computers they have compromised to find files of interest. sensitive data can be collected from any removable media (optical disk drive, usb memory, etc.) connected to the compromised system prior to exfiltration. interactive command shells may be in use, and common functionality within cmd may be used to gather information.",
                    "procedure_description": "badnews copies files with certain extensions from usb devices toa predefined directory.[5]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1074/001",
                    "technique_name": "data staged : local data staging",
                    "technique_description": "adversaries may stage collected data in a central location or directory on the local system prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "badnews copies documents under 15mb found on the victim system to is the user's %temp%\\smb\\ folder. it also copies files from usb devices to a predefined directory.[11][12]"
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
                    "procedure_description": "when it first starts, badnews spawns a new thread to log keystrokes.[25][26][27]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "badnews has a command to take a screenshot and send it to the c2 server.[19][20]"
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
                    "procedure_description": "badnews establishes a backdoor over http.[30]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132",
                    "technique_link": "https://attack.mitre.org/techniques/T1132",
                    "technique_name": "data encoding",
                    "technique_description": "adversaries may encode data to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a standard data encoding system. use of data encoding may adhere to existing protocol specifications and includes use of ascii, unicode, base64, mime, or other binary-to-text and character encoding systems.  some data encoding systems may also result in data compression, such as gzip.",
                    "procedure_description": "after encrypting c2 data, badnews converts it into a hexadecimal representation and then encodes it into base64.[3]"
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
                    "procedure_description": "badnews encodes c2 traffic with base64.[7][10][11]"
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
                    "procedure_description": "badnews encrypts c2 data with a ror by 3 and an xor by 0x23.[9][10]"
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
                    "procedure_description": "badnews is capable of downloading additional files through c2 channels, including a new version of itself.[52][53][54]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/001",
                    "technique_name": "web service : dead drop resolver",
                    "technique_description": "adversaries may use an existing, legitimate external web service to host information that points to additional command and control (c2) infrastructure. adversaries may post content, known as a dead drop resolver, on web services with embedded (and often obfuscated/encoded) domains or ip addresses. once infected, victims will reach out to and be redirected by these resolvers.",
                    "procedure_description": "badnews collects c2 information via a dead drop resolver.[3][4][5]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/002",
                    "technique_name": "web service : bidirectional communication",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for sending commands to and receiving output from a compromised system over the web service channel. compromised systems may leverage popular websites and social media to host command and control (c2) instructions. those infected systems can then send the output from those commands back over that web service channel. the return traffic may occur in a variety of ways, depending on the web service being utilized. for example, the return traffic may take the form of the compromised system posting a comment on a forum, issuing a pull request to development project, updating a document hosted on a web service, or by sending a tweet.",
                    "procedure_description": "badnews can use multiple c2 channels, including rss feeds, github, forums, and blogs.[6][7][8]"
                }
            ]
        }
    ]
};