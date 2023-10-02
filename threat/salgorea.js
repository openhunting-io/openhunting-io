var threatdata = {
    "name": "Salgorea",
    "alias": "Salgorea, BadCake",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Salgorea",
        "names": [
            {
                "name": "Salgorea"
            },
            {
                "name": "BadCake"
            }
        ],
        "description": "(Accenture) This backdoor is commonly dropped by either an SFX or an exploit document (e.g. Microsoft Corp. Word or PDF file).\n\nSome of this backdoor\u2019s observed capabilities include:\n\u2022 Arbitrary file, process and registration creation\n\u2022 Fingerprinting the local machine\n\u2022 Running arbitrary shellcode\n\nOnce dropped, it is usually divided into multiple components in order to be side-loaded, in a fashion similar to other remote access tools including {{PlugX}} and {{NetTraveler}}.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://www.accenture.com/us-en/blogs/blogs-pond-loach-delivers-badcake-malware"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.salgorea"
        ],
        "uuid": "a4e1fbba-2e37-453c-b688-420e2bb03cdd",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "salgorea",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://research.checkpoint.com/deobfuscating-apt32-flow-graphs-with-cutter-and-radare2/",
            "date": "2019-04-24",
            "organization": "Check Point Research",
            "author": "Itay Cohen",
            "title": "Deobfuscating APT32 Flow Graphs with Cutter and Radare2",
            "categories": [
                "Salgorea"
            ]
        },
        {
            "data_url": "https://www.accenture.com/us-en/blogs/blogs-pond-loach-delivers-badcake-malware",
            "date": "2019-01-17",
            "organization": "Accenture",
            "author": "Matthew Brady",
            "title": "Pond Loach delivers BadCake malware",
            "categories": [
                "Salgorea",
                "APT32"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2018/03/ESET_OceanLotus.pdf",
            "date": "2018-03",
            "organization": "ESET Research",
            "author": "OceanLotus: Old techniques, new backdoor",
            "title": "OceanLotus: Old techniques, new backdoor",
            "categories": [
                "Salgorea"
            ]
        }
    ],
    "mitre": []
};