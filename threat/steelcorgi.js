var threatdata = {
    "name": "STEELCORGI",
    "alias": "STEELCORGI",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2022-04-05",
    "all_data": {
        "tool": "STEELCORGI",
        "names": [
            {
                "name": "STEELCORGI"
            }
        ],
        "description": "(FireEye) STEELCORGI is a packer for Linux ELF programs that uses key material from the executing environment to decrypt the payload. When first starting up, the malware expects to find up to four environment variables that contain numeric values. The malware uses the environment variable values as a key to decrypt additional data to be executed.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://www.mandiant.com/resources/live-off-the-land-an-overview-of-unc1945",
            "https://yoroi.company/research/opening-steelcorgi-a-sophisticated-apt-swiss-army-knife/",
            "https://yoroi.company/research/shadows-from-the-past-threaten-italian-enterprises/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.steelcorgi"
        ],
        "uuid": "be20bbeb-da73-447b-9690-442052f15c7d",
        "last-card-change": "2022-04-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "steelcorgi",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/resources/unc2891-overview",
            "date": "2022-03-16",
            "organization": "Mandiant",
            "author": "Mathew Potaczek",
            "title": "Have Your Cake and Eat it Too? An Overview of UNC2891",
            "categories": [
                "SLAPSTICK",
                "STEELCORGI"
            ]
        },
        {
            "data_url": "https://yoroi.company/research/opening-steelcorgi-a-sophisticated-apt-swiss-army-knife/",
            "date": "2021-01-12",
            "organization": "Yoroi",
            "author": "Luigi Martire",
            "title": "Opening \u201cSTEELCORGI\u201d: A Sophisticated APT Swiss Army Knife",
            "categories": [
                "STEELCORGI"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2020/11/live-off-the-land-an-overview-of-unc1945.html",
            "date": "2020-11-02",
            "organization": "FireEye",
            "author": "Justin Moore",
            "title": "Live off the Land? How About Bringing Your Own Island? An Overview of UNC1945",
            "categories": [
                "SLAPSTICK",
                "STEELCORGI"
            ]
        }
    ],
    "mitre": []
};