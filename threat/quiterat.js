var threatdata = {
    "name": "QuiteRAT",
    "alias": "QuiteRAT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-09-06",
    "all_data": {
        "tool": "QuiteRAT",
        "names": [
            {
                "name": "QuiteRAT"
            }
        ],
        "description": "(Talos) QuiteRAT is a fairly simple remote access trojan (RAT). It consists of a compact set of statically linked Qt libraries along with some user-written code. The Qt framework is a platform for developing cross-platform applications. However, it is immensely popular for developing Graphical User Interface in applications. Although QuiteRAT, just like MagicRAT, uses embedded Qt libraries, none of these implants have a Graphical User Interface. .As seen with Lazarus Group\u2019s MagicRAT malware, the use of Qt increases the code complexity, making human analysis harder. Using Qt also makes machine learning and heuristic analysis detection less reliable, since Qt is rarely used in malware development.\n\nBased on QuiteRAT\u2019s technical characteristics, including the usage of the Qt framework, we assess that this implant belongs to the previously disclosed MagicRAT family. QuiteRAT was briefly discussed in WithSecure\u2019s report from early 2023. The new campaign we\u2019re disclosing exploited a ManageEngine ServiceDesk vulnerability (CVE-2022-47966) \u2014 which has a Kenna risk score of 100 out of 100 \u2014 to deploy QuiteRAT.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.talosintelligence.com/lazarus-quiterat/"
        ],
        "uuid": "dd8d965b-57b6-4d45-89a5-a62ae4688b98",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "quiterat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.talosintelligence.com/lazarus-quiterat/",
            "date": "2023-08-24",
            "organization": "Cisco Talos",
            "author": "Asheer Malhotra",
            "title": "Lazarus Group exploits ManageEngine vulnerability to deploy QuiteRAT",
            "categories": [
                "QuiteRAT"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/ko/56256/",
            "date": "2023-08-22",
            "organization": "AhnLab",
            "author": "ASEC Analysis Team",
            "title": "Analyzing the new attack activity of the Andariel group",
            "categories": [
                "Andardoor",
                "MimiKatz",
                "QuiteRAT",
                "Tiger RAT",
                "Volgmer"
            ]
        },
        {
            "data_url": "https://businessinsights.bitdefender.com/tech-advisory-manageengine-cve-2022-47966",
            "date": "2023-02-23",
            "organization": "Bitdefender",
            "author": "Martin Zugec",
            "title": "Technical Advisory: Various Threat Actors Targeting ManageEngine Exploit CVE-2022-47966",
            "categories": [
                "Cobalt Strike",
                "DarkComet",
                "QuiteRAT",
                "RATel"
            ]
        },
        {
            "data_url": "https://labs.withsecure.com/content/dam/labs/docs/WithSecure-Lazarus-No-Pineapple-Threat-Intelligence-Report-2023.pdf",
            "date": "2023-02-02",
            "organization": "WithSecure",
            "author": "Sami Ruohonen",
            "title": "No Pineapple! \u2013DPRK Targeting of Medical Research and Technology Sector",
            "categories": [
                "Dtrack",
                "GREASE",
                "QuiteRAT"
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