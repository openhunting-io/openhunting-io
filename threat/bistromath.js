var threatdata = {
    "name": "BISTROMATH",
    "alias": "BISTROMATH",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2021-06-15",
    "all_data": {
        "tool": "BISTROMATH",
        "names": [
            {
                "name": "BISTROMATH"
            }
        ],
        "description": "(US-CERT) This report looks at multiple versions of a full-featured RAT implant executable and multiple versions of the CAgent11 GUI implant controller/builder. These samples performs simple XOR network encoding and are capable of many features including conducting system surveys, file upload/download, process and command execution, and monitoring the microphone, clipboard, and the screen. The GUI controllers allow interaction with the implant as well as the option to dynamically build new implants with customized options. The implants are loaded with a trojanized executable containing a fake bitmap which decodes into shellcode which loads the embedded implant.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/analysis-reports/ar20-045a"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bistromath"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:BISTROMATH"
        ],
        "uuid": "63e35035-f269-4642-8038-f85b09fbe251",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bistromath",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/andariel-evolves-to-target-south-korea-with-ransomware/102811/",
            "date": "2021-06-15",
            "organization": "Kaspersky",
            "author": "Seongsu Park",
            "title": "Andariel evolves to target South Korea with ransomware",
            "categories": [
                "BISTROMATH",
                "PEBBLEDASH",
                "TigerLite",
                "Tiger RAT",
                "Unidentified 081 (Andariel Ransomware)"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/blog/articles/Analysis-of-attacks-by-Lazarus-using-Daewoo-shipyard-as-bait/",
            "date": "2021-05-11",
            "organization": "Qianxin",
            "author": "Red Raindrop Team",
            "title": "Analysis of a series of attacks by the suspected Lazarus organization using Daewoo Shipyard as relevant bait",
            "categories": [
                "BISTROMATH",
                "TigerLite"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/malwarebytes-news/2021/04/lazarus-apt-conceals-malicious-code-within-bmp-file-to-drop-its-rat/",
            "date": "2021-04-19",
            "organization": "Malwarebytes",
            "author": "Hossein Jazi",
            "title": "Lazarus APT conceals malicious code within BMP image to drop its RAT",
            "categories": [
                "BISTROMATH"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/dprk-hidden-cobra-update-north-korean-malicious-cyber-activity/",
            "date": "2020-02-25",
            "organization": "SentinelOne",
            "author": "Jim Walter",
            "title": "DPRK Hidden Cobra Update: North Korean Malicious Cyber Activity",
            "categories": [
                "ARTFULPIE",
                "BISTROMATH",
                "BUFFETLINE",
                "CHEESETRAY",
                "HOPLIGHT",
                "HOTCROISSANT",
                "SLICKSHOES"
            ]
        },
        {
            "data_url": "https://www.us-cert.gov/ncas/analysis-reports/ar20-045a",
            "date": "2020-02-14",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Malware Analysis Report (AR20-045A): MAR-10265965-1.v1 - North Korean Trojan: BISTROMATH",
            "categories": [
                "BISTROMATH"
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