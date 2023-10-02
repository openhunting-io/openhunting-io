var threatdata = {
    "name": "Matrix Banker",
    "alias": "Matrix Banker, RediModiUpd",
    "category": "Malware",
    "type": "Banking trojan, Credential stealer",
    "modified": "2020-05-22",
    "all_data": {
        "tool": "Matrix Banker",
        "names": [
            {
                "name": "Matrix Banker"
            },
            {
                "name": "RediModiUpd"
            }
        ],
        "description": "(Arbor) This post takes a look at a new banking malware that has, so far, been targeting financial institutions in Latin America\u2014specifically, Mexico and Peru. Initially, we\u2019ve called it \u201cMatrix Banker\u201d based on its command and control (C2) login panel, but it seems that \u201cMatrix Admin\u201d is a template available for the Bootstrap web framework. Proofpoint calls it \u201cWin32/RediModiUpd\u201d based on a debugging string from an earlier sample.\n\nThe malware is under active development, but as with some of the other banking trojans we\u2019ve analyzed, it\u2019s difficult to assess how far and wide this threat will go while it\u2019s still so new.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Credential stealer"
        ],
        "information": [
            "https://www.netscout.com/blog/asert/another-banker-enters-matrix"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.matrix_banker"
        ],
        "uuid": "5990b482-f24a-4c94-988a-93153a27cbc1",
        "last-card-change": "2020-05-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "matrix_banker",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.arbornetworks.com/blog/asert/another-banker-enters-matrix/",
            "date": "2017-06-09",
            "organization": "NetScout",
            "author": "Dennis Schwarz",
            "title": "Another Banker Enters the Matrix",
            "categories": [
                "Matrix Banker"
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