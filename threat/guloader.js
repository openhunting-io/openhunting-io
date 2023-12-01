var threatdata = {
    "name": "GuLoader",
    "alias": "GuLoader, vbdropper, CloudEyE",
    "category": "Malware",
    "type": "Loader",
    "modified": "2023-09-29",
    "all_data": {
        "tool": "GuLoader",
        "names": [
            {
                "name": "GuLoader"
            },
            {
                "name": "vbdropper"
            },
            {
                "name": "CloudEyE"
            }
        ],
        "description": "(Proofpoint) Proofpoint researchers have observed a new downloader in the wild that we and other researchers are calling \u201cGuLoader.\u201d Our researchers first observed GuLoader in late December 2019 being used to deliver Parallax RAT, which itself had recently been released. While we regularly observe new loaders, GuLoader has gained popularity quickly and is in active use by multiple threat actors. GuLoader is a downloader, written partly in VB6, which typically stores its encrypted payloads on Google Drive or Microsoft OneDrive (underscoring that threat actors continue to adopt the cloud just like legitimate businesses are).\n\nGuLoader is a portable executable (PE) file that is often observed embedded in a container file such as an .iso or .rar file. We have also observed it being downloaded directly from various cloud hosting platforms. GuLoader is used predominantly to download remote access Trojans (RATs) and information stealers such as {{Agent Tesla}}/Origin Logger, {{Formbook}}, {{NanoCore RAT}}, {{NetWire RC}}, {{RemcosRAT}}, {{Ave Maria}}/Warzone RAT and Parallax RAT.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/guloader-popular-new-vb6-downloader-abuses-cloud-services",
            "https://blog.malwarebytes.com/threat-analysis/2020/07/malspam-campaign-caught-using-guloader-after-service-relaunch/",
            "https://www.deepinstinct.com/blog/-down-loaded-by-guloader-malware",
            "https://unit42.paloaltonetworks.com/guloader-variant-anti-analysis/",
            "https://www.crowdstrike.com/blog/guloader-dissection-reveals-new-anti-analysis-techniques-and-code-injection-redundancy/",
            "https://www.trellix.com/en-us/about/newsroom/stories/research/guloader-the-nsis-vantage-point.html",
            "https://www.esentire.com/blog/guloader-targeting-the-financial-sector-using-a-tax-themed-phishing-lure",
            "https://www.malwarebytes.com/blog/news/2023/04/guloader-returns-with-a-rotten-shipment",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/guloader-campaigns-a-deep-dive-analysis-of-a-highly-evasive-shellcode-based-loader/",
            "https://blog.morphisec.com/guloader-campaign-targets-law-firms-in-the-us",
            "https://asec.ahnlab.com/en/55978/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0561/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cloudeye",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.guloader"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:guloader"
        ],
        "uuid": "835729de-277b-4407-a4a6-4f6ad64b853f",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "guloader",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.intrinsec.com/wp-content/uploads/2023/09/TLP-CLEAR-20230912-EN-GuLoader-Information-report.pdf",
            "date": "2023-09-29",
            "organization": "Intrinsec",
            "author": "CTI Intrinsec",
            "title": "Ongoing threats targeting the energy industry",
            "categories": [
                "Agent Tesla",
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2023/unveiling-the-shadows-the-dark-alliance-between-guloader-and-remcos/",
            "date": "2023-09-19",
            "organization": "Checkpoint",
            "author": "Alexey  Bukhteyev",
            "title": "Unveiling the Shadows: The Dark Alliance between GuLoader and Remcos",
            "categories": [
                "CloudEyE",
                "Remcos"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/55978/",
            "date": "2023-08-10",
            "organization": "AhnLab",
            "author": "AhnLab ASEC Analysis Team",
            "title": "GuLoader Malware Disguised as Tax Invoices and Shipping Statements (Detected by MDS Products)",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://sansorg.egnyte.com/dl/ALlvwK6fp0",
            "date": "2023-07-28",
            "organization": "Red Canary",
            "author": "Stef Rand",
            "title": "Drop It Like It's Qbot: Separating malicious droppers, loaders, and crypters from their payloads",
            "categories": [
                "CloudEyE",
                "QakBot"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=gk7fCC5RiAQ",
            "date": "2023-07-28",
            "organization": "YouTube (SANS Cyber Defense)",
            "author": "Stef Rand",
            "title": "Drop It Like It's Qbot: Separating malicious droppers, loaders, and crypters from their payloads",
            "categories": [
                "CloudEyE",
                "QakBot"
            ]
        },
        {
            "data_url": "https://gi7w0rm.medium.com/cloudeye-from-lnk-to-shellcode-4b5f1d6d877",
            "date": "2023-07-08",
            "organization": "",
            "author": "Gi7w0rm",
            "title": "CloudEyE \u2014 From .lnk to Shellcode",
            "categories": [
                "CloudEyE",
                "Remcos"
            ]
        },
        {
            "data_url": "https://malwarebookreports.com/guloader-navigating-a-maze-of-intricacy/",
            "date": "2023-06-29",
            "organization": "MalwareBookReports",
            "author": "muzi",
            "title": "GuLoader: Navigating a Maze of Intricacy",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2023/cloud-based-malware-delivery-the-evolution-of-guloader/",
            "date": "2023-05-22",
            "organization": "Check Point",
            "author": "Alexey Bukhteyev",
            "title": "Cloud-based Malware Delivery: The Evolution of GuLoader",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://any.run/cybersecurity-blog/deobfuscating-guloader/",
            "date": "2023-05-17",
            "organization": "ANY.RUN",
            "author": "ANY.RUN",
            "title": "Deobfuscating the Latest GuLoader: Automating Analysis with Ghidra Scripting",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/en-us/security/blog/2023/04/13/threat-actors-strive-to-cause-tax-day-headaches/",
            "date": "2023-04-13",
            "organization": "Microsoft",
            "author": "Microsoft Threat Intelligence",
            "title": "Threat actors strive to cause Tax Day headaches",
            "categories": [
                "CloudEyE",
                "Remcos"
            ]
        },
        {
            "data_url": "https://blog.checkpoint.com/security/march-2023s-most-wanted-malware-new-emotet-campaign-bypasses-microsoft-blocks-to-distribute-malicious-onenote-files/",
            "date": "2023-04-10",
            "organization": "Check Point",
            "author": "Check Point",
            "title": "March 2023\u2019s Most Wanted Malware: New Emotet Campaign Bypasses Microsoft Blocks to Distribute Malicious OneNote Files",
            "categories": [
                "Agent Tesla",
                "CloudEyE",
                "Emotet",
                "Formbook",
                "Nanocore RAT",
                "NjRAT",
                "QakBot",
                "Remcos",
                "Tofsee"
            ]
        },
        {
            "data_url": "https://medium.com/@ZainWare/analyzing-guloader-42c1d6a73dfa",
            "date": "2023-03-11",
            "organization": "Zainware labs",
            "author": "ZainWare",
            "title": "Analyzing GuLoader",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/guloader-dissection-reveals-new-anti-analysis-techniques-and-code-injection-redundancy/",
            "date": "2022-12-19",
            "organization": "CrowdStrike",
            "author": "Sarang Sonawane",
            "title": "Malware Analysis: GuLoader Dissection Reveals New Anti-Analysis Techniques and Code Injection Redundancy",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://www.spamhaus.com/resource-center/dissecting-the-new-shellcode-based-variant-of-guloader-cloudeye/",
            "date": "2022-10-12",
            "organization": "Spamhaus",
            "author": "Raashid Bhat",
            "title": "Dissecting the new shellcode-based variant of GuLoader (CloudEyE)",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://www.vmray.com/cyber-security-blog/malware-analysis-spotlight-guloader",
            "date": "2022-09-12",
            "organization": "VMRay",
            "author": "Pascal Brackmann",
            "title": "The evolution of GuLoader",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://inquest.net/blog/2022/08/29/office-files-rtf-files-shellcode-and-more-shenanigans",
            "date": "2022-08-29",
            "organization": "InQuest",
            "author": "David Ledbetter",
            "title": "Office Files, RTF files, Shellcode and more shenanigans",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://cert-agid.gov.it/news/malware/tecniche-per-semplificare-lanalisi-del-malware-guloader/",
            "date": "2022-07-21",
            "organization": "Cert-AgID",
            "author": "Cert-AgID",
            "title": "Tecniche per semplificare l\u2019analisi del malware GuLoader",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/spoofed-saudi-purchase-order-drops-guloader-part-two",
            "date": "2022-07-12",
            "organization": "Fortinet",
            "author": "James Slaughter",
            "title": "Spoofed Saudi Purchase Order Drops GuLoader \u2013 Part 2",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://experience.mandiant.com/trending-evil-2/p/1",
            "date": "2022-06-02",
            "organization": "Mandiant",
            "author": "Mandiant",
            "title": "TRENDING EVIL Q2 2022",
            "categories": [
                "CloudEyE",
                "Cobalt Strike",
                "CryptBot",
                "Emotet",
                "IsaacWiper",
                "QakBot"
            ]
        },
        {
            "data_url": "https://threatresearch.ext.hp.com/malware-campaigns-targeting-african-banking-sector/",
            "date": "2022-04-12",
            "organization": "HP",
            "author": "Patrick Schl\u00e4pfer",
            "title": "Malware Campaigns Targeting African Banking Sector",
            "categories": [
                "CloudEyE",
                "Remcos"
            ]
        },
        {
            "data_url": "https://forensicitguy.github.io/guloader-executing-shellcode-callbacks/",
            "date": "2022-01-27",
            "organization": "forensicitguy",
            "author": "Tony Lambert",
            "title": "GuLoader Executing Shellcode Using Callback Functions",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://threatresearch.ext.hp.com/javascript-malware-dispensing-rats-into-the-wild/",
            "date": "2021-11-23",
            "organization": "HP",
            "author": "Patrick Schl\u00e4pfer",
            "title": "RATDispenser: Stealthy JavaScript Loader Dispensing RATs into the Wild",
            "categories": [
                "AdWind",
                "Ratty",
                "STRRAT",
                "CloudEyE",
                "Formbook",
                "Houdini",
                "Panda Stealer",
                "Remcos"
            ]
        },
        {
            "data_url": "https://threatresearch.ext.hp.com/wp-content/uploads/2021/10/HP-Wolf-Security-Threat-Insights-Report-Q3-2021.pdf",
            "date": "2021-10",
            "organization": "HP",
            "author": "HP Wolf Security",
            "title": "Threat Insights  Report Q3 - 2021",
            "categories": [
                "STRRAT",
                "CloudEyE",
                "NetWire RC",
                "Remcos",
                "TrickBot",
                "Vjw0rm"
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
            "data_url": "https://www.youtube.com/watch?v=N0wAh26wShE",
            "date": "2021-08-23",
            "organization": "YouTube ( DuMp-GuY TrIcKsTeR)",
            "author": "Ji\u0159\u00ed Vinopal",
            "title": "[2] Lokibot analyzing - spoofing GULoader and LokiBot C2 [part2] - INetSim + BurpSuite",
            "categories": [
                "CloudEyE",
                "Loki Password Stealer (PWS)"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=-FxyzuRv6Wg",
            "date": "2021-07-07",
            "organization": "YouTube ( DuMp-GuY TrIcKsTeR)",
            "author": "Ji\u0159\u00ed Vinopal",
            "title": "[2] Lokibot analyzing - spoofing GULoader and LokiBot C2 [part1] - Own implementation in Python",
            "categories": [
                "CloudEyE",
                "Loki Password Stealer (PWS)"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=K3Yxu_9OUxU",
            "date": "2021-07-06",
            "organization": "YouTube ( DuMp-GuY TrIcKsTeR)",
            "author": "Ji\u0159\u00ed Vinopal",
            "title": "[1] Lokibot analyzing - defeating GuLoader with Windbg (Kernel debugging) and Live C2",
            "categories": [
                "CloudEyE",
                "Loki Password Stealer (PWS)"
            ]
        },
        {
            "data_url": "https://hidocohen.medium.com/guloaders-anti-analysis-techniques-e0d4b8437195",
            "date": "2021-06-29",
            "organization": "Medium hidocohen",
            "author": "Hido Cohen",
            "title": "GuLoader\u2019s Anti-Analysis Techniques",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://elis531989.medium.com/dancing-with-shellcodes-cracking-the-latest-version-of-guloader-75083fb15cb4",
            "date": "2021-04-19",
            "organization": "Medium elis531989",
            "author": "Eli Salem",
            "title": "Dancing With Shellcodes: Cracking the latest version of Guloader",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://cert.pl/en/posts/2021/04/keeping-an-eye-on-guloader-reverse-engineering-the-loader/",
            "date": "2021-04-13",
            "organization": "CERT Polska / NASK",
            "author": "Micha\u0142 Praszmo",
            "title": "Keeping an eye on CloudEyE (GuLoader) - Reverse engineering the loader",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://clickallthethings.wordpress.com/2021/03/06/oleobject1-bin-ole10native-shellcode/",
            "date": "2021-03-06",
            "organization": "Click All the Things! Blog",
            "author": "Jamie Arndt",
            "title": "oleObject1.bin \u2013 OLe10nATive \u2013 shellcode",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://labs.k7computing.com/?p=21725Lokesh",
            "date": "2021-02-17",
            "organization": "K7 Security",
            "author": "Lokesh J",
            "title": "GuLoader Snowballs via MalSpam Campaigns",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://www.vmray.com/cyber-security-blog/azorult-delivered-by-guloader-malware-analysis-spotlight/",
            "date": "2020-11-18",
            "organization": "VMRay",
            "author": "VMRay Labs Team",
            "title": "Malware Analysis Spotlight: AZORult Delivered by GuLoader",
            "categories": [
                "Azorult",
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://www.joesecurity.org/blog/3535317197858305930",
            "date": "2020-09-17",
            "organization": "Joe Security's Blog",
            "author": "Joe Security",
            "title": "GuLoader's VM-Exit Instruction Hammering explained",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://malwation.com/malware-config-extraction-diaries-1-guloader/",
            "date": "2020-09-08",
            "organization": "MALWATION",
            "author": "malwation",
            "title": "Malware Config Extraction Diaries #1 \u2013 GuLoader",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/scams/2020/08/sba-phishing-scams-from-malware-to-advanced-social-engineering/",
            "date": "2020-08-10",
            "organization": "Malwarebytes",
            "author": "J\u00e9r\u00f4me Segura",
            "title": "SBA phishing scams: from malware to advanced social engineering",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://www.blueliv.com/cyber-security-and-cyber-threat-intelligence-blog-blueliv/research/playing-with-guloader-anti-vm-techniques-malware/",
            "date": "2020-08-05",
            "organization": "Blueliv",
            "author": "Carlos Rubio",
            "title": "Playing with GuLoader Anti-VM techniques",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/07/14/raticate-rats-as-service-with-commercial-crypter/?cmp=30728",
            "date": "2020-07-14",
            "organization": "SophosLabs Uncut",
            "author": "Markel Picado",
            "title": "RATicate upgrades \u201cRATs as a Service\u201d attacks with commercial \u201ccrypter\u201d",
            "categories": [
                "LokiBot",
                "BetaBot",
                "CloudEyE",
                "NetWire RC"
            ]
        },
        {
            "data_url": "https://www.vmray.com/cyber-security-blog/guloader-evasion-techniques-threat-bulletin/",
            "date": "2020-07-09",
            "organization": "VMRay",
            "author": "Pascal Brackmann",
            "title": "Threat Bulletin: Dissecting GuLoader\u2019s Evasion Techniques",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://kienmanowar.wordpress.com/2020/06/27/quick-analysis-note-about-guloader-or-cloudeye/",
            "date": "2020-06-27",
            "organization": "kienmanowar Blog",
            "author": "m4n0w4r",
            "title": "Quick analysis note about GuLoader (or CloudEyE)",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/guloader-malware-analysis/",
            "date": "2020-06-25",
            "organization": "CrowdStrike",
            "author": "Umesh Wanve",
            "title": "GuLoader: Peering Into a Shellcode-based Downloader",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/hakbit-ransomware-campaign-against-germany-austria-switzerland",
            "date": "2020-06-22",
            "organization": "Proofpoint",
            "author": "Sherrod DeGrippo",
            "title": "Hakbit Ransomware Campaign Against Germany, Austria, Switzerland",
            "categories": [
                "CloudEyE",
                "Hakbit"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2020/guloader-cloudeye/",
            "date": "2020-06-08",
            "organization": "Check Point Research",
            "author": "Check Point Research",
            "title": "GuLoader? No, CloudEyE.",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://labs.vipre.com/unloading-the-guloader/",
            "date": "2020-05-20",
            "organization": "VIPRE",
            "author": "VIPRE Labs",
            "title": "Unloading the GuLoader",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://twitter.com/sysopfb/status/1258809373159305216",
            "date": "2020-05-08",
            "organization": "Twitter (@sysopfb)",
            "author": "Jason Reaves",
            "title": "Tweet on GuLoader anti analysis techniques",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://blog.vincss.net/2020/05/re014-guloader-antivm-techniques.html",
            "date": "2020-05-05",
            "organization": "VinCSS",
            "author": "m4n0w4r",
            "title": "GuLoader AntiVM Techniques",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://twitter.com/VK_Intel/status/1257206565146370050",
            "date": "2020-05-04",
            "organization": "Twitter (@VK_intel)",
            "author": "Vitali Kremez",
            "title": "GuLoader API Loader Algorithm",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://twitter.com/VK_Intel/status/1255537954304524288",
            "date": "2020-04-29",
            "organization": "Twitter (@VK_intel)",
            "author": "Vitali Kremez",
            "title": "Some Insight into GuLoader family",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://twitter.com/VK_Intel/status/1252678206852907011",
            "date": "2020-04-21",
            "organization": "Twitter (@VK_intel)",
            "author": "Vitali Kremez",
            "title": "Tweet on Signed GuLoader",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://labs.k7computing.com/?p=20156",
            "date": "2020-04-13",
            "organization": "K7 Security",
            "author": "Lokesh J",
            "title": "GuLoader delivers RATs and Spies in Disguise",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/guloader-installing-netwire-rat/",
            "date": "2020-04-03",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Brad Duncan",
            "title": "GuLoader: Malspam Campaign Installing NetWire RAT",
            "categories": [
                "CloudEyE",
                "NetWire RC"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/guloader-the-rat-downloader",
            "date": "2020-04-02",
            "organization": "Morphisec",
            "author": "Arnold Osipov",
            "title": "GuLoader: The RAT Downloader",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://umbrella.cisco.com/blog/navigating-cybersecurity-during-a-pandemic-latest-malware-and-threat-actors",
            "date": "2020-04-01",
            "organization": "Cisco",
            "author": "Shyam Sundar Ramaswami",
            "title": "Navigating Cybersecurity During a Pandemic: Latest Malware and Threat Actors",
            "categories": [
                "Azorult",
                "CloudEyE",
                "Formbook",
                "KPOT Stealer",
                "Metamorfo",
                "Nanocore RAT",
                "NetWire RC",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://twitter.com/TheEnergyStory/status/1240608893610459138",
            "date": "2020-03-19",
            "organization": "Twitter (@TheEnergyStory)",
            "author": "Dominik Reichel",
            "title": "Tweet on early GuLoader samples dating back to October 2019",
            "categories": [
                "CloudEyE"
            ]
        },
        {
            "data_url": "https://twitter.com/TheEnergyStory/status/1239110192060608513",
            "date": "2020-03-15",
            "organization": "Twitter (@TheEnergyStory)",
            "author": "Dominik Reichel",
            "title": "GuLoader anti analysis/sandbox tricks",
            "categories": [
                "CloudEyE"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "guloader",
            "procedure_code": "s0561",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0561",
            "techniques": [
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
                    "procedure_description": "guloader has been spread in phishing campaigns using malicious web links.[56]"
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
                    "procedure_description": "guloader can use a number of different apis for discovery and execution.[87]"
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
                    "procedure_description": "guloader has relied upon users clicking on links to malicious documents.[43]"
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
                    "procedure_description": "the guloader executable has been retrieved via embedded macros in malicious word documents.[105]"
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
                    "procedure_description": "guloader can establish persistence via the registry under hkcu\\software\\microsoft\\windows\\currentversion\\runonce.[112]"
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
                    "procedure_description": "guloader can establish persistence via the registry under hkcu\\software\\microsoft\\windows\\currentversion\\runonce.[112]"
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
                    "procedure_description": "guloader has the ability to inject shellcode into a donor processes that is started in a suspended state. guloader has previously used regasm as a donor process.[26]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "guloader can delete its executable from the appdata\\local\\temp directory on the compromised host.[94]"
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
                    "procedure_description": "guloader has the ability to inject shellcode into a donor processes that is started in a suspended state. guloader has previously used regasm as a donor process.[26]"
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
                    "procedure_description": "guloader has the ability to perform anti-vm and anti-sandbox checks using string hashing, the api call enumwindows, and checking for qemu guest agent.[27]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "guloader has the ability to perform anti-debugging based on time checks, api calls, and cpuid.[27]"
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
                    "procedure_description": "guloader has the ability to perform anti-vm and anti-sandbox checks using string hashing, the api call enumwindows, and checking for qemu guest agent.[27]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "guloader has the ability to perform anti-debugging based on time checks, api calls, and cpuid.[27]"
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
                    "procedure_description": "guloader can use http to retrieve additional binaries.[149][150]"
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
                    "procedure_description": "guloader can download further malware for execution on the victim's machine.[206]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102",
                    "technique_link": "https://attack.mitre.org/techniques/T1102",
                    "technique_name": "web service",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for relaying data to/from a compromised system. popular websites and social media acting as a mechanism for c2 may give a significant amount of cover due to the likelihood that hosts within a network are already communicating with them prior to a compromise. using common services, such as those offered by google or twitter, makes it easier for adversaries to hide in expected noise. web service providers commonly use ssl/tls encryption, giving adversaries an added level of protection.",
                    "procedure_description": "guloader has the ability to download malware from google drive.[20]"
                }
            ]
        }
    ]
};