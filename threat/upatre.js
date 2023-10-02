var threatdata = {
    "name": "Upatre",
    "alias": "Upatre",
    "category": "Malware",
    "type": "Botnet, Downloader",
    "modified": "2020-06-24",
    "all_data": {
        "tool": "Upatre",
        "names": [
            {
                "name": "Upatre"
            }
        ],
        "description": "(Palo Alto) First discovered in 2013, Upatre is primarily a downloader tool responsible for delivering additional trojans onto the victim host. It is most well-known for being tied with the {{Dyre}} banking trojan, with a peak of over 250,000 Upatre infections per month delivering Dyre back in July 2015.",
        "category": "Malware",
        "type": [
            "Botnet",
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-upatre-continues-evolve-new-anti-analysis-techniques/",
            "https://johannesbader.ch/2015/06/Win32-Upatre-BI-Part-1-Unpacking/",
            "https://secrary.com/ReversingMalware/Upatre/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.upatre"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Upatre"
        ],
        "uuid": "4004b735-cd87-4a1b-b677-042509d11ab3",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "upatre",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://marcoramilli.com/2020/06/24/is-upatre-downloader-coming-back/",
            "date": "2020-06-24",
            "organization": "Marco Ramilli's Blog",
            "author": "Marco Ramilli",
            "title": "Is upatre downloader coming back ?",
            "categories": [
                "Upatre"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2018/07/unit42-upatre-continues-evolve-new-anti-analysis-techniques/",
            "date": "2018-07-13",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Mike Harbison",
            "title": "Upatre Continued to Evolve with new Anti-Analysis Techniques",
            "categories": [
                "Upatre"
            ]
        },
        {
            "data_url": "https://secrary.com/ReversingMalware/Upatre/",
            "date": "2017-07-10",
            "organization": "Secrary Blog",
            "author": "Secrary",
            "title": "Upatre - Trojan Downloader",
            "categories": [
                "Upatre"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/ticked-off-upatre-malwares-simple-anti-analysis-trick-to-defeat-sandboxes/",
            "date": "2015-10-06",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Richard Wartell",
            "title": "Ticked Off: Upatre Malware\u2019s Simple Anti-analysis Trick to Defeat Sandboxes",
            "categories": [
                "Upatre"
            ]
        },
        {
            "data_url": "https://johannesbader.ch/2015/06/Win32-Upatre-BI-Part-1-Unpacking/",
            "date": "2015-06-10",
            "organization": "",
            "author": "Johannes Bader",
            "title": "Win32/Upatre.BI - Part One",
            "categories": [
                "Upatre"
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