var threatdata = {
    "name": "Bitsran",
    "alias": "Bitsran, SHADYCAT",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Bitsran",
        "names": [
            {
                "name": "Bitsran"
            },
            {
                "name": "SHADYCAT"
            }
        ],
        "description": "SHADYCAT is a dropper and spreader component for the HERMES 2.1 RANSOMWARE radical edition.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://baesystemsai.blogspot.com/2017/10/taiwan-heist-lazarus-tools.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bitsran"
        ],
        "uuid": "f08a6224-f443-4898-b009-161ad4e92bcf",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bitsran",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.proofpoint.com/sites/default/files/pfpt-us-wp-north-korea-bitten-by-bitcoin-bug-180129.pdf",
            "date": "2018-01-29",
            "organization": "Proofpoint",
            "author": "Darien Huss",
            "title": "North Korea Bitten by Bitcoin Bug",
            "categories": [
                "Bitsran"
            ]
        },
        {
            "data_url": "https://content.fireeye.com/apt/rpt-apt38",
            "date": "2018",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "APT38",
            "categories": [
                "Bitsran",
                "BLINDTOAD",
                "BOOTWRECK",
                "Contopee",
                "DarkComet",
                "DYEPACK",
                "HOTWAX",
                "NESTEGG",
                "PowerRatankba",
                "REDSHAWL",
                "WORMHOLE",
                "Lazarus Group"
            ]
        },
        {
            "data_url": "http://baesystemsai.blogspot.de/2017/10/taiwan-heist-lazarus-tools.html",
            "date": "2017-10-16",
            "organization": "",
            "author": "Sergei Shevchenko",
            "title": "Taiwan Heist: Lazarus Tools and Ransomware",
            "categories": [
                "Bitsran",
                "Hermes"
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