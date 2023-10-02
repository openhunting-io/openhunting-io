var threatdata = {
    "name": "888 RAT",
    "alias": "888 RAT",
    "category": "Tools",
    "type": "Backdoor",
    "modified": "2021-12-28",
    "all_data": {
        "tool": "888 RAT",
        "names": [
            {
                "name": "888 RAT"
            }
        ],
        "description": "888 RAT Pro Features :\n\n\u2022 Native Server\n\u2022 Work Win ( 7\u20138\u20138.1\u201310 -xp -Vista \u2014 2000\u201398\u201395) 64 and 32 Bit\n\u2022 Persistence startUp (even if it deleted)\n\u2022 sleep\n\u2022 hide process (32bit)\n\u2022 USB spread shortCut New method\n\u2022 Upx\n\u2022 spoof any Extention (SCR)\n\u2022 Disable teskmgr & Msconfig\n\u2022 Av Obfuscator Usg server Fud\n\u2022 Uac Exploit 0 day disable & enable\n\u2022 Bypass AV scanne & Runtime with Unique Stub Generator (USG)\n\u2022 Startup Scheduled\n\u2022 Hide installation\n\u2022 2 Costom Builder\n\u2022 Icone changer\n\u2022 Bind any kind of file",
        "category": "Tools",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://medium.com/@majidashfaq53/888-rat-pro-versionwindows-android-free-download-13586fa1c9c6",
            "https://www.welivesecurity.com/2021/09/07/bladehawk-android-espionage-kurdish/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.888_rat"
        ],
        "uuid": "8b2de120-e49b-480a-bbbc-9b81b2c470c9",
        "last-card-change": "2021-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "888_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2021/09/07/bladehawk-android-espionage-kurdish/",
            "date": "2021-09-07",
            "organization": "ESET Research",
            "author": "Luk\u00e1\u0161 \u0160tefanko",
            "title": "BladeHawk group: Android espionage against Kurdish ethnic group",
            "categories": [
                "888 RAT",
                "BladeHawk"
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