var threatdata = {
    "name": "Bandook",
    "alias": "Bandook, Bandok",
    "category": "Tools",
    "type": "Backdoor",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Bandook",
        "names": [
            {
                "name": "Bandook"
            },
            {
                "name": "Bandok"
            }
        ],
        "description": "Bandook is a commercially available RAT, written in Delphi, which has been available since roughly 2007.",
        "category": "Tools",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.eff.org/files/2016/08/03/i-got-a-letter-from-the-government.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0234/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bandook"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Bandook"
        ],
        "uuid": "2dd98bbc-2ce7-4c49-ac87-3eededb8a713",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Bandook",
            "malware_alias": "Bandok",
            "malware": "win.bandook",
            "last_update": "2023-08-02 06:09:14",
            "tags": [
                "DarkCaracal",
                "Bandook",
                "APT"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "194.87.48.126:7893",
                        "timestamp": "2023-08-02 06:09:14"
                    },
                    {
                        "value": "45.142.214.31:7892",
                        "timestamp": "2023-08-02 06:09:13"
                    },
                    {
                        "value": "5.34.182.29:4443",
                        "timestamp": "2023-08-02 06:09:13"
                    },
                    {
                        "value": "80.233.134.242:9991",
                        "timestamp": "2023-08-02 06:09:13"
                    },
                    {
                        "value": "80.233.134.242:9995",
                        "timestamp": "2023-08-02 06:09:12"
                    },
                    {
                        "value": "83.97.20.153:5081",
                        "timestamp": "2023-08-02 06:09:12"
                    },
                    {
                        "value": "83.97.20.153:5082",
                        "timestamp": "2023-08-02 06:09:12"
                    },
                    {
                        "value": "83.97.20.153:5083",
                        "timestamp": "2023-08-02 06:09:11"
                    },
                    {
                        "value": "83.97.20.153:5085",
                        "timestamp": "2023-08-02 06:09:11"
                    },
                    {
                        "value": "91.193.18.203:9991",
                        "timestamp": "2023-08-02 06:09:10"
                    },
                    {
                        "value": "91.193.18.203:9995",
                        "timestamp": "2023-08-02 06:09:10"
                    },
                    {
                        "value": "91.238.50.105:4441",
                        "timestamp": "2023-08-02 06:09:10"
                    },
                    {
                        "value": "193.200.16.175:9991",
                        "timestamp": "2023-08-02 06:08:34"
                    },
                    {
                        "value": "193.200.16.175:9995",
                        "timestamp": "2023-08-02 06:08:34"
                    },
                    {
                        "value": "194.5.250.103:7891",
                        "timestamp": "2023-08-02 06:08:34"
                    },
                    {
                        "value": "185.243.114.89:7891",
                        "timestamp": "2023-08-02 06:08:33"
                    },
                    {
                        "value": "185.10.68.52:6592",
                        "timestamp": "2023-08-02 06:08:32"
                    },
                    {
                        "value": "185.10.68.52:6593",
                        "timestamp": "2023-08-02 06:08:32"
                    },
                    {
                        "value": "185.106.122.71:7891",
                        "timestamp": "2023-08-02 06:08:32"
                    },
                    {
                        "value": "185.10.68.52:6591",
                        "timestamp": "2023-08-02 06:08:31"
                    }
                ],
                "domain": [
                    {
                        "value": "2ndprog.monster",
                        "timestamp": "2023-08-02 06:09:09"
                    },
                    {
                        "value": "bomes.ru",
                        "timestamp": "2023-08-02 06:09:08"
                    },
                    {
                        "value": "branchesv.com",
                        "timestamp": "2023-08-02 06:09:07"
                    },
                    {
                        "value": "cumumberpro.org",
                        "timestamp": "2023-08-02 06:09:07"
                    },
                    {
                        "value": "d1.ngobmc.com",
                        "timestamp": "2023-08-02 06:09:07"
                    },
                    {
                        "value": "d2.ngobmc.com",
                        "timestamp": "2023-08-02 06:09:06"
                    },
                    {
                        "value": "deapproved.ru",
                        "timestamp": "2023-08-02 06:09:06"
                    },
                    {
                        "value": "ercuc.com",
                        "timestamp": "2023-08-02 06:09:05"
                    },
                    {
                        "value": "ewsdocs.com",
                        "timestamp": "2023-08-02 06:09:05"
                    },
                    {
                        "value": "horizongb.com",
                        "timestamp": "2023-08-02 06:09:05"
                    },
                    {
                        "value": "htname.info",
                        "timestamp": "2023-08-02 06:09:04"
                    },
                    {
                        "value": "idcmht.com",
                        "timestamp": "2023-08-02 06:09:04"
                    },
                    {
                        "value": "iamgood.blogdns.net",
                        "timestamp": "2023-08-02 06:08:55"
                    },
                    {
                        "value": "jtoolbox.org",
                        "timestamp": "2023-08-02 06:08:54"
                    },
                    {
                        "value": "ladvsa.club",
                        "timestamp": "2023-08-02 06:08:54"
                    },
                    {
                        "value": "mainsrv.top",
                        "timestamp": "2023-08-02 06:08:53"
                    },
                    {
                        "value": "megawoc.com",
                        "timestamp": "2023-08-02 06:08:53"
                    },
                    {
                        "value": "mxtms.com",
                        "timestamp": "2023-08-02 06:08:52"
                    },
                    {
                        "value": "ngobmc.com",
                        "timestamp": "2023-08-02 06:08:52"
                    },
                    {
                        "value": "nopejohn.com",
                        "timestamp": "2023-08-02 06:08:51"
                    },
                    {
                        "value": "ntsclouds.com",
                        "timestamp": "2023-08-02 06:08:51"
                    },
                    {
                        "value": "olex.live",
                        "timestamp": "2023-08-02 06:08:50"
                    },
                    {
                        "value": "p2020.xyz",
                        "timestamp": "2023-08-02 06:08:50"
                    },
                    {
                        "value": "panjo.club",
                        "timestamp": "2023-08-02 06:08:50"
                    },
                    {
                        "value": "pdafact.com",
                        "timestamp": "2023-08-02 06:08:49"
                    },
                    {
                        "value": "pronews.icu",
                        "timestamp": "2023-08-02 06:08:47"
                    },
                    {
                        "value": "r1.panjo.club",
                        "timestamp": "2023-08-02 06:08:46"
                    },
                    {
                        "value": "raysdoor.com",
                        "timestamp": "2023-08-02 06:08:46"
                    },
                    {
                        "value": "s1.megawoc.com",
                        "timestamp": "2023-08-02 06:08:45"
                    },
                    {
                        "value": "styleco.me",
                        "timestamp": "2023-08-02 06:08:45"
                    },
                    {
                        "value": "tancredis.com",
                        "timestamp": "2023-08-02 06:08:41"
                    },
                    {
                        "value": "vdscloud.net",
                        "timestamp": "2023-08-02 06:08:40"
                    },
                    {
                        "value": "vrunabo.su",
                        "timestamp": "2023-08-02 06:08:40"
                    },
                    {
                        "value": "vsimperial.com",
                        "timestamp": "2023-08-02 06:08:39"
                    },
                    {
                        "value": "gombos.ru",
                        "timestamp": "2023-08-01 21:42:03"
                    },
                    {
                        "value": "humut.su",
                        "timestamp": "2023-08-01 21:42:03"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "b4487540e638679b9bc290c706add379",
                        "timestamp": "2022-09-14 15:51:42"
                    },
                    {
                        "value": "e69e20bd1e9a855e180cff9fa66cc050",
                        "timestamp": "2022-09-14 15:51:42"
                    },
                    {
                        "value": "cb30e5ba39200df4ed1934b0a29c9c44",
                        "timestamp": "2022-01-07 11:00:56"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-08-02 06:09:14",
    "mitre": [],
    "file_name": "bandook",
    "analysis": null
};