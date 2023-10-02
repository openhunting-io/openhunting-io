var threatdata = {
    "name": "Sword2033",
    "alias": "Sword2033",
    "category": "Malware",
    "type": "Backdoor, Downloader, Exfiltration",
    "modified": "2023-09-07",
    "all_data": {
        "tool": "Sword2033",
        "names": [
            {
                "name": "Sword2033"
            }
        ],
        "description": "(Palo Alto) Pivoting on the C2 domain, we identified one additional sample that also communicated with yrhsywu2009.zapto[.]org.\nSimilar to the {{PingPull}} variant above, this sample was designed to connect to port 8443 over HTTPS. However, analysis of the sample revealed that it\u2019s a simple backdoor that we track as Sword2033.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/alloy-taurus/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.sword2033"
        ],
        "uuid": "e658d68f-cd4b-4132-8198-ff06d6c75da5",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sword2033",
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
            "data_url": "https://unit42.paloaltonetworks.com/alloy-taurus/",
            "date": "2023-04-26",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Chinese Alloy Taurus Updates PingPull Malware",
            "categories": [
                "PingPull",
                "Sword2033"
            ]
        }
    ],
    "mitre": []
};