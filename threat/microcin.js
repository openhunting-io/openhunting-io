var threatdata = {
    "name": "Microcin",
    "alias": "Microcin, Mikroceen",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2021-03-10",
    "all_data": {
        "tool": "Microcin",
        "names": [
            {
                "name": "Microcin"
            },
            {
                "name": "Mikroceen"
            }
        ],
        "description": "(Kaspersky) If a Microsoft Office vulnerability is successfully exploited, the exploit creates an executable PE file on the hard drive and launches it for execution. The malicious program is a platform used to deploy extra (add-on) malicious modules, store them stealthily and thus add new capabilities for the threat actors. The attack unfolds in several stages, as described below:\n\n1. The exploit is activated, and an appropriate (32-bit or 64-bit) version of the malicious program is installed on the victim computer, depending on the type of operating system installed on it. To do this installation, malicious code is injected into the system process \u2018explorer.exe\u2019 rather than into its memory. The malicious program has a modular structure: its main body is stored in the registry, while its add-on modules are downloaded following the instruction arriving from the C&C server. DLL hijacking (use of a modified system library) is used to ensure that the main module is launched each time the system is rebooted.\n2. The main module of the malicious program receives an instruction to download and launch add-on modules, which opens new capabilities for the threat actors.\n3. The malicious add-on modules provide opportunities to control the victim system, take screenshots of windows and intercept information entered from the keyboard. We have seen them in other cyber-espionage campaigns as well.\n4. The threat actors use PowerSploit, a modified set of PowerShell scripts, and various utilities to steal files and passwords found on the victim computer.\n\nThe cybercriminals were primarily interested in .doc, .ppt, .xls, .docx, .pptx, .xlsx, .pdf, .txt and .rtf files on the victim computers. The harvested files were packed into a password-protected archive and sent to the threat actors\u2019 server.\n\nOverall, the tactics, techniques and procedures that the cybercriminals used in their attacks can hardly be considered complicated or expensive. However, there were a few things that caught our eye:\n\n\u2022 The payload (at least one of the modules) is delivered using some simple steganography. Within traffic, it looks like a download of a regular JPEG image; however, the encrypted payload is loaded immediately after the image data. Microcin searches for a special \u2018ABCD\u2019 label in such a file; it is followed by a special structure, after which the payload comes, to be decrypted by Microcin. This way, new, platform-independent code and/or PE files can be delivered.\n\u2022 If the Microcin installer detects the processes of some anti-malware programs running in the system, then, during installation, it skips the step of injecting into \u2018explorer.exe\u2019, and the modified system library used for establishing the malicious program within the system is placed into the folder %WINDIR%; to do this, the system app \u2018wusa.exe\u2019 is used with the parameter \u201c/extract\u201d (on operating systems with UAC).",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://securelist.com/a-simple-example-of-a-complex-cyberattack/82636/",
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07170759/Microcin_Technical_4PDF_eng_final_s.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.microcin"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:microcin"
        ],
        "uuid": "705c13b2-54c2-428c-8367-fe5387ae15ea",
        "last-card-change": "2020-05-18",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "microcin",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2021/03/10/exchange-servers-under-siege-10-apt-groups/",
            "date": "2021-03-10",
            "organization": "ESET Research",
            "author": "Thomas Dupuy",
            "title": "Exchange servers under siege from at least 10 APT groups",
            "categories": [
                "Microcin",
                "MimiKatz",
                "PlugX",
                "Winnti",
                "APT27",
                "APT41",
                "Calypso",
                "Tick",
                "ToddyCat",
                "Tonto Team",
                "Vicious Panda"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2020/07/ESET_Threat_Report_Q22020.pdf",
            "date": "2020-07-29",
            "organization": "ESET Research",
            "author": "welivesecurity",
            "title": "THREAT REPORT Q2 2020",
            "categories": [
                "DEFENSOR ID",
                "HiddenAd",
                "Bundlore",
                "Pirrit",
                "Agent.BTZ",
                "Cerber",
                "ClipBanker",
                "CROSSWALK",
                "Cryptowall",
                "CTB Locker",
                "DanaBot",
                "Dharma",
                "Formbook",
                "Gandcrab",
                "Grandoreiro",
                "Houdini",
                "ISFB",
                "LockBit",
                "Locky",
                "Mailto",
                "Maze",
                "Microcin",
                "Nemty",
                "NjRAT",
                "Phobos",
                "PlugX",
                "Pony",
                "REvil",
                "Socelars",
                "STOP",
                "Tinba",
                "TrickBot",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://st.drweb.com/static/new-www/news/2020/july/Study_of_the_APT_attacks_on_state_institutions_in_Kazakhstan_and_Kyrgyzstan_en.pdf",
            "date": "2020-07-20",
            "organization": "Dr.Web",
            "author": "Dr.Web",
            "title": "Study of the APT attacks on state institutions in Kazakhstan and Kyrgyzstan",
            "categories": [
                "Microcin",
                "Mirage",
                "PlugX",
                "WhiteBird"
            ]
        },
        {
            "data_url": "https://securelist.com/microcin-is-here/97353/",
            "date": "2020-06-19",
            "organization": "Kaspersky Labs",
            "author": "Denis Legezo",
            "title": "Microcin is here With asynchronous sockets, steganography, GitLab ban and a sock",
            "categories": [
                "Microcin"
            ]
        },
        {
            "data_url": "https://securelist.com/microcin-is-here/97353",
            "date": "2020-06-19",
            "organization": "Kaspersky Labs",
            "author": "Denis Legezo",
            "title": "Microcin is here",
            "categories": [
                "Microcin",
                "Vicious Panda"
            ]
        },
        {
            "data_url": "https://github.com/dlegezo/common",
            "date": "2020-05-18",
            "organization": "Github (dlegezo)",
            "author": "Denis Legezo",
            "title": "Microcin Decryptor",
            "categories": [
                "Microcin"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/05/14/mikroceen-spying-backdoor-high-profile-networks-central-asia/",
            "date": "2020-05-14",
            "organization": "ESET Research",
            "author": "Peter K\u00e1lnai",
            "title": "Mikroceen: Spying backdoor leveraged in high\u2011profile networks in Central Asia",
            "categories": [
                "BYEBY",
                "Microcin"
            ]
        },
        {
            "data_url": "https://decoded.avast.io/luigicamastra/apt-group-planted-backdoors-targeting-high-profile-networks-in-central-asia/",
            "date": "2020-05-14",
            "organization": "Avast Decoded",
            "author": "Luigino Camastra",
            "title": "APT Group Planted Backdoors Targeting High Profile Networks in Central Asia",
            "categories": [
                "BYEBY",
                "Microcin"
            ]
        },
        {
            "data_url": "https://decoded.avast.io/luigicamastra/apt-group-planted-backdoors-targeting-high-profile-networks-in-central-asia",
            "date": "2020-05-14",
            "organization": "Avast Decoded",
            "author": "Luigino Camastra",
            "title": "APT Group Planted Backdoors Targeting High Profile Networks in Central Asia",
            "categories": [
                "BYEBY",
                "Ghost RAT",
                "Microcin",
                "MimiKatz",
                "Vicious Panda"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/05/14/mikroceen-spying-backdoor-high-profile-networks-central-asia",
            "date": "2020-05-14",
            "organization": "ESET Research",
            "author": "Peter K\u00e1lnai",
            "title": "Mikroceen: Spying backdoor leveraged in high\u2011profile networks in Central Asia",
            "categories": [
                "Microcin",
                "Vicious Panda"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q2-2019/91897/",
            "date": "2019-08-01",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2019",
            "categories": [
                "ZooPark",
                "magecart",
                "POWERSTATS",
                "Chaperone",
                "COMpfun",
                "EternalPetya",
                "FinFisher RAT",
                "HawkEye Keylogger",
                "HOPLIGHT",
                "Microcin",
                "NjRAT",
                "Olympic Destroyer",
                "PLEAD",
                "RokRAT",
                "Triton",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07170759/Microcin_Technical_4PDF_eng_final_s.pdf",
            "date": "2017-11-25",
            "organization": "Kaspersky Labs",
            "author": "Vasily Berdnikov",
            "title": "MICROCIN MALWARE: TECHNICAL DETAILS AND INDICATORS OF COMPROMISE",
            "categories": [
                "Microcin",
                "Vicious Panda"
            ]
        },
        {
            "data_url": "https://securelist.com/a-simple-example-of-a-complex-cyberattack/82636",
            "date": "2017-09-25",
            "organization": "Kaspersky Labs",
            "author": "Vasily Berdnikov",
            "title": "A simple example of a complex cyberattack",
            "categories": [
                "Microcin",
                "Vicious Panda"
            ]
        },
        {
            "data_url": "https://securelist.com/a-simple-example-of-a-complex-cyberattack/82636/",
            "date": "2017-09-25",
            "organization": "Kaspersky Labs",
            "author": "Vasily Berdnikov",
            "title": "A simple example of a complex cyberattack",
            "categories": [
                "Microcin"
            ]
        }
    ],
    "mitre": []
};