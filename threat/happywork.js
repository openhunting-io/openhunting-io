var threatdata = {
    "name": "HAPPYWORK",
    "alias": "HAPPYWORK",
    "category": "Malware",
    "type": "Downloader, Reconnaissance",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "HAPPYWORK",
        "names": [
            {
                "name": "HAPPYWORK"
            }
        ],
        "description": "(FireEye) HAPPYWORK is a malicious downloader that can download and execute a second-stage payload, collect system information, and beacon it to the command and control domains. The collected system information includes: computer name, user name, system manufacturer via registry, IsDebuggerPresent state, and execution path.\n\nIn November 2016, HAPPYWORK targeted government and financial targets in South Korea.",
        "category": "Malware",
        "type": [
            "Downloader",
            "Reconnaissance"
        ],
        "information": [
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt_APT37.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0214/"
        ],
        "uuid": "b7302a45-e3d2-4711-a21f-7de0935de2ba",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "happywork",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "happywork",
            "procedure_code": "s0214",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0214",
            "techniques": [
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
                    "procedure_description": "can collect system information, including computer name, system manufacturer, isdebuggerpresent state, and execution path.[155]"
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
                    "procedure_description": "can collect the victim user name.[79]"
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
                    "procedure_description": "can download and execute a second-stage payload.[27]"
                }
            ]
        }
    ]
};