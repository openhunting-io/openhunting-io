var threatdata = {
    "name": "IsSpace",
    "alias": "IsSpace, NfLog RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2022-07-18",
    "all_data": {
        "tool": "IsSpace",
        "names": [
            {
                "name": "IsSpace"
            },
            {
                "name": "NfLog RAT"
            }
        ],
        "description": "(Palo Alto) To determine the flow of execution, IsSpace gathers various data about the infected host, such as administrative rights of the user, operating system version, and CPU architecture.\n\nIf IsSpace determines that it is running as an administrator on a Microsoft Windows 7 system on a 32-bit platform, it will attempt to execute itself accordingly, using a side-loading technique.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/watering-hole-attack-on-aerospace-firm-exploits-cve-2015-5122-to-install-isspace-backdoor/",
            "https://unit42.paloaltonetworks.com/unit42-dragonok-updates-toolset-targets-multiple-geographic-regions/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.isspace"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:IsSpace"
        ],
        "uuid": "fc217926-738a-4c3e-8d5f-987259d84030",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "isspace",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/shallowtaurus/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Shallow Taurus",
            "categories": [
                "FormerFirstRAT",
                "IsSpace",
                "NewCT",
                "PlugX",
                "Poison Ivy",
                "Tidepool",
                "DragonOK"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-overbrook",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE OVERBROOK",
            "categories": [
                "Aveo",
                "DDKONG",
                "IsSpace",
                "PLAINTEE",
                "PlugX",
                "Rambo",
                "DragonOK"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-express",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE EXPRESS",
            "categories": [
                "9002 RAT",
                "CHINACHOPPER",
                "IsSpace",
                "NewCT",
                "PlugX",
                "smac",
                "APT26"
            ]
        },
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2017/01/unit42-dragonok-updates-toolset-targets-multiple-geographic-regions/",
            "date": "2017-01-05",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Josh Grunzweig",
            "title": "DragonOK Updates Toolset and Targets Multiple Geographic Regions",
            "categories": [
                "IsSpace",
                "SysGet"
            ]
        },
        {
            "data_url": "https://wikileaks.org/vault7/document/2015-09-20150911-280-CSIT-15085-NfLog/2015-09-20150911-280-CSIT-15085-NfLog.pdf",
            "date": "2015-09-11",
            "organization": "Raytheon Blackbird Technologies",
            "author": "Raytheon Blackbird Technologies",
            "title": "20150911-280-CSIT-15085 NfLog",
            "categories": [
                "IsSpace"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/watering-hole-attack-on-aerospace-firm-exploits-cve-2015-5122-to-install-isspace-backdoor/",
            "date": "2015-07-20",
            "organization": "paloalto Networks Unit 42",
            "author": "Bryan Lee",
            "title": "Watering Hole Attack on Aerospace Firm Exploits CVE-2015-5122 to Install IsSpace Backdoor",
            "categories": [
                "IsSpace"
            ]
        },
        {
            "data_url": "http://csecybsec.com/download/zlab/20180713_CSE_APT28_X-Agent_Op-Roman%20Holiday-Report_v6_1.pdf",
            "date": "2014",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "Operation Quantum Entanglement",
            "categories": [
                "IsSpace",
                "NewCT",
                "Poison Ivy",
                "SysGet"
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