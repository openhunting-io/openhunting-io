var threatdata = {
    "name": "LockBit",
    "alias": "LockBit, ABCD Ransomware, LockBit Black",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting, Reconnaissance, Remote command",
    "modified": "2023-09-06",
    "all_data": {
        "tool": "LockBit",
        "names": [
            {
                "name": "LockBit"
            },
            {
                "name": "ABCD Ransomware"
            },
            {
                "name": "LockBit Black"
            }
        ],
        "description": "(Kaspersky) LockBit ransomware is malicious software designed to block user access to computer systems in exchange for a ransom payment. LockBit will automatically vet for valuable targets, spread the infection, and encrypt all accessible computer systems on a network. This ransomware is used for highly targeted attacks against enterprises and other organizations. As a self-piloted cyberattack, LockBit attackers have made a mark by threatening organizations globally with some of the following threats:\n\n\u2022 Operations disruption with essential functions coming to a sudden halt.\n\u2022 Extortion for the hacker\u2019s financial gain.\n\u2022 Data theft and illegal publication as blackmail if the victim does not comply.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting",
            "Reconnaissance",
            "Remote command"
        ],
        "information": [
            "https://www.kaspersky.com/resource-center/threats/lockbit-ransomware",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/tales-from-the-trenches-a-lockbit-ransomware-story/",
            "https://arstechnica.com/information-technology/2020/05/lockbit-the-new-ransomware-for-hire-a-sad-and-cautionary-tale/",
            "https://news.sophos.com/en-us/2020/04/24/lockbit-ransomware-borrows-tricks-to-keep-up-with-revil-and-maze/",
            "https://news.sophos.com/en-us/2020/10/21/lockbit-attackers-uses-automated-attack-tools-to-identify-tasty-targets/",
            "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-moves-quietly-on-the-network-strikes-fast/",
            "https://www.prodaft.com/m/reports/LockBit_Case_Report___TLPWHITE.pdf",
            "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-now-encrypts-windows-domains-using-group-policies/",
            "https://www.cybereason.com/blog/lockbit-ransomware-wants-to-hire-your-employees",
            "https://www.bankinfosecurity.com/ransomware-lockbit-20-borrows-ryuk-egregors-tricks-a-17335",
            "https://www.cybereason.com/blog/cybereason-vs.-lockbit2.0-ransomware",
            "https://www.deepinstinct.com/blog/lockbit-2-0-ransomware-becomes-lockfile-ransomware-with-a-never-before-seen-encryption-method",
            "https://www.cybereason.com/blog/threat-analysis-report-inside-the-lockbit-arsenal-the-stealbit-exfiltration-tool",
            "https://www.trendmicro.com/en_us/research/22/a/analysis-and-Impact-of-lockbit-ransomwares-first-linux-and-vmware-esxi-variant.html",
            "https://www.ic3.gov/Media/News/2022/220204.pdf",
            "https://www.trendmicro.com/en_us/research/22/d/Thwarting-Loaders-From-SocGholish-to-BLISTERs-LockBit-Payload.htmlhttps://www.trendmicro.com/en_us/research/22/d/Thwarting-Loaders-From-SocGholish-to-BLISTERs-LockBit-Payload.html",
            "https://www.malvuln.com/advisory/96de05212b30ec85d4cf03386c1b84af.txt",
            "https://unit42.paloaltonetworks.com/lockbit-2-ransomware/",
            "https://www.trendmicro.com/en_us/research/22/f/conti-vs-lockbit-a-comparative-analysis-of-ransomware-groups.html",
            "https://www.csoonline.com/article/3665871/lockbit-explained-how-it-has-become-the-most-popular-ransomware.html",
            "https://www.cybereason.com/blog/threat-analysis-report-lockbit-2.0-all-paths-lead-to-ransom",
            "https://www.sentinelone.com/blog/living-off-windows-defender-lockbit-ransomware-sideloads-cobalt-strike-through-microsoft-security-tool/",
            "https://www.trendmicro.com/en_us/research/22/g/lockbit-ransomware-group-augments-its-latest-variant--lockbit-3-.html",
            "https://www.darkreading.com/vulnerabilities-threats/everything-you-need-to-know-about-lockbit",
            "https://asec.ahnlab.com/en/41450/",
            "https://www.tripwire.com/state-of-security/lockbit-ransomware-what-you-need-know",
            "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-goes-green-uses-new-conti-based-encryptor/",
            "https://asec.ahnlab.com/en/47739/",
            "https://www.fortinet.com/blog/threat-research/emerging-lockbit-campaign",
            "https://thehackernews.com/2023/03/the-prolificacy-of-lockbit-ransomware.html",
            "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-075a",
            "https://securelist.com/crimeware-report-lockbit-switchsymb/110068/",
            "https://www.fortinet.com/blog/threat-research/lockbit-most-prevalent-ransomware",
            "https://www.cybereason.com/blog/threat-analysis-assemble-lockbit-3"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.lockbit"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:lockbit"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=lockbit20-ransomware"
        ],
        "uuid": "67f3bacc-75ce-46ef-959a-131c6e1fa30e",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--81ff21f8-6955-4b70-91dc-dce2608512ac",
        "pb_file": "lockbit-2.0-ransomware.json",
        "last_updated": "2021-09-30T09:20:18.487Z",
        "title": "LOCKBIT-2.0 RANSOMWARE",
        "industries": [
            "automotive",
            "communications",
            "construction",
            "defence",
            "energy",
            "engineering",
            "financial-services",
            "government-local",
            "manufacturing",
            "non-profit",
            "retail",
            "technology",
            "transportation",
            "utilities"
        ],
        "regions": [
            "AR",
            "AT",
            "AU",
            "BE",
            "BR",
            "CH",
            "DE",
            "GB",
            "IT",
            "MX",
            "MY",
            "RO",
            "US"
        ],
        "malwares": [
            "Lockbit 2.0"
        ]
    },
    "ioc_data": [
        {
            "malware_printable": "LockBit",
            "malware_alias": "ABCD Ransomware",
            "malware": "win.lockbit",
            "last_update": "2023-06-01 19:03:24",
            "tags": [
                "lockbit",
                "KOR",
                "ransomware",
                "geo",
                "LockBit",
                "spyware",
                "Ransomware",
                "Lockbit"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "2831b37cf521848142e8a5d69515b065",
                        "timestamp": "2023-06-01 19:03:24"
                    },
                    {
                        "value": "5e7b650a6e0070bceed648681bff20fe",
                        "timestamp": "2023-06-01 19:03:24"
                    },
                    {
                        "value": "03cea7c49abe78863ae2644ac77c8efb",
                        "timestamp": "2023-01-13 00:08:13"
                    },
                    {
                        "value": "f64b643de2bc7c368b0a13d12c584a09",
                        "timestamp": "2023-01-13 00:08:13"
                    },
                    {
                        "value": "0f7c10dfa562adf15f1f6078ecaee788",
                        "timestamp": "2022-12-12 13:04:24"
                    },
                    {
                        "value": "fe5101b50e92a923d74cc6f0f4225539",
                        "timestamp": "2022-12-01 15:32:34"
                    },
                    {
                        "value": "008520e6248952bd3ac9e16f144b6243",
                        "timestamp": "2022-11-01 22:17:50"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "2daa5fa152b627f5ae23d2e8fa4e3e399d4899729ad32f184e32d59fd4dd20ef",
                        "timestamp": "2023-04-22 23:50:17"
                    },
                    {
                        "value": "588dfcd0e8ebc570eaba342d6d220528a722be93a46c2dfa2306a7b662b25845",
                        "timestamp": "2023-04-22 23:50:17"
                    },
                    {
                        "value": "442f78f823663cea5da451a9710ece34dbbb29d61985381e6393f6ea1219466b",
                        "timestamp": "2023-04-22 23:50:17"
                    },
                    {
                        "value": "a2db758f099d8a6dec5fd500d033ce2fcd89b58b53d938fdb9d9cba2d91dba01",
                        "timestamp": "2023-04-22 23:50:17"
                    },
                    {
                        "value": "67b05e96f47db0447da53beddbf9aff265cd02562c12428d787fdab0278ded2e",
                        "timestamp": "2023-04-22 23:50:17"
                    },
                    {
                        "value": "c6cf5fd8f71abaf5645b8423f404183b3dea180b69080f53b9678500bab6f0de",
                        "timestamp": "2022-07-08 20:22:55"
                    }
                ],
                "domain": [
                    {
                        "value": "tinneatonenessnabobical.com",
                        "timestamp": "2022-10-04 11:15:06"
                    }
                ],
                "ip:port": [
                    {
                        "value": "82.102.20.219:80",
                        "timestamp": "2022-08-18 05:50:11"
                    },
                    {
                        "value": "51.15.18.180:80",
                        "timestamp": "2022-08-18 05:50:11"
                    },
                    {
                        "value": "52.237.96.13:80",
                        "timestamp": "2022-08-18 05:50:11"
                    },
                    {
                        "value": "62.76.112.121:80",
                        "timestamp": "2022-08-18 05:50:10"
                    },
                    {
                        "value": "167.172.239.68:80",
                        "timestamp": "2022-08-18 05:50:10"
                    },
                    {
                        "value": "82.202.247.81:80",
                        "timestamp": "2022-08-18 05:50:10"
                    },
                    {
                        "value": "185.202.2.121:80",
                        "timestamp": "2022-08-18 05:50:09"
                    },
                    {
                        "value": "51.89.134.150:80",
                        "timestamp": "2022-08-18 05:50:09"
                    },
                    {
                        "value": "104.237.255.254:80",
                        "timestamp": "2022-08-18 05:50:09"
                    },
                    {
                        "value": "54.38.212.197:80",
                        "timestamp": "2022-08-18 05:50:08"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-06-01 19:03:24",
    "mitre": [],
    "file_name": "lockbit"
};