var threatdata = {
    "name": "Leash",
    "alias": "Leash",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Leash",
        "names": [
            {
                "name": "Leash"
            }
        ],
        "description": "(Palo Alto) The Magic Hound campaign was also discovered deploying an IRC Bot, which we have named MagicHound.Leash. We discovered this connection when we observed a DropIt sample installing a backdoor Trojan that used IRC for its C2 communications.\n\nLeash obtains its commands via private messages (PRIVMSG) sent from the adversary who must also be connected to the IRC server. All of its available commands (see Appendix), except for the VER command seen in Figure 5, must be issued by individuals in the IRC channel with nicknames that start with \u201cAS_\u201d or \u201cAF_\u201d.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-magic-hound-campaign-attacks-saudi-targets/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.leash"
        ],
        "uuid": "cffb6ef7-2c27-43b6-87b8-a95d1b51fe75",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "leash",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2017/02/unit42-magic-hound-campaign-attacks-saudi-targets/",
            "date": "2017-02-15",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Bryan Lee",
            "title": "Magic Hound Campaign Attacks Saudi Targets",
            "categories": [
                "Leash",
                "MPKBot",
                "pupy",
                "Rocket Kitten"
            ]
        }
    ],
    "mitre": []
};