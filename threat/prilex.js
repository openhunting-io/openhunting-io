var threatdata = {
    "name": "Prilex",
    "alias": "Prilex",
    "category": "Malware",
    "type": "ATM malware, POS malware, Credential stealer",
    "modified": "2023-02-17",
    "all_data": {
        "tool": "Prilex",
        "names": [
            {
                "name": "Prilex"
            }
        ],
        "description": "(Kaspersky) While researching malware for ATM jackpotting used by a Brazilian group called Prilex, our researchers stumbled upon a modified version of this malware with some additional features that was used to infect point-of-service (POS) terminals and collect card data.\n\nThis malware was capable of modifying POS software to allow a third party to capture the data transmitted by a POS to a bank. That\u2019s how the crooks obtained the card data. Basically, when you pay at a local shop whose POS terminal is infected, your card data is transferred right away to the criminals.\n\nHowever, having the card data is just half the battle; to steal money, they also needed to be able to clone cards, a process made more complicated by the chips and their multiple authentications.\n\nThe Prilex group developed a whole infrastructure that lets its \u201ccustomers\u201d create cloned cards \u2014 which in theory shouldn\u2019t be possible.",
        "category": "Malware",
        "type": [
            "ATM malware",
            "POS malware",
            "Credential stealer"
        ],
        "information": [
            "https://www.kaspersky.com/blog/chip-n-pin-cloning/21502/",
            "https://threatpost.com/latin-american-atm-thieves-turning-to-hacking/128289/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/dissecting-prilex-cutlet-maker-atm-malware-families/",
            "https://securelist.com/prilex-modification-now-targeting-contactless-credit-card-transactions/108569/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.prilex"
        ],
        "uuid": "82a835f9-02b1-47fb-b2ec-5b6085226899",
        "last-card-change": "2023-02-17",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "prilex",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.kaspersky.com/blog/chip-n-pin-cloning/21502",
            "date": "2018-03-09",
            "organization": "Kaspersky Labs",
            "author": "Alex Perekalin",
            "title": "Cloning chip-and-PIN cards: Brazilian job",
            "categories": [
                "Prilex"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/dissecting-prilex-cutlet-maker-atm-malware-families/",
            "date": "2017-12-14",
            "organization": "Trend Micro",
            "author": "David Sancho",
            "title": "Dissecting PRILEX and CUTLET MAKER ATM Malware Families",
            "categories": [
                "Prilex"
            ]
        }
    ],
    "mitre": []
};