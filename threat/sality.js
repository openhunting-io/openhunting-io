var threatdata = {
    "name": "Sality",
    "alias": "Sality, Sector, Kuku, SalLoad, Kookoo, SaliCode, Kukacka",
    "category": "Malware",
    "type": "Botnet, Worm, Downloader, Loader",
    "modified": "2022-07-14",
    "all_data": {
        "tool": "Sality",
        "names": [
            {
                "name": "Sality"
            },
            {
                "name": "Sector"
            },
            {
                "name": "Kuku"
            },
            {
                "name": "SalLoad"
            },
            {
                "name": "Kookoo"
            },
            {
                "name": "SaliCode"
            },
            {
                "name": "Kukacka"
            }
        ],
        "description": "(Cylance) The Sality virus infects local executables, removable storage, and remotely shared drives. It creates a peer-to-peer botnet which facilitates the downloading and execution of other malware. Sality can perform malicious code injection and modify its entry point to force code execution. This malware remains viable by adopting the successful strategies of other threats, implementing techniques like rootkit/backdoor capability, keylogging, and worm-like propagation.",
        "category": "Malware",
        "type": [
            "Botnet",
            "Worm",
            "Downloader",
            "Loader"
        ],
        "information": [
            "https://threatvector.cylance.com/en_us/home/cylance-vs-sality-malware.html",
            "https://www.botconf.eu/wp-content/uploads/2015/12/OK-P18-Kleissner-Sality.pdf",
            "https://en.wikipedia.org/wiki/Sality"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sality"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Sality"
        ],
        "uuid": "ccf23a1f-eec2-465a-89a8-fc38dfbfeea8",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Sality",
            "malware_alias": null,
            "malware": "win.sality",
            "last_update": "2023-10-30 05:29:00",
            "tags": [
                "sality"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://89.119.67.154/testo5/",
                        "timestamp": "2023-10-30 05:29:00"
                    },
                    {
                        "value": "http://kukutrustnet777888.info/",
                        "timestamp": "2023-10-30 05:29:00"
                    },
                    {
                        "value": "http://klkjwre77638dfqwieuoi888.info/",
                        "timestamp": "2023-10-30 05:28:59"
                    },
                    {
                        "value": "http://www.klkjwre9fqwieluoi.info/",
                        "timestamp": "2023-10-30 05:28:59"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "2eb74de9b3c016d03b96378e59557a6524918745c9c48df2a5a7ea5ca92d375a",
                        "timestamp": "2021-09-26 20:30:29"
                    },
                    {
                        "value": "513c36f4a21c7ebf125fe36b98fb2c065898b9f543a6e8dbbf3f9a041c5b86fa",
                        "timestamp": "2021-09-26 20:30:29"
                    },
                    {
                        "value": "33f8b063fa9eef4d6e83779a5f93c4ca9b8597c4e328ff0f789cbde0d72d24d0",
                        "timestamp": "2021-09-26 20:30:28"
                    },
                    {
                        "value": "4444e65841972ce81243575afa168ebbe54e7cc2db6aa34d996f53a6b2d99043",
                        "timestamp": "2021-09-26 20:30:28"
                    },
                    {
                        "value": "85e576aba88b0b3805d924e344feff58c27992d02675ba86126b88cb790afb7c",
                        "timestamp": "2021-07-24 08:00:31"
                    },
                    {
                        "value": "4ee41060b8f1c5679b10bebb8378f353ea62eb38ab27f041e3727dd8cb06b19d",
                        "timestamp": "2021-07-24 08:00:31"
                    },
                    {
                        "value": "f3dda8f48606c448d22a7b407f61757605acc028d3deddd0ad8c1e2742efcf86",
                        "timestamp": "2021-07-24 08:00:31"
                    },
                    {
                        "value": "cea7a79f688fe24df1c614bc6fdcb281c056f882307e2b9f7841dca56ae923f0",
                        "timestamp": "2021-07-24 08:00:30"
                    },
                    {
                        "value": "f66117bb7aff5ea3fb4241a5477edebc1f84844376b56b3c6ba6f5de7004d4c7",
                        "timestamp": "2021-04-06 13:14:34"
                    },
                    {
                        "value": "1e21f175cd66fe91b5ff770b1e74c61b2df04c13044388e36dfd3d0768c9e6e5",
                        "timestamp": "2021-04-06 13:14:34"
                    },
                    {
                        "value": "bdb1b6c2151038f1023b551d26ef4eab2d5321066d3352d5357b8bee301b67b0",
                        "timestamp": "2021-04-06 13:14:34"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-10-30 05:29:00",
    "file_name": "sality",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.dragos.com/blog/the-trojan-horse-malware-password-cracking-ecosystem-targeting-industrial-operators/",
            "date": "2022-07-14",
            "organization": "Dragos",
            "author": "Sam Hanson",
            "title": "The Trojan Horse Malware & Password \u201cCracking\u201d Ecosystem Targeting Industrial Operators",
            "categories": [
                "Sality"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/sites/default/files/publications/AA22-110A_Joint_CSA_Russian_State-Sponsored_and_Criminal_Cyber_Threats_to_Critical_Infrastructure_4_20_22_Final.pdf",
            "date": "2022-04-20",
            "organization": "CISA",
            "author": "CISA",
            "title": "AA22-110A Joint CSA: Russian State-Sponsored and Criminal Cyber  Threats to Critical Infrastructure",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "DanaBot",
                "DoppelDridex",
                "Emotet",
                "EternalPetya",
                "GoldMax",
                "Industroyer",
                "Sality",
                "SmokeLoader",
                "TrickBot",
                "Triton",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-110a",
            "date": "2022-04-20",
            "organization": "CISA",
            "author": "CISA",
            "title": "Alert (AA22-110A): Russian State-Sponsored and Criminal Cyber Threats to Critical Infrastructure",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "DanaBot",
                "DoppelDridex",
                "Emotet",
                "EternalPetya",
                "GoldMax",
                "Industroyer",
                "Sality",
                "SmokeLoader",
                "TrickBot",
                "Triton",
                "Zloader",
                "Killnet"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/pe-file-infecting-malware-ot",
            "date": "2021-10-27",
            "organization": "Mandiant",
            "author": "Ken Proska",
            "title": "Portable Executable File Infecting Malware Is Increasingly Found in OT Networks",
            "categories": [
                "CCleaner Backdoor",
                "Floxif",
                "neshta",
                "Ramnit",
                "Sality",
                "Virut"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/c2-traffic/",
            "date": "2020-05-24",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Ajaya Neupane",
            "title": "Using AI to Detect Malicious C2 Traffic",
            "categories": [
                "Emotet",
                "Sality"
            ]
        },
        {
            "data_url": "https://gist.githubusercontent.com/quangnh89/41deada8a936a1877a6c6c757ce73800/raw/41f27388a11a606e1d6a7596dcb6469578e79321/sality_extractor.py",
            "date": "2017-10-29",
            "organization": "",
            "author": "quangnh89",
            "title": "Sality Configuration Extractor (sality_extractor.py)",
            "categories": [
                "Sality"
            ]
        },
        {
            "data_url": "https://www.researchgate.net/profile/Lorenzo-De-Carli/publication/320250366_Botnet_protocol_inference_in_the_presence_of_encrypted_traffic/links/5fa9608792851cc286a08592/Botnet-protocol-inference-in-the-presence-of-encrypted-traffic.pdf?origin=publication_detail",
            "date": "2017-05",
            "organization": "IEEE",
            "author": "Lorenzo De Carli",
            "title": "Botnet Protocol Inference in the Presence of Encrypted Traffic",
            "categories": [
                "Ramnit",
                "Sality",
                "ZeroAccess"
            ]
        },
        {
            "data_url": "https://www.botconf.eu/wp-content/uploads/2015/12/OK-P18-Kleissner-Sality.pdf",
            "date": "2015-12-02",
            "organization": "Botconf",
            "author": "Peter Kleissner",
            "title": "Sality: 2003 - Today",
            "categories": [
                "Sality"
            ]
        },
        {
            "data_url": "https://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/sality_peer_to_peer_viral_network.pdf",
            "date": "2011-07",
            "organization": "Symantec",
            "author": "Nicolas Falliere",
            "title": "Sality: Story of a Peerto-Peer Viral Network",
            "categories": [
                "Sality"
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