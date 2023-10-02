var threatdata = {
    "name": "Roaming Mantis",
    "alias": "Roaming Mantis, Roaming Mantis Group, Shaoye",
    "category": "APT",
    "type": "-",
    "modified": "2023-02-15",
    "all_data": {
        "actor": "Roaming Mantis",
        "names": [
            {
                "name": "Roaming Mantis",
                "name-giver": "Kaspersky"
            },
            {
                "name": "Roaming Mantis Group",
                "name-giver": "Kaspersky"
            },
            {
                "name": "Shaoye",
                "name-giver": "?"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime"
        ],
        "first-seen": "2017",
        "description": "(Kaspersky) In March 2018, Japanese media reported the hijacking of DNS settings on routers located in Japan, redirecting users to malicious IP addresses. The redirection led to the installation of Trojanized applications named facebook.apk and chrome.apk that contained Android Trojan-Banker. According to our telemetry data, this malware was detected more than 6,000 times, though the reports came from just 150 unique users (from February 9 to April 9, 2018). Of course, this is down to the nature of the malware distribution, but it also suggests a very painful experience for some users, who saw the same malware appear again and again in their network. More than half of the detections were observed targeting the Asian region.\n\nDuring our research we received some invaluable information about the true scale of this attack. There were thousands of daily connections to the command and control (C2) infrastructure, with the device locale for the majority of victims set to Korean. Since we didn\u2019t find a pre-existing name for this malware operation, we decided to assign a new one for future reference. Based on its propagation via smartphones roaming between Wi-Fi networks, potentially carrying and spreading the infection, we decided to call it \u2018Roaming Mantis\u2019.",
        "observed-countries": [
            "Azerbaijan",
            "Bangladesh",
            "Brazil",
            "Cambodia",
            "Canada",
            "China",
            "Denmark",
            "Finland",
            "France",
            "Germany",
            "Hong Kong",
            "India",
            "Indonesia",
            "Iran",
            "Ireland",
            "Italy",
            "Japan",
            "Kazakhstan",
            "Netherlands",
            "Russia",
            "Saudi Arabia",
            "South Korea",
            "Sri Lanka",
            "Sweden",
            "Switzerland",
            "Taiwan",
            "Thailand",
            "Turkey",
            "UK",
            "USA",
            "Vietnam"
        ],
        "tools": [
            "Roaming Mantis",
            "SmsSpy"
        ],
        "operations": [
            {
                "date": "2018-02",
                "activity": "Roaming Mantis malware is designed for distribution through a simple, but very efficient trick based on a technique known as DNS hijacking. When a user attempts to access any website via a compromised router, they will be redirected to a malicious website.\nhttps://securelist.com/roaming-mantis-uses-dns-hijacking-to-infect-android-smartphones/85178/"
            },
            {
                "date": "2018-05",
                "activity": "In May, while monitoring Roaming Mantis, aka MoqHao and XLoader, we observed significant changes in their M.O. The group\u2019s activity expanded geographically and they broadened their attack/evasion methods. Their landing pages and malicious apk files now support 27 languages covering Europe and the Middle East. In addition, the criminals added a phishing option for iOS devices, and crypto-mining capabilities for the PC.\nhttps://securelist.com/roaming-mantis-dabbles-in-mining-and-phishing-multilingually/85607/"
            },
            {
                "date": "2018-09",
                "activity": "In addition, they have started using web crypto-mining for PC, and an Apple phishing page for iOS devices.\nhttps://securelist.com/roaming-mantis-part-3/88071/"
            },
            {
                "date": "2019-02",
                "activity": "According to our detection data, new variants of sagawa.apk Type A (Trojan-Dropper.AndroidOS.Wroba.g) have been detected in the wild, based on our KSN data from February 25, 2019 to March 20, 2019.\nhttps://securelist.com/roaming-mantis-part-iv/90332/"
            },
            {
                "date": "2019-06",
                "activity": "Roaming Mantis: a new phishing method targets a Japanese MNO\nhttps://hackmd.io/@ninoseki/Bkw66OhAN"
            },
            {
                "date": "2019-08",
                "activity": "The McAfee mobile research team has found a new type of Android malware for the MoqHao phishing campaign (a.k.a. XLoader and Roaming Mantis) targeting Korean and Japanese users. A series of attack campaigns are still active, mainly targeting Japanese users. The new spyware has very different payloads from the existing MoqHao samples.\nhttps://www.mcafee.com/blogs/other-blogs/mcafee-labs/moqhao-related-android-spyware-targeting-japan-and-korea-found-on-google-play/"
            },
            {
                "date": "2020-02",
                "activity": "The group\u2019s attack methods have improved and new targets continuously added in order to steal more funds. The attackers\u2019 focus has also shifted to techniques that avoid tracking and research: whitelist for distribution, analysis environment detection and so on.\nhttps://securelist.com/roaming-mantis-part-v/96250/"
            },
            {
                "date": "2020-06",
                "activity": "The RoamingMantis Group\u2019s Expansion to European Apple Accounts and Android Devices\nhttps://medium.com/csis-techblog/the-roamingmantis-groups-expansion-to-european-apple-accounts-and-android-devices-e6381723c681"
            },
            {
                "date": "2021-01",
                "activity": "Roaming Mantis Amplifies Smishing Campaign with OS-Specific Android Malware\nhttps://www.mcafee.com/blogs/other-blogs/mcafee-labs/roaming-mantis-amplifies-smishing-campaign-with-os-specific-android-malware/"
            },
            {
                "date": "2021",
                "activity": "Roaming Mantis reaches Europe\nhttps://securelist.com/roaming-mantis-reaches-europe/105596/"
            },
            {
                "date": "2022",
                "activity": "Roaming Mantis implements new DNS changer in its malicious mobile app in 2022\nhttps://securelist.com/roaming-mantis-dns-changer-in-malicious-mobile-app/108464/"
            },
            {
                "date": "2022-07",
                "activity": "Ongoing Roaming Mantis smishing campaign targeting France\nhttps://blog.sekoia.io/ongoing-roaming-mantis-smishing-campaign-targeting-france/"
            }
        ],
        "information": [
            "https://www.kaspersky.com/blog/roaming-mantis-malware/22427/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/new-version-of-xloader-that-disguises-as-android-apps-and-an-ios-profile-holds-new-links-to-fakespy/",
            "https://blog.threatstop.com/over-120-malicious-domains-discovered-in-analysis-on-new-roaming-mantis-campaign"
        ],
        "uuid": "d8f07834-98d8-473b-a247-9b54aa4571a1",
        "last-card-change": "2023-02-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Roaming Mantis",
            "malware_alias": null,
            "malware": "apk.roaming_mantis",
            "last_update": "2022-07-18 09:47:37",
            "tags": [
                "RoamingMantis"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "udsuc.com",
                        "timestamp": "2022-07-18 09:47:37"
                    },
                    {
                        "value": "mrheu.com",
                        "timestamp": "2022-07-18 09:47:37"
                    },
                    {
                        "value": "xpddg.com",
                        "timestamp": "2022-07-18 09:47:34"
                    },
                    {
                        "value": "220104bei.top",
                        "timestamp": "2022-02-12 07:57:47"
                    },
                    {
                        "value": "220104.top",
                        "timestamp": "2022-02-12 07:57:47"
                    },
                    {
                        "value": "220105bei.top",
                        "timestamp": "2022-02-12 07:57:47"
                    },
                    {
                        "value": "220105.top",
                        "timestamp": "2022-02-12 07:57:47"
                    },
                    {
                        "value": "210302bei.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210302.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210512eng.xyz",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210815bei.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210815.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210902bei.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210902.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210913bei.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "210913.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "211103bei.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "211103.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "220103beip.top",
                        "timestamp": "2022-02-12 07:57:46"
                    },
                    {
                        "value": "220103.top",
                        "timestamp": "2022-02-12 07:57:46"
                    }
                ],
                "ip:port": [
                    {
                        "value": "91.204.227.84:80",
                        "timestamp": "2022-07-18 09:45:36"
                    },
                    {
                        "value": "192.51.188.106:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "192.51.188.111:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "192.51.188.14:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "91.204.227.79:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "91.204.227.80:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "91.204.227.81:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "91.204.227.82:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "91.204.227.83:80",
                        "timestamp": "2022-07-18 09:45:35"
                    },
                    {
                        "value": "103.80.134.51:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "103.80.134.52:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "103.80.134.53:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "103.80.134.54:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "103.80.134.55:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "103.80.134.58:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "115.91.26.2:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "192.51.188.101:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "192.51.188.103:80",
                        "timestamp": "2022-07-18 09:45:34"
                    },
                    {
                        "value": "103.80.134.26:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.27:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.29:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.30:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.31:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.33:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.34:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.37:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "103.80.134.38:80",
                        "timestamp": "2022-07-18 09:45:33"
                    },
                    {
                        "value": "172.81.131.12:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "172.81.131.14:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "172.81.131.10:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "172.81.131.11:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "172.81.131.13:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "103.80.134.41:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "103.80.134.40:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "103.80.134.42:80",
                        "timestamp": "2022-07-18 09:45:32"
                    },
                    {
                        "value": "91.204.227.21:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "91.204.227.22:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "91.204.227.23:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "91.204.227.24:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "91.204.227.25:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "91.204.227.26:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "91.204.227.27:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "91.204.227.28:80",
                        "timestamp": "2022-07-18 09:45:31"
                    },
                    {
                        "value": "192.51.188.145:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "192.51.188.146:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "27.124.36.32:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "27.124.36.34:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "27.124.36.52:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "27.124.39.241:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "27.124.39.242:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "27.124.39.243:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "91.204.227.19:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "91.204.227.20:80",
                        "timestamp": "2022-07-18 09:45:30"
                    },
                    {
                        "value": "146.0.74.202:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "146.0.74.203:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "146.0.74.205:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "146.0.74.206:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "146.0.74.228:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "192.51.188.107:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "192.51.188.108:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "192.51.188.109:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "192.51.188.142:80",
                        "timestamp": "2022-07-18 09:45:29"
                    },
                    {
                        "value": "142.0.136.50:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "142.0.136.52:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "142.4.97.105:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "142.4.97.106:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "142.4.97.107:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "142.4.97.108:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "142.4.97.109:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "146.0.74.157:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "146.0.74.197:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "146.0.74.199:80",
                        "timestamp": "2022-07-18 09:45:28"
                    },
                    {
                        "value": "134.119.193.106:80",
                        "timestamp": "2022-07-18 09:45:27"
                    },
                    {
                        "value": "134.119.193.108:80",
                        "timestamp": "2022-07-18 09:45:27"
                    },
                    {
                        "value": "134.119.193.109:80",
                        "timestamp": "2022-07-18 09:45:27"
                    },
                    {
                        "value": "134.119.193.110:80",
                        "timestamp": "2022-07-18 09:45:27"
                    },
                    {
                        "value": "134.119.205.18:80",
                        "timestamp": "2022-07-18 09:45:27"
                    },
                    {
                        "value": "134.119.205.21:80",
                        "timestamp": "2022-07-18 09:45:27"
                    },
                    {
                        "value": "134.119.205.22:80",
                        "timestamp": "2022-07-18 09:45:27"
                    },
                    {
                        "value": "142.0.136.49:80",
                        "timestamp": "2022-07-18 09:45:27"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-07-18 09:47:37",
    "file_name": "roaming_mantis",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/roaming-mantis-reaches-europe/105596/",
            "date": "2022-02-07",
            "organization": "Kaspersky Labs",
            "author": "Suguru Ishimaru",
            "title": "Roaming Mantis reaches Europe",
            "categories": [
                "Roaming Mantis",
                "Wroba"
            ]
        },
        {
            "data_url": "https://www.kashifali.ca/2021/05/05/roaming-mantis-amplifies-smishing-campaign-with-os-specific-android-malware/",
            "date": "2021-05-05",
            "organization": "Kashif Ali  Surfeit and Blas\u00e9 Security",
            "author": "Kashif Ali",
            "title": "Roaming Mantis Amplifies Smishing Campaign with OS-Specific Android Malware",
            "categories": [
                "MoqHao",
                "Roaming Mantis"
            ]
        },
        {
            "data_url": "https://securelist.com/roaming-mantis-part-v/96250/",
            "date": "2020-02-27",
            "organization": "Kaspersky Labs",
            "author": "Suguru Ishimaru",
            "title": "Roaming Mantis, part V: Distributed in 2019 using SMiShing and enhanced anti-researcher techniques",
            "categories": [
                "FunkyBot",
                "MoqHao",
                "Roaming Mantis"
            ]
        },
        {
            "data_url": "https://hitcon.org/2019/CMT/slide-files/d2_s1_r1.pdf",
            "date": "2019",
            "organization": "Kaspersky Labs",
            "author": "Suguru Ishimaru",
            "title": "Roaming Mantis: an Anatomy of a DNS Hijacking Campaign",
            "categories": [
                "MoqHao",
                "Roaming Mantis"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/roaming-mantis-group-testing-coinhive-miner-redirects-on-iphones/",
            "date": "2018-10-01",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Roaming Mantis Group Testing Coinhive Miner Redirects on iPhones",
            "categories": [
                "Roaming Mantis"
            ]
        },
        {
            "data_url": "https://securelist.com/roaming-mantis-dabbles-in-mining-and-phishing-multilingually/85607/",
            "date": "2018-05-18",
            "organization": "Kaspersky Labs",
            "author": "Suguru Ishimaru",
            "title": "Roaming Mantis dabbles in mining and phishing multilingually",
            "categories": [
                "Roaming Mantis"
            ]
        },
        {
            "data_url": "https://securelist.com/roaming-mantis-uses-dns-hijacking-to-infect-android-smartphones/85178/",
            "date": "2018-04-16",
            "organization": "Kaspersky Labs",
            "author": "Suguru Ishimaru",
            "title": "Roaming Mantis uses DNS hijacking to infect Android smartphones",
            "categories": [
                "Roaming Mantis"
            ]
        }
    ],
    "mitre": []
};