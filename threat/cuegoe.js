var threatdata = {
    "name": "Cuegoe",
    "alias": "Cuegoe",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Downloader",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Cuegoe",
        "names": [
            {
                "name": "Cuegoe"
            }
        ],
        "description": "(FireEye) \u2022 Command and control (C2) communications via TCP raw sockets\n\u2022 Four configured C2s and six configured ports \u2013 randomly-chosen C2/port for communications\n\u2022 Registry manipulation\n\u2022 Get the current module's file name\n\u2022 Gather system information including registry values, user name, computer name, and current code page\n\u2022 File system interaction including directory creation, file deletion, reading, and writing files\n\u2022 Load additional modules and execute code\n\u2022 Terminate processes\n\u2022 Anti-disassembly",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2017/05/cyber-espionage-apt32.html",
            "http://blog.malwaremustdie.org/2014/08/another-country-sponsored-malware.html",
            "https://www.eff.org/deeplinks/2014/01/vietnamese-malware-gets-personal"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0155/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cuegoe"
        ],
        "uuid": "5c526664-bbfb-4310-914a-156c0d51622d",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cuegoe",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/05/cyber-espionage-apt32.html",
            "date": "2017-05-14",
            "organization": "FireEye",
            "author": "Nick Carr",
            "title": "Cyber Espionage is Alive and Well: APT32 and the Threat to Global Corporations",
            "categories": [
                "OceanLotus",
                "Cuegoe",
                "KOMPROGO",
                "SOUNDBITE",
                "APT32"
            ]
        },
        {
            "data_url": "http://blog.malwaremustdie.org/2014/08/another-country-sponsored-malware.html",
            "date": "2014-08-24",
            "organization": "Malware Must Die!",
            "author": "unixfreaxjp",
            "title": "Another country-sponsored #malware: Vietnam APT Campaign",
            "categories": [
                "Cuegoe"
            ]
        },
        {
            "data_url": "https://www.eff.org/deeplinks/2014/01/vietnamese-malware-gets-personal",
            "date": "2014-01-19",
            "organization": "Electronic Frontier Foundation",
            "author": "Eva Galperin",
            "title": "Vietnamese Malware Gets Very Personal",
            "categories": [
                "Cuegoe"
            ]
        }
    ],
    "mitre": []
};