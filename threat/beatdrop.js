var threatdata = {
    "name": "BEATDROP",
    "alias": "BEATDROP",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2023-07-26",
    "all_data": {
        "tool": "BEATDROP",
        "names": [
            {
                "name": "BEATDROP"
            }
        ],
        "description": "(Mandiant) BEATDROP is a downloader written in C that makes use of Trello for C2. Once executed, BEATDROP first maps its own copy of `ntdll.dll` into memory for the purpose of executing shellcode in its own process. BEATDROP first creates a suspended thread with RtlCreateUserThread which points to NtCreateFile.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://www.mandiant.com/resources/blog/tracking-apt29-phishing-campaigns"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.beatdrop"
        ],
        "uuid": "4ddb55da-9631-4eb5-972d-a1627d807f46",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "beatdrop",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://mp.weixin.qq.com/s?__biz=MzUyMDEyNTkwNA%3D%3D&mid=2247494783&idx=1&sn=612cf3cea1ef62e04bfb6bd0ce3b6b65&chksm=f9ed80c0ce9a09d6f5edc1424df5260cb9a9cf55fe92bd922407eef960650e91ec8cc46933ab&scene=178&cur_album_id=1375769135073951745",
            "date": "2023-07-26",
            "organization": "Weixin",
            "author": "Anheng Threat Intelligence Center",
            "title": "APT29 recently faked the German embassy and issued a malicious PDF file",
            "categories": [
                "BEATDROP",
                "Unidentified 107 (APT29)"
            ]
        },
        {
            "data_url": "https://mrtiepolo.medium.com/sophisticated-apt29-campaign-abuses-notion-api-to-target-the-european-commission-200188059f58",
            "date": "2023-03-10",
            "organization": "Mrtiepolo",
            "author": "Gianluca Tiepolo",
            "title": "Sophisticated APT29 Campaign Abuses Notion API to Target the European Commission",
            "categories": [
                "BEATDROP",
                "EnvyScout",
                "GraphicalNeutrino",
                "tDiscoverer",
                "VaporRage"
            ]
        },
        {
            "data_url": "https://www.incibe-cert.es/sites/default/files/contenidos/estudios/doc/incibe-cert_estudio_analisis_nobelium_2022_v1.pdf",
            "date": "2022-09-06",
            "organization": "INCIBE-CERT",
            "author": "INCIBE",
            "title": "Estudio del an\u00e1lisis de Nobelium",
            "categories": [
                "BEATDROP",
                "BOOMBOX",
                "Cobalt Strike",
                "EnvyScout",
                "Unidentified 099 (APT29 Dropbox Loader)",
                "VaporRage"
            ]
        },
        {
            "data_url": "https://r136a1.info/2022/07/19/a-look-into-apt29s-new-early-stage-google-drive-downloader/",
            "date": "2022-07-19",
            "organization": "R136a1",
            "author": "Dominik Reichel",
            "title": "A look into APT29's new early-stage Google Drive downloader",
            "categories": [
                "BEATDROP",
                "BOOMBOX",
                "Gdrive",
                "Unidentified 098 (APT29 Slack Downloader)"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/blog/tracking-apt29-phishing-campaigns",
            "date": "2022-04-29",
            "organization": "Mandiant",
            "author": "John Wolfram",
            "title": "Trello From the Other Side: Tracking APT29 Phishing Campaigns",
            "categories": [
                "BEATDROP",
                "VaporRage"
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