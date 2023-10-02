var threatdata = {
    "name": "oRAT",
    "alias": "oRAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Tunneling, Exfiltration",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "oRAT",
        "names": [
            {
                "name": "oRAT"
            }
        ],
        "description": "(Trend Micro) Another malware family that we obtained both Windows and macOS samples of during our investigation was oRAT. Interestingly, this was the first time that we had analyzed samples of this malware family written in the Go language.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Tunneling",
            "Exfiltration"
        ],
        "information": [
            "https://www.trendmicro.com/en_us/research/22/d/new-apt-group-earth-berberoka-targets-gambling-websites-with-old.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.orat"
        ],
        "uuid": "b999fd13-e5d2-4056-9676-907b6e1be7d0",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "orat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://documents.trendmicro.com/assets/white_papers/wp-operation-earth-berberoka.pdf",
            "date": "2022-05-23",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "Operation Earth Berberoka",
            "categories": [
                "reptile",
                "oRAT",
                "Ghost RAT",
                "PlugX",
                "pupy",
                "Earth Berberoka"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/blog/from-the-front-lines-unsigned-macos-orat-malware-gambles-for-the-win/",
            "date": "2022-05-09",
            "organization": "",
            "author": "Dinesh Devadoss",
            "title": "From the Front Lines | Unsigned macOS oRAT Malware Gambles For The Win",
            "categories": [
                "oRAT"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/txt/earth-berberoka-macos-iocs-2.txt",
            "date": "2022-04-27",
            "organization": "Trendmicro",
            "author": "Trendmicro",
            "title": "IOCs for Earth Berberoka - MacOS",
            "categories": [
                "oRAT",
                "Earth Berberoka"
            ]
        },
        {
            "data_url": "https://www.botconf.eu/wp-content/uploads/2022/05/Botconf2022-40-LunghiHorejsi.pdf",
            "date": "2022-04-27",
            "organization": "Trendmicro",
            "author": "Daniel Lunghi",
            "title": "Operation Gambling Puppet",
            "categories": [
                "reptile",
                "oRAT",
                "AsyncRAT",
                "Cobalt Strike",
                "DCRat",
                "Ghost RAT",
                "PlugX",
                "Quasar RAT",
                "Trochilus RAT",
                "Earth Berberoka"
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