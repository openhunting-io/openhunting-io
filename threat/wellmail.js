var threatdata = {
    "name": "WellMail",
    "alias": "WellMail",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "WellMail",
        "names": [
            {
                "name": "WellMail"
            }
        ],
        "description": "(NCSC-UK) WellMail is a lightweight tool designed to run commands or scripts with the results being sent to a hardcoded Command and Control (C2) server.\n\nThe NCSC has named this malware \u2018WellMail\u2019 due to file paths containing the word \u2018mail\u2019 and the use of server port 25 present in the sample analysed. Similar to {{WellMess}}, WellMail uses hard-coded client and certificate authority TLS certificates to communicate with C2 servers.\n\nThe binary is an ELF utility written in Golang which receives a command or script to be run through the Linux shell. To our knowledge, WellMail has not been previously named in the public domain.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.ncsc.gov.uk/files/Advisory-APT29-targets-COVID-19-vaccine-development.pdf",
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar20-198c",
            "https://www.intezer.com/blog/cloud-security/top-linux-cloud-threats-of-2020/",
            "https://www.pwc.co.uk/issues/cyber-security-services/insights/wellmail.html",
            "https://securelist.com/apt-trends-report-q3-2020/99204/",
            "https://www.ncsc.gov.uk/files/Advisory-APT29-targets-COVID-19-vaccine-development.pdf",
            "https://www.intezer.com/wp-content/uploads/2021/02/Intezer-2020-Go-Malware-Round-Up.pdf",
            "https://www.ironnet.com/blog/russian-cyber-attack-campaigns-and-actors",
            "https://blog.talosintelligence.com/2020/08/attribution-puzzle.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0515/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.wellmail"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:WellMail"
        ],
        "uuid": "011052ce-7891-4761-88ca-b493dcf2f15d",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "WellMail",
            "malware_alias": null,
            "malware": "elf.wellmail",
            "last_update": "2021-07-13 14:41:10",
            "tags": [
                "golang",
                "apt29",
                "wellmail"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "01d322dcac438d2bb6bce2bae8d613cb",
                        "timestamp": "2021-07-13 14:41:10"
                    },
                    {
                        "value": "d5c26128127f2fac6e3ff2c87b473d74",
                        "timestamp": "2021-07-13 14:41:02"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-07-13 14:41:10",
    "file_name": "wellmail",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.intezer.com/wp-content/uploads/2021/02/Intezer-2020-Go-Malware-Round-Up.pdf",
            "date": "2021-02-25",
            "organization": "Intezer",
            "author": "Intezer",
            "title": "Year of the Gopher A 2020 Go Malware Round-Up",
            "categories": [
                "NiuB",
                "WellMail",
                "elf.wellmess",
                "ArdaMax",
                "AsyncRAT",
                "CyberGate",
                "DarkComet",
                "Glupteba",
                "Nanocore RAT",
                "Nefilim",
                "NjRAT",
                "Quasar RAT",
                "WellMess",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://www.ironnet.com/blog/russian-cyber-attack-campaigns-and-actors",
            "date": "2020-12-21",
            "organization": "IronNet",
            "author": "Adam Hlavek",
            "title": "Russian cyber attack campaigns and actors",
            "categories": [
                "WellMail",
                "elf.wellmess",
                "Agent.BTZ",
                "BlackEnergy",
                "EternalPetya",
                "Havex RAT",
                "Industroyer",
                "Ryuk",
                "Triton",
                "WellMess"
            ]
        },
        {
            "data_url": "https://www.intezer.com/blog/cloud-security/top-linux-cloud-threats-of-2020/",
            "date": "2020-12-21",
            "organization": "Intezer",
            "author": "Intezer",
            "title": "Top Linux Cloud Threats of 2020",
            "categories": [
                "AgeLocker",
                "AnchorDNS",
                "Blackrota",
                "Cloud Snooper",
                "Dacls",
                "Doki",
                "FritzFrog",
                "IPStorm",
                "Kaiji",
                "Kinsing",
                "NOTROBIN",
                "Penquin Turla",
                "PLEAD",
                "Prometei",
                "RansomEXX",
                "Stantinko",
                "TeamTNT",
                "TSCookie",
                "WellMail",
                "elf.wellmess",
                "TeamTNT"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q3-2020/99204/",
            "date": "2020-11-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q3 2020",
            "categories": [
                "WellMail",
                "EVILNUM",
                "Janicab",
                "Poet RAT",
                "AsyncRAT",
                "Ave Maria",
                "Cobalt Strike",
                "Crimson RAT",
                "CROSSWALK",
                "Dtrack",
                "LODEINFO",
                "MoriAgent",
                "Okrum",
                "PlugX",
                "poisonplug",
                "Rover",
                "ShadowPad",
                "SoreFang",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/issues/cyber-security-services/insights/wellmail.html",
            "date": "2020-09-17",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Analysis of WellMail malware's Command and Control (C2) server",
            "categories": [
                "WellMail"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/08/attribution-puzzle.html",
            "date": "2020-08-13",
            "organization": "Talos Intelligence",
            "author": "Martin Lee",
            "title": "Attribution: A Puzzle",
            "categories": [
                "WellMail",
                "elf.wellmess",
                "AcidBox",
                "WellMess"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar20-198c",
            "date": "2020-07-16",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "Malware Analysis Report (AR20-198C)",
            "categories": [
                "WellMail"
            ]
        },
        {
            "data_url": "https://www.ncsc.gov.uk/files/Advisory-APT29-targets-COVID-19-vaccine-development.pdf",
            "date": "2020-07-16",
            "organization": "NCSC UK",
            "author": "NCSC UK",
            "title": "Advisory: APT29 targets COVID-19 vaccine development",
            "categories": [
                "WellMail",
                "elf.wellmess",
                "SoreFang",
                "WellMess"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "wellmail",
            "procedure_code": "s0515",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0515",
            "techniques": [
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
                    "procedure_description": "wellmail can decompress scripts received from c2.[250]"
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
                    "procedure_description": "wellmail can identify the ip address of the victim system.[247]"
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
                    "procedure_description": "wellmail can identify the current username on the victim system.[197]"
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
                    "procedure_description": "wellmail can archive files on the compromised host.[50]"
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
                    "procedure_description": "wellmail can exfiltrate files from the victim machine.[191]"
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
                    "procedure_description": "wellmail can use hard coded client and certificate authority certificates to communicate with c2 over mutual tls.[65][66]"
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
                    "procedure_description": "wellmail can receive data and executable scripts from c2.[470]"
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
                    "procedure_description": "wellmail can use tcp for c2 communications.[72]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1571",
                    "technique_link": "https://attack.mitre.org/techniques/T1571",
                    "technique_name": "non-standard port",
                    "technique_description": "adversaries may communicate using a protocol and port pairing that are typically not associated. for example, https over port 8088 or port 587 as opposed to the traditional port 443. adversaries may make changes to the standard port used by a protocol to bypass filtering or muddle analysis/parsing of network data.",
                    "procedure_description": "wellmail has been observed using tcp port 25, without using smtp, to leverage an open port for secure command and control communications.[44][45]"
                }
            ]
        }
    ]
};