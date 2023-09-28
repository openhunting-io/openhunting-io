var threatdata = {
    "name": "Konni",
    "alias": "Konni",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2022-01-27",
    "all_data": {
        "tool": "Konni",
        "names": [
            {
                "name": "Konni"
            }
        ],
        "description": "Konni is a remote administration tool, observed in the wild since early 2014. The Konni malware family is potentially linked to APT37, a North-Korean cyber espionage group active since 2012. The group primary victims are South-Korean political organizations, as well as Japan, Vietnam, Russia, Nepal, China, India, Romania, Kuwait, and other parts of the Middle East.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://blog.talosintelligence.com/2017/05/konni-malware-under-radar-for-years.html",
            "https://blog.fortinet.com/2017/08/15/a-quick-look-at-a-new-konni-rat-variant",
            "https://vallejo.cc/2017/07/08/analysis-of-new-variant-of-konni-rat/",
            "http://blog.talosintelligence.com/2017/07/konni-references-north-korean-missile-capabilities.html",
            "https://us-cert.cisa.gov/ncas/alerts/aa20-227a",
            "https://blog.malwarebytes.com/threat-intelligence/2022/01/konni-evolves-into-stealthier-rat/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0356/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.konni"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:konni"
        ],
        "uuid": "d238a221-2a1d-4558-9dbf-7a3a6bbb0d22",
        "last-card-change": "2022-01-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Konni",
            "malware_alias": null,
            "malware": "win.konni",
            "last_update": "2023-09-14 13:56:56",
            "tags": [
                "APT37",
                "APT",
                "KONNI",
                "APT Konni",
                "Konni"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "e9f0dkd.c1.biz",
                        "timestamp": "2023-09-14 13:56:56"
                    },
                    {
                        "value": "ske9dhn.c1.biz",
                        "timestamp": "2023-09-14 13:56:55"
                    },
                    {
                        "value": "ttzcloud.com",
                        "timestamp": "2023-09-05 07:57:30"
                    },
                    {
                        "value": "serviceset.net",
                        "timestamp": "2023-08-31 08:22:15"
                    },
                    {
                        "value": "anrun.kr",
                        "timestamp": "2023-08-30 13:50:37"
                    },
                    {
                        "value": "headsity.com",
                        "timestamp": "2023-07-17 13:19:18"
                    },
                    {
                        "value": "overseeby.com",
                        "timestamp": "2023-06-30 08:35:15"
                    },
                    {
                        "value": "gg1593.c1.biz",
                        "timestamp": "2023-05-23 16:53:44"
                    },
                    {
                        "value": "naver.downfiles.org",
                        "timestamp": "2023-04-16 08:52:39"
                    },
                    {
                        "value": "naver.files001.com",
                        "timestamp": "2023-04-16 08:52:39"
                    },
                    {
                        "value": "centhosting.net",
                        "timestamp": "2023-04-15 06:56:07"
                    }
                ],
                "ip:port": [
                    {
                        "value": "88.119.169.96:80",
                        "timestamp": "2023-09-05 07:58:55"
                    },
                    {
                        "value": "88.119.169.73:80",
                        "timestamp": "2023-09-05 07:58:55"
                    },
                    {
                        "value": "88.119.169.93:80",
                        "timestamp": "2023-08-31 08:22:32"
                    },
                    {
                        "value": "88.119.175.109:80",
                        "timestamp": "2023-07-17 13:19:58"
                    },
                    {
                        "value": "213.252.244.251:80",
                        "timestamp": "2023-06-30 08:36:05"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "d245f208d2a682f4d2c4464557973bf26dee756b251f162adb00b4074b4db3ac",
                        "timestamp": "2023-09-04 09:28:14"
                    },
                    {
                        "value": "9bb69ea4bc80f3f5fc628f794eb4a4024f8f3a4a748335e925adfb8f5b5e97fe",
                        "timestamp": "2023-08-31 06:41:11"
                    },
                    {
                        "value": "5225df55b1d1be397012e9823cd936766c6dcecdbd3dab79d07691db33ce81e8",
                        "timestamp": "2023-01-13 07:19:06"
                    }
                ],
                "url": [
                    {
                        "value": "http://serviceset.net/upload.php",
                        "timestamp": "2023-08-31 08:21:24"
                    },
                    {
                        "value": "http://anrun.kr/movie/contents.php",
                        "timestamp": "2023-08-31 06:39:55"
                    },
                    {
                        "value": "http://headsity.com/list.php",
                        "timestamp": "2023-07-17 13:20:23"
                    },
                    {
                        "value": "http://overseeby.com/list.php",
                        "timestamp": "2023-06-30 08:35:38"
                    },
                    {
                        "value": "http://gg1593.c1.biz/dn.php",
                        "timestamp": "2023-07-17 13:22:40"
                    },
                    {
                        "value": "http://centhosting.net/list.php",
                        "timestamp": "2023-04-15 06:55:51"
                    },
                    {
                        "value": "http://centhosting.net/upload.php",
                        "timestamp": "2023-04-15 06:55:50"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "19dc387bffdc0a22f640bd38af320db4",
                        "timestamp": "2023-08-31 08:20:46"
                    },
                    {
                        "value": "2c2b800c2e20f5f3ae0332bf59f8df13",
                        "timestamp": "2023-08-31 08:17:35"
                    },
                    {
                        "value": "0fa91325446fd53a3bc2b1dee29cfce3",
                        "timestamp": "2023-08-31 07:11:33"
                    },
                    {
                        "value": "bc3fb948dc956f79dbc7aac06442d6ef",
                        "timestamp": "2023-08-31 07:11:33"
                    },
                    {
                        "value": "168BCC063501D191D82AAA3A32741A12",
                        "timestamp": "2023-08-30 07:27:06"
                    },
                    {
                        "value": "B86C38AE5C24C55831D7F8CA3CBEB814",
                        "timestamp": "2023-08-30 07:27:06"
                    },
                    {
                        "value": "DB31A36E1684C568FA3529D60A59BA29",
                        "timestamp": "2023-08-30 07:27:06"
                    },
                    {
                        "value": "FF4067B4865C9B49DA2F28AC12CA5C1A",
                        "timestamp": "2023-08-30 07:27:06"
                    },
                    {
                        "value": "90468E4BDF61CF146030515ED3E15D81",
                        "timestamp": "2023-08-30 07:27:06"
                    },
                    {
                        "value": "8100d6d5524e040874bf8348384a2017",
                        "timestamp": "2023-07-17 13:21:42"
                    },
                    {
                        "value": "c62a1fb8d29db14fc89fe67430f6bf30",
                        "timestamp": "2023-07-17 13:18:04"
                    },
                    {
                        "value": "d668a24ca81e99750fc0808dec51f69e",
                        "timestamp": "2023-07-17 13:18:04"
                    },
                    {
                        "value": "24949137f4a88bee8a11e0060a5eeb11",
                        "timestamp": "2023-06-30 08:34:31"
                    },
                    {
                        "value": "395b6399fea137783ffdac84f2d4c256",
                        "timestamp": "2023-06-30 08:34:31"
                    },
                    {
                        "value": "3a3ce0a1794b548682167da692052dc2",
                        "timestamp": "2023-05-23 16:53:03"
                    },
                    {
                        "value": "7e5cc47880bf2ccd244cf925093d2d16",
                        "timestamp": "2023-04-15 06:55:00"
                    },
                    {
                        "value": "00e6e9ed4666623860686c123ed334f0",
                        "timestamp": "2022-10-03 13:38:12"
                    },
                    {
                        "value": "24ef6a627d69f6bfe4b8325f74a8adba",
                        "timestamp": "2022-09-27 23:43:33"
                    },
                    {
                        "value": "705c8d431b4b8fa834491ff6975a0532",
                        "timestamp": "2022-09-27 23:43:33"
                    },
                    {
                        "value": "66fba06e965f9a6ea192db7f452ea9b6",
                        "timestamp": "2022-06-23 11:35:32"
                    },
                    {
                        "value": "a51912c138ae264b61c6edb492c355a6",
                        "timestamp": "2021-09-02 02:04:07"
                    },
                    {
                        "value": "b693e3d2f2cab550ad4f8c5722776498",
                        "timestamp": "2021-09-02 02:04:07"
                    },
                    {
                        "value": "32a60c3697e5d59e0cb83b9d829f256d",
                        "timestamp": "2021-08-26 14:13:21"
                    },
                    {
                        "value": "ce866ae254de4cabd60a95abcc52c315",
                        "timestamp": "2021-07-30 15:28:22"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-14 13:56:56",
    "mitre": [],
    "file_name": "konni",
    "analysis": null
};