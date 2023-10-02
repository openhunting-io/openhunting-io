var threatdata = {
    "name": "Gorynych",
    "alias": "Gorynych, Gorynch, Diamond Fox, DiamondFox, Crystal",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Info stealer, Credential stealer, Botnet, Downloader, Exfiltration",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Gorynych",
        "names": [
            {
                "name": "Gorynych"
            },
            {
                "name": "Gorynch"
            },
            {
                "name": "Diamond Fox"
            },
            {
                "name": "DiamondFox"
            },
            {
                "name": "Crystal"
            }
        ],
        "description": "(Trend Micro) There\u2019s a new player in the card theft game that changes it altogether: Gorynych or the Diamond Fox botnet malware. BKDR_GORYNYCH may not technically be considered a PoS malware, as it is not entirely designed for PoS systems and is also being used outside of the Black Atlas operation. However, cybercriminals running Black Atlas have built a copy that can specifically look for the output file of the {{BlackPOS}} malware, which is the one that harvested the credit card data from the targets in the first place. The fact that the images in Gorynych\u2019s control panel were named \u201cKartoxa,\u201d which also refers to BlackPoS, further proves the link between the two malware and the operation.\n\nAside from the PoS plugin, other modules usually downloaded from a subdirectory in the C&C server make up this malware\u2019s entirety. These include plugins for getting screenshots, passwords, mails, and more. Without the plugins, Gorynych routines mostly focus on anti-analysis, information theft, and installations. In the Diamond Fox builder, the keylogger and PoS grabber functionalities are disabled by default. However, with Operation Black Atlas, these options were turned on, which proves that cybercriminals running this are intentionally targeting PoS systems.\n\nAfter downloading its plugins, Gorynych reports to its server via gate.php using HTTP POST. It uses its own user-agent that can be found in its configuration file. The parameters consist of system information used to profile the bot, mainly for identification in the Gorynych control panel. The posted information is encrypted using a simple XOR operation.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Credential stealer",
            "Botnet",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/operation-black-atlas-part-2-tools-and-malware-used-and-how-to-detect-them/",
            "https://blog.malwarebytes.com/threat-analysis/2017/03/diamond-fox-p1/",
            "https://blog.malwarebytes.com/threat-analysis/2017/04/diamond-fox-p2/",
            "http://blog.checkpoint.com/2017/05/10/diamondfox-modular-malware-one-stop-shop/",
            "https://blog.cylance.com/a-study-in-bots-diamondfox",
            "https://fr3d.hk/blog/diamondfox-bank-robbers-will-be-replaced",
            "https://www.scmagazine.com/inside-diamondfox/article/578478/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.diamondfox"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:gorynich"
        ],
        "uuid": "a6bf48fd-e90c-40e9-8d54-5b41f3acaf0d",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "gorynych",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://medium.com/csis-techblog/inside-view-of-brazzzersff-infrastructure-89b9188fd145",
            "date": "2022-08-08",
            "organization": "Medium CSIS Techblog",
            "author": "Beno\u00eet Ancel",
            "title": "An inside view of domain anonymization as-a-service \u2014 the BraZZZerSFF infrastructure",
            "categories": [
                "Riltok",
                "magecart",
                "Anubis",
                "Azorult",
                "BetaBot",
                "Buer",
                "CoalaBot",
                "CryptBot",
                "DiamondFox",
                "DreamBot",
                "GCleaner",
                "ISFB",
                "Loki Password Stealer (PWS)",
                "MedusaLocker",
                "MeguminTrojan",
                "Nemty",
                "PsiX",
                "RedLine Stealer",
                "SmokeLoader",
                "STOP",
                "TinyNuke",
                "Vidar",
                "Zloader"
            ]
        },
        {
            "data_url": "https://github.com/samoceyn/Diamondfox-Technical-Analysis-Report/blob/6375314ccecdf3fe450f975a384bcc1b16f068a8/D%C4%B0AMONDFOX%20Technical%20Analysis%20Report.PDF",
            "date": "2021-07-27",
            "organization": "ZAYOTEM",
            "author": "Abdulsamet Akinci",
            "title": "Diamondfox Technical Analysis Report",
            "categories": [
                "DiamondFox"
            ]
        },
        {
            "data_url": "https://fr3d.hk/blog/diamondfox-bank-robbers-will-be-replaced",
            "date": "2020-08-10",
            "organization": "FR3D.HK",
            "author": "Fred HK",
            "title": "DiamondFox - Bank Robbers will be replaced",
            "categories": [
                "DiamondFox"
            ]
        },
        {
            "data_url": "http://blog.checkpoint.com/2017/05/10/diamondfox-modular-malware-one-stop-shop/",
            "date": "2017-05-10",
            "organization": "Check Point",
            "author": "Check Point",
            "title": "DiamondFox modular malware \u2013 a one-stop shop",
            "categories": [
                "DiamondFox"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2017/04/diamond-fox-p2/",
            "date": "2017-04-06",
            "organization": "Malwarebytes",
            "author": "Malwarebytes Labs",
            "title": "Diamond Fox \u2013 part 2: let\u2019s dive in the code",
            "categories": [
                "DiamondFox"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2017/03/diamond-fox-p1/",
            "date": "2017-03-17",
            "organization": "Malwarebytes",
            "author": "Malwarebytes Labs",
            "title": "Diamond Fox \u2013 part 1: introduction and unpacking",
            "categories": [
                "DiamondFox"
            ]
        },
        {
            "data_url": "https://www.scmagazine.com/inside-diamondfox/article/578478/",
            "date": "2016-12-12",
            "organization": "SC Magazine",
            "author": "SC Magazine",
            "title": "Inside DiamondFox",
            "categories": [
                "DiamondFox"
            ]
        },
        {
            "data_url": "https://blog.cylance.com/a-study-in-bots-diamondfox",
            "date": "2015-10-08",
            "organization": "Cylance",
            "author": "Brian Wallace",
            "title": "A Study in Bots: DiamondFox",
            "categories": [
                "DiamondFox"
            ]
        }
    ],
    "mitre": []
};