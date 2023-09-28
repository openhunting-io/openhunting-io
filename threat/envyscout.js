var threatdata = {
    "name": "EnvyScout",
    "alias": "EnvyScout, ROOTSAW",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "EnvyScout",
        "names": [
            {
                "name": "EnvyScout"
            },
            {
                "name": "ROOTSAW"
            }
        ],
        "description": "EnvyScout is a dropper that has been used by APT29 since at least 2021.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0634"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.envyscout"
        ],
        "uuid": "821512eb-4755-42b8-a70e-b8fd6053e839",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "EnvyScout",
            "malware_alias": "ROOTSAW",
            "malware": "win.envyscout",
            "last_update": "2022-07-08 16:50:23",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "3aa44a7951ad95d02c426e9e2a174c2e",
                        "timestamp": "2022-07-08 16:50:23"
                    },
                    {
                        "value": "6228d15e3bb50adfa59c1bdf5f6ce9f0",
                        "timestamp": "2022-07-08 16:50:23"
                    },
                    {
                        "value": "59b5d262532dab929bbe56c90a0257d2",
                        "timestamp": "2022-07-08 16:50:23"
                    },
                    {
                        "value": "6812031432039a89fa741e9338f8e887",
                        "timestamp": "2022-07-08 16:50:23"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-07-08 16:50:23",
    "mitre": [],
    "file_name": "envyscout",
    "analysis": null
};