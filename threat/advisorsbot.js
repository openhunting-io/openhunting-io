var threatdata = {
    "name": "AdvisorsBot",
    "alias": "AdvisorsBot",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "AdvisorsBot",
        "names": [
            {
                "name": "AdvisorsBot"
            }
        ],
        "description": "(Proofpoint) Beginning in May 2018, Proofpoint researchers observed a previously undocumented downloader dubbed AdvisorsBot appearing in malicious email campaigns. The campaigns appear to primarily target hotels, restaurants, and telecommunications, and are distributed by an actor we track as TA555. To date, we have observed AdvisorsBot used as a first-stage payload, loading a fingerprinting module that, as with Marap, is presumably used to identify targets of interest to further infect with additional modules or payloads. AdvisorsBot is under active development and we have also observed another version of the malware completely rewritten in PowerShell and .NET.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/new-modular-downloaders-fingerprint-systems-part-2-advisorsbot"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.advisorsbot"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:AdvisorsBot"
        ],
        "uuid": "a97e6425-d811-4beb-89ed-c26ce7550d69",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "advisorsbot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.bromium.com/second-stage-attack-analysis/",
            "date": "2018-11-05",
            "organization": "Bromium",
            "author": "Josh Stroschein",
            "title": "Data Talks: Deeper Down the Rabbit Hole: Second-Stage Attack and a Fileless Finale",
            "categories": [
                "AdvisorsBot"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/new-modular-downloaders-fingerprint-systems-part-2-advisorsbot",
            "date": "2018-08-23",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "New modular downloaders fingerprint systems - Part 2: AdvisorsBot",
            "categories": [
                "AdvisorsBot"
            ]
        }
    ],
    "mitre": []
};