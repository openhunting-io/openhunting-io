var threatdata = {
    "name": "TinyNuke",
    "alias": "TinyNuke, NukeBot, Nuclear Bot, MicroBankingTrojan, Xbot",
    "category": "Malware",
    "type": "Reconnaissance, Banking trojan, Backdoor, Credential stealer, Tunneling, Botnet",
    "modified": "2022-08-08",
    "all_data": {
        "tool": "TinyNuke",
        "names": [
            {
                "name": "TinyNuke"
            },
            {
                "name": "NukeBot"
            },
            {
                "name": "Nuclear Bot"
            },
            {
                "name": "MicroBankingTrojan"
            },
            {
                "name": "Xbot"
            }
        ],
        "description": "(Bitsight) Tinynuke, or Nukebot malware, is a trojan able to perform man in the browser attacks against modern web browsers and equipped with the most common features needed by a bank trojan (e.g. Webinjects, Socks proxy, VNC, Remote command execution). This malware was in the spotlight in 2017 after the complete bot source code was leaked in March by someone claiming to be the author of the malware.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Banking trojan",
            "Backdoor",
            "Credential stealer",
            "Tunneling",
            "Botnet"
        ],
        "information": [
            "https://www.bitsight.com/blog/break-out-of-the-tinynuke-botnet",
            "https://www.netscout.com/blog/asert/dismantling-nuclear-bot",
            "https://krebsonsecurity.com/tag/nuclear-bot/",
            "https://securelist.com/the-nukebot-banking-trojan-from-rough-drafts-to-real-threats/78957/",
            "https://securityintelligence.com/the-nukebot-trojan-a-bruised-ego-and-a-surprising-source-code-leak/",
            "https://www.proofpoint.com/us/blog/threat-insight/tinynuke-banking-malware-targets-french-entities"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tinynuke"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:TinyNuke"
        ],
        "uuid": "e8441890-a53f-4eb0-8cf9-4bfbd68ab527",
        "last-card-change": "2021-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "TinyNuke",
            "malware_alias": "NukeBot,Nuclear Bot,MicroBankingTrojan,Xbot",
            "malware": "win.tinynuke",
            "last_update": "2023-06-19 12:29:34",
            "tags": [
                "TinyNuke"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "77.105.147.140:14333",
                        "timestamp": "2023-06-19 12:29:34"
                    }
                ],
                "domain": [
                    {
                        "value": "market.contradecapital.com",
                        "timestamp": "2022-09-29 09:32:55"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-06-19 12:29:34",
    "file_name": "tinynuke",
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
            "data_url": "https://asec.ahnlab.com/en/32781/",
            "date": "2022-03-21",
            "organization": "AhnLab",
            "author": "ASEC Analysis Team",
            "title": "BitRAT Disguised as Windows Product Key Verification Tool Being Distributed",
            "categories": [
                "BitRAT",
                "TinyNuke"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/27346/",
            "date": "2021-10-20",
            "organization": "AhnLab",
            "author": "ASEC Analysis Team",
            "title": "VNC Malware (TinyNuke, TightVNC) Used by Kimsuky Group",
            "categories": [
                "TinyNuke"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2019/12/nuclear-bot-author-arrested-in-sextortion-case/",
            "date": "2019-12-17",
            "organization": "",
            "author": "Brian Krebs",
            "title": "Nuclear Bot Author Arrested in Sextortion Case",
            "categories": [
                "TinyNuke",
                "Varenyky"
            ]
        },
        {
            "data_url": "https://forums.juniper.net/t5/Threat-Research/Nukebot-Banking-Trojan-targeting-people-in-France/ba-p/326702",
            "date": "2018-05-21",
            "organization": "Juniper",
            "author": "Paul Kimayong",
            "title": "Nukebot Banking Trojan targeting people in France",
            "categories": [
                "TinyNuke"
            ]
        },
        {
            "data_url": "https://www.bitsighttech.com/blog/break-out-of-the-tinynuke-botnet",
            "date": "2018-02-02",
            "organization": "BitSight",
            "author": "Tiago Pereira",
            "title": "Break Out Of The Tinynuke Malware",
            "categories": [
                "TinyNuke"
            ]
        },
        {
            "data_url": "https://securelist.com/the-nukebot-banking-trojan-from-rough-drafts-to-real-threats/78957/",
            "date": "2017-07-19",
            "organization": "Kaspersky Labs",
            "author": "Sergey Yunakovsky",
            "title": "The NukeBot banking Trojan: from rough drafts to real threats",
            "categories": [
                "TinyNuke"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/tag/nuclear-bot/",
            "date": "2017-04-06",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Self-Proclaimed \u2018Nuclear Bot\u2019 Author Weighs U.S. Job Offer",
            "categories": [
                "TinyNuke"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/the-nukebot-trojan-a-bruised-ego-and-a-surprising-source-code-leak/",
            "date": "2017-03-28",
            "organization": "SecurityIntelligence",
            "author": "Limor Kessem",
            "title": "The NukeBot Trojan, a Bruised Ego and a Surprising Source Code Leak",
            "categories": [
                "TinyNuke"
            ]
        },
        {
            "data_url": "https://www.arbornetworks.com/blog/asert/dismantling-nuclear-bot/",
            "date": "2016-12-19",
            "organization": "NetScout",
            "author": "Dennis Schwarz",
            "title": "Dismantling a Nuclear Bot",
            "categories": [
                "TinyNuke"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2016/02/new-android-trojan-xbot-phishes-credit-cards-and-bank-accounts-encrypts-devices-for-ransom/",
            "date": "2016-02-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Cong Zheng",
            "title": "New Android Trojan \u201cXbot\u201d Phishes Credit Cards and Bank Accounts, Encrypts Devices for Ransom",
            "categories": [
                "Xbot"
            ]
        },
        {
            "data_url": "https://blog.avast.com/2015/02/17/angry-android-hacker-hides-xbot-malware-in-popular-application-icons/",
            "date": "2015-02-17",
            "organization": "Avast",
            "author": "Jan \u0160irmer",
            "title": "Angry Android hacker hides Xbot malware in popular application icons",
            "categories": [
                "Xbot"
            ]
        }
    ],
    "mitre": []
};