var threatdata = {
    "name": "WebC2",
    "alias": "WebC2, WebC2-AdSpace, WebC2-Ausov, WebC2-Bolid, WebC2-Cson, WebC2-DIV, WebC2-GreenCat, WebC2-Head, WebC2-Kt3, WebC2-Qbp, WebC2-Rave, WebC2-Table, WebC2-UGX, WebC2-Yahoo",
    "category": "Malware",
    "type": "Backdoor, Downloader",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "WebC2",
        "names": [
            {
                "name": "WebC2"
            },
            {
                "name": "WebC2-AdSpace"
            },
            {
                "name": "WebC2-Ausov"
            },
            {
                "name": "WebC2-Bolid"
            },
            {
                "name": "WebC2-Cson"
            },
            {
                "name": "WebC2-DIV"
            },
            {
                "name": "WebC2-GreenCat"
            },
            {
                "name": "WebC2-Head"
            },
            {
                "name": "WebC2-Kt3"
            },
            {
                "name": "WebC2-Qbp"
            },
            {
                "name": "WebC2-Rave"
            },
            {
                "name": "WebC2-Table"
            },
            {
                "name": "WebC2-UGX"
            },
            {
                "name": "WebC2-Yahoo"
            }
        ],
        "description": "A WEBC2 backdoor is designed to retrieve a Web page from a pre-determined C2 server. It expects the Web page to contain special HTML tags; the backdoor will attempt to interpret the data between the tags as commands. This family of malware is capable of downloading and executing a file. All variants represented here are the same file with different MD5 signatures. This malware attempts to contact its C2 once a week (Thursday at 10:00 AM). It looks for commands inside a set of HTML tags, part of which are in the File Strings indicator term below.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0109/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_adspace",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_ausov",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_bolid",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_cson",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_div",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_greencat",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_head",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_kt3",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_qbp",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_rave",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_table",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_ugx",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.webc2_yahoo"
        ],
        "uuid": "a1e54b72-3eed-49ae-852c-9621bdde6be3",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "webc2",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://github.com/securitykitten/malware_references/blob/master/Appendix%20C%20(Digital)%20-%20The%20Malware%20Arsenal.pdf",
            "date": "2018",
            "organization": "Mandiant",
            "author": "Mandiant",
            "title": "APT1",
            "categories": [
                "Auriga",
                "Biscuit",
                "Bouncer",
                "Combos",
                "CookieBag",
                "Dairy",
                "GetMail",
                "GlooxMail",
                "Goggles",
                "Hacksfase",
                "Helauto",
                "Kurton",
                "ManItsMe",
                "MAPIget",
                "MiniASP",
                "NewsReels",
                "SeaSalt",
                "StarsyPound",
                "Sword",
                "TabMsgSQL",
                "Tarsip",
                "WebC2-AdSpace",
                "WebC2-Ausov",
                "WebC2-Bolid",
                "WebC2-Cson",
                "WebC2-DIV",
                "WebC2-GreenCat",
                "WebC2-Head",
                "WebC2-Kt3",
                "WebC2-Qbp",
                "WebC2-Rave",
                "WebC2-Table",
                "WebC2-UGX",
                "WebC2-Yahoo"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "webc2",
            "procedure_code": "s0109",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0109",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "webc2 can open an interactive command shell.[11]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "variants of webc2 achieve persistence by using dll search order hijacking, usually by copying the dll file to %systemroot% (c:\\windows\\ntshrui.dll).[38]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "variants of webc2 achieve persistence by using dll search order hijacking, usually by copying the dll file to %systemroot% (c:\\windows\\ntshrui.dll).[38]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "variants of webc2 achieve persistence by using dll search order hijacking, usually by copying the dll file to %systemroot% (c:\\windows\\ntshrui.dll).[38]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "webc2 can download and execute a file.[469]"
                }
            ]
        },
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