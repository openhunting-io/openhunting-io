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
                "ColibriLoader",
                "Colibri",
                "MarsWallet"
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
    "mitre": [],
    "file_name": "colibri_loader",
    "analysis": null
};