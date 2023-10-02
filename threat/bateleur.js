var threatdata = {
    "name": "Bateleur",
    "alias": "Bateleur",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-04-27",
    "all_data": {
        "tool": "Bateleur",
        "names": [
            {
                "name": "Bateleur"
            }
        ],
        "description": "(Proofpoint) Proofpoint researchers have uncovered that the threat actor commonly referred to as FIN7 has added a new JScript backdoor called Bateleur and updated macros to its toolkit. We have observed these new tools being used to target U.S.-based chain restaurants, although FIN7 has previously targeted hospitality organizations, retailers, merchant services, suppliers and others. The new macros and Bateleur backdoor use sophisticated anti-analysis and sandbox evasion techniques as they attempt to cloak their activities and expand their victim pool.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/fin7carbanak-threat-actor-unleashes-bateleur-jscript-backdoor"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.bateleur"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Bateleur"
        ],
        "uuid": "86819334-1338-4ce0-a221-c599a1bf9763",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bateleur",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cert.ssi.gouv.fr/uploads/20220427_NP_TLPWHITE_ANSSI_FIN7.pdf",
            "date": "2022-04-27",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "LE GROUPE CYBERCRIMINEL FIN7",
            "categories": [
                "Bateleur",
                "BELLHOP",
                "Griffon",
                "SQLRat",
                "POWERSOURCE",
                "Andromeda",
                "BABYMETAL",
                "BlackCat",
                "BlackMatter",
                "BOOSTWRITE",
                "Carbanak",
                "Cobalt Strike",
                "DNSMessenger",
                "Dridex",
                "DRIFTPIN",
                "Gameover P2P",
                "MimiKatz",
                "Murofet",
                "Qadars",
                "Ranbyus",
                "SocksBot"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-embraces-big-game-hunting-part-1/",
            "date": "2021-08-30",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "CARBON SPIDER Embraces Big Game Hunting, Part 1",
            "categories": [
                "Bateleur",
                "Griffon",
                "Carbanak",
                "DarkSide",
                "JSSLoader",
                "PILLOWMINT",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-niagara",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD NIAGARA",
            "categories": [
                "Bateleur",
                "Griffon",
                "Carbanak",
                "Cobalt Strike",
                "DRIFTPIN",
                "TinyMet",
                "FIN7"
            ]
        },
        {
            "data_url": "https://summit.fireeye.com/content/dam/fireeye-www/summit/cds-2018/presentations/cds18-technical-s05-att&cking-fin7.pdf",
            "date": "2018-10-01",
            "organization": "FireEye",
            "author": "Regina Elwell",
            "title": "ATT&CKing FIN7",
            "categories": [
                "Bateleur",
                "BELLHOP",
                "Griffon",
                "ANTAK",
                "POWERPIPE",
                "POWERSOURCE",
                "HALFBAKED",
                "BABYMETAL",
                "Carbanak",
                "Cobalt Strike",
                "DNSMessenger",
                "DRIFTPIN",
                "PILLOWMINT",
                "SocksBot"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/fin7carbanak-threat-actor-unleashes-bateleur-jscript-backdoor",
            "date": "2017-07-31",
            "organization": "Proofpoint",
            "author": "Matthew Mesa",
            "title": "FIN7/Carbanak threat actor unleashes Bateleur JScript backdoor",
            "categories": [
                "Bateleur",
                "FIN7"
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