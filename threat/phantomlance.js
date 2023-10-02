var threatdata = {
    "name": "PhantomLance",
    "alias": "PhantomLance, PWNDROID1, Android.Backdoor.736.origin",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Downloader, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "PhantomLance",
        "names": [
            {
                "name": "PhantomLance"
            },
            {
                "name": "PWNDROID1"
            },
            {
                "name": "Android.Backdoor.736.origin"
            }
        ],
        "description": "(Dr.Web) The backdoor communicates with several command and control servers to receive commands from the attackers and send the collected data. The cybercriminals can also control the trojan via the Firebase Cloud Messaging service. Android.Backdoor.736.origin is capable of:\n\u2022 sending information on contacts from the contact list to the server;\n\u2022 sending information on text messages to the server (the investigated version of the trojan did not have the permissions for this);\n\u2022 sending the phone call history to the server;\n\u2022 sending the device location to the server;\n\u2022 downloading and launching an APK or a DEX file using the DexClassLoader class;\n\u2022 sending the information on the installed software to the server;\n\u2022 downloading and launching a specified executable file;\n\u2022 downloading a file from the server;\n\u2022 uploading a specified file to the server;\n\u2022 transmitting information on files in the specified directory or a memory card to the server;\n\u2022 executing a shell command;\n\u2022 launching the activity specified in a command;\n\u2022 downloading and installing an Android application;\n\u2022 displaying a notification specified in a command;\n\u2022 requesting permission specified in a command;\n\u2022 sending the list of permissions granted to the trojan to the server;\n\u2022 not letting the device go into sleep mode for a specified time period.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://news.drweb.com/show/?i=13349&c=0&p=0",
            "https://securelist.com/apt-phantomlance/96772/",
            "https://threatvector.cylance.com/en_us/home/mobile-malware-and-apt-espionage-prolific-pervasive-and-cross-platform.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.phantomlance"
        ],
        "uuid": "d6d0a523-fa63-4a7a-a20a-df07a5cb7087",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "phantomlance",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/it-threat-evolution-q2-2020/98230",
            "date": "2020-09-03",
            "organization": "Kaspersky Labs",
            "author": "David Emm",
            "title": "IT threat evolution Q2 2020",
            "categories": [
                "PhantomLance",
                "Aria-body",
                "COMpfun",
                "Vicious Panda"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q2-2020/97937/",
            "date": "2020-07-29",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2020",
            "categories": [
                "PhantomLance",
                "Dacls",
                "Penquin Turla",
                "elf.wellmess",
                "AppleJeus",
                "Dacls",
                "AcidBox",
                "Cobalt Strike",
                "Dacls",
                "EternalPetya",
                "Godlike12",
                "Olympic Destroyer",
                "PlugX",
                "shadowhammer",
                "ShadowPad",
                "Sinowal",
                "VHD Ransomware",
                "Volgmer",
                "WellMess",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://drive.google.com/file/d/1m0Qg8e1Len1My6ssDy6F0oQ7JdkJUkuu/view",
            "date": "2020-04-29",
            "organization": "Twitter (@h4ckak)",
            "author": "Ring4sky",
            "title": "More IOCs related to PhantomLance",
            "categories": [
                "PhantomLance"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-phantomlance/96772/",
            "date": "2020-04-28",
            "organization": "Kaspersky Labs",
            "author": "Alexey Firsh",
            "title": "Hiding in plain sight: PhantomLance walks into a market",
            "categories": [
                "PhantomLance"
            ]
        },
        {
            "data_url": "https://www.blackberry.com/us/en/pdfviewer?file=/content/dam/blackberry-com/asset/enterprise/pdf/direct/mobile-malware-report.pdf",
            "date": "2019-10-23",
            "organization": "Cylance",
            "author": "Blackberry Research",
            "title": "Mobile Malware and APT Espionage: Prolific, Pervasive, and Cross-Platform",
            "categories": [
                "PhantomLance"
            ]
        }
    ],
    "mitre": []
};