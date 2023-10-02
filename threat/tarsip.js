var threatdata = {
    "name": "Tarsip",
    "alias": "Tarsip",
    "category": "Malware",
    "type": "Backdoor, Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Tarsip",
        "names": [
            {
                "name": "Tarsip"
            }
        ],
        "description": "The TARSIP malware family is a backdoor which communicates over encoded information in HTTPS headers.  Typical TARSIP malware samples will only beacon out to their C2 servers if the C2 DNS address resolves to a specific address.  The capability of TARSIP backdoors includes file uploading, file downloading, interactive command shells, process enumeration, process creation, process termination. The TARSIP-ECLIPSE family is distinguished by the presence of 'eclipse' in .pdb debug strings present in the malware samples. It does not provide a built in mechanism to maintain persistence. The TARSIP-MOON family is distinguished by the presence of 'moon' in .pdb debug strings present in the malware samples.  It does not provide a built in mechanism to maintain persistence.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tarsip"
        ],
        "uuid": "97384be1-282a-41cb-8c15-2fbe9a882b3c",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tarsip",
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