var threatdata = {
    "name": "8.t Dropper",
    "alias": "8.t Dropper, 8.t RTF exploit builder, 8t_dropper, RoyalRoad",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "8.t Dropper",
        "names": [
            {
                "name": "8.t Dropper"
            },
            {
                "name": "8.t RTF exploit builder"
            },
            {
                "name": "8t_dropper"
            },
            {
                "name": "RoyalRoad"
            }
        ],
        "description": "8T_Dropper has been used by Chinese threat actor TA428 in order to install Cotx RAT onto victim's machines during Operation LagTime IT. According to Proofpoint the attack was developed against a number of government agencies in East Asia overseeing government information technology, domestic affairs, foreign affairs, economic development, and political processes. The dropper was delivered through an RTF document exploiting CVE-2018-0798.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://nao-sec.org/2020/01/an-overhead-view-of-the-royal-road.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.8t_dropper"
        ],
        "uuid": "fc849859-2aa0-4b98-8573-36d9041fd1c2",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "8.t Dropper",
            "malware_alias": "8t_dropper,RoyalRoad",
            "malware": "win.8t_dropper",
            "last_update": "2022-12-01 18:11:47",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "f2779c63373e33fdbd001f336df36b01b0360cd6787c1cd29a6524cc7bcf1ffb",
                        "timestamp": "2022-12-01 18:11:47"
                    },
                    {
                        "value": "ca7f297dc04acad2fab04d5dc2de9475aed4186805f6c237c10b8f56b384cf30",
                        "timestamp": "2022-12-01 18:11:46"
                    },
                    {
                        "value": "7a7e519f82af8091b9ddd14e765357e8900522d422606aefda949270b9bf1a04",
                        "timestamp": "2022-07-16 21:24:33"
                    },
                    {
                        "value": "ba2c89192643f05e64f49b5cb3513a6a5bbfa719225af3b72c83587b8b774e8d",
                        "timestamp": "2022-05-29 04:07:00"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-12-01 18:11:47",
    "mitre": [],
    "file_name": "8.t_dropper",
    "analysis": null
};