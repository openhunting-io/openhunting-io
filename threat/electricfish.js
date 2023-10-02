var threatdata = {
    "name": "ELECTRICFISH",
    "alias": "ELECTRICFISH, Alreay",
    "category": "Malware",
    "type": "Tunneling",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "ELECTRICFISH",
        "names": [
            {
                "name": "ELECTRICFISH"
            },
            {
                "name": "Alreay"
            }
        ],
        "description": "(US-CERT) This report provides analysis of two malicious 32-bit Windows executable file. The malware implements a custom protocol that allows traffic to be tunneled between a source and a destination Internet Protocol (IP) address. The malware continuously attempts to reach out to the source and the designation system, which allows either side to initiate a tunneling session. The malware can be configured with a proxy server/port and proxy username and password. This feature allows connectivity to a system sitting inside of a proxy server, which allows the actor to bypass the compromised system\u2019s required authentication to reach outside of the network.",
        "category": "Malware",
        "type": [
            "Tunneling"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/analysis-reports/ar19-252b",
            "https://securelist.com/blog/sas/77908/lazarus-under-the-hood/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.electricfish",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.alreay"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ElectricFish"
        ],
        "uuid": "0b56379e-b63d-4c34-824f-93e096ee8316",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "electricfish",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://adeo.com.tr/wp-content/uploads/2020/05/ADEO-Lazarus-APT38.pdf",
            "date": "2020-05-04",
            "organization": "ADEO DFIR",
            "author": "ADEO DFIR",
            "title": "APT38 Lazarus Threat Analysis Report",
            "categories": [
                "BLINDTOAD",
                "ELECTRICFISH"
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
            "data_url": "https://www.us-cert.gov/ncas/analysis-reports/AR19-129A",
            "date": "2019-05-09",
            "organization": "CISA",
            "author": "CISA",
            "title": "Malware Analysis Report (AR19-129A)",
            "categories": [
                "ELECTRICFISH",
                "Lazarus Group"
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
            "data_url": "https://securelist.com/blog/sas/77908/lazarus-under-the-hood/",
            "date": "2017-04-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Lazarus under the Hood",
            "categories": [
                "Alreay",
                "DYEPACK"
            ]
        }
    ],
    "mitre": []
};