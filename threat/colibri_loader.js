var threatdata = {
    "name": "Colibri Loader",
    "alias": "Colibri Loader",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "Colibri Loader",
        "names": [
            {
                "name": "Colibri Loader"
            }
        ],
        "description": "(CloudSEK) On 27 August 2021, cybersecurity researchers discovered a malware loader dubbed Colibri being sold on an underground Russian forum. The actors claim that the loader is stealthy and can be used to target Windows systems, to drop other malware onto the infected system.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://cloudsek.com/in-depth-technical-analysis-of-colibri-loader-malware/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.colibri"
        ],
        "uuid": "7b49a6a9-6d3a-4a1a-9307-2e24b8d1a8c1",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Colibri Loader",
            "malware_alias": null,
            "malware": "win.colibri",
            "last_update": "2023-02-13 10:45:28",
            "tags": [
                "Colibri",
                "MarsWallet",
                "ColibriLoader"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://194.4.49.243/gate.php",
                        "timestamp": "2023-02-13 10:45:28"
                    },
                    {
                        "value": "http://176.113.115.240/gate.php",
                        "timestamp": "2023-01-17 07:01:04"
                    },
                    {
                        "value": "http://yugyuvyugguitgyuigtfyutdtoghghbbgyv.cx/gate.php",
                        "timestamp": "2022-10-19 15:30:56"
                    },
                    {
                        "value": "http://65.109.7.23/gate.php",
                        "timestamp": "2022-10-05 22:02:19"
                    },
                    {
                        "value": "http://zpltcmgodhvvedxtfcygvbgjkvgvcguygytfigj.cc/gate.php",
                        "timestamp": "2022-08-31 07:10:39"
                    }
                ],
                "ip:port": [
                    {
                        "value": "176.113.115.240:80",
                        "timestamp": "2023-01-17 06:22:59"
                    },
                    {
                        "value": "65.109.7.23:80",
                        "timestamp": "2022-10-05 22:01:18"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-02-13 10:45:28",
    "file_name": "colibri_loader",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.bitsight.com/blog/unpacking-colibri-loader-russian-apt-linked-campaign",
            "date": "2022-11-30",
            "organization": "BitSight",
            "author": "Andr\u00e9 Tavares",
            "title": "Unpacking Colibri Loader: A Russian APT linked Campaign",
            "categories": [
                "Colibri Loader",
                "PrivateLoader"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2022-0919.pdf",
            "date": "2022-09-19",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "Russia-Nexus UAC-0113  Emulating Telecommunication  Providers in Ukraine",
            "categories": [
                "Ave Maria",
                "Colibri Loader",
                "DCRat"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-intelligence/2022/04/colibri-loader-combines-task-scheduler-and-powershell-in-clever-persistence-technique/",
            "date": "2022-04-05",
            "organization": "Malwarebytes Labs",
            "author": "Ankur Saini",
            "title": "Colibri Loader combines Task Scheduler and PowerShell in clever persistence technique",
            "categories": [
                "Colibri Loader",
                "Mars Stealer"
            ]
        },
        {
            "data_url": "https://cloudsek.com/in-depth-technical-analysis-of-colibri-loader-malware/",
            "date": "2022-03-11",
            "organization": "Cloudsek",
            "author": "Marah Aboud",
            "title": "In-depth Technical Analysis of Colibri Loader Malware",
            "categories": [
                "Colibri Loader"
            ]
        },
        {
            "data_url": "https://github.com/Casperinous/colibri_loader",
            "date": "2022-02-19",
            "organization": "Github (Casperinous)",
            "author": "Casperinous",
            "title": "IDA scripts for analysis of Colibri Loader",
            "categories": [
                "Colibri Loader"
            ]
        },
        {
            "data_url": "https://fr3d.hk/blog/colibri-loader-back-to-basics",
            "date": "2022-02-13",
            "organization": "FR3D.HK",
            "author": "FR3D.HK",
            "title": "Colibri Loader - Back to basics",
            "categories": [
                "Colibri Loader"
            ]
        }
    ],
    "mitre": []
};