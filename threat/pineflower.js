var threatdata = {
    "name": "PINEFLOWER",
    "alias": "PINEFLOWER, CORRUPT KITTEN",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "PINEFLOWER",
        "names": [
            {
                "name": "PINEFLOWER"
            },
            {
                "name": "CORRUPT KITTEN"
            }
        ],
        "description": "(FireEye) CORRUPT KITTEN was the author\u2019s chosen name for an Android implant that, according to the blog, \u2018supports a full range of spying and device management capability\u2019. The blog contained a summary analysis of this CORRUPT KITTEN implant and an MD5 hash for a DEX file allegedly using the same C&C server.\nNotably, the author also noted that the malware stored files ready for exfiltration in a directory named \u2018.data_gsc98647a3\u2019, the string we identified in our PINEFLOWER samples. It seemed likely that CORRUPT KITTEN and PINEFLOWER were one and the same.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://vblocalhost.com/uploads/VB2021-Haeghebaert.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.pineflower"
        ],
        "uuid": "8a823fe9-e03f-4c37-be82-3288c05ec213",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pineflower",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/media/17826",
            "date": "2022-09-07",
            "organization": "Mandiant",
            "author": "Mandiant Intelligence",
            "title": "APT42: Crooked Charms, Cons  and Compromises",
            "categories": [
                "PINEFLOWER",
                "VINETHORN",
                "VBREVSHELL",
                "BROKEYOLK",
                "DOSTEALER",
                "GHAMBAR",
                "SILENTUPLOADER"
            ]
        }
    ],
    "mitre": []
};