var threatdata = {
    "name": "Regin",
    "alias": "Regin, Prax, WarriorPride",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Tunneling",
    "modified": "2021-02-05",
    "all_data": {
        "tool": "Regin",
        "names": [
            {
                "name": "Regin"
            },
            {
                "name": "Prax"
            },
            {
                "name": "WarriorPride"
            }
        ],
        "description": "Regin is a sophisticated malware and hacking toolkit attributed to United States' National Security Agency (NSA) for government spying operations. It was first publicly revealed by Kaspersky Lab, Symantec, and The Intercept in November 2014. Regin malware targeted victims in a range of industries, telecom, government, and financial institutions. It was engineered to be modular and over time dozens of modules have been found and attributed to this family. Symantec observed around 100 infections in 10 different countries across a variety of organisations including private companies, government entities, and research institutes.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Tunneling"
        ],
        "information": [
            "https://securelist.com/regin-nation-state-ownage-of-gsm-networks/67741/",
            "https://en.wikipedia.org/wiki/Regin_(malware)"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0019/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.regin"
        ],
        "uuid": "ccaa85ad-0371-471b-9369-9d6d0c0f1bc6",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "regin",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.epicturla.com/previous-works/hitb2020-voltron-sta",
            "date": "2021-02-05",
            "organization": "EpicTurla",
            "author": "Juan Andr\u00e9s Guerrero-Saade",
            "title": "Voltron STA The curious case of 0xFancyFilter",
            "categories": [
                "fancyfilter",
                "MISTYVEAL",
                "Regin"
            ]
        },
        {
            "data_url": "https://securelist.com/big-threats-using-code-similarity-part-1/97239/",
            "date": "2020-06-09",
            "organization": "Kaspersky Labs",
            "author": "Costin Raiu",
            "title": "Looking at Big Threats Using Code Similarity. Part 1",
            "categories": [
                "Penquin Turla",
                "CCleaner Backdoor",
                "EternalPetya",
                "Regin",
                "WannaCryptor",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=jeLd-gw2bWo",
            "date": "2018-06-15",
            "organization": "Youtube (defconswitzerland)",
            "author": "Costin Raiu",
            "title": "Area41 Keynote",
            "categories": [
                "Lambert",
                "Regin"
            ]
        },
        {
            "data_url": "https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=ce2df4da-afe9-4a24-b28c-0fb3ba671d95&CommunityKey=1ecf5f55-9545-44d6-b0f4-4e4a7f5f5e68&tab=librarydocuments",
            "date": "2016-08-08",
            "organization": "Symantec",
            "author": "A L Johnson",
            "title": "Strider: Cyberespionage group turns eye of Sauron on targets",
            "categories": [
                "Flame",
                "Regin",
                "Remsec",
                "ProjectSauron"
            ]
        },
        {
            "data_url": "https://www.symantec.com/content/dam/symantec/docs/security-center/white-papers/regin-top-tier-espionage-tool-15-en.pdf",
            "date": "2015-08-27",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Regin: Top-tier espionage tool enables stealthy surveillance",
            "categories": [
                "Regin"
            ]
        },
        {
            "data_url": "https://www.kaspersky.com/blog/regin-apt-most-sophisticated/6852/",
            "date": "2014-11-25",
            "organization": "Kaspersky Labs",
            "author": "Brain Donohue",
            "title": "Regin APT Attacks Among the Most Sophisticated Ever Analyzed",
            "categories": [
                "Regin"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08070305/Kaspersky_Lab_whitepaper_Regin_platform_eng.pdf",
            "date": "2014-11-24",
            "organization": "Kaspersky",
            "author": "Kaspersky Lab",
            "title": "The Regin Platform Nation-State Ownage Of GSM Networks",
            "categories": [
                "Regin"
            ]
        },
        {
            "data_url": "https://securelist.com/regin-nation-state-ownage-of-gsm-networks/67741/",
            "date": "2014-11-24",
            "organization": "Kaspersky",
            "author": "GReAT",
            "title": "Regin: nation-state ownage of GSM networks",
            "categories": [
                "Regin"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "regin",
            "procedure_code": "s0019",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0019",
            "techniques": [
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
                    "procedure_description": "the regin malware platform uses extended attributes to store encrypted executables.[18]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/005",
                    "technique_name": "hide artifacts : hidden file system",
                    "technique_description": "adversaries may use a hidden file system to conceal malicious activity from users and security tools. file systems provide a structure to store and access data from physical storage. typically, a user engages with a file system through applications that allow them to access files and directories, which are an abstraction from their physical location (ex: disk sector). standard file systems include fat, ntfs, ext4, and apfs. file systems can also contain other structures, such as the volume boot record (vbr) and master file table (mft) in ntfs.",
                    "procedure_description": "regin has used a hidden file system to store some of its components.[5]"
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
                    "procedure_description": "regin stage 1 modules for 64-bit systems have been found to be signed with fake certificates masquerading as originating from microsoft corporation and broadcom corporation.[7]"
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
                    "procedure_description": "regin appears to have functionality to modify remote registry information.[131]"
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
                    "procedure_description": "regin contains a keylogger.[149]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1040",
                    "technique_link": "https://attack.mitre.org/techniques/T1040",
                    "technique_name": "network sniffing",
                    "technique_description": "adversaries may sniff network traffic to capture information about an environment, including authentication material passed over the network. network sniffing refers to using the network interface on a system to monitor or capture information sent over a wired or wireless connection. an adversary may place a network interface into promiscuous mode to passively access data in transit over the network, or use span ports to capture a larger amount of data.",
                    "procedure_description": "regin appears to have functionality to sniff for credentials passed over http, smtp, and smb.[25]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1040",
                    "technique_link": "https://attack.mitre.org/techniques/T1040",
                    "technique_name": "network sniffing",
                    "technique_description": "adversaries may sniff network traffic to capture information about an environment, including authentication material passed over the network. network sniffing refers to using the network interface on a system to monitor or capture information sent over a wired or wireless connection. an adversary may place a network interface into promiscuous mode to passively access data in transit over the network, or use span ports to capture a larger amount of data.",
                    "procedure_description": "regin appears to have functionality to sniff for credentials passed over http, smtp, and smb.[25]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/002",
                    "technique_name": "remote services : smb/windows admin shares",
                    "technique_description": "adversaries may use valid accounts to interact with a remote network share using server message block (smb). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "the regin malware platform can use windows admin shares to move laterally.[44]"
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
                    "procedure_description": "regin contains a keylogger.[149]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071",
                    "technique_link": "https://attack.mitre.org/techniques/T1071",
                    "technique_name": "application layer protocol",
                    "technique_description": "adversaries may communicate using osi application layer protocols to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "the regin malware platform supports many standard protocols, including smb.[10]"
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
                    "procedure_description": "the regin malware platform supports many standard protocols, including http and https.[275]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1095",
                    "technique_link": "https://attack.mitre.org/techniques/T1095",
                    "technique_name": "non-application layer protocol",
                    "technique_description": "adversaries may use an osi non-application layer protocol for communication between host and c2 server or among infected hosts within a network. the list of possible protocols is extensive. specific examples include use of network layer protocols, such as the internet control message protocol (icmp), transport layer protocols, such as the user datagram protocol (udp), session layer protocols, such as socket secure (socks), as well as redirected/tunneled protocols, such as serial over lan (sol).",
                    "procedure_description": "the regin malware platform can use icmp to communicate between infected computers.[59]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/002",
                    "technique_name": "proxy : external proxy",
                    "technique_description": "adversaries may use an external proxy to act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, to provide resiliency in the face of connection loss, or to ride over existing trusted communications paths to avoid suspicion.",
                    "procedure_description": "regin leveraged several compromised universities as proxies to obscure its origin.[22]"
                }
            ]
        },
        {
            "procedure_name": "reg",
            "procedure_code": "s0075",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0075",
            "techniques": [
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
                    "procedure_description": "reg may be used to interact with and modify the windows registry of a local or remote system at the command-line interface.[1]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1552.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1552/002",
                    "technique_name": "unsecured credentials : credentials in registry",
                    "technique_description": "adversaries may search the registry on compromised systems for insecurely stored credentials. the windows registry stores configuration information that can be used by the system or other programs. adversaries may query the registry looking for credentials and passwords that have been stored for use by other programs or services. sometimes these credentials are used for automatic logons.",
                    "procedure_description": "reg may be used to find credentials in the windows registry.[1]"
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
                    "procedure_description": "reg may be used to gather details from the windows registry of a local or remote system at the command-line interface.[77]"
                }
            ]
        }
    ]
};