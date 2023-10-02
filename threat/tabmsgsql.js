var threatdata = {
    "name": "TabMsgSQL",
    "alias": "TabMsgSQL, LETSGO",
    "category": "Malware",
    "type": "Backdoor, Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "TabMsgSQL",
        "names": [
            {
                "name": "TabMsgSQL"
            },
            {
                "name": "LETSGO"
            }
        ],
        "description": "This malware family is a full-featured backdoor capable of file uploading and downloading, arbitrary execution of programs, and providing a remote interactive command shell. All communications with the C2 server are sent over HTTP to a static URL, appending various URL parameters to the request. Some variants use a slightly different URL.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tabmsgsql"
        ],
        "uuid": "980e694a-7e8e-4928-aec0-a19cc3e05a7c",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tabmsgsql",
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