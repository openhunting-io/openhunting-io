var threatdata = {
    "name": "Clop",
    "alias": "Clop, Cl0p",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2023-09-05",
    "all_data": {
        "tool": "Clop",
        "names": [
            {
                "name": "Clop"
            },
            {
                "name": "Cl0p"
            }
        ],
        "description": "Clop is a ransomware which uses the .clop extension after having encrypted the victim's files. Another unique characteristic belonging with Clop is in the string: 'Dont Worry C|0P' included into the ransom notes. It is a variant of {{CryptoMix}} ransomware, but it additionally attempts to disable Windows Defender and to remove the Microsoft Security Essentials in order to avoid user space detection.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/clop-ransomware/",
            "https://www.bleepingcomputer.com/news/security/clop-ransomware-now-kills-windows-10-apps-and-3rd-party-tools/",
            "https://www.telekom.com/en/blog/group/article/cybersecurity-ta505-returns-with-a-new-bag-of-tricks-602104",
            "https://www.cybereason.com/blog/cybereason-vs.-clop-ransomware",
            "https://www.notion.so/S2W-LAB-Analysis-of-Clop-Ransomware-suspiciously-related-to-the-Recent-Incident-English-088056baf01242409a6e9f844f0c5f2e",
            "https://www.telekom.com/en/blog/group/article/inside-of-cl0p-s-ransomware-operation-615824",
            "https://blog.malwarebytes.com/malwarebytes-news/2021/02/clop-targets-execs-ransomware-tactics-get-another-new-twist/",
            "https://unit42.paloaltonetworks.com/clop-ransomware/",
            "https://www.cybereason.com/blog/cl0p-ransomware-gang-tries-to-topple-the-house-of-cards",
            "https://www.sentinelone.com/labs/cl0p-ransomware-targets-linux-systems-with-flawed-encryption-decryptor-available/",
            "https://flashpoint.io/blog/clop-ransomware-threat/",
            "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-158a",
            "https://www.darkreading.com/dr-tech/cl0p-in-your-network-how-to-find-out",
            "https://www.fortinet.com/blog/threat-research/ransomware-roundup-cl0p"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0611/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.clop"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Clop"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=clop-ransomware",
            "https://www.sentinelone.com/labs/cl0p-ransomware-targets-linux-systems-with-flawed-encryption-decryptor-available/"
        ],
        "uuid": "8792eefb-d852-4a24-ad09-46614ef7a815",
        "last-card-change": "2023-09-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--70d827ca-ec87-423a-8ad5-b5eb94f86ae2",
        "pb_file": "clop-ransomware.json",
        "last_updated": "2021-09-30T00:00:00.000Z",
        "title": "CLOP RANSOMWARE",
        "industries": [
            "aerospace",
            "automotive",
            "education",
            "energy",
            "engineering",
            "financial-services",
            "healthcare",
            "manufacturing",
            "pharmaceuticals",
            "retail",
            "technology",
            "telecommunications",
            "transportation"
        ],
        "regions": [
            "AU",
            "DK",
            "GB",
            "IN",
            "MX",
            "SG",
            "TR",
            "US"
        ],
        "malwares": [
            "Clop"
        ]
    },
    "ioc_data": [
        {
            "malware_printable": "Clop",
            "malware_alias": "Cl0p",
            "malware": "elf.clop",
            "last_update": "2023-03-23 18:12:56",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "31e0439e6ef1dd29c0db6d96bac59446",
                        "timestamp": "2023-03-23 18:12:56"
                    },
                    {
                        "value": "f59d2a3c925f331aae7437dd7ac1a7c8",
                        "timestamp": "2023-03-23 18:12:56"
                    },
                    {
                        "value": "8bd774fbc6f846992abda69ddabc3fb7",
                        "timestamp": "2023-03-23 18:12:56"
                    },
                    {
                        "value": "dd5cee48cdd586045c5fb059a1120e15",
                        "timestamp": "2023-03-23 18:12:56"
                    },
                    {
                        "value": "5e52f75d17c80dd104ce0da05fdfc362",
                        "timestamp": "2023-03-23 18:12:56"
                    },
                    {
                        "value": "4431b6302b7d5b1098a61469bdfca982",
                        "timestamp": "2023-03-23 18:12:56"
                    },
                    {
                        "value": "afe7f87478ba6dfca15839f958e9b2ef",
                        "timestamp": "2023-03-23 18:12:56"
                    }
                ],
                "sha1_hash": [
                    {
                        "value": "a1a628cca993f9455d22ca2c248ddca7e743683e",
                        "timestamp": "2023-03-23 18:09:08"
                    },
                    {
                        "value": "a6e940b1bd92864b742fbd5ed9b2ef763d788ea7",
                        "timestamp": "2023-03-23 18:09:08"
                    },
                    {
                        "value": "ac71b646b0237b487c08478736b58f208a98eebf",
                        "timestamp": "2023-03-23 18:09:08"
                    },
                    {
                        "value": "77ea0fd635a37194efc1f3e0f5012a4704992b0e",
                        "timestamp": "2023-03-23 18:09:08"
                    },
                    {
                        "value": "40b7b386c2c6944a6571c6dcfb23aaae026e8e82",
                        "timestamp": "2023-03-23 18:09:07"
                    },
                    {
                        "value": "4fa2b95b7cde72ff81554cfbddc31bbf77530d4d",
                        "timestamp": "2023-03-23 18:09:07"
                    },
                    {
                        "value": "ba5c5b5cbd6abdf64131722240703fb585ee8b56",
                        "timestamp": "2023-03-23 18:08:16"
                    },
                    {
                        "value": "46b02cc186b85e11c3d59790c3a0bfd2ae1f82a5",
                        "timestamp": "2023-03-23 18:08:16"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-03-23 18:12:56",
    "file_name": "clop",
    "articles": [
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
            "data_url": "https://fourcore.io/blogs/clop-ransomware-history-adversary-simulation",
            "date": "2023-06-23",
            "organization": "Fourcore",
            "author": "Jones Martin",
            "title": "Clop Ransomware: History, Timeline, And Adversary Simulation",
            "categories": [
                "Clop"
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
            "data_url": "https://www.helpnetsecurity.com/2023/02/07/cl0p-ransomware-decryptor-linux/",
            "date": "2023-02-07",
            "organization": "HelpNetSecurity",
            "author": "Zeljka Zorz",
            "title": "Released: Decryptor for Cl0p ransomware\u2019s Linux variant",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/cl0p-ransomware-targets-linux-systems-with-flawed-encryption-decryptor-available/",
            "date": "2023-02-07",
            "organization": "SentinelOne",
            "author": "Antonis Terefos",
            "title": "Cl0p Ransomware Targets Linux Systems with Flawed Encryption | Decryptor Available",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/breaking-the-silence-recent-truebot-activity/",
            "date": "2022-12-08",
            "organization": "Cisco Talos",
            "author": "Tiago Pereira",
            "title": "Breaking the silence - Recent Truebot activity",
            "categories": [
                "Clop",
                "Cobalt Strike",
                "FlawedGrace",
                "Raspberry Robin",
                "Silence",
                "Teleport"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/microsoft-links-raspberry-robin-worm-to-clop-ransomware-attacks/",
            "date": "2022-10-27",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "Microsoft links Raspberry Robin worm to Clop ransomware attacks",
            "categories": [
                "Clop",
                "Raspberry Robin"
            ]
        },
        {
            "data_url": "https://www.prodaft.com/m/reports/TeslaGun_TLPWHITE.pdf",
            "date": "2022-09-06",
            "organization": "PRODAFT",
            "author": "PRODAFT",
            "title": "TA505 Group\u2019s TeslaGun In-Depth Analysis",
            "categories": [
                "Clop",
                "ServHelper"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/mandiant-red-team-emulates-fin11-tactics",
            "date": "2022-07-26",
            "organization": "Mandiant",
            "author": "Thibault van Geluwe de Berlaere",
            "title": "Mandiant Red Team Emulates FIN11 Tactics To Control Operational Technology Servers",
            "categories": [
                "Clop",
                "Industroyer",
                "MimiKatz",
                "Triton"
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
            "data_url": "https://www.bleepingcomputer.com/news/security/clop-ransomware-gang-is-back-hits-21-victims-in-a-single-month/",
            "date": "2022-05-28",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "Clop ransomware gang is back, hits 21 victims in a single month",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/ransomware-spotlight/ransomware-spotlight-clop",
            "date": "2022-02-22",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "Ransomware Spotlight: Clop",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_in/research/21/k/global-operations-lead-to-arrests-of-alleged-members-of-gandcrab.html",
            "date": "2021-11-16",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "Global Operations Lead to Arrests of Alleged Members of GandCrab/REvil and Cl0p Cartels",
            "categories": [
                "REvil",
                "Clop",
                "Gandcrab",
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
            "data_url": "https://www.advanced-intel.com/post/adversarial-perspective-advintel-breach-avoidance-through-monitoring-initial-vulnerabilities",
            "date": "2021-06-30",
            "organization": "Advanced Intelligence",
            "author": "Yelisey Boguslavskiy",
            "title": "Ransomware-&-CVE: Industry Insights Into Exclusive High-Value Target Adversarial Datasets",
            "categories": [
                "BlackKingdom Ransomware",
                "Clop",
                "dearcry",
                "Hades",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.boho.or.kr/filedownload.do?attach_file_seq=2808&attach_file_id=EpF2808.pdf",
            "date": "2021-06-25",
            "organization": "KrCert",
            "author": "Kayoung Kim",
            "title": "Attack patterns in AD environment",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.binance.com/en/blog/421499824684902240/Binance-Helps-Take-Down-Cybercriminal-Ring-Laundering-%24500M-in-Ransomware-Attacks",
            "date": "2021-06-24",
            "organization": "Binance",
            "author": "Binance",
            "title": "Binance Helps Take Down Cybercriminal Ring Laundering $500M in Ransomware Attacks",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.npu.gov.ua/news/kiberzlochini/kiberpolicziya-vikrila-xakerske-ugrupovannya-u-rozpovsyudzhenni-virusu-shifruvalnika-ta-nanesenni-inozemnim-kompaniyam-piv-milyarda-dolariv-zbitkiv/",
            "date": "2021-06-16",
            "organization": "\u041d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0457 \u043f\u043e\u043b\u0456\u0446\u0456\u0457 \u0423\u043a\u0440\u0430\u0457\u043d\u0438",
            "author": "\u041d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0430 \u043f\u043e\u043b\u0456\u0446\u0456\u044f \u0423\u043a\u0440\u0430\u0457\u043d\u0438",
            "title": "Cyberpolice exposes hacker group in spreading encryption virus and causing half a billion dollars in damage to foreign companies",
            "categories": [
                "Clop",
                "Cobalt Strike",
                "FlawedAmmyy"
            ]
        },
        {
            "data_url": "https://therecord.media/ukrainian-police-arrest-clop-ransomware-members-seize-server-infrastructure/",
            "date": "2021-06-16",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Ukrainian police arrest Clop ransomware members, seize server infrastructure",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=PqGaZgepNTE",
            "date": "2021-06-16",
            "organization": "Youtube (\u041d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0430 \u043f\u043e\u043b\u0456\u0446\u0456\u044f \u0423\u043a\u0440\u0430\u0457\u043d\u0438)",
            "author": "\u041d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0430 \u043f\u043e\u043b\u0456\u0446\u0456\u044f \u0423\u043a\u0440\u0430\u0457\u043d\u0438",
            "title": "\u041a\u0456\u0431\u0435\u0440\u043f\u043e\u043b\u0456\u0446\u0456\u044f \u0432\u0438\u043a\u0440\u0438\u043b\u0430 \u0445\u0430\u043a\u0435\u0440\u0441\u044c\u043a\u0435 \u0443\u0433\u0440\u0443\u043f\u043e\u0432\u0430\u043d\u043d\u044f \u0443 \u0440\u043e\u0437\u043f\u043e\u0432\u0441\u044e\u0434\u0436\u0435\u043d\u043d\u0456 \u0432\u0456\u0440\u0443\u0441\u0443-\u0448\u0438\u0444\u0440\u0443\u0432\u0430\u043b\u044c\u043d\u0438\u043a\u0430 (Clop operators)",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2021/06/ukrainian-police-nab-six-tied-to-clop-ransomware/",
            "date": "2021-06-16",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Ukrainian Police Nab Six Tied to CLOP Ransomware",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/ransomware-double-extortion-and-beyond-revil-clop-and-conti",
            "date": "2021-06-15",
            "organization": "Trend Micro",
            "author": "Janus Agcaoili",
            "title": "Ransomware Double Extortion and Beyond: REvil, Clop, and Conti",
            "categories": [
                "Clop",
                "Conti",
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
            "data_url": "https://www.splunk.com/en_us/blog/security/clop-ransomware-detection-threat-research-release-april-2021.html",
            "date": "2021-05-03",
            "organization": "splunk",
            "author": "Splunk Threat Research Team",
            "title": "Clop Ransomware Detection: Threat Research Release, April 2021",
            "categories": [
                "Clop"
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
            "data_url": "https://www.vice.com/en/article/wx5eyx/meet-the-ransomware-gang-behind-one-of-the-biggest-supply-chain-hacks-ever",
            "date": "2021-04-14",
            "organization": "Vice",
            "author": "Lorenzo Franceschi-Bicchierai",
            "title": "Meet The Ransomware Gang Behind One of the Biggest Supply Chain Hacks Ever",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/clop-ransomware/",
            "date": "2021-04-13",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Doel Santos",
            "title": "Threat Assessment: Clop Ransomware",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/detecting-clop-ransomware.html",
            "date": "2021-04-13",
            "organization": "splunk",
            "author": "Splunk Threat Research Team",
            "title": "Detecting Clop Ransomware",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/ransomware-gang-urges-victims-customers-to-demand-a-ransom-payment/",
            "date": "2021-03-26",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Ransomware gang urges victims\u2019 customers to demand a ransom payment",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.flashpoint-intel.com/blog/cl0p-and-revil-escalate-their-ransomware-tactics/",
            "date": "2021-03-11",
            "organization": "Flashpoint",
            "author": "Flashpoint",
            "title": "CL0P and REvil Escalate Their Ransomware Tactics",
            "categories": [
                "Clop",
                "REvil"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20210305181115/https://cisoclub.ru/doc/otchet-kompanii-group-ib-ransomware-uncovered-2020-2021/?bp-attachment=group-ib_ransomware_uncovered_2020-2021.pdf",
            "date": "2021-03",
            "organization": "Group-IB",
            "author": "Oleg Skulkin",
            "title": "Ransomware Uncovered 2020/2021",
            "categories": [
                "RansomEXX",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "IcedID",
                "Maze",
                "PwndLocker",
                "QakBot",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "SDBbot",
                "TrickBot",
                "Zloader"
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
            "data_url": "https://www.fireeye.com/blog/threat-research/2021/02/accellion-fta-exploited-for-data-theft-and-extortion.html",
            "date": "2021-02-22",
            "organization": "FireEye",
            "author": "Andrew Moore",
            "title": "Cyber Criminals Exploit Accellion FTA for Data Theft and Extortion",
            "categories": [
                "DEWMODE",
                "Clop"
            ]
        },
        {
            "data_url": "https://medium.com/s2wlab/operation-synctrek-e5013df8d167",
            "date": "2021-02-15",
            "organization": "Medium s2wlab",
            "author": "Sojun Ryu",
            "title": "Operation SyncTrek",
            "categories": [
                "AbaddonPOS",
                "Azorult",
                "Clop",
                "DoppelDridex",
                "DoppelPaymer",
                "Dridex",
                "PwndLocker"
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
            "data_url": "https://asec.ahnlab.com/en/19542/",
            "date": "2021-01-05",
            "organization": "AhnLab",
            "author": "AhnLab ASEC Analysis Team",
            "title": "[Threat Analysis] CLOP Ransomware that Attacked Korean Distribution Giant",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://twitter.com/darb0ng/status/1338692764121251840",
            "date": "2020-12-15",
            "organization": "Twitter (@darb0ng)",
            "author": "Minhee Lee",
            "title": "Tweet on Symrise group hit by Clop Ransomware",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/ransomware-gang-says-they-stole-2-million-credit-cards-from-e-land/",
            "date": "2020-12-03",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Ransomware gang says they stole 2 million credit cards from E-Land",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/wp-content/uploads/2021/01/Analysis_ReportCLOP_Ransomware.pdf",
            "date": "2020-12-02",
            "organization": "AhnLab",
            "author": "AhnLab ASEC Analysis Team",
            "title": "CLOP Ransomware Report",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.notion.so/S2W-LAB-Analysis-of-Clop-Ransomware-suspiciously-related-to-the-Recent-Incident-English-088056baf01242409a6e9f844f0c5f2e",
            "date": "2020-11-23",
            "organization": "S2W LAB Inc.",
            "author": "TALON",
            "title": "[S2W LAB] Analysis of Clop Ransomware suspiciously related to the Recent Incident",
            "categories": [
                "Clop"
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
            "data_url": "https://blog.fox-it.com/2020/11/16/ta505-a-brief-history-of-their-time/",
            "date": "2020-11-16",
            "organization": "Fox-IT",
            "author": "Antonis Terefos",
            "title": "TA505: A Brief History Of Their Time",
            "categories": [
                "Clop",
                "Get2",
                "SDBbot",
                "TA505"
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
            "data_url": "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Lageberichte/Lagebericht2020.pdf?__blob=publicationFile&v=2",
            "date": "2020-10-20",
            "organization": "Bundesamt f\u00fcr Sicherheit in der Informationstechnik",
            "author": "BSI",
            "title": "Die Lage der IT-Sicherheit in Deutschland 2020",
            "categories": [
                "Clop",
                "Emotet",
                "REvil",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/german-tech-giant-software-ag-down-after-ransomware-attack/",
            "date": "2020-10-08",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "German tech giant Software AG down after ransomware attack",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/eager-beaver-a-short-overview-of-the-restless-threat-actor-ta505-609546",
            "date": "2020-10-06",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "Eager Beaver: A Short Overview of the Restless Threat Actor TA505",
            "categories": [
                "Clop",
                "Get2",
                "SDBbot",
                "TA505"
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
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-009.pdf",
            "date": "2020-08-20",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "Development of the Activity of the TA505 Cybercriminal Group",
            "categories": [
                "AndroMut",
                "Bart",
                "Clop",
                "Dridex",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Locky",
                "Marap",
                "QuantLoader",
                "SDBbot",
                "ServHelper",
                "tRat",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://blog.sensecy.com/2020/08/20/global-ransomware-attacks-in-2020-the-top-4-vulnerabilities/",
            "date": "2020-08-20",
            "organization": "sensecy",
            "author": "cyberthreatinsider",
            "title": "Global Ransomware Attacks in 2020: The Top 4 Vulnerabilities",
            "categories": [
                "Clop",
                "Maze",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/financially-motivated-actors-are-expanding-access-into-ot",
            "date": "2020-07-15",
            "organization": "Mandiant",
            "author": "Nathan Brubaker",
            "title": "Financially Motivated Actors Are Expanding Access Into OT: Analysis of Kill Lists That Include OT Processes Used With Seven Malware Families",
            "categories": [
                "Clop",
                "DoppelPaymer",
                "LockerGoga",
                "Maze",
                "MegaCortex",
                "Nefilim",
                "Snake"
            ]
        },
        {
            "data_url": "https://www.hornetsecurity.com/en/security-information/clop-clop-ta505-html-malspam-analysis/",
            "date": "2020-07-07",
            "organization": "Hornetsecurity",
            "author": "Hornetsecurity Security Lab",
            "title": "Clop, Clop! It\u2019s a TA505 HTML malspam analysis",
            "categories": [
                "Clop",
                "Get2"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/indiabulls-group-hit-by-clop-ransomware-gets-24h-leak-deadline/",
            "date": "2020-06-22",
            "organization": "BleepingComputer",
            "author": "Lawrence Abrams",
            "title": "Indiabulls Group hit by CLOP Ransomware, gets 24h leak deadline",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-006.pdf",
            "date": "2020-06-22",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "\u00c9volution De Lactivit\u00e9 du Groupe Cybercriminel TA505",
            "categories": [
                "Amadey",
                "AndroMut",
                "Bart",
                "Clop",
                "Dridex",
                "FlawedGrace",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Jaff",
                "Locky",
                "Marap",
                "Philadephia Ransom",
                "QuantLoader",
                "Scarab Ransomware",
                "SDBbot",
                "ServHelper",
                "Silence",
                "tRat",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/cybersecurity-ta505-returns-with-a-new-bag-of-tricks-602104",
            "date": "2020-06-16",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "TA505 returns with a new bag of tricks",
            "categories": [
                "Clop",
                "Get2",
                "SDBbot",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/cybersecurity-ta505-s-box-of-chocolate-597672",
            "date": "2020-03-26",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "TA505's Box of Chocolate - On Hidden Gems packed with the TA505 Packer",
            "categories": [
                "Amadey",
                "Azorult",
                "Clop",
                "FlawedGrace",
                "Get2",
                "SDBbot",
                "Silence",
                "TinyMet",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/three-more-ransomware-families-create-sites-to-leak-stolen-data/",
            "date": "2020-03-24",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Three More Ransomware Families Create Sites to Leak Stolen Data",
            "categories": [
                "Clop",
                "DoppelPaymer",
                "Maze",
                "Nefilim",
                "Nemty",
                "REvil"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2020CrowdStrikeGlobalThreatReport.pdf",
            "date": "2020-03-04",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2020 CrowdStrike Global Threat Report",
            "categories": [
                "MESSAGETAP",
                "More_eggs",
                "8.t Dropper",
                "Anchor",
                "BabyShark",
                "BadNews",
                "Clop",
                "Cobalt Strike",
                "CobInt",
                "Cobra Carbon System",
                "Cutwail",
                "DanaBot",
                "Dharma",
                "DoppelDridex",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FlawedAmmyy",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "IcedID",
                "ISFB",
                "KerrDown",
                "LightNeuron",
                "LockerGoga",
                "Maze",
                "MECHANICAL",
                "Necurs",
                "Nokki",
                "Outlook Backdoor",
                "Phobos",
                "Predator The Thief",
                "QakBot",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SDBbot",
                "Skipper",
                "SmokeLoader",
                "TerraRecon",
                "TerraStealer",
                "TerraTV",
                "TinyLoader",
                "TrickBot",
                "Vidar",
                "Winnti",
                "ANTHROPOID SPIDER",
                "APT23",
                "APT31",
                "APT39",
                "APT40",
                "BlackTech",
                "BuhTrap",
                "Charming Kitten",
                "CLOCKWORK SPIDER",
                "DOPPEL SPIDER",
                "FIN7",
                "Gamaredon Group",
                "GOBLIN PANDA",
                "MONTY SPIDER",
                "MUSTANG PANDA",
                "NARWHAL SPIDER",
                "NOCTURNAL SPIDER",
                "PINCHY SPIDER",
                "SALTY SPIDER",
                "SCULLY SPIDER",
                "SMOKY SPIDER",
                "Thrip",
                "VENOM SPIDER",
                "VICEROY TIGER"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/breaking-ta505s-crypter-with-an-smt-solver/",
            "date": "2020-03-04",
            "organization": "SentinelOne",
            "author": "Jason Reaves",
            "title": "Breaking TA505\u2019s Crypter with an SMT Solver",
            "categories": [
                "Clop",
                "CryptoMix",
                "MINEBRIDGE"
            ]
        },
        {
            "data_url": "https://www.fsec.or.kr/common/proc/fsec/bbs/163/fileDownLoad/2297.do",
            "date": "2020-02-28",
            "organization": "Financial Security Institute",
            "author": "Financial Security Institute",
            "title": "Profiling of TA505 Threat Group That Continues to Attack the Financial Sector",
            "categories": [
                "Amadey",
                "Clop",
                "FlawedAmmyy",
                "Rapid Ransom",
                "SDBbot",
                "TinyMet"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/croatias-largest-petrol-station-chain-impacted-by-cyber-attack/",
            "date": "2020-02-20",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "Croatia's largest petrol station chain impacted by cyber-attack",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/ta505-hackers-behind-maastricht-university-ransomware-attack/",
            "date": "2020-02-07",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "TA505 Hackers Behind Maastricht University Ransomware Attack",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-001.pdf",
            "date": "2020-01-29",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "\u00c9tat de la menace ran\u00e7ongiciel",
            "categories": [
                "Clop",
                "Dharma",
                "FriedEx",
                "Gandcrab",
                "LockerGoga",
                "Maze",
                "MegaCortex",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SamSam"
            ]
        },
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/inside-of-cl0p-s-ransomware-operation-615824",
            "date": "2020-01-14",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "Inside of CL0P\u2019s ransomware operation",
            "categories": [
                "Clop",
                "Get2",
                "SDBbot"
            ]
        },
        {
            "data_url": "https://github.com/Tera0017/TAFOF-Unpacker",
            "date": "2020-01-13",
            "organization": "Github (Tera0017)",
            "author": "Tera0017",
            "title": "TAFOF Unpacker",
            "categories": [
                "Clop",
                "Get2",
                "Silence"
            ]
        },
        {
            "data_url": "https://github.com/albertzsigovits/malware-notes/blob/master/Ransomware/Clop.md",
            "date": "2020-01-07",
            "organization": "Github (albertzsigovits)",
            "author": "Albert Zsigovits",
            "title": "Clop ransomware Notes",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://github.com/albertzsigovits/malware-notes/blob/master/Clop.md",
            "date": "2020-01-07",
            "organization": "Github (albertzsigovits)",
            "author": "Albert Zsigovits",
            "title": "Clop ransomware Notes",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-tahoe",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD TAHOE",
            "categories": [
                "Clop",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "SDBbot",
                "ServHelper",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/cti/CERTFR-2019-CTI-009/",
            "date": "2019-11-22",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "RAPPORT MENACES ET INCIDENTS DU CERT-FR",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://actu.fr/normandie/rouen_76540/une-rancon-apres-cyberattaque-chu-rouen-ce-reclament-pirates_29475649.html",
            "date": "2019-11-19",
            "organization": "ACTU",
            "author": "R\u00e9daction Normandie",
            "title": "Une ran\u00e7on apr\u00e8s la cyberattaque au CHU de Rouen ? Ce que r\u00e9clament les pirates",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://securingtomorrow.mcafee.com/other-blogs/mcafee-labs/clop-ransomware/",
            "date": "2019-08-01",
            "organization": "McAfee",
            "author": "Alexandre Mundo",
            "title": "Clop Ransomware",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.carbonblack.com/blog/cb-tau-threat-intelligence-notification-cryptomix-clop-ransomware-disables-startup-repair-removes-edits-shadow-volume-copies/",
            "date": "2019-03-28",
            "organization": "Carbon Black",
            "author": "CB TAU Threat Intelligence",
            "title": "CryptoMix Clop Ransomware Disables Startup Repair, Removes & Edits Shadow Volume Copies",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/cryptomix-clop-ransomware-says-its-targeting-networks-not-computers/",
            "date": "2019-03-05",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "CryptoMix Clop Ransomware Says It's Targeting Networks, Not Computers",
            "categories": [
                "Clop"
            ]
        },
        {
            "data_url": "https://medium.com/@Sebdraven/unpacking-clop-416b83718e0f",
            "date": "2019-02-02",
            "organization": "Medium Sebdraven",
            "author": "S\u00e9bastien Larinier",
            "title": "Unpacking Clop",
            "categories": [
                "Clop"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "clop",
            "procedure_code": "s0611",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0611",
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
                    "procedure_description": "clop can use cmd.exe to help execute commands on the system.[73]"
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
                    "procedure_description": "clop has used built-in api functions such as wnetopenenumw(), wnetenumresourcew(), wnetcloseenum(), getprocaddress(), and virtualalloc().[54][55]"
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
                    "procedure_description": "clop has used a simple xor operation to decrypt strings.[55]"
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
                    "procedure_description": "clop can uninstall or disable security products.[22]"
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
                    "procedure_description": "clop can make modifications to registry keys.[37]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/002",
                    "technique_name": "obfuscated files or information : software packing",
                    "technique_description": "adversaries may perform software packing or virtual machine software protection to conceal their code. software packing is a method of compressing or encrypting an executable. packing an executable changes the file signature in an attempt to avoid signature-based detection. most decompression techniques decompress the executable code in memory. virtual machine software protection translates an executable's original code into a special format that only a special virtual machine can run. a virtual machine is then called to run this code.",
                    "procedure_description": "clop has been packed to help avoid detection.[23][24]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "clop can use code signing to evade detection.[19]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/007",
                    "technique_name": "system binary proxy execution : msiexec",
                    "technique_description": "adversaries may abuse msiexec.exe to proxy execution of malicious payloads. msiexec.exe is the command-line utility for the windows installer and is thus commonly associated with executing installation packages (.msi). the msiexec.exe binary may also be digitally signed by microsoft.",
                    "procedure_description": "clop can use msiexec.exe to disable security tools on the system.[7]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "clop has used the sleep command to avoid sandbox detection.[17]"
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
                    "procedure_description": "clop has searched folders and subfolders for files to encrypt.[78]"
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
                    "procedure_description": "clop can enumerate network shares.[21]"
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
                    "procedure_description": "clop can enumerate all processes on the victim's machine.[60]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1518/001",
                    "technique_name": "software discovery : security software discovery",
                    "technique_description": "adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. this may include things such as firewall rules and anti-virus. adversaries may use the information from security software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "clop can search for processes with antivirus and antimalware product names.[19][20]"
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
                    "procedure_description": "clop has checked the keyboard language using the getkeyboardlayout() function to avoid installation on russian-language or other commonwealth of independent states-language machines; it will also check the gettextcharset function.[8]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "clop has used the sleep command to avoid sandbox detection.[17]"
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
                    "procedure_description": "clop can encrypt files using aes, rsa, and rc4 and will add the \".clop\" extension to encrypted files.[33][34][35]"
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
                    "procedure_description": "clop can delete the shadow volumes with vssadmin delete shadows /all /quiet and can use bcdedit to disable recovery options.[22]"
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
                    "procedure_description": "clop can kill several processes and services related to backups and security solutions.[11][12]"
                }
            ]
        }
    ]
};