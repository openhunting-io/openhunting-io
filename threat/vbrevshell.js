var threatdata = {
    "name": "VBREVSHELL",
    "alias": "VBREVSHELL",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "VBREVSHELL",
        "names": [
            {
                "name": "VBREVSHELL"
            }
        ],
        "description": "(Mandiant) VBREVSHELL is a VBA macro that spawns a reverse shell relying exclusively on Windows API calls.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.mandiant.com/media/17826"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/vbs.vbrevshell"
        ],
        "uuid": "a9009c1b-7b90-4f76-8fba-1bc05f1879b2",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "VBREVSHELL",
            "malware_alias": null,
            "malware": "vbs.vbrevshell",
            "last_update": "2023-12-01 17:36:15",
            "tags": [
                "Vshell",
                "ViriBack"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "84.32.41.23:8082",
                        "timestamp": "2023-12-01 17:36:02"
                    },
                    {
                        "value": "45.77.250.196:8082",
                        "timestamp": "2023-12-01 17:36:03"
                    },
                    {
                        "value": "134.122.132.23:8082",
                        "timestamp": "2023-12-01 17:36:12"
                    },
                    {
                        "value": "82.157.154.37:8082",
                        "timestamp": "2023-12-01 17:36:15"
                    },
                    {
                        "value": "116.204.110.99:8082",
                        "timestamp": "2023-11-27 23:48:16"
                    },
                    {
                        "value": "47.115.230.18:8098",
                        "timestamp": "2023-11-19 23:48:17"
                    },
                    {
                        "value": "27.124.47.147:8088",
                        "timestamp": "2023-11-13 23:48:16"
                    },
                    {
                        "value": "134.122.132.52:8082",
                        "timestamp": "2023-11-13 23:48:16"
                    },
                    {
                        "value": "172.247.35.240:8082",
                        "timestamp": "2023-11-13 23:48:16"
                    },
                    {
                        "value": "198.52.97.143:8082",
                        "timestamp": "2023-11-13 23:48:15"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-12-01 17:36:15",
    "file_name": "vbrevshell",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/media/17826",
            "date": "2022-09-07",
            "organization": "Mandiant",
            "author": "Mandiant Intelligence",
            "title": "APT42: Crooked Charms, Cons  and Compromises",
            "categories": [
                "PINEFLOWER",
                "VINETHORN",
                "VBREVSHELL",
                "BROKEYOLK",
                "DOSTEALER",
                "GHAMBAR",
                "SILENTUPLOADER"
            ]
        }
    ],
    "mitre": []
};