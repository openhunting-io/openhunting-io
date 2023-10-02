var threatdata = {
    "name": "Brambul",
    "alias": "Brambul, SierraBravo, SORRYBRUTE",
    "category": "Malware",
    "type": "Worm, Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Brambul",
        "names": [
            {
                "name": "Brambul"
            },
            {
                "name": "SierraBravo"
            },
            {
                "name": "SORRYBRUTE"
            }
        ],
        "description": "(US-CERT) Brambul malware is a malicious Windows 32-bit SMB worm that functions as a service dynamic link library file or a portable executable file often dropped and installed onto victims\u2019 networks by dropper malware. When executed, the malware attempts to establish contact with victim systems and IP addresses on victims\u2019 local subnets. If successful, the application attempts to gain unauthorized access via the SMB protocol (ports 139 and 445) by launching brute-force password attacks using a list of embedded passwords. Additionally, the malware generates random IP addresses for further attacks.",
        "category": "Malware",
        "type": [
            "Worm",
            "Backdoor"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/alerts/TA18-149A",
            "https://www.us-cert.gov/ncas/analysis-reports/AR18-149A",
            "https://www.acalvio.com/lateral-movement-technique-employed-by-hidden-cobra/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.brambul"
        ],
        "uuid": "7ae563c4-131b-46c0-a0e1-747a1dd55270",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "brambul",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://swanleesec.github.io/posts/Malware-Lazarus-group's-Brambul-worm-of-the-former-Wannacry-1",
            "date": "2020-02-26",
            "organization": "MetaSwan's Lab",
            "author": "MetaSwan",
            "title": "Lazarus group's Brambul worm of the former Wannacry - 1",
            "categories": [
                "Brambul",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://swanleesec.github.io/posts/Malware-Lazarus-group's-Brambul-worm-of-the-former-Wannacry-2",
            "date": "2020-02-26",
            "organization": "MetaSwan's Lab",
            "author": "MetaSwan",
            "title": "Lazarus group's Brambul worm of the former Wannacry - 2",
            "categories": [
                "Brambul"
            ]
        },
        {
            "data_url": "https://blog.lexfo.fr/ressources/Lexfo-WhitePaper-The_Lazarus_Constellation.pdf",
            "date": "2020-02-19",
            "organization": "Lexfo",
            "author": "Lexfo",
            "title": "The Lazarus Constellation A study on North Korean malware",
            "categories": [
                "FastCash",
                "AppleJeus",
                "BADCALL",
                "Bankshot",
                "Brambul",
                "Dtrack",
                "Duuzer",
                "DYEPACK",
                "ELECTRICFISH",
                "HARDRAIN",
                "Hermes",
                "HOPLIGHT",
                "Joanap",
                "KEYMARBLE",
                "Kimsuky",
                "MimiKatz",
                "MyDoom",
                "NACHOCHEESE",
                "NavRAT",
                "PowerRatankba",
                "RokRAT",
                "Sierra(Alfa,Bravo, ...)",
                "Volgmer",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/uploads/2020/02/13/cb78386a082f465f259b37dae5df4884.pdf",
            "date": "2020-02-13",
            "organization": "Qianxin",
            "author": "Qi Anxin Threat Intelligence Center",
            "title": "APT Report 2019",
            "categories": [
                "Chrysaor",
                "Exodus",
                "Dacls",
                "VPNFilter",
                "DNSRat",
                "Griffon",
                "KopiLuwak",
                "More_eggs",
                "SQLRat",
                "AppleJeus",
                "BONDUPDATER",
                "Agent.BTZ",
                "Anchor",
                "AndroMut",
                "AppleJeus",
                "BOOSTWRITE",
                "Brambul",
                "Carbanak",
                "Cobalt Strike",
                "Dacls",
                "DistTrack",
                "DNSpionage",
                "Dtrack",
                "ELECTRICFISH",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Grateful POS",
                "HOPLIGHT",
                "Imminent Monitor RAT",
                "jason",
                "Joanap",
                "KerrDown",
                "KEYMARBLE",
                "Lambert",
                "LightNeuron",
                "LoJax",
                "MiniDuke",
                "PolyglotDuke",
                "PowerRatankba",
                "Rising Sun",
                "SDBbot",
                "ServHelper",
                "Snatch",
                "Stuxnet",
                "TinyMet",
                "tRat",
                "TrickBot",
                "Volgmer",
                "X-Agent",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/nickel-academy",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "NICKEL ACADEMY",
            "categories": [
                "Brambul",
                "Duuzer",
                "HOPLIGHT",
                "Joanap",
                "Sierra(Alfa,Bravo, ...)",
                "Volgmer"
            ]
        },
        {
            "data_url": "https://www.acalvio.com/lateral-movement-technique-employed-by-hidden-cobra/",
            "date": "2018-06-13",
            "organization": "Acalvio",
            "author": "Team Acalvio",
            "title": "Lateral Movement Technique Employed by Hidden Cobra",
            "categories": [
                "Brambul",
                "Joanap"
            ]
        },
        {
            "data_url": "https://www.us-cert.gov/ncas/alerts/TA18-149A",
            "date": "2018-05-29",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Alert (TA18-149A): HIDDEN COBRA \u2013 Joanap Backdoor Trojan and Brambul Server Message Block Worm",
            "categories": [
                "Brambul",
                "Joanap"
            ]
        },
        {
            "data_url": "https://www.us-cert.gov/ncas/analysis-reports/AR18-149A",
            "date": "2018-05-29",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "MAR-10135536-3 - HIDDEN COBRA RAT/Worm",
            "categories": [
                "Brambul",
                "Joanap"
            ]
        },
        {
            "data_url": "https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=5b9850b9-0fdd-48a9-b595-9234207ae7df&CommunityKey=1ecf5f55-9545-44d6-b0f4-4e4a7f5f5e68&tab=librarydocuments",
            "date": "2015-10-26",
            "organization": "Symantec",
            "author": "A L Johnson",
            "title": "Duuzer back door Trojan targets South Korea to take over computers",
            "categories": [
                "Brambul",
                "Duuzer",
                "Joanap",
                "Lazarus Group"
            ]
        }
    ],
    "mitre": []
};