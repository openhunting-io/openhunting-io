var threatdata = {
    "name": "TONEDEAF",
    "alias": "TONEDEAF",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Tunneling, Info stealer, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "TONEDEAF",
        "names": [
            {
                "name": "TONEDEAF"
            }
        ],
        "description": "(FireEye) TONEDEAF is a backdoor that communicates with Command and Control servers using HTTP or DNS. Supported commands include system information collection, file upload, file download, and arbitrary shell command execution. Although this backdoor was coded to be able to communicate with DNS requests to the hard-coded Command and Control server, c[.]cdn-edge-akamai[.]com, it was not configured to use this functionality.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Tunneling",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2019/07/hard-pass-declining-apt34-invite-to-join-their-professional-network.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tonedeaf"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:TONEDEAF"
        ],
        "uuid": "fe0cfb06-ded6-4220-90c8-038cb2e88126",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tonedeaf",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://research.checkpoint.com/2021/irans-apt34-returns-with-an-updated-arsenal/",
            "date": "2021-04-08",
            "organization": "Checkpoint",
            "author": "Check Point Research",
            "title": "Iran\u2019s APT34 Returns with an Updated Arsenal",
            "categories": [
                "DNSpionage",
                "SideTwist",
                "TONEDEAF"
            ]
        },
        {
            "data_url": "https://intezer.com/blog-new-iranian-campaign-tailored-to-us-companies-uses-updated-toolset/",
            "date": "2020-01-30",
            "organization": "Intezer",
            "author": "Paul Litvak",
            "title": "New Iranian Campaign Tailored to US Companies Utilizes an Updated Toolset",
            "categories": [
                "TONEDEAF",
                "VALUEVAULT"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2019/07/hard-pass-declining-apt34-invite-to-join-their-professional-network.html",
            "date": "2019-07-18",
            "organization": "FireEye",
            "author": "Matt Bromiley",
            "title": "Hard Pass: Declining APT34\u2019s Invite to Join Their Professional Network",
            "categories": [
                "LONGWATCH",
                "PICKPOCKET",
                "TONEDEAF",
                "VALUEVAULT"
            ]
        }
    ],
    "mitre": []
};