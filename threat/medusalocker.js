var threatdata = {
    "name": "MedusaLocker",
    "alias": "MedusaLocker, AKO Doxware, AKO Ransomware, MedusaReborn",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting, Reconnaissance",
    "modified": "2023-04-19",
    "all_data": {
        "tool": "MedusaLocker",
        "names": [
            {
                "name": "MedusaLocker"
            },
            {
                "name": "AKO Doxware"
            },
            {
                "name": "AKO Ransomware"
            },
            {
                "name": "MedusaReborn"
            }
        ],
        "description": "(Cybereason) The MedusaLocker ransomware first emerged in September 2019, infecting and encrypting Windows machines around the world. There have been reports of MedusaLocker attacks across multiple industries, especially the healthcare industry which suffered a great deal of ransomware attacks during the COVID-19 pandemic.\n\nIn order to maximize the chances of successful encryption of the files on the compromised machine, MedusaLocker restarts the machine in safe mode before execution. This method is used to avoid security tools that might not run when the computer starts in safe mode.\n\nMedusaLocker avoids encrypting executable files, most likely to avoid rendering the targeted system unusable for paying the ransom. To make it even more dangerous, MedusaLocker uses a combination of AES and RSA-2048, making the procedure of brute forcing the encryption practically impossible.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting",
            "Reconnaissance"
        ],
        "information": [
            "https://www.cybereason.com/blog/medusalocker-ransomware",
            "https://www.bleepingcomputer.com/news/security/medusalocker-ransomware-wants-its-share-of-your-money/",
            "https://www.binarydefense.com/threat_watch/new-ransomware-medusalocker/",
            "https://www.sentinelone.com/blog/how-medusalocker-ransomware-aggressively-targets-remote-hosts/",
            "https://www.carbonblack.com/blog/tau-threat-analysis-medusa-locker-ransomware/",
            "https://cyware.com/news/uncovering-the-abilities-of-medusalocker-ransomware-3fb92eca",
            "https://blog.talosintelligence.com/2020/04/medusalocker.html",
            "https://www.cisa.gov/uscert/ncas/alerts/aa22-181a"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.medusalocker"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:medusalocker"
        ],
        "uuid": "2680cd2f-0911-418c-8414-d01b475df8f2",
        "last-card-change": "2022-07-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "MedusaLocker",
            "malware_alias": "AKO Ransomware,AKO Doxware,MedusaReborn",
            "malware": "win.medusalocker",
            "last_update": "2021-03-29 11:30:30",
            "tags": [
                "medusalocker"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "4dd950fcdcd8483ec9346b4a5214931134975c439cf463daa3a0518cfc5db9a6",
                        "timestamp": "2021-03-29 11:30:30"
                    },
                    {
                        "value": "613f0384286bf9956143e5cd7f885cc9b2cf30acaab2fe67a891ff26aaa162fc",
                        "timestamp": "2021-03-29 11:30:30"
                    },
                    {
                        "value": "8894becff9f3ebc9c2d734b5f3341fd73017ef3bd42c2a40008b3325586cd0ee",
                        "timestamp": "2021-03-29 11:30:30"
                    },
                    {
                        "value": "38ad791e5f0df27a55116ec18f2c31cc41feaaf7d235d85497a6cfa39ebfbebb",
                        "timestamp": "2021-03-29 11:30:30"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-03-29 11:30:30",
    "file_name": "medusalocker",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/march-2023-broke-ransomware-attack-records-with-459-incidents/",
            "date": "2023-04-19",
            "organization": "Bleeping Computer",
            "author": "Bill Toulas",
            "title": "March 2023 broke ransomware attack records with 459 incidents",
            "categories": [
                "Clop",
                "WhiteRabbit",
                "BianLian",
                "Black Basta",
                "BlackCat",
                "LockBit",
                "MedusaLocker",
                "PLAY",
                "Royal Ransom"
            ]
        },
        {
            "data_url": "https://blog.cyble.com/2023/03/15/unmasking-medusalocker-ransomware/",
            "date": "2023-03-15",
            "organization": "Cybleinc",
            "author": "Cyble",
            "title": "Unmasking MedusaLocker Ransomware",
            "categories": [
                "MedusaLocker"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/48940/",
            "date": "2023-03-08",
            "organization": "AhnLab",
            "author": "ASEC",
            "title": "GlobeImposter Ransomware Being Distributed with MedusaLocker via RDP",
            "categories": [
                "GlobeImposter",
                "MedusaLocker"
            ]
        },
        {
            "data_url": "https://cloudsek.com/technical-analysis-of-medusalocker-ransomware/",
            "date": "2022-09-30",
            "organization": "Cloudsek",
            "author": "Anandeshwar Unnikrishnan",
            "title": "Technical Analysis of MedusaLocker Ransomware",
            "categories": [
                "MedusaLocker"
            ]
        },
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
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-181a",
            "date": "2022-07-01",
            "organization": "CISA",
            "author": "CISA",
            "title": "Alert (AA22-181A): #StopRansomware: MedusaLocker",
            "categories": [
                "MedusaLocker"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/sites/default/files/publications/AA22-181A_stopransomware_medusalocker.pdf",
            "date": "2022-06-30",
            "organization": "CISA",
            "author": "CISA",
            "title": "CSA (AA22-181A): #StopRansomware: MedusaLocker",
            "categories": [
                "MedusaLocker"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/chasing-avaddon-ransomware",
            "date": "2022-01-19",
            "organization": "Mandiant",
            "author": "Adrian Sanchez Hernandez",
            "title": "One Source to Rule Them All: Chasing AVADDON Ransomware",
            "categories": [
                "BlackMatter",
                "Avaddon",
                "BlackMatter",
                "MedusaLocker",
                "SystemBC",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://docs.google.com/spreadsheets/d/1MI8Z2tBhmqQ5X8Wf_ozv3dVjz5sJOs-3",
            "date": "2021-05-10",
            "organization": "DarkTracer",
            "author": "DarkTracer",
            "title": "Intelligence Report on Ransomware Gangs on the DarkWeb: List of victim organizations attacked by ransomware gangs released on the DarkWeb",
            "categories": [
                "RansomEXX",
                "Avaddon",
                "Babuk",
                "Clop",
                "Conti",
                "Cuba",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "Hades",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "Nefilim",
                "Nemty",
                "Pay2Key",
                "PwndLocker",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Sekhmet",
                "SunCrypt",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2021GTR.pdf",
            "date": "2021-02-23",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2021 Global Threat Report",
            "categories": [
                "RansomEXX",
                "Amadey",
                "Anchor",
                "Avaddon",
                "BazarBackdoor",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "Cutwail",
                "DanaBot",
                "DarkSide",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "Hakbit",
                "IcedID",
                "JSOutProx",
                "KerrDown",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "NedDnLoader",
                "Nemty",
                "Pay2Key",
                "PlugX",
                "Pushdo",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "Quasar RAT",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet",
                "ShadowPad",
                "SmokeLoader",
                "Snake",
                "SUNBURST",
                "SunCrypt",
                "TEARDROP",
                "TrickBot",
                "WastedLocker",
                "Winnti",
                "Zloader",
                "KNOCKOUT SPIDER",
                "OUTLAW SPIDER",
                "RIDDLE SPIDER",
                "SOLAR SPIDER",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa20-345a",
            "date": "2020-12-10",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Alert (AA20-345A): Cyber Actors Target K-12 Distance Learning Education to Cause Disruptions and Steal Data",
            "categories": [
                "PerlBot",
                "Shlayer",
                "Agent Tesla",
                "Cerber",
                "Dridex",
                "Ghost RAT",
                "Kovter",
                "Maze",
                "MedusaLocker",
                "Nanocore RAT",
                "Nefilim",
                "REvil",
                "Ryuk",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/medusalocker-ransomware",
            "date": "2020-11-19",
            "organization": "Cybereason",
            "author": "Tom Fakterman",
            "title": "Cybereason vs. MedusaLocker Ransomware",
            "categories": [
                "MedusaLocker"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/double-trouble-ransomware-data-leak-extortion-part-2/",
            "date": "2020-10-06",
            "organization": "CrowdStrike",
            "author": "The Crowdstrike Intel Team",
            "title": "Double Trouble: Ransomware with Data Leak Extortion, Part 2",
            "categories": [
                "Maze",
                "MedusaLocker",
                "REvil",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/double-trouble-ransomware-data-leak-extortion-part-1/",
            "date": "2020-09-25",
            "organization": "CrowdStrike",
            "author": "The Crowdstrike Intel Team",
            "title": "Double Trouble: Ransomware with Data Leak Extortion, Part 1",
            "categories": [
                "DoppelPaymer",
                "FriedEx",
                "LockBit",
                "Maze",
                "MedusaLocker",
                "RagnarLocker",
                "REvil",
                "RobinHood",
                "SamSam",
                "WastedLocker",
                "MIMIC SPIDER",
                "PIZZO SPIDER",
                "TA2101",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/double-trouble-ransomware-data-leak-extortion-part-1",
            "date": "2020-09-24",
            "organization": "CrowdStrike",
            "author": "CrowdStrike Intelligence Team",
            "title": "Double Trouble: Ransomware with Data Leak Extortion, Part 1",
            "categories": [
                "DoppelPaymer",
                "Gandcrab",
                "LockBit",
                "Maze",
                "MedusaLocker",
                "RagnarLocker",
                "SamSam",
                "OUTLAW SPIDER",
                "OVERLORD SPIDER"
            ]
        },
        {
            "data_url": "https://ke-la.com/how-ransomware-gangs-find-new-monetization-schemes-and-evolve-in-marketing/",
            "date": "2020-08-25",
            "organization": "KELA",
            "author": "Victoria Kivilevich",
            "title": "How Ransomware Gangs Find New Monetization Schemes and Evolve in Marketing",
            "categories": [
                "Avaddon",
                "Clop",
                "DarkSide",
                "DoppelPaymer",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Nefilim",
                "RagnarLocker",
                "REvil",
                "Sekhmet"
            ]
        },
        {
            "data_url": "https://www.theta.co.nz/news-blogs/cyber-security-blog/part-3-analysing-medusalocker-ransomware/",
            "date": "2020-08-06",
            "organization": "Theta",
            "author": "Hamish Krebs",
            "title": "Part 3: analysing MedusaLocker ransomware",
            "categories": [
                "MedusaLocker"
            ]
        },
        {
            "data_url": "https://www.theta.co.nz/news-blogs/cyber-security-blog/part-2-analysing-medusalocker-ransomware/",
            "date": "2020-08-05",
            "organization": "Theta",
            "author": "Hamish Krebs",
            "title": "Part 2: Analysing MedusaLocker ransomware",
            "categories": [
                "MedusaLocker"
            ]
        },
        {
            "data_url": "https://www.theta.co.nz/news-blogs/cyber-security-blog/part-1-analysing-medusalocker-ransomware/",
            "date": "2020-08-04",
            "organization": "Theta",
            "author": "Hamish Krebs",
            "title": "Part 1: analysing MedusaLocker ransomware",
            "categories": [
                "MedusaLocker"
            ]
        },
        {
            "data_url": "https://www.carbonblack.com/2020/06/03/tau-threat-analyis-medusa-locker-ransomware/",
            "date": "2020-06-03",
            "organization": "VMWare Carbon Black",
            "author": "Brian Baskin",
            "title": "Medusa Locker Ransomware",
            "categories": [
                "MedusaLocker"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2020/04/28/ransomware-groups-continue-to-target-healthcare-critical-services-heres-how-to-reduce-risk/",
            "date": "2020-04-28",
            "organization": "Microsoft",
            "author": "Microsoft Threat Protection Intelligence Team",
            "title": "Ransomware groups continue to target healthcare, critical services; here\u2019s how to reduce risk",
            "categories": [
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Paradise",
                "RagnarLocker",
                "REvil",
                "RobinHood"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/04/medusalocker.html",
            "date": "2020-04-23",
            "organization": "Cisco Talos",
            "author": "Edmund Brumaghin",
            "title": "Threat Spotlight: MedusaLocker",
            "categories": [
                "MedusaLocker"
            ]
        },
        {
            "data_url": "https://jsac.jpcert.or.jp/archive/2020/pdf/JSAC2020_1_tamada-yamazaki-nakatsuru_en.pdf",
            "date": "2020-01-17",
            "organization": "Secureworks",
            "author": "Tamada Kiyotaka",
            "title": "Is It Wrong to Try to Find APT Techniques in Ransomware Attack?",
            "categories": [
                "Defray",
                "Dharma",
                "FriedEx",
                "Gandcrab",
                "GlobeImposter",
                "Matrix Ransom",
                "MedusaLocker",
                "Phobos",
                "REvil",
                "Ryuk",
                "SamSam",
                "Scarab Ransomware"
            ]
        },
        {
            "data_url": "https://id-ransomware.blogspot.com/2020/01/ako-ransomware.html",
            "date": "2020-01-09",
            "organization": "ID Ransomware",
            "author": "Andrew Ivanov",
            "title": "Ako, MedusaReborn",
            "categories": [
                "MedusaLocker"
            ]
        },
        {
            "data_url": "https://twitter.com/siri_urz/status/1215194488714346496?s=20",
            "date": "2020-01-09",
            "organization": "Twitter (@siri_urz)",
            "author": "Twitter (@siri_urz)",
            "title": "Tweet on AKO Ransomware",
            "categories": [
                "MedusaLocker"
            ]
        },
        {
            "data_url": "https://www.blackberry.com/content/dam/blackberry-com/asset/enterprise/pdf/wp-spark-state-of-ransomware.pdf",
            "date": "2020",
            "organization": "Blackberry",
            "author": "Blackberry Research",
            "title": "State of Ransomware",
            "categories": [
                "Maze",
                "MedusaLocker",
                "Nefilim",
                "Phobos",
                "REvil",
                "Ryuk",
                "STOP"
            ]
        },
        {
            "data_url": "https://dissectingmalwa.re/try-not-to-stare-medusalocker-at-a-glance.html",
            "date": "2019-11-05",
            "organization": "Dissecting Malware",
            "author": "Marius Genheimer",
            "title": "Try not to stare - MedusaLocker at a glance",
            "categories": [
                "MedusaLocker"
            ]
        },
        {
            "data_url": "http://id-ransomware.blogspot.com/2019/10/medusalocker-ransomware.html",
            "date": "2019-10-15",
            "organization": "",
            "author": "Andrew Ivanov",
            "title": "MedusaLocker Ransomware",
            "categories": [
                "MedusaLocker"
            ]
        }
    ],
    "mitre": []
};