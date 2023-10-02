var threatdata = {
    "name": "Micropsia",
    "alias": "Micropsia",
    "category": "Malware",
    "type": "Info stealer, Keylogger, Exfiltration",
    "modified": "2023-04-04",
    "all_data": {
        "tool": "Micropsia",
        "names": [
            {
                "name": "Micropsia"
            }
        ],
        "description": "(Palo Alto) The MICROPSIA malware family is written in Delphi and is an information stealing malware family with a wide range of data theft functionality built in.\n\nThe main capabilities of the malware are as follows:\n\u2022 Logging of keystrokes to a hardcoded text file and exfiltration to a remote server\n\u2022 Capturing screenshots of the infected machines\n\u2022 Searching for files with extensions matching Microsoft Office documents and using WinRAR to archive these prior to exfiltration.",
        "category": "Malware",
        "type": [
            "Info stealer",
            "Keylogger",
            "Exfiltration"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-targeted-attacks-middle-east-using-kasperagent-micropsia/",
            "http://blog.talosintelligence.com/2017/06/palestine-delphi.html",
            "https://research.checkpoint.com/apt-attack-middle-east-big-bang/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0339/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.micropsia"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Micropsia"
        ],
        "uuid": "f0b0c482-814c-4f97-a2cb-e5e963ed448a",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Micropsia",
            "malware_alias": null,
            "malware": "win.micropsia",
            "last_update": "2021-08-14 22:45:08",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "8c560cf2281320736e03f126d978ba28",
                        "timestamp": "2021-08-14 22:45:08"
                    },
                    {
                        "value": "cb142b1fe66cd3720b7d2cb054d50f82",
                        "timestamp": "2021-08-14 22:45:08"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-08-14 22:45:08",
    "file_name": "micropsia",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/mantis-palestinian-attacks",
            "date": "2023-04-04",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Mantis: New Tooling Used in Attacks Against Palestinian Targets",
            "categories": [
                "Arid Gopher",
                "Micropsia"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/02/arid-viper-targets-palestine.html",
            "date": "2022-02-02",
            "organization": "Cisco",
            "author": "Asheer Malhotra",
            "title": "Arid Viper APT targets Palestine with new wave of politically themed phishing attacks, malware",
            "categories": [
                "Micropsia"
            ]
        },
        {
            "data_url": "https://about.fb.com/wp-content/uploads/2021/04/Technical-threat-report-Arid-Viper-April-2021.pdf",
            "date": "2021-04-21",
            "organization": "Facebook",
            "author": "Michael Flossman",
            "title": "Technical Paper // Taking Action Against Arid Viper",
            "categories": [
                "Viper RAT",
                "Micropsia"
            ]
        },
        {
            "data_url": "https://github.com/jeFF0Falltrades/IoCs/blob/master/APT/micropsia_apt_c_23.md",
            "date": "2019-08-15",
            "organization": "Github (jeFF0Falltrades)",
            "author": "Jeff Archer",
            "title": "MICROPSIA (APT-C-23)",
            "categories": [
                "Micropsia"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/apt-attack-middle-east-big-bang/",
            "date": "2018-07-08",
            "organization": "Check Point Research",
            "author": "Check Point Research",
            "title": "APT Attack In the Middle East: The Big Bang",
            "categories": [
                "Micropsia",
                "The Big Bang"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2017/06/palestine-delphi.html",
            "date": "2017-06-19",
            "organization": "Cisco Talos",
            "author": "Paul Rascagn\u00e8res",
            "title": "Delphi Used To Score Against Palestine",
            "categories": [
                "Micropsia",
                "AridViper"
            ]
        },
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2017/04/unit42-targeted-attacks-middle-east-using-kasperagent-micropsia/",
            "date": "2017-04-05",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tomer Bar",
            "title": "Targeted Attacks in the Middle East Using KASPERAGENT and MICROPSIA",
            "categories": [
                "KasperAgent",
                "Micropsia"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "micropsia",
            "procedure_code": "s0339",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0339",
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
                    "procedure_description": "micropsia creates a command-line shell using cmd.exe.[219]"
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
                    "procedure_description": "micropsia searches for anti-virus software and firewall products installed on the victim\u2019s machine using wmi.[79][80]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "micropsia creates a shortcut to maintain persistence.[24]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "micropsia creates a shortcut to maintain persistence.[24]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/001",
                    "technique_name": "hide artifacts : hidden files and directories",
                    "technique_description": "adversaries may set files and directories to be hidden to evade detection mechanisms. to prevent normal users from accidentally changing special files on a system, most operating systems have the concept of a \u2018hidden\u2019 file. these files don\u2019t show up when a user browses the file system with a gui or when using normal commands on the command line. users must explicitly ask to show the hidden files either via a series of graphical user interface (gui) prompts or with command line switches (dir /a for windows and ls \u2013a for linux and macos).",
                    "procedure_description": "micropsia creates a new hidden directory to store all components' outputs in a dedicated sub-folder for each.[32]"
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
                    "procedure_description": "micropsia obfuscates the configuration with a custom base64 and xor.[213][214]"
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
                    "procedure_description": "micropsia has keylogging capabilities.[117]"
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
                    "procedure_description": "micropsia can perform a recursive directory listing for all volume drives available on the victim's machine and can also fetch specific files by their paths.[198]"
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
                    "procedure_description": "micropsia searches for anti-virus software and firewall products installed on the victim\u2019s machine using wmi.[64][65]"
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
                    "procedure_description": "micropsia gathers the hostname and os version from the victim\u2019s machine.[227][228]"
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
                    "procedure_description": "micropsia collects the username from the victim\u2019s machine.[114]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/001",
                    "technique_name": "archive collected data : archive via utility",
                    "technique_description": "adversaries may use utilities to compress and/or encrypt collected data prior to exfiltration. many utilities include functionalities to compress, encrypt, or otherwise package data into a format that is easier/more secure to transport.",
                    "procedure_description": "micropsia creates a rar archive based on collected files on the victim's machine.[47]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1123",
                    "technique_link": "https://attack.mitre.org/techniques/T1123",
                    "technique_name": "audio capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., microphones and webcams) or applications (e.g., voice and video call services) to capture audio recordings for the purpose of listening into sensitive conversations to gather information.",
                    "procedure_description": "micropsia can perform microphone recording.[26]"
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
                    "procedure_description": "micropsia executes an rar tool to recursively archive files based on a predefined list of file extensions (.xls, .xlsx, .csv, .odt, .doc, .docx, .ppt, .pptx, .pdf, .mdb, .accdb, .accde, *.txt).[26]"
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
                    "procedure_description": "micropsia has keylogging capabilities.[117]"
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
                    "procedure_description": "micropsia takes screenshots every 90 seconds by calling the gdi32.bitblt api.[108]"
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
                    "procedure_description": "micropsia uses http and https for c2 network communications.[208][209]"
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
                    "procedure_description": "micropsia can download and execute an executable from the c2 server.[291][292]"
                }
            ]
        }
    ]
};