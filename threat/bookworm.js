var threatdata = {
    "name": "Bookworm",
    "alias": "Bookworm",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "Bookworm",
        "names": [
            {
                "name": "Bookworm",
                "name-giver": "Palo Alto"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2015",
        "description": "(Palo Alto) Threat actors have delivered Bookworm as a payload in attacks on targets in Thailand. Readers who are interested in this campaign should start with our first blog that lays out the overall functionality of the malware and introduces its many components.\n\nUnit 42 does not have detailed targeting information for all known Bookworm samples, but we are aware of attempted attacks on at least two branches of government in Thailand. We speculate that other attacks delivering Bookworm were also targeting organizations in Thailand based on the contents of the associated decoys documents, as well as several of the dynamic DNS domain names used to host C2 servers that contain the words \u201cThai\u201d or \u201cThailand\u201d. Analysis of compromised systems seen communicating with Bookworm C2 servers also confirms our speculation on targeting with a majority of systems existing within Thailand.",
        "observed-sectors": [
            "Defense",
            "Government"
        ],
        "observed-countries": [
            "Thailand"
        ],
        "tools": [
            "Bookworm",
            "FormerFirstRAT",
            "Poison Ivy",
            "PlugX",
            "Scieron"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/attack-campaign-on-the-government-of-thailand-delivers-bookworm-trojan/",
            "https://unit42.paloaltonetworks.com/bookworm-trojan-a-model-of-modular-architecture/"
        ],
        "uuid": "10591398-68de-4ce0-9427-d7cd32df1407",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bookworm",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/bookworm-trojan-a-model-of-modular-architecture/",
            "date": "2015-11-10",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Bookworm Trojan: A Model of Modular Architecture",
            "categories": [
                "Bookworm"
            ]
        }
    ],
    "mitre": []
};