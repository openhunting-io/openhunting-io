var threatdata = {
    "name": "GodFather",
    "alias": "GodFather",
    "category": "Malware",
    "type": "Banking trojan, Reconnaissance, Info stealer, Credential stealer",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "GodFather",
        "names": [
            {
                "name": "GodFather"
            }
        ],
        "description": "(Cyble) During\u00a0our\u00a0routine Open-Source Intelligence (OSINT) research, Cyble Research Labs came across a\u00a0Twitter post wherein researchers mention an Android bankbot named GodFather with the name apkversion1.1.5.43 and an icon similar to the default Settings app.\n\nWe found notable similarities with Cereberus and Medusa banking trojans upon analyzing the malware sample. GodFather malware acts on the commands from Threat Actor\u2019s (TA\u2019s) Command & Control (C&C) server to steal sensitive information from the victim\u2019s device.\n\nUpon successful execution, the malware can perform malicious activities such as transferring money, getting device information such as phone number, installed app list, battery info, etc.\n\nBy further abusing the permissions on the affected device, the malware can also steal SMSs, control device screen using VNC, forward calls, and open URLs without the user\u2019s knowledge.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Reconnaissance",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://blog.cyble.com/2022/03/23/godfather-malware-under-the-lens/",
            "https://blog.cyble.com/2022/12/20/godfather-malware-returns-targeting-banking-users/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.godfather"
        ],
        "uuid": "922d749e-df19-477c-a88d-c0153df75733",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Godfather",
            "malware_alias": null,
            "malware": "apk.godfather",
            "last_update": "2023-09-19 11:59:19",
            "tags": [
                "godfather"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "ehtemu.click",
                        "timestamp": "2023-09-19 11:59:19"
                    },
                    {
                        "value": "nuzzar.click",
                        "timestamp": "2023-09-17 12:53:50"
                    },
                    {
                        "value": "playprotect.click",
                        "timestamp": "2023-09-17 12:53:49"
                    },
                    {
                        "value": "ramzartey.click",
                        "timestamp": "2023-09-17 12:53:49"
                    },
                    {
                        "value": "tappose.click",
                        "timestamp": "2023-09-17 12:53:48"
                    },
                    {
                        "value": "taviroza.click",
                        "timestamp": "2023-09-17 12:53:48"
                    },
                    {
                        "value": "torhamisa.click",
                        "timestamp": "2023-09-17 12:53:48"
                    },
                    {
                        "value": "wannertop.click",
                        "timestamp": "2023-09-17 12:53:47"
                    },
                    {
                        "value": "zoppara.click",
                        "timestamp": "2023-09-17 12:53:47"
                    },
                    {
                        "value": "juzzako.click",
                        "timestamp": "2023-09-17 12:53:39"
                    },
                    {
                        "value": "hertanza.click",
                        "timestamp": "2023-09-17 12:53:38"
                    },
                    {
                        "value": "hunazora.click",
                        "timestamp": "2023-09-17 12:53:38"
                    },
                    {
                        "value": "fazzare.click",
                        "timestamp": "2023-09-17 12:53:37"
                    },
                    {
                        "value": "fimyare.click",
                        "timestamp": "2023-09-17 12:53:37"
                    },
                    {
                        "value": "dacazara.click",
                        "timestamp": "2023-09-17 12:53:36"
                    },
                    {
                        "value": "facratnu.click",
                        "timestamp": "2023-09-17 12:53:36"
                    },
                    {
                        "value": "cunnate.click",
                        "timestamp": "2023-09-17 12:53:35"
                    },
                    {
                        "value": "curizpa.click",
                        "timestamp": "2023-09-17 12:53:35"
                    },
                    {
                        "value": "burimak.click",
                        "timestamp": "2023-09-17 12:53:34"
                    },
                    {
                        "value": "cafirran.click",
                        "timestamp": "2023-09-17 12:53:34"
                    },
                    {
                        "value": "baruzatek.click",
                        "timestamp": "2023-09-17 12:53:33"
                    },
                    {
                        "value": "arezo.click",
                        "timestamp": "2023-09-17 12:53:32"
                    },
                    {
                        "value": "bekiza.shop",
                        "timestamp": "2023-09-01 20:25:18"
                    },
                    {
                        "value": "bortasy.click",
                        "timestamp": "2023-09-01 20:25:18"
                    },
                    {
                        "value": "gopposa.click",
                        "timestamp": "2023-09-01 20:25:17"
                    },
                    {
                        "value": "haneri.shop",
                        "timestamp": "2023-09-01 20:25:17"
                    },
                    {
                        "value": "nertun.shop",
                        "timestamp": "2023-09-01 20:25:17"
                    },
                    {
                        "value": "periza.click",
                        "timestamp": "2023-09-01 20:25:16"
                    },
                    {
                        "value": "tarezmi.shop",
                        "timestamp": "2023-09-01 20:25:16"
                    },
                    {
                        "value": "emv1.nertun.shop",
                        "timestamp": "2023-09-01 20:25:15"
                    },
                    {
                        "value": "mta-sts.haneri.shop",
                        "timestamp": "2023-09-01 20:25:15"
                    },
                    {
                        "value": "mta-sts.periza.click",
                        "timestamp": "2023-09-01 20:25:14"
                    },
                    {
                        "value": "gahvaperos.shop",
                        "timestamp": "2023-04-04 16:30:51"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-19 11:59:19",
    "file_name": "godfather",
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