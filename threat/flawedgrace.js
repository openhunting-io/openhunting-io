var threatdata = {
    "name": "FlawedGrace",
    "alias": "FlawedGrace, GraceWire",
    "category": "Malware",
    "type": "Backdoor, Downloader",
    "modified": "2023-06-12",
    "all_data": {
        "tool": "FlawedGrace",
        "names": [
            {
                "name": "FlawedGrace"
            },
            {
                "name": "GraceWire"
            }
        ],
        "description": "(Proofpoint) FlawedGrace is a remote access trojan (RAT) named after debugging artifacts (class names) left in the analyzed sample.\n\nThe malware is written in C++. It is a very large program and makes extensive use of object-oriented and multithreaded programming techniques. This makes reverse engineering and debugging the malware both difficult and time consuming. The coding style and techniques suggest that FlawedGrace was not written by the same developer as {{ServHelper}}.\n\nFlawedGrace uses a complicated binary protocol for its command and control. It can use a configurable port for communications, but all samples we have observed to date have used port 443. Figure 8 shows an example of the first four messages between an infected system and C&C server.\n\nFlawedGrace also uses a series of commands, provided below for reference:\n\u2022 target_remove\n\u2022 target_update\n\u2022 target_reboot\n\u2022 target_module_load\n\u2022 target_module_load_external\n\u2022 target_module_unload\n\u2022 target_download\n\u2022 target_upload\n\u2022 target_rdp\n\u2022 target_passwords\n\u2022 target_servers\n\u2022 target_script\n\u2022 destroy_os\n\u2022 desktop_stat",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/servhelper-and-flawedgrace-new-malware-introduced-ta505",
            "https://www.msreverseengineering.com/blog/2019/1/14/a-quick-solution-to-an-ugly-reverse-engineering-problem"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0383/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.flawedgrace"
        ],
        "uuid": "2e3f838e-197c-412f-a98d-4b3ad248baa6",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "FlawedGrace",
            "malware_alias": "GraceWire",
            "malware": "win.flawedgrace",
            "last_update": "2021-10-20 12:13:33",
            "tags": [],
            "ioc": {
                "domain": [
                    {
                        "value": "cdn-wfs-nspod.com",
                        "timestamp": "2021-10-20 12:13:33"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-10-20 12:13:33",
    "file_name": "flawedgrace",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://thedfirreport.com/2023/06/12/a-truly-graceful-wipe-out/",
            "date": "2023-06-12",
            "organization": "The DFIR Report",
            "author": "Maxime Thiebaut",
            "title": "A Truly Graceful Wipe Out",
            "categories": [
                "FlawedGrace",
                "Silence"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/breaking-the-silence-recent-truebot-activity/",
            "date": "2022-12-08",
            "organization": "Cisco Talos",
            "author": "Tiago Pereira",
            "title": "Breaking the silence - Recent Truebot activity",
            "categories": [
                "Clop",
                "Cobalt Strike",
                "FlawedGrace",
                "Raspberry Robin",
                "Silence",
                "Teleport"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20221115161556/https://blog.codsec.com/posts/malware/gracewire_adventure/",
            "date": "2022-11-11",
            "organization": "Codesec",
            "author": "Hugo Caron",
            "title": "GraceWire / FlawedGrace malware adventure",
            "categories": [
                "FlawedGrace"
            ]
        },
        {
            "data_url": "https://research.nccgroup.com/2021/12/01/tracking-a-p2p-network-related-with-ta505/",
            "date": "2021-12-01",
            "organization": "NCC Group",
            "author": "Nikolaos Pantazopoulos",
            "title": "Tracking a P2P network related to TA505",
            "categories": [
                "FlawedGrace",
                "Necurs"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/how-falcon-complete-stopped-a-solarwinds-serv-u-exploit-campaign/",
            "date": "2021-10-21",
            "organization": "CrowdStrike",
            "author": "Alex Clinton",
            "title": "Stopping GRACEFUL SPIDER: Falcon Complete\u2019s Fast Response to Recent SolarWinds Serv-U Exploit Campaign",
            "categories": [
                "Cobalt Strike",
                "FlawedGrace",
                "TinyMet"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/whatta-ta-ta505-ramps-activity-delivers-new-flawedgrace-variant",
            "date": "2021-10-19",
            "organization": "Proofpoint",
            "author": "Zydeca Cass",
            "title": "Whatta TA: TA505 Ramps Up Activity, Delivers New FlawedGrace Variant",
            "categories": [
                "FlawedGrace",
                "MirrorBlast"
            ]
        },
        {
            "data_url": "https://www.msreverseengineering.com/blog/2021/3/2/an-exhaustively-analyzed-idb-for-flawedgrace",
            "date": "2021-03-02",
            "organization": "M\u00f6bius Strip Reverse Engineering",
            "author": "Rolf Rolles",
            "title": "An Exhaustively-Analyzed IDB for FlawedGrace",
            "categories": [
                "FlawedGrace"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-009.pdf",
            "date": "2020-08-20",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "Development of the Activity of the TA505 Cybercriminal Group",
            "categories": [
                "AndroMut",
                "Bart",
                "Clop",
                "Dridex",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Locky",
                "Marap",
                "QuantLoader",
                "SDBbot",
                "ServHelper",
                "tRat",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-006.pdf",
            "date": "2020-06-22",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "\u00c9volution De Lactivit\u00e9 du Groupe Cybercriminel TA505",
            "categories": [
                "Amadey",
                "AndroMut",
                "Bart",
                "Clop",
                "Dridex",
                "FlawedGrace",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Jaff",
                "Locky",
                "Marap",
                "Philadephia Ransom",
                "QuantLoader",
                "Scarab Ransomware",
                "SDBbot",
                "ServHelper",
                "Silence",
                "tRat",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://twitter.com/MsftSecIntel/status/1273359829390655488",
            "date": "2020-06-17",
            "organization": "Twitter (@MsftSecIntel)",
            "author": "Microsoft Security Intelligence",
            "title": "A tweet thread on TA505 using CAPTCHA to avoid detection and infecting victims with FlawedGrace",
            "categories": [
                "FlawedGrace"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/a-brief-history-of-ta505",
            "date": "2020-05-21",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "A brief history of TA505",
            "categories": [
                "AndroMut",
                "Bart",
                "Dridex",
                "FlawedAmmyy",
                "FlawedGrace",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Jaff",
                "Kegotip",
                "Locky",
                "Necurs",
                "Philadephia Ransom",
                "Pony",
                "QuantLoader",
                "Rockloader",
                "SDBbot",
                "ServHelper",
                "Shifu",
                "Snatch",
                "TrickBot"
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
            "data_url": "https://www.pwc.co.uk/cyber-security/assets/cyber-threats-2019-retrospect.pdf",
            "date": "2020-03-03",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2019:A Year in Retrospect",
            "categories": [
                "KevDroid",
                "MESSAGETAP",
                "magecart",
                "AndroMut",
                "Cobalt Strike",
                "CobInt",
                "Crimson RAT",
                "DNSpionage",
                "Dridex",
                "Dtrack",
                "Emotet",
                "FlawedAmmyy",
                "FlawedGrace",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Grateful POS",
                "ISFB",
                "Kazuar",
                "LockerGoga",
                "Nokki",
                "QakBot",
                "Ramnit",
                "REvil",
                "Rifdoor",
                "RokRAT",
                "Ryuk",
                "shadowhammer",
                "ShadowPad",
                "Shifu",
                "Skipper",
                "StoneDrill",
                "Stuxnet",
                "TrickBot",
                "Winnti",
                "ZeroCleare",
                "APT41",
                "MUSTANG PANDA",
                "Sea Turtle"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/uploads/2020/02/13/cb78386a082f465f259b37dae5df4884.pdf",
            "date": "2020-02-13",
            "organization": "Qianxin",
            "author": "Qi Anxin Threat Intelligence Center",
            "title": "APT Report 2019",
            "categories": [
                "Chrysaor",
                "Exodus",
                "Dacls",
                "VPNFilter",
                "DNSRat",
                "Griffon",
                "KopiLuwak",
                "More_eggs",
                "SQLRat",
                "AppleJeus",
                "BONDUPDATER",
                "Agent.BTZ",
                "Anchor",
                "AndroMut",
                "AppleJeus",
                "BOOSTWRITE",
                "Brambul",
                "Carbanak",
                "Cobalt Strike",
                "Dacls",
                "DistTrack",
                "DNSpionage",
                "Dtrack",
                "ELECTRICFISH",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Grateful POS",
                "HOPLIGHT",
                "Imminent Monitor RAT",
                "jason",
                "Joanap",
                "KerrDown",
                "KEYMARBLE",
                "Lambert",
                "LightNeuron",
                "LoJax",
                "MiniDuke",
                "PolyglotDuke",
                "PowerRatankba",
                "Rising Sun",
                "SDBbot",
                "ServHelper",
                "Snatch",
                "Stuxnet",
                "TinyMet",
                "tRat",
                "TrickBot",
                "Volgmer",
                "X-Agent",
                "Zebrocy"
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
            "data_url": "https://www.msreverseengineering.com/blog/2019/1/14/a-quick-solution-to-an-ugly-reverse-engineering-problem",
            "date": "2019-01-14",
            "organization": "M\u00f6bius Strip Reverse Engineering",
            "author": "Rolf Rolles",
            "title": "A Quick Solution to an Ugly Reverse Engineering Problem",
            "categories": [
                "FlawedGrace"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/servhelper-and-flawedgrace-new-malware-introduced-ta505",
            "date": "2019-01-09",
            "organization": "Proofpoint",
            "author": "Dennis Schwarz",
            "title": "ServHelper and FlawedGrace - New malware introduced by TA505",
            "categories": [
                "FlawedGrace",
                "ServHelper"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "flawedgrace",
            "procedure_code": "s0383",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0383",
            "techniques": [
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
                    "procedure_description": "flawedgrace encrypts its c2 configuration files with aes in cbc mode.[129]"
                }
            ]
        }
    ]
};