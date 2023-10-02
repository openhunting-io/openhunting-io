var threatdata = {
    "name": "Rifdoor",
    "alias": "Rifdoor",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Rifdoor",
        "names": [
            {
                "name": "Rifdoor"
            }
        ],
        "description": "(AhnLab) Rifdoor was first discovered in November 2015, and it remained active until early 2016. A Rifdoor variant was used to attack SEOUL ADEX exhibitors in 2015 and was found in the hacking incidents of security companies in early 2016.\n\nWhen it enters the system, Rifdoor generates a file by adding garbage data to the 4 bytes of the last part of the file. Therefore, since the hash value changes each time the system is infected, the malware cannot be found in the system with a simple hash value.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://global.ahnlab.com/global/upload/download/techreport/%5BAhnLab%5DAndariel_a_Subgroup_of_Lazarus%20(3).pdf",
            "https://www.carbonblack.com/2020/04/16/vmware-carbon-black-tau-threat-analysis-the-evolution-of-lazarus/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0433/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.rifdoor"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Rifdoor"
        ],
        "uuid": "52c89d28-fe3b-4d5f-9881-a0df2180f712",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rifdoor",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.carbonblack.com/2020/04/16/vmware-carbon-black-tau-threat-analysis-the-evolution-of-lazarus/",
            "date": "2020-04-16",
            "organization": "VMWare Carbon Black",
            "author": "Scott Knight",
            "title": "The Evolution of Lazarus",
            "categories": [
                "HOTCROISSANT",
                "Rifdoor"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/assets/cyber-threats-2019-retrospect.pdf",
            "date": "2020-03-03",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2019:A Year in Retrospect",
            "categories": [
                "KevDroid",
                "MESSAGETAP",
                "magecart",
                "AndroMut",
                "Cobalt Strike",
                "CobInt",
                "Crimson RAT",
                "DNSpionage",
                "Dridex",
                "Dtrack",
                "Emotet",
                "FlawedAmmyy",
                "FlawedGrace",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Grateful POS",
                "ISFB",
                "Kazuar",
                "LockerGoga",
                "Nokki",
                "QakBot",
                "Ramnit",
                "REvil",
                "Rifdoor",
                "RokRAT",
                "Ryuk",
                "shadowhammer",
                "ShadowPad",
                "Shifu",
                "Skipper",
                "StoneDrill",
                "Stuxnet",
                "TrickBot",
                "Winnti",
                "ZeroCleare",
                "APT41",
                "MUSTANG PANDA",
                "Sea Turtle"
            ]
        },
        {
            "data_url": "https://global.ahnlab.com/global/upload/download/techreport/[AhnLab]Andariel_a_Subgroup_of_Lazarus%20(3).pdf",
            "date": "2018-06-23",
            "organization": "AhnLab",
            "author": "AhnLab",
            "title": "Full Discloser of Andariel, A Subgroup of Lazarus Threat Group",
            "categories": [
                "PhanDoor",
                "Rifdoor"
            ]
        },
        {
            "data_url": "http://www.issuemakerslab.com/research3/",
            "date": "2017-05",
            "organization": "IssueMakersLab",
            "author": "IssueMakersLab",
            "title": "Operation GoldenAxe",
            "categories": [
                "Rifdoor"
            ]
        },
        {
            "data_url": "https://mega.nz/file/lkh1gY5C#93FUlwTwl0y27cfM0jtm4SYnWbtk06d0qoDg1e4eQ6s",
            "date": "2017",
            "organization": "FSI",
            "author": "Kay Kwak (Kyoung-Ju Kwak)",
            "title": "Campaign Rifle: Andariel, The Maiden of Anguish",
            "categories": [
                "Rifdoor"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "rifdoor",
            "procedure_code": "s0433",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0433",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/001",
                    "technique_name": "phishing : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. spearphishing attachment is a specific variant of spearphishing. spearphishing attachment is different from other forms of spearphishing in that it employs the use of malware attached to an email. all forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. in this scenario, adversaries attach a file to the spearphishing email and usually rely upon user execution to gain execution. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "rifdoor has been distributed in e-mails with malicious excel or word documents.[196]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/002",
                    "technique_name": "user execution : malicious file",
                    "technique_description": "an adversary may rely upon a user opening a malicious file in order to gain execution. users may be subjected to social engineering to get them to open a file that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing attachment. adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, and .cpl.",
                    "procedure_description": "rifdoor has been executed from malicious excel or word documents containing macros.[204]"
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
                    "procedure_description": "rifdoor has created a new registry entry at hkey_current_users\\software\\microsoft\\windows\\currentversion\\run\\graphics with a value of c:\\programdata\\initech\\initech.exe /run.[224]"
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
                    "procedure_description": "rifdoor has created a new registry entry at hkey_current_users\\software\\microsoft\\windows\\currentversion\\run\\graphics with a value of c:\\programdata\\initech\\initech.exe /run.[224]"
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
                    "procedure_description": "rifdoor has encrypted strings with a single byte xor algorithm.[162]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/001",
                    "technique_name": "obfuscated files or information : binary padding",
                    "technique_description": "adversaries may use binary padding to add junk data and change the on-disk representation of malware. this can be done without affecting the functionality or behavior of a binary, but can increase the size of the binary beyond what some security tools are capable of handling due to file size limitations.",
                    "procedure_description": "rifdoor has added four additional bytes of data upon launching, then saved the changed version as c:\\programdata\\initech\\initech.exe.[34]"
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
                    "procedure_description": "rifdoor has the ability to identify the windows version on the compromised host.[310]"
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
                    "procedure_description": "rifdoor has the ability to identify the ip address of the compromised host.[198]"
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
                    "procedure_description": "rifdoor has the ability to identify the username on the compromised host.[82]"
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
                    "procedure_description": "rifdoor has encrypted command and control (c2) communications with a stream cipher.[66]"
                }
            ]
        }
    ]
};