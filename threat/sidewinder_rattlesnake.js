var threatdata = {
    "name": "SideWinder, Rattlesnake",
    "alias": "SideWinder, Rattlesnake, Razor Tiger, T-APT-04, APT-C-17, Hardcore Nationalist, HN2, APT-Q-39, BabyElephant, GroupA21",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-21",
    "all_data": {
        "actor": "SideWinder, Rattlesnake",
        "names": [
            {
                "name": "SideWinder",
                "name-giver": "Kaspersky"
            },
            {
                "name": "Rattlesnake",
                "name-giver": "Tencent"
            },
            {
                "name": "Razor Tiger",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "T-APT-04",
                "name-giver": "Tencent"
            },
            {
                "name": "APT-C-17",
                "name-giver": "Qihoo 360"
            },
            {
                "name": "Hardcore Nationalist",
                "name-giver": "?"
            },
            {
                "name": "HN2",
                "name-giver": "?"
            },
            {
                "name": "APT-Q-39",
                "name-giver": "?"
            },
            {
                "name": "BabyElephant",
                "name-giver": "?"
            },
            {
                "name": "GroupA21",
                "name-giver": "?"
            }
        ],
        "country": [
            "India"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2012",
        "description": "(Kaspersky) An actor mainly targeting Pakistan military targets, active since at least 2012. We have low confidence that this malware might be authored by an Indian company. To spread the malware, they use unique implementations to leverage the exploits of known vulnerabilities (such as CVE-2017-11882) and later deploy a Powershell payload in the final stages.",
        "observed-sectors": [
            "Defense",
            "Government"
        ],
        "observed-countries": [
            "Afghanistan",
            "Bangladesh",
            "Bhutan",
            "China",
            "Myanmar",
            "Nepal",
            "Pakistan",
            "Qatar",
            "Sri Lanka",
            "Turkey"
        ],
        "tools": [
            "BroStealer",
            "callCam",
            "Capriccio RAT"
        ],
        "operations": [
            {
                "date": "2019-03",
                "activity": "First Active Attack Exploiting CVE-2019-2215 Found on Google Play, Linked to SideWinder APT Group\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/first-active-attack-exploiting-cve-2019-2215-found-on-google-play-linked-to-sidewinder-apt-group/"
            },
            {
                "date": "2021-06",
                "activity": "Old Snake, New Skin: Analysis of SideWinder APT activity between June and November 2021\nhttps://www.group-ib.com/resources/research-hub/sidewinder-apt/"
            },
            {
                "date": "2022-03",
                "activity": "SideWinder\u2019s malicious document, which also exploit the Russia-Ukraine conflict, was uploaded to VT in the middle of March.\nhttps://research.checkpoint.com/2022/state-sponsored-attack-groups-capitalise-on-russia-ukraine-war-for-cyber-espionage/"
            },
            {
                "date": "2022-05",
                "activity": "Group-IB Threat Intelligence researchers have discovered a new malicious infrastructure and a custom tool of the APT group SideWinder\nhttps://blog.group-ib.com/sidewinder-antibot"
            },
            {
                "date": "2022-11",
                "activity": "SideWinder Uses Server-side Polymorphism to Attack Pakistan Government Officials \u2014 and Is Now Targeting Turkey\nhttps://blogs.blackberry.com/en/2023/05/sidewinder-uses-server-side-polymorphism-to-target-pakistan"
            }
        ],
        "information": [
            "https://securelist.com/apt-trends-report-q1-2018/85280/",
            "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/fireeye-sidewinder-targeted-attack.pdf",
            "https://medium.com/@Sebdraven/apt-sidewinder-tricks-powershell-anti-forensics-and-execution-side-loading-5bc1a7e7c84c",
            "https://s.tencent.com/research/report/479.html",
            "https://s.tencent.com/research/report/659.html",
            "https://cdn-cybersecurity.att.com/docs/global-perspective-of-the-sidewinder-apt.pdf",
            "https://thehackernews.com/2022/05/sidewinder-hackers-launched-over-1000.html",
            "https://www.neosecuretendencias2021.com/assets/pdfs/crowdstrike/2021%20Global%20Threat%20Report%20FINAL%20.pdf",
            "https://www.group-ib.com/blog/hunting-sidewinder/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0121/"
        ],
        "uuid": "4e925967-099e-4708-9bca-ade4890d847b",
        "last-card-change": "2023-06-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "SideWinder",
            "malware_alias": null,
            "malware": "win.sidewinder",
            "last_update": "2023-10-16 18:21:47",
            "tags": [
                "APT",
                "SideWinder",
                "13-213-47-21",
                "apt",
                "sidewinder"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "mail-mofagovpk.servehalflife.com",
                        "timestamp": "2023-10-16 18:21:47"
                    },
                    {
                        "value": "mail-mofagovpk.serveirc.com",
                        "timestamp": "2023-10-16 18:21:47"
                    },
                    {
                        "value": "mail-pmogovpk.servehttp.com",
                        "timestamp": "2023-10-16 18:21:46"
                    },
                    {
                        "value": "ntc-govpk.servehttp.com",
                        "timestamp": "2023-10-16 18:21:46"
                    },
                    {
                        "value": "ntdc-govpk.viewdns.net",
                        "timestamp": "2023-10-16 18:21:46"
                    },
                    {
                        "value": "sharepakistanmofa.servehttp.com",
                        "timestamp": "2023-10-16 18:21:45"
                    },
                    {
                        "value": "vibe-ptclnetpk.servehalflife.com",
                        "timestamp": "2023-10-16 18:21:45"
                    },
                    {
                        "value": "complaints-ntcgovpk.viewdns.net",
                        "timestamp": "2023-10-16 18:21:44"
                    },
                    {
                        "value": "mail-mofagovpk.viewdns.net",
                        "timestamp": "2023-10-16 18:21:44"
                    },
                    {
                        "value": "cloud-ptclnetpk.servehttp.com",
                        "timestamp": "2023-10-16 18:21:43"
                    },
                    {
                        "value": "csd-govpk.servehttp.com",
                        "timestamp": "2023-08-15 19:15:38"
                    },
                    {
                        "value": "finance-govpk.servehttp.com",
                        "timestamp": "2023-08-15 19:15:38"
                    },
                    {
                        "value": "ntc-govpk.serveftp.com",
                        "timestamp": "2023-08-15 19:15:37"
                    },
                    {
                        "value": "ntc-govpk.servehttp.com",
                        "timestamp": "2023-08-15 19:15:37"
                    },
                    {
                        "value": "vpn-ptclnetpk.servehttp.com",
                        "timestamp": "2023-08-15 19:15:37"
                    },
                    {
                        "value": "ptcl-gov.info",
                        "timestamp": "2023-07-06 07:20:08"
                    },
                    {
                        "value": "mofagov.live",
                        "timestamp": "2023-07-05 12:57:09"
                    },
                    {
                        "value": "mofagov.info",
                        "timestamp": "2023-07-05 12:57:09"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "5356a1193252b4fb2265fc8ac10327a1",
                        "timestamp": "2023-05-24 06:41:39"
                    },
                    {
                        "value": "d0ca92ce29456931ad14aed48c3ea93f",
                        "timestamp": "2023-05-24 06:41:39"
                    },
                    {
                        "value": "6af17fdbf7974c1a9a08a38b755d363b",
                        "timestamp": "2023-05-15 15:05:18"
                    },
                    {
                        "value": "5efddbdcf40ba01f1571140bad72dccb",
                        "timestamp": "2023-03-10 07:38:47"
                    },
                    {
                        "value": "ca93cb9833a0470de495681ce6dcf292",
                        "timestamp": "2023-02-17 07:14:16"
                    },
                    {
                        "value": "ce2afa9c4b48aee2293744416a7811ec",
                        "timestamp": "2023-02-17 07:14:16"
                    },
                    {
                        "value": "1315985f576b536a62b2c52beecfbcfa",
                        "timestamp": "2023-02-17 07:13:52"
                    },
                    {
                        "value": "40708e92422f0d1eb05d1e0e1732cd0d",
                        "timestamp": "2023-02-17 07:13:24"
                    },
                    {
                        "value": "f6a9ce5cb29328475e2a874cd1b575ff",
                        "timestamp": "2023-02-17 07:13:24"
                    },
                    {
                        "value": "976160013031ba3e0cb8d26d334c8f21",
                        "timestamp": "2023-02-17 07:13:24"
                    },
                    {
                        "value": "3363ed14f070fc651515cd066b2c36aa",
                        "timestamp": "2023-02-17 07:13:24"
                    },
                    {
                        "value": "c42dcdb934f3f8d5c242079b5d9f9938",
                        "timestamp": "2023-02-17 07:13:24"
                    },
                    {
                        "value": "356f30ba570428a6d0896e3960de8b70",
                        "timestamp": "2022-12-13 19:42:43"
                    },
                    {
                        "value": "6c8ac90f16acfc0ca871f74d47ac3856",
                        "timestamp": "2022-10-24 11:20:08"
                    },
                    {
                        "value": "69226ff2e9a95a2dcd489679af1d8a63",
                        "timestamp": "2022-10-24 11:20:08"
                    },
                    {
                        "value": "056d1dc3032d04d7638c02056d5146c9",
                        "timestamp": "2022-09-21 02:48:37"
                    },
                    {
                        "value": "7e461f6366681c5ae24920a31c3cfec6",
                        "timestamp": "2022-09-09 10:17:51"
                    },
                    {
                        "value": "267870d2a7deec193cf6c2b6926f0451",
                        "timestamp": "2022-06-17 22:11:41"
                    },
                    {
                        "value": "f77ff47ccf59cf1fe7f4dc8c31abbd64",
                        "timestamp": "2022-02-04 12:55:11"
                    },
                    {
                        "value": "e9f6517f670c338544a35e1f622b4488",
                        "timestamp": "2022-01-17 04:12:12"
                    },
                    {
                        "value": "7631b61fb5a7217c4d746dfc9acdf8db",
                        "timestamp": "2021-09-09 13:06:16"
                    },
                    {
                        "value": "ee9866864d026e695bf49231a43b521f",
                        "timestamp": "2021-09-08 11:54:43"
                    }
                ],
                "url": [
                    {
                        "value": "https://mtss.bol-south.org/5974/1/8682/2/0/0/0/m/files-b2dff0ca/file.rtf",
                        "timestamp": "2023-03-10 07:40:00"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "57d45be439544c8ce5e1c3ff68aa84c1192e56420e476d94202443870a29536c",
                        "timestamp": "2022-10-20 13:49:09"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-10-16 18:21:47",
    "file_name": "sidewinder_rattlesnake",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.group-ib.com/blog/hunting-sidewinder/",
            "date": "2023-05-17",
            "organization": "Group-IB",
            "author": "Nikita Rostovtsev",
            "title": "The distinctive rattle of APT SideWinder",
            "categories": [
                "SideWinder"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/blog/articles/analysis-of-malware-android-software-spread-by-sidewinder-using-google-play/",
            "date": "2022-07-20",
            "organization": "Qianxin",
            "author": "Red Raindrops Team",
            "title": "The Sidewinder (APT-Q-39) uses Google Play to spread an analysis of malicious Android software",
            "categories": [
                "SideWinder"
            ]
        },
        {
            "data_url": "https://medium.com/@DCSO_CyTec/404-file-still-found-d52c3834084c",
            "date": "2022-04-14",
            "organization": "Medium (@DCSO_CyTec)",
            "author": "DCSO CyTec",
            "title": "404 \u2014 File still found",
            "categories": [
                "SideWinder"
            ]
        },
        {
            "data_url": "https://malpedia.caad.fkie.fraunhofer.de/details/win.sidewinder",
            "date": "2021-03-04",
            "organization": "Malpedia",
            "author": "Malpedia",
            "title": "Malpedia Page for family Sidewinder",
            "categories": [
                "SideWinder"
            ]
        },
        {
            "data_url": "https://cdn-cybersecurity.att.com/docs/global-perspective-of-the-sidewinder-apt.pdf",
            "date": "2021-01-13",
            "organization": "AlienVault",
            "author": "Tom Hegel",
            "title": "A Global Perspective of the SideWinder APT",
            "categories": [
                "8.t Dropper",
                "Koadic",
                "SideWinder"
            ]
        },
        {
            "data_url": "https://otx.alienvault.com/pulse/5fd10760f9afb730d37c4742/",
            "date": "2020-12-09",
            "organization": "AlienVault OTX",
            "author": "AlienVault",
            "title": "SideWinder APT South Asian Territorial Themed Spear Phishing and Mobile Device Attacks",
            "categories": [
                "SideWinder",
                "RAZOR TIGER"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/20/l/sidewinder-leverages-south-asian-territorial-issues-for-spear-ph.html",
            "date": "2020-12-09",
            "organization": "Trend Micro",
            "author": "Joseph C Chen",
            "title": "SideWinder Leverages South Asian Territorial Issues for Spear Phishing and Mobile Device Attacks",
            "categories": [
                "Meterpreter",
                "SideWinder",
                "RAZOR TIGER"
            ]
        },
        {
            "data_url": "https://www.secrss.com/articles/26507",
            "date": "2020-10-26",
            "organization": "Qianxin",
            "author": "Threat Intelligence Center",
            "title": "Analysis of the attack activities of the Rattlesnake organization using the Buffy bilateral agreement as bait",
            "categories": [
                "SideWinder"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/blog/articles/the-recent-rattlesnake-apt-organized-attacks-on-neighboring-countries-and-regions/",
            "date": "2020-05-28",
            "organization": "Qianxin",
            "author": "Threat Intelligence Center",
            "title": "Analysis of recent rattlesnake APT attacks against surrounding countries and regions",
            "categories": [
                "SideWinder"
            ]
        },
        {
            "data_url": "https://s.tencent.com/research/report/659.html",
            "date": "2019-02-26",
            "organization": "Tencent",
            "author": "Tencent Yujian Threat Intelligence Center",
            "title": "Disclosure of SideWinder APT's attack against South Asia",
            "categories": [
                "SideWinder",
                "RAZOR TIGER"
            ]
        },
        {
            "data_url": "https://medium.com/@Sebdraven/apt-sidewinder-tricks-powershell-anti-forensics-and-execution-side-loading-5bc1a7e7c84c",
            "date": "2018-07-16",
            "organization": "Medium Sebdraven",
            "author": "S\u00e9bastien Larinier",
            "title": "APT Sidewinder: Tricks powershell, Anti Forensics and execution side loading",
            "categories": [
                "SideWinder",
                "RAZOR TIGER"
            ]
        },
        {
            "data_url": "https://s.tencent.com/research/report/479.html",
            "date": "2018-05-23",
            "organization": "Tencent",
            "author": "Tencent Mimi Threat Intelligence Center",
            "title": "SideWinder\u201c\u54cd\u5c3e\u86c7\u201dAPT\u7ec4\u7ec7\uff08T-APT-04)\uff1a\u9488\u5bf9\u5357\u4e9a\u7684\u5b9a\u5411\u653b\u51fb\u5a01\u80c1",
            "categories": [
                "SideWinder",
                "RAZOR TIGER"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "sidewinder",
            "procedure_code": "g0121",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0121",
            "techniques": [
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1598.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1598/002",
                    "technique_name": "phishing for information : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing messages with a malicious attachment to elicit sensitive information that can be used during targeting. spearphishing for information is an attempt to trick targets into divulging information, frequently credentials or other actionable information. spearphishing for information frequently involves social engineering techniques, such as posing as a source with a reason to collect information (ex: establish accounts or compromise accounts) and/or sending multiple, seemingly urgent messages.",
                    "procedure_description": "sidewinder has sent e-mails with malicious attachments that lead victims to credential harvesting websites.[6][7][8]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1598.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1598/003",
                    "technique_name": "phishing for information : spearphishing link",
                    "technique_description": "adversaries may send spearphishing messages with a malicious link to elicit sensitive information that can be used during targeting. spearphishing for information is an attempt to trick targets into divulging information, frequently credentials or other actionable information. spearphishing for information frequently involves social engineering techniques, such as posing as a source with a reason to collect information (ex: establish accounts or compromise accounts) and/or sending multiple, seemingly urgent messages.",
                    "procedure_description": "sidewinder has sent e-mails with malicious links to credential harvesting websites.[22]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/001",
                    "technique_name": "phishing : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. spearphishing attachment is a specific variant of spearphishing. spearphishing attachment is different from other forms of spearphishing in that it employs the use of malware attached to an email. all forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. in this scenario, adversaries attach a file to the spearphishing email and usually rely upon user execution to gain execution. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "sidewinder has sent e-mails with malicious attachments often crafted for specific targets.[206]"
                },
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
                    "procedure_description": "sidewinder has sent e-mails with malicious links often crafted for specific targets.[96][97]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "sidewinder has used powershell to drop and execute malware loaders.[207]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "sidewinder has used vbscript to drop and execute malware loaders.[143]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/007",
                    "technique_name": "command and scripting interpreter : javascript",
                    "technique_description": "adversaries may abuse various implementations of javascript for execution. javascript (js) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though js can be executed in runtime environments outside the browser.",
                    "procedure_description": "sidewinder has used javascript to drop and execute malware loaders.[59][60]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1203",
                    "technique_link": "https://attack.mitre.org/techniques/T1203",
                    "technique_name": "exploitation for client execution",
                    "technique_description": "adversaries may exploit software vulnerabilities in client applications to execute code. vulnerabilities can exist in software due to unsecure coding practices that can lead to unanticipated behavior. adversaries can take advantage of certain vulnerabilities through targeted exploitation for the purpose of arbitrary code execution. oftentimes the most valuable exploits to an offensive toolkit are those that can be used to obtain code execution on a remote system because they can be used to gain access to that system. users will expect to see files related to the applications they commonly used to do work, so they are a useful target for exploit research and development because of their high utility.",
                    "procedure_description": "sidewinder has exploited vulnerabilities to gain execution including cve-2017-11882 and cve-2020-0674.[76][77]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1559.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1559/002",
                    "technique_name": "inter-process communication : dynamic data exchange",
                    "technique_description": "adversaries may use windows dynamic data exchange (dde) to execute arbitrary commands. dde is a client-server protocol for one-time and/or continuous inter-process communication (ipc) between applications. once a link is established, applications can autonomously exchange transactions consisting of strings, warm data links (notifications when a data item changes), hot data links (duplications of changes to a data item), and requests for command execution.",
                    "procedure_description": "sidewinder has used the activexobject utility to create ole objects to obtain execution through internet explorer.[30][31]"
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
                    "procedure_description": "sidewinder has lured targets to click on malicious links to gain execution in the target environment.[87][88][89][90]"
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
                    "procedure_description": "sidewinder has lured targets to click on malicious files to gain execution in the target environment.[212][213][214][215]"
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
                    "procedure_description": "sidewinder has added paths to executables in the registry to establish persistence.[241][242][243]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "sidewinder has used dll side-loading to drop and execute malicious payloads including the hijacking of the legitimate windows application file rekeywiz.exe.[59]"
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
                    "procedure_description": "sidewinder has added paths to executables in the registry to establish persistence.[241][242][243]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "sidewinder has used dll side-loading to drop and execute malicious payloads including the hijacking of the legitimate windows application file rekeywiz.exe.[59]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "sidewinder has used dll side-loading to drop and execute malicious payloads including the hijacking of the legitimate windows application file rekeywiz.exe.[59]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "sidewinder has named malicious files rekeywiz.exe to match the name of a legitimate windows executable.[149]"
                },
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
                    "procedure_description": "sidewinder has used base64 encoding and ecdh-p256 encryption for payloads.[296][297][298]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/010",
                    "technique_name": "obfuscated files or information : command obfuscation",
                    "technique_description": "adversaries may obfuscate content during command execution to impede detection. command-line obfuscation is a method of making strings and patterns within commands and scripts more difficult to signature and analyze. this type of obfuscation can be included within commands executed by delivered payloads (e.g., phishing and drive-by compromise) or interactively via command and scripting interpreter.",
                    "procedure_description": "sidewinder has used base64 encoding for scripts.[78][79]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/005",
                    "technique_name": "system binary proxy execution : mshta",
                    "technique_description": "adversaries may abuse mshta.exe to proxy execution of malicious .hta files and javascript or vbscript through a trusted windows utility. there are several examples of different types of threats leveraging mshta.exe during initial compromise and for execution of code",
                    "procedure_description": "sidewinder has used mshta.exe to execute malicious payloads.[33][34]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "sidewinder has used malware to collect information on files and directories.[274]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "sidewinder has used tools to identify running processes on the victim's machine.[228]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518",
                    "technique_link": "https://attack.mitre.org/techniques/T1518",
                    "technique_name": "software discovery",
                    "technique_description": "adversaries may attempt to get a listing of software and software versions that are installed on a system or in a cloud environment. adversaries may use the information from software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "sidewinder has used tools to enumerate software installed on an infected host.[29][30]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1518/001",
                    "technique_name": "software discovery : security software discovery",
                    "technique_description": "adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. this may include things such as firewall rules and anti-virus. adversaries may use the information from security software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "sidewinder has used the windows service winmgmts:\\.\\root\\securitycenter2 to check installed antivirus products.[91]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "sidewinder has used tools to collect the computer name, os version, installed hotfixes, as well as information regarding the memory and processor on a compromised host.[333][334]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "sidewinder has used malware to collect information on network interfaces, including the mac address.[211]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1033",
                    "technique_link": "https://attack.mitre.org/techniques/T1033",
                    "technique_name": "system owner/user discovery",
                    "technique_description": "adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. they may do this, for example, by retrieving account usernames or by using os credential dumping. the information may be collected in a number of different ways using other discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. adversaries may use the information from system owner/user discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "sidewinder has used tools to identify the user of a compromised host.[167]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1124",
                    "technique_link": "https://attack.mitre.org/techniques/T1124",
                    "technique_name": "system time discovery",
                    "technique_description": "an adversary may gather the system time and/or time zone from a local or remote system. the system time is set and stored by the windows time service within a domain to maintain time synchronization between systems and services in an enterprise network.",
                    "procedure_description": "sidewinder has used tools to obtain the current system time.[66]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1119",
                    "technique_link": "https://attack.mitre.org/techniques/T1119",
                    "technique_name": "automated collection",
                    "technique_description": "once established within a system or network, an adversary may use automated techniques for collecting internal data. methods for performing this technique could include use of a command and scripting interpreter to search for and copy information fitting set criteria such as file type, location, or name at specific time intervals. in cloud-based environments, adversaries may also use cloud apis, command line interfaces, or extract, transform, and load (etl) services to automatically collect data. this functionality could also be built into remote access tools.",
                    "procedure_description": "sidewinder has used tools to automatically collect system and network configuration information.[42]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1074/001",
                    "technique_name": "data staged : local data staging",
                    "technique_description": "adversaries may stage collected data in a central location or directory on the local system prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "sidewinder has collected stolen files in a temporary folder in preparation for exfiltration.[87]"
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
                    "procedure_description": "sidewinder has used http in c2 communications.[302][303][304]"
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
                    "procedure_description": "sidewinder has used lnk files to download remote files to the victim's network.[409][410]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1020",
                    "technique_link": "https://attack.mitre.org/techniques/T1020",
                    "technique_name": "automated exfiltration",
                    "technique_description": "adversaries may exfiltrate data, such as sensitive documents, through the use of automated processing after being gathered during collection.",
                    "procedure_description": "sidewinder has configured tools to automatically send collected files to attacker controlled servers.[15]"
                }
            ]
        },
        {
            "procedure_name": "at",
            "procedure_code": "s0110",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0110",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                }
            ]
        }
    ]
};