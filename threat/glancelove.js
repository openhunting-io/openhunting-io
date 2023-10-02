var threatdata = {
    "name": "GlanceLove",
    "alias": "GlanceLove, WinkChat",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "GlanceLove",
        "names": [
            {
                "name": "GlanceLove"
            },
            {
                "name": "WinkChat"
            }
        ],
        "description": "(Check Point) About 100 people fell victim to the attack that came in the form of fake World Cup and online dating apps that had been uploaded to the Google Play Store, the official app store of Google.\n\nOnce the apps were installed onto the victims\u2019 phones, the highly invasive malware was then able to carry out a number of malicious activities:\n\n\u2022 Record the user\u2019s phone calls.\n\u2022 Take a picture when the user receives a call.\n\u2022 Steal the user\u2019s contacts.\n\u2022 Steal the user\u2019s SMS messages.\n\u2022 Steal all images and videos stored on the mobile device and information on where they were taken.\n\u2022 Capture the user\u2019s GPS location.\n\u2022 Take random recordings of the user\u2019s surroundings.\n\u2022 Steal files and photos from the mobile device\u2019s storage.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.checkpoint.com/2018/07/05/an-invasive-spyware-attack-on-military-mobile-devices/",
            "https://symantec-blogs.broadcom.com/blogs/expert-perspectives/goldencup-new-cyber-threat-targeting-world-cup-fans",
            "https://securelist.com/breaking-the-weakest-link-of-the-strongest-chain/77562/",
            "https://www.clearskysec.com/glancelove/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.glancelove"
        ],
        "uuid": "bac795fd-7799-42f2-920c-eb6d4d4c12e9",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "glancelove",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.clearskysec.com/glancelove/",
            "date": "2018-07-03",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "Infrastructure and Samples of Hamas\u2019 Android Malware Targeting Israeli Soldiers",
            "categories": [
                "GlanceLove"
            ]
        },
        {
            "data_url": "https://www.haaretz.com/israel-news/hamas-cyber-ops-spied-on-israeli-soldiers-using-fake-world-cup-app-1.6241773",
            "date": "2018-07-03",
            "organization": "Haaretz",
            "author": "Yaniv Kubovich",
            "title": "Hamas Cyber Ops Spied on Hundreds of Israeli Soldiers Using Fake World Cup, Dating Apps",
            "categories": [
                "GlanceLove"
            ]
        },
        {
            "data_url": "https://securelist.com/breaking-the-weakest-link-of-the-strongest-chain/77562/",
            "date": "2017-02-16",
            "organization": "Kaspersky Labs",
            "author": "IDF C4I",
            "title": "Breaking The Weakest Link Of The Strongest Chain",
            "categories": [
                "GlanceLove"
            ]
        },
        {
            "data_url": "https://www.idf.il/en/minisites/hamas/hamas-uses-fake-facebook-profiles-to-target-israeli-soldiers/",
            "date": "2017-02-05",
            "organization": "IDF",
            "author": "IDF",
            "title": "Hamas Uses Fake Facebook Profiles to Target Israeli Soldiers",
            "categories": [
                "GlanceLove"
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