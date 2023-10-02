var threatdata = {
    "name": "Tortilla",
    "alias": "Tortilla",
    "category": "APT",
    "type": "-",
    "modified": "2021-11-04",
    "all_data": {
        "actor": "Tortilla",
        "names": [
            {
                "name": "Tortilla",
                "name-giver": "TG Soft"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial gain"
        ],
        "first-seen": "2021",
        "description": "(Talos) Cisco Talos recently discovered a malicious campaign deploying variants of the Babuk ransomware predominantly affecting users in the U.S. with smaller number of infections in U.K., Germany, Ukraine, Finland, Brazil, Honduras and Thailand.\n\nThe actor of the campaign is sometimes referred to as Tortilla, based on the payload file names used in the campaign. This is a new actor operating since July 2021. Prior to this ransomware, Tortilla has been experimenting with other payloads, such as the PowerShell-based netcat clone Powercat, which is known to provide attackers with unauthorized access to Windows machines.\n\nWe assess with moderate confidence that the initial infection vector is exploitation of ProxyShell vulnerabilities in Microsoft Exchange Server through the deployment of China Chopper web shell.",
        "observed-countries": [
            "Brazil",
            "Finland",
            "Germany",
            "Honduras",
            "Thailand",
            "UK",
            "Ukraine",
            "USA"
        ],
        "tools": [
            "Babuk Locker",
            "China Chopper"
        ],
        "information": [
            "https://blog.talosintelligence.com/2021/11/babuk-exploits-exchange.html"
        ],
        "uuid": "25af3745-49fb-4e81-b341-6e7395349970",
        "last-card-change": "2021-11-04",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tortilla",
    "analysis": null,
    "articles": [],
    "mitre": [
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