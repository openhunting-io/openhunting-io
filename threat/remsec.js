var threatdata = {
    "name": "Remsec",
    "alias": "Remsec, Backdoor.Remsec, ProjectSauron",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration, Tunneling",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Remsec",
        "names": [
            {
                "name": "Remsec"
            },
            {
                "name": "Backdoor.Remsec"
            },
            {
                "name": "ProjectSauron"
            }
        ],
        "description": "(Kaspersky) Remsec is particularly interested in gaining access to encrypted communications, hunting them down using an advanced modular cyber-espionage platform that incorporates a set of unique tools and techniques. The most noteworthy feature of Remsec\u2019s tactics is the deliberate avoidance of patterns: Remsec customizes its implants and infrastructure for each individual target, and never reuses them. This approach, coupled with multiple routes for the exfiltration of stolen data, such as legitimate email channels and DNS, enables Remsec to conduct secretive, long-term spying campaigns in target networks.\n\nRemsec gives the impression of being an experienced and traditional actor that has put considerable effort into learning from other extremely advanced actors, including {{Duqu}}, {{Flame}}, Equation and {{Regin}}; adopting some of their most innovative techniques and improving on their tactics in order to remain undiscovered.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration",
            "Tunneling"
        ],
        "information": [
            "https://www.kaspersky.com/about/press-releases/2016_remsec-top-level-espionage-platform-covertly-extracts-encrypted-government-comms"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0125/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.remsec_strider"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:remsec"
        ],
        "uuid": "3f13e218-95a3-47bd-935f-0e195bdb1779",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "remsec",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/project-sauron",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Project Sauron",
            "categories": [
                "ProjectSauron"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0041/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: Strider",
            "categories": [
                "ProjectSauron"
            ]
        },
        {
            "data_url": "https://artemonsecurity.blogspot.com/2016/10/remsec-driver-analysis-part-3.html",
            "date": "2016-10-11",
            "organization": "",
            "author": "Artem Baranov",
            "title": "Remsec driver analysis - Part 3",
            "categories": [
                "Remsec"
            ]
        },
        {
            "data_url": "https://artemonsecurity.blogspot.com/2016/10/remsec-driver-analysis-part-2.html",
            "date": "2016-10-10",
            "organization": "",
            "author": "Artem Baranov",
            "title": "Remsec driver analysis - Part 2",
            "categories": [
                "Remsec"
            ]
        },
        {
            "data_url": "https://artemonsecurity.blogspot.com/2016/10/remsec-driver-analysis.html",
            "date": "2016-10-03",
            "organization": "",
            "author": "Artem Baranov",
            "title": "Remsec driver analysis",
            "categories": [
                "Remsec"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07190154/The-ProjectSauron-APT_research_KL.pdf",
            "date": "2016-09-09",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "THE PROJECTSAURON APT",
            "categories": [
                "ProjectSauron"
            ]
        },
        {
            "data_url": "http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/Symantec_Remsec_IOCs.pdf",
            "date": "2016-08-08",
            "organization": "Symantec",
            "author": "Symantec",
            "title": "Backdoor.Remsec indicators of compromise",
            "categories": [
                "Remsec"
            ]
        },
        {
            "data_url": "https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=ce2df4da-afe9-4a24-b28c-0fb3ba671d95&CommunityKey=1ecf5f55-9545-44d6-b0f4-4e4a7f5f5e68&tab=librarydocuments",
            "date": "2016-08-08",
            "organization": "Symantec",
            "author": "A L Johnson",
            "title": "Strider: Cyberespionage group turns eye of Sauron on targets",
            "categories": [
                "Flame",
                "Regin",
                "Remsec",
                "ProjectSauron"
            ]
        },
        {
            "data_url": "https://securelist.com/analysis/publications/75533/faq-the-projectsauron-apt/",
            "date": "2016-08-08",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "ProjectSauron: top level cyber-espionage platform covertly extracts encrypted government comms",
            "categories": [
                "ProjectSauron"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/strider-cyberespionage-group-turns-eye-sauron-targets",
            "date": "2016-08-07",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Strider: Cyberespionage group turns eye of Sauron on targets",
            "categories": [
                "ProjectSauron"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "remsec",
            "procedure_code": "s0125",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0125",
            "techniques": [
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
                    "procedure_description": "remsec schedules the execution one of its modules by creating a new scheduler task.[6]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1556.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1556/002",
                    "technique_name": "modify authentication process : password filter dll",
                    "technique_description": "adversaries may register malicious password filter dynamic link libraries (dlls) into the authentication process to acquire user credentials as they are validated.",
                    "procedure_description": "remsec harvests plain-text credentials as a password filter registered on domain controllers.[2]"
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
                    "procedure_description": "remsec schedules the execution one of its modules by creating a new scheduler task.[6]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1068",
                    "technique_link": "https://attack.mitre.org/techniques/T1068",
                    "technique_name": "exploitation for privilege escalation",
                    "technique_description": "adversaries may exploit software vulnerabilities in an attempt to elevate privileges. exploitation of a software vulnerability occurs when an adversary takes advantage of a programming error in a program, service, or within the operating system software or kernel itself to execute adversary-controlled code. security constructs such as permission levels will often hinder access to information and use of certain techniques, so adversaries will likely need to perform privilege escalation to include use of software exploitation to circumvent those restrictions.",
                    "procedure_description": "remsec has a plugin to drop and execute vulnerable outpost sandbox or avast! virtualization drivers in order to gain kernel mode privileges.[30]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "remsec can perform dll injection.[61]"
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
                    "procedure_description": "remsec schedules the execution one of its modules by creating a new scheduler task.[6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/004",
                    "technique_name": "impair defenses : disable or modify system firewall",
                    "technique_description": "adversaries may disable or modify system firewalls in order to bypass controls limiting network usage. changes could be disabling the entire mechanism as well as adding, deleting, or modifying particular rules. this can be done numerous ways depending on the operating system, including via command-line, editing windows registry keys, and windows control panel.",
                    "procedure_description": "remsec can add or remove applications or ports on the windows firewall or disable it entirely.[32]"
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
                    "procedure_description": "remsec is capable of deleting files on the victim. it also securely removes itself after collecting and exfiltrating data.[198][199][200]"
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
                    "procedure_description": "the remsec loader implements itself with the name security support provider, a legitimate windows function. various remsec .exe files mimic legitimate file names used by microsoft, symantec, kaspersky, hewlett-packard, and vmware. remsec also disguised malicious modules using similar filenames as custom network encryption software on victims.[139][140]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1556.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1556/002",
                    "technique_name": "modify authentication process : password filter dll",
                    "technique_description": "adversaries may register malicious password filter dynamic link libraries (dlls) into the authentication process to acquire user credentials as they are validated.",
                    "procedure_description": "remsec harvests plain-text credentials as a password filter registered on domain controllers.[2]"
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
                    "procedure_description": "some data in remsec is encrypted using rc5 in cbc mode, aes-cbc with a hardcoded key, rc4, or salsa20. some data is also base64-encoded.[271][272]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "remsec can perform dll injection.[61]"
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
                    "procedure_description": "remsec contains a keylogger component.[153][154]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1556.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1556/002",
                    "technique_name": "modify authentication process : password filter dll",
                    "technique_description": "adversaries may register malicious password filter dynamic link libraries (dlls) into the authentication process to acquire user credentials as they are validated.",
                    "procedure_description": "remsec harvests plain-text credentials as a password filter registered on domain controllers.[2]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/002",
                    "technique_name": "os credential dumping : security account manager",
                    "technique_description": "adversaries may attempt to extract credential material from the security account manager (sam) database either through in-memory techniques or through the windows registry where the sam database is stored. the sam is a database file that contains local accounts for the host, typically those found with the net user command. enumerating the sam database requires system level access.",
                    "procedure_description": "remsec can dump the sam database.[28]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/001",
                    "technique_name": "account discovery : local account",
                    "technique_description": "adversaries may attempt to get a listing of local system accounts. this information can help adversaries determine which local accounts exist on a system to aid in follow-on behavior.",
                    "procedure_description": "remsec can obtain a list of users.[40]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1652",
                    "technique_link": "https://attack.mitre.org/techniques/T1652",
                    "technique_name": "device driver discovery",
                    "technique_description": "adversaries may attempt to enumerate local device drivers on a victim host. information about device drivers may highlight various insights that shape follow-on behaviors, such as the function/purpose of the host, present security tools (i.e. security software discovery) or other defenses (e.g., virtualization/sandbox evasion), as well as potential exploitable vulnerabilities (e.g., exploitation for privilege escalation).",
                    "procedure_description": "remsec has a plugin to detect active drivers of some security products.[8]"
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
                    "procedure_description": "remsec is capable of listing contents of folders on the victim. remsec also searches for custom network encryption software on victims.[250][251][252]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1046",
                    "technique_link": "https://attack.mitre.org/techniques/T1046",
                    "technique_name": "network service discovery",
                    "technique_description": "adversaries may attempt to get a listing of services running on remote hosts and local network infrastructure devices, including those that may be vulnerable to remote software exploitation. common methods to acquire this information include port and/or vulnerability scans using tools that are brought onto a system.",
                    "procedure_description": "remsec has a plugin that can perform arp scanning as well as port scanning.[53]"
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
                    "procedure_description": "remsec can obtain a process list from the victim.[215]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "remsec can ping or traceroute a remote host.[74]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1518/001",
                    "technique_name": "software discovery : security software discovery",
                    "technique_description": "adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. this may include things such as firewall rules and anti-virus. adversaries may use the information from security software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "remsec has a plugin detect security products via active drivers.[85]"
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
                    "procedure_description": "remsec can obtain the os version information, computer name, processor architecture, machine role, and os edition.[301]"
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
                    "procedure_description": "remsec can obtain information about network configuration, including the routing table, arp cache, and dns cache.[196]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1049",
                    "technique_link": "https://attack.mitre.org/techniques/T1049",
                    "technique_name": "system network connections discovery",
                    "technique_description": "adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.",
                    "procedure_description": "remsec can obtain a list of active connections and open ports.[74]"
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
                    "procedure_description": "remsec can obtain information about the current user.[156]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1025",
                    "technique_link": "https://attack.mitre.org/techniques/T1025",
                    "technique_name": "data from removable media",
                    "technique_description": "adversaries may search connected removable media on computers they have compromised to find files of interest. sensitive data can be collected from any removable media (optical disk drive, usb memory, etc.) connected to the compromised system prior to exfiltration. interactive command shells may be in use, and common functionality within cmd may be used to gather information.",
                    "procedure_description": "remsec has a package that collects documents from any inserted usb sticks.[22]"
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
                    "procedure_description": "remsec contains a keylogger component.[153][154]"
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
                    "procedure_description": "remsec is capable of using http and https for c2.[277][278][279]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/003",
                    "technique_name": "application layer protocol : mail protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with electronic mail delivery to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "remsec is capable of using smtp for c2.[18][19][20]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/004",
                    "technique_name": "application layer protocol : dns",
                    "technique_description": "adversaries may communicate using the domain name system (dns) application layer protocol to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "remsec is capable of using dns for c2.[56][57][58]"
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
                    "procedure_description": "remsec contains a network loader to receive executable modules from remote attackers and run them on the local victim. it can also upload and download files over http and https.[379][380]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1095",
                    "technique_link": "https://attack.mitre.org/techniques/T1095",
                    "technique_name": "non-application layer protocol",
                    "technique_description": "adversaries may use an osi non-application layer protocol for communication between host and c2 server or among infected hosts within a network. the list of possible protocols is extensive. specific examples include use of network layer protocols, such as the internet control message protocol (icmp), transport layer protocols, such as the user datagram protocol (udp), session layer protocols, such as socket secure (socks), as well as redirected/tunneled protocols, such as serial over lan (sol).",
                    "procedure_description": "remsec is capable of using icmp, tcp, and udp for c2.[60][61]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1048.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1048/003",
                    "technique_name": "exfiltration over alternative protocol : exfiltration over unencrypted non-c2 protocol",
                    "technique_description": "adversaries may steal data by exfiltrating it over an un-encrypted network protocol other than that of the existing command and control channel. the data may also be sent to an alternate network location from the main command and control server.",
                    "procedure_description": "remsec can exfiltrate data via a dns tunnel or email, separately from its c2 channel.[29]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1052.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1052/001",
                    "technique_name": "exfiltration over physical medium : exfiltration over usb",
                    "technique_description": "adversaries may attempt to exfiltrate data over a usb connected physical device. in certain circumstances, such as an air-gapped network compromise, exfiltration could occur via a usb device introduced by a user. the usb device could be used as the final exfiltration point or to hop between otherwise disconnected systems.",
                    "procedure_description": "remsec contains a module to move data from airgapped networks to internet-connected systems by using a removable usb device.[5]"
                }
            ]
        }
    ]
};