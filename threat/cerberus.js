var threatdata = {
    "name": "Cerberus",
    "alias": "Cerberus",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Credential stealer, Botnet",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Cerberus",
        "names": [
            {
                "name": "Cerberus"
            }
        ],
        "description": "(ThreatFabric) After the user grants the requested privilege, Cerberus starts to abuse it by granting itself additional permissions, such as permissions needed to send messages and make calls, without requiring any user interaction. It also disables Play Protect (Google's preinstalled antivirus solution) to prevent its discovery and deletion in the future. After conveniently granting itself additional privileges and securing its persistence on the device, Cerberus registers the infected device in the botnet and waits for commands from the C2 server while also being ready to perform overlay attacks.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.threatfabric.com/blogs/cerberus-a-new-banking-trojan-from-the-underworld.html",
            "https://www.mcafee.com/blogs/consumer/consumer-threat-notices/cerberus-banking-trojan/",
            "https://threatpost.com/cerberus-android-malware-rental/147280/",
            "https://threatpost.com/cerberus-trojan-major-spyware-targeted-attack/155415/",
            "https://securityintelligence.com/news/cerberus-android-malware-gains-ability-to-steal-2fa-tokens-screen-lock-credentials/",
            "https://malware.wikia.org/wiki/Cerberus_(Banker)",
            "https://www.bleepingcomputer.com/news/security/cerberus-android-malware-source-code-offered-for-sale-for-100-000/",
            "https://www.zdnet.com/article/cerberus-banking-trojan-source-code-released-for-free-to-cyberattackers/",
            "https://www.bankinfosecurity.com/attacks-using-cerberus-banking-trojan-surge-a-15025",
            "https://www.threatfabric.com/blogs/alien_the_story_of_cerberus_demise.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0480/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.cerberus"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:cerberus"
        ],
        "uuid": "eafc48e5-6613-4d2d-aa69-0596a6d1f4d8",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Cerberus",
            "malware_alias": null,
            "malware": "apk.cerberus",
            "last_update": "2023-09-15 06:16:17",
            "tags": [
                "Android",
                "iran",
                "apk",
                "cerberus",
                "Cerberus"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://tham1pheac.store",
                        "timestamp": "2023-09-15 06:16:17"
                    }
                ],
                "domain": [
                    {
                        "value": "2eupn46nkraaexi.gq",
                        "timestamp": "2022-11-16 06:33:59"
                    },
                    {
                        "value": "4h4zhra3dhjtjhg.gq",
                        "timestamp": "2022-11-16 06:33:59"
                    },
                    {
                        "value": "7xpjeyf5rz8y6g6.gq",
                        "timestamp": "2022-11-16 06:33:59"
                    },
                    {
                        "value": "v3avcsvhztgvdxe.gq",
                        "timestamp": "2022-11-16 06:33:59"
                    },
                    {
                        "value": "j66t2i59ns2dotp.gq",
                        "timestamp": "2022-11-02 20:11:48"
                    },
                    {
                        "value": "96hfnoofmhunevc.gq",
                        "timestamp": "2022-11-02 20:11:47"
                    },
                    {
                        "value": "cjkj5ivhqjh8ut8.gq",
                        "timestamp": "2022-11-02 20:11:47"
                    },
                    {
                        "value": "tqtktnb6yi67yxy.gq",
                        "timestamp": "2022-10-18 06:04:28"
                    },
                    {
                        "value": "tj9cn3zp5crfqxx.gq",
                        "timestamp": "2022-10-18 06:04:26"
                    },
                    {
                        "value": "enbfb6k96sxik4a.gq",
                        "timestamp": "2022-10-18 06:04:23"
                    },
                    {
                        "value": "2otxkxmd23rrxxr.gq",
                        "timestamp": "2022-10-04 15:23:45"
                    },
                    {
                        "value": "8bku86hff8jiqhf.gq",
                        "timestamp": "2022-10-04 15:23:45"
                    },
                    {
                        "value": "androidapi429.cf",
                        "timestamp": "2022-10-04 15:23:45"
                    },
                    {
                        "value": "c84yd7iszpqtacd.gq",
                        "timestamp": "2022-10-04 15:23:45"
                    },
                    {
                        "value": "kv24aksxcgzqm9c.gq",
                        "timestamp": "2022-10-04 15:23:45"
                    },
                    {
                        "value": "px64mcpp9bdv6jc.gq",
                        "timestamp": "2022-10-04 15:23:45"
                    },
                    {
                        "value": "u6xgvpva2qhqcgz.gq",
                        "timestamp": "2022-10-04 15:23:45"
                    },
                    {
                        "value": "xvtimr62f9bviap.gq",
                        "timestamp": "2022-10-04 15:23:45"
                    },
                    {
                        "value": "yp78t3biphda7ag.gq",
                        "timestamp": "2022-10-04 15:23:45"
                    },
                    {
                        "value": "lpopaeradad.shop",
                        "timestamp": "2022-01-25 07:45:03"
                    },
                    {
                        "value": "molapermeradao.shop",
                        "timestamp": "2022-01-25 07:45:02"
                    },
                    {
                        "value": "baybaybayiliyorum.tk",
                        "timestamp": "2021-08-02 17:37:04"
                    },
                    {
                        "value": "yenihizmetaski.fit",
                        "timestamp": "2021-04-03 06:11:59"
                    },
                    {
                        "value": "quarterstudy.ga",
                        "timestamp": "2021-03-14 23:17:20"
                    },
                    {
                        "value": "univerpromo.ga",
                        "timestamp": "2021-03-14 23:17:20"
                    },
                    {
                        "value": "gostmarest.ga",
                        "timestamp": "2021-03-14 23:17:20"
                    },
                    {
                        "value": "morestandersolt.ga",
                        "timestamp": "2021-03-14 23:17:20"
                    },
                    {
                        "value": "comparistakres.ga",
                        "timestamp": "2021-03-14 23:17:20"
                    },
                    {
                        "value": "pandemitccbm-giris87.com",
                        "timestamp": "2021-01-12 10:55:07"
                    },
                    {
                        "value": "pandmeitccbmtrgirisi887.com",
                        "timestamp": "2021-01-12 10:55:07"
                    },
                    {
                        "value": "tcbmuygulamapandemigirisiniz78.com",
                        "timestamp": "2021-01-12 10:55:07"
                    },
                    {
                        "value": "pandemitccbm-giris147.com",
                        "timestamp": "2021-01-12 10:55:06"
                    },
                    {
                        "value": "pandemitccbm-giris177.com",
                        "timestamp": "2021-01-12 10:55:06"
                    },
                    {
                        "value": "tccbmpandemidestegigirisi769.com",
                        "timestamp": "2021-01-11 19:02:05"
                    },
                    {
                        "value": "tccbmpandemidestegigirisi789.com",
                        "timestamp": "2021-01-11 19:02:05"
                    },
                    {
                        "value": "tccbmpandemigirisiniztr6736.com",
                        "timestamp": "2021-01-11 19:02:05"
                    },
                    {
                        "value": "tcccbmpandemi-giris.com",
                        "timestamp": "2021-01-11 19:02:05"
                    },
                    {
                        "value": "adssad21.top",
                        "timestamp": "2021-01-08 18:51:06"
                    },
                    {
                        "value": "azerkardeskazkardes.site",
                        "timestamp": "2021-01-08 18:51:06"
                    },
                    {
                        "value": "dsafhkj2dsfnjlks.top",
                        "timestamp": "2021-01-08 18:51:06"
                    },
                    {
                        "value": "dsfdsfklkjsaiu.top",
                        "timestamp": "2021-01-08 18:51:06"
                    },
                    {
                        "value": "dsgdfsgdsf.top",
                        "timestamp": "2021-01-08 18:51:06"
                    },
                    {
                        "value": "hanidestekazerkardeslere.site",
                        "timestamp": "2021-01-05 18:26:08"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "2192345562b9fb1536465d31f465015cb8b0a029fa118166de0d6975bd00448b",
                        "timestamp": "2022-06-04 14:50:13"
                    },
                    {
                        "value": "5287663a491c5b823280dd9c1c4de45972ccc5f803148f5a6e360d3aa164349e",
                        "timestamp": "2022-06-02 14:14:42"
                    },
                    {
                        "value": "4b75ca3210c17313731434a7665810594cd5493ff2836ffc566a249c477c714b",
                        "timestamp": "2021-10-12 18:50:38"
                    },
                    {
                        "value": "1fa6c1d55c22381d0751bf71a383944bbc0792c899e8b39ff60582cb8541c8ce",
                        "timestamp": "2021-10-09 10:19:35"
                    },
                    {
                        "value": "745eadd29be72626e6686654ed778a12e9270193854ed911d961256f8791fc2b",
                        "timestamp": "2021-09-03 20:14:22"
                    },
                    {
                        "value": "63c460bf2652832ccda5e0749a6d4c79ef1ce47d125d52407f3f0428cc131f38",
                        "timestamp": "2021-09-03 15:51:25"
                    },
                    {
                        "value": "9058e9fc037a8732b07a4466abbb5a1c8ba299d4c5a87a4fbc4aa42ffe7021a6",
                        "timestamp": "2021-09-01 13:06:08"
                    },
                    {
                        "value": "94645cdd0927079bc4d0e3046b618e90f5194c242983cbc561b553cbf91c2d09",
                        "timestamp": "2021-08-31 21:13:44"
                    },
                    {
                        "value": "c6f35accd37dc1440ff1fe474d6e4dc94be2e58cebc66dca6c6d860a8c2bc4ad",
                        "timestamp": "2021-08-28 19:14:16"
                    },
                    {
                        "value": "4ff6ea5fd58662f21827ffe33518aea786edf954d46a53da6ac47b562ec56aee",
                        "timestamp": "2021-08-28 11:06:02"
                    },
                    {
                        "value": "82e9ac0fa8d6699ac3bf8fd75dfef57b81fc874d7b5992eda93fcb8298104fee",
                        "timestamp": "2021-08-27 06:01:30"
                    },
                    {
                        "value": "d81c00d48f918cab3bdfdb461378872db0e2a076c648b07a8e80d9093fd35b75",
                        "timestamp": "2021-08-22 01:55:38"
                    },
                    {
                        "value": "2339f4612352ed6d989da4d84dd42a25032b532d3ebaf8a009beb3fac12ffbca",
                        "timestamp": "2021-08-22 01:45:34"
                    },
                    {
                        "value": "0706aff99ddb41d810d081490cb6b2b70d9ee0092a642716d7ce28011ce616a5",
                        "timestamp": "2021-08-12 17:22:11"
                    },
                    {
                        "value": "d526dfa52f69d2dcc86165bbdc77440d320088a359a14d8ad529b3a2ad1d71c4",
                        "timestamp": "2021-08-12 16:55:43"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "10cc9cecc20f248ca5ba40c3798a602c",
                        "timestamp": "2021-08-21 17:28:20"
                    },
                    {
                        "value": "c51085d2f81eb3ba8d4a7b8786167899",
                        "timestamp": "2021-06-04 16:49:09"
                    },
                    {
                        "value": "1868837e0602c6a783d7db7254eb204b",
                        "timestamp": "2021-06-04 16:49:09"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-15 06:16:17",
    "file_name": "cerberus",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://resecurity.com/blog/article/in-the-box-mobile-malware-webinjects-marketplace",
            "date": "2022-11-25",
            "organization": "Resecurity",
            "author": "Resecurity",
            "title": "\"In The Box\" - Mobile Malware Webinjects Marketplace",
            "categories": [
                "Alien",
                "Cerberus",
                "Coper",
                "ERMAC",
                "Hydra"
            ]
        },
        {
            "data_url": "https://securelist.com/the-state-of-stalkerware-in-2021/106193/",
            "date": "2022-04-12",
            "organization": "Kaspersky",
            "author": "Kaspersky",
            "title": "The State of Stalkerware in 2021",
            "categories": [
                "Cerberus"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2022/04/12075509/EN_The-State-of-Stalkerware-2021.pdf",
            "date": "2022-04-01",
            "organization": "Kaspersky",
            "author": "Kaspersky",
            "title": "The State of Stalkerware in 2021",
            "categories": [
                "Cerberus"
            ]
        },
        {
            "data_url": "https://www.threatfabric.com/blogs/ermac-another-cerberus-reborn.html",
            "date": "2021-09-22",
            "organization": "ThreatFabric",
            "author": "ThreatFabric",
            "title": "ERMAC - another Cerberus reborn",
            "categories": [
                "AmpleBot",
                "Cerberus",
                "ERMAC"
            ]
        },
        {
            "data_url": "https://nur.pub/cerberus-analysis",
            "date": "2021-06-16",
            "organization": "nur.pub",
            "author": "Twitter (@1umos_)",
            "title": "Cerberus Analysis - Android Banking Trojan",
            "categories": [
                "Cerberus"
            ]
        },
        {
            "data_url": "https://community.riskiq.com/article/85b3db8c",
            "date": "2021-02-24",
            "organization": "RiskIQ",
            "author": "Jordan Herman",
            "title": "Turkey Dog: Cerberus and Anubis Banking Trojans Target Turkish Speakers",
            "categories": [
                "Anubis",
                "Cerberus"
            ]
        },
        {
            "data_url": "https://blog.cyberint.com/cerberus-is-dead-long-live-cerberus",
            "date": "2020-11-05",
            "organization": "CyberInt",
            "author": "CyberInt",
            "title": "Cerberus is Dead, Long Live Cerberus?",
            "categories": [
                "Cerberus"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2020-1016.pdf",
            "date": "2020-10-16",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "Banking Web Injects Are Top Cyber Threat For Financial Sector",
            "categories": [
                "Cerberus"
            ]
        },
        {
            "data_url": "https://preyproject.com/blog/en/cerberus-and-alien-the-malware-that-has-put-android-in-a-tight-spot/",
            "date": "2020-09-29",
            "organization": "The Missing Report",
            "author": "Norman Guti\u00e9rrez",
            "title": "Cerberus and Alien: the malware that has put Android in a tight spot",
            "categories": [
                "Alien",
                "Cerberus"
            ]
        },
        {
            "data_url": "https://labs.bitdefender.com/2020/09/apps-on-google-play-tainted-with-cerberus-banker-malware/",
            "date": "2020-09-24",
            "organization": "Bitdefender",
            "author": "Alexandra Bocereg",
            "title": "Apps on Google Play Tainted with Cerberus Banker Malware",
            "categories": [
                "Cerberus"
            ]
        },
        {
            "data_url": "https://www.threatfabric.com/blogs/alien_the_story_of_cerberus_demise.html",
            "date": "2020-09-24",
            "organization": "ThreatFabric",
            "author": "ThreatFabric",
            "title": "Alien - the story of Cerberus' demise",
            "categories": [
                "Alien",
                "Cerberus"
            ]
        },
        {
            "data_url": "https://github.com/ics-iot-bootcamp/cerberus_research",
            "date": "2020-08-31",
            "organization": "Github (ics-iot-bootcamp)",
            "author": "Ali R\u0131za \u015eahinkaya",
            "title": "Cerberus Banking Trojan Research",
            "categories": [
                "Cerberus"
            ]
        },
        {
            "data_url": "https://www.biznet.com.tr/wp-content/uploads/2020/08/Cerberus.pdf",
            "date": "2020-08-28",
            "organization": "CYBERWISE",
            "author": "Ali R\u0131za \u015eahinkaya",
            "title": "Cerberus Banking Trojan Analysis",
            "categories": [
                "Cerberus"
            ]
        },
        {
            "data_url": "https://bushidotoken.blogspot.com/2020/05/turkey-targeted-by-cerberus-and-anubis.html",
            "date": "2020-05-09",
            "organization": "BushidoToken",
            "author": "BushidoToken",
            "title": "Turkey targeted by Cerberus and Anubis Android banking Trojan campaigns",
            "categories": [
                "Anubis",
                "Cerberus"
            ]
        },
        {
            "data_url": "https://insights.oem.avira.com/in-depth-analysis-of-a-cerberus-trojan-variant/",
            "date": "2020-03-28",
            "organization": "Avira",
            "author": "Avira Protection Labs",
            "title": "In-depth analysis of a Cerberus trojan variant",
            "categories": [
                "Cerberus"
            ]
        },
        {
            "data_url": "https://www.threatfabric.com/blogs/2020_year_of_the_rat.html",
            "date": "2020-02",
            "organization": "ThreatFabric",
            "author": "ThreatFabric",
            "title": "2020 - Year of the RAT",
            "categories": [
                "Anubis",
                "Cerberus",
                "Ginp",
                "Gustuff",
                "Hydra"
            ]
        },
        {
            "data_url": "https://www.slideshare.net/codeblue_jp/cb19-cyber-threat-landscape-in-japan-revealing-threat-in-the-shadow-by-chi-en-shen-ashley-oleg-bondarenko",
            "date": "2019-12-12",
            "organization": "FireEye",
            "author": "Chi-en Shen",
            "title": "Cyber Threat Landscape in Japan \u2013 Revealing Threat in the Shadow",
            "categories": [
                "Cerberus",
                "TSCookie",
                "Cobalt Strike",
                "Dtrack",
                "Emotet",
                "Formbook",
                "IcedID",
                "Icefog",
                "IRONHALO",
                "Loki Password Stealer (PWS)",
                "PandaBanker",
                "PLEAD",
                "poisonplug",
                "TrickBot",
                "BlackTech"
            ]
        },
        {
            "data_url": "https://www.forbes.com/sites/zakdoffman/2019/08/16/dangerous-new-android-trojan-hides-from-malware-researchers-and-taunts-them-on-twitter/",
            "date": "2019-08-16",
            "organization": "Forbes",
            "author": "Zak Doffman",
            "title": "Warning As Devious New Android Malware Hides In Fake Adobe Flash Player Installations (Updated)",
            "categories": [
                "Cerberus"
            ]
        },
        {
            "data_url": "https://www.threatfabric.com/blogs/cerberus-a-new-banking-trojan-from-the-underworld.html",
            "date": "2019-08",
            "organization": "ThreatFabric",
            "author": "ThreatFabric",
            "title": "Cerberus - A new banking Trojan from the underworld",
            "categories": [
                "Cerberus"
            ]
        },
        {
            "data_url": "https://twitter.com/AndroidCerberus",
            "date": "2019-06",
            "organization": "Twitter (@AndroidCerberus)",
            "author": "Android Cerberus",
            "title": "Twitter Account of Android Cerberus",
            "categories": [
                "Cerberus"
            ]
        }
    ],
    "mitre": []
};