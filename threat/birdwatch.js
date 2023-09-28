var threatdata = {
    "name": "BIRDWATCH",
    "alias": "BIRDWATCH",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-04-05",
    "all_data": {
        "tool": "BIRDWATCH",
        "names": [
            {
                "name": "BIRDWATCH"
            }
        ],
        "description": "(Mandiant) Our deep dive also revealed usage of BIRDWATCH and its\u2019 similar variants used by FIN7 and suspected FIN7 groups such as UNC3381. BIRDWATCH is a .NET-based downloader which retrieves payloads over HTTP, writing them to disk and then executing them. BIRDWATCH uploads reconnaissance information from targeted systems as well, which includes running processes, software installed, network configuration, web browser information and active directory data.\n\nBIRDWATCH is often referred to collectively as \u201c{{JSSLoader}}\u201d; however, multiple variations of BIRDWATCH exist which we track as separate code families. One variant of BIRDWATCH is {{CROWVIEW}}, which is also .NET-based, but has enough code differences from prototypical BIRDWATCH that we cluster it separately. Unlike BIRDWATCH, CROWVIEW can house an embedded payload, can self-delete, supports additional arguments and stores a slightly different configuration.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.mandiant.com/resources/evolution-of-fin7"
        ],
        "uuid": "cf534111-0a03-442d-a487-aecec978ba25",
        "last-card-change": "2022-04-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "birdwatch",
    "analysis": null
};