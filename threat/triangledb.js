var threatdata = {
    "name": "TriangleDB",
    "alias": "TriangleDB",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "TriangleDB",
        "names": [
            {
                "name": "TriangleDB"
            }
        ],
        "description": "(Kaspersky) The implant, which we dubbed TriangleDB, is deployed after the attackers obtain root privileges on the target iOS device by exploiting a kernel vulnerability. It is deployed in memory, meaning that all traces of the implant are lost when the device gets rebooted. Therefore, if the victim reboots their device, the attackers have to reinfect it by sending an iMessage with a malicious attachment, thus launching the whole exploitation chain again. In case no reboot occurs, the implant uninstalls itself after 30 days, unless this period is extended by the attackers.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://securelist.com/triangledb-triangulation-implant/110050/"
        ],
        "uuid": "5f84e19d-bf8d-44a9-92d5-f95c00d67b46",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "triangledb",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/triangledb-triangulation-implant/110050/",
            "date": "2023-06-21",
            "organization": "Kaspersky Labs",
            "author": "Georgy Kucherin",
            "title": "Dissecting TriangleDB, a Triangulation spyware implant",
            "categories": [
                "TriangleDB"
            ]
        }
    ],
    "mitre": []
};