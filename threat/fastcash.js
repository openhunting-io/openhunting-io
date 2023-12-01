var threatdata = {
    "name": "FASTCash",
    "alias": "FASTCash",
    "category": "Malware",
    "type": "SWIFT malware",
    "modified": "2020-08-27",
    "all_data": {
        "tool": "FASTCash",
        "names": [
            {
                "name": "FASTCash"
            }
        ],
        "description": "(US-CERT) Since at least late 2016, HIDDEN COBRA actors have used FASTCash tactics to target banks in Africa and Asia. At the time of this TA\u2019s publication, the U.S. Government has not confirmed any FASTCash incidents affecting institutions within the United States.\n\nFASTCash schemes remotely compromise payment switch application servers within banks to facilitate fraudulent transactions. The U.S. Government assesses that HIDDEN COBRA actors will continue to use FASTCash tactics to target retail payment systems vulnerable to remote exploitation.",
        "category": "Malware",
        "type": [
            "SWIFT malware"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/alerts/TA18-275A",
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar20-239c",
            "https://threatrecon.nshc.net/2019/01/23/sectora01-custom-proxy-utility-tool-analysis/",
            "https://github.com/fboldewin/FastCashMalwareDissected/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/aix.fastcash"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:FASTCash"
        ],
        "uuid": "323a75f9-3aef-40f2-86eb-aac66de09189",
        "last-card-change": "2020-08-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "FastCash",
            "malware_alias": null,
            "malware": "aix.fastcash",
            "last_update": "2023-04-26 18:30:06",
            "tags": [
                "Amadey",
                "Hancitor",
                "Gozi",
                "ISFB",
                "Cerberus"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://173.234.25.78/updates.rss",
                        "timestamp": "2021-01-26 18:39:39"
                    }
                ],
                "domain": [
                    {
                        "value": "rebreaksstonehen.at",
                        "timestamp": "2023-04-26 18:30:05"
                    },
                    {
                        "value": "speeduppercolatorl.at",
                        "timestamp": "2023-04-26 18:30:03"
                    },
                    {
                        "value": "vastyrannouse.at",
                        "timestamp": "2023-04-26 18:30:06"
                    },
                    {
                        "value": "conlymorect.ru",
                        "timestamp": "2021-01-14 05:33:12"
                    },
                    {
                        "value": "spabyasiande.ru",
                        "timestamp": "2021-01-14 05:33:12"
                    },
                    {
                        "value": "france2021flplayer.info",
                        "timestamp": "2021-01-08 18:55:22"
                    },
                    {
                        "value": "france2021flplayer.site",
                        "timestamp": "2021-01-08 18:55:22"
                    },
                    {
                        "value": "spain2021flplayer.site",
                        "timestamp": "2021-01-08 18:55:22"
                    },
                    {
                        "value": "fersite24.xyz",
                        "timestamp": "2020-12-19 06:18:30"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-04-26 18:30:06",
    "file_name": "fastcash",
    "analysis": null,
    "articles": [],
    "mitre": []
};