var threatdata = {
    "name": "PyVil RAT",
    "alias": "PyVil RAT, PyVil",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Credential stealer, Keylogger, Downloader, Exfiltration",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "PyVil RAT",
        "names": [
            {
                "name": "PyVil RAT"
            },
            {
                "name": "PyVil"
            }
        ],
        "description": "(Cybereason) PyVil RAT possesses different functionalities, and enables the attackers to exfiltrate data, perform keylogging and the taking of screenshots, and the deployment of more tools such as {{LaZagne}} in order to steal credentials.\n\nThe PyVil RAT has several functionalities including:\n\n\u2022 Keylogger\n\u2022 Running cmd commands\n\u2022 Taking screenshots\n\u2022 Downloading more Python scripts for additional functionality\n\u2022 Dropping and uploading executables\n\u2022 Opening an SSH shell\n\u2022 Collecting information such as:\no Anti-virus products installed\no USB devices connected\no Chrome version",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Keylogger",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.cybereason.com/blog/no-rest-for-the-wicked-evilnum-unleashes-pyvil-rat"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/py.pyvil"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:PyVil%20RAT"
        ],
        "uuid": "d1f93996-93c1-43a8-9893-2d2735fa1023",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pyvil_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://twitter.com/ESETresearch/status/1360178593968623617",
            "date": "2021-02-12",
            "organization": "Twitter (@ESETresearch)",
            "author": "ESET Research",
            "title": "A twitter thread on discussing updated attack chain of EVILNUM group and their use PYVIL malware",
            "categories": [
                "PyVil"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/no-rest-for-the-wicked-evilnum-unleashes-pyvil-rat",
            "date": "2020-09-03",
            "organization": "Cybereason",
            "author": "Tom Fakterman",
            "title": "No Rest for the Wicked: Evilnum Unleashes PyVil RAT",
            "categories": [
                "PyVil"
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