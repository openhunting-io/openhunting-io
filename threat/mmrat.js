var threatdata = {
    "name": "MMRat",
    "alias": "MMRat",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Credential stealer",
    "modified": "2023-09-06",
    "all_data": {
        "tool": "MMRat",
        "names": [
            {
                "name": "MMRat"
            }
        ],
        "description": "(Trend Micro) The Trend Micro Mobile Application Reputation Service (MARS) team discovered a new, fully undetected Android banking trojan, dubbed MMRat (detected by TrendMicro as AndroidOS_MMRat.HRX), that has been targeting mobile users in Southeast Asia since late June 2023. The malware, named after its distinctive package name com.mm.user, can capture user input and screen content, and can also remotely control victim devices through various techniques, enabling its operators to carry out bank fraud on the victim\u2019s device.\n\nFurthermore, MMRat uses a special customized command-and-control (C&C) protocol based on protocol buffers (aka Protobuf), an open-source data format used for serializing structured data. This feature, which is rarely seen in Android banking trojans, enhances its performance during the transfer of large volumes of data.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://www.trendmicro.com/en_us/research/23/h/mmrat-carries-out-bank-fraud-via-fake-app-stores.html"
        ],
        "uuid": "cddf5428-abee-4308-8ab6-ac5bb744e312",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "mmrat",
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