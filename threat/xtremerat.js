var threatdata = {
    "name": "XtremeRAT",
    "alias": "XtremeRAT, Xtreme RAT, ExtRat",
    "category": "Tools",
    "type": "Backdoor, Keylogger, Info stealer, Exfiltration",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "XtremeRAT",
        "names": [
            {
                "name": "XtremeRAT"
            },
            {
                "name": "Xtreme RAT"
            },
            {
                "name": "ExtRat"
            }
        ],
        "description": "A publicly available RAT.\n\n(FireEye) XtremeRAT allows an attacker to:\n\n\u2022 Interact with the victim via a remote shell\n\u2022 Upload/download files\n\u2022 Interact with the registry\n\u2022 Manipulate running processes and services\n\u2022 Capture images of the desktop\n\u2022 Record from connected devices, such as a webcam or microphone\n\nMoreover, during the build process, the attacker can specify whether to include keylogging and USB infection functions.",
        "category": "Tools",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2014/02/xtremerat-nuisance-or-threat.html",
            "https://community.rsa.com/community/products/netwitness/blog/2017/08/02/malspam-delivers-xtreme-rat-8-1-2017",
            "https://www.symantec.com/connect/blogs/colombians-major-target-email-campaigns-delivering-xtreme-rat",
            "https://malware.lu/articles/2012/07/22/xtreme-rat-analysis.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.extreme_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:xtremerat"
        ],
        "uuid": "7886a052-0559-45f4-92ac-44366fe0791f",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "xtremerat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www2.slideshare.net/ChiEnAshleyShen/hitcon-2020-cti-village-threat-hunting-and-campaign-tracking-workshoppptx/1",
            "date": "2020-12-13",
            "organization": "SlideShare (ChiEnAshleyShen)",
            "author": "Chi-en Shen",
            "title": "From ThreatHunting to Campaign Tracking",
            "categories": [
                "Xtreme RAT"
            ]
        },
        {
            "data_url": "https://blogs.360.cn/post/APT-C-44.html",
            "date": "2020-10-26",
            "organization": "360 Core Security",
            "author": "360",
            "title": "\u5317\u975e\u72d0\uff08APT-C-44\uff09\u653b\u51fb\u6d3b\u52a8\u63ed\u9732",
            "categories": [
                "Xtreme RAT",
                "Houdini",
                "NjRAT",
                "Revenge RAT"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/aluminum-saratoga",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "ALUMINUM SARATOGA",
            "categories": [
                "BlackShades",
                "DarkComet",
                "Xtreme RAT",
                "Poison Ivy",
                "Quasar RAT",
                "Molerats"
            ]
        },
        {
            "data_url": "https://community.rsa.com/community/products/netwitness/blog/2017/08/02/malspam-delivers-xtreme-rat-8-1-2017",
            "date": "2017-08-02",
            "organization": "RSA Link",
            "author": "Ahmed Sonbol",
            "title": "Malspam delivers Xtreme RAT 8-1-2017",
            "categories": [
                "Xtreme RAT"
            ]
        },
        {
            "data_url": "https://citizenlab.ca/2015/12/packrat-report/",
            "date": "2015-12-08",
            "organization": "The Citizenlab",
            "author": "John Scott-Railton",
            "title": "Packrat: Seven Years of a South American Threat Actor",
            "categories": [
                "AdWind",
                "Adzok",
                "CyberGate",
                "Xtreme RAT",
                "Packrat"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/colombians-major-target-email-campaigns-delivering-xtreme-rat",
            "date": "2015-12-03",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Colombians major target of email campaigns delivering Xtreme RAT",
            "categories": [
                "Xtreme RAT"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2014/02/xtremerat-nuisance-or-threat.html",
            "date": "2014-02-19",
            "organization": "FireEye",
            "author": "Nart Villeneuve",
            "title": "XtremeRAT: Nuisance or Threat?",
            "categories": [
                "Xtreme RAT"
            ]
        },
        {
            "data_url": "https://malware.lu/articles/2012/07/22/xtreme-rat-analysis.html",
            "date": "2012-07-22",
            "organization": "Malware.lu",
            "author": "Malware.lu",
            "title": "Xtreme RAT analysis",
            "categories": [
                "Xtreme RAT"
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