var threatdata = {
    "name": "METALJACK",
    "alias": "METALJACK, denesRAT",
    "category": "Malware",
    "type": "Loader, Reconnaissance, Backdoor",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "METALJACK",
        "names": [
            {
                "name": "METALJACK"
            },
            {
                "name": "denesRAT"
            }
        ],
        "description": "(FireEye) The malware also loads shellcode in an additional resource, which contains the METALJACK payload. The shellcode performs a system survey to collect the victim's computer name and username and then appends those values to a URL string using libjs.inquirerjs[.]com. It then attempts to call out to the URL. If the callout is successful, the malware loads the METALJACK payload into memory.",
        "category": "Malware",
        "type": [
            "Loader",
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2020/04/apt32-targeting-chinese-government-in-covid-19-related-espionage.html",
            "https://go.recordedfuture.com/hubfs/reports/cta-2020-1110.pdf",
            "https://ti.qianxin.com/blog/articles/coronavirus-analysis-of-global-outbreak-related-cyber-attacks/",
            "https://s.tencent.com/research/report/944.html",
            "https://www.secrss.com/articles/17900",
            "https://www.pwc.co.uk/cyber-security/pdf/pwc-cyber-threats-2020-a-year-in-retrospect.pdf",
            "https://m.threatbook.cn/detail/2527",
            "https://www.youtube.com/watch?v=ftjDH65kw6E",
            "https://blog.viettelcybersecurity.com/apt32-deobfuscation-arsenal-deobfuscating-mot-vai-loai-obfucation-toolkit-cua-apt32-phan-1/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.metaljack"
        ],
        "uuid": "9454a6a5-f24f-456a-970b-89182881719f",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "metaljack",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/pdf/pwc-cyber-threats-2020-a-year-in-retrospect.pdf",
            "date": "2021-02-28",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2020: A Year in Retrospect",
            "categories": [
                "elf.wellmess",
                "FlowerPower",
                "PowGoop",
                "8.t Dropper",
                "Agent.BTZ",
                "Agent Tesla",
                "Appleseed",
                "Ave Maria",
                "Bankshot",
                "BazarBackdoor",
                "BLINDINGCAN",
                "Chinoxy",
                "Conti",
                "Cotx RAT",
                "Crimson RAT",
                "DUSTMAN",
                "Emotet",
                "FriedEx",
                "FunnyDream",
                "Hakbit",
                "Mailto",
                "Maze",
                "METALJACK",
                "Nefilim",
                "Oblique RAT",
                "Pay2Key",
                "PlugX",
                "QakBot",
                "REvil",
                "Ryuk",
                "StoneDrill",
                "StrongPity",
                "SUNBURST",
                "SUPERNOVA",
                "TrickBot",
                "TurlaRPC",
                "Turla SilentMoon",
                "WastedLocker",
                "WellMess",
                "Winnti",
                "ZeroCleare",
                "APT10",
                "APT23",
                "APT27",
                "APT31",
                "APT41",
                "BlackTech",
                "BRONZE EDGEWOOD",
                "Inception Framework",
                "MUSTANG PANDA",
                "Red Charon",
                "Red Nue",
                "Sea Turtle",
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2020-1110.pdf",
            "date": "2020-11-10",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "New APT32 Malware Campaign Targets Cambodian Government",
            "categories": [
                "KerrDown",
                "METALJACK",
                "SOUNDBITE"
            ]
        },
        {
            "data_url": "https://blog.viettelcybersecurity.com/apt32-deobfuscation-arsenal-deobfuscating-mot-vai-loai-obfucation-toolkit-cua-apt32-phan-1/",
            "date": "2020-09-02",
            "organization": "Viettel Cybersecurity",
            "author": "vuonglvm",
            "title": "APT32 deobfuscation arsenal: Deobfuscating m\u1ed9t v\u00e0i lo\u1ea1i Obfucation Toolkit c\u1ee7a APT32 (Ph\u1ea7n 1)",
            "categories": [
                "METALJACK",
                "SOUNDBITE"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=ftjDH65kw6E",
            "date": "2020-05-26",
            "organization": "Youtube (GRIMM Cyber)",
            "author": "Konstantin Klinger",
            "title": "Passive DNS for Threat Detection & Hunting (Discussing some infrastructure related to APT32)",
            "categories": [
                "METALJACK"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2020/04/apt32-targeting-chinese-government-in-covid-19-related-espionage.html",
            "date": "2020-04-22",
            "organization": "FireEye",
            "author": "Scott Henderson",
            "title": "Vietnamese Threat Actors APT32 Targeting Wuhan Government and Chinese Ministry of Emergency Management in Latest Example of COVID-19 Related Espionage",
            "categories": [
                "METALJACK"
            ]
        },
        {
            "data_url": "https://s.tencent.com/research/report/944.html",
            "date": "2020-03-26",
            "organization": "Tencent",
            "author": "Tencent",
            "title": "Summary of recent APT attack activities using \"New Crown Outbreak (COVID-19)\" as bait",
            "categories": [
                "METALJACK"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/blog/articles/coronavirus-analysis-of-global-outbreak-related-cyber-attacks/",
            "date": "2020-03-26",
            "organization": "Qianxin",
            "author": "Red Raindrop Team",
            "title": "COVID-19 | Analysis Report of Global Epidemic-Related Cyber \u200b\u200bAttacks Covered by New Crown Virus",
            "categories": [
                "METALJACK"
            ]
        },
        {
            "data_url": "https://www.secrss.com/articles/17900",
            "date": "2020-03-05",
            "organization": "secrss",
            "author": "unknown",
            "title": "Vietnam National Background APT organization \"Sea Lotus\" used the topic of the epidemic to attack our government agencies",
            "categories": [
                "METALJACK"
            ]
        },
        {
            "data_url": "https://m.threatbook.cn/detail/2527",
            "date": "2020-03-05",
            "organization": "Microstep Intelligence Bureau",
            "author": "Microstep Intelligence Bureau",
            "title": "Vietnam National Background APT organization \"Sea Lotus\" used the topic of the epidemic to attack our government agencies",
            "categories": [
                "METALJACK"
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