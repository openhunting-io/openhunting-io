var threatdata = {
    "name": "MSUpdater",
    "alias": "MSUpdater",
    "category": "Malware",
    "type": "Dropper, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "MSUpdater",
        "names": [
            {
                "name": "MSUpdater"
            }
        ],
        "description": "(ZScaler) The malware dropped and launched from the PDF exploit has been seen to be virtual machine (VM) aware in order to prevent analysis within a sandbox. The Trojan functionality is decrypted at run-time, and includes expected functionality, such as, downloading, uploading, and executing files driven by commands from the C&C. Communication with the C&C is over HTTP but is encoded to evade detection. The Trojan file name (e.g., 'msupdate.exe') and the HTTP paths used in the C&C (e.g., '/microsoftupdate/getupdate/default.aspx') are used to stay under the radar by appearing to be related to Microsoft Windows Update - hence the name given to this Trojan.",
        "category": "Malware",
        "type": [
            "Dropper",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.zscaler.com/blogs/research/msupdater-trojan-and-link-targeted-attacks",
            "https://cybersecurity.att.com/blogs/labs-research/msupdater-trojan-found-using-cve-2012-0158-space-and-missile-defense-conference"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:msupdater"
        ],
        "uuid": "e288f4fe-9d9f-4f36-be19-6895ad1ada0c",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "msupdater",
    "analysis": null,
    "articles": [],
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