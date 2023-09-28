var threatdata = {
    "name": "BlackNET RAT",
    "alias": "BlackNET RAT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-02-17",
    "all_data": {
        "tool": "BlackNET RAT",
        "names": [
            {
                "name": "BlackNET RAT"
            }
        ],
        "description": "(Malpedia) Advanced and modern Windows botnet with PHP panel developed using VB.NET. It has a lot of functionalities including: stealing/grabbing files and passwords, keylogging, cryptojacking, loading files, executing commands, etc. It is open source and emerged at the end of 2019.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.blacknet_rat",
            "https://labs.k7computing.com/index.php/dark-side-of-blacknet-rat/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.blacknet_rat"
        ],
        "uuid": "12b565ab-4c7d-4bdf-9fce-a0e7d1b32ca3",
        "last-card-change": "2023-02-17",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "BlackNET RAT",
            "malware_alias": null,
            "malware": "win.blacknet_rat",
            "last_update": "2023-09-25 23:48:14",
            "tags": [
                "ViriBack",
                "panel",
                "BlackNet",
                "blacknet",
                "BlackNET",
                "RAT",
                "rat"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "crypromo.com",
                        "timestamp": "2023-09-25 23:48:14"
                    },
                    {
                        "value": "maddoxdevelopment.online",
                        "timestamp": "2023-09-25 23:48:14"
                    },
                    {
                        "value": "pako.saturncnc.tk",
                        "timestamp": "2023-03-18 23:48:20"
                    },
                    {
                        "value": "qube.host",
                        "timestamp": "2021-12-31 06:32:47"
                    }
                ],
                "url": [
                    {
                        "value": "http://f0575824.xsph.ru/blacknet/receive.php",
                        "timestamp": "2023-06-18 07:31:28"
                    },
                    {
                        "value": "http://bankslip.info/dadsroots//receive.php",
                        "timestamp": "2023-05-25 10:10:12"
                    },
                    {
                        "value": "http://bankslip.info/nash//receive.php",
                        "timestamp": "2023-05-25 03:50:14"
                    },
                    {
                        "value": "http://cofix.best//receive.php",
                        "timestamp": "2023-03-24 15:20:32"
                    },
                    {
                        "value": "http://ecrew.sytes.net//receive.php",
                        "timestamp": "2023-02-07 02:30:37"
                    },
                    {
                        "value": "http://18.117.193.148//receive.php",
                        "timestamp": "2023-01-23 15:10:30"
                    },
                    {
                        "value": "http://74.208.16.112/net/receive.php",
                        "timestamp": "2022-12-30 15:15:22"
                    },
                    {
                        "value": "http://zee.zight.ru/receive.php",
                        "timestamp": "2022-11-16 03:15:17"
                    },
                    {
                        "value": "http://noctorships.ga/BlackNET/Panel//receive.php",
                        "timestamp": "2022-11-12 12:30:30"
                    },
                    {
                        "value": "http://zenginlerclubmuck.xyz/blacknet/receive.php",
                        "timestamp": "2022-10-03 16:16:18"
                    },
                    {
                        "value": "http://91.134.238.134:8010/receive.php",
                        "timestamp": "2022-08-14 06:00:25"
                    },
                    {
                        "value": "http://valsinki.xyz/blacknet/receive.php",
                        "timestamp": "2022-08-07 18:35:33"
                    },
                    {
                        "value": "http://finalb.xyz/NiggaNet/receive.php",
                        "timestamp": "2022-03-16 18:10:56"
                    },
                    {
                        "value": "http://finalb.xyz/NiggaNet",
                        "timestamp": "2022-03-16 17:48:56"
                    },
                    {
                        "value": "http://23c1-128-199-237-110.ngrok.io/Bot-Net/BlackNET/Panel/receive.php",
                        "timestamp": "2022-02-26 00:40:37"
                    },
                    {
                        "value": "http://theblogreader-blog.wtf/panel//receive.php",
                        "timestamp": "2022-02-21 21:20:44"
                    },
                    {
                        "value": "http://hksec.hk/wp-admin/html//receive.php",
                        "timestamp": "2021-11-27 02:47:20"
                    },
                    {
                        "value": "http://gpay-safe.ru/x//receive.php",
                        "timestamp": "2021-08-24 22:41:59"
                    },
                    {
                        "value": "http://officialcomerce1.xyz/lee/receive.php",
                        "timestamp": "2021-08-13 18:03:13"
                    },
                    {
                        "value": "http://furyx.de/panel/receive.php",
                        "timestamp": "2021-08-01 01:25:42"
                    },
                    {
                        "value": "http://100.26.17.80/receive.php",
                        "timestamp": "2021-07-30 22:06:27"
                    },
                    {
                        "value": "http://54.237.66.139/receive.php",
                        "timestamp": "2021-07-22 07:00:51"
                    },
                    {
                        "value": "http://185.212.44.211/receive.php",
                        "timestamp": "2021-06-27 14:05:33"
                    },
                    {
                        "value": "http://weboss.in/blacknet/receive.php",
                        "timestamp": "2021-06-18 00:41:00"
                    },
                    {
                        "value": "http://monomolecular-tone.000webhostapp.com/receive.php",
                        "timestamp": "2021-06-14 19:51:46"
                    },
                    {
                        "value": "http://34.227.13.244/receive.php",
                        "timestamp": "2021-06-13 13:25:29"
                    },
                    {
                        "value": "http://45.130.138.51//receive.php",
                        "timestamp": "2021-05-29 12:10:28"
                    },
                    {
                        "value": "http://ytgyuityuity.ru//uJKGWJTjXBP2/receive.php",
                        "timestamp": "2021-05-23 21:20:45"
                    },
                    {
                        "value": "http://a0541862.xsph.ru//receive.php",
                        "timestamp": "2021-05-18 08:50:15"
                    },
                    {
                        "value": "http://142.202.136.146/NET/receive.php",
                        "timestamp": "2021-05-09 10:25:39"
                    },
                    {
                        "value": "http://chomotrov.rf.gd/receive.php",
                        "timestamp": "2021-04-24 22:55:13"
                    },
                    {
                        "value": "http://www.rtmmodz.a2hosted.com//receive.php",
                        "timestamp": "2021-04-21 21:36:11"
                    },
                    {
                        "value": "http://micros0ftcenter.xyz/uJKGWJTjXBP2//receive.php",
                        "timestamp": "2021-04-16 22:25:25"
                    }
                ],
                "ip:port": [
                    {
                        "value": "146.19.191.190:80",
                        "timestamp": "2023-05-15 23:48:14"
                    },
                    {
                        "value": "80.85.157.98:80",
                        "timestamp": "2023-01-28 23:48:35"
                    },
                    {
                        "value": "45.133.1.98:80",
                        "timestamp": "2021-03-25 15:16:44"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "a94970a63494de9eecb666dd6a91b43d",
                        "timestamp": "2021-06-29 03:15:14"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "94bcc274b54ed4fd6f9d0b3b6e07225d63e058f2961fffc225cc144b68bc0188",
                        "timestamp": "2021-05-18 09:00:25"
                    },
                    {
                        "value": "55ff1e0a4e5866d565ceeb9baafac73fdcb4464160fc6c78104d935009935cd7",
                        "timestamp": "2021-05-18 09:00:25"
                    },
                    {
                        "value": "af4586015e689d670854702df4aa5748eb90da472dc6c479f065bfb49e624d0c",
                        "timestamp": "2021-05-18 09:00:25"
                    },
                    {
                        "value": "150a0f0a59a04f7023a5f7e8c1739949b1cd40d15550fdbc58f7616af24e2a30",
                        "timestamp": "2021-05-18 09:00:25"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-25 23:48:14",
    "mitre": [],
    "file_name": "blacknet_rat",
    "analysis": null
};