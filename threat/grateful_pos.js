var threatdata = {
    "name": "Grateful POS",
    "alias": "Grateful POS, TRINITY",
    "category": "Malware",
    "type": "POS malware, Info stealer",
    "modified": "2021",
    "all_data": {
        "tool": "Grateful POS",
        "names": [
            {
                "name": "Grateful POS"
            },
            {
                "name": "TRINITY"
            }
        ],
        "description": "POS malware targets systems that run physical point-of-sale device and operates by inspecting the process memory for data that matches the structure of credit card data (Track1 and Track2 data), such as the account number, expiration date, and other information stored on a card\u2019s magnetic stripe. After the cards are first scanned, the personal account number (PAN) and accompanying data sit in the point-of-sale system\u2019s memory unencrypted while the system determines where to send it for authorization.\nMasked as the LogMein software, the GratefulPOS malware appears to have emerged during the fall 2017 shopping season with low detection ratio according to some of the earliest detections displayed on VirusTotal. The first sample was upload in November 2017. Additionally, this malware appears to be related to the {{BlackPOS}} malware, which was linked to some of the high-profile merchant breaches in the past.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Info stealer"
        ],
        "information": [
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt-fin6.pdf",
            "https://www.vkremez.com/2017/12/lets-learn-reversing-grateful-point-of.html",
            "https://community.rsa.com/community/products/netwitness/blog/2017/12/08/gratefulpos-credit-card-stealing-malware-just-in-time-for-the-shopping-season"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.grateful_pos"
        ],
        "uuid": "5fd2dd27-ea9b-4c29-b6fd-b64ee1a5c0bb",
        "last-card-change": "2020-05-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "grateful_pos",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/gold-franklin",
            "date": "2021",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "Threat Profile: GOLD FRANKLIN",
            "categories": [
                "Grateful POS",
                "Meterpreter",
                "MimiKatz",
                "RemCom",
                "FIN6"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/assets/cyber-threats-2019-retrospect.pdf",
            "date": "2020-03-03",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2019:A Year in Retrospect",
            "categories": [
                "KevDroid",
                "MESSAGETAP",
                "magecart",
                "AndroMut",
                "Cobalt Strike",
                "CobInt",
                "Crimson RAT",
                "DNSpionage",
                "Dridex",
                "Dtrack",
                "Emotet",
                "FlawedAmmyy",
                "FlawedGrace",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Grateful POS",
                "ISFB",
                "Kazuar",
                "LockerGoga",
                "Nokki",
                "QakBot",
                "Ramnit",
                "REvil",
                "Rifdoor",
                "RokRAT",
                "Ryuk",
                "shadowhammer",
                "ShadowPad",
                "Shifu",
                "Skipper",
                "StoneDrill",
                "Stuxnet",
                "TrickBot",
                "Winnti",
                "ZeroCleare",
                "APT41",
                "MUSTANG PANDA",
                "Sea Turtle"
            ]
        },
        {
            "data_url": "https://content.fireeye.com/m-trends/rpt-m-trends-2020",
            "date": "2020-02-19",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "M-Trends 2020",
            "categories": [
                "Cobalt Strike",
                "Grateful POS",
                "LockerGoga",
                "QakBot",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/uploads/2020/02/13/cb78386a082f465f259b37dae5df4884.pdf",
            "date": "2020-02-13",
            "organization": "Qianxin",
            "author": "Qi Anxin Threat Intelligence Center",
            "title": "APT Report 2019",
            "categories": [
                "Chrysaor",
                "Exodus",
                "Dacls",
                "VPNFilter",
                "DNSRat",
                "Griffon",
                "KopiLuwak",
                "More_eggs",
                "SQLRat",
                "AppleJeus",
                "BONDUPDATER",
                "Agent.BTZ",
                "Anchor",
                "AndroMut",
                "AppleJeus",
                "BOOSTWRITE",
                "Brambul",
                "Carbanak",
                "Cobalt Strike",
                "Dacls",
                "DistTrack",
                "DNSpionage",
                "Dtrack",
                "ELECTRICFISH",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Grateful POS",
                "HOPLIGHT",
                "Imminent Monitor RAT",
                "jason",
                "Joanap",
                "KerrDown",
                "KEYMARBLE",
                "Lambert",
                "LightNeuron",
                "LoJax",
                "MiniDuke",
                "PolyglotDuke",
                "PowerRatankba",
                "Rising Sun",
                "SDBbot",
                "ServHelper",
                "Snatch",
                "Stuxnet",
                "TinyMet",
                "tRat",
                "TrickBot",
                "Volgmer",
                "X-Agent",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://norfolkinfosec.com/pos-malware-used-at-fuel-pumps/",
            "date": "2019-12-23",
            "organization": "",
            "author": "Norfolk",
            "title": "POS Malware Used at Fuel Pumps",
            "categories": [
                "Grateful POS"
            ]
        },
        {
            "data_url": "https://usa.visa.com/dam/VCOM/global/support-legal/documents/cybercrime-groups-targeting-fuel-dispenser-merchants.pdf",
            "date": "2019-12",
            "organization": "VISA",
            "author": "Visa Security Alert",
            "title": "Cybercrime Groups (FIN8) Targeting Fuel Dispenser Merchants",
            "categories": [
                "Grateful POS"
            ]
        },
        {
            "data_url": "https://redcanary.com/blog/frameworkpos-and-the-adequate-persistent-threat/",
            "date": "2019-05-01",
            "organization": "Red Canary",
            "author": "Tony Lambert",
            "title": "FrameworkPOS and the adequate persistent threat",
            "categories": [
                "Grateful POS"
            ]
        },
        {
            "data_url": "http://www.vkremez.com/2017/12/lets-learn-reversing-grateful-point-of.html",
            "date": "2017-12-13",
            "organization": "Vitali Kremez Blog",
            "author": "Vitali Kremez",
            "title": "Update: Let's Learn: Reversing FIN6 \"GratefulPOS\" aka \"FrameworkPOS\" Point-of-Sale Malware in-Depth",
            "categories": [
                "Grateful POS"
            ]
        },
        {
            "data_url": "https://community.rsa.com/community/products/netwitness/blog/2017/12/08/gratefulpos-credit-card-stealing-malware-just-in-time-for-the-shopping-season",
            "date": "2017-12-08",
            "organization": "RSA",
            "author": "Kent Beckman",
            "title": "GratefulPOS credit card stealing malware - just in time for the shopping season",
            "categories": [
                "Grateful POS"
            ]
        },
        {
            "data_url": "https://www2.fireeye.com/rs/848-DID-242/images/rpt-fin6.pdf",
            "date": "2016-04",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "Follow the Money: Dissecting the Operations of the Cyber Crime Group FIN6",
            "categories": [
                "Grateful POS",
                "FIN6"
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