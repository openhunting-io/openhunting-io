var threatdata = {
    "name": "Zeus",
    "alias": "Zeus, ZeuS, Zbot, Trojan.Zbot, Wsnpoem, Gorhax, Kneber",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Credential stealer, Downloader, Botnet",
    "modified": "2023-03-14",
    "all_data": {
        "tool": "Zeus",
        "names": [
            {
                "name": "Zeus"
            },
            {
                "name": "ZeuS"
            },
            {
                "name": "Zbot"
            },
            {
                "name": "Trojan.Zbot"
            },
            {
                "name": "Wsnpoem"
            },
            {
                "name": "Gorhax"
            },
            {
                "name": "Kneber"
            }
        ],
        "description": "(Talos) One of the most high-profile pieces of malware in the current threat landscape is Zeus/Zbot, a nasty little trojan that has been employed by botnet operators around the world to steal banking credentials and other personal data, participate in click-fraud schemes, and likely numerous other criminal enterprises. It is the engine behind notorious botnets such as Kneber, which has recently made headlines worldwide. The following is an analysis of the network traffic generated by machines that Talos intentionally infected with known Zeus samples, in order to study post-infection behavior. The machines were all base installations of Windows XP, Service Pack 2, with no patches - i.e., designed to be as vulnerable as possible.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Credential stealer",
            "Downloader",
            "Botnet"
        ],
        "information": [
            "https://talosintelligence.com/zeus_trojan",
            "https://usa.kaspersky.com/resource-center/threats/zeus-virus",
            "http://malwareint.blogspot.com/2010/02/facebook-phishing-campaign-proposed-by.html",
            "http://malwareint.blogspot.com/2010/02/zeus-on-irs-scam-remains-actively.html",
            "http://eternal-todo.com/blog/new-zeus-binary",
            "https://nakedsecurity.sophos.com/2010/07/24/sample-run/",
            "https://www.mnin.org/write/ZeusMalware.pdf",
            "http://malwareint.blogspot.com/2010/01/leveraging-zeus-to-send-spam-through.html",
            "http://eternal-todo.com/blog/zeus-spreading-facebook",
            "http://malwareint.blogspot.com/2010/03/new-phishing-campaign-against-facebook.html",
            "http://eternal-todo.com/blog/detecting-zeus",
            "https://www.secureworks.com/research/zeus?threat=zeus",
            "http://malwareint.blogspot.com/2009/07/special-zeus-botnet-for-dummies.html",
            "https://en.wikipedia.org/wiki/Zeus_(malware)",
            "https://blog.malwarebytes.com/101/2021/07/the-life-and-death-of-the-zeus-trojan/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.zeus"
        ],
        "uuid": "f186f5ea-0a67-47ff-affc-41f34e62725e",
        "last-card-change": "2021-08-09",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Zeus",
            "malware_alias": "Zbot",
            "malware": "win.zeus",
            "last_update": "2021-10-07 10:27:34",
            "tags": [
                "zeus",
                "Zeus"
            ],
            "ioc": {
                "sha1_hash": [
                    {
                        "value": "f375401470491a8f56b2ceb26b6a1d3ea84d8bd3",
                        "timestamp": "2021-10-07 10:27:34"
                    },
                    {
                        "value": "1c1596effa695ca855a914eb5caa9ff479d149e6",
                        "timestamp": "2021-09-13 09:11:23"
                    },
                    {
                        "value": "44749f36afabe3b8785914be193cdb0e44196c54",
                        "timestamp": "2021-09-13 09:04:11"
                    }
                ],
                "sha3_384_hash": [
                    {
                        "value": "beb6b598121ac19fb2465b147c1eb373d707e2a395ed0d2f871fdacfda82547cc3f15251c1113dc0c924cbc189193b2b",
                        "timestamp": "2021-10-07 10:27:14"
                    },
                    {
                        "value": "791f9f79459d1ab4910b1013cc2c3844af26641a6aa9695085d1dce7f25f9740e853803158b4b8cbf4267697daacdfc7",
                        "timestamp": "2021-09-13 09:10:56"
                    },
                    {
                        "value": "255c7a5603bb18b9351efa42324f071e78e8303a0258875b48f0e5bce5f740a237b11cdda80c056ae9fa14e1a1d29b32",
                        "timestamp": "2021-09-13 09:04:40"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "ea30c0dc58f71a1720990021fda92d1e",
                        "timestamp": "2021-10-07 10:26:54"
                    },
                    {
                        "value": "5aff39b9d705974f87f58b420416b5fc",
                        "timestamp": "2021-09-13 09:10:10"
                    },
                    {
                        "value": "a6f3e35760bc2848cd258b786c1fd247",
                        "timestamp": "2021-09-13 09:03:37"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "a6512b5271bc6e383ec6e3141ebb91b92a8a76a5f1d532ee6e185a253dc20830",
                        "timestamp": "2021-10-07 10:26:31"
                    },
                    {
                        "value": "26cf98ecf5aded7945370a870d158447895b2bdd2a4b1e34c082130e4119be44",
                        "timestamp": "2021-09-13 09:10:34"
                    },
                    {
                        "value": "043f535f68678652c50ff49cf03ee4b63fdbd03b76c732adfe83074335fbbb3b",
                        "timestamp": "2021-09-13 09:05:25"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-10-07 10:27:34",
    "file_name": "zeus",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.crowdstrike.com/cybersecurity-101/malware/trojan-zeus-malware",
            "date": "2023-03-14",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "The Zeus Trojan Malware - Definition and Prevention",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/banking-trojan-techniques/",
            "date": "2022-10-31",
            "organization": "paloalto Netoworks: Unit42",
            "author": "Or Chechik",
            "title": "Banking Trojan Techniques: How Financially Motivated Malware Became Infrastructure",
            "categories": [
                "Dridex",
                "Kronos",
                "TrickBot",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.cisecurity.org/insights/blog/top-10-malware-march-2022",
            "date": "2022-04-15",
            "organization": "Center for Internet Security",
            "author": "CIS",
            "title": "Top 10 Malware March 2022",
            "categories": [
                "Mirai",
                "Shlayer",
                "Agent Tesla",
                "Ghost RAT",
                "Nanocore RAT",
                "SectopRAT",
                "solarmarker",
                "Zeus"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/02/threat-roundup-0204-0211.html",
            "date": "2022-02-11",
            "organization": "Cisco Talos",
            "author": "Talos",
            "title": "Threat Roundup for February 4 to February 11",
            "categories": [
                "DarkComet",
                "Ghost RAT",
                "Loki Password Stealer (PWS)",
                "Tinba",
                "Tofsee",
                "Zeus"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2021-0909.pdf",
            "date": "2021-09-09",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Dark Covenant: Connections Between the Russian State and Criminal Actors",
            "categories": [
                "BlackEnergy",
                "EternalPetya",
                "Gameover P2P",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/21/i/ssl-tls-technical-brief/ssl-tls-technical-brief.pdf",
            "date": "2021-09-03",
            "organization": "Trend Micro",
            "author": "Mohamad Mokbel",
            "title": "The State of SSL/TLS Certificate Usage in  Malware C&C Communications",
            "categories": [
                "AdWind",
                "ostap",
                "AsyncRAT",
                "BazarBackdoor",
                "BitRAT",
                "Buer",
                "Chthonic",
                "CloudEyE",
                "Cobalt Strike",
                "DCRat",
                "Dridex",
                "FindPOS",
                "GootKit",
                "Gozi",
                "IcedID",
                "ISFB",
                "Nanocore RAT",
                "Orcus RAT",
                "PandaBanker",
                "Qadars",
                "QakBot",
                "Quasar RAT",
                "Rockloader",
                "ServHelper",
                "Shifu",
                "SManager",
                "TorrentLocker",
                "TrickBot",
                "Vawtrak",
                "Zeus",
                "Zloader"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/101/2021/07/the-life-and-death-of-the-zeus-trojan/",
            "date": "2021-07-21",
            "organization": "Malwarebytes",
            "author": "Malwarebytes",
            "title": "The life and death of the ZeuS Trojan",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.kryptoslogic.com/blog/2021/07/trickbot-and-zeus/",
            "date": "2021-07-01",
            "organization": "Kryptos Logic",
            "author": "Kryptos Logic Vantage Team",
            "title": "TrickBot and Zeus",
            "categories": [
                "TrickBot",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.justice.gov/opa/pr/four-individuals-plead-guilty-rico-conspiracy-involving-bulletproof-hosting-cybercriminals",
            "date": "2021-05-07",
            "organization": "Department of Justice",
            "author": "Office of Public Affairs",
            "title": "Four Individuals Plead Guilty to RICO Conspiracy Involving \u201cBulletproof Hosting\u201d for Cybercriminals",
            "categories": [
                "Citadel",
                "SpyEye",
                "Zeus"
            ]
        },
        {
            "data_url": "https://securelist.com/financial-cyberthreats-in-2020/101638/",
            "date": "2021-03-31",
            "organization": "Kaspersky",
            "author": "Kaspersky",
            "title": "Financial Cyberthreats in 2020",
            "categories": [
                "BetaBot",
                "DanaBot",
                "Emotet",
                "Gozi",
                "Ramnit",
                "RTM",
                "SpyEye",
                "TrickBot",
                "Zeus"
            ]
        },
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/gold-evergreen",
            "date": "2021",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "Threat Profile: GOLD EVERGREEN",
            "categories": [
                "CryptoLocker",
                "Pony",
                "Zeus",
                "GOLD EVERGREEN"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa20-345a",
            "date": "2020-12-10",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Alert (AA20-345A): Cyber Actors Target K-12 Distance Learning Education to Cause Disruptions and Steal Data",
            "categories": [
                "PerlBot",
                "Shlayer",
                "Agent Tesla",
                "Cerber",
                "Dridex",
                "Ghost RAT",
                "Kovter",
                "Maze",
                "MedusaLocker",
                "Nanocore RAT",
                "Nefilim",
                "REvil",
                "Ryuk",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.f5.com/labs/articles/education/banking-trojans-a-reference-guide-to-the-malware-family-tree",
            "date": "2020-08-09",
            "organization": "F5 Labs",
            "author": "Remi Cohen",
            "title": "Banking Trojans: A Reference Guide to the Malware Family Tree",
            "categories": [
                "BackSwap",
                "Carberp",
                "Citadel",
                "DanaBot",
                "Dridex",
                "Dyre",
                "Emotet",
                "Gozi",
                "Kronos",
                "PandaBanker",
                "Ramnit",
                "Shylock",
                "SpyEye",
                "Tinba",
                "TrickBot",
                "Vawtrak",
                "Zeus"
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
            "data_url": "https://www.youtube.com/watch?v=LUxOcpIRxmg",
            "date": "2020-02-25",
            "organization": "RSA Conference",
            "author": "Joel DeCapua",
            "title": "Feds Fighting Ransomware: How the FBI Investigates and How You Can Help",
            "categories": [
                "FastCash",
                "Cerber",
                "Defray",
                "Dharma",
                "FriedEx",
                "Gandcrab",
                "GlobeImposter",
                "Mamba",
                "Phobos",
                "Rapid Ransom",
                "REvil",
                "Ryuk",
                "SamSam",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-evergreen",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD EVERGREEN",
            "categories": [
                "CryptoLocker",
                "Pony",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-woodland",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE WOODLAND",
            "categories": [
                "PlugX",
                "Zeus",
                "Roaming Tiger"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2019/12/inside-evil-corp-a-100m-cybercrime-menace/",
            "date": "2019-12-19",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Inside \u2018Evil Corp,\u2019 a $100M Cybercrime Menace",
            "categories": [
                "Dridex",
                "Gameover P2P",
                "Zeus",
                "Evil Corp"
            ]
        },
        {
            "data_url": "https://www.anomali.com/files/white-papers/russian-federation-country-profile.pdf",
            "date": "2017-11-02",
            "organization": "Anomali",
            "author": "Anomali",
            "title": "Country Profile: Russian Federation",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/evolution-of-the-gold-evergreen-threat-group",
            "date": "2017-05-15",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Evolution of the GOLD EVERGREEN Threat Group",
            "categories": [
                "CryptoLocker",
                "Dridex",
                "Dyre",
                "Gameover P2P",
                "Murofet",
                "TrickBot",
                "Zeus",
                "GOLD EVERGREEN"
            ]
        },
        {
            "data_url": "https://www.wired.com/2017/03/russian-hacker-spy-botnet/",
            "date": "2017-03-21",
            "organization": "Wired",
            "author": "Garrett M. Graff",
            "title": "Inside the Hunt  for Russia\u2019s Most  Notorious Hacker",
            "categories": [
                "Gameover P2P",
                "Murofet",
                "Zeus"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/kivars-with-venom-targeted-attacks-upgrade-with-64-bit-support/",
            "date": "2014-07-02",
            "organization": "Trend Micro",
            "author": "Kervin Alintanahin",
            "title": "KIVARS With Venom: Targeted Attacks Upgrade with 64-bit \u201cSupport\u201d",
            "categories": [
                "FakeWord",
                "KIVARS",
                "PLEAD",
                "Poison RAT",
                "Zeus"
            ]
        },
        {
            "data_url": "http://contagiodump.blogspot.com/2012/12/dec-2012-linuxchapro-trojan-apache.html",
            "date": "2012-12-24",
            "organization": "Contagio Dump",
            "author": "Mila Parkour",
            "title": "Dec 2012 Linux.Chapro -  trojan Apache iframer",
            "categories": [
                "Chapro",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.s21sec.com/en/zeus-the-missing-link/",
            "date": "2010-09-07",
            "organization": "S21sec",
            "author": "Mikel Gastesi",
            "title": "ZeuS: The missing link",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "http://contagiodump.blogspot.com/2010/07/zeus-trojan-research-links.html",
            "date": "2010-08-01",
            "organization": "Contagio Dump",
            "author": "Mila Parkour",
            "title": "Zeus Trojan Research Links",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "https://nakedsecurity.sophos.com/2010/07/24/sample-run/",
            "date": "2010-07-24",
            "organization": "Sophos",
            "author": "James Wyke",
            "title": "Why won\u2019t my sample run?",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "http://contagiodump.blogspot.com/2010/07/zeus-version-scheme-by-trojan-author.html",
            "date": "2010-07-14",
            "organization": "Contagiodump Blog",
            "author": "Mila Parkour",
            "title": "ZeuS Version scheme by the trojan author",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/brief-look-zeuszbot-20",
            "date": "2010-05-03",
            "organization": "Symantec",
            "author": "Karthik Selvaraj",
            "title": "A Brief Look at Zeus/Zbot 2.0",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/spyeye-s-kill-zeus-bark-worse-its-bite",
            "date": "2010-04-26",
            "organization": "Symantec",
            "author": "Peter Coogan",
            "title": "SpyEye\u2019s \"Kill Zeus\" Bark is Worse Than its Bite",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "http://malwareint.blogspot.com/2010/02/zeus-on-irs-scam-remains-actively.html",
            "date": "2010-04-19",
            "organization": "MalwareIntelligence",
            "author": "Jorge Mieres",
            "title": "ZeuS on IRS Scam remains actively exploited",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "http://malwareint.blogspot.com/2010/03/new-phishing-campaign-against-facebook.html",
            "date": "2010-03-15",
            "organization": "MalwareIntelligence",
            "author": "MalwareIntelligence",
            "title": "New phishing campaign against Facebook led by Zeus",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/zeus?threat=zeus",
            "date": "2010-03-10",
            "organization": "Secureworks",
            "author": "Kevin Stevens",
            "title": "ZeuS Banking Trojan Report",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "http://malwareint.blogspot.com/2010/02/facebook-phishing-campaign-proposed-by.html",
            "date": "2010-02-20",
            "organization": "MalwareIntelligence",
            "author": "Jorge Mieres",
            "title": "Facebook & VISA phishing campaign proposed by ZeuS",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "http://eternal-todo.com/blog/zeus-spreading-facebook",
            "date": "2010-02-02",
            "organization": "EternalTODO Blog",
            "author": "Jose Miguel Esparza",
            "title": "ZeuS spreading via Facebook",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "http://malwareint.blogspot.com/2010/01/leveraging-zeus-to-send-spam-through.html",
            "date": "2010-01-25",
            "organization": "",
            "author": "Ernesto Martin",
            "title": "Leveraging ZeuS to send spam through social networks",
            "categories": [
                "Zeus"
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
            "data_url": "http://eternal-todo.com/blog/new-zeus-binary",
            "date": "2009-11-06",
            "organization": "Eternal Todo",
            "author": "Jose Miguel Esparza",
            "title": "New ZeuS binary",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "http://eternal-todo.com/blog/detecting-zeus",
            "date": "2009-10-01",
            "organization": "Eternal Todo",
            "author": "Jose Miguel Esparza",
            "title": "Detecting ZeuS",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "http://malwareint.blogspot.com/2009/07/special-zeus-botnet-for-dummies.html",
            "date": "2009-07-11",
            "organization": "MalwareIntelligence",
            "author": "MalwareIntelligence",
            "title": "Special!!! ZeuS Botnet for Dummies",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/zeus_king_of_bots.pdf",
            "date": "2009",
            "organization": "Symantec",
            "author": "Nicolas Falliere",
            "title": "Zeus: King of the Bots",
            "categories": [
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.mnin.org/write/ZeusMalware.pdf",
            "date": "2006-11-13",
            "organization": "Secure Science Corporation",
            "author": "Micael Ligh",
            "title": "Malware Case Study - ZeusMalware",
            "categories": [
                "Zeus"
            ]
        }
    ],
    "mitre": []
};