var threatdata = {
    "name": "BADNEWS",
    "alias": "BADNEWS, JakyllHyde",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-05-16",
    "all_data": {
        "tool": "BADNEWS",
        "names": [
            {
                "name": "BADNEWS"
            },
            {
                "name": "JakyllHyde"
            }
        ],
        "description": "BADNEWS is malware that has been used by the actors responsible for the Patchwork campaign. Its name was given due to its use of RSS feeds, forums, and blogs for command and control.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-patchwork-continues-deliver-badnews-indian-subcontinent/",
            "http://blog.fortinet.com/2017/04/05/in-depth-look-at-new-variant-of-monsoon-apt-backdoor-part-1",
            "http://blog.fortinet.com/2017/04/05/in-depth-look-at-new-variant-of-monsoon-apt-backdoor-part-2",
            "https://documents.trendmicro.com/assets/tech-brief-untangling-the-patchwork-cyberespionage-group.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0128/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.badnews"
        ],
        "uuid": "47855af1-b4fe-4dc4-ad52-3e4cf90e6924",
        "last-card-change": "2021-05-16",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "BadNews",
            "malware_alias": null,
            "malware": "win.badnews",
            "last_update": "2022-07-18 07:03:41",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "5dc86d29f26cb9792a285533fdff8835",
                        "timestamp": "2022-07-18 07:03:41"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-07-18 07:03:41",
    "mitre": [],
    "file_name": "badnews",
    "analysis": null
};