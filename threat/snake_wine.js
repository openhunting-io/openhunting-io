var threatdata = {
    "name": "Snake Wine",
    "alias": "Snake Wine",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-15",
    "all_data": {
        "actor": "Snake Wine",
        "names": [
            {
                "name": "Snake Wine",
                "name-giver": "Cylance"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2016",
        "description": "(Cylance) While investigating some of the smaller name servers that {{Sofacy, APT 28, Fancy Bear, Sednit}} routinely use to host their infrastructure, Cylance discovered another prolonged campaign that appeared to exclusively target Japanese companies and individuals that began around August 2016. The later registration style was eerily close to previously registered APT28 domains, however, the malware used in the attacks did not seem to line up at all. During the course of our investigation, JPCERT published this analysis of one of the group\u2019s backdoors. Cylance tracks this threat group internally as \u2018Snake Wine\u2019.\n\nThe Snake Wine group has proven to be highly adaptable and has continued to adopt new tactics in order to establish footholds inside victim environments. The exclusive interest in Japanese government, education, and commerce will likely continue into the future as the group is just starting to build and utilize their existing current attack infrastructure.",
        "observed-sectors": [
            "Education",
            "Government",
            "Commerce"
        ],
        "observed-countries": [
            "Japan"
        ],
        "tools": [
            "ChChes",
            "Tofu Backdoor"
        ],
        "information": [
            "https://threatvector.cylance.com/en_us/home/the-deception-project-a-new-japanese-centric-threat.html",
            "https://www.jpcert.or.jp/magazine/acreport-ChChes.html"
        ],
        "uuid": "5550b040-3ff3-436f-a7d2-81740a987981",
        "last-card-change": "2020-04-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "snake_wine",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://threatvector.cylance.com/en_us/home/the-deception-project-a-new-japanese-centric-threat.html",
            "date": "2017-02-27",
            "organization": "Cylance",
            "author": "Jon Gross",
            "title": "The Deception Project: A New Japanese-Centric Threat",
            "categories": [
                "Snake Wine"
            ]
        },
        {
            "data_url": "https://www.cylance.com/en_us/blog/the-deception-project-a-new-japanese-centric-threat.html",
            "date": "2017-02-27",
            "organization": "Threat Vector",
            "author": "Jon Gross",
            "title": "The Deception Project: A New Japanese-Centric Threat",
            "categories": [
                "ChChes",
                "Snake Wine"
            ]
        },
        {
            "data_url": "https://www.jpcert.or.jp/magazine/acreport-ChChes.html",
            "date": "2017-01-26",
            "organization": "JPCERT/CC",
            "author": "Yu Nakamura",
            "title": "Malware ChChes interacts with C & C server using Cookie header",
            "categories": [
                "ChChes",
                "Snake Wine"
            ]
        }
    ],
    "mitre": []
};