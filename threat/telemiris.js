var threatdata = {
    "name": "Telemiris",
    "alias": "Telemiris",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "Telemiris",
        "names": [
            {
                "name": "Telemiris"
            }
        ],
        "description": "(Kaspersky) Telemiris is a Python backdoor originally packed with PyInstaller (we later identified some Nuitka-packaged samples as well). Its name derives from the fact that it uses Telegram as a C2 channel. After setting up persistence (copying itself under %AppData%/service/ and creating a RUN key entry), the malware enters its main loop where it waits for Telegram messages and replies to them.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/tomiris-called-they-want-their-turla-malware-back/109552/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.telemiris"
        ],
        "uuid": "d0baa819-6460-425e-b5f0-e64fe8ea18db",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "telemiris",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/tomiris-called-they-want-their-turla-malware-back/109552/",
            "date": "2023-04-24",
            "organization": "Kaspersky Labs",
            "author": "Pierre Delcher",
            "title": "Tomiris called, they want their Turla malware back",
            "categories": [
                "KopiLuwak",
                "Andromeda",
                "Ave Maria",
                "GoldMax",
                "JLORAT",
                "Kazuar",
                "Meterpreter",
                "QUIETCANARY",
                "RATel",
                "Roopy",
                "Telemiris",
                "tomiris",
                "Topinambour"
            ]
        }
    ],
    "mitre": []
};