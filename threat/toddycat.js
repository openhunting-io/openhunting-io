var threatdata = {
    "name": "ToddyCat",
    "alias": "ToddyCat",
    "category": "APT",
    "type": "-",
    "modified": "2022-07-19",
    "all_data": {
        "actor": "ToddyCat",
        "names": [
            {
                "name": "ToddyCat",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2020",
        "description": "(Kaspersky) ToddyCat is a relatively new APT actor that we have not been able to relate to other known actors, responsible for multiple sets of attacks detected since December 2020 against high-profile entities in Europe and Asia. We still have little information about this actor, but we know that its main distinctive signs are two formerly unknown tools that we call \u2018Samurai backdoor\u2019 and \u2018Ninja Trojan\u2019.",
        "observed-countries": [
            "Afghanistan",
            "India",
            "Indonesia",
            "Iran",
            "Kyrgyzstan",
            "Malaysia",
            "Pakistan",
            "Russia",
            "Slovakia",
            "Taiwan",
            "Thailand",
            "UK",
            "Uzbekistan",
            "Vietnam"
        ],
        "tools": [
            "China Chopper",
            "Ninja",
            "Samurai"
        ],
        "information": [
            "https://securelist.com/toddycat/106799/"
        ],
        "uuid": "7cc191a7-8a9b-431c-8ae1-af954b6537b7",
        "last-card-change": "2022-07-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "toddycat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://community.riskiq.com/article/d8b749f2",
            "date": "2022-07-01",
            "organization": "RiskIQ",
            "author": "RiskIQ",
            "title": "ToddyCat: A Guided Journey through the Attacker's Infrastructure",
            "categories": [
                "ShadowPad",
                "ToddyCat"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/new-toddycat-apt-group-targets-exchange-servers-in-asia-europe/",
            "date": "2022-06-21",
            "organization": "BleepingComputer",
            "author": "Sergiu Gatlan",
            "title": "Microsoft Exchange servers hacked by new ToddyCat APT gang",
            "categories": [
                "ToddyCat"
            ]
        },
        {
            "data_url": "https://securelist.com/toddycat/106799/",
            "date": "2022-06-21",
            "organization": "Kaspersky",
            "author": "Giampaolo Dedola",
            "title": "APT ToddyCat: Unveiling an unknown APT actor attacking high-profile entities in Europe and Asia",
            "categories": [
                "ToddyCat"
            ]
        },
        {
            "data_url": "https://teamt5.org/en/posts/assassinations-of-minininja-in-various-apac-countries/",
            "date": "2021-10-22",
            "organization": "TEAMT5",
            "author": "TeamT5",
            "title": "Assassinations of \"MiniNinja\" in Various APAC Countries",
            "categories": [
                "ToddyCat"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2021/03/10/exchange-servers-under-siege-10-apt-groups/",
            "date": "2021-03-10",
            "organization": "ESET Research",
            "author": "Thomas Dupuy",
            "title": "Exchange servers under siege from at least 10 APT groups",
            "categories": [
                "Microcin",
                "MimiKatz",
                "PlugX",
                "Winnti",
                "APT27",
                "APT41",
                "Calypso",
                "Tick",
                "ToddyCat",
                "Tonto Team",
                "Vicious Panda"
            ]
        },
        {
            "data_url": "https://gteltsc.vn/blog/cap-nhat-nhe-ve-lo-hong-bao-mat-0day-microsoft-exchange-dang-duoc-su-dung-de-tan-cong-cac-to-chuc-tai-viet-nam-9685.html",
            "date": "2021-03-03",
            "organization": "GTSC",
            "author": "GTSC",
            "title": "'Mild' update on Microsoft Exchange 0day security vulnerability being used to attack organizations in Vietnam",
            "categories": [
                "ToddyCat"
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