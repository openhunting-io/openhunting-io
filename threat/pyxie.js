var threatdata = {
    "name": "PyXie",
    "alias": "PyXie, PyXie RAT",
    "category": "Malware",
    "type": "Backdoor, Loader",
    "modified": "2022-05-17",
    "all_data": {
        "tool": "PyXie",
        "names": [
            {
                "name": "PyXie"
            },
            {
                "name": "PyXie RAT"
            }
        ],
        "description": "(BlackBerry) PyXie has been deployed in an ongoing campaign that targets a wide range of industries. It has been seen in conjunction with {{Cobalt Strike}} beacons as well as a downloader that has similarities to the {{Shifu}} banking Trojan. Analysts have observed evidence of the threat actors attempting to deliver ransomware to the healthcare and education industries with PyXie.\n\nKey highlights of the PyXie campaign include:\n\u2022 Legitimate LogMeIn and Google binaries used to sideload payloads.\n\u2022 A Trojanized Tetris app to load and execute Cobalt Strike stagers from internal network shares.\n\u2022 Use of a downloader with similarities to Shifu named 'Cobalt Mode'.\n\u2022 Use of {{SharpHound}} to collect active directory information from victims.\n\u2022 A custom compiled Python interpreter that uses scrambled opcodes to hinder analysis.\n\u2022 Use of a modified RC4 algorithm to encrypt payloads with a unique key per infected host.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Loader"
        ],
        "information": [
            "https://blogs.blackberry.com/en/2019/12/meet-pyxie-a-nefarious-new-python-rat"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pyxie"
        ],
        "uuid": "4e675551-3b29-4764-819b-0b8b68e3dcb4",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pyxie",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/ransomware-spotlight/ransomware-spotlight-ransomexx",
            "date": "2022-05-17",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "Ransomware Spotlight: RansomEXX",
            "categories": [
                "LaZagne",
                "Cobalt Strike",
                "IcedID",
                "MimiKatz",
                "PyXie",
                "RansomEXX",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://cluster25.io/2022/05/03/a-strange-link-between-a-destructive-malware-and-the-loader-of-a-ransomware-group-isaacwiper-vs-vatet/",
            "date": "2022-05-03",
            "organization": "Cluster25",
            "author": "Cluster25",
            "title": "The Strange Link Between A Destructive Malware And A Ransomware-Gang Linked Custom Loader: IsaacWiper Vs Vatet",
            "categories": [
                "Cobalt Strike",
                "IsaacWiper",
                "PyXie"
            ]
        },
        {
            "data_url": "https://www.ic3.gov/Media/News/2021/211101.pdf",
            "date": "2021-11-01",
            "organization": "FBI",
            "author": "FBI",
            "title": "PIN Number 20211101-001: Ransomware Actors Use Significant Financial Events and Stock Valuation to Facilitate Targeting and Extortion of Victims",
            "categories": [
                "DarkSide",
                "RansomEXX",
                "DarkSide",
                "PyXie",
                "RansomEXX"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-sprite-spider-target-esxi-servers-with-ransomware/?utm_campaign=blog&utm_medium=soc&utm_source=twtr&utm_content=sprout",
            "date": "2021-02-26",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "Hypervisor Jackpotting: CARBON SPIDER and SPRITE SPIDER Target ESXi Servers With Ransomware to Maximize Impact",
            "categories": [
                "DarkSide",
                "RansomEXX",
                "Griffon",
                "Carbanak",
                "Cobalt Strike",
                "DarkSide",
                "IcedID",
                "MimiKatz",
                "PyXie",
                "RansomEXX",
                "REvil"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2021GTR.pdf",
            "date": "2021-02-23",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2021 Global Threat Report",
            "categories": [
                "RansomEXX",
                "Amadey",
                "Anchor",
                "Avaddon",
                "BazarBackdoor",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "Cutwail",
                "DanaBot",
                "DarkSide",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "Hakbit",
                "IcedID",
                "JSOutProx",
                "KerrDown",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "NedDnLoader",
                "Nemty",
                "Pay2Key",
                "PlugX",
                "Pushdo",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "Quasar RAT",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet",
                "ShadowPad",
                "SmokeLoader",
                "Snake",
                "SUNBURST",
                "SunCrypt",
                "TEARDROP",
                "TrickBot",
                "WastedLocker",
                "Winnti",
                "Zloader",
                "KNOCKOUT SPIDER",
                "OUTLAW SPIDER",
                "RIDDLE SPIDER",
                "SOLAR SPIDER",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://www.cronup.com/post/de-ataque-con-malware-a-incidente-de-ransomware",
            "date": "2021-02-02",
            "organization": "CRONUP",
            "author": "Germ\u00e1n Fern\u00e1ndez",
            "title": "De ataque con Malware a incidente de Ransomware",
            "categories": [
                "Avaddon",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DanaBot",
                "Dharma",
                "Dridex",
                "Egregor",
                "Emotet",
                "Empire Downloader",
                "FriedEx",
                "GootKit",
                "IcedID",
                "MegaCortex",
                "Nemty",
                "Phorpiex",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "SDBbot",
                "SmokeLoader",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/vatet-pyxie-defray777/4",
            "date": "2020-11-06",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Ryan Tracey",
            "title": "Linking Vatet, PyXie and Defray777",
            "categories": [
                "PyXie",
                "RansomEXX"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/vatet-pyxie-defray777/2/",
            "date": "2020-11-06",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Ryan Tracey",
            "title": "Next Up: \u201cPyXie Lite\u201d",
            "categories": [
                "Defray",
                "PyXie"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/vatet-pyxie-defray777/3",
            "date": "2020-11-06",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Ryan Tracey",
            "title": "Last, but Not Least: Defray777",
            "categories": [
                "PyXie",
                "RansomEXX"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/vatet-pyxie-defray777/",
            "date": "2020-11-06",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Ryan Tracey",
            "title": "When Threat Actors Fly Under the Radar: Vatet, PyXie and Defray777",
            "categories": [
                "PyXie",
                "RansomEXX"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/vatet-pyxie-defray777/5/",
            "date": "2020-11-06",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Ryan Tracey",
            "title": "Indicators of Compromise related to Cobaltstrike, PyXie Lite, Vatet and Defray777",
            "categories": [
                "Cobalt Strike",
                "PyXie",
                "RansomEXX"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-dupont",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD DUPONT",
            "categories": [
                "Cobalt Strike",
                "Defray",
                "PyXie",
                "GOLD DUPONT"
            ]
        },
        {
            "data_url": "https://threatvector.cylance.com/en_us/home/meet-pyxie-a-nefarious-new-python-rat.html",
            "date": "2019-12-02",
            "organization": "Cylance",
            "author": "Ryan Tracey",
            "title": "Meet PyXie: A Nefarious New Python RAT",
            "categories": [
                "PyXie"
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