var threatdata = {
    "name": "Spark",
    "alias": "Spark",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Downloader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Spark",
        "names": [
            {
                "name": "Spark"
            }
        ],
        "description": "(Cybereason) The Spark backdoor allows the attackers to:\n\u2022 Collect information about the infected machine.\n\u2022 Encrypt the collected data and send it to the attackers over the HTTP protocol.\n\u2022 Download additional payloads.\n\u2022 Log keystrokes.\n\u2022 Record audio using the computer\u2019s microphone.\n\u2022 Execute commands on the infected machine.\n\nThe creators of the Spark backdoor use a few techniques that are intended to keep the backdoor under-the-radar, including:\n\u2022 Packing the payloads with the Enigma packer.\n\u2022 Checking for antivirus and other security products using WMI.\n\u2022 Validating Arabic keyboard and language settings on the infected machine.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://www.cybereason.com/blog/new-cyber-espionage-campaigns-targeting-palestinians-part-one"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0543/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.spark"
        ],
        "uuid": "934e2c2c-e02e-4deb-afa4-064a1b10c29b",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "spark",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/new-espionage-attack-molerats-apt-targeting-users-middle-east",
            "date": "2022-01-20",
            "organization": "Zscaler",
            "author": "Sahil Antil",
            "title": "New espionage attack by Molerats APT targeting users in the Middle East",
            "categories": [
                "Spark"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/hubfs/dam/collateral/reports/Molerats-in-the-Cloud-New-Malware-Arsenal-Abuses-Cloud-Platforms-in-Middle-East-Espionage-Campaign.pdf",
            "date": "2020-12-09",
            "organization": "Cybereason",
            "author": "Cybereason Nocturnus Team",
            "title": "MOLERATS IN THE CLOUD: New Malware Arsenal Abuses Cloud Platforms in Middle East Espionage Campaign",
            "categories": [
                "DropBook",
                "JhoneRAT",
                "Molerat Loader",
                "Pierogi",
                "Quasar RAT",
                "SharpStage",
                "Spark"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/new-malware-arsenal-abusing-cloud-platforms-in-middle-east-espionage-campaign",
            "date": "2020-12-09",
            "organization": "Cybereason",
            "author": "Cybereason Nocturnus",
            "title": "New Malware Arsenal Abusing Cloud Platforms in Middle East Espionage Campaign",
            "categories": [
                "DropBook",
                "MoleNet",
                "Quasar RAT",
                "SharpStage",
                "Spark"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/molerats-delivers-spark-backdoor/",
            "date": "2020-03-03",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Molerats Delivers Spark Backdoor to Government and Telecommunications Organizations",
            "categories": [
                "Downeks",
                "JhoneRAT",
                "Molerat Loader",
                "Spark"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/new-cyber-espionage-campaigns-targeting-palestinians-part-one",
            "date": "2020-02-13",
            "organization": "Cybereason",
            "author": "Cybereason Nocturnus",
            "title": "New Cyber Espionage Campaigns Targeting Palestinians - Part 1: The Spark Campaign",
            "categories": [
                "Spark"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "spark",
            "procedure_code": "s0543",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0543",
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
                    "procedure_description": "spark can use cmd.exe to run commands.[314]"
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
                    "procedure_description": "spark has used a custom xor algorithm to decrypt the payload.[218]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/002",
                    "technique_name": "obfuscated files or information : software packing",
                    "technique_description": "adversaries may perform software packing or virtual machine software protection to conceal their code. software packing is a method of compressing or encrypting an executable. packing an executable changes the file signature in an attempt to avoid signature-based detection. most decompression techniques decompress the executable code in memory. virtual machine software protection translates an executable's original code into a special format that only a special virtual machine can run. a virtual machine is then called to run this code.",
                    "procedure_description": "spark has been packed with enigma protector to obfuscate its contents.[78]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/002",
                    "technique_name": "virtualization/sandbox evasion : user activity based checks",
                    "technique_description": "adversaries may employ various user activity checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "spark has used a splash screen to check whether an user actively clicks on the screen before running malicious code.[7]"
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
                    "procedure_description": "spark can collect the hostname, keyboard layout, and language from the system.[344]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1614.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1614/001",
                    "technique_name": "system location discovery : system language discovery",
                    "technique_description": "adversaries may attempt to gather information about the system language of a victim in order to infer the geographical location of that host. this information may be used to shape follow-on behaviors, including whether the adversary infects the target and/or attempts specific actions. this decision may be employed by malware developers and operators to reduce their risk of attracting the attention of specific law enforcement agencies or prosecution/scrutiny from other entities.",
                    "procedure_description": "spark has checked the results of the getkeyboardlayoutlist and the language name returned by getlocaleinfoa to make sure they contain the word \"arabic\" before executing.[20]"
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
                    "procedure_description": "spark has run the whoami command and has a built-in command to identify the user logged in.[175]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/002",
                    "technique_name": "virtualization/sandbox evasion : user activity based checks",
                    "technique_description": "adversaries may employ various user activity checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "spark has used a splash screen to check whether an user actively clicks on the screen before running malicious code.[7]"
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
                    "procedure_description": "spark has used http post requests to communicate with its c2 server to receive commands.[315]"
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
                    "procedure_description": "spark has encoded communications with the c2 server with base64.[85]"
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
                    "procedure_description": "spark has exfiltrated data over the c2 channel.[119]"
                }
            ]
        }
    ]
};