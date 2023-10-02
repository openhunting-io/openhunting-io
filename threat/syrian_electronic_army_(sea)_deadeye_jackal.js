var threatdata = {
    "name": "Syrian Electronic Army (SEA), Deadeye Jackal",
    "alias": "Syrian Electronic Army, Syria Malware Team, Deadeye Jackal, ATK 196, TAG-CT2",
    "category": "APT",
    "type": "-",
    "modified": "2021-12-26",
    "all_data": {
        "actor": "Syrian Electronic Army (SEA), Deadeye Jackal",
        "names": [
            {
                "name": "Syrian Electronic Army",
                "name-giver": "self given"
            },
            {
                "name": "Syria Malware Team",
                "name-giver": "self give"
            },
            {
                "name": "Deadeye Jackal",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "ATK 196",
                "name-giver": "Thales"
            },
            {
                "name": "TAG-CT2",
                "name-giver": "Recorded Future"
            }
        ],
        "country": [
            "Syria"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2011",
        "description": "(Qihoo 360) In April 2011, only days after anti-regime protests escalated in Syria, Syrian Electronic Army (SEA) emerged on Facebook to support the government\u2019s Syrian President Bashar al-Assad. In May 5, 2011 the Syrian Computer Society registered SEA\u2019s website (syrian-es.com). Because Syria's domain registration authority registered the hacker site, some security experts have written that the group was supervised by the Syrian state. SEA claimed on its webpage to be no official entity, but 'a group of enthusiastic Syrian youths who could not stay passive towards the massive distortion of facts about the recent uprising in Syria'. As soon as May 27, 2011 SEA had removed text that denied it was an official entity. On the new page, the description of 'not an official entity' was removed, only says that it was established by a group of young Syrian enthusiasts to combat the use of the Internet, especially people that use of Facebook in Syria to 'spread hatred' and 'destroy peace'.\n\nThe Syrian Electronic Army uses spam, website defacement, malware, phishing and denial of service attacks against political opposition groups, Western news agencies, human rights groups and seemingly neutral websites for Syrian conflicts. It also attacked government websites in the Middle East and Europe as well as US defense contractors. The Syrian Electronic Army is the first Arab organization to set up a public Internet army on its national network to openly launch cyber-attacks on its enemies.\n\nSyrian Electronic Army has 2 subgroups:\n1. {{Subgroup: Goldmouse, APT-C-27}}\n2. {{Subgroup: Pat Bear, APT-C-37}}",
        "observed-sectors": [
            "Defense",
            "Government",
            "High-Tech",
            "Media",
            "Retail",
            "Telecommunications",
            "dissidents"
        ],
        "observed-countries": [
            "Canada",
            "France",
            "UK",
            "USA",
            "Middle East"
        ],
        "tools": [
            "AndoServer",
            "SandroRAT",
            "SilverHawk",
            "SLRat",
            "SpyNote RAT"
        ],
        "operations": [
            {
                "date": "2016 Mid",
                "activity": "In recent years, the group has seemingly kept a low profile, but the SEA hasn't ceased activity: it's altered tactics and is now delivering custom Android malware to opponents of the Assad regime for the purposes of surveillance.\nhttps://www.zdnet.com/article/these-hackers-are-using-android-surveillance-malware-to-target-opponents-of-the-syrian-government/"
            },
            {
                "date": "2018-01",
                "activity": "Lookout researchers have uncovered a long-running surveillance campaign tied to Syrian nation-state actors, which recently started using the novel coronavirus as its newest lure to entice its targets to download malware.\nhttps://blog.lookout.com/nation-state-mobile-malware-targets-syrians-with-covid-19-lures"
            }
        ],
        "counter-operations": [
            {
                "date": "2018-05",
                "activity": "Two Members of Syrian Electronic Army Indicted for Conspiracy\nhttps://www.justice.gov/usao-edva/pr/two-members-syrian-electronic-army-indicted-conspiracy"
            },
            {
                "date": "2021-08",
                "activity": "Taking Action Against Hackers in Pakistan and Syria\nhttps://about.fb.com/news/2021/11/taking-action-against-hackers-in-pakistan-and-syria/"
            }
        ],
        "information": [
            "http://blogs.360.cn/post/SEA_role_influence_cyberattacks.html",
            "https://en.wikipedia.org/wiki/Syrian_Electronic_Army"
        ],
        "uuid": "0f16cba0-5b7f-449b-95a6-0ca000e9a63e",
        "last-card-change": "2021-12-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "syrian_electronic_army_(sea)_deadeye_jackal",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://en.wikipedia.org/wiki/Syrian_Electronic_Army",
            "date": "2012-08-13",
            "organization": "Wikipedia",
            "author": "Various",
            "title": "Syrian Electronic Army",
            "categories": [
                "Deadeye Jackal"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "deadeye",
            "procedure_code": "s1052",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S1052",
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
                    "procedure_description": "deadeye can run cmd /c copy /y /b c:\\users\\public\\syslog_6-*.dat c:\\users\\public\\syslog.dll to combine separated sections of code into a single dll prior to execution.[60]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "deadeye can execute the getcomputernamea and getcomputernameexa winapi functions.[67]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053",
                    "technique_link": "https://attack.mitre.org/techniques/T1053",
                    "technique_name": "scheduled task/job",
                    "technique_description": "adversaries may abuse task scheduling functionality to facilitate initial or recurring execution of malicious code. utilities exist within all major operating systems to schedule programs or scripts to be executed at a specified date and time. a task can also be scheduled on a remote system, provided the proper authentication is met (ex: rpc and file and printer sharing in windows environments). scheduling a task on a remote system typically may require being a member of an admin or otherwise privileged group on the remote system.",
                    "procedure_description": "deadeye has used the scheduled tasks \\microsoft\\windows\\pla\\server manager performance monitor, \\microsoft\\windows\\ras\\managermobility, \\microsoft\\windows\\wdi\\srvsetupresults, and \\microsoft\\windows\\wdi\\usoshared to establish persistence.[3]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053",
                    "technique_link": "https://attack.mitre.org/techniques/T1053",
                    "technique_name": "scheduled task/job",
                    "technique_description": "adversaries may abuse task scheduling functionality to facilitate initial or recurring execution of malicious code. utilities exist within all major operating systems to schedule programs or scripts to be executed at a specified date and time. a task can also be scheduled on a remote system, provided the proper authentication is met (ex: rpc and file and printer sharing in windows environments). scheduling a task on a remote system typically may require being a member of an admin or otherwise privileged group on the remote system.",
                    "procedure_description": "deadeye has used the scheduled tasks \\microsoft\\windows\\pla\\server manager performance monitor, \\microsoft\\windows\\ras\\managermobility, \\microsoft\\windows\\wdi\\srvsetupresults, and \\microsoft\\windows\\wdi\\usoshared to establish persistence.[3]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053",
                    "technique_link": "https://attack.mitre.org/techniques/T1053",
                    "technique_name": "scheduled task/job",
                    "technique_description": "adversaries may abuse task scheduling functionality to facilitate initial or recurring execution of malicious code. utilities exist within all major operating systems to schedule programs or scripts to be executed at a specified date and time. a task can also be scheduled on a remote system, provided the proper authentication is met (ex: rpc and file and printer sharing in windows environments). scheduling a task on a remote system typically may require being a member of an admin or otherwise privileged group on the remote system.",
                    "procedure_description": "deadeye has used the scheduled tasks \\microsoft\\windows\\pla\\server manager performance monitor, \\microsoft\\windows\\ras\\managermobility, \\microsoft\\windows\\wdi\\srvsetupresults, and \\microsoft\\windows\\wdi\\usoshared to establish persistence.[3]"
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
                    "procedure_description": "deadeye has the ability to combine multiple sections of a binary which were broken up to evade detection into a single .dll prior to execution.[43]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1480",
                    "technique_link": "https://attack.mitre.org/techniques/T1480",
                    "technique_name": "execution guardrails",
                    "technique_description": "adversaries may use execution guardrails to constrain execution or actions based on adversary supplied and environment specific conditions that are expected to be present on the target. guardrails ensure that a payload only executes against an intended target and reduces collateral damage from an adversary\u2019s campaign. values an adversary can provide about a target system or environment to use as guardrails may include specific network share names, attached physical devices, files, joined active directory (ad) domains, and local/external ip addresses.",
                    "procedure_description": "deadeye can ensure it executes only on intended systems by identifying the victim's volume serial number, hostname, and/or dns domain.[6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/004",
                    "technique_name": "hide artifacts : ntfs file attributes",
                    "technique_description": "adversaries may use ntfs file attributes to hide their malicious data in order to evade detection. every new technology file system (ntfs) formatted partition contains a master file table (mft) that maintains a record for every file/directory on the partition.  within mft entries are file attributes,  such as extended attributes (ea) and data [known as alternate data streams (adss) when more than one data attribute is present], that can be used to store arbitrary data (and even complete files).",
                    "procedure_description": "the deadeye.embed variant of deadeye can embed its payload in an alternate data stream of a local file.[11]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/004",
                    "technique_name": "masquerading : masquerade task or service",
                    "technique_description": "adversaries may attempt to manipulate the name of a task or service to make it appear legitimate or benign. tasks/services executed by the task scheduler or systemd will typically be given a name and/or description. windows services will have a service name as well as a display name. many benign tasks and services exist that have commonly associated names. adversaries may give tasks or services names that are similar or identical to those of legitimate ones.",
                    "procedure_description": "deadeye has used schtasks /change to modify scheduled tasks including \\microsoft\\windows\\pla\\server manager performance monitor, \\microsoft\\windows\\ras\\managermobility, \\microsoft\\windows\\wdi\\srvsetupresults, and \\microsoft\\windows\\wdi\\usoshared.[16]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "deadeye has encrypted its payload.[68]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/009",
                    "technique_name": "obfuscated files or information : embedded payloads",
                    "technique_description": "adversaries may embed payloads within other files to conceal malicious content from defenses. otherwise seemingly benign files (such as scripts and executables) may be abused to carry and obfuscate malicious payloads and content. in some cases, embedded payloads may also enable adversaries to subvert trust controls by not impacting execution controls such as digital signatures and notarization tickets.",
                    "procedure_description": "the deadeye.embed variant of deadeye has the ability to embed payloads inside of a compiled binary.[11]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/007",
                    "technique_name": "system binary proxy execution : msiexec",
                    "technique_description": "adversaries may abuse msiexec.exe to proxy execution of malicious payloads. msiexec.exe is the command-line utility for the windows installer and is thus commonly associated with executing installation packages (.msi). the msiexec.exe binary may also be digitally signed by microsoft.",
                    "procedure_description": "deadeye can use msiexec.exe for execution of malicious dll.[8]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/011",
                    "technique_name": "system binary proxy execution : rundll32",
                    "technique_description": "adversaries may abuse rundll32.exe to proxy execution of malicious code. using rundll32.exe, vice executing directly (i.e. shared modules), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. rundll32.exe is commonly associated with executing dll payloads (ex: rundll32.exe {dllname, dllfunction}).",
                    "procedure_description": "deadeye can use rundll32.exe for execution of living off the land binaries (lolbin) such as shell32.dll.[38]"
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
                    "procedure_description": "deadeye can enumerate a victim computer's volume serial number and host name.[73]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "deadeye can discover the dns domain name of a targeted system.[45]"
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