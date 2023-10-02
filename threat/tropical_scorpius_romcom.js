var threatdata = {
    "name": "Tropical Scorpius, RomCom",
    "alias": "Tropical Scorpius, RomCom, Void Rabisu, DEV-0978, Storm-0978",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-05",
    "all_data": {
        "actor": "Tropical Scorpius, RomCom",
        "names": [
            {
                "name": "Tropical Scorpius",
                "name-giver": "Palo Alto"
            },
            {
                "name": "RomCom",
                "name-giver": "Palo Alto"
            },
            {
                "name": "Void Rabisu",
                "name-giver": "Trend Micro"
            },
            {
                "name": "DEV-0978",
                "name-giver": "Microsoft"
            },
            {
                "name": "Storm-0978",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "Russia"
        ],
        "motivation": [
            "Information theft and espionage",
            "Financial gain"
        ],
        "first-seen": "2019",
        "description": "(Palo Alto) The most recent Unit 42 Ransomware Threat Report includes observations of Cuba Ransomware impacting 33 organizations. As of July 2022, Tropical Scorpius has used Cuba Ransomware to impact 27 additional organizations across multiple vectors, such as Professional and Legal Services, State and Local Government, Manufacturing, Transportation and Logistics, Wholesale and Retail, Real Estate, Financial Services, Health Care, High Technology, Utilities and Energy, Construction, and Education. A total of 60 organizations were exposed by this ransomware gang on its leak site since the group first surfaced in 2019.",
        "observed-sectors": [
            "Construction",
            "Education",
            "Energy",
            "Financial",
            "Government",
            "Healthcare",
            "High-Tech",
            "Manufacturing",
            "Shipping and Logistics",
            "Transportation"
        ],
        "tools": [
            "Cuba",
            "Industrial Spy",
            "ROMCOM RAT",
            "Underground"
        ],
        "operations": [
            {
                "date": "2022-07",
                "activity": "Unattributed RomCom Threat Actor Spoofing Popular Apps Now Hits Ukrainian Militaries\nhttps://blogs.blackberry.com/en/2022/10/unattributed-romcom-threat-actor-spoofing-popular-apps-now-hits-ukrainian-militaries"
            },
            {
                "date": "2022-11",
                "activity": "RomCom Threat Actor Abuses KeePass and SolarWinds to Target Ukraine and Potentially the United Kingdom\nhttps://blogs.blackberry.com/en/2022/11/romcom-spoofing-solarwinds-keepass"
            },
            {
                "date": "2023-02",
                "activity": "Void Rabisu\u2019s Use of RomCom Backdoor Shows a Growing Shift in Threat Actors\u2019 Goals\nhttps://www.trendmicro.com/en_us/research/23/e/void-rabisu-s-use-of-romcom-backdoor-shows-a-growing-shift-in-th.html"
            },
            {
                "date": "2023-06",
                "activity": "Storm-0978 attacks reveal financial and espionage motives\nhttps://www.microsoft.com/en-us/security/blog/2023/07/11/storm-0978-attacks-reveal-financial-and-espionage-motives/"
            },
            {
                "date": "2023-07",
                "activity": "RomCom Threat Actor Suspected of Targeting Ukraine's NATO Membership Talks at the NATO Summit\nhttps://blogs.blackberry.com/en/2023/07/romcom-targets-ukraine-nato-membership-talks-at-nato-summit"
            }
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/cuba-ransomware-tropical-scorpius/"
        ],
        "uuid": "8e23fbaa-47d5-4fce-8b85-9fbb9aeecd87",
        "last-card-change": "2023-09-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tropical_scorpius_romcom",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blogs.blackberry.com/en/2022/11/romcom-spoofing-solarwinds-keepass",
            "date": "2022-11-02",
            "organization": "Blackberry",
            "author": "Blackberry Research",
            "title": "RomCom Threat Actor Abuses KeePass and SolarWinds to Target Ukraine and Potentially the United Kingdom",
            "categories": [
                "ROMCOM RAT",
                "RomCom"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2022/10/unattributed-romcom-threat-actor-spoofing-popular-apps-now-hits-ukrainian-militaries",
            "date": "2022-10-23",
            "organization": "Blackberry",
            "author": "The BlackBerry Research & Intelligence Team",
            "title": "Unattributed RomCom Threat Actor Spoofing Popular Apps Now Hits Ukrainian Militaries",
            "categories": [
                "ROMCOM RAT",
                "RomCom"
            ]
        }
    ],
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