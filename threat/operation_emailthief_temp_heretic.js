var threatdata = {
    "name": "Operation EmailThief, TEMP_Heretic",
    "alias": "Operation EmailThief, TEMP_Heretic",
    "category": "APT",
    "type": "-",
    "modified": "2022-02-04",
    "all_data": {
        "actor": "Operation EmailThief, TEMP_Heretic",
        "names": [
            {
                "name": "Operation EmailThief",
                "name-giver": "Volexity"
            },
            {
                "name": "TEMP_Heretic",
                "name-giver": "Volexity"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2021",
        "description": "(Volexity) In December 2021, through its Network Security Monitoring service, Volexity identified a series of targeted spear-phishing campaigns against one of its customers from a threat actor it tracks as TEMP_Heretic. Analysis of the emails from these spear phishing campaigns led to a discovery: the attacker was attempting to exploit a zero-day cross-site scripting (XSS) vulnerability in the Zimbra email platform. Zimbra is an open source email platform often used by organizations as an alternative to Microsoft Exchange.\n\nThe campaigns came in multiple waves across two attack phases. The initial phase was aimed at reconnaissance and involved emails designed to simply track if a target received and opened the messages. The second phase came in several waves that contained email messages luring targets to click a malicious attacker-crafted link. For the attack to be successful, the target would have to visit the attacker's link while logged into the Zimbra webmail client from a web browser. The link itself, however, could be launched from an application to include a thick client, such as Thunderbird or Outlook. Successful exploitation results in the attacker being able to run arbitrary JavaScript in the context of the user's Zimbra session. Volexity observed the attacker attempting to load JavaScript to steal user mail data and attachments.",
        "observed-sectors": [
            "Government",
            "Media"
        ],
        "observed-countries": [
            "Europe"
        ],
        "information": [
            "https://www.volexity.com/blog/2022/02/03/operation-emailthief-active-exploitation-of-zero-day-xss-vulnerability-in-zimbra/"
        ],
        "uuid": "fd39b227-146f-400c-975e-ae146431cfd6",
        "last-card-change": "2022-02-04",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_emailthief_temp_heretic",
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