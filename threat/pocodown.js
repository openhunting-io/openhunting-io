var threatdata = {
    "name": "PocoDown",
    "alias": "PocoDown, Blitz, PocoDownloader",
    "category": "Malware",
    "type": "Tunneling",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "PocoDown",
        "names": [
            {
                "name": "PocoDown"
            },
            {
                "name": "Blitz"
            },
            {
                "name": "PocoDownloader"
            }
        ],
        "description": "Uses POCO C++ cross-platform library, XOR-based string obfuscation, SSL library code and string overlap with {{X-Tunnel}}, infrastructure overlap with X-Agent, probably in use since mid-2018",
        "category": "Malware",
        "type": [
            "Tunneling"
        ],
        "information": [
            "https://threatvector.cylance.com/en_us/home/inside-the-apt28-dll-backdoor-blitz.html",
            "https://threatvector.cylance.com/en_us/home/flirting-with-ida-and-apt28.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pocodown"
        ],
        "uuid": "96d944a5-4d73-458e-b50e-7e25828061f5",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pocodown",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://threatvector.cylance.com/en_us/home/inside-the-apt28-dll-backdoor-blitz.html",
            "date": "2019-08-28",
            "organization": "Cylance",
            "author": "Cylance Threat Research Team",
            "title": "Inside the APT28 DLL Backdoor Blitz",
            "categories": [
                "PocoDown"
            ]
        },
        {
            "data_url": "https://threatvector.cylance.com/en_us/home/flirting-with-ida-and-apt28.html",
            "date": "2019-07-10",
            "organization": "Cylance",
            "author": "Cylance Threat Research Team",
            "title": "Flirting With IDA and APT28",
            "categories": [
                "PocoDown"
            ]
        },
        {
            "data_url": "https://twitter.com/cyb3rops/status/1129653190444703744",
            "date": "2019-05-18",
            "organization": "Twitter (@cyb3rops)",
            "author": "Florian Roth",
            "title": "Tweet on YARA and APT28",
            "categories": [
                "PocoDown"
            ]
        }
    ],
    "mitre": []
};