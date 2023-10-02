var threatdata = {
    "name": "CyberGate RAT",
    "alias": "CyberGate RAT, CyberGate, Rebhip",
    "category": "Tools",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration, Downloader",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "CyberGate RAT",
        "names": [
            {
                "name": "CyberGate RAT"
            },
            {
                "name": "CyberGate"
            },
            {
                "name": "Rebhip"
            }
        ],
        "description": "(Citizen Lab) The CyberGate implant comes with the same credential stealing capabilities as the infector, and is extended by routines to spy on Chrome and STEAM credentials as well. Also inherited from the infector, the implant owns the same anti-analysis routine protecting it from sandboxes and debuggers.\n\nBeyond the capabilities seen in the infector, CyberGate has a range of features that provide an attacker with a full spectrum of monitoring and remote control functionality.\n\nCyberGate capabilities include:\n\u2022 Collecting detailed information about the infected system\n\u2022 Activation and control of the webcam and microphone\n\u2022 Screenshot capture\n\u2022 Blocking user input (e.g. keyboard and mouse)\n\u2022 Control over processes, windows, applications, devices, drive, ports, TCP & UDP connections, the clipboard, registry keys and values etc.\n\u2022 Control over the filesystem\n\u2022 Download and execution of further binaries\n\u2022 Exfiltration via FTP\n\u2022 Collection of information on installed security products",
        "category": "Tools",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration",
            "Downloader"
        ],
        "information": [
            "https://citizenlab.ca/2015/12/packrat-report/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cybergate"
        ],
        "uuid": "ba93b300-b8b3-4a37-8aa5-28a1f3e4014f",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cybergate_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://sectrio.com/wp-content/uploads/2021/08/cybergate-threat-report.pdf",
            "date": "2021-05-20",
            "organization": "SubexSecure",
            "author": "Hussain Kathawala",
            "title": "CyberGate Threat Report",
            "categories": [
                "CyberGate"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/catching-rats-over-custom-protocols",
            "date": "2021-05-05",
            "organization": "Zscaler",
            "author": "Aniruddha Dolas",
            "title": "Catching RATs Over Custom Protocols Analysis of top non-HTTP/S threats",
            "categories": [
                "Agent Tesla",
                "AsyncRAT",
                "Crimson RAT",
                "CyberGate",
                "Ghost RAT",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "Quasar RAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.intezer.com/wp-content/uploads/2021/02/Intezer-2020-Go-Malware-Round-Up.pdf",
            "date": "2021-02-25",
            "organization": "Intezer",
            "author": "Intezer",
            "title": "Year of the Gopher A 2020 Go Malware Round-Up",
            "categories": [
                "NiuB",
                "WellMail",
                "elf.wellmess",
                "ArdaMax",
                "AsyncRAT",
                "CyberGate",
                "DarkComet",
                "Glupteba",
                "Nanocore RAT",
                "Nefilim",
                "NjRAT",
                "Quasar RAT",
                "WellMess",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/cybergate-rat-and-redline-stealer-delivered-ongoing-autoit-malware-campaigns",
            "date": "2020-07-02",
            "organization": "Zscaler",
            "author": "Mohd Sadique",
            "title": "CyberGate RAT and RedLine Stealer Delivered in Ongoing AutoIt Malware Campaigns",
            "categories": [
                "CyberGate",
                "RedLine Stealer"
            ]
        },
        {
            "data_url": "https://blog.reversinglabs.com/blog/rats-in-the-library",
            "date": "2020-01-31",
            "organization": "ReversingLabs",
            "author": "Robert Simmons",
            "title": "RATs in the Library: Remote Access Trojans Hide in Plain \"Public\" Site",
            "categories": [
                "CyberGate",
                "LimeRAT",
                "NjRAT",
                "Quasar RAT",
                "Revenge RAT"
            ]
        },
        {
            "data_url": "https://www.elastic.co/blog/ten-process-injection-techniques-technical-survey-common-and-trending-process",
            "date": "2017-07-18",
            "organization": "Elastic",
            "author": "Ashkan Hosseini",
            "title": "Ten process injection techniques: A technical survey of common and trending process injection techniques",
            "categories": [
                "Cryakl",
                "CyberGate",
                "Dridex",
                "FinFisher RAT",
                "Locky"
            ]
        },
        {
            "data_url": "https://www.endgame.com/blog/technical-blog/ten-process-injection-techniques-technical-survey-common-and-trending-process",
            "date": "2017-07-18",
            "organization": "Endgame",
            "author": "Ashkan Hosseini",
            "title": "Ten Process Injection Techniques: A Technical Survey of Common and Trending Process Injection Techniques",
            "categories": [
                "CyberGate"
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