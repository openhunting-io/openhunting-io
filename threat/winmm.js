var threatdata = {
    "name": "WinMM",
    "alias": "WinMM",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Info stealer",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "WinMM",
        "names": [
            {
                "name": "WinMM"
            }
        ],
        "description": "WinMM is a full-featured, simple backdoor used by Naikon.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer"
        ],
        "information": [
            "https://securelist.com/the-naikon-apt-and-the-msnmm-campaigns/70029/",
            "https://securelist.com/analysis/publications/69953/the-naikon-apt/",
            "https://www2.fireeye.com/rs/fireye/images/rpt-apt30.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0059/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.winmm"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:winMM"
        ],
        "uuid": "992b7a88-03a1-4d8d-bd8b-e30e2e450d6e",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "winmm",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/analysis/publications/69953/the-naikon-apt/",
            "date": "2015-05-14",
            "organization": "Kaspersky Labs",
            "author": "Kurt Baumgartner",
            "title": "The Naikon APT",
            "categories": [
                "Naikon",
                "SslMM",
                "Sys10",
                "WinMM",
                "xsPlus",
                "APT30",
                "Naikon"
            ]
        },
        {
            "data_url": "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2015/TheNaikonAPT-MsnMM1.pdf",
            "date": "2015-05",
            "organization": "Kaspersky Labs",
            "author": "Kurt Baumgartner",
            "title": "The MsnMM Campaigns - The Earliest Naikon APTCampaigns",
            "categories": [
                "SslMM",
                "Sys10",
                "WinMM",
                "xsPlus"
            ]
        },
        {
            "data_url": "https://www2.fireeye.com/rs/fireye/images/rpt-apt30.pdf",
            "date": "2015-04",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "APT30 AND THE MECHANICS OF A LONG-RUNNING CYBER ESPIONAGE OPERATION",
            "categories": [
                "BACKBEND",
                "backspace",
                "CREAMSICLE",
                "FLASHFLOOD",
                "GEMCUTTER",
                "MILKMAID",
                "Naikon",
                "NETEAGLE",
                "ORANGEADE",
                "SHIPSHAPE",
                "SPACESHIP",
                "SslMM",
                "Sys10",
                "WinMM",
                "xsPlus",
                "APT30"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "winmm",
            "procedure_code": "s0059",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0059",
            "techniques": [
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
                    "procedure_description": "winmm sets a wh_cbt windows hook to search for and capture files on the victim.[327]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "winmm sets a wh_cbt windows hook to collect information on process creation.[272]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "winmm collects the system name, os version including service pack, and system install date and sends the information to the c2 server.[348]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1033",
                    "technique_link": "https://attack.mitre.org/techniques/T1033",
                    "technique_name": "system owner/user discovery",
                    "technique_description": "adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. they may do this, for example, by retrieving account usernames or by using os credential dumping. the information may be collected in a number of different ways using other discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. adversaries may use the information from system owner/user discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "winmm uses netuser-getinfo to identify that it is running under an \"admin\" account on the local system.[178]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "winmm uses http for c2.[328]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1008",
                    "technique_link": "https://attack.mitre.org/techniques/T1008",
                    "technique_name": "fallback channels",
                    "technique_description": "adversaries may use fallback or alternate communication channels if the primary channel is compromised or inaccessible in order to maintain reliable command and control and to avoid data transfer thresholds.",
                    "procedure_description": "winmm is usually configured with primary and backup domains for c2 communications.[44]"
                }
            ]
        }
    ]
};