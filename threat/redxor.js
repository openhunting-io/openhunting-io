var threatdata = {
    "name": "RedXOR",
    "alias": "RedXOR",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "RedXOR",
        "names": [
            {
                "name": "RedXOR"
            }
        ],
        "description": "(Intezer) The backdoor masquerades itself as polkit daemon. We named it RedXOR for its network data encoding scheme based on XOR. The malware was compiled on Red Hat Enterprise Linux.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.intezer.com/blog/malware-analysis/new-linux-backdoor-redxor-likely-operated-by-chinese-nation-state-actor/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.redxor"
        ],
        "uuid": "10d35a97-d879-42e5-90ba-d6c881d5165b",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "RedXOR",
            "malware_alias": null,
            "malware": "elf.redxor",
            "last_update": "2021-03-11 20:48:11",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "0a76c55fa88d4c134012a5136c09fb938b4be88a382f88bf2804043253b0559f",
                        "timestamp": "2021-03-11 20:48:11"
                    },
                    {
                        "value": "0423258b94e8a9af58ad63ea493818618de2d8c60cf75ec7980edcaa34dcc919",
                        "timestamp": "2021-03-11 20:48:11"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-03-11 20:48:11",
    "file_name": "redxor",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.intezer.com/blog/malware-analysis/new-linux-backdoor-redxor-likely-operated-by-chinese-nation-state-actor/",
            "date": "2021-03-10",
            "organization": "Intezer",
            "author": "Avigayil Mechtinger",
            "title": "New Linux Backdoor RedXOR Likely Operated by Chinese Nation-State Actor",
            "categories": [
                "RedXOR",
                "XOR DDoS"
            ]
        }
    ],
    "mitre": []
};