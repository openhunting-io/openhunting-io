var threatdata = {
    "name": "Syscon",
    "alias": "Syscon, SYSCON, Sanny",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Syscon",
        "names": [
            {
                "name": "Syscon"
            },
            {
                "name": "SYSCON"
            },
            {
                "name": "Sanny"
            }
        ],
        "description": "(Trend Micro) Bots can use various methods to establish a line of communication between themselves and their command-and-control (C&C) server. Usually, these are done via HTTP or other TCP/IP connections. However, we recently encountered a botnet that uses a more unusual method: an FTP server that, in effect, acts as a C&C server.\n\nUsing an FTP server has some advantages. It is less common, and this fact may allow it to slip unnoticed by administrators and researchers. However, this also leaves the C&C traffic open for monitoring by others, including security researchers. In addition, thanks to a coding mistake by the attackers, this particular backdoor does not always run the right commands.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/syscon-backdoor-uses-ftp-as-a-cc-channel/",
            "https://securingtomorrow.mcafee.com/mcafee-labs/mcafee-uncovers-operation-honeybee-malicious-document-campaign-targeting-humanitarian-aid-groups/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0464/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.syscon"
        ],
        "uuid": "60d69ed9-e971-40af-9ea7-658d46c130c4",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "syscon",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/the-fractured-statue-campaign-u-s-government-targeted-in-spear-phishing-attacks/",
            "date": "2020-01-23",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Adrian McCabe",
            "title": "The Fractured Statue Campaign: U.S. Government Targeted in Spear-Phishing Attacks",
            "categories": [
                "CARROTBALL",
                "CarrotBat",
                "Syscon"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2018/03/sanny-malware-delivery-method-updated-in-recently-observed-attacks.html",
            "date": "2018-03-23",
            "organization": "FireEye",
            "author": "Sudeep Singh",
            "title": "Sanny malware delivery method updated in recently observed attacks.",
            "categories": [
                "Sanny"
            ]
        },
        {
            "data_url": "https://securingtomorrow.mcafee.com/mcafee-labs/mcafee-uncovers-operation-honeybee-malicious-document-campaign-targeting-humanitarian-aid-groups/",
            "date": "2018-03-02",
            "organization": "McAfee",
            "author": "Ryan Sherstobitoff",
            "title": "McAfee Uncovers Operation Honeybee, a Malicious Document Campaign Targeting Humanitarian Aid Groups",
            "categories": [
                "Syscon"
            ]
        },
        {
            "data_url": "http://blog.trendmicro.com/trendlabs-security-intelligence/syscon-backdoor-uses-ftp-as-a-cc-channel/",
            "date": "2017-10-05",
            "organization": "Trend Micro",
            "author": "Jarom\u00edr Ho\u0159ej\u0161\u00ed",
            "title": "SYSCON Backdoor Uses FTP as a C&C Channel",
            "categories": [
                "Syscon"
            ]
        },
        {
            "data_url": "http://contagiodump.blogspot.com/2012/12/end-of-year-presents-continue.html",
            "date": "2012-12-17",
            "organization": "Contagio Dump",
            "author": "Mila Parkour",
            "title": "Sample for Sanny / Win32.Daws in CVE-2012-0158 \"ACEAN Regional Security Forum\"  targeting  Russian companies",
            "categories": [
                "Sanny"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "syscon",
            "procedure_code": "s0464",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0464",
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
                    "procedure_description": "syscon has the ability to execute commands through cmd on a compromised host.[63]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/002",
                    "technique_name": "user execution : malicious file",
                    "technique_description": "an adversary may rely upon a user opening a malicious file in order to gain execution. users may be subjected to social engineering to get them to open a file that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing attachment. adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, and .cpl.",
                    "procedure_description": "syscon has been executed by luring victims to open malicious e-mail attachments.[224]"
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
                    "procedure_description": "syscon has the ability to use tasklist to list running processes.[248]"
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
                    "procedure_description": "syscon has the ability to use systeminfo to identify system information.[82]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/002",
                    "technique_name": "application layer protocol : file transfer protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with transferring files to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "syscon has the ability to use ftp in c2 communications.[16][3]"
                }
            ]
        }
    ]
};