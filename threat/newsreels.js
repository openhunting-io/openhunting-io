var threatdata = {
    "name": "NewsReels",
    "alias": "NewsReels",
    "category": "Malware",
    "type": "Backdoor, Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "NewsReels",
        "names": [
            {
                "name": "NewsReels"
            }
        ],
        "description": "The NEWSREELS malware family is an HTTP based backdoor.  When first started, NEWSREELS decodes two strings from its resources section. These strings are both used as C2 channels, one URL is used as a beacon URL (transmitting) and the second URL is used to get commands (receiving). The NEWSREELS malware family is capable of performing file uploads, downloads, creating processes or creating an interactive reverse shell.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2014/01/tracking-malware-import-hashing.html",
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.newsreels"
        ],
        "uuid": "40b53b58-bd6a-4207-b094-b3e015ecd24e",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "newsreels",
    "analysis": null
};