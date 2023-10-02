var threatdata = {
    "name": "Operation Manul",
    "alias": "Operation Manul",
    "category": "APT",
    "type": "-",
    "modified": "2021-08-09",
    "all_data": {
        "actor": "Operation Manul",
        "names": [
            {
                "name": "Operation Manul",
                "name-giver": "Electronic Frontier Foundation"
            }
        ],
        "country": [
            "Kazakhstan"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2015",
        "description": "(Electronic Frontier Foundation) This report covers a campaign of phishing and malware which we have named \u201cOperation Manul\u201d and which, based on the available evidence, we believe is likely to have been carried out on behalf of the government of Kazakhstan against journalists, dissidents living in Europe, their family members, known associates, and their lawyers.\nMany of the targets are involved in litigation with the government of Kazakhstan in European and American courts whose substance ranges from attempts by the government of Kazakhstan to unmask the administrators behind an anonymous website that publishes leaks alleging government corruption (Kazaword) to allegations of kidnapping.\nOur research suggests links between this campaign and other campaigns that have been attributed to an Indian security company called Appin Security Group. A hired actor is consistent with our findings on the Command and Control servers related to this campaign, which included web-based control panels for multiple RATs, suggesting that several campaigns were being run at once. A hired actor may also explain the generic and uninspired nature of the phishing, which often took the form of an email purporting to contain an invoice or a legal document with an attachment containing a blurry image. An investigation by the Swiss federal police of some of the emails linked to Operation Manul concludes that they were sent from IP addresses in India, which also suggests a link to Appin.",
        "observed-sectors": [
            "journalists and dissidents"
        ],
        "observed-countries": [
            "Europe"
        ],
        "tools": [
            "Bandook",
            "JRat"
        ],
        "information": [
            "https://www.eff.org/files/2016/08/03/i-got-a-letter-from-the-government.pdf"
        ],
        "uuid": "2eb09560-6cce-4c19-ab9d-7cb929bd110c",
        "last-card-change": "2021-08-09",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_manul",
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