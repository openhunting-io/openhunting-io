var threatdata = {
    "name": "BlackCat",
    "alias": "BlackCat, ALPHV, ALPHVM, Noberus",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2023-11-16",
    "all_data": {
        "tool": "BlackCat",
        "names": [
            {
                "name": "BlackCat"
            },
            {
                "name": "ALPHV"
            },
            {
                "name": "ALPHVM"
            },
            {
                "name": "Noberus"
            }
        ],
        "description": "(Palo Alto) The malware itself is coded in the Rust programming language. Though this is not the first piece of malware to use Rust, it is one of the first, if not the first, piece of ransomware to use it. By leveraging this programming language, the malware authors are able to easily compile it against various operating system architectures. Given its numerous native options, Rust is highly customizable, which facilitates the ability to pivot and individualize attacks.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/blackcat-ransomware/",
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/noberus-blackcat-alphv-rust-ransomware",
            "https://www.bleepingcomputer.com/news/security/alphv-blackcat-this-years-most-sophisticated-ransomware/",
            "https://www.intrinsec.com/alphv-ransomware-gang-analysis/",
            "https://www.sentinelone.com/labs/blackcat-ransomware-highly-configurable-rust-driven-raas-on-the-prowl-for-victims/",
            "https://www.varonis.com/blog/alphv-blackcat-ransomware",
            "https://cybersecurity.att.com/blogs/labs-research/blackcat-ransomware",
            "https://www.cybereason.com/blog/cybereason-vs.-blackcat-ransomware",
            "https://blog.talosintelligence.com/2022/03/from-blackmatter-to-blackcat-analyzing.html",
            "https://securelist.com/a-bad-luck-blackcat/106254/",
            "https://www.darkreading.com/attacks-breaches/blackcat-purveyor-shows-ransomware-operators-have-nine-lives",
            "https://www.trendmicro.com/en_us/research/22/d/an-investigation-of-the-blackcat-ransomware.html",
            "https://www.ic3.gov/Media/News/2022/220420.pdf",
            "https://www.microsoft.com/security/blog/2022/06/13/the-many-lives-of-blackcat-ransomware/",
            "https://www.trendmicro.com/en_us/research/23/e/blackcat-ransomware-deploys-new-signed-kernel-driver.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S1068"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.blackcat",
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.blackcat"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=blackcat-ransomware"
        ],
        "uuid": "b7260119-d178-4d47-9a11-2d32c0d4cd9c",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--afe1a8b7-58ab-4232-971f-b96abae8657c",
        "pb_file": "blackcat-ransomware.json",
        "last_updated": "2022-01-27T14:18:25.222Z",
        "title": "BLACKCAT RANSOMWARE",
        "industries": [
            "aerospace",
            "commercial",
            "construction",
            "engineering",
            "financial-services",
            "government-local",
            "healthcare",
            "hospitality-leisure",
            "insurance",
            "manufacturing",
            "retail",
            "technology",
            "telecommunications",
            "transportation"
        ],
        "regions": [
            "DE",
            "ES",
            "FR",
            "NL",
            "PH",
            "US"
        ],
        "malwares": []
    },
    "ioc_data": [
        {
            "malware_printable": "BlackCat",
            "malware_alias": "ALPHV,Noberus",
            "malware": "elf.blackcat",
            "last_update": "2022-05-10 22:56:56",
            "tags": [
                "BlackCat",
                "Ransomware",
                "linux",
                "Windows"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "173c4085c23080d9fb19280cc507d28d",
                        "timestamp": "2022-05-10 22:56:56"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "056d28621dca8990caf159f8e14069a2343b48146473d2ac586ca9a51dfbbba7",
                        "timestamp": "2022-04-10 20:19:26"
                    },
                    {
                        "value": "3a08e3bfec2db5dbece359ac9662e65361a8625a0122e68b56cd5ef3aedf8ce1",
                        "timestamp": "2022-01-08 06:05:52"
                    },
                    {
                        "value": "9802a1e8fb425ac3a7c0a7fca5a17cfcb7f3f5f0962deb29e3982f0bece95e26",
                        "timestamp": "2022-01-08 06:05:50"
                    },
                    {
                        "value": "e7060538ee4b48b0b975c8928c617f218703dab7aa7814ce97481596f2a78556",
                        "timestamp": "2022-01-08 06:05:49"
                    },
                    {
                        "value": "f7a038f9b91c40e9d67f4168997d7d8c12c2d27cd9e36c413dd021796a24e083",
                        "timestamp": "2022-01-08 06:05:47"
                    },
                    {
                        "value": "5121f08cf8614a65d7a86c2f462c0694c132e2877a7f54ab7fcefd7ee5235a42",
                        "timestamp": "2022-01-08 06:05:46"
                    },
                    {
                        "value": "f8c08d00ff6e8c6adb1a93cd133b19302d0b651afd73ccb54e3b6ac6c60d99c6",
                        "timestamp": "2022-01-08 06:05:45"
                    },
                    {
                        "value": "9f6876762614e407d0ee6005f165dd4bbd12cb21986abc4a3a5c7dc6271fcdc3",
                        "timestamp": "2022-01-08 06:03:35"
                    },
                    {
                        "value": "722f1c1527b2c788746fec4dd1af70b0c703644336909735f8f23f6ef265784b",
                        "timestamp": "2022-01-08 06:03:34"
                    },
                    {
                        "value": "13828b390d5f58b002e808c2c4f02fdd920e236cc8015480fa33b6c1a9300e31",
                        "timestamp": "2022-01-08 06:03:33"
                    },
                    {
                        "value": "15b57c1b68cd6ce3c161042e0f3be9f32d78151fe95461eedc59a79fc222c7ed",
                        "timestamp": "2022-01-08 06:03:33"
                    },
                    {
                        "value": "1af1ca666e48afc933e2eda0ae1d6e88ebd23d27c54fd1d882161fd8c70b678e",
                        "timestamp": "2022-01-08 06:03:32"
                    },
                    {
                        "value": "c3e5d4e62ae4eca2bfca22f8f3c8cbec12757f78107e91e85404611548e06e40",
                        "timestamp": "2022-01-08 06:03:32"
                    },
                    {
                        "value": "f837f1cd60e9941aa60f7be50a8f2aaaac380f560db8ee001408f35c1b7a97cb",
                        "timestamp": "2022-01-08 06:03:31"
                    },
                    {
                        "value": "4e18f9293a6a72d5d42dad179b532407f45663098f959ea552ae43dbb9725cbf",
                        "timestamp": "2022-01-08 06:03:31"
                    },
                    {
                        "value": "7b2449bb8be1b37a9d580c2592a67a759a3116fe640041d0f36dc93ca3db4487",
                        "timestamp": "2022-01-08 06:03:30"
                    },
                    {
                        "value": "cda37b13d1fdee1b4262b5a6146a35d8fc88fa572e55437a47a950037cc65d40",
                        "timestamp": "2022-01-08 06:03:30"
                    },
                    {
                        "value": "3d7cf20ca6476e14e0a026f9bdd8ff1f26995cdc5854c3adb41a6135ef11ba83",
                        "timestamp": "2022-01-08 06:03:29"
                    },
                    {
                        "value": "38834b796ed025563774167716a477e9217d45e47def20facb027325f2a790d1",
                        "timestamp": "2022-01-08 06:03:29"
                    },
                    {
                        "value": "b588823eb5c65f36d067d496881d9c704d3ba57100c273656a56a43215f35442",
                        "timestamp": "2022-01-08 06:03:28"
                    },
                    {
                        "value": "7e363b5f1ba373782261713fa99e8bbc35ddda97e48799c4eb28f17989da8d8e",
                        "timestamp": "2022-01-08 06:03:28"
                    },
                    {
                        "value": "cefea76dfdbb48cfe1a3db2c8df34e898e29bec9b2c13e79ef40655c637833ae",
                        "timestamp": "2022-01-08 06:03:27"
                    },
                    {
                        "value": "0c6f444c6940a3688ffc6f8b9d5774c032e3551ebbccb64e4280ae7fc1fac479",
                        "timestamp": "2022-01-08 06:03:27"
                    },
                    {
                        "value": "c5ad3534e1c939661b71f56144d19ff36e9ea365fdb47e4f8e2d267c39376486",
                        "timestamp": "2022-01-08 06:03:26"
                    },
                    {
                        "value": "658e07739ad0137bceb910a351ce3fe4913f6fcc3f63e6ff2eb726e45f29e582",
                        "timestamp": "2022-01-08 06:03:25"
                    },
                    {
                        "value": "7154fdb1ef9044da59fcfdbdd1ed9abc1a594cacb41a0aeddb5cd9fdaeea5ea8",
                        "timestamp": "2022-01-08 06:03:25"
                    },
                    {
                        "value": "59868f4b346bd401e067380cac69080709c86e06fae219bfb5bc17605a71ab3f",
                        "timestamp": "2022-01-08 06:03:24"
                    },
                    {
                        "value": "c8b3b67ea4d7625f8b37ba59eed5c9406b3ef04b7a19b97e5dd5dab1bd59f283",
                        "timestamp": "2022-01-08 06:03:24"
                    },
                    {
                        "value": "731adcf2d7fb61a8335e23dbee2436249e5d5753977ec465754c6b699e9bf161",
                        "timestamp": "2022-01-08 06:03:23"
                    },
                    {
                        "value": "2cf54942e8cf0ef6296deaa7975618dadff0c32535295d3f0d5f577552229ffc",
                        "timestamp": "2022-01-08 06:03:22"
                    },
                    {
                        "value": "5bdc0fb5cfbd42de726aacc40eddca034b5fa4afcc88ddfb40a3d9ae18672898",
                        "timestamp": "2022-01-08 06:03:22"
                    },
                    {
                        "value": "28d7e6fe31dc00f82cb032ba29aad6429837ba5efb83c2ce4d31d565896e1169",
                        "timestamp": "2022-01-08 06:03:21"
                    },
                    {
                        "value": "bd337d4e83ab1c2cacb43e4569f977d188f1bb7c7a077026304bf186d49d4117",
                        "timestamp": "2022-01-08 06:03:20"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-05-10 22:56:56",
    "file_name": "blackcat",
    "articles": [
        {
            "data_url": "https://www.cisa.gov/sites/default/files/2023-11/aa23-320a_scattered_spider.pdf",
            "date": "2023-11-16",
            "organization": "CISA",
            "author": "CISA",
            "title": "Scattered Spider",
            "categories": [
                "BlackCat",
                "Ave Maria",
                "Raccoon",
                "Vidar"
            ]
        },
        {
            "data_url": "https://www.theregister.com/2023/11/16/blackcat_ransomware_luring_corporate_targets/",
            "date": "2023-11-16",
            "organization": "The Register",
            "author": "Connor Jones",
            "title": "BlackCat plays with malvertising traps to lure corporate victims",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-320a",
            "date": "2023-11-16",
            "organization": "CISA",
            "author": "CISA",
            "title": "Scattered Spider",
            "categories": [
                "Ave Maria",
                "BlackCat",
                "Raccoon",
                "Vidar"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2023-CTI-007.pdf",
            "date": "2023-09-12",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "FIN12: A Cybercriminal Group with Multiple Ransomware",
            "categories": [
                "BlackCat",
                "Cobalt Strike",
                "Conti",
                "Hive",
                "MimiKatz",
                "Nokoyawa Ransomware",
                "PLAY",
                "Royal Ransom",
                "Ryuk",
                "SystemBC"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/syssphinx-fin8-backdoor",
            "date": "2023-07-18",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "FIN8 Uses Revamped Sardonic Backdoor to Deliver Noberus Ransomware",
            "categories": [
                "BlackCat",
                "Unidentified 103 (FIN8)"
            ]
        },
        {
            "data_url": "https://mssplab.github.io/threat-hunting/2023/07/13/malware-analysis-blackcat.html",
            "date": "2023-07-13",
            "organization": "MSSP Lab",
            "author": "cocomelonc",
            "title": "Malware analysis report: BlackCat ransomware",
            "categories": [
                "BlackCat",
                "BlackCat"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/blackcat-ransomware-levels-up-stealth-speed-exfiltration/",
            "date": "2023-05-30",
            "organization": "IBM Security",
            "author": "IBM Security X-Force Team",
            "title": "BlackCat (ALPHV) ransomware levels up for stealth, speed and exfiltration",
            "categories": [
                "BlackCat",
                "BlackCat"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/23/e/blackcat-ransomware-deploys-new-signed-kernel-driver.html",
            "date": "2023-05-22",
            "organization": "Trend Micro",
            "author": "Mahmoud Zohdy",
            "title": "BlackCat Ransomware Deploys New Signed Kernel Driver",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/hypervisor-jackpotting-lack-of-antivirus-support-opens-the-door-to-adversaries/",
            "date": "2023-05-15",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "Hypervisor Jackpotting, Part 3: Lack of Antivirus Support Opens the Door to Adversary Attacks",
            "categories": [
                "BlackCat",
                "SystemBC"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/march-2023-broke-ransomware-attack-records-with-459-incidents/",
            "date": "2023-04-19",
            "organization": "Bleeping Computer",
            "author": "Bill Toulas",
            "title": "March 2023 broke ransomware attack records with 459 incidents",
            "categories": [
                "Clop",
                "WhiteRabbit",
                "BianLian",
                "Black Basta",
                "BlackCat",
                "LockBit",
                "MedusaLocker",
                "PLAY",
                "Royal Ransom"
            ]
        },
        {
            "data_url": "https://mandiant.widen.net/s/pkffwrbjlz/m-trends-2023",
            "date": "2023-04-18",
            "organization": "Mandiant",
            "author": "Mandiant",
            "title": "M-Trends 2023",
            "categories": [
                "QUIETEXIT",
                "AppleJeus",
                "Black Basta",
                "BlackCat",
                "CaddyWiper",
                "Cobalt Strike",
                "Dharma",
                "HermeticWiper",
                "Hive",
                "INDUSTROYER2",
                "Ladon",
                "LockBit",
                "Meterpreter",
                "PartyTicket",
                "PlugX",
                "QakBot",
                "REvil",
                "Royal Ransom",
                "SystemBC",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/blog/alphv-ransomware-backup",
            "date": "2023-04-03",
            "organization": "Mandiant",
            "author": "JASON DEYALSINGH",
            "title": "ALPHV Ransomware Affiliate Targets Vulnerable Backup Installations to Gain Initial Access",
            "categories": [
                "LaZagne",
                "BlackCat",
                "MimiKatz"
            ]
        },
        {
            "data_url": "https://noticeofpleadings.com/crackedcobaltstrike/files/ComplaintAndSummons/1%20-Microsoft%20Cobalt%20Strike%20-%20Complaint(907040021.9).pdf",
            "date": "2023-03-30",
            "organization": "United States District Court (Eastern District of New York)",
            "author": "Microsoft",
            "title": "Cracked Cobalt Strike (1:23-cv-02447)",
            "categories": [
                "Black Basta",
                "BlackCat",
                "LockBit",
                "RagnarLocker",
                "LockBit",
                "Black Basta",
                "BlackCat",
                "Cobalt Strike",
                "Cuba",
                "Emotet",
                "LockBit",
                "Mount Locker",
                "PLAY",
                "QakBot",
                "RagnarLocker",
                "Royal Ransom",
                "Zloader"
            ]
        },
        {
            "data_url": "https://github.com/rivitna/Malware/tree/main/BlackCat/ALPHV3",
            "date": "2023-03-21",
            "organization": "Github (rivitna)",
            "author": "Andrey Zhdanov",
            "title": "BlackCat v3 Decryptor Scripts",
            "categories": [
                "BlackCat",
                "BlackCat"
            ]
        },
        {
            "data_url": "https://www.netskope.com/blog/blackcat-ransomware-tactics-and-techniques-from-a-targeted-attack",
            "date": "2022-11-09",
            "organization": "Netskope",
            "author": "Gustavo Palazolo",
            "title": "BlackCat Ransomware: Tactics and Techniques From a Targeted Attack",
            "categories": [
                "BlackCat",
                "ExMatter"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/en-us/security/blog/2022/10/25/dev-0832-vice-society-opportunistic-ransomware-campaigns-impacting-us-education-sector/",
            "date": "2022-10-25",
            "organization": "Microsoft",
            "author": "Microsoft Security Threat Intelligence",
            "title": "DEV-0832 (Vice Society) opportunistic ransomware campaigns impacting US education sector",
            "categories": [
                "BlackCat",
                "Mount Locker",
                "Zeppelin"
            ]
        },
        {
            "data_url": "https://community.riskiq.com/article/47766fbd",
            "date": "2022-10-10",
            "organization": "RiskIQ",
            "author": "Microsoft Threat Intelligence Center (MSTIC)",
            "title": "DEV-0832 Leverages Commodity Tools in Opportunistic Ransomware Campaigns",
            "categories": [
                "BlackCat",
                "Mount Locker",
                "SystemBC",
                "Zeppelin"
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
            "data_url": "https://www.computerweekly.com/news/252525240/ALPHV-BlackCat-ransomware-family-becoming-more-dangerous",
            "date": "2022-09-22",
            "organization": "ComputerWeekly",
            "author": "Alex Scroxton",
            "title": "ALPHV/BlackCat ransomware family becoming more dangerous",
            "categories": [
                "BlackCat",
                "BlackCat",
                "FIN7"
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
            "data_url": "https://www.sentinelone.com/labs/crimeware-trends-ransomware-developers-turn-to-intermittent-encryption-to-evade-detection/",
            "date": "2022-09-08",
            "organization": "Sentinel LABS",
            "author": "Aleksandar Milenkoski",
            "title": "Crimeware Trends | Ransomware Developers Turn to Intermittent Encryption to Evade Detection",
            "categories": [
                "AgendaCrypt",
                "Black Basta",
                "BlackCat",
                "PLAY"
            ]
        },
        {
            "data_url": "https://securityscorecard.com/blog/ttps-associated-with-new-version-of-blackcat-ransomware",
            "date": "2022-09-06",
            "organization": "SecurityScorecard",
            "author": "Vlad Pasca",
            "title": "TTPs Associated With a New Version of the BlackCat Ransomware",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE54L7v",
            "date": "2022-08-22",
            "organization": "Microsoft",
            "author": "Microsoft",
            "title": "Extortion Economics - Ransomware\u2019s new business model",
            "categories": [
                "BlackCat",
                "Conti",
                "Hive",
                "REvil",
                "AgendaCrypt",
                "Black Basta",
                "BlackCat",
                "Brute Ratel C4",
                "Cobalt Strike",
                "Conti",
                "Hive",
                "Mount Locker",
                "Nokoyawa Ransomware",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://securityscorecard.com/research/the-increase-in-ransomware-attacks-on-local-governments",
            "date": "2022-08-11",
            "organization": "SecurityScorecard",
            "author": "Robert Ames",
            "title": "The Increase in Ransomware Attacks on Local Governments",
            "categories": [
                "BlackCat",
                "BlackCat",
                "Cobalt Strike",
                "LockBit"
            ]
        },
        {
            "data_url": "https://securityscorecard.com/research/deep-dive-into-alphv-blackcat-ransomware",
            "date": "2022-07-18",
            "organization": "SecurityScorecard",
            "author": "Vlad Pasca",
            "title": "A Deep Dive Into ALPHV/BlackCat Ransomware",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2022/07/14/blackcat-ransomware-attacks-not-merely-a-byproduct-of-bad-luck/",
            "date": "2022-07-14",
            "organization": "Sophos",
            "author": "Andrew Brandt",
            "title": "BlackCat ransomware attacks not merely a byproduct of bad luck",
            "categories": [
                "BlackCat",
                "BlackCat"
            ]
        },
        {
            "data_url": "https://blog.group-ib.com/blackcat",
            "date": "2022-06-29",
            "organization": "Group-IB",
            "author": "Andrey Zhdanov",
            "title": "Fat Cats - An analysis of the BlackCat ransomware affiliate program",
            "categories": [
                "BlackCat",
                "BlackCat"
            ]
        },
        {
            "data_url": "https://securelist.com/modern-ransomware-groups-ttps/106824/",
            "date": "2022-06-23",
            "organization": "Kaspersky",
            "author": "Nikita Nazarov",
            "title": "The hateful eight: Kaspersky\u2019s guide to modern ransomware groups\u2019 TTPs (Download Form)",
            "categories": [
                "BlackByte",
                "BlackCat",
                "Clop",
                "Conti",
                "Hive",
                "LockBit",
                "Mespinoza",
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2022/06/23093553/Common-TTPs-of-the-modern-ransomware_low-res.pdf",
            "date": "2022-06-23",
            "organization": "Kaspersky",
            "author": "Nikita Nazarov",
            "title": "The hateful eight: Kaspersky\u2019s guide to modern ransomware groups\u2019 TTPs",
            "categories": [
                "Conti",
                "Hive",
                "BlackByte",
                "BlackCat",
                "Clop",
                "LockBit",
                "Mespinoza",
                "Ragnarok"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/06/13/the-many-lives-of-blackcat-ransomware/",
            "date": "2022-06-13",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "The many lives of BlackCat ransomware",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/blackcat-in-a-shifting-threat-landscape-it-helps-to-land-on-your-feet-tech-dive",
            "date": "2022-06-07",
            "organization": "AdvIntel",
            "author": "Vitali Kremez",
            "title": "BlackCat \u2014 In a Shifting Threat Landscape, It Helps to Land on Your Feet: Tech Dive",
            "categories": [
                "BlackCat",
                "BlackCat",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://killingthebear.jorgetesta.tech/actors/alphv",
            "date": "2022-06",
            "organization": "Jorge Testa",
            "author": "Jorge Testa",
            "title": "Killing The Bear - Alphv",
            "categories": [
                "BlackCat",
                "BlackCat"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/pdf/datasheet-ransomware-in-Q1-2022.pdf",
            "date": "2022-05-23",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "LockBit, Conti, and BlackCat Lead Pack  Amid Rise in Active RaaS and Extortion Groups: Ransomware in Q1 2022 (PDF)",
            "categories": [
                "BlackCat",
                "Conti",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/ransomware-by-the-numbers/lockbit-conti-and-blackcat-lead-pack-amid-rise-in-active-raas-and-extortion-groups-ransomware-in-q1-2022",
            "date": "2022-05-23",
            "organization": "Trend Micro",
            "author": "Matsugaya Shingo",
            "title": "LockBit, Conti, and BlackCat Lead Pack Amid Rise in Active RaaS and Extortion Groups: Ransomware in Q1 2022",
            "categories": [
                "BlackCat",
                "Conti",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/discontinued-the-end-of-conti-s-brand-marks-new-chapter-for-cybercrime-landscape",
            "date": "2022-05-20",
            "organization": "AdvIntel",
            "author": "Yelisey Boguslavskiy",
            "title": "DisCONTInued: The End of Conti\u2019s Brand Marks New Chapter For Cybercrime Landscape",
            "categories": [
                "AvosLocker",
                "Black Basta",
                "BlackByte",
                "BlackCat",
                "Conti",
                "HelloKitty",
                "Hive"
            ]
        },
        {
            "data_url": "https://securelist.com/new-ransomware-trends-in-2022/106457/",
            "date": "2022-05-11",
            "organization": "Kaspersky",
            "author": "GReAT",
            "title": "New ransomware trends in 2022",
            "categories": [
                "BlackCat",
                "Conti",
                "DEADBOLT",
                "DoubleZero",
                "LockBit",
                "PartyTicket",
                "StealBit"
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
            "data_url": "https://therecord.media/german-wind-farm-operator-confirms-cybersecurity-incident-after-ransomware-group/",
            "date": "2022-04-29",
            "organization": "The Record",
            "author": "Jonathan Greig",
            "title": "German wind farm operator confirms cybersecurity incident",
            "categories": [
                "Black Basta",
                "BlackCat"
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
            "data_url": "https://www.forescout.com/resources/analysis-of-an-alphv-incident",
            "date": "2022-04-21",
            "organization": "Forescout",
            "author": "Vedere Labs",
            "title": "Analysis of an ALPHV incident",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://www.ic3.gov/Media/News/2022/220420.pdf",
            "date": "2022-04-19",
            "organization": "FBI",
            "author": "FBI",
            "title": "FBI Flash CU-000167-MW: BlackCat/ALPHV Ransomware Indicators of Compromise",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/22/d/an-investigation-of-the-blackcat-ransomware.html",
            "date": "2022-04-18",
            "organization": "Trend Micro",
            "author": "Lucas Silva",
            "title": "An Investigation of the BlackCat Ransomware via Trend Micro Vision One",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/enter-karakurt-data-extortion-arm-of-prolific-ransomware-group",
            "date": "2022-04-18",
            "organization": "AdvIntel",
            "author": "Vitali Kremez",
            "title": "Enter KaraKurt: Data Extortion Arm of Prolific Ransomware Group",
            "categories": [
                "AvosLocker",
                "BazarBackdoor",
                "BlackByte",
                "BlackCat",
                "Cobalt Strike",
                "HelloKitty",
                "Hive"
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
            "data_url": "https://go.kaspersky.com/rs/802-IJN-240/images/TR_BlackCat_Report.pdf",
            "date": "2022-04-07",
            "organization": "Kaspersky",
            "author": "GReAT",
            "title": "A Bad Luck BlackCat",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://securelist.com/a-bad-luck-blackcat/106254/",
            "date": "2022-04-07",
            "organization": "Kaspersky",
            "author": "GReAT",
            "title": "A Bad Luck BlackCat",
            "categories": [
                "BlackCat",
                "BlackCat"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/hive-ransomware-ports-its-linux-vmware-esxi-encryptor-to-rust/",
            "date": "2022-03-27",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Hive ransomware ports its Linux VMware ESXi encryptor to Rust",
            "categories": [
                "BlackCat",
                "Hive",
                "Hive"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/falcon-overwatch-contributes-to-blackcat-protection/",
            "date": "2022-03-23",
            "organization": "CrowdStrike",
            "author": "Falcon OverWatch Team",
            "title": "Falcon OverWatch Threat Hunting Contributes to Seamless Protection Against Novel BlackCat Attack",
            "categories": [
                "BlackCat"
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
            "data_url": "https://www.cybereason.com/blog/cybereason-vs.-blackcat-ransomware",
            "date": "2022-03-01",
            "organization": "Cybereason",
            "author": "Tom Fakterman",
            "title": "Cybereason vs. BlackCat Ransomware",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://blog.emsisoft.com/en/40931/ransomware-profile-alphv/",
            "date": "2022-02-23",
            "organization": "Emsisoft",
            "author": "Senan Conrad",
            "title": "Ransomware Profile: ALPHV",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/blackcat-ransomware-as-a-service.html",
            "date": "2022-02-08",
            "organization": "Trellix",
            "author": "Arnab Roy",
            "title": "BlackCat Ransomware as a Service - The Cat is certainly out of the bag!",
            "categories": [
                "BlackCat",
                "BlackCat"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/blackcat-ransomware-implicated-in-attack-on-german-oil-companies/",
            "date": "2022-02-02",
            "organization": "ZDNet",
            "author": "Jonathan Greig",
            "title": "BlackCat ransomware implicated in attack on German oil companies",
            "categories": [
                "BlackCat",
                "BlackCat"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2022/01/who-wrote-the-alphv-blackcat-ransomware-strain/",
            "date": "2022-01-28",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Who Wrote the ALPHV/BlackCat Ransomware Strain?",
            "categories": [
                "BlackCat",
                "BlackCat"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/blackcat-ransomware/",
            "date": "2022-01-27",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Amanda Tanner",
            "title": "Threat Assessment: BlackCat Ransomware",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://www.intrinsec.com/alphv-ransomware-gang-analysis/",
            "date": "2022-01-26",
            "organization": "Intrinsec",
            "author": "Intrinsec",
            "title": "ALPHV ransomware gang analysis",
            "categories": [
                "BlackCat",
                "BlackCat"
            ]
        },
        {
            "data_url": "https://www.intrinsec.com/alphv-ransomware-gang-analysis",
            "date": "2022-01-26",
            "organization": "Intrinsec",
            "author": "Intrinsec",
            "title": "ALPHV ransomware gang analysis",
            "categories": [
                "BlackCat",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.varonis.com/blog/alphv-blackcat-ransomware",
            "date": "2022-01-26",
            "organization": "Varonis",
            "author": "Jason Hill",
            "title": "ALPHV (BlackCat) Ransomware",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/blackcat-ransomware-highly-configurable-rust-driven-raas-on-the-prowl-for-victims/",
            "date": "2022-01-18",
            "organization": "SentinelOne",
            "author": "Jim Walter",
            "title": "BlackCat Ransomware | Highly-Configurable, Rust-Driven RaaS On The Prowl For Victims",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://twitter.com/sisoma2/status/1473243875158499330",
            "date": "2021-12-21",
            "organization": "Twitter (@sisoma2)",
            "author": "sisoma2",
            "title": "BlackCat Ransomware Linux variant",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/noberus-blackcat-alphv-rust-ransomware",
            "date": "2021-12-16",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Noberus: Technical Analysis Shows Sophistication of New Rust-based Ransomware",
            "categories": [
                "BlackCat"
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
            "data_url": "https://github.com/f0wl/blackCatConf",
            "date": "2021-12-10",
            "organization": "Dissecting Malware",
            "author": "Marius Genheimer",
            "title": "BlackCatConf - Static Configuration Extractor for BlackCat Ransomware",
            "categories": [
                "BlackCat"
            ]
        },
        {
            "data_url": "https://id-ransomware.blogspot.com/2021/12/blackcat-ransomware.html",
            "date": "2021-12-01",
            "organization": "ID Ransomware",
            "author": "Andrew Ivanov",
            "title": "BlackCat Ransomware",
            "categories": [
                "BlackCat"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "blackcat",
            "procedure_code": "s1068",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S1068",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "blackcat can execute commands on a compromised network with the use of cmd.exe.[48]"
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
                    "procedure_description": "blackcat can use wmic.exe to delete shadow copies on compromised networks.[16]"
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
                    "procedure_description": "blackcat can bypass uac to escalate privileges.[16]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134",
                    "technique_link": "https://attack.mitre.org/techniques/T1134",
                    "technique_name": "access token manipulation",
                    "technique_description": "adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls. windows uses access tokens to determine the ownership of a running process. a user can manipulate access tokens to make a running process appear as though it is the child of a different process or belongs to someone other than the user that started the process. when this occurs, the process also takes on the security context associated with the new token.",
                    "procedure_description": "blackcat has the ability modify access tokens.[3][4]"
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
                    "procedure_description": "blackcat can bypass uac to escalate privileges.[16]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134",
                    "technique_link": "https://attack.mitre.org/techniques/T1134",
                    "technique_name": "access token manipulation",
                    "technique_description": "adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls. windows uses access tokens to determine the ownership of a running process. a user can manipulate access tokens to make a running process appear as though it is the child of a different process or belongs to someone other than the user that started the process. when this occurs, the process also takes on the security context associated with the new token.",
                    "procedure_description": "blackcat has the ability modify access tokens.[3][4]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1222.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1222/001",
                    "technique_name": "file and directory permissions modification : windows file and directory permissions modification",
                    "technique_description": "adversaries may modify file or directory permissions/attributes to evade access control lists (acls) and access protected files. file and directory permissions are commonly managed by acls configured by the file or directory owner, or users with the appropriate permissions. file and directory acl implementations vary by platform, but generally explicitly designate which users or groups can perform which actions (read, write, execute, etc.).",
                    "procedure_description": "blackcat can use windows commands such as fsutil behavior set symlinkevaluation r2l:1 to redirect file system access to a different location after gaining access into compromised networks.[6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/001",
                    "technique_name": "indicator removal : clear windows event logs",
                    "technique_description": "adversaries may clear windows event logs to hide the activity of an intrusion. windows event logs are a record of a computer's alerts and notifications. there are three system-defined sources of events: system, application, and security, with five event types: error, warning, information, success audit, and failure audit.",
                    "procedure_description": "blackcat can clear windows event logs using wevtutil.exe.[7]"
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
                    "procedure_description": "blackcat has the ability to add the following registry key on compromised networks to maintain persistence: hkey_local_machine\\system\\currentcontrolset\\services \\lanmanserver\\paramenters[28]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/002",
                    "technique_name": "account discovery : domain account",
                    "technique_description": "adversaries may attempt to get a listing of domain accounts. this information can help adversaries determine which domain accounts exist to aid in follow-on behavior such as targeting specific accounts which possess particular privileges.",
                    "procedure_description": "blackcat can utilize net use commands to identify domain users.[9]"
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
                    "procedure_description": "blackcat can enumerate files for encryption.[53]"
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
                    "procedure_description": "blackcat has the ability to discover network shares on compromised networks.[16][17]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/002",
                    "technique_name": "permission groups discovery : domain groups",
                    "technique_description": "adversaries may attempt to find domain-level groups and permission settings. the knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as domain administrators.",
                    "procedure_description": "blackcat can determine if a user on a compromised host has domain admin privileges.[5]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "blackcat can broadcasts netbios name service (nbnc) messages to search for servers connected to compromised networks.[20]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "blackcat can obtain the computer name and uuid, and enumerate local drives.[59]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1033",
                    "technique_link": "https://attack.mitre.org/techniques/T1033",
                    "technique_name": "system owner/user discovery",
                    "technique_description": "adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. they may do this, for example, by retrieving account usernames or by using os credential dumping. the information may be collected in a number of different ways using other discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. adversaries may use the information from system owner/user discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "blackcat can utilize net use commands to discover the user name on a compromised host.[24]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1570",
                    "technique_link": "https://attack.mitre.org/techniques/T1570",
                    "technique_name": "lateral tool transfer",
                    "technique_description": "adversaries may transfer tools or other files between systems in a compromised environment. once brought into the victim environment (i.e. ingress tool transfer) files may then be copied from one system to another to stage adversary tools or other files over the course of an operation. adversaries may copy files between internal victim systems to support lateral movement using inherent file sharing protocols such as file sharing over smb/windows admin shares to connected network shares or with authenticated connections via remote desktop protocol.",
                    "procedure_description": "blackcat can replicate itself across connected servers via psexec.[6]"
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
                    "procedure_description": "blackcat has the ability to encrypt windows devices, linux devices, and vmware instances.[30]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1491.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1491/001",
                    "technique_name": "defacement : internal defacement",
                    "technique_description": "an adversary may deface systems internal to an organization in an attempt to intimidate or mislead users, thus discrediting the integrity of the systems. this may take the form of modifications to internal websites, or directly to user systems with the replacement of the desktop wallpaper. disturbing or offensive images may be used as a part of internal defacement in order to cause user discomfort, or to pressure compliance with accompanying messages. since internally defacing systems exposes an adversary's presence, it often takes place after other intrusion goals have been accomplished.",
                    "procedure_description": "blackcat can change the desktop wallpaper on compromised hosts.[12][13]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1561.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1561/001",
                    "technique_name": "disk wipe : disk content wipe",
                    "technique_description": "adversaries may erase the contents of storage devices on specific systems or in large numbers in a network to interrupt availability to system and network resources.",
                    "procedure_description": "blackcat has the ability to wipe vm snapshots on compromised networks.[4][5]"
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
                    "procedure_description": "blackcat can delete shadow copies using vssadmin.exe delete shadows /all /quiet and wmic.exe shadowcopy delete; it can also modify the boot loader using bcdedit /set {default} recoveryenabled no.[21]"
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
                    "procedure_description": "blackcat has the ability to stop vm services on compromised networks.[9][10]"
                }
            ]
        },
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