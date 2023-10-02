var threatdata = {
    "name": "Operation Domino, Operation Kremlin",
    "alias": "Operation Domino, Operation Kremlin",
    "category": "APT",
    "type": "-",
    "modified": "2021-01-20",
    "all_data": {
        "actor": "Operation Domino, Operation Kremlin",
        "names": [
            {
                "name": "Operation Domino",
                "name-giver": "Hunting Shadow Lab"
            },
            {
                "name": "Operation Kremlin",
                "name-giver": "Clearsky"
            }
        ],
        "country": [
            "Russia"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2019",
        "description": "(Clearsky) ClearSky researchers identified a malicious \u201c.docx\u201d file that was uploaded to VirusTotal from Russia in mid-December. The file contains an obfuscated URL to a remote template which contains malicious VBA, eventually leading to the execution of VBS on the infected machine. The attack\u2019s purpose is to stealthily exfiltrate information without running any external executables on the system.\n\nNotably, the process is escalated on a certain day of the week, suggesting a possible familiarity with the intended victim or victims.\n\nWe estimate with medium confidence that the same threat actor responsible for the attacks described in this paper also conducted an attack named \u201cOperation Domino\u201d that occurred earlier in 2020.\n\nWe decided to name the operation \u201cKremlin\u201d due to the use of a parameter named \u201ckreml\u201d in the \u201cposlai\u201d (meaning send in Russian) function that exfiltrates the data.",
        "observed-countries": [
            "Belarus"
        ],
        "operations": [
            {
                "date": "2020-09",
                "activity": "Operation \u201cDomino\u201d\nhttps://ti.dbappsecurity.com.cn/blog/index.php/2020/09/18/operation-domino/"
            },
            {
                "date": "2020-12",
                "activity": "Operation \u201cKremlin\u201d\nhttps://www.clearskysec.com/operation-kremlin/"
            }
        ],
        "information": [
            "https://www.clearskysec.com/operation-kremlin/"
        ],
        "uuid": "99a751ba-5585-44b1-b9d3-993fc2ddc8fc",
        "last-card-change": "2021-01-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_domino_operation_kremlin",
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