var threatdata = {
    "name": "Remexi",
    "alias": "Remexi, CACHEMONEY",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Info stealer",
    "modified": "2020-05-21",
    "all_data": {
        "tool": "Remexi",
        "names": [
            {
                "name": "Remexi"
            },
            {
                "name": "CACHEMONEY"
            }
        ],
        "description": "(Kaspersky) Remexi boasts features that allow it to gather keystrokes, take screenshots of windows of interest (as defined in its configuration), steal credentials, logons and the browser history, and execute remote commands. Encryption consists of XOR with a hardcoded key for its configuration and RC4 with a predefined password for encrypting the victim\u2019s data.\n\nRemexi includes different modules that it deploys in its working directory, including configuration decryption and parsing, launching victim activity logging in a separate module, and seven threads for various espionage and auxiliary functions. The Remexi developers seem to rely on legitimate Microsoft utilities.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer"
        ],
        "information": [
            "https://securelist.com/chafer-used-remexi-malware/89538/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0375/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.remexi"
        ],
        "uuid": "26363b6b-e756-4ba3-93ab-2513e5352143",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "remexi",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://bitdefender.com/files/News/CaseStudies/study/332/Bitdefender-Whitepaper-Chafer-creat4491-en-EN-interactive.pdf",
            "date": "2020-05-21",
            "organization": "Bitdefender",
            "author": "Liviu Arsene",
            "title": "Iranian Chafer APT Targeted Air Transportation and Government in Kuwait and Saudi Arabia",
            "categories": [
                "MimiKatz",
                "Remexi"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/cobalt-hickman",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT HICKMAN",
            "categories": [
                "MimiKatz",
                "Remexi",
                "APT39"
            ]
        },
        {
            "data_url": "https://twitter.com/QW5kcmV3/status/1095833216605401088",
            "date": "2019-02-14",
            "organization": "Twitter (@QW5kcmV3)",
            "author": "Andrew Thompson",
            "title": "Tweet on unpacking Remexi payload",
            "categories": [
                "Remexi"
            ]
        },
        {
            "data_url": "https://securelist.com/chafer-used-remexi-malware/89538/",
            "date": "2019-01-30",
            "organization": "Kaspersky Labs",
            "author": "Denis Legezo",
            "title": "Chafer used Remexi malware to spy on Iran-based foreign diplomatic entities",
            "categories": [
                "Remexi",
                "APT39"
            ]
        },
        {
            "data_url": "https://symantec-blogs.broadcom.com/blogs/threat-intelligence/chafer-latest-attacks-reveal-heightened-ambitions",
            "date": "2018-02-28",
            "organization": "Symantec",
            "author": "Critical Attack Discovery and Intelligence Team",
            "title": "Chafer: Latest Attacks Reveal Heightened Ambitions",
            "categories": [
                "MimiKatz",
                "Remexi"
            ]
        },
        {
            "data_url": "https://www.symantec.com/blogs/threat-intelligence/chafer-latest-attacks-reveal-heightened-ambitions",
            "date": "2018-02-28",
            "organization": "Symantec",
            "author": "Security Response Attack Investigation Team",
            "title": "Chafer: Latest Attacks Reveal Heightened Ambitions",
            "categories": [
                "Remexi",
                "APT39"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20191221064439/https://www.symantec.com/connect/blogs/iran-based-attackers-use-back-door-threats-spy-middle-eastern-targets",
            "date": "2015-12-07",
            "organization": "Symantec",
            "author": "Security Response",
            "title": "Iran-based attackers use back door threats to spy on Middle Eastern targets",
            "categories": [
                "CadelSpy",
                "Remexi",
                "Cadelle"
            ]
        },
        {
            "data_url": "http://www.symantec.com/content/en/us/enterprise/media/security_response/docs/CadelSpy-Remexi-IOC.pdf",
            "date": "2015-12-07",
            "organization": "Symantec",
            "author": "Symantec",
            "title": "Backdoor.Cadelspy and Backdoor.Remexi: indicators of compromise",
            "categories": [
                "CadelSpy",
                "Remexi"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "remexi",
            "procedure_code": "s0375",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0375",
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
                    "procedure_description": "remexi silently executes received commands with cmd.exe.[280]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "remexi uses autoit and vbs scripts throughout its execution process.[133]"
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
                    "procedure_description": "remexi utilizes scheduled tasks as a persistence mechanism.[148]"
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
                    "procedure_description": "remexi executes received commands with wmic.exe (for wmi commands). [109]"
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
                    "procedure_description": "remexi utilizes run registry keys in the hklm hive as a persistence mechanism.[222]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/004",
                    "technique_name": "boot or logon autostart execution : winlogon helper dll",
                    "technique_description": "adversaries may abuse features of winlogon to execute dlls and/or executables when a user logs in. winlogon.exe is a windows component responsible for actions at logon/logoff as well as the secure attention sequence (sas) triggered by ctrl-alt-delete. registry entries in hklm\\software[\\wow6432node\\]\\microsoft\\windows nt\\currentversion\\winlogon\\ and hkcu\\software\\microsoft\\windows nt\\currentversion\\winlogon\\ are used to manage additional helper programs and functionalities that support winlogon.",
                    "procedure_description": "remexi achieves persistence using userinit by adding the registry key hklm\\software\\microsoft\\windows nt\\currentversion\\winlogon\\userinit.[9]"
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
                    "procedure_description": "remexi utilizes scheduled tasks as a persistence mechanism.[148]"
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
                    "procedure_description": "remexi utilizes run registry keys in the hklm hive as a persistence mechanism.[222]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/004",
                    "technique_name": "boot or logon autostart execution : winlogon helper dll",
                    "technique_description": "adversaries may abuse features of winlogon to execute dlls and/or executables when a user logs in. winlogon.exe is a windows component responsible for actions at logon/logoff as well as the secure attention sequence (sas) triggered by ctrl-alt-delete. registry entries in hklm\\software[\\wow6432node\\]\\microsoft\\windows nt\\currentversion\\winlogon\\ and hkcu\\software\\microsoft\\windows nt\\currentversion\\winlogon\\ are used to manage additional helper programs and functionalities that support winlogon.",
                    "procedure_description": "remexi achieves persistence using userinit by adding the registry key hklm\\software\\microsoft\\windows nt\\currentversion\\winlogon\\userinit.[9]"
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
                    "procedure_description": "remexi utilizes scheduled tasks as a persistence mechanism.[148]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "remexi decrypts the configuration data using xor with 25-character keys.[190]"
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
                    "procedure_description": "remexi obfuscates its configuration data with xor.[270]"
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
                    "procedure_description": "remexi gathers and exfiltrates keystrokes from the machine.[152]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1010",
                    "technique_link": "https://attack.mitre.org/techniques/T1010",
                    "technique_name": "application window discovery",
                    "technique_description": "adversaries may attempt to get a listing of open application windows. window listings could convey information about how the system is used. for example, information about application windows could be used identify potential data to collect as well as identifying security tooling (security software discovery) to evade.",
                    "procedure_description": "remexi has a command to capture active windows on the machine and retrieve window titles.[28]"
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
                    "procedure_description": "remexi searches for files on the system. [248]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560",
                    "technique_link": "https://attack.mitre.org/techniques/T1560",
                    "technique_name": "archive collected data",
                    "technique_description": "an adversary may compress and/or encrypt data that is collected prior to exfiltration. compressing the data can help to obfuscate the collected data and minimize the amount of data sent over the network. encryption can be used to hide information that is being exfiltrated from detection or make exfiltration less conspicuous upon inspection by a defender.",
                    "procedure_description": "remexi encrypts and adds all gathered browser data into files for upload to c2.[46]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1115",
                    "technique_link": "https://attack.mitre.org/techniques/T1115",
                    "technique_name": "clipboard data",
                    "technique_description": "adversaries may collect data stored in the clipboard from users copying information within or between applications.",
                    "procedure_description": "remexi collects text from the clipboard.[39]"
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
                    "procedure_description": "remexi gathers and exfiltrates keystrokes from the machine.[152]"
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
                    "procedure_description": "remexi takes screenshots of windows of interest.[140]"
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
                    "procedure_description": "remexi uses bitsadmin to communicate with the c2 server over http.[276]"
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
                    "procedure_description": "remexi performs exfiltration over bitsadmin, which is also used for the c2 channel.[106]"
                }
            ]
        }
    ]
};