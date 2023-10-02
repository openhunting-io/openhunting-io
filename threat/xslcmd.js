var threatdata = {
    "name": "XSLCmd",
    "alias": "XSLCmd",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Info stealer",
    "modified": "2020-07-02",
    "all_data": {
        "tool": "XSLCmd",
        "names": [
            {
                "name": "XSLCmd"
            }
        ],
        "description": "(FireEye) The backdoor code was ported to OS X from a Windows backdoor that has been used extensively in targeted attacks over the past several years, having been updated many times in the process. Its capabilities include a reverse shell, file listings and transfers, installation of additional executables, and an updatable configuration. The OS X version of XSLCmd includes two additional features not found in the Windows variants we have studied in depth: key logging and screen capturing.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2014/09/forced-to-adapt-xslcmd-backdoor-now-on-os-x.html",
            "https://objective-see.com/blog/blog_0x16.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.xslcmd"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:xslcmd"
        ],
        "uuid": "242f0523-a5dc-4740-9d05-ef93f014abad",
        "last-card-change": "2020-07-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "xslcmd",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://objective-see.com/blog/blog_0x16.html",
            "date": "2017-01-01",
            "organization": "Objective-See",
            "author": "Patrick Wardle",
            "title": "Mac Malware of 2016",
            "categories": [
                "KeRanger",
                "Keydnap",
                "Komplex",
                "Laoshu",
                "MacInstaller",
                "MacVX",
                "Mokes",
                "WireLurker",
                "XSLCmd"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2014/09/forced-to-adapt-xslcmd-backdoor-now-on-os-x.html",
            "date": "2014-09-04",
            "organization": "FireEye",
            "author": "Mike Scott",
            "title": "Forced to Adapt: XSLCmd Backdoor Now on OS X",
            "categories": [
                "XSLCmd",
                "APT15"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "cmd",
            "procedure_code": "s0106",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0106",
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
                    "procedure_description": "cmd is used to execute programs and other actions at the command-line interface.[74]"
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
                    "procedure_description": "cmd can be used to delete files from the file system.[43]"
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
                    "procedure_description": "cmd can be used to find files and directories with native functionality such as dir commands.[79]"
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
                    "procedure_description": "cmd can be used to find information about the operating system.[92]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1570",
                    "technique_link": "https://attack.mitre.org/techniques/T1570",
                    "technique_name": "lateral tool transfer",
                    "technique_description": "adversaries may transfer tools or other files between systems in a compromised environment. once brought into the victim environment (i.e. ingress tool transfer) files may then be copied from one system to another to stage adversary tools or other files over the course of an operation. adversaries may copy files between internal victim systems to support lateral movement using inherent file sharing protocols such as file sharing over smb/windows admin shares to connected network shares or with authenticated connections via remote desktop protocol.",
                    "procedure_description": "cmd can be used to copy files to/from a remotely connected internal system.[11]"
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
                    "procedure_description": "cmd can be used to copy files to/from a remotely connected external system.[113]"
                }
            ]
        }
    ]
};