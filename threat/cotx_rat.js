var threatdata = {
    "name": "Cotx RAT",
    "alias": "Cotx RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Credential stealer",
    "modified": "2022-08-08",
    "all_data": {
        "tool": "Cotx RAT",
        "names": [
            {
                "name": "Cotx RAT"
            }
        ],
        "description": "(Proofpoint) The RasTls.dll contains the Cotx RAT code. The malware is written in C++ using object-oriented programming. We named it by borrowing the name of the location of its stored configuration. The encrypted configuration is stored in the side-loaded DLL file RasTls.dll in a PE section named \u201c.cotx\u201d. The current encrypted configuration is also stored in the registry key \u201cHKEY_LOCAL_MACHINE\\SOFTWARE\\Intel\\Java\\user\u201d.\n\nThe command and control structure of Cotx RAT is proxy aware. It utilizes wolfSSL for TLS encrypted communication. The initial beacon contains \u201c|\u201d-delimited system information. The data included in the beacon is Zlib compressed and encrypted with AES-192 in CBC mode utilizing the same keys as the configuration. The following values are included:\n\n\u2022 'id' value from 'software\\\\intel\\\\java' subkey\n\u2022 Computer name\n\u2022 'mark' field from configuration\n\u2022 Username\n\u2022 Windows version\n\u2022 Architecture\n\u2022 Possible malware version. '0.9.7' is hardcoded in the analyzed sample\n\u2022 Local IP addresses\n\u2022 First adapter's MAC address\n\u2022 Connection type (https or _proxy)\n\u2022 'password' field from configuration",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Credential stealer"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/chinese-apt-operation-lagtime-it-targets-government-information-technology"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cotx"
        ],
        "uuid": "071fed27-3361-4b37-a553-8e32c65482c8",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cotx_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://ics-cert.kaspersky.com/media/Kaspersky-ICS-CERT-Targeted-attack-on-industrial-enterprises-and-public-institutions-En.pdf",
            "date": "2022-08-08",
            "organization": "Kaspersky",
            "author": "Kaspersky Lab ICS CERT",
            "title": "Targeted attack on industrial enterprises and public institutions",
            "categories": [
                "Cotx RAT",
                "Logtu",
                "nccTrojan",
                "PortDoor"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_in/research/21/k/analyzing-proxyshell-related-incidents-via-trend-micro-managed-x.html",
            "date": "2021-11-17",
            "organization": "Trend Micro",
            "author": "Mohamed Fahmy",
            "title": "Analyzing ProxyShell-related Incidents via Trend Micro Managed XDR",
            "categories": [
                "Cobalt Strike",
                "Cotx RAT"
            ]
        },
        {
            "data_url": "https://st.drweb.com/static/new-www/news/2021/april/drweb_research_attacks_on_russian_research_institutes_en.pdf",
            "date": "2021-04-02",
            "organization": "Dr.Web",
            "author": "Dr.Web",
            "title": "Study of targeted attacks on Russian research institutes",
            "categories": [
                "Cotx RAT",
                "Ghost RAT",
                "TA428"
            ]
        },
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
            "data_url": "https://www.youtube.com/watch?v=1WfPlgtfWnQ",
            "date": "2021-01-08",
            "organization": "Youtube (Virus Bulletin)",
            "author": "Fumio Ozawa",
            "title": "Operation LagTime IT: colourful Panda footprint",
            "categories": [
                "Cotx RAT",
                "nccTrojan",
                "Poison Ivy",
                "Tmanger",
                "TA428"
            ]
        },
        {
            "data_url": "https://vblocalhost.com/uploads/VB2020-Ozawa-etal.pdf",
            "date": "2020-09-30",
            "organization": "NTT Security",
            "author": "Fumio Ozawa",
            "title": "Operation LagTime IT: colourful Panda footprint",
            "categories": [
                "Cotx RAT",
                "nccTrojan",
                "Poison Ivy",
                "Tmanger"
            ]
        },
        {
            "data_url": "https://vblocalhost.com/uploads/VB2020-20.pdf",
            "date": "2020-09-30",
            "organization": "NTT Security",
            "author": "Fumio Ozawa",
            "title": "Operation LagTime IT: colourful Panda footprint (Slides)",
            "categories": [
                "Cotx RAT",
                "nccTrojan",
                "Poison Ivy",
                "Tmanger"
            ]
        },
        {
            "data_url": "https://vb2020.vblocalhost.com/uploads/VB2020-Ozawa-etal.pdf",
            "date": "2020-08-28",
            "organization": "NTT",
            "author": "Fumio Ozawa",
            "title": "Operation Lagtime IT: Colourful Panda Footprint",
            "categories": [
                "Cotx RAT",
                "Poison Ivy",
                "TA428"
            ]
        },
        {
            "data_url": "https://vb2020.vblocalhost.com/uploads/VB2020-20.pdf",
            "date": "2020-08-19",
            "organization": "NTT Security",
            "author": "Fumio Ozawa",
            "title": "Operation LagTime IT: Colorful Panda Footprint",
            "categories": [
                "8.t Dropper",
                "Cotx RAT",
                "Poison Ivy",
                "TA428"
            ]
        },
        {
            "data_url": "https://nao-sec.org/2020/01/an-overhead-view-of-the-royal-road.html",
            "date": "2020-01-29",
            "organization": "nao_sec blog",
            "author": "nao_sec",
            "title": "An Overhead View of the Royal Road",
            "categories": [
                "BLACKCOFFEE",
                "Cotx RAT",
                "Datper",
                "DDKONG",
                "Derusbi",
                "Icefog",
                "Korlia",
                "NewCore RAT",
                "PLAINTEE",
                "Poison Ivy",
                "Sisfader"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/chinese-apt-operation-lagtime-it-targets-government-information-technology",
            "date": "2019-07-23",
            "organization": "Proofpoint",
            "author": "Michael Raggi",
            "title": "Chinese APT \u201cOperation LagTime IT\u201d Targets Government Information Technology Agencies in Eastern Asia",
            "categories": [
                "8.t Dropper",
                "Cotx RAT",
                "Poison Ivy",
                "TA428"
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