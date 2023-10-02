var threatdata = {
    "name": "VenomLNK",
    "alias": "VenomLNK",
    "category": "Exploits",
    "type": "Loader",
    "modified": "2023-01-24",
    "all_data": {
        "tool": "VenomLNK",
        "names": [
            {
                "name": "VenomLNK"
            }
        ],
        "description": "(QuoINT) We have observed a Windows Shortcut file dubbed as VenomLNK used in various campaigns involving different infection chains. We hypothesize this is a new variation of a previously highlighted malicious document kit builder known as {{VenomKit}}, a building-kit tool that threat actors use to craft malicious Rich Text File (RTF) documents that exploit multiple vulnerabilities. Successful exploitation of those vulnerabilities leads to the delivery of batch and scriptlet files on a system and execution to download the second stage payload from a Web resource.",
        "category": "Exploits",
        "type": [
            "Loader"
        ],
        "information": [
            "https://quointelligence.eu/2020/01/the-chicken-keeps-laying-new-eggs-uncovering-new-gc-maas-tools-used-by-top-tier-threat-actors/",
            "https://medium.com/@quoscient/the-chicken-keeps-laying-new-eggs-uncovering-new-gc-maas-tools-used-by-top-tier-threat-actors-531d80a6b4e9"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.venom_lnk"
        ],
        "uuid": "9a5487b5-7aeb-4cfa-8756-3354a0130f02",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "venomlnk",
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
            "data_url": "https://www.esentire.com/blog/hackers-spearphish-corporate-hiring-managers-with-poisoned-resumes-infecting-them-with-the-more-eggs-malware",
            "date": "2022-04-21",
            "organization": "eSentire",
            "author": "eSentire Threat Response Unit (TRU)",
            "title": "Hackers Spearphish Corporate Hiring Managers with Poisoned Resumes, Infecting Them with the More_Eggs Malware, Warns eSentire",
            "categories": [
                "More_eggs",
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
            "data_url": "https://quointelligence.eu/2020/07/golden-chickens-evolution-of-the-maas/",
            "date": "2020-07-20",
            "organization": "",
            "author": "QuoIntelligence",
            "title": "Golden Chickens: Evolution Oof the MaaS",
            "categories": [
                "More_eggs",
                "TerraLoader",
                "TerraStealer",
                "VenomLNK"
            ]
        },
        {
            "data_url": "https://medium.com/@quoscient/the-chicken-keeps-laying-new-eggs-uncovering-new-gc-maas-tools-used-by-top-tier-threat-actors-531d80a6b4e9",
            "date": "2020-01-27",
            "organization": "QuoScient",
            "author": "QuoScient",
            "title": "The Chicken Keeps Laying New Eggs: Uncovering New GC MaaS Tools Used By Top-tier Threat Actors",
            "categories": [
                "TerraRecon",
                "TerraStealer",
                "TerraTV",
                "VenomLNK"
            ]
        }
    ],
    "mitre": []
};