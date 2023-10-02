var threatdata = {
    "name": "Anubis",
    "alias": "Anubis, BankBot, Go_P00t, android.bankbot, android.bankspy",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Keylogger, Info stealer, Credential stealer",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Anubis",
        "names": [
            {
                "name": "Anubis"
            },
            {
                "name": "BankBot"
            },
            {
                "name": "Go_P00t"
            },
            {
                "name": "android.bankbot"
            },
            {
                "name": "android.bankspy"
            }
        ],
        "description": "(Trend Micro) The Anubis malware masquerades as a benign app, prompts the user to grant it accessibility rights, and also tries to steal account information. Banking trojans usually launch a fake overlay screen when the user accesses a target app and tries to steal information when the user inputs account credentials into the overlay. However, Anubis\u2019 process is a little different. It has a built-in keylogger that can simply steal a users\u2019 account credentials by logging the keystrokes. The malware can also take a screenshot of the infected users\u2019 screen, which is another way to get the victims credentials.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/google-play-apps-drop-anubis-banking-malware-use-motion-based-evasion-tactics/",
            "https://blogs.quickheal.com/android-malware-combines-banking-trojan-keylogger-ransomware-one-package/",
            "https://securityintelligence.com/after-big-takedown-efforts-20-more-bankbot-mobile-malware-apps-make-it-into-google-play/",
            "https://securityintelligence.com/anubis-strikes-again-mobile-malware-continues-to-plague-users-in-official-app-stores/",
            "http://b0n1.blogspot.de/2017/05/tracking-android-bankbot.html",
            "http://blog.koodous.com/2017/04/decrypting-bankbot-communications.html",
            "https://www.welivesecurity.com/2017/11/21/new-campaigns-spread-banking-malware-google-play/",
            "http://blog.koodous.com/2017/05/bankbot-on-google-play.html",
            "https://www.fortinet.com/blog/threat-research/bankbot-the-prequel.html",
            "https://eybisi.run/Mobile-Malware-Analysis-Tricks-used-in-Anubis/",
            "https://pentest.blog/n-ways-to-unpack-mobile-malware/",
            "https://info.phishlabs.com/blog/new-variant-bankbot-banking-trojan-aubis",
            "https://www.fortinet.com/blog/threat-research/a-look-into-the-new-strain-of-bankbot.html",
            "https://sysopfb.github.io/malware,/reverse-engineering/2018/08/30/Unpacking-Anubis-APK.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0422/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.anubis"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Anubis"
        ],
        "uuid": "0a30f599-8c6c-4721-a736-4b21c8def62b",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Anubis",
            "malware_alias": "BankBot,android.bankbot,android.bankspy",
            "malware": "apk.anubis",
            "last_update": "2023-03-29 06:03:40",
            "tags": [
                "Anubis",
                "BankBot"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "47.89.185.156:443",
                        "timestamp": "2023-03-29 06:03:40"
                    }
                ],
                "url": [
                    {
                        "value": "https://zektarmunoza.shop/z.php",
                        "timestamp": "2023-03-29 06:02:31"
                    },
                    {
                        "value": "http://monitorarbitcoin.org/",
                        "timestamp": "2021-10-08 21:08:25"
                    }
                ],
                "domain": [
                    {
                        "value": "zektarmunoza.shop",
                        "timestamp": "2023-03-29 06:02:07"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "cf3e16d6328d572cdf4476809e25c52790d77bec8ac1a52a7129485c55a7c6a7",
                        "timestamp": "2021-07-28 11:29:19"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-03-29 06:03:40",
    "file_name": "anubis",
    "analysis": null,
    "articles": [
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
            "data_url": "https://securityaffairs.co/wordpress/133115/hacking/anubis-networks-new-c2.html",
            "date": "2022-07-11",
            "organization": "Security Affairs",
            "author": "Pierluigi Paganini",
            "title": "Anubis Networks is back with new C2 server",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://muha2xmad.github.io/malware-analysis/anubis/",
            "date": "2022-05-29",
            "organization": "muha2xmad",
            "author": "Muhammad Hasan Ali",
            "title": "Full Anubis android malware analysis",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://assets.virustotal.com/reports/2021trends.pdf",
            "date": "2022-03",
            "organization": "VirusTotal",
            "author": "VirusTotal",
            "title": "VirusTotal's 2021 Malware Trends Report",
            "categories": [
                "Anubis",
                "AsyncRAT",
                "BlackMatter",
                "Cobalt Strike",
                "DanaBot",
                "Dridex",
                "Khonsari",
                "MimiKatz",
                "Mirai",
                "Nanocore RAT",
                "Orcus RAT"
            ]
        },
        {
            "data_url": "https://0x1c3n.tech/anubis-android-malware-analysis",
            "date": "2021-08-27",
            "organization": "0x1c3n.tech",
            "author": "0x1c3N",
            "title": "Anubis Android Malware Analysis",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://cybleinc.com/2021/05/02/mobile-malware-app-anubis-strikes-again-continues-to-lure-users-disguised-as-a-fake-antivirus/",
            "date": "2021-05-02",
            "organization": "Cybleinc",
            "author": "cybleinc",
            "title": "Mobile Malware App Anubis Strikes Again, Continues to Lure Users Disguised as a Fake Antivirus",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://www.threatfabric.com/blogs/the-rage-of-android-banking-trojans.html",
            "date": "2021-04-28",
            "organization": "ThreatFabric",
            "author": "ThreatFabric",
            "title": "The Rage of Android Banking Trojans",
            "categories": [
                "Anubis",
                "Gustuff",
                "Medusa"
            ]
        },
        {
            "data_url": "https://community.riskiq.com/article/85b3db8c",
            "date": "2021-02-24",
            "organization": "RiskIQ",
            "author": "Jordan Herman",
            "title": "Turkey Dog: Cerberus and Anubis Banking Trojans Target Turkish Speakers",
            "categories": [
                "Anubis",
                "Cerberus"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/china-cybercrime-undergrond-deepmix-tea-horse-road-great-firewall/",
            "date": "2020-12-10",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "No pandas, just people: The current state of China\u2019s cybercrime underground",
            "categories": [
                "Anubis",
                "SpyNote",
                "AsyncRAT",
                "Cobalt Strike",
                "Ghost RAT",
                "NjRAT"
            ]
        },
        {
            "data_url": "https://intel-honey.medium.com/reversing-anubis-malware-93f28d154bbb",
            "date": "2020-11-21",
            "organization": "Medium Intel-Honey",
            "author": "Twitter (@intel_honey)",
            "title": "Reversing Anubis Malware",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://twitter.com/MsftSecIntel/status/1298752223321546754",
            "date": "2020-08-27",
            "organization": "Twitter (@MsftSecIntel)",
            "author": "Microsoft Security Intelligence",
            "title": "Tweet on Anubis Stealer",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://n1ght-w0lf.github.io/malware%20analysis/anubis-banking-malware/",
            "date": "2020-07-04",
            "organization": "N1ght-W0lf Blog",
            "author": "Abdallah Elshinbary",
            "title": "Deep Analysis of Anubis Banking Malware",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://therecord.media/russian-hacker-pavel-sitnikov-arrested-for-sharing-malware-source-code/",
            "date": "2020-05-31",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Russian hacker Pavel Sitnikov arrested for sharing malware source code",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://bushidotoken.blogspot.com/2020/05/turkey-targeted-by-cerberus-and-anubis.html",
            "date": "2020-05-09",
            "organization": "BushidoToken",
            "author": "BushidoToken",
            "title": "Turkey targeted by Cerberus and Anubis Android banking Trojan campaigns",
            "categories": [
                "Anubis",
                "Cerberus"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=U0UsfO-0uJM",
            "date": "2020-04-23",
            "organization": "Youtube (Lukas Stefanko)",
            "author": "Luk\u00e1\u0161 \u0160tefanko",
            "title": "Android banking Trojan Anubis | Malware demo | infected device | covid19 | targets Italy",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://labs.bitdefender.com/2020/03/android-apps-and-malware-capitalize-on-coronavirus",
            "date": "2020-03-26",
            "organization": "Bitdefender",
            "author": "Liviu Arsene",
            "title": "Android Apps and Malware Capitalize on Coronavirus",
            "categories": [
                "Anubis",
                "Joker"
            ]
        },
        {
            "data_url": "https://securelist.com/mobile-malware-evolution-2019/96280/",
            "date": "2020-02-25",
            "organization": "Kaspersky Labs",
            "author": "Victor Chebyshev",
            "title": "Mobile malware evolution 2019",
            "categories": [
                "Anubis",
                "Asacub",
                "Dvmap",
                "FlexNet",
                "HiddenAd",
                "Marcher",
                "Svpeng",
                "Triada"
            ]
        },
        {
            "data_url": "https://www.threatfabric.com/blogs/2020_year_of_the_rat.html",
            "date": "2020-02",
            "organization": "ThreatFabric",
            "author": "ThreatFabric",
            "title": "2020 - Year of the RAT",
            "categories": [
                "Anubis",
                "Cerberus",
                "Ginp",
                "Gustuff",
                "Hydra"
            ]
        },
        {
            "data_url": "https://eybisi.run/Mobile-Malware-Analysis-Tricks-used-in-Anubis/",
            "date": "2019-04-07",
            "organization": "Eybisi",
            "author": "Eybisi",
            "title": "Mobile Malware Analysis : Tricks used in Anubis",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://pentest.blog/n-ways-to-unpack-mobile-malware/",
            "date": "2019-03-13",
            "organization": "Pentest Blog",
            "author": "Ahmet Bilal Can",
            "title": "N Ways to Unpack Mobile Malware",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/google-play-apps-drop-anubis-banking-malware-use-motion-based-evasion-tactics/",
            "date": "2019-01-17",
            "organization": "Trend Micro",
            "author": "Kevin Sun",
            "title": "Google Play Apps Drop Anubis Banking Malware, Use Motion-based Evasion Tactics",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://securityboulevard.com/2018/09/android-malware-intercepts-sms-2fa-we-have-the-logs/",
            "date": "2018-09-10",
            "organization": "Security Boulevard",
            "author": "Gary Warner",
            "title": "Android Malware Intercepts SMS 2FA: We have the Logs",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://sysopfb.github.io/malware,/reverse-engineering/2018/08/30/Unpacking-Anubis-APK.html",
            "date": "2018-08-30",
            "organization": "Random RE",
            "author": "sysopfb",
            "title": "Manually unpacking Anubis APK",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://info.phishlabs.com/blog/new-variant-bankbot-banking-trojan-aubis",
            "date": "2018-03-13",
            "organization": "PhishLabs",
            "author": "Joshua Shilko",
            "title": "New Variant of BankBot Banking Trojan Ups Ante, Cashes Out on Android Users",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2017/11/21/new-campaigns-spread-banking-malware-google-play/",
            "date": "2017-11-21",
            "organization": "ESET Research",
            "author": "Luk\u00e1\u0161 \u0160tefanko",
            "title": "New campaigns spread banking malware through Google Play",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/a-look-into-the-new-strain-of-bankbot.html",
            "date": "2017-09-19",
            "organization": "Fortinet",
            "author": "Dario Durando",
            "title": "A Look Into The New Strain Of BankBot",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/after-big-takedown-efforts-20-more-bankbot-mobile-malware-apps-make-it-into-google-play/",
            "date": "2017-07-27",
            "organization": "Security Intelligence",
            "author": "Limor Kessem",
            "title": "After Big Takedown Efforts, 20 More BankBot Mobile Malware Apps Make It Into Google Play",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "http://blog.koodous.com/2017/05/bankbot-on-google-play.html",
            "date": "2017-05-30",
            "organization": "Koodous",
            "author": "entdark",
            "title": "Bankbot on Google Play",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "http://b0n1.blogspot.de/2017/05/tracking-android-bankbot.html",
            "date": "2017-05-09",
            "organization": "",
            "author": "Luk\u00e1\u0161 \u0160tefanko",
            "title": "Tracking Android BankBot",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/bankbot-the-prequel.html",
            "date": "2017-04-26",
            "organization": "Fortinet",
            "author": "Dario Durando",
            "title": "BankBot, the Prequel",
            "categories": [
                "Anubis"
            ]
        },
        {
            "data_url": "http://blog.koodous.com/2017/04/decrypting-bankbot-communications.html",
            "date": "2017-04-13",
            "organization": "Koodous",
            "author": "Koodous Blog",
            "title": "Decrypting Bankbot communications.",
            "categories": [
                "Anubis"
            ]
        }
    ],
    "mitre": []
};