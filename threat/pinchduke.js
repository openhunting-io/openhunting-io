var threatdata = {
    "name": "PinchDuke",
    "alias": "PinchDuke",
    "category": "Malware",
    "type": "Loader, Info stealer, Credential stealer, Exfiltration",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "PinchDuke",
        "names": [
            {
                "name": "PinchDuke"
            }
        ],
        "description": "(F-Secure) The PinchDuke toolset consists of multiple loaders and a core information stealer trojan. The loaders associated with the PinchDuke toolset have also been observed being used with {{CosmicDuke}}.\n\nThe PinchDuke information stealer gathers system configuration information, steals user credentials, and collects user files from the compromised host transferring these via HTTP(S) to a C&C server. We believe PinchDuke\u2019s credential stealing functionality is based on the source code of the Pinch credential stealing malware (also known as LdPinch) that was developed in the early 2000s and has later been openly distributed on underground forums.\n\nCredentials targeted by PinchDuke include ones associated with the following software or services:\n\u2022 The Bat!\n\u2022 Yahoo!\n\u2022 Mail.ru\n\u2022 Passport.Net\n\u2022 Google Talk\n\u2022 Netscape Navigator\n\u2022 Mozilla Firefox\n\u2022 Mozilla Thunderbird\n\u2022 Internet Explorer\n\u2022 Microsoft Outlook\n\u2022 WinInet Credential Cache\n\u2022 Lightweight Directory Access Protocol (LDAP)\n\nPinchDuke will also search for files that have been created within a predefined timeframe and whose file extension is present in a predefined list.",
        "category": "Malware",
        "type": [
            "Loader",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog-assets.f-secure.com/wp-content/uploads/2020/03/18122307/F-Secure_Dukes_Whitepaper.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0048/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pinchduke"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:PinchDuke"
        ],
        "uuid": "ab078dbf-23c7-41b1-9be0-667ec1ca050c",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pinchduke",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.f-secure.com/wp-content/uploads/2020/03/F-Secure_Dukes_Whitepaper.pdf",
            "date": "2015-09",
            "organization": "F-Secure",
            "author": "F-Secure Labs",
            "title": "The Dukes - 7 Years of Russian Cyberespionage",
            "categories": [
                "PinchDuke"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "pinchduke",
            "procedure_code": "s0048",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0048",
            "techniques": [
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555",
                    "technique_link": "https://attack.mitre.org/techniques/T1555",
                    "technique_name": "credentials from password stores",
                    "technique_description": "adversaries may search for common password storage locations to obtain user credentials. passwords are stored in several places on a system, depending on the operating system or application holding the credentials. there are also specific applications that store passwords to make it easier for users manage and maintain. once credentials are obtained, they can be used to perform lateral movement and access restricted information.",
                    "procedure_description": "pinchduke steals credentials from compromised hosts. pinchduke's credential stealing functionality is believed to be based on the source code of the pinch credential stealing malware (also known as ldpinch). credentials targeted by pinchduke include ones associated with many sources such as the bat!, yahoo!, mail.ru, passport.net, google talk, and microsoft outlook.[7]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "pinchduke steals credentials from compromised hosts. pinchduke's credential stealing functionality is believed to be based on the source code of the pinch credential stealing malware (also known as ldpinch). credentials targeted by pinchduke include ones associated with many sources such as netscape navigator, mozilla firefox, mozilla thunderbird, and internet explorer. [21]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003",
                    "technique_link": "https://attack.mitre.org/techniques/T1003",
                    "technique_name": "os credential dumping",
                    "technique_description": "adversaries may attempt to dump credentials to obtain account login and credential material, normally in the form of a hash or a clear text password, from the operating system and software. credentials can then be used to perform lateral movement and access restricted information.",
                    "procedure_description": "pinchduke steals credentials from compromised hosts. pinchduke's credential stealing functionality is believed to be based on the source code of the pinch credential stealing malware (also known as ldpinch). credentials targeted by pinchduke include ones associated many sources such as wininet credential cache, and lightweight directory access protocol (ldap).[11]"
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
                    "procedure_description": "pinchduke searches for files created within a certain timeframe and whose file extension matches a predefined list.[136]"
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
                    "procedure_description": "pinchduke gathers system configuration information.[274]"
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
                    "procedure_description": "pinchduke collects user files from the compromised host based on predefined file extensions.[139]"
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
                    "procedure_description": "pinchduke transfers files from the compromised host via http or https to a c2 server.[66]"
                }
            ]
        }
    ]
};