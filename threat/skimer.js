var threatdata = {
    "name": "Skimer",
    "alias": "Skimer",
    "category": "Malware",
    "type": "ATM malware",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Skimer",
        "names": [
            {
                "name": "Skimer"
            }
        ],
        "description": "(Kaspersky) Unlike {{Tyupkin}}, where there was a magic code and a specific time frame where the malware was active, Skimer only wakes up when a magic card (specific Track 2 data, see IOCs at the bottom of this blogpost) is inserted. It is a smart way to implement access control to the malware\u2019s functionality.",
        "category": "Malware",
        "type": [
            "ATM malware"
        ],
        "information": [
            "https://securelist.com/atm-infector/74772/",
            "https://nakedsecurity.sophos.com/2009/03/17/credit-card-skimming-malware-targeting-atms/",
            "https://nakedsecurity.sophos.com/2009/03/18/details-diebold-atm-trojan-horse-case/",
            "https://www.wired.com/images_blogs/threatlevel/2009/06/trustwave-security-alert-atm-malware-analysis-briefing.pdf",
            "https://www.wired.com/2009/06/new-atm-malware-captures-pins-and-cash/",
            "https://documents.trendmicro.com/assets/white_papers/wp-cashing-in-on-atm-malware.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.skimer"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:skimer"
        ],
        "uuid": "55d489e5-23be-425f-9159-78ef1d3ad502",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "skimer",
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
            "data_url": "http://atm.cybercrime-tracker.net/index.php",
            "date": "2019-03-17",
            "organization": "Global ATM Malware Wall",
            "author": "Cybercrime Tracker",
            "title": "Global ATM Malware Wall",
            "categories": [
                "Ligsterac",
                "Skimer"
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
        }
    ],
    "mitre": []
};