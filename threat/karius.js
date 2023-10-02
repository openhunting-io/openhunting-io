var threatdata = {
    "name": "Karius",
    "alias": "Karius",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Credential stealer",
    "modified": "2022-08-18",
    "all_data": {
        "tool": "Karius",
        "names": [
            {
                "name": "Karius"
            }
        ],
        "description": "(Check Point) The Check Point Research team recently came across one such banking Trojan under development and already being distributed through the RIG Exploit Kit. Dubbed \u2018Karius\u2019, the Trojan aims to carry out web injects to add additional fields into a bank\u2019s legitimate login page and send the inputted information to the attacker.\n\nWhile Karius is not yet in full infection mode, initial tests have already been made and our research below shows the evolution of how such malware takes place. Our analysis also shows how banking trojans such as Karius are put together and makes use of code from other well-known bankers such as {{Ramnit}}, {{Vawtrak}} and {{TrickBot}}.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://research.checkpoint.com/2018/banking-trojans-development/",
            "https://dissectmalware.wordpress.com/2018/03/28/multi-stage-powershell-script/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.karius"
        ],
        "uuid": "a68618b6-5b31-43fd-a615-e48d35fae028",
        "last-card-change": "2020-05-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "karius",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securityintelligence.com/posts/from-ramnit-to-bumblebee-via-neverquest",
            "date": "2022-08-18",
            "organization": "IBM",
            "author": "Charlotte Hammond",
            "title": "From Ramnit To Bumblebee (via NeverQuest): Similarities and Code Overlap Shed Light On Relationships Between Malware Developers",
            "categories": [
                "BumbleBee",
                "Karius",
                "Ramnit",
                "TrickBot",
                "Vawtrak"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/banking-trojans-development/",
            "date": "2018-06-06",
            "organization": "Check Point",
            "author": "Check Point Research",
            "title": "Banking Trojans Under Development",
            "categories": [
                "Karius"
            ]
        },
        {
            "data_url": "https://dissectmalware.wordpress.com/2018/03/28/multi-stage-powershell-script/",
            "date": "2018-03-28",
            "organization": "",
            "author": "Malwrologist",
            "title": "Multi-stage Powershell script (Brownies)",
            "categories": [
                "Karius"
            ]
        }
    ],
    "mitre": []
};