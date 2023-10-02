var threatdata = {
    "name": "NimbleMamba",
    "alias": "NimbleMamba",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Downloader, Exfiltration",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "NimbleMamba",
        "names": [
            {
                "name": "NimbleMamba"
            }
        ],
        "description": "(Proofpoint) Each variant of TA402\u2019s attack chain led to a RAR file containing one or multiple malicious compressed executables. These executables include a TA402 implant Proofpoint dubbed NimbleMamba and oftentimes an additional trojan Proofpoint named {{BrittleBush}}. NimbleMamba is almost certainly meant to replace {{LastConn}}, which Proofpoint reported about in June 2021.\n\nNimbleMamba uses guardrails to ensure that all infected victims are within TA402\u2019s target region. NimbleMamba uses the Dropbox API for both command and control as well as exfiltration. The malware also contains multiple capabilities designed to complicate both automated and manual analysis.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.proofpoint.com/us/blog/threat-insight/ugg-boots-4-sale-tale-palestinian-aligned-espionage"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.nimblemamba"
        ],
        "uuid": "1c33ff97-c5eb-4c51-a72e-31ad07abf8cd",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "nimblemamba",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://thehackernews.com/2022/02/palestinian-hackers-using-new.html",
            "date": "2022-02-08",
            "organization": "The Hacker News",
            "author": "Ravie Lakshmanan",
            "title": "Palestinian Hackers Use New NimbleMamba Implant in Recent Attacks",
            "categories": [
                "NimbleMamba"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/ugg-boots-4-sale-tale-palestinian-aligned-espionage",
            "date": "2022-02-08",
            "organization": "Proofpoint",
            "author": "Konstantin Klinger",
            "title": "Ugg Boots 4 Sale: A Tale of Palestinian-Aligned Espionage",
            "categories": [
                "BrittleBush",
                "NimbleMamba"
            ]
        }
    ],
    "mitre": []
};