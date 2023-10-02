var threatdata = {
    "name": "Dust Storm",
    "alias": "Dust Storm",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-22",
    "all_data": {
        "actor": "Dust Storm",
        "names": [
            {
                "name": "Dust Storm",
                "name-giver": "Cylance"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "Seems state-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2010",
        "description": "(Cylance) Very little public information was available throughout 2010 on this threat, despite the group\u2019s primary backdoor gaining some level of prominence in targeted Asian attacks. This may be explained by the group\u2019s early reliance on Dynamic DNS domains for their command and control (C2) infrastructure, as well as their use of public RATs like Poison Ivy and Gh0st RAT for second-stage implants.\n\nIt wasn\u2019t until June 2011 that Operation Dust Storm started to garner some notoriety from a series of attacks which leveraged an unpatched Internet Explorer 8 vulnerability, CVE-2011-1255, to gain a foothold into victim networks. In these attacks, a link to the exploit was sent via a spear phishing email from a purported Chinese student seeking advice or asking the target a question following a presentation.\n\nAs to other documented cases, the attacker started interacting with the infected machine within minutes of compromise to begin manual network and host enumeration.\n\nIn October 2011, the group attempted to take advantage of the ongoing Libyan crisis at the time and phish the news cycle regarding Muammar Gaddafi\u2019s death on October 20, 2011. It appears that in addition to some US defense targets, this campaign was also directed at a Uyghur mailing list. This time, the group used a specially crafted malicious Windows Help (.hlp) file, which exploited CVE-2010-1885.",
        "observed-sectors": [
            "Energy",
            "Oil and gas",
            "Uyghurs"
        ],
        "observed-countries": [
            "Japan",
            "South Korea",
            "USA",
            "Europe and Southeast Asia"
        ],
        "tools": [
            "Gh0st RAT",
            "Misdat",
            "MiS-Type",
            "Poison Ivy",
            "S-Type"
        ],
        "information": [
            "https://www.cylance.com/content/dam/cylance/pdfs/reports/Op_Dust_Storm_Report.pdf",
            "https://www.symantec.com/connect/blogs/inside-back-door-attack"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0031/"
        ],
        "uuid": "3c462561-ef5e-48ac-9138-38dc25d2afc4",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dust_storm",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://attack.mitre.org/groups/G0031/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: Dust Storm",
            "categories": [
                "Dust Storm"
            ]
        },
        {
            "data_url": "https://www.cylance.com/content/dam/cylance/pdfs/reports/Op_Dust_Storm_Report.pdf",
            "date": "2016-02-23",
            "organization": "Cylance",
            "author": "Jon Gross",
            "title": "Operation Dust Storm",
            "categories": [
                "Misdat",
                "Poldat",
                "Dust Storm"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/inside-back-door-attack",
            "date": "2011-06-29",
            "organization": "Symantec",
            "author": "John McDonald",
            "title": "Inside a Back Door Attack",
            "categories": [
                "Dust Storm"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20140816135909/https://www.symantec.com/connect/blogs/inside-back-door-attack",
            "date": "2011-06-29",
            "organization": "Symantec",
            "author": "John McDonald",
            "title": "Inside a Back Door Attack",
            "categories": [
                "Ghost RAT",
                "Dust Storm"
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