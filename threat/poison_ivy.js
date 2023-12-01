var threatdata = {
    "name": "Poison Ivy",
    "alias": "Poison Ivy, pivy, poisonivy, Gen:Trojan.Heur.PT, Darkmoon, Chymine, SPIVY",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Credential stealer, Exfiltration",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Poison Ivy",
        "names": [
            {
                "name": "Poison Ivy"
            },
            {
                "name": "pivy"
            },
            {
                "name": "poisonivy"
            },
            {
                "name": "Gen:Trojan.Heur.PT"
            },
            {
                "name": "Darkmoon"
            },
            {
                "name": "Chymine"
            },
            {
                "name": "SPIVY"
            }
        ],
        "description": "Poison Ivy is a popular remote access tool (RAT) that has been used by many groups.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/rpt-poison-ivy.pdf",
            "https://www.fortinet.com/blog/threat-research/deep-analysis-of-new-poison-ivy-variant.html",
            "https://blog.fortinet.com/2017/09/15/deep-analysis-of-new-poison-ivy-plugx-variant-part-ii",
            "http://contagiodump.blogspot.com/2010/01/jan-17-trojan-darkmoonb-exe-haiti.html",
            "https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2017/august/analysing-a-recent-poison-ivy-sample/",
            "https://researchcenter.paloaltonetworks.com/2016/04/unit42-new-poison-ivy-rat-variant-targets-hong-kong-pro-democracy-activists/",
            "https://www.fireeye.com/blog/threat-research/2013/08/operation-molerats-middle-east-cyber-attacks-using-poison-ivy.html",
            "https://www.fireeye.com/blog/threat-research/2013/10/know-your-enemy-tracking-a-rapidly-evolving-apt-actor.html",
            "https://researchcenter.paloaltonetworks.com/2014/09/recent-watering-hole-attacks-attributed-apt-group-th3bug-using-poison-ivy/",
            "http://blogs.360.cn/post/APT_C_01_en.html",
            "https://researchcenter.paloaltonetworks.com/2016/11/unit42-tropic-trooper-targets-taiwanese-government-and-fossil-fuel-provider-with-poison-ivy/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0012/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.poison_ivy",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.darkmoon"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Poison%20Ivy"
        ],
        "uuid": "f0250d37-fcad-40db-bfa4-adb597d651db",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Poison Ivy",
            "malware_alias": "SPIVY,pivy,poisonivy",
            "malware": "win.poison_ivy",
            "last_update": "2023-11-25 10:05:29",
            "tags": [],
            "ioc": {
                "ip:port": [
                    {
                        "value": "5.153.123.11:3460",
                        "timestamp": "2023-11-25 10:05:29"
                    },
                    {
                        "value": "94.98.183.32:3460",
                        "timestamp": "2023-11-23 18:05:34"
                    },
                    {
                        "value": "94.98.229.240:3460",
                        "timestamp": "2023-11-19 01:06:30"
                    },
                    {
                        "value": "94.49.183.29:3460",
                        "timestamp": "2023-11-10 14:06:12"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "c616002f3cce0fd52d6ead8621a9f1f1",
                        "timestamp": "2022-10-03 13:10:02"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-25 10:05:29",
    "file_name": "poison_ivy",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://engineers.ffri.jp/entry/2022/11/30/141346",
            "date": "2022-11-30",
            "organization": "FFRI Security",
            "author": "Matsumoto",
            "title": "Evolution of the PlugX loader",
            "categories": [
                "PlugX",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/pivnoxy-and-chinoxy-puppeteer-analysis",
            "date": "2022-08-22",
            "organization": "Fortinet",
            "author": "Shunichi Imano",
            "title": "A Tale of PivNoxy and Chinoxy Puppeteer",
            "categories": [
                "Chinoxy",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://blog.bushidotoken.net/2022/07/space-invaders-cyber-threats-that-are.html",
            "date": "2022-07-31",
            "organization": "BushidoToken Blog",
            "author": "BushidoToken",
            "title": "Space Invaders: Cyber Threats That Are Out Of This World",
            "categories": [
                "Poison Ivy",
                "Raindrop",
                "SUNBURST",
                "TEARDROP",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/crawling-taurus/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Crawling Taurus",
            "categories": [
                "Poison Ivy",
                "APT20"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/shallowtaurus/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Shallow Taurus",
            "categories": [
                "FormerFirstRAT",
                "IsSpace",
                "NewCT",
                "PlugX",
                "Poison Ivy",
                "Tidepool",
                "DragonOK"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/space-pirates-tools-and-connections/",
            "date": "2022-05-17",
            "organization": "Positive Technologies",
            "author": "Positive Technologies",
            "title": "Space Pirates: analyzing the tools and connections of a new hacker group",
            "categories": [
                "FormerFirstRAT",
                "PlugX",
                "Poison Ivy",
                "Rovnix",
                "ShadowPad",
                "Zupdax"
            ]
        },
        {
            "data_url": "https://blogs.jpcert.or.jp/ja/2022/05/HUILoader.html",
            "date": "2022-05-16",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "Analysis of HUI Loader",
            "categories": [
                "HUI Loader",
                "PlugX",
                "Poison Ivy",
                "Quasar RAT"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2021-0616.pdf",
            "date": "2021-06-16",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "Threat Activity Group RedFoxtrot Linked to China\u2019s PLA Unit 69010;  Targets Bordering Asian Countries",
            "categories": [
                "Icefog",
                "PcShare",
                "PlugX",
                "Poison Ivy",
                "QuickHeal",
                "DAGGER PANDA"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/china-linked-ta428-threat-group",
            "date": "2021-03-17",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "China-linked TA428 Continues to Target Russia and Mongolia IT Companies",
            "categories": [
                "PlugX",
                "Poison Ivy",
                "TA428"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2021/02/01/operation-nightscout-supply-chain-attack-online-gaming-asia/",
            "date": "2021-02-01",
            "organization": "ESET Research",
            "author": "Ignacio Sanmillan",
            "title": "Operation NightScout: Supply\u2011chain attack targets online gaming in Asia",
            "categories": [
                "Ghost RAT",
                "NoxPlayer",
                "Poison Ivy",
                "Red Dev 17"
            ]
        },
        {
            "data_url": "https://raw.githubusercontent.com/yt0ng/cracking_softcell/main/Cracking_SOFTCLL_TLP_WHITE.pdf",
            "date": "2021-01-15",
            "organization": "Swisscom",
            "author": "Markus Neis",
            "title": "Cracking a Soft Cell is Harder Than You Think",
            "categories": [
                "Ghost RAT",
                "MimiKatz",
                "PlugX",
                "Poison Ivy",
                "Trochilus RAT"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=1WfPlgtfWnQ",
            "date": "2021-01-08",
            "organization": "Youtube (Virus Bulletin)",
            "author": "Fumio Ozawa",
            "title": "Operation LagTime IT: colourful Panda footprint",
            "categories": [
                "Cotx RAT",
                "nccTrojan",
                "Poison Ivy",
                "Tmanger",
                "TA428"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa20-275a",
            "date": "2020-10-01",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Alert (AA20-275A): Potential for China Cyber Response to Heightened U.S.-China Tensions",
            "categories": [
                "CHINACHOPPER",
                "Cobalt Strike",
                "Empire Downloader",
                "MimiKatz",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://vblocalhost.com/uploads/VB2020-Ozawa-etal.pdf",
            "date": "2020-09-30",
            "organization": "NTT Security",
            "author": "Fumio Ozawa",
            "title": "Operation LagTime IT: colourful Panda footprint",
            "categories": [
                "Cotx RAT",
                "nccTrojan",
                "Poison Ivy",
                "Tmanger"
            ]
        },
        {
            "data_url": "https://vblocalhost.com/uploads/VB2020-20.pdf",
            "date": "2020-09-30",
            "organization": "NTT Security",
            "author": "Fumio Ozawa",
            "title": "Operation LagTime IT: colourful Panda footprint (Slides)",
            "categories": [
                "Cotx RAT",
                "nccTrojan",
                "Poison Ivy",
                "Tmanger"
            ]
        },
        {
            "data_url": "https://community.riskiq.com/article/56fa1b2f",
            "date": "2020-09-16",
            "organization": "RiskIQ",
            "author": "Jon Gross",
            "title": "RiskIQ: Adventures in Cookie Land - Part 2",
            "categories": [
                "8.t Dropper",
                "Chinoxy",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://vb2020.vblocalhost.com/uploads/VB2020-Ozawa-etal.pdf",
            "date": "2020-08-28",
            "organization": "NTT",
            "author": "Fumio Ozawa",
            "title": "Operation Lagtime IT: Colourful Panda Footprint",
            "categories": [
                "Cotx RAT",
                "Poison Ivy",
                "TA428"
            ]
        },
        {
            "data_url": "https://vb2020.vblocalhost.com/uploads/VB2020-20.pdf",
            "date": "2020-08-19",
            "organization": "NTT Security",
            "author": "Fumio Ozawa",
            "title": "Operation LagTime IT: Colorful Panda Footprint",
            "categories": [
                "8.t Dropper",
                "Cotx RAT",
                "Poison Ivy",
                "TA428"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2020/vicious-panda-the-covid-campaign/",
            "date": "2020-03-12",
            "organization": "Check Point",
            "author": "Check Point Research",
            "title": "Vicious Panda: The COVID Campaign",
            "categories": [
                "8.t Dropper",
                "BYEBY",
                "Enfal",
                "Korlia",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/virusbulletin/2020/03/vb2019-paper-pulling-pkplug-adversary-playbook-long-standing-espionage-activity-chinese-nation-state-adversary/",
            "date": "2020-03-02",
            "organization": "Virus Bulletin",
            "author": "Alex Hinchliffe",
            "title": "Pulling the PKPLUG: the adversary playbook for the long-standing espionage activity of a Chinese nation-state adversary",
            "categories": [
                "HenBox",
                "Farseer",
                "PlugX",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://nao-sec.org/2020/01/an-overhead-view-of-the-royal-road.html",
            "date": "2020-01-29",
            "organization": "nao_sec blog",
            "author": "nao_sec",
            "title": "An Overhead View of the Royal Road",
            "categories": [
                "BLACKCOFFEE",
                "Cotx RAT",
                "Datper",
                "DDKONG",
                "Derusbi",
                "Icefog",
                "Korlia",
                "NewCore RAT",
                "PLAINTEE",
                "Poison Ivy",
                "Sisfader"
            ]
        },
        {
            "data_url": "https://lab52.io/blog/icefog-apt-group-abusing-recent-conflict-between-iran-and-eeuu/",
            "date": "2020-01-09",
            "organization": "Lab52",
            "author": "Jagaimo Kawaii",
            "title": "TA428 Group abusing recent conflict between Iran and USA",
            "categories": [
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-riverside",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE RIVERSIDE",
            "categories": [
                "Anel",
                "ChChes",
                "Cobalt Strike",
                "PlugX",
                "Poison Ivy",
                "Quasar RAT",
                "RedLeaves",
                "APT10"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-union",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE UNION",
            "categories": [
                "9002 RAT",
                "CHINACHOPPER",
                "Enfal",
                "Ghost RAT",
                "HttpBrowser",
                "HyperBro",
                "owaauth",
                "PlugX",
                "Poison Ivy",
                "ZXShell",
                "APT27"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-firestone",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE FIRESTONE",
            "categories": [
                "9002 RAT",
                "Derusbi",
                "Empire Downloader",
                "PlugX",
                "Poison Ivy",
                "APT19"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-keystone",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE KEYSTONE",
            "categories": [
                "9002 RAT",
                "BLACKCOFFEE",
                "DeputyDog",
                "Derusbi",
                "HiKit",
                "PlugX",
                "Poison Ivy",
                "ZXShell",
                "APT17"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/aluminum-saratoga",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "ALUMINUM SARATOGA",
            "categories": [
                "BlackShades",
                "DarkComet",
                "Xtreme RAT",
                "Poison Ivy",
                "Quasar RAT",
                "Molerats"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2019/12/12/gallium-targeting-global-telecom/",
            "date": "2019-12-12",
            "organization": "Microsoft",
            "author": "Microsoft Threat Intelligence Center",
            "title": "GALLIUM: Targeting global telecom",
            "categories": [
                "CHINACHOPPER",
                "Ghost RAT",
                "HTran",
                "MimiKatz",
                "Poison Ivy",
                "GALLIUM"
            ]
        },
        {
            "data_url": "https://summit.fireeye.com/content/dam/fireeye-www/summit/cds-2019/presentations/cds19-executive-s08-achievement-unlocked.pdf",
            "date": "2019-11-19",
            "organization": "FireEye",
            "author": "Kelli Vanderlee",
            "title": "Achievement Unlocked: Chinese Cyber Espionage Evolves to Support Higher Level Missions",
            "categories": [
                "MESSAGETAP",
                "TSCookie",
                "ACEHASH",
                "CHINACHOPPER",
                "Cobalt Strike",
                "Derusbi",
                "Empire Downloader",
                "Ghost RAT",
                "HIGHNOON",
                "HTran",
                "MimiKatz",
                "NetWire RC",
                "poisonplug",
                "Poison Ivy",
                "pupy",
                "Quasar RAT",
                "ZXShell"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/chinese-apt-operation-lagtime-it-targets-government-information-technology",
            "date": "2019-07-23",
            "organization": "Proofpoint",
            "author": "Michael Raggi",
            "title": "Chinese APT \u201cOperation LagTime IT\u201d Targets Government Information Technology Agencies in Eastern Asia",
            "categories": [
                "8.t Dropper",
                "Cotx RAT",
                "Poison Ivy",
                "TA428"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/operation-soft-cell-a-worldwide-campaign-against-telecommunications-providers",
            "date": "2019-06-25",
            "organization": "Cybereason",
            "author": "Cybereason Nocturnus",
            "title": "OPERATION SOFT CELL: A WORLDWIDE CAMPAIGN AGAINST TELECOMMUNICATIONS PROVIDERS",
            "categories": [
                "CHINACHOPPER",
                "HTran",
                "MimiKatz",
                "Poison Ivy",
                "Operation Soft Cell"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/uploads/pdf/conference_slides/2019/VB2019-GuPan.pdf",
            "date": "2019",
            "organization": "Virus Bulletin",
            "author": "Lion Gu",
            "title": "A vine climbing over the Great Firewall: A long-term attack against China",
            "categories": [
                "Poison Ivy",
                "ZXShell"
            ]
        },
        {
            "data_url": "http://blogs.360.cn/post/APT_C_01_en.html",
            "date": "2018-09-21",
            "organization": "Qihoo 360 Technology",
            "author": "Qihoo 360",
            "title": "Poison Ivy Group and the Cyberespionage Campaign Against Chinese Military and Goverment",
            "categories": [
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://www.slideshare.net/StefanoMaccaglia/bsides-ir-in-heterogeneous-environment",
            "date": "2018-05-15",
            "organization": "BSides Detroit",
            "author": "Keven Murphy",
            "title": "IR in Heterogeneous Environment",
            "categories": [
                "Korlia",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://blog.fortinet.com/2017/09/15/deep-analysis-of-new-poison-ivy-plugx-variant-part-ii",
            "date": "2017-09-15",
            "organization": "Fortinet",
            "author": "Xiaopeng Zhang",
            "title": "Deep Analysis of New Poison Ivy/PlugX Variant - Part II",
            "categories": [
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2017/august/analysing-a-recent-poison-ivy-sample/",
            "date": "2017-08-31",
            "organization": "NCC Group",
            "author": "Ahmed Zaki",
            "title": "Analysing a recent Poison Ivy sample",
            "categories": [
                "Poison Ivy"
            ]
        },
        {
            "data_url": "http://blog.fortinet.com/2017/08/23/deep-analysis-of-new-poison-ivy-variant",
            "date": "2017-08-23",
            "organization": "Fortinet",
            "author": "Xiaopeng Zhang",
            "title": "Deep Analysis of New Poison Ivy Variant",
            "categories": [
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0011",
            "date": "2017-05-31",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "PittyTiger",
            "categories": [
                "Enfal",
                "Ghost RAT",
                "MimiKatz",
                "Poison Ivy",
                "APT24"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2016/11/unit42-tropic-trooper-targets-taiwanese-government-and-fossil-fuel-provider-with-poison-ivy/",
            "date": "2016-11-22",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Vicky Ray",
            "title": "Tropic Trooper Targets Taiwanese Government and Fossil Fuel Provider With Poison Ivy",
            "categories": [
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections/blob/master/2016/2016.04.26.New_Poison_Ivy_Activity_Targeting_Myanmar_Asian_Countries/New%20Poison%20Ivy%20Activity%20Targeting%20Myanmar%2C%20Asian%20Countries.pdf",
            "date": "2016-04-26",
            "organization": "Github (CyberMonitor)",
            "author": "Jason Jones",
            "title": "New Poison Ivy Activity Targeting Myanmar, Asian Countries",
            "categories": [
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2016/04/unit42-new-poison-ivy-rat-variant-targets-hong-kong-pro-democracy-activists/",
            "date": "2016-04-22",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Micah Yates",
            "title": "New Poison Ivy RAT Variant Targets Hong Kong Pro-Democracy Activists",
            "categories": [
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20200509171721/https://raw.githubusercontent.com/fdiskyou/threat-INTel/master/2015/GlobalThreatIntelReport.pdf",
            "date": "2015-02-06",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "CrowdStrike Global Threat Intel Report 2014",
            "categories": [
                "BlackPOS",
                "CryptoLocker",
                "Derusbi",
                "Elise",
                "Enfal",
                "EvilGrab",
                "Gameover P2P",
                "HttpBrowser",
                "Medusa",
                "Mirage",
                "Naikon",
                "NetTraveler",
                "pirpi",
                "PlugX",
                "Poison Ivy",
                "Sakula RAT",
                "Sinowal",
                "sykipot",
                "taidoor"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2014/09/recent-watering-hole-attacks-attributed-apt-group-th3bug-using-poison-ivy/",
            "date": "2014-09-19",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Jen Miller-Osborn",
            "title": "Recent Watering Hole Attacks Attributed to APT Group \u201cth3bug\u201d Using Poison Ivy",
            "categories": [
                "Poison Ivy"
            ]
        },
        {
            "data_url": "http://csecybsec.com/download/zlab/20180713_CSE_APT28_X-Agent_Op-Roman%20Holiday-Report_v6_1.pdf",
            "date": "2014",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "Operation Quantum Entanglement",
            "categories": [
                "IsSpace",
                "NewCT",
                "Poison Ivy",
                "SysGet"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2013/10/know-your-enemy-tracking-a-rapidly-evolving-apt-actor.html",
            "date": "2013-10-31",
            "organization": "FireEye",
            "author": "Thoufique Haq",
            "title": "Know Your Enemy: Tracking A Rapidly Evolving APT Actor",
            "categories": [
                "Bozok",
                "Poison Ivy",
                "TEMPER PANDA"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2013/08/operation-molerats-middle-east-cyber-attacks-using-poison-ivy.html",
            "date": "2013-08-23",
            "organization": "FireEye",
            "author": "Nart Villeneuve",
            "title": "Operation Molerats: Middle East Cyber Attacks Using Poison Ivy",
            "categories": [
                "Poison Ivy",
                "Molerats"
            ]
        },
        {
            "data_url": "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2011/the_nitro_attacks.pdf",
            "date": "2011",
            "organization": "Symantec",
            "author": "Erica Eng",
            "title": "The Nitro Attacks: Stealing Secrets from the Chemical Industry",
            "categories": [
                "Poison Ivy",
                "Nitro"
            ]
        },
        {
            "data_url": "http://contagiodump.blogspot.com/2010/07/cve-2010-2568-keylogger-win32chyminea.html",
            "date": "2010-07-30",
            "organization": "Contagiodump Blog",
            "author": "Mila Parkour",
            "title": "CVE-2010-2568  keylogger Win32/Chymine.A",
            "categories": [
                "Darkmoon"
            ]
        },
        {
            "data_url": "http://contagiodump.blogspot.com/2010/01/jan-17-trojan-darkmoonb-exe-haiti.html",
            "date": "2010-01-17",
            "organization": "Contagiodump Blog",
            "author": "Mila Parkour",
            "title": "Jan 17 Trojan Darkmoon.B EXE Haiti relief from santi_nidas@yahoo.com 17 Jan 2010 13:15:02 -0800 PST",
            "categories": [
                "Darkmoon"
            ]
        },
        {
            "data_url": "https://www.f-secure.com/v-descs/trojan-downloader_w32_chymine_a.shtml",
            "date": "2010",
            "organization": "F-Secure",
            "author": "_",
            "title": "Trojan-Downloader:W32/Chymine.A",
            "categories": [
                "Darkmoon"
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
        }
    ],
    "mitre": [
        {
            "procedure_name": "poisonivy",
            "procedure_code": "s0012",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0012",
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
                    "procedure_description": "poisonivy creates a backdoor through which remote attackers can open a command-line interface.[264]"
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
                    "procedure_description": "poisonivy creates run key registry entries pointing to a malicious executable dropped to disk.[197]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.014",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/014",
                    "technique_name": "boot or logon autostart execution : active setup",
                    "technique_description": "adversaries may achieve persistence by adding a registry key to the active setup of the local machine. active setup is a windows mechanism that is used to execute programs when a user logs in. the value stored in the registry key will be executed after a user logs into the computer. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "poisonivy creates a registry key in the active setup pointing to a malicious executable.[7][6][8]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "poisonivy creates a registry subkey that registers a new service. poisonivy also creates a registry entry modifying the logical disk manager service to point to a malicious dll dropped to disk.[94]"
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
                    "procedure_description": "poisonivy creates run key registry entries pointing to a malicious executable dropped to disk.[197]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.014",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/014",
                    "technique_name": "boot or logon autostart execution : active setup",
                    "technique_description": "adversaries may achieve persistence by adding a registry key to the active setup of the local machine. active setup is a windows mechanism that is used to execute programs when a user logs in. the value stored in the registry key will be executed after a user logs into the computer. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "poisonivy creates a registry key in the active setup pointing to a malicious executable.[7][6][8]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "poisonivy creates a registry subkey that registers a new service. poisonivy also creates a registry entry modifying the logical disk manager service to point to a malicious dll dropped to disk.[94]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "poisonivy can inject a malicious dll into a process.[50][51]"
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
                    "procedure_description": "poisonivy creates a registry subkey that registers a new system device.[120]"
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
                    "procedure_description": "poisonivy hides any strings related to its own indicators of compromise.[253]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "poisonivy can inject a malicious dll into a process.[50][51]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1014",
                    "technique_link": "https://attack.mitre.org/techniques/T1014",
                    "technique_name": "rootkit",
                    "technique_description": "adversaries may use rootkits to hide the presence of programs, files, network connections, services, drivers, and other system components. rootkits are programs that hide the existence of malware by intercepting/hooking and modifying operating system api calls that supply system information.",
                    "procedure_description": "poisonivy starts a rootkit from a malicious file dropped to disk.[20]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "poisonivy contains a keylogger.[135][136]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1010",
                    "technique_link": "https://attack.mitre.org/techniques/T1010",
                    "technique_name": "application window discovery",
                    "technique_description": "adversaries may attempt to get a listing of open application windows. window listings could convey information about how the system is used. for example, information about application windows could be used identify potential data to collect as well as identifying security tooling (security software discovery) to evade.",
                    "procedure_description": "poisonivy captures window titles.[25]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "poisonivy creates a backdoor through which remote attackers can steal system information.[141]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1074/001",
                    "technique_name": "data staged : local data staging",
                    "technique_description": "adversaries may stage collected data in a central location or directory on the local system prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "poisonivy stages collected data in a text file.[75]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "poisonivy contains a keylogger.[135][136]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/001",
                    "technique_name": "encrypted channel : symmetric cryptography",
                    "technique_description": "adversaries may employ a known symmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. symmetric encryption algorithms use the same key for plaintext encryption and ciphertext decryption. common symmetric encryption algorithms include aes, des, 3des, blowfish, and rc4.",
                    "procedure_description": "poisonivy uses the camellia cipher to encrypt communications.[108]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "poisonivy creates a backdoor through which remote attackers can upload files.[351]"
                }
            ]
        }
    ]
};