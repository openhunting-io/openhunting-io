var threatdata = {
    "name": "ROMCOM RAT",
    "alias": "ROMCOM RAT, ROMCOM",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-09-06",
    "all_data": {
        "tool": "ROMCOM RAT",
        "names": [
            {
                "name": "ROMCOM RAT"
            },
            {
                "name": "ROMCOM"
            }
        ],
        "description": "(BlackBerry) Earlier versions of RomCom RAT were distributed via fake websites spoofing the legitimate 'Advanced IP Scanner' application website.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blogs.blackberry.com/en/2022/10/unattributed-romcom-threat-actor-spoofing-popular-apps-now-hits-ukrainian-militaries"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.romcom_rat"
        ],
        "uuid": "6ceba00e-bd46-422c-b2c7-1e148a71b830",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "ROMCOM RAT",
            "malware_alias": null,
            "malware": "win.romcom_rat",
            "last_update": "2023-05-09 08:13:15",
            "tags": [
                "RomCom",
                "RAT"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "104.234.10.207:444",
                        "timestamp": "2023-05-09 08:13:15"
                    }
                ],
                "domain": [
                    {
                        "value": "wexonlake.com",
                        "timestamp": "2023-05-09 08:11:46"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-05-09 08:13:15",
    "mitre": [],
    "file_name": "romcom_rat",
    "analysis": null
};