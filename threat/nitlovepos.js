var threatdata = {
    "name": "NitlovePOS",
    "alias": "NitlovePOS, nitlove",
    "category": "Malware",
    "type": "POS malware, Credential stealer",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "NitlovePOS",
        "names": [
            {
                "name": "NitlovePOS"
            },
            {
                "name": "nitlove"
            }
        ],
        "description": "(FireEye) The NitlovePOS malware can capture and ex-filtrate track one and track two payment card data by scanning the running processes of a compromised machine. It then sends this data to a webserver using SSL.\n\nWe believe the cybercriminals assess the hosts compromised via indiscriminate spam campaigns and instruct specific victims to download the POS malware.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Credential stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2015/05/nitlovepos_another.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.nitlove"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:nitlovepos"
        ],
        "uuid": "0ae1012e-3697-4c28-a12e-d469fecf9f58",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "nitlovepos",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2015/05/nitlovepos_another.html",
            "date": "2015-05-23",
            "organization": "FireEye",
            "author": "Nart Villeneuve",
            "title": "NitlovePOS: Another New POS Malware",
            "categories": [
                "nitlove"
            ]
        }
    ],
    "mitre": []
};