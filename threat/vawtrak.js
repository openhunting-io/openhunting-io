var threatdata = {
    "name": "Vawtrak",
    "alias": "Vawtrak, Catch, grabnew, NeverQuest",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Credential stealer, Botnet",
    "modified": "2023-03-19",
    "all_data": {
        "tool": "Vawtrak",
        "names": [
            {
                "name": "Vawtrak"
            },
            {
                "name": "Catch"
            },
            {
                "name": "grabnew"
            },
            {
                "name": "NeverQuest"
            }
        ],
        "description": "(Sophos) Vawtrak is an information stealing malware family that is primarily used to gain unauthorised access to bank accounts through online banking websites. Machines infected by Vawtrak form part of a botnet that collectively harvests login credentials for the online accounts to a wide variety of financial and other industry organisations. These stolen credentials are used, in combination with injected code and by proxying through the victim\u2019s machine, to initiate fraudulent transfers to bank accounts controlled by the Vawtrak botnet administrators.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.sophos.com/en-us/medialibrary/PDFs/technical%20papers/sophos-vawtrak-international-crimeware-as-a-service-tpna.pdf",
            "https://www.kaspersky.com/blog/neverquest-trojan-built-to-steal-from-hundreds-of-banks/3247/",
            "https://www.blueliv.com/downloads/network-insights-into-vawtrak-v2.pdf",
            "https://info.phishlabs.com/blog/the-unrelenting-evolution-of-vawtrak",
            "https://threatpost.com/pos-attacks-net-crooks-20-million-stolen-bank-cards/117595/",
            "https://www.fidelissecurity.com/threatgeek/2016/05/vawtrak-trojan-bank-it-evolving",
            "http://thehackernews.com/2017/01/neverquest-fbi-hacker.html",
            "https://blog.fox-it.com/2018/08/09/bokbot-the-rebirth-of-a-banker/",
            "https://www.proofpoint.com/us/threat-insight/post/In-The-Shadows",
            "https://www.crowdstrike.com/blog/sin-ful-spiders-wizard-spider-and-lunar-spider-sharing-the-same-web/",
            "https://lokalhost.pl/gozi_tree.txt"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.vawtrak"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:vawtrak"
        ],
        "uuid": "a40177a1-056d-489e-b91b-8d7fbc03e068",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "vawtrak",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://medium.com/@Ilandu/vawtrak-malware-824818c1837",
            "date": "2023-03-19",
            "organization": "",
            "author": "Ilan Duhin",
            "title": "Vawtrak Analysis",
            "categories": [
                "Vawtrak"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/from-ramnit-to-bumblebee-via-neverquest",
            "date": "2022-08-18",
            "organization": "IBM",
            "author": "Charlotte Hammond",
            "title": "From Ramnit To Bumblebee (via NeverQuest): Similarities and Code Overlap Shed Light On Relationships Between Malware Developers",
            "categories": [
                "BumbleBee",
                "Karius",
                "Ramnit",
                "TrickBot",
                "Vawtrak"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/21/i/ssl-tls-technical-brief/ssl-tls-technical-brief.pdf",
            "date": "2021-09-03",
            "organization": "Trend Micro",
            "author": "Mohamad Mokbel",
            "title": "The State of SSL/TLS Certificate Usage in  Malware C&C Communications",
            "categories": [
                "AdWind",
                "ostap",
                "AsyncRAT",
                "BazarBackdoor",
                "BitRAT",
                "Buer",
                "Chthonic",
                "CloudEyE",
                "Cobalt Strike",
                "DCRat",
                "Dridex",
                "FindPOS",
                "GootKit",
                "Gozi",
                "IcedID",
                "ISFB",
                "Nanocore RAT",
                "Orcus RAT",
                "PandaBanker",
                "Qadars",
                "QakBot",
                "Quasar RAT",
                "Rockloader",
                "ServHelper",
                "Shifu",
                "SManager",
                "TorrentLocker",
                "TrickBot",
                "Vawtrak",
                "Zeus",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.f5.com/labs/articles/education/banking-trojans-a-reference-guide-to-the-malware-family-tree",
            "date": "2020-08-09",
            "organization": "F5 Labs",
            "author": "Remi Cohen",
            "title": "Banking Trojans: A Reference Guide to the Malware Family Tree",
            "categories": [
                "BackSwap",
                "Carberp",
                "Citadel",
                "DanaBot",
                "Dridex",
                "Dyre",
                "Emotet",
                "Gozi",
                "Kronos",
                "PandaBanker",
                "Ramnit",
                "Shylock",
                "SpyEye",
                "Tinba",
                "TrickBot",
                "Vawtrak",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/sin-ful-spiders-wizard-spider-and-lunar-spider-sharing-the-same-web/",
            "date": "2019-02-15",
            "organization": "CrowdStrike",
            "author": "Brendon Feeley",
            "title": "\u201cSin\u201d-ful SPIDERS: WIZARD SPIDER and LUNAR SPIDER Sharing the Same Web",
            "categories": [
                "Dyre",
                "IcedID",
                "TrickBot",
                "Vawtrak",
                "LUNAR SPIDER",
                "WIZARD SPIDER"
            ]
        },
        {
            "data_url": "https://blog.fox-it.com/2018/08/09/bokbot-the-rebirth-of-a-banker/",
            "date": "2018-08-09",
            "organization": "Fox-IT",
            "author": "Alfred Klason",
            "title": "Bokbot: The (re)birth of a banker",
            "categories": [
                "IcedID",
                "Vawtrak"
            ]
        },
        {
            "data_url": "http://thehackernews.com/2017/01/neverquest-fbi-hacker.html",
            "date": "2017-01-22",
            "organization": "The Hacker News",
            "author": "Mohit Kumar",
            "title": "Russian Hacker behind 'NeverQuest' Malware, Wanted by FBI, Is Arrested in Spain",
            "categories": [
                "Vawtrak"
            ]
        },
        {
            "data_url": "https://www.blueliv.com/downloads/network-insights-into-vawtrak-v2.pdf",
            "date": "2016-09",
            "organization": "Blueliv",
            "author": "Blueliv",
            "title": "Chasing Cybercrime: Network insights into Vawtrak v2",
            "categories": [
                "Vawtrak"
            ]
        },
        {
            "data_url": "https://fidelissecurity.com/threatgeek/archive/me-and-mr-robot-tracking-actor-behind-man1-crypter/",
            "date": "2016-07-12",
            "organization": "Fidelis Cybersecurity",
            "author": "Threat Research Team",
            "title": "Me and Mr. Robot: Tracking the Actor Behind the MAN1 Crypter",
            "categories": [
                "Hancitor",
                "Vawtrak"
            ]
        },
        {
            "data_url": "https://threatpost.com/pos-attacks-net-crooks-20-million-stolen-bank-cards/117595/",
            "date": "2016-04-21",
            "organization": "Threatpost",
            "author": "Tom Spring",
            "title": "PoS Attacks Net Crooks 20 Million Stolen Bank Cards",
            "categories": [
                "Vawtrak"
            ]
        },
        {
            "data_url": "https://info.phishlabs.com/blog/the-unrelenting-evolution-of-vawtrak",
            "date": "2014-12-19",
            "organization": "PhishLabs",
            "author": "Don Jackson",
            "title": "The unrelenting evolution of Vawtrak",
            "categories": [
                "Vawtrak"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/dyre-banking-trojan",
            "date": "2014-12-17",
            "organization": "Secureworks",
            "author": "Brett Stone-Gross",
            "title": "Dyre Banking Trojan",
            "categories": [
                "Dyre",
                "Vawtrak",
                "WIZARD SPIDER"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "at",
            "procedure_code": "s0110",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0110",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                }
            ]
        }
    ]
};