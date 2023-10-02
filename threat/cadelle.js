var threatdata = {
    "name": "Cadelle",
    "alias": "Cadelle",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-15",
    "all_data": {
        "actor": "Cadelle",
        "names": [
            {
                "name": "Cadelle",
                "name-giver": "Symantec"
            }
        ],
        "country": [
            "Iran"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2011",
        "description": "(Symantec) Symantec telemetry identified Cadelle and {{Chafer, APT 39}} activity dating from as far back as July 2014, however, it\u2019s likely that activity began well before this date. Command-and-control (C&C) registrant information points to activity possibly as early as 2011, while executable compilation times suggest early 2012. Their attacks continue to the present day. Symantec estimates that each team is made up of between 5 and 10 people.\n\nThere is evidence to suggest that the two teams may be connected in some way, though we cannot confirm this. A number of computers experienced both Cadelspy and Remexi infections within a small time window. In one instance, a computer was compromised with Backdoor.Cadelspy just minutes after being infected with Backdoor.Remexi. The Cadelle and Chafer groups also keep the same working hours and focus on similar targets. However, no sharing of C&C infrastructure between the teams has been observed.\n\nIf Cadelle and Chafer are not directly linked, then they may be separately working for a single entity. Their victim profile may be of interest to a nation state.",
        "observed-countries": [
            "Germany",
            "Iran",
            "Iraq",
            "Netherlands",
            "Pakistan",
            "Saudi Arabia",
            "Singapore",
            "Sudan",
            "Tajikistan",
            "Thailand",
            "Turkey",
            "UAE",
            "UK",
            "USA"
        ],
        "tools": [
            "Antak",
            "Cadelspy"
        ],
        "information": [
            "https://www.symantec.com/connect/blogs/iran-based-attackers-use-back-door-threats-spy-middle-eastern-targets"
        ],
        "uuid": "847d1026-418b-4a30-8ab9-6a4868ab6302",
        "last-card-change": "2020-04-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cadelle",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.symantec.com/connect/blogs/iran-based-attackers-use-back-door-threats-spy-middle-eastern-targets",
            "date": "2015-12-07",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Iran-based attackers use back door threats to spy on Middle Eastern targets",
            "categories": [
                "APT39",
                "Cadelle"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20191221064439/https://www.symantec.com/connect/blogs/iran-based-attackers-use-back-door-threats-spy-middle-eastern-targets",
            "date": "2015-12-07",
            "organization": "Symantec",
            "author": "Security Response",
            "title": "Iran-based attackers use back door threats to spy on Middle Eastern targets",
            "categories": [
                "CadelSpy",
                "Remexi",
                "Cadelle"
            ]
        }
    ],
    "mitre": []
};