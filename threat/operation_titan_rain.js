var threatdata = {
    "name": "Operation Titan Rain",
    "alias": "Operation Titan Rain",
    "category": "APT",
    "type": "-",
    "modified": "2020-07-02",
    "all_data": {
        "actor": "Operation Titan Rain",
        "names": [
            {
                "name": "Operation Titan Rain",
                "name-giver": "US Government"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored, PLA Unit 61398",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2003",
        "description": "(Kaspersky) Hacks against the Defense Department and other U.S. agencies stretching back to 2003 were codenamed Titan Rain by investigators. The attacks, which breachedhundreds of networks, including Departments of State, Energy and Homeland Security, were coordinated from Chinese computers, investigators found. Global defense contractor Lockheed Martin and NASA were also struck in what many experts called an attempt to glean information on U.S. systems.  While it\u2019s usually difficult to locate the country of origin for such attacks, researchers were able to trace them back to the Chinese province of Guangdong. However, the individuals behind the operation remain a mystery to this day.",
        "observed-sectors": [
            "Defense",
            "Energy",
            "Government"
        ],
        "observed-countries": [
            "UK",
            "USA"
        ],
        "information": [
            "https://threatpost.com/titan-rain/91835/",
            "https://www.academia.edu/32222445/_Investigating_Titan_Rain_Cyber_Espionage_Cyber_Security_and_Cyber_Operations",
            "https://en.wikipedia.org/wiki/Titan_Rain"
        ],
        "uuid": "2af8b84d-172a-4946-9873-8d17e028e9c9",
        "last-card-change": "2020-07-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_titan_rain",
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