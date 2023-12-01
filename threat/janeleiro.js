var threatdata = {
    "name": "Janeleiro",
    "alias": "Janeleiro",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Keylogger, Info stealer, Credential stealer",
    "modified": "2021-12-28",
    "all_data": {
        "tool": "Janeleiro",
        "names": [
            {
                "name": "Janeleiro"
            }
        ],
        "description": "(ESET) This new threat, which we\u2019ve named Janeleiro, attempts to deceive its victims with pop-up windows designed to look like the websites of some of the biggest banks in Brazil. These pop-ups contain fake forms, aiming to trick the malware\u2019s victims into entering their banking credentials and personal information that the malware captures and exfiltrates to its C&C servers. Janeleiro follows exactly the same blueprint for the core implementation of this technique as some of the most prominent malware families targeting the region: {{Mekotio}}, {{Grandoreiro}}, {{Mekotio}}, {{Amavaldo}}, and {{Vadokrist}}, among others.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://www.welivesecurity.com/2021/04/06/janeleiro-time-traveler-new-old-banking-trojan-brazil/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.janeleiro"
        ],
        "uuid": "126aa526-7e9f-411a-a810-aa1e93d659a2",
        "last-card-change": "2021-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Janeleiro",
            "malware_alias": null,
            "malware": "win.janeleiro",
            "last_update": "2021-07-22 17:22:41",
            "tags": [
                "janeleiro",
                "brazil",
                "banker"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://trackermid.us-east-1.elasticbeanstalk.com",
                        "timestamp": "2021-07-22 17:22:41"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-07-22 17:22:41",
    "file_name": "janeleiro",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2021/05/eset_threat_report_t12021.pdf",
            "date": "2021-06-03",
            "organization": "ESET Research",
            "author": "roman kovac",
            "title": "ESET Threat Report T\u200a1 2021",
            "categories": [
                "Kobalos",
                "Janeleiro",
                "Vadokrist"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2021/04/06/janeleiro-time-traveler-new-old-banking-trojan-brazil/",
            "date": "2021-04-06",
            "organization": "ESET Research",
            "author": "Facundo Mu\u00f1oz",
            "title": "Janeleiro, the time traveler: A new old banking trojan in Brazil",
            "categories": [
                "Janeleiro"
            ]
        }
    ],
    "mitre": []
};