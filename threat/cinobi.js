var threatdata = {
    "name": "Cinobi",
    "alias": "Cinobi",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer",
    "modified": "2021-12-28",
    "all_data": {
        "tool": "Cinobi",
        "names": [
            {
                "name": "Cinobi"
            }
        ],
        "description": "(Trend Micro) The Cinobi banking trojan is split into four stages, with each stage downloading additional components and possibly performing environment or anti-virtual machine (VM) checks. There are two command-and-control (C&C) servers, with one of them returning stages 2 to 4, while the other one returns the configuration files.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.trendmicro.com/en_us/research/21/h/cinobi-banking-trojan-targets-users-of-cryptocurrency-exchanges-.html",
            "https://documents.trendmicro.com/assets/pdf/Tech%20Brief_Operation%20Overtrap%20Targets%20Japanese%20Online%20Banking%20Users.pdf",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/operation-overtrap-targets-japanese-online-banking-users-via-bottle-exploit-kit-and-brand-new-cinobi-banking-trojan/",
            "http://www.pwncode.io/2019/12/unpacking-payload-used-in-bottle-ek.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cinobi"
        ],
        "uuid": "69f2b448-d8d2-4351-88f8-466fbea6328b",
        "last-card-change": "2021-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Cinobi",
            "malware_alias": null,
            "malware": "win.cinobi",
            "last_update": "2021-04-15 00:31:25",
            "tags": [
                "cinobi",
                "bottleek"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "364da9b873e03c1f298a771cbc3b431504b1ecbf7d78119f700ee8b181ecae30",
                        "timestamp": "2021-04-15 00:31:25"
                    },
                    {
                        "value": "3f8253a142d5d8ed4cac3e55ed999ada6397913cf49e64708cbcc1e24635ee32",
                        "timestamp": "2021-04-15 00:31:25"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-04-15 00:31:25",
    "file_name": "cinobi",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/h/cinobi-banking-trojan-targets-users-of-cryptocurrency-exchanges-.html",
            "date": "2021-08-09",
            "organization": "Trend Micro",
            "author": "Jarom\u00edr Ho\u0159ej\u0161\u00ed",
            "title": "Cinobi Banking Trojan Targets Cryptocurrency Exchange Users via Malvertising",
            "categories": [
                "Cinobi"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/pdf/Tech%20Brief_Operation%20Overtrap%20Targets%20Japanese%20Online%20Banking%20Users.pdf",
            "date": "2020-03-11",
            "organization": "Trend Micro",
            "author": "Jarom\u00edr Ho\u0159ej\u0161\u00ed",
            "title": "Operation Overtrap Targets Japanese Online Banking Users Via Bottle Exploit Kit and Brand-New Cinobi Banking Trojan: Technical Brief",
            "categories": [
                "Cinobi"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/operation-overtrap-targets-japanese-online-banking-users-via-bottle-exploit-kit-and-brand-new-cinobi-banking-trojan/",
            "date": "2020-03-11",
            "organization": "Trend Micro",
            "author": "Jarom\u00edr Ho\u0159ej\u0161\u00ed",
            "title": "Operation Overtrap Targets Japanese Online Banking Users Via Bottle Exploit Kit and Brand-New Cinobi Banking Trojan",
            "categories": [
                "Cinobi"
            ]
        },
        {
            "data_url": "http://www.pwncode.io/2019/12/unpacking-payload-used-in-bottle-ek.html",
            "date": "2019-12-24",
            "organization": "pwncode.io blog",
            "author": "c0d3inj3cT",
            "title": "Unpacking Payload used in Bottle EK",
            "categories": [
                "Cinobi"
            ]
        }
    ],
    "mitre": []
};