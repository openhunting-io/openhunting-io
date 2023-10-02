var threatdata = {
    "name": "SocGholish",
    "alias": "SocGholish, FAKEUPDATES, FakeUpdate",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2023-08-31",
    "all_data": {
        "tool": "SocGholish",
        "names": [
            {
                "name": "SocGholish"
            },
            {
                "name": "FAKEUPDATES"
            },
            {
                "name": "FakeUpdate"
            }
        ],
        "description": "(Menlo Labs) The term \u201cSoc\u201d in the \u201cSocGholish\u201d framework refers to the attack\u2019s use of social engineering toolkits masquerading as a software update. Thus far, Menlo has observed this particular framework using several social engineering themes that impersonate browser updates (Chrome/Firefox), Flash Player updates, and more recently, Microsoft Teams updates.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://www.menlosecurity.com/blog/increase-in-attack-socgholish",
            "https://blog.truesec.com/2021/05/05/are-the-notorious-cyber-criminals-evil-corp-actually-russian-spies/",
            "https://isc.sans.edu/forums/diary/Fake+browser+update+pages+are+still+a+thing/25774/",
            "https://www.trendmicro.com/en_us/research/22/d/Thwarting-Loaders-From-SocGholish-to-BLISTERs-LockBit-Payload.html",
            "https://www.cybereason.com/blog/threat-analysis-report-socgholish-and-zloader-from-fake-updates-and-installers-to-owning-your-systems",
            "https://blog.sucuri.net/2022/08/socgholish-5-years-of-massive-website-infections.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.fakeupdates"
        ],
        "uuid": "9da2592e-91a9-4ee1-a05e-fe50fb16bffe",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "socgholish",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.rapid7.com/blog/post/2023/08/31/fake-update-utilizes-new-idat-loader-to-execute-stealc-and-lumma-infostealers/",
            "date": "2023-08-31",
            "organization": "Rapid7 Labs",
            "author": "Natalie Zargarov",
            "title": "Fake Update Utilizes New IDAT Loader To Execute StealC and Lumma Infostealers",
            "categories": [
                "FAKEUPDATES",
                "Amadey",
                "IDAT Loader",
                "Lumma Stealer",
                "SectopRAT"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/socgholish-diversifies-and-expands-its-malware-staging-infrastructure-to-counter-defenders/",
            "date": "2022-11-07",
            "organization": "SentinelOne",
            "author": "Aleksandar Milenkoski",
            "title": "SocGholish Diversifies and Expands Its Malware Staging Infrastructure to Counter Defenders",
            "categories": [
                "FAKEUPDATES"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/en-us/security/blog/2022/10/27/raspberry-robin-worm-part-of-larger-ecosystem-facilitating-pre-ransomware-activity/",
            "date": "2022-10-27",
            "organization": "Microsoft",
            "author": "Microsoft Security Threat Intelligence",
            "title": "Raspberry Robin worm part of larger ecosystem facilitating pre-ransomware activity",
            "categories": [
                "FAKEUPDATES",
                "BumbleBee",
                "Fauppod",
                "PhotoLoader",
                "Raspberry Robin",
                "Roshtyak"
            ]
        },
        {
            "data_url": "https://research.nccgroup.com/2022/08/19/back-in-black-unlocking-a-lockbit-3-0-ransomware-attack",
            "date": "2022-08-19",
            "organization": "nccgroup",
            "author": "Ross Inman",
            "title": "Back in Black: Unlocking a LockBit 3.0 Ransomware Attack",
            "categories": [
                "FAKEUPDATES",
                "Cobalt Strike",
                "LockBit"
            ]
        },
        {
            "data_url": "https://blog.sucuri.net/2022/08/socgholish-5-years-of-massive-website-infections.html",
            "date": "2022-08-16",
            "organization": "SUCURI",
            "author": "Denis Sinegubko",
            "title": "SocGholish: 5+ Years of Massive Website Infections",
            "categories": [
                "FAKEUPDATES"
            ]
        },
        {
            "data_url": "https://thehackernews.com/2022/07/microsoft-links-raspberry-robin-usb.html?_m=3n%2e009a%2e2800%2ejp0ao0cjb8%2e1shm",
            "date": "2022-07-30",
            "organization": "The Hacker News",
            "author": "Ravie Lakshmanan",
            "title": "Microsoft Links Raspberry Robin USB Worm to Russian Evil Corp Hackers",
            "categories": [
                "FAKEUPDATES",
                "Raspberry Robin"
            ]
        },
        {
            "data_url": "https://killingthebear.jorgetesta.tech/actors/evil-corp",
            "date": "2022-06-13",
            "organization": "Jorge Testa",
            "author": "Jorge Testa",
            "title": "Killing The Bear - Evil Corp",
            "categories": [
                "FAKEUPDATES",
                "Babuk",
                "Blister",
                "DoppelPaymer",
                "Dridex",
                "Entropy",
                "FriedEx",
                "Hades",
                "Macaw",
                "Phoenix Locker",
                "WastedLoader",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-intelligence/2022/06/makemoney-malvertising-campaign-adds-fake-update-template/",
            "date": "2022-06-08",
            "organization": "Malwarebytes Labs",
            "author": "Threat Intelligence Team",
            "title": "MakeMoney malvertising campaign adds fake update template",
            "categories": [
                "FAKEUPDATES"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/unc2165-shifts-to-evade-sanctions",
            "date": "2022-06-02",
            "organization": "Mandiant",
            "author": "Mandiant Intelligence",
            "title": "To HADES and Back: UNC2165 Shifts to LOCKBIT to Evade Sanctions",
            "categories": [
                "FAKEUPDATES",
                "Blister",
                "Cobalt Strike",
                "DoppelPaymer",
                "Dridex",
                "FriedEx",
                "Hades",
                "LockBit",
                "Macaw",
                "MimiKatz",
                "Phoenix Locker",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://medium.com/walmartglobaltech/socgholish-campaigns-and-initial-access-kit-4c4283fea8ee",
            "date": "2022-05-25",
            "organization": "Medium walmartglobaltech",
            "author": "Jason Reaves",
            "title": "SocGholish Campaigns and Initial Access Kit",
            "categories": [
                "FAKEUPDATES",
                "Blister",
                "Cobalt Strike",
                "NetSupportManager RAT"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/05/09/ransomware-as-a-service-understanding-the-cybercrime-gig-economy-and-how-to-protect-yourself",
            "date": "2022-05-09",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "Ransomware-as-a-service: Understanding the cybercrime gig economy and how to protect yourself",
            "categories": [
                "AnchorDNS",
                "BlackCat",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "HelloKitty",
                "Hive",
                "LockBit",
                "REvil",
                "FAKEUPDATES",
                "Griffon",
                "ATOMSILO",
                "BazarBackdoor",
                "BlackCat",
                "BlackMatter",
                "Blister",
                "Cobalt Strike",
                "Conti",
                "DarkSide",
                "Emotet",
                "FiveHands",
                "Gozi",
                "HelloKitty",
                "Hive",
                "IcedID",
                "ISFB",
                "JSSLoader",
                "LockBit",
                "LockFile",
                "Maze",
                "NightSky",
                "Pandora",
                "Phobos",
                "Phoenix Locker",
                "PhotoLoader",
                "QakBot",
                "REvil",
                "Rook",
                "Ryuk",
                "SystemBC",
                "TrickBot",
                "WastedLocker",
                "BRONZE STARLIGHT"
            ]
        },
        {
            "data_url": "https://twitter.com/MsftSecIntel/status/1522690116979855360",
            "date": "2022-05-06",
            "organization": "Twitter (@MsftSecIntel)",
            "author": "Microsoft Security Intelligence",
            "title": "Twitter Thread on initial infeciton of SocGholish/ FAKEUPDATES campaigns lead to BLISTER Loader, CobaltStrike, Lockbit and followed by Hands On Keyboard activity",
            "categories": [
                "FAKEUPDATES",
                "Blister",
                "Cobalt Strike",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/threat-analysis-report-socgholish-and-zloader-from-fake-updates-and-installers-to-owning-your-systems",
            "date": "2022-04-25",
            "organization": "Cybereason",
            "author": "Aleksandar Milenkoski",
            "title": "THREAT ANALYSIS REPORT: SocGholish and Zloader \u2013 From Fake Updates and Installers to Owning Your Systems",
            "categories": [
                "FAKEUPDATES",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.digitalinformationworld.com/2022/04/threatening-redirect-web-service.html",
            "date": "2022-04-10",
            "organization": "Digital Information World",
            "author": "Hura Anwar",
            "title": "Threatening Redirect Web Service Instills Malicious Campaigns In Over 16,500 Websites",
            "categories": [
                "FAKEUPDATES"
            ]
        },
        {
            "data_url": "https://decoded.avast.io/janrubin/parrot-tds-takes-over-web-servers-and-threatens-millions/",
            "date": "2022-04-07",
            "organization": "Avast Decoded",
            "author": "Pavel Nov\u00e1k",
            "title": "Parrot TDS takes over web servers and threatens millions",
            "categories": [
                "FAKEUPDATES",
                "Parrot TDS",
                "Parrot TDS WebShell",
                "NetSupportManager RAT"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/d/thwarting-loaders-from-socgholish-to-blisters-lockbit-payload/iocs-thwarting-loaders-socgholish-blister.txt",
            "date": "2022-04-05",
            "organization": "Trend Micro",
            "author": "Earle Maui Earnshaw",
            "title": "Thwarting Loaders: From SocGholish to BLISTER\u2019s LockBit Payload (IoCs)",
            "categories": [
                "FAKEUPDATES",
                "Blister",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/22/d/Thwarting-Loaders-From-SocGholish-to-BLISTERs-LockBit-Payload.html",
            "date": "2022-04-05",
            "organization": "Trend Micro",
            "author": "Earle Maui Earnshaw",
            "title": "Thwarting Loaders: From SocGholish to BLISTER\u2019s LockBit Payload",
            "categories": [
                "FAKEUPDATES",
                "Blister",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.lac.co.jp/lacwatch/report/20220407_002923.html",
            "date": "2022-04-04",
            "organization": "LAC WATCH",
            "author": "Takehiko Takagen",
            "title": "Confirmation of damage to domestic e-commerce sites, actual situation of Web skimming attacks and examples of countermeasures that Rack thinks (Water Pamola)",
            "categories": [
                "FAKEUPDATES"
            ]
        },
        {
            "data_url": "https://resource.redcanary.com/rs/003-YRU-314/images/2022_ThreatDetectionReport_RedCanary.pdf",
            "date": "2022-03-22",
            "organization": "Red Canary",
            "author": "Red Canary",
            "title": "2022 Threat Detection Report",
            "categories": [
                "FAKEUPDATES",
                "Silver Sparrow",
                "BazarBackdoor",
                "Cobalt Strike",
                "GootKit",
                "Yellow Cockatoo RAT"
            ]
        },
        {
            "data_url": "https://experience.mandiant.com/trending-evil/p/1",
            "date": "2022-02-26",
            "organization": "Mandiant",
            "author": "Mandiant",
            "title": "TRENDING EVIL Q1 2022",
            "categories": [
                "KEYPLUG",
                "FAKEUPDATES",
                "GootLoader",
                "BazarBackdoor",
                "QakBot"
            ]
        },
        {
            "data_url": "https://expel.io/blog/incident-report-spotting-socgholish-wordpress-injection/",
            "date": "2021-07-22",
            "organization": "Expel",
            "author": "Kyle Pellett",
            "title": "Incident report: Spotting SocGholish WordPress injection",
            "categories": [
                "FAKEUPDATES"
            ]
        },
        {
            "data_url": "https://www.menlosecurity.com/blog/increase-in-attack-socgholish",
            "date": "2020-12-17",
            "organization": "Menlo Security",
            "author": "Krishnan Subramanian",
            "title": "Increase In Attack: SocGholish",
            "categories": [
                "FAKEUPDATES"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/they-come-in-the-night-ransomware-deployment-trends",
            "date": "2020-03-16",
            "organization": "Mandiant",
            "author": "Kelli Vanderlee",
            "title": "They Come in the Night: Ransomware Deployment Trends",
            "categories": [
                "FAKEUPDATES"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2018/04/fakeupdates-campaign-leverages-multiple-website-platforms/",
            "date": "2018-04-10",
            "organization": "Malwarebytes Labs",
            "author": "J\u00e9r\u00f4me Segura",
            "title": "\u2018FakeUpdates\u2019 campaign leverages multiple website platforms",
            "categories": [
                "FAKEUPDATES"
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