var threatdata = {
    "name": "ModPipe",
    "alias": "ModPipe",
    "category": "Malware",
    "type": "POS malware, Backdoor, Info stealer, Credential stealer, Exfiltration",
    "modified": "2022-06-02",
    "all_data": {
        "tool": "ModPipe",
        "names": [
            {
                "name": "ModPipe"
            }
        ],
        "description": "(ESET) ESET researchers have discovered ModPipe, a modular backdoor that gives its operators access to sensitive information stored in devices running ORACLE MICROS Restaurant Enterprise Series (RES) 3700 POS \u2013 a management software suite used by hundreds of thousands of bars, restaurants, hotels and other hospitality establishments worldwide.\nWhat makes the backdoor distinctive are its downloadable modules and their capabilities. One of them \u2013 named GetMicInfo \u2013 contains an algorithm designed to gather database passwords by decrypting them from Windows registry values. This shows that the backdoor\u2019s authors have deep knowledge of the targeted software and opted for this sophisticated method instead of collecting the data via a simpler yet \u201clouder\u201d approach, such as keylogging.\nExfiltrated credentials allow ModPipe\u2019s operators access to database contents, including various definitions and configuration, status tables and information about POS transactions.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.welivesecurity.com/2020/11/12/hungry-data-modpipe-backdoor-hits-pos-software-hospitality-sector/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.modpipe"
        ],
        "uuid": "124609c0-762b-470c-bfd6-a2a82e41e69f",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "modpipe",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.kroll.com/en/insights/publications/cyber/modpipe-pos-malware-new-hooking-targets-extract-card-data",
            "date": "2022-06-02",
            "organization": "Kroll",
            "author": "Sean Straw",
            "title": "ModPipe POS Malware: New Hooking Targets Extract Card Data",
            "categories": [
                "ModPipe"
            ]
        },
        {
            "data_url": "https://www.foregenix.com/blog/modpipe-malware-has-a-new-module-that-siphons-payment-card-data",
            "date": "2021-03-23",
            "organization": "Foregenix",
            "author": "Niall Newman",
            "title": "ModPipe Malware has a new module that siphons Credit Card Data",
            "categories": [
                "ModPipe"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/11/12/hungry-data-modpipe-backdoor-hits-pos-software-hospitality-sector/",
            "date": "2020-11-12",
            "organization": "ESET Research",
            "author": "Martin Smol\u00e1r",
            "title": "Hungry for data, ModPipe backdoor hits POS software used in hospitality sector",
            "categories": [
                "ModPipe"
            ]
        }
    ],
    "mitre": []
};