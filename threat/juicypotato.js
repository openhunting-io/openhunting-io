var threatdata = {
    "name": "JuicyPotato",
    "alias": "JuicyPotato",
    "category": "Exploits",
    "type": "Backdoor",
    "modified": "2022-08-25",
    "all_data": {
        "tool": "JuicyPotato",
        "names": [
            {
                "name": "JuicyPotato"
            }
        ],
        "description": "A sugared version of {{RottenPotato}}NG, with a bit of juice, i.e. another Local Privilege Escalation tool, from a Windows Service Accounts to NT AUTHORITY\\SYSTEM.",
        "category": "Exploits",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://github.com/ohpe",
            "https://lifars.com/wp-content/uploads/2020/06/Cryptocurrency-Miners-XMRig-Based-CoinMiner-by-Blue-Mockingbird-Group.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.juicy_potato"
        ],
        "uuid": "728448ac-d8dc-47bc-b5cc-8bfff10a6e88",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "juicypotato",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.sentinelone.com/blog/bluesky-ransomware-ad-lateral-movement-evasion-and-fast-encryption-puts-threat-on-the-radar/",
            "date": "2022-08-25",
            "organization": "SentinelOne",
            "author": "Jim Walter",
            "title": "BlueSky Ransomware | AD Lateral Movement, Evasion and Fast Encryption Put Threat on the Radar",
            "categories": [
                "BlueSky",
                "Cobalt Strike",
                "JuicyPotato"
            ]
        },
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
            "data_url": "https://www.welivesecurity.com/2021/08/09/iispy-complex-server-side-backdoor-antiforensic-features/",
            "date": "2021-08-09",
            "organization": "ESET Research",
            "author": "Zuzana Hromcov\u00e1",
            "title": "IISpy: A complex server\u2011side backdoor with anti\u2011forensic features",
            "categories": [
                "IISpy",
                "JuicyPotato"
            ]
        },
        {
            "data_url": "https://lifars.com/wp-content/uploads/2020/06/Cryptocurrency-Miners-XMRig-Based-CoinMiner-by-Blue-Mockingbird-Group.pdf",
            "date": "2020-05",
            "organization": "LIFARS",
            "author": "LIFARS",
            "title": "XMRig-based CoinMinersby Blue Mockingbird Threat Actor",
            "categories": [
                "JuicyPotato"
            ]
        },
        {
            "data_url": "https://github.com/ohpe/juicy-potato",
            "date": "2019-01-14",
            "organization": "Github (ohpe)",
            "author": "OHPE",
            "title": "Juicy Potato (abusing the golden privileges)",
            "categories": [
                "JuicyPotato"
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