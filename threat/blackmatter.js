var threatdata = {
    "name": "BlackMatter",
    "alias": "BlackMatter",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-09-28",
    "all_data": {
        "tool": "BlackMatter",
        "names": [
            {
                "name": "BlackMatter"
            }
        ],
        "description": "(BleepingComputer) While researching the new ransomware group, BleepingComputer found a decryptor from a BlackMatter victim and shared it with Emisosft CTO and ransomware expert Fabian Wosar.\n\nAfter analyzing the decryptor, Wosar confirmed that the new BlackMatter group is using the same unique encryption methods that DarkSide had used in their attacks.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://therecord.media/blackmatter-ransomware-targets-companies-with-revenues-of-100-million-and-more/",
            "https://www.bleepingcomputer.com/news/security/blackmatter-ransomware-gang-rises-from-the-ashes-of-darkside-revil/",
            "https://www.bleepingcomputer.com/news/security/darkside-ransomware-gang-returns-as-new-blackmatter-operation/",
            "https://therecord.media/an-interview-with-blackmatter-a-new-ransomware-group-thats-learning-from-the-mistakes-of-darkside-and-revil/",
            "https://www.bleepingcomputer.com/news/security/linux-version-of-blackmatter-ransomware-targets-vmware-esxi-servers/",
            "https://medium.com/s2wlab/blackmatter-x-babuk-using-the-same-web-server-for-sharing-leaked-files-d01c20a74751",
            "https://us-cert.gov/ncas/alerts/aa21-291a",
            "https://blog.emsisoft.com/en/39181/on-the-matter-of-blackmatter/",
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/blackmatter-data-exfiltration",
            "https://illusive.com/resources/threat-research-blog/preventing-blackmatter-ransomware-from-encryption-of-available-remote-share/",
            "https://blog.talosintelligence.com/2022/03/from-blackmatter-to-blackcat-analyzing.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.blackmatter",
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.blackmatter"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/global/pulses?q=tag:blackmatter"
        ],
        "uuid": "1ccb7a82-d909-4638-b970-99f30d53c854",
        "last-card-change": "2022-04-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "BlackMatter",
            "malware_alias": null,
            "malware": "elf.blackmatter",
            "last_update": "2022-12-28 18:02:59",
            "tags": [
                "blackmatter",
                "pe",
                "checkin",
                "BlackMatter"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "62e9edb7e44dc3eecd59ad14f9324dff",
                        "timestamp": "2022-12-28 18:02:59"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "8561226f674aeb4abc1b9910ddc4855ac8ac2fcd4f5face1f84e34878ac98afc",
                        "timestamp": "2021-11-25 18:29:52"
                    },
                    {
                        "value": "bf9511517f610387d714553bed6ff59d55c21cd0aa18ae00714585e699a332a3",
                        "timestamp": "2021-11-25 18:29:52"
                    },
                    {
                        "value": "4524784688e60313b8fefdebde441ca447c1330d90b86885fb55d099071c6ec9",
                        "timestamp": "2021-11-25 18:29:51"
                    },
                    {
                        "value": "22d7d67c3af10b1a37f277ebabe2d1eb4fd25afbd6437d4377400e148bcc08d6",
                        "timestamp": "2021-11-25 18:29:51"
                    },
                    {
                        "value": "7f6dd0ca03f04b64024e86a72a6d7cfab6abccc2173b85896fc4b431990a5984",
                        "timestamp": "2021-11-25 18:29:50"
                    },
                    {
                        "value": "6155637f8b98426258f5d4321bce4104df56c7771967813d61362c2118632a7b",
                        "timestamp": "2021-11-25 18:29:50"
                    },
                    {
                        "value": "706f3eec328e91ff7f66c8f0a2fb9b556325c153a329a2062dc85879c540839d",
                        "timestamp": "2021-11-25 18:29:49"
                    },
                    {
                        "value": "8f1b0affffb2f2f58b477515d1ce54f4daa40a761d828041603d5536c2d53539",
                        "timestamp": "2021-09-17 16:18:43"
                    },
                    {
                        "value": "e81ead735c4baf75702a3a591c87734e7d0914dac55d09b118ff9d14eb2740d6",
                        "timestamp": "2021-09-17 16:18:42"
                    }
                ],
                "domain": [
                    {
                        "value": "fluentzip.org",
                        "timestamp": "2021-09-30 06:18:56"
                    }
                ]
            }
        },
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
    "last_ioc_update": "2022-12-28 18:02:59",
    "file_name": "blackmatter",
    "analysis": null,
    "articles": [
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
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2022-0802.pdf",
            "date": "2022-08-02",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Initial Access Brokers Are Key to Rise in Ransomware Attacks",
            "categories": [
                "Azorult",
                "BlackMatter",
                "Conti",
                "Mars Stealer",
                "Raccoon",
                "RedLine Stealer",
                "Taurus Stealer",
                "Vidar"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/22/g/lockbit-ransomware-group-augments-its-latest-variant--lockbit-3-.html",
            "date": "2022-07-25",
            "organization": "Trend Micro",
            "author": "Ivan Nicole Chavez",
            "title": "LockBit Ransomware Group Augments Its Latest Variant, LockBit 3.0, With BlackMatter Capabilities",
            "categories": [
                "BlackMatter",
                "LockBit"
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
            "data_url": "https://www.microsoft.com/security/blog/2022/05/09/ransomware-as-a-service-understanding-the-cybercrime-gig-economy-and-how-to-protect-yourself/",
            "date": "2022-05-09",
            "organization": "Microsoft Security",
            "author": "Microsoft Threat Intelligence Center",
            "title": "Ransomware-as-a-service: Understanding the cybercrime gig economy and how to protect yourself",
            "categories": [
                "Griffon",
                "BazarBackdoor",
                "BlackCat",
                "BlackMatter",
                "Blister",
                "Gozi",
                "LockBit",
                "Pandora",
                "Rook",
                "SystemBC",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://cert.ssi.gouv.fr/uploads/20220427_NP_TLPWHITE_ANSSI_FIN7.pdf",
            "date": "2022-04-27",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "LE GROUPE CYBERCRIMINEL FIN7",
            "categories": [
                "Bateleur",
                "BELLHOP",
                "Griffon",
                "SQLRat",
                "POWERSOURCE",
                "Andromeda",
                "BABYMETAL",
                "BlackCat",
                "BlackMatter",
                "BOOSTWRITE",
                "Carbanak",
                "Cobalt Strike",
                "DNSMessenger",
                "Dridex",
                "DRIFTPIN",
                "Gameover P2P",
                "MimiKatz",
                "Murofet",
                "Qadars",
                "Ranbyus",
                "SocksBot"
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
            "data_url": "https://thehackernews.com/2022/04/researchers-connect-blackcat-ransomware.html",
            "date": "2022-04-08",
            "organization": "The Hacker News",
            "author": "Ravie Lakshmanan",
            "title": "Researchers Connect BlackCat Ransomware with Past BlackMatter Malware Activity",
            "categories": [
                "BlackCat",
                "BlackMatter",
                "BlackCat",
                "BlackMatter"
            ]
        },
        {
            "data_url": "https://raw.githubusercontent.com/antonioCoco/infosec-talks/main/InsomniHack_2022_Ransomware_Encryption_Internals.pdf",
            "date": "2022-03-24",
            "organization": "SentinelOne",
            "author": "Antonio Cocomazzi",
            "title": "Ransomware Encryption Internals: A Behavioral Characterization",
            "categories": [
                "Babuk",
                "Babuk",
                "BlackMatter"
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
            "data_url": "https://www.theregister.com/2022/03/22/talos-ransomware-blackcat/",
            "date": "2022-03-22",
            "organization": "The Register",
            "author": "Jeff Burt",
            "title": "This is a BlackCat you don't want crossing your path",
            "categories": [
                "BlackCat",
                "BlackMatter"
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
            "data_url": "https://blog.talosintelligence.com/2022/03/from-blackmatter-to-blackcat-analyzing.html",
            "date": "2022-03-17",
            "organization": "Cisco",
            "author": "Tiago Pereira",
            "title": "From BlackMatter to BlackCat: Analyzing two attacks from one affiliate",
            "categories": [
                "BlackCat",
                "BlackMatter",
                "BlackCat",
                "BlackMatter"
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
            "data_url": "https://assets.virustotal.com/reports/2021trends.pdf",
            "date": "2022-03",
            "organization": "VirusTotal",
            "author": "VirusTotal",
            "title": "VirusTotal's 2021 Malware Trends Report",
            "categories": [
                "Anubis",
                "AsyncRAT",
                "BlackMatter",
                "Cobalt Strike",
                "DanaBot",
                "Dridex",
                "Khonsari",
                "MimiKatz",
                "Mirai",
                "Nanocore RAT",
                "Orcus RAT"
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
            "data_url": "https://www.mandiant.com/resources/chasing-avaddon-ransomware",
            "date": "2022-01-19",
            "organization": "Mandiant",
            "author": "Adrian Sanchez Hernandez",
            "title": "One Source to Rule Them All: Chasing AVADDON Ransomware",
            "categories": [
                "BlackMatter",
                "Avaddon",
                "BlackMatter",
                "MedusaLocker",
                "SystemBC",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2022/01/kraken-the-code-on-prometheus",
            "date": "2022-01-19",
            "organization": "Blackberry",
            "author": "The BlackBerry Research & Intelligence Team",
            "title": "Kraken the Code on Prometheus",
            "categories": [
                "Prometheus Backdoor",
                "BlackMatter",
                "Cerber",
                "Cobalt Strike",
                "DCRat",
                "Ficker Stealer",
                "QakBot",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://medium.com/s2wblog/blackcat-new-rust-based-ransomware-borrowing-blackmatters-configuration-31c8d330a809",
            "date": "2021-12-10",
            "organization": "Medium s2wlab",
            "author": "S2W TALON",
            "title": "BlackCat: New Rust based ransomware borrowing BlackMatter\u2019s configuration",
            "categories": [
                "BlackCat",
                "BlackMatter"
            ]
        },
        {
            "data_url": "https://services.google.com/fh/files/misc/gcat_threathorizons_full_nov2021.pdf",
            "date": "2021-11-24",
            "organization": "Google",
            "author": "Google Cybersecurity Action Team",
            "title": "Threat Horizons Cloud Threat Intelligence November 2021. Issue 1",
            "categories": [
                "BlackMatter"
            ]
        },
        {
            "data_url": "https://umbrella.cisco.com/blog/cybersecurity-threat-spotlight-blackmatter-lockbit-thor",
            "date": "2021-11-18",
            "organization": "Cisco",
            "author": "Josh Pyorre",
            "title": "BlackMatter, LockBit, and THOR",
            "categories": [
                "BlackMatter",
                "LockBit",
                "PlugX"
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
            "data_url": "https://therecord.media/blackmatter-ransomware-says-its-shutting-down-due-to-pressure-from-local-authorities/",
            "date": "2021-11-03",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "BlackMatter ransomware says its shutting down due to pressure from local authorities",
            "categories": [
                "BlackMatter"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/blackmatter-ransomware-moves-victims-to-lockbit-after-shutdown/",
            "date": "2021-11-03",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "BlackMatter ransomware moves victims to LockBit after shutdown",
            "categories": [
                "BlackMatter",
                "BlackMatter",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.varonis.com/blog/blackmatter-ransomware/",
            "date": "2021-11-02",
            "organization": "Varonis",
            "author": "Dvir Sason",
            "title": "BlackMatter Ransomware: In-Depth Analysis & Recommendations",
            "categories": [
                "BlackMatter"
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
            "data_url": "https://www.mandiant.com/resources/cryptography-blackmatter-ransomware",
            "date": "2021-10-20",
            "organization": "Mandiant",
            "author": "Jacob Thompson",
            "title": "Hidden in Plain Sight: Identifying Cryptography in BLACKMATTER Ransomware",
            "categories": [
                "BlackMatter"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa21-291a",
            "date": "2021-10-18",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "Alert (AA21-291A): BlackMatter Ransomware",
            "categories": [
                "BlackMatter",
                "BlackMatter"
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
            "data_url": "https://www.mcafee.com/blogs/enterprise/blackmatter-ransomware-analysis-the-dark-side-returns/",
            "date": "2021-09-22",
            "organization": "McAfee",
            "author": "Alexandre Mundo",
            "title": "BlackMatter Ransomware Analysis; The Dark Side Returns",
            "categories": [
                "BlackMatter"
            ]
        },
        {
            "data_url": "https://www.nozominetworks.com/blog/blackmatter-ransomware-technical-analysis-and-tools-from-nozomi-networks-labs/",
            "date": "2021-09-21",
            "organization": "Nozomi Networks",
            "author": "Nozomi Networks Labs",
            "title": "BlackMatter Ransomware Technical Analysis and Tools from Nozomi Networks Labs",
            "categories": [
                "BlackMatter"
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
            "data_url": "https://medium.com/s2wlab/groove-x-ramp-the-relation-between-groove-babuk-ramp-and-blackmatter-f75644f8f92d",
            "date": "2021-09-10",
            "organization": "S2W LAB Inc.",
            "author": "S2W TALON",
            "title": "Groove x RAMP : The relation between Groove, Babuk, Payload.bin, RAMP, and BlackMatter",
            "categories": [
                "Babuk",
                "BlackMatter",
                "Babuk",
                "BlackMatter"
            ]
        },
        {
            "data_url": "https://www.ciphertechsolutions.com/rapidly-evolving-blackmatter-ransomware-tactics/",
            "date": "2021-09-08",
            "organization": "Ciper Tech Solutions",
            "author": "Cipher Tech ACCE Team",
            "title": "Rapidly Evolving BlackMatter Ransomware Tactics",
            "categories": [
                "BlackMatter"
            ]
        },
        {
            "data_url": "https://medium.com/s2wlab/grooves-thoughts-on-blackmatter-babuk-and-interruption-in-the-supply-of-cheese-in-the-b5328bc764f2",
            "date": "2021-09-08",
            "organization": "Medium s2wlab",
            "author": "S2W TALON",
            "title": "Groove\u2019s thoughts on Blackmatter, Babuk, and cheese shortages in the Netherlands",
            "categories": [
                "Babuk",
                "BlackMatter",
                "Babuk",
                "BlackMatter"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/enterprise/mcafee-enterprise-atr/how-groove-gang-is-shaking-up-the-ransomware-as-a-service-market-to-empower-affiliates/",
            "date": "2021-09-08",
            "organization": "McAfee",
            "author": "Max Kersten",
            "title": "How Groove Gang is Shaking up the Ransomware-as-a-Service Market to Empower Affiliates",
            "categories": [
                "Babuk",
                "BlackMatter",
                "Babuk",
                "BlackMatter",
                "CTB Locker"
            ]
        },
        {
            "data_url": "https://ke-la.com/the-ideal-ransomware-victim-what-attackers-are-looking-for/",
            "date": "2021-09-06",
            "organization": "KELA",
            "author": "Victoria Kivilevich",
            "title": "The Ideal Ransomware Victim: What Attackers Are Looking For",
            "categories": [
                "BlackMatter",
                "Cryakl"
            ]
        },
        {
            "data_url": "https://chuongdong.com/reverse%20engineering/2021/09/05/BlackMatterRansomware/",
            "date": "2021-09-05",
            "organization": "Chuongdong blog",
            "author": "Chuong Dong",
            "title": "BlackMatter Ransomware v2.0",
            "categories": [
                "BlackMatter"
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
            "data_url": "https://medium.com/s2wlab/blackmatter-x-babuk-using-the-same-web-server-for-sharing-leaked-files-d01c20a74751",
            "date": "2021-09-01",
            "organization": "Medium s2wlab",
            "author": "S2W LAB INTELLIGENCE TEAM",
            "title": "BlackMatter x Babuk : Using the same web server for sharing leaked files",
            "categories": [
                "Babuk",
                "BlackMatter",
                "Babuk",
                "BlackMatter"
            ]
        },
        {
            "data_url": "https://blog.minerva-labs.com/blackmatter",
            "date": "2021-08-31",
            "organization": "Minerva Labs",
            "author": "Minerva Labs",
            "title": "BlackMatter - The New Star Of Ransomware",
            "categories": [
                "BlackMatter"
            ]
        },
        {
            "data_url": "https://www.netskope.com/blog/netskope-threat-coverage-blackmatter",
            "date": "2021-08-23",
            "organization": "Netskope",
            "author": "Gustavo Palazolo",
            "title": "Netskope Threat Coverage: BlackMatter",
            "categories": [
                "BlackMatter"
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
            "data_url": "https://news.sophos.com/en-us/2021/08/09/blackmatter-ransomware-emerges-from-the-shadow-of-darkside/",
            "date": "2021-08-09",
            "organization": "Sophos",
            "author": "Mark Loman",
            "title": "BlackMatter ransomware emerges from the shadow of DarkSide",
            "categories": [
                "BlackMatter",
                "BlackMatter"
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
            "data_url": "https://www.bleepingcomputer.com/news/security/linux-version-of-blackmatter-ransomware-targets-vmware-esxi-servers/",
            "date": "2021-08-05",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Linux version of BlackMatter ransomware targets VMware ESXi servers",
            "categories": [
                "BlackMatter"
            ]
        },
        {
            "data_url": "https://www.tesorion.nl/en/posts/analysis-of-the-blackmatter-ransomware/",
            "date": "2021-08-05",
            "organization": "Tesorion",
            "author": "Gijs Rijnders",
            "title": "Analysis of the BlackMatter ransomware",
            "categories": [
                "BlackMatter"
            ]
        },
        {
            "data_url": "https://twitter.com/VK_Intel/status/1423188690126266370",
            "date": "2021-08-05",
            "organization": "Twitter (@VK_intel)",
            "author": "Vitali Kremez",
            "title": "Tweet on Linux variant of BlackMatter",
            "categories": [
                "BlackMatter"
            ]
        },
        {
            "data_url": "https://blog.digital-investigations.info/2021-08-05-understanding-blackmatters-api-hashing.html",
            "date": "2021-08-04",
            "organization": "",
            "author": "Jan Gruber",
            "title": "Understanding BlackMatter's API Hashing",
            "categories": [
                "BlackMatter"
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
        }
    ],
    "mitre": [
        {
            "procedure_name": "at",
            "procedure_code": "s0110",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0110",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                }
            ]
        }
    ]
};