var threatdata = {
    "name": "Gazer",
    "alias": "Gazer, WhiteBear",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-07-26",
    "all_data": {
        "tool": "Gazer",
        "names": [
            {
                "name": "Gazer"
            },
            {
                "name": "WhiteBear"
            }
        ],
        "description": "(Kaspersky) The WhiteBear platform implements an elaborate set of messaging and injection components to support full presence on victim hosts. A diagram helps to visualize the reach of injected components on the system.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/introducing-whitebear/81638/",
            "https://www.welivesecurity.com/2017/08/30/eset-research-cyberespionage-gazer/",
            "https://download.bitdefender.com/resources/files/News/CaseStudies/study/115/Bitdefender-Whitepaper-PAC-A4-en-EN1.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0168/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.gazer"
        ],
        "uuid": "f19a6117-4b7e-42db-a1d3-0f0eabb7aa6f",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "gazer",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cocomelonc.github.io/malware/2023/07/26/malware-tricks-35.html",
            "date": "2023-07-26",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "Malware development trick - part 35: Store payload in alternate data streams. Simple C++ example.",
            "categories": [
                "Valak",
                "POWERSOURCE",
                "Gazer",
                "PowerDuke"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2022/06/12/malware-pers-7.html",
            "date": "2022-06-12",
            "organization": "",
            "author": "cocomelonc",
            "title": "Malware development: persistence - part 7. Winlogon. Simple C++ example.",
            "categories": [
                "BazarBackdoor",
                "Gazer",
                "TurlaRPC",
                "Turla SilentMoon"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2022/04/26/malware-pers-2.html",
            "date": "2022-04-26",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "Malware development: persistence - part 2. Screensaver hijack. C++ example.",
            "categories": [
                "Gazer"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/12/02/turla-crutch-keeping-back-door-open/",
            "date": "2020-12-02",
            "organization": "ESET Research",
            "author": "Matthieu Faou",
            "title": "Turla Crutch: Keeping the \u201cback door\u201d open",
            "categories": [
                "Crutch",
                "Gazer",
                "Turla"
            ]
        },
        {
            "data_url": "https://github.com/eset/malware-ioc/tree/master/turla",
            "date": "2019-07-26",
            "organization": "Github (eset)",
            "author": "ESET Research",
            "title": "Turla Indicators of Compromise",
            "categories": [
                "Gazer"
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
            "data_url": "https://www.youtube.com/watch?v=Pvzhtjl86wc",
            "date": "2018-09-10",
            "organization": "Youtube ( Monnappa K A)",
            "author": "Monnappa K A",
            "title": "turla gazer backdoor code injection & winlogon shell persistence",
            "categories": [
                "Gazer"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2017/08/30/eset-research-cyberespionage-gazer/",
            "date": "2017-08-30",
            "organization": "ESET Research",
            "author": "Graham Cluley",
            "title": "New ESET research uncovers Gazer, the stealthy backdoor that spies on embassies",
            "categories": [
                "Gazer"
            ]
        },
        {
            "data_url": "https://securelist.com/introducing-whitebear/81638/",
            "date": "2017-08-30",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Introducing WhiteBear",
            "categories": [
                "Gazer",
                "Turla",
                "White Bear"
            ]
        },
        {
            "data_url": "https://download.bitdefender.com/resources/files/News/CaseStudies/study/115/Bitdefender-Whitepaper-PAC-A4-en-EN1.pdf",
            "date": "2016-06-30",
            "organization": "Bitdefender",
            "author": "Bitdefender",
            "title": "Pacifier APT",
            "categories": [
                "Gazer",
                "Turla"
            ]
        },
        {
            "data_url": "https://pdfhost.io/v/F0@QElMu2_MacProStorage_2017FinalBitdefenderWhitepaperNetrepserA4en_ENBitdefenderWhitepaperNetrepserA4en_ENindd.pdf",
            "date": "2015",
            "organization": "Bitdefender",
            "author": "Cristian Istrate",
            "title": "New Pacifier APT Components Point to Russian-Linked Turla Group",
            "categories": [
                "KopiLuwak",
                "Gazer",
                "Skipper"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "gazer",
            "procedure_code": "s0168",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0168",
            "techniques": [
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
                    "procedure_description": "gazer can establish persistence by creating a scheduled task.[71][72]"
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
                    "procedure_description": "gazer can establish persistence by creating a .lnk file in the start menu.[101][102]"
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
                    "procedure_description": "gazer can establish persistence by setting the value \"shell\" with \"explorer.exe, %malware_pathfile%\" under the registry key hkcu\\software\\microsoft\\windows nt\\currentversion\\winlogon.[6]"
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
                    "procedure_description": "gazer can establish persistence by creating a .lnk file in the start menu or by modifying existing .lnk files to execute the malware through cmd.exe.[12][13]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/002",
                    "technique_name": "event triggered execution : screensaver",
                    "technique_description": "adversaries may establish persistence by executing malicious content triggered by user inactivity. screensavers are programs that execute after a configurable time of user inactivity and consist of portable executable (pe) files with a .scr file extension. the windows screensaver application scrnsave.scr is located in c:\\windows\\system32\\, and c:\\windows\\syswow64\\  on 64-bit windows systems, along with screensavers included with base windows installations.",
                    "procedure_description": "gazer can establish persistence through the system screensaver by configuring it to execute the malware.[2]"
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
                    "procedure_description": "gazer can establish persistence by creating a scheduled task.[71][72]"
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
                    "procedure_description": "gazer can establish persistence by creating a .lnk file in the start menu.[101][102]"
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
                    "procedure_description": "gazer can establish persistence by setting the value \"shell\" with \"explorer.exe, %malware_pathfile%\" under the registry key hkcu\\software\\microsoft\\windows nt\\currentversion\\winlogon.[6]"
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
                    "procedure_description": "gazer can establish persistence by creating a .lnk file in the start menu or by modifying existing .lnk files to execute the malware through cmd.exe.[12][13]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/002",
                    "technique_name": "event triggered execution : screensaver",
                    "technique_description": "adversaries may establish persistence by executing malicious content triggered by user inactivity. screensavers are programs that execute after a configurable time of user inactivity and consist of portable executable (pe) files with a .scr file extension. the windows screensaver application scrnsave.scr is located in c:\\windows\\system32\\, and c:\\windows\\syswow64\\  on 64-bit windows systems, along with screensavers included with base windows installations.",
                    "procedure_description": "gazer can establish persistence through the system screensaver by configuring it to execute the malware.[2]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "gazer injects its communication module into an internet accessible process through which it performs c2.[23][24]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/003",
                    "technique_name": "process injection : thread execution hijacking",
                    "technique_description": "adversaries may inject malicious code into hijacked processes in order to evade process-based defenses as well as possibly elevate privileges. thread execution hijacking is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "gazer performs thread execution hijacking to inject its orchestrator into a running thread from a remote process.[2][3]"
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
                    "procedure_description": "gazer can establish persistence by creating a scheduled task.[71][72]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/004",
                    "technique_name": "hide artifacts : ntfs file attributes",
                    "technique_description": "adversaries may use ntfs file attributes to hide their malicious data in order to evade detection. every new technology file system (ntfs) formatted partition contains a master file table (mft) that maintains a record for every file/directory on the partition.  within mft entries are file attributes,  such as extended attributes (ea) and data [known as alternate data streams (adss) when more than one data attribute is present], that can be used to store arbitrary data (and even complete files).",
                    "procedure_description": "gazer stores configuration items in alternate data streams (adss) if the registry is not accessible.[14]"
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
                    "procedure_description": "gazer has commands to delete files and persistence mechanisms from the victim.[81][82]"
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
                    "procedure_description": "for early gazer versions, the compilation timestamp was faked.[26]"
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
                    "procedure_description": "gazer logs its actions into files that are encrypted with 3des. it also uses rsa to encrypt resources.[136]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "gazer injects its communication module into an internet accessible process through which it performs c2.[23][24]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/003",
                    "technique_name": "process injection : thread execution hijacking",
                    "technique_description": "adversaries may inject malicious code into hijacked processes in order to evade process-based defenses as well as possibly elevate privileges. thread execution hijacking is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "gazer performs thread execution hijacking to inject its orchestrator into a running thread from a remote process.[2][3]"
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
                    "procedure_description": "gazer versions are signed with various valid certificates; one was likely faked and issued by comodo for \"solid loop ltd,\" and another was issued for \"ultimate computer support ltd.\"[35][36]"
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
                    "procedure_description": "gazer obtains the current user's security identifier.[72]"
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
                    "procedure_description": "gazer communicates with its c2 servers over http.[138]"
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
                    "procedure_description": "gazer uses custom encryption for c2 that uses 3des.[54][55]"
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
                    "procedure_description": "gazer uses custom encryption for c2 that uses rsa.[21][22]"
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
                    "procedure_description": "gazer can execute a task to download a file.[194][195]"
                }
            ]
        }
    ]
};