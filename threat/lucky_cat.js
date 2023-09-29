var threatdata = {
    "name": "Lucky Cat",
    "alias": "Lucky Cat, LuckyCat",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Lucky Cat",
        "names": [
            {
                "name": "Lucky Cat"
            },
            {
                "name": "LuckyCat"
            }
        ],
        "description": "(Dark Reading) Trend Micro researchers found two Android apps in the early phase of development that can communicate with Luckycat's command-and-control (C&C) server. The malware is currently capable of gathering information on the mobile device and uploading and downloading files as directed by the C&C server. Some of the features, including remote shell, are still under construction, and it's unclear just how the attackers plan to infect victims with the mobile malware, according to Trend Micro.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.darkreading.com/attacks-breaches/luckycat-apt-campaign-building-android-malware/d/d-id/1138130",
            "https://blog.talosintelligence.com/2019/02/exilerat-shares-c2-with-luckycat.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.luckycat"
        ],
        "uuid": "c4282d04-3f95-470a-a8b8-460ff21abba8",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
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
    ],
    "file_name": "lucky_cat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/ta413-leverages-new-friarfox-browser-extension-target-gmail-accounts-global",
            "date": "2021-02-25",
            "organization": "Proofpoint",
            "author": "Michael Raggi",
            "title": "TA413 Leverages New FriarFox Browser Extension to Target the Gmail Accounts of Global Tibetan Organizations",
            "categories": [
                "scanbox",
                "Sepulcher",
                "Lucky Cat"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/chinese-apt-ta413-resumes-targeting-tibet-following-covid-19-themed-economic",
            "date": "2020-09-02",
            "organization": "Proofpoint",
            "author": "Proofpoint",
            "title": "Chinese APT TA413 Resumes Targeting of Tibet Following COVID-19 Themed Economic Espionage Campaign Delivering Sepulcher Malware Targeting Europe",
            "categories": [
                "Sepulcher",
                "Lucky Cat"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2019/02/exilerat-shares-c2-with-luckycat.html",
            "date": "2019-02-04",
            "organization": "Cisco",
            "author": "Warren Mercer",
            "title": "ExileRAT shares C2 with LuckyCat, targets Tibet",
            "categories": [
                "LuckyCat",
                "Exile RAT"
            ]
        },
        {
            "data_url": "https://vx-underground.org/papers/luckycat-hackers-12-en.pdf",
            "date": "2012-03",
            "organization": "Symantec",
            "author": "Symantec",
            "title": "The Luckycat Hackers",
            "categories": [
                "Lucky Cat"
            ]
        },
        {
            "data_url": "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp_luckycat_redux.pdf",
            "date": "2012",
            "organization": "Trend Micro",
            "author": "Forward-Looking Threat Research Team",
            "title": "Inside an APT Campaign with Multiple Targets in India and Japan",
            "categories": [
                "Lucky Cat"
            ]
        },
        {
            "data_url": "https://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/the_luckycat_hackers.pdf",
            "date": "2012",
            "organization": "Symantec",
            "author": "Various",
            "title": "The Luckycat Hackers",
            "categories": [
                "Lucky Cat"
            ]
        }
    ]
};