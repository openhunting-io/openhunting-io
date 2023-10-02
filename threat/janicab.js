var threatdata = {
    "name": "Janicab",
    "alias": "Janicab",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Janicab",
        "names": [
            {
                "name": "Janicab"
            }
        ],
        "description": "(F-Secure) For Windows OS, this malware was delivered via a document that exploited CVE-2012-0158. In addition, we've also seen it delivered in a form of a Microsoft Shell Link (.lnk) file that drops an embedded encoded VBScript, sometime from 2013 until recently.\n\nThere are several tricks the dropper uses for obfuscating its purpose:\n\n- Filename with double extension (Example: .jpg.lnk or .doc.lnk)\n- Using the icon of notepad.exe (instead of the default, cmd.exe)\n- Possibly sensitive data zeroed out, for example, machine identifier and relative path\n\nBut the most interesting part is the use of an undocumented method for hiding the command line argument string from Windows explorer. Typically, the target and its arguments are visible in Windows explorer as a single string in the shortcut properties, when the user right-clicks on the shortcut icon. However, the command line argument is not visible in this scenario.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://archive.f-secure.com/weblog/archives/00002803.html",
            "https://archive.f-secure.com/weblog/archives/00002576.html",
            "https://securelist.com/deathstalker-mercenary-triumvirate/98177/",
            "https://www.macmark.de/blog/osx_blog_2013-08-a.php",
            "https://sec0wn.blogspot.com/2018/12/powersing-from-lnk-files-to-janicab.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0163/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.janicab"
        ],
        "uuid": "44b545b8-3815-40f9-8e4d-e6e49aec793d",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "janicab",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/deathstalker-targets-legal-entities-with-new-janicab-variant/108131/",
            "date": "2022-12-08",
            "organization": "Kaspersky",
            "author": "GReAT",
            "title": "DeathStalker targets legal entities with new Janicab variant",
            "categories": [
                "Janicab",
                "Janicab",
                "Stormwind"
            ]
        },
        {
            "data_url": "https://www.malwarology.com/2022/05/janicab-series-attibution-and-iocs/",
            "date": "2022-05-31",
            "organization": "Malwarology",
            "author": "Gaetano Pellegrino",
            "title": "Janicab Series: Attibution and IoCs",
            "categories": [
                "Janicab"
            ]
        },
        {
            "data_url": "https://www.malwarology.com/2022/05/janicab-series-the-core-artifact/",
            "date": "2022-05-27",
            "organization": "Malwarology",
            "author": "Gaetano Pellegrino",
            "title": "Janicab Series: The Core Artifact",
            "categories": [
                "Janicab"
            ]
        },
        {
            "data_url": "https://www.malwarology.com/2022/05/janicab-series-further-steps-in-the-infection-chain/",
            "date": "2022-05-26",
            "organization": "Malwarology",
            "author": "Gaetano Pellegrino",
            "title": "Janicab Series: Further Steps in the Infection Chain",
            "categories": [
                "Janicab"
            ]
        },
        {
            "data_url": "https://www.malwarology.com/2022/05/janicab-series-first-steps-in-the-infection-chain/",
            "date": "2022-05-24",
            "organization": "Malwarology",
            "author": "Gaetano Pellegrino",
            "title": "Janicab Series: First Steps in the Infection Chain",
            "categories": [
                "Janicab"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q3-2020/99204/",
            "date": "2020-11-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q3 2020",
            "categories": [
                "WellMail",
                "EVILNUM",
                "Janicab",
                "Poet RAT",
                "AsyncRAT",
                "Ave Maria",
                "Cobalt Strike",
                "Crimson RAT",
                "CROSSWALK",
                "Dtrack",
                "LODEINFO",
                "MoriAgent",
                "Okrum",
                "PlugX",
                "poisonplug",
                "Rover",
                "ShadowPad",
                "SoreFang",
                "Winnti"
            ]
        },
        {
            "data_url": "https://securelist.com/deathstalker-mercenary-triumvirate/98177/",
            "date": "2020-08-24",
            "organization": "Kaspersky Labs",
            "author": "Ivan Kwiatkowski",
            "title": "Lifting the veil on DeathStalker, a mercenary triumvirate",
            "categories": [
                "EVILNUM",
                "Janicab",
                "Evilnum"
            ]
        },
        {
            "data_url": "https://sec0wn.blogspot.com/2018/12/powersing-from-lnk-files-to-janicab.html",
            "date": "2018-12-13",
            "organization": "Security 0wnage",
            "author": "Mo Bustami",
            "title": "POWERSING - From LNK Files To Janicab Through YouTube & Twitter",
            "categories": [
                "Janicab"
            ]
        },
        {
            "data_url": "https://www.macmark.de/blog/osx_blog_2013-08-a.php",
            "date": "2015-09-11",
            "organization": "MacMark",
            "author": "Markus M\u00f6ller",
            "title": "CSI MacMark: Janicab",
            "categories": [
                "Janicab"
            ]
        },
        {
            "data_url": "https://blog.avast.com/2013/07/22/multisystem-trojan-janicab-attacks-windows-and-macosx-via-scripts/",
            "date": "2013-07-22",
            "organization": "Avast",
            "author": "Peter K\u00e1lnai",
            "title": "Multisystem Trojan Janicab attacks Windows and MacOSX via scripts",
            "categories": [
                "Janicab"
            ]
        },
        {
            "data_url": "https://archive.f-secure.com/weblog/archives/00002576.html",
            "date": "2013-07-15",
            "organization": "F-Secure",
            "author": "Broderick Aquilino",
            "title": "Signed Mac Malware Using Right-to-Left Override Trick",
            "categories": [
                "Janicab"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "janicab",
            "procedure_code": "s0163",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0163",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/003",
                    "technique_name": "scheduled task/job : cron",
                    "technique_description": "adversaries may abuse the cron utility to perform task scheduling for initial or recurring execution of malicious code. the cron utility is a time-based job scheduler for unix-like operating systems.  the  crontab file contains the schedule of cron entries to be run and the specified times for execution. any crontab files are stored in operating system-specific file paths.",
                    "procedure_description": "janicab used a cron job for persistence on mac devices.[7]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/003",
                    "technique_name": "scheduled task/job : cron",
                    "technique_description": "adversaries may abuse the cron utility to perform task scheduling for initial or recurring execution of malicious code. the cron utility is a time-based job scheduler for unix-like operating systems.  the  crontab file contains the schedule of cron entries to be run and the specified times for execution. any crontab files are stored in operating system-specific file paths.",
                    "procedure_description": "janicab used a cron job for persistence on mac devices.[7]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/003",
                    "technique_name": "scheduled task/job : cron",
                    "technique_description": "adversaries may abuse the cron utility to perform task scheduling for initial or recurring execution of malicious code. the cron utility is a time-based job scheduler for unix-like operating systems.  the  crontab file contains the schedule of cron entries to be run and the specified times for execution. any crontab files are stored in operating system-specific file paths.",
                    "procedure_description": "janicab used a cron job for persistence on mac devices.[7]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "janicab used a valid appledeveloperid to sign the code to get past security restrictions.[44]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1123",
                    "technique_link": "https://attack.mitre.org/techniques/T1123",
                    "technique_name": "audio capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., microphones and webcams) or applications (e.g., voice and video call services) to capture audio recordings for the purpose of listening into sensitive conversations to gather information.",
                    "procedure_description": "janicab captured audio and sent it out to a c2 server.[18][19]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "janicab captured screenshots and sent them out to a c2 server.[78][79]"
                }
            ]
        }
    ]
};