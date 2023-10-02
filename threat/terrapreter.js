var threatdata = {
    "name": "TerraPreter",
    "alias": "TerraPreter",
    "category": "Malware",
    "type": "Loader",
    "modified": "2023-01-24",
    "all_data": {
        "tool": "TerraPreter",
        "names": [
            {
                "name": "TerraPreter"
            }
        ],
        "description": "(ESET) Evilnum group also uses 64-bit executables that decrypt and run a {{Meterpreter}} instance in memory. The use of Meterpreter gives them flexibility and the ability to run various payloads in a stealthy and extensible way.\n\nThe structure of these components and the integrity checks implemented were identified as TerraLoader ({{More_eggs}}) code. That\u2019s why we refer to these components as TerraPreter.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.welivesecurity.com/2020/07/09/more-evil-deep-look-evilnum-toolset/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.terrapreter"
        ],
        "uuid": "aa8a0c17-4f49-4a18-ac38-28e75a6f14b9",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "terrapreter",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.esentire.com/web-native-pages/unmasking-venom-spider",
            "date": "2023-01-24",
            "organization": "eSentire",
            "author": "Joe Stewart",
            "title": "Unmasking Venom Spider",
            "categories": [
                "More_eggs",
                "TerraPreter",
                "TerraLoader",
                "VenomLNK"
            ]
        },
        {
            "data_url": "https://www.esentire.com/security-advisories/hackers-spearphish-professionals-on-linkedin-with-fake-job-offers-infecting-them-with-malware-warns-esentire",
            "date": "2021-04-05",
            "organization": "eSentire",
            "author": "eSentire",
            "title": "Hackers Spearphish Professionals on LinkedIn with Fake Job Offers, Infecting them with Malware, Warns eSentire",
            "categories": [
                "More_eggs",
                "TerraPreter",
                "TerraLoader",
                "VenomLNK"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/07/09/more-evil-deep-look-evilnum-toolset/",
            "date": "2020-07-09",
            "organization": "ESET Research",
            "author": "Mat\u00edas Porolli",
            "title": "More evil: A deep look at Evilnum and its toolset",
            "categories": [
                "EVILNUM",
                "More_eggs",
                "EVILNUM",
                "TerraPreter",
                "TerraStealer",
                "TerraTV",
                "Evilnum"
            ]
        }
    ],
    "mitre": []
};