var threatdata = {
    "name": "Bronze Starlight",
    "alias": "Bronze Starlight, DEV-0401, Cinnamon Tempest, Operation ChattyGoblin, SLIME34",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-06",
    "all_data": {
        "actor": "Bronze Starlight",
        "names": [
            {
                "name": "Bronze Starlight",
                "name-giver": "SecureWorks"
            },
            {
                "name": "DEV-0401",
                "name-giver": "Microsoft"
            },
            {
                "name": "Cinnamon Tempest",
                "name-giver": "Microsoft"
            },
            {
                "name": "Operation ChattyGoblin",
                "name-giver": "SentinelLabs"
            },
            {
                "name": "SLIME34",
                "name-giver": "?"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2021",
        "description": "(SecureWorks) BRONZE STARLIGHT has been active since mid 2021 and targets organizations globally across a range of industry verticals. The group leverages HUI Loader to load Cobalt Strike and PlugX payloads for command and control. CTU researchers have observed BRONZE STARLIGHT deploying ransomware to compromised networks as part of name-and-shame ransomware schemes, and posted victim names to leak sites.\n\nCTU researchers assess with moderate confidence that BRONZE STARLIGHT is located in China based on observed tradecraft, including the use of HUI Loader and PlugX which are associated with China-based threat group activity. It is plausible that BRONZE STARLIGHT deploys ransomware as a smokescreen rather than for financial gain, with the underlying motivation of stealing intellectual property theft or conducting espionage.",
        "observed-sectors": [
            "Casinos and Gambling"
        ],
        "observed-countries": [
            "Philippines",
            "Southeast Asia"
        ],
        "tools": [
            "AtomSilo",
            "Cobalt Strike",
            "HUI Loader",
            "LockFile",
            "NightSky",
            "Pandora",
            "PlugX",
            "Rook"
        ],
        "operations": [
            {
                "date": "2023-03",
                "activity": "Chinese Entanglement | DLL Hijacking in the Asian Gambling Sector\nhttps://www.sentinelone.com/labs/chinese-entanglement-dll-hijacking-in-the-asian-gambling-sector/"
            }
        ],
        "information": [
            "https://www.secureworks.com/research/threat-profiles/bronze-starlight",
            "https://www.secureworks.com/research/bronze-starlight-ransomware-operations-use-hui-loader"
        ],
        "uuid": "ada0ccd1-3229-4514-9a65-a66dd7ec862b",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bronze_starlight",
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