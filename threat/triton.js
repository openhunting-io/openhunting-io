var threatdata = {
    "name": "Triton",
    "alias": "Triton, TRITON, Trisis, TRISIS, HatMan",
    "category": "Malware",
    "type": "ICS malware, Reconnaissance, Backdoor, Downloader, Info stealer, Remote command",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Triton",
        "names": [
            {
                "name": "Triton"
            },
            {
                "name": "TRITON"
            },
            {
                "name": "Trisis"
            },
            {
                "name": "TRISIS"
            },
            {
                "name": "HatMan"
            }
        ],
        "description": "(FireEye) The TRITON attack tool was built with a number of features, including the ability to read and write programs, read and write individual functions and query the state of the SIS controller. However, only some of these capabilities were leveraged in the trilog.exe sample (e.g. the attacker did not leverage all of TRITON\u2019s extensive reconnaissance capabilities).\n\nThe TRITON malware contained the capability to communicate with Triconex SIS controllers (e.g. send specific commands such as halt or read its memory content) and remotely reprogram them with an attacker-defined payload. The TRITON sample Mandiant analyzed added an attacker-provided program to the execution table of the Triconex controller. This sample left legitimate programs in place, expecting the controller to continue operating without a fault or exception. If the controller failed, TRITON would attempt to return it to a running state. If the controller did not recover within a defined time window, this sample would overwrite the malicious program with invalid data to cover its tracks.",
        "category": "Malware",
        "type": [
            "ICS malware",
            "Reconnaissance",
            "Backdoor",
            "Downloader",
            "Info stealer",
            "Remote command"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2017/12/attackers-deploy-new-ics-attack-framework-triton.html",
            "https://www.midnightbluelabs.com/blog/2018/1/16/analyzing-the-triton-industrial-malware",
            "https://dragos.com/blog/trisis/TRISIS-01.pdf",
            "https://ics-cert.us-cert.gov/sites/default/files/documents/MAR-17-352-01%20HatMan%E2%80%94Safety%20System%20Targeted%20Malware_S508C.pdf",
            "https://github.com/ICSrepo/TRISIS-TRITON-HATMAN",
            "https://www.fireeye.com/blog/threat-research/2018/10/triton-attribution-russian-government-owned-lab-most-likely-built-tools.html",
            "https://blogs.cisco.com/security/how-does-triton-attack-triconex-industrial-safety-systems"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0609/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.triton"
        ],
        "uuid": "e331cfc5-45c9-4a74-a79f-dac9c622e39f",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "triton",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/resources/mandiant-red-team-emulates-fin11-tactics",
            "date": "2022-07-26",
            "organization": "Mandiant",
            "author": "Thibault van Geluwe de Berlaere",
            "title": "Mandiant Red Team Emulates FIN11 Tactics To Control Operational Technology Servers",
            "categories": [
                "Clop",
                "Industroyer",
                "MimiKatz",
                "Triton"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/sites/default/files/publications/AA22-110A_Joint_CSA_Russian_State-Sponsored_and_Criminal_Cyber_Threats_to_Critical_Infrastructure_4_20_22_Final.pdf",
            "date": "2022-04-20",
            "organization": "CISA",
            "author": "CISA",
            "title": "AA22-110A Joint CSA: Russian State-Sponsored and Criminal Cyber  Threats to Critical Infrastructure",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "DanaBot",
                "DoppelDridex",
                "Emotet",
                "EternalPetya",
                "GoldMax",
                "Industroyer",
                "Sality",
                "SmokeLoader",
                "TrickBot",
                "Triton",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-110a",
            "date": "2022-04-20",
            "organization": "CISA",
            "author": "CISA",
            "title": "Alert (AA22-110A): Russian State-Sponsored and Criminal Cyber Threats to Critical Infrastructure",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "DanaBot",
                "DoppelDridex",
                "Emotet",
                "EternalPetya",
                "GoldMax",
                "Industroyer",
                "Sality",
                "SmokeLoader",
                "TrickBot",
                "Triton",
                "Zloader",
                "Killnet"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-083a",
            "date": "2022-03-24",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "Alert (AA22-083A) Tactics, Techniques, and Procedures of Indicted State-Sponsored Russian Cyber Actors Targeting the Energy Sector",
            "categories": [
                "Havex RAT",
                "Triton"
            ]
        },
        {
            "data_url": "https://www.ic3.gov/Media/News/2022/220325.pdf",
            "date": "2022-03-24",
            "organization": "FBI",
            "author": "FBI",
            "title": "PIN Number 20220324-001 TRITON Malware Remains Threat to Global Critical Infrastructure Industrial Control Systems (ICS)",
            "categories": [
                "Triton"
            ]
        },
        {
            "data_url": "https://www.domaintools.com/resources/blog/visibility-monitoring-and-critical-infrastructure-security",
            "date": "2021-02-11",
            "organization": "DomainTools",
            "author": "Joe Slowik",
            "title": "Visibility, Monitoring, and Critical Infrastructure Security",
            "categories": [
                "Industroyer",
                "Stuxnet",
                "Triton"
            ]
        },
        {
            "data_url": "https://www.ironnet.com/blog/russian-cyber-attack-campaigns-and-actors",
            "date": "2020-12-21",
            "organization": "IronNet",
            "author": "Adam Hlavek",
            "title": "Russian cyber attack campaigns and actors",
            "categories": [
                "WellMail",
                "elf.wellmess",
                "Agent.BTZ",
                "BlackEnergy",
                "EternalPetya",
                "Havex RAT",
                "Industroyer",
                "Ryuk",
                "Triton",
                "WellMess"
            ]
        },
        {
            "data_url": "https://home.treasury.gov/news/press-releases/sm1162",
            "date": "2020-10-23",
            "organization": "U.S. Department of the Treasury",
            "author": "U.S. Department of the Treasury",
            "title": "Treasury Sanctions Russian Government Research Institution Connected to the Triton Malware",
            "categories": [
                "Triton"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q2-2019/91897/",
            "date": "2019-08-01",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2019",
            "categories": [
                "ZooPark",
                "magecart",
                "POWERSTATS",
                "Chaperone",
                "COMpfun",
                "EternalPetya",
                "FinFisher RAT",
                "HawkEye Keylogger",
                "HOPLIGHT",
                "Microcin",
                "NjRAT",
                "Olympic Destroyer",
                "PLEAD",
                "RokRAT",
                "Triton",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://github.com/ICSrepo/TRISIS-TRITON-HATMAN",
            "date": "2019-04-10",
            "organization": "Github (ICSrepo)",
            "author": "Marcin Dudek",
            "title": "TRISIS / TRITON / HatMan Malware Repository",
            "categories": [
                "Triton"
            ]
        },
        {
            "data_url": "https://www.eenews.net/stories/1060123327/",
            "date": "2019-03-07",
            "organization": "E&E News",
            "author": "Blake Sobczak",
            "title": "The inside story of the world's most dangerous malware",
            "categories": [
                "Triton"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2018/10/triton-attribution-russian-government-owned-lab-most-likely-built-tools.html",
            "date": "2018-10-23",
            "organization": "FireEye",
            "author": "FireEye Intelligence",
            "title": "TRITON Attribution: Russian Government-Owned Lab Most Likely Built Custom Intrusion Tools for TRITON Attackers",
            "categories": [
                "Triton"
            ]
        },
        {
            "data_url": "https://www.sans.org/cyber-security-summit/archives/file/summit-archive-1538425180.pdf",
            "date": "2018-10-01",
            "organization": "SANS Cyber Summit",
            "author": "Andrea Carcano",
            "title": "TRITON: How it Disrupted Safety Systems and Changed the Threat Landscape of Industrial Control Systems, Forever",
            "categories": [
                "Triton"
            ]
        },
        {
            "data_url": "https://www.nozominetworks.com//downloads/US/Nozomi-Networks-TRITON-The-First-SIS-Cyberattack.pdf",
            "date": "2018-08-08",
            "organization": "Nozomi Networks",
            "author": "Alessandro Di Pinto",
            "title": "TRITON: The First ICS Cyber Attack  on Safety Instrument Systems",
            "categories": [
                "Triton"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/sites/default/files/documents/MAR-17-352-01%20HatMan%20-%20Safety%20System%20Targeted%20Malware%20%28Update%20A%29_S508C.PDF",
            "date": "2018-04-10",
            "organization": "NCCIC",
            "author": "NCCIC",
            "title": "MAR-17-352-01 HatMan - Safety System Targeted Malware (Update A)",
            "categories": [
                "Triton"
            ]
        },
        {
            "data_url": "https://www.midnightbluelabs.com/blog/2018/1/16/analyzing-the-triton-industrial-malware",
            "date": "2018-01-16",
            "organization": "Midnight Blue Labs",
            "author": "Jos Wetzels",
            "title": "Analyzing the TRITON industrial malware",
            "categories": [
                "Triton"
            ]
        },
        {
            "data_url": "https://ics-cert.us-cert.gov/sites/default/files/documents/MAR-17-352-01%20HatMan%E2%80%94Safety%20System%20Targeted%20Malware_S508C.pdf",
            "date": "2017-12-18",
            "organization": "NCCIC",
            "author": "NCCIC",
            "title": "Malware Analysis Report on Hatman",
            "categories": [
                "Triton"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/12/attackers-deploy-new-ics-attack-framework-triton.html",
            "date": "2017-12-14",
            "organization": "FireEye",
            "author": "Blake Johnson",
            "title": "Attackers Deploy New ICS Attack Framework \u201cTRITON\u201d and Cause Operational Disruption to Critical Infrastructure",
            "categories": [
                "Triton",
                "TEMP.Veles"
            ]
        },
        {
            "data_url": "https://dragos.com/blog/trisis/TRISIS-01.pdf",
            "date": "2017-12-13",
            "organization": "Dragos",
            "author": "Dragos",
            "title": "TRISIS Malware: Analysis of Safety System Targeted Malware",
            "categories": [
                "Triton"
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