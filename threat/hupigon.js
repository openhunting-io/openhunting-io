var threatdata = {
    "name": "Hupigon",
    "alias": "Hupigon, Hupigon RAT, BKDR_HUPIGON, MFC Huner",
    "category": "Malware",
    "type": "0-day, Backdoor, Rootkit, Keylogger, Credential stealer, Info stealer",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Hupigon",
        "names": [
            {
                "name": "Hupigon"
            },
            {
                "name": "Hupigon RAT"
            },
            {
                "name": "BKDR_HUPIGON"
            },
            {
                "name": "MFC Huner"
            }
        ],
        "description": "(F-Secure) Hupigon variants have several different types of features. The following list is an example of some:\n\n\u2022 It allows others to access the computer\n\u2022 Allows for recording with the user's webcam\n\u2022 Can make the user's computer to attack various servers\n\u2022 Send victim's computer messages\n\u2022 Has rootkit functionality so it has a stealth component that hides files\n\u2022 Create logs from keystrokes, steals passwords, and sends this information to remote servers",
        "category": "Malware",
        "type": [
            "0-day",
            "Backdoor",
            "Rootkit",
            "Keylogger",
            "Credential stealer",
            "Info stealer"
        ],
        "information": [
            "https://www.f-secure.com/v-descs/backdoor_w32_hupigon.shtml",
            "https://www.fireeye.com/blog/threat-research/2010/11/ie-0-day-hupigon-joins-the-party.html",
            "https://www.proofpoint.com/us/threat-insight/post/threat-actors-repurpose-hupigon-adult-dating-attacks-targeting-us-universities",
            "https://en.wikipedia.org/wiki/Hupigon"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hupigon"
        ],
        "uuid": "52ea511b-5508-4655-a547-d2e1a96e972d",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hupigon",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/threat-actors-repurpose-hupigon-adult-dating-attacks-targeting-us-universities",
            "date": "2020-04-23",
            "organization": "Proofpoint",
            "author": "Proofpoint Threat Research Team",
            "title": "Threat Actors Repurpose Hupigon in Adult Dating Attacks Targeting US Universities",
            "categories": [
                "Hupigon"
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