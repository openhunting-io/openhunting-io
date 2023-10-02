var threatdata = {
    "name": "Mudwater",
    "alias": "Mudwater",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Exfiltration, Downloader",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Mudwater",
        "names": [
            {
                "name": "Mudwater"
            }
        ],
        "description": "(Trend Micro) In addition to uncovering new campaigns, we were also able to find connections between MuddyWater and four Android malware variants that posed as legitimate applications. We were able to establish proof of connection through their shared infrastructure, e.g., IP addresses and C&C servers, and the code similarities between some of the malware families.\n\nWe first noticed the first Android malware variant (AndroidOS_Mudwater.HRX) when we discovered that its IP address and C&C server, 78[.]129[.]139[.]131, was used as the final C&C server of a MuddyWater campaign. In the said campaign, we saw victims receiving commands for downloading a second stage payload from the abovementioned IP address.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Exfiltration",
            "Downloader"
        ],
        "information": [
            "https://documents.trendmicro.com/assets/white_papers/wp_new_muddywater_findings_uncovered.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.mudwater"
        ],
        "uuid": "438f9a8a-34ec-4d7e-a6ab-a59238b4bcd3",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "mudwater",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://documents.trendmicro.com/assets/white_papers/wp_new_muddywater_findings_uncovered.pdf",
            "date": "2019-06-10",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "New MuddyWater Activities Uncovered: Threat Actors Used Multi-Stage Backdoors, New Post-Exploitation Tools, Android Malware, and More",
            "categories": [
                "Mudwater",
                "SHARPSTATS"
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