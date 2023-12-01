var threatdata = {
    "name": "DarkSide",
    "alias": "DarkSide",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2023-07-11",
    "all_data": {
        "tool": "DarkSide",
        "names": [
            {
                "name": "DarkSide"
            }
        ],
        "description": "(Varonis) The Darkside ransomware attack campaigns stood out for their use of stealthy techniques, especially in the early stages. The group performed careful reconnaissance and took steps to ensure that their attack tools and techniques would evade detection on monitored devices and endpoints.\n\nWhile their initial entry vectors vary, their techniques are more standardized once inside, and their endgame is coldly efficient.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.varonis.com/blog/darkside-ransomware/",
            "https://www.acronis.com/en-us/articles/darkside-ransomware/",
            "https://www.kaspersky.com/blog/darkside-ransomware-industry/39377/",
            "https://exchange.xforce.ibmcloud.com/threats/guid:9fd2b1d398e4934699376051b74fc304",
            "https://blog.avast.com/ransomware-as-a-service-avast",
            "https://www.crowdstrike.com/blog/carbon-spider-sprite-spider-target-esxi-servers-with-ransomware/",
            "https://us-cert.cisa.gov/ncas/alerts/aa21-131a",
            "https://www.flashpoint-intel.com/blog/darkside-ransomware-links-to-revil-difficult-to-dismiss/",
            "https://www.fireeye.com/blog/threat-research/2021/05/shining-a-light-on-darkside-ransomware-operations.html",
            "https://blog.malwarebytes.com/ransomware/2021/05/threat-spotlight-darkside-the-ransomware-used-in-the-colonial-pipeline-attack/",
            "https://unit42.paloaltonetworks.com/darkside-ransomware/",
            "https://www.csoonline.com/article/3618688/darkside-ransomware-explained-how-it-works-and-who-is-behind-it.html",
            "https://cofense.com/blog/darkside-ransomware-operations/",
            "https://geminiadvisory.io/who-is-darkside/",
            "https://www.fortinet.com/blog/threat-research/newly-discovered-function-in-darkside-ransomware-variant-targets-disk-partitions",
            "https://us-cert.cisa.gov/ncas/current-activity/2021/05/19/update-cisa-fbi-joint-cybersecurity-advisory-darkside-ransomware",
            "https://www.riskiq.com/blog/external-threat-management/darkside-affiliates/",
            "https://www.bleepingcomputer.com/news/security/darkside-affiliates-claim-gangs-bitcoin-deposit-on-hacker-forum/",
            "https://www.deepinstinct.com/2021/06/04/the-ransomware-conundrum-a-look-into-darkside/",
            "https://cybergeeks.tech/a-step-by-step-analysis-of-a-new-version-of-darkside-ransomware/",
            "https://www.fireeye.com/blog/threat-research/2021/06/darkside-affiliate-supply-chain-software-compromise.html",
            "https://cybersecurity.att.com/blogs/labs-research/darkside-raas-in-linux-version",
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-189a",
            "https://asec.ahnlab.com/en/47174/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.darkside"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:darkside"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=darkside-ransomware",
            "https://www.nomoreransom.org/uploads/DarkSide%20RANSOMWARE%20DECRYPTION%20TOOL.pdf"
        ],
        "uuid": "f1c9260c-3f22-42ce-a6fc-eed1a89e5c64",
        "last-card-change": "2023-02-17",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--5d071ccc-4030-49a0-94f5-ac68488f4c4f",
        "pb_file": "darkside-ransomware.json",
        "last_updated": "2021-09-30T00:00:00.000Z",
        "title": "DARKSIDE RANSOMWARE",
        "industries": [
            "energy",
            "entertainment",
            "financial-services",
            "manufacturing",
            "retail",
            "technology",
            "utilities"
        ],
        "regions": [
            "DE",
            "ES",
            "FR",
            "GB",
            "IT",
            "QA",
            "US",
            "ZA"
        ],
        "malwares": [
            "Darkside"
        ]
    },
    "ioc_data": [
        {
            "malware_printable": "DarkSide",
            "malware_alias": "BlackMatter",
            "malware": "win.darkside",
            "last_update": "2022-08-01 01:00:56",
            "tags": [
                "DarkSide",
                "Ransomware",
                "darkside",
                "Darkside",
                "fsecurec3"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "98272cada9caf84c31d70fdc3705e95ef73cb4a5c507e2cf3caee1893a7a6f63",
                        "timestamp": "2022-08-01 01:00:56"
                    },
                    {
                        "value": "0c1f2f914e5b512df229ffea8a27078ddcf992eb175fc05d02aa3bc3fe29a932",
                        "timestamp": "2022-04-29 17:20:26"
                    },
                    {
                        "value": "2d82be244e23001148ed5a6d83856b6f7cd20c3f7786481303d5d584c51ff5f0",
                        "timestamp": "2022-04-15 14:03:22"
                    },
                    {
                        "value": "43e61519be440115eeaa3738a0e4aa4bb3c8ac5f9bdfce1a896db17a374eb8aa",
                        "timestamp": "2022-02-12 00:42:44"
                    },
                    {
                        "value": "58a513f83af2b326c313b41de94e8e172d538f5d4d8be71965b664ad4b260f94",
                        "timestamp": "2022-02-06 20:01:04"
                    },
                    {
                        "value": "bac2149254f5ce314bab830f574e16c9d67e81985329619841431034c31646e0",
                        "timestamp": "2022-02-01 18:13:49"
                    },
                    {
                        "value": "f764c49daffdacafa94aaece1d5094e0fac794639758e673440329b02c0fda39",
                        "timestamp": "2022-02-01 18:13:49"
                    },
                    {
                        "value": "0839aabe5fd63b16844a27b3c586c02a044d119010a1a40ee4035501c34eae0d",
                        "timestamp": "2022-02-01 18:13:48"
                    },
                    {
                        "value": "adcb912694b1abcdf9c467b5d47abe7590b590777b88045d10992d34a27aa06e",
                        "timestamp": "2022-02-01 18:13:48"
                    },
                    {
                        "value": "156335b95ba216456f1ac0894b7b9d6ad95404ac7df447940f21646ca0090673",
                        "timestamp": "2022-02-01 18:13:47"
                    },
                    {
                        "value": "2c7d10f64dc39ea9bd6f18d9d1e1204f0c62324e8da148354d557bba17e3c615",
                        "timestamp": "2022-04-15 14:03:19"
                    },
                    {
                        "value": "d97c0b6ee613e03aa3256fcdd3757e54ba4c7bb5910887247dc857f2701f9a46",
                        "timestamp": "2022-01-24 19:16:39"
                    },
                    {
                        "value": "ba57e3301a4fe3b136f3126dc717b55c40b1e6a3ef9f951b9b85ede731d61de2",
                        "timestamp": "2022-01-24 19:16:36"
                    },
                    {
                        "value": "5da3e6b4bea1eaceddb048a4a6bd702291189f42d15c4b2670de78984329b0a9",
                        "timestamp": "2022-01-24 19:16:35"
                    },
                    {
                        "value": "2c1e20a4b38634b97de398246bc3c8082d47663702a46bb885dc7fcc5f71daa1",
                        "timestamp": "2022-01-24 19:16:33"
                    },
                    {
                        "value": "1d4c0b32aea68056755daf70689699200ffa09688495ccd65a0907cade18bd2a",
                        "timestamp": "2022-01-23 19:33:09"
                    },
                    {
                        "value": "684ce737c1df26159dc117c485e1c922db9f8fb3d8dc086da47a6ca18fa43dc1",
                        "timestamp": "2022-01-23 19:33:11"
                    },
                    {
                        "value": "9cee5522a7ca2bfca7cd3d9daba23e9a30deb6205f56c12045839075f7627297",
                        "timestamp": "2022-01-23 19:33:07"
                    },
                    {
                        "value": "acb23245ab5c6d1a478f11f3b58e7cde9032827445ad6ab4dcf99ecddfea88d9",
                        "timestamp": "2021-12-24 18:43:01"
                    },
                    {
                        "value": "3609272795c8f8ba1275959d1457b03f6143efaaf8cd037547cd561e68763237",
                        "timestamp": "2021-12-06 08:12:45"
                    },
                    {
                        "value": "a471fdf6b137a6035b2a2746703cd696089940698fd533860d34e71cc6586850",
                        "timestamp": "2021-11-25 18:26:06"
                    },
                    {
                        "value": "2e50eb85f6e271001e69c5733af95c34728893145766066c5ff8708dcc0e43b2",
                        "timestamp": "2021-09-06 21:35:20"
                    },
                    {
                        "value": "520bd9ed608c668810971dbd51184c6a29819674280b018dc4027bc38fc42e57",
                        "timestamp": "2021-08-19 14:42:14"
                    },
                    {
                        "value": "91a6a1e91ab7b1802b0b2b29e3bea4d237ec93300f1f5e20776d268e102b4c36",
                        "timestamp": "2021-05-13 10:42:41"
                    },
                    {
                        "value": "3c6ef6cc69f330c2ec1844096515f07664969cd0e4ee4e3621f37feefda19b2d",
                        "timestamp": "2021-05-13 10:42:40"
                    },
                    {
                        "value": "9cc2a17025664ad91cdc2573a5947a5637ef8aad699ba7068c544607e88e70da",
                        "timestamp": "2021-05-13 10:42:40"
                    },
                    {
                        "value": "1f0d9f6070ecf5f2a3ae44e676431490b28d4264f9009cdf6a73cee931fbd411",
                        "timestamp": "2021-05-13 10:42:40"
                    },
                    {
                        "value": "ad98b5776080fdc5cef30132937f752bc326f9401097f847903dc12b381ff83c",
                        "timestamp": "2021-05-13 10:42:40"
                    },
                    {
                        "value": "8b9add9365c530686c8c87a955548e08a1a8ada42db80774bfe45516c786c07f",
                        "timestamp": "2021-05-13 10:42:40"
                    },
                    {
                        "value": "ad6ea296f1887e0cc3d928d48205fbc2822c7801bba8d77e9315ea3e1dff122f",
                        "timestamp": "2021-05-13 10:42:40"
                    },
                    {
                        "value": "22eb6b037787725c00ed201066a2c6d7bc834eb5ab841041b352fefaa5952e57",
                        "timestamp": "2021-05-13 10:42:40"
                    },
                    {
                        "value": "e9a2a429ece0a2916f4688e472cfe31023fe0774d0e392b4049c7a6963e78979",
                        "timestamp": "2021-05-13 10:42:40"
                    },
                    {
                        "value": "e46c8f0b0a4df001e6744258e1d79956dffb80f5e867a188d561c33ea26edebe",
                        "timestamp": "2021-05-13 10:42:40"
                    },
                    {
                        "value": "cd5e0152db06472f37bdfb23dd4b9ed40d642c4aac24406cb4c6d73adf80faa7",
                        "timestamp": "2021-05-13 10:42:39"
                    },
                    {
                        "value": "5c01028c0ec766e56fc4c94eaa360aa0fdb527e5697545c37168b707236f8378",
                        "timestamp": "2021-05-13 10:42:39"
                    },
                    {
                        "value": "a1998da14ccf238fbde79bfd715e9ea19cf48d3697de7b7c77cab63223480011",
                        "timestamp": "2021-05-13 10:42:39"
                    },
                    {
                        "value": "10d1371824df34e1516b410bc9f01f982053d81c8970d7e86a1525120b467ed2",
                        "timestamp": "2021-05-13 10:42:39"
                    },
                    {
                        "value": "695f40a66dab8620d3156d76d4d785402c6267a08d0f1f6026157df1b8b319bc",
                        "timestamp": "2021-05-13 10:42:39"
                    },
                    {
                        "value": "3bf81d4362c1f8e1a5c96620162c81806bd2dd819cdd39ff9be74012257e05ed",
                        "timestamp": "2021-05-13 10:42:39"
                    },
                    {
                        "value": "3e0651bab2b363a1c6fcdae2ea9486f98c3b6243b8d9d57d12f49ad67d560e95",
                        "timestamp": "2021-05-13 10:42:39"
                    },
                    {
                        "value": "577527dc6459ebb9c992ebe75aafb86e09831af3f381f2d10d5501262d0aa16c",
                        "timestamp": "2021-05-13 10:42:39"
                    },
                    {
                        "value": "c0202ff392172a9f76340f1e3bb478f99667ae5b744f9816c16f6cf8c53f874b",
                        "timestamp": "2021-05-13 10:42:38"
                    },
                    {
                        "value": "472d28010651900ff78c3b044603ecd4f8850f867b74e8b5717b051638d4e536",
                        "timestamp": "2021-05-12 20:05:47"
                    },
                    {
                        "value": "151fbd6c299e734f7853497bd083abfa29f8c186a9db31dbe330ace2d35660d5",
                        "timestamp": "2021-05-12 20:05:47"
                    },
                    {
                        "value": "da3bb9669fb983ad8d2ffc01aab9d56198bd9cedf2cc4387f19f4604a070a9b5",
                        "timestamp": "2021-05-12 20:05:47"
                    },
                    {
                        "value": "b9d60d450664c1e8fbfd6b2ec58fdeb2fd81797e183906a4536b59bc4f79846f",
                        "timestamp": "2021-05-12 20:05:47"
                    },
                    {
                        "value": "52e7f65b07b0ddf716b7b3a04c1308c5c9c744d71b4edf6e6b9a3273ba24df7b",
                        "timestamp": "2021-05-11 11:47:17"
                    },
                    {
                        "value": "766a18b368783351c92a96d3ca56b38b413397dc0abbbe9d612ae0e088831dd0",
                        "timestamp": "2021-05-11 11:47:17"
                    },
                    {
                        "value": "0a0c225f0e5ee941a79f2b7701f1285e4975a2859eb4d025d96d9e366e81abb9",
                        "timestamp": "2021-05-11 11:47:17"
                    },
                    {
                        "value": "bfb31c96f9e6285f5bb60433f2e45898b8a7183a2591157dc1d766be16c29893",
                        "timestamp": "2021-05-11 11:47:17"
                    },
                    {
                        "value": "273c68d24bf1b305163237649cd0aff54679114a9fe43fad0c771a58e33e35db",
                        "timestamp": "2021-04-30 14:03:06"
                    },
                    {
                        "value": "b6855793aebdd821a7f368585335cb132a043d30cb1f8dccceb5d2127ed4b9a4",
                        "timestamp": "2021-05-01 19:49:39"
                    },
                    {
                        "value": "bac7f1cb70a0fe909590f7b270248705d216b4abaf4e5dd4969fa4f1949badec",
                        "timestamp": "2021-04-30 14:03:05"
                    },
                    {
                        "value": "521c503bc3f5d8b2aa8819e8e30e2019e74ea9649a57529fb32c3dfc66a1e7ef",
                        "timestamp": "2021-04-30 14:03:05"
                    },
                    {
                        "value": "952ead109c44e94ad26130436c46902106182f22c425a8a5f9cdb5045ac0dc35",
                        "timestamp": "2021-04-30 06:31:40"
                    },
                    {
                        "value": "e51e4c372edf2bbe476a4b7630225c1875c5ccea2ed55b418bd793c54ce9a84d",
                        "timestamp": "2021-04-30 06:31:40"
                    },
                    {
                        "value": "a11cc5051e3a88428db495f6d8e4b6381a1cb3fa5946a525ef5c00bfcb44e210",
                        "timestamp": "2021-04-30 06:31:39"
                    },
                    {
                        "value": "b326d11dd90c2e4efb0a384981f71c2bd1a6faa0553d6389acb08945b699f73d",
                        "timestamp": "2021-04-30 06:31:39"
                    },
                    {
                        "value": "ec57ee2255eebc15d6c60df7352c074be05d0524fa49e15c3832e78709c84167",
                        "timestamp": "2021-04-02 11:16:18"
                    },
                    {
                        "value": "0727bd037c8c7ec64ec75f77fe61c94ad32705db1a8ebd2785392f61ca716cc7",
                        "timestamp": "2021-04-02 11:16:18"
                    },
                    {
                        "value": "235d09c111097d3ddcffe50f8d36bf26a530838b340ba24ed008665acbdeda7d",
                        "timestamp": "2021-04-02 11:16:18"
                    },
                    {
                        "value": "457936c28938616495836c472b3389a0870574bee6a5dc026d5bd14979c6202c",
                        "timestamp": "2021-04-02 11:16:18"
                    },
                    {
                        "value": "12ee27f56ec8a2a3eb2fe69179be3f7a7193ce2b92963ad33356ed299f7ed975",
                        "timestamp": "2021-03-12 12:38:46"
                    }
                ],
                "url": [
                    {
                        "value": "http://darksidfqzcuhtk2.onion/DZYNTXY9RP5P8DQ96EFKV2YTOVAMA3VVHL5V0RASUBLBWZGLG51U4LOOBSHV9R0Y",
                        "timestamp": "2022-02-12 00:43:12"
                    }
                ],
                "domain": [
                    {
                        "value": "darksidedxcftmqa.onion",
                        "timestamp": "2022-01-23 19:35:24"
                    }
                ],
                "ip:port": [
                    {
                        "value": "51.79.243.236:80",
                        "timestamp": "2021-08-05 05:55:12"
                    }
                ],
                "sha1_hash": [
                    {
                        "value": "fd18c95cba3d2c31976605f680ad4b4308090b55",
                        "timestamp": "2021-05-01 19:51:09"
                    }
                ],
                "sha3_384_hash": [
                    {
                        "value": "2764f6e6398d71acbe6264ff32954052a6419bb743cad2cec69ca7dc3127a77b85106f088dd1d5c7189b19b808e80425",
                        "timestamp": "2021-05-01 19:50:43"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "f913d43ba0a9f921b1376b26cd30fa34",
                        "timestamp": "2021-05-01 19:50:13"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-08-01 01:00:56",
    "file_name": "darkside",
    "articles": [
        {
            "data_url": "https://twitter.com/embee_research/status/1678631524374020098?s=46",
            "date": "2023-07-11",
            "organization": "Twitter (@embee_research)",
            "author": "Embee_research",
            "title": "Tweets on Ransomware Infrastructure Analysis With Censys and GrabbrApp",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/security/2022/09/esxi-targeting-ransomware-the-threats-that-are-after-your-virtual-machines-part-1.html",
            "date": "2022-09-28",
            "organization": "vmware",
            "author": "Giovanni Vigna",
            "title": "ESXi-Targeting Ransomware: The Threats That Are After Your Virtual Machines (Part 1)",
            "categories": [
                "Avoslocker",
                "Babuk",
                "Black Basta",
                "BlackCat",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "HelloKitty",
                "Hive",
                "LockBit",
                "Luna",
                "RansomEXX",
                "RedAlert Ransomware",
                "REvil"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/noberus-blackcat-ransomware-ttps",
            "date": "2022-09-22",
            "organization": "Broadcom",
            "author": "Symantec Threat Hunter Team",
            "title": "Noberus Ransomware: Darkside and BlackMatter Successor Continues to Evolve its Tactics",
            "categories": [
                "BlackCat",
                "BlackMatter",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.glimps.fr/lockbit3-0/",
            "date": "2022-07-13",
            "organization": "GLIMPS",
            "author": "GLIMPS",
            "title": "Lockbit 3.0",
            "categories": [
                "BlackMatter",
                "DarkSide",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/burrowing-your-way-into-vpns",
            "date": "2022-06-29",
            "organization": "Mandiant",
            "author": "Jared Wilson",
            "title": "Burrowing your way into VPNs, Proxies, and Tunnels",
            "categories": [
                "DarkSide",
                "SMOKEDHAM"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/34549/",
            "date": "2022-05-20",
            "organization": "AhnLab",
            "author": "ASEC",
            "title": "Why Remediation Alone Is Not Enough When Infected by Malware",
            "categories": [
                "Cobalt Strike",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/05/09/ransomware-as-a-service-understanding-the-cybercrime-gig-economy-and-how-to-protect-yourself",
            "date": "2022-05-09",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "Ransomware-as-a-service: Understanding the cybercrime gig economy and how to protect yourself",
            "categories": [
                "AnchorDNS",
                "BlackCat",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "HelloKitty",
                "Hive",
                "LockBit",
                "REvil",
                "FAKEUPDATES",
                "Griffon",
                "ATOMSILO",
                "BazarBackdoor",
                "BlackCat",
                "BlackMatter",
                "Blister",
                "Cobalt Strike",
                "Conti",
                "DarkSide",
                "Emotet",
                "FiveHands",
                "Gozi",
                "HelloKitty",
                "Hive",
                "IcedID",
                "ISFB",
                "JSSLoader",
                "LockBit",
                "LockFile",
                "Maze",
                "NightSky",
                "Pandora",
                "Phobos",
                "Phoenix Locker",
                "PhotoLoader",
                "QakBot",
                "REvil",
                "Rook",
                "Ryuk",
                "SystemBC",
                "TrickBot",
                "WastedLocker",
                "BRONZE STARLIGHT"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/04/13/dismantling-zloader-how-malicious-ads-led-to-disabled-security-tools-and-ransomware/",
            "date": "2022-04-13",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "Dismantling ZLoader: How malicious ads led to disabled security tools and ransomware",
            "categories": [
                "BlackMatter",
                "Cobalt Strike",
                "DarkSide",
                "Ryuk",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/gone-in-52-seconds-and-42-minutes-a-comparative-analysis-of-ransomware-encryption-speed.html",
            "date": "2022-03-23",
            "organization": "splunk",
            "author": "Shannon Davis",
            "title": "Gone in 52 Seconds\u2026and 42 Minutes: A Comparative Analysis of Ransomware Encryption Speed",
            "categories": [
                "Avaddon",
                "Babuk",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "LockBit",
                "Maze",
                "Mespinoza",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2022/03/17/the-ransomware-threat-intelligence-center/",
            "date": "2022-03-17",
            "organization": "Sophos",
            "author": "Tilly Travers",
            "title": "The Ransomware Threat Intelligence Center",
            "categories": [
                "ATOMSILO",
                "Avaddon",
                "AvosLocker",
                "BlackKingdom Ransomware",
                "BlackMatter",
                "Conti",
                "Cring",
                "DarkSide",
                "dearcry",
                "Dharma",
                "Egregor",
                "Entropy",
                "Epsilon Red",
                "Gandcrab",
                "Karma",
                "LockBit",
                "LockFile",
                "Mailto",
                "Maze",
                "Nefilim",
                "RagnarLocker",
                "Ragnarok",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SamSam",
                "Snatch",
                "WannaCryptor",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.symantec.broadcom.com/hubfs/SED/SED_Threat_Hunter_Reports_Alerts/SED_FY22Q2_SES_Ransomware-Threat-Landscape_WP.pdf",
            "date": "2022-03-16",
            "organization": "Symantec",
            "author": "Symantec Threat Hunter Team",
            "title": "The Ransomware Threat Landscape: What to Expect in 2022",
            "categories": [
                "AvosLocker",
                "BlackCat",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Emotet",
                "Hive",
                "Karma",
                "Mespinoza",
                "Nemty",
                "Squirrelwaffle",
                "VegaLocker",
                "WastedLocker",
                "Yanluowang",
                "Zeppelin"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/pdfs/resources/whitepaper/an-empirically-comparative-analysis-of-ransomware-binaries.pdf",
            "date": "2022-02-23",
            "organization": "splunk",
            "author": "Shannon Davis",
            "title": "An Empirically Comparative Analysis of Ransomware Binaries",
            "categories": [
                "Avaddon",
                "Babuk",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "LockBit",
                "Maze",
                "Mespinoza",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://brandefense.io/darkside-ransomware-analysis-report/",
            "date": "2022-02-21",
            "organization": "Brandefense",
            "author": "Brandefense",
            "title": "Darkside Ransomware Analysis Report",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/docs/vmw-exposing-malware-in-linux-based-multi-cloud-environments.pdf",
            "date": "2022-02-09",
            "organization": "vmware",
            "author": "VMWare",
            "title": "Exposing Malware in Linux-Based Multi-Cloud Environments",
            "categories": [
                "ACBackdoor",
                "BlackMatter",
                "DarkSide",
                "Erebus",
                "HelloKitty",
                "Kinsing",
                "PLEAD",
                "QNAPCrypt",
                "RansomEXX",
                "REvil",
                "Sysrv-hello",
                "TeamTNT",
                "Vermilion Strike",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://www.nozominetworks.com/blog/how-to-analyze-malware-for-technical-writing/",
            "date": "2022-01-25",
            "organization": "Nozomi Networks",
            "author": "Alexey Kleymenov",
            "title": "How to Analyze Malware for Technical Writing",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-embraces-big-game-hunting-part-2/",
            "date": "2021-11-04",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "CARBON SPIDER Embraces Big Game Hunting, Part 2",
            "categories": [
                "BlackMatter",
                "Griffon",
                "BlackMatter",
                "DarkSide",
                "HiddenTear",
                "JSSLoader"
            ]
        },
        {
            "data_url": "https://blog.group-ib.com/blackmatter2",
            "date": "2021-11-03",
            "organization": "Group-IB",
            "author": "Andrey Zhdanov",
            "title": "The Darker Things BlackMatter and their victims",
            "categories": [
                "BlackMatter",
                "DarkSide",
                "BlackMatter",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.ic3.gov/Media/News/2021/211101.pdf",
            "date": "2021-11-01",
            "organization": "FBI",
            "author": "FBI",
            "title": "PIN Number 20211101-001: Ransomware Actors Use Significant Financial Events and Stock Valuation to Facilitate Targeting and Extortion of Victims",
            "categories": [
                "DarkSide",
                "RansomEXX",
                "DarkSide",
                "PyXie",
                "RansomEXX"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/darkside-ransomware-rushes-to-cash-out-7-million-in-bitcoin/",
            "date": "2021-10-22",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "DarkSide ransomware rushes to cash out $7 million in Bitcoin",
            "categories": [
                "BlackMatter",
                "DarkSide",
                "BlackMatter",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.elliptic.co/blog/darkside-bitcoins-on-the-move-following-government-cyberattack-against-revil-ransomware-group",
            "date": "2021-10-22",
            "organization": "Elliptic",
            "author": "Elliptic Intel",
            "title": "DarkSide bitcoins on the move following government cyberattack against REvil ransomware group",
            "categories": [
                "BlackMatter",
                "DarkSide",
                "BlackMatter",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://therecord.media/darkside-ransomware-gang-moves-some-of-its-bitcoin-after-revil-got-hit-by-law-enforcement/",
            "date": "2021-10-22",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "DarkSide ransomware gang moves some of its Bitcoin after REvil got hit by law enforcement",
            "categories": [
                "BlackMatter",
                "DarkSide",
                "BlackMatter",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.huntandhackett.com/blog/advanced-ip-scanner-the-preferred-scanner-in-the-apt-toolbox",
            "date": "2021-10-22",
            "organization": "HUNT & HACKETT",
            "author": "Krijn de Mik",
            "title": "Advanced IP Scanner: the preferred scanner in the A(P)T toolbox",
            "categories": [
                "Conti",
                "DarkSide",
                "Dharma",
                "Egregor",
                "Hades",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://twitter.com/GelosSnake/status/1451465959894667275",
            "date": "2021-10-22",
            "organization": "Twitter (@GelosSnake)",
            "author": "Omri Segev Moyal",
            "title": "Tweet on List of wallets used by Darkside/Blackmatter Operator to split out the money",
            "categories": [
                "BlackMatter",
                "DarkSide",
                "BlackMatter",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=NIiEcOryLpI",
            "date": "2021-10-14",
            "organization": "YouTube (Uriel Kosayev)",
            "author": "Uriel Kosayev",
            "title": "DarkSide Ransomware Reverse Engineering",
            "categories": [
                "BlackMatter",
                "DarkSide",
                "BlackMatter",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/big-game-hunting-on-the-rise-again-according-to-ecrime-index/",
            "date": "2021-10-12",
            "organization": "CrowdStrike",
            "author": "CrowdStrike Intelligence Team",
            "title": "ECX: Big Game Hunting on the Rise Following a Notable Reduction in Activity",
            "categories": [
                "Babuk",
                "BlackMatter",
                "DarkSide",
                "REvil",
                "Avaddon",
                "Babuk",
                "BlackMatter",
                "DarkSide",
                "LockBit",
                "Mailto",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/ransomware-as-a-service-enabler-of-widespread-attacks",
            "date": "2021-10-05",
            "organization": "Trend Micro",
            "author": "Fyodor Yarochkin",
            "title": "Ransomware as a Service: Enabler of Widespread Attacks",
            "categories": [
                "Cerber",
                "Conti",
                "DarkSide",
                "Gandcrab",
                "Locky",
                "Nefilim",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2021/09/threat-thursday-blackmatter-ransomware-as-a-service",
            "date": "2021-09-23",
            "organization": "Blackberry",
            "author": "The BlackBerry Research & Intelligence Team",
            "title": "Threat Thursday: BlackMatter RaaS - Darker Than DarkSide?",
            "categories": [
                "BlackMatter",
                "DarkSide",
                "BlackMatter",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/how-big-game-hunting-ttps-shifted-after-darkside-pipeline-attack/",
            "date": "2021-09-14",
            "organization": "CrowdStrike",
            "author": "CrowdStrike Intelligence Team",
            "title": "Big Game Hunting TTPs Continue to Shift After DarkSide Pipeline Attack",
            "categories": [
                "BlackMatter",
                "DarkSide",
                "REvil",
                "Avaddon",
                "BlackMatter",
                "Clop",
                "Conti",
                "CryptoLocker",
                "DarkSide",
                "DoppelPaymer",
                "Hades",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.hhs.gov/sites/default/files/demystifying-blackmatter.pdf",
            "date": "2021-09-02",
            "organization": "US Department of Health and Human Services",
            "author": "Health Sector Cybersecurity Coordination Center (HC3)",
            "title": "Demystifying BlackMatter",
            "categories": [
                "BlackMatter",
                "BlackMatter",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-embraces-big-game-hunting-part-1/",
            "date": "2021-08-30",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "CARBON SPIDER Embraces Big Game Hunting, Part 1",
            "categories": [
                "Bateleur",
                "Griffon",
                "Carbanak",
                "DarkSide",
                "JSSLoader",
                "PILLOWMINT",
                "REvil"
            ]
        },
        {
            "data_url": "https://symantec.broadcom.com/hubfs/The_Ransomware_Threat_September_2021.pdf",
            "date": "2021-08-15",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "The Ransomware Threat",
            "categories": [
                "Babuk",
                "BlackMatter",
                "DarkSide",
                "Avaddon",
                "Babuk",
                "BADHATCH",
                "BazarBackdoor",
                "BlackMatter",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "Emotet",
                "FiveHands",
                "FriedEx",
                "Hades",
                "IcedID",
                "LockBit",
                "Maze",
                "MegaCortex",
                "MimiKatz",
                "QakBot",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.metabaseq.com/recursos/inside-darkside-the-ransomware-that-attacked-colonial-pipeline#",
            "date": "2021-08-06",
            "organization": "metabaseq",
            "author": "Miguel Gonzalez",
            "title": "Inside DarkSide, the ransomware that attacked Colonial Pipeline",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://blog.group-ib.com/blackmatter#",
            "date": "2021-08-06",
            "organization": "Group-IB",
            "author": "Andrey Zhdanov",
            "title": "It's alive! The story behind the BlackMatter ransomware strain",
            "categories": [
                "BlackMatter",
                "DarkSide",
                "BlackMatter",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://blog.cyble.com/2021/08/05/blackmatter-under-the-lens-an-emerging-ransomware-group-looking-for-affiliates/",
            "date": "2021-08-05",
            "organization": "cyble",
            "author": "Cyble",
            "title": "BlackMatter Under the Lens: An Emerging Ransomware Group Looking for Affiliates",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://symantec.broadcom.com/hubfs/Attacks-Against-Critical_Infrastructrure.pdf",
            "date": "2021-08-05",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Attacks Against Critical Infrastructure: A Global Concern",
            "categories": [
                "BlackEnergy",
                "DarkSide",
                "DistTrack",
                "Stuxnet"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2021/08/ransomware-gangs-and-the-name-game-distraction/",
            "date": "2021-08-05",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Ransomware Gangs and the Name Game Distraction",
            "categories": [
                "DarkSide",
                "RansomEXX",
                "Babuk",
                "Cerber",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "FriedEx",
                "Gandcrab",
                "Hermes",
                "Maze",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/MTP-2021-0804.pdf",
            "date": "2021-08-04",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "Protect Against  BlackMatter Ransomware Before It\u2019s Offered",
            "categories": [
                "BlackMatter",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://github.com/sisoma2/malware_analysis/tree/master/blackmatter",
            "date": "2021-08-03",
            "organization": "Twitter (@sisoma2)",
            "author": "sisoma2",
            "title": "Python script for recovering the hashes hardcoded in different samples of the BlackMatter ransomware",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://twitter.com/sysopfb/status/1422280887274639375",
            "date": "2021-08-03",
            "organization": "Twitter (@sysopfb)",
            "author": "Jason Reaves",
            "title": "Tweet on python script  to decode the blob from Blackmatter ransomware",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://twitter.com/ValthekOn/status/1422385890467491841?s=20",
            "date": "2021-08-03",
            "organization": "Twitter (@ValthekOn)",
            "author": "Valthek",
            "title": "Tweet on blacklisted extensions & names of BlackMatter ransomware making the check against custom hashes values",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://therecord.media/an-interview-with-blackmatter-a-new-ransomware-group-thats-learning-from-the-mistakes-of-darkside-and-revil/",
            "date": "2021-08-02",
            "organization": "The Record",
            "author": "Dmitry Smilyanets",
            "title": "An interview with BlackMatter: A new ransomware group that\u2019s learning from the mistakes of DarkSide and REvil",
            "categories": [
                "DarkSide",
                "LockBit",
                "REvil"
            ]
        },
        {
            "data_url": "https://id-ransomware.blogspot.com/2021/07/blackmatter-ransomware.html",
            "date": "2021-08-01",
            "organization": "ID Ransomware",
            "author": "Andrew Ivanov",
            "title": "BlackMatter Ransomware",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/darkside-ransomware-gang-returns-as-new-blackmatter-operation/",
            "date": "2021-07-31",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "DarkSide ransomware gang returns as new BlackMatter operation",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/blackmatter-ransomware-gang-rises-from-the-ashes-of-darkside-revil/",
            "date": "2021-07-31",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "BlackMatter ransomware gang rises from the ashes of DarkSide, REvil",
            "categories": [
                "DarkSide",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/blackmatter-ransomware-successor-darkside-revil/",
            "date": "2021-07-27",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "BlackMatter Ransomware Emerges As Successor to DarkSide, REvil",
            "categories": [
                "DarkSide",
                "LockBit",
                "REvil"
            ]
        },
        {
            "data_url": "https://github.com/Haxrein/Malware-Analysis-Reports/blob/main/darkside_ransomware_technical_analysis_report.pdf",
            "date": "2021-07-27",
            "organization": "ZAYOTEM",
            "author": "Halil Filik",
            "title": "DarkSide Ransomware Technical Analysis Report",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://threatpost.com/guess-fashion-data-loss-ransomware/167754/",
            "date": "2021-07-13",
            "organization": "Threat Post",
            "author": "Becky Bracken",
            "title": "Guess Fashion Brand Deals With Data Loss After Ransomware Attack",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-189a",
            "date": "2021-07-08",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "Malware Analysis Report (AR21-189A): DarkSide Ransomware",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/us-chemical-distributor-shares-info-on-darkside-ransomware-data-theft/",
            "date": "2021-07-03",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "US chemical distributor shares info on DarkSide ransomware data theft",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://cybersecurity.att.com/blogs/labs-research/darkside-raas-in-linux-version",
            "date": "2021-06-22",
            "organization": "AT&T",
            "author": "Ofer Caspi",
            "title": "Darkside RaaS in Linux version",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.maltego.com/blog/chasing-darkside-affiliates-identifying-threat-actors-connected-to-darkside-ransomware-using-maltego-intel-471-1/",
            "date": "2021-06-22",
            "organization": "Maltego",
            "author": "Maltego Team",
            "title": "Chasing DarkSide Affiliates: Identifying Threat Actors Connected to Darkside Ransomware Using Maltego & Intel 471",
            "categories": [
                "DarkSide",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://otx.alienvault.com/pulse/60d0afbc395c24edefb33bb9",
            "date": "2021-06-21",
            "organization": "AlienVault",
            "author": "AT&T Alien Labs",
            "title": "Darkside RaaS in Linux version",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://cybergeeks.tech/a-step-by-step-analysis-of-a-new-version-of-darkside-ransomware/",
            "date": "2021-06-14",
            "organization": "CYBER GEEKS  All Things Infosec",
            "author": "CyberMasterV",
            "title": "A Step-by-Step Analysis of a New Version of DarkSide Ransomware",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.secjuice.com/blue-team-detection-darkside-ransomware/",
            "date": "2021-06-13",
            "organization": "SecJuice",
            "author": "Secprentice",
            "title": "Blue Team Detection: DarkSide Ransomware",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/are-virtual-machines-the-new-gold-for-cyber-criminals/",
            "date": "2021-06-10",
            "organization": "McAfee",
            "author": "ATR Operational Intelligence Team",
            "title": "Are Virtual Machines the New Gold for Cyber Criminals?",
            "categories": [
                "Babuk",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.justice.gov/opa/pr/department-justice-seizes-23-million-cryptocurrency-paid-ransomware-extortionists-darkside",
            "date": "2021-06-07",
            "organization": "Department of Justice",
            "author": "Office of Public Affairs",
            "title": "Department of Justice Seizes $2.3 Million in Cryptocurrency Paid to the Ransomware Extortionists Darkside",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.deepinstinct.com/2021/06/04/the-ransomware-conundrum-a-look-into-darkside/",
            "date": "2021-06-04",
            "organization": "DeepInstinct",
            "author": "Bar Block",
            "title": "The Ransomware Conundrum \u2013 A Look into DarkSide",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://medium.com/s2wlab/w1-jun-en-story-of-the-week-ransomware-on-the-darkweb-af491d33868b",
            "date": "2021-06-03",
            "organization": "Medium s2wlab",
            "author": "Hyunmin Suh",
            "title": "W1 Jun | EN | Story of the week: Ransomware on the Darkweb",
            "categories": [
                "DarkSide",
                "Babuk",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/how-to-defend-against-conti-darkside-revil-and-other-ransomware/",
            "date": "2021-06-02",
            "organization": "CrowdStrike",
            "author": "Josh Dalman",
            "title": "Under Attack: Protecting Against Conti, DarkSide, REvil and Other Ransomware",
            "categories": [
                "DarkSide",
                "Conti",
                "DarkSide",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/e/darkside-linux-vms-targeted.html",
            "date": "2021-05-28",
            "organization": "Trend Micro",
            "author": "Mina Nalim",
            "title": "DarkSide on Linux: Virtual Machines Targeted",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.technologyreview.com/2021/05/24/1025195/colonial-pipeline-ransomware-bitdefender/",
            "date": "2021-05-24",
            "organization": "MIT Technology Review",
            "author": "Daniel Golden",
            "title": "The Colonial pipeline ransomware hackers had a secret weapon: self-promoting cybersecurity firms",
            "categories": [
                "DarkSide",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/darkside-affiliates-claim-gangs-bitcoins-in-deposit-on-hacker-forum/",
            "date": "2021-05-21",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "DarkSide affiliates claim gang's bitcoins in deposit on hacker forum",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://blog.360totalsecurity.com/en/darksides-targeted-ransomware-analysis-report-for-critical-u-s-infrastructure-2/",
            "date": "2021-05-21",
            "organization": "360 Total Security",
            "author": "kate",
            "title": "DarkSide\u2019s Targeted Ransomware Analysis Report for Critical U.S. Infrastructure",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://community.riskiq.com/article/fdf74f23",
            "date": "2021-05-20",
            "organization": "RiskIQ",
            "author": "Jennifer Grob",
            "title": "Analysis of Infrastructure used by DarkSide Affiliates",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.digitalshadows.com/blog-and-research/ransomware-as-a-service-rogue-affiliates-and-whats-next/",
            "date": "2021-05-20",
            "organization": "Digital Shadows",
            "author": "Stefano De Blasi",
            "title": "Ransomware-as-a-Service, Rogue Affiliates, and What\u2019s Next",
            "categories": [
                "DarkSide",
                "DarkSide",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.nozominetworks.com/blog/colonial-pipeline-ransomware-attack-revealing-how-darkside-works/",
            "date": "2021-05-19",
            "organization": "Nozomi Networks",
            "author": "Alexey Kleymenov",
            "title": "Colonial Pipeline Ransomware Attack: Revealing How DarkSide Works",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.wsj.com/articles/colonial-pipeline-ceo-tells-why-he-paid-hackers-a-4-4-million-ransom-11621435636",
            "date": "2021-05-19",
            "organization": "The Wall Street Journal",
            "author": "Collin Eaton",
            "title": "Colonial Pipeline CEO Tells Why He Paid Hackers a $4.4 Million Ransom",
            "categories": [
                "DarkSide",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://blogs.keysight.com/blogs/tech/nwvs.entry.html/2021/05/18/darkside_ransomware-QfsV.html",
            "date": "2021-05-18",
            "organization": "KEYSIGHT TECHNOLOGIES",
            "author": "Radu Emanuel Chiscariu",
            "title": "DarkSide Ransomware Behavior and Techniques",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.elliptic.co/blog/darkside-ransomware-has-netted-over-90-million-in-bitcoin",
            "date": "2021-05-18",
            "organization": "Elliptic",
            "author": "Tom Robinson",
            "title": "DarkSide Ransomware has Netted Over $90 million in Bitcoin",
            "categories": [
                "DarkSide",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/darkside-ransomware-made-90-million-in-just-nine-months/",
            "date": "2021-05-18",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "DarkSide ransomware made $90 million in just nine months",
            "categories": [
                "DarkSide",
                "DarkSide",
                "Egregor",
                "Gandcrab",
                "Mailto",
                "Maze",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://therecord.media/darkside-gang-estimated-to-have-made-over-90-million-from-ransomware-attacks/",
            "date": "2021-05-18",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Darkside gang estimated to have made over $90 million from ransomware attacks",
            "categories": [
                "DarkSide",
                "DarkSide",
                "Mailto",
                "Maze",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/newly-discovered-function-in-darkside-ransomware-variant-targets-disk-partitions",
            "date": "2021-05-17",
            "organization": "Fortinet",
            "author": "Fred Gutierrez",
            "title": "Newly Discovered Function in DarkSide Ransomware Variant Targets Disk Partitions",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/darkside-ransomware-splunk-threat-update-and-detections.html",
            "date": "2021-05-17",
            "organization": "splunk",
            "author": "Splunk Threat Research Team",
            "title": "DarkSide Ransomware: Splunk Threat Update and Detections",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://blog.gigamon.com/2021/05/17/tracking-darkside-and-ransomware-the-network-view/",
            "date": "2021-05-17",
            "organization": "Gigamon",
            "author": "Joe Slowik",
            "title": "Tracking DarkSide and Ransomware: The Network View",
            "categories": [
                "DarkSide",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.intel471.com/blog/darkside-ransomware-shut-down-revil-avaddon-cybercrime",
            "date": "2021-05-14",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "The moral underground? Ransomware operators retreat after Colonial Pipeline hack",
            "categories": [
                "DarkSide",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2021/05/darkside-ransomware-gang-quits-after-servers-bitcoin-stash-seized/",
            "date": "2021-05-14",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "DarkSide Ransomware Gang Quits After Servers, Bitcoin Stash Seized",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/from-dawn-to-silent-night-darkside-ransomware-initial-attack-vector-evolution",
            "date": "2021-05-14",
            "organization": "Advanced Intelligence",
            "author": "Vitali Kremez",
            "title": "From Dawn to \"Silent Night\": \"DarkSide Ransomware\" Initial Attack Vector Evolution",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/darkside-ransomware-victims-sold-short/",
            "date": "2021-05-14",
            "organization": "McAfee",
            "author": "Raj Samani",
            "title": "Darkside Ransomware Victims Sold Short",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://therecord.media/darkside-ransomware-gang-says-it-lost-control-of-its-servers-money-a-day-after-biden-threat/",
            "date": "2021-05-14",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Darkside ransomware gang says it lost control of its servers & money a day after Biden threat",
            "categories": [
                "DarkSide",
                "Avaddon",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.guidepointsecurity.com/from-zloader-to-darkside-a-ransomware-story/",
            "date": "2021-05-14",
            "organization": "GuidePoint Security",
            "author": "Drew Schmitt",
            "title": "From ZLoader to DarkSide: A Ransomware Story",
            "categories": [
                "DarkSide",
                "Cobalt Strike",
                "Zloader"
            ]
        },
        {
            "data_url": "https://blueteamblog.com/darkside-ransomware-operations-preventions-and-detections",
            "date": "2021-05-14",
            "organization": "Blue Team Blog",
            "author": "Auth 0r",
            "title": "DarkSide Ransomware Operations \u2013 Preventions and Detections.",
            "categories": [
                "Cobalt Strike",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.elliptic.co/blog/elliptic-follows-bitcoin-ransoms-paid-by-darkside-ransomware-victims",
            "date": "2021-05-14",
            "organization": "Elliptic",
            "author": "Dr. Tom Robinson",
            "title": "Elliptic Follows the Bitcoin Ransoms Paid by Colonial Pipeline and Other DarkSide Ransomware Victims",
            "categories": [
                "DarkSide",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/darkside-ransomware-servers-reportedly-seized-revil-restricts-targets/",
            "date": "2021-05-14",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "DarkSide ransomware servers reportedly seized, REvil restricts targets",
            "categories": [
                "DarkSide",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/ransomware-groups-use-tor-based-backdoor-for-persistent-access",
            "date": "2021-05-13",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Ransomware Groups Use Tor-Based Backdoor for Persistent Access",
            "categories": [
                "DarkSide",
                "Snatch",
                "GOLD WATERFALL"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/popular-russian-hacking-forum-xss-bans-all-ransomware-topics/",
            "date": "2021-05-13",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Popular Russian hacking forum XSS bans all ransomware topics",
            "categories": [
                "DarkSide",
                "DarkSide",
                "LockBit",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/chemical-distributor-pays-44-million-to-darkside-ransomware/",
            "date": "2021-05-13",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Chemical distributor pays $4.4 million to DarkSide ransomware",
            "categories": [
                "DarkSide",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.bloomberg.com/news/articles/2021-05-13/colonial-pipeline-paid-hackers-nearly-5-million-in-ransom",
            "date": "2021-05-13",
            "organization": "Bloomberg",
            "author": "William Turton",
            "title": "Colonial Pipeline Paid Hackers Nearly $5 Million in Ransom",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://abcnews.go.com/Politics/biden-speak-colonial-pipeline-attack-americans-face-gasoline/story?id=77666212",
            "date": "2021-05-13",
            "organization": "ABC News",
            "author": "Justin Gomez",
            "title": "'Don't panic,' Biden tells Americans facing gasoline shortages from pipeline attack",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://therecord.media/popular-hacking-forum-bans-ransomware-ads/",
            "date": "2021-05-13",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Popular hacking forum bans ransomware ads",
            "categories": [
                "DarkSide",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://pylos.co/2021/05/13/mind-the-air-gap/",
            "date": "2021-05-13",
            "organization": "Stranded on Pylos Blog",
            "author": "Joe Slowik",
            "title": "Mind the (Air) Gap",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://securityscorecard.com/blog/new-evidence-supports-assessment-that-darkside-likely-responsible-for-colonial-pipeline-ransomware-attack-others-targeted",
            "date": "2021-05-12",
            "organization": "SecurityScorecard",
            "author": "Ryan Sherstobitoff",
            "title": "New Evidence Supports Assessment that DarkSide Likely Responsible for Colonial Pipeline Ransomware Attack; Others Targeted",
            "categories": [
                "DarkSide",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://zetter.substack.com/p/anatomy-of-one-of-the-first-darkside",
            "date": "2021-05-12",
            "organization": "Zero Day",
            "author": "Kim Zetter",
            "title": "Anatomy of a $2 Million Darkside Ransomware Breach",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/darkside-ransomware/",
            "date": "2021-05-12",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Ramarcus Baylor",
            "title": "DarkSide Ransomware Gang: An Overview",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/e/what-we-know-about-darkside-ransomware-and-the-us-pipeline-attac.html",
            "date": "2021-05-12",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "What We Know About Darkside Ransomware and the US Pipeline Attack",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/the-darkside-of-the-ransomware-pipeline.html",
            "date": "2021-05-11",
            "organization": "splunk",
            "author": "James Brodsky",
            "title": "The DarkSide of the Ransomware Pipeline",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2021/05/shining-a-light-on-darkside-ransomware-operations.html",
            "date": "2021-05-11",
            "organization": "FireEye",
            "author": "Jordan Nuce",
            "title": "Shining a Light on DARKSIDE Ransomware Operations",
            "categories": [
                "Cobalt Strike",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.dragos.com/blog/industry-news/recommendations-following-the-colonial-pipeline-cyber-attack/",
            "date": "2021-05-11",
            "organization": "Dragos",
            "author": "Mike Hoffman",
            "title": "Recommendations Following the Colonial Pipeline Cyber Attack",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.flashpoint-intel.com/blog/darkside-ransomware-links-to-revil-difficult-to-dismiss/",
            "date": "2021-05-11",
            "organization": "Flashpoint",
            "author": "Flashpoint",
            "title": "DarkSide Ransomware Links to REvil Group Difficult to Dismiss",
            "categories": [
                "DarkSide",
                "REvil"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2021/05/11/a-defenders-view-inside-a-darkside-ransomware-attack/",
            "date": "2021-05-11",
            "organization": "Sophos",
            "author": "Sean Gallagher",
            "title": "A defender\u2019s view inside a DarkSide ransomware attack",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2021/05/a-closer-look-at-the-darkside-ransomware-gang/",
            "date": "2021-05-11",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "A Closer Look at the DarkSide Ransomware Gang",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa21-131a",
            "date": "2021-05-11",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "Alert (AA21-131A) DarkSide Ransomware: Best Practices for Preventing Business Disruption from Ransomware Attacks",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "http://ti.dbappsecurity.com.cn/blog/index.php/2021/05/10/darkside/",
            "date": "2021-05-10",
            "organization": "Anheng Threat Intelligence Center",
            "author": "Hunting Shadow Lab",
            "title": "Analysis of U.S. Oil Products Pipeline Operators Suspended by Ransomware Attacks",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.intel471.com/blog/darkside-ransomware-colonial-pipeline-attack",
            "date": "2021-05-10",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Here\u2019s what we know about DarkSide ransomware",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/blog/meet-darkside-and-their-ransomware-sentinelone-customers-protected/",
            "date": "2021-05-10",
            "organization": "SentinelOne",
            "author": "SentinelOne",
            "title": "Meet DarkSide and Their Ransomware \u2013 SentinelOne Customers Protected",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://docs.google.com/spreadsheets/d/1MI8Z2tBhmqQ5X8Wf_ozv3dVjz5sJOs-3",
            "date": "2021-05-10",
            "organization": "DarkTracer",
            "author": "DarkTracer",
            "title": "Intelligence Report on Ransomware Gangs on the DarkWeb: List of victim organizations attacked by ransomware gangs released on the DarkWeb",
            "categories": [
                "RansomEXX",
                "Avaddon",
                "Babuk",
                "Clop",
                "Conti",
                "Cuba",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "Hades",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "Nefilim",
                "Nemty",
                "Pay2Key",
                "PwndLocker",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Sekhmet",
                "SunCrypt",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/darkside-oil-pipeline-ransomware-attack/",
            "date": "2021-05-10",
            "organization": "SecurityIntelligence",
            "author": "Limor Kessem",
            "title": "Shedding Light on the DarkSide Ransomware Attack",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.reuters.com/technology/colonial-pipeline-halts-all-pipeline-operations-after-cybersecurity-attack-2021-05-08/",
            "date": "2021-05-08",
            "organization": "Reuters",
            "author": "Christopher Bing",
            "title": "Cyber attack shuts down top U.S. fuel pipeline network",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://chuongdong.com/reverse%20engineering/2021/05/06/DarksideRansomware/",
            "date": "2021-05-06",
            "organization": "Chuongdong blog",
            "author": "Chuong Dong",
            "title": "Darkside Ransomware",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "http://chuongdong.com/reverse%20engineering/2021/05/06/DarksideRansomware/",
            "date": "2021-05-06",
            "organization": "Chuongdong blog",
            "author": "Chuong Dong",
            "title": "Darkside Ransomware",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.cyborgsecurity.com/cyborg_labs/hunting-ransomware-inhibiting-system-backup-or-recovery/",
            "date": "2021-05-06",
            "organization": "Cyborg Security",
            "author": "Brandon Denker",
            "title": "Ransomware: Hunting for Inhibiting System Backup or Recovery",
            "categories": [
                "Avaddon",
                "Conti",
                "DarkSide",
                "LockBit",
                "Mailto",
                "Maze",
                "Mespinoza",
                "Nemty",
                "PwndLocker",
                "RagnarLocker",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Snatch",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://twitter.com/JAMESWT_MHT/status/1388301138437578757",
            "date": "2021-05-01",
            "organization": "Twitter (@JAMESWT_MHT)",
            "author": "JamesWT",
            "title": "Tweet on linux version of DarkSide ransomware",
            "categories": [
                "DarkSide",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.repubblica.it/economia/finanza/2021/04/28/news/un_sospetto_attacco_telematico_blocca_le_filiali_della_bcc_di_roma-298485827/",
            "date": "2021-04-28",
            "organization": "La Repubblica",
            "author": "Andrea Greco",
            "title": "Un sospetto attacco telematico blocca le filiali della Bcc di Roma",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.coveware.com/blog/ransomware-attack-vectors-shift-as-new-software-vulnerability-exploits-abound",
            "date": "2021-04-26",
            "organization": "CoveWare",
            "author": "CoveWare",
            "title": "Ransomware Attack Vectors Shift as New Software Vulnerability Exploits Abound",
            "categories": [
                "Avaddon",
                "Clop",
                "Conti",
                "DarkSide",
                "Egregor",
                "LockBit",
                "Mailto",
                "Phobos",
                "REvil",
                "Ryuk",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://vulnerability.ch/2021/04/ransomware-and-date-leak-site-publication-time-analysis/",
            "date": "2021-04-25",
            "organization": "Vulnerability.ch Blog",
            "author": "Corsin Camichel",
            "title": "Ransomware and Data Leak Site Publication Time Analysis",
            "categories": [
                "Avaddon",
                "Babuk",
                "Clop",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Mespinoza",
                "Nefilim",
                "REvil"
            ]
        },
        {
            "data_url": "https://therecord.media/ransomware-gang-wants-to-short-the-stock-price-of-their-victims/",
            "date": "2021-04-22",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Ransomware gang wants to short the stock price of their victims",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.databreaches.net/a-chat-with-darkside/",
            "date": "2021-04-12",
            "organization": "DataBreaches.net",
            "author": "Dissent",
            "title": "A chat with DarkSide",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/cybereason-vs-darkside-ransomware",
            "date": "2021-04-01",
            "organization": "Cybereason",
            "author": "Cybereason Nocturnus",
            "title": "Cybereason vs. DarkSide Ransomware",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.varonis.com/blog/darkside-ransomware/",
            "date": "2021-03-18",
            "organization": "Varonis",
            "author": "Snir Ben Shimol",
            "title": "Return of the Darkside: Analysis of a Large-Scale Data Theft Campaign",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=qxPXxWMI2i4",
            "date": "2021-03-09",
            "organization": "Youtube (SANS Digital Forensics and Incident Response)",
            "author": "Eric Loui",
            "title": "Jackpotting ESXi Servers For Maximum Encryption | Eric Loui & Sergei Frankoff | SANS CTI Summit 2021",
            "categories": [
                "DarkSide",
                "RansomEXX",
                "DarkSide",
                "RansomEXX",
                "GOLD DUPONT"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-sprite-spider-target-esxi-servers-with-ransomware/?utm_campaign=blog&utm_medium=soc&utm_source=twtr&utm_content=sprout",
            "date": "2021-02-26",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "Hypervisor Jackpotting: CARBON SPIDER and SPRITE SPIDER Target ESXi Servers With Ransomware to Maximize Impact",
            "categories": [
                "DarkSide",
                "RansomEXX",
                "Griffon",
                "Carbanak",
                "Cobalt Strike",
                "DarkSide",
                "IcedID",
                "MimiKatz",
                "PyXie",
                "RansomEXX",
                "REvil"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2021GTR.pdf",
            "date": "2021-02-23",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2021 Global Threat Report",
            "categories": [
                "RansomEXX",
                "Amadey",
                "Anchor",
                "Avaddon",
                "BazarBackdoor",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "Cutwail",
                "DanaBot",
                "DarkSide",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "Hakbit",
                "IcedID",
                "JSOutProx",
                "KerrDown",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "NedDnLoader",
                "Nemty",
                "Pay2Key",
                "PlugX",
                "Pushdo",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "Quasar RAT",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet",
                "ShadowPad",
                "SmokeLoader",
                "Snake",
                "SUNBURST",
                "SunCrypt",
                "TEARDROP",
                "TrickBot",
                "WastedLocker",
                "Winnti",
                "Zloader",
                "KNOCKOUT SPIDER",
                "OUTLAW SPIDER",
                "RIDDLE SPIDER",
                "SOLAR SPIDER",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://socprime.com/blog/affiliates-vs-hunters-fighting-the-darkside/",
            "date": "2021-01-25",
            "organization": "SOC Prime",
            "author": "Emanuele De Lucia",
            "title": "Affiliates vs Hunters: Fighting the DarkSide",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://labs.bitdefender.com/2021/01/darkside-ransomware-decryption-tool/",
            "date": "2021-01-11",
            "organization": "Bitdefender",
            "author": "Bitdefender Team",
            "title": "Darkside Ransomware Decryption Tool",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-sprite-spider-target-esxi-servers-with-ransomware/",
            "date": "2021",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "Hypervisor Jackpotting: CARBON SPIDER and SPRITE SPIDER Target ESXi Servers With Ransomware to Maximize Impact",
            "categories": [
                "DarkSide",
                "RansomEXX",
                "DarkSide",
                "RansomEXX",
                "GOLD DUPONT"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-waterfall",
            "date": "2021",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "Threat Profile: GOLD WATERFALL",
            "categories": [
                "Cobalt Strike",
                "DarkSide",
                "GOLD WATERFALL"
            ]
        },
        {
            "data_url": "https://www.accenture.com/us-en/blogs/cyber-defense/evolving-danger-ransomware-extortion",
            "date": "2020-12-16",
            "organization": "Accenture",
            "author": "Paul Mansfield",
            "title": "Tracking and combatting an evolving danger: Ransomware extortion",
            "categories": [
                "DarkSide",
                "Egregor",
                "Maze",
                "Nefilim",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://ghoulsec.medium.com/mal-series-13-darkside-ransomware-c13d893c36a6",
            "date": "2020-12-03",
            "organization": "Medium GhouLSec",
            "author": "GhouLSec",
            "title": "[Mal Series #13] Darkside Ransom",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/darkside-ransomware-is-creating-a-secure-data-leak-service-in-iran/",
            "date": "2020-11-13",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "DarkSide ransomware is creating a secure data leak service in Iran",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.databreachtoday.com/blogs/darkside-ransomware-gang-launches-affiliate-program-p-2968",
            "date": "2020-11-12",
            "organization": "databreachtoday",
            "author": "Mathew J. Schwartz",
            "title": "Darkside Ransomware Gang Launches Affiliate Program",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.hornetsecurity.com/en/security-informationen-en/leakware-ransomware-hybrid-attacks/",
            "date": "2020-10-23",
            "organization": "Hornetsecurity",
            "author": "Hornetsecurity Security Lab",
            "title": "Leakware-Ransomware-Hybrid Attacks",
            "categories": [
                "Avaddon",
                "Clop",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Mailto",
                "Maze",
                "Mespinoza",
                "Nefilim",
                "RagnarLocker",
                "REvil",
                "Sekhmet",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://zawadidone.nl/darkside-ransomware-analysis/",
            "date": "2020-10-05",
            "organization": "Zawadi Done",
            "author": "Zawadi Done",
            "title": "DarkSide ransomware analysis",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/issues/cyber-security-services/insights/what-is-behind-ransomware-attacks-increase.html",
            "date": "2020-09-29",
            "organization": "PWC UK",
            "author": "Andy Auld",
            "title": "What's behind the increase in ransomware attacks this year?",
            "categories": [
                "DarkSide",
                "Avaddon",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FriedEx",
                "Mailto",
                "PwndLocker",
                "QakBot",
                "REvil",
                "Ryuk",
                "SMAUG",
                "SunCrypt",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.digitalshadows.com/blog-and-research/darkside-the-new-ransomware-group-behind-highly-targeted-attacks/",
            "date": "2020-09-22",
            "organization": "Digital Shadows",
            "author": "Stefano De Blasi",
            "title": "DarkSide: The New Ransomware Group Behind Highly Targeted Attacks",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://ke-la.com/how-ransomware-gangs-find-new-monetization-schemes-and-evolve-in-marketing/",
            "date": "2020-08-25",
            "organization": "KELA",
            "author": "Victoria Kivilevich",
            "title": "How Ransomware Gangs Find New Monetization Schemes and Evolve in Marketing",
            "categories": [
                "Avaddon",
                "Clop",
                "DarkSide",
                "DoppelPaymer",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Nefilim",
                "RagnarLocker",
                "REvil",
                "Sekhmet"
            ]
        },
        {
            "data_url": "https://id-ransomware.blogspot.com/2020/08/darkside-ransomware.html",
            "date": "2020-08-10",
            "organization": "ID Ransomware",
            "author": "Andrew Ivanov",
            "title": "DarkSide Ransomware",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.acronis.com/en-us/articles/darkside-ransomware/",
            "date": "2020-08",
            "organization": "Acronis",
            "author": "Acronis Security",
            "title": "DarkSide Ransomware Does Not Attack Hospitals, Schools and Governments",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.nytimes.com/2021/05/29/world/europe/ransomware-russia-darkside.html",
            "date": "2020-05-29",
            "organization": "The New York Times",
            "author": "Andrew E. Kramer",
            "title": "Secret Chats Show How Cybergang Became a Ransomware Powerhouse",
            "categories": [
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/how-ransomware-adversaries-reacted-to-the-darkside-pipeline-attack/",
            "date": "2020-05-28",
            "organization": "CrowdStrike",
            "author": "The Crowdstrike Intel Team",
            "title": "DarkSide Pipeline Attack Shakes Up the Ransomware-as-a-Service Landscape",
            "categories": [
                "DarkSide",
                "DarkSide"
            ]
        },
        {
            "data_url": "https://www.databreaches.net/a-former-darkside-listing-shows-up-on-revils-leak-site/",
            "date": "2020-05-26",
            "organization": "DataBreaches.net",
            "author": "Dissent",
            "title": "A former DarkSide listing shows up on REvil\u2019s leak site",
            "categories": [
                "DarkSide",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/falcon-protects-from-darkside-ransomware/",
            "date": "2020-05-18",
            "organization": "CrowdStrike",
            "author": "Karan Sood",
            "title": "DarkSide Goes Dark: How CrowdStrike Falcon Customers Were Protected",
            "categories": [
                "DarkSide",
                "DarkSide"
            ]
        }
    ],
    "mitre": []
};