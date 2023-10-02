var threatdata = {
    "name": "ATMSpitter",
    "alias": "ATMSpitter",
    "category": "Malware",
    "type": "ATM malware",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "ATMSpitter",
        "names": [
            {
                "name": "ATMSpitter"
            }
        ],
        "description": "The ATMSpitter family consists of command-line tools designed to control the cash dispenser of an ATM through function calls to either CSCWCNG.dll or MFSXFS.dll.\nBoth libraries are legitimate Windows drivers used to interact with the components of different ATM models.",
        "category": "Malware",
        "type": [
            "ATM malware"
        ],
        "information": [
            "https://quoscient.io/reports/QuoINT_INTBRI_New_ATMSpitter.pdf",
            "https://quoscient.io/reports/QuoINT_INTBRI_ATMSpitter_v2.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.atmspitter"
        ],
        "uuid": "e0bf2c15-80da-4779-af76-708f9d5764eb",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "atmspitter",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/gold-kingswood",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD KINGSWOOD",
            "categories": [
                "More_eggs",
                "ATMSpitter",
                "Cobalt Strike",
                "CobInt",
                "MimiKatz",
                "Cobalt"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-kingswood",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD KINGSWOOD",
            "categories": [
                "More_eggs",
                "ATMSpitter",
                "Cobalt Strike",
                "CobInt",
                "MimiKatz"
            ]
        },
        {
            "data_url": "https://quoscient.io/reports/QuoINT_INTBRI_ATMSpitter_v2.pdf",
            "date": "2019-11-18",
            "organization": "QuoScient",
            "author": "QuoScient",
            "title": "QuoINT INTELBRIEF \u2013 Actors Exploiting the RCE Vulnerability",
            "categories": [
                "ATMSpitter"
            ]
        },
        {
            "data_url": "https://quoscient.io/reports/QuoINT_INTBRI_New_ATMSpitter.pdf",
            "date": "2019-11-18",
            "organization": "QuoScient",
            "author": "QuoScient",
            "title": "Intelligence Brief New ATMSpitter",
            "categories": [
                "ATMSpitter"
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