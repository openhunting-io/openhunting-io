var threatdata = {
    "name": "Ramnit",
    "alias": "Ramnit, Nimnul",
    "category": "Malware",
    "type": "Banking trojan, Credential stealer, Info stealer, Exfiltration",
    "modified": "2022-08-18",
    "all_data": {
        "tool": "Ramnit",
        "names": [
            {
                "name": "Ramnit"
            },
            {
                "name": "Nimnul"
            }
        ],
        "description": "(Cybereason) The Ramnit Trojan is a type of malware able to exfiltrate sensitive data. This kind of data can include anything ranging from banking credentials, FTP passwords, session cookies, and personal data. Leaking this information can easily destroy user trust in a business, and in the process lose customers and ruin reputations. Luckily, our onboarding was timely, and was able to detect the trojan just as it was beginning to exfiltrate information. Our customer used our remediation tool immediately to stop the exfiltration in its tracks.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Credential stealer",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.cybereason.com/blog/banking-trojan-delivered-by-lolbins-ramnit-trojan",
            "https://malwarebreakdown.com/2017/08/23/the-seamless-campaign-isnt-losing-any-steam/",
            "http://www.nao-sec.org/2018/01/analyzing-ramnit-used-in-seamless.html",
            "http://contagiodump.blogspot.com/2012/01/blackhole-ramnit-samples-and-analysis.html",
            "https://www.cert.pl/en/news/single/ramnit-in-depth-analysis/",
            "https://research.checkpoint.com/ramnits-network-proxy-servers/",
            "http://www.vkremez.com/2018/02/deeper-dive-into-ramnit-banker-vnc-ifsb.html",
            "https://www.symantec.com/content/dam/symantec/docs/security-center/white-papers/w32-ramnit-analysis-15-en.pdf",
            "https://securityintelligence.com/posts/ramnit-banking-trojan-stealing-card-data/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ramnit"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Ramnit"
        ],
        "uuid": "662b809d-91d0-4190-b58d-b9080d2f70c3",
        "last-card-change": "2022-02-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Ramnit",
            "malware_alias": "Nimnul",
            "malware": "win.ramnit",
            "last_update": "2022-05-31 22:30:06",
            "tags": [
                "Ramnit",
                "EVILDR",
                "EVILNUM",
                "EVILNK"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "185.236.76.230:80",
                        "timestamp": "2022-05-31 22:30:06"
                    },
                    {
                        "value": "31.192.107.232:443",
                        "timestamp": "2022-05-31 22:29:30"
                    }
                ],
                "domain": [
                    {
                        "value": "www.treeboxmail.com",
                        "timestamp": "2022-05-31 22:28:55"
                    },
                    {
                        "value": "infntio.com",
                        "timestamp": "2022-05-31 22:28:12"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "42761e128d32aea9f3e2c0473c25a32b",
                        "timestamp": "2021-09-15 13:46:52"
                    },
                    {
                        "value": "2bb5aa4787a683f6cf87f5d682972e7e",
                        "timestamp": "2021-09-15 13:46:52"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-05-31 22:30:06",
    "file_name": "ramnit",
    "analysis": null,
    "articles": [
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
            "data_url": "https://artik.blue/malware4",
            "date": "2022-07-12",
            "organization": "Artik Blue",
            "author": "Artik Blue",
            "title": "Malware analysis with IDA/Radare2 - Multiple unpacking (Ramnit worm)",
            "categories": [
                "Ramnit"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/ramnit-banking-trojan-stealing-card-data/",
            "date": "2022-01-31",
            "organization": "IBM",
            "author": "Limor Kessem",
            "title": "Top-Ranking Banking Trojan Ramnit Out to Steal Payment Card Data",
            "categories": [
                "Ramnit"
            ]
        },
        {
            "data_url": "https://muha2xmad.github.io/unpacking/ramnit/",
            "date": "2022-01-12",
            "organization": "muha2xmad",
            "author": "Muhammad Hasan Ali",
            "title": "Unpacking Ramnit malware",
            "categories": [
                "Ramnit"
            ]
        },
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
            "data_url": "https://securelist.com/financial-cyberthreats-in-2020/101638/",
            "date": "2021-03-31",
            "organization": "Kaspersky",
            "author": "Kaspersky",
            "title": "Financial Cyberthreats in 2020",
            "categories": [
                "BetaBot",
                "DanaBot",
                "Emotet",
                "Gozi",
                "Ramnit",
                "RTM",
                "SpyEye",
                "TrickBot",
                "Zeus"
            ]
        },
        {
            "data_url": "https://ibm.ent.box.com/s/hs5pcayhbbhjvj8di5sqdpbbd88tsh89",
            "date": "2021-02-24",
            "organization": "IBM",
            "author": "IBM SECURITY X-FORCE",
            "title": "X-Force Threat Intelligence Index 2021",
            "categories": [
                "Emotet",
                "QakBot",
                "Ramnit",
                "REvil",
                "TrickBot"
            ]
        },
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/gold-fairfax",
            "date": "2021",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "Threat Profile: GOLD FAIRFAX",
            "categories": [
                "Ramnit",
                "GOLD FAIRFAX"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=l6ZunH6YG0A",
            "date": "2020-12-29",
            "organization": "Youtube (Guided Hacking)",
            "author": "Guided Hacking",
            "title": "How to Unpack Ramnit Dropper - Malware Unpacking Tutorial 2",
            "categories": [
                "Ramnit"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2020/graphology-of-an-exploit-playbit/",
            "date": "2020-10-26",
            "organization": "Checkpoint",
            "author": "Itay Cohen",
            "title": "Exploit Developer Spotlight: The Story of PlayBit",
            "categories": [
                "Dyre",
                "Maze",
                "PyLocky",
                "Ramnit",
                "REvil"
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
            "data_url": "https://redcanary.com/resources/webinars/deep-dive-process-injection/",
            "date": "2020-06-17",
            "organization": "Youtube (Red Canary)",
            "author": "Erika Noerenberg",
            "title": "ATT&CK\u00ae Deep Dive: Process Injection",
            "categories": [
                "ISFB",
                "Ramnit",
                "TrickBot"
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
            "data_url": "https://gallery.mailchimp.com/c35aef82661dad887b8162a4f/files/e24e8206-a157-4796-a8cb-2b7262cc76e8/CSIS_Threat_Matrix_H1_2019.pdf",
            "date": "2020-01-10",
            "organization": "CSIS",
            "author": "CSIS",
            "title": "Threat Matrix H1 2019",
            "categories": [
                "Gustuff",
                "magecart",
                "Emotet",
                "Gandcrab",
                "Ramnit",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=N4f2e8Mygag",
            "date": "2019-05-31",
            "organization": "Youtube (0verfl0w_)",
            "author": "0verfl0w_",
            "title": "Defeating Commercial and Custom Packers like a Pro - VMProtect, ASPack, PECompact, and more",
            "categories": [
                "FlawedAmmyy",
                "Ramnit"
            ]
        },
        {
            "data_url": "https://blogs.akamai.com/2019/02/ramnit-in-the-uk.html",
            "date": "2019-02-27",
            "organization": "Akamai",
            "author": "Asaf Nadler",
            "title": "Ramnit in the UK",
            "categories": [
                "Ramnit"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/ramnits-network-proxy-servers/",
            "date": "2018-08-05",
            "organization": "Check Point",
            "author": "Alexey Bukhteyev",
            "title": "Ramnit\u2019s Network of Proxy Servers",
            "categories": [
                "Ngioweb",
                "Ramnit"
            ]
        },
        {
            "data_url": "http://www.vkremez.com/2018/02/deeper-dive-into-ramnit-banker-vnc-ifsb.html",
            "date": "2018-02-22",
            "organization": "",
            "author": "Vitali Kremez",
            "title": "Let's Learn: Deeper Dive into Ramnit Banker \"VNC IFSB\" Remote Control Module",
            "categories": [
                "Ramnit"
            ]
        },
        {
            "data_url": "http://www.nao-sec.org/2018/01/analyzing-ramnit-used-in-seamless.html",
            "date": "2018-01-01",
            "organization": "nao_sec blog",
            "author": "nao_sec",
            "title": "Analyzing Ramnit used in Seamless campaign",
            "categories": [
                "Ramnit"
            ]
        },
        {
            "data_url": "https://www.cert.pl/en/news/single/ramnit-in-depth-analysis/",
            "date": "2017-09-29",
            "organization": "CERT.PL",
            "author": "Micha\u0142 Praszmo",
            "title": "Ramnit \u2013 in-depth analysis",
            "categories": [
                "Ramnit"
            ]
        },
        {
            "data_url": "https://malwarebreakdown.com/2017/08/23/the-seamless-campaign-isnt-losing-any-steam/",
            "date": "2017-08-23",
            "organization": "",
            "author": "Malware Breakdown",
            "title": "The Seamless Campaign Isn\u2019t Losing Any Steam",
            "categories": [
                "Ramnit"
            ]
        },
        {
            "data_url": "https://www.researchgate.net/profile/Lorenzo-De-Carli/publication/320250366_Botnet_protocol_inference_in_the_presence_of_encrypted_traffic/links/5fa9608792851cc286a08592/Botnet-protocol-inference-in-the-presence-of-encrypted-traffic.pdf?origin=publication_detail",
            "date": "2017-05",
            "organization": "IEEE",
            "author": "Lorenzo De Carli",
            "title": "Botnet Protocol Inference in the Presence of Encrypted Traffic",
            "categories": [
                "Ramnit",
                "Sality",
                "ZeroAccess"
            ]
        },
        {
            "data_url": "https://www.symantec.com/content/dam/symantec/docs/security-center/white-papers/w32-ramnit-analysis-15-en.pdf",
            "date": "2015-02-24",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "W32.Ramnit analysis",
            "categories": [
                "Ramnit"
            ]
        },
        {
            "data_url": "http://contagiodump.blogspot.com/2012/01/blackhole-ramnit-samples-and-analysis.html",
            "date": "2012-01-12",
            "organization": "Contagio Dump",
            "author": "Mila Parkour",
            "title": "Blackhole Ramnit - samples and analysis",
            "categories": [
                "Ramnit"
            ]
        }
    ],
    "mitre": []
};