var threatdata = {
    "name": "ServHelper",
    "alias": "ServHelper",
    "category": "Malware",
    "type": "Backdoor, Credential stealer, Downloader",
    "modified": "2022-09-06",
    "all_data": {
        "tool": "ServHelper",
        "names": [
            {
                "name": "ServHelper"
            }
        ],
        "description": "ServHelper is written in Delphi and according to ProofPoint best classified as a backdoor.\n\nProofPoint noticed two distinct variant - 'tunnel' and 'downloader' (citation):\n'The 'tunnel' variant has more features and focuses on setting up reverse SSH tunnels to allow the threat actor to access the infected host via Remote Desktop Protocol (RDP). Once ServHelper establishes remote desktop access, the malware contains functionality for the threat actor to 'hijack' legitimate user accounts or their web browser profiles and use them as they see fit. The 'downloader' variant is stripped of the tunneling and hijacking functionality and is used as a basic downloader.'",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Credential stealer",
            "Downloader"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/servhelper-and-flawedgrace-new-malware-introduced-ta505",
            "https://e.cyberint.com/hubfs/Report%20Legit%20Remote%20Access%20Tools%20Turn%20Into%20Threat%20Actors%20Tools/CyberInt_Legit%20Remote%20Access%20Tools%20Turn%20Into%20Threat%20Actors'%20Tools_Report.pdf",
            "https://www.deepinstinct.com/2019/04/02/new-servhelper-variant-employs-excel-4-0-macro-to-drop-signed-payload/",
            "https://ti.360.net/blog/articles/excel-4.0-macro-utilized-by-ta505-to-target-financial-institutions-recently-en/",
            "https://www.cybereason.com/blog/threat-actor-ta505-targets-financial-enterprises-using-lolbins-and-a-new-backdoor-malware"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0382/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.servhelper"
        ],
        "uuid": "8e84ad65-ea4e-40a0-9598-e3a8402c012c",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "ServHelper",
            "malware_alias": null,
            "malware": "win.servhelper",
            "last_update": "2021-12-18 08:10:07",
            "tags": [
                "servhelper",
                "ServHelpe",
                "ServHelper"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "sbbsats5d5asdv3.xyz",
                        "timestamp": "2021-12-12 12:12:44"
                    },
                    {
                        "value": "z7gzv6sw6ui9.xyz",
                        "timestamp": "2021-12-12 12:12:44"
                    },
                    {
                        "value": "nacuasujciiwi3.xyz",
                        "timestamp": "2021-12-06 06:34:35"
                    },
                    {
                        "value": "hsuahiysautcr.xyz",
                        "timestamp": "2021-11-26 10:11:05"
                    },
                    {
                        "value": "kasisausnasaysar.xyz",
                        "timestamp": "2021-12-18 08:10:07"
                    },
                    {
                        "value": "asdyyauscuauusc.xyz",
                        "timestamp": "2021-12-06 06:34:35"
                    },
                    {
                        "value": "osdnvnauurt.xyz",
                        "timestamp": "2021-10-31 07:03:28"
                    },
                    {
                        "value": "aosdnvnauurt.xyz",
                        "timestamp": "2021-10-27 10:02:43"
                    },
                    {
                        "value": "zdov9v88e83jfa.xyz",
                        "timestamp": "2021-10-31 07:03:28"
                    },
                    {
                        "value": "saudjyyvv663.xyz",
                        "timestamp": "2021-09-29 15:39:40"
                    },
                    {
                        "value": "iasfugibz9x.xyz",
                        "timestamp": "2021-09-24 06:47:36"
                    },
                    {
                        "value": "zuvujvhuaif.xyz",
                        "timestamp": "2021-09-22 06:20:54"
                    },
                    {
                        "value": "whereihjeu3.xyz",
                        "timestamp": "2021-08-16 06:50:30"
                    },
                    {
                        "value": "hitnaiguat.xyz",
                        "timestamp": "2021-08-14 07:15:33"
                    },
                    {
                        "value": "sadiviai9d9asd.xyz",
                        "timestamp": "2021-08-11 07:38:00"
                    },
                    {
                        "value": "potuybze.xyz",
                        "timestamp": "2021-07-19 06:28:53"
                    },
                    {
                        "value": "asdidjvjvaias.xyz",
                        "timestamp": "2021-07-16 07:43:25"
                    },
                    {
                        "value": "afggaiir3a.xyz",
                        "timestamp": "2021-07-13 06:26:22"
                    },
                    {
                        "value": "afspfigjeb.cn",
                        "timestamp": "2021-07-09 18:32:45"
                    },
                    {
                        "value": "soajfvhv235ua.xyz",
                        "timestamp": "2021-07-16 07:43:25"
                    },
                    {
                        "value": "afditnzurh.xyz",
                        "timestamp": "2021-07-05 06:25:46"
                    },
                    {
                        "value": "kbpsorjbus6.pw",
                        "timestamp": "2021-07-05 06:25:12"
                    },
                    {
                        "value": "pgf5ga4g4b.cn",
                        "timestamp": "2021-07-02 05:29:46"
                    },
                    {
                        "value": "enroter1984.cn",
                        "timestamp": "2021-06-28 05:33:32"
                    },
                    {
                        "value": "neboley.cn",
                        "timestamp": "2021-06-28 05:33:32"
                    },
                    {
                        "value": "asdjausg.cn",
                        "timestamp": "2021-05-23 06:33:42"
                    },
                    {
                        "value": "afsifufufgg42.cn",
                        "timestamp": "2021-04-06 15:26:45"
                    },
                    {
                        "value": "afsibibia3.xyz",
                        "timestamp": "2021-04-03 06:20:33"
                    },
                    {
                        "value": "jfiisnvvz.xyz",
                        "timestamp": "2021-03-31 07:25:46"
                    },
                    {
                        "value": "igibhbyehvyga.xyz",
                        "timestamp": "2021-03-29 07:57:21"
                    },
                    {
                        "value": "jfuag3.cn",
                        "timestamp": "2021-03-27 15:39:52"
                    },
                    {
                        "value": "novacation.cn",
                        "timestamp": "2021-03-22 20:22:31"
                    },
                    {
                        "value": "wheredoyougo.cn",
                        "timestamp": "2021-03-22 20:22:31"
                    },
                    {
                        "value": "syvgevyhz.cn",
                        "timestamp": "2021-03-16 19:10:25"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "65f47cd450bd96cba40e838cb0355638a1d43b3ac51d3d6e97a469d5425a7874",
                        "timestamp": "2021-12-05 02:45:38"
                    },
                    {
                        "value": "5c48fce985e7b875be1a88334fa98f4db5611117bd39959e2e5980f0b3e8094d",
                        "timestamp": "2021-12-05 02:45:37"
                    },
                    {
                        "value": "0ee089365adfe14f05cf599a6f74aecba426ad0270eb3ddff135c99b1c5c0a48",
                        "timestamp": "2021-12-05 02:45:36"
                    },
                    {
                        "value": "7a521b89bee36ec9231a5cdff5b79132335843fb10be72c1b1426ef4c3935e4a",
                        "timestamp": "2021-12-05 02:45:35"
                    },
                    {
                        "value": "8082bfe8a9f63854d6317cf6ddc0c18c54140ee5d179a96bfe9900c90d994518",
                        "timestamp": "2021-10-26 17:15:27"
                    },
                    {
                        "value": "84c41dc018689fcb2fc4240f1e0267a5ee82232e3bcd541f5f5bed4139cfcd55",
                        "timestamp": "2021-10-26 17:15:26"
                    },
                    {
                        "value": "d74b6c6a24a192266f78de7209ac83d43add79818bf28d367b51813465dac6db",
                        "timestamp": "2021-10-26 17:15:25"
                    },
                    {
                        "value": "dcbce5bc929785a63efb6d9180a479c33fcf882e39b4d0f0b581713b193f38cf",
                        "timestamp": "2021-10-26 17:15:24"
                    },
                    {
                        "value": "53882829be84aba37e9a3e3367301b7800ba1aac3007af62d6620fcc170f4f7b",
                        "timestamp": "2021-09-18 02:00:59"
                    },
                    {
                        "value": "3342d9e46d1b50083fa7da9e8f72d578b10e0cced3dca29b2e5bf9dc219349da",
                        "timestamp": "2021-09-18 02:00:59"
                    },
                    {
                        "value": "be5543ea72f61dd230233cc9a875bd2b0e1dd68d9addc8d12bbb09dd97730ff4",
                        "timestamp": "2021-09-18 02:00:58"
                    },
                    {
                        "value": "10675ecac736bf3fa5175330ef22d3f1e252a698072c58cba3de0a208e751fb2",
                        "timestamp": "2021-09-18 02:00:57"
                    },
                    {
                        "value": "177d6aab26c15ecf87f29f92ad0eaff355d195de1c0ef17d9cb9b7483c288934",
                        "timestamp": "2021-07-21 19:00:49"
                    },
                    {
                        "value": "6c4aab4c3bd1ba8f77a781d70ecbc1b4c7dfd9d3c7ad60158fb8d35d1d4246e2",
                        "timestamp": "2021-07-21 19:00:48"
                    },
                    {
                        "value": "f519d4517271e01ea6807890fcbc1573e64844b6a8105aa7c3462ea65bb3c7fe",
                        "timestamp": "2021-07-21 19:00:48"
                    },
                    {
                        "value": "a45ce871e292ee5d5effccb273909abb62773ad8cb308f90726e8820ecca76d6",
                        "timestamp": "2021-07-21 19:00:47"
                    },
                    {
                        "value": "e5f0bc80d04cac1456c2b4c572d352efd5b6717a262141508fe6919c8e3bb5a3",
                        "timestamp": "2021-07-21 19:00:40"
                    },
                    {
                        "value": "42d3aa6d8f6d7c2f4ed5c4a0d0b3b160bbcf1964d82c0f095026f7c75e110c14",
                        "timestamp": "2021-07-21 19:00:39"
                    },
                    {
                        "value": "555f654fb51e632ba2cf49b865b6de5f5772ffba0229d73021a1c6a6f65dab08",
                        "timestamp": "2021-07-21 19:00:38"
                    },
                    {
                        "value": "f25560518e8bebbc0abdde4c0241833e432ad4c56f934bb18067c1abf7305959",
                        "timestamp": "2021-07-21 19:00:37"
                    },
                    {
                        "value": "10d971c860d4f8ad93b86f47fbc0cd285897769dd60bb68dea4377bb6e7d6f1f",
                        "timestamp": "2021-07-09 19:00:43"
                    },
                    {
                        "value": "2c563c0ca6aadef9b039b1e542329bec04c9915f433e6b27026cf08db52aceb6",
                        "timestamp": "2021-07-09 19:00:43"
                    },
                    {
                        "value": "08a75beea96e15a6bc2e838cf0649ef0e3be100b819d4513b816778f18903c12",
                        "timestamp": "2021-07-09 19:00:43"
                    },
                    {
                        "value": "1409acb6dd320620a038e8571fa1bfdbbdc659f240a5a17d1db2c8af530ae548",
                        "timestamp": "2021-07-09 19:00:42"
                    }
                ],
                "ip:port": [
                    {
                        "value": "185.163.45.248:443",
                        "timestamp": "2021-09-29 15:40:02"
                    },
                    {
                        "value": "194.180.174.56:443",
                        "timestamp": "2021-08-14 07:16:12"
                    },
                    {
                        "value": "194.180.174.20:443",
                        "timestamp": "2021-08-11 07:37:38"
                    },
                    {
                        "value": "185.163.47.254:443",
                        "timestamp": "2021-07-19 06:28:35"
                    },
                    {
                        "value": "185.163.45.90:443",
                        "timestamp": "2021-07-16 07:43:52"
                    },
                    {
                        "value": "185.163.47.171:443",
                        "timestamp": "2021-07-13 06:26:56"
                    },
                    {
                        "value": "185.163.45.87:443",
                        "timestamp": "2021-06-28 05:32:50"
                    },
                    {
                        "value": "103.113.159.7:443",
                        "timestamp": "2021-05-23 06:33:58"
                    },
                    {
                        "value": "140.82.57.172:443",
                        "timestamp": "2021-04-03 06:20:06"
                    },
                    {
                        "value": "45.77.122.108:443",
                        "timestamp": "2021-03-31 07:26:14"
                    },
                    {
                        "value": "5.181.156.79:443",
                        "timestamp": "2021-03-27 15:40:23"
                    },
                    {
                        "value": "185.225.19.253:443",
                        "timestamp": "2021-03-16 19:30:59"
                    },
                    {
                        "value": "5.181.156.250:443",
                        "timestamp": "2021-03-16 19:10:54"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-12-18 08:10:07",
    "file_name": "servhelper",
    "analysis": null,
    "articles": [
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
            "data_url": "https://prodaft.com/m/reports/TeslaGun_TLPWHITE.pdf",
            "date": "2022-09-05",
            "organization": "PRODAFT",
            "author": "PRODAFT",
            "title": "TA505 Group\u2019s TeslaGun In-Depth Analysis",
            "categories": [
                "ServHelper"
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
            "data_url": "https://blog.talosintelligence.com/2021/08/raccoon-and-amadey-install-servhelper.html",
            "date": "2021-08-12",
            "organization": "Cisco Talos",
            "author": "Vanja Svajcer",
            "title": "Signed MSI files, Raccoon and Amadey are used for installing ServHelper RAT",
            "categories": [
                "Amadey",
                "Raccoon",
                "ServHelper"
            ]
        },
        {
            "data_url": "https://medium.com/walmartglobaltech/ta505-adds-golang-crypter-for-delivering-miners-and-servhelper-af70b26a6e56",
            "date": "2021-07-06",
            "organization": "Medium walmartglobaltech",
            "author": "Jason Reaves",
            "title": "TA505 adds GoLang crypter for delivering miners and ServHelper",
            "categories": [
                "ServHelper"
            ]
        },
        {
            "data_url": "https://insights.oem.avira.com/ta505-apt-group-targets-americas/",
            "date": "2020-10-03",
            "organization": "Avira",
            "author": "Avira Protection Labs",
            "title": "TA505 targets the Americas in a new campaign",
            "categories": [
                "ServHelper"
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
            "data_url": "https://www.gdatasoftware.com/blog/2020/07/36122-hidden-miners",
            "date": "2020-07-09",
            "organization": "Gdata",
            "author": "G DATA Security Lab",
            "title": "ServHelper: Hidden Miners",
            "categories": [
                "ServHelper"
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
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/operation-ta505-part2/",
            "date": "2020-05-22",
            "organization": "Positive Technologies",
            "author": "PT ESC Threat Intelligence",
            "title": "Operation TA505: investigating the ServHelper backdoor with NetSupport RAT. Part 2.",
            "categories": [
                "NetSupportManager RAT",
                "ServHelper"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/a-brief-history-of-ta505",
            "date": "2020-05-21",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "A brief history of TA505",
            "categories": [
                "AndroMut",
                "Bart",
                "Dridex",
                "FlawedAmmyy",
                "FlawedGrace",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Jaff",
                "Kegotip",
                "Locky",
                "Necurs",
                "Philadephia Ransom",
                "Pony",
                "QuantLoader",
                "Rockloader",
                "SDBbot",
                "ServHelper",
                "Shifu",
                "Snatch",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/uploads/2020/02/13/cb78386a082f465f259b37dae5df4884.pdf",
            "date": "2020-02-13",
            "organization": "Qianxin",
            "author": "Qi Anxin Threat Intelligence Center",
            "title": "APT Report 2019",
            "categories": [
                "Chrysaor",
                "Exodus",
                "Dacls",
                "VPNFilter",
                "DNSRat",
                "Griffon",
                "KopiLuwak",
                "More_eggs",
                "SQLRat",
                "AppleJeus",
                "BONDUPDATER",
                "Agent.BTZ",
                "Anchor",
                "AndroMut",
                "AppleJeus",
                "BOOSTWRITE",
                "Brambul",
                "Carbanak",
                "Cobalt Strike",
                "Dacls",
                "DistTrack",
                "DNSpionage",
                "Dtrack",
                "ELECTRICFISH",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Grateful POS",
                "HOPLIGHT",
                "Imminent Monitor RAT",
                "jason",
                "Joanap",
                "KerrDown",
                "KEYMARBLE",
                "Lambert",
                "LightNeuron",
                "LoJax",
                "MiniDuke",
                "PolyglotDuke",
                "PowerRatankba",
                "Rising Sun",
                "SDBbot",
                "ServHelper",
                "Snatch",
                "Stuxnet",
                "TinyMet",
                "tRat",
                "TrickBot",
                "Volgmer",
                "X-Agent",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://securitynews.sonicwall.com/xmlpost/servhelper-2-0-enriched-with-bot-capabilities-and-allow-remote-desktop-access/",
            "date": "2020-01-09",
            "organization": "SonicWall",
            "author": "SonicWall",
            "title": "ServHelper 2.0: Enriched with bot capabilities and allow remote desktop access",
            "categories": [
                "ServHelper"
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
            "data_url": "https://www.binarydefense.com/an-updated-servhelper-tunnel-variant/",
            "date": "2019-12-20",
            "organization": "Binary Defense",
            "author": "James Quinn",
            "title": "An Updated ServHelper Tunnel Variant",
            "categories": [
                "ServHelper"
            ]
        },
        {
            "data_url": "https://www.blueliv.com/cyber-security-and-cyber-threat-intelligence-blog-blueliv/research/servhelper-evolution-and-new-ta505-campaigns/",
            "date": "2019-12-17",
            "organization": "Blueliv",
            "author": "Adri\u00e1n Ruiz",
            "title": "TA505 evolves ServHelper, uses Predator The Thief and Team Viewer Hijacking",
            "categories": [
                "ServHelper",
                "TA505"
            ]
        },
        {
            "data_url": "https://threatrecon.nshc.net/2019/08/29/sectorj04-groups-increased-activity-in-2019/",
            "date": "2019-08-29",
            "organization": "ThreatRecon",
            "author": "ThreatRecon Team",
            "title": "SectorJ04 Group\u2019s Increased Activity in 2019",
            "categories": [
                "FlawedAmmyy",
                "ServHelper",
                "TA505"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/ta505-at-it-again-variety-is-the-spice-of-servhelper-and-flawedammyy/",
            "date": "2019-08-27",
            "organization": "Trend Micro",
            "author": "Hara Hiroaki",
            "title": "TA505 At It Again: Variety is the Spice of ServHelper and FlawedAmmyy",
            "categories": [
                "FlawedAmmyy",
                "ServHelper"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/threat-actor-ta505-targets-financial-enterprises-using-lolbins-and-a-new-backdoor-malware",
            "date": "2019-04-25",
            "organization": "Cybereason",
            "author": "Cybereason Nocturnus",
            "title": "Threat Actor TA505 Targets Financial Enterprises Using LOLBins and a New Backdoor Malware",
            "categories": [
                "ServHelper",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.deepinstinct.com/2019/04/02/new-servhelper-variant-employs-excel-4-0-macro-to-drop-signed-payload/",
            "date": "2019-04-02",
            "organization": "DeepInstinct",
            "author": "Shaul Vilkomir-Preisman",
            "title": "New ServHelper Variant Employs Excel 4.0 Macro to Drop Signed Payload",
            "categories": [
                "ServHelper"
            ]
        },
        {
            "data_url": "https://ti.360.net/blog/articles/excel-4.0-macro-utilized-by-ta505-to-target-financial-institutions-recently-en/",
            "date": "2019-01-24",
            "organization": "\u5947\u5b89\u4fe1\u5a01\u80c1\u60c5\u62a5\u4e2d\u5fc3",
            "author": "\u4e8b\u4ef6\u8ffd\u8e2a",
            "title": "Excel 4.0 Macro Utilized by TA505 to Target Financial Institutions Recently",
            "categories": [
                "ServHelper"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/servhelper-and-flawedgrace-new-malware-introduced-ta505",
            "date": "2019-01-09",
            "organization": "Proofpoint",
            "author": "Dennis Schwarz",
            "title": "ServHelper and FlawedGrace - New malware introduced by TA505",
            "categories": [
                "FlawedGrace",
                "ServHelper"
            ]
        },
        {
            "data_url": "https://e.cyberint.com/hubfs/Report%20Legit%20Remote%20Access%20Tools%20Turn%20Into%20Threat%20Actors%20Tools/CyberInt_Legit%20Remote%20Access%20Tools%20Turn%20Into%20Threat%20Actors'%20Tools_Report.pdf",
            "date": "2019",
            "organization": "CyberInt",
            "author": "CyberInt",
            "title": "Legit Remote Admin Tools Turn into Threat Actors' Tools",
            "categories": [
                "RMS",
                "ServHelper",
                "TA505"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "servhelper",
            "procedure_code": "s0382",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0382",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "servhelper has the ability to execute a powershell script to get information from the infected host.[205]"
                },
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
                    "procedure_description": "servhelper can execute shell commands against cmd.[298][299]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "servhelper contains modules that will use schtasks to carry out malicious operations.[156]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1098",
                    "technique_link": "https://attack.mitre.org/techniques/T1098",
                    "technique_name": "account manipulation",
                    "technique_description": "adversaries may manipulate accounts to maintain access to victim systems. account manipulation may consist of any action that preserves adversary access to a compromised account, such as modifying credentials or permission groups. these actions could also include account activity designed to subvert security policies, such as performing iterative password updates to bypass password duration policies and preserve the life of compromised credentials.",
                    "procedure_description": "servhelper has added a user named \"supportaccount\" to the remote desktop users and administrators groups.[13]"
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
                    "procedure_description": "servhelper may attempt to establish persistence via the hkcu\\software\\microsoft\\windows\\currentversion\\run\\ run key.[239]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1136.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1136/001",
                    "technique_name": "create account : local account",
                    "technique_description": "adversaries may create a local account to maintain access to victim systems. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service. with a sufficient level of access, the net user /add command can be used to create a local account. on macos systems the dscl -create command can be used to create a local account. local accounts may also be added to network devices, often via common network device cli commands such as username.",
                    "procedure_description": "servhelper has created a new user named \"supportaccount\".[22]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "servhelper contains modules that will use schtasks to carry out malicious operations.[156]"
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
                    "procedure_description": "servhelper may attempt to establish persistence via the hkcu\\software\\microsoft\\windows\\currentversion\\run\\ run key.[239]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "servhelper contains modules that will use schtasks to carry out malicious operations.[156]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "servhelper has a module to delete itself from the infected machine.[213][214]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/011",
                    "technique_name": "system binary proxy execution : rundll32",
                    "technique_description": "adversaries may abuse rundll32.exe to proxy execution of malicious code. using rundll32.exe, vice executing directly (i.e. shared modules), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. rundll32.exe is commonly associated with executing dll payloads (ex: rundll32.exe {dllname, dllfunction}).",
                    "procedure_description": "servhelper contains a module for downloading and executing dlls that leverages rundll32.exe.[89]"
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
                    "procedure_description": "servhelper will attempt to enumerate windows version and system architecture.[327]"
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
                    "procedure_description": "servhelper will attempt to enumerate the username of the victim.[165]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/001",
                    "technique_name": "remote services : remote desktop protocol",
                    "technique_description": "adversaries may use valid accounts to log into a computer using the remote desktop protocol (rdp). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "servhelper has commands for adding a remote desktop user and sending rdp traffic to the attacker through a reverse ssh tunnel.[50]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "servhelper uses http for c2.[297]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "servhelper may set up a reverse ssh tunnel to give the attacker access to services running on the victim, such as rdp.[47]"
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
                    "procedure_description": "servhelper may download additional files to execute.[400][401]"
                }
            ]
        }
    ]
};