var threatdata = {
    "name": "Clever Kitten",
    "alias": "Clever Kitten, Group 41",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "Clever Kitten",
        "names": [
            {
                "name": "Clever Kitten",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Group 41",
                "name-giver": "Talos"
            }
        ],
        "country": [
            "Iran"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2013",
        "description": "(CrowdStrike) Clever Kitten primarily targets global companies with strategic importance to countries that are contrary to Iranian interests.\n\nClever Kitten actors have a strong affinity for PHP server-side attacks to make access; this is relatively unique amongst targeted attackers who often favor targeting a specific individual at a specific organization using social engineering. Some attackers have moved to leveraging strategic web compromises. The reason for this is likely the availability of exploits against web browsers, which for a variety of reasons allows an attacker to bypass security features such as Data Execution Prevention (DEP) or Address Space Layout Randomization (ASLR).",
        "observed-sectors": [
            "Global companies with strategic importance to countries that are contrary to Iranian interests."
        ],
        "tools": [
            "Acunetix Web Vulnerability Scanner",
            "RC SHELL"
        ],
        "information": [
            "https://www.crowdstrike.com/blog/whois-clever-kitten/"
        ],
        "uuid": "937fc2ca-f7b3-4be7-ab2c-32b67bd7dac4",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "clever_kitten",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://www.crowdstrike.com/blog/whois-clever-kitten/",
            "date": "2013-04-04",
            "organization": "CrowdStrike",
            "author": "Adam Meyers",
            "title": "Who is Clever Kitten",
            "categories": [
                "Clever Kitten"
            ]
        }
    ],
    "mitre": []
};