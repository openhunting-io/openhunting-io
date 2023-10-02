var threatdata = {
    "name": "Licat",
    "alias": "Licat, Murofet",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Credential stealer, Botnet",
    "modified": "2022-04-27",
    "all_data": {
        "tool": "Licat",
        "names": [
            {
                "name": "Licat"
            },
            {
                "name": "Murofet"
            }
        ],
        "description": "(johannesbader) Murofet, also called LICAT, is a member of the {{Zeus}} family. It uses a Domain Generation Algorithm (DGA) to determine the current C2 domain names. There exist at least three different versions of Murofet\u2019s DGA, some of which I couldn\u2019t find reimplementations online. In this short blog post I list the three variants that I looked at and discuss the properties of each. Although all versions share a similar algorithm, the resulting domains are very different.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://johannesbader.ch/blog/three-variants-of-murofets-dga/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.murofet"
        ],
        "uuid": "fc0c4e94-c35f-4245-80b1-6862ce4cd9fa",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "licat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cert.ssi.gouv.fr/uploads/20220427_NP_TLPWHITE_ANSSI_FIN7.pdf",
            "date": "2022-04-27",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "LE GROUPE CYBERCRIMINEL FIN7",
            "categories": [
                "Bateleur",
                "BELLHOP",
                "Griffon",
                "SQLRat",
                "POWERSOURCE",
                "Andromeda",
                "BABYMETAL",
                "BlackCat",
                "BlackMatter",
                "BOOSTWRITE",
                "Carbanak",
                "Cobalt Strike",
                "DNSMessenger",
                "Dridex",
                "DRIFTPIN",
                "Gameover P2P",
                "MimiKatz",
                "Murofet",
                "Qadars",
                "Ranbyus",
                "SocksBot"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-008.pdf",
            "date": "2020-07-17",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "The Malware Dridex: Origins and Uses",
            "categories": [
                "Andromeda",
                "CryptoLocker",
                "Cutwail",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FriedEx",
                "Gameover P2P",
                "Gandcrab",
                "ISFB",
                "Murofet",
                "Necurs",
                "Predator The Thief",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/evolution-of-the-gold-evergreen-threat-group",
            "date": "2017-05-15",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Evolution of the GOLD EVERGREEN Threat Group",
            "categories": [
                "CryptoLocker",
                "Dridex",
                "Dyre",
                "Gameover P2P",
                "Murofet",
                "TrickBot",
                "Zeus",
                "GOLD EVERGREEN"
            ]
        },
        {
            "data_url": "https://www.wired.com/2017/03/russian-hacker-spy-botnet/",
            "date": "2017-03-21",
            "organization": "Wired",
            "author": "Garrett M. Graff",
            "title": "Inside the Hunt  for Russia\u2019s Most  Notorious Hacker",
            "categories": [
                "Gameover P2P",
                "Murofet",
                "Zeus"
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