var threatdata = {
    "name": "Vendetta, TA2719",
    "alias": "Vendetta, TA2719",
    "category": "APT",
    "type": "-",
    "modified": "2023-03-08",
    "all_data": {
        "actor": "Vendetta, TA2719",
        "names": [
            {
                "name": "Vendetta",
                "name-giver": "Qihoo 360"
            },
            {
                "name": "TA2719",
                "name-giver": "Proofpoint"
            }
        ],
        "country": [
            "Turkey"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2020",
        "description": "(Qihoo 360) Starting in April this year, 360 Baize Lab intercepted a large number of attack samples from an unknown hacker organization. The hacker organization sent a phishing email to the victim by forging a police station investigation letter, COVID-19 detection notice, etc. Through the backdoor virus to control the victim\u2019s machine, steal valuable sensitive data related to the target.\n\n(Proofpoint) In late March 2020, Proofpoint researchers began tracking a new actor with a penchant for using NanoCore and later AsyncRAT, popular commodity remote access trojans (RATs). Dubbed TA2719 by Proofpoint, the actor uses localized lures with colorful images that impersonate local banks, law enforcement, and shipping services. To date, Proofpoint has observed this actor send low volume campaigns to recipients in Austria, Chile, Greece, Hungary, Italy, North Macedonia, Netherlands, Spain, Sweden, Taiwan, United States, and Uruguay.",
        "observed-countries": [
            "Australia",
            "Austria",
            "Chile",
            "China",
            "Egypt",
            "Greece",
            "Hungary",
            "Italy",
            "Netherlands",
            "Macedonia",
            "Mexico",
            "Romania",
            "Russia",
            "Singapore",
            "Spain",
            "Sweden",
            "Taiwan",
            "Thailand",
            "USA",
            "Uruguay"
        ],
        "tools": [
            "AsyncRAT",
            "NanoCore RAT",
            "RemcosRAT",
            "ReZer0",
            "RoboSki"
        ],
        "information": [
            "https://blog.360totalsecurity.com/en/vendetta-new-threat-actor-from-europe/",
            "https://www.proofpoint.com/us/blog/threat-insight/threat-actor-profile-ta2719-uses-colorful-lures-deliver-rats-local-languages"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:vendetta"
        ],
        "uuid": "94f7768b-107e-44ae-87c7-a028cee60e32",
        "last-card-change": "2020-09-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "vendetta_ta2719",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.malwarebytes.com/blog/threat-intelligence/2023/03/ransomware-review-march-2023",
            "date": "2023-03-08",
            "organization": "Malwarebytes",
            "author": "Malwarebytes Threat Intelligence Team",
            "title": "Ransomware review: March 2023",
            "categories": [
                "Vendetta"
            ]
        }
    ],
    "mitre": []
};