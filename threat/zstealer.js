var threatdata = {
    "name": "Z*Stealer",
    "alias": "Z*Stealer, ZStealer",
    "category": "Malware",
    "type": "Backdoor, Credential stealer",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "Z*Stealer",
        "names": [
            {
                "name": "Z*Stealer"
            },
            {
                "name": "ZStealer"
            }
        ],
        "description": "(Forecepoint) ZS.DLL.C is another Delphi based library, this time for stealing both OS and application login credentials. As with the cryptocurrency stealer, once the password scan is completed the extracted information is transferred to the C2 by HTTP POST request to a PHP page on the server side. \n\nBased on data retrieved from the C2 servers, the credential stealing capability seems to be comparatively successful at retrieving data. A range of commonly used applications are supported.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Credential stealer"
        ],
        "information": [
            "https://www.forcepoint.com/blog/x-labs/quantize-or-capitalize"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.zstealer"
        ],
        "uuid": "728e24c5-46cb-438a-b2c4-b4f8fd637829",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "ZStealer",
            "malware_alias": "Z*Stealer",
            "malware": "win.zstealer",
            "last_update": "2023-05-23 23:48:12",
            "tags": [
                "ZStealer",
                "ViriBack"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "975da522079b40365ef3801e71714eb4",
                        "timestamp": "2023-04-25 08:18:14"
                    },
                    {
                        "value": "ab1448e5606aeebd04b298b41292bff2",
                        "timestamp": "2023-04-25 08:18:14"
                    },
                    {
                        "value": "171755fb48a0ad6464e8808dc90856a9",
                        "timestamp": "2023-04-25 08:18:14"
                    },
                    {
                        "value": "5b32164135c2798630f86fb25e787dde",
                        "timestamp": "2023-04-25 08:18:14"
                    }
                ],
                "domain": [
                    {
                        "value": "russiaisbetterthanukraine.me",
                        "timestamp": "2023-05-23 23:48:12"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-05-23 23:48:12",
    "mitre": [],
    "file_name": "zstealer",
    "analysis": null
};