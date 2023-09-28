var threatdata = {
    "name": "Silence",
    "alias": "Silence, Silence.Downloader, TrueBot",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "Silence",
        "names": [
            {
                "name": "Silence"
            },
            {
                "name": "Silence.Downloader"
            },
            {
                "name": "TrueBot"
            }
        ],
        "description": "(Group-IB) Silence is a framework for attacks on infrastructure.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.group-ib.com/resources/threat-research/silence_moving-into-the-darkside.pdf",
            "https://www.group-ib.com/resources/threat-research/silence.html",
            "http://www.intezer.com/silenceofthemoles/",
            "https://securelist.com/the-silence/83009/",
            "https://reaqta.com/2019/01/silence-group-targeting-russian-banks/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.silence"
        ],
        "uuid": "1bbb3b49-056e-4e46-b9fa-c8da3c39a027",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Silence",
            "malware_alias": "TrueBot",
            "malware": "win.silence",
            "last_update": "2023-09-11 07:20:20",
            "tags": [
                "truebot",
                "Silence",
                "TrueBot"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "files-gate.com",
                        "timestamp": "2023-09-11 07:20:20"
                    },
                    {
                        "value": "nitutdra.com",
                        "timestamp": "2023-06-13 16:58:13"
                    },
                    {
                        "value": "dragonetzone.com",
                        "timestamp": "2023-06-06 09:50:10"
                    },
                    {
                        "value": "midnigthwaall.com",
                        "timestamp": "2023-06-05 06:56:55"
                    },
                    {
                        "value": "romidonionhhgtt.com",
                        "timestamp": "2023-06-01 11:55:41"
                    },
                    {
                        "value": "revisionnumeer.com",
                        "timestamp": "2023-06-01 11:55:17"
                    },
                    {
                        "value": "rprotecruuio.com",
                        "timestamp": "2023-06-01 11:55:17"
                    },
                    {
                        "value": "blocksdeer.com",
                        "timestamp": "2023-06-01 11:55:17"
                    },
                    {
                        "value": "essadonio.com",
                        "timestamp": "2023-05-20 17:39:46"
                    },
                    {
                        "value": "listofword.com",
                        "timestamp": "2023-05-18 13:54:06"
                    },
                    {
                        "value": "cdn-backdl.com",
                        "timestamp": "2023-05-18 13:42:57"
                    },
                    {
                        "value": "nomoresense.com",
                        "timestamp": "2023-05-18 09:13:50"
                    },
                    {
                        "value": "ronoliffuion.com",
                        "timestamp": "2023-05-12 17:51:47"
                    },
                    {
                        "value": "bluespiredice.com",
                        "timestamp": "2023-05-12 17:51:02"
                    },
                    {
                        "value": "dremmfyttrred.com",
                        "timestamp": "2023-05-06 05:42:00"
                    },
                    {
                        "value": "ber6vjyb.com",
                        "timestamp": "2023-04-13 18:12:11"
                    },
                    {
                        "value": "droogggdhfhf.com",
                        "timestamp": "2023-04-08 15:40:30"
                    }
                ],
                "ip:port": [
                    {
                        "value": "46.161.40.128:80",
                        "timestamp": "2023-06-03 18:15:33"
                    },
                    {
                        "value": "45.182.189.71:80",
                        "timestamp": "2023-05-20 17:39:18"
                    },
                    {
                        "value": "46.161.40.92:80",
                        "timestamp": "2023-05-18 13:43:26"
                    },
                    {
                        "value": "45.182.189.118:80",
                        "timestamp": "2023-05-18 13:42:20"
                    },
                    {
                        "value": "45.182.189.91:80",
                        "timestamp": "2023-05-18 09:12:32"
                    },
                    {
                        "value": "45.182.189.120:80",
                        "timestamp": "2023-05-12 17:51:26"
                    },
                    {
                        "value": "45.182.189.119:80",
                        "timestamp": "2023-05-12 17:50:41"
                    },
                    {
                        "value": "92.118.36.210:80",
                        "timestamp": "2023-05-06 10:18:31"
                    },
                    {
                        "value": "45.182.189.200:80",
                        "timestamp": "2023-05-06 10:18:31"
                    },
                    {
                        "value": "193.29.13.157:80",
                        "timestamp": "2023-05-06 10:18:31"
                    },
                    {
                        "value": "88.214.27.100:80",
                        "timestamp": "2023-05-06 10:18:31"
                    },
                    {
                        "value": "179.60.150.120:80",
                        "timestamp": "2023-05-06 10:18:31"
                    },
                    {
                        "value": "45.182.189.103:80",
                        "timestamp": "2023-05-06 10:18:31"
                    },
                    {
                        "value": "45.182.189.103:443",
                        "timestamp": "2023-05-06 05:40:46"
                    },
                    {
                        "value": "92.118.36.252:80",
                        "timestamp": "2023-04-13 18:11:36"
                    }
                ],
                "url": [
                    {
                        "value": "https://dremmfyttrred.com/dns.php",
                        "timestamp": "2023-05-06 05:45:16"
                    },
                    {
                        "value": "http://ber6vjyb.com/dns.php",
                        "timestamp": "2023-04-13 18:12:59"
                    },
                    {
                        "value": "http://62.204.41.69/ldn.dll",
                        "timestamp": "2023-04-08 13:02:20"
                    },
                    {
                        "value": "http://62.204.41.69/ldn.png",
                        "timestamp": "2023-04-08 12:58:23"
                    },
                    {
                        "value": "http://62.204.41.69/dll.png",
                        "timestamp": "2023-04-08 12:56:43"
                    },
                    {
                        "value": "http://nefosferta.comhttp://nefosferta.com/gate.php",
                        "timestamp": "2022-10-12 10:41:01"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "c0f8aeeb2d11c6e751ee87c40ee609aceb1c1036706a5af0d3d78738b6cc4125",
                        "timestamp": "2023-04-13 18:13:29"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "f52363b6cf282669e5fcc5537b5c3451",
                        "timestamp": "2023-04-08 13:05:34"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-11 07:20:20",
    "mitre": [],
    "file_name": "silence",
    "analysis": null
};