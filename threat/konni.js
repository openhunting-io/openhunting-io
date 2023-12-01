var threatdata = {
    "name": "Konni",
    "alias": "Konni",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2023-11-10",
    "all_data": {
        "tool": "Konni",
        "names": [
            {
                "name": "Konni"
            }
        ],
        "description": "Konni is a remote administration tool, observed in the wild since early 2014. The Konni malware family is potentially linked to APT37, a North-Korean cyber espionage group active since 2012. The group primary victims are South-Korean political organizations, as well as Japan, Vietnam, Russia, Nepal, China, India, Romania, Kuwait, and other parts of the Middle East.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://blog.talosintelligence.com/2017/05/konni-malware-under-radar-for-years.html",
            "https://blog.fortinet.com/2017/08/15/a-quick-look-at-a-new-konni-rat-variant",
            "https://vallejo.cc/2017/07/08/analysis-of-new-variant-of-konni-rat/",
            "http://blog.talosintelligence.com/2017/07/konni-references-north-korean-missile-capabilities.html",
            "https://us-cert.cisa.gov/ncas/alerts/aa20-227a",
            "https://blog.malwarebytes.com/threat-intelligence/2022/01/konni-evolves-into-stealthier-rat/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0356/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.konni"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:konni"
        ],
        "uuid": "d238a221-2a1d-4558-9dbf-7a3a6bbb0d22",
        "last-card-change": "2022-01-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Konni",
            "malware_alias": null,
            "malware": "win.konni",
            "last_update": "2023-09-14 13:56:56",
            "tags": [
                "KONNI",
                "APT Konni",
                "APT37",
                "APT",
                "Konni"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "e9f0dkd.c1.biz",
                        "timestamp": "2023-09-14 13:56:56"
                    },
                    {
                        "value": "ske9dhn.c1.biz",
                        "timestamp": "2023-09-14 13:56:55"
                    },
                    {
                        "value": "ttzcloud.com",
                        "timestamp": "2023-09-05 07:57:30"
                    },
                    {
                        "value": "serviceset.net",
                        "timestamp": "2023-08-31 08:22:15"
                    },
                    {
                        "value": "anrun.kr",
                        "timestamp": "2023-08-30 13:50:37"
                    },
                    {
                        "value": "headsity.com",
                        "timestamp": "2023-07-17 13:19:18"
                    },
                    {
                        "value": "overseeby.com",
                        "timestamp": "2023-06-30 08:35:15"
                    },
                    {
                        "value": "gg1593.c1.biz",
                        "timestamp": "2023-05-23 16:53:44"
                    },
                    {
                        "value": "naver.downfiles.org",
                        "timestamp": "2023-04-16 08:52:39"
                    },
                    {
                        "value": "naver.files001.com",
                        "timestamp": "2023-04-16 08:52:39"
                    },
                    {
                        "value": "centhosting.net",
                        "timestamp": "2023-04-15 06:56:07"
                    }
                ],
                "ip:port": [
                    {
                        "value": "88.119.169.96:80",
                        "timestamp": "2023-09-05 07:58:55"
                    },
                    {
                        "value": "88.119.169.73:80",
                        "timestamp": "2023-09-05 07:58:55"
                    },
                    {
                        "value": "88.119.169.93:80",
                        "timestamp": "2023-08-31 08:22:32"
                    },
                    {
                        "value": "213.252.244.251:80",
                        "timestamp": "2023-06-30 08:36:05"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "d245f208d2a682f4d2c4464557973bf26dee756b251f162adb00b4074b4db3ac",
                        "timestamp": "2023-09-04 09:28:14"
                    },
                    {
                        "value": "9bb69ea4bc80f3f5fc628f794eb4a4024f8f3a4a748335e925adfb8f5b5e97fe",
                        "timestamp": "2023-08-31 06:41:11"
                    },
                    {
                        "value": "5225df55b1d1be397012e9823cd936766c6dcecdbd3dab79d07691db33ce81e8",
                        "timestamp": "2023-01-13 07:19:06"
                    }
                ],
                "url": [
                    {
                        "value": "http://serviceset.net/upload.php",
                        "timestamp": "2023-08-31 08:21:24"
                    },
                    {
                        "value": "http://anrun.kr/movie/contents.php",
                        "timestamp": "2023-08-31 06:39:55"
                    },
                    {
                        "value": "http://headsity.com/list.php",
                        "timestamp": "2023-07-17 13:20:23"
                    },
                    {
                        "value": "http://overseeby.com/list.php",
                        "timestamp": "2023-06-30 08:35:38"
                    },
                    {
                        "value": "http://gg1593.c1.biz/dn.php",
                        "timestamp": "2023-07-17 13:22:40"
                    },
                    {
                        "value": "http://centhosting.net/list.php",
                        "timestamp": "2023-04-15 06:55:51"
                    },
                    {
                        "value": "http://centhosting.net/upload.php",
                        "timestamp": "2023-04-15 06:55:50"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "19dc387bffdc0a22f640bd38af320db4",
                        "timestamp": "2023-08-31 08:20:46"
                    },
                    {
                        "value": "2c2b800c2e20f5f3ae0332bf59f8df13",
                        "timestamp": "2023-08-31 08:17:35"
                    },
                    {
                        "value": "0fa91325446fd53a3bc2b1dee29cfce3",
                        "timestamp": "2023-08-31 07:11:33"
                    },
                    {
                        "value": "bc3fb948dc956f79dbc7aac06442d6ef",
                        "timestamp": "2023-08-31 07:11:33"
                    },
                    {
                        "value": "168BCC063501D191D82AAA3A32741A12",
                        "timestamp": "2023-08-30 07:27:06"
                    },
                    {
                        "value": "B86C38AE5C24C55831D7F8CA3CBEB814",
                        "timestamp": "2023-08-30 07:27:06"
                    },
                    {
                        "value": "DB31A36E1684C568FA3529D60A59BA29",
                        "timestamp": "2023-08-30 07:27:06"
                    },
                    {
                        "value": "FF4067B4865C9B49DA2F28AC12CA5C1A",
                        "timestamp": "2023-08-30 07:27:06"
                    },
                    {
                        "value": "90468E4BDF61CF146030515ED3E15D81",
                        "timestamp": "2023-08-30 07:27:06"
                    },
                    {
                        "value": "8100d6d5524e040874bf8348384a2017",
                        "timestamp": "2023-07-17 13:21:42"
                    },
                    {
                        "value": "c62a1fb8d29db14fc89fe67430f6bf30",
                        "timestamp": "2023-07-17 13:18:04"
                    },
                    {
                        "value": "d668a24ca81e99750fc0808dec51f69e",
                        "timestamp": "2023-07-17 13:18:04"
                    },
                    {
                        "value": "24949137f4a88bee8a11e0060a5eeb11",
                        "timestamp": "2023-06-30 08:34:31"
                    },
                    {
                        "value": "395b6399fea137783ffdac84f2d4c256",
                        "timestamp": "2023-06-30 08:34:31"
                    },
                    {
                        "value": "3a3ce0a1794b548682167da692052dc2",
                        "timestamp": "2023-05-23 16:53:03"
                    },
                    {
                        "value": "7e5cc47880bf2ccd244cf925093d2d16",
                        "timestamp": "2023-04-15 06:55:00"
                    },
                    {
                        "value": "00e6e9ed4666623860686c123ed334f0",
                        "timestamp": "2022-10-03 13:38:12"
                    },
                    {
                        "value": "24ef6a627d69f6bfe4b8325f74a8adba",
                        "timestamp": "2022-09-27 23:43:33"
                    },
                    {
                        "value": "705c8d431b4b8fa834491ff6975a0532",
                        "timestamp": "2022-09-27 23:43:33"
                    },
                    {
                        "value": "66fba06e965f9a6ea192db7f452ea9b6",
                        "timestamp": "2022-06-23 11:35:32"
                    },
                    {
                        "value": "a51912c138ae264b61c6edb492c355a6",
                        "timestamp": "2021-09-02 02:04:07"
                    },
                    {
                        "value": "b693e3d2f2cab550ad4f8c5722776498",
                        "timestamp": "2021-09-02 02:04:07"
                    },
                    {
                        "value": "32a60c3697e5d59e0cb83b9d829f256d",
                        "timestamp": "2021-08-26 14:13:21"
                    },
                    {
                        "value": "ce866ae254de4cabd60a95abcc52c315",
                        "timestamp": "2021-07-30 15:28:22"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-14 13:56:56",
    "file_name": "konni",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://nsfocusglobal.com/the-new-apt-group-darkcasino-and-the-global-surge-in-winrar-0-day-exploits/",
            "date": "2023-11-10",
            "organization": "NSFOCUS",
            "author": "NSFOCUS",
            "title": "The New APT Group DarkCasino and the Global Surge in WinRAR 0-Day Exploits",
            "categories": [
                "Cobalt Strike",
                "Konni"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/malware/2022/09/06/malware-tricks-23.html",
            "date": "2022-09-06",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "Malware development tricks: parent PID spoofing. Simple C++ example.",
            "categories": [
                "Cobalt Strike",
                "Konni"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/north-korean-hackers-attack-eu-targets-with-konni-rat-malware/",
            "date": "2022-07-23",
            "organization": "BleepingComputer",
            "author": "Bill Toulas",
            "title": "North Korean hackers attack EU targets with Konni RAT malware",
            "categories": [
                "Konni"
            ]
        },
        {
            "data_url": "https://www.securonix.com/blog/stiffbizon-detection-new-attack-campaign-observed/",
            "date": "2022-07-20",
            "organization": "Securonix Threat Labs",
            "author": "D. Iuzvyk",
            "title": "STIFF#BIZON Detection Using Securonix \u2013 New Attack Campaign Observed Possibly Linked to Konni/APT37 (North Korea) - Securonix",
            "categories": [
                "Konni"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2022/05/02/malware-pers-3.html",
            "date": "2022-05-02",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "Malware development: persistence - part 3. COM DLL hijack. Simple C++ example",
            "categories": [
                "Agent.BTZ",
                "Ave Maria",
                "Konni",
                "Mosquito",
                "TurlaRPC"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-intelligence/2022/01/konni-evolves-into-stealthier-rat/",
            "date": "2022-01-26",
            "organization": "Malwarebytes",
            "author": "Roberto Santos",
            "title": "KONNI evolves into stealthier RAT",
            "categories": [
                "Konni"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/hackers-take-over-diplomats-email-target-russian-deputy-minister/",
            "date": "2022-01-12",
            "organization": "BleepingComputer",
            "author": "Ionut Ilascu",
            "title": "Hackers take over diplomat's email, target Russian deputy minister",
            "categories": [
                "Konni"
            ]
        },
        {
            "data_url": "https://blog.lumen.com/new-konni-campaign-targeting-russian-ministry-of-foreign-affairs/",
            "date": "2022-01-05",
            "organization": "Lumen",
            "author": "Danny Adamitis",
            "title": "New Konni Campaign Kicks Off the New Year by Targeting Russian Ministry of Foreign Affairs",
            "categories": [
                "Konni"
            ]
        },
        {
            "data_url": "https://cluster25.io/wp-content/uploads/2022/01/Konni_targeting_Russian_diplomatic_sector.pdf",
            "date": "2022-01-03",
            "organization": "Cluster25",
            "author": "Cluster25",
            "title": "North Korean Group \u201cKONNI\u201d Targets The Russian Diplomatic Sector With New Versions Of Malware Implants",
            "categories": [
                "Konni"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2021/09/06/simple-malware-av-evasion-2.html",
            "date": "2021-09-06",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "AV engines evasion for C++ simple malware: part 2",
            "categories": [
                "Agent Tesla",
                "Amadey",
                "Anchor",
                "AnchorMTea",
                "Carbanak",
                "Carberp",
                "Cardinal RAT",
                "Felixroot",
                "Konni",
                "Loki Password Stealer (PWS)",
                "Maze"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-intelligence/2021/08/new-variant-of-konni-malware-used-in-campaign-targetting-russia/",
            "date": "2021-08-20",
            "organization": "Malwarebytes",
            "author": "Hossein Jazi",
            "title": "New variant of Konni malware used in campaign targetting Russia",
            "categories": [
                "Konni"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa20-227a",
            "date": "2020-08-14",
            "organization": "Department of Homeland Security",
            "author": "US-CERT",
            "title": "Alert (AA20-227A): Phishing Emails Used to Deploy KONNI Malware",
            "categories": [
                "Konni"
            ]
        },
        {
            "data_url": "https://e.cyberint.com/hubfs/Cyberint_Konni%20Malware%202019%20Campaign_Report.pdf",
            "date": "2020-01-27",
            "organization": "CyberInt",
            "author": "CyberInt",
            "title": "Konni Malware 2019 Campaign",
            "categories": [
                "Konni"
            ]
        },
        {
            "data_url": "https://medium.com/d-hunter/a-look-into-konni-2019-campaign-b45a0f321e9b",
            "date": "2020-01-04",
            "organization": "Medium d-hunter",
            "author": "Doron Karmi",
            "title": "A Look Into Konni 2019 Campaign",
            "categories": [
                "Konni"
            ]
        },
        {
            "data_url": "https://blog.alyac.co.kr/2474",
            "date": "2019-08-19",
            "organization": "EST Security",
            "author": "East Security Response Center",
            "title": "Konni APT organization emerges as an attack disguised as Russian document",
            "categories": [
                "Konni"
            ]
        },
        {
            "data_url": "https://securelist.com/scarcruft-continues-to-evolve-introduces-bluetooth-harvester/90729/",
            "date": "2019-05-13",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "ScarCruft continues to evolve, introduces Bluetooth harvester",
            "categories": [
                "Konni",
                "RokRAT",
                "UACMe",
                "APT37"
            ]
        },
        {
            "data_url": "https://blog.fortinet.com/2017/08/15/a-quick-look-at-a-new-konni-rat-variant",
            "date": "2017-08-15",
            "organization": "Fortinet",
            "author": "Jasper Manuel",
            "title": "A Quick Look at a New KONNI RAT Variant",
            "categories": [
                "Konni"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2017/07/konni-references-north-korean-missile-capabilities.html",
            "date": "2017-07-06",
            "organization": "Cisco Talos",
            "author": "Paul Rascagn\u00e8res",
            "title": "New KONNI Campaign References North Korean Missile Capabilities",
            "categories": [
                "Konni"
            ]
        },
        {
            "data_url": "https://vallejo.cc/2017/07/08/analysis-of-new-variant-of-konni-rat/",
            "date": "2017-07",
            "organization": "vallejo.cc",
            "author": "vallejocc",
            "title": "Analysis of new variant of Konni RAT",
            "categories": [
                "Konni"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2017/05/konni-malware-under-radar-for-years.html",
            "date": "2017-05-03",
            "organization": "Cisco Talos",
            "author": "Paul Rascagn\u00e8res",
            "title": "KONNI: A Malware Under The Radar For Years",
            "categories": [
                "Konni"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "konni",
            "procedure_code": "s0356",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0356",
            "techniques": [
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
                    "procedure_description": "konni has been delivered via spearphishing campaigns through a malicious word document.[130]"
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
                    "procedure_description": "konni used powershell to download and execute a specific 64-bit version of the malware.[131][132]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "konni has used cmd.exe to execute arbitrary commands on the infected host across different stages of the infection chain.[183][184][185]"
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
                    "procedure_description": "konni has executed malicious javascript code.[47]"
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
                    "procedure_description": "konni has hardcoded api calls within its functions to use on the victim's machine.[105]"
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
                    "procedure_description": "konni has relied on a victim to enable malicious macros within an attachment delivered via email.[125]"
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
                    "procedure_description": "a version of konni has dropped a windows shortcut into the startup folder to establish persistence.[137]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "a version of konni drops a windows shortcut on the victim\u2019s machine to establish persistence.[19]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "konni has registered itself as a service using its export function.[73]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.015",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/015",
                    "technique_name": "event triggered execution : component object model hijacking",
                    "technique_description": "adversaries may establish persistence by executing malicious content triggered by hijacked references to component object model (com) objects. com is a system within windows to enable interaction between software components through the operating system.  references to various com objects are stored in the registry.",
                    "procedure_description": "konni has modified comsysapp service to load the malicious dll payload.[10]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "konni has bypassed uac by performing token impersonation as well as an rpc-based method, this included bypassing uac set to \"alwaysnotify\".[40][41]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/002",
                    "technique_name": "access token manipulation : create process with token",
                    "technique_description": "adversaries may create a new process with an existing token to escalate privileges and bypass access controls. processes can be created with the token and resulting security context of another user using features such as createprocesswithtokenw and runas.",
                    "procedure_description": "konni has duplicated the token of a high integrity process to spawn an instance of cmd.exe under an impersonated user.[6][7]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/004",
                    "technique_name": "access token manipulation : parent pid spoofing",
                    "technique_description": "adversaries may spoof the parent process identifier (ppid) of a new process to evade process-monitoring defenses or to elevate privileges. new processes are typically spawned directly from their parent, or calling, process unless explicitly specified. one way of explicitly assigning the ppid of a new process is via the createprocess api call, which supports a parameter that defines the ppid to use. this functionality is used by windows features such as user account control (uac) to correctly set the ppid after a requested elevated process is spawned by system (typically via svchost.exe or consent.exe) rather than the current user context.",
                    "procedure_description": "konni has used parent pid spoofing to spawn a new cmd process using createprocessw and a handle to taskmgr.exe.[8]"
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
                    "procedure_description": "a version of konni has dropped a windows shortcut into the startup folder to establish persistence.[137]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "a version of konni drops a windows shortcut on the victim\u2019s machine to establish persistence.[19]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "konni has registered itself as a service using its export function.[73]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.015",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/015",
                    "technique_name": "event triggered execution : component object model hijacking",
                    "technique_description": "adversaries may establish persistence by executing malicious content triggered by hijacked references to component object model (com) objects. com is a system within windows to enable interaction between software components through the operating system.  references to various com objects are stored in the registry.",
                    "procedure_description": "konni has modified comsysapp service to load the malicious dll payload.[10]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "konni has bypassed uac by performing token impersonation as well as an rpc-based method, this included bypassing uac set to \"alwaysnotify\".[40][41]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/002",
                    "technique_name": "access token manipulation : create process with token",
                    "technique_description": "adversaries may create a new process with an existing token to escalate privileges and bypass access controls. processes can be created with the token and resulting security context of another user using features such as createprocesswithtokenw and runas.",
                    "procedure_description": "konni has duplicated the token of a high integrity process to spawn an instance of cmd.exe under an impersonated user.[6][7]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/004",
                    "technique_name": "access token manipulation : parent pid spoofing",
                    "technique_description": "adversaries may spoof the parent process identifier (ppid) of a new process to evade process-monitoring defenses or to elevate privileges. new processes are typically spawned directly from their parent, or calling, process unless explicitly specified. one way of explicitly assigning the ppid of a new process is via the createprocess api call, which supports a parameter that defines the ppid to use. this functionality is used by windows features such as user account control (uac) to correctly set the ppid after a requested elevated process is spawned by system (typically via svchost.exe or consent.exe) rather than the current user context.",
                    "procedure_description": "konni has used parent pid spoofing to spawn a new cmd process using createprocessw and a handle to taskmgr.exe.[8]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "konni has used certutil to download and decode base64 encoded strings and has also devoted a custom section to performing all the components of the deobfuscation process.[128][129]"
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
                    "procedure_description": "konni can delete files.[127]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/004",
                    "technique_name": "masquerading : masquerade task or service",
                    "technique_description": "adversaries may attempt to manipulate the name of a task or service to make it appear legitimate or benign. tasks/services executed by the task scheduler or systemd will typically be given a name and/or description. windows services will have a service name as well as a display name. many benign tasks and services exist that have commonly associated names. adversaries may give tasks or services names that are similar or identical to those of legitimate ones.",
                    "procedure_description": "konni has pretended to be the xmlprov network provisioning service.[42]"
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
                    "procedure_description": "konni has created a shortcut called \"anti virus service.lnk\" in an apparent attempt to masquerade as a legitimate file.[83]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1112",
                    "technique_link": "https://attack.mitre.org/techniques/T1112",
                    "technique_name": "modify registry",
                    "technique_description": "adversaries may interact with the windows registry to hide configuration information within registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.",
                    "procedure_description": "konni has modified registry keys of comsysapp, svchost, and xmlprov on the machine to gain persistence.[82][83]"
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
                    "procedure_description": "konni is heavily obfuscated and includes encrypted configuration files.[189]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/002",
                    "technique_name": "obfuscated files or information : software packing",
                    "technique_description": "adversaries may perform software packing or virtual machine software protection to conceal their code. software packing is a method of compressing or encrypting an executable. packing an executable changes the file signature in an attempt to avoid signature-based detection. most decompression techniques decompress the executable code in memory. virtual machine software protection translates an executable's original code into a special format that only a special virtual machine can run. a virtual machine is then called to run this code.",
                    "procedure_description": "konni has been packed for obfuscation.[53]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/011",
                    "technique_name": "system binary proxy execution : rundll32",
                    "technique_description": "adversaries may abuse rundll32.exe to proxy execution of malicious code. using rundll32.exe, vice executing directly (i.e. shared modules), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. rundll32.exe is commonly associated with executing dll payloads (ex: rundll32.exe {dllname, dllfunction}).",
                    "procedure_description": "konni has used rundll32 to execute its loader for privilege escalation purposes.[59][60]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "konni can steal profiles (containing credential information) from firefox, chrome, and opera.[42]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "konni has the capability to perform keylogging.[97]"
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
                    "procedure_description": "a version of konni searches for filenames created with a previous version of the malware, suggesting different versions targeted the same victims and the versions may work together.[172]"
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
                    "procedure_description": "konni has used the command cmd /c tasklist to get a snapshot of the current processes on the target machine.[149][150]"
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
                    "procedure_description": "konni can gather the os version, architecture information, connected drives, hostname, ram size, and disk space information from the victim\u2019s machine and has used cmd /c systeminfo command to get a snapshot of the current system state of the target machine.[197][198][199]"
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
                    "procedure_description": "konni can collect the ip address from the victim\u2019s machine.[125]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1049",
                    "technique_link": "https://attack.mitre.org/techniques/T1049",
                    "technique_name": "system network connections discovery",
                    "technique_description": "adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.",
                    "procedure_description": "konni has used net session on the victim's machine.[43]"
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
                    "procedure_description": "konni can collect the username from the victim\u2019s machine.[91]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560",
                    "technique_link": "https://attack.mitre.org/techniques/T1560",
                    "technique_name": "archive collected data",
                    "technique_description": "an adversary may compress and/or encrypt data that is collected prior to exfiltration. compressing the data can help to obfuscate the collected data and minimize the amount of data sent over the network. encryption can be used to hide information that is being exfiltrated from detection or make exfiltration less conspicuous upon inspection by a defender.",
                    "procedure_description": "konni has encrypted data and files prior to exfiltration.[28]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1115",
                    "technique_link": "https://attack.mitre.org/techniques/T1115",
                    "technique_name": "clipboard data",
                    "technique_description": "adversaries may collect data stored in the clipboard from users copying information within or between applications.",
                    "procedure_description": "konni had a feature to steal data from the clipboard.[29]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "konni has stored collected information and discovered processes in a tmp file.[100]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "konni has the capability to perform keylogging.[97]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "konni can take screenshots of the victim\u2019s machine.[89]"
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
                    "procedure_description": "konni has used http post for c2.[182][183]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1132/001",
                    "technique_name": "data encoding : standard encoding",
                    "technique_description": "adversaries may encode data with a standard data encoding system to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a standard data encoding system that adheres to existing protocol specifications. common data encoding schemes include ascii, unicode, hexadecimal, base64, and mime. some data encoding systems may also result in data compression, such as gzip.",
                    "procedure_description": "konni has used a custom base64 key to encode stolen data before exfiltration.[49]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/001",
                    "technique_name": "encrypted channel : symmetric cryptography",
                    "technique_description": "adversaries may employ a known symmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. symmetric encryption algorithms use the same key for plaintext encryption and ciphertext decryption. common symmetric encryption algorithms include aes, des, 3des, blowfish, and rc4.",
                    "procedure_description": "konni has used aes to encrypt c2 traffic.[77]"
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
                    "procedure_description": "konni can download files and execute them on the victim\u2019s machine.[249][250]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1048.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1048/003",
                    "technique_name": "exfiltration over alternative protocol : exfiltration over unencrypted non-c2 protocol",
                    "technique_description": "adversaries may steal data by exfiltrating it over an un-encrypted network protocol other than that of the existing command and control channel. the data may also be sent to an alternate network location from the main command and control server.",
                    "procedure_description": "konni has used ftp to exfiltrate reconnaissance data out.[23]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1041",
                    "technique_link": "https://attack.mitre.org/techniques/T1041",
                    "technique_name": "exfiltration over c2 channel",
                    "technique_description": "adversaries may steal data by exfiltrating it over an existing command and control channel. stolen data is encoded into the normal communications channel using the same protocol as command and control communications.",
                    "procedure_description": "konni has sent data and files to its c2 server.[69][70][71]"
                }
            ]
        }
    ]
};