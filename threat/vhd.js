var threatdata = {
    "name": "VHD",
    "alias": "VHD, VHD Ransomware",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "VHD",
        "names": [
            {
                "name": "VHD"
            },
            {
                "name": "VHD Ransomware"
            }
        ],
        "description": "(Kaspersky) The ransomware itself is nothing special: it\u2019s written in C++ and crawls all connected disks to encrypt files and delete any folder called \u201cSystem Volume Information\u201d (which are linked to Windows\u2019 restore point feature). The program also stops processes that could be locking important files, such as Microsoft Exchange and SQL Server. Files are encrypted with a combination of AES-256 in ECB mode and RSA-2048. In our initial report published at the time we noted two peculiarities with this program\u2019s implementation:\n\u2022 The ransomware uses Mersenne Twister as a source of randomness, but unfortunately for the victims the RNG is reseeded every time new data is consumed. Still, this is unorthodox cryptography, as is the decision to use the \u201celectronic codebook\u201d (ECB) mode for the AES algorithm. The combination of ECB and AES is not semantically secure, which means the patterns of the original clear data are preserved upon encryption. This was reiterated by cybersecurity researchers who analyzed Zoom security in April 2020.\n\u2022 VHD implements a mechanism to resume operations if the encryption process is interrupted. For files larger than 16MB, the ransomware stores the current cryptographic materials on the hard drive, in clear text. This information is not deleted securely afterwards, which implies there may be a chance to recover some of the files.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://securelist.com/lazarus-on-the-hunt-for-big-game/97757/",
            "https://id-ransomware.blogspot.com/2020/03/vhd-ransomware.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.vhd_ransomware"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:VHD"
        ],
        "uuid": "151136f7-8f9b-47de-8edc-b2e38a63bde0",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "vhd",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/the-sound-of-malware.html",
            "date": "2022-06-23",
            "organization": "Trellix",
            "author": "Christiaan Beek",
            "title": "The Sound of Malware",
            "categories": [
                "Conti",
                "VHD Ransomware"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/the-hermit-kingdoms-ransomware-play.html",
            "date": "2022-05-03",
            "organization": "Trellix",
            "author": "Christiaan Beek",
            "title": "The Hermit Kingdom\u2019s Ransomware play",
            "categories": [
                "VHD Ransomware"
            ]
        },
        {
            "data_url": "https://seguranca-informatica.pt/secrets-behind-the-lazaruss-vhd-ransomware/",
            "date": "2021-08-17",
            "organization": "Seguranca Informatica",
            "author": "Pedro Tavares",
            "title": "Secrets behind the Lazarus\u2019s VHD ransomware",
            "categories": [
                "VHD Ransomware"
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
            "data_url": "https://securelist.com/lazarus-on-the-hunt-for-big-game/97757/",
            "date": "2020-07-28",
            "organization": "Kaspersky Labs",
            "author": "Ivan Kwiatkowski",
            "title": "Lazarus on the hunt for big game",
            "categories": [
                "Dacls",
                "Dacls",
                "Dacls",
                "VHD Ransomware"
            ]
        },
        {
            "data_url": "https://twitter.com/GrujaRS/status/1241657443282825217",
            "date": "2020-03-22",
            "organization": "",
            "author": "GrujaRS",
            "title": "New #VHD (virtual hard disk)#Ransomware extension .vhd!",
            "categories": [
                "VHD Ransomware"
            ]
        }
    ],
    "mitre": []
};