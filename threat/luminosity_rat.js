var threatdata = {
    "name": "Luminosity RAT",
    "alias": "Luminosity RAT, LuminosityLink",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Downloader",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "Luminosity RAT",
        "names": [
            {
                "name": "Luminosity RAT"
            },
            {
                "name": "LuminosityLink"
            }
        ],
        "description": "(Proofpoint) The stated purpose of LuminosityLink is ostensibly benign: 'LuminosityLink allows system administrators to manage a large amount of computers concurrently. Our product is ideal for business owners, educational institutions, and Windows system administrators.'\n\nAnalysis upon install, however, reveals a very aggressive key logger that injects its code in almost every running process on the computer, and multiple attempts are made if not initially successful. This 'injection' behavior is aggressive even by the standard of the {{Zeus}} family: very few malware families exhibit such an aggressive behavior, and it is particularly unusual to observe this in key loggers, even commercial ones. We have observed LuminosityLink being used to download additional payloads. It is possible that the actors involved here are using LuminosityLink as a platform to collect information from the victim, and using that information to decide whether to deploy more sophisticated malware at high-value targets.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Downloader"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/Light-After-Dark",
            "https://krebsonsecurity.com/2018/07/luminositylink-rat-author-pleads-guilty/",
            "http://malwarenailed.blogspot.com/2016/07/luminosity-rat-re-purposed.html",
            "https://researchcenter.paloaltonetworks.com/2018/02/unit42-rat-trapped-luminositylink-falls-foul-vermin-eradication-efforts/",
            "https://researchcenter.paloaltonetworks.com/2016/07/unit42-investigating-the-luminositylink-remote-access-trojan-configuration/",
            "https://umbrella.cisco.com/blog/2017/01/18/finding-the-rats-nest/",
            "https://www.proofpoint.com/sites/default/files/proofpoint-operation-transparent-tribe-threat-insight-en.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.luminosity_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:luminositylink"
        ],
        "uuid": "b41e9810-7e30-4a2f-ac55-936b396b6b60",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "luminosity_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/copper-fieldstone",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COPPER FIELDSTONE",
            "categories": [
                "Crimson RAT",
                "DarkComet",
                "Luminosity RAT",
                "NjRAT",
                "Operation C-Major"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2018/07/luminositylink-rat-author-pleads-guilty/",
            "date": "2018-07",
            "organization": "",
            "author": "Brian Krebs",
            "title": "\u2018LuminosityLink RAT\u2019 Author Pleads Guilty",
            "categories": [
                "Luminosity RAT"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2018/02/unit42-rat-trapped-luminositylink-falls-foul-vermin-eradication-efforts/",
            "date": "2018-02-07",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Simon Conant",
            "title": "RAT Trapped? LuminosityLink Falls Foul of Vermin Eradication Efforts",
            "categories": [
                "Luminosity RAT"
            ]
        },
        {
            "data_url": "https://umbrella.cisco.com/blog/2017/01/18/finding-the-rats-nest/",
            "date": "2017-01-18",
            "organization": "Cisco",
            "author": "Andrea Scarfo",
            "title": "Finding the RAT\u2019s Nest",
            "categories": [
                "Luminosity RAT"
            ]
        },
        {
            "data_url": "http://malwarenailed.blogspot.com/2016/07/luminosity-rat-re-purposed.html",
            "date": "2016-07-30",
            "organization": "MalwareNailed",
            "author": "Faisal AM Qureshi",
            "title": "Luminosity RAT - Re-purposed",
            "categories": [
                "Luminosity RAT"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2016/07/unit42-investigating-the-luminositylink-remote-access-trojan-configuration/",
            "date": "2016-07-08",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Josh Grunzweig",
            "title": "Investigating the LuminosityLink Remote Access Trojan Configuration",
            "categories": [
                "Luminosity RAT"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/sites/default/files/proofpoint-operation-transparent-tribe-threat-insight-en.pdf",
            "date": "2016-03-01",
            "organization": "Proofpoint",
            "author": "Darien Huss",
            "title": "Operation Transparent Tribe",
            "categories": [
                "Andromeda",
                "beendoor",
                "Bezigate",
                "Crimson RAT",
                "Luminosity RAT",
                "Operation C-Major"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/Light-After-Dark",
            "date": "2015-06-25",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "Sundown EK Spreads LuminosityLink RAT: Light After Dark",
            "categories": [
                "Luminosity RAT"
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