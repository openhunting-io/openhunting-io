var threatdata = {
    "name": "Worok",
    "alias": "Worok",
    "category": "APT",
    "type": "-",
    "modified": "2022-09-13",
    "all_data": {
        "actor": "Worok",
        "names": [
            {
                "name": "Worok",
                "name-giver": "ESET"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2020",
        "description": "(ESET) ESET researchers recently found targeted attacks that used undocumented tools against various high-profile companies and local governments mostly in Asia. These attacks were conducted by a previously unknown espionage group that we have named Worok and that has been active since at least 2020. Worok\u2019s toolset includes a C++ loader CLRLoad, a PowerShell backdoor PowHeartBeat, and a C# loader PNGLoad that uses steganography to extract hidden malicious payloads from PNG files.\n\nActivity times and toolset indicate possible ties with {{TA428}}, but we make this assessment with low confidence.",
        "observed-sectors": [
            "Energy",
            "Financial",
            "Government",
            "Telecommunications"
        ],
        "observed-countries": [
            "Botswana",
            "Cambodia",
            "China",
            "Indonesia",
            "Iran",
            "Iraq",
            "Japan",
            "Kazakhstan",
            "Kyrgyzstan",
            "Laos",
            "Lebanon",
            "Malaysia",
            "Mongolia",
            "Myanmar",
            "Namibia",
            "North Korea",
            "Oman",
            "Philippines",
            "Saudi Arabia",
            "Singapore",
            "South Africa",
            "South Korea",
            "Syria",
            "Tajikistan",
            "Thailand",
            "Turkey",
            "Turkmenistan",
            "UAE",
            "Uzbekistan",
            "Vietnam",
            "Yemen"
        ],
        "tools": [
            "CLRLoad",
            "EarthWorm",
            "Mimikatz",
            "nbtscan",
            "PNGLoad",
            "PowHeartBeat",
            "reGeorg"
        ],
        "information": [
            "https://www.welivesecurity.com/2022/09/06/worok-big-picture/"
        ],
        "uuid": "588255b4-4acf-45b0-a644-83bce3590e58",
        "last-card-change": "2022-09-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "worok",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2022/09/06/worok-big-picture/",
            "date": "2022-09-06",
            "organization": "ESET Research",
            "author": "Thibaut Passilly",
            "title": "Worok: The big picture",
            "categories": [
                "MimiKatz",
                "PNGLoad",
                "reGeorg",
                "ShadowPad",
                "Worok"
            ]
        }
    ],
    "mitre": []
};