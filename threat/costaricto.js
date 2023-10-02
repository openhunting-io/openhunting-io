var threatdata = {
    "name": "CostaRicto",
    "alias": "CostaRicto",
    "category": "APT",
    "type": "-",
    "modified": "2021-01-07",
    "all_data": {
        "actor": "CostaRicto",
        "names": [
            {
                "name": "CostaRicto",
                "name-giver": "BlackBerry"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial gain"
        ],
        "first-seen": "2017",
        "description": "(BlackBerry) During the past six months, the BlackBerry Research and Intelligence team have been monitoring a cyber-espionage campaign that is targeting disparate victims around the globe. The campaign, dubbed CostaRicto by BlackBerry, appears to be operated by \u201chackers-for-hire\u201d, a group of APT mercenaries who possess bespoke malware tooling and complex VPN proxy and SSH tunnelling capabilities.\nMercenary groups offering APT-style attacks are becoming more and more popular. Their tactics, techniques, and procedures (TTPs) often resemble highly sophisticated state-sponsored campaigns, but the profiles and geography of their victims are far too diverse to be aligned with a single bad actor\u2019s interests.\nAlthough in theory the customers of a mercenary APT might include anyone who can afford it, the more sophisticated actors will naturally choose to work with patrons of the highest profile \u2013 be it large organizations, influential individuals, or even governments. Having a lot at stake, the cybercriminals must choose very carefully when selecting their commissions to avoid the risk of being exposed.",
        "observed-countries": [
            "Australia",
            "Austria",
            "Bahamas",
            "Bangladesh",
            "China",
            "Czech",
            "France",
            "India",
            "Mozambique",
            "Netherlands",
            "Portugal",
            "Singapore",
            "USA"
        ],
        "tools": [
            "CostaBricks",
            "nmap",
            "PowerSploit",
            "PsExec",
            "SombRAT"
        ],
        "information": [
            "https://blogs.blackberry.com/en/2020/11/the-costaricto-campaign-cyber-espionage-outsourced"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:CostaRicto"
        ],
        "uuid": "18339642-2d15-4dae-abfe-27abe661b911",
        "last-card-change": "2021-01-07",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "costaricto",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "costaricto",
            "procedure_code": "c0004",
            "procedure_type": "campaign",
            "procedure_link": "https://attack.mitre.org/campaigns/C0004",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/001",
                    "technique_name": "acquire infrastructure : domains",
                    "technique_description": "adversaries may acquire domains that can be used during targeting. domain names are the human readable names used to represent one or more ip addresses. they can be purchased or, in some cases, acquired for free.",
                    "procedure_description": "for costaricto, the threat actors established domains, some of which appeared to spoof legitimate domains.[21]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1587.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1587/001",
                    "technique_name": "develop capabilities : malware",
                    "technique_description": "adversaries may develop malware and malware components that can be used during targeting. building malicious software can include the development of payloads, droppers, post-compromise tools, backdoors (including backdoored images), packers, c2 protocols, and the creation of infected removable media. adversaries may develop malware to support their operations, creating a means for maintaining control of remote machines, evading defenses, and executing post-compromise behaviors.",
                    "procedure_description": "for costaricto, the threat actors used custom malware, including ps1, costabricks, and sombrat.[12]"
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
                    "procedure_description": "during costaricto, the threat actors obtained open source tools to use in their operations.[40]"
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
                    "procedure_description": "during costaricto, the threat actors set up remote tunneling using an ssh tool to maintain access to a compromised environment.[12]"
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
                    "procedure_description": "during costaricto, the threat actors used scheduled tasks to download backdoor tools.[45]"
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
                    "procedure_description": "during costaricto, the threat actors set up remote tunneling using an ssh tool to maintain access to a compromised environment.[12]"
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
                    "procedure_description": "during costaricto, the threat actors used scheduled tasks to download backdoor tools.[45]"
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
                    "procedure_description": "during costaricto, the threat actors used scheduled tasks to download backdoor tools.[45]"
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
                    "procedure_description": "during costaricto, the threat actors employed nmap and pscan to scan target environments.[24]"
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
                    "procedure_description": "during costaricto, the threat actors collected data and files from compromised networks.[49]"
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
                    "procedure_description": "during costaricto, the threat actors downloaded malware and tools onto a compromised host.[124]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1572",
                    "technique_link": "https://attack.mitre.org/techniques/T1572",
                    "technique_name": "protocol tunneling",
                    "technique_description": "adversaries may tunnel network communications to and from a victim system within a separate protocol to avoid detection/network filtering and/or enable access to otherwise unreachable systems. tunneling involves explicitly encapsulating a protocol within another. this behavior may conceal malicious traffic by blending in with existing traffic and/or provide an outer layer of encryption (similar to a vpn). tunneling could also enable routing of network packets that would otherwise not reach their intended destination, such as smb, rdp, or other traffic that would be filtered by network appliances or not routed over the internet.",
                    "procedure_description": "during costaricto, the threat actors set up remote ssh tunneling into the victim's environment from a malicious domain.[11]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "during costaricto, the threat actors used a layer of proxies to manage c2 communications.[6]"
                }
            ]
        }
    ]
};