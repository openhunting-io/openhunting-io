var threatdata = {
    "name": "Operation Groundbait",
    "alias": "Operation Groundbait",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-15",
    "all_data": {
        "actor": "Operation Groundbait",
        "names": [
            {
                "name": "Operation Groundbait",
                "name-giver": "ESET"
            }
        ],
        "country": [
            "Ukraine"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2008",
        "description": "(ESET) After BlackEnergy, which has, most infamously, facilitated attacks that resulted in power outages for hundreds of thousands of Ukrainian civilians, and {{Operation Potao Express}}, where attackers went after sensitive TrueCrypt-protected data from high value targets, ESET researchers have uncovered another cyberespionage operation in Ukraine: Operation Groundbait.\n\nThe main point that sets Operation Groundbait apart from the other attacks is that it has mostly been targeting anti-government separatists in the self-declared Donetsk and Luhansk People\u2019s Republics.\n\nWhile the attackers seem to be more interested in separatists and the self-declared governments in eastern Ukrainian war zones, there have also been a large number of other targets, including, among others, Ukrainian government officials, politicians and journalists.",
        "observed-sectors": [
            "Government",
            "politicians and journalists"
        ],
        "observed-countries": [
            "Ukraine"
        ],
        "tools": [
            "Prikormka"
        ],
        "information": [
            "https://www.welivesecurity.com/2016/05/18/groundbait/"
        ],
        "uuid": "38246b37-a51f-4980-800e-bc591e986073",
        "last-card-change": "2020-04-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_groundbait",
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