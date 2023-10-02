var threatdata = {
    "name": "TA505, Graceful Spider, Gold Evergreen",
    "alias": "TA505, Graceful Spider, Gold Evergreen, Gold Tahoe, TEMP.Warlock, ATK 103, SectorJ04, Hive0065, Chimborazo, Spandex Tempest",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "TA505, Graceful Spider, Gold Evergreen",
        "names": [
            {
                "name": "TA505",
                "name-giver": "Proofpoint"
            },
            {
                "name": "Graceful Spider",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Gold Evergreen",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Gold Tahoe",
                "name-giver": "SecureWorks"
            },
            {
                "name": "TEMP.Warlock",
                "name-giver": "FireEye"
            },
            {
                "name": "ATK 103",
                "name-giver": "Thales"
            },
            {
                "name": "SectorJ04",
                "name-giver": "ThreatRecon"
            },
            {
                "name": "Hive0065",
                "name-giver": "IBM"
            },
            {
                "name": "Chimborazo",
                "name-giver": "Microsoft"
            },
            {
                "name": "Spandex Tempest",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "Russia"
        ],
        "motivation": [
            "Financial crime",
            "Financial gain"
        ],
        "first-seen": "2006",
        "description": "(Proofpoint) Proofpoint researchers track a wide range of threat actors involved in both financially motivated cybercrime and state-sponsored actions. One of the more prolific actors that we track \u2013 referred to as TA505 \u2013 is responsible for the largest malicious spam campaigns we have ever observed, distributing instances of the Dridex banking Trojan, Locky ransomware, Jaff ransomware, The Trick banking Trojan, and several others in very high volumes.\n\nBecause TA505 is such a significant part of the email threat landscape, this blog provides a retrospective on the shifting malware, payloads, and campaigns associated with this actor. We examine their use malware such as Jaff, Bart, and Rockloader that appear to be exclusive to this group as well as more widely distributed malware like Dridex and Pony. Where possible, we detail the affiliate models with which they are involved and outline the current state of TA505 campaigns.\n\nTA505 is arguably one of the most significant financially motivated threat actors because of the extraordinary volumes of messages they send. The variety of malware delivered by the group also demonstrates their deep connections to the underground malware scene. At the time of writing, Locky ransomware remains their malware of choice, even as the group continues to experiment with a variety of additional malware.\n\nMuch of the malware from TA505 has been observed to be distributed using {{Avalanche}}, Cutwail (operated by {{Narwhal Spider}}), Necurs (operated by {{Monty Spider}}) and Emotet (operated by {{Mummy Spider, TA542}}).\n\nTA505 also has some infrastructure overlap with {{Buhtrap, Ratopak Spider}} and Group-IB found several relationships with {{Silence, Contract Crew}}.\n\nThe Dridex development appears to have been done by a subgroup named {{Indrik Spider}} and, by extension, {{Doppel Spider}}.\n\nSee also: {{Dungeon Spider}} and {{FIN11}}.",
        "observed-sectors": [
            "Education",
            "Financial",
            "Healthcare",
            "Hospitality",
            "Retail"
        ],
        "observed-countries": [
            "Worldwide"
        ],
        "tools": [
            "Amadey",
            "AndroMut",
            "Bart",
            "CryptoLocker",
            "CryptoMix",
            "Dridex",
            "Dudear",
            "EmailStealer",
            "FlawedAmmyy",
            "FlawedGrace",
            "FlowerPippi",
            "GameOver Zeus",
            "Gelup",
            "Get2",
            "GlobeImposter",
            "Jaff",
            "Kegotip",
            "Locky",
            "MINEBRIDGE",
            "MirrorBlast",
            "Neutrino",
            "Philadelphia",
            "Pony",
            "ReflectiveGnome",
            "RockLoader",
            "RMS",
            "SDBbot",
            "ServHelper",
            "Shifu",
            "Snatch",
            "TeslaGun",
            "TinyMet",
            "Zeus",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2017-10",
                "activity": "On October 10, TA505 introduced their first geo-targeted campaign dropping either Locky or The Trick banking Trojan. In this campaign, HTML files were attached to emails inquiring about the status of an invoice.\nhttps://www.proofpoint.com/us/threat-insight/post/ta505-shifts-times"
            },
            {
                "date": "2018-06",
                "activity": "We first observed an actor embedding SettingContent-ms inside a PDF on June 18. However, on July 16 we observed a particularly large campaign with hundreds of thousands of messages attempting to deliver PDF attachments with an embedded SettingContent-ms file.\nhttps://www.proofpoint.com/us/threat-insight/post/ta505-abusing-settingcontent-ms-within-pdf-files-distribute-flawedammyy-rat"
            },
            {
                "date": "2018-11",
                "activity": "Since November 15, 2018, Proofpoint began observing email campaigns from a specific actor targeting large retail chains, restaurant chains and grocery chains, as well as other organizations in the food and beverage industries.\nhttps://www.proofpoint.com/us/threat-insight/post/ta505-targets-us-retail-industry-personalized-attachments"
            },
            {
                "date": "2018-11",
                "activity": "ServHelper and FlawedGrace \u2013 New malware introduced by TA505\nhttps://www.proofpoint.com/us/threat-insight/post/servhelper-and-flawedgrace-new-malware-introduced-ta505"
            },
            {
                "date": "2018-12",
                "activity": "In mid-December 2018 a spear-phishing campaign was detected as targeting large US-based retailers along with organizations in the food and beverage industry. Masquerading as a legitimate communication sent from a Ricoh printer, the initial email lured victims into opening an attached malicious Microsoft Word document."
            },
            {
                "date": "2018-12",
                "activity": "Last month, 360 Threat Intelligence Center captured multiple phishing emails sent by TA505 Group to target financial institutions. These phishing emails contain Excel attachments with Excel 4.0 Macro embedded and download Backdoor at last.\nhttps://ti.360.net/blog/articles/excel-4.0-macro-utilized-by-ta505-to-target-financial-institutions-recently-en/"
            },
            {
                "date": "2019-04",
                "activity": "LOLBins and a New Backdoor Malware\nhttps://www.cybereason.com/blog/threat-actor-ta505-targets-financial-enterprises-using-lolbins-and-a-new-backdoor-malware"
            },
            {
                "date": "2019-04",
                "activity": "While monitoring their activities, we found that the group is still updating their tactics, techniques, and procedures (TTPs). In April, TA505 targeted Latin American countries Chile and Mexico, and even Italy using either FlawedAmmyy RAT or RMS RAT as payload. By the end of April, we learned that the group started to go after targets in East Asian countries such as China, South Korea, and Taiwan using FlawedAmmyy RAT as its payload.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/shifting-tactics-breaking-down-ta505-groups-use-of-html-rats-and-other-techniques-in-latest-campaigns/"
            },
            {
                "date": "2019-05",
                "activity": "During the last month our Threat Intelligence surveillance team spotted increasing evidence of an operation intensification against the Banking sector.\nhttps://blog.yoroi.company/research/the-stealthy-email-stealer-in-the-ta505-arsenal/"
            },
            {
                "date": "2019-05",
                "activity": "In the last few days, during monitoring activities, Yoroi CERT noticed a suspicious attack against an Italian organization. The malicious email contains a highly suspicious sample which triggered the ZLAB team to investigate its capabilities and its possible attribution, discovering a potential expansion of the TA505 operation.\nhttps://blog.yoroi.company/research/ta505-is-expanding-its-operations/"
            },
            {
                "date": "2019-06",
                "activity": "In June 2019, TA505 appears to have introduced yet another new downloader malware, AndroMut, which has some similarities in code and behavior to Andromeda, a long-established malware family.\nhttps://www.proofpoint.com/us/threat-insight/post/ta505-begins-summer-campaigns-new-pet-malware-downloader-andromut-uae-south"
            },
            {
                "date": "2019-06",
                "activity": "Latest Spam Campaigns from TA505 Now Using New Malware Tools Gelup and FlowerPippi\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/latest-spam-campaigns-from-ta505-now-using-new-malware-tools-gelup-and-flowerpippi/"
            },
            {
                "date": "2019-08",
                "activity": "Given the group\u2019s active campaigns since our updates in June and July, we continued following their latest campaigns. Just like in previous operations, they continue to make small changes, such as targeting other countries, entities, or the combination of techniques used for deployment, for each campaign.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/ta505-at-it-again-variety-is-the-spice-of-servhelper-and-flawedammyy/"
            },
            {
                "date": "2019-09",
                "activity": "In September 2019, Proofpoint researchers observed a prolific threat actor, TA505, sending email campaigns that attempt to deliver and install Get2, a new downloader. Get2 was, in turn, observed downloading FlawedGrace, FlawedAmmyy, Snatch, and SDBbot (a new RAT) as secondary payloads.\nhttps://www.proofpoint.com/us/threat-insight/post/ta505-distributes-new-sdbbot-remote-access-trojan-get2-downloader"
            },
            {
                "date": "2019-12",
                "activity": "Throughout January 2020, FireEye has continued to observe multiple targeted phishing campaigns designed to download and deploy a backdoor we track as MINEBRIDGE.\nhttps://www.fireeye.com/blog/threat-research/2020/01/stomp-2-dis-brilliance-in-the-visual-basics.html"
            },
            {
                "date": "2019",
                "activity": "TA505 hacking crew spent much of 2019 trying to breach South Korea's financial sector\nhttps://www.cyberscoop.com/ta505-south-korea-bank-phishing/"
            },
            {
                "date": "2019",
                "activity": "In this newly discovered campaign from TA505, threat actors targeted German companies with trojanized emails disguised as job applicants. While this activity appeared to be geographically based in Germany, these same techniques could easily be applied to any organization.\nOnce the email attachment was activated, a company's secure credentials and credit card data could be transmitted covertly to the threat actors. In the 2019 iterations of this attack, TA505 used commercial tools to encrypt all the users files, which suggests this recent activity could also lay the groundwork for an infection vector into the company's network to encrypt files.\nhttps://blog.prevailion.com/2020/03/the-curious-case-of-criminal-curriculum.html"
            },
            {
                "date": "2020-01",
                "activity": "Microsoft says that an ongoing TA505 phishing campaign is using attachments featuring HTML redirectors for delivering malicious Excel documents, this being the first time the threat actors have been seen adopting this technique.\nhttps://www.bleepingcomputer.com/news/security/microsoft-detects-new-ta505-malware-attacks-after-short-break/"
            },
            {
                "date": "2020-04",
                "activity": "TA505 Continues to Infect Networks With SDBbot RAT\nhttps://securityintelligence.com/posts/ta505-continues-to-infect-networks-with-sdbbot-rat/"
            },
            {
                "date": "2020-06",
                "activity": "To evade detection, hackers are requiring targets to complete CAPTCHAs\nhttps://arstechnica.com/information-technology/2020/06/to-evade-detection-hackers-are-requiring-targets-to-complete-captchas/"
            },
            {
                "date": "2020-10",
                "activity": "Microsoft is warning that cybercriminals have started to incorporate exploit code for the ZeroLogon vulnerability in their attacks.\nhttps://www.bleepingcomputer.com/news/security/ransomware-gang-now-using-critical-windows-flaw-in-attacks/"
            },
            {
                "date": "2021-06",
                "activity": "Signed MSI files, Raccoon and Amadey are used for installing ServHelper RAT\nhttps://blog.talosintelligence.com/2021/08/raccoon-and-amadey-install-servhelper.html"
            },
            {
                "date": "2021-09",
                "activity": "Explosive New MirrorBlast Campaign Targets Financial Companies\nhttps://blog.morphisec.com/explosive-new-mirrorblast-campaign-targets-financial-companies"
            },
            {
                "date": "2021-09",
                "activity": "Whatta TA: TA505 Ramps Up Activity, Delivers New FlawedGrace Variant\nhttps://www.proofpoint.com/us/blog/threat-insight/whatta-ta-ta505-ramps-activity-delivers-new-flawedgrace-variant"
            },
            {
                "date": "2021-10",
                "activity": "TA505 exploits SolarWinds Serv-U vulnerability (CVE-2021-35211) for initial access\nhttps://research.nccgroup.com/2021/11/08/ta505-exploits-solarwinds-serv-u-vulnerability-cve-2021-35211-for-initial-access/"
            }
        ],
        "counter-operations": [
            {
                "date": "2010-03",
                "activity": "Zeus botnet dealt a blow as ISP Troyak knocked out\nhttps://www.itworld.com/article/2762789/zeus-botnet-dealt-a-blow-as-isp-troyak-knocked-out.html"
            },
            {
                "date": "2010-10",
                "activity": "Operation \u201cTrident Breach\u201d\nFBI announces arrests in $70 million cyber-theft\nhttp://edition.cnn.com/2010/CRIME/10/01/cyber.theft/"
            },
            {
                "date": "2012-03",
                "activity": "John Doe lawsuit against the Zeus operator\nhttp://www.zeuslegalnotice.com/images/Debenham_Decl_Part_1.pdf"
            },
            {
                "date": "2014-06",
                "activity": "Operation \u201cTovar\u201d\nDell SecureWorks Contributes to Efforts Targeting Gameover Zeus and CryptoLocker\nhttps://www.secureworks.com/blog/operation-tovar-dell-secureworks-contributes-to-efforts-targeting-gameover-zeus-and-cryptolocker\nhttps://www.justice.gov/opa/pr/us-leads-multi-national-action-against-gameover-zeus-botnet-and-cryptolocker-ransomware"
            },
            {
                "date": "2016-12",
                "activity": "FACT SHEET: Actions in Response to Russian Malicious Cyber Activity and Harassment\nhttps://obamawhitehouse.archives.gov/the-press-office/2016/12/29/fact-sheet-actions-response-russian-malicious-cyber-activity-and"
            },
            {
                "date": "2022-11",
                "activity": "Suspected Zeus cybercrime ring leader \u2018Tank\u2019 arrested by Swiss police\nhttps://www.bleepingcomputer.com/news/security/suspected-zeus-cybercrime-ring-leader-tank-arrested-by-swiss-police/"
            }
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/threat-actor-profile-ta505-dridex-globeimposter",
            "https://www.secureworks.com/research/evolution-of-the-gold-evergreen-threat-group",
            "https://krebsonsecurity.com/2019/12/inside-evil-corp-a-100m-cybercrime-menace/",
            "https://e.cyberint.com/hubfs/Report%20Legit%20Remote%20Access%20Tools%20Turn%20Into%20Threat%20Actors%20Tools/CyberInt_Legit%20Remote%20Access%20Tools%20Turn%20Into%20Threat%20Actors\u2019%20Tools_Report.pdf",
            "https://www.cybereason.com/blog/threat-actor-ta505-targets-financial-enterprises-using-lolbins-and-a-new-backdoor-malware",
            "https://threatpost.com/ta505-servhelper-malware/140792/",
            "https://blog.prevailion.com/2020/01/ta-505-global-ransomware-criminals.html",
            "https://public.intel471.com/blog/partners-in-crime-north-koreans-and-elite-russian-speaking-cybercriminals/",
            "https://blog.fox-it.com/2020/11/16/ta505-a-brief-history-of-their-time/",
            "https://blog.fox-it.com/2021/12/02/tracking-a-p2p-network-related-to-ta505/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0092/"
        ],
        "uuid": "0ac7cc26-cb85-42f7-a2c1-41762b2e2541",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ta505_graceful_spider_gold_evergreen",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cyberthreat.thalesgroup.com/attackers/ATK103",
            "date": "2022-03-04",
            "organization": "Thales",
            "author": "Thales",
            "title": "ATK103",
            "categories": [
                "TA505"
            ]
        },
        {
            "data_url": "https://blog.fox-it.com/2020/11/16/ta505-a-brief-history-of-their-time/",
            "date": "2020-11-16",
            "organization": "Fox-IT",
            "author": "Antonis Terefos",
            "title": "TA505: A Brief History Of Their Time",
            "categories": [
                "Clop",
                "Get2",
                "SDBbot",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.tenable.com/blog/cve-2020-1472-advanced-persistent-threat-actors-use-zerologon-vulnerability-in-exploit-chain",
            "date": "2020-10-12",
            "organization": "Tenable",
            "author": "Satnam Narang",
            "title": "CVE-2020-1472: Advanced Persistent Threat Actors Use Zerologon Vulnerability In Exploit Chain with Unpatched Vulnerabilities",
            "categories": [
                "TA505"
            ]
        },
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/eager-beaver-a-short-overview-of-the-restless-threat-actor-ta505-609546",
            "date": "2020-10-06",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "Eager Beaver: A Short Overview of the Restless Threat Actor TA505",
            "categories": [
                "Clop",
                "Get2",
                "SDBbot",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/cybersecurity-ta505-returns-with-a-new-bag-of-tricks-602104",
            "date": "2020-06-16",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "TA505 returns with a new bag of tricks",
            "categories": [
                "Clop",
                "Get2",
                "SDBbot",
                "TA505"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/ta505-continues-to-infect-networks-with-sdbbot-rat/",
            "date": "2020-04-14",
            "organization": "SecurityIntelligence",
            "author": "Melissa Frydrych",
            "title": "TA505 Continues to Infect Networks With SDBbot RAT",
            "categories": [
                "SDBbot",
                "TinyMet",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/how-cyber-adversaries-are-adapting-to-exploit-the-global-pandemic",
            "date": "2020-04-08",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "How Cyber Adversaries are Adapting to Exploit the Global Pandemic",
            "categories": [
                "GOLD SOUTHFIELD",
                "TA2101",
                "TA505",
                "WIZARD SPIDER"
            ]
        },
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/cybersecurity-ta505-s-box-of-chocolate-597672",
            "date": "2020-03-26",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "TA505's Box of Chocolate - On Hidden Gems packed with the TA505 Packer",
            "categories": [
                "Amadey",
                "Azorult",
                "Clop",
                "FlawedGrace",
                "Get2",
                "SDBbot",
                "Silence",
                "TinyMet",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-tahoe",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD TAHOE",
            "categories": [
                "Clop",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "SDBbot",
                "ServHelper",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.blueliv.com/cyber-security-and-cyber-threat-intelligence-blog-blueliv/research/servhelper-evolution-and-new-ta505-campaigns/",
            "date": "2019-12-17",
            "organization": "Blueliv",
            "author": "Adri\u00e1n Ruiz",
            "title": "TA505 evolves ServHelper, uses Predator The Thief and Team Viewer Hijacking",
            "categories": [
                "ServHelper",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/ta505-distributes-new-sdbbot-remote-access-trojan-get2-downloader",
            "date": "2019-10-16",
            "organization": "Proofpoint",
            "author": "Dennis Schwarz",
            "title": "TA505 Distributes New SDBbot Remote Access Trojan with Get2 Downloader",
            "categories": [
                "Get2",
                "SDBbot",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/sites/default/files/ta505_timeline_final4_0.png",
            "date": "2019-10-16",
            "organization": "Proofpoint",
            "author": "Proofpoint",
            "title": "TA505 Timeline",
            "categories": [
                "TA505"
            ]
        },
        {
            "data_url": "https://threatrecon.nshc.net/2019/08/29/sectorj04-groups-increased-activity-in-2019/",
            "date": "2019-08-29",
            "organization": "ThreatRecon",
            "author": "ThreatRecon Team",
            "title": "SectorJ04 Group\u2019s Increased Activity in 2019",
            "categories": [
                "FlawedAmmyy",
                "ServHelper",
                "TA505"
            ]
        },
        {
            "data_url": "https://blog.yoroi.company/research/the-stealthy-email-stealer-in-the-ta505-arsenal/",
            "date": "2019-05-16",
            "organization": "Yoroi",
            "author": "Luigi Martire",
            "title": "The Stealthy Email Stealer in the TA505 Arsenal",
            "categories": [
                "TA505"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/threat-actor-ta505-targets-financial-enterprises-using-lolbins-and-a-new-backdoor-malware",
            "date": "2019-04-25",
            "organization": "Cybereason",
            "author": "Cybereason Nocturnus",
            "title": "Threat Actor TA505 Targets Financial Enterprises Using LOLBins and a New Backdoor Malware",
            "categories": [
                "ServHelper",
                "TA505"
            ]
        },
        {
            "data_url": "https://threatpost.com/ta505-servhelper-malware/140792/",
            "date": "2019-01-11",
            "organization": "Threatpost",
            "author": "Tara Seals",
            "title": "TA505 Crime Gang Debuts Brand-New ServHelper Backdoor",
            "categories": [
                "TA505"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/ta505-group-adopts-new-servhelper-backdoor-and-flawedgrace-rat/",
            "date": "2019-01-10",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "TA505 Group Adopts New ServHelper Backdoor and FlawedGrace RAT",
            "categories": [
                "TA505"
            ]
        },
        {
            "data_url": "https://e.cyberint.com/hubfs/Report%20Legit%20Remote%20Access%20Tools%20Turn%20Into%20Threat%20Actors%20Tools/CyberInt_Legit%20Remote%20Access%20Tools%20Turn%20Into%20Threat%20Actors'%20Tools_Report.pdf",
            "date": "2019",
            "organization": "CyberInt",
            "author": "CyberInt",
            "title": "Legit Remote Admin Tools Turn into Threat Actors' Tools",
            "categories": [
                "RMS",
                "ServHelper",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/threat-actor-profile-ta505-dridex-globeimposter",
            "date": "2017-09-27",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "Threat Actor Profile: TA505, From Dridex to GlobeImposter",
            "categories": [
                "TA505"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "ta505",
            "procedure_code": "g0092",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0092",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/001",
                    "technique_name": "acquire infrastructure : domains",
                    "technique_description": "adversaries may acquire domains that can be used during targeting. domain names are the human readable names used to represent one or more ip addresses. they can be purchased or, in some cases, acquired for free.",
                    "procedure_description": "ta505 has registered domains to impersonate services such as dropbox to distribute malware.[65]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1588.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1588/001",
                    "technique_name": "obtain capabilities : malware",
                    "technique_description": "adversaries may buy, steal, or download malware that can be used during targeting. malicious software can include payloads, droppers, post-compromise tools, backdoors, packers, and c2 protocols. adversaries may acquire malware to support their operations, obtaining a means for maintaining control of remote machines, evading defenses, and executing post-compromise behaviors.",
                    "procedure_description": "ta505 has used malware such as azorult and cobalt strike in their operations.[15]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1588.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1588/002",
                    "technique_name": "obtain capabilities : tool",
                    "technique_description": "adversaries may buy, steal, or download software tools that can be used during targeting. tools can be open or closed source, free or commercial. a tool can be used for malicious purposes by an adversary, but (unlike malware) were not intended to be used for those purposes (ex: psexec). tool acquisition can involve the procurement of commercial software licenses, including for red teaming tools such as cobalt strike. commercial software may be obtained through purchase, stealing licenses (or licensed copies of the software), or cracking trial versions.",
                    "procedure_description": "ta505 has used a variety of tools in their operations, including adfind, bloodhound, mimikatz, and powersploit.[91]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1608.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1608/001",
                    "technique_name": "stage capabilities : upload malware",
                    "technique_description": "adversaries may upload malware to third-party or adversary controlled infrastructure to make it accessible during targeting. malicious software can include payloads, droppers, post-compromise tools, backdoors, and a variety of other malicious content. adversaries may upload malware to support their operations, such as making a payload available to a victim network to enable ingress tool transfer by placing it on an internet accessible web server.",
                    "procedure_description": "ta505 has staged malware on actor-controlled domains.[25]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/001",
                    "technique_name": "phishing : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. spearphishing attachment is a specific variant of spearphishing. spearphishing attachment is different from other forms of spearphishing in that it employs the use of malware attached to an email. all forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. in this scenario, adversaries attach a file to the spearphishing email and usually rely upon user execution to gain execution. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "ta505 has used spearphishing emails with malicious attachments to initially compromise victims.[213][214][215][216][217][218][219][220][221]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/002",
                    "technique_name": "phishing : spearphishing link",
                    "technique_description": "adversaries may send spearphishing emails with a malicious link in an attempt to gain access to victim systems. spearphishing with a link is a specific variant of spearphishing. it is different from other forms of spearphishing in that it employs the use of links to download malware contained in email, instead of attaching malicious files to the email itself, to avoid defenses that may inspect email attachments. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "ta505 has sent spearphishing emails containing malicious links.[99][100][101][102]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "ta505 has used stolen domain admin accounts to compromise additional hosts.[23]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "ta505 has used powershell to download and execute malware and reconnaissance scripts.[221][222][223][224]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "ta505 has executed commands using cmd.exe.[321]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "ta505 has used vbs for code execution.[154][155][156][157]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/007",
                    "technique_name": "command and scripting interpreter : javascript",
                    "technique_description": "adversaries may abuse various implementations of javascript for execution. javascript (js) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though js can be executed in runtime environments outside the browser.",
                    "procedure_description": "ta505 has used javascript for code execution.[63][64]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1559.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1559/002",
                    "technique_name": "inter-process communication : dynamic data exchange",
                    "technique_description": "adversaries may use windows dynamic data exchange (dde) to execute arbitrary commands. dde is a client-server protocol for one-time and/or continuous inter-process communication (ipc) between applications. once a link is established, applications can autonomously exchange transactions consisting of strings, warm data links (notifications when a data item changes), hot data links (duplications of changes to a data item), and requests for command execution.",
                    "procedure_description": "ta505 has leveraged malicious word documents that abused dde.[32]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "ta505 has deployed payloads that use windows api calls on a compromised host.[168]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/001",
                    "technique_name": "user execution : malicious link",
                    "technique_description": "an adversary may rely upon a user clicking a malicious link in order to gain execution. users may be subjected to social engineering to get them to click on a link that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing link. clicking on a link may also lead to other execution techniques such as exploitation of a browser or application vulnerability via exploitation for client execution. links may also lead users to download files that require execution via malicious file.",
                    "procedure_description": "ta505 has used lures to get users to click links in emails and attachments. for example, ta505 makes their malware look like legitimate microsoft word documents, .pdf and/or .lnk files. [93][94][95][96][97][98][99][100]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/002",
                    "technique_name": "user execution : malicious file",
                    "technique_description": "an adversary may rely upon a user opening a malicious file in order to gain execution. users may be subjected to social engineering to get them to open a file that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing attachment. adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, and .cpl.",
                    "procedure_description": "ta505 has used lures to get users to enable content in malicious attachments and execute malicious files contained in archives. for example, ta505 makes their malware look like legitimate microsoft word documents, .pdf and/or .lnk files. [226][227][228][229][230][231][232][233][234]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "ta505 has used stolen domain admin accounts to compromise additional hosts.[23]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "ta505 has been seen injecting a dll into winword.exe.[67]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "ta505 has used stolen domain admin accounts to compromise additional hosts.[23]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "ta505 has decrypted packed dlls with an xor key.[225]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/001",
                    "technique_name": "impair defenses : disable or modify tools",
                    "technique_description": "adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. this may take many forms, such as killing security software processes or services, modifying / deleting registry keys or configuration files so that tools do not operate properly, or other methods to interfere with security tools scanning or reporting information. adversaries may also disable updates to prevent the latest security patches from reaching tools on victim systems.",
                    "procedure_description": "ta505 has used malware to disable windows defender.[85]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1112",
                    "technique_link": "https://attack.mitre.org/techniques/T1112",
                    "technique_name": "modify registry",
                    "technique_description": "adversaries may interact with the windows registry to hide configuration information within registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.",
                    "procedure_description": "ta505 has used malware to disable windows defender through modification of the registry.[157]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "ta505 has password-protected malicious word documents.[323]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/002",
                    "technique_name": "obfuscated files or information : software packing",
                    "technique_description": "adversaries may perform software packing or virtual machine software protection to conceal their code. software packing is a method of compressing or encrypting an executable. packing an executable changes the file signature in an attempt to avoid signature-based detection. most decompression techniques decompress the executable code in memory. virtual machine software protection translates an executable's original code into a special format that only a special virtual machine can run. a virtual machine is then called to run this code.",
                    "procedure_description": "ta505 has used upx to obscure malicious code.[75]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/010",
                    "technique_name": "obfuscated files or information : command obfuscation",
                    "technique_description": "adversaries may obfuscate content during command execution to impede detection. command-line obfuscation is a method of making strings and patterns within commands and scripts more difficult to signature and analyze. this type of obfuscation can be included within commands executed by delivered payloads (e.g., phishing and drive-by compromise) or interactively via command and scripting interpreter.",
                    "procedure_description": "ta505 has used base64 encoded powershell commands.[82][83]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "ta505 has been seen injecting a dll into winword.exe.[67]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "ta505 has signed payloads with code signing certificates from thawte and sectigo.[69][70][71]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/005",
                    "technique_name": "subvert trust controls : mark-of-the-web bypass",
                    "technique_description": "adversaries may abuse specific file formats to subvert mark-of-the-web (motw) controls. in windows, when files are downloaded from the internet, they are tagged with a hidden ntfs alternate data stream (ads) named zone.identifier with a specific value known as the motw. files that are tagged with motw are protected and cannot perform certain actions. for example, starting in ms office 10, if a ms office file has the motw, it will open in protected view. executables tagged with the motw will be processed by windows defender smartscreen that compares files with an allowlist of well-known executables. if the file is not known/trusted, smartscreen will prevent the execution and warn the user not to run it.",
                    "procedure_description": "ta505 has used .iso files to deploy malicious .lnk files.[8]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/007",
                    "technique_name": "system binary proxy execution : msiexec",
                    "technique_description": "adversaries may abuse msiexec.exe to proxy execution of malicious payloads. msiexec.exe is the command-line utility for the windows installer and is thus commonly associated with executing installation packages (.msi). the msiexec.exe binary may also be digitally signed by microsoft.",
                    "procedure_description": "ta505 has used msiexec to download and execute malicious windows installer files.[24][25][26]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/011",
                    "technique_name": "system binary proxy execution : rundll32",
                    "technique_description": "adversaries may abuse rundll32.exe to proxy execution of malicious code. using rundll32.exe, vice executing directly (i.e. shared modules), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. rundll32.exe is commonly associated with executing dll payloads (ex: rundll32.exe {dllname, dllfunction}).",
                    "procedure_description": "ta505 has leveraged rundll32.exe to execute malicious dlls.[97][89]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "ta505 has used stolen domain admin accounts to compromise additional hosts.[23]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "ta505 has used malware to gather credentials from internet explorer.[86]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1552.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1552/001",
                    "technique_name": "unsecured credentials : credentials in files",
                    "technique_description": "adversaries may search local file systems and remote file shares for files containing insecurely stored credentials. these can be files created by users to store their own credentials, shared credential stores for a group of individuals, configuration files containing passwords for a system or service, or source code/binary files containing embedded passwords.",
                    "procedure_description": "ta505 has used malware to gather credentials from ftp clients and outlook.[34]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/003",
                    "technique_name": "account discovery : email account",
                    "technique_description": "adversaries may attempt to get a listing of email addresses and accounts. adversaries may try to dump exchange address lists such as global address lists (gals).",
                    "procedure_description": "ta505 has used the tool emailstealer to steal and send lists of e-mail addresses to a remote server.[14]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069",
                    "technique_link": "https://attack.mitre.org/techniques/T1069",
                    "technique_name": "permission groups discovery",
                    "technique_description": "adversaries may attempt to discover group and permission settings. this information can help adversaries determine which user accounts and groups are available, the membership of users in particular groups, and which users and groups have elevated permissions.",
                    "procedure_description": "ta505 has used tinymet to enumerate members of privileged groups.[9] ta505 has also run net group /domain.[10]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "ta505 has used http to communicate with c2 nodes.[329]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1568.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1568/001",
                    "technique_name": "dynamic resolution : fast flux dns",
                    "technique_description": "adversaries may use fast flux dns to hide a command and control channel behind an array of rapidly changing ip addresses linked to a single domain resolution. this technique uses a fully qualified domain name, with multiple ip addresses assigned to it which are swapped with high frequency, using a combination of round robin ip addressing and short time-to-live (ttl) for a dns resource record.",
                    "procedure_description": "ta505 has used fast flux to mask botnets by distributing payloads across multiple ips.[8]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "ta505 has downloaded additional malware to execute on victim systems.[433][401][434]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1486",
                    "technique_link": "https://attack.mitre.org/techniques/T1486",
                    "technique_name": "data encrypted for impact",
                    "technique_description": "adversaries may encrypt data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources. they can attempt to render stored data inaccessible by encrypting files or data on local and remote drives and withholding access to a decryption key. this may be done in order to extract monetary compensation from a victim in exchange for decryption or a decryption key (ransomware) or to render data permanently inaccessible in cases where the key is not saved or transmitted.",
                    "procedure_description": "ta505 has used a wide variety of ransomware, such as clop, locky, jaff, bart, philadelphia, and globeimposter, to encrypt victim files and demand a ransom payment.[86]"
                }
            ]
        },
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
        },
        {
            "procedure_name": "tor",
            "procedure_code": "s0183",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0183",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "tor encapsulates traffic in multiple layers of encryption, using tls by default.[59]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "traffic traversing the tor network will be forwarded to multiple nodes before exiting the tor network and continuing on to its intended destination.[21]"
                }
            ]
        }
    ]
};