var threatdata = {
    "name": "SslMM",
    "alias": "SslMM",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "SslMM",
        "names": [
            {
                "name": "SslMM"
            }
        ],
        "description": "SslMM is a full-featured backdoor used by Naikon that has multiple variants.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://securelist.com/the-naikon-apt-and-the-msnmm-campaigns/70029/",
            "https://securelist.com/analysis/publications/69953/the-naikon-apt/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0058/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sslmm"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:sslMM"
        ],
        "uuid": "b1730405-072e-4ccf-bc0d-38f543bfa1ec",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sslmm",
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
            "procedure_name": "sslmm",
            "procedure_code": "s0058",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0058",
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
                    "procedure_description": "to establish persistence, sslmm identifies the start menu startup directory and drops a link to its own executable disguised as an \"office start,\" \"yahoo talk,\" \"msn gaming z0ne,\" or \"msn talk\" shortcut.[250]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "to establish persistence, sslmm identifies the start menu startup directory and drops a link to its own executable disguised as an \"office start,\" \"yahoo talk,\" \"msn gaming z0ne,\" or \"msn talk\" shortcut.[33]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134",
                    "technique_link": "https://attack.mitre.org/techniques/T1134",
                    "technique_name": "access token manipulation",
                    "technique_description": "adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls. windows uses access tokens to determine the ownership of a running process. a user can manipulate access tokens to make a running process appear as though it is the child of a different process or belongs to someone other than the user that started the process. when this occurs, the process also takes on the security context associated with the new token.",
                    "procedure_description": "sslmm contains a feature to manipulate process privileges and tokens.[24]"
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
                    "procedure_description": "to establish persistence, sslmm identifies the start menu startup directory and drops a link to its own executable disguised as an \"office start,\" \"yahoo talk,\" \"msn gaming z0ne,\" or \"msn talk\" shortcut.[250]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "to establish persistence, sslmm identifies the start menu startup directory and drops a link to its own executable disguised as an \"office start,\" \"yahoo talk,\" \"msn gaming z0ne,\" or \"msn talk\" shortcut.[33]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134",
                    "technique_link": "https://attack.mitre.org/techniques/T1134",
                    "technique_name": "access token manipulation",
                    "technique_description": "adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls. windows uses access tokens to determine the ownership of a running process. a user can manipulate access tokens to make a running process appear as though it is the child of a different process or belongs to someone other than the user that started the process. when this occurs, the process also takes on the security context associated with the new token.",
                    "procedure_description": "sslmm contains a feature to manipulate process privileges and tokens.[24]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/001",
                    "technique_name": "impair defenses : disable or modify tools",
                    "technique_description": "adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. this may take many forms, such as killing security software processes or services, modifying / deleting registry keys or configuration files so that tools do not operate properly, or other methods to interfere with security tools scanning or reporting information. adversaries may also disable updates to prevent the latest security patches from reaching tools on victim systems.",
                    "procedure_description": "sslmm identifies and kills anti-malware processes.[41]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "to establish persistence, sslmm identifies the start menu startup directory and drops a link to its own executable disguised as an \"office start,\" \"yahoo talk,\" \"msn gaming z0ne,\" or \"msn talk\" shortcut.[157]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "sslmm creates a new thread implementing a keylogging facility using windows keyboard accelerators.[169]"
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
                    "procedure_description": "sslmm sends information to its hard-coded c2, including os version, service pack information, processor speed, system name, and os install date.[348]"
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
                    "procedure_description": "sslmm sends the logged-on username to its hard-coded c2.[178]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "sslmm creates a new thread implementing a keylogging facility using windows keyboard accelerators.[169]"
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
                    "procedure_description": "sslmm has a hard-coded primary and backup c2 string.[44]"
                }
            ]
        }
    ]
};