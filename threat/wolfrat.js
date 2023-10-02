var threatdata = {
    "name": "WolfRAT",
    "alias": "WolfRAT, W1_RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "WolfRAT",
        "names": [
            {
                "name": "WolfRAT"
            },
            {
                "name": "W1_RAT"
            }
        ],
        "description": "(Talos) Cisco Talos has discovered a new Android malware based on a leak of the {{Dendroid}} malware family. We named this malware 'WolfRAT' due to strong links between this malware (and the command and control (C2) infrastructure) and Wolf Research, an infamous organization that developed interception and espionage-based malware and was publicly described by CSIS during Virus Bulletin 2018. We identified infrastructure overlaps and string references to previous Wolf Research work. The organization appears to be shut down, but the threat actors are still very active.\n\nWe identified campaigns targeting Thai users and their devices. Some of the C2 servers are located in Thailand. The panels also contain Thai JavaScript comments and the domain names also contain references to Thai food, a tactic commonly employed to entice users to click/visit these C2 panels without much disruption.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.talosintelligence.com/2020/05/the-wolf-is-back.html",
            "https://www.virusbulletin.com/uploads/pdf/conference_slides/2018/AncelKuprins-VB2018-WolfSheep.pdf",
            "https://www.africacybersecurityconference.com/document/CrowdStrike_GTR_2019.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0489/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.wolf_rat"
        ],
        "uuid": "ee2b0b06-f227-4523-b696-da3c1cae3a7c",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "wolfrat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.talosintelligence.com/2020/12/2020-year-in-malware.html",
            "date": "2020-12-21",
            "organization": "Cisco Talos",
            "author": "JON MUNSHAW",
            "title": "2020: The year in malware",
            "categories": [
                "WolfRAT",
                "Prometei",
                "Poet RAT",
                "Agent Tesla",
                "Astaroth",
                "Ave Maria",
                "CRAT",
                "Emotet",
                "Gozi",
                "IndigoDrop",
                "JhoneRAT",
                "Nanocore RAT",
                "NjRAT",
                "Oblique RAT",
                "SmokeLoader",
                "StrongPity",
                "WastedLocker",
                "Zloader"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/05/the-wolf-is-back.html",
            "date": "2020-05-19",
            "organization": "Cisco Talos",
            "author": "Warren Mercer",
            "title": "The wolf is back...",
            "categories": [
                "WolfRAT"
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