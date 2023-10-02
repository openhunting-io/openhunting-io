var threatdata = {
    "name": "PowerLess Backdoor",
    "alias": "PowerLess Backdoor",
    "category": "Malware",
    "type": "Backdoor, Downloader, Info stealer, Keylogger",
    "modified": "2022-02-03",
    "all_data": {
        "tool": "PowerLess Backdoor",
        "names": [
            {
                "name": "PowerLess Backdoor"
            }
        ],
        "description": "(Cybereason) A novel and previously undocumented PowerShell backdoor related to the Phosphorus group was discovered by the Cybereason Nocturnus Team and dubbed PowerLess Backdoor. It supports downloading additional payloads, such as a keylogger and an info stealer.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader",
            "Info stealer",
            "Keylogger"
        ],
        "information": [
            "https://www.cybereason.com/blog/powerless-trojan-iranian-apt-phosphorus-adds-new-powershell-backdoor-for-espionage"
        ],
        "uuid": "1f6197d2-281c-4a65-af06-c406ab70a97d",
        "last-card-change": "2022-02-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "powerless_backdoor",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "powerless",
            "procedure_code": "s1012",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S1012",
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
                    "procedure_description": "powerless is written in and executed via powershell without using powershell.exe.[179]"
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
                    "procedure_description": "powerless can use base64 and aes ecb decryption prior to execution of downloaded modules.[175]"
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
                    "procedure_description": "powerless can use a module to log keystrokes.[138]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1217",
                    "technique_link": "https://attack.mitre.org/techniques/T1217",
                    "technique_name": "browser information discovery",
                    "technique_description": "adversaries may enumerate information about browsers to learn more about compromised environments. data saved by browsers (such as bookmarks, accounts, and browsing history) may reveal a variety of personal information about users (e.g., banking sites, relationships/interests, social media, etc.) as well as details about internal network resources such as servers, tools/dashboards, or other related infrastructure.",
                    "procedure_description": "powerless has a browser info stealer module that can read chrome and edge browser database files.[16]"
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
                    "procedure_description": "powerless can encrypt browser database files prior to exfiltration.[43]"
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
                    "procedure_description": "powerless has the ability to exfiltrate data, including chrome and edge browser database files, from compromised machines.[142]"
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
                    "procedure_description": "powerless can stage stolen browser data in c:\\\\windows\\\\temp\\\\cup.tmp and keylogger data in c:\\\\windows\\\\temp\\\\report.06e17a5a-7325-4325-8e5d-e172eba7fc5bk.[76]"
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
                    "procedure_description": "powerless can use a module to log keystrokes.[138]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573",
                    "technique_link": "https://attack.mitre.org/techniques/T1573",
                    "technique_name": "encrypted channel",
                    "technique_description": "adversaries may employ a known encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. despite the use of a secure algorithm, these implementations may be vulnerable to reverse engineering if secret keys are encoded and/or generated within malware samples/configuration files.",
                    "procedure_description": "powerless can use an encrypted channel for c2 communications.[11]"
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
                    "procedure_description": "powerless can download additional payloads to a compromised host.[355]"
                }
            ]
        }
    ]
};