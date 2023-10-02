var threatdata = {
    "name": "IRONHALO",
    "alias": "IRONHALO",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "IRONHALO",
        "names": [
            {
                "name": "IRONHALO"
            }
        ],
        "description": "(FireEye) IRONHALO is a downloader that uses the HTTP protocol to retrieve a Base64 encoded payload from a hard-coded command-and-control (CnC) server and uniform resource locator (URL) path.\nThe encoded payload is written to a temporary file, decoded and executed in a hidden window. The encoded and decoded payloads are written to files named igfxHK[%rand%].dat and igfxHK[%rand%].exe respectively, where [%rand%] is a 4-byte hexadecimal number based on the current timestamp. It persists by copying itself to the current user\u2019s Startup folder.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2015/12/the-eps-awakens-part-two.html",
            "https://www.fireeye.com/blog/threat-research/2015/12/the_eps_awakens.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ironhalo"
        ],
        "uuid": "ad6447b0-774f-48a1-a5da-d03c3e0b94e4",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ironhalo",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.slideshare.net/codeblue_jp/cb19-cyber-threat-landscape-in-japan-revealing-threat-in-the-shadow-by-chi-en-shen-ashley-oleg-bondarenko",
            "date": "2019-12-12",
            "organization": "FireEye",
            "author": "Chi-en Shen",
            "title": "Cyber Threat Landscape in Japan \u2013 Revealing Threat in the Shadow",
            "categories": [
                "Cerberus",
                "TSCookie",
                "Cobalt Strike",
                "Dtrack",
                "Emotet",
                "Formbook",
                "IcedID",
                "Icefog",
                "IRONHALO",
                "Loki Password Stealer (PWS)",
                "PandaBanker",
                "PLEAD",
                "poisonplug",
                "TrickBot",
                "BlackTech"
            ]
        },
        {
            "data_url": "https://www.symantec.com/security-center/writeup/2015-122210-5128-99",
            "date": "2015-12-21",
            "organization": "Symantec",
            "author": "Kevin Savage",
            "title": "Downloader.Ironhalo",
            "categories": [
                "IRONHALO"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2015/12/the-eps-awakens-part-two.html",
            "date": "2015-12-21",
            "organization": "FireEye",
            "author": "Ryann Winters",
            "title": "The EPS Awakens - Part 2",
            "categories": [
                "ELMER",
                "IRONHALO",
                "EvilPost"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2015/12/the_eps_awakens.html",
            "date": "2015-12-16",
            "organization": "FireEye",
            "author": "Genwei Jiang",
            "title": "The EPS Awakens",
            "categories": [
                "IRONHALO",
                "APT16"
            ]
        }
    ],
    "mitre": []
};