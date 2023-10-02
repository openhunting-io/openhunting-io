var threatdata = {
    "name": "Storm-0558",
    "alias": "Storm-0558",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-07",
    "all_data": {
        "actor": "Storm-0558",
        "names": [
            {
                "name": "Storm-0558",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2023",
        "description": "(Microsoft) Historically, this threat actor has displayed an interest in targeting media companies, think tanks, and telecommunications equipment and service providers. The objective of most Storm-0558 campaigns is to obtain unauthorized access to email accounts belonging to employees of targeted organizations. Storm-0558 pursues this objective through credential harvesting, phishing campaigns, and OAuth token attacks. This threat actor has displayed an interest in OAuth applications, token theft, and token replay against Microsoft accounts since at least August 2021. Storm-0558 operates with a high degree of technical tradecraft and operational security. The actors are keenly aware of the target\u2019s environment, logging policies, authentication requirements, policies, and procedures. Storm-0558\u2019s tooling and reconnaissance activity suggests the actor is technically adept, well resourced, and has an in-depth understanding of many authentication techniques and applications.\n\nWhile we have discovered some minimal overlaps with other Chinese groups such as Violet Typhoon ({{APT 31, Judgment Panda, Zirconium}}), we maintain high confidence that Storm-0558 operates as its own distinct group.",
        "observed-sectors": [
            "Government",
            "Media",
            "Telecommunications",
            "Think Tanks",
            "individuals connected to Taiwan and Uyghur geopolitical interests"
        ],
        "observed-countries": [
            "USA",
            "Europe"
        ],
        "tools": [
            "China Chopper"
        ],
        "information": [
            "https://www.microsoft.com/en-us/security/blog/2023/07/14/analysis-of-storm-0558-techniques-for-unauthorized-email-access/",
            "https://www.wiz.io/blog/storm-0558-compromised-microsoft-key-enables-authentication-of-countless-micr",
            "https://msrc.microsoft.com/blog/2023/09/results-of-major-technical-investigations-for-storm-0558-key-acquisition/"
        ],
        "uuid": "23e2ccea-9daa-415a-a72d-b242bbdb3782",
        "last-card-change": "2023-09-07",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "storm-0558",
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