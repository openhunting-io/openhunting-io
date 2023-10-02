var threatdata = {
    "name": "Operation HangOver, Monsoon, Viceroy Tiger",
    "alias": "Operation HangOver, Monsoon, Viceroy Tiger, Neon",
    "category": "APT",
    "type": "-",
    "modified": "2020-06-04",
    "all_data": {
        "actor": "Operation HangOver, Monsoon, Viceroy Tiger",
        "names": [
            {
                "name": "Operation HangOver",
                "name-giver": "Shadowserver Foundation"
            },
            {
                "name": "Monsoon",
                "name-giver": "Forcepoint"
            },
            {
                "name": "Viceroy Tiger",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Neon",
                "name-giver": "?"
            }
        ],
        "country": [
            "India"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2010",
        "description": "(Shadowserver Foundation) On Sunday March 17th 2013 the Norwegian newspaper Aftenposten reported that the telecommunications giant Telenor had filed a case with Norwegian criminal police (\u201cKRIPOS\u201d) over what was perceived as an unlawful intrusion into their computer network. The infection was reported to have been conducted via \u201cspear phishing\u201d emails sent to people in the upper tiers of management.\n\nInitially, we had no information or visibility into this case. However, after some time Norwegian CERT (NorCERT) shared some data from the event, which included md5 hashes of malicious files and information about which Command and Control servers were used.\n\nHowever, the data we were given acted as a starting point for more data mining, and within a short period of time it became obvious that we were seeing a previously unknown and very extensive infrastructure for targeted attacks. This paper is the result of the ensuing investigation.\n\nThe samples we have uncovered seem to have been created from approximately September 2010 until the present day. It appears 2012 was a very active year for this group, which saw escalation not only in numbers of created malware files but also in targets. There is no sign that the attacks will slow down in 2013, as we see new attacks continuously.\n\nIn a great number of isolated cases and contexts, the word \u201cAppin\u201d shows up and there seems to be some connection with the Indian security company called Appin Security Group.",
        "observed-sectors": [
            "Defense",
            "Government",
            "Hospitality",
            "Telecommunications"
        ],
        "observed-countries": [
            "Austria",
            "Bangladesh",
            "Canada",
            "China",
            "France",
            "Germany",
            "India",
            "Indonesia",
            "Iran",
            "Jordan",
            "Norway",
            "Oman",
            "Panama",
            "Pakistan",
            "Poland",
            "Romania",
            "Russia",
            "Singapore",
            "Sri Lanka",
            "Taiwan",
            "Thailand",
            "UK",
            "USA",
            "Africa and Far East"
        ],
        "tools": [
            "AutoIt backdoor",
            "BackConfig",
            "BADNEWS",
            "TINYTYPHON",
            "Unknown Logger",
            "WSCSPL"
        ],
        "operations": [
            {
                "date": "2020-01",
                "activity": "Updated BackConfig Malware Targeting Government and Military Organizations in South Asia\nhttps://unit42.paloaltonetworks.com/updated-backconfig-malware-targeting-government-and-military-organizations/"
            }
        ],
        "information": [
            "https://keybase.pub/kung_foo/papers_and_presentations/Unveiling_an_Indian_Cyberattack_Infrastructure.pdf",
            "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2013/Unveiling%20an%20Indian%20Cyberattack%20Infrastructure%20-%20appendixes.pdf",
            "https://www.darkreading.com/attacks-breaches/hangover-persists-more-mac-malware-found/d/d-id/1140147",
            "https://www.forcepoint.com/sites/default/files/resources/files/forcepoint-security-labs-monsoon-analysis-report.pdf",
            "https://unit42.paloaltonetworks.com/threat-assessment-hangover-threat-group/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0042/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=hangover"
        ],
        "uuid": "af67327e-b4c9-443b-bcc9-3fb2efd41401",
        "last-card-change": "2020-06-04",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_hangover_monsoon_viceroy_tiger",
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