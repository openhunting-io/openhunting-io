var threatdata = {
    "name": "Tyupkin",
    "alias": "Tyupkin, Padpin",
    "category": "Malware",
    "type": "ATM malware",
    "modified": "2020-05-25",
    "all_data": {
        "tool": "Tyupkin",
        "names": [
            {
                "name": "Tyupkin"
            },
            {
                "name": "Padpin"
            }
        ],
        "description": "(Lastline) For today\u2019s case study, we use a Tyupkin malware sample, a .Net application for bank automated teller machines (ATM) running on the Microsoft Windows operating system. Tyupkin\u2019s aim is to steal cash by sending a specific command to the cash dispenser of the compromised ATM. During the analysis, our sandbox will trick the malware into believing that our analysis environment is an ATM itself. We will achieve this by submitting our sample bundled with a few specific DLLs that provide programmer\u2019s interfaces to a Windows-based ATM, Extensions for Financial Services (XFS).",
        "category": "Malware",
        "type": [
            "ATM malware"
        ],
        "information": [
            "https://www.lastline.com/labsblog/tyupkin-atm-malware/",
            "https://archive.f-secure.com/weblog/archives/00002751.html",
            "https://securelist.com/tyupkin-manipulating-atm-machines-with-malware/66988/",
            "https://www.atmmarketplace.com/articles/can-the-atm-industry-stop-tyupkin-in-its-tracks/",
            "https://documents.trendmicro.com/assets/white_papers/wp-cashing-in-on-atm-malware.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tyupkin"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:tyupkin"
        ],
        "uuid": "c524bf68-1845-457b-8cf3-cff7cae6714e",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tyupkin",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.talosintelligence.com/2019/05/10-years-of-virtual-dynamite.html",
            "date": "2019-05-30",
            "organization": "Talos Intelligence",
            "author": "Vanja Svajcer",
            "title": "10 years of virtual dynamite: A high-level retrospective of ATM malware",
            "categories": [
                "FastCash",
                "Project Alice",
                "Cutlet",
                "Ploutus ATM",
                "Skimer",
                "Tyupkin"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/white_papers/wp-cashing-in-on-atm-malware.pdf",
            "date": "2018-03-30",
            "organization": "Trend Micro",
            "author": "David Sancho",
            "title": "Cashing in on ATM Malware: A Comprehensive Look at Various Attack Types",
            "categories": [
                "Project Alice",
                "ATMitch",
                "Ploutus ATM",
                "Ripper ATM",
                "Skimer",
                "SUCEFUL",
                "Tyupkin"
            ]
        },
        {
            "data_url": "https://www.lastline.com/labsblog/tyupkin-atm-malware/",
            "date": "2017-12-13",
            "organization": "Lastline",
            "author": "Alexander Sevtsov",
            "title": "Tyupkin ATM Malware: Take The Money Now Or Never!",
            "categories": [
                "Tyupkin"
            ]
        }
    ],
    "mitre": []
};