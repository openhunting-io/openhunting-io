var threatdata = {
    "name": "sLoad",
    "alias": "sLoad, StarsLord",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Banking trojan, Info stealer, Downloader",
    "modified": "2021-06-21",
    "all_data": {
        "tool": "sLoad",
        "names": [
            {
                "name": "sLoad"
            },
            {
                "name": "StarsLord"
            }
        ],
        "description": "(Proofpoint) sLoad is also written in PowerShell. At the time of this writing, the latest version of sLoad was 5.07b, which we will analyze here. It includes noteworthy features such as:\n\n\u2022 Collection of information to report to the C&C server that includes:\no A list of running process\no Presence of .ICA files on the system (likely Citrix-related)\no Whether an Outlook folder is present on the system\no Additional reconnaissance data\n\u2022 The ability to take screenshots\n\u2022 Checking the DNS cache for specific domains (e.g., targeted banks)\n\u2022 Loading external binaries",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Banking trojan",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/sload-and-ramnit-pairing-sustained-campaigns-against-uk-and-italy",
            "https://threatpost.com/sload-malware-revamped-starslord-l-features/152084/",
            "https://cyware.com/news/new-sload-malware-downloader-being-leveraged-by-apt-group-ta554-to-spread-ramnit-7d03f2d9",
            "https://isc.sans.edu/forums/diary/Malicious+Powershell+Targeting+UK+Bank+Customers/23675/",
            "https://blog.yoroi.company/research/the-sload-powershell-threat-is-expanding-to-italy/",
            "https://www.cybereason.com/blog/banking-trojan-delivered-by-lolbins-ramnit-trojan"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.sload"
        ],
        "uuid": "02ef4587-9f94-4cfd-869a-7bebeb283516",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "sLoad",
            "malware_alias": "Starslord",
            "malware": "ps1.sload",
            "last_update": "2022-02-07 14:39:30",
            "tags": [
                "sLoad"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "hgjui.eu",
                        "timestamp": "2022-02-07 14:39:30"
                    },
                    {
                        "value": "hkjt.eu",
                        "timestamp": "2022-02-07 14:39:30"
                    },
                    {
                        "value": "opoietj.eu",
                        "timestamp": "2021-07-05 13:23:18"
                    },
                    {
                        "value": "sertyty.eu",
                        "timestamp": "2021-07-05 13:23:18"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-02-07 14:39:30",
    "file_name": "sload",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.minerva-labs.com/sload-targeting-europe-again",
            "date": "2021-06-21",
            "organization": "Minerva Labs",
            "author": "Minerva Labs",
            "title": "Sload Targeting Europe Again",
            "categories": [
                "sLoad"
            ]
        },
        {
            "data_url": "https://www.bitdefender.com/files/News/CaseStudies/study/377/Bitdefender-Whitepaper-WMI-creat4871-en-EN-GenericUse.pdf",
            "date": "2020-10-28",
            "organization": "Bitdefender",
            "author": "Ruben Andrei Condor",
            "title": "A Decade of WMI Abuse \u2013 an Overview of Techniques in Modern Malware",
            "categories": [
                "sLoad",
                "Emotet",
                "Maze"
            ]
        },
        {
            "data_url": "https://cert-agid.gov.it/news/campagna-sload-v-2-9-3-veicolata-via-pec/",
            "date": "2020-07-13",
            "organization": "Cert-AgID",
            "author": "Cert-AgID",
            "title": "Campagna sLoad v.2.9.3 veicolata via PEC",
            "categories": [
                "sLoad"
            ]
        },
        {
            "data_url": "https://www.cert-pa.it/notizie/campagna-sload-star-wars-edition-veicolata-via-pec/",
            "date": "2020-03-10",
            "organization": "Cert-Pa",
            "author": "Cert-PA",
            "title": "Campagna sLoad \u201cStar Wars Edition\u201d veicolata via PEC",
            "categories": [
                "sLoad"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2020/01/21/sload-launches-version-2-0-starslord/",
            "date": "2020-01-21",
            "organization": "Microsoft",
            "author": "Microsoft Defender ATP Research Team",
            "title": "sLoad launches version 2.0, Starslord",
            "categories": [
                "sLoad"
            ]
        },
        {
            "data_url": "https://threatpost.com/sload-spying-payload-delivery-bits/151120/",
            "date": "2019-12-13",
            "organization": "Threatpost",
            "author": "Tara Seals",
            "title": "Elegant sLoad Carries Out Spying, Payload Delivery in BITS",
            "categories": [
                "sLoad"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/banking-trojan-delivered-by-lolbins-ramnit-trojan",
            "date": "2019-01-03",
            "organization": "Cybereason",
            "author": "Eli Salem",
            "title": "LOLbins and trojans: How the Ramnit Trojan spreads via sLoad in a cyberattack",
            "categories": [
                "sLoad"
            ]
        },
        {
            "data_url": "https://blog.yoroi.company/research/the-sload-powershell-threat-is-expanding-to-italy/",
            "date": "2018-11-27",
            "organization": "Yoroi",
            "author": "Luigi Martire",
            "title": "The SLoad Powershell Threat is Expanding to Italy",
            "categories": [
                "sLoad"
            ]
        },
        {
            "data_url": "https://www.certego.net/en/news/sload-hits-italy-unveil-the-power-of-powershell-as-a-downloader/",
            "date": "2018-11-23",
            "organization": "Certego",
            "author": "Matteo Lodi",
            "title": "Sload hits Italy. Unveil the power of powershell as a downloader",
            "categories": [
                "sLoad"
            ]
        },
        {
            "data_url": "https://cyware.com/news/new-sload-malware-downloader-being-leveraged-by-apt-group-ta554-to-spread-ramnit-7d03f2d9",
            "date": "2018-10-25",
            "organization": "",
            "author": "Sophia Brown",
            "title": "New sLoad malware downloader being leveraged by APT group TA554 to spread Ramnit",
            "categories": [
                "sLoad"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/sload-and-ramnit-pairing-sustained-campaigns-against-uk-and-italy",
            "date": "2018-10-23",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "sLoad and Ramnit pairing in sustained campaigns against UK and Italy",
            "categories": [
                "sLoad"
            ]
        },
        {
            "data_url": "https://www.vkremez.com/2018/08/lets-learn-in-depth-into-latest-ramnit.html",
            "date": "2018-08-05",
            "organization": "Vitali Kremez Blog",
            "author": "Vitali Kremez",
            "title": "Let's Learn: Diving into the Latest \"Ramnit\" Banker Malware via \"sLoad\" PowerShell",
            "categories": [
                "sLoad"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/forums/diary/Malicious+Powershell+Targeting+UK+Bank+Customers/23675/",
            "date": "2018-05-19",
            "organization": "",
            "author": "Xavier Mertens",
            "title": "Malicious Powershell Targeting UK Bank Customers",
            "categories": [
                "sLoad"
            ]
        }
    ],
    "mitre": []
};