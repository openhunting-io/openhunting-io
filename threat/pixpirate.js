var threatdata = {
    "name": "PixPirate",
    "alias": "PixPirate",
    "category": "Malware",
    "type": "Banking trojan, Credential stealer",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "PixPirate",
        "names": [
            {
                "name": "PixPirate"
            }
        ],
        "description": "(Cleafy) PixPirate belongs to the newest generation of Android banking trojan, as it can perform ATS (Automatic Transfer System), enabling attackers to automate the insertion of a malicious money transfer over the Instant Payment platform Pix, adopted by multiple Brazilian banks.\n\nPixPirate appears to have the following features, primarily achieved by abusing Accessibility Services, such as:\n- Ability to intercept valid banking credentials and perform ATS attacks on multiple Brazilian banks via Pix payments\n- Ability to intercept/delete SMS messages\n- Preventing uninstall\n- Malvertising",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Credential stealer"
        ],
        "information": [
            "https://www.cleafy.com/cleafy-labs/pixpirate-a-new-brazilian-banking-trojan"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.pixpirate"
        ],
        "uuid": "a018b937-90ca-4998-be1a-3084ddac445e",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pixpirate",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cleafy.com/cleafy-labs/pixpirate-a-new-brazilian-banking-trojan",
            "date": "2023-02-03",
            "organization": "Cleafy",
            "author": "Alessandro Strino",
            "title": "PixPirate: a new Brazilian Banking Trojan",
            "categories": [
                "PixPirate"
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