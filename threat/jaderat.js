var threatdata = {
    "name": "JadeRAT",
    "alias": "JadeRAT",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "JadeRAT",
        "names": [
            {
                "name": "JadeRAT"
            }
        ],
        "description": "(Lookout) Lookout researchers are monitoring the evolution of an Android surveillanceware family known as JadeRAT, we believe may be connected to a government sponsored APT group.\n\nJadeRAT supports over 60 commands that can be issued in the format !<command_id>&<optional_cmd_params>@. Many of these offer standard information gathering functionality seen in typical mobile surveillanceware, however JadeRAT supports several less common capabilities. These include notifying an operator via SMS when a device has booted and silently dropping calls and texts to attacker specified numbers.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.lookout.com/mobile-threat-jaderat"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.jaderat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:JadeRAT"
        ],
        "uuid": "6c0793c6-9672-44d2-8bed-467f09279194",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "jaderat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.lookout.com/mobile-threat-jaderat",
            "date": "2017-10-20",
            "organization": "Lookout",
            "author": "Michael Flossman",
            "title": "JadeRAT mobile surveillanceware spikes in espionage activity",
            "categories": [
                "JadeRAT"
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