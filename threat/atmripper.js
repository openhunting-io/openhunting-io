var threatdata = {
    "name": "ATMRipper",
    "alias": "ATMRipper, Ripper, Ripper ATM",
    "category": "Malware",
    "type": "ATM malware",
    "modified": "2020-05-25",
    "all_data": {
        "tool": "ATMRipper",
        "names": [
            {
                "name": "ATMRipper"
            },
            {
                "name": "Ripper"
            },
            {
                "name": "Ripper ATM"
            }
        ],
        "description": "(Trend Micro) Last August , security researchers released a blog discussing a new ATM malware family called Ripper which they believe was involved in the recent ATM attacks in Thailand.  Large numbers of ATMs were also temporarily shut down as a precautionary measure.\n\nThat analysis gave an overview of the techniques used by the malware, the fact that it targets three major ATM vendors, and compared Ripper to previous ATM malware families. Their analysis was based on the file with MD5 hash 15632224b7e5ca0ccb0a042daf2adc13. This file was uploaded to Virustotal by a user in Thailand on August 23.",
        "category": "Malware",
        "type": [
            "ATM malware"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/untangling-ripper-atm-malware/",
            "https://documents.trendmicro.com/assets/white_papers/wp-cashing-in-on-atm-malware.pdf",
            "https://www.dropbox.com/s/1xvhee0s7o12i61/Whitepaper ATM Heist GSB August 2016.pdf?dl=0"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ripper_atm"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ATMRIPPER"
        ],
        "uuid": "c80d3d14-4c5d-47e8-a960-fb9f4d13d05a",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "atmripper",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://documents.trendmicro.com/assets/white_papers/wp-cashing-in-on-atm-malware.pdf",
            "date": "2018-03-30",
            "organization": "Trend Micro",
            "author": "David Sancho",
            "title": "Cashing in on ATM Malware: A Comprehensive Look at Various Attack Types",
            "categories": [
                "Project Alice",
                "ATMitch",
                "Ploutus ATM",
                "Ripper ATM",
                "Skimer",
                "SUCEFUL",
                "Tyupkin"
            ]
        },
        {
            "data_url": "http://blog.trendmicro.com/trendlabs-security-intelligence/untangling-ripper-atm-malware/",
            "date": "2016-09-19",
            "organization": "Trend Micro",
            "author": "Numaan Huq",
            "title": "Untangling the Ripper ATM Malware",
            "categories": [
                "Ripper ATM"
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