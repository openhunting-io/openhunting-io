var threatdata = {
    "name": "DreamBot",
    "alias": "DreamBot",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Credential stealer, Botnet",
    "modified": "2022-08-08",
    "all_data": {
        "tool": "DreamBot",
        "names": [
            {
                "name": "DreamBot"
            }
        ],
        "description": "(Proofpoint) The Dreambot malware is still in active development and over the last few months we have seen multiple versions of it spreading in the wild. The Tor-enabled version of Dreambot has been active since at least July 2016, when we first observed the malware successfully download the Tor client and connect to the Tor network. Today, many Dreambot samples include this functionality, but few use it as their primary mode of communication with their command and control (C&C) infrastructure. However, in the future this feature may be utilized much more frequently, creating additional problems for defenders.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/ursnif-variant-dreambot-adds-tor-functionality",
            "https://lokalhost.pl/gozi_tree.txt"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dreambot"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=DreamBot"
        ],
        "uuid": "f979f85d-68d3-44b5-a2b6-ef0774f7c717",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "DreamBot",
            "malware_alias": null,
            "malware": "win.dreambot",
            "last_update": "2022-08-18 17:41:15",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "4103f92313df741c926014545472ca43",
                        "timestamp": "2022-08-18 17:41:15"
                    },
                    {
                        "value": "a908e3261ee99c8fe331293b2fc11d6f",
                        "timestamp": "2022-08-18 17:41:15"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-08-18 17:41:15",
    "file_name": "dreambot",
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
            "data_url": "https://www.youtube.com/watch?v=EyDiIAt__dI",
            "date": "2021-01-28",
            "organization": "Youtube (Virus Bulletin)",
            "author": "Beno\u00eet Ancel",
            "title": "The Bagsu banker case",
            "categories": [
                "Azorult",
                "DreamBot",
                "Emotet",
                "Pony",
                "TrickBot",
                "ZeusAction"
            ]
        },
        {
            "data_url": "https://community.riskiq.com/article/30f22a00",
            "date": "2020-09-02",
            "organization": "RiskIQ",
            "author": "Jordan Herman",
            "title": "The Inter Skimmer Kit",
            "categories": [
                "magecart",
                "DreamBot",
                "TeslaCrypt"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2020/gozi-the-malware-with-a-thousand-faces/",
            "date": "2020-08-28",
            "organization": "Checkpoint",
            "author": "Check Point Research",
            "title": "Gozi: The Malware with a Thousand Faces",
            "categories": [
                "DreamBot",
                "ISFB",
                "LOLSnif",
                "SaiGon"
            ]
        },
        {
            "data_url": "https://medium.com/csis-techblog/the-end-of-dreambot-a-loved-piece-of-gozi-24cc9bfc8122",
            "date": "2020-05-01",
            "organization": "CSIS",
            "author": "Beno\u00eet Ancel",
            "title": "The end of Dreambot? Obituary for a loved piece of Gozi.",
            "categories": [
                "DreamBot"
            ]
        },
        {
            "data_url": "https://medium.com/csis-techblog/installcapital-when-adware-becomes-pay-per-install-cyber-crime-15516249a451",
            "date": "2020-02-07",
            "organization": "Medium CSIS Techblog",
            "author": "Beno\u00eet Ancel",
            "title": "InstallCapital \u2014 When AdWare Becomes Pay-per-Install Cyber-Crime",
            "categories": [
                "DreamBot",
                "Glupteba"
            ]
        },
        {
            "data_url": "https://lokalhost.pl/gozi_tree.txt",
            "date": "2017-05-29",
            "organization": "Lokalhost.pl",
            "author": "Maciej Kotowicz",
            "title": "Gozi Tree",
            "categories": [
                "DreamBot",
                "Gozi",
                "ISFB",
                "Powersniff"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/ursnif-variant-dreambot-adds-tor-functionality",
            "date": "2016-08-29",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "Nightmare on Tor Street: Ursnif variant Dreambot adds Tor functionality",
            "categories": [
                "DreamBot"
            ]
        }
    ],
    "mitre": []
};