var threatdata = {
    "name": "BlackRock",
    "alias": "BlackRock, AmpleBot",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Banking trojan, Keylogger, Info stealer, Credential stealer, Exfiltration",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "BlackRock",
        "names": [
            {
                "name": "BlackRock"
            },
            {
                "name": "AmpleBot"
            }
        ],
        "description": "(ThreatFabric) Around May 2020 ThreatFabric analysts have uncovered a new strain of banking malware dubbed BlackRock that looked pretty familiar. After investigation, it became clear that this newcomer is derived from the code of the Xerxes banking malware, which itself is a strain of the {{LokiBot}} Android banking Trojan. The source code of the Xerxes malware was made public by its author around May 2019, which means that it is accessible to any threat actor.\n\nTechnical aspects aside, one of the interesting differentiators of BlackRock is its target list; it contains an important number of social, networking, communication and dating applications. So far, many of those applications haven't been observed in target lists for other existing banking Trojans. It therefore seems that the actors behind BlackRock are trying to abuse the grow in online socializing that increased rapidly in the last months due to the pandemic situation.\n\nBlackRock offers a quite common set of capabilities compared to average Android banking Trojans. It can perform the infamous overlay attacks, send, spam and steal SMS messages, lock the victim in the launcher activity (HOME screen of the device), steal and hide notifications, deflect usage of Antivirus software on the device and act as a keylogger. Interestingly, the Xerxes Trojan itself offers more features, but it seems that actors have removed some of them in order to only keep those that they consider useful to steal personal information.\n\nNote: This malware was initially named BlackRock and later renamed to AmpleBot.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Banking trojan",
            "Keylogger",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.threatfabric.com/blogs/blackrock_the_trojan_that_wanted_to_get_them_all.html",
            "https://www.threatfabric.com/blogs/alien_the_story_of_cerberus_demise.html",
            "https://www.threatfabric.com/blogs/ermac-another-cerberus-reborn.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.amplebot"
        ],
        "uuid": "8d0ec018-69e1-4f6e-b7ef-b35e6a0dec39",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "BlackRock",
            "malware_alias": null,
            "malware": "apk.blackrock",
            "last_update": "2021-03-08 20:45:28",
            "tags": [
                "blackrock",
                "android",
                "banker"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://91.214.124.196/gate.php",
                        "timestamp": "2021-03-08 20:45:28"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-03-08 20:45:28",
    "file_name": "blackrock",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.threatfabric.com/blogs/ermac-another-cerberus-reborn.html",
            "date": "2021-09-22",
            "organization": "ThreatFabric",
            "author": "ThreatFabric",
            "title": "ERMAC - another Cerberus reborn",
            "categories": [
                "AmpleBot",
                "Cerberus",
                "ERMAC"
            ]
        }
    ],
    "mitre": []
};