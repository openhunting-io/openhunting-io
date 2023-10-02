var threatdata = {
    "name": "CACTUSTORCH",
    "alias": "CACTUSTORCH",
    "category": "Tools",
    "type": "Loader",
    "modified": "2022-01-16",
    "all_data": {
        "tool": "CACTUSTORCH",
        "names": [
            {
                "name": "CACTUSTORCH"
            }
        ],
        "description": "According to the GitHub repo, CACTUSTORCH is a JavaScript and VBScript shellcode launcher. It will spawn a 32 bit version of the binary specified and inject shellcode into it.",
        "category": "Tools",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/cactustorch-fileless-threat-abuses-net-to-infect-victims/",
            "https://github.com/mdsecactivebreach/CACTUSTORCH",
            "https://www.codercto.com/a/46729.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.cactustorch"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:cactustorch"
        ],
        "uuid": "0faf0f93-e45a-4346-ba05-1d54a9697724",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cactustorch",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://forensicitguy.github.io/analyzing-cactustorch-hta-cobaltstrike/",
            "date": "2022-01-16",
            "organization": "forensicitguy",
            "author": "Tony Lambert",
            "title": "Analyzing a CACTUSTORCH HTA Leading to Cobalt Strike",
            "categories": [
                "CACTUSTORCH",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2020/09/24/gadolinium-detecting-empires-cloud/",
            "date": "2020-09-24",
            "organization": "Microsoft",
            "author": "Ben Koehl",
            "title": "Microsoft Security\u2014detecting empires in the cloud",
            "categories": [
                "CACTUSTORCH",
                "LazyCat",
                "APT40"
            ]
        },
        {
            "data_url": "https://www.seqrite.com/documents/en/white-papers/Seqrite-WhitePaper-Operation-SideCopy.pdf",
            "date": "2020-09-23",
            "organization": "Seqrite",
            "author": "Kalpesh Mantri",
            "title": "Operation SideCopy: An insight into Transparent Tribe\u2019s sub-division which has been incorrectly attributed for years",
            "categories": [
                "CACTUSTORCH",
                "AllaKore"
            ]
        },
        {
            "data_url": "https://www.macnica.net/file/mpression_automobile.pdf",
            "date": "2019-04",
            "organization": "Macnica Networks",
            "author": "Macnica Networks",
            "title": "OceanLotus Attack on Southeast Asian Automotive Industry",
            "categories": [
                "CACTUSTORCH",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://www.codercto.com/a/46729.html",
            "date": "2018-12-20",
            "organization": "Codercto",
            "author": "Codercto",
            "title": "Analysis of the attack activities of Hailian Lotus APT group against large domestic investment companies",
            "categories": [
                "CACTUSTORCH"
            ]
        },
        {
            "data_url": "https://github.com/mdsecactivebreach/CACTUSTORCH",
            "date": "2017-11-16",
            "organization": "Github (mdsecactivebreach)",
            "author": "Vincent Yiu",
            "title": "CACTUSTORCH: Payload Generation for Adversary Simulations",
            "categories": [
                "CACTUSTORCH"
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