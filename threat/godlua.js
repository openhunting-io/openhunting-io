var threatdata = {
    "name": "Godlua",
    "alias": "Godlua",
    "category": "Malware",
    "type": "Backdoor, Downloader",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Godlua",
        "names": [
            {
                "name": "Godlua"
            }
        ],
        "description": "(Qihoo 360) The file itself is a Lua-based Backdoor, we named it Godlua Backdoor as the Lua byte-code file loaded by this sample has a magic number of \u201cGod\u201d.\n\nGodlua Backdoor has a redundant communication mechanism for C2 connection, a combination of hardcoded dns name, Pastebin.com, GitHub.com as well as DNS TXT are used to store the C2 address, which is not something we see often. At the same time, it uses HTTPS to download Lua byte-code files, and uses DNS over HTTPS to get the C2 name to ensure secure communication between the bots, the Web Server and the C2.\n\nWe noticed that there are already 2 versions of Godlua Backdoor and there are ongoing updates. We also observed that attackers has been using Lua command to run Lua code dynamically and initiate HTTP Flood attacks targeting some websites.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "https://blog.netlab.360.com/an-analysis-of-godlua-backdoor-en/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.godlua"
        ],
        "uuid": "95f71f8b-d0c6-4876-918e-980b74c1f3b8",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "godlua",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.netlab.360.com/an-analysis-of-godlua-backdoor-en/",
            "date": "2019-07-01",
            "organization": "360 netlab",
            "author": "Alex Turing",
            "title": "An Analysis of Godlua Backdoor",
            "categories": [
                "Godlua"
            ]
        }
    ],
    "mitre": []
};