var threatdata = {
    "name": "Milum",
    "alias": "Milum",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-07-07",
    "all_data": {
        "tool": "Milum",
        "names": [
            {
                "name": "Milum"
            }
        ],
        "description": "(Kaspersky) The malware uses the JSON format for configuration data and as a C2 communication protocol over HTTP as well. Inside the encrypted communications within the HTTP POST requests, we found several interesting fields. One of them shows the malware version \u2013 1.0.1. A version number like this indicates an early stage of development. Other fields suggest the existence of, at the very least, plans for non-C++ versions.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/wildpressure-targets-industrial-in-the-middle-east/96360/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.milum"
        ],
        "uuid": "db64813a-5c1e-4d3d-9688-286cbe4c6ef0",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "milum",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/wildpressure-targets-macos/103072/",
            "date": "2021-07-07",
            "organization": "Kaspersky",
            "author": "Denis Legezo",
            "title": "WildPressure targets the macOS platform",
            "categories": [
                "Guard",
                "Milum"
            ]
        },
        {
            "data_url": "https://ics-cert.kaspersky.com/media/KASPERSKY_H1_2020_ICS_REPORT_EN.pdf",
            "date": "2020-09-24",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky Lab ICS CERT",
            "title": "Threat landscape for industrial automation systems - H1 2020",
            "categories": [
                "Poet RAT",
                "Mailto",
                "Milum",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "Snake"
            ]
        },
        {
            "data_url": "https://securelist.com/wildpressure-targets-industrial-in-the-middle-east/96360/",
            "date": "2020-03-24",
            "organization": "Kaspersky Labs",
            "author": "Denis Legezo",
            "title": "WildPressure targets industrial-related entities in the Middle East",
            "categories": [
                "Milum"
            ]
        }
    ],
    "mitre": []
};