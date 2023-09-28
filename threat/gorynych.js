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
    "mitre": [],
    "file_name": "gorynych",
    "analysis": null
};