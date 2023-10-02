var threatdata = {
    "name": "DeathRansom",
    "alias": "DeathRansom, deathransom, DEATHRANSOM, wacatac",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "DeathRansom",
        "names": [
            {
                "name": "DeathRansom"
            },
            {
                "name": "deathransom"
            },
            {
                "name": "DEATHRANSOM"
            },
            {
                "name": "wacatac"
            }
        ],
        "description": "(Fortinet) Recently, our threat radar detected a new ransomware variant that we break down for you in this threat analysis, ominously called DeathRansom.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.fortinet.com/blog/threat-research/death-ransom-new-strain-ransomware",
            "https://www.fortinet.com/blog/threat-research/death-ransom-attribution",
            "https://www.fireeye.com/blog/threat-research/2021/04/unc2447-sombrat-and-fivehands-ransomware-sophisticated-financial-threat.html",
            "https://asec.ahnlab.com/1269",
            "https://dissectingmalwa.re/quick-and-painless-reversing-deathransom-wacatac.html",
            "https://id-ransomware.blogspot.com/2019/11/wacatac-ransomware.html",
            "https://github.com/albertzsigovits/malware-notes/blob/master/DeathRansom.md"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0616/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.deathransom"
        ],
        "uuid": "7d0510ec-642b-4bf9-9c7b-518b967fbeec",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "deathransom",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://github.com/albertzsigovits/malware-notes/blob/master/DeathRansom.md",
            "date": "2020-01-06",
            "organization": "Github (albertzsigovits)",
            "author": "Albert Zsigovits",
            "title": "DeathRansom \\ Wacatac ransomware",
            "categories": [
                "DeathRansom"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/death-ransom-new-strain-ransomware.html",
            "date": "2020-01-02",
            "organization": "Fortinet",
            "author": "Minh Tran",
            "title": "The Curious Case of DeathRansom: Part I",
            "categories": [
                "DeathRansom"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/death-ransom-attribution.html",
            "date": "2020-01-02",
            "organization": "Fortinet",
            "author": "Artem Semenchenko",
            "title": "DeathRansom Part II: Attribution",
            "categories": [
                "DeathRansom"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/1269",
            "date": "2019-11-21",
            "organization": "ASEC",
            "author": "ASEC Analysis Team",
            "title": "GandCrab Finds DEATHRansom of the Same Appearance Following Nemty in Korea",
            "categories": [
                "DeathRansom"
            ]
        },
        {
            "data_url": "https://dissectingmalwa.re/quick-and-painless-reversing-deathransom-wacatac.html",
            "date": "2019-11-19",
            "organization": "Dissecting Malware",
            "author": "Marius Genheimer",
            "title": "Quick and painless - Reversing DeathRansom / \"Wacatac\"",
            "categories": [
                "DeathRansom"
            ]
        },
        {
            "data_url": "https://twitter.com/Amigo_A_/status/1196898012645220354",
            "date": "2019-11-19",
            "organization": "Twitter (@Amigo_A_)",
            "author": "Andrew Ivanov",
            "title": "Tweet on Wacatac Ransomware",
            "categories": [
                "DeathRansom"
            ]
        },
        {
            "data_url": "https://id-ransomware.blogspot.com/2019/11/wacatac-ransomware.html",
            "date": "2019-11-19",
            "organization": "ID Ransomware",
            "author": "Andrew Ivanov",
            "title": "Wacatac Ransomware",
            "categories": [
                "DeathRansom"
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
            "procedure_name": "deathransom",
            "procedure_code": "s0616",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0616",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "deathransom has the ability to use wmi to delete volume shadow copies.[34]"
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
                    "procedure_description": "deathransom can use loop operations to enumerate directories on a compromised host.[100]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1135",
                    "technique_link": "https://attack.mitre.org/techniques/T1135",
                    "technique_name": "network share discovery",
                    "technique_description": "adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for collection and to identify potential systems of interest for lateral movement. networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.",
                    "procedure_description": "deathransom has the ability to use loop operations to enumerate network resources.[28]"
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
                    "procedure_description": "deathransom can enumerate logical drives on a target system.[109]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1614.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1614/001",
                    "technique_name": "system location discovery : system language discovery",
                    "technique_description": "adversaries may attempt to gather information about the system language of a victim in order to infer the geographical location of that host. this information may be used to shape follow-on behaviors, including whether the adversary infects the target and/or attempts specific actions. this decision may be employed by malware developers and operators to reduce their risk of attracting the attention of specific law enforcement agencies or prosecution/scrutiny from other entities.",
                    "procedure_description": "some versions of deathransom have performed language id and keyboard layout checks; if either of these matched russian, kazakh, belarusian, ukrainian or tatar deathransom would exit.[10]"
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
                    "procedure_description": "deathransom can use https to download files.[96]"
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
                    "procedure_description": "deathransom can download files to a compromised host.[142]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1486",
                    "technique_link": "https://attack.mitre.org/techniques/T1486",
                    "technique_name": "data encrypted for impact",
                    "technique_description": "adversaries may encrypt data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources. they can attempt to render stored data inaccessible by encrypting files or data on local and remote drives and withholding access to a decryption key. this may be done in order to extract monetary compensation from a victim in exchange for decryption or a decryption key (ransomware) or to render data permanently inaccessible in cases where the key is not saved or transmitted.",
                    "procedure_description": "deathransom can use public and private key pair encryption to encrypt files for ransom payment.[41]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1490",
                    "technique_link": "https://attack.mitre.org/techniques/T1490",
                    "technique_name": "inhibit system recovery",
                    "technique_description": "adversaries may delete or remove built-in data and turn off services designed to aid in the recovery of a corrupted system to prevent recovery. this may deny access to available backups and recovery options.",
                    "procedure_description": "deathransom can delete volume shadow copies on compromised hosts.[26]"
                }
            ]
        }
    ]
};