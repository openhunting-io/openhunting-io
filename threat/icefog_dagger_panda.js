var threatdata = {
    "name": "Icefog, Dagger Panda",
    "alias": "Icefog, Dagger Panda, ATK 23",
    "category": "APT",
    "type": "-",
    "modified": "2021-06-16",
    "all_data": {
        "actor": "Icefog, Dagger Panda",
        "names": [
            {
                "name": "Icefog",
                "name-giver": "Kaspersky"
            },
            {
                "name": "Dagger Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "ATK 23",
                "name-giver": "Thales"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2011",
        "description": "(Kaspersky) \u201cIcefog\u201d is an Advanced Persistent Threat that has been active since at least 2011, targeting mostly Japan and South Korea. Known targets include governmental institutions, military contractors, maritime and shipbuilding groups, telecom operators, industrial and high-tech companies and mass media. The name \u201cIcefog\u201d comes from a string used in the command-and-control server name in one of the samples. The command-and-control software is named \u201cDagger Three\u201d, in the Chinese language.\n\nDuring Icefog attacks, several other malicious tools and backdoors were uploaded to the victims\u2019 machines, for data exfiltration and lateral movement.\n\nThe later group {{RedAlpha}} has infrastructure overlap with Icefog.",
        "observed-sectors": [
            "Aerospace",
            "Defense",
            "Government",
            "High-Tech",
            "Maritime and Shipbuilding",
            "Media",
            "Telecommunications",
            "Utilities",
            "others"
        ],
        "observed-countries": [
            "Australia",
            "Austria",
            "Belarus",
            "Canada",
            "China",
            "France",
            "Germany",
            "Hong Kong",
            "India",
            "Italy",
            "Japan",
            "Kazakhstan",
            "Malaysia",
            "Maldives",
            "Mongolia",
            "Netherlands",
            "Pakistan",
            "Philippines",
            "Russia",
            "Singapore",
            "South Korea",
            "Sri Lanka",
            "Taiwan",
            "Tajikistan",
            "Turkey",
            "UK",
            "USA",
            "Uzbekistan"
        ],
        "tools": [
            "8.t Dropper",
            "Dagger Three",
            "Icefog",
            "Javafog",
            "ShadowPad Winnti"
        ],
        "operations": [
            {
                "date": "2014-01",
                "activity": "The Icefog APT Hits US Targets With Java Backdoor\nSince the publication of our report, the Icefog attackers went completely dark, shutting down all known command-and-control servers. Nevertheless, we continued to monitor the operation by sinkholing domains and  nalyzing victim connections. During this monitoring, we observed an interesting type of connection which seemed to indicate a Java version of Icefog, further to be referenced as \u201cJavafog\u201d.\nhttps://securelist.com/the-icefog-apt-hits-us-targets-with-java-backdoor/58209/"
            },
            {
                "date": "2015",
                "activity": "\u201cTOPNEWS\u201d Campaign\nTarget: Government, media, and finance organizations in Russia and Mongolia."
            },
            {
                "date": "2016",
                "activity": "\u201cAPPER\u201d Campaign\nTarget: Kazach officials."
            },
            {
                "date": "2018",
                "activity": "\u201cWATERFIGHT\u201d Campaign\nTarget: Water source provider, banks, and government entities in Turkey, India, Kazakhstan, Uzbekistan, and Tajikistan."
            },
            {
                "date": "2018",
                "activity": "\u201cPHKIGHT\u201d Campaign\nTarget: An unknown entity in the Philippines."
            },
            {
                "date": "2018/2019",
                "activity": "\u201cSKYLINE\u201d Campaign\nTarget: Organizations in Turkey and Kazakhstan.\nhttps://www.zdnet.com/article/ancient-icefog-apt-malware-spotted-again-in-new-wave-of-attacks/"
            }
        ],
        "information": [
            "https://media.kaspersky.com/en/icefog-apt-threat.pdf",
            "https://d2538mqrb7brka.cloudfront.net/wp-content/uploads/sites/43/2018/03/20133739/icefog.pdf",
            "https://speakerdeck.com/ashley920/into-the-fog-the-return-of-icefog-apt"
        ],
        "uuid": "d311b620-e98f-4210-b136-cd24749584b0",
        "last-card-change": "2021-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "icefog_dagger_panda",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2021-0616.pdf",
            "date": "2021-06-16",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "Threat Activity Group RedFoxtrot Linked to China\u2019s PLA Unit 69010;  Targets Bordering Asian Countries",
            "categories": [
                "Icefog",
                "PcShare",
                "PlugX",
                "Poison Ivy",
                "QuickHeal",
                "DAGGER PANDA"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2021-0228.pdf",
            "date": "2021-02-28",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "China-Linked Group RedEcho Targets the Indian Power Sector Amid Heightened Border Tensions",
            "categories": [
                "Icefog",
                "PlugX",
                "ShadowPad"
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
            "data_url": "https://www.slideshare.net/codeblue_jp/cb19-cyber-threat-landscape-in-japan-revealing-threat-in-the-shadow-by-chi-en-shen-ashley-oleg-bondarenko",
            "date": "2019-12-12",
            "organization": "FireEye",
            "author": "Chi-en Shen",
            "title": "Cyber Threat Landscape in Japan \u2013 Revealing Threat in the Shadow",
            "categories": [
                "Cerberus",
                "TSCookie",
                "Cobalt Strike",
                "Dtrack",
                "Emotet",
                "Formbook",
                "IcedID",
                "Icefog",
                "IRONHALO",
                "Loki Password Stealer (PWS)",
                "PandaBanker",
                "PLEAD",
                "poisonplug",
                "TrickBot",
                "BlackTech"
            ]
        },
        {
            "data_url": "https://speakerdeck.com/ashley920/into-the-fog-the-return-of-icefog-apt",
            "date": "2019-06-03",
            "organization": "FireEye",
            "author": "Chi-en Shen",
            "title": "Into the Fog - The Return of ICEFOG APT",
            "categories": [
                "Icefog",
                "PlugX",
                "Sarhust"
            ]
        },
        {
            "data_url": "http://www.kz-cert.kz/page/502",
            "date": "2016-09-06",
            "organization": "KZ CERT",
            "author": "KZ CERT",
            "title": "KZ-CERT has analyzed another sample of malicious software, which is a component of targeted attacks (Targeted attacks, Advanced Persistent Threats (APT))",
            "categories": [
                "Icefog"
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