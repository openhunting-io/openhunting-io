var threatdata = {
    "name": "Kronos",
    "alias": "Kronos",
    "category": "Malware",
    "type": "Banking trojan, Info stealer",
    "modified": "2023-02-15",
    "all_data": {
        "tool": "Kronos",
        "names": [
            {
                "name": "Kronos"
            }
        ],
        "description": "A banking trojan. This malware has been first advertised on the black market since around June 2014, by an individual nicknamed VinnyK, writing in Russian.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer"
        ],
        "information": [
            "https://blog.malwarebytes.com/cybercrime/2017/08/inside-kronos-malware/",
            "https://blog.malwarebytes.com/cybercrime/2017/08/inside-kronos-malware-p2/",
            "https://www.securonix.com/securonix-threat-research-kronos-osiris-banking-trojan-attack",
            "https://www.proofpoint.com/us/threat-insight/post/kronos-reborn",
            "https://blog.malwarebytes.com/threat-analysis/2016/10/new-looking-sundown-ek-drops-smoke-loader-kronos-banker/",
            "https://www.lexsi.com/securityhub/overview-kronos-banking-malware-rootkit/",
            "https://www.lexsi.com/securityhub/kronos-decrypting-the-configuration-file-and-injects/",
            "https://research.checkpoint.com/deep-dive-upas-kit-vs-kronos/",
            "https://www.morphick.com/resources/news/scanpos-new-pos-malware-being-distributed-kronos",
            "https://securityintelligence.com/the-father-of-zeus-kronos-malware-discovered/",
            "https://www.proofpoint.com/us/threat-insight/post/kronos-banking-trojan-used-to-deliver-new-point-of-sale-malware",
            "https://securityintelligence.com/kronos-malware-reemerges-increased-functionality/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.kronos"
        ],
        "uuid": "70c2c52a-5c97-41d0-81c1-fbbc96db344b",
        "last-card-change": "2023-02-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Kronos",
            "malware_alias": "Osiris",
            "malware": "win.kronos",
            "last_update": "2021-09-04 12:30:30",
            "tags": [
                "osiris",
                "Kronos"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "e2984796f7308cdb70c172b14182a6f10dc9ed293d1c2dfac9c464f2e52599a0",
                        "timestamp": "2021-09-04 12:30:30"
                    },
                    {
                        "value": "28a020186c35ffc344fc71837693b7be3d5adaec4f24610915eb31ec15a626fd",
                        "timestamp": "2021-09-04 12:30:30"
                    },
                    {
                        "value": "63cfd63d995ec04f7c337708ff20ce4e2e118ab32e92395f1a815847bd2c01e2",
                        "timestamp": "2021-09-04 12:30:29"
                    },
                    {
                        "value": "09e90f1b1169b4725f8f7f5daabde617449a1a6817f12eaacc945451e001c62f",
                        "timestamp": "2021-09-04 12:30:28"
                    },
                    {
                        "value": "682b4509a0389207b6af79873f0b2c8b238b87ceacca3f44d2afe4f494dfe6e2",
                        "timestamp": "2021-09-01 09:30:26"
                    },
                    {
                        "value": "585ff16b69976f92d9d507b1b43c2ced804cf4fb30e822cf19f404a4f2245a96",
                        "timestamp": "2021-09-01 09:30:26"
                    },
                    {
                        "value": "500eeeea41a7991921fbd5ef01d164c0ee07809cdee3538d3309868204e1ac4f",
                        "timestamp": "2021-09-01 09:30:25"
                    },
                    {
                        "value": "82b2930af51d8cdb57db169338d9bead52d3c82769c4542f1465367c55cfc2ee",
                        "timestamp": "2021-09-01 09:30:25"
                    },
                    {
                        "value": "48bfc8877fa7102efd2cecf40b4f59166662d2a87f61ae1ad84b75bf14342c44",
                        "timestamp": "2021-08-16 12:10:14"
                    },
                    {
                        "value": "873608a4b03e2d7cdb4b8e618aa97636d635da35709c051913629929994846ee",
                        "timestamp": "2021-08-16 12:10:13"
                    },
                    {
                        "value": "541cd2039c7c3d9e4e5ff9b811a61f709a55580352135b403139a5288fa06f32",
                        "timestamp": "2021-06-22 13:39:36"
                    },
                    {
                        "value": "adde4ae9951c7eaf0e6da38a6d4a48d17c1992685b70e98cd3c248aca49dafe9",
                        "timestamp": "2021-06-22 13:39:36"
                    },
                    {
                        "value": "18cd059c6141fcff83f1a715a3599a35e18ee0e41500844ae9691f62df264d6e",
                        "timestamp": "2021-06-22 13:39:36"
                    },
                    {
                        "value": "9420352e6f0bd18b2e3cd99144ab76c1fca76b96bdba6e07b83bd5d1d2fb790b",
                        "timestamp": "2021-04-23 06:30:28"
                    },
                    {
                        "value": "e89dfa2bac41f774380b4f4a4f5f65002a054f0de9bccf26cbf16b2ef3f913de",
                        "timestamp": "2021-04-23 06:30:28"
                    },
                    {
                        "value": "fee88005a72b0dec13b45092e47b5275498e26beca1fae2193ab89e48e689c09",
                        "timestamp": "2021-04-23 06:30:28"
                    },
                    {
                        "value": "fe647c25fed5c6c15d6ecc449337110f1670a2d212617775d7b9f57667750c48",
                        "timestamp": "2021-04-23 06:30:28"
                    },
                    {
                        "value": "592b2eeb513d11fa7ec4e840f2db9f810e2aee3b16114cbad882b2157adad356",
                        "timestamp": "2021-03-29 07:00:31"
                    },
                    {
                        "value": "6d2ce3c4afc1f61a88ae30588ea913021ab6ce52a1f961879f07a621bde07f93",
                        "timestamp": "2021-03-29 07:00:31"
                    },
                    {
                        "value": "2d47ffef26bfea2b14c0690860487fd532005b70fcbd4d7695a738e4f1d5ff4d",
                        "timestamp": "2021-03-29 07:00:31"
                    },
                    {
                        "value": "b6e4ffe7aa6d987b3710729ce594007e5709a020de8ef4e4d48eaafbe7250903",
                        "timestamp": "2021-03-29 07:00:31"
                    }
                ],
                "url": [
                    {
                        "value": "http://95.214.235.237/f4t4r.exe",
                        "timestamp": "2021-03-10 08:09:59"
                    },
                    {
                        "value": "http://wifoweijijfoiwjweoi.xyz/panel/upload/data.cmp",
                        "timestamp": "2021-03-10 08:08:14"
                    },
                    {
                        "value": "http://wifoweijijfoiwjweoi.xyz/panel/connect.php",
                        "timestamp": "2021-03-10 08:08:14"
                    }
                ],
                "domain": [
                    {
                        "value": "wifoweijijfoiwjweoi.xyx",
                        "timestamp": "2021-03-10 08:08:34"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "d7634d1df27b569aaf2dd52f8f310027",
                        "timestamp": "2021-03-10 08:09:03"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-09-04 12:30:30",
    "file_name": "kronos",
    "analysis": null,
    "articles": [
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
            "data_url": "https://www.trendmicro.com/en_us/research/22/g/gootkit-loaders-updated-tactics-and-fileless-delivery-of-cobalt-strike.html",
            "date": "2022-07-27",
            "organization": "Trend Micro",
            "author": "Buddy Tancio",
            "title": "Gootkit Loader\u2019s Updated Tactics and Fileless Delivery of Cobalt Strike",
            "categories": [
                "Cobalt Strike",
                "GootKit",
                "Kronos",
                "REvil",
                "SunCrypt"
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
            "data_url": "https://therecord.media/osiris-banking-trojan-shuts-down-as-new-ares-variant-emerges/",
            "date": "2021-05-11",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Osiris banking trojan shuts down as new Ares variant emerges",
            "categories": [
                "Kronos"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/ares-malware-grandson-kronos-banking-trojan",
            "date": "2021-03-30",
            "organization": "Zscaler",
            "author": "Brett Stone-Gross",
            "title": "Ares Malware: The Grandson of the Kronos Banking Trojan",
            "categories": [
                "Ares",
                "Kronos"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/long-live-osiris-banking-trojan-targets-german-ip-addresses",
            "date": "2021-02-08",
            "organization": "Morphisec",
            "author": "Michael Dereviashkin",
            "title": "Long Live, Osiris; Banking Trojan Targets German IP Addresses",
            "categories": [
                "Kronos"
            ]
        },
        {
            "data_url": "https://twitter.com/3xp0rtblog/status/1294157781415743488",
            "date": "2020-08-14",
            "organization": "Twitter (@3xp0rtblog)",
            "author": "3xp0rt",
            "title": "Tweet on Osiris",
            "categories": [
                "Kronos"
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
            "data_url": "https://dissectingmalwa.re/osiris-the-god-of-afterlifeand-banking-malware.html",
            "date": "2019-10-29",
            "organization": "Dissecting Malware",
            "author": "Marius Genheimer",
            "title": "Osiris, the god of afterlife...and banking malware?!",
            "categories": [
                "Kronos"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/security-researcher-malwaretech-pleads-guilty/",
            "date": "2019-04-19",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "Security researcher MalwareTech pleads guilty",
            "categories": [
                "Kronos"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/kronos-reborn",
            "date": "2018-07-24",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "Kronos Reborn",
            "categories": [
                "Kronos"
            ]
        },
        {
            "data_url": "https://vx-underground.org/archive/APTs/2017/2017.12.11/Money%20Taker.pdf",
            "date": "2017-12-11",
            "organization": "Group-IB",
            "author": "Group-IB",
            "title": "MoneyTaker 1.5 YEARS OF SILENT OPERATIONS",
            "categories": [
                "Citadel",
                "Kronos",
                "Meterpreter"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/cybercrime/2017/08/inside-kronos-malware-p2/",
            "date": "2017-08-29",
            "organization": "Malwarebytes",
            "author": "Malwarebytes Labs",
            "title": "Inside the Kronos malware \u2013 part 2",
            "categories": [
                "Kronos"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/cybercrime/2017/08/inside-kronos-malware/",
            "date": "2017-08-18",
            "organization": "Malwarebytes",
            "author": "Malwarebytes Labs",
            "title": "Inside the Kronos malware \u2013 part 1",
            "categories": [
                "Kronos"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/kronos-banking-trojan-used-to-deliver-new-point-of-sale-malware",
            "date": "2016-11-15",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "Kronos Banking Trojan Used to Deliver New Point-of-Sale Malware",
            "categories": [
                "Kronos",
                "ScanPOS"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2016/10/new-looking-sundown-ek-drops-smoke-loader-kronos-banker/",
            "date": "2016-10-17",
            "organization": "Malwarebytes",
            "author": "J\u00e9r\u00f4me Segura",
            "title": "New-looking Sundown EK drops Smoke Loader, Kronos banker",
            "categories": [
                "Kronos",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/operation-black-atlas-endangers-in-store-card-payments-and-smbs-worldwide-switches-between-blackpos-and-other-tools/",
            "date": "2015-12-01",
            "organization": "Trend Micro",
            "author": "Jay Yaneza",
            "title": "Operation Black Atlas Endangers In-Store Card Payments and SMBs Worldwide; Switches between BlackPOS and Other Tools",
            "categories": [
                "Alina POS",
                "BlackPOS",
                "Kronos",
                "NewPosThings"
            ]
        }
    ],
    "mitre": []
};