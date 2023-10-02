var threatdata = {
    "name": "IronHusky",
    "alias": "IronHusky, BBCY-TA1",
    "category": "APT",
    "type": "-",
    "modified": "2021-11-03",
    "all_data": {
        "actor": "IronHusky",
        "names": [
            {
                "name": "IronHusky",
                "name-giver": "Kaspersky"
            },
            {
                "name": "BBCY-TA1",
                "name-giver": "BlackBerry"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2017",
        "description": "(Kaspersky) IronHusky is a Chinese-speaking actor that we first detected in summer 2017. It is very focused on tracking the geopolitical agenda of targets in central Asia with a special focus in Mongolia, which seems to be an unusual target. This actor crafts campaigns for upcoming events of interest. In this case, they prepared and launched one right before a meeting with the International Monetary Fund and the Mongolian government at the end of January 2018. At the same time, they stopped their previous operations targeting Russian military contractors, which speaks volumes about the group\u2019s limitations. In this new campaign, they exploited CVE-2017-11882 to spread common RATs typically used by Chinese-speaking groups, such as PlugX and PoisonIvy.",
        "observed-sectors": [
            "Defense",
            "Financial",
            "Government"
        ],
        "observed-countries": [
            "Mongolia",
            "Russia"
        ],
        "tools": [
            "MysterySnail RAT",
            "Poison Ivy",
            "PlugX"
        ],
        "operations": [
            {
                "date": "2021-08",
                "activity": "Operation \u201cMysterySnail\u201d\nIn late August and early September 2021, Kaspersky technologies detected attacks with the use of an elevation of privilege exploit on multiple Microsoft Windows servers.\nhttps://securelist.com/mysterysnail-attacks-with-windows-zero-day/104509/"
            }
        ],
        "information": [
            "https://securelist.com/apt-trends-report-q1-2018/85280/"
        ],
        "uuid": "3f1b347c-02ab-4ea5-ab79-6195bb15daf4",
        "last-card-change": "2021-11-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ironhusky",
    "analysis": null,
    "articles": [],
    "mitre": []
};