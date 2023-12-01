var threatdata = {
    "name": "LockBit",
    "alias": "LockBit, ABCD Ransomware, LockBit Black",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting, Reconnaissance, Remote command",
    "modified": "2023-10-03",
    "all_data": {
        "tool": "LockBit",
        "names": [
            {
                "name": "LockBit"
            },
            {
                "name": "ABCD Ransomware"
            },
            {
                "name": "LockBit Black"
            }
        ],
        "description": "(Kaspersky) LockBit ransomware is malicious software designed to block user access to computer systems in exchange for a ransom payment. LockBit will automatically vet for valuable targets, spread the infection, and encrypt all accessible computer systems on a network. This ransomware is used for highly targeted attacks against enterprises and other organizations. As a self-piloted cyberattack, LockBit attackers have made a mark by threatening organizations globally with some of the following threats:\n\n\u2022 Operations disruption with essential functions coming to a sudden halt.\n\u2022 Extortion for the hacker\u2019s financial gain.\n\u2022 Data theft and illegal publication as blackmail if the victim does not comply.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting",
            "Reconnaissance",
            "Remote command"
        ],
        "information": [
            "https://www.kaspersky.com/resource-center/threats/lockbit-ransomware",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/tales-from-the-trenches-a-lockbit-ransomware-story/",
            "https://arstechnica.com/information-technology/2020/05/lockbit-the-new-ransomware-for-hire-a-sad-and-cautionary-tale/",
            "https://news.sophos.com/en-us/2020/04/24/lockbit-ransomware-borrows-tricks-to-keep-up-with-revil-and-maze/",
            "https://news.sophos.com/en-us/2020/10/21/lockbit-attackers-uses-automated-attack-tools-to-identify-tasty-targets/",
            "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-moves-quietly-on-the-network-strikes-fast/",
            "https://www.prodaft.com/m/reports/LockBit_Case_Report___TLPWHITE.pdf",
            "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-now-encrypts-windows-domains-using-group-policies/",
            "https://www.cybereason.com/blog/lockbit-ransomware-wants-to-hire-your-employees",
            "https://www.bankinfosecurity.com/ransomware-lockbit-20-borrows-ryuk-egregors-tricks-a-17335",
            "https://www.cybereason.com/blog/cybereason-vs.-lockbit2.0-ransomware",
            "https://www.deepinstinct.com/blog/lockbit-2-0-ransomware-becomes-lockfile-ransomware-with-a-never-before-seen-encryption-method",
            "https://www.cybereason.com/blog/threat-analysis-report-inside-the-lockbit-arsenal-the-stealbit-exfiltration-tool",
            "https://www.trendmicro.com/en_us/research/22/a/analysis-and-Impact-of-lockbit-ransomwares-first-linux-and-vmware-esxi-variant.html",
            "https://www.ic3.gov/Media/News/2022/220204.pdf",
            "https://www.trendmicro.com/en_us/research/22/d/Thwarting-Loaders-From-SocGholish-to-BLISTERs-LockBit-Payload.htmlhttps://www.trendmicro.com/en_us/research/22/d/Thwarting-Loaders-From-SocGholish-to-BLISTERs-LockBit-Payload.html",
            "https://www.malvuln.com/advisory/96de05212b30ec85d4cf03386c1b84af.txt",
            "https://unit42.paloaltonetworks.com/lockbit-2-ransomware/",
            "https://www.trendmicro.com/en_us/research/22/f/conti-vs-lockbit-a-comparative-analysis-of-ransomware-groups.html",
            "https://www.csoonline.com/article/3665871/lockbit-explained-how-it-has-become-the-most-popular-ransomware.html",
            "https://www.cybereason.com/blog/threat-analysis-report-lockbit-2.0-all-paths-lead-to-ransom",
            "https://www.sentinelone.com/blog/living-off-windows-defender-lockbit-ransomware-sideloads-cobalt-strike-through-microsoft-security-tool/",
            "https://www.trendmicro.com/en_us/research/22/g/lockbit-ransomware-group-augments-its-latest-variant--lockbit-3-.html",
            "https://www.darkreading.com/vulnerabilities-threats/everything-you-need-to-know-about-lockbit",
            "https://asec.ahnlab.com/en/41450/",
            "https://www.tripwire.com/state-of-security/lockbit-ransomware-what-you-need-know",
            "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-goes-green-uses-new-conti-based-encryptor/",
            "https://asec.ahnlab.com/en/47739/",
            "https://www.fortinet.com/blog/threat-research/emerging-lockbit-campaign",
            "https://thehackernews.com/2023/03/the-prolificacy-of-lockbit-ransomware.html",
            "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-075a",
            "https://securelist.com/crimeware-report-lockbit-switchsymb/110068/",
            "https://www.fortinet.com/blog/threat-research/lockbit-most-prevalent-ransomware",
            "https://www.cybereason.com/blog/threat-analysis-assemble-lockbit-3"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.lockbit"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:lockbit"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=lockbit20-ransomware"
        ],
        "uuid": "67f3bacc-75ce-46ef-959a-131c6e1fa30e",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--81ff21f8-6955-4b70-91dc-dce2608512ac",
        "pb_file": "lockbit-2.0-ransomware.json",
        "last_updated": "2021-09-30T09:20:18.487Z",
        "title": "LOCKBIT-2.0 RANSOMWARE",
        "industries": [
            "automotive",
            "communications",
            "construction",
            "defence",
            "energy",
            "engineering",
            "financial-services",
            "government-local",
            "manufacturing",
            "non-profit",
            "retail",
            "technology",
            "transportation",
            "utilities"
        ],
        "regions": [
            "AR",
            "AT",
            "AU",
            "BE",
            "BR",
            "CH",
            "DE",
            "GB",
            "IT",
            "MX",
            "MY",
            "RO",
            "US"
        ],
        "malwares": [
            "Lockbit 2.0"
        ]
    },
    "ioc_data": [
        {
            "malware_printable": "LockBit",
            "malware_alias": "ABCD Ransomware",
            "malware": "win.lockbit",
            "last_update": "2023-06-01 19:03:24",
            "tags": [
                "Lockbit",
                "lockbit",
                "Ransomware",
                "geo",
                "spyware",
                "KOR",
                "ransomware",
                "LockBit"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "2831b37cf521848142e8a5d69515b065",
                        "timestamp": "2023-06-01 19:03:24"
                    },
                    {
                        "value": "5e7b650a6e0070bceed648681bff20fe",
                        "timestamp": "2023-06-01 19:03:24"
                    },
                    {
                        "value": "03cea7c49abe78863ae2644ac77c8efb",
                        "timestamp": "2023-01-13 00:08:13"
                    },
                    {
                        "value": "f64b643de2bc7c368b0a13d12c584a09",
                        "timestamp": "2023-01-13 00:08:13"
                    },
                    {
                        "value": "0f7c10dfa562adf15f1f6078ecaee788",
                        "timestamp": "2022-12-12 13:04:24"
                    },
                    {
                        "value": "fe5101b50e92a923d74cc6f0f4225539",
                        "timestamp": "2022-12-01 15:32:34"
                    },
                    {
                        "value": "008520e6248952bd3ac9e16f144b6243",
                        "timestamp": "2022-11-01 22:17:50"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "2daa5fa152b627f5ae23d2e8fa4e3e399d4899729ad32f184e32d59fd4dd20ef",
                        "timestamp": "2023-04-22 23:50:17"
                    },
                    {
                        "value": "588dfcd0e8ebc570eaba342d6d220528a722be93a46c2dfa2306a7b662b25845",
                        "timestamp": "2023-04-22 23:50:17"
                    },
                    {
                        "value": "442f78f823663cea5da451a9710ece34dbbb29d61985381e6393f6ea1219466b",
                        "timestamp": "2023-04-22 23:50:17"
                    },
                    {
                        "value": "a2db758f099d8a6dec5fd500d033ce2fcd89b58b53d938fdb9d9cba2d91dba01",
                        "timestamp": "2023-04-22 23:50:17"
                    },
                    {
                        "value": "67b05e96f47db0447da53beddbf9aff265cd02562c12428d787fdab0278ded2e",
                        "timestamp": "2023-04-22 23:50:17"
                    },
                    {
                        "value": "c6cf5fd8f71abaf5645b8423f404183b3dea180b69080f53b9678500bab6f0de",
                        "timestamp": "2022-07-08 20:22:55"
                    }
                ],
                "domain": [
                    {
                        "value": "tinneatonenessnabobical.com",
                        "timestamp": "2022-10-04 11:15:06"
                    }
                ],
                "ip:port": [
                    {
                        "value": "82.102.20.219:80",
                        "timestamp": "2022-08-18 05:50:11"
                    },
                    {
                        "value": "51.15.18.180:80",
                        "timestamp": "2022-08-18 05:50:11"
                    },
                    {
                        "value": "52.237.96.13:80",
                        "timestamp": "2022-08-18 05:50:11"
                    },
                    {
                        "value": "62.76.112.121:80",
                        "timestamp": "2022-08-18 05:50:10"
                    },
                    {
                        "value": "167.172.239.68:80",
                        "timestamp": "2022-08-18 05:50:10"
                    },
                    {
                        "value": "82.202.247.81:80",
                        "timestamp": "2022-08-18 05:50:10"
                    },
                    {
                        "value": "185.202.2.121:80",
                        "timestamp": "2022-08-18 05:50:09"
                    },
                    {
                        "value": "51.89.134.150:80",
                        "timestamp": "2022-08-18 05:50:09"
                    },
                    {
                        "value": "104.237.255.254:80",
                        "timestamp": "2022-08-18 05:50:09"
                    },
                    {
                        "value": "54.38.212.197:80",
                        "timestamp": "2022-08-18 05:50:08"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-06-01 19:03:24",
    "file_name": "lockbit",
    "articles": [
        {
            "data_url": "https://medium.com/@lcam/lighting-the-exfiltration-infrastructure-of-a-lockbit-affiliate-and-more-f57fbb7a4e79",
            "date": "2023-10-03",
            "organization": "",
            "author": "Luca Mella",
            "title": "Lighting the Exfiltration Infrastructure of a LockBit Affiliate (and more)",
            "categories": [
                "LockBit",
                "LockBit",
                "Conti",
                "LockBit"
            ]
        },
        {
            "data_url": "https://github.com/prodaft/malware-ioc/tree/master/PTI-257",
            "date": "2023-09-07",
            "organization": "PRODAFT",
            "author": "PRODAFT",
            "title": "PTI-257 (ex-Wizard Spider) - IOCs",
            "categories": [
                "LockBit",
                "LockBit"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/talos-ir-q2-2023-quarterly-recap/",
            "date": "2023-07-26",
            "organization": "Talos",
            "author": "Nicole Hoffman",
            "title": "Incident Response trends Q2 2023: Data theft extortion rises, while healthcare is still most-targeted vertical",
            "categories": [
                "BianLian",
                "Clop",
                "LockBit",
                "Royal Ransom",
                "LockBit",
                "8Base",
                "BianLian",
                "Clop",
                "LockBit",
                "Money Message",
                "Royal Ransom"
            ]
        },
        {
            "data_url": "https://securelist.com/crimeware-report-lockbit-switchsymb/110068/",
            "date": "2023-06-22",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "LockBit Green and phishing that targets organizations",
            "categories": [
                "LockBit",
                "LockBit"
            ]
        },
        {
            "data_url": "https://github.com/EmissarySpider/ransomware-descendants",
            "date": "2023-06-17",
            "organization": "Github (EmissarySpider)",
            "author": "EmissarySpider",
            "title": "ransomware-descendants",
            "categories": [
                "Babuk",
                "Conti",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/sites/default/files/2023-06/aa23-165a_understanding_TA_LockBit_0.pdf",
            "date": "2023-06-14",
            "organization": "CISA",
            "author": "FBI",
            "title": "Understanding Ransomware Threat Actors: Lockbit",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://research.loginsoft.com/threat-research/taming-the-storm-understanding-and-mitigating-the-consequences-of-cve-2023-27350/",
            "date": "2023-05-23",
            "organization": "loginsoft",
            "author": "Saharsh Agrawal",
            "title": "Taming the Storm: Understanding and Mitigating the Consequences of CVE-2023-27350",
            "categories": [
                "Clop",
                "LockBit",
                "Silence"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2023/05/russian-hacker-wazawaka-indicted-for-ransomware/",
            "date": "2023-05-16",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Russian Hacker \u201cWazawaka\u201d Indicted for Ransomware",
            "categories": [
                "Babuk",
                "Hive",
                "LockBit",
                "LockBit",
                "Babuk",
                "Hive",
                "LockBit"
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
            "data_url": "https://twitter.com/malwrhunterteam/status/1647384505550876675",
            "date": "2023-04-16",
            "organization": "Twitter (@malwrhunterteam)",
            "author": "MalwareHunterTeam",
            "title": "Tweet on MacOS Lockbit sample",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.glimps.fr/dcouverte-dune-nouvelle-version-du-ramsomware-lockbit/",
            "date": "2023-04-14",
            "organization": "GLIMPS",
            "author": "GLIMPS",
            "title": "Lockbit changes color",
            "categories": [
                "LockBit"
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
            "data_url": "https://www.fortinet.com/blog/threat-research/emerging-lockbit-campaign",
            "date": "2023-02-28",
            "organization": "Fortinet",
            "author": "Eliran Voronovitch",
            "title": "Can You See It Now? An Emerging LockBit Campaign",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.seqrite.com/blog/uncovering-lockbit-blacks-attack-chain-and-anti-forensic-activity/",
            "date": "2023-02-01",
            "organization": "Seqrite",
            "author": "Sathwik Ram Prakki",
            "title": "Uncovering LockBit Black\u2019s Attack Chain and Anti-forensic activity",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://securityaffairs.com/141666/cyber-crime/lockbit-green-ransomware-variant.html",
            "date": "2023-02-01",
            "organization": "Security Affairs",
            "author": "Pierluigi Paganini",
            "title": "New LockBit Green ransomware variant borrows code from Conti ransomware",
            "categories": [
                "Conti",
                "LockBit"
            ]
        },
        {
            "data_url": "https://analyst1.com/ransomware-diaries-volume-1/",
            "date": "2023-01-16",
            "organization": "ANALYST1",
            "author": "Jon DiMaggio",
            "title": "Unlocking Lockbit: A Ransomware Story",
            "categories": [
                "LockBit",
                "LockBit"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2022/11/30/lockbit-3-0-black-attacks-and-leaks-reveal-wormable-capabilities-and-tooling/",
            "date": "2022-11-30",
            "organization": "Sophos",
            "author": "Andrew Brandt",
            "title": "LockBit 3.0 \u2018Black\u2019 attacks and leaks reveal wormable capabilities and tooling",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/41450/",
            "date": "2022-11-08",
            "organization": "AhnLab",
            "author": "ASEC",
            "title": "LockBit 3.0 Being Distributed via Amadey Bot",
            "categories": [
                "Amadey",
                "Gandcrab",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.logpoint.com/en/blog/hunting-lockbit-variations-using-logpoint/",
            "date": "2022-10-18",
            "organization": "Logpoint",
            "author": "Anish Bogati",
            "title": "Hunting Lockbit Variation",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/security/2022/10/lockbit-3-0-also-known-as-lockbit-black.html",
            "date": "2022-10-15",
            "organization": "vmware",
            "author": "Dana Behling",
            "title": "LockBit 3.0 Ransomware Unlocked",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/ko/39682/",
            "date": "2022-10-11",
            "organization": "AhnLab",
            "author": "ASEC Analysis Team",
            "title": "From Exchange Server vulnerability to ransomware infection in just 7 days",
            "categories": [
                "LockBit",
                "MimiKatz"
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
            "data_url": "https://medium.com/s2wblog/quick-overview-of-leaked-lockbit-3-0-black-builder-program-880ae511d085",
            "date": "2022-09-22",
            "organization": "Medium s2wlab",
            "author": "Yang HuiSeong",
            "title": "Quick Overview of Leaked LockBit 3.0 (Black) builder program",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://cybergeeks.tech/a-technical-analysis-of-the-leaked-lockbit-3-0-builder/",
            "date": "2022-09-22",
            "organization": "Cyber Geeks",
            "author": "Vlad Pasca",
            "title": "A Technical Analysis Of The Leaked LOCKBIT 3.0 Builder",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-gang-gets-aggressive-with-triple-extortion-tactic/",
            "date": "2022-08-28",
            "organization": "BleepingComputer",
            "author": "Ionut Ilascu",
            "title": "LockBit ransomware gang gets aggressive with triple-extortion tactic",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://research.nccgroup.com/2022/08/19/back-in-black-unlocking-a-lockbit-3-0-ransomware-attack",
            "date": "2022-08-19",
            "organization": "nccgroup",
            "author": "Ross Inman",
            "title": "Back in Black: Unlocking a LockBit 3.0 Ransomware Attack",
            "categories": [
                "FAKEUPDATES",
                "Cobalt Strike",
                "LockBit"
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
            "data_url": "https://www.seqrite.com/blog/indian-power-sector-targeted-with-latest-lockbit-3-0-variant/",
            "date": "2022-08-10",
            "organization": "Quick Heal",
            "author": "Sathwik Ram Prakki",
            "title": "Indian Power Sector targeted with latest LockBit 3.0 variant",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=C733AyPzkoc",
            "date": "2022-08-04",
            "organization": "YouTube (Arda B\u00fcy\u00fckkaya)",
            "author": "Arda B\u00fcy\u00fckkaya",
            "title": "LockBit Ransomware Sideloads Cobalt Strike Through Microsoft Security Tool",
            "categories": [
                "Cobalt Strike",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/blog/living-off-windows-defender-lockbit-ransomware-sideloads-cobalt-strike-through-microsoft-security-tool/",
            "date": "2022-07-28",
            "organization": "SentinelOne",
            "author": "J\u00falio Dantas",
            "title": "Living Off Windows Defender | LockBit Ransomware Sideloads Cobalt Strike Through Microsoft Security Tool",
            "categories": [
                "Cobalt Strike",
                "LockBit"
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
            "data_url": "https://www.sentinelone.com/labs/lockbit-3-0-update-unpicking-the-ransomwares-latest-anti-analysis-and-evasion-techniques/",
            "date": "2022-07-21",
            "organization": "Sentinel LABS",
            "author": "Jim Walter",
            "title": "LockBit 3.0 Update | Unpicking the Ransomware\u2019s Latest Anti-Analysis and Evasion Techniques",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/lockbit-targets-servers",
            "date": "2022-07-20",
            "organization": "Symantec",
            "author": "Vishal Kamble",
            "title": "LockBit: Ransomware Puts Servers in the Crosshairs",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/ransomware-roundup-new-variants",
            "date": "2022-07-18",
            "organization": "Fortinet",
            "author": "FortiGuard Labs",
            "title": "Ransomware Roundup: Protecting Against New Variants",
            "categories": [
                "LockBit",
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
            "data_url": "https://blog.minerva-labs.com/lockbit-3.0-aka-lockbit-black-is-here-with-a-new-icon-new-ransom-note-new-wallpaper-but-less-evasiveness",
            "date": "2022-07-10",
            "organization": "Minerva Labs",
            "author": "Natalie Zargarov",
            "title": "Lockbit 3.0 AKA Lockbit Black is here, with a new icon, new ransom note, new wallpaper, but less evasiveness?",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/threat-analysis-report-lockbit-2.0-all-paths-lead-to-ransom",
            "date": "2022-07-07",
            "organization": "Cybereason",
            "author": "Cybereason Global SOC Team",
            "title": "THREAT ANALYSIS REPORT: LockBit 2.0 - All Paths Lead to Ransom",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://cluster25.io/2022/07/06/lockbit-3-0-making-the-ransomware-great-again/",
            "date": "2022-07-06",
            "organization": "Cluster25",
            "author": "Cluster25",
            "title": "LockBit 3.0: \u201cMaking The Ransomware Great Again\u201d",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://blog.cyble.com/2022/07/05/lockbit-3-0-ransomware-group-launches-new-version/",
            "date": "2022-07-05",
            "organization": "cyble",
            "author": "Cyble Research Labs",
            "title": "Lockbit 3.0 \u2013  Ransomware Group Launches New Version",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/35822/",
            "date": "2022-06-24",
            "organization": "AhnLab",
            "author": "ASEC",
            "title": "LockBit Ransomware Disguised as Copyright Claim E-mail Being Distributed",
            "categories": [
                "LockBit"
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
            "data_url": "https://unit42.paloaltonetworks.com/lockbit-2-ransomware/",
            "date": "2022-06-09",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Amer Elsad",
            "title": "LockBit 2.0: How This RaaS Operates and How to Protect Against It",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://security.packt.com/understanding-lockbit/",
            "date": "2022-06-02",
            "organization": "Packt",
            "author": "packtsecurity",
            "title": "A SecPro Super Issue: Understanding LockBit",
            "categories": [
                "LockBit",
                "LockBit",
                "BITWISE SPIDER"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/unc2165-shifts-to-evade-sanctions",
            "date": "2022-06-02",
            "organization": "Mandiant",
            "author": "Mandiant Intelligence",
            "title": "To HADES and Back: UNC2165 Shifts to LOCKBIT to Evade Sanctions",
            "categories": [
                "FAKEUPDATES",
                "Blister",
                "Cobalt Strike",
                "DoppelPaymer",
                "Dridex",
                "FriedEx",
                "Hades",
                "LockBit",
                "Macaw",
                "MimiKatz",
                "Phoenix Locker",
                "WastedLocker"
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
            "data_url": "https://twitter.com/MsftSecIntel/status/1522690116979855360",
            "date": "2022-05-06",
            "organization": "Twitter (@MsftSecIntel)",
            "author": "Microsoft Security Intelligence",
            "title": "Twitter Thread on initial infeciton of SocGholish/ FAKEUPDATES campaigns lead to BLISTER Loader, CobaltStrike, Lockbit and followed by Hands On Keyboard activity",
            "categories": [
                "FAKEUPDATES",
                "Blister",
                "Cobalt Strike",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.lemagit.fr/actualites/252516821/Ransomware-LockBit-30-commence-a-etre-utilise-dans-des-cyberattaques",
            "date": "2022-05-06",
            "organization": "LeMagIT",
            "author": "Val\u00e9ry Rie\u00df-Marchive",
            "title": "Ransomware: LockBit 3.0 Starts Using in Cyberattacks",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/conti-ransomware-cooperation-maze-lockbit-ragnar-locker",
            "date": "2022-05-05",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Cybercrime loves company: Conti cooperated with other ransomware gangs",
            "categories": [
                "LockBit",
                "Maze",
                "RagnarLocker",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/lockbit-ransomware-side-loads-cobalt-strike-beacon-with-legitimate-vmware-utility",
            "date": "2022-04-27",
            "organization": "Sentinel LABS",
            "author": "James Haughom",
            "title": "LockBit Ransomware Side-loads Cobalt Strike Beacon with Legitimate VMware Utility",
            "categories": [
                "Cobalt Strike",
                "LockBit",
                "BRONZE STARLIGHT"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/lockbit-ransomware-side-loads-cobalt-strike-beacon-with-legitimate-vmware-utility/",
            "date": "2022-04-27",
            "organization": "Sentinel LABS",
            "author": "James Haughom",
            "title": "LockBit Ransomware Side-loads Cobalt Strike Beacon with Legitimate VMware Utility",
            "categories": [
                "Cobalt Strike",
                "LockBit"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2022/04/12/attackers-linger-on-government-agency-computers-before-deploying-lockbit-ransomware/",
            "date": "2022-04-12",
            "organization": "Sophos",
            "author": "Andrew Brandt",
            "title": "Attackers linger on government agency computers before deploying Lockbit ransomware",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.connectwise.com/resources/lockbit-profile",
            "date": "2022-04-12",
            "organization": "ConnectWise",
            "author": "ConnectWise CRU",
            "title": "Threat Profile: LockBit",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://socradar.io/lockbit-3-another-upgrade-to-worlds-most-active-ransomware/",
            "date": "2022-04-06",
            "organization": "SOCRadar",
            "author": "SOCRadar",
            "title": "Lockbit 3.0: Another Upgrade to World\u2019s Most Active Ransomware",
            "categories": [
                "LockBit",
                "LockBit",
                "BITWISE SPIDER"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/d/thwarting-loaders-from-socgholish-to-blisters-lockbit-payload/iocs-thwarting-loaders-socgholish-blister.txt",
            "date": "2022-04-05",
            "organization": "Trend Micro",
            "author": "Earle Maui Earnshaw",
            "title": "Thwarting Loaders: From SocGholish to BLISTER\u2019s LockBit Payload (IoCs)",
            "categories": [
                "FAKEUPDATES",
                "Blister",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/22/d/Thwarting-Loaders-From-SocGholish-to-BLISTERs-LockBit-Payload.html",
            "date": "2022-04-05",
            "organization": "Trend Micro",
            "author": "Earle Maui Earnshaw",
            "title": "Thwarting Loaders: From SocGholish to BLISTER\u2019s LockBit Payload",
            "categories": [
                "FAKEUPDATES",
                "Blister",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_no/research/22/d/Thwarting-Loaders-From-SocGholish-to-BLISTERs-LockBit-Payload.html",
            "date": "2022-04-05",
            "organization": "Trend Micro",
            "author": "Earle Earnshaw",
            "title": "Thwarting Loaders: From SocGholish to BLISTER\u2019s LockBit Payload",
            "categories": [
                "Blister",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-april-1st-2022-i-can-fight-with-a-keyboard/",
            "date": "2022-04-01",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "The Week in Ransomware - April 1st 2022 - 'I can fight with a keyboard'",
            "categories": [
                "Hive",
                "Dharma",
                "LockBit",
                "STOP",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/conti-leaks-examining-the-panama-papers-of-ransomware.html",
            "date": "2022-03-31",
            "organization": "Trellix",
            "author": "John Fokker",
            "title": "Conti Leaks: Examining the Panama Papers of Ransomware",
            "categories": [
                "LockBit",
                "Amadey",
                "Buer",
                "Conti",
                "IcedID",
                "LockBit",
                "Mailto",
                "Maze",
                "PhotoLoader",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/lockbit-victim-estimates-cost-of-ransomware-attack-to-be-42-million/",
            "date": "2022-03-31",
            "organization": "Bleeping Computer",
            "author": "Bill Toulas",
            "title": "LockBit victim estimates cost of ransomware attack to be $42 million",
            "categories": [
                "LockBit",
                "LockBit"
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
            "data_url": "https://blog.compass-security.com/2022/03/vpn-appliance-forensics/",
            "date": "2022-03-21",
            "organization": "COMPASS SECURITY",
            "author": "Benjamin Bruppacher",
            "title": "VPN Appliance Forensics",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://chuongdong.com/reverse%20engineering/2022/03/19/LockbitRansomware/",
            "date": "2022-03-19",
            "organization": "Chuongdong blog",
            "author": "Chuong Dong",
            "title": "LockBit Ransomware v2.0",
            "categories": [
                "LockBit"
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
            "data_url": "https://techcommunity.microsoft.com/t5/security-compliance-and-identity/part-2-lockbit-2-0-ransomware-bugs-and-database-recovery/ba-p/3254421",
            "date": "2022-03-11",
            "organization": "Microsoft",
            "author": "Microsoft Detection and Response Team (DART)",
            "title": "Part 2: LockBit 2.0 ransomware bugs and database recovery attempts",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-gang-claims-attack-on-bridgestone-americas/",
            "date": "2022-03-11",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "LockBit ransomware gang claims attack on Bridgestone Americas",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://techcommunity.microsoft.com/t5/security-compliance-and-identity/part-1-lockbit-2-0-ransomware-bugs-and-database-recovery/ba-p/3254354",
            "date": "2022-03-11",
            "organization": "Microsoft",
            "author": "Microsoft Detection and Response Team (DART)",
            "title": "Part 1: LockBit 2.0 ransomware bugs and database recovery attempts",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://therecord.media/conti-ransomware-gang-chats-leaked-by-pro-ukraine-member/",
            "date": "2022-02-27",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Conti ransomware gang chats leaked by pro-Ukraine member",
            "categories": [
                "Conti",
                "LockBit"
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
            "data_url": "https://lifars.com/wp-content/uploads/2022/02/LockBitRansomware_Whitepaper.pdf",
            "date": "2022-02-14",
            "organization": "LIFARS",
            "author": "Vlad Pasca",
            "title": "A Detailed Analysis  of The LockBit  Ransomware",
            "categories": [
                "LockBit",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.dr.dk/nyheder/viden/teknologi/frygtede-skulle-lukke-alle-vindmoeller-nu-aabner-vestas-op-om-hacking-angreb",
            "date": "2022-02-14",
            "organization": "DR.DK",
            "author": "Allan Nisgaard",
            "title": "Var t\u00e6t p\u00e5 at slukke tusindvis af vindm\u00f8ller: Nu fort\u00e6ller Vestas om cyberangreb",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.dragos.com/blog/industry-news/dragos-ics-ot-ransomware-analysis-q4-2021/",
            "date": "2022-02-09",
            "organization": "Dragos",
            "author": "Anna Skelton",
            "title": "Dragos ICS/OT Ransomware Analysis: Q4 2021",
            "categories": [
                "LockBit",
                "Conti",
                "LockBit"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/privateloader-malware",
            "date": "2022-02-08",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "PrivateLoader: The first step in many malware schemes",
            "categories": [
                "Dridex",
                "Kronos",
                "LockBit",
                "Nanocore RAT",
                "NjRAT",
                "PrivateLoader",
                "Quasar RAT",
                "RedLine Stealer",
                "Remcos",
                "SmokeLoader",
                "STOP",
                "Tofsee",
                "TrickBot",
                "Vidar"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/ransomware-spotlight/ransomware-spotlight-lockbit",
            "date": "2022-02-08",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "Ransomware Spotlight: LockBit",
            "categories": [
                "LockBit",
                "BITWISE SPIDER"
            ]
        },
        {
            "data_url": "https://www.ic3.gov/Media/News/2022/220204.pdf",
            "date": "2022-02-07",
            "organization": "FBI",
            "author": "FBI",
            "title": "CU-000162-MW: Indicators of Compromise Associated with LockBit 2.0 Ransomware",
            "categories": [
                "LockBit",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.coveware.com/blog/2022/1/26/ransomware-as-a-service-innovation-curve",
            "date": "2022-01-27",
            "organization": "",
            "author": "CoveWare",
            "title": "Ransomware as a Service Innovation Curve",
            "categories": [
                "Conti",
                "LockBit"
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
            "data_url": "https://www.trendmicro.com/en_us/research/22/a/analysis-and-Impact-of-lockbit-ransomwares-first-linux-and-vmware-esxi-variant.html",
            "date": "2022-01-24",
            "organization": "Trend Micro",
            "author": "Junestherry Dela Cruz",
            "title": "Analysis and Impact of LockBit Ransomware\u2019s First Linux and VMware ESXi Variant",
            "categories": [
                "LockBit",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/better-together-global-attitude-survey-takeaways-2021/",
            "date": "2022-01-21",
            "organization": "CrowdStrike",
            "author": "Falcon OverWatch Team",
            "title": "Better Together: The Power of Managed Cybersecurity Services in the Face of Pressing Global Security Challenges",
            "categories": [
                "LockBit",
                "LockBit",
                "BITWISE SPIDER"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/threat-analysis-report-inside-the-lockbit-arsenal-the-stealbit-exfiltration-tool",
            "date": "2021-12-16",
            "organization": "Cybereason",
            "author": "Aleksandar Milenkoski",
            "title": "Inside the LockBit Arsenal - The StealBit Exfiltration Tool",
            "categories": [
                "LockBit",
                "StealBit"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/the-babadeda-crypter-targeting-crypto-nft-defi-communities",
            "date": "2021-11-23",
            "organization": "Morphisec",
            "author": "Hido Cohen",
            "title": "Babadeda Crypter targeting crypto, NFT, and DeFi communities",
            "categories": [
                "Babadeda",
                "BitRAT",
                "LockBit",
                "Remcos"
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
            "data_url": "https://redcanary.com/blog/intelligence-insights-november-2021/",
            "date": "2021-11-18",
            "organization": "Red Canary",
            "author": "The Red Canary Team",
            "title": "Intelligence Insights: November 2021",
            "categories": [
                "Andromeda",
                "Conti",
                "LockBit",
                "QakBot",
                "Squirrelwaffle"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/how-crowdstrike-prevents-volume-shadow-tampering-by-lockbit-ransomware/",
            "date": "2021-11-17",
            "organization": "CrowdStrike",
            "author": "Thomas Moses",
            "title": "Ransomware (R)evolution Plagues Organizations, But CrowdStrike Protection Never Wavers",
            "categories": [
                "LockBit"
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
            "data_url": "https://www.mbsd.jp/2021/10/27/assets/images/MBSD_WhitePaper_A-deep-dive-analysis-of-LockBit2.0_Ransomware.pdf",
            "date": "2021-10-27",
            "organization": "MBSD",
            "author": "MBSD",
            "title": "\u30e9\u30f3\u30b5\u30e0\u30a6\u30a7\u30a2\u300cLockBit2.0\u300d\u306e\u5185\u90e8\u69cb\u9020\u3092\u7d10",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://skyblue.team/posts/hive-recovery-from-lockbit-2.0/",
            "date": "2021-10-15",
            "organization": "skyblue.team blog",
            "author": "skyblue team",
            "title": "Recovering registry hives encrypted by LockBit 2.0",
            "categories": [
                "LockBit"
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
            "data_url": "https://seguranca-informatica.pt/malware-analysis-details-on-lockbit-ransomware/",
            "date": "2021-10-05",
            "organization": "Seguranca Informatica",
            "author": "Pedro Tavares",
            "title": "Malware analysis: Details on LockBit ransomware",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://yoroi.company/research/hunting-the-lockbit-gangs-exfiltration-infrastructures/",
            "date": "2021-09-24",
            "organization": "Yoroi",
            "author": "Luigi Martire",
            "title": "Hunting the LockBit Gang's Exfiltration Infrastructures",
            "categories": [
                "LockBit",
                "StealBit"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/lockbit-ransomware-attacks-surge-affiliate-recruitment/",
            "date": "2021-09-09",
            "organization": "IBM",
            "author": "Megan Roddie",
            "title": "LockBit 2.0: Ransomware Attacks Surge After Successful Affiliate Recruitment",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/from-russia-with-lockbit-ransomware-inside-look-preventive-solutions",
            "date": "2021-08-26",
            "organization": "Advanced Intelligence",
            "author": "Anastasia Sentsova",
            "title": "From Russia With\u2026 LockBit Ransomware: Inside Look & Preventive Solutions",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/emerging-ransomware-groups/",
            "date": "2021-08-24",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Ruchna Nigam",
            "title": "Ransomware Groups to Watch: Emerging Threats",
            "categories": [
                "HelloKitty",
                "AvosLocker",
                "HelloKitty",
                "Hive",
                "LockBit"
            ]
        },
        {
            "data_url": "https://ke-la.com/lockbit-2-0-interview-with-russian-osint/",
            "date": "2021-08-24",
            "organization": "KELA",
            "author": "KELA Cyber Intelligence Center",
            "title": "LockBit 2.0 Interview with Russian OSINT",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://amgedwageh.medium.com/lockbit-ransomware-analysis-notes-93a542fc8511",
            "date": "2021-08-17",
            "organization": "Medium amgedwageh",
            "author": "Amged Wageh",
            "title": "LockBit Ransomware Analysis Notes",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://medium.com/@amgedwageh/lockbit-ransomware-analysis-notes-93a542fc8511",
            "date": "2021-08-17",
            "organization": "",
            "author": "Amged Wagih",
            "title": "LockBit Ransomware - Technical Anlysis",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/h/lockbit-resurfaces-with-version-2-0-ransomware-detections-in-chi.html",
            "date": "2021-08-16",
            "organization": "Trend Micro",
            "author": "Jett Paulo Bernardo",
            "title": "LockBit Resurfaces With Version 2.0 Ransomware Detections in Chile, Italy, Taiwan, UK",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://blog.cyble.com/2021/08/16/a-deep-dive-analysis-of-lockbit-2-0/",
            "date": "2021-08-16",
            "organization": "cyble",
            "author": "Cyble",
            "title": "A Deep-dive Analysis of LOCKBIT 2.0",
            "categories": [
                "LockBit"
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
            "data_url": "https://www.netskope.com/blog/netskope-threat-coverage-lockbit",
            "date": "2021-08-12",
            "organization": "Netskope",
            "author": "Gustavo Palazolo",
            "title": "Netskope Threat Coverage: LockBit",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/rising-threat-from-lockbit-ransomware",
            "date": "2021-08-11",
            "organization": "Cybereason",
            "author": "Tony Bradley",
            "title": "The Rising Threat from LockBit Ransomware",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://therecord.media/australian-cybersecurity-agency-warns-of-spike-in-lockbit-ransomware-attacks/",
            "date": "2021-08-06",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Australian cybersecurity agency warns of spike in LockBit ransomware attacks",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-recruiting-insiders-to-breach-corporate-networks/",
            "date": "2021-08-04",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "LockBit ransomware recruiting insiders to breach corporate networks",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/energy-group-erg-reports-minor-disruptions-after-ransomware-attack/",
            "date": "2021-08-04",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "Energy group ERG reports minor disruptions after ransomware attack",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/ransomware-attack-hits-italys-lazio-region-affects-covid-19-site/",
            "date": "2021-08-03",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Ransomware attack hits Italy's Lazio region, affects COVID-19 site",
            "categories": [
                "LockBit",
                "RansomEXX"
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
            "data_url": "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-now-encrypts-windows-domains-using-group-policies/",
            "date": "2021-07-27",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "LockBit ransomware now encrypts Windows domains using group policies",
            "categories": [
                "Egregor",
                "LockBit"
            ]
        },
        {
            "data_url": "https://medium.com/s2wlab/w4-july-en-story-of-the-week-ransomware-on-the-darkweb-c61965d0386a",
            "date": "2021-07-22",
            "organization": "S2W LAB Inc.",
            "author": "Denise Dasom Kim",
            "title": "W4 July | EN | Story of the week: Ransomware on the Darkweb",
            "categories": [
                "LockBit",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://www.prodaft.com/m/reports/LockBit_Case_Report___TLPWHITE.pdf",
            "date": "2021-06-18",
            "organization": "PRODAFT Threat Intelligence",
            "author": "PRODAFT",
            "title": "LockBit RaaS In-Depth Analysis",
            "categories": [
                "LockBit"
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
            "data_url": "https://www.bleepingcomputer.com/news/security/uk-rail-network-merseyrail-likely-hit-by-lockbit-ransomware/",
            "date": "2021-04-28",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "UK rail network Merseyrail likely hit by Lockbit ransomware",
            "categories": [
                "LockBit"
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
            "data_url": "https://analyst1.com/blog/ransom-mafia-analysis-of-the-worlds-first-ransomware-cartel",
            "date": "2021-04-07",
            "organization": "ANALYST1",
            "author": "Jon DiMaggio",
            "title": "Ransom Mafia - Analysis of the World's First Ransomware Cartel",
            "categories": [
                "Conti",
                "Egregor",
                "LockBit",
                "Maze",
                "RagnarLocker",
                "SunCrypt",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://analyst1.com/file-assets/RANSOM-MAFIA-ANALYSIS-OF-THE-WORLD%E2%80%99S-FIRST-RANSOMWARE-CARTEL.pdf",
            "date": "2021-04-07",
            "organization": "ANALYST1",
            "author": "Jon DiMaggio",
            "title": "Ransom Mafia Analysis of the World's First Ransomware Cartel",
            "categories": [
                "Conti",
                "Egregor",
                "LockBit",
                "Maze",
                "RagnarLocker",
                "Ryuk",
                "SunCrypt",
                "TA2101",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://therecord.media/missed-opportunity-bug-in-lockbit-ransomware-allowed-free-decryptions/",
            "date": "2021-03-17",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Missed opportunity: Bug in LockBit ransomware allowed free decryptions",
            "categories": [
                "LockBit"
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
            "data_url": "https://talos-intelligence-site.s3.amazonaws.com/production/document_files/files/000/095/481/original/010421_LockBit_Interview.pdf",
            "date": "2021-01-04",
            "organization": "Cisco Talos",
            "author": "Azim Khodjibaev",
            "title": "Interview with a LockBit ransomware operator",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/ransomware-hits-helicopter-maker-kopter/",
            "date": "2020-12-05",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "Ransomware hits helicopter maker Kopter",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://ke-la.com/zooming-into-darknet-threats-targeting-jp-orgs-kela/",
            "date": "2020-11-18",
            "organization": "KELA",
            "author": "Victoria Kivilevich",
            "title": "Zooming into Darknet Threats Targeting Japanese Organizations",
            "categories": [
                "Conti",
                "DoppelPaymer",
                "Egregor",
                "LockBit",
                "Maze",
                "REvil",
                "Snake"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/10/21/lockbit-attackers-uses-automated-attack-tools-to-identify-tasty-targets",
            "date": "2020-10-21",
            "organization": "SophosLabs Uncut",
            "author": "Sean Gallagher",
            "title": "LockBit uses automated attack tools to identify tasty targets",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://blog.lexfo.fr/lockbit-malware.html",
            "date": "2020-10-02",
            "organization": "Lexfo",
            "author": "Lexfo",
            "title": "Lockbit analysis",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/double-trouble-ransomware-data-leak-extortion-part-1/",
            "date": "2020-09-25",
            "organization": "CrowdStrike",
            "author": "The Crowdstrike Intel Team",
            "title": "Double Trouble: Ransomware with Data Leak Extortion, Part 1",
            "categories": [
                "DoppelPaymer",
                "FriedEx",
                "LockBit",
                "Maze",
                "MedusaLocker",
                "RagnarLocker",
                "REvil",
                "RobinHood",
                "SamSam",
                "WastedLocker",
                "MIMIC SPIDER",
                "PIZZO SPIDER",
                "TA2101",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/double-trouble-ransomware-data-leak-extortion-part-1",
            "date": "2020-09-24",
            "organization": "CrowdStrike",
            "author": "CrowdStrike Intelligence Team",
            "title": "Double Trouble: Ransomware with Data Leak Extortion, Part 1",
            "categories": [
                "DoppelPaymer",
                "Gandcrab",
                "LockBit",
                "Maze",
                "MedusaLocker",
                "RagnarLocker",
                "SamSam",
                "OUTLAW SPIDER",
                "OVERLORD SPIDER"
            ]
        },
        {
            "data_url": "https://www.crypsisgroup.com/insights/ransomwares-new-trend-exfiltration-and-extortion",
            "date": "2020-09-17",
            "organization": "CRYPSIS",
            "author": "Drew Schmitt",
            "title": "Ransomware\u2019s New Trend: Exfiltration and Extortion",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/09/CTIR-quarterly-trends-Q4-2020.html",
            "date": "2020-09-01",
            "organization": "Cisco Talos",
            "author": "David Liebenberg",
            "title": "Quarterly Report: Incident Response trends in Summer 2020",
            "categories": [
                "Cobalt Strike",
                "LockBit",
                "Mailto",
                "Maze",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2020/07/ESET_Threat_Report_Q22020.pdf",
            "date": "2020-07-29",
            "organization": "ESET Research",
            "author": "welivesecurity",
            "title": "THREAT REPORT Q2 2020",
            "categories": [
                "DEFENSOR ID",
                "HiddenAd",
                "Bundlore",
                "Pirrit",
                "Agent.BTZ",
                "Cerber",
                "ClipBanker",
                "CROSSWALK",
                "Cryptowall",
                "CTB Locker",
                "DanaBot",
                "Dharma",
                "Formbook",
                "Gandcrab",
                "Grandoreiro",
                "Houdini",
                "ISFB",
                "LockBit",
                "Locky",
                "Mailto",
                "Maze",
                "Microcin",
                "Nemty",
                "NjRAT",
                "Phobos",
                "PlugX",
                "Pony",
                "REvil",
                "Socelars",
                "STOP",
                "Tinba",
                "TrickBot",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2020/04/28/ransomware-groups-continue-to-target-healthcare-critical-services-heres-how-to-reduce-risk/",
            "date": "2020-04-28",
            "organization": "Microsoft",
            "author": "Microsoft Threat Protection Intelligence Team",
            "title": "Ransomware groups continue to target healthcare, critical services; here\u2019s how to reduce risk",
            "categories": [
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Paradise",
                "RagnarLocker",
                "REvil",
                "RobinHood"
            ]
        },
        {
            "data_url": "https://github.com/albertzsigovits/malware-notes/blob/master/Ransomware/Lockbit.md",
            "date": "2020-04-24",
            "organization": "Github (albertzsigovits)",
            "author": "Albert Zsigovits",
            "title": "LockBit ransomware IoCs",
            "categories": [
                "LockBit"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/04/24/lockbit-ransomware-borrows-tricks-to-keep-up-with-revil-and-maze/",
            "date": "2020-04-24",
            "organization": "Sophos Labs",
            "author": "Albert Zsigovits",
            "title": "LockBit ransomware borrows tricks to keep up with REvil and Maze",
            "categories": [
                "LockBit"
            ]
        }
    ],
    "mitre": []
};