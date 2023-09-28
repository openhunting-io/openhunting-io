var threatdata = {
    "name": "DIRTCLEANER",
    "alias": "DIRTCLEANER, CCleaner Backdoor",
    "category": "Malware",
    "type": "Loader",
    "modified": "2020-05-13",
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
    "mitre": [],
    "file_name": "dirtcleaner",
    "analysis": null
};