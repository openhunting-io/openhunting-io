var threatdata = {
    "name": "Nymaim",
    "alias": "Nymaim, nymain",
    "category": "Malware",
    "type": "Banking trojan, Downloader",
    "modified": "2022-09-15",
    "all_data": {
        "tool": "Nymaim",
        "names": [
            {
                "name": "Nymaim"
            },
            {
                "name": "nymain"
            }
        ],
        "description": "(Digital Forensics Corp) Nymaim was discovered in 2013 and is a downloader. It recently teamed up with the banking trojan {{Gozi ISFB}}, so there was a new family of malware called {{GozNym}}. However, the original version Nymaim still continues to be used as the boot various other threats.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Downloader"
        ],
        "information": [
            "https://www.digitalforensics.com/blog/nymaim-the-banker-trojan-advanced-analysis/",
            "https://www.proofpoint.com/us/threat-insight/post/nymaim-config-decoded",
            "https://www.cert.pl/en/news/single/nymaim-revisited/",
            "https://bitbucket.org/daniel_plohmann/idapatchwork",
            "https://arielkoren.com/blog/2016/11/02/nymaim-deep-technical-dive-adventures-in-evasive-malware/",
            "https://public.gdatasoftware.com/Web/Landingpages/DE/GI-Spring2014/slides/004_plohmann.pdf",
            "https://github.com/coldshell/Malware-Scripts/tree/master/Nymaim"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.nymaim"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:nymaim"
        ],
        "uuid": "4817d735-637c-4953-bb38-d670cb411228",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Nymaim",
            "malware_alias": "nymain",
            "malware": "win.nymaim",
            "last_update": "2022-11-14 17:06:57",
            "tags": [
                "Nymaim",
                "GCleaner"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "45.139.105.171:80",
                        "timestamp": "2022-11-14 17:06:57"
                    },
                    {
                        "value": "85.31.46.167:80",
                        "timestamp": "2022-11-14 17:06:57"
                    },
                    {
                        "value": "107.182.129.235:80",
                        "timestamp": "2022-11-14 17:06:57"
                    },
                    {
                        "value": "171.22.30.106:80",
                        "timestamp": "2022-11-14 17:06:57"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-11-14 17:06:57",
    "file_name": "nymaim",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.sekoia.io/privateloader-the-loader-of-the-prevalent-ruzki-ppi-service/",
            "date": "2022-09-15",
            "organization": "Sekoia",
            "author": "Threat & Detection Research Team",
            "title": "PrivateLoader: the loader of the prevalent ruzki PPI service",
            "categories": [
                "Agent Tesla",
                "Coinminer",
                "DanaBot",
                "DCRat",
                "Eternity Stealer",
                "Glupteba",
                "Mars Stealer",
                "NetSupportManager RAT",
                "Nymaim",
                "Nymaim2",
                "Phoenix Keylogger",
                "PrivateLoader",
                "Raccoon",
                "RedLine Stealer",
                "SmokeLoader",
                "Socelars",
                "STOP",
                "Vidar",
                "YTStealer"
            ]
        },
        {
            "data_url": "https://www.lawfareblog.com/what-point-these-nation-state-indictments",
            "date": "2021-02-08",
            "organization": "Lawfare Blog",
            "author": "David Hechler",
            "title": "What Is the Point of These Nation-State Indictments?",
            "categories": [
                "Gameover P2P",
                "Nymaim"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/blog/goznym-banking-malware-gang-busted/",
            "date": "2019-05-20",
            "organization": "SentinelOne",
            "author": "SentinelOne",
            "title": "GozNym Banking Malware: Gang Busted, But Is That The End?",
            "categories": [
                "Nymaim"
            ]
        },
        {
            "data_url": "https://www.shadowserver.org/news/goznym-indictments-action-following-on-from-successful-avalanche-operations/",
            "date": "2019-05-16",
            "organization": "The Shadowserver Foundation",
            "author": "The Shadowserver Foundation",
            "title": "Goznym Indictments \u2013 action following on from successful Avalanche Operations",
            "categories": [
                "Nymaim"
            ]
        },
        {
            "data_url": "https://www.justice.gov/opa/pr/goznym-cyber-criminal-network-operating-out-europe-targeting-american-entities-dismantled",
            "date": "2019-05-16",
            "organization": "Department of Justice",
            "author": "Office of Public Affairs",
            "title": "GozNym Cyber-Criminal Network Operating out of Europe Targeting American Entities Dismantled in International Operation",
            "categories": [
                "Nymaim"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/goznym-closure-comes-in-the-shape-of-a-europol-and-doj-arrest-operation/",
            "date": "2019-05-16",
            "organization": "SecurityIntelligence",
            "author": "Limor Kessem",
            "title": "GozNym Closure Comes in the Shape of a Europol and DOJ Arrest Operation",
            "categories": [
                "Nymaim"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/nymaim-config-decoded",
            "date": "2019-03-12",
            "organization": "Proofpoint",
            "author": "Georgi Mladenov",
            "title": "Nymaim config decoded",
            "categories": [
                "Nymaim"
            ]
        },
        {
            "data_url": "https://github.com/coldshell/Malware-Scripts/tree/master/Nymaim",
            "date": "2019-01-18",
            "organization": "Github (coldshell)",
            "author": "Coldshell",
            "title": "Nymaim deobfuscation",
            "categories": [
                "Nymaim"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/conference/vb2017/abstracts/linking-xpaj-and-nymaim",
            "date": "2017-10-05",
            "organization": "Virus Bulletin",
            "author": "Doina Cosovan",
            "title": "Linking Xpaj and Nymaim",
            "categories": [
                "Nymaim"
            ]
        },
        {
            "data_url": "https://www.cert.pl/en/news/single/nymaim-revisited/",
            "date": "2017-01-30",
            "organization": "CERT.PL",
            "author": "Jaros\u0142aw Jedynak",
            "title": "Nymaim revisited",
            "categories": [
                "Nymaim"
            ]
        },
        {
            "data_url": "https://arielkoren.com/blog/2016/11/02/nymaim-deep-technical-dive-adventures-in-evasive-malware/",
            "date": "2016-11-02",
            "organization": "Ariel Koren's Blog",
            "author": "Ariel Koren",
            "title": "Nymaim Malware: Deep Technical Dive \u2013 Adventures in Evasive Malware",
            "categories": [
                "Nymaim"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/goznym/",
            "date": "2016-09-27",
            "organization": "Talos Intelligence",
            "author": "Edmund Brumaghin",
            "title": "Threat Spotlight: GozNym",
            "categories": [
                "Nymaim"
            ]
        },
        {
            "data_url": "https://www2.deloitte.com/content/dam/Deloitte/us/Documents/risk/us-aers-the-evolution-of-the-nymaim-criminal-enterprise.pdf",
            "date": "2016-09-14",
            "organization": "Deloitte",
            "author": "Deloitte",
            "title": "The evolution of the Nymaim Criminal Enterprise Threat Intelligence & Analytics",
            "categories": [
                "Nymaim"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/meet-goznym-the-banking-malware-offspring-of-gozi-isfb-and-nymaim/",
            "date": "2016-04-14",
            "organization": "SecurityIntelligence",
            "author": "Limor Kessem",
            "title": "Meet GozNym: The Banking Malware Offspring of Gozi ISFB and Nymaim",
            "categories": [
                "ISFB",
                "Nymaim",
                "GozNym"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/what-old-new-again-nymaim-moves-past-its-ransomware-roots-0",
            "date": "2016-02-26",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "Nymaim Moves Past Its Ransomware Roots - What Is Old Is New Again",
            "categories": [
                "Nymaim"
            ]
        },
        {
            "data_url": "https://bitbucket.org/daniel_plohmann/idapatchwork",
            "date": "2014-11-04",
            "organization": "BitBucket",
            "author": "Daniel Plohmann",
            "title": "IDApatchwork Repository",
            "categories": [
                "Nymaim"
            ]
        },
        {
            "data_url": "https://public.gdatasoftware.com/Web/Landingpages/DE/GI-Spring2014/slides/004_plohmann.pdf",
            "date": "2014",
            "organization": "Fraunhofer FKIE",
            "author": "Daniel Plohmann",
            "title": "Patchwork: Stitching against malware families with IDA Pro",
            "categories": [
                "Nymaim"
            ]
        }
    ],
    "mitre": []
};