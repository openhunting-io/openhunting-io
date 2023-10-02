var threatdata = {
    "name": "TA511",
    "alias": "TA511, MAN1, Moskalvzapoe",
    "category": "APT",
    "type": "-",
    "modified": "2021-04-21",
    "all_data": {
        "actor": "TA511",
        "names": [
            {
                "name": "TA511",
                "name-giver": "Proofpoint"
            },
            {
                "name": "MAN1",
                "name-giver": "?"
            },
            {
                "name": "Moskalvzapoe",
                "name-giver": "?"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime"
        ],
        "first-seen": "2018",
        "description": "(Palo Alto) Hancitor is an information stealer and malware downloader used by a threat actor designated as MAN1, Moskalvzapoe or TA511. In a threat brief from 2018, we noted Hancitor was relatively unsophisticated, but it would remain a threat for years to come. Approximately three years later, Hancitor remains a threat and has evolved to use tools like Cobalt Strike. In recent months, this actor began using a network ping tool to help enumerate the Active Directory (AD) environment of infected hosts. This blog illustrates how the threat actor behind Hancitor uses the network ping tool, so security professionals can better identify and block its use.",
        "observed-countries": [
            "Argentina",
            "Brazil",
            "Canada",
            "Germany",
            "Hong Kong",
            "India",
            "Ireland",
            "Israel",
            "Italy",
            "Japan",
            "Kazakhstan",
            "Lithuania",
            "Malaysia",
            "Netherlands",
            "Russia",
            "Singapore",
            "South Africa",
            "South Korea",
            "Taiwan",
            "Thailand",
            "Turkey",
            "Ukraine",
            "UK",
            "USA",
            "Vietnam"
        ],
        "tools": [
            "Cobalt Strike",
            "Ficker Stealer",
            "Hancitor",
            "NetSupport Manager"
        ],
        "operations": [
            {
                "date": "2020-10",
                "activity": "Hancitor\u2019s Use of Cobalt Strike and a Noisy Network Ping Tool\nhttps://unit42.paloaltonetworks.com/hancitor-infections-cobalt-strike/"
            }
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/threat-brief-hancitor-actors/"
        ],
        "uuid": "232acfd0-5488-4391-ae93-6e1dc4df99d4",
        "last-card-change": "2021-04-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ta511",
    "analysis": null,
    "articles": [],
    "mitre": []
};