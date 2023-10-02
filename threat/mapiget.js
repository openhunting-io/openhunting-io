var threatdata = {
    "name": "MAPIget",
    "alias": "MAPIget",
    "category": "Malware",
    "type": "Info stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "MAPIget",
        "names": [
            {
                "name": "MAPIget"
            }
        ],
        "description": "This malware utility is a set of two files that operate in conjunction to extract email messages and attachments from an Exchange server. In order to operate successfully, these programs require authentication credentials for a user on the Exchange server, and must be run from a machine joined to the domain that has Microsoft Outlook installed (or equivalent software that provides the Microsoft 'Messaging API' (MAPI) service).",
        "category": "Malware",
        "type": [
            "Info stealer"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf",
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.mapiget"
        ],
        "uuid": "e4cd147b-e6a7-416f-99df-56fa7a63271f",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "mapiget",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://github.com/securitykitten/malware_references/blob/master/Appendix%20C%20(Digital)%20-%20The%20Malware%20Arsenal.pdf",
            "date": "2018",
            "organization": "Mandiant",
            "author": "Mandiant",
            "title": "APT1",
            "categories": [
                "Auriga",
                "Biscuit",
                "Bouncer",
                "Combos",
                "CookieBag",
                "Dairy",
                "GetMail",
                "GlooxMail",
                "Goggles",
                "Hacksfase",
                "Helauto",
                "Kurton",
                "ManItsMe",
                "MAPIget",
                "MiniASP",
                "NewsReels",
                "SeaSalt",
                "StarsyPound",
                "Sword",
                "TabMsgSQL",
                "Tarsip",
                "WebC2-AdSpace",
                "WebC2-Ausov",
                "WebC2-Bolid",
                "WebC2-Cson",
                "WebC2-DIV",
                "WebC2-GreenCat",
                "WebC2-Head",
                "WebC2-Kt3",
                "WebC2-Qbp",
                "WebC2-Rave",
                "WebC2-Table",
                "WebC2-UGX",
                "WebC2-Yahoo"
            ]
        }
    ],
    "mitre": []
};