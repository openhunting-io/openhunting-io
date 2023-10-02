var threatdata = {
    "name": "TA555",
    "alias": "TA555",
    "category": "APT",
    "type": "-",
    "modified": "2020-07-08",
    "all_data": {
        "actor": "TA555",
        "names": [
            {
                "name": "TA555",
                "name-giver": "Proofpoint"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime"
        ],
        "first-seen": "2018",
        "description": "(Proofpoint) Beginning in May 2018, Proofpoint researchers observed a previously undocumented downloader dubbed AdvisorsBot appearing in malicious email campaigns. The campaigns appear to primarily target hotels, restaurants, and telecommunications, and are distributed by an actor we track as TA555. To date, we have observed AdvisorsBot used as a first-stage payload, loading a fingerprinting module that, as with Marap, is presumably used to identify targets of interest to further infect with additional modules or payloads. AdvisorsBot is under active development and we have also observed another version of the malware completely rewritten in PowerShell and .NET.",
        "observed-sectors": [
            "Hospitality",
            "Telecommunications"
        ],
        "tools": [
            "AdvisorsBot",
            "PoshAdvisor"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/new-modular-downloaders-fingerprint-systems-part-2-advisorsbot"
        ],
        "uuid": "bf6a3eb5-da87-482a-87da-d50a301953ee",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ta555",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.thaicert.or.th/downloads/files/Threat_Group_Cards_v2.0.pdf",
            "date": "2020-07-08",
            "organization": "ThaiCERT",
            "author": "ThaiCERT",
            "title": "Threat Group Cards: A Threat Actor Encyclopedia",
            "categories": [
                "TA516",
                "TA547",
                "TA554",
                "TA555"
            ]
        }
    ],
    "mitre": []
};