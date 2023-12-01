var threatdata = {
    "name": "Parallax RAT",
    "alias": "Parallax RAT, ParallaxRAT, Parallax",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-02-28",
    "all_data": {
        "tool": "Parallax RAT",
        "names": [
            {
                "name": "Parallax RAT"
            },
            {
                "name": "ParallaxRAT"
            },
            {
                "name": "Parallax"
            }
        ],
        "description": "(Morphisec) Parallax is an advanced remote access trojan that supports all Windows OS versions. It is capable of bypassing advanced detection solutions, stealing credentials, executing remote commands, and has also been linked to several coronavirus malware campaigns.\nParallax is mostly delivered through malicious spam campaigns with Microsoft word documents as the delivery vehicle of choice as will also be described in the following blog post.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.morphisec.com/parallax-rat-active-status"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.parallax"
        ],
        "uuid": "545816d1-01d8-481f-be96-53676aea551c",
        "last-card-change": "2022-04-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Parallax RAT",
            "malware_alias": "ParallaxRAT",
            "malware": "win.parallax",
            "last_update": "2022-02-06 20:15:37",
            "tags": [
                "RAT",
                "ParallaxRAT",
                "parallax"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "58a6a07940b4e3f69415097f67f8062938290677d0c9632f29a8facddd2de46f",
                        "timestamp": "2022-02-06 20:15:37"
                    },
                    {
                        "value": "d5cd720a149085f9604493ac08b665fbbd9df1e09df1600c2f4c4696630558fb",
                        "timestamp": "2022-02-06 20:15:36"
                    },
                    {
                        "value": "babd7c7528de9097db3a25174dcd7ce4b68ba3efe6e000d3496c8ffd8dd11d33",
                        "timestamp": "2022-02-06 20:15:35"
                    },
                    {
                        "value": "c11c33fe7f6d417c0fa032f715e9f7f0f6c2c6276e9cfe9d9c64ba7f6cc3acdf",
                        "timestamp": "2022-02-06 20:15:35"
                    },
                    {
                        "value": "8107ebe6b7406e813404166e75b77b3909f4036e665cf906135ca59092fec214",
                        "timestamp": "2021-11-16 12:30:26"
                    },
                    {
                        "value": "f4a48f22b86d2f6d02f91a39c1bbb72bea98ab0495be8c3153392c8c8d44eb34",
                        "timestamp": "2021-11-16 12:30:25"
                    },
                    {
                        "value": "912a6837c72e4684fdf08acb25a0f3d96a1764db24458ee8993b6d1864f1d0db",
                        "timestamp": "2021-11-16 12:30:24"
                    },
                    {
                        "value": "be7d9fdf7f4b40476a1b5310653015620b72488eb29ea33fd48c2aba6d83547a",
                        "timestamp": "2021-11-16 12:30:24"
                    },
                    {
                        "value": "a0047cf317557e9c0bcd28762fb2f9ec6a016d1a07ce7944cf1d931af7a4e2bc",
                        "timestamp": "2021-11-08 13:45:30"
                    },
                    {
                        "value": "1abe6247ae7b3f813281feb19c7415755ad45bbd5004c256c0e91cf4bb59f156",
                        "timestamp": "2021-11-08 13:45:29"
                    },
                    {
                        "value": "80c10ee5f21f92f89cbc293a59d2fd4c01c7958aacad15642558db700943fa22",
                        "timestamp": "2021-11-08 13:45:28"
                    },
                    {
                        "value": "927389b08b7d80346c9e1afcde0202aceac98283492eb493b73785ec22c5677b",
                        "timestamp": "2021-11-08 13:45:27"
                    },
                    {
                        "value": "614812173a116f9fbf2ca956993d71b5883f825d17602f873042d79cc79e76f8",
                        "timestamp": "2021-11-02 19:58:20"
                    },
                    {
                        "value": "d62d2888067b3dab7d93cba362202c4a17c086c531949b071f9758866b4c9d6b",
                        "timestamp": "2021-10-21 11:00:28"
                    },
                    {
                        "value": "a0c84cfe467ef4034df6fae0ed2d10bb7454715e8cd1bb8118da1e686f06454d",
                        "timestamp": "2021-10-21 11:00:28"
                    },
                    {
                        "value": "c56b2d3dee4a920070a792a31e8b007a35c02d67d429a37e43b3e8b3dc44faa7",
                        "timestamp": "2021-10-21 11:00:27"
                    },
                    {
                        "value": "6a63e9a5615fe995d09574f1d935299a0eef32da31d0d0d41988c77216b916ca",
                        "timestamp": "2021-10-21 11:00:27"
                    },
                    {
                        "value": "4ea90ef6db17221b9e74f9bd390f65e9877eac59a39fccd900dccad7d986a1ad",
                        "timestamp": "2021-10-21 10:00:29"
                    },
                    {
                        "value": "c50b72e5e434a4b14d5db4de2c3dfe34eff3561c8902290ab57798b84e5305fa",
                        "timestamp": "2021-10-21 10:00:28"
                    },
                    {
                        "value": "30b6a34230e15d9941fd4d37fe392c3306c8ef4c1de59c5c87d80068514565df",
                        "timestamp": "2021-10-21 10:00:27"
                    },
                    {
                        "value": "c6fa242b88805720daf185db905717ff44f23086bb89f3409f100d4f80d95d3f",
                        "timestamp": "2021-10-21 10:00:27"
                    },
                    {
                        "value": "abba8d0990bb52ecc9c282ca8e98e83076fbd5d86afe2efecdbc236a5c610de8",
                        "timestamp": "2021-06-22 13:39:36"
                    },
                    {
                        "value": "a7fab8c1fc7ffc5002452f5a783f7a43b263ad302fab8d9fdd412610122f77ce",
                        "timestamp": "2021-06-22 13:39:36"
                    },
                    {
                        "value": "7764deac5e57af30b369e616b5904163147abbbd960c420b1f2b2eec055238fb",
                        "timestamp": "2021-06-11 09:00:24"
                    },
                    {
                        "value": "a88998b7b275d866ea3aec24b45488299384a2d8e0f2db60447f26bd550856ce",
                        "timestamp": "2021-06-11 09:00:24"
                    },
                    {
                        "value": "8c6e507be687fd725cf66f3a4d405a43fc575a275024a5ed164e90b873fe447c",
                        "timestamp": "2021-06-11 09:00:24"
                    },
                    {
                        "value": "5d5684ccef3ce3b6e92405f73794796e131d3cb1424d757828c3fb62f70f6227",
                        "timestamp": "2021-06-11 09:00:24"
                    },
                    {
                        "value": "0444d0bab0ffad641edae84a28cdf4070dfeada30c51d8b204dec98c40154b5b",
                        "timestamp": "2021-05-14 00:30:25"
                    },
                    {
                        "value": "762d0dd4af7de2c8518562a993bb4203e0bbf01ef58a23df5fb12e37191e21c7",
                        "timestamp": "2021-05-14 00:30:24"
                    },
                    {
                        "value": "ccc04dc8264252deee19e690583b72d4c056b93bcdb492665877cc60973ac18a",
                        "timestamp": "2021-05-14 00:30:24"
                    },
                    {
                        "value": "222c327eef40050baf9e05f80d39f53bf7955bd84bf212887405a665060c369f",
                        "timestamp": "2021-05-14 00:30:24"
                    }
                ],
                "ip:port": [
                    {
                        "value": "5.2.68.94:6080",
                        "timestamp": "2022-02-06 19:46:21"
                    },
                    {
                        "value": "51.195.57.236:2340",
                        "timestamp": "2021-11-10 11:11:25"
                    },
                    {
                        "value": "51.195.57.236:5555",
                        "timestamp": "2021-10-08 12:25:55"
                    },
                    {
                        "value": "51.195.57.229:5555",
                        "timestamp": "2021-07-18 06:50:22"
                    }
                ],
                "domain": [
                    {
                        "value": "inpsaslimutari.com",
                        "timestamp": "2021-12-17 09:50:29"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-02-06 20:15:37",
    "file_name": "parallax_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.uptycs.com/blog/cryptocurrency-entities-at-risk-threat-actor-uses-parallax-rat-for-infiltration",
            "date": "2023-02-28",
            "organization": "Uptycs",
            "author": "Uptycs Threat Research",
            "title": "Cryptocurrency Entities at Risk: Threat Actor Uses Parallax RAT for Infiltration",
            "categories": [
                "Parallax RAT"
            ]
        },
        {
            "data_url": "https://threatpost.com/ta2541-apt-rats-aviation/178422/",
            "date": "2022-02-15",
            "organization": "Threat Post",
            "author": "Elizabeth Montalbano",
            "title": "TA2541: APT Has Been Shooting RATs at Aviation for Years",
            "categories": [
                "AsyncRAT",
                "Houdini",
                "NetWire RC",
                "Parallax RAT"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/unskilled-hacker-linked-to-years-of-attacks-on-aviation-transport-sectors/",
            "date": "2022-02-15",
            "organization": "BleepingComputer",
            "author": "Ionut Ilascu",
            "title": "Unskilled hacker linked to years of attacks on aviation, transport sectors",
            "categories": [
                "AsyncRAT",
                "Houdini",
                "NetWire RC",
                "Parallax RAT"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/parallax-rat-active-status",
            "date": "2020-03-18",
            "organization": "Morphisec",
            "author": "Arnold Osipov",
            "title": "Parallax: The new RAT on the block",
            "categories": [
                "Parallax RAT"
            ]
        },
        {
            "data_url": "https://www.vkremez.com/2020/02/lets-learn-inside-parallax-rat-malware.html",
            "date": "2020-02-27",
            "organization": "",
            "author": "Vitali Kremez",
            "title": "Let\u2019s Learn: Inside Parallax RAT Malware: Process Hollowing Injection & Process Doppelg\u00e4nging API Mix: Part I",
            "categories": [
                "Parallax RAT"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/parallax-rat-common-malware-payload-after-hacker-forums-promotion/",
            "date": "2020-02-13",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Parallax RAT: Common Malware Payload After Hacker Forums Promotion",
            "categories": [
                "Parallax RAT"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/02/coronavirus-themed-malware.html",
            "date": "2020-02-13",
            "organization": "Talos",
            "author": "Nick Biasini",
            "title": "Threat actors attempt to capitalize on coronavirus outbreak",
            "categories": [
                "Emotet",
                "Nanocore RAT",
                "Parallax RAT"
            ]
        },
        {
            "data_url": "https://twitter.com/malwrhunterteam/status/1227196799997431809",
            "date": "2020-02-11",
            "organization": "Twitter (@malwrhunterteam)",
            "author": "MalwareHunterTeam",
            "title": "Tweet on Parallax RAT",
            "categories": [
                "Parallax RAT"
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