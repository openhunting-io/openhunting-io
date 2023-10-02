var threatdata = {
    "name": "TONESHELL",
    "alias": "TONESHELL",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-09-07",
    "all_data": {
        "tool": "TONESHELL",
        "names": [
            {
                "name": "TONESHELL"
            }
        ],
        "description": "(Trend Micro) The TONESHELL malware is the main backdoor used in this campaign. It is a shellcode loader that loads and decodes the backdoor shellcode with a 32-byte key in memory. In the earlier version of TONESHELL, it has the capabilities from {{TONEINS}} malware, including establishing persistence and installing backdoors. However, the more recent version of TONESHELL is a standalone backdoor without any installer capabilities (such as the file ~$Talk points.docx). It is also obfuscated in a similar fashion to TONEINS malware, indicating that the actors continue to update the arsenal and separate the tools in order to bypass detection.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.trendmicro.com/en_us/research/22/k/earth-preta-spear-phishing-governments-worldwide.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.toneshell"
        ],
        "uuid": "3bc9fc28-dd20-43a8-a503-e09005df86c7",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "toneshell",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.sekoia.io/my-teas-not-cold-an-overview-of-china-cyber-threat/",
            "date": "2023-09-07",
            "organization": "Sekoia",
            "author": "Jamila B.",
            "title": "My Tea\u2019s not cold. An overview of China\u2019s cyber threat",
            "categories": [
                "Melofee",
                "PingPull",
                "SoWaT",
                "Sword2033",
                "MgBot",
                "MQsTTang",
                "PlugX",
                "TONESHELL"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/22/k/earth-preta-spear-phishing-governments-worldwide.html",
            "date": "2022-11-18",
            "organization": "Trend Micro",
            "author": "Nick Dai",
            "title": "Earth Preta Spear-Phishing Governments Worldwide",
            "categories": [
                "TONESHELL",
                "Unidentified 094",
                "MUSTANG PANDA"
            ]
        }
    ],
    "mitre": []
};