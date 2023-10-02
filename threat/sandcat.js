var threatdata = {
    "name": "SandCat",
    "alias": "SandCat",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "SandCat",
        "names": [
            {
                "name": "SandCat",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "Uzbekistan"
        ],
        "sponsor": "State-sponsored, Military Unit 02616",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2018",
        "description": "(Kaspersky) SandCat is a relatively new APT group; we first observed them in 2018, although it would appear they have been around for some time,\u201d Costin Raiu, director of global research and analysis team at Kaspersky Lab, told Threatpost. \u201cThey use both FinFisher/FinSpy [spyware] and the CHAINSHOT framework in attacks, coupled with various zero-days. Targets of SandCat have been mostly observed in Middle East, including but not limited to Saudi Arabia.",
        "observed-countries": [
            "Saudi Arabia",
            "Middle East"
        ],
        "tools": [
            "FinFisher",
            "CHAINSHOT",
            "several 0-days"
        ],
        "information": [
            "https://threatpost.com/sandcat-fruityarmor-exploiting-microsoft-win32k/142751/",
            "https://www.vice.com/en_us/article/3kx5y3/uzbekistan-hacking-operations-uncovered-due-to-spectacularly-bad-opsec"
        ],
        "uuid": "ff99d24e-706d-4f15-99f3-a30c0be47cbe",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sandcat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/zero-day-in-windows-kernel-transaction-manager-cve-2018-8611/89253/",
            "date": "2018-12-12",
            "organization": "Kaspersky Labs",
            "author": "Boris Larin",
            "title": "Zero-day in Windows Kernel Transaction Manager (CVE-2018-8611)",
            "categories": [
                "SandCat"
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