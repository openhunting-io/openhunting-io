var threatdata = {
    "name": "AUMLIB",
    "alias": "AUMLIB, yayih, bbsinfo, mswab, Graftor",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "AUMLIB",
        "names": [
            {
                "name": "AUMLIB"
            },
            {
                "name": "yayih"
            },
            {
                "name": "bbsinfo"
            },
            {
                "name": "mswab"
            },
            {
                "name": "Graftor"
            }
        ],
        "description": "No description available yet.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2013/08/survival-of-the-fittest-new-york-times-attackers-evolve-quickly.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.yayih"
        ],
        "uuid": "b66dcf33-9750-4c84-84ec-091a5a407611",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "aumlib",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://malware.news/t/graftor-but-i-never-asked-for-this/14857",
            "date": "2017-09-05",
            "organization": "Talos Intelligence",
            "author": "Matthew Molyett",
            "title": "Graftor - But I Never Asked for This\u2026",
            "categories": [
                "Graftor"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2017/09/graftor-but-i-never-asked-for-this.html",
            "date": "2017-09-05",
            "organization": "Cisco Talos",
            "author": "Holger Unterbrink",
            "title": "Graftor - But I Never Asked for This\u2026",
            "categories": [
                "Graftor"
            ]
        },
        {
            "data_url": "https://bin.re/blog/the-dga-of-symmi/",
            "date": "2015-01-21",
            "organization": "Johannes Bader's Blog",
            "author": "Johannes Bader",
            "title": "The DGA of Symmi",
            "categories": [
                "Graftor"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2013/08/survival-of-the-fittest-new-york-times-attackers-evolve-quickly.html",
            "date": "2013-08-12",
            "organization": "FireEye",
            "author": "Nart Villeneuve",
            "title": "Survival of the Fittest: New York Times Attackers Evolve Quickly",
            "categories": [
                "yayih"
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