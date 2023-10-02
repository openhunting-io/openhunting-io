var threatdata = {
    "name": "TreasureHunter",
    "alias": "TreasureHunter, TREASUREHUNT, huntpos",
    "category": "Malware",
    "type": "POS malware, Credential stealer",
    "modified": "2022-11-18",
    "all_data": {
        "tool": "TreasureHunter",
        "names": [
            {
                "name": "TreasureHunter"
            },
            {
                "name": "TREASUREHUNT"
            },
            {
                "name": "huntpos"
            }
        ],
        "description": "(FireEye) In this article we examine TREASUREHUNT, POS malware that appears to have been custom-built for the operations of a particular \u201cdump shop,\u201d which sells stolen credit card data. TREASUREHUNT enumerates running processes, extracts payment card information from memory, and then transmits this information to a command and control server.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Credential stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2016/03/treasurehunt_a_cust.html",
            "https://isc.sans.edu/diary/How+Malware+Generates+Mutex+Names+to+Evade+Detection/19429/",
            "https://www.flashpoint-intel.com/blog/treasurehunter-source-code-leaked/",
            "http://adelmas.com/blog/treasurehunter.php",
            "https://blog.group-ib.com/majikpos_treasurehunter_malware"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.treasurehunter"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:treasurehunt"
        ],
        "uuid": "fe027e13-3f88-49f6-8b42-2f435b61edc0",
        "last-card-change": "2022-11-18",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "treasurehunter",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.flashpoint-intel.com/blog/treasurehunter-source-code-leaked/",
            "date": "2018-05-10",
            "organization": "Flashpoint",
            "author": "Flashpoint",
            "title": "TreasureHunter Point-of-Sale Malware and Builder Source Code Leaked",
            "categories": [
                "TreasureHunter"
            ]
        },
        {
            "data_url": "http://adelmas.com/blog/treasurehunter.php",
            "date": "2017-02-26",
            "organization": "",
            "author": "Arnaud Delmas",
            "title": "TreasureHunter : A POS Malware Case Study",
            "categories": [
                "TreasureHunter"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2016/03/treasurehunt_a_cust.html",
            "date": "2016-03-28",
            "organization": "FireEye",
            "author": "Nart Villeneuve",
            "title": "TREASUREHUNT: A Custom POS Malware Tool",
            "categories": [
                "TreasureHunter"
            ]
        }
    ],
    "mitre": []
};