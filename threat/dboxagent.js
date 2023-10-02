var threatdata = {
    "name": "DBoxAgent",
    "alias": "DBoxAgent",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "DBoxAgent",
        "names": [
            {
                "name": "DBoxAgent"
            }
        ],
        "description": "(Malwarebytes) The shellcode is a backdoor that gives the ability for attackers to control the victim's machine.\nWe named this new backdoor DBoxAgent as it uses Dropbox as C&C. This way, attackers are able to circumvent network protection tools, as all communications are sent and received through Dropbox API.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.malwarebytes.com/blog/threat-intelligence/2022/winnti-apt-group-docks-in-sri-lanka-for-new-campaign-final.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dboxagent"
        ],
        "uuid": "0f231c4c-6300-46ea-a1d0-6e3ee27f8288",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dboxagent",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.malwarebytes.com/blog/threat-intelligence/2022/winnti-apt-group-docks-in-sri-lanka-for-new-campaign-final.pdf",
            "date": "2020-10-12",
            "organization": "Malwarebytes Labs",
            "author": "Roberto Santos",
            "title": "Winnti APT group docks in Sri Lanka for new campaign",
            "categories": [
                "DBoxAgent",
                "SerialVlogger",
                "Winnti"
            ]
        }
    ],
    "mitre": []
};