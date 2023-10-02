var threatdata = {
    "name": "VSingle",
    "alias": "VSingle",
    "category": "Malware",
    "type": "Backdoor, Downloader, Loader",
    "modified": "2023-05-25",
    "all_data": {
        "tool": "VSingle",
        "names": [
            {
                "name": "VSingle"
            }
        ],
        "description": "(JPCERT/CC) VSingle is a HTTP bot which executes arbitrary code from a remote network. It also downloads and executes plugins.\nOnce launched, this malware runs Explorer and executes its main code through DLL injection.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader",
            "Loader"
        ],
        "information": [
            "https://blogs.jpcert.or.jp/en/2021/03/Lazarus_malware3.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.vsingle"
        ],
        "uuid": "a2b8ee8b-c9d8-4811-9493-7a53d764d794",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "vsingle",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.youtube.com/watch?v=nUjxH1gW53s",
            "date": "2023-05-25",
            "organization": "YouTube (BSidesCharm)",
            "author": "Asheer Malhotra",
            "title": "it\u2019s all Magic(RAT) \u2013 A look into recent North Korean nation-state attacks",
            "categories": [
                "MagicRAT",
                "VSingle",
                "YamaBot"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/09/lazarus-three-rats.html",
            "date": "2022-09-08",
            "organization": "Cisco Talos",
            "author": "Jung soo An",
            "title": "Lazarus and the tale of three RATs",
            "categories": [
                "MagicRAT",
                "MimiKatz",
                "VSingle",
                "YamaBot"
            ]
        },
        {
            "data_url": "https://blogs.jpcert.or.jp/en/2022/07/vsingle.html",
            "date": "2022-07-05",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "VSingle malware that obtains C2 server information from GitHub",
            "categories": [
                "VSingle"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/stonefly-north-korea-espionage",
            "date": "2022-04-27",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Stonefly: North Korea-linked Spying Operation Continues to Hit High-value Targets",
            "categories": [
                "Dtrack",
                "VSingle"
            ]
        },
        {
            "data_url": "https://blogs.jpcert.or.jp/en/2021/03/Lazarus_malware3.html",
            "date": "2021-03-22",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "Lazarus Attack Activities Targeting Japan (VSingle/ValeforBeta)",
            "categories": [
                "VSingle"
            ]
        }
    ],
    "mitre": []
};