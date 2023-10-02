var threatdata = {
    "name": "Numando",
    "alias": "Numando",
    "category": "Malware",
    "type": "Banking trojan, Reconnaissance, Backdoor, Keylogger, Info stealer, Credential stealer",
    "modified": "2021-12-28",
    "all_data": {
        "tool": "Numando",
        "names": [
            {
                "name": "Numando"
            }
        ],
        "description": "(ESET) The threat actor behind this malware family has been active since at least 2018. Even though it is not nearly as lively as {{Mekotio}} or {{Grandoreiro}}, it has been consistently used since we started tracking it, bringing interesting new techniques to the pool of Latin American banking trojans\u2019 tricks, like using seemingly useless ZIP archives or bundling payloads with decoy BMP images. Geographically, it focuses almost exclusively on Brazil with rare campaigns in Mexico and Spain.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://www.welivesecurity.com/2021/09/17/numando-latam-banking-trojan/",
            "https://www.welivesecurity.com/2020/10/01/latam-financial-cybercrime-competitors-crime-sharing-ttps/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.numando"
        ],
        "uuid": "69a2b688-207b-49f4-a1f8-8ac568b6eca9",
        "last-card-change": "2021-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Numando",
            "malware_alias": null,
            "malware": "win.numando",
            "last_update": "2022-03-02 17:29:53",
            "tags": [
                "Metamorfo",
                "Numando"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://clientes.is-saved.org/clientes/postUP.php",
                        "timestamp": "2022-03-02 17:29:53"
                    },
                    {
                        "value": "http://loa2.kicks-ass.net/03/postUP.php",
                        "timestamp": "2022-02-09 14:49:42"
                    },
                    {
                        "value": "http://18.230.24.96/01/postUP.php",
                        "timestamp": "2022-01-21 19:28:16"
                    }
                ],
                "ip:port": [
                    {
                        "value": "52.142.190.146:80",
                        "timestamp": "2022-02-09 03:54:35"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "e116a603ceb5d60463f54ad79b31b9a04a21b2c8afea1fb72149db2805a4d4d8",
                        "timestamp": "2021-12-14 08:19:12"
                    },
                    {
                        "value": "308d07fa6ea5a3e88f7bbdcbc5d7df86efb1c39c6736ab16059d88046c99933f",
                        "timestamp": "2021-12-14 08:19:11"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-03-02 17:29:53",
    "file_name": "numando",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2021/09/17/numando-latam-banking-trojan/",
            "date": "2021-09-17",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "Numando: Count once, code twice",
            "categories": [
                "Numando"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/10/01/latam-financial-cybercrime-competitors-crime-sharing-ttps/",
            "date": "2020-10-01",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "LATAM financial cybercrime: Competitors\u2011in\u2011crime sharing TTPs",
            "categories": [
                "Numando"
            ]
        }
    ],
    "mitre": []
};