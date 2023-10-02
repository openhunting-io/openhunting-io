var threatdata = {
    "name": "Packrat",
    "alias": "Packrat",
    "category": "APT",
    "type": "-",
    "modified": "2021-04-24",
    "all_data": {
        "actor": "Packrat",
        "names": [
            {
                "name": "Packrat",
                "name-giver": "Citizen Lab"
            }
        ],
        "country": [
            "[Latin America]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2008",
        "description": "(Citizen Lab) This report describes an extensive malware, phishing, and disinformation campaign active in several Latin American countries, including Ecuador, Argentina, Venezuela, and Brazil. The nature and geographic spread of the targets seems to point to a sponsor, or sponsors, with regional, political interests. The attackers, whom we have named Packrat, have shown a keen and systematic interest in the political opposition and the independent press in so-called ALBA countries (Bolivarian Alternative for the Americas), and their recently allied regimes. These countries are linked by a trade agreement as well as a cooperation on a range of non-financial matters.\n\nAfter observing a wave of attacks in Ecuador in 2015, we linked these attacks to a campaign active in Argentina in 2014. The targeting in Argentina was discovered when the attackers attempted to compromise the devices of Alberto Nisman and Jorge Lanata. Building on what we had learned about these two campaigns, we then traced the group\u2019s activities back as far as 2008.\n\nThis report brings together many of the pieces of this campaign, from malware and phishing, to command and control infrastructure spread across Latin America. It also highlights fake online organizations that Packrat has created in Venezuela and Ecuador. Who is responsible? We assess several scenarios, and consider the most likely to be that Packrat is sponsored by a state actor or actors, given their apparent lack of concern about discovery, their targets, and their persistence. However, we do not conclusively attribute Packrat to a particular sponsor.",
        "observed-sectors": [
            "Government",
            "Media",
            "high profile political figures, journalists, and others"
        ],
        "observed-countries": [
            "Argentina",
            "Brazil",
            "Ecuador",
            "Venezuela"
        ],
        "tools": [
            "Adwind",
            "Adzok",
            "CyberGate RAT",
            "XtremeRAT"
        ],
        "information": [
            "https://citizenlab.ca/2015/12/packrat-report/"
        ],
        "uuid": "3d252950-6264-40dc-b9e7-2214eab11dc6",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "packrat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://citizenlab.ca/2015/12/packrat-report/",
            "date": "2015-12-08",
            "organization": "The Citizenlab",
            "author": "John Scott-Railton",
            "title": "Packrat: Seven Years of a South American Threat Actor",
            "categories": [
                "AdWind",
                "Adzok",
                "CyberGate",
                "Xtreme RAT",
                "Packrat"
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