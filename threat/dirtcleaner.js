var threatdata = {
    "name": "DIRTCLEANER",
    "alias": "DIRTCLEANER, CCleaner Backdoor",
    "category": "Malware",
    "type": "Loader",
    "modified": "2021-10-27",
    "all_data": {
        "tool": "DIRTCLEANER",
        "names": [
            {
                "name": "DIRTCLEANER"
            },
            {
                "name": "CCleaner Backdoor"
            }
        ],
        "description": "(FireEye) The compromised CCleaner update (which we call DIRTCLEANER) is believed to download a second-stage loader (MD5: 748aa5fcfa2af451c76039faf6a8684d) that contains a 32-bit and 64-bit {{COLDJAVA}} DLL payload.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://docplayer.net/161018432-Double-dragon-apt41-a-dual-espionage-and-cyber-crime-operation.html",
            "https://blog.avast.com/progress-on-ccleaner-investigation",
            "https://blog.avast.com/avast-threat-labs-analysis-of-ccleaner-incident",
            "https://blog.avast.com/additional-information-regarding-the-recent-ccleaner-apt-security-incident",
            "https://blog.avast.com/update-ccleaner-attackers-entered-via-teamviewer",
            "https://blog.avast.com/new-investigations-in-ccleaner-incident-point-to-a-possible-third-stage-that-had-keylogger-capacities",
            "http://www.intezer.com/evidence-aurora-operation-still-active-supply-chain-attack-through-ccleaner/",
            "http://www.intezer.com/evidence-aurora-operation-still-active-part-2-more-ties-uncovered-between-ccleaner-hack-chinese-hackers/",
            "http://blog.talosintelligence.com/2017/09/avast-distributes-malware.html",
            "http://blog.talosintelligence.com/2017/09/ccleaner-c2-concern.html",
            "https://www.wired.com/story/ccleaner-malware-targeted-tech-firms",
            "http://blog.morphisec.com/morphisec-discovers-ccleaner-backdoor",
            "https://www.crowdstrike.com/blog/in-depth-analysis-of-the-ccleaner-backdoor-stage-2-dropper-and-its-payload/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ccleaner_backdoor"
        ],
        "uuid": "eea1ecd4-bc9f-49cf-8f31-e746c1eb051d",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "CCleaner Backdoor",
            "malware_alias": "DIRTCLEANER",
            "malware": "win.ccleaner_backdoor",
            "last_update": "2023-08-11 00:00:38",
            "tags": [
                "GCleaner"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://gcl-page.biz/check.php",
                        "timestamp": "2023-08-11 00:00:38"
                    },
                    {
                        "value": "http://gcl-page.biz/stats/save.php",
                        "timestamp": "2023-08-11 00:00:34"
                    },
                    {
                        "value": "http://gcl-partners.in/stats/remember.php",
                        "timestamp": "2023-01-05 00:35:39"
                    },
                    {
                        "value": "http://gcl-partners.in/dlc/distribution.php",
                        "timestamp": "2023-01-05 00:30:45"
                    },
                    {
                        "value": "http://appwebstat.biz/stats/done.php",
                        "timestamp": "2022-01-24 12:02:07"
                    },
                    {
                        "value": "http://appwebstat.biz/info.php",
                        "timestamp": "2022-01-19 17:42:10"
                    },
                    {
                        "value": "http://web-stat.biz/info.php",
                        "timestamp": "2022-01-12 00:22:21"
                    },
                    {
                        "value": "http://ad-postback.biz/stats/save.php",
                        "timestamp": "2021-12-11 08:36:32"
                    },
                    {
                        "value": "http://ad-postback.biz/check.php",
                        "timestamp": "2021-12-06 19:31:57"
                    },
                    {
                        "value": "http://ads-postback.biz/check.php",
                        "timestamp": "2021-12-03 20:21:22"
                    },
                    {
                        "value": "http://postbackstat.biz/stats/save.php",
                        "timestamp": "2021-11-30 09:27:21"
                    },
                    {
                        "value": "http://postbackstat.biz/check.php",
                        "timestamp": "2021-11-16 22:56:39"
                    },
                    {
                        "value": "http://g-localdevice.biz/check.php",
                        "timestamp": "2021-11-12 16:36:04"
                    },
                    {
                        "value": "http://gcl-gb.biz/stats/save.php",
                        "timestamp": "2021-10-26 23:26:07"
                    },
                    {
                        "value": "http://ggc-partners.info/decision.php",
                        "timestamp": "2021-08-13 07:56:02"
                    },
                    {
                        "value": "http://ggc-partners.info/dlc/distribution.php",
                        "timestamp": "2021-08-13 07:55:49"
                    },
                    {
                        "value": "http://ggc-partners.info/stats/remember.php",
                        "timestamp": "2021-08-13 07:55:43"
                    },
                    {
                        "value": "http://cleaner-partners.top/decision.php",
                        "timestamp": "2021-08-11 19:06:27"
                    },
                    {
                        "value": "http://ggc-partners.in/decision.php",
                        "timestamp": "2021-08-11 03:30:51"
                    },
                    {
                        "value": "http://ggc-partners.top/dlc/distribution.php",
                        "timestamp": "2021-08-09 20:20:51"
                    },
                    {
                        "value": "http://ggc-partners.top/stats/remember.php",
                        "timestamp": "2021-08-09 20:20:50"
                    },
                    {
                        "value": "http://gcc-prtnrs.top/stats/remember.php",
                        "timestamp": "2021-08-09 00:45:34"
                    },
                    {
                        "value": "http://gcc-prtnrs.top/dlc/distribution.php",
                        "timestamp": "2021-08-09 00:45:33"
                    },
                    {
                        "value": "http://gc-prtnrs.top/stats/remember.php",
                        "timestamp": "2021-08-08 16:30:32"
                    },
                    {
                        "value": "http://gc-prtnrs.top/dlc/distribution.php",
                        "timestamp": "2021-08-08 16:30:31"
                    },
                    {
                        "value": "http://gc-prtnrs.top/decision.php",
                        "timestamp": "2021-08-08 16:25:20"
                    }
                ],
                "domain": [
                    {
                        "value": "cleaner-partners.top",
                        "timestamp": "2021-08-11 19:40:08"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-08-11 00:00:38",
    "file_name": "dirtcleaner",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/resources/pe-file-infecting-malware-ot",
            "date": "2021-10-27",
            "organization": "Mandiant",
            "author": "Ken Proska",
            "title": "Portable Executable File Infecting Malware Is Increasingly Found in OT Networks",
            "categories": [
                "CCleaner Backdoor",
                "Floxif",
                "neshta",
                "Ramnit",
                "Sality",
                "Virut"
            ]
        },
        {
            "data_url": "https://stmxcsr.com/persistence/print-processor.html",
            "date": "2021-10-20",
            "organization": "Twitter (@lampnout)",
            "author": "Lampros Noutsos",
            "title": "Persistence and Privilege Escalation on Windows via Print Processors",
            "categories": [
                "CCleaner Backdoor"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/upload/corporate/ww-en/pt-esc/winnti-2020-eng.pdf",
            "date": "2020-09-08",
            "organization": "PTSecurity",
            "author": "PTSecurity",
            "title": "ShadowPad: new activity from the Winnti group",
            "categories": [
                "CCleaner Backdoor",
                "Korlia",
                "ShadowPad",
                "TypeHash"
            ]
        },
        {
            "data_url": "https://risky.biz/whatiswinnti/",
            "date": "2020-07-20",
            "organization": "Risky.biz",
            "author": "Daniel Gordon",
            "title": "What even is Winnti?",
            "categories": [
                "CCleaner Backdoor",
                "Ghost RAT",
                "PlugX",
                "ZXShell"
            ]
        },
        {
            "data_url": "https://securelist.com/big-threats-using-code-similarity-part-1/97239/",
            "date": "2020-06-09",
            "organization": "Kaspersky Labs",
            "author": "Costin Raiu",
            "title": "Looking at Big Threats Using Code Similarity. Part 1",
            "categories": [
                "Penquin Turla",
                "CCleaner Backdoor",
                "EternalPetya",
                "Regin",
                "WannaCryptor",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-atlas",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE ATLAS",
            "categories": [
                "Speculoos",
                "Winnti",
                "ACEHASH",
                "CCleaner Backdoor",
                "CHINACHOPPER",
                "Empire Downloader",
                "HTran",
                "MimiKatz",
                "PlugX",
                "Winnti",
                "APT41"
            ]
        },
        {
            "data_url": "https://blog.avast.com/update-ccleaner-attackers-entered-via-teamviewer",
            "date": "2018-04-17",
            "organization": "Avast",
            "author": "Ondrej Vlcek",
            "title": "Recent findings from CCleaner APT investigation reveal that attackers entered the Piriform network via TeamViewer",
            "categories": [
                "CCleaner Backdoor"
            ]
        },
        {
            "data_url": "https://blog.avast.com/new-investigations-in-ccleaner-incident-point-to-a-possible-third-stage-that-had-keylogger-capacities",
            "date": "2018-03-08",
            "organization": "Avast",
            "author": "Threat Intelligence Team",
            "title": "New investigations into the CCleaner incident point to a possible third stage that had keylogger capacities",
            "categories": [
                "CCleaner Backdoor"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/in-depth-analysis-of-the-ccleaner-backdoor-stage-2-dropper-and-its-payload/",
            "date": "2017-11-10",
            "organization": "CrowdStrike",
            "author": "Karan Sood",
            "title": "CCleaner Stage 2: In-Depth Analysis of the Payload",
            "categories": [
                "CCleaner Backdoor"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/protecting-software-supply-chain-deep-insights-ccleaner-backdoor/",
            "date": "2017-10-04",
            "organization": "CrowdStrike",
            "author": "Karan Sood",
            "title": "Protecting the Software Supply Chain: Deep Insights into the CCleaner Backdoor",
            "categories": [
                "CCleaner Backdoor"
            ]
        },
        {
            "data_url": "http://www.intezer.com/evidence-aurora-operation-still-active-part-2-more-ties-uncovered-between-ccleaner-hack-chinese-hackers/",
            "date": "2017-10-02",
            "organization": "Intezer",
            "author": "Jay Rosenberg",
            "title": "Evidence Aurora Operation Still Active Part 2: More Ties Uncovered Between CCleaner Hack & Chinese Hackers",
            "categories": [
                "CCleaner Backdoor"
            ]
        },
        {
            "data_url": "https://blog.avast.com/additional-information-regarding-the-recent-ccleaner-apt-security-incident",
            "date": "2017-09-25",
            "organization": "Avast",
            "author": "Threat Intelligence Team",
            "title": "Additional information regarding the recent CCleaner APT security incident",
            "categories": [
                "CCleaner Backdoor"
            ]
        },
        {
            "data_url": "https://blog.avast.com/avast-threat-labs-analysis-of-ccleaner-incident",
            "date": "2017-09-21",
            "organization": "Avast",
            "author": "Threat Intelligence Team",
            "title": "Avast Threat Labs analysis of CCleaner incident",
            "categories": [
                "CCleaner Backdoor"
            ]
        },
        {
            "data_url": "http://www.intezer.com/evidence-aurora-operation-still-active-supply-chain-attack-through-ccleaner/",
            "date": "2017-09-20",
            "organization": "Intezer",
            "author": "Jay Rosenberg",
            "title": "Evidence Aurora Operation Still Active: Supply Chain Attack Through CCleaner",
            "categories": [
                "CCleaner Backdoor"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2017/09/ccleaner-c2-concern.html",
            "date": "2017-09-20",
            "organization": "Cisco Talos",
            "author": "Edmund Brumaghin",
            "title": "CCleaner Command and Control Causes Concern",
            "categories": [
                "CCleaner Backdoor"
            ]
        },
        {
            "data_url": "https://blog.avast.com/progress-on-ccleaner-investigation",
            "date": "2017-09-20",
            "organization": "Avast",
            "author": "Vince Steckler",
            "title": "Progress on CCleaner Investigation",
            "categories": [
                "CCleaner Backdoor"
            ]
        },
        {
            "data_url": "https://www.wired.com/story/ccleaner-malware-targeted-tech-firms",
            "date": "2017-09-20",
            "organization": "Wired",
            "author": "Andy Greenberg",
            "title": "The CCleaner Malware Fiasco Targeted at Least 18 Specific Tech Firms",
            "categories": [
                "CCleaner Backdoor"
            ]
        },
        {
            "data_url": "https://twitter.com/craiu/status/910148928796061696",
            "date": "2017-09-19",
            "organization": "Twitter (@craiu)",
            "author": "Costin Raiu",
            "title": "Tweet on Shared Code between CCleaner and APT17 Missl backdoor",
            "categories": [
                "CCleaner Backdoor"
            ]
        },
        {
            "data_url": "http://blog.morphisec.com/morphisec-discovers-ccleaner-backdoor",
            "date": "2017-09-18",
            "organization": "Morphisec",
            "author": "Michael Gorelik",
            "title": "Morphisec Discovers CCleaner Backdoor Saving Millions of Avast Users",
            "categories": [
                "CCleaner Backdoor"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2017/09/avast-distributes-malware.html",
            "date": "2017-09-18",
            "organization": "Cisco Talos",
            "author": "Edmund Brumaghin",
            "title": "CCleanup: A Vast Number of Machines at Risk",
            "categories": [
                "CCleaner Backdoor"
            ]
        }
    ],
    "mitre": []
};