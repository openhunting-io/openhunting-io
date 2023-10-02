var threatdata = {
    "name": "Sys10",
    "alias": "Sys10",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "Sys10",
        "names": [
            {
                "name": "Sys10"
            }
        ],
        "description": "Sys10 is a backdoor that was used throughout 2013 by Naikon.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2015/TheNaikonAPT-MsnMM1.pdf",
            "https://securelist.com/analysis/publications/69953/the-naikon-apt/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0060/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sys10"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:sys10"
        ],
        "uuid": "d1d013e0-ad32-4191-95cb-d1a93c9deb73",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sys10",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/analysis/publications/69953/the-naikon-apt/",
            "date": "2015-05-14",
            "organization": "Kaspersky Labs",
            "author": "Kurt Baumgartner",
            "title": "The Naikon APT",
            "categories": [
                "Naikon",
                "SslMM",
                "Sys10",
                "WinMM",
                "xsPlus",
                "APT30",
                "Naikon"
            ]
        },
        {
            "data_url": "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2015/TheNaikonAPT-MsnMM1.pdf",
            "date": "2015-05",
            "organization": "Kaspersky Labs",
            "author": "Kurt Baumgartner",
            "title": "The MsnMM Campaigns - The Earliest Naikon APTCampaigns",
            "categories": [
                "SslMM",
                "Sys10",
                "WinMM",
                "xsPlus"
            ]
        },
        {
            "data_url": "https://www2.fireeye.com/rs/fireye/images/rpt-apt30.pdf",
            "date": "2015-04",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "APT30 AND THE MECHANICS OF A LONG-RUNNING CYBER ESPIONAGE OPERATION",
            "categories": [
                "BACKBEND",
                "backspace",
                "CREAMSICLE",
                "FLASHFLOOD",
                "GEMCUTTER",
                "MILKMAID",
                "Naikon",
                "NETEAGLE",
                "ORANGEADE",
                "SHIPSHAPE",
                "SPACESHIP",
                "SslMM",
                "Sys10",
                "WinMM",
                "xsPlus",
                "APT30"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "sys10",
            "procedure_code": "s0060",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0060",
            "techniques": [
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/001",
                    "technique_name": "permission groups discovery : local groups",
                    "technique_description": "adversaries may attempt to find local system groups and permission settings. the knowledge of local system permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as the users found within the local administrators group.",
                    "procedure_description": "sys10 collects the group name of the logged-in user and sends it to the c2.[27]"
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
                    "procedure_description": "sys10 collects the computer name, os versioning information, and os install date and sends the information to the c2.[348]"
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
                    "procedure_description": "sys10 collects the local ip address of the victim and sends it to the c2.[151]"
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
                    "procedure_description": "sys10 collects the account name of the logged-in user and sends it to the c2.[178]"
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
                    "procedure_description": "sys10 uses http for c2.[328]"
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
                    "procedure_description": "sys10 uses an xor 0x1 loop to encrypt its c2 domain.[131]"
                }
            ]
        }
    ]
};