var threatdata = {
    "name": "KopiLuwak",
    "alias": "KopiLuwak",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2023-04-24",
    "all_data": {
        "tool": "KopiLuwak",
        "names": [
            {
                "name": "KopiLuwak"
            }
        ],
        "description": "(Kaspersky) The KopiLuwak script is decoded by macro code very similar to that previously seen with {{IcedCoffee}}, but the resulting script is not the final step. This script is executed with a parameter used as a key to RC4 decrypt an additional layer of javascript that contains the system information collection and command and control beaconing functionality. KopiLuwak performs a more comprehensive system and network reconnaissance collection, and like IcedCoffee leaves very little on disk for investigators to discover other than the base script.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/shedding-skin-turlas-fresh-faces/88069/",
            "https://securelist.com/blog/research/77429/kopiluwak-a-new-javascript-payload-from-turla/",
            "https://www.proofpoint.com/us/threat-insight/post/turla-apt-actor-refreshes-kopiluwak-javascript-backdoor-use-g20-themed-attack"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.kopiluwak"
        ],
        "uuid": "bf8419b4-0007-4045-bf5f-646e9bfbdc07",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "kopiluwak",
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
        },
        {
            "data_url": "https://www.mandiant.com/resources/blog/turla-galaxy-opportunity",
            "date": "2023-01-05",
            "organization": "Mandiant",
            "author": "Sarah Hawley",
            "title": "Turla: A Galaxy of Opportunity",
            "categories": [
                "KopiLuwak",
                "Andromeda",
                "QUIETCANARY"
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
            "data_url": "https://securelist.com/shedding-skin-turlas-fresh-faces/88069/",
            "date": "2018-10-04",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Shedding Skin \u2013 Turla\u2019s Fresh Faces",
            "categories": [
                "KopiLuwak",
                "Agent.BTZ",
                "Cobra Carbon System",
                "Gazer",
                "Meterpreter",
                "Mosquito",
                "Skipper"
            ]
        },
        {
            "data_url": "https://blog.angelalonso.es/2017/10/analysis-of-malicious-doc-used-by-turla.html",
            "date": "2017-10-05",
            "organization": "",
            "author": "Angel Alonso-Parrizas",
            "title": "Analysis of a malicious DOC used by Turla APT group; hunting persistence via PowerShell",
            "categories": [
                "KopiLuwak"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/turla-apt-actor-refreshes-kopiluwak-javascript-backdoor-use-g20-themed-attack",
            "date": "2017-08-17",
            "organization": "Proofpoint",
            "author": "Darien Huss",
            "title": "Turla APT actor refreshes KopiLuwak JavaScript backdoor for use in G20-themed attack",
            "categories": [
                "KopiLuwak"
            ]
        },
        {
            "data_url": "https://securelist.com/blog/research/77429/kopiluwak-a-new-javascript-payload-from-turla/",
            "date": "2017-02-02",
            "organization": "Kaspersky Labs",
            "author": "Brian Bartholomew",
            "title": "KopiLuwak: A New JavaScript Payload from Turla",
            "categories": [
                "KopiLuwak"
            ]
        },
        {
            "data_url": "https://pdfhost.io/v/F0@QElMu2_MacProStorage_2017FinalBitdefenderWhitepaperNetrepserA4en_ENBitdefenderWhitepaperNetrepserA4en_ENindd.pdf",
            "date": "2015",
            "organization": "Bitdefender",
            "author": "Cristian Istrate",
            "title": "New Pacifier APT Components Point to Russian-Linked Turla Group",
            "categories": [
                "KopiLuwak",
                "Gazer",
                "Skipper"
            ]
        }
    ],
    "mitre": []
};