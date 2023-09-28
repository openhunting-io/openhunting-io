var threatdata = {
    "name": "SparkRAT",
    "alias": "SparkRAT",
    "category": "Tools",
    "type": "Backdoor",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "SparkRAT",
        "names": [
            {
                "name": "SparkRAT"
            }
        ],
        "description": "(SentinelLabs) SparkRAT is a RAT developed in Golang and released as open source software by the Chinese-speaking developer XZB-1248. SparkRAT is a feature-rich and multi-platform tool that supports the Windows, Linux, and macOS operating systems.\n\nSparkRAT uses the WebSocket protocol to communicate with the C2 server and features an upgrade system. This enables the RAT to automatically upgrade itself to the latest version available on the C2 server upon startup by issuing an upgrade request. This is an HTTP POST request, with the commit query parameter storing the current version of the tool.",
        "category": "Tools",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.sentinelone.com/labs/dragonspark-attacks-evade-detection-with-sparkrat-and-golang-source-code-interpretation/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.spark_rat"
        ],
        "uuid": "b566744a-fe14-45fd-83f9-7ccbf4325fac",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "SparkRAT",
            "malware_alias": null,
            "malware": "win.spark_rat",
            "last_update": "2023-09-07 06:40:25",
            "tags": [
                "APT36",
                "TransparentTribe",
                "APT",
                "SparkRAT",
                "RAT"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "43.140.252.169:8000",
                        "timestamp": "2023-09-07 06:40:25"
                    },
                    {
                        "value": "130.185.238.251:7777",
                        "timestamp": "2023-05-08 12:21:21"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "8942c78d1c9abee21c58ba2444083b40",
                        "timestamp": "2023-09-05 07:56:41"
                    },
                    {
                        "value": "606115347958dca7ac3c206c643d5419",
                        "timestamp": "2023-07-24 12:00:05"
                    },
                    {
                        "value": "f7e2dac6a8edf639212bdd4af905ba2c",
                        "timestamp": "2023-07-24 12:00:04"
                    },
                    {
                        "value": "ca77027959864b4809487127321694f7",
                        "timestamp": "2023-07-24 12:00:04"
                    },
                    {
                        "value": "ebc8f74281e0481b9da06b8c0d421ba6",
                        "timestamp": "2023-07-24 12:00:04"
                    },
                    {
                        "value": "2e66189aa1b6fd345a9c13124844ebbc",
                        "timestamp": "2023-07-24 12:00:04"
                    }
                ],
                "domain": [
                    {
                        "value": "6jxbmkpe.torontobotdns.com",
                        "timestamp": "2023-07-24 12:02:10"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-07 06:40:25",
    "mitre": [],
    "file_name": "sparkrat",
    "analysis": null
};