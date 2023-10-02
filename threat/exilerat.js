var threatdata = {
    "name": "ExileRAT",
    "alias": "ExileRAT, Exile RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "ExileRAT",
        "names": [
            {
                "name": "ExileRAT"
            },
            {
                "name": "Exile RAT"
            }
        ],
        "description": "(Talos) ExileRAT is a simple RAT platform capable of getting information on the system (computer name, username, listing drives, network adapter, process name), getting/pushing files and executing/terminating processes.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.talosintelligence.com/2019/02/exilerat-shares-c2-with-luckycat.html",
            "https://www.proofpoint.com/us/blog/threat-insight/chinese-apt-ta413-resumes-targeting-tibet-following-covid-19-themed-economic"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.exilerat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ExileRAT"
        ],
        "uuid": "f270b69d-3383-4679-adb2-aa1f2ce2edef",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "exilerat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.talosintelligence.com/2019/02/exilerat-shares-c2-with-luckycat.html",
            "date": "2019-02-04",
            "organization": "Cisco",
            "author": "Warren Mercer",
            "title": "ExileRAT shares C2 with LuckyCat, targets Tibet",
            "categories": [
                "LuckyCat",
                "Exile RAT"
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