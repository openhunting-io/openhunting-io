var threatdata = {
    "name": "Carderbee",
    "alias": "Carderbee",
    "category": "APT",
    "type": "-",
    "modified": "2023-10-05",
    "all_data": {
        "actor": "Carderbee",
        "names": [
            {
                "name": "Carderbee",
                "name-giver": "Symantec"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2023",
        "description": "(Symantec) A previously unknown advanced persistent threat (APT) group used the legitimate Cobra DocGuard software to carry out a supply chain attack with the goal of deploying the Korplug backdoor (aka PlugX) onto victim computers.\n\nIn the course of this attack, the attackers used malware signed with a legitimate Microsoft certificate. Most of the victims in this campaign are based in Hong Kong, with some victims based in other regions of Asia.\n\nKorplug is known to be used by multiple APT groups, but we could not link this activity to a known threat actor so we have given the actor behind this activity a new name \u2014 Carderbee.",
        "observed-countries": [
            "Hong Kong",
            "Asia"
        ],
        "tools": [
            "Cobra DocGuard",
            "PlugX"
        ],
        "information": [
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/carderbee-software-supply-chain-certificate-abuse"
        ],
        "uuid": "15acd737-0ced-4e06-a285-42e1390d5452",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "carderbee",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.eclecticiq.com/chinese-state-sponsored-cyber-espionage-activity-targeting-semiconductor-industry-in-east-asia",
            "date": "2023-10-05",
            "organization": "EclecticIQ",
            "author": "Arda B\u00fcy\u00fckkaya",
            "title": "Chinese State-Sponsored Cyber Espionage Activity Targeting Semiconductor Industry in East Asia",
            "categories": [
                "ChargeWeapon",
                "Carderbee"
            ]
        }
    ],
    "mitre": []
};