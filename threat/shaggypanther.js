var threatdata = {
    "name": "ShaggyPanther",
    "alias": "ShaggyPanther",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "ShaggyPanther",
        "names": [
            {
                "name": "ShaggyPanther",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2018",
        "description": "(Kaspersky) We first discussed ShaggyPanther, a previously unseen malware and intrusion set targeting Taiwan and Malaysia, in a private report in January 2018. Related activities date back to more than a decade ago, with similar code maintaining compilation timestamps from 2004. Since then, ShaggyPanther activity has been detected in several more locations: most recently in Indonesia in July, and \u2013 somewhat surprisingly \u2013 in Syria in March. The newer 2018 and 2019 backdoor code maintains a new layer of obfuscation and no longer maintains clear-text C2 strings. Since our original release, we have identified an initial server-side infection vector from this actor, using SinoChopper/ChinaChopper, a commonly used web shell shared by multiple Chinese-speaking actors. SinoChopper not only performs host identification and backdoor delivery but also email archive theft and additional activity. Although not all incidents can be traced back to server-side exploitation, we did detect a couple of cases and obtained information about their staged install process. In 2019, we observed ShaggyPanther targeting Windows servers.",
        "observed-sectors": [
            "Government"
        ],
        "observed-countries": [
            "Indonesia",
            "Malaysia",
            "Syria",
            "Taiwan"
        ],
        "tools": [
            "China Chopper"
        ],
        "information": [
            "https://securelist.com/ksb-2019-review-of-the-year/95394/"
        ],
        "uuid": "957ca760-b50a-4d6d-a4d5-72dcdc3737e3",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "shaggypanther",
    "analysis": null,
    "articles": [],
    "mitre": []
};