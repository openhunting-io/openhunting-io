var threatdata = {
    "name": "Nymaim",
    "alias": "Nymaim, nymain",
    "category": "Malware",
    "type": "Banking trojan, Downloader",
    "modified": "2020-05-14",
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
    "mitre": [],
    "file_name": "nymaim",
    "analysis": null
};