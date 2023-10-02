var threatdata = {
    "name": "Blackgear",
    "alias": "Blackgear, Topgear",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "Blackgear",
        "names": [
            {
                "name": "Blackgear",
                "name-giver": "Trend Micro"
            },
            {
                "name": "Topgear",
                "name-giver": "?"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2018",
        "description": "(Trend Micro) Blackgear is an espionage campaign which has targeted users in Taiwan for many years. Multiple papers and talks have been released covering this campaign, which used the ELIRKS backdoor when it was first discovered in 2012. It is known for using blogs and microblogging services to hide the location of its actual command-and-control (C&C) servers. This allows an attacker to change the C&C server used quickly by changing the information in these posts.\n\nLike most campaigns, Blackgear has evolved over time. Our research indicates that it has started targeting Japanese users. Two things led us to this conclusion: first, the fake documents that are used as part of its infection routines are now in Japanese. Secondly, it is now using blogging sites and microblogging services based in Japan for its C&C activity.",
        "observed-countries": [
            "Japan",
            "South Korea",
            "Taiwan"
        ],
        "tools": [
            "Comnie",
            "Elirks",
            "Protux"
        ],
        "operations": [
            {
                "date": "2018-07",
                "activity": "Resurfaces, Abuses Social Media for C&C Communication\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/blackgear-cyberespionage-campaign-resurfaces-abuses-social-media-for-cc-communication/"
            }
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/blackgear-espionage-campaign-evolves-adds-japan-target-list/"
        ],
        "uuid": "9d6a918f-c75c-41c4-842d-3ad79c5a6642",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "blackgear",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/blackgear-cyberespionage-campaign-resurfaces-abuses-social-media-for-cc-communication/",
            "date": "2018-07-17",
            "organization": "Trend Micro",
            "author": "Joey Chen",
            "title": "Blackgear Cyberespionage Campaign Resurfaces, Abuses Social Media for C&C Communication",
            "categories": [
                "Blackgear"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/blackgear-espionage-campaign-evolves-adds-japan-target-list/",
            "date": "2016-10-27",
            "organization": "Trend Micro",
            "author": "Joey Chen",
            "title": "BLACKGEAR Espionage Campaign Evolves, Adds Japan To Target List",
            "categories": [
                "Blackgear"
            ]
        }
    ],
    "mitre": []
};