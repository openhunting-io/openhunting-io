var threatdata = {
    "name": "Goldmouse, APT-C-27",
    "alias": "Goldmouse, Golden Rat, APT-C-27, ATK 80",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-20",
    "all_data": {
        "actor": "Goldmouse, APT-C-27",
        "names": [
            {
                "name": "Goldmouse",
                "name-giver": "Qihoo 360"
            },
            {
                "name": "Golden Rat",
                "name-giver": "Qihoo 360"
            },
            {
                "name": "APT-C-27",
                "name-giver": "Qihoo 360"
            },
            {
                "name": "ATK 80",
                "name-giver": "Thales"
            }
        ],
        "country": [
            "Syria"
        ],
        "sponsor": "Syrian Electronic Army",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2014",
        "description": "A subgroup of {{Syrian Electronic Army (SEA), Deadeye Jackal}}.\n\n(Qihoo 360) On March 17, 2019, 360 Threat Intelligence Center captured a target attack sample against the Middle East by exploiting WinRAR vulnerability (CVE-2018-20250), and it seems that the attack is carried out by the Goldmouse APT group (APT-C-27). There is a decoy Word document inside the archive regarding terrorist attacks to lure the victim into decompressing. When the archive gets decompressed on the vulnerable computer, the embedded njRAT backdoor (Telegram Desktop.exe) will be extracted to the startup folder and then triggered into execution if the victim restarts the computer or performs re-login. After that, the attacker is capable to control the compromised device.",
        "observed-countries": [
            "Syria",
            "Middle East"
        ],
        "tools": [
            "GoldenRAT",
            "njRAT",
            "a WinRAR exploit"
        ],
        "information": [
            "https://ti.360.net/blog/articles/apt-c-27-(goldmouse):-suspected-target-attack-against-the-middle-east-with-winrar-exploit-en/",
            "https://blog.360totalsecurity.com/en/the-sample-analysis-of-apt-c-27s-recent-attack/",
            "http://blogs.360.cn/post/SEA_role_influence_cyberattacks.html"
        ],
        "uuid": "a9039e6e-531f-4b17-9c0d-ba8905ce5293",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "goldmouse_apt-c-27",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://ti.360.net/blog/articles/apt-c-27-(goldmouse):-suspected-target-attack-against-the-middle-east-with-winrar-exploit-en/",
            "date": "2019-03-19",
            "organization": "",
            "author": "\u5947\u5b89\u4fe1\u5a01\u80c1\u60c5\u62a5\u4e2d\u5fc3",
            "title": "APT-C-27 (Goldmouse): Suspected Target Attack against the Middle East with WinRAR Exploit",
            "categories": [
                "GoldenRAT",
                "APT-C-27"
            ]
        },
        {
            "data_url": "https://ti.360.net/blog/articles/analysis-of-apt-c-27/",
            "date": "2018-07-23",
            "organization": "360 Threat Intelligence",
            "author": "Qi Anxin Threat Intelligence Center",
            "title": "Golden Rat Organization-targeted attack in Syria",
            "categories": [
                "NjRAT",
                "APT-C-27"
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