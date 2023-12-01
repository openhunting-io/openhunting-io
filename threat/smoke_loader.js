var threatdata = {
    "name": "Smoke Loader",
    "alias": "Smoke Loader, SmokeLoader, Smoke, Dofoil, Sharik",
    "category": "Malware",
    "type": "Botnet, Downloader, Miner",
    "modified": "2023-11-19",
    "all_data": {
        "tool": "Smoke Loader",
        "names": [
            {
                "name": "Smoke Loader"
            },
            {
                "name": "SmokeLoader"
            },
            {
                "name": "Smoke"
            },
            {
                "name": "Dofoil"
            },
            {
                "name": "Sharik"
            }
        ],
        "description": "The SmokeLoader family is a generic backdoor with a range of capabilities which depend on the modules included in any given build of the malware. The malware is delivered in a variety of ways and is broadly associated with criminal activity. The malware frequently tries to hide its C2 activity by generating requests to legitimate sites such as microsoft.com, bing.com, adobe.com, and others. Typically the actual Download returns an HTTP 404 but still contains data in the Response Body.\n\nSmokeLoader, in addition to being used to download standalone coinminers, is available on underground markets with a built-in coinminer module for an additional fee.",
        "category": "Malware",
        "type": [
            "Botnet",
            "Downloader",
            "Miner"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/analysis-of-smoke-loader-in-new-tsunami-campaign/",
            "https://cloudblogs.microsoft.com/microsoftsecure/2018/04/04/hunting-down-dofoil-with-windows-defender-atp/",
            "https://malwarebreakdown.com/2017/04/03/shadow-server-domains-leads-to-rig-exploit-kit-dropping-smoke-loader-which-downloads-neutrino-bot-aka-kasidet/",
            "https://blog.talosintelligence.com/2018/07/smoking-guns-smoke-loader-learned-new.html",
            "https://blog.malwarebytes.com/threat-analysis/2016/10/new-looking-sundown-ek-drops-smoke-loader-kronos-banker/",
            "https://info.phishlabs.com/blog/smoke-loader-adds-additional-obfuscation-methods-to-mitigate-analysis",
            "https://www.spamhaus.org/news/article/774/smoke-loader-improves-encryption-after-microsoft-spoils-its-campaign",
            "https://eternal-todo.com/blog/smokeloader-analysis-yulia-photo",
            "https://blog.malwarebytes.com/cybercrime/2018/01/fake-spectre-and-meltdown-patch-pushes-smoke-loader/",
            "https://blog.malwarebytes.com/threat-analysis/2016/08/smoke-loader-downloader-with-a-smokescreen-still-alive/",
            "https://int0xcc.svbtle.com/a-taste-of-our-own-medicine-how-smokeloader-is-deceiving-dynamic-configuration-extraction-by-using-binary-code-as-bait",
            "https://www.cert.pl/en/news/single/dissecting-smoke-loader/",
            "https://blog.badtrace.com/post/anti-hooking-checks-of-smokeloader-2018/",
            "http://www.intel471.com/blog/cobalt-strike-cybercriminals-trickbot-qbot-hancitor",
            "https://www.fortinet.com/blog/threat-research/smokeloader-using-old-vulnerabilities",
            "https://www.secureworks.com/blog/smoke-loader-drops-whiffy-recon-wi-fi-scanning-and-geolocation-malware"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0226/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.smokeloader"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Smoke%20Loader"
        ],
        "uuid": "c0fb51f1-5f2e-4efc-a59f-70ca9a5f0744",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "smoke_loader",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://embee-research.ghost.io/combining-pivot-points-to-identify-malware-infrastructure-redline-smokeloader-and-cobalt-strike/",
            "date": "2023-11-19",
            "organization": "Twitter (@embee_research)",
            "author": "Embee_research",
            "title": "Combining Pivot Points to Identify Malware Infrastructure - Redline, Smokeloader and Cobalt Strike",
            "categories": [
                "Amadey",
                "Cobalt Strike",
                "RedLine Stealer",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.rnbo.gov.ua/files/2023_YEAR/CYBERCENTER/october/The%20Surge%20in%20Smokeloader%20Attacks%20on%20Ukrainian%20Institutions%20UA.pdf",
            "date": "2023-10-24",
            "organization": "National Security and Defense Council of Ukraine",
            "author": "Organization of the National Security and Defense Council of Ukraine",
            "title": "The Surge in SmokeLoader Attacks on Ukrainian Institutions",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://blog.cluster25.duskrise.com/2023/10/12/cve-2023-38831-russian-attack",
            "date": "2023-10-12",
            "organization": "Cluster25",
            "author": "Cluster25 Threat Intel Team",
            "title": "CVE-2023-38831 Exploited by Pro-Russia Hacking Groups in RU-UA Conflict Zone for Credential Harvesting Operations",
            "categories": [
                "Agent Tesla",
                "Crimson RAT",
                "Nanocore RAT",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://inside.harfanglab.io/blog/articles/cyber-threat-intelligence/loader-galore-taskloader-at-the-start-of-a-pay-per-install-infection-chain/",
            "date": "2023-09-28",
            "organization": "HarfangLab",
            "author": "Claudio Teixeira",
            "title": "Loader Galore - TaskLoader at the start of a Pay-per-Install Infection Chain",
            "categories": [
                "CustomerLoader",
                "Fabookie",
                "LgoogLoader",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.logpoint.com/en/blog/emerging-threat/defending-against-8base/",
            "date": "2023-08-23",
            "organization": "Logpoint",
            "author": "Anish Bogati",
            "title": "Defending Against 8base: Uncovering Their Arsenal and Crafting Responses",
            "categories": [
                "8Base",
                "SmokeLoader",
                "SystemBC"
            ]
        },
        {
            "data_url": "https://www.acronis.com/en-sg/cyber-protection-center/posts/8base-ransomware-stays-unseen-for-a-year/",
            "date": "2023-07-17",
            "organization": "Acronis",
            "author": "Acronis Security",
            "title": "8Base ransomware stays unseen for a year",
            "categories": [
                "8Base",
                "Phobos",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/security/2023/06/8base-ransomware-a-heavy-hitting-player.html",
            "date": "2023-06-28",
            "organization": "vmware",
            "author": "Deborah Snyder",
            "title": "8Base Ransomware: A Heavy Hitting Player",
            "categories": [
                "8Base",
                "Phobos",
                "SmokeLoader",
                "SystemBC"
            ]
        },
        {
            "data_url": "https://embee-research.ghost.io/smokeloader-analysis-with-procmon/",
            "date": "2023-06-24",
            "organization": "Twitter (@embee_research)",
            "author": "Embee_research",
            "title": "SmokeLoader - Malware Analysis and Decoding With Procmon",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.prodaft.com/m/reports/RIG___TLP_CLEAR-1.pdf",
            "date": "2023-02-27",
            "organization": "PRODAFT Threat Intelligence",
            "author": "PRODAFT",
            "title": "RIG Exploit Kit: In-Depth Analysis",
            "categories": [
                "Dridex",
                "IcedID",
                "ISFB",
                "PureCrypter",
                "Raccoon",
                "RecordBreaker",
                "RedLine Stealer",
                "Royal Ransom",
                "Silence",
                "SmokeLoader",
                "Zloader"
            ]
        },
        {
            "data_url": "https://malwarology.substack.com/p/malicious-packer-pkr_ce1a?r=1lslzd",
            "date": "2022-11-19",
            "organization": "Malwarology",
            "author": "Robert Simmons",
            "title": "Malicious Packer pkr_ce1a",
            "categories": [
                "SmokeLoader",
                "Vidar"
            ]
        },
        {
            "data_url": "https://kcm.trellix.com/corporate/index?page=content&id=KB96190&locale=en_US",
            "date": "2022-11-17",
            "organization": "Trellix",
            "author": "Trelix",
            "title": "Trellix Insights: SmokeLoader Exploits Old Vulnerabilities to Drop zgRAT",
            "categories": [
                "SmokeLoader",
                "zgRAT"
            ]
        },
        {
            "data_url": "https://youtu.be/QOypldw6hnY?t=3237",
            "date": "2022-10-07",
            "organization": "YouTube (BSides Portland)",
            "author": "Pim Trouerbach",
            "title": "SmokeLoader - The Pandora's box of Tricks",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.team-cymru.com/post/seychelles-seychelles-on-the-c-2-shore",
            "date": "2022-09-29",
            "organization": "Team Cymru",
            "author": "S2 Research Team",
            "title": "Seychelles, Seychelles, on the C(2) Shore: An overview of a bulletproof hosting provider named ELITETEAM.",
            "categories": [
                "Amadey",
                "Raccoon",
                "RedLine Stealer",
                "SmokeLoader",
                "STOP"
            ]
        },
        {
            "data_url": "https://securelist.com/nullmixer-oodles-of-trojans-in-a-single-dropper/107498/",
            "date": "2022-09-26",
            "organization": "Kaspersky",
            "author": "Haim Zigel",
            "title": "NullMixer: oodles of Trojans in a single dropper",
            "categories": [
                "ColdStealer",
                "DanaBot",
                "GCleaner",
                "Nullmixer",
                "PrivateLoader",
                "PseudoManuscrypt",
                "RedLine Stealer",
                "SmokeLoader",
                "Vidar"
            ]
        },
        {
            "data_url": "https://blog.sekoia.io/privateloader-the-loader-of-the-prevalent-ruzki-ppi-service/",
            "date": "2022-09-15",
            "organization": "Sekoia",
            "author": "Threat & Detection Research Team",
            "title": "PrivateLoader: the loader of the prevalent ruzki PPI service",
            "categories": [
                "Agent Tesla",
                "Coinminer",
                "DanaBot",
                "DCRat",
                "Eternity Stealer",
                "Glupteba",
                "Mars Stealer",
                "NetSupportManager RAT",
                "Nymaim",
                "Nymaim2",
                "Phoenix Keylogger",
                "PrivateLoader",
                "Raccoon",
                "RedLine Stealer",
                "SmokeLoader",
                "Socelars",
                "STOP",
                "Vidar",
                "YTStealer"
            ]
        },
        {
            "data_url": "https://www.bitsight.com/blog/tracking-privateloader-malware-distribution-service",
            "date": "2022-08-31",
            "organization": "BitSight",
            "author": "Andr\u00e9 Tavares",
            "title": "Tracking PrivateLoader: Malware Distribution Service",
            "categories": [
                "PrivateLoader",
                "RedLine Stealer",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://github.com/vc0RExor/Quick-Analysis/blob/main/SmokeLoader/SmokeLoader.md",
            "date": "2022-08-30",
            "organization": "Github (vc0RExor)",
            "author": "vc0RExor",
            "title": "SmokeLoader - Quick-Analysis",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://research.openanalysis.net/smoke/smokeloader/loader/config/yara/triage/2022/08/25/smokeloader.html",
            "date": "2022-08-25",
            "organization": "OALabs",
            "author": "Sergei Frankoff",
            "title": "SmokeLoader Triage Taking a look how Smoke Loader works",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/smokeloader-using-old-vulnerabilities",
            "date": "2022-08-08",
            "organization": "Fortinet",
            "author": "James Slaughter",
            "title": "Life After Death - SmokeLoader Continues to Haunt Using Old Vulnerabilities",
            "categories": [
                "SmokeLoader",
                "zgRAT"
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
            "data_url": "https://blogs.blackberry.com/en/2022/07/smokeloader-malware-used-to-augment-amadey-infostealer",
            "date": "2022-07-29",
            "organization": "Blackberry",
            "author": "BlackBerry Research & Intelligence Team",
            "title": "SmokeLoader Malware Used to Augment Amadey Infostealer",
            "categories": [
                "Amadey",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://de.darktrace.com/blog/privateloader-network-based-indicators-of-compromise",
            "date": "2022-07-27",
            "organization": "Darktrace",
            "author": "Sam Lister",
            "title": "PrivateLoader: Network-Based Indicators of Compromise",
            "categories": [
                "PrivateLoader",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/36634/",
            "date": "2022-07-21",
            "organization": "AhnLab",
            "author": "ASEC",
            "title": "Amadey Bot Being Distributed Through SmokeLoader",
            "categories": [
                "Amadey",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://securitynews.sonicwall.com/xmlpost/html-application-hta-files-are-being-used-to-distribute-smoke-loader-malware/",
            "date": "2022-06-21",
            "organization": "SonicWall",
            "author": "SonicWall",
            "title": "HTML Application Files are being used to distribute Smoke Loader Malware",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/sites/default/files/publications/AA22-110A_Joint_CSA_Russian_State-Sponsored_and_Criminal_Cyber_Threats_to_Critical_Infrastructure_4_20_22_Final.pdf",
            "date": "2022-04-20",
            "organization": "CISA",
            "author": "CISA",
            "title": "AA22-110A Joint CSA: Russian State-Sponsored and Criminal Cyber  Threats to Critical Infrastructure",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "DanaBot",
                "DoppelDridex",
                "Emotet",
                "EternalPetya",
                "GoldMax",
                "Industroyer",
                "Sality",
                "SmokeLoader",
                "TrickBot",
                "Triton",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-110a",
            "date": "2022-04-20",
            "organization": "CISA",
            "author": "CISA",
            "title": "Alert (AA22-110A): Russian State-Sponsored and Criminal Cyber Threats to Critical Infrastructure",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "DanaBot",
                "DoppelDridex",
                "Emotet",
                "EternalPetya",
                "GoldMax",
                "Industroyer",
                "Sality",
                "SmokeLoader",
                "TrickBot",
                "Triton",
                "Zloader",
                "Killnet"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/33600/",
            "date": "2022-04-12",
            "organization": "AhnLab",
            "author": "ASEC Analysis Team",
            "title": "SystemBC Being Used by Various Attackers",
            "categories": [
                "Emotet",
                "SmokeLoader",
                "SystemBC"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/new-golang-botnet-empties-windows-users-cryptocurrency-wallets/",
            "date": "2022-02-18",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "New Golang botnet empties Windows users\u2019 cryptocurrency wallets",
            "categories": [
                "Anubis Loader",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2022/02/threat-thursday-arkei-infostealer",
            "date": "2022-02-17",
            "organization": "Blackberry",
            "author": "BlackBerry Research & Intelligence Team",
            "title": "Threat Thursday: Arkei Infostealer Expands Reach Using SmokeLoader to Target Crypto Wallets and MFA",
            "categories": [
                "Arkei Stealer",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/privateloader-malware",
            "date": "2022-02-08",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "PrivateLoader: The first step in many malware schemes",
            "categories": [
                "Dridex",
                "Kronos",
                "LockBit",
                "Nanocore RAT",
                "NjRAT",
                "PrivateLoader",
                "Quasar RAT",
                "RedLine Stealer",
                "Remcos",
                "SmokeLoader",
                "STOP",
                "Tofsee",
                "TrickBot",
                "Vidar"
            ]
        },
        {
            "data_url": "https://www.silentpush.com/blog/privacy-tools-not-for-you",
            "date": "2022",
            "organization": "Silent Push",
            "author": "Silent Push",
            "title": "Privacy tools (not) for you",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://suvaditya.one/malware-analysis/smokeloader/",
            "date": "2021-06-17",
            "organization": "",
            "author": "Suvaditya Sur",
            "title": "Analysis of SmokeLoader",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://drive.google.com/file/d/13BsHZn-KVLhwrtgS2yKJAM2_U_XZlwoD/view",
            "date": "2021-06-10",
            "organization": "ZAYOTEM",
            "author": "Fatih YILMAZ",
            "title": "SmokeLoader Technical Analysis Report",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.deepinstinct.com/2021/05/26/deep-dive-packing-software-cryptone/",
            "date": "2021-05-26",
            "organization": "DeepInstinct",
            "author": "Ron Ben Yizhak",
            "title": "A Deep Dive into Packing Software CryptOne",
            "categories": [
                "Cobalt Strike",
                "Dridex",
                "Emotet",
                "Gozi",
                "ISFB",
                "Mailto",
                "QakBot",
                "SmokeLoader",
                "WastedLocker",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.intel471.com/blog/Cobalt-strike-cybercriminals-trickbot-qbot-hancitor",
            "date": "2021-05-19",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Look how many cybercriminals love Cobalt Strike",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Hancitor",
                "QakBot",
                "SmokeLoader",
                "SystemBC",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/paas-or-how-hackers-evade-antivirus-software/",
            "date": "2021-04-12",
            "organization": "PTSecurity",
            "author": "PTSecurity",
            "title": "PaaS, or how hackers evade antivirus software",
            "categories": [
                "Amadey",
                "Bunitu",
                "Cerber",
                "Dridex",
                "ISFB",
                "KPOT Stealer",
                "Mailto",
                "Nemty",
                "Phobos",
                "Pony",
                "Predator The Thief",
                "QakBot",
                "Raccoon",
                "RTM",
                "SmokeLoader",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.blackberry.com/content/dam/blackberry-com/asset/enterprise/pdf/direct/report-bb-2021-threat-report.pdf",
            "date": "2021-03-21",
            "organization": "Blackberry",
            "author": "Blackberry Research",
            "title": "2021 Threat Report",
            "categories": [
                "Bashlite",
                "FritzFrog",
                "IPStorm",
                "Mirai",
                "Tsunami",
                "elf.wellmess",
                "AppleJeus",
                "Dacls",
                "EvilQuest",
                "Manuscrypt",
                "Astaroth",
                "BazarBackdoor",
                "Cerber",
                "Cobalt Strike",
                "Emotet",
                "FinFisher RAT",
                "Kwampirs",
                "MimiKatz",
                "NjRAT",
                "Ryuk",
                "SmokeLoader",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/now-you-see-it-now-you-dont-copperstealer-performs-widespread-theft",
            "date": "2021-03-18",
            "organization": "Proofpoint",
            "author": "Brandon Murphy",
            "title": "Now You See It, Now You Don\u2019t: CopperStealer Performs Widespread Theft",
            "categories": [
                "CopperStealer",
                "SmokeLoader"
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
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/antisandbox-techniques/",
            "date": "2021-02-18",
            "organization": "PTSecurity",
            "author": "PTSecurity",
            "title": "https://www.ptsecurity.com/ww-en/analytics/antisandbox-techniques/",
            "categories": [
                "Poet RAT",
                "Gravity RAT",
                "Ketrican",
                "Okrum",
                "OopsIE",
                "Remcos",
                "RogueRobinNET",
                "RokRAT",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.cronup.com/post/de-ataque-con-malware-a-incidente-de-ransomware",
            "date": "2021-02-02",
            "organization": "CRONUP",
            "author": "Germ\u00e1n Fern\u00e1ndez",
            "title": "De ataque con Malware a incidente de Ransomware",
            "categories": [
                "Avaddon",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DanaBot",
                "Dharma",
                "Dridex",
                "Egregor",
                "Emotet",
                "Empire Downloader",
                "FriedEx",
                "GootKit",
                "IcedID",
                "MegaCortex",
                "Nemty",
                "Phorpiex",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "SDBbot",
                "SmokeLoader",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2021/02/01/what-tracking-an-attacker-email-infrastructure-tells-us-about-persistent-cybercriminal-operations/",
            "date": "2021-02-01",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "What tracking an attacker email infrastructure tells us about persistent cybercriminal operations",
            "categories": [
                "Dridex",
                "Emotet",
                "Makop Ransomware",
                "SmokeLoader",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://medium.com/csis-techblog/gcleaner-garbage-provider-since-2019-2708e7c87a8a",
            "date": "2021-01-18",
            "organization": "Medium csis-techblog",
            "author": "Beno\u00eet Ancel",
            "title": "GCleaner \u2014 Garbage Provider Since 2019",
            "categories": [
                "Amadey",
                "Ficker Stealer",
                "Raccoon",
                "RedLine Stealer",
                "SmokeLoader",
                "STOP"
            ]
        },
        {
            "data_url": "https://global.ahnlab.com/global/upload/download/asecreport/ASEC%20REPORT_vol.101_ENG.pdf",
            "date": "2021-01-11",
            "organization": "AhnLab",
            "author": "ASEC Analysis Team",
            "title": "Smoke Loader Learns New Tricks",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://marcoramilli.com/2021/01/09/c2-traffic-patterns-personal-notes/",
            "date": "2021-01-09",
            "organization": "Marco Ramilli's Blog",
            "author": "Marco Ramilli",
            "title": "Command and Control Traffic Patterns",
            "categories": [
                "ostap",
                "LaZagne",
                "Agent Tesla",
                "Azorult",
                "Buer",
                "Cobalt Strike",
                "DanaBot",
                "DarkComet",
                "Dridex",
                "Emotet",
                "Formbook",
                "IcedID",
                "ISFB",
                "NetWire RC",
                "PlugX",
                "Quasar RAT",
                "SmokeLoader",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://0xc0decafe.com/2020/12/23/detect-rc4-in-malicious-binaries",
            "date": "2020-12-23",
            "organization": "0xC0DECAFE",
            "author": "Thomas Barabosch",
            "title": "Detect RC4 in (malicious) binaries",
            "categories": [
                "SmokeLoader",
                "Zloader"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/12/2020-year-in-malware.html",
            "date": "2020-12-21",
            "organization": "Cisco Talos",
            "author": "JON MUNSHAW",
            "title": "2020: The year in malware",
            "categories": [
                "WolfRAT",
                "Prometei",
                "Poet RAT",
                "Agent Tesla",
                "Astaroth",
                "Ave Maria",
                "CRAT",
                "Emotet",
                "Gozi",
                "IndigoDrop",
                "JhoneRAT",
                "Nanocore RAT",
                "NjRAT",
                "Oblique RAT",
                "SmokeLoader",
                "StrongPity",
                "WastedLocker",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/a-new-way-to-encrypt-cc-server-urls-614886",
            "date": "2020-12-17",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "Smokeloader is still alive and kickin\u2019 \u2013 A new way to encrypt CC server URLs",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/social-engineering/2020/09/malvertising-campaigns-come-back-in-full-swing/",
            "date": "2020-09-09",
            "organization": "Malwarebytes",
            "author": "Threat Intelligence Team",
            "title": "Malvertising campaigns come back in full swing",
            "categories": [
                "Raccoon",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/09/salfram-robbing-place-without-removing.html",
            "date": "2020-09-02",
            "organization": "Cisco Talos",
            "author": "Holger Unterbrink",
            "title": "Salfram: Robbing the place without removing your name tag",
            "categories": [
                "Ave Maria",
                "ISFB",
                "SmokeLoader",
                "Zloader"
            ]
        },
        {
            "data_url": "https://hatching.io/blog/tt-2020-08-27/",
            "date": "2020-08-27",
            "organization": "Hatching.io",
            "author": "Pete Cowman",
            "title": "Smokeloader Analysis and More Family Detections",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://m.alvar.es/2020/06/comparative-analysis-between-bindiff.html",
            "date": "2020-06-22",
            "organization": "m.alvar.es",
            "author": "Marcos Alvares",
            "title": "Comparative analysis between Bindiff and Diaphora - Patched Smokeloader Study Case",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://n1ght-w0lf.github.io/malware%20analysis/smokeloader/",
            "date": "2020-06-21",
            "organization": "N1ght-W0lf Blog",
            "author": "Abdallah Elshinbary",
            "title": "Deep Analysis of SmokeLoader",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://m.alvar.es/2020/06/unpacking-smokeloader-and.html",
            "date": "2020-06-10",
            "organization": "m.alvar.es",
            "author": "Marcos Alvares",
            "title": "Unpacking Smokeloader and Reconstructing PE Programatically using LIEF",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://malwareandstuff.com/examining-smokeloaders-anti-hooking-technique/",
            "date": "2020-05-24",
            "organization": "Malware and Stuff",
            "author": "Andreas Klopsch",
            "title": "Examining Smokeloader\u2019s Anti Hooking technique",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/operation-ta505-part3/",
            "date": "2020-05-24",
            "organization": "Positive Technologies",
            "author": "PT ESC Threat Intelligence",
            "title": "Operation TA505: network infrastructure. Part 3.",
            "categories": [
                "AndroMut",
                "Buhtrap",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2020CrowdStrikeGlobalThreatReport.pdf",
            "date": "2020-03-04",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2020 CrowdStrike Global Threat Report",
            "categories": [
                "MESSAGETAP",
                "More_eggs",
                "8.t Dropper",
                "Anchor",
                "BabyShark",
                "BadNews",
                "Clop",
                "Cobalt Strike",
                "CobInt",
                "Cobra Carbon System",
                "Cutwail",
                "DanaBot",
                "Dharma",
                "DoppelDridex",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FlawedAmmyy",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "IcedID",
                "ISFB",
                "KerrDown",
                "LightNeuron",
                "LockerGoga",
                "Maze",
                "MECHANICAL",
                "Necurs",
                "Nokki",
                "Outlook Backdoor",
                "Phobos",
                "Predator The Thief",
                "QakBot",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SDBbot",
                "Skipper",
                "SmokeLoader",
                "TerraRecon",
                "TerraStealer",
                "TerraTV",
                "TinyLoader",
                "TrickBot",
                "Vidar",
                "Winnti",
                "ANTHROPOID SPIDER",
                "APT23",
                "APT31",
                "APT39",
                "APT40",
                "BlackTech",
                "BuhTrap",
                "Charming Kitten",
                "CLOCKWORK SPIDER",
                "DOPPEL SPIDER",
                "FIN7",
                "Gamaredon Group",
                "GOBLIN PANDA",
                "MONTY SPIDER",
                "MUSTANG PANDA",
                "NARWHAL SPIDER",
                "NOCTURNAL SPIDER",
                "PINCHY SPIDER",
                "SALTY SPIDER",
                "SCULLY SPIDER",
                "SMOKY SPIDER",
                "Thrip",
                "VENOM SPIDER",
                "VICEROY TIGER"
            ]
        },
        {
            "data_url": "https://danusminimus.github.io/Analyzing-Modern-Malware-Techniques-Part-4/",
            "date": "2020-02-18",
            "organization": "Github (DanusMinimus)",
            "author": "Dan Lisichkin",
            "title": "Analyzing Modern Malware Techniques Part 4: I\u2019m afraid of no packer(Part 1 of 2)",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/blog/going-deep-a-guide-to-reversing-smoke-loader-malware/",
            "date": "2019-11-21",
            "organization": "SentinelOne",
            "author": "Mario Ciccarelli",
            "title": "Going Deep | A Guide to Reversing Smoke Loader Malware",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://m.alvar.es/2019/10/dynamic-imports-and-working-around.html",
            "date": "2019-10-31",
            "organization": "m.alvar.es",
            "author": "Marcos Alvares",
            "title": "Dynamic Imports and Working Around Indirect Calls - Smokeloader Study Case",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "http://security.neurolabs.club/2019/08/smokeloaders-hardcoded-domains-sneaky.html",
            "date": "2019-08-05",
            "organization": "security.neurolabs",
            "author": "Marcos Alvares",
            "title": "Smokeloader's Hardcoded Domains - Sneaky Third Party Vendor or Cheap Buyer?",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2019-resurgence-of-smokeloader/",
            "date": "2019-07-09",
            "organization": "Check Point",
            "author": "Israel Gubi",
            "title": "The 2019 Resurgence of Smokeloader",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/2019-return-retefe",
            "date": "2019-05-02",
            "organization": "Proofpoint",
            "author": "Bryan Campbell",
            "title": "2019: The Return of Retefe",
            "categories": [
                "Dok",
                "Retefe",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/analysis-of-smoke-loader-in-new-tsunami-campaign/",
            "date": "2018-12-19",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Kaoru Hayashi",
            "title": "Analysis of Smoke Loader in New Tsunami Campaign",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://int0xcc.svbtle.com/a-taste-of-our-own-medicine-how-smokeloader-is-deceiving-dynamic-configuration-extraction-by-using-binary-code-as-bait",
            "date": "2018-09-18",
            "organization": "int 0xcc blog",
            "author": "Raashid Bhat",
            "title": "A taste of our own medicine: How SmokeLoader is deceiving configuration extraction by using binary code as bait",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://blog.badtrace.com/post/anti-hooking-checks-of-smokeloader-2018/",
            "date": "2018-08-14",
            "organization": "Plug it, play it, burn it, rip it",
            "author": "Alberto Ortega",
            "title": "Anti-Hooking checks of SmokeLoader 2018",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.cert.pl/en/news/single/dissecting-smoke-loader/",
            "date": "2018-07-18",
            "organization": "CERT.PL",
            "author": "Micha\u0142 Praszmo",
            "title": "Dissecting Smoke Loader",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2018/07/smoking-guns-smoke-loader-learned-new.html",
            "date": "2018-07-03",
            "organization": "Talos Intelligence",
            "author": "Ben Baker",
            "title": "Smoking Guns - Smoke Loader learned new tricks",
            "categories": [
                "SmokeLoader",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.spamhaus.org/news/article/774/smoke-loader-improves-encryption-after-microsoft-spoils-its-campaign",
            "date": "2018-04-16",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Smoke Loader malware improves after Microsoft spoils its Campaign",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://cloudblogs.microsoft.com/microsoftsecure/2018/04/04/hunting-down-dofoil-with-windows-defender-atp/",
            "date": "2018-04-04",
            "organization": "Microsoft",
            "author": "Microsoft Defender ATP Research Team",
            "title": "Hunting down Dofoil with Windows Defender ATP",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/cybercrime/2018/01/fake-spectre-and-meltdown-patch-pushes-smoke-loader/",
            "date": "2018-01-12",
            "organization": "Malwarebytes",
            "author": "J\u00e9r\u00f4me Segura",
            "title": "Fake Spectre and Meltdown patch pushes Smoke Loader malware",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://bartblaze.blogspot.com/2017/08/crystal-finance-millennium-used-to.html",
            "date": "2017-08-24",
            "organization": "Blaze's Security Blog",
            "author": "BartBlaze",
            "title": "Crystal Finance Millennium used to spread malware",
            "categories": [
                "Chthonic",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://info.phishlabs.com/blog/smoke-loader-adds-additional-obfuscation-methods-to-mitigate-analysis",
            "date": "2017-08-04",
            "organization": "PhishLabs",
            "author": "Jason Davison",
            "title": "Smoke Loader Adds Additional Obfuscation Methods to Mitigate Analysis",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://malwarebreakdown.com/2017/04/03/shadow-server-domains-leads-to-rig-exploit-kit-dropping-smoke-loader-which-downloads-neutrino-bot-aka-kasidet/",
            "date": "2017-04-03",
            "organization": "Malware Breakdown",
            "author": "Malware Breakdown",
            "title": "Shadow Server Domains Leading to RIG Exploit Kit Dropping Smoke Loader",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2016/10/new-looking-sundown-ek-drops-smoke-loader-kronos-banker/",
            "date": "2016-10-17",
            "organization": "Malwarebytes",
            "author": "J\u00e9r\u00f4me Segura",
            "title": "New-looking Sundown EK drops Smoke Loader, Kronos banker",
            "categories": [
                "Kronos",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2016/08/smoke-loader-downloader-with-a-smokescreen-still-alive/",
            "date": "2016-08-05",
            "organization": "Malwarebytes",
            "author": "Malwarebytes Labs",
            "title": "Smoke Loader \u2013 downloader with a smokescreen still alive",
            "categories": [
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://eternal-todo.com/blog/smokeloader-analysis-yulia-photo",
            "date": "2014-10-05",
            "organization": "Eternal Todo",
            "author": "Jose Miguel Esparza",
            "title": "Dissecting SmokeLoader (or Yulia's sweet ass proposition)",
            "categories": [
                "SmokeLoader"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "smoke loader",
            "procedure_code": "s0226",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0226",
            "techniques": [
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
                    "procedure_description": "smoke loader adds a visual basic script in the startup folder to deploy the payload.[145]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "smoke loader launches a scheduled task.[161]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "smoke loader adds a registry run key for persistence and adds a script in the startup folder to deploy the payload.[247]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "smoke loader launches a scheduled task.[161]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "smoke loader adds a registry run key for persistence and adds a script in the startup folder to deploy the payload.[247]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "smoke loader injects into the internet explorer process.[61]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/012",
                    "technique_name": "process injection : process hollowing",
                    "technique_description": "adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses. process hollowing is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "smoke loader spawns a new copy of c:\\windows\\syswow64\\explorer.exe and then replaces the executable code in memory with malware.[35][36]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "smoke loader launches a scheduled task.[161]"
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
                    "procedure_description": "smoke loader deobfuscates its code.[216]"
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
                    "procedure_description": "smoke loader uses a simple one-byte xor method to obfuscate values in the malware.[304][305]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "smoke loader injects into the internet explorer process.[61]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/012",
                    "technique_name": "process injection : process hollowing",
                    "technique_description": "adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses. process hollowing is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "smoke loader spawns a new copy of c:\\windows\\syswow64\\explorer.exe and then replaces the executable code in memory with malware.[35][36]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "smoke loader scans processes to perform anti-vm checks. [53]"
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
                    "procedure_description": "smoke loader searches for credentials stored from web browsers.[82]"
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
                    "procedure_description": "smoke loader searches for files named logins.json to parse for credentials.[33]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "smoke loader recursively searches through directories for files.[280]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "smoke loader scans processes to perform anti-vm checks. [53]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1114.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1114/001",
                    "technique_name": "email collection : local email collection",
                    "technique_description": "adversaries may target user email on local systems to collect sensitive information. files containing email data can be acquired from a user\u2019s local system, such as outlook storage or cache files.",
                    "procedure_description": "smoke loader searches through outlook files and directories (e.g., inbox, sent, templates, drafts, archives, etc.).[18]"
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
                    "procedure_description": "smoke loader uses http for c2.[310]"
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
                    "procedure_description": "smoke loader downloads a new version of itself once it has installed. it also downloads additional plugins.[417]"
                }
            ]
        }
    ]
};