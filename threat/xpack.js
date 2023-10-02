var threatdata = {
    "name": "xPack",
    "alias": "xPack, NERAPACK",
    "category": "Malware",
    "type": "Backdoor, Remote command, Exfiltration",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "xPack",
        "names": [
            {
                "name": "xPack"
            },
            {
                "name": "NERAPACK"
            }
        ],
        "description": "(Symantec) The backdoor allowed the attackers to run WMI commands remotely, while there is also evidence that they leveraged {{EternalBlue}} exploits in the backdoor. The attackers appeared to have the ability to interact with SMB shares, and it's possible that they used mounted shares over SMB to transfer files from attacker-controlled infrastructure. There is also evidence that the attackers were able to browse the web through the backdoor, likely using it as a proxy to mask their IP address.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Remote command",
            "Exfiltration"
        ],
        "information": [
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/china-apt-antlion-taiwan-financial-attacks"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.xpack"
        ],
        "uuid": "499c6ccf-8841-4343-92fe-fa4b37a6fc49",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "xpack",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://thehackernews.com/2022/02/chinese-hackers-target-taiwanese.html",
            "date": "2022-02-06",
            "organization": "The Hacker News",
            "author": "Ravie Lakshmanan",
            "title": "Chinese Hackers Target Taiwanese Financial Institutions with a new Stealthy Backdoor",
            "categories": [
                "xPack"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/china-apt-antlion-taiwan-financial-attacks",
            "date": "2022-02-03",
            "organization": "Symantec",
            "author": "Symantec Threat Hunter Team",
            "title": "Antlion: Chinese APT Uses Custom Backdoor to Target Financial Institutions in Taiwan",
            "categories": [
                "MimiKatz",
                "xPack",
                "Antlion"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/l/collecting-in-the-dark-tropic-trooper-targets-transportation-and-government-organizations.html",
            "date": "2021-12-14",
            "organization": "Trend Micro",
            "author": "Nick Dai",
            "title": "Collecting In the Dark: Tropic Trooper Targets Transportation and Government",
            "categories": [
                "ChiserClient",
                "Ghost RAT",
                "Lilith",
                "Quasar RAT",
                "xPack"
            ]
        }
    ],
    "mitre": []
};