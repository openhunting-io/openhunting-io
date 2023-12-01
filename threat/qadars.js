var threatdata = {
    "name": "Qadars",
    "alias": "Qadars",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Credential stealer, Botnet",
    "modified": "2022-04-27",
    "all_data": {
        "tool": "Qadars",
        "names": [
            {
                "name": "Qadars"
            }
        ],
        "description": "(ESET) A new banking Trojan has been making its round in the past few months. First publicly discussed by LEXSI, this banking Trojan has been very active, infecting users throughout the world. Its modus operandi is banking fraud through web injection. While this approach has been present for a long time in various banking Trojan families, it is still effective. Win32/Qadars uses a wide variety of webinjects, some with Android mobile components, used to bypass online banking security and to gain access to user\u2019s bank account. Usually, banking Trojans either target a broad array of financial institutions or focus on a much smaller subset, usually institutions of which the user base is geographically close. Win32/Qadars fall in the second category: it pinpoints users in specific regions and uses webinject configuration files tailored to the banks most commonly used by the victims.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.welivesecurity.com/2013/12/18/qadars-a-banking-trojan-with-the-netherlands-in-its-sights/",
            "https://securityintelligence.com/meanwhile-britain-qadars-v3-hardens-evasion-targets-18-uk-banks/",
            "https://info.phishlabs.com/blog/dissecting-the-qadars-banking-trojan",
            "https://pages.phishlabs.com/rs/130-BFB-942/images/Qadars%20-%20Final.pdf",
            "https://securityintelligence.com/an-analysis-of-the-qadars-trojan/",
            "https://www.johannesbader.ch/2016/04/the-dga-of-qadars/",
            "https://www.countercept.com/our-thinking/decrypting-qadars-banking-trojan-c2-traffic/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.qadars"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Qadars"
        ],
        "uuid": "144de65c-7f10-4653-a970-eb3ea79e64e2",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Qadars",
            "malware_alias": null,
            "malware": "win.qadars",
            "last_update": "2021-04-30 12:55:36",
            "tags": [
                "qadars",
                "qakbot"
            ],
            "ioc": {
                "sha3_384_hash": [
                    {
                        "value": "de1e6a5b7ab1bb7fc9e0be59fb10da914c2b6343104cd422471cc9bc4064958f5012975939baaeae4f2bc4cdbc76b142",
                        "timestamp": "2021-04-30 12:55:36"
                    }
                ],
                "sha1_hash": [
                    {
                        "value": "3c4e06abf9b4cea93e79c05d3355780d96cfc009",
                        "timestamp": "2021-04-30 10:22:46"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "e9d6516853f869788a26b4ef80b0fbcc",
                        "timestamp": "2021-04-30 10:11:36"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "29516452f5a958474c9ed362a9e3f71909148d950945c27a3e83fdfcc8184728",
                        "timestamp": "2021-04-30 09:34:02"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-04-30 12:55:36",
    "file_name": "qadars",
    "analysis": null,
    "articles": [
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
            "data_url": "https://info.phishlabs.com/blog/dissecting-the-qadars-banking-trojan",
            "date": "2017-02-22",
            "organization": "PhishLabs",
            "author": "Raashid Bhat",
            "title": "Dissecting the Qadars Banking Trojan",
            "categories": [
                "Qadars"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/meanwhile-britain-qadars-v3-hardens-evasion-targets-18-uk-banks/",
            "date": "2016-09-20",
            "organization": "SecurityIntelligence",
            "author": "Limor Kessem",
            "title": "Meanwhile in Britain, Qadars v3 Hardens Evasion, Targets 18 UK Banks",
            "categories": [
                "Qadars"
            ]
        },
        {
            "data_url": "https://www.johannesbader.ch/2016/04/the-dga-of-qadars/",
            "date": "2016-04-12",
            "organization": "",
            "author": "Johannes Bader",
            "title": "The DGA of Qadars v3",
            "categories": [
                "Qadars"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/an-analysis-of-the-qadars-trojan/",
            "date": "2015-07-23",
            "organization": "SecurityIntelligence",
            "author": "Igor Aronov",
            "title": "An Analysis of the Qadars Banking Trojan",
            "categories": [
                "Qadars"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2013/12/18/qadars-a-banking-trojan-with-the-netherlands-in-its-sights/",
            "date": "2013-12-18",
            "organization": "ESET Research",
            "author": "Jean-Ian Boutin",
            "title": "Qadars \u2013 a banking Trojan with the Netherlands in its sights",
            "categories": [
                "Qadars"
            ]
        }
    ],
    "mitre": []
};