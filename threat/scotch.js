var threatdata = {
    "name": "Scotch",
    "alias": "Scotch",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration, Downloader",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Scotch",
        "names": [
            {
                "name": "Scotch"
            }
        ],
        "description": "(Citizen Lab) The ultimate spyware tool deployed by {{MOONSHINE}}, Scotch, is a modular Java application which uses the WebSocket protocol to communicate with its C2 server. The Scotch payload itself has limited espionage features, such as obtaining device information and uploading files from the infected device. However, as part of its initial contact with the C2, Scotch downloads additional plugins. During our analysis, we were able to acquire two plugin packages, named \u201c{{Bourbon}}.jar\u201d and \u201c{{IceCube}}.jar\u201d which added functionality including exfiltrating SMS text messages, address books, and call logs, and spying on the target through their phone\u2019s camera, microphone, and GPS.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration",
            "Downloader"
        ],
        "information": [
            "https://citizenlab.ca/2019/09/poison-carp-tibetan-groups-targeted-with-1-click-mobile-exploits/"
        ],
        "uuid": "8a258c41-a89e-44d0-b1e4-d27ed074cd21",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "scotch",
    "analysis": null,
    "articles": [],
    "mitre": []
};