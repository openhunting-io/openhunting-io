var threatdata = {
    "name": "Mosquito",
    "alias": "Mosquito",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2022-05-02",
    "all_data": {
        "tool": "Mosquito",
        "names": [
            {
                "name": "Mosquito"
            }
        ],
        "description": "Mosquito is a Win32 backdoor that has been used by Turla. Mosquito is made up of three parts: the installer, the launcher, and the backdoor. The main backdoor is called CommanderDLL and is launched by the loader program.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.welivesecurity.com/wp-content/uploads/2018/01/ESET_Turla_Mosquito.pdf",
            "https://www.welivesecurity.com/2018/05/22/turla-mosquito-shift-towards-generic-tools/",
            "https://securelist.com/shedding-skin-turlas-fresh-faces/88069/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0256/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.mosquito"
        ],
        "uuid": "c9a80491-0039-41c4-83be-79c11ffac08e",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "mosquito",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2022/05/02/malware-pers-3.html",
            "date": "2022-05-02",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "Malware development: persistence - part 3. COM DLL hijack. Simple C++ example",
            "categories": [
                "Agent.BTZ",
                "Ave Maria",
                "Konni",
                "Mosquito",
                "TurlaRPC"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2020-0312.pdf",
            "date": "2020-03-12",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Swallowing the Snake\u2019s Tail: Tracking Turla Infrastructure",
            "categories": [
                "TwoFace",
                "Mosquito"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/03/12/tracking-turla-new-backdoor-armenian-watering-holes/",
            "date": "2020-03-12",
            "organization": "ESET Research",
            "author": "Matthieu Faou",
            "title": "Tracking Turla: New backdoor delivered via Armenian watering holes",
            "categories": [
                "LightNeuron",
                "Mosquito",
                "NetFlash",
                "Skipper"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/turla-apt-infrastructure/",
            "date": "2020-03-12",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Swallowing the Snake\u2019s Tail: Tracking Turla Infrastructure",
            "categories": [
                "Mosquito",
                "Sinowal"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/iron-hunter",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "IRON HUNTER",
            "categories": [
                "Agent.BTZ",
                "Cobra Carbon System",
                "LightNeuron",
                "Mosquito",
                "Nautilus",
                "Neuron",
                "Skipper",
                "Uroburos",
                "Turla"
            ]
        },
        {
            "data_url": "https://securelist.com/shedding-skin-turlas-fresh-faces/88069/",
            "date": "2018-10-04",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Shedding Skin \u2013 Turla\u2019s Fresh Faces",
            "categories": [
                "KopiLuwak",
                "Agent.BTZ",
                "Cobra Carbon System",
                "Gazer",
                "Meterpreter",
                "Mosquito",
                "Skipper"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2018/05/22/turla-mosquito-shift-towards-generic-tools/",
            "date": "2018-05-22",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "Turla Mosquito: A shift towards more generic tools",
            "categories": [
                "Mosquito",
                "Turla"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2018/01/ESET_Turla_Mosquito.pdf",
            "date": "2018-01",
            "organization": "ESET Research",
            "author": "Eset",
            "title": "Diplomats in Eastern Europe bitten by a Turla mosquito",
            "categories": [
                "Mosquito"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "mosquito",
            "procedure_code": "s0256",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0256",
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
                    "procedure_description": "mosquito can launch powershell scripts.[151]"
                },
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
                    "procedure_description": "mosquito executes cmd.exe and uses a pipe to read the results and send back the output to the c2 server.[226]"
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
                    "procedure_description": "mosquito leverages the createprocess() and loadlibrary() calls to execute files with the .dll and .exe extensions.[125]"
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
                    "procedure_description": "mosquito's installer uses wmi to search for antivirus display names.[82]"
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
                    "procedure_description": "mosquito establishes persistence under the registry key hkcu\\software\\run auto_update.[166]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.015",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/015",
                    "technique_name": "event triggered execution : component object model hijacking",
                    "technique_description": "adversaries may establish persistence by executing malicious content triggered by hijacked references to component object model (com) objects. com is a system within windows to enable interaction between software components through the operating system.  references to various com objects are stored in the registry.",
                    "procedure_description": "mosquito uses com hijacking as a method of persistence.[11]"
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
                    "procedure_description": "mosquito establishes persistence under the registry key hkcu\\software\\run auto_update.[166]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.015",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/015",
                    "technique_name": "event triggered execution : component object model hijacking",
                    "technique_description": "adversaries may establish persistence by executing malicious content triggered by hijacked references to component object model (com) objects. com is a system within windows to enable interaction between software components through the operating system.  references to various com objects are stored in the registry.",
                    "procedure_description": "mosquito uses com hijacking as a method of persistence.[11]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "mosquito deletes files using deletefilew api call.[154]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1112",
                    "technique_link": "https://attack.mitre.org/techniques/T1112",
                    "technique_name": "modify registry",
                    "technique_description": "adversaries may interact with the windows registry to hide configuration information within registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.",
                    "procedure_description": "mosquito can modify registry keys under hkcu\\software\\microsoft[dllname] to store configuration values. mosquito also modifies registry keys under hkcr\\clsid...\\inprocserver32 with a path to the launcher.[97]"
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
                    "procedure_description": "mosquito\u2019s installer is obfuscated with a custom crypter to obfuscate the installer.[219]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/011",
                    "technique_name": "obfuscated files or information : fileless storage",
                    "technique_description": "adversaries may store data in \"fileless\" formats to conceal malicious activity from defenses. fileless storage can be broadly defined as any format other than a file. common examples of non-volatile fileless storage include the windows registry, event logs, or wmi repository.",
                    "procedure_description": "mosquito stores configuration values under the registry key hkcu\\software\\microsoft[dllname].[12]"
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
                    "procedure_description": "mosquito's launcher uses rundll32.exe in a registry key value to start the main backdoor capability.[67]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "mosquito runs tasklist to obtain running processes.[175]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1518/001",
                    "technique_name": "software discovery : security software discovery",
                    "technique_description": "adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. this may include things such as firewall rules and anti-virus. adversaries may use the information from security software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "mosquito's installer searches the registry and system to see if specific antivirus tools are installed on the system.[68]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "mosquito uses the ipconfig command.[147]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1033",
                    "technique_link": "https://attack.mitre.org/techniques/T1033",
                    "technique_name": "system owner/user discovery",
                    "technique_description": "adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. they may do this, for example, by retrieving account usernames or by using os credential dumping. the information may be collected in a number of different ways using other discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. adversaries may use the information from system owner/user discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "mosquito runs whoami on the victim\u2019s machine.[121]"
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
                    "procedure_description": "mosquito uses a custom encryption algorithm, which consists of xor and a stream that is similar to the blum blum shub algorithm.[93]"
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
                    "procedure_description": "mosquito can upload and download files to the victim.[303]"
                }
            ]
        }
    ]
};