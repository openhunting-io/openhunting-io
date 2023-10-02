var threatdata = {
    "name": "Bad Magic, RedStinger",
    "alias": "Bad Magic, RedStinger, CloudWizard",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-21",
    "all_data": {
        "actor": "Bad Magic, RedStinger",
        "names": [
            {
                "name": "Bad Magic",
                "name-giver": "Kaspersky"
            },
            {
                "name": "RedStinger",
                "name-giver": "Malwarebytes"
            },
            {
                "name": "CloudWizard",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2020",
        "description": "(Kaspersky) In October 2022, we identified an active infection of government, agriculture and transportation organizations located in the Donetsk, Lugansk, and Crimea regions. Although the initial vector of compromise is unclear, the details of the next stage imply the use of spear phishing or similar methods. The victims navigated to a URL pointing to a ZIP archive hosted on a malicious web server.",
        "observed-sectors": [
            "Defense",
            "Food and Agriculture",
            "Government",
            "Transportation"
        ],
        "observed-countries": [
            "Ukraine"
        ],
        "tools": [
            "CommonMagic",
            "PowerMagic"
        ],
        "operations": [
            {
                "date": "2020",
                "activity": "Uncovering RedStinger - Undetected APT cyber operations in Eastern Europe since 2020\nhttps://www.malwarebytes.com/blog/threat-intelligence/2023/05/redstinger"
            },
            {
                "date": "2023-05",
                "activity": "CloudWizard APT: the bad magic story goes on\nhttps://securelist.com/cloudwizard-apt/109722/"
            }
        ],
        "information": [
            "https://securelist.com/bad-magic-apt/109087/"
        ],
        "uuid": "f929ecc7-3be3-4fee-bb7d-3bf5762e6b3d",
        "last-card-change": "2023-06-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bad_magic_redstinger",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/cloudwizard-apt/109722/",
            "date": "2023-05-19",
            "organization": "Kaspersky Labs",
            "author": "Leonid Bezvershenko",
            "title": "CloudWizard APT: the bad magic story goes on",
            "categories": [
                "PowerMagic",
                "CloudWizard",
                "CommonMagic",
                "Prikormka"
            ]
        }
    ],
    "mitre": []
};