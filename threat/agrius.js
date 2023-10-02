var threatdata = {
    "name": "Agrius",
    "alias": "Agrius, DEV-0227, BlackShadow, SharpBoys, AMERICIUM, Pink Sandstorm",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-21",
    "all_data": {
        "actor": "Agrius",
        "names": [
            {
                "name": "Agrius",
                "name-giver": "SentinelLabs"
            },
            {
                "name": "DEV-0227",
                "name-giver": "Microsoft"
            },
            {
                "name": "BlackShadow",
                "name-giver": "Kaspersky"
            },
            {
                "name": "SharpBoys",
                "name-giver": "?"
            },
            {
                "name": "AMERICIUM",
                "name-giver": "Microsoft"
            },
            {
                "name": "Pink Sandstorm",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "Iran"
        ],
        "motivation": [
            "Information theft and espionage",
            "Sabotage and destruction"
        ],
        "first-seen": "2020",
        "description": "(SentinelLabs) A new threat actor SentinelLabs track as Agrius was observed operating in Israel beginning in 2020. An analysis of what at first sight appeared to be a ransomware attack revealed new variants of wipers that were deployed in a set of destructive attacks against Israeli targets. The operators behind the attacks intentionally masked their activity as ransomware attacks.",
        "observed-countries": [
            "Hong Kong",
            "Israel",
            "South Africa"
        ],
        "tools": [
            "Apostle",
            "ASPXSpy",
            "DEADWOOD",
            "Fantasy",
            "IPsec Helper",
            "Moneybird"
        ],
        "operations": [
            {
                "date": "2022-02",
                "activity": "Fantasy \u2013 a new Agrius wiper deployed through a supply\u2011chain attack\nhttps://www.welivesecurity.com/2022/12/07/fantasy-new-agrius-wiper-supply-chain-attack/"
            },
            {
                "date": "2023-05",
                "activity": "Agrius Deploys Moneybird in Targeted Attacks Against Israeli Organizations\nhttps://research.checkpoint.com/2023/agrius-deploys-moneybird-in-targeted-attacks-against-israeli-organizations/"
            }
        ],
        "information": [
            "https://assets.sentinelone.com/sentinellabs/evol-agrius"
        ],
        "uuid": "50c0c8a2-3842-4e7a-aad8-270c1793e3e1",
        "last-card-change": "2023-06-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "agrius",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "arp",
            "procedure_code": "s0099",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0099",
            "techniques": [
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "arp can be used to display a host's arp cache, which may include address resolutions for remote systems.[14][15]"
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
                    "procedure_description": "arp can be used to display arp configuration information on the host.[22]"
                }
            ]
        },
        {
            "procedure_name": "tor",
            "procedure_code": "s0183",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0183",
            "techniques": [
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
                    "procedure_description": "tor encapsulates traffic in multiple layers of encryption, using tls by default.[59]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "traffic traversing the tor network will be forwarded to multiple nodes before exiting the tor network and continuing on to its intended destination.[21]"
                }
            ]
        }
    ]
};