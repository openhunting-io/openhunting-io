var threatdata = {
    "name": "Auriga",
    "alias": "Auriga, Riodrv",
    "category": "Malware",
    "type": "Backdoor, Keylogger",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Auriga",
        "names": [
            {
                "name": "Auriga"
            },
            {
                "name": "Riodrv"
            }
        ],
        "description": "The AURIGA malware family shares a large amount of functionality with the {{bangat}} backdoor. The malware family contains functionality for keystroke logging, creating and killing processes, performing file system and registry modifications, spawning interactive command shells, performing process injection, logging off the current user or shutting down the local machine. The AURIGA malware contains a driver component which is used to inject the malware DLL into other processes. This driver can also perform process and IP connection hiding. The malware family will create a copy of cmd.exe to perform its C2 activity, and replace the 'Microsoft corp' strings in the cmd.exe binary with different values. The malware family typically maintains persistence through installing itself as a service.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf",
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.auriga"
        ],
        "uuid": "2f8361b0-f1d1-4cc4-9c67-642df54a181a",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "auriga",
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