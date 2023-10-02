var threatdata = {
    "name": "WinPot",
    "alias": "WinPot, ATMPot",
    "category": "Malware",
    "type": "ATM malware",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "WinPot",
        "names": [
            {
                "name": "WinPot"
            },
            {
                "name": "ATMPot"
            }
        ],
        "description": "(Kaspersky) The criminals had clearly spent some time on the interface to make it look like that of a slot machine. Likely as a reference to the popular term ATM-jackpotting, which refers to techniques designed to empty ATMs. In the WinPot case, each cassette has a reel of its own numbered 1 to 4 (4 is the max number of cash-out cassettes in an ATM) and a button labeled SPIN. As soon as you press the SPIN button (in our case it is greyed out because we are actually dispensing cash), the ATM starts dispensing cash from the corresponding cassette. Down from the SPIN button there is information about the cassette (bank note value and the number of bank notes in the cassette). The SCAN button rescans the ATM and updates the numbers under the SLOT button, while the STOP button stops the dispensing in progress.",
        "category": "Malware",
        "type": [
            "ATM malware"
        ],
        "information": [
            "https://securelist.com/atm-robber-winpot/89611/",
            "https://securelist.com/atm-malware-is-being-sold-on-darknet-market/81871/",
            "https://www.association-secure-transactions.eu/east-publishes-fraud-update-2-2018/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.winpot"
        ],
        "uuid": "0d7fed0f-fde7-4243-b936-54e580820edc",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "winpot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/atm-pos-malware-landscape-2017-2019/96750/",
            "date": "2020-04-23",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky",
            "title": "A look at the ATM/PoS malware landscape from 2017-2019",
            "categories": [
                "ATMitch",
                "WinPot"
            ]
        },
        {
            "data_url": "https://securelist.com/atm-robber-winpot/89611/",
            "date": "2019-02-19",
            "organization": "Kaspersky Labs",
            "author": "Konstantin Zykov",
            "title": "ATM robber WinPot: a slot machine instead of cutlets",
            "categories": [
                "WinPot"
            ]
        },
        {
            "data_url": "https://www.association-secure-transactions.eu/east-publishes-fraud-update-2-2018/",
            "date": "2018-05-07",
            "organization": "European Association for Secure Transactions",
            "author": "European Association for Secure Transactions",
            "title": "EAST Publishes European Fraud Update 2-2018",
            "categories": [
                "WinPot"
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