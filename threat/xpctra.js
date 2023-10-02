var threatdata = {
    "name": "XPCTRA",
    "alias": "XPCTRA, Expectra",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Credential stealer",
    "modified": "2020-12-10",
    "all_data": {
        "tool": "XPCTRA",
        "names": [
            {
                "name": "XPCTRA"
            },
            {
                "name": "Expectra"
            }
        ],
        "description": "(SANS) \n\u2022 The infection vector (malspam) links to a supposed PDF invoice, which actually leads the victim to download an executable file (dropper);\n\u2022 Once executed, the dropper downloads a \u201c.zip\u201d file, unzips and executes the malware payload;\n\u2022 It then begins a series of actions, including:\no Persists itself into the OS, in order to survive system reboot;\no Changes Firewall policies to allow the malware to communicate unrestrictedly with the Internet;\no Instantiates \u201cFliddler\u201d, an HTTP Proxy that is used to monitor and intercept user access to the financial institutions;\no Installs the Fiddler root certificate to prevent the user from receiving digital certificate errors;\no Points Internet Browsers settings to the local proxy (Fiddler);\no Monitors and captures user credentials while accessing the websites of 2 major Brazilian banks and other financial institutions;\no Stolen credentials are sent to criminals through an unencrypted C&C channel;\no Establishes an encrypted channel to allow the victim\u2019s system to be controlled by the attackers (RAT);\no Monitors and captures user credentials while accessing email services like Microsoft Live, Terra, IG and Hotmail. These accesses are used to spread the malware further;\n\nAfter posting EngineBox malware analysis last month, through community feedback, I came to know that the threat embedded a framework called {{QuasarRAT}} developed in C#. The goal of this framework is to provide a tool for remote access and management of Windows computers\u2014 hence the name, RAT (Remote Access Tool).",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://isc.sans.edu/forums/diary/XPCTRA+Malware+Steals+Banking+and+Digital+Wallet+Users+Credentials/22868/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.xpctra"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:xpctra"
        ],
        "uuid": "3d13907b-bc97-4f76-aa99-7bb35a217159",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "xpctra",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blogs.jpcert.or.jp/en/2020/12/quasar-family.html",
            "date": "2020-12-10",
            "organization": "JPCERT/CC",
            "author": "Kota Kino",
            "title": "Attack Activities by Quasar Family",
            "categories": [
                "AsyncRAT",
                "Quasar RAT",
                "Venom RAT",
                "XPCTRA"
            ]
        },
        {
            "data_url": "https://www.buguroo.com/en/blog/bank-malware-in-brazil-xpctra-rat-analysis",
            "date": "2017-11-21",
            "organization": "bugaroo",
            "author": "Oscar Ju\u00e1rez",
            "title": "New banking malware in Brazil - XPCTRA RAT ANALYSIS",
            "categories": [
                "XPCTRA"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/forums/diary/XPCTRA+Malware+Steals+Banking+and+Digital+Wallet+Users+Credentials/22868/",
            "date": "2017-09-26",
            "organization": "ISC",
            "author": "Renato Marinho",
            "title": "XPCTRA Malware Steals Banking and Digital Wallet User's Credentials",
            "categories": [
                "XPCTRA"
            ]
        }
    ],
    "mitre": []
};