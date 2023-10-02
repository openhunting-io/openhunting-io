var threatdata = {
    "name": "HUI Loader",
    "alias": "HUI Loader",
    "category": "Malware",
    "type": "Loader",
    "modified": "2023-08-17",
    "all_data": {
        "tool": "HUI Loader",
        "names": [
            {
                "name": "HUI Loader"
            }
        ],
        "description": "(SecureWorks) HUI Loader is a custom DLL loader whose name is derived from a string in the loader (see Figure 1). The malware is loaded by legitimate programs that are vulnerable to DLL search order hijacking. HUI Loader decrypts and loads a third file containing an encrypted payload that is also deployed to the compromised host. CTU researchers have observed HUI Loader loading RATs such as {{SodaMaster}}, {{PlugX}}, {{Cobalt Strike}}, and {{QuasarRAT}}.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.secureworks.com/research/bronze-starlight-ransomware-operations-use-hui-loader"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hui_loader"
        ],
        "uuid": "afe97e74-7cbf-4bc0-8425-4520ad9f325d",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hui_loader",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.sentinelone.com/labs/chinese-entanglement-dll-hijacking-in-the-asian-gambling-sector/",
            "date": "2023-08-17",
            "organization": "SentinelOne",
            "author": "Aleksandar Milenkoski",
            "title": "Chinese Entanglement | DLL Hijacking in the Asian Gambling Sector",
            "categories": [
                "Cobalt Strike",
                "HUI Loader"
            ]
        },
        {
            "data_url": "https://medium.com/@morimolymoly/hui-loader-malware-analysis-note-4fa0e1c791d3",
            "date": "2023-08-02",
            "organization": "Medium (@morimolymoly)",
            "author": "morimolymoly",
            "title": "HUI Loader \u2014 Malware Analysis Note",
            "categories": [
                "HUI Loader"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/bronze-starlight-ransomware-operations-use-hui-loader",
            "date": "2022-06-23",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "BRONZE STARLIGHT Ransomware Operations Use HUI Loader",
            "categories": [
                "ATOMSILO",
                "Cobalt Strike",
                "HUI Loader",
                "LockFile",
                "NightSky",
                "Pandora",
                "PlugX",
                "Quasar RAT",
                "Rook",
                "SodaMaster"
            ]
        },
        {
            "data_url": "https://blogs.jpcert.or.jp/ja/2022/05/HUILoader.html",
            "date": "2022-05-16",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "Analysis of HUI Loader",
            "categories": [
                "HUI Loader",
                "PlugX",
                "Poison Ivy",
                "Quasar RAT"
            ]
        },
        {
            "data_url": "https://jsac.jpcert.or.jp/archive/2022/pdf/JSAC2022_9_yanagishita-tamada-nakatsuru-ishimaru_en.pdf",
            "date": "2022-01-27",
            "organization": "JSAC 2021",
            "author": "Hajime Yanagishita",
            "title": "What We Can Do against the Chaotic  A41APT Campaign",
            "categories": [
                "CHINACHOPPER",
                "Cobalt Strike",
                "HUI Loader",
                "SodaMaster"
            ]
        }
    ],
    "mitre": []
};