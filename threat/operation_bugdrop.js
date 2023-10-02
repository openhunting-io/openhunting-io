var threatdata = {
    "name": "Operation BugDrop",
    "alias": "Operation BugDrop",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "Operation BugDrop",
        "names": [
            {
                "name": "Operation BugDrop",
                "name-giver": "CyberX"
            }
        ],
        "country": [
            "Russia"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2016",
        "description": "(CyberX) CyberX has discovered a new, large-scale cyber-reconnaissance operation targeting a broad range of targets in the Ukraine. Because it eavesdrops on sensitive conversations by remotely controlling PC microphones \u2013 in order to surreptitiously \u201cbug\u201d its targets \u2013 and uses Dropbox to store exfiltrated data, CyberX has named it \u201cOperation BugDrop.\u201d\n\nCyberX has confirmed at least 70 victims successfully targeted by the operation in a range of sectors including critical infrastructure, media, and scientific research. The operation seeks to capture a range of sensitive information from its targets including audio recordings of conversations, screen shots, documents and passwords. Unlike video recordings, which are often blocked by users simply placing tape over the camera lens, it is virtually impossible to block your computer\u2019s microphone without physically accessing and disabling the PC hardware.",
        "observed-sectors": [
            "Engineering",
            "Oil and gas",
            "Media",
            "Research"
        ],
        "observed-countries": [
            "Austria",
            "Saudi Arabia",
            "Russia",
            "Ukraine"
        ],
        "tools": [
            "Dropbox"
        ],
        "information": [
            "https://cyberx-labs.com/blog/operation-bugdrop-cyberx-discovers-large-scale-cyber-reconnaissance-operation/"
        ],
        "uuid": "8b35e530-5e59-422e-a002-dda41046f5aa",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_bugdrop",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/operation-bugdrop",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Operation BugDrop",
            "categories": [
                "Operation BugDrop"
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