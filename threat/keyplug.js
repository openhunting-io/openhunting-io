var threatdata = {
    "name": "KEYPLUG",
    "alias": "KEYPLUG, ELFSHELF",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "KEYPLUG",
        "names": [
            {
                "name": "KEYPLUG"
            },
            {
                "name": "ELFSHELF"
            }
        ],
        "description": "(Mandiant) KEYPLUG is a modular backdoor written in C++ that supports multiple network protocols for command and control (C2) traffic including HTTP, TCP, KCP over UDP, and WSS.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.mandiant.com/resources/blog/apt41-us-state-governments"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S1051"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.keyplug"
        ],
        "uuid": "c549363e-03d1-4696-9d7e-5118831adf40",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "keyplug",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2023-0330.pdf",
            "date": "2023-03-30",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "With KEYPLUG, China\u2019s RedGolf Spies On, Steals From Wide Field of Targets",
            "categories": [
                "KEYPLUG",
                "Cobalt Strike",
                "PlugX"
            ]
        },
        {
            "data_url": "https://i.blackhat.com/Asia-22/Thursday-Materials/AS-22-LeonSilvia-NextGenPlugXShadowPad.pdf",
            "date": "2022-05-12",
            "organization": "TEAMT5",
            "author": "Leon Chang",
            "title": "The Next Gen PlugX/ShadowPad? A Dive into the Emerging China-Nexus Modular Trojan, Pangolin8RAT (slides)",
            "categories": [
                "KEYPLUG",
                "Cobalt Strike",
                "CROSSWALK",
                "FunnySwitch",
                "PlugX",
                "ShadowPad",
                "Winnti",
                "SLIME29",
                "TianWu"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/mobileiron-log4shell-exploitation",
            "date": "2022-03-28",
            "organization": "Mandiant",
            "author": "Geoff Ackerman",
            "title": "Forged in Fire: A Survey of MobileIron Log4Shell Exploitation",
            "categories": [
                "KEYPLUG"
            ]
        },
        {
            "data_url": "https://twitter.com/CyberJack42/status/1501290277864046595",
            "date": "2022-03-08",
            "organization": "Twitter (@CyberJack42)",
            "author": "CyberJack",
            "title": "Tweet on ELFSHELF alias for KEYPLUG",
            "categories": [
                "KEYPLUG"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/apt41-us-state-governments",
            "date": "2022-03-08",
            "organization": "Mandiant",
            "author": "Rufus Brown",
            "title": "Does This Look Infected? A Summary of APT41 Targeting U.S. State Governments",
            "categories": [
                "KEYPLUG",
                "Cobalt Strike",
                "LOWKEY"
            ]
        },
        {
            "data_url": "https://experience.mandiant.com/trending-evil/p/1",
            "date": "2022-02-26",
            "organization": "Mandiant",
            "author": "Mandiant",
            "title": "TRENDING EVIL Q1 2022",
            "categories": [
                "KEYPLUG",
                "FAKEUPDATES",
                "GootLoader",
                "BazarBackdoor",
                "QakBot"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "keyplug",
            "procedure_code": "s1051",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S1051",
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
                    "procedure_description": "keyplug can decode its configuration file to determine c2 protocols.[43]"
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
                    "procedure_description": "keyplug can use a hardcoded one-byte xor encoded configuration file.[68]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1124",
                    "technique_link": "https://attack.mitre.org/techniques/T1124",
                    "technique_name": "system time discovery",
                    "technique_description": "an adversary may gather the system time and/or time zone from a local or remote system. the system time is set and stored by the windows time service within a domain to maintain time synchronization between systems and services in an enterprise network.",
                    "procedure_description": "keyplug can obtain the current tick count of an infected computer.[48]"
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
                    "procedure_description": "keyplug has the ability to communicate over http and websocket protocol (wss) for c2.[51]"
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
                    "procedure_description": "keyplug can use tls-encrypted websocket protocol (wss) for c2.[30]"
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
                    "procedure_description": "keyplug can use tcp and kcp (kern communications protocol) over udp for c2 communication.[32]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090",
                    "technique_link": "https://attack.mitre.org/techniques/T1090",
                    "technique_name": "proxy",
                    "technique_description": "adversaries may use a connection proxy to direct network traffic between systems or act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, reduce the number of simultaneous outbound network connections, provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between victims to avoid suspicion. adversaries may chain together multiple proxies to further disguise the source of malicious traffic.",
                    "procedure_description": "keyplug has used cloudflare cdn associated infrastructure to redirect c2 communications to malicious domains.[8]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/001",
                    "technique_name": "web service : dead drop resolver",
                    "technique_description": "adversaries may use an existing, legitimate external web service to host information that points to additional command and control (c2) infrastructure. adversaries may post content, known as a dead drop resolver, on web services with embedded (and often obfuscated/encoded) domains or ip addresses. once infected, victims will reach out to and be redirected by these resolvers.",
                    "procedure_description": "the keyplug windows variant has retrieved c2 addresses from encoded data in posts on tech community forums.[9]"
                }
            ]
        }
    ]
};