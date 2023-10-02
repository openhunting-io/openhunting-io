var threatdata = {
    "name": "nbtscan",
    "alias": "nbtscan, NBTscan",
    "category": "Tools",
    "type": "Reconnaissance",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "nbtscan",
        "names": [
            {
                "name": "nbtscan"
            },
            {
                "name": "NBTscan"
            }
        ],
        "description": "Nbtscan is a program for scanning IP networks for NetBIOS name information. It sends Net\u2010BIOS status query to each address in supplied range and lists received information in human readable form. For each responded host it lists IP address, NetBIOS computer name, logged-in user name and MAC address (such as Ethernet).",
        "category": "Tools",
        "type": [
            "Reconnaissance"
        ],
        "information": [
            "https://securityonline.info/nbtscan-scanning-ip-networks-netbios-name-information/",
            "https://sectools.org/tool/nbtscan/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0590/"
        ],
        "uuid": "8b0e49d2-19f9-439f-ada2-4a5c5376adfa",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "nbtscan",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "nbtscan",
            "procedure_code": "s0590",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0590",
            "techniques": [
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
                    "procedure_description": "nbtscan can dump and print whole packet content.[20][21]"
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
                    "procedure_description": "nbtscan can be used to scan ip networks.[42][43]"
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
                    "procedure_description": "nbtscan can dump and print whole packet content.[20][21]"
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
                    "procedure_description": "nbtscan can list netbios computer names.[60][61]"
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
                    "procedure_description": "nbtscan can be used to collect mac addresses.[154][155]"
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
                    "procedure_description": "nbtscan can list active users on the system.[125][126]"
                }
            ]
        }
    ]
};