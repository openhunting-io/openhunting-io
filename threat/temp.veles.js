var threatdata = {
    "name": "TEMP.Veles",
    "alias": "TEMP.Veles, Xenotime, ATK 91",
    "category": "APT",
    "type": "-",
    "modified": "2022-04-04",
    "all_data": {
        "actor": "TEMP.Veles",
        "names": [
            {
                "name": "TEMP.Veles",
                "name-giver": "FireEye"
            },
            {
                "name": "Xenotime",
                "name-giver": "Dragos"
            },
            {
                "name": "ATK 91",
                "name-giver": "Thales"
            }
        ],
        "country": [
            "Russia"
        ],
        "sponsor": "State-sponsored, Central Scientific Research Institute of Chemistry and Mechanics",
        "motivation": [
            "Sabotage and destruction"
        ],
        "first-seen": "2014",
        "description": "TEMP.Veles is a Russia-based threat group that has targeted critical infrastructure. The group has been observed utilizing TRITON, a malware framework designed to manipulate industrial safety systems.",
        "observed-sectors": [
            "Critical infrastructure",
            "Energy",
            "Manufacturing",
            "Oil and gas"
        ],
        "observed-countries": [
            "Saudi Arabia",
            "USA",
            "others"
        ],
        "tools": [
            "Cryptcat",
            "Mimikatz",
            "NetExec",
            "PsExec",
            "SecHack",
            "Triton",
            "Wii"
        ],
        "operations": [
            {
                "date": "2014",
                "activity": "TRISIS malware\nhttps://dragos.com/resource/trisis-analyzing-safety-system-targeting-malware/"
            },
            {
                "date": "2017",
                "activity": "TRITON malware\nhttps://www.fireeye.com/blog/threat-research/2017/12/attackers-deploy-new-ics-attack-framework-triton.html\nhttps://www.fireeye.com/blog/threat-research/2018/10/triton-attribution-russian-government-owned-lab-most-likely-built-tools.html"
            },
            {
                "date": "2019-02",
                "activity": "The most dangerous threat to ICS has new targets in its sights. Dragos identified the Xenotime activity group expanded its targeting beyond oil and gas to the electric utility sector. This expansion to a new vertical illustrates a trend that will likely continue for other ICS-targeting adversaries.\nhttps://dragos.com/blog/industry-news/threat-proliferation-in-ics-cybersecurity-xenotime-now-targeting-electric-sector-in-addition-to-oil-and-gas/"
            }
        ],
        "counter-operations": [
            {
                "date": "2020-10",
                "activity": "US Treasury sanctions Russian research institute behind Triton malware\nhttps://www.zdnet.com/article/us-treasury-sanctions-russian-research-institute-behind-triton-malware/"
            },
            {
                "date": "2022-03",
                "activity": "DOJ unseals indictments of four Russian gov\u2019t officials for cyberattacks on energy companies\nhttps://therecord.media/doj-unseals-indictments-of-four-russian-govt-officials-for-cyberattacks-on-energy-companies/"
            }
        ],
        "information": [
            "https://dragos.com/resource/xenotime/",
            "https://www.fireeye.com/blog/threat-research/2019/04/triton-actor-ttp-profile-custom-attack-tools-detections.html",
            "https://ics-cert.us-cert.gov/sites/default/files/documents/MAR-17-352-01%20HatMan%E2%80%94Safety%20System%20Targeted%20Malware_S508C.pdf",
            "https://www.cisa.gov/uscert/ncas/alerts/aa22-083a"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0088/"
        ],
        "uuid": "ea108a02-eb3a-4e08-be7b-bd164fc5c220",
        "last-card-change": "2022-04-04",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "temp.veles",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cyberthreat.thalesgroup.com/attackers/ATK91",
            "date": "2022-03-04",
            "organization": "Thales",
            "author": "Thales",
            "title": "ATK91",
            "categories": [
                "TEMP.Veles"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0088/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: TEMP.Veles",
            "categories": [
                "TEMP.Veles"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/12/attackers-deploy-new-ics-attack-framework-triton.html",
            "date": "2017-12-14",
            "organization": "FireEye",
            "author": "Blake Johnson",
            "title": "Attackers Deploy New ICS Attack Framework \u201cTRITON\u201d and Cause Operational Disruption to Critical Infrastructure",
            "categories": [
                "Triton",
                "TEMP.Veles"
            ]
        },
        {
            "data_url": "https://dragos.com/resource/trisis-analyzing-safety-system-targeting-malware/",
            "date": "2017-12",
            "organization": "Dragos",
            "author": "Robert M. Lee",
            "title": "TRISIS: Analyzing Safety System Targeting Malware",
            "categories": [
                "TEMP.Veles"
            ]
        },
        {
            "data_url": "https://www.dragos.com/threat/xenotime/",
            "date": "2017",
            "organization": "Dragos",
            "author": "Dragos",
            "title": "XENOTIME",
            "categories": [
                "TEMP.Veles"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "temp.veles",
            "procedure_code": "g0088",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0088",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/003",
                    "technique_name": "acquire infrastructure : virtual private server",
                    "technique_description": "adversaries may rent virtual private servers (vpss)\u00a0that can be used during targeting. there exist a variety of cloud service providers that will sell virtual machines/containers as a service. by utilizing a vps, adversaries can make it difficult to physically tie back operations to them. the use of cloud infrastructure can also make it easier for adversaries to rapidly provision, modify, and shut down their infrastructure.",
                    "procedure_description": "temp.veles has used virtual private server (vps) infrastructure.[6]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1588.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1588/002",
                    "technique_name": "obtain capabilities : tool",
                    "technique_description": "adversaries may buy, steal, or download software tools that can be used during targeting. tools can be open or closed source, free or commercial. a tool can be used for malicious purposes by an adversary, but (unlike malware) were not intended to be used for those purposes (ex: psexec). tool acquisition can involve the procurement of commercial software licenses, including for red teaming tools such as cobalt strike. commercial software may be obtained through purchase, stealing licenses (or licensed copies of the software), or cracking trial versions.",
                    "procedure_description": "temp.veles has obtained and used tools such as mimikatz and psexec.[92]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1133",
                    "technique_link": "https://attack.mitre.org/techniques/T1133",
                    "technique_name": "external remote services",
                    "technique_description": "adversaries may leverage external-facing remote services to initially access and/or persist within a network. remote services such as vpns, citrix, and other access mechanisms allow users to connect to internal enterprise network resources from external locations. there are often remote service gateways that manage connections and credential authentication for these services. services such as windows remote management and vnc can also be used externally.",
                    "procedure_description": "temp.veles has used a vpn to persist in the victim environment.[41]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "temp.veles has used compromised vpn accounts.[62]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "temp.veles has used a publicly-available powershell-based tool, wmimplant.[226] the group has also used powershell to perform timestomping.[227]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "temp.veles has used scheduled task xml triggers.[170]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/012",
                    "technique_name": "event triggered execution : image file execution options injection",
                    "technique_description": "adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by image file execution options (ifeo) debuggers. ifeos enable a developer to attach a debugger to an application. when a process is created, a debugger present in an application\u2019s ifeo will be prepended to the application\u2019s name, effectively launching the new process under the debugger (e.g., c:\\dbg\\ntsd.exe -g  notepad.exe).",
                    "procedure_description": "temp.veles has modified and added entries within hkey_local_machine\\software\\microsoft\\windows nt\\currentversion\\image file execution options to maintain persistence.[11]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1133",
                    "technique_link": "https://attack.mitre.org/techniques/T1133",
                    "technique_name": "external remote services",
                    "technique_description": "adversaries may leverage external-facing remote services to initially access and/or persist within a network. remote services such as vpns, citrix, and other access mechanisms allow users to connect to internal enterprise network resources from external locations. there are often remote service gateways that manage connections and credential authentication for these services. services such as windows remote management and vnc can also be used externally.",
                    "procedure_description": "temp.veles has used a vpn to persist in the victim environment.[41]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "temp.veles has used scheduled task xml triggers.[170]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1505.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1505/003",
                    "technique_name": "server software component : web shell",
                    "technique_description": "adversaries may backdoor web servers with web shells to establish persistent access to systems. a web shell is a web script that is placed on an openly accessible web server to allow an adversary to use the web server as a gateway into a network. a web shell may provide a set of functions to execute or a command-line interface on the system that hosts the web server.",
                    "procedure_description": "temp.veles has planted web shells on outlook exchange servers.[37]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "temp.veles has used compromised vpn accounts.[62]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/012",
                    "technique_name": "event triggered execution : image file execution options injection",
                    "technique_description": "adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by image file execution options (ifeo) debuggers. ifeos enable a developer to attach a debugger to an application. when a process is created, a debugger present in an application\u2019s ifeo will be prepended to the application\u2019s name, effectively launching the new process under the debugger (e.g., c:\\dbg\\ntsd.exe -g  notepad.exe).",
                    "procedure_description": "temp.veles has modified and added entries within hkey_local_machine\\software\\microsoft\\windows nt\\currentversion\\image file execution options to maintain persistence.[11]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "temp.veles has used scheduled task xml triggers.[170]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "temp.veles has used compromised vpn accounts.[62]"
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
                    "procedure_description": "temp.veles routinely deleted tools, logs, and other files after they were finished with them.[238]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/006",
                    "technique_name": "indicator removal : timestomp",
                    "technique_description": "adversaries may modify file time attributes to hide new or changes to existing files. timestomping is a technique that modifies the timestamps of a file (the modify, access, create, and change times), often to mimic files that are in the same folder. this is done, for example, on files that have been modified or created by the adversary so that they do not appear conspicuous to forensic investigators or file analysis tools.",
                    "procedure_description": "temp.veles used timestomping to modify the $standard_information attribute on tools.[53]"
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
                    "procedure_description": "temp.veles has renamed files to look like legitimate files, such as windows update files or schneider electric application files.[166]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/005",
                    "technique_name": "obfuscated files or information : indicator removal from tools",
                    "technique_description": "adversaries may remove indicators from tools if they believe their malicious tool was detected, quarantined, or otherwise curtailed. they can modify the tool by removing the indicator and using the updated version that is no longer detected by the target's defensive systems or subsequent targets that may use similar systems.",
                    "procedure_description": "temp.veles has modified files based on the open-source project cryptcat in an apparent attempt to decrease av detection rates.[19]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "temp.veles has used compromised vpn accounts.[62]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/001",
                    "technique_name": "os credential dumping : lsass memory",
                    "technique_description": "adversaries may attempt to access credential material stored in the process memory of the local security authority subsystem service (lsass). after a user logs on, the system generates and stores a variety of credential materials in lsass process memory. these credential materials can be harvested by an administrative user or system and used to conduct lateral movement using use alternate authentication material.",
                    "procedure_description": "temp.veles has used mimikatz and a custom tool, sechack, to harvest credentials. [83]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/001",
                    "technique_name": "remote services : remote desktop protocol",
                    "technique_description": "adversaries may use valid accounts to log into a computer using the remote desktop protocol (rdp). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "temp.veles utilized rdp throughout an operation.[53]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/004",
                    "technique_name": "remote services : ssh",
                    "technique_description": "adversaries may use valid accounts to log into remote machines using secure shell (ssh). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "temp.veles has relied on encrypted ssh-based tunnels to transfer tools and for remote command/program execution.[17]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1074/001",
                    "technique_name": "data staged : local data staging",
                    "technique_description": "adversaries may stage collected data in a central location or directory on the local system prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "temp.veles has created staging folders in directories that were infrequently used by legitimate users or processes.[92]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1571",
                    "technique_link": "https://attack.mitre.org/techniques/T1571",
                    "technique_name": "non-standard port",
                    "technique_description": "adversaries may communicate using a protocol and port pairing that are typically not associated. for example, https over port 8088 or port 587 as opposed to the traditional port 443. adversaries may make changes to the standard port used by a protocol to bypass filtering or muddle analysis/parsing of network data.",
                    "procedure_description": "temp.veles has used port-protocol mismatches on ports such as 443, 4444, 8531, and 50501 during c2.[38]"
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