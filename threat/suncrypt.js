var threatdata = {
    "name": "SunCrypt",
    "alias": "SunCrypt",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-07-27",
    "all_data": {
        "tool": "SunCrypt",
        "names": [
            {
                "name": "SunCrypt"
            }
        ],
        "description": "(Intezer) SunCrypt is a Ransomware as a Service (RaaS) that uses a closed affiliate program on the dark web. The history of this RaaS can be traced back to circa October 2019. In October 2019, a new ransomware was found in-the-wild (5657abdb9d99cd5aec433099f8d6f53d). The new ransomware was written in Go and targeted Windows machines. This version of SunCrypt was not reported in many attacks and it wasn\u2019t until mid-2020 when a new version of the ransomware written in C/C++ was discovered, that attacks started to increase. It is an interesting shift of retooling from Go to C/C++ when other groups are instead retooling from C/C++ to Go.\n\nWhile the RaaS didn\u2019t appear until October 2019, these ransomware share connections with another ransomware, called QNAPCrypt (also known as eCh0raix), that was used to target Network Attached Storage (NAS) devices back in July 2019. Both families share identical code logic for the file encryption, which we can conclude with high certainty has been compiled from the same source code.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.intezer.com/blog/malware-analysis/when-viruses-mutate-did-suncrypt-ransomware-evolve-from-qnapcrypt/",
            "https://securityboulevard.com/2020/09/the-curious-case-of-suncrypt/",
            "https://www.acronis.com/en-us/blog/posts/suncrypt-adopts-attacking-techniques-netwalker-and-maze-ransomware",
            "https://blog.minerva-labs.com/suncrypt-ransomware-gains-new-abilities-in-2022"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.suncrypt"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:suncrypt"
        ],
        "uuid": "878abf22-c447-4e44-8df7-1a63625de2e9",
        "last-card-change": "2022-04-04",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "suncrypt",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.trendmicro.com/en_us/research/22/g/gootkit-loaders-updated-tactics-and-fileless-delivery-of-cobalt-strike.html",
            "date": "2022-07-27",
            "organization": "Trend Micro",
            "author": "Buddy Tancio",
            "title": "Gootkit Loader\u2019s Updated Tactics and Fileless Delivery of Cobalt Strike",
            "categories": [
                "Cobalt Strike",
                "GootKit",
                "Kronos",
                "REvil",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://cdn.pathfactory.com/assets/10555/contents/394789/0dd521f8-aa64-4517-834e-bc852e9ab95d.pdf",
            "date": "2022-04-12",
            "organization": "LIFARS",
            "author": "Vlad Pasca",
            "title": "A Detailed Analysis of The SunCrypt Ransomware",
            "categories": [
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-april-1st-2022-i-can-fight-with-a-keyboard/",
            "date": "2022-04-01",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "The Week in Ransomware - April 1st 2022 - 'I can fight with a keyboard'",
            "categories": [
                "Hive",
                "Dharma",
                "LockBit",
                "STOP",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/suncrypt-ransomware-is-still-alive-and-kicking-in-2022/",
            "date": "2022-03-28",
            "organization": "Bleeping Computer",
            "author": "Bill Toulas",
            "title": "SunCrypt ransomware is still alive and kicking in 2022",
            "categories": [
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://blog.minerva-labs.com/suncrypt-ransomware-gains-new-abilities-in-2022",
            "date": "2022-03-28",
            "organization": "Minerva Labs",
            "author": "Natalie Zargarov",
            "title": "SunCrypt Ransomware Gains New Capabilities in 2022",
            "categories": [
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://medium.com/s2wlab/case-analysis-of-suncrypt-ransomware-negotiation-and-bitcoin-transaction-43a2194ac0bc",
            "date": "2021-09-09",
            "organization": "Medium s2wlab",
            "author": "S2W TALON",
            "title": "Case Analysis of Suncrypt Ransomware Negotiation and Bitcoin Transaction",
            "categories": [
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://medium.com/s2wlab/w4-july-en-story-of-the-week-ransomware-on-the-darkweb-c61965d0386a",
            "date": "2021-07-22",
            "organization": "S2W LAB Inc.",
            "author": "Denise Dasom Kim",
            "title": "W4 July | EN | Story of the week: Ransomware on the Darkweb",
            "categories": [
                "LockBit",
                "SunCrypt"
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
            "data_url": "https://www.coveware.com/blog/ransomware-attack-vectors-shift-as-new-software-vulnerability-exploits-abound",
            "date": "2021-04-26",
            "organization": "CoveWare",
            "author": "CoveWare",
            "title": "Ransomware Attack Vectors Shift as New Software Vulnerability Exploits Abound",
            "categories": [
                "Avaddon",
                "Clop",
                "Conti",
                "DarkSide",
                "Egregor",
                "LockBit",
                "Mailto",
                "Phobos",
                "REvil",
                "Ryuk",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://analyst1.com/blog/ransom-mafia-analysis-of-the-worlds-first-ransomware-cartel",
            "date": "2021-04-07",
            "organization": "ANALYST1",
            "author": "Jon DiMaggio",
            "title": "Ransom Mafia - Analysis of the World's First Ransomware Cartel",
            "categories": [
                "Conti",
                "Egregor",
                "LockBit",
                "Maze",
                "RagnarLocker",
                "SunCrypt",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://analyst1.com/file-assets/RANSOM-MAFIA-ANALYSIS-OF-THE-WORLD%E2%80%99S-FIRST-RANSOMWARE-CARTEL.pdf",
            "date": "2021-04-07",
            "organization": "ANALYST1",
            "author": "Jon DiMaggio",
            "title": "Ransom Mafia Analysis of the World's First Ransomware Cartel",
            "categories": [
                "Conti",
                "Egregor",
                "LockBit",
                "Maze",
                "RagnarLocker",
                "Ryuk",
                "SunCrypt",
                "TA2101",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://pcsxcetrasupport3.wordpress.com/2021/03/28/suncrypt-powershell-obfuscation-shellcode-and-more-yara/",
            "date": "2021-03-28",
            "organization": "PC's Xcetra Support",
            "author": "David Ledbetter",
            "title": "SunCrypt, PowerShell obfuscation, shellcode and more yara",
            "categories": [
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://www.intezer.com/blog/malware-analysis/when-viruses-mutate-did-suncrypt-ransomware-evolve-from-qnapcrypt",
            "date": "2021-03-02",
            "organization": "Intezer",
            "author": "Joakim Kennedy",
            "title": "When Viruses Mutate: Did SunCrypt Ransomware Evolve from QNAPCrypt?",
            "categories": [
                "QNAPCrypt",
                "SunCrypt"
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
            "data_url": "https://blog.chainalysis.com/reports/ransomware-connections-maze-egregor-suncrypt-doppelpaymer",
            "date": "2021-02-04",
            "organization": "Chainanalysis",
            "author": "Chainalysis Team",
            "title": "Blockchain Analysis Shows Connections Between Four of 2020\u2019s Biggest Ransomware Strains",
            "categories": [
                "DoppelPaymer",
                "Egregor",
                "Maze",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://www.accenture.com/us-en/blogs/cyber-defense/evolving-danger-ransomware-extortion",
            "date": "2020-12-16",
            "organization": "Accenture",
            "author": "Paul Mansfield",
            "title": "Tracking and combatting an evolving danger: Ransomware extortion",
            "categories": [
                "DarkSide",
                "Egregor",
                "Maze",
                "Nefilim",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://public.intel471.com/blog/ransomware-as-a-service-2020-ryuk-maze-revil-egregor-doppelpaymer/",
            "date": "2020-11-16",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Ransomware-as-a-service: The pandemic within a pandemic",
            "categories": [
                "Avaddon",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Egregor",
                "Hakbit",
                "Mailto",
                "Maze",
                "Mespinoza",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "SunCrypt",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://medium.com/@sapphirex00/diving-into-the-sun-suncrypt-a-new-neighbour-in-the-ransomware-mafia-d89010c9df83",
            "date": "2020-11-12",
            "organization": "Medium Sapphirex00",
            "author": "Sapphire",
            "title": "Diving into the Sun \u2014 SunCrypt: A new neighbour in the ransomware mafia",
            "categories": [
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://www.hornetsecurity.com/en/security-informationen-en/leakware-ransomware-hybrid-attacks/",
            "date": "2020-10-23",
            "organization": "Hornetsecurity",
            "author": "Hornetsecurity Security Lab",
            "title": "Leakware-Ransomware-Hybrid Attacks",
            "categories": [
                "Avaddon",
                "Clop",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Mailto",
                "Maze",
                "Mespinoza",
                "Nefilim",
                "RagnarLocker",
                "REvil",
                "Sekhmet",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://www.tesorion.nl/en/posts/shining-a-light-on-suncrypts-curious-file-encryption-mechanism/",
            "date": "2020-10-08",
            "organization": "Tesorion",
            "author": "Gijs Rijnders",
            "title": "Shining a light on SunCrypt\u2019s curious file encryption mechanism",
            "categories": [
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://ke-la.com/to-attack-or-not-to-attack-targeting-the-healthcare-sector-in-the-underground-ecosystem/",
            "date": "2020-10-01",
            "organization": "KELA",
            "author": "Victoria Kivilevich",
            "title": "To Attack or Not to Attack: Targeting the Healthcare Sector in the Underground Ecosystem",
            "categories": [
                "Conti",
                "DoppelPaymer",
                "Mailto",
                "Maze",
                "REvil",
                "Ryuk",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/issues/cyber-security-services/insights/what-is-behind-ransomware-attacks-increase.html",
            "date": "2020-09-29",
            "organization": "PWC UK",
            "author": "Andy Auld",
            "title": "What's behind the increase in ransomware attacks this year?",
            "categories": [
                "DarkSide",
                "Avaddon",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FriedEx",
                "Mailto",
                "PwndLocker",
                "QakBot",
                "REvil",
                "Ryuk",
                "SMAUG",
                "SunCrypt",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/suncrypt-ransomware-sheds-light-on-the-maze-ransomware-cartel/",
            "date": "2020-08-26",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "SunCrypt Ransomware sheds light on the Maze ransomware cartel",
            "categories": [
                "SunCrypt"
            ]
        }
    ],
    "mitre": []
};