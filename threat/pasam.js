var threatdata = {
    "name": "Pasam",
    "alias": "Pasam",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Downloader, Exfiltration",
    "modified": "2020-04-27",
    "all_data": {
        "tool": "Pasam",
        "names": [
            {
                "name": "Pasam"
            }
        ],
        "description": "Pasam is a trojan used by Elderwood to open a backdoor on compromised hosts.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "http://www.cs.cornell.edu/courses/cs6410/2012fa/slides/Symantec_ElderwoodProject_2012.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0208/"
        ],
        "uuid": "333f9406-912e-431d-9ebc-5159eb58017e",
        "last-card-change": "2020-04-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pasam",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "pasam",
            "procedure_code": "s0208",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0208",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.008",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/008",
                    "technique_name": "boot or logon autostart execution : lsass driver",
                    "technique_description": "adversaries may modify or add lsass drivers to obtain persistence on compromised systems. the windows security subsystem is a set of components that manage and enforce the security policy for a computer or domain. the local security authority (lsa) is the main component responsible for local security policy and user authentication. the lsa includes multiple dynamic link libraries (dlls) associated with various other security functions, all of which run in the context of the lsa subsystem service (lsass) lsass.exe process.",
                    "procedure_description": "pasam establishes by infecting the security accounts manager (sam) dll to load a malicious dll dropped to disk.[2]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.008",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/008",
                    "technique_name": "boot or logon autostart execution : lsass driver",
                    "technique_description": "adversaries may modify or add lsass drivers to obtain persistence on compromised systems. the windows security subsystem is a set of components that manage and enforce the security policy for a computer or domain. the local security authority (lsa) is the main component responsible for local security policy and user authentication. the lsa includes multiple dynamic link libraries (dlls) associated with various other security functions, all of which run in the context of the lsa subsystem service (lsass) lsass.exe process.",
                    "procedure_description": "pasam establishes by infecting the security accounts manager (sam) dll to load a malicious dll dropped to disk.[2]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "pasam creates a backdoor through which remote attackers can delete files.[172]"
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
                    "procedure_description": "pasam creates a backdoor through which remote attackers can retrieve lists of files.[224]"
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
                    "procedure_description": "pasam creates a backdoor through which remote attackers can retrieve lists of running processes.[193]"
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
                    "procedure_description": "pasam creates a backdoor through which remote attackers can retrieve information such as hostname and free disk space.[270]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "pasam creates a backdoor through which remote attackers can retrieve files.[136]"
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
                    "procedure_description": "pasam creates a backdoor through which remote attackers can upload files.[340]"
                }
            ]
        }
    ]
};