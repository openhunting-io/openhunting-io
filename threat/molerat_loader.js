var threatdata = {
    "name": "Molerat Loader",
    "alias": "Molerat Loader",
    "category": "Malware",
    "type": "Loader",
    "modified": "2021-06-17",
    "all_data": {
        "tool": "Molerat Loader",
        "names": [
            {
                "name": "Molerat Loader"
            }
        ],
        "description": "No description available yet.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.cybereason.com/blog/new-cyber-espionage-campaigns-targeting-palestinians-part-one"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.molerat_loader"
        ],
        "uuid": "fc94a35b-60d5-46db-8b4a-2ab63d27ce5b",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "molerat_loader",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/new-ta402-molerats-malware-targets-governments-middle-east",
            "date": "2021-06-17",
            "organization": "Proofpoint",
            "author": "Konstantin Klinger",
            "title": "New TA402 Molerats Malware Targets Governments in the Middle East",
            "categories": [
                "Molerat Loader"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/hubfs/dam/collateral/reports/Molerats-in-the-Cloud-New-Malware-Arsenal-Abuses-Cloud-Platforms-in-Middle-East-Espionage-Campaign.pdf",
            "date": "2020-12-09",
            "organization": "Cybereason",
            "author": "Cybereason Nocturnus Team",
            "title": "MOLERATS IN THE CLOUD: New Malware Arsenal Abuses Cloud Platforms in Middle East Espionage Campaign",
            "categories": [
                "DropBook",
                "JhoneRAT",
                "Molerat Loader",
                "Pierogi",
                "Quasar RAT",
                "SharpStage",
                "Spark"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/molerats-delivers-spark-backdoor/",
            "date": "2020-03-03",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Molerats Delivers Spark Backdoor to Government and Telecommunications Organizations",
            "categories": [
                "Downeks",
                "JhoneRAT",
                "Molerat Loader",
                "Spark"
            ]
        },
        {
            "data_url": "http://www.clearskysec.com/iec/",
            "date": "2017-03-14",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "Operation Electric Powder \u2013 Who is targeting Israel Electric Company?",
            "categories": [
                "Molerat Loader"
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