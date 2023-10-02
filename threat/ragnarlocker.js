var threatdata = {
    "name": "RagnarLocker",
    "alias": "RagnarLocker, Ragnar Locker",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2023-03-30",
    "all_data": {
        "tool": "RagnarLocker",
        "names": [
            {
                "name": "RagnarLocker"
            },
            {
                "name": "Ragnar Locker"
            }
        ],
        "description": "(McAfee) The RagnarLocker ransomware first appeared in the wild at the end of December 2019 as part of a campaign against compromised networks targeted by its operators.\nThe ransomware code is small (only 48kb after the protection in its custom packer is removed) and coded in a high programming language (C/C++). Like all ransomware, the goal of this malware is to encrypt all files that it can and request a ransom for decrypting them.\nRagnarLocker\u2019s operators, as we have seen with other bad actors recently, threaten to publish the information they get from compromised machines if ransoms are not paid.\nAfter conducting reconnaissance, the ransomware operators enter the victim\u2019s network and, in some pre-deployment stages, steal information before finally dropping the ransomware that will encrypt all files in the victim\u2019s machines.\nThe most notable RagnarLocker attack to date saw this malware deployed in a large company where the malware operators then requested a ransom of close to $11 million USD in return for not leaking information stolen from the company. In this report we will talk about the sample used in this attack.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/ragnarlocker-ransomware-threatens-to-release-confidential-information/",
            "https://zawadidone.nl/2020/06/01/lets-analyze-ragnar-locker.html",
            "https://www.deepinstinct.com/2020/04/27/ragnar-locker-ransomware-unlocked-by-deep-instinct/",
            "https://resources.infosecinstitute.com/topic/ragnar-locker-malware-what-it-is-how-it-works-and-how-to-prevent-it-malware-spotlight/",
            "https://securelist.com/targeted-ransomware-encrypting-data/99255/",
            "https://www.bankinfosecurity.com/fbi-warns-uptick-in-ragnar-locker-ransomware-activity-a-15454",
            "https://www.bleepingcomputer.com/news/security/fbi-ransomware-gang-breached-52-us-critical-infrastructure-orgs/",
            "https://www.tripwire.com/state-of-security/security-data-protection/ragnar-locker-ransomware-what-you-need-to-know/",
            "https://www.cybereason.com/blog/threat-analysis-report-ragnar-locker-ransomware-targeting-the-energy-sector"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0481/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ragnarlocker"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ragnarlocker"
        ],
        "uuid": "9a967e7d-f989-4639-97f8-0ab46c34de1c",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "RagnarLocker",
            "malware_alias": null,
            "malware": "win.ragnarlocker",
            "last_update": "2021-12-08 15:54:52",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "afab912c41c920c867f1b2ada34114b22dcc9c5f3666edbfc4e9936c29a17a68",
                        "timestamp": "2021-12-08 15:54:52"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-12-08 15:54:52",
    "file_name": "ragnarlocker",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://noticeofpleadings.com/crackedcobaltstrike/files/ComplaintAndSummons/1%20-Microsoft%20Cobalt%20Strike%20-%20Complaint(907040021.9).pdf",
            "date": "2023-03-30",
            "organization": "United States District Court (Eastern District of New York)",
            "author": "Microsoft",
            "title": "Cracked Cobalt Strike (1:23-cv-02447)",
            "categories": [
                "Black Basta",
                "BlackCat",
                "LockBit",
                "RagnarLocker",
                "LockBit",
                "Black Basta",
                "BlackCat",
                "Cobalt Strike",
                "Cuba",
                "Emotet",
                "LockBit",
                "Mount Locker",
                "PLAY",
                "QakBot",
                "RagnarLocker",
                "Royal Ransom",
                "Zloader"
            ]
        },
        {
            "data_url": "https://securelist.com/modern-ransomware-groups-ttps/106824/",
            "date": "2022-06-23",
            "organization": "Kaspersky",
            "author": "Nikita Nazarov",
            "title": "The hateful eight: Kaspersky\u2019s guide to modern ransomware groups\u2019 TTPs (Download Form)",
            "categories": [
                "BlackByte",
                "BlackCat",
                "Clop",
                "Conti",
                "Hive",
                "LockBit",
                "Mespinoza",
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/conti-ransomware-cooperation-maze-lockbit-ragnar-locker",
            "date": "2022-05-05",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Cybercrime loves company: Conti cooperated with other ransomware gangs",
            "categories": [
                "LockBit",
                "Maze",
                "RagnarLocker",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://blog.bushidotoken.net/2022/05/gamer-cheater-hacker-spy.html",
            "date": "2022-05-01",
            "organization": "BushidoToken",
            "author": "BushidoToken",
            "title": "Gamer Cheater Hacker Spy",
            "categories": [
                "Egregor",
                "HelloKitty",
                "NetfilterRootkit",
                "RagnarLocker",
                "Winnti"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2022/03/17/the-ransomware-threat-intelligence-center/",
            "date": "2022-03-17",
            "organization": "Sophos",
            "author": "Tilly Travers",
            "title": "The Ransomware Threat Intelligence Center",
            "categories": [
                "ATOMSILO",
                "Avaddon",
                "AvosLocker",
                "BlackKingdom Ransomware",
                "BlackMatter",
                "Conti",
                "Cring",
                "DarkSide",
                "dearcry",
                "Dharma",
                "Egregor",
                "Entropy",
                "Epsilon Red",
                "Gandcrab",
                "Karma",
                "LockBit",
                "LockFile",
                "Mailto",
                "Maze",
                "Nefilim",
                "RagnarLocker",
                "Ragnarok",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SamSam",
                "Snatch",
                "WannaCryptor",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.theregister.com/2022/03/09/fbi_says_ragnar_locker_ransomware/",
            "date": "2022-03-09",
            "organization": "The Register",
            "author": "Jessica Lyons Hardcastle",
            "title": "Ragnar ransomware gang hit 52 critical US orgs, says FBI",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://cyware.com/news/ragnar-locker-breached-52-organizations-and-counting-fbi-warns-0588d220/",
            "date": "2022-03-09",
            "organization": "Cyware",
            "author": "Cyware",
            "title": "Ragnar Locker Breached 52 Organizations and Counting, FBI Warns",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/fbi-ransomware-gang-breached-52-us-critical-infrastructure-orgs/",
            "date": "2022-03-07",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "FBI: Ransomware gang breached 52 US critical infrastructure orgs",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://www.ic3.gov/Media/News/2022/220307.pdf",
            "date": "2022-03-07",
            "organization": "FBI",
            "author": "FBI",
            "title": "FBI Flash CU-000163-MW: RagnarLocker Ransomware Indicators of Compromise",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/analysis-and-protections-for-ragnarlocker-ransomware.html",
            "date": "2022-02-28",
            "organization": "Trellix",
            "author": "Taylor Mullins",
            "title": "Trellix Global Defenders: Analysis and Protections for RagnarLocker Ransomware",
            "categories": [
                "RagnarLocker",
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://blog.cyble.com/2022/01/20/deep-dive-into-ragnar-locker-ransomware-gang/",
            "date": "2022-01-20",
            "organization": "Cybleinc",
            "author": "Cyble",
            "title": "Deep Dive Into Ragnar_locker Ransomware Gang",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://twitter.com/malwrhunterteam/status/1475568201673105409",
            "date": "2021-12-28",
            "organization": "Twitter (MalwareHunterTeam)",
            "author": "MalwareHunterTeam",
            "title": "Tweet on RagnarLocker Linux variant",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://www.accenture.com/us-en/blogs/cyber-defense/moving-left-ransomware-boom",
            "date": "2021-10-11",
            "organization": "Accenture",
            "author": "Accenture Cyber Threat Intelligence",
            "title": "Moving Left of the Ransomware Boom",
            "categories": [
                "REvil",
                "Cobalt Strike",
                "MimiKatz",
                "RagnarLocker",
                "REvil"
            ]
        },
        {
            "data_url": "https://seguranca-informatica.pt/ragnar-locker-malware-analysis/",
            "date": "2021-08-19",
            "organization": "Seguranca Informatica",
            "author": "Pedro Tavares",
            "title": "Ragnar Locker \u2013 Malware analysis",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://symantec.broadcom.com/hubfs/The_Ransomware_Threat_September_2021.pdf",
            "date": "2021-08-15",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "The Ransomware Threat",
            "categories": [
                "Babuk",
                "BlackMatter",
                "DarkSide",
                "Avaddon",
                "Babuk",
                "BADHATCH",
                "BazarBackdoor",
                "BlackMatter",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "Emotet",
                "FiveHands",
                "FriedEx",
                "Hades",
                "IcedID",
                "LockBit",
                "Maze",
                "MegaCortex",
                "MimiKatz",
                "QakBot",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://twitter.com/AltShiftPrtScn/status/1403707430765273095",
            "date": "2021-06-12",
            "organization": "Twitter (@AltShiftPrtScn)",
            "author": "Peter Mackenzie",
            "title": "A thread on RagnarLocker ransomware group's TTP seen in an Incident Response",
            "categories": [
                "Cobalt Strike",
                "RagnarLocker"
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
            "data_url": "https://www.cyborgsecurity.com/cyborg_labs/hunting-ransomware-inhibiting-system-backup-or-recovery/",
            "date": "2021-05-06",
            "organization": "Cyborg Security",
            "author": "Brandon Denker",
            "title": "Ransomware: Hunting for Inhibiting System Backup or Recovery",
            "categories": [
                "Avaddon",
                "Conti",
                "DarkSide",
                "LockBit",
                "Mailto",
                "Maze",
                "Mespinoza",
                "Nemty",
                "PwndLocker",
                "RagnarLocker",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Snatch",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://www.capcom.co.jp/ir/english/news/pdf/e210413.pdf",
            "date": "2021-04-13",
            "organization": "CAPCOM",
            "author": "CAPCOM",
            "title": "4th Update Regarding Data Security Incident Due to Unauthorized Access:Investigation Results",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "http://reversing.fun/posts/2021/04/15/unpacking_ragnarlocker_via_emulation.html",
            "date": "2021-04-12",
            "organization": "",
            "author": "ilbaroni",
            "title": "Unpacking RAGNARLOCKER via emulation",
            "categories": [
                "RagnarLocker"
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
            "data_url": "https://news.sophos.com/en-us/2021/02/03/mtr-casebook-uncovering-a-backdoor-implant-in-a-solarwinds-orion-server/",
            "date": "2021-02-03",
            "organization": "Sophos Managed Threat Response (MTR)",
            "author": "Greg Iddon",
            "title": "MTR casebook: Uncovering a backdoor implant in a SolarWinds Orion server",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://www.acronis.com/en-sg/articles/ragnar-locker/",
            "date": "2021",
            "organization": "Acronis",
            "author": "Acronis Security",
            "title": "Analysis of Ragnar Locker Ransomware",
            "categories": [
                "RagnarLocker"
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
            "data_url": "https://www.waterisac.org/system/files/articles/FLASH-MU-000140-MW.pdf",
            "date": "2020-11-19",
            "organization": "FBI",
            "author": "FBI",
            "title": "MU-000140-MW: Indicators of Compromise Associated with Ragnar Locker Ransomware",
            "categories": [
                "RagnarLocker"
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
            "data_url": "https://securelist.com/targeted-ransomware-encrypting-data/99255/",
            "date": "2020-11-11",
            "organization": "Kaspersky Labs",
            "author": "Dmitry Bestuzhev",
            "title": "Targeted ransomware: it\u2019s not just about encrypting your data! Part 1 - \u201cOld and New Friends\u201d",
            "categories": [
                "Egregor",
                "Maze",
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2020/11/ransomware-group-turns-to-facebook-ads/",
            "date": "2020-11-10",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Ransomware Group Turns to Facebook Ads",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/capcom-hit-by-ragnar-locker-ransomware-1tb-allegedly-stolen/",
            "date": "2020-11-05",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Capcom hit by Ragnar Locker ransomware, 1TB allegedly stolen",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/capcom-quietly-discloses-cyberattack-impacting-email-file-servers/",
            "date": "2020-11-05",
            "organization": "ZDNet",
            "author": "Charlie Osborne",
            "title": "Capcom quietly discloses cyberattack impacting email, file servers",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/japanese-game-dev-capcom-hit-by-cyberattack-business-impacted/",
            "date": "2020-11-05",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Japanese game dev Capcom hit by cyberattack, business impacted",
            "categories": [
                "RagnarLocker"
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
            "data_url": "https://ics-cert.kaspersky.com/media/KASPERSKY_H1_2020_ICS_REPORT_EN.pdf",
            "date": "2020-09-24",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky Lab ICS CERT",
            "title": "Threat landscape for industrial automation systems - H1 2020",
            "categories": [
                "Poet RAT",
                "Mailto",
                "Milum",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "Snake"
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
            "data_url": "https://blog.blazeinfosec.com/dissecting-ragnar-locker-the-case-of-edp/",
            "date": "2020-07-30",
            "organization": "WILDIRE LABS",
            "author": "WILDFIRE LABS",
            "title": "Dissecting Ragnar Locker: The Case Of EDP",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/ragnarlocker-ransomware-threatens-to-release-confidential-information",
            "date": "2020-06-09",
            "organization": "McAfee",
            "author": "Alexandre Mundo",
            "title": "RagnarLocker Ransomware Threatens to Release Confidential Information",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/05/21/ragnar-locker-ransomware-deploys-virtual-machine-to-dodge-security/",
            "date": "2020-05-21",
            "organization": "Sophos",
            "author": "SophosLabs Uncut",
            "title": "Ragnar Locker ransomware deploys virtual machine to dodge security",
            "categories": [
                "RagnarLocker"
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
            "data_url": "https://www.bleepingcomputer.com/news/security/ragnarlocker-ransomware-hits-edp-energy-giant-asks-for-10m/",
            "date": "2020-04-14",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "RagnarLocker ransomware hits EDP energy giant, asks for \u20ac10M",
            "categories": [
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://id-ransomware.blogspot.com/2020/02/ragnarlocker-ransomware.html",
            "date": "2020-02-04",
            "organization": "ID Ransomware",
            "author": "Andrew Ivanov",
            "title": "RagnarLocker Ransomware",
            "categories": [
                "RagnarLocker"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "ragnar locker",
            "procedure_code": "s0481",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0481",
            "techniques": [
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
                    "procedure_description": "ragnar locker has used cmd.exe and batch scripts to execute commands.[274]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1569.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1569/002",
                    "technique_name": "system services : service execution",
                    "technique_description": "adversaries may abuse the windows service control manager to execute malicious commands or payloads. the windows service control manager (services.exe) is an interface to manage and manipulate services. the service control manager is accessible to users via gui components as well as system utilities such as sc.exe and net.",
                    "procedure_description": "ragnar locker has used sc.exe to execute a service that it creates.[50]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "ragnar locker has used sc.exe to create a new service for the virtualbox driver.[100]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "ragnar locker has used sc.exe to create a new service for the virtualbox driver.[100]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/006",
                    "technique_name": "hide artifacts : run virtual instance",
                    "technique_description": "adversaries may carry out malicious operations using a virtual instance to avoid detection. a wide variety of virtualization technologies exist that allow for the emulation of a computer or computing environment. by running malicious code inside of a virtual instance, adversaries can hide artifacts associated with their behavior from security tools that are unable to monitor activity inside the virtual instance. additionally, depending on the virtual networking implementation (ex: bridged adapter), network traffic generated by the virtual instance can be difficult to trace back to the compromised host as the ip address and hostname might not match known values.",
                    "procedure_description": "ragnar locker has used virtualbox and a stripped windows xp virtual machine to run itself. the use of a shared folder specified in the configuration enables ragnar locker to encrypt files on the host operating system, including files on any mapped drives.[2]"
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
                    "procedure_description": "ragnar locker has attempted to terminate/stop processes and services associated with endpoint security products.[74]"
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
                    "procedure_description": "ragnar locker has been delivered as an unsigned msi package that was executed with msiexec.exe.[20]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/010",
                    "technique_name": "system binary proxy execution : regsvr32",
                    "technique_description": "adversaries may abuse regsvr32.exe to proxy execution of malicious code. regsvr32.exe is a command-line program used to register and unregister object linking and embedding controls, including dynamic link libraries (dlls), on windows systems. the regsvr32.exe binary may also be signed by microsoft.",
                    "procedure_description": "ragnar locker has used regsvr32.exe to execute components of virtualbox.[35]"
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
                    "procedure_description": "ragnar locker has used rundll32.exe to execute components of virtualbox.[84]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1120",
                    "technique_link": "https://attack.mitre.org/techniques/T1120",
                    "technique_name": "peripheral device discovery",
                    "technique_description": "adversaries may attempt to gather information about attached peripheral devices and components connected to a computer system. peripheral devices could include auxiliary resources that support a variety of functionalities such as keyboards, printers, cameras, smart card readers, or removable storage. the information may be used to enhance their awareness of the system and network environment or may be used for further actions.",
                    "procedure_description": "ragnar locker may attempt to connect to removable drives and mapped network drives.[37]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1614",
                    "technique_link": "https://attack.mitre.org/techniques/T1614",
                    "technique_name": "system location discovery",
                    "technique_description": "adversaries may gather information in an attempt to calculate the geographical location of a victim host. adversaries may use the information from system location discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "before executing malicious code, ragnar locker checks the windows api getlocaleinfow and doesn't encrypt files if it finds a former soviet country.[1]"
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
                    "procedure_description": "ragnar locker encrypts files on the local machine and mapped drives prior to displaying a note demanding a ransom.[67][68]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1490",
                    "technique_link": "https://attack.mitre.org/techniques/T1490",
                    "technique_name": "inhibit system recovery",
                    "technique_description": "adversaries may delete or remove built-in data and turn off services designed to aid in the recovery of a corrupted system to prevent recovery. this may deny access to available backups and recovery options.",
                    "procedure_description": "ragnar locker can delete volume shadow copies using vssadmin delete shadows /all /quiet.[46]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1489",
                    "technique_link": "https://attack.mitre.org/techniques/T1489",
                    "technique_name": "service stop",
                    "technique_description": "adversaries may stop or disable services on a system to render those services unavailable to legitimate users. stopping critical services or processes can inhibit or stop response to an incident or aid in the adversary's overall objectives to cause damage to the environment.",
                    "procedure_description": "ragnar locker has attempted to stop services associated with business applications and databases to release the lock on files used by these applications so they may be encrypted.[33]"
                }
            ]
        }
    ]
};