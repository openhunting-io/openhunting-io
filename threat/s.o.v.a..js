var threatdata = {
    "name": "S.O.V.A.",
    "alias": "S.O.V.A.",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Credential stealer, Keylogger",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "S.O.V.A.",
        "names": [
            {
                "name": "S.O.V.A."
            }
        ],
        "description": "(ThreatFabric) Sova is the Russian word for owl. This name was chosen by the threat actor himself/herself possibly because of owl\u2019s nature as nocturnal birds of prey, quiet but efficient in stalking and capturing their victims. This identifies a completely new, to the best of our knowledge, Android banking trojan. The trojan is currently in development and testing phase, and has the objective to add to his overlay and keylogging mechanisms, other higly dangerous features like DDoS and Ransomware in future versions. There are a few interesting aspects that differentiate this trojan to already existing ones, both in features as well as in development.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Keylogger"
        ],
        "information": [
            "https://www.threatfabric.com/blogs/sova-new-trojan-with-fowl-intentions.html",
            "https://blog.cyble.com/2021/09/14/deep-dive-analysis-of-s-o-v-a-android-banking-trojan/",
            "https://www.cleafy.com/cleafy-labs/sova-malware-is-back-and-is-evolving-rapidly"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S1062"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.sova"
        ],
        "uuid": "a545cd80-eb52-4142-b66b-110068498b4a",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "S.O.V.A.",
            "malware_alias": null,
            "malware": "apk.sova",
            "last_update": "2023-03-24 09:04:51",
            "tags": [
                "Nexus",
                "Android",
                "Botnet",
                "SOVA",
                "Banking",
                "C2panel"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "5.161.105.24:5000",
                        "timestamp": "2023-03-24 09:04:51"
                    },
                    {
                        "value": "5.161.116.222:5000",
                        "timestamp": "2023-03-24 09:04:51"
                    },
                    {
                        "value": "45.81.243.180:80",
                        "timestamp": "2023-03-24 09:04:51"
                    },
                    {
                        "value": "45.81.243.181:80",
                        "timestamp": "2023-03-24 09:04:51"
                    },
                    {
                        "value": "45.81.243.203:80",
                        "timestamp": "2023-03-24 09:04:51"
                    },
                    {
                        "value": "45.81.243.204:80",
                        "timestamp": "2023-03-24 09:04:51"
                    },
                    {
                        "value": "85.31.45.128:80",
                        "timestamp": "2023-03-24 09:04:51"
                    },
                    {
                        "value": "85.31.45.130:80",
                        "timestamp": "2023-03-24 09:04:51"
                    },
                    {
                        "value": "109.206.240.7:80",
                        "timestamp": "2023-03-24 09:04:51"
                    },
                    {
                        "value": "176.107.160.28:80",
                        "timestamp": "2023-03-24 09:04:51"
                    },
                    {
                        "value": "176.107.160.64:80",
                        "timestamp": "2023-03-24 09:04:51"
                    },
                    {
                        "value": "5.161.16.85:5000",
                        "timestamp": "2023-03-24 09:04:50"
                    },
                    {
                        "value": "5.161.22.241:5000",
                        "timestamp": "2023-03-24 09:04:50"
                    },
                    {
                        "value": "5.161.189.178:5000",
                        "timestamp": "2023-03-08 16:39:29"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "b5fe7385acde76459ebc61edaf6b510f9c6d42b4c54cba565b232670985f4bce",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "b7c94b8a0562ad87bd7f5764dd5b416f6cd267dec46f5157160477eb68a8bcc7",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "bbaf483c2b6f67f22eb6e1fa00f200e9c1e201b0110070acaefd416cf846b1aa",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "dcd04daa033f25e662b75edc4764657db033782c3191baa973d6c2da3f0f0d95",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "e9c42b55b2bfb18bb62858fa306c0aca8aad41764ffe7eac76def46ef83470e8",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "f5b4bd285e955d64f23e1ada3735dc4a37fe16dde9d7674d99a8cb033df2deb6",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "615715495cbc3e52a7cef9e7cfe4b5a6e4343c4caa36f7ee41d786789bc7aa93",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "74b780ed98cac6b72fd82d3260e216cd19968ba0d470f3934e618272f174c41a",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "493f24d7e8543ad526e6e30cd6e23b7d71d4391d2534d48cd54099697e85e53f",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "207915d32231466213c7ebc2113fb83c960003d8a72d15d402c22c821d771474",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "01ed7609e3bab9bcfc4cab9e055854e0d48b136bdecc6cf294e6f737a76fec02",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "6d78c5319a11c39296a576859deb5e396a1bd8621f631e95e9079bf89ced110a",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "188fb1d3a8bad42c9ed3cde807fe9f4de4899aaa9ba88bc055dbd7a42ba1beb5",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "601ad7c2874feac89a1d32d2b40c17256c5f2ecd1440f6bdb6a300f9821271e0",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "804f74149244cf400a28d13b684bb8d32535f31860f69b977f0cc386108c089f",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "8e03be6f58d97dd0ab31b37343a23e30b0bb6dc27589dce1cf7984db2cdfb43e",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "a6638f0b820902e69d81541c67386d68153f56c986da5e9d05b149cd2d8240c0",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "dbadfd1fb9aa563fefc1005934470c0284cf7a6b42411f37fc476936aeb08ee5",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "f31587897bd39f51debe148a4f9402346431eb85d9a0def8bfc5adeacadac635",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "f3a263ff80fa866f6afbf9ccd6c0b9cf8c6d221a78fd43d182a505079c7747d9",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "f68896d4dbb535e0bac2d51448be3cd959d3ab1d64284826d9d4199f8251639e",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "21343fd8eda5e491bafa9d953675afcaec9bc87fc97c791559b63411a9c93fa0",
                        "timestamp": "2023-03-09 11:27:20"
                    },
                    {
                        "value": "6f7e57ed7239905fafc3947160b5fc89ad615772d2a694299999d2fe080453f4",
                        "timestamp": "2023-03-09 11:27:20"
                    },
                    {
                        "value": "ad6150d59f5a77ad1a9a05bcbb77b6746d10e15efcd84a4afec99169e5bdaa10",
                        "timestamp": "2023-03-09 11:27:20"
                    },
                    {
                        "value": "d5cad5cc6147eb82ec39c58b08348e61c2391fcf6aee1038744091dc0814a70f",
                        "timestamp": "2023-03-09 11:27:20"
                    },
                    {
                        "value": "14cd7b6d59808b533a819620fdbea9c9813a9f1614e886534a2d03a41e119608",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "182cc43b2817250ebd80a116f82a7a410ded22ea12821ca192f8a8d29d3b0b09",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "45b64a90d9342d7046b5008355085fa23bdfe2843f82c60c557139135c23e44e",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "4f16706287452fe3c5ff0980100f068330625174dec45f23a3169cc760c8c922",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "546bc8d7b0386e95c231dff26cc755fc241bdea33243691625ec63a0a3a9487e",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "556c3ebebadeaa04e09e05447ab6cffa9481b18625dc3a0eae590e275e6ed53a",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "62ac8afc16d45c18a99b44745daf1a62a462b32cb664c3d3e2bf15ceefc45d9c",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "66de574ab3558614e486681813dc1104b7384870e49eba38660ee82a0c73bec0",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "6d3145569c1c4634073a97a16b56a78e4430053cbdab14e302457b0abfc388f3",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "72633ea297b9e621e099dd070019ecd623ee93c62b4f9d47f24726816f69cc7d",
                        "timestamp": "2023-03-09 11:27:21"
                    },
                    {
                        "value": "93094e8a36e0330cb5a49b7689687c0d12dc1858d6364ad42394aff8387bf1f7",
                        "timestamp": "2023-03-09 11:27:21"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "6c779ef382428fb5d6fca1919552fc42",
                        "timestamp": "2021-11-15 16:12:40"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-03-24 09:04:51",
    "file_name": "s.o.v.a.",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://liansecurity.com/#/main/news/RWt_ZocBrFZDfCElFqw_/detail",
            "date": "2023-04-09",
            "organization": "LianSecurity",
            "author": "LianSecurity",
            "title": "Nexus Android Trojan Analysis Report",
            "categories": [
                "Nexus",
                "S.O.V.A."
            ]
        },
        {
            "data_url": "https://blog.cyble.com/2023/03/09/nexus-the-latest-android-banking-trojan-with-sova-connections",
            "date": "2023-03-09",
            "organization": "cyble",
            "author": "Cyble",
            "title": "Nexus: The Latest Android Banking Trojan with SOVA Connections",
            "categories": [
                "S.O.V.A."
            ]
        },
        {
            "data_url": "https://muha2xmad.github.io/malware-analysis/sova/",
            "date": "2022-09-01",
            "organization": "muha2xmad",
            "author": "Muhammad Hasan Ali",
            "title": "Technical analysis of SOVA android malware",
            "categories": [
                "S.O.V.A."
            ]
        },
        {
            "data_url": "https://www.cleafy.com/cleafy-labs/sova-malware-is-back-and-is-evolving-rapidly",
            "date": "2022-08-11",
            "organization": "Cleafy",
            "author": "Francesco Iubatti",
            "title": "SOVA malware is back and is evolving rapidly",
            "categories": [
                "S.O.V.A."
            ]
        },
        {
            "data_url": "https://blog.cyble.com/2021/09/14/deep-dive-analysis-of-s-o-v-a-android-banking-trojan/",
            "date": "2021-09-14",
            "organization": "cyble",
            "author": "Cyble",
            "title": "Deep-dive Analysis of S.O.V.A. Android Banking Trojan",
            "categories": [
                "S.O.V.A."
            ]
        },
        {
            "data_url": "https://www.threatfabric.com/blogs/sova-new-trojan-with-fowl-intentions.html",
            "date": "2021-09-10",
            "organization": "ThreatFabric",
            "author": "ThreatFabric",
            "title": "S.O.V.A. - A new Android Banking trojan with fowl intentions",
            "categories": [
                "S.O.V.A."
            ]
        }
    ],
    "mitre": []
};