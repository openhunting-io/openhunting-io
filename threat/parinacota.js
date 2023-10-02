var threatdata = {
    "name": "Parinacota",
    "alias": "Parinacota, Wine Tempest",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "Parinacota",
        "names": [
            {
                "name": "Parinacota",
                "name-giver": "Microsoft"
            },
            {
                "name": "Wine Tempest",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial gain"
        ],
        "first-seen": "2018",
        "description": "(Microsoft) One actor that has emerged in this trend of human-operated attacks is an active, highly adaptive group that frequently drops Wadhrama as payload. Microsoft has been tracking this group for some time, but now refers to them as PARINACOTA, using our new naming designation for digital crime actors based on global volcanoes.\n\nPARINACOTA impacts three to four organizations every week and appears quite resourceful: during the 18 months that we have been monitoring it, we have observed the group change tactics to match its needs and use compromised machines for various purposes, including cryptocurrency mining, sending spam emails, or proxying for other attacks. The group\u2019s goals and payloads have shifted over time, influenced by the type of compromised infrastructure, but in recent months, they have mostly deployed the Wadhrama ransomware.\n\nThe group most often employs a smash-and-grab method, whereby they attempt to infiltrate a machine in a network and proceed with subsequent ransom in less than an hour. There are outlier campaigns in which they attempt reconnaissance and lateral movement, typically when they land on a machine and network that allows them to quickly and easily move throughout the environment.",
        "observed-countries": [
            "Worldwide"
        ],
        "tools": [
            "Mimikatz",
            "ProcDump",
            "Wadhrama"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2020/03/05/human-operated-ransomware-attacks-a-preventable-disaster/"
        ],
        "uuid": "5d8fa8b4-2ed3-47ae-a21b-86e8dd17773b",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "parinacota",
    "analysis": null,
    "articles": [],
    "mitre": []
};