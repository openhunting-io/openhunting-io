var threatdata = {
    "name": "ATMii",
    "alias": "ATMii",
    "category": "Malware",
    "type": "ATM malware, Backdoor",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "ATMii",
        "names": [
            {
                "name": "ATMii"
            }
        ],
        "description": "(Kaspersky) ATMii was first brought to our attention in April 2017, when a partner from the financial industry shared some samples with us. The malware turned out to be fairly straightforward, consisting of only two modules: an injector module (exe.exe, 3fddbf20b41e335b6b1615536b8e1292) and the module to be injected (dll.dll, dc42ed8e1de55185c9240f33863a6aa4). To use this malware, criminals need direct access to the target ATM, either over the network or physically (e.g. over USB). ATMii, if it is successful, allows criminals to dispense all the cash from the ATM.",
        "category": "Malware",
        "type": [
            "ATM malware",
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/atmii-a-small-but-effective-atm-robber/82707/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.atmii"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:atmii"
        ],
        "uuid": "6ece62e7-19f4-4568-953e-f240252f0568",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "atmii",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/atmii-a-small-but-effective-atm-robber/82707/",
            "date": "2017-10-10",
            "organization": "Kaspersky Labs",
            "author": "Konstantin Zykov",
            "title": "ATMii: a small but effective ATM robber",
            "categories": [
                "ATMii"
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