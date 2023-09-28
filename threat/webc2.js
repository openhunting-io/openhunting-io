var threatdata = {
    "name": "WebC2",
    "alias": "WebC2, WebC2-AdSpace, WebC2-Ausov, WebC2-Bolid, WebC2-Cson, WebC2-DIV, WebC2-GreenCat, WebC2-Head, WebC2-Kt3, WebC2-Qbp, WebC2-Rave, WebC2-Table, WebC2-UGX, WebC2-Yahoo",
    "category": "Malware",
    "type": "Backdoor, Downloader",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "WebC2",
        "names": [
            {
                "name": "WebC2"
            },
            {
                "name": "WebC2-AdSpace"
            },
            {
                "name": "WebC2-Ausov"
            },
            {
                "name": "WebC2-Bolid"
            },
            {
                "name": "WebC2-Cson"
            },
            {
                "name": "WebC2-DIV"
            },
            {
                "name": "WebC2-GreenCat"
            },
            {
                "name": "WebC2-Head"
            },
            {
                "name": "WebC2-Kt3"
            },
            {
                "name": "WebC2-Qbp"
            },
            {
                "name": "WebC2-Rave"
            },
            {
                "name": "WebC2-Table"
            },
            {
                "name": "WebC2-UGX"
            },
            {
                "name": "WebC2-Yahoo"
            }
        ],
        "description": "A WEBC2 backdoor is designed to retrieve a Web page from a pre-determined C2 server. It expects the Web page to contain special HTML tags; the backdoor will attempt to interpret the data between the tags as commands. This family of malware is capable of downloading and executing a file. All variants represented here are the same file with different MD5 signatures. This malware attempts to contact its C2 once a week (Thursday at 10:00 AM). It looks for commands inside a set of HTML tags, part of which are in the File Strings indicator term below.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0109/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_adspace",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_ausov",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_bolid",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_cson",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_div",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_greencat",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_head",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_kt3",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_qbp",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_rave",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_table",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_ugx",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_yahoo"
        ],
        "uuid": "a1e54b72-3eed-49ae-852c-9621bdde6be3",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "webc2",
    "analysis": null
};