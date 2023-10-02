var threatdata = {
    "name": "TA554",
    "alias": "TA554, TH-163",
    "category": "APT",
    "type": "-",
    "modified": "2020-07-08",
    "all_data": {
        "actor": "TA554",
        "names": [
            {
                "name": "TA554",
                "name-giver": "Proofpoint"
            },
            {
                "name": "TH-163",
                "name-giver": "Yoroi"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime"
        ],
        "first-seen": "2017",
        "description": "(Proofpoint) Since May 2018, Proofpoint researchers have observed email campaigns using a new downloader called sLoad. sLoad is a PowerShell downloader that most frequently delivers Ramnit banker and includes noteworthy reconnaissance features. The malware gathers information about the infected system including a list of running processes, the presence of Outlook, and the presence of Citrix-related files. sLoad can also take screenshots and check the DNS cache for specific domains (e.g., targeted banks), as well as load external binaries.\n\nWhile initial versions of sLoad appeared in May 2018, we began tracking the campaigns from this actor (internally named TA554) since at least the beginning of 2017.",
        "observed-sectors": [
            "Financial"
        ],
        "observed-countries": [
            "Canada",
            "Italy",
            "UK"
        ],
        "tools": [
            "DarkVNC",
            "Godzilla",
            "Gootkit",
            "Gozi ISFB",
            "PsiXBot",
            "Ramnit",
            "sLoad",
            "Snatch",
            "Living off the Land"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/sload-and-ramnit-pairing-sustained-campaigns-against-uk-and-italy",
            "https://isc.sans.edu/forums/diary/Malicious+Powershell+Targeting+UK+Bank+Customers/23675/",
            "https://blog.dynamoo.com/2017/02/highly-personalised-malspam-making.html"
        ],
        "uuid": "4ae54bc8-e451-4ec7-a8c7-08e9795cc082",
        "last-card-change": "2020-04-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ta554",
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