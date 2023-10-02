var threatdata = {
    "name": "JhoneRAT",
    "alias": "JhoneRAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Downloader, Dropper",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "JhoneRAT",
        "names": [
            {
                "name": "JhoneRAT"
            }
        ],
        "description": "(Talos) Today, Cisco Talos is unveiling the details of a new RAT we have identified we're calling 'JhoneRAT.' This new RAT is dropped to the victims via malicious Microsoft Office documents. The dropper, along with the Python RAT, attempts to gather information on the victim's machine and then uses multiple cloud services: Google Drive, Twitter, ImgBB and Google Forms. The RAT attempts to download additional payloads and upload the information gathered during the reconnaissance phase. This particular RAT attempts to target a very specific set of Arabic-speaking countries. The filtering is performed by checking the keyboard layout of the infected systems.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Downloader",
            "Dropper"
        ],
        "information": [
            "https://blog.talosintelligence.com/2020/01/jhonerat.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.jhone_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:JhoneRAT"
        ],
        "uuid": "21ed6073-21b0-41df-ba0a-312e06d1992c",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "jhonerat",
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
            "data_url": "https://blog.talosintelligence.com/2020/01/jhonerat.html",
            "date": "2020-01-16",
            "organization": "Cisco Talos",
            "author": "Warren Mercer",
            "title": "JhoneRAT: Cloud based python RAT targeting Middle Eastern countries",
            "categories": [
                "JhoneRAT"
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