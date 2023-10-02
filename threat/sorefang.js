var threatdata = {
    "name": "SoreFang",
    "alias": "SoreFang",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "SoreFang",
        "names": [
            {
                "name": "SoreFang"
            }
        ],
        "description": "(NCSC-UK) Malware, dubbed \u2018SoreFang\u2019 by the NCSC, is a first stage downloader that uses HTTP to exfiltrate victim information and download second stage malware. The sample analysed by the NCSC contains the same infrastructure as a {{WellMess}} sample.\n\nIt is likely that SoreFang targets SangFor devices.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://www.ncsc.gov.uk/files/Advisory-APT29-targets-COVID-19-vaccine-development.pdf",
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar20-198a",
            "https://securelist.com/apt-trends-report-q3-2020/99204/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0516"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sorefang"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:SoreFang"
        ],
        "uuid": "ed893e00-126d-4244-8435-830fab699994",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sorefang",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/apt-trends-report-q3-2020/99204/",
            "date": "2020-11-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q3 2020",
            "categories": [
                "WellMail",
                "EVILNUM",
                "Janicab",
                "Poet RAT",
                "AsyncRAT",
                "Ave Maria",
                "Cobalt Strike",
                "Crimson RAT",
                "CROSSWALK",
                "Dtrack",
                "LODEINFO",
                "MoriAgent",
                "Okrum",
                "PlugX",
                "poisonplug",
                "Rover",
                "ShadowPad",
                "SoreFang",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.ncsc.gov.uk/files/Advisory-APT29-targets-COVID-19-vaccine-development.pdf",
            "date": "2020-07-16",
            "organization": "NCSC UK",
            "author": "NCSC UK",
            "title": "Advisory: APT29 targets COVID-19 vaccine development",
            "categories": [
                "WellMail",
                "elf.wellmess",
                "SoreFang",
                "WellMess"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar20-198a",
            "date": "2020-07-16",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "Malware Analysis Report (AR20-198A)",
            "categories": [
                "SoreFang"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "sorefang",
            "procedure_code": "s0516",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0516",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1190",
                    "technique_link": "https://attack.mitre.org/techniques/T1190",
                    "technique_name": "exploit public-facing application",
                    "technique_description": "adversaries may attempt to exploit a weakness in an internet-facing host or system to initially access a network. the weakness in the system can be a software bug, a temporary glitch, or a misconfiguration.",
                    "procedure_description": "sorefang can gain access by exploiting a sangfor ssl vpn vulnerability that allows for the placement and delivery of malicious update binaries.[55]"
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
                    "procedure_description": "sorefang can gain persistence through use of scheduled tasks.[165]"
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
                    "procedure_description": "sorefang can gain persistence through use of scheduled tasks.[165]"
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
                    "procedure_description": "sorefang can gain persistence through use of scheduled tasks.[165]"
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
                    "procedure_description": "sorefang can decode and decrypt exfiltrated data sent to c2.[217]"
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
                    "procedure_description": "sorefang has the ability to encode and rc6 encrypt data sent to c2.[306]"
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
                    "procedure_description": "sorefang can collect usernames from the local system via net.exe user.[43]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/002",
                    "technique_name": "account discovery : domain account",
                    "technique_description": "adversaries may attempt to get a listing of domain accounts. this information can help adversaries determine which domain accounts exist to aid in follow-on behavior such as targeting specific accounts which possess particular privileges.",
                    "procedure_description": "sorefang can enumerate domain accounts via net.exe user /domain.[45]"
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
                    "procedure_description": "sorefang has the ability to list directories.[283]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/002",
                    "technique_name": "permission groups discovery : domain groups",
                    "technique_description": "adversaries may attempt to find domain-level groups and permission settings. the knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as domain administrators.",
                    "procedure_description": "sorefang can enumerate domain groups by executing net.exe group /domain.[30]"
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
                    "procedure_description": "sorefang can enumerate processes on a victim machine through use of tasklist.[238]"
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
                    "procedure_description": "sorefang can collect the hostname, operating system configuration, product id, and disk space on victim machines by executing systeminfo.[342]"
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
                    "procedure_description": "sorefang can collect the tcp/ip, dns, dhcp, and network adapter configuration on a compromised host via ipconfig.exe /all.[214]"
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
                    "procedure_description": "sorefang can use http in c2 communications.[313][314]"
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
                    "procedure_description": "sorefang can download additional payloads from c2.[421][422]"
                }
            ]
        }
    ]
};