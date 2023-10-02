var threatdata = {
    "name": "RustBucket",
    "alias": "RustBucket",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-09-05",
    "all_data": {
        "tool": "RustBucket",
        "names": [
            {
                "name": "RustBucket"
            }
        ],
        "description": "(Sekoia) Since at least December 2022, Bluenoroff was observed leveraging RustBucket, a Rust and Objective-C written malware targeting macOS running systems. This recent Bluenoroff activity illustrates how intrusion sets turn to cross-platform language in their malware development efforts, further expanding their capabilities highly likely to broaden their victimology. While other DPRK-nexus intrusion sets, including Lazarus, Kimsuky and more recently Reaper were already reported targeting macOS, it is the first time Bluenoroff was observed targeting macOS users, to the best of our knowledge.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.sekoia.io/bluenoroffs-rustbucket-campaign/",
            "https://www.jamf.com/blog/bluenoroff-apt-targets-macos-rustbucket-malware/",
            "https://www.elastic.co/security-labs/DPRK-strikes-using-a-new-variant-of-rustbucket"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.rustbucket"
        ],
        "uuid": "d02062d7-5d48-45f1-bd97-4869a78fa8fd",
        "last-card-change": "2023-09-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rustbucket",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.sentinelone.com/blog/bluenoroff-how-dprks-macos-rustbucket-seeks-to-evade-analysis-and-detection/",
            "date": "2023-07-05",
            "organization": "SentinelOne",
            "author": "Phil Stokes",
            "title": "BlueNoroff | How DPRK\u2019s macOS RustBucket Seeks to Evade Analysis and Detection",
            "categories": [
                "RustBucket"
            ]
        },
        {
            "data_url": "https://www.elastic.co/security-labs/DPRK-strikes-using-a-new-variant-of-rustbucket",
            "date": "2023-06-29",
            "organization": "Elastic",
            "author": "Colson Wilhoit",
            "title": "The DPRK strikes using a new variant of RUSTBUCKET",
            "categories": [
                "RustBucket"
            ]
        },
        {
            "data_url": "https://blog.sekoia.io/bluenoroffs-rustbucket-campaign/",
            "date": "2023-05-22",
            "organization": "Sekoia",
            "author": "Jamila B.",
            "title": "Bluenoroff\u2019s RustBucket campaign",
            "categories": [
                "RustBucket",
                "WebbyTea"
            ]
        },
        {
            "data_url": "https://blogs.jpcert.or.jp/ja/2023/05/dangerouspassword.html",
            "date": "2023-05-01",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "Attack trends related to the attack campaign DangerousPassword",
            "categories": [
                "RustBucket",
                "CageyChameleon",
                "Cur1Downloader",
                "SnatchCrypto"
            ]
        },
        {
            "data_url": "https://www.jamf.com/blog/bluenoroff-apt-targets-macos-rustbucket-malware/",
            "date": "2023-04-21",
            "organization": "Jamf Blog",
            "author": "Ferdous Saljooki",
            "title": "BlueNoroff APT group targets macOS with \u2018RustBucket\u2019 Malware",
            "categories": [
                "RustBucket"
            ]
        }
    ],
    "mitre": []
};