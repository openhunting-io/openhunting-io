var threatdata = {
    "name": "Adwind",
    "alias": "Adwind, Adwind RAT, Frutas, jFrutas, UnReCoM, Alien Spy, AlienSpy, JSocket, Sockrat, jBiFrost, JBifrost RAT, Unknown RAT, jConnectPro RAT, Unrecom, Trojan.Maljava",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Credential stealer, Info stealer, Exfiltration, Miner",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Adwind",
        "names": [
            {
                "name": "Adwind"
            },
            {
                "name": "Adwind RAT"
            },
            {
                "name": "Frutas"
            },
            {
                "name": "jFrutas"
            },
            {
                "name": "UnReCoM"
            },
            {
                "name": "Alien Spy"
            },
            {
                "name": "AlienSpy"
            },
            {
                "name": "JSocket"
            },
            {
                "name": "Sockrat"
            },
            {
                "name": "jBiFrost"
            },
            {
                "name": "JBifrost RAT"
            },
            {
                "name": "Unknown RAT"
            },
            {
                "name": "jConnectPro RAT"
            },
            {
                "name": "Unrecom"
            },
            {
                "name": "Trojan.Maljava"
            }
        ],
        "description": "(Proofpoint) The AlienSpy RAT is very powerful in the hands of an attacker. Some of the key features supported by the RAT include:\n\n\u2022 Collection of system information for fingerprinting and displaying on the attacker\u2019s controller dashboard\n\u2022 File system, process and registry explorer with ability to view and modify\n\u2022 Ability to run console commands\n\u2022 Keylogging to capture user inputs\n\u2022 Ability to download and execute secondary payloads\n\u2022 Credential theft from various browser stores\n\u2022 Ability to spy on victim through screenshots, webcam, microphone\n\u2022 Ability to RDP (Remote Desktop) to infected clients\n\u2022 Ability to mine various type of digital currency such as bitcoin, litecoin, dogecoin etc.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Credential stealer",
            "Info stealer",
            "Exfiltration",
            "Miner"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/You-Dirty-RAT",
            "https://unit42.paloaltonetworks.com/the-legend-of-adwind-a-commodity-rat-saga-in-eight-parts/",
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07195002/KL_AdwindPublicReport_2016.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0283/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/jar.adwind"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:alienspy"
        ],
        "uuid": "90747400-bb9d-427d-8cc3-cd341f598860",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "AdWind",
            "malware_alias": "AlienSpy,JSocket,Frutas,UNRECOM,JBifrost,Sockrat",
            "malware": "jar.adwind",
            "last_update": "2023-09-07 05:55:41",
            "tags": [
                "geo",
                "RAT",
                "TUR",
                "adwind",
                "Adwind"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "89.117.74.176:2626",
                        "timestamp": "2023-09-07 05:55:41"
                    },
                    {
                        "value": "89.117.74.176:8081",
                        "timestamp": "2023-09-07 05:55:40"
                    },
                    {
                        "value": "89.117.74.176:9090",
                        "timestamp": "2023-09-07 05:55:40"
                    },
                    {
                        "value": "23.26.248.208:2222",
                        "timestamp": "2023-08-04 17:16:29"
                    },
                    {
                        "value": "78.142.18.221:441",
                        "timestamp": "2023-05-11 05:42:19"
                    },
                    {
                        "value": "103.187.4.71:1990",
                        "timestamp": "2023-03-28 14:20:47"
                    },
                    {
                        "value": "194.180.48.197:8123",
                        "timestamp": "2022-12-04 18:25:09"
                    },
                    {
                        "value": "43.226.229.92:72",
                        "timestamp": "2022-11-18 03:00:24"
                    },
                    {
                        "value": "185.222.58.110:1780",
                        "timestamp": "2022-11-09 11:26:22"
                    },
                    {
                        "value": "109.206.243.106:1605",
                        "timestamp": "2022-11-07 11:20:32"
                    },
                    {
                        "value": "37.0.14.215:5200",
                        "timestamp": "2022-10-20 04:08:04"
                    },
                    {
                        "value": "45.138.16.101:1900",
                        "timestamp": "2022-10-17 10:20:36"
                    },
                    {
                        "value": "79.134.225.77:6020",
                        "timestamp": "2022-09-26 08:35:42"
                    },
                    {
                        "value": "45.74.38.17:5000",
                        "timestamp": "2022-09-21 23:55:41"
                    },
                    {
                        "value": "23.105.131.204:2828",
                        "timestamp": "2022-09-21 13:12:45"
                    },
                    {
                        "value": "185.222.58.76:2023",
                        "timestamp": "2022-09-05 23:30:42"
                    },
                    {
                        "value": "79.110.62.95:2023",
                        "timestamp": "2022-09-05 09:35:25"
                    },
                    {
                        "value": "107.182.129.86:2023",
                        "timestamp": "2022-09-03 10:50:31"
                    },
                    {
                        "value": "79.134.225.10:2022",
                        "timestamp": "2022-09-02 13:15:29"
                    },
                    {
                        "value": "202.55.132.51:2256",
                        "timestamp": "2022-09-02 06:40:25"
                    },
                    {
                        "value": "202.55.132.51:2245",
                        "timestamp": "2022-09-01 06:20:28"
                    },
                    {
                        "value": "84.38.129.32:33160",
                        "timestamp": "2022-08-30 08:06:13"
                    },
                    {
                        "value": "46.183.220.114:44147",
                        "timestamp": "2022-08-24 07:10:34"
                    },
                    {
                        "value": "192.236.198.236:1505",
                        "timestamp": "2022-08-20 07:04:07"
                    },
                    {
                        "value": "192.236.198.236:1506",
                        "timestamp": "2022-08-20 07:04:07"
                    },
                    {
                        "value": "185.222.58.242:1781",
                        "timestamp": "2022-08-09 06:35:21"
                    },
                    {
                        "value": "185.19.85.175:7412",
                        "timestamp": "2022-03-02 17:21:01"
                    },
                    {
                        "value": "172.111.141.63:5888",
                        "timestamp": "2022-02-10 10:51:10"
                    },
                    {
                        "value": "139.28.37.109:5200",
                        "timestamp": "2022-02-02 08:12:17"
                    },
                    {
                        "value": "185.19.85.160:9641",
                        "timestamp": "2021-12-16 08:21:25"
                    },
                    {
                        "value": "194.5.98.52:1407",
                        "timestamp": "2021-12-10 11:07:10"
                    },
                    {
                        "value": "141.101.134.51:7896",
                        "timestamp": "2021-10-28 06:26:28"
                    },
                    {
                        "value": "141.101.134.39:7896",
                        "timestamp": "2021-10-23 18:45:27"
                    },
                    {
                        "value": "178.170.138.163:1983",
                        "timestamp": "2021-09-09 10:20:42"
                    },
                    {
                        "value": "109.248.144.177:1947",
                        "timestamp": "2021-09-06 22:11:28"
                    },
                    {
                        "value": "66.154.111.3:1993",
                        "timestamp": "2021-09-06 22:05:14"
                    },
                    {
                        "value": "172.93.187.66:19844",
                        "timestamp": "2021-08-30 14:36:45"
                    },
                    {
                        "value": "185.106.123.201:702",
                        "timestamp": "2021-08-23 17:45:58"
                    },
                    {
                        "value": "194.5.98.5:1604",
                        "timestamp": "2021-07-06 08:10:49"
                    },
                    {
                        "value": "45.147.231.41:5001",
                        "timestamp": "2021-07-02 05:55:50"
                    },
                    {
                        "value": "185.244.26.223:7551",
                        "timestamp": "2021-06-10 12:06:15"
                    },
                    {
                        "value": "79.134.225.69:7551",
                        "timestamp": "2021-06-08 22:33:28"
                    },
                    {
                        "value": "185.140.53.137:5000",
                        "timestamp": "2021-05-03 00:25:19"
                    },
                    {
                        "value": "79.134.225.10:5000",
                        "timestamp": "2021-04-30 06:40:45"
                    },
                    {
                        "value": "107.175.101.209:7865",
                        "timestamp": "2021-04-19 21:15:26"
                    },
                    {
                        "value": "201.212.118.175:444",
                        "timestamp": "2021-03-29 20:10:49"
                    },
                    {
                        "value": "185.222.57.238:7788",
                        "timestamp": "2021-03-26 10:50:23"
                    }
                ],
                "domain": [
                    {
                        "value": "rat19.duckdns.org",
                        "timestamp": "2023-08-04 17:16:29"
                    },
                    {
                        "value": "ianticrish.tk",
                        "timestamp": "2022-08-20 07:04:35"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "c3ea3ac0e09ae046261d51bd21e71c8c",
                        "timestamp": "2022-05-14 23:45:08"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "43affdaf791ae623b1bcafa5c1d9a293b778b178c8fd9801379e055b4f09eb75",
                        "timestamp": "2022-01-06 07:45:32"
                    },
                    {
                        "value": "a7872e2925ebf6f9b7a1992721d94ea74c9ac7ca2c9f24d2228c290616752410",
                        "timestamp": "2022-01-06 07:45:31"
                    },
                    {
                        "value": "2251baa4e2ad666c402aa52de5a42a9e87f284b0033cbf8ecb08e957bd54a9bf",
                        "timestamp": "2022-01-06 07:45:29"
                    },
                    {
                        "value": "b4bb442b04053e01e444cd22081854f871f893fdd91ca197664b2499a76b25bb",
                        "timestamp": "2022-01-06 07:45:28"
                    },
                    {
                        "value": "f5673f2290ad72c69b5efe4f1b96a76239b3286a536db8b2e26e9544274472a4",
                        "timestamp": "2021-06-22 13:35:48"
                    },
                    {
                        "value": "948c559d4804d44f7585e2d05029c94b9f46b52c7e7c035f5289129c828533a1",
                        "timestamp": "2021-06-22 13:35:48"
                    },
                    {
                        "value": "86bc35cf8621fc75d1c5f8256899e91ff39304e14446b25f7dd34943fd497e70",
                        "timestamp": "2021-06-22 13:35:48"
                    },
                    {
                        "value": "9da575dd2d5b7c1e9bab8b51a16cde457b3371c6dcdb0537356cf1497fa868f6",
                        "timestamp": "2021-04-06 13:13:00"
                    },
                    {
                        "value": "a6be5be2d16a24430c795faa7ab7cc7826ed24d6d4bc74ad33da5c2ed0c793d0",
                        "timestamp": "2021-04-06 13:13:00"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-07 05:55:41",
    "file_name": "adwind",
    "analysis": null,
    "articles": [],
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