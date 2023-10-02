var threatdata = {
    "name": "Operation Poisoned News, TwoSail Junk",
    "alias": "Operation Poisoned News, TwoSail Junk",
    "category": "APT",
    "type": "-",
    "modified": "2020-05-01",
    "all_data": {
        "actor": "Operation Poisoned News, TwoSail Junk",
        "names": [
            {
                "name": "Operation Poisoned News",
                "name-giver": "Trend Micro"
            },
            {
                "name": "TwoSail Junk",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2020",
        "description": "(Kaspersky) A watering hole was discovered on January 10, 2020 utilizing a full remote iOS exploit chain to deploy a feature-rich implant named LightSpy. The site appears to have been designed to target users in Hong Kong based on the content of the landing page. Since the initial activity, we released two private reports exhaustively detailing spread, exploits, infrastructure and LightSpy implants.\n\nWe are temporarily calling this APT group \u201cTwoSail Junk\u201d. Currently, we have hints from known backdoor callbacks to infrastructure about clustering this campaign with previous activity. And we are working with colleagues to tie LightSpy with prior activity from a long running Chinese-speaking APT group, previously reported on as {{Lotus Blossom, Spring Dragon, Thrip}}, known for their Lotus Elise and Evora backdoor malware. Considering that this LightSpy activity has been disclosed publicly by our colleagues from TrendMicro, we would like to further contribute missing information to the story without duplicating content. And, in our quest to secure technologies for a better future, we reported the malware and activity to Apple and other relevant companies.",
        "observed-countries": [
            "Hong Kong"
        ],
        "tools": [
            "dmsSpy",
            "lightSpy"
        ],
        "information": [
            "https://securelist.com/ios-exploit-chain-deploys-lightspy-malware/96407/",
            "https://documents.trendmicro.com/assets/Tech-Brief-Operation-Poisoned-News-Hong-Kong-Users-Targeted-with-Mobile-Malware-via-Local-News-Links.pdf"
        ],
        "uuid": "e9cf8d80-c883-40ef-a5eb-907db5b0e4b0",
        "last-card-change": "2020-05-01",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_poisoned_news_twosail_junk",
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