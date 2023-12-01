var threatdata = {
    "name": "RMS",
    "alias": "RMS, Remote Manipulator System, Gussdoor",
    "category": "Tools",
    "type": "Backdoor, Info stealer",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "RMS",
        "names": [
            {
                "name": "RMS"
            },
            {
                "name": "Remote Manipulator System"
            },
            {
                "name": "Gussdoor"
            }
        ],
        "description": "CyberInt states that Remote Manipulator System (RMS) is a legitimate tool developed by Russian organization TektonIT and has been observed in campaigns conducted by TA505 as well as numerous smaller campaigns likely attributable to other, disparate, threat actors. In addition to the availability of commercial licenses, the tool is free for non-commercial use and supports the remote administration of both Microsoft Windows and Android devices.",
        "category": "Tools",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://rmansys.ru/remote-access/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.rms"
        ],
        "uuid": "6b263aa0-475c-413f-b618-ed55c6546690",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "RMS",
            "malware_alias": "Gussdoor,Remote Manipulator System,RuRAT",
            "malware": "win.rms",
            "last_update": "2023-11-30 09:05:05",
            "tags": [
                "RMS",
                "ViriBack",
                "RemoteManipulator"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "91.191.236.61:49847",
                        "timestamp": "2023-11-30 09:05:05"
                    },
                    {
                        "value": "90.188.7.217:5655",
                        "timestamp": "2023-10-17 07:50:30"
                    },
                    {
                        "value": "213.59.132.218:5655",
                        "timestamp": "2023-10-07 20:00:08"
                    },
                    {
                        "value": "217.12.206.218:5655",
                        "timestamp": "2023-09-25 17:50:12"
                    },
                    {
                        "value": "77.161.25.182:5655",
                        "timestamp": "2023-07-28 09:25:28"
                    },
                    {
                        "value": "216.158.232.18:443",
                        "timestamp": "2023-07-21 13:00:21"
                    },
                    {
                        "value": "51.83.171.208:5655",
                        "timestamp": "2023-05-31 09:40:27"
                    },
                    {
                        "value": "91.191.236.61:5655",
                        "timestamp": "2023-05-21 18:25:21"
                    },
                    {
                        "value": "66.23.226.254:443",
                        "timestamp": "2023-05-18 19:41:37"
                    },
                    {
                        "value": "128.204.191.131:5565",
                        "timestamp": "2023-05-09 16:10:21"
                    },
                    {
                        "value": "89.32.229.110:5655",
                        "timestamp": "2023-02-20 02:55:16"
                    },
                    {
                        "value": "91.230.210.144:777",
                        "timestamp": "2023-02-11 19:30:23"
                    },
                    {
                        "value": "106.250.166.45:5700",
                        "timestamp": "2023-02-06 18:40:41"
                    },
                    {
                        "value": "52.208.217.243:5655",
                        "timestamp": "2023-02-05 19:20:20"
                    },
                    {
                        "value": "185.106.123.200:5655",
                        "timestamp": "2023-01-29 12:15:10"
                    },
                    {
                        "value": "94.142.128.2:5655",
                        "timestamp": "2022-12-30 20:05:19"
                    },
                    {
                        "value": "106.250.166.45:5683",
                        "timestamp": "2022-12-29 13:55:39"
                    },
                    {
                        "value": "82.146.153.37:56550",
                        "timestamp": "2022-12-06 15:40:16"
                    },
                    {
                        "value": "89.46.65.213:5655",
                        "timestamp": "2022-11-21 06:00:19"
                    },
                    {
                        "value": "151.252.111.45:5655",
                        "timestamp": "2022-11-09 04:15:25"
                    },
                    {
                        "value": "156.67.192.70:443",
                        "timestamp": "2022-10-25 22:45:43"
                    },
                    {
                        "value": "86.109.201.118:443",
                        "timestamp": "2022-10-10 23:06:03"
                    },
                    {
                        "value": "51.83.171.223:5655",
                        "timestamp": "2022-10-04 12:45:48"
                    },
                    {
                        "value": "192.70.196.65:5655",
                        "timestamp": "2022-09-19 23:25:41"
                    },
                    {
                        "value": "37.58.60.5:5655",
                        "timestamp": "2022-08-29 22:18:40"
                    },
                    {
                        "value": "80.89.239.149:5655",
                        "timestamp": "2022-08-18 04:21:09"
                    },
                    {
                        "value": "194.132.81.201:5655",
                        "timestamp": "2022-08-07 23:22:20"
                    },
                    {
                        "value": "80.95.202.4:5655",
                        "timestamp": "2022-07-14 18:15:34"
                    },
                    {
                        "value": "185.163.117.35:5655",
                        "timestamp": "2022-06-26 17:30:57"
                    },
                    {
                        "value": "95.143.15.215:5655",
                        "timestamp": "2022-05-17 12:09:36"
                    },
                    {
                        "value": "45.144.30.30:5655",
                        "timestamp": "2022-05-14 23:13:04"
                    },
                    {
                        "value": "77.223.124.212:5655",
                        "timestamp": "2022-05-14 20:08:09"
                    },
                    {
                        "value": "194.226.128.207:5655",
                        "timestamp": "2022-04-27 00:01:29"
                    },
                    {
                        "value": "185.82.202.138:5655",
                        "timestamp": "2022-04-20 09:11:07"
                    },
                    {
                        "value": "77.223.124.211:5655",
                        "timestamp": "2022-03-14 19:26:37"
                    },
                    {
                        "value": "194.190.103.33:5655",
                        "timestamp": "2022-03-09 10:56:28"
                    },
                    {
                        "value": "66.23.226.254:5655",
                        "timestamp": "2022-02-20 11:36:00"
                    },
                    {
                        "value": "85.143.112.188:5655",
                        "timestamp": "2022-02-08 01:51:37"
                    },
                    {
                        "value": "77.247.243.43:5655",
                        "timestamp": "2021-12-28 00:56:18"
                    },
                    {
                        "value": "5.133.65.53:5655",
                        "timestamp": "2021-12-27 15:21:13"
                    },
                    {
                        "value": "152.168.39.243:5655",
                        "timestamp": "2021-12-20 03:56:00"
                    },
                    {
                        "value": "87.75.248.145:5655",
                        "timestamp": "2021-11-28 01:05:33"
                    },
                    {
                        "value": "95.213.205.83:5655",
                        "timestamp": "2021-11-22 21:16:59"
                    },
                    {
                        "value": "109.234.156.179:5655",
                        "timestamp": "2021-11-20 00:01:46"
                    },
                    {
                        "value": "216.158.232.18:5655",
                        "timestamp": "2021-11-13 19:20:12"
                    },
                    {
                        "value": "95.213.205.82:5655",
                        "timestamp": "2021-11-07 16:31:47"
                    },
                    {
                        "value": "50.240.232.117:5655",
                        "timestamp": "2021-10-17 07:10:29"
                    },
                    {
                        "value": "194.212.26.172:5656",
                        "timestamp": "2021-09-26 23:02:12"
                    },
                    {
                        "value": "83.69.2.130:1812",
                        "timestamp": "2021-09-12 18:25:16"
                    },
                    {
                        "value": "66.208.244.253:5655",
                        "timestamp": "2021-08-26 17:53:03"
                    },
                    {
                        "value": "182.93.93.132:5655",
                        "timestamp": "2021-08-11 18:06:17"
                    },
                    {
                        "value": "209.66.104.126:5655",
                        "timestamp": "2021-08-03 00:10:56"
                    },
                    {
                        "value": "196.40.180.218:5655",
                        "timestamp": "2021-08-02 22:56:11"
                    },
                    {
                        "value": "109.195.195.159:5655",
                        "timestamp": "2021-07-30 22:11:09"
                    },
                    {
                        "value": "65.0.5.240:5655",
                        "timestamp": "2021-07-23 20:45:52"
                    },
                    {
                        "value": "185.251.25.64:5655",
                        "timestamp": "2021-07-20 01:01:18"
                    },
                    {
                        "value": "45.82.71.172:5655",
                        "timestamp": "2021-07-16 12:45:38"
                    },
                    {
                        "value": "85.192.165.221:80",
                        "timestamp": "2021-07-15 09:06:20"
                    },
                    {
                        "value": "77.223.124.210:5655",
                        "timestamp": "2021-07-06 20:21:25"
                    },
                    {
                        "value": "185.175.44.167:563",
                        "timestamp": "2021-06-23 22:16:47"
                    },
                    {
                        "value": "96.85.25.29:5655",
                        "timestamp": "2021-06-23 13:05:55"
                    },
                    {
                        "value": "87.103.195.248:5655",
                        "timestamp": "2021-05-28 19:45:11"
                    },
                    {
                        "value": "83.220.53.151:5655",
                        "timestamp": "2021-05-11 08:10:37"
                    },
                    {
                        "value": "54.188.107.146:5655",
                        "timestamp": "2021-05-03 21:46:01"
                    },
                    {
                        "value": "112.220.118.66:5655",
                        "timestamp": "2021-04-26 15:56:43"
                    },
                    {
                        "value": "43.255.175.215:443",
                        "timestamp": "2021-04-16 03:25:48"
                    },
                    {
                        "value": "194.87.186.40:5655",
                        "timestamp": "2021-04-10 20:35:16"
                    },
                    {
                        "value": "194.169.163.42:5655",
                        "timestamp": "2021-04-08 06:50:32"
                    },
                    {
                        "value": "195.154.84.75:5655",
                        "timestamp": "2021-03-28 21:26:11"
                    },
                    {
                        "value": "109.234.156.178:5655",
                        "timestamp": "2021-03-26 07:02:01"
                    },
                    {
                        "value": "185.175.44.167:5655",
                        "timestamp": "2021-03-26 07:02:00"
                    },
                    {
                        "value": "195.2.76.196:5655",
                        "timestamp": "2021-03-23 08:17:30"
                    },
                    {
                        "value": "213.252.246.63:5655",
                        "timestamp": "2021-03-13 08:16:21"
                    }
                ],
                "domain": [
                    {
                        "value": "vip22gr.ru",
                        "timestamp": "2023-11-05 23:48:15"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-30 09:05:05",
    "file_name": "rms",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://ssu.gov.ua/uploads/files/DKIB/Technical%20report%20Armagedon.pdf",
            "date": "2021-11-04",
            "organization": "Security Service of Ukraine",
            "author": "Security Service of Ukraine",
            "title": "Gamaredon / Armageddon Group: FSB RF Cyber attacks against Ukraine",
            "categories": [
                "EvilGnome",
                "Pteranodon",
                "RMS"
            ]
        },
        {
            "data_url": "https://awakesecurity.com/blog/catching-the-white-stork-in-flight/",
            "date": "2021-05-13",
            "organization": "AWAKE",
            "author": "Kieran Evans",
            "title": "Catching the White Stork in Flight",
            "categories": [
                "Cobalt Strike",
                "MimiKatz",
                "RMS"
            ]
        },
        {
            "data_url": "https://ics-cert.kaspersky.com/media/Kaspersky-Attacks-on-industrial-enterprises-using-RMS-and-TeamViewer-EN.pdf",
            "date": "2020-11-05",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky Lab ICS CERT",
            "title": "Attackson industrial enterprises using RMS and TeamViewer: new data",
            "categories": [
                "RMS"
            ]
        },
        {
            "data_url": "https://blog.yoroi.company/research/ta505-is-expanding-its-operations/",
            "date": "2019-05-29",
            "organization": "Yoroi",
            "author": "Davide Testa",
            "title": "TA505 is Expanding its Operations",
            "categories": [
                "RMS"
            ]
        },
        {
            "data_url": "https://e.cyberint.com/hubfs/Report%20Legit%20Remote%20Access%20Tools%20Turn%20Into%20Threat%20Actors%20Tools/CyberInt_Legit%20Remote%20Access%20Tools%20Turn%20Into%20Threat%20Actors'%20Tools_Report.pdf",
            "date": "2019",
            "organization": "CyberInt",
            "author": "CyberInt",
            "title": "Legit Remote Admin Tools Turn into Threat Actors' Tools",
            "categories": [
                "RMS",
                "ServHelper",
                "TA505"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2017/09/cve-2017-0199-used-to-deliver-modified-rms-agent-rat/",
            "date": "2017-09-21",
            "organization": "Malwarebytes",
            "author": "J\u00e9r\u00f4me Segura",
            "title": "Fake IRS notice delivers customized spying tool",
            "categories": [
                "RMS"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit-42-title-gamaredon-group-toolset-evolution",
            "date": "2017-02-27",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Anthony Kasza",
            "title": "The Gamaredon Group Toolset Evolution",
            "categories": [
                "Pteranodon",
                "RMS",
                "Gamaredon Group"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20161223002016/https://www.symantec.com/connect/blogs/odinaff-new-trojan-used-high-level-financial-attacks",
            "date": "2016-10-11",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Odinaff: New Trojan used in high level financial attacks",
            "categories": [
                "Batel",
                "FlawedAmmyy",
                "Odinaff",
                "RMS",
                "FIN7"
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
        },
        {
            "procedure_name": "tor",
            "procedure_code": "s0183",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0183",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "tor encapsulates traffic in multiple layers of encryption, using tls by default.[59]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "traffic traversing the tor network will be forwarded to multiple nodes before exiting the tor network and continuing on to its intended destination.[21]"
                }
            ]
        }
    ]
};