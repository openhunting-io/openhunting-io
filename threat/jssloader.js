var threatdata = {
    "name": "JSSLoader",
    "alias": "JSSLoader, FOWLGAZE",
    "category": "Malware",
    "type": "Backdoor, Downloader, Exfiltration",
    "modified": "2023-09-12",
    "all_data": {
        "tool": "JSSLoader",
        "names": [
            {
                "name": "JSSLoader"
            },
            {
                "name": "FOWLGAZE"
            }
        ],
        "description": "(Morphisec) The JSSLoader is a RAT (Remote Access Trojan) with multiple capabilities that were introduced over time. These various capabilities are documented throughout this report. In the specific attack chain that was recently intercepted, the RAT typically executes a DiceLoader which is responsible for the reflective loading and execution of a Cobalt beacon.\nNot surprisingly, the C2 hosting provider is a company named FranTech Solutions, which has been used before by the FIN7 group.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://blog.morphisec.com/the-evolution-of-the-fin7-jssloader"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.jssloader"
        ],
        "uuid": "7947f799-39c9-4585-8693-92a483ea15e7",
        "last-card-change": "2022-04-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "JSSLoader",
            "malware_alias": null,
            "malware": "win.jssloader",
            "last_update": "2023-05-11 17:22:47",
            "tags": [
                "fin7",
                "Jssloader",
                "jssloader",
                "JSSLoader"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "twopawandcompany.net",
                        "timestamp": "2023-03-28 18:54:50"
                    },
                    {
                        "value": "bluelotuslasvegas.org",
                        "timestamp": "2023-03-28 18:30:01"
                    },
                    {
                        "value": "its-zach-time.com",
                        "timestamp": "2023-03-23 18:15:21"
                    },
                    {
                        "value": "peacemakerspodcast.com",
                        "timestamp": "2022-10-03 17:07:31"
                    },
                    {
                        "value": "sashakuznetsova.com",
                        "timestamp": "2022-09-28 19:11:04"
                    },
                    {
                        "value": "scriptureinwood.com",
                        "timestamp": "2022-09-28 19:10:06"
                    },
                    {
                        "value": "thelovebreakthrough.com",
                        "timestamp": "2022-09-20 19:03:45"
                    },
                    {
                        "value": "meditatesrilanka.com",
                        "timestamp": "2022-09-20 19:01:19"
                    },
                    {
                        "value": "verakhi.com",
                        "timestamp": "2022-09-06 17:58:46"
                    },
                    {
                        "value": "molkaders.com",
                        "timestamp": "2022-09-06 09:10:22"
                    },
                    {
                        "value": "energytoleave.com",
                        "timestamp": "2022-09-06 09:09:07"
                    },
                    {
                        "value": "qender.com",
                        "timestamp": "2022-08-20 08:17:24"
                    },
                    {
                        "value": "modolorem.com",
                        "timestamp": "2022-08-10 17:49:38"
                    },
                    {
                        "value": "essentialsmassageanddayspa.com",
                        "timestamp": "2022-07-25 17:44:08"
                    },
                    {
                        "value": "realchickenpies.com",
                        "timestamp": "2022-07-21 09:06:31"
                    },
                    {
                        "value": "weotophoto.com",
                        "timestamp": "2022-06-27 09:07:51"
                    },
                    {
                        "value": "massageatworknc.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "momentumwrp.com",
                        "timestamp": "2022-06-27 09:17:16"
                    },
                    {
                        "value": "divorceradio.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "mssibong.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "maxuminus.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "southernstrongclothing.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "marioterno.com",
                        "timestamp": "2022-12-06 07:08:54"
                    },
                    {
                        "value": "psychotaco.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "bullerdix.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "securmeawards.com",
                        "timestamp": "2022-06-27 09:07:50"
                    },
                    {
                        "value": "apoxonbothyourhouses.org",
                        "timestamp": "2022-07-21 09:06:31"
                    },
                    {
                        "value": "bamadora.com",
                        "timestamp": "2022-12-06 07:08:54"
                    },
                    {
                        "value": "borrantore.com",
                        "timestamp": "2022-07-21 09:06:31"
                    },
                    {
                        "value": "captaincoathanger.com",
                        "timestamp": "2022-07-21 09:06:31"
                    },
                    {
                        "value": "childrensbooksman.com",
                        "timestamp": "2022-07-21 09:06:31"
                    },
                    {
                        "value": "lacoquetaantojitosyraspados.com",
                        "timestamp": "2022-06-27 07:46:10"
                    },
                    {
                        "value": "masstolis.com",
                        "timestamp": "2022-07-21 09:06:31"
                    },
                    {
                        "value": "suvulaki.com",
                        "timestamp": "2022-07-21 09:06:32"
                    },
                    {
                        "value": "tuschbrothersbrewery.com",
                        "timestamp": "2022-07-21 09:06:32"
                    },
                    {
                        "value": "whiteheadscanesyrup.com",
                        "timestamp": "2022-07-21 09:06:32"
                    }
                ],
                "ip:port": [
                    {
                        "value": "209.141.35.112:443",
                        "timestamp": "2023-03-28 19:09:28"
                    },
                    {
                        "value": "198.98.60.218:443",
                        "timestamp": "2023-05-11 17:22:47"
                    },
                    {
                        "value": "198.98.60.5:443",
                        "timestamp": "2023-04-21 17:24:48"
                    },
                    {
                        "value": "205.185.123.192:443",
                        "timestamp": "2023-03-28 19:09:29"
                    },
                    {
                        "value": "45.61.184.75:443",
                        "timestamp": "2023-03-07 17:26:31"
                    },
                    {
                        "value": "198.98.49.19:443",
                        "timestamp": "2023-01-31 17:25:31"
                    },
                    {
                        "value": "209.141.34.163:443",
                        "timestamp": "2023-01-14 17:23:05"
                    },
                    {
                        "value": "209.141.57.163:443",
                        "timestamp": "2023-01-18 17:24:35"
                    },
                    {
                        "value": "122.146.8.181:443",
                        "timestamp": "2022-10-03 17:08:17"
                    },
                    {
                        "value": "209.141.48.216:443",
                        "timestamp": "2022-09-28 19:11:49"
                    },
                    {
                        "value": "205.185.125.223:443",
                        "timestamp": "2022-09-28 19:10:36"
                    },
                    {
                        "value": "45.61.185.72:443",
                        "timestamp": "2022-09-20 19:04:27"
                    },
                    {
                        "value": "198.98.58.153:443",
                        "timestamp": "2022-09-20 19:02:06"
                    },
                    {
                        "value": "107.189.12.93:443",
                        "timestamp": "2022-09-06 17:59:32"
                    },
                    {
                        "value": "104.244.76.67:443",
                        "timestamp": "2022-09-06 09:10:53"
                    },
                    {
                        "value": "205.185.118.83:443",
                        "timestamp": "2022-09-06 09:09:36"
                    },
                    {
                        "value": "198.98.57.105:443",
                        "timestamp": "2022-08-20 08:18:09"
                    },
                    {
                        "value": "205.185.121.115:443",
                        "timestamp": "2022-08-10 17:50:14"
                    },
                    {
                        "value": "205.185.116.20:443",
                        "timestamp": "2022-07-25 17:45:00"
                    },
                    {
                        "value": "104.244.77.97:443",
                        "timestamp": "2022-07-21 08:57:48"
                    },
                    {
                        "value": "107.189.4.31:443",
                        "timestamp": "2022-07-21 08:57:48"
                    },
                    {
                        "value": "209.141.53.30:443",
                        "timestamp": "2022-06-27 09:48:12"
                    },
                    {
                        "value": "209.141.60.216:443",
                        "timestamp": "2022-06-27 09:48:12"
                    },
                    {
                        "value": "205.185.117.138:443",
                        "timestamp": "2022-06-27 09:48:11"
                    },
                    {
                        "value": "209.141.37.233:443",
                        "timestamp": "2022-06-27 09:48:11"
                    },
                    {
                        "value": "209.141.44.201:443",
                        "timestamp": "2022-06-27 09:48:11"
                    },
                    {
                        "value": "198.98.62.184:443",
                        "timestamp": "2022-06-27 09:48:10"
                    },
                    {
                        "value": "199.195.252.118:443",
                        "timestamp": "2022-06-27 09:48:10"
                    },
                    {
                        "value": "107.189.28.147:443",
                        "timestamp": "2022-06-27 09:48:09"
                    },
                    {
                        "value": "198.98.53.69:443",
                        "timestamp": "2022-06-27 09:48:09"
                    },
                    {
                        "value": "45.61.188.10:443",
                        "timestamp": "2022-06-27 09:48:08"
                    },
                    {
                        "value": "107.189.1.145:443",
                        "timestamp": "2022-06-27 09:48:08"
                    },
                    {
                        "value": "205.185.116.79:443",
                        "timestamp": "2022-07-21 08:57:49"
                    },
                    {
                        "value": "209.141.50.24:443",
                        "timestamp": "2022-07-21 08:57:49"
                    },
                    {
                        "value": "107.189.14.146:443",
                        "timestamp": "2022-07-21 08:57:48"
                    },
                    {
                        "value": "198.98.53.196:443",
                        "timestamp": "2022-07-21 08:57:48"
                    },
                    {
                        "value": "199.195.251.78:443",
                        "timestamp": "2022-07-21 08:57:48"
                    },
                    {
                        "value": "205.185.115.179:443",
                        "timestamp": "2022-07-21 08:57:48"
                    },
                    {
                        "value": "107.189.13.196:443",
                        "timestamp": "2022-07-21 08:57:48"
                    },
                    {
                        "value": "107.189.14.55:443",
                        "timestamp": "2022-07-05 09:17:52"
                    },
                    {
                        "value": "209.141.47.237:443",
                        "timestamp": "2022-07-21 08:57:49"
                    },
                    {
                        "value": "209.141.52.48:443",
                        "timestamp": "2022-07-21 08:57:49"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "a15023ca1745e070bca7eac35a7326b3ec1691d32ac7dc5b607f0a8f53bc0f97",
                        "timestamp": "2022-06-27 07:52:37"
                    },
                    {
                        "value": "3b6d61add64402dc74d237e69d701ad2b0bea9a525798a376cd13f2090bb39ee",
                        "timestamp": "2021-09-14 03:23:27"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "1ac719c744d22f42e4978e7b55828435",
                        "timestamp": "2021-06-11 00:43:06"
                    },
                    {
                        "value": "526d56017ef5105277fe0d366c95c39d",
                        "timestamp": "2021-06-11 00:43:06"
                    },
                    {
                        "value": "6f891127db5efdb86a63c7a60a96103f",
                        "timestamp": "2021-06-08 22:21:03"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-05-11 17:22:47",
    "file_name": "jssloader",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.microsoft.com/en-us/security/blog/2023/09/12/malware-distributor-storm-0324-facilitates-ransomware-access/",
            "date": "2023-09-12",
            "organization": "Microsoft",
            "author": "Microsoft Threat Intelligence",
            "title": "Malware distributor Storm-0324 facilitates ransomware access",
            "categories": [
                "JSSLoader"
            ]
        },
        {
            "data_url": "https://malwarebytes.app.box.com/s/ym6r7o5hq0rx2nxjbctfv2sw5vx386ni",
            "date": "2022-08-15",
            "organization": "Malwarebytes",
            "author": "Threat Intelligence Team",
            "title": "Threat Intelligence - JSSLoader: the shellcode edition",
            "categories": [
                "JSSLoader"
            ]
        },
        {
            "data_url": "https://www.malwarebytes.com/blog/threat-intelligence/2022/08/jssloader-the-shellcode-edition",
            "date": "2022-08-15",
            "organization": "Malwarebytes",
            "author": "Threat Intelligence Team",
            "title": "JSSLoader: the shellcode edition",
            "categories": [
                "JSSLoader"
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
            "data_url": "https://blog.morphisec.com/vmware-identity-manager-attack-backdoor",
            "date": "2022-04-25",
            "organization": "Morphisec",
            "author": "Morphisec Labs",
            "title": "New Core Impact Backdoor Delivered Via VMware Vulnerability",
            "categories": [
                "Cobalt Strike",
                "JSSLoader"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/evolution-of-fin7",
            "date": "2022-04-04",
            "organization": "Mandiant",
            "author": "Bryce Abdo",
            "title": "FIN7 Power Hour: Adversary Archaeology and the Evolution of FIN7",
            "categories": [
                "Griffon",
                "BABYMETAL",
                "Carbanak",
                "Cobalt Strike",
                "JSSLoader",
                "Termite"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/malicious-microsoft-excel-add-ins-used-to-deliver-rat-malware/",
            "date": "2022-03-24",
            "organization": "Bleeping Computer",
            "author": "Bill Toulas",
            "title": "Malicious Microsoft Excel add-ins used to deliver RAT malware",
            "categories": [
                "JSSLoader"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/new-jssloader-trojan-delivered-through-xll-files",
            "date": "2022-03-23",
            "organization": "Morphisec",
            "author": "Hido Cohen",
            "title": "New JSSLoader Trojan Delivered Through XLL Files",
            "categories": [
                "JSSLoader"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/excel-add-ins-deliver-jssloader-malware",
            "date": "2022-03-08",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Excel Add-ins Deliver JSSLoader Malware",
            "categories": [
                "JSSLoader"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/fin7-tools-resurface-in-the-field-splinter-or-copycat.html",
            "date": "2021-11-11",
            "organization": "splunk",
            "author": "Splunk Threat Research Team",
            "title": "FIN7 Tools Resurface in the Field \u2013 Splinter or Copycat?",
            "categories": [
                "JSSLoader",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-embraces-big-game-hunting-part-2/",
            "date": "2021-11-04",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "CARBON SPIDER Embraces Big Game Hunting, Part 2",
            "categories": [
                "BlackMatter",
                "Griffon",
                "BlackMatter",
                "DarkSide",
                "HiddenTear",
                "JSSLoader"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-embraces-big-game-hunting-part-1/",
            "date": "2021-08-30",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "CARBON SPIDER Embraces Big Game Hunting, Part 1",
            "categories": [
                "Bateleur",
                "Griffon",
                "Carbanak",
                "DarkSide",
                "JSSLoader",
                "PILLOWMINT",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/jssloader-recoded-and-reloaded",
            "date": "2021-06-24",
            "organization": "Proofpoint",
            "author": "Dennis Schwarz",
            "title": "JSSLoader: Recoded and Reloaded",
            "categories": [
                "JSSLoader"
            ]
        },
        {
            "data_url": "https://www.morphisec.com/hubfs/eBooks_and_Whitepapers/FIN7%20JSSLOADER%20FINAL%20WEB.pdf",
            "date": "2021-01-04",
            "organization": "Morphisec",
            "author": "Arnold Osipov",
            "title": "Threat Profile the Evolution of the FIN7 JSSLoader",
            "categories": [
                "JSSLoader"
            ]
        }
    ],
    "mitre": []
};