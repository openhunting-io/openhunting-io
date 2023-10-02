var threatdata = {
    "name": "MPKBot",
    "alias": "MPKBot, MPK",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "MPKBot",
        "names": [
            {
                "name": "MPKBot"
            },
            {
                "name": "MPK"
            }
        ],
        "description": "(Palo Alto) We also found a second IRC bot called MPK using the same IP for its C2 server that a Leash sample was hosted on. This MPK IRC bot is very similar to the MPK Trojan that used a custom C2 communications protocol, as detailed in a whitepaper by CheckPoint regarding a threat group called Rocket Kitten. We believe this version of the MPK Trojan is based on the same code base, as both the IRC version and the one referenced in the white paper have considerable similarities from a behavior standpoint as well as direct code overlap.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-magic-hound-campaign-attacks-saudi-targets/",
            "https://blog.checkpoint.com/wp-content/uploads/2015/11/rocket-kitten-report.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.mpkbot"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:MPKBot"
        ],
        "uuid": "e656fbde-296b-4a80-82fd-1676efa7b068",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "mpkbot",
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
        },
        {
            "data_url": "https://blog.checkpoint.com/wp-content/uploads/2015/11/rocket-kitten-report.pdf",
            "date": "2015-11",
            "organization": "Check Point",
            "author": "Check Point",
            "title": "ROCKET KIT TEN: A CAMPAIGN WITH 9 LIVES",
            "categories": [
                "FireMalv",
                "MPKBot",
                "Woolger",
                "Cleaver",
                "Rocket Kitten"
            ]
        }
    ],
    "mitre": []
};