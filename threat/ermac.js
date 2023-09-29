var threatdata = {
    "name": "ERMAC",
    "alias": "ERMAC",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Credential stealer, Botnet",
    "modified": "2023-02-15",
    "all_data": {
        "tool": "ERMAC",
        "names": [
            {
                "name": "ERMAC"
            }
        ],
        "description": "(Threatfabric) On July 23 a forum post appeared regarding a new Android banking trojan. The attached screenshots show that it is named ERMAC. Our investigation shows that ERMAC is almost fully based on the well-known banking trojan {{Cerberus}}, and is being operated by BlackRock actor(s).",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.threatfabric.com/blogs/ermac-another-cerberus-reborn.html",
            "https://blog.cyble.com/2022/05/25/ermac-back-in-action/",
            "https://blog.cyble.com/2022/10/18/ermac-android-malware-increasingly-active/",
            "https://www.threatfabric.com/blogs/hook-a-new-ermac-fork-with-rat-capabilities.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.ermac"
        ],
        "uuid": "f1a782ee-428e-4504-906d-bee5e81ca577",
        "last-card-change": "2023-02-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "ERMAC",
            "malware_alias": null,
            "malware": "apk.ermac",
            "last_update": "2023-09-06 13:29:54",
            "tags": [
                "Android",
                "ERMAC 3.0",
                "ERMAC",
                "HOOKBOT PANEL",
                "C2",
                "C2Panel"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "84.32.214.56:3434",
                        "timestamp": "2023-09-06 13:29:54"
                    },
                    {
                        "value": "185.225.75.134:3434",
                        "timestamp": "2023-08-26 07:12:11"
                    },
                    {
                        "value": "5.42.199.3:80",
                        "timestamp": "2023-01-20 04:42:52"
                    },
                    {
                        "value": "5.42.199.91:80",
                        "timestamp": "2023-01-20 04:42:52"
                    },
                    {
                        "value": "176.113.115.66:80",
                        "timestamp": "2023-01-20 04:42:52"
                    },
                    {
                        "value": "176.113.115.67:80",
                        "timestamp": "2023-01-20 04:42:52"
                    },
                    {
                        "value": "5.42.199.22:80",
                        "timestamp": "2023-04-27 05:41:50"
                    },
                    {
                        "value": "45.93.201.92:80",
                        "timestamp": "2023-01-20 04:41:00"
                    },
                    {
                        "value": "92.243.88.25:80",
                        "timestamp": "2023-01-20 04:41:00"
                    },
                    {
                        "value": "62.204.41.98:3434",
                        "timestamp": "2022-08-29 16:24:57"
                    }
                ],
                "url": [
                    {
                        "value": "http://84.32.214.56",
                        "timestamp": "2023-09-06 13:29:53"
                    },
                    {
                        "value": "http://185.225.75.134",
                        "timestamp": "2023-08-26 07:12:11"
                    },
                    {
                        "value": "http://91.228.10.228/",
                        "timestamp": "2023-07-14 06:57:40"
                    },
                    {
                        "value": "http://91.215.85.213/",
                        "timestamp": "2023-07-14 06:50:50"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-06 13:29:54",
    "mitre": [],
    "file_name": "ermac",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.threatfabric.com/blogs/zombinder-ermac-and-desktop-stealers.html",
            "date": "2022-12-08",
            "organization": "ThreatFabric",
            "author": "ThreatFabric",
            "title": "Zombinder: new obfuscation service used by Ermac, now distributed next to desktop stealers",
            "categories": [
                "ERMAC",
                "Xenomorph"
            ]
        },
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
            "data_url": "https://intel471.com/blog/rmac-2-0-perfecting-the-art-of-account-takeover",
            "date": "2022-08-31",
            "organization": "Intel 471",
            "author": "Intel 471 Malware Intelligence team",
            "title": "ERMAC 2.0: Perfecting the Account Takeover",
            "categories": [
                "ERMAC"
            ]
        },
        {
            "data_url": "https://blog.cyble.com/2022/05/25/ermac-back-in-action/",
            "date": "2022-05-25",
            "organization": "cyble",
            "author": "Cyble Research Labs",
            "title": "ERMAC Back In Action: Latest Version Of Android Banking Trojan Targets Over 400 Applications",
            "categories": [
                "ERMAC"
            ]
        },
        {
            "data_url": "https://twitter.com/ESETresearch/status/1445618031464357888",
            "date": "2021-10-06",
            "organization": "Twitter (@ESETresearch)",
            "author": "ESET Research",
            "title": "Tweet on ERMAC android malware",
            "categories": [
                "ERMAC"
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
        }
    ]
};