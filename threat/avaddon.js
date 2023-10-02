var threatdata = {
    "name": "Avaddon",
    "alias": "Avaddon",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Avaddon",
        "names": [
            {
                "name": "Avaddon"
            }
        ],
        "description": "(Awake Security) Avaddon is a cryptolocker ransomware written in C++ that is best known for encrypting files and changing the file extension to .avdn. The ransomware also deletes the volume shadow copies and other system backups and typically demands a ransom ranging between $150 and $900. Since the ransomware uses strong encryption algorithms like AES256 and RSA2048, no decryptor is available and it is impossible to decrypt the file without the key that was used to encrypt it. This ransomware is sold similar to other Ransomware-as-a-service(RaaS) like REvil. Thus, even someone with limited technical background can become an \u201caffiliate\u201d to spread the malware. In return, the profit gets shared between the threat actor and the affiliate. In this blog post we dissect this malware and discuss methods to perform threat hunting for the Avaddon ransomware family.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://awakesecurity.com/blog/threat-hunting-for-avaddon-ransomware/",
            "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/ransomware-report-avaddon-and-new-techniques-emerge-industrial-sector-targeted",
            "https://www.subexsecure.com/pdf/malware-reports/June-2020/Avaddon_Ransomware.pdf",
            "https://arxiv.org/pdf/2102.04796.pdf",
            "https://labs.sentinelone.com/avaddon-raas-breaks-public-decryptor-continues-on-rampage/",
            "https://www.domaintools.com/resources/blog/avaddon-the-latest-raas-to-jump-on-the-extortion-bandwagon",
            "https://www.offensive-hackers.com/2020/06/this-new-avaddon-ransomware-targeting-worldwide-users.html",
            "https://www.proofpoint.com/us/blog/security-briefs/ransomware-initial-payload-reemerges-avaddon-philadelphia-mr-robot-and-more",
            "https://asec.ahnlab.com/en/17411/",
            "https://www.cybereason.com/blog/cybereason-vs.-avaddon-ransomware",
            "https://www.cyber.gov.au/sites/default/files/2021-05/2021-003%20Ongoing%20campaign%20using%20Avaddon%20Ransomware%20-%2020210508.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0640/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.avaddon"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:avaddon"
        ],
        "playbook": [
            "https://www.nomoreransom.org/uploads/Avaddon_documentation.pdf",
            "https://www.nomoreransom.org/uploads/Avaddon_documentation_new.pdf"
        ],
        "uuid": "edb7a031-1b90-4d7c-94b2-659a2d9759f9",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Avaddon",
            "malware_alias": null,
            "malware": "win.avaddon",
            "last_update": "2021-11-25 19:45:32",
            "tags": [
                "avaddon"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "f7b1faade074d93149edb5f1f2237298409e9f49dbe30ec6004269e0c59546e1",
                        "timestamp": "2021-11-25 19:45:32"
                    },
                    {
                        "value": "7dc978b567a63ee043ffc7640bb14f26fed200962b27dfb56d02d2ab10344c53",
                        "timestamp": "2021-11-25 19:45:31"
                    },
                    {
                        "value": "b9c3f34558bd6d18a4ecb8a3bc6722e56ef6072f2954e2a138ddde1793cea86f",
                        "timestamp": "2021-11-25 19:45:30"
                    },
                    {
                        "value": "1228d0f04f0ba82569fc1c0609f9fd6c377a91b9ea44c1e7f9f84b2b90552da2",
                        "timestamp": "2021-11-25 19:45:30"
                    },
                    {
                        "value": "58a2de7b3b5c4a1719b35fc1fd37811fad749bb81d794fe675cfba1f83f6e064",
                        "timestamp": "2021-06-09 05:35:37"
                    },
                    {
                        "value": "6b60be2abbe479f57f83c9af4682c2c8c65c98574307f920f5a0a7a47a85f72a",
                        "timestamp": "2021-06-09 05:35:37"
                    },
                    {
                        "value": "f7895214503b4888e4da809ac6869929bd33df0776177f10e4416e0879fd0672",
                        "timestamp": "2021-06-09 05:35:37"
                    },
                    {
                        "value": "319ec1a54148644197b40ed4d73b8fe5646c4f6ebf76d1487bce40a72d37baa7",
                        "timestamp": "2021-06-09 05:35:37"
                    },
                    {
                        "value": "e3493fea655027d88224954f32985caff0aebaa858df3314747f6f4e4a92ac8d",
                        "timestamp": "2021-05-28 14:47:49"
                    },
                    {
                        "value": "e224be036759ce0a8611d9863a0e6def4db9d5ea45948d63b82ab42627a8c919",
                        "timestamp": "2021-05-28 14:47:49"
                    },
                    {
                        "value": "81493b11fc6acd0d4d8bb653dd9fcdaec16affbcbb509c01f6377db68efceee3",
                        "timestamp": "2021-05-28 14:47:49"
                    },
                    {
                        "value": "433875f694fb7f96b4fe51e4c3d9a45515e849d1ffd9aa528fb9b23f6323e106",
                        "timestamp": "2021-05-28 14:47:49"
                    },
                    {
                        "value": "b2d554660744869010b032ae7442f6b9f78ed4918d9e23c669cea4bc592236a3",
                        "timestamp": "2021-05-28 14:47:48"
                    },
                    {
                        "value": "ddee9852f4a2b0bfa861eadce78e0366b3554b03f5619a1dc7507cd285b8a393",
                        "timestamp": "2021-05-28 14:47:48"
                    },
                    {
                        "value": "57aec830833d4baed7936376d3985d14c8bd5020bec6182ee00c8885b0218282",
                        "timestamp": "2021-05-28 14:47:48"
                    },
                    {
                        "value": "5886ac60da0c972c25c3a67c3cdb025ad5f87b471c5bf312b14e8671983d4201",
                        "timestamp": "2021-05-28 14:47:48"
                    },
                    {
                        "value": "5c3c7ca062428645ef199eea00b98ded1a1d97d8d534a3c9652a6b077349a395",
                        "timestamp": "2021-05-28 14:00:27"
                    },
                    {
                        "value": "accdf7be34e793269c8e340d73a34199a9a4b3503e9b2120e9f3ef250f18922c",
                        "timestamp": "2021-05-28 14:00:27"
                    },
                    {
                        "value": "e998f113f94fa5fd31b4c62ab245f5bbb163ad5e39ad2613f12efa9c8ceba6ad",
                        "timestamp": "2021-05-28 14:00:27"
                    },
                    {
                        "value": "a0424f14aa77301280d5ca5cbcb30ca9865c32ef0be4e33a65b0175907f163f4",
                        "timestamp": "2021-05-28 14:00:27"
                    },
                    {
                        "value": "bd2bbb9cf42fade98a4c9df8b28b21eba5015e23883d09b46b73a92962748000",
                        "timestamp": "2021-05-28 13:47:59"
                    },
                    {
                        "value": "fc95f4af5d0e0244e4a9556d908f0a9279bcaf0ac243f088e1971af7436c6335",
                        "timestamp": "2021-05-28 13:47:59"
                    },
                    {
                        "value": "240d0e4653fdcac298777ad397af4df50fe355aa87fd82146ae40e9e998eab90",
                        "timestamp": "2021-05-28 13:47:59"
                    },
                    {
                        "value": "f318f43399f0472b9ad8aa6667b47c2736f9beb4a4411c561af102016f7319c0",
                        "timestamp": "2021-05-28 13:47:59"
                    },
                    {
                        "value": "48d7cd572f14aed7a90d6b66097a885a889e6e7416a6aaa2eb442706ff661275",
                        "timestamp": "2021-05-17 10:30:35"
                    },
                    {
                        "value": "1a2eb88e8c189acb63177f0f27050e067340ccdec996de672f20f02f46f7d292",
                        "timestamp": "2021-05-17 10:30:35"
                    },
                    {
                        "value": "693b7b4d0546eafa22837413e7c98f18d276f1c6a2459a51371fc29b9d91b625",
                        "timestamp": "2021-05-17 10:30:35"
                    },
                    {
                        "value": "34de1542ad6cd0f8dd003c061efd1618696ca1c06343fc7532a880ccd2b497c2",
                        "timestamp": "2021-05-17 10:30:35"
                    },
                    {
                        "value": "32643547aefae01363ff01beb15fa818827896088670a78e814a227ca120975a",
                        "timestamp": "2021-04-23 06:06:11"
                    },
                    {
                        "value": "91e2140e38cab5d72b810dc8a3b0807cb6e7fb09e908379bafb4858ad15bc941",
                        "timestamp": "2021-04-23 06:06:11"
                    },
                    {
                        "value": "238a008d432b20076b075ba8ad25412a39f7c44540a59913e5d36a4c23d6c21c",
                        "timestamp": "2021-04-23 06:06:11"
                    },
                    {
                        "value": "c9a588001a2cf732b6636aaef03c9d147a37d122681de7d16e3f0f4c3717351e",
                        "timestamp": "2021-04-23 06:06:11"
                    },
                    {
                        "value": "c14dd4a0831ea2548e1ddfd54b9704fe8ad0057924ede041c8c064b66690a028",
                        "timestamp": "2021-03-22 01:00:32"
                    },
                    {
                        "value": "7e581424371b20d2b5a88547817c7350ac70a83940383ccf4293f38d866a0a84",
                        "timestamp": "2021-03-22 01:00:32"
                    },
                    {
                        "value": "adc75b7ab8b9296814d8f9c23d6033b1eb4b45550c1ddab30cdc7654f98dc46b",
                        "timestamp": "2021-03-22 01:00:32"
                    },
                    {
                        "value": "3d89284d1531d1f3d9c307f712d5fd8cc9f30bfa486e883265a9e0809fde4beb",
                        "timestamp": "2021-03-22 01:00:32"
                    },
                    {
                        "value": "8b921d2333babce2c668096229f4fb6942bad3c7a1436b9d209ee05432ede990",
                        "timestamp": "2021-03-11 06:54:59"
                    },
                    {
                        "value": "bc5c264c4dc0207f6d500c47f870cc2aef641c4bf0efa3b1a408b83922cc61ac",
                        "timestamp": "2021-03-11 06:54:59"
                    },
                    {
                        "value": "d0fb16b8c62a08ebebee2962cfd054b72dd70e2493dfe4fb658d7c3786cc6be1",
                        "timestamp": "2021-03-11 06:54:59"
                    },
                    {
                        "value": "74be995266568ae18ab3ceae79b210bc14f7fa433eebca23f92d7f82961e2a3f",
                        "timestamp": "2021-03-11 06:54:59"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-11-25 19:45:32",
    "file_name": "avaddon",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.connectwise.com/resources/avaddon-profile",
            "date": "2022-04-12",
            "organization": "ConnectWise",
            "author": "ConnectWise CRU",
            "title": "Threat Profile: Avaddon",
            "categories": [
                "Avaddon"
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
            "data_url": "https://medium.com/s2wlab/quick-analysis-of-haron-ransomware-feat-avaddon-and-thanos-1ebb70f64dc4",
            "date": "2021-07-22",
            "organization": "S2W LAB Inc.",
            "author": "TALON",
            "title": "Quick analysis of Haron Ransomware (feat. Avaddon and Thanos)",
            "categories": [
                "Avaddon",
                "Hakbit"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/the-rise-demise-of-multi-million-ransomware-business-empire",
            "date": "2021-06-16",
            "organization": "Advanced Intelligence",
            "author": "Vitali Kremez",
            "title": "The Rise & Demise of Multi-Million Ransomware Business Empire",
            "categories": [
                "Avaddon"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/avaddon-ransomware-shuts-down-and-releases-decryption-keys/",
            "date": "2021-06-11",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Avaddon ransomware shuts down and releases decryption keys",
            "categories": [
                "Avaddon"
            ]
        },
        {
            "data_url": "https://therecord.media/avaddon-ransomware-operation-shuts-down-and-releases-decryption-keys/",
            "date": "2021-06-11",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Cybercrime Featured Avaddon ransomware operation shuts down and releases decryption keys",
            "categories": [
                "Avaddon"
            ]
        },
        {
            "data_url": "https://atos.net/en/lp/securitydive/avaddon-ransomware-analysis",
            "date": "2021-06-07",
            "organization": "ATOS",
            "author": "Lo\u00efc Castel",
            "title": "Avaddon Ransomware Analysis",
            "categories": [
                "Avaddon"
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
            "data_url": "https://www.cyber.gov.au/sites/default/files/2021-05/2021-003%20Ongoing%20campaign%20using%20Avaddon%20Ransomware%20-%2020210508.pdf",
            "date": "2021-05-08",
            "organization": "Australian Signals Directorate",
            "author": "Australian Cyber Security Centre (ACSC)",
            "title": "2021-003: Ongoing campaign using Avaddon  Ransomware",
            "categories": [
                "Avaddon"
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
            "data_url": "https://labs.sentinelone.com/avaddon-raas-breaks-public-decryptor-continues-on-rampage/",
            "date": "2021-04-01",
            "organization": "SentinelOne",
            "author": "Jim Walter",
            "title": "Avaddon RaaS | Breaks Public Decryptor, Continues On Rampage",
            "categories": [
                "Avaddon"
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
            "data_url": "https://arxiv.org/pdf/2102.04796.pdf",
            "date": "2021-02-09",
            "organization": "",
            "author": "Javier Yuste",
            "title": "Avaddon ransomware: an in-depth analysis and decryption of infected systems",
            "categories": [
                "Avaddon"
            ]
        },
        {
            "data_url": "https://www.cronup.com/post/de-ataque-con-malware-a-incidente-de-ransomware",
            "date": "2021-02-02",
            "organization": "CRONUP",
            "author": "Germ\u00e1n Fern\u00e1ndez",
            "title": "De ataque con Malware a incidente de Ransomware",
            "categories": [
                "Avaddon",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DanaBot",
                "Dharma",
                "Dridex",
                "Egregor",
                "Emotet",
                "Empire Downloader",
                "FriedEx",
                "GootKit",
                "IcedID",
                "MegaCortex",
                "Nemty",
                "Phorpiex",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "SDBbot",
                "SmokeLoader",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://medium.com/s2wlab/w4-jan-en-story-of-the-week-ransomware-on-the-darkweb-7595544363b1",
            "date": "2021-01-26",
            "organization": "Medium s2wlab",
            "author": "Hyunmin Suh",
            "title": "W4 Jan | EN | Story of the week: Ransomware on the Darkweb",
            "categories": [
                "Avaddon",
                "Babuk",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/another-ransomware-now-uses-ddos-attacks-to-force-victims-to-pay/",
            "date": "2021-01-24",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Another ransomware (Avaddon) now uses DDoS attacks to force victims to pay",
            "categories": [
                "Avaddon"
            ]
        },
        {
            "data_url": "https://twitter.com/dk_samper/status/1348560784285167617",
            "date": "2021-01-11",
            "organization": "Twitter (@dk_samper)",
            "author": "D\u00e1vid Kos\u0165",
            "title": "Tweet on Initial access of Avaddon Ransomware group from an IR engagement",
            "categories": [
                "Avaddon"
            ]
        },
        {
            "data_url": "https://www.swascan.com/it/avaddon-ransomware/",
            "date": "2020-12-28",
            "organization": "Swanscan",
            "author": "Swascan  Cyber Incident Response Team",
            "title": "Avaddon Ransomware: Incident Response Analysis",
            "categories": [
                "Avaddon"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/the-malware-that-usually-installs-ransomware-and-you-need-to-remove-right-away/",
            "date": "2020-11-20",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "The malware that usually installs ransomware and you need to remove right away",
            "categories": [
                "Avaddon",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "FriedEx",
                "MegaCortex",
                "Phorpiex",
                "PwndLocker",
                "QakBot",
                "Ryuk",
                "SDBbot",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://public.intel471.com/blog/ransomware-as-a-service-2020-ryuk-maze-revil-egregor-doppelpaymer/",
            "date": "2020-11-16",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Ransomware-as-a-service: The pandemic within a pandemic",
            "categories": [
                "Avaddon",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Egregor",
                "Hakbit",
                "Mailto",
                "Maze",
                "Mespinoza",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "SunCrypt",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://awakesecurity.com/blog/threat-hunting-for-avaddon-ransomware/",
            "date": "2020-10-26",
            "organization": "AWAKE",
            "author": "Ashish Gahlot",
            "title": "Threat Hunting for Avaddon Ransomware",
            "categories": [
                "Avaddon"
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
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/ransomware-report-avaddon-and-new-techniques-emerge-industrial-sector-targeted",
            "date": "2020-07-08",
            "organization": "Trend Micro",
            "author": "Trend Micro Threat Research Team",
            "title": "Ransomware Report: Avaddon and New Techniques Emerge, Industrial Sector Targeted",
            "categories": [
                "Avaddon"
            ]
        },
        {
            "data_url": "https://www.tgsoft.it/files/report/download.asp?id=568531345",
            "date": "2020-07-01",
            "organization": "TG Soft",
            "author": "TG Soft",
            "title": "Cyber-Threat Report on the cyber attacks of June 2020 in Italy",
            "categories": [
                "Avaddon",
                "ISFB"
            ]
        },
        {
            "data_url": "https://threatconnect.com/blog/threatconnect-research-roundup-probable-sandworm-infrastructure",
            "date": "2020-06-12",
            "organization": "ThreatConnect",
            "author": "ThreatConnect Research Team",
            "title": "Probable Sandworm Infrastructure",
            "categories": [
                "Avaddon",
                "Emotet",
                "Kimsuky"
            ]
        },
        {
            "data_url": "https://twitter.com/Securityinbits/status/1271065316903120902",
            "date": "2020-06-11",
            "organization": "Twitter (@Securityinbits)",
            "author": "Security-in-Bits",
            "title": "Tweet on Avaddon ransomware with Python script for decrypting strings",
            "categories": [
                "Avaddon"
            ]
        },
        {
            "data_url": "https://www.hornetsecurity.com/en/security-information/avaddon-from-seeking-affiliates-to-in-the-wild-in-2-days/",
            "date": "2020-06-05",
            "organization": "Hornetsecurity",
            "author": "Security Lab",
            "title": "Avaddon: From seeking affiliates to in-the-wild in 2 days",
            "categories": [
                "Avaddon"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/la-es/2021/05/31/ransomware-avaddon-principales-caracteristicas/",
            "date": "2020-05-31",
            "organization": "ESET Research",
            "author": "Facundo Mu\u00f1oz",
            "title": "Ransomware Avaddon: principales caracter\u00edsticas",
            "categories": [
                "Avaddon"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "avaddon",
            "procedure_code": "s0640",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0640",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/007",
                    "technique_name": "command and scripting interpreter : javascript",
                    "technique_description": "adversaries may abuse various implementations of javascript for execution. javascript (js) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though js can be executed in runtime environments outside the browser.",
                    "procedure_description": "avaddon has been executed through a malicious jscript downloader.[15][16]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "avaddon has used the windows crypto api to generate an aes key.[22]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "avaddon uses wmic.exe to delete shadow copies.[12]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "avaddon uses registry run keys for persistence.[33]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "avaddon bypasses uac using the cmstplua com interface.[13]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "avaddon uses registry run keys for persistence.[33]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "avaddon bypasses uac using the cmstplua com interface.[13]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "avaddon has decrypted encrypted strings.[18]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/001",
                    "technique_name": "impair defenses : disable or modify tools",
                    "technique_description": "adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. this may take many forms, such as killing security software processes or services, modifying / deleting registry keys or configuration files so that tools do not operate properly, or other methods to interfere with security tools scanning or reporting information. adversaries may also disable updates to prevent the latest security patches from reaching tools on victim systems.",
                    "procedure_description": "avaddon looks for and attempts to stop anti-malware solutions.[13]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1112",
                    "technique_link": "https://attack.mitre.org/techniques/T1112",
                    "technique_name": "modify registry",
                    "technique_description": "adversaries may interact with the windows registry to hide configuration information within registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.",
                    "procedure_description": "avaddon modifies several registry keys for persistence and uac bypass.[16]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "avaddon has used encrypted strings.[42]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "avaddon has searched for specific files prior to encryption.[24]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1135",
                    "technique_link": "https://attack.mitre.org/techniques/T1135",
                    "technique_name": "network share discovery",
                    "technique_description": "adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for collection and to identify potential systems of interest for lateral movement. networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.",
                    "procedure_description": "avaddon has enumerated shared folders and mapped volumes.[9]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "avaddon has collected information about running processes.[16]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1614.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1614/001",
                    "technique_name": "system location discovery : system language discovery",
                    "technique_description": "adversaries may attempt to gather information about the system language of a victim in order to infer the geographical location of that host. this information may be used to shape follow-on behaviors, including whether the adversary infects the target and/or attempts specific actions. this decision may be employed by malware developers and operators to reduce their risk of attracting the attention of specific law enforcement agencies or prosecution/scrutiny from other entities.",
                    "procedure_description": "avaddon checks for specific keyboard layouts and os languages to avoid targeting commonwealth of independent states (cis) entities.[6]"
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
                    "procedure_description": "avaddon can collect the external ip address of the victim.[24]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1486",
                    "technique_link": "https://attack.mitre.org/techniques/T1486",
                    "technique_name": "data encrypted for impact",
                    "technique_description": "adversaries may encrypt data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources. they can attempt to render stored data inaccessible by encrypting files or data on local and remote drives and withholding access to a decryption key. this may be done in order to extract monetary compensation from a victim in exchange for decryption or a decryption key (ransomware) or to render data permanently inaccessible in cases where the key is not saved or transmitted.",
                    "procedure_description": "avaddon encrypts the victim system using a combination of aes256 and rsa encryption schemes.[10]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1490",
                    "technique_link": "https://attack.mitre.org/techniques/T1490",
                    "technique_name": "inhibit system recovery",
                    "technique_description": "adversaries may delete or remove built-in data and turn off services designed to aid in the recovery of a corrupted system to prevent recovery. this may deny access to available backups and recovery options.",
                    "procedure_description": "avaddon deletes backups and shadow copies using native system tools.[7][8]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1489",
                    "technique_link": "https://attack.mitre.org/techniques/T1489",
                    "technique_name": "service stop",
                    "technique_description": "adversaries may stop or disable services on a system to render those services unavailable to legitimate users. stopping critical services or processes can inhibit or stop response to an incident or aid in the adversary's overall objectives to cause damage to the environment.",
                    "procedure_description": "avaddon looks for and attempts to stop database processes.[4]"
                }
            ]
        }
    ]
};