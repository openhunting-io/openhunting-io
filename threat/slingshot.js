var threatdata = {
    "name": "Slingshot",
    "alias": "Slingshot",
    "category": "APT",
    "type": "-",
    "modified": "2022-01-11",
    "all_data": {
        "actor": "Slingshot",
        "names": [
            {
                "name": "Slingshot",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2012",
        "description": "(Kaspersky) While  nalyzing an incident which involved a suspected keylogger, we identified a malicious library able to interact with a virtual file system, which is usually the sign of an advanced APT actor. This turned out to be a malicious loader internally named \u2018Slingshot\u2019, part of a new, and highly sophisticated attack platform that rivals Project Sauron and Regin in complexity.\n\nWhile for most victims the infection vector for Slingshot remains unknown, we were able to find several cases where the attackers got access to MikroTik routers and placed a component downloaded by Winbox Loader, a management suite for MikroTik routers. In turn, this infected the administrator of the router.\n\nWe believe this cluster of activity started in at least 2012 and was still active at the time of this analysis (February 2018).",
        "observed-countries": [
            "Afghanistan",
            "Congo",
            "Iraq",
            "Jordan",
            "Kenya",
            "Libya",
            "Somalia",
            "Sudan",
            "Tanzania",
            "Turkey",
            "Yemen"
        ],
        "tools": [
            "Cahnadr",
            "GollumApp",
            "Slingshot",
            "WinBox (a utility used for MikroTik router configuration)"
        ],
        "information": [
            "https://securelist.com/apt-slingshot/84312/"
        ],
        "uuid": "9161f856-9d42-4442-84ab-d0332cfbe8a4",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "slingshot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2022/01/11/signed-kernel-drivers-unguarded-gateway-windows-core/",
            "date": "2022-01-11",
            "organization": "ESET Research",
            "author": "Michal Poslu\u0161n\u00fd",
            "title": "Signed kernel drivers \u2013 Unguarded gateway to Windows\u2019 core",
            "categories": [
                "InvisiMole",
                "LoJax",
                "RobinHood",
                "Slingshot"
            ]
        },
        {
            "data_url": "https://www.cyberscoop.com/kaspersky-slingshot-isis-operation-socom-five-eyes/",
            "date": "2018-03-20",
            "organization": "CyberScoop",
            "author": "Chris Bing",
            "title": "Kaspersky's 'Slingshot' report burned an ISIS-focused intelligence operation",
            "categories": [
                "Slingshot"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-slingshot/84312/",
            "date": "2018-03-09",
            "organization": "Kaspersky Labs",
            "author": "Alexey Shulmin",
            "title": "The Slingshot APT FAQ",
            "categories": [
                "Slingshot",
                "Slingshot"
            ]
        },
        {
            "data_url": "https://s3-eu-west-1.amazonaws.com/khub-media/wp-content/uploads/sites/43/2018/03/09133534/The-Slingshot-APT_report_ENG_final.pdf",
            "date": "2018-03-09",
            "organization": "Kaspersky Labs",
            "author": "Alexey Shulmin",
            "title": "The Slingshot APT",
            "categories": [
                "Slingshot"
            ]
        }
    ],
    "mitre": []
};