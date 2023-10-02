var threatdata = {
    "name": "CrossRAT",
    "alias": "CrossRAT, Trupto",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "CrossRAT",
        "names": [
            {
                "name": "CrossRAT"
            },
            {
                "name": "Trupto"
            }
        ],
        "description": "(The Hacker News) CrossRAT is a cross-platform remote access Trojan that can target all four popular desktop operating systems, Windows, Solaris, Linux, and macOS, enabling remote attackers to manipulate the file system, take screenshots, run arbitrary executables, and gain persistence on the infected systems.\n\nAccording to researchers, Dark Caracal hackers do not rely on any 'zero-day exploits' to distribute its malware; instead, it uses basic social engineering via posts on Facebook groups and WhatsApp messages, encouraging users to visit hackers-controlled fake websites and download malicious applications.\n\nCrossRAT is written in Java programming language, making it easy for reverse engineers and researchers to decompile it.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://thehackernews.com/2018/01/crossrat-malware.html",
            "https://objective-see.com/blog/blog_0x28.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0235/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/jar.crossrat"
        ],
        "uuid": "1e267dbe-3c07-4764-9025-ab927fe63841",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "crossrat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://objective-see.com/blog/blog_0x28.html",
            "date": "2018-01-24",
            "organization": "Objective-See",
            "author": "Patrick Wardle",
            "title": "Analyzing CrossRAT: A cross-platform implant, utilized in a global cyber-espionage campaign",
            "categories": [
                "CrossRAT"
            ]
        },
        {
            "data_url": "https://info.lookout.com/rs/051-ESQ-475/images/Lookout_Dark-Caracal_srr_20180118_us_v.1.0.pdf",
            "date": "2018-01-18",
            "organization": "Lookout",
            "author": "Andrew Blaich",
            "title": "Dark Caracal: Cyber-espionage at a Global Scal",
            "categories": [
                "CrossRAT",
                "Bandook",
                "Dark Caracal"
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
        },
        {
            "procedure_name": "crossrat",
            "procedure_code": "s0235",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0235",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "crossrat uses run keys for persistence on windows"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/001",
                    "technique_name": "create or modify system process : launch agent",
                    "technique_description": "adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence. when a user logs in, a per-user launchd process is started which loads the parameters for each launch-on-demand user agent from the property list (.plist) file found in /system/library/launchagents, /library/launchagents, and ~/library/launchagents.  property list files use the label, programarguments , and runatload keys to identify the launch agent's name, executable location, and execution time. launch agents are often installed to perform updates to programs, launch user specified programs at login, or to conduct other developer tasks.",
                    "procedure_description": "crossrat creates a launch agent on macos.[13]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "crossrat uses run keys for persistence on windows"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/001",
                    "technique_name": "create or modify system process : launch agent",
                    "technique_description": "adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence. when a user logs in, a per-user launchd process is started which loads the parameters for each launch-on-demand user agent from the property list (.plist) file found in /system/library/launchagents, /library/launchagents, and ~/library/launchagents.  property list files use the label, programarguments , and runatload keys to identify the launch agent's name, executable location, and execution time. launch agents are often installed to perform updates to programs, launch user specified programs at login, or to conduct other developer tasks.",
                    "procedure_description": "crossrat creates a launch agent on macos.[13]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "crossrat can list all files on a system."
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
                    "procedure_description": "crossrat is capable of taking screen captures.[22]"
                }
            ]
        }
    ]
};