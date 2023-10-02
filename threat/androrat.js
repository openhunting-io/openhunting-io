var threatdata = {
    "name": "AndroRAT",
    "alias": "AndroRAT",
    "category": "Tools",
    "type": "Backdoor",
    "modified": "2022-05-11",
    "all_data": {
        "tool": "AndroRAT",
        "names": [
            {
                "name": "AndroRAT"
            }
        ],
        "description": "(Trend Micro) RATs have long been a common Windows threat, so it shouldn\u2019t be a surprise that it has come to Android. A RAT has to gain root access \u2014 usually by exploiting a vulnerability \u2014 in order to have control over a system. Discovered in 2012, the original authors intended AndroRAT \u2014 initially a university project \u2014 as an open-source client/server application that can provide remote control of an Android system, which naturally attracted cybercriminals.",
        "category": "Tools",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/new-androrat-exploits-dated-permanent-rooting-vulnerability-allows-privilege-escalation/",
            "https://github.com/DesignativeDave/androrat"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0292/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.androrat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:androrat"
        ],
        "uuid": "6ffe1e33-df8a-4f99-ad66-e6edb0f23e5c",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "AndroRAT",
            "malware_alias": null,
            "malware": "apk.androrat",
            "last_update": "2023-05-11 05:43:05",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "347f1b018f643de0b9c946c94bd490a7426503869a0828b0a70b4d318fa097d6",
                        "timestamp": "2023-05-11 05:43:05"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-05-11 05:43:05",
    "file_name": "androrat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.talosintelligence.com/2022/05/bitter-apt-adds-bangladesh-to-their.html",
            "date": "2022-05-11",
            "organization": "Cisco Talos",
            "author": "Cisco Talos",
            "title": "Bitter APT adds Bangladesh to their targets",
            "categories": [
                "AndroRAT",
                "Artra Downloader",
                "Bitter RAT",
                "ZxxZ"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/AhxP5HmROtMsFBiUxj0cFg",
            "date": "2021-09-08",
            "organization": "Microstep Intelligence Bureau",
            "author": "Microstep Online Research Response Center",
            "title": "Trilateral operation: years of cyberespionage against countries in south asia and the middle east (APT36)",
            "categories": [
                "AndroRAT",
                "Crimson RAT"
            ]
        },
        {
            "data_url": "https://www.stratosphereips.org/blog/2021/5/6/dissecting-a-rat-analysis-of-the-command-line-androrat",
            "date": "2021-06-01",
            "organization": "Stratosphere Lab",
            "author": "Kamila Babayeva",
            "title": "Dissecting a RAT. Analysis of the Command-line AndroRAT.",
            "categories": [
                "AndroRAT"
            ]
        },
        {
            "data_url": "https://www.stratosphereips.org/blog/2021/3/29/dissecting-a-rat-analysis-of-the-androrat",
            "date": "2021-03-31",
            "organization": "Stratosphere Lab",
            "author": "Sebastian Garc\u00eda",
            "title": "Dissecting a RAT. Analysis of the AndroRAT",
            "categories": [
                "AndroRAT"
            ]
        },
        {
            "data_url": "https://www.stratosphereips.org/blog/2020/11/10/android-mischief-rats-dataset",
            "date": "2020-11-18",
            "organization": "Stratosphere Lab",
            "author": "Stratosphere Labs",
            "title": "Android Mischief Dataset",
            "categories": [
                "AhMyth",
                "AndroRAT",
                "SpyMax"
            ]
        },
        {
            "data_url": "https://www.bitdefender.com/files/News/CaseStudies/study/352/Bitdefender-PR-Whitepaper-BitterAPT-creat4571-en-EN-GenericUse.pdf",
            "date": "2020-06-19",
            "organization": "Bitdefender",
            "author": "Oana Asoltanei",
            "title": "BitterAPT Revisited: the Untold Evolution of an Android Espionage Tool",
            "categories": [
                "AndroRAT",
                "Artra Downloader",
                "Bitter RAT",
                "HAZY TIGER"
            ]
        },
        {
            "data_url": "https://www.kaspersky.com/blog/mobile-malware-part-4/24290/",
            "date": "2018-10-22",
            "organization": "Kaspersky Labs",
            "author": "Ilja Shatilin",
            "title": "Mobile beasts and where to find them \u2014 part four",
            "categories": [
                "AndroRAT"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/the-urpage-connection-to-bahamut-confucius-and-patchwork/",
            "date": "2018-08-29",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "The Urpage Connection to Bahamut, Confucius and Patchwork",
            "categories": [
                "AndroRAT",
                "Bahamut"
            ]
        },
        {
            "data_url": "https://hotforsecurity.bitdefender.com/blog/possibly-italy-born-android-rat-reported-in-china-find-bitdefender-researchers-16264.html",
            "date": "2016-08-08",
            "organization": "Bitdefender",
            "author": "Liviu Arsene",
            "title": "Possibly Italy-Born Android RAT Reported in China, Find Bitdefender Researchers",
            "categories": [
                "AndroRAT"
            ]
        },
        {
            "data_url": "https://github.com/DesignativeDave/androrat",
            "date": "2012-11-16",
            "organization": "Github (DesignativeDave)",
            "author": "DesignativeDave",
            "title": "Remote Administration Tool for Android devices",
            "categories": [
                "AndroRAT"
            ]
        }
    ],
    "mitre": [
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