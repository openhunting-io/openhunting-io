var threatdata = {
    "name": "Poseidon Group",
    "alias": "Poseidon Group",
    "category": "APT",
    "type": "-",
    "modified": "2021",
    "all_data": {
        "actor": "Poseidon Group",
        "names": [
            {
                "name": "Poseidon Group",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "Brazil"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2005",
        "description": "(Kaspersky) During the latter part of 2015, Kaspersky researchers from GreAT (Global Research and Analysis Team) got hold of the missing pieces of an intricate puzzle that points to the dawn of the first Portuguese-speaking targeted attack group, named \u201cPoseidon.\u201d The group\u2019s campaigns appear to have been active since at least 2005, while the very first sample found points to 2001. This signals just how long ago the Poseidon threat actor was already working on its offensive framework.\n\nThe Poseidon Group is a long-running team operating on all domains: land, air, and sea. They are dedicated to running targeted attacks campaigns to aggressively collect information from company networks through the use of spear-phishing packaged with embedded, executable elements inside office documents and extensive lateral movement tools. The information exfiltrated is then leveraged by a company front to blackmail victim companies into contracting the Poseidon Group as a security firm. Even when contracted, the Poseidon Group may continue its infection or initiate another infection at a later time, persisting on the network to continue data collection beyond its contractual obligation. The Poseidon Group has been active, using custom code and evolving their toolkit since at least 2005. Their tools are consistently designed to function on English and Portuguese systems spanning the gamut of Windows OS, and their exfiltration methods include the use of hijacked satellite connections. Poseidon continues to be active at this time.",
        "observed-sectors": [
            "Energy",
            "Financial",
            "Government",
            "Media",
            "Manufacturing",
            "Telecommunications",
            "Utilities"
        ],
        "observed-countries": [
            "Brazil",
            "France",
            "India",
            "Kazakhstan",
            "Russia",
            "UAE",
            "USA"
        ],
        "tools": [
            "IGT supertool"
        ],
        "counter-operations": [
            {
                "date": "2016-02",
                "activity": "The C2 servers have been sinkholed by Kaspersky.\nhttps://securelist.com/poseidon-group-a-targeted-attack-boutique-specializing-in-global-cyber-espionage/73673/"
            }
        ],
        "information": [
            "https://securelist.com/poseidon-group-a-targeted-attack-boutique-specializing-in-global-cyber-espionage/73673/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0033/"
        ],
        "uuid": "d8a39ee0-3ec7-41dc-9d6e-dcbab0779ca3",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "poseidon_group",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://attack.mitre.org/wiki/Groups",
            "date": "2021",
            "organization": "",
            "author": "MITRE",
            "title": "Groups Overview of MITRE",
            "categories": [
                "DragonOK",
                "Poseidon Group",
                "Scarlet Mimic"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=T5wPwvLrBYU",
            "date": "2019-05-20",
            "organization": "Youtube (Kaspersky)",
            "author": "Costin Raiu",
            "title": "Operation ShadowHammer: Costin Raiu and Vitaly Kamlyuk at #TheSAS2019",
            "categories": [
                "DragonOK",
                "Poseidon Group",
                "Scarlet Mimic"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0033/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: Poseidon Group",
            "categories": [
                "Poseidon Group"
            ]
        },
        {
            "data_url": "https://securelist.com/poseidon-group-a-targeted-attack-boutique-specializing-in-global-cyber-espionage/73673/",
            "date": "2016-02-09",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Poseidon Group: a Targeted Attack Boutique  specializing in global cyber-espionage",
            "categories": [
                "Poseidon Group"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "poseidon group",
            "procedure_code": "g0033",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0033",
            "techniques": [
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
                    "procedure_description": "the poseidon group's information gathering tool (igt) includes powershell components.[177]"
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
                    "procedure_description": "poseidon group tools attempt to spoof anti-virus processes as a means of self-defense.[125]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003",
                    "technique_link": "https://attack.mitre.org/techniques/T1003",
                    "technique_name": "os credential dumping",
                    "technique_description": "adversaries may attempt to dump credentials to obtain account login and credential material, normally in the form of a hash or a clear text password, from the operating system and software. credentials can then be used to perform lateral movement and access restricted information.",
                    "procedure_description": "poseidon group conducts credential dumping on victims, with a focus on obtaining credentials belonging to domain and database servers.[12]"
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
                    "procedure_description": "poseidon group searches for administrator accounts on both the local victim machine and the network.[32]"
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
                    "procedure_description": "poseidon group searches for administrator accounts on both the local victim machine and the network.[38]"
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
                    "procedure_description": "after compromising a victim, poseidon group lists all running processes.[201]"
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
                    "procedure_description": "poseidon group obtains and saves information about victim network interfaces and addresses.[64]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1007",
                    "technique_link": "https://attack.mitre.org/techniques/T1007",
                    "technique_name": "system service discovery",
                    "technique_description": "adversaries may try to gather information about registered local system services. adversaries may obtain information about services using tools as well as os utility commands such as sc query, tasklist /svc, systemctl --type=service, and net start.",
                    "procedure_description": "after compromising a victim, poseidon group discovers all running services.[41]"
                }
            ]
        }
    ]
};