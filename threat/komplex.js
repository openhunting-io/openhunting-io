var threatdata = {
    "name": "Komplex",
    "alias": "Komplex",
    "category": "Malware",
    "type": "Reconnaissance, Banking trojan, Backdoor, Info stealer, Dropper, Downloader",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Komplex",
        "names": [
            {
                "name": "Komplex"
            }
        ],
        "description": "(Palo Alto) The Sofacy group created the Komplex Trojan to use in attack campaigns targeting the OS X operating system \u2013 a move that showcases their continued evolution toward multi-platform attacks. The tool is capable of downloading additional files to the system, executing and deleting files, as well as directly interacting with the system shell. While detailed targeting information is not currently available, we believe Komplex has been used in attacks on individuals related to the aerospace industry, as well as attacks leveraging an exploit in MacKeeper to deliver the Trojan. The Komplex Trojan revealed a design similar to Sofacy\u2019s {{JHUHUGIT}} variant Trojan, which we believe may have been done in order to handle compromised Windows and OS X systems using the same C2 server application with relative ease.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Dropper",
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-sofacys-komplex-os-x-trojan/",
            "https://blog.malwarebytes.com/threat-analysis/2016/09/komplex-mac-backdoor-answers-old-questions/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0162/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.komplex"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:komplex"
        ],
        "uuid": "28ee7912-b778-42e0-a062-f0c08ff18850",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "komplex",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://contagiodump.blogspot.de/2017/02/russian-apt-apt28-collection-of-samples.html",
            "date": "2017-02-20",
            "organization": "Contagio Dump",
            "author": "Mila Parkour",
            "title": "Part I. Russian APT - APT28 collection of samples including OSX XAgent",
            "categories": [
                "X-Agent",
                "Komplex",
                "Coreshell",
                "Downdelph",
                "HideDRV",
                "SEADADDY",
                "Sedreco",
                "Seduploader",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://objective-see.com/blog/blog_0x16.html",
            "date": "2017-01-01",
            "organization": "Objective-See",
            "author": "Patrick Wardle",
            "title": "Mac Malware of 2016",
            "categories": [
                "KeRanger",
                "Keydnap",
                "Komplex",
                "Laoshu",
                "MacInstaller",
                "MacVX",
                "Mokes",
                "WireLurker",
                "XSLCmd"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2016/09/komplex-mac-backdoor-answers-old-questions/",
            "date": "2016-09-27",
            "organization": "Malwarebytes",
            "author": "Thomas Reed",
            "title": "Komplex Mac backdoor answers old questions",
            "categories": [
                "Komplex"
            ]
        },
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2016/09/unit42-sofacys-komplex-os-x-trojan/",
            "date": "2016-09-26",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Dani Creus",
            "title": "Sofacy\u2019s \u2018Komplex\u2019 OS X Trojan",
            "categories": [
                "Komplex"
            ]
        },
        {
            "data_url": "http://www.welivesecurity.com/wp-content/uploads/2016/10/eset-sednit-part1.pdf",
            "date": "2016-08",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "En Route with Sednit - Part 1: Approaching the Target",
            "categories": [
                "Komplex",
                "Seduploader"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "komplex",
            "procedure_code": "s0162",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0162",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/001",
                    "technique_name": "create or modify system process : launch agent",
                    "technique_description": "adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence. when a user logs in, a per-user launchd process is started which loads the parameters for each launch-on-demand user agent from the property list (.plist) file found in /system/library/launchagents, /library/launchagents, and ~/library/launchagents.  property list files use the label, programarguments , and runatload keys to identify the launch agent's name, executable location, and execution time. launch agents are often installed to perform updates to programs, launch user specified programs at login, or to conduct other developer tasks.",
                    "procedure_description": "the komplex trojan creates a persistent launch agent called with $home/library/launchagents/com.apple.updates.plist with launchctl load -w ~/library/launchagents/com.apple.updates.plist.[5]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/001",
                    "technique_name": "create or modify system process : launch agent",
                    "technique_description": "adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence. when a user logs in, a per-user launchd process is started which loads the parameters for each launch-on-demand user agent from the property list (.plist) file found in /system/library/launchagents, /library/launchagents, and ~/library/launchagents.  property list files use the label, programarguments , and runatload keys to identify the launch agent's name, executable location, and execution time. launch agents are often installed to perform updates to programs, launch user specified programs at login, or to conduct other developer tasks.",
                    "procedure_description": "the komplex trojan creates a persistent launch agent called with $home/library/launchagents/com.apple.updates.plist with launchctl load -w ~/library/launchagents/com.apple.updates.plist.[5]"
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
                    "procedure_description": "the komplex payload is stored in a hidden directory at /users/shared/.local/kextd.[1]"
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
                    "procedure_description": "the komplex trojan supports file deletion.[126]"
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
                    "procedure_description": "the osinfo function in komplex collects a running process list.[148]"
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
                    "procedure_description": "the osinfo function in komplex collects the current running username.[90]"
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
                    "procedure_description": "the komplex c2 channel uses http post requests.[181]"
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
                    "procedure_description": "the komplex c2 channel uses an 11-byte xor algorithm to hide data.[76]"
                }
            ]
        }
    ]
};