var threatdata = {
    "name": "TA428",
    "alias": "TA428, Panda, ThunderCats",
    "category": "APT",
    "type": "-",
    "modified": "2022-09-12",
    "all_data": {
        "actor": "TA428",
        "names": [
            {
                "name": "TA428",
                "name-giver": "Proofpoint"
            },
            {
                "name": "Panda",
                "name-giver": "NTT"
            },
            {
                "name": "ThunderCats",
                "name-giver": "SentinelLabs"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2013",
        "description": "(Proofpoint) Proofpoint researchers initially identified email campaigns with malicious RTF document attachments targeting East Asian government agencies in March 2019. These campaigns originated from adversary-operated free email sender accounts at yahoo[.]co[.].jp and yahoo[.]com. Sender addresses often imitated common names found in the languages of targeted entities. Spear phishing emails included malicious .doc attachments that were actually RTF files saved with .doc file extensions.\n\nThe lures used in the subjects, attachment names, and attachment content in several cases utilized information technology themes specific to Asia such as governmental or public training documents relating to IT. On one specific occasion an email utilized the subject \u201cITU Asia-Pacific Online CoE Training Course on \u2018Conformity & Interoperability in 5G\u2019 for the Asia-Pacific Region, 15-26 April 2019\u201d and the attachment name \u201c190315_annex 1 online_course_agenda_coei_c&i.doc\u201d. The conference referenced in the lure was an actual event likely selected due to its relevance to potential victims. This is significant as countries in the APAC region continue to adopt Chinese 5G technology in government as well as heavy equipment industries.\n\nThis actor worked together with {{Emissary Panda, APT 27, LuckyMouse, Bronze Union}} in Operation StealthyTrident.",
        "observed-sectors": [
            "Government",
            "industrial plants, design bureaus and research institutes"
        ],
        "observed-countries": [
            "Afghanistan",
            "Belarus",
            "Mongolia",
            "Russia",
            "Ukraine",
            "East Asia"
        ],
        "tools": [
            "8.t Dropper",
            "Albaniiutas",
            "Cotx RAT",
            "CoughingDown",
            "PhantomNet",
            "PlugX",
            "Poison Ivy",
            "TManger"
        ],
        "operations": [
            {
                "date": "2019-03",
                "activity": "Operation \u201cLagTime IT\u201d\nAttackers relied on Microsoft Equation Editor exploit CVE-2018-0798 to deliver a custom malware that Proofpoint researchers have dubbed Cotx RAT.\nAdditionally, this APT group utilizes Poison Ivy payloads that share overlapping command and control (C&C) infrastructure with the newly identified Cotx campaigns.\nhttps://www.proofpoint.com/us/threat-insight/post/chinese-apt-operation-lagtime-it-targets-government-information-technology\nhttps://insight-jp.nttsecurity.com/post/102gi9b/pandas-new-arsenal-part-1-tmanger"
            },
            {
                "date": "2020-06",
                "activity": "Operation \u201cStealthyTrident\u201d\nESET researchers discovered that chat software called Able Desktop, part of a business management suite popular in Mongolia and used by 430 government agencies in Mongolia.\nhttps://www.welivesecurity.com/2020/12/10/luckymouse-ta428-compromise-able-desktop/\nhttps://decoded.avast.io/luigicamastra/apt-group-targeting-governmental-agencies-in-east-asia/"
            },
            {
                "date": "2020-12",
                "activity": "China-linked TA428 Continues to Target Russia and Mongolia IT Companies\nhttps://www.recordedfuture.com/china-linked-ta428-threat-group/"
            },
            {
                "date": "2021-05",
                "activity": "ThunderCats Hack the FSB\nhttps://labs.sentinelone.com/thundercats-hack-the-fsb-your-taxes-didnt-pay-for-this-op/\nhttps://blog.group-ib.com/task"
            },
            {
                "date": "2022-01",
                "activity": "Targeted attack on industrial enterprises and public institutions\nhttps://securelist.com/targeted-attack-on-industrial-enterprises-and-public-institutions/107054/"
            }
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/chinese-apt-operation-lagtime-it-targets-government-information-technology",
            "https://st.drweb.com/static/new-www/news/2021/april/drweb_research_attacks_on_russian_research_institutes_en.pdf",
            "https://labs.sentinelone.com/thundercats-hack-the-fsb-your-taxes-didnt-pay-for-this-op/"
        ],
        "uuid": "55f64f67-e6f0-4a22-8ba8-110c22f6c9c5",
        "last-card-change": "2022-09-12",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ta428",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.group-ib.com/task",
            "date": "2021-08-03",
            "organization": "Group-IB",
            "author": "Anastasia Tikhonova",
            "title": "The Art of Cyberwarfare Chinese APTs attack Russia",
            "categories": [
                "Albaniiutas",
                "Mail-O",
                "SManager",
                "TA428"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/thundercats-hack-the-fsb-your-taxes-didnt-pay-for-this-op",
            "date": "2021-06-08",
            "organization": "Sentinel LABS",
            "author": "Juan Andr\u00e9s Guerrero-Saade",
            "title": "ThunderCats Hack the FSB | Your Taxes Didn\u2019t Pay For This Op",
            "categories": [
                "Mail-O",
                "Tmanger",
                "TA428"
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
            "data_url": "https://www.recordedfuture.com/china-linked-ta428-threat-group",
            "date": "2021-03-17",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "China-linked TA428 Continues to Target Russia and Mongolia IT Companies",
            "categories": [
                "PlugX",
                "Poison Ivy",
                "TA428"
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
            "data_url": "https://www.welivesecurity.com/2020/12/10/luckymouse-ta428-compromise-able-desktop",
            "date": "2020-12-10",
            "organization": "ESET Research",
            "author": "Mathieu Tartare",
            "title": "Operation StealthyTrident: corporate software under attack",
            "categories": [
                "HyperBro",
                "PlugX",
                "Tmanger",
                "TA428"
            ]
        },
        {
            "data_url": "https://decoded.avast.io/luigicamastra/apt-group-targeting-governmental-agencies-in-east-asia",
            "date": "2020-12-09",
            "organization": "Avast Decoded",
            "author": "Luigino Camastra",
            "title": "APT Group Targeting Governmental Agencies in East Asia",
            "categories": [
                "Albaniiutas",
                "HyperBro",
                "PlugX",
                "Tmanger",
                "TA428"
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