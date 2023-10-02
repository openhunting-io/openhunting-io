var threatdata = {
    "name": "BIOPASS RAT",
    "alias": "BIOPASS RAT, BIOPASS",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Credential stealer, Downloader, Exfiltration",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "BIOPASS RAT",
        "names": [
            {
                "name": "BIOPASS RAT"
            },
            {
                "name": "BIOPASS"
            }
        ],
        "description": "(Trend Micro) BIOPASS RAT possesses basic features found in other malware, such as file system assessment, remote desktop access, file exfiltration, and shell command execution. It also has the ability to compromise the private information of its victims by stealing web browser and instant messaging client data.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.trendmicro.com/en_us/research/21/g/biopass-rat-new-malware-sniffs-victims-via-live-streaming.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.biopass"
        ],
        "uuid": "9b44e58c-ab32-4547-9cc1-a67e15fcecac",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "biopass_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/a/earth-lusca-employs-sophisticated-infrastructure-varied-tools-and-techniques/technical-brief-delving-deep-an-analysis-of-earth-lusca-operations.pdf",
            "date": "2022-01-17",
            "organization": "Trend Micro",
            "author": "Joseph Chen",
            "title": "Delving Deep: An Analysis of Earth Lusca\u2019s Operations",
            "categories": [
                "BIOPASS",
                "Cobalt Strike",
                "FunnySwitch",
                "JuicyPotato",
                "ShadowPad",
                "Winnti",
                "Earth Lusca"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/g/biopass-rat-new-malware-sniffs-victims-via-live-streaming.html",
            "date": "2021-07-07",
            "organization": "Trend Micro",
            "author": "Joseph C Chen",
            "title": "BIOPASS RAT: New Malware Sniffs Victims via Live Streaming",
            "categories": [
                "BIOPASS",
                "Cobalt Strike",
                "Derusbi"
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