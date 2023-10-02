var threatdata = {
    "name": "SHUTTERSPEED",
    "alias": "SHUTTERSPEED",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "SHUTTERSPEED",
        "names": [
            {
                "name": "SHUTTERSPEED"
            }
        ],
        "description": "(FireEye) SHUTTERSPEED is a backdoor that can collect system information, acquire screenshots, and download/execute an arbitrary executable. SHUTTERSPEED typically requires an argument at runtime in order to execute fully. Observed arguments used by SHUTTERSPEED include: 'help', 'console', and 'sample'.\nThe spear phishing email messages contained documents exploiting RTF vulnerability CVE-2017-0199.\n\nMany of the compromised domains in the command and control infrastructure are linked to South Korean companies. Most of these domains host a fake webpage pertinent to targets.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt_APT37.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0217/"
        ],
        "uuid": "3745f067-1087-4e50-9797-3424e17781a0",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "shutterspeed",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "shutterspeed",
            "procedure_code": "s0217",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0217",
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
                    "procedure_description": "shutterspeed can collect system information.[155]"
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
                    "procedure_description": "shutterspeed can capture screenshots.[51]"
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
                    "procedure_description": "shutterspeed can download and execute an arbitary executable.[27]"
                }
            ]
        }
    ]
};