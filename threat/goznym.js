var threatdata = {
    "name": "GozNym",
    "alias": "GozNym",
    "category": "Malware",
    "type": "Banking trojan, Info stealer",
    "modified": "2020-05-23",
    "all_data": {
        "tool": "GozNym",
        "names": [
            {
                "name": "GozNym"
            }
        ],
        "description": "(IBM) IBM X-Force Research uncovered a Trojan hybrid spawned from the {{Nymaim}} and {{Gozi ISFB}} malware. It appears that the operators of Nymaim have recompiled its source code with part of the Gozi ISFB source code, creating a combination that is being actively used in attacks against more than 24 U.S. and Canadian banks, stealing millions of dollars so far. X-Force named this new hybrid GozNym.\n\nThe new GozNym hybrid takes the best of both the Nymaim and Gozi ISFB malware to create a powerful Trojan. From the Nymaim malware, it leverages the dropper\u2019s stealth and persistence; the Gozi ISFB parts add the banking Trojan\u2019s capabilities to facilitate fraud via infected Internet browsers. The end result is a new banking Trojan in the wild.\n\nInternally, GozNym works like a double-headed beast, where the two codes rely on one another to carry out the malware\u2019s internal operations.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer"
        ],
        "information": [
            "https://securityintelligence.com/meet-goznym-the-banking-malware-offspring-of-gozi-isfb-and-nymaim/",
            "https://lokalhost.pl/gozi_tree.txt"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:goznym"
        ],
        "uuid": "b541fb26-a782-4ede-863d-ce712c808411",
        "last-card-change": "2020-05-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "goznym",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.europol.europa.eu/newsroom/news/goznym-malware-cybercriminal-network-dismantled-in-international-operation",
            "date": "2019-05-16",
            "organization": "Europol",
            "author": "Europol",
            "title": "GOZNYM MALWARE: CYBERCRIMINAL NETWORK DISMANTLED IN INTERNATIONAL OPERATION",
            "categories": [
                "GozNym"
            ]
        },
        {
            "data_url": "https://threatpost.com/goznym-banking-trojan-targeting-german-banks/120075/",
            "date": "2016-08-23",
            "organization": "Threatpost",
            "author": "Chris Brook",
            "title": "GozNym Banking Trojan Targeting German Banks",
            "categories": [
                "GozNym"
            ]
        },
        {
            "data_url": "https://threatpost.com/attackers-behind-goznym-trojan-set-sights-on-europe/117647/",
            "date": "2016-04-25",
            "organization": "Threat Post",
            "author": "Chris Brook",
            "title": "Attackers Behind GozNym Trojan Set Sights on Europe",
            "categories": [
                "GozNym"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/meet-goznym-the-banking-malware-offspring-of-gozi-isfb-and-nymaim/",
            "date": "2016-04-14",
            "organization": "SecurityIntelligence",
            "author": "Limor Kessem",
            "title": "Meet GozNym: The Banking Malware Offspring of Gozi ISFB and Nymaim",
            "categories": [
                "ISFB",
                "Nymaim",
                "GozNym"
            ]
        }
    ],
    "mitre": []
};