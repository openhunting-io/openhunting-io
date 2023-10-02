var threatdata = {
    "name": "Milan",
    "alias": "Milan, James",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Milan",
        "names": [
            {
                "name": "Milan"
            },
            {
                "name": "James"
            }
        ],
        "description": "(ClearSky) The Milan backdoor malware infects the computer or server after one or more lure files are downloaded. As a result, a connection is established between the infected machine and the C&C server using DNS and HTTPS.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.clearskysec.com/wp-content/uploads/2021/08/Siamesekitten.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S1015/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.milan"
        ],
        "uuid": "87d100d3-32a9-4cf7-a4d3-2c0769b0e6b2",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "milan",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.prevailion.com/latest-targets-of-cyber-group-lyceum/",
            "date": "2021-11-09",
            "organization": "Prevailion",
            "author": "Prevailion",
            "title": "Who are latest targets of cyber group Lyceum?",
            "categories": [
                "Milan",
                "Shark",
                "LYCEUM"
            ]
        },
        {
            "data_url": "https://www.clearskysec.com/wp-content/uploads/2021/08/Siamesekitten.pdf",
            "date": "2021-08-17",
            "organization": "ClearSky",
            "author": "ClearSky",
            "title": "New Iranian Espionage Campaign   By \u201cSiamesekitten\u201d - Lyceum",
            "categories": [
                "danbot",
                "Milan",
                "Shark"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "milan",
            "procedure_code": "s1015",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S1015",
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
                    "procedure_description": "milan can use cmd.exe for discovery actions on a targeted system.[94]"
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
                    "procedure_description": "milan can use a com component to generate scheduled tasks.[11]"
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
                    "procedure_description": "milan can use the api dnsquery_a for dns resolution.[102]"
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
                    "procedure_description": "milan can establish persistence on a targeted host with scheduled tasks.[109][110]"
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
                    "procedure_description": "milan can establish persistence on a targeted host with scheduled tasks.[109][110]"
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
                    "procedure_description": "milan can establish persistence on a targeted host with scheduled tasks.[109][110]"
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
                    "procedure_description": "milan can delete files via c:\\windows\\system32\\cmd.exe /c ping 1.1.1.1 -n 1 -w 3000 > nul & rmdir /s /q.[51]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036",
                    "technique_link": "https://attack.mitre.org/techniques/T1036",
                    "technique_name": "masquerading",
                    "technique_description": "adversaries may attempt to manipulate features of their artifacts to make them appear legitimate or benign to users and/or security tools. masquerading occurs when the name or location of an object, legitimate or malicious, is manipulated or abused for the sake of evading defenses and observation. this may include manipulating file metadata, tricking users into misidentifying the file type, and giving legitimate task or service names.",
                    "procedure_description": "milan has used an executable named companycatalogue to appear benign.[20]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/007",
                    "technique_name": "masquerading : double file extension",
                    "technique_description": "adversaries may abuse a double extension in the filename as a means of masquerading the true file type. a file name may include a secondary file type extension that may cause only the first extension to be displayed (ex: file.txt.exe may render in some views as just file.txt). however, the second extension is the true file type that determines how the file is opened and executed. the real file extension may be hidden by the operating system in the file browser (ex: explorer.exe), as well as in any software configured using or similar to the system\u2019s policies.",
                    "procedure_description": "milan has used an executable named companycatalog.exe.config to appear benign.[4]"
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
                    "procedure_description": "milan can encode files containing information about the targeted system.[215][181]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/001",
                    "technique_name": "account discovery : local account",
                    "technique_description": "adversaries may attempt to get a listing of local system accounts. this information can help adversaries determine which local accounts exist on a system to aid in follow-on behavior.",
                    "procedure_description": "milan has run c:\\windows\\system32\\cmd.exe /c cmd /c dir c:\\users\\ /s 2>&1 to discover local accounts.[23]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1012",
                    "technique_link": "https://attack.mitre.org/techniques/T1012",
                    "technique_name": "query registry",
                    "technique_description": "adversaries may interact with the windows registry to gather information about the system, configuration, and installed software.",
                    "procedure_description": "milan can query hkey_local_machine\\software\\microsoft\\cryptography machineguid to retrieve the machine guid.[60]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "milan can enumerate the targeted machine's name and guid.[229][230]"
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
                    "procedure_description": "milan can run c:\\windows\\system32\\cmd.exe /c cmd /c ipconfig /all 2>&1 to discover network settings.[142]"
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
                    "procedure_description": "milan can identify users registered to a targeted machine.[115]"
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
                    "procedure_description": "milan can upload files from a compromised host.[120]"
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
                    "procedure_description": "milan has saved files prior to upload from a compromised host to folders beginning with the characters a9850d2f.[60]"
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
                    "procedure_description": "milan can use https for communication with c2.[210][176][211]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/004",
                    "technique_name": "application layer protocol : dns",
                    "technique_description": "adversaries may communicate using the domain name system (dns) application layer protocol to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "milan has the ability to use dns for c2 communications.[40][36][41]"
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
                    "procedure_description": "milan can use hardcoded domains as an input for domain generation algorithms.[21]"
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
                    "procedure_description": "milan has received files from c2 and stored them in log folders beginning with the character sequence a9850d2f.[293]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1572",
                    "technique_link": "https://attack.mitre.org/techniques/T1572",
                    "technique_name": "protocol tunneling",
                    "technique_description": "adversaries may tunnel network communications to and from a victim system within a separate protocol to avoid detection/network filtering and/or enable access to otherwise unreachable systems. tunneling involves explicitly encapsulating a protocol within another. this behavior may conceal malicious traffic by blending in with existing traffic and/or provide an outer layer of encryption (similar to a vpn). tunneling could also enable routing of network packets that would otherwise not reach their intended destination, such as smb, rdp, or other traffic that would be filtered by network appliances or not routed over the internet.",
                    "procedure_description": "milan can use a custom protocol tunneled through dns or http.[22]"
                }
            ]
        }
    ]
};