var threatdata = {
    "name": "MirageFox",
    "alias": "MirageFox",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "MirageFox",
        "names": [
            {
                "name": "MirageFox"
            }
        ],
        "description": "MirageFox is a remote access tool used against Windows systems. It appears to be an upgraded version of a tool known as Mirage, which is a RAT believed to originate in 2012.\n\n(SecureWorks) Mirage phones home to its C2 servers using a standard HTTP request. From the activity CTU researchers have observed when executing Mirage in a malware sandbox, this communication commonly occurs over ports 80, 443 and 8080, and it can implement SSL for added security.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.secureworks.com/research/the-mirage-campaign",
            "https://www.intezer.com/miragefox-apt15-resurfaces-with-new-tools-based-on-old-ones/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0280/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.miragefox"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:MirageFox"
        ],
        "uuid": "850be0f0-e2cf-4c68-a739-6691ec513e99",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "miragefox",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.intezer.com/miragefox-apt15-resurfaces-with-new-tools-based-on-old-ones/",
            "date": "2019-10-16",
            "organization": "",
            "author": "Jay Rosenberg",
            "title": "APT15",
            "categories": [
                "Mirage",
                "MirageFox",
                "APT15"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "miragefox",
            "procedure_code": "s0280",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0280",
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
                    "procedure_description": "miragefox has the capability to execute commands using cmd.exe.[220]"
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
                    "procedure_description": "miragefox is likely loaded via dll hijacking into a legitimate mcafee binary.[27]"
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
                    "procedure_description": "miragefox is likely loaded via dll hijacking into a legitimate mcafee binary.[27]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "miragefox has a function for decrypting data containing c2 configuration information.[149]"
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
                    "procedure_description": "miragefox is likely loaded via dll hijacking into a legitimate mcafee binary.[27]"
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
                    "procedure_description": "miragefox can collect cpu and architecture information from the victim\u2019s machine.[231]"
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
                    "procedure_description": "miragefox can gather the username from the victim\u2019s machine.[116]"
                }
            ]
        }
    ]
};