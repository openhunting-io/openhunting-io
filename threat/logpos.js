var threatdata = {
    "name": "LogPOS",
    "alias": "LogPOS",
    "category": "Malware",
    "type": "POS malware, Credential stealer",
    "modified": "2020-05-22",
    "all_data": {
        "tool": "LogPOS",
        "names": [
            {
                "name": "LogPOS"
            }
        ],
        "description": "(securitykitten) In most POS variants, one process scrapes memory from other processes and writes discovered track data to a log. Because LogPOS injects code into various processes and has each of them search their own memory, it can\u2019t use a log, since they can\u2019t all open the same file with write access at once. Instead, it uses mailslots.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Credential stealer"
        ],
        "information": [
            "https://securitykitten.github.io/2015/11/16/logpos-new-point-of-sale-malware-using-mailslots.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.logpos"
        ],
        "uuid": "82000337-18a0-4e4f-b2d7-7c6776516542",
        "last-card-change": "2020-05-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "logpos",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://github.com/malware-kitten/securitykitten.github.io/blob/master/_posts/2015-11-16-logpos-new-point-of-sale-malware-using-mailslots.md",
            "date": "2015-11-16",
            "organization": "",
            "author": "Nick Hoffman",
            "title": "Introducing LogPOS",
            "categories": [
                "LogPOS"
            ]
        }
    ],
    "mitre": []
};