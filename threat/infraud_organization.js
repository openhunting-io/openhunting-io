var threatdata = {
    "name": "Infraud Organization",
    "alias": "Infraud Organization",
    "category": "APT",
    "type": "-",
    "modified": "2020-08-02",
    "all_data": {
        "actor": "Infraud Organization",
        "names": [
            {
                "name": "Infraud Organization",
                "name-giver": "real name"
            }
        ],
        "country": [
            "[Various]"
        ],
        "motivation": [
            "Financial crime",
            "Financial gain"
        ],
        "first-seen": "2010",
        "description": "(Bank Info Security) The Infraud Organization ran an online forum dedicated to criminal activity that federal prosecutors claim had more than 10,000 members in March 2017. The site used the slogan 'In Fraud We Trust,' according to the Justice Department.\n\nThe gang that operated Infraud engaged in a variety of identity theft and financial fraud from October 2010 to February 2018, prosecutors say. It's believed to be responsible for the sale or purchase of over 4 million compromised payment card numbers during that time, according to the court filing. The aim of the organization was to develop the 'premier online destination for the purchase and sale of stolen property and other contraband' that also serves as the source of other contraband vendors, according to the Justice Department.\n\nThe gang used advertising to direct web traffic from its website to other automated sites that were owned or operated by its members, helping other cybercriminals traffic in point-of-sale malware, banking Trojans, stolen payment card details and counterfeit identification, prosecutors say.",
        "observed-countries": [
            "Worldwide"
        ],
        "tools": [
            "FastPOS"
        ],
        "counter-operations": [
            {
                "date": "2018-02",
                "activity": "Operation \u201cShadow Web\u201d\nThirty-six Defendants Indicted for Alleged Roles in Transnational Criminal Organization Responsible for More than $530 Million in Losses from Cybercrimes\nhttps://www.justice.gov/opa/pr/thirty-six-defendants-indicted-alleged-roles-transnational-criminal-organization-responsible"
            },
            {
                "date": "2020-06",
                "activity": "Russian National Pleads Guilty for Role in Transnational Cybercrime Organization Responsible for more than $568 Million in Losses\nhttps://www.justice.gov/opa/pr/russian-national-pleads-guilty-role-transnational-cybercrime-organization-responsible-more"
            },
            {
                "date": "2020-07",
                "activity": "Malware Author Pleads Guilty for Role in Transnational Cybercrime Organization Responsible for more than $568 Million in Losses\nhttps://www.justice.gov/opa/pr/malware-author-pleads-guilty-role-transnational-cybercrime-organization-responsible-more-568"
            }
        ],
        "information": [
            "https://www.bankinfosecurity.com/fastpos-malware-creator-pleads-guilty-to-federal-charges-a-14751",
            "https://en.wikipedia.org/wiki/Infraud_Organization"
        ],
        "uuid": "8dce2769-0cce-4166-a15b-872c64250170",
        "last-card-change": "2020-08-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "infraud_organization",
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