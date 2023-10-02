var threatdata = {
    "name": "CenterPOS",
    "alias": "CenterPOS, Cerebrus",
    "category": "Malware",
    "type": "POS malware, Backdoor, Credential stealer",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "CenterPOS",
        "names": [
            {
                "name": "CenterPOS"
            },
            {
                "name": "Cerebrus"
            }
        ],
        "description": "(FireEye) CenterPOS malware was initially discovered in September 2015 in a directory filled with other POS malware, including NewPoSThings, two {{Alina POS}} variants known as \u201cSpark\u201d and \u201cJoker,\u201d and {{BlackPOS}}. This CenterPOS sample (171c4c62ab2001c2f2394c3ec021dfa3) contains an internal version of \u201c1.7\u201d and is a memory scraper that iterates through running processes in order to extract payment card information. The payment card information is transferred to a command and control (CnC) server via HTTP POST:",
        "category": "Malware",
        "type": [
            "POS malware",
            "Backdoor",
            "Credential stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2016/01/centerpos_an_evolvi.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.centerpos"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:CenterPOS"
        ],
        "uuid": "af2af621-086d-4b01-af40-c4e0a406ccba",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "centerpos",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2016/01/centerpos_an_evolvi.html",
            "date": "2016-01-28",
            "organization": "FireEye",
            "author": "FireEye Threat Intelligence",
            "title": "CenterPOS: An Evolving POS Threat",
            "categories": [
                "CenterPOS"
            ]
        }
    ],
    "mitre": []
};