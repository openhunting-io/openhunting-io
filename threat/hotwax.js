var threatdata = {
    "name": "Hotwax",
    "alias": "Hotwax, HOTWAX",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Hotwax",
        "names": [
            {
                "name": "Hotwax"
            },
            {
                "name": "HOTWAX"
            }
        ],
        "description": "HOTWAX is a module that upon starting imports all necessary system API functions, and searches for a .CHM file. HOTWAX decrypts a payload using the Spritz algorithm with a hard-coded key and then searches the target process and attempts to inject the decrypted payload module from the CHM file into the address space of the target process.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07180244/Lazarus_Under_The_Hood_PDF_final.pdf",
            "https://content.fireeye.com/apt/rpt-apt38",
            "https://www.welivesecurity.com/2017/02/16/demystifying-targeted-malware-used-polish-banks/",
            "https://www.virusbulletin.com/uploads/pdf/magazine/2018/VB2018-Kalnai-Poslusny.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hotwax"
        ],
        "uuid": "54742926-6bb1-4c80-aee5-86077acc36a9",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hotwax",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.virusbulletin.com/uploads/pdf/magazine/2018/VB2018-Kalnai-Poslusny.pdf",
            "date": "2018-10-03",
            "organization": "Virus Bulletin",
            "author": "Peter K\u00e1lnai",
            "title": "Lazarus Group A Mahjong Game Played with Different Sets of Tiles",
            "categories": [
                "Bankshot",
                "BanPolMex RAT",
                "FuwuqiDrama",
                "HOTWAX",
                "KillDisk (Lazarus)",
                "NACHOCHEESE",
                "REDSHAWL",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07180244/Lazarus_Under_The_Hood_PDF_final.pdf",
            "date": "2018-03",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky Lab",
            "title": "Lazarus under the Hood",
            "categories": [
                "BlueNoroff",
                "HOTWAX",
                "REDSHAWL",
                "WORMHOLE"
            ]
        },
        {
            "data_url": "https://content.fireeye.com/apt/rpt-apt38",
            "date": "2018",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "APT38",
            "categories": [
                "Bitsran",
                "BLINDTOAD",
                "BOOTWRECK",
                "Contopee",
                "DarkComet",
                "DYEPACK",
                "HOTWAX",
                "NESTEGG",
                "PowerRatankba",
                "REDSHAWL",
                "WORMHOLE",
                "Lazarus Group"
            ]
        },
        {
            "data_url": "https://raw.githubusercontent.com/eric-erki/APT_CyberCriminal_Campagin_Collections/master/2017/2017.05.30.Lazarus_Arisen/Group-IB_Lazarus.pdf",
            "date": "2017-05-30",
            "organization": "Group-IB",
            "author": "Group-IB",
            "title": "Lazarus Arisen: Architecture, Techniques and Attribution",
            "categories": [
                "HOTWAX",
                "NACHOCHEESE",
                "Ratankba"
            ]
        },
        {
            "data_url": "https://securelist.com/lazarus-under-the-hood/77908/",
            "date": "2017-04-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Lazarus under the Hood",
            "categories": [
                "Alreay",
                "DYEPACK",
                "HOTWAX",
                "NESTEGG",
                "RatankbaPOS",
                "REDSHAWL",
                "WORMHOLE",
                "Lazarus Group"
            ]
        },
        {
            "data_url": "https://baesystemsai.blogspot.com/2017/02/lazarus-false-flag-malware.html",
            "date": "2017-02-20",
            "organization": "BAE Systems",
            "author": "Sergei Shevchenko",
            "title": "Lazarus\u2019 False Flag Malware",
            "categories": [
                "HOTWAX",
                "NACHOCHEESE"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2017/02/16/demystifying-targeted-malware-used-polish-banks/",
            "date": "2017-02-16",
            "organization": "ESET Research",
            "author": "Peter K\u00e1lnai",
            "title": "Demystifying targeted malware used against Polish banks",
            "categories": [
                "BanPolMex RAT",
                "HOTWAX",
                "NACHOCHEESE"
            ]
        }
    ],
    "mitre": []
};