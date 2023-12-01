var threatdata = {
    "name": "Cutwail",
    "alias": "Cutwail, Pushdo",
    "category": "Malware",
    "type": "Botnet, Downloader",
    "modified": "2022-02-08",
    "all_data": {
        "tool": "Cutwail",
        "names": [
            {
                "name": "Cutwail"
            },
            {
                "name": "Pushdo"
            }
        ],
        "description": "Pushdo is usually classified as a 'downloader' trojan - meaning its true purpose is to download and install additional malicious software. There are dozens of downloader trojan families out there, but Pushdo is actually more sophisticated than most, but that sophistication lies in the Pushdo control server rather than the trojan.",
        "category": "Malware",
        "type": [
            "Botnet",
            "Downloader"
        ],
        "information": [
            "https://www.blueliv.com/research/tracking-the-footproints-of-pushdo-trojan/",
            "https://www.trendmicro.de/cloud-content/us/pdfs/business/white-papers/wp_study-of-pushdo-cutwail-botnet.pdf",
            "https://www.secureworks.com/research/pushdo",
            "http://malware-traffic-analysis.net/2017/04/03/index2.html",
            "https://securityintelligence.com/posts/dridex-campaign-propelled-by-cutwail-botnet-and-powershell/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cutwail",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pushdo"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:cutwail"
        ],
        "uuid": "bfadc267-6096-4807-aa1d-2f048fe81a8f",
        "last-card-change": "2021-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Cutwail",
            "malware_alias": null,
            "malware": "win.cutwail",
            "last_update": "2022-11-10 11:06:37",
            "tags": [
                "Cutwail",
                "maldoc",
                "cutwail"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "a7c46f5427a76c8e4338ea9fdf0056c8",
                        "timestamp": "2022-11-10 11:06:37"
                    },
                    {
                        "value": "83abd103d768757014043bc25a2e73ab",
                        "timestamp": "2022-11-02 10:45:48"
                    },
                    {
                        "value": "4e52c38e4a7aa11b53b1432f66383a5f",
                        "timestamp": "2022-08-18 10:10:55"
                    },
                    {
                        "value": "eae2fa763b7c00ca4b7d5f57c5d3ea0d",
                        "timestamp": "2022-08-03 11:44:25"
                    },
                    {
                        "value": "9737703391db4a58cead1e1525719cb0",
                        "timestamp": "2022-07-20 10:23:10"
                    },
                    {
                        "value": "19dba59c1cd8667fd8ede1e0ef7a2e71",
                        "timestamp": "2022-07-16 21:54:08"
                    },
                    {
                        "value": "18625572bfa5c43e880823c53bed502c",
                        "timestamp": "2022-06-29 09:28:33"
                    },
                    {
                        "value": "cf850d35ca73d2f7565ff71628c1b620",
                        "timestamp": "2022-06-14 11:10:27"
                    },
                    {
                        "value": "c8cd88ef38e0c74a74e255df1cfb35ab",
                        "timestamp": "2022-06-07 13:40:19"
                    },
                    {
                        "value": "14542a3509c7fbc2888a5962ee69e07c",
                        "timestamp": "2022-03-22 09:59:08"
                    },
                    {
                        "value": "44bbbdac3334b73c0f8773202d36cc60",
                        "timestamp": "2022-02-01 13:27:32"
                    },
                    {
                        "value": "ac50c89f3656c1386a6c43ca01a6156d",
                        "timestamp": "2022-01-26 09:28:28"
                    },
                    {
                        "value": "4e8ec74a93b831a92a1b016722e79365",
                        "timestamp": "2022-01-24 09:56:29"
                    },
                    {
                        "value": "4cacbcdb4b03ddc0f1af39b11acbda32",
                        "timestamp": "2021-05-19 19:40:01"
                    },
                    {
                        "value": "38eee9f09cc38dad8af2cff7e9be0db2",
                        "timestamp": "2021-04-07 09:02:28"
                    },
                    {
                        "value": "47f7006dc586d532962011c15595100c",
                        "timestamp": "2021-03-28 09:10:48"
                    }
                ],
                "domain": [
                    {
                        "value": "dokpio.com",
                        "timestamp": "2022-07-25 13:31:52"
                    },
                    {
                        "value": "investprides.com",
                        "timestamp": "2022-06-20 13:34:29"
                    },
                    {
                        "value": "managmentoria.com",
                        "timestamp": "2022-05-10 14:23:35"
                    },
                    {
                        "value": "euconsalting.com",
                        "timestamp": "2022-02-07 14:38:30"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-11-10 11:06:37",
    "file_name": "cutwail",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://darknetdiaries.com/episode/110/",
            "date": "2022-02-08",
            "organization": "DARKNET DIARIES",
            "author": "DARKNET DIARIES",
            "title": "EP 110: Spam Botnets",
            "categories": [
                "Cutwail",
                "Rustock"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/dridex-campaign-propelled-by-cutwail-botnet-and-powershell/",
            "date": "2021-03-11",
            "organization": "IBM",
            "author": "Dave McMillen",
            "title": "Dridex Campaign Propelled by Cutwail Botnet and Poisonous PowerShell Scripts",
            "categories": [
                "Cutwail",
                "Dridex"
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
            "data_url": "https://www.mimecast.com/blog/how-to-slam-a-door-on-the-cutwail-botnet-enforce-dmarc/",
            "date": "2021-01-06",
            "organization": "Mimecast",
            "author": "Matthew Gardiner",
            "title": "How to Slam a Door on the Cutwail Botnet: Enforce DMARC",
            "categories": [
                "Cutwail"
            ]
        },
        {
            "data_url": "https://github.com/pan-unit42/tweets/blob/master/2020-09-07-Dridex-IOCs.txt",
            "date": "2020-09-07",
            "organization": "Github (pan-unit42)",
            "author": "Brad Duncan",
            "title": "Collection of recent Dridex IOCs",
            "categories": [
                "Cutwail",
                "Dridex"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-008.pdf",
            "date": "2020-07-17",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "The Malware Dridex: Origins and Uses",
            "categories": [
                "Andromeda",
                "CryptoLocker",
                "Cutwail",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FriedEx",
                "Gameover P2P",
                "Gandcrab",
                "ISFB",
                "Murofet",
                "Necurs",
                "Predator The Thief",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.shadowserver.org/news/has-the-sun-set-on-the-necurs-botnet/",
            "date": "2020-03-15",
            "organization": "The Shadowserver Foundation",
            "author": "Shadowserver Foundation",
            "title": "Has The Sun Set On The Necurs Botnet?",
            "categories": [
                "Andromeda",
                "Cutwail",
                "Kelihos",
                "Necurs",
                "Pushdo"
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
            "data_url": "https://jsac.jpcert.or.jp/archive/2020/pdf/JSAC2020_5_sajo-takeda-niwa_en.pdf",
            "date": "2020-01-17",
            "organization": "",
            "author": "Ken Sajo",
            "title": "Battle Against Ursnif Malspam Campaign targeting Japan",
            "categories": [
                "Cutwail",
                "ISFB",
                "TrickBot",
                "UrlZone"
            ]
        },
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/gold-essex",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD ESSEX",
            "categories": [
                "Cutwail",
                "Pony",
                "Pushdo",
                "NARWHAL SPIDER"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/evolution-of-malware-sandbox-evasion-tactics-a-retrospective-study/",
            "date": "2019-09-09",
            "organization": "McAfee",
            "author": "Thomas Roccia",
            "title": "Evolution of Malware Sandbox Evasion Tactics \u2013 A Retrospective Study",
            "categories": [
                "Cutwail",
                "Dridex",
                "Dyre",
                "Kovter",
                "Locky",
                "Phorpiex",
                "Simda"
            ]
        },
        {
            "data_url": "http://malware-traffic-analysis.net/2017/04/03/index2.html",
            "date": "2017-04-03",
            "organization": "Malware Traffic Analysis",
            "author": "Brad Duncan",
            "title": "DHL Invoice Malspam/Photo Malspam",
            "categories": [
                "Pushdo"
            ]
        },
        {
            "data_url": "https://www.blueliv.com/research/tracking-the-footproints-of-pushdo-trojan/",
            "date": "2016-02-01",
            "organization": "Blueliv",
            "author": "Raashid Bhat",
            "title": "Tracking the footprints of PushDo Trojan",
            "categories": [
                "Pushdo"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20160616170611/https://media.blackhat.com/bh-eu-10/presentations/Carrera_Silberman/BlackHat-EU-2010-Carrera-Silberman-State-of-Malware-slides.pdf",
            "date": "2010",
            "organization": "Mandiant",
            "author": "Ero Carrera",
            "title": "State of Malware: Family Ties",
            "categories": [
                "Bredolab",
                "Conficker",
                "Cutwail",
                "KoobFace",
                "Oderoor",
                "Poison Ivy",
                "Rustock",
                "Sinowal",
                "Szribi",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.trendmicro.de/cloud-content/us/pdfs/business/white-papers/wp_study-of-pushdo-cutwail-botnet.pdf",
            "date": "2009-05-22",
            "organization": "Trend Micro",
            "author": "Alice Decker",
            "title": "Pushdo / Cutwail Botnet",
            "categories": [
                "Pushdo"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/pushdo",
            "date": "2007-12-16",
            "organization": "Secureworks",
            "author": "Joe Stewart",
            "title": "Pushdo - Analysis of a Modern Malware Distribution System",
            "categories": [
                "Pushdo"
            ]
        }
    ],
    "mitre": []
};