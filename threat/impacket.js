var threatdata = {
    "name": "Impacket",
    "alias": "Impacket",
    "category": "Tools",
    "type": "Credential stealer, Info stealer",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "Impacket",
        "names": [
            {
                "name": "Impacket"
            }
        ],
        "description": "Impacket is an open source collection of modules written in Python for programmatically constructing and manipulating network protocols. Impacket contains several tools for remote service execution, Kerberos manipulation, Windows credential dumping, packet sniffing, and relay attacks.",
        "category": "Tools",
        "type": [
            "Credential stealer",
            "Info stealer"
        ],
        "information": [
            "https://github.com/SecureAuthCorp/impacket"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0357/"
        ],
        "uuid": "8e29a0d3-324b-43f0-b4f8-f81d18a2744e",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "impacket",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "impacket",
            "procedure_code": "s0357",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0357",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1569.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1569/002",
                    "technique_name": "system services : service execution",
                    "technique_description": "adversaries may abuse the windows service control manager to execute malicious commands or payloads. the windows service control manager (services.exe) is an interface to manage and manipulate services. the service control manager is accessible to users via gui components as well as system utilities such as sc.exe and net.",
                    "procedure_description": "impacket contains various modules emulating other service execution tools such as psexec.[30]"
                },
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
                    "procedure_description": "impacket's wmiexec module can be used to execute commands through wmi.[60]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1557.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1557/001",
                    "technique_name": "adversary-in-the-middle : llmnr/nbt-ns poisoning and smb relay",
                    "technique_description": "by responding to llmnr/nbt-ns network traffic, adversaries may spoof an authoritative source for name resolution to force communication with an adversary controlled system. this activity may be used to collect or relay authentication materials.",
                    "procedure_description": "impacket modules like ntlmrelayx and smbrelayx can be used in conjunction with network sniffing and llmnr/nbt-ns poisoning and smb relay to gather netntlm credentials for brute force or relay attacks that can gain code execution.[10]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1040",
                    "technique_link": "https://attack.mitre.org/techniques/T1040",
                    "technique_name": "network sniffing",
                    "technique_description": "adversaries may sniff network traffic to capture information about an environment, including authentication material passed over the network. network sniffing refers to using the network interface on a system to monitor or capture information sent over a wired or wireless connection. an adversary may place a network interface into promiscuous mode to passively access data in transit over the network, or use span ports to capture a larger amount of data.",
                    "procedure_description": "impacket can be used to sniff network traffic via an interface or raw socket.[16]"
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
                    "procedure_description": "secretsdump and mimikatz modules within impacket can perform credential dumping to obtain account and password information.[38]"
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
                    "procedure_description": "secretsdump and mimikatz modules within impacket can perform credential dumping to obtain account and password information.[13]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/003",
                    "technique_name": "os credential dumping : ntds",
                    "technique_description": "adversaries may attempt to access or create a copy of the active directory domain database in order to steal credential information, as well as obtain other information about domain members such as devices, users, and access rights. by default, the ntds file (ntds.dit) is located in %systemroot%\\ntds\\ntds.dit of a domain controller.",
                    "procedure_description": "secretsdump and mimikatz modules within impacket can perform credential dumping to obtain account and password information from ntds.dit.[15]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/004",
                    "technique_name": "os credential dumping : lsa secrets",
                    "technique_description": "adversaries with system access to a host may attempt to access local security authority (lsa) secrets, which can contain a variety of different credential materials, such as credentials for service accounts. lsa secrets are stored in the registry at hkey_local_machine\\security\\policy\\secrets. lsa secrets can also be dumped from memory.",
                    "procedure_description": "secretsdump and mimikatz modules within impacket can perform credential dumping to obtain account and password information.[14]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1558.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1558/003",
                    "technique_name": "steal or forge kerberos tickets : kerberoasting",
                    "technique_description": "adversaries may abuse a valid kerberos ticket-granting ticket (tgt) or sniff network traffic to obtain a ticket-granting service (tgs) ticket that may be vulnerable to brute force.",
                    "procedure_description": "impacket modules like getuserspns can be used to get service principal names (spns) for user accounts. the output is formatted to be compatible with cracking tools like john the ripper and hashcat.[11]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1040",
                    "technique_link": "https://attack.mitre.org/techniques/T1040",
                    "technique_name": "network sniffing",
                    "technique_description": "adversaries may sniff network traffic to capture information about an environment, including authentication material passed over the network. network sniffing refers to using the network interface on a system to monitor or capture information sent over a wired or wireless connection. an adversary may place a network interface into promiscuous mode to passively access data in transit over the network, or use span ports to capture a larger amount of data.",
                    "procedure_description": "impacket can be used to sniff network traffic via an interface or raw socket.[16]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1557.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1557/001",
                    "technique_name": "adversary-in-the-middle : llmnr/nbt-ns poisoning and smb relay",
                    "technique_description": "by responding to llmnr/nbt-ns network traffic, adversaries may spoof an authoritative source for name resolution to force communication with an adversary controlled system. this activity may be used to collect or relay authentication materials.",
                    "procedure_description": "impacket modules like ntlmrelayx and smbrelayx can be used in conjunction with network sniffing and llmnr/nbt-ns poisoning and smb relay to gather netntlm credentials for brute force or relay attacks that can gain code execution.[10]"
                }
            ]
        }
    ]
};