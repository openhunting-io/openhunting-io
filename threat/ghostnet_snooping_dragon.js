var threatdata = {
    "name": "GhostNet, Snooping Dragon",
    "alias": "GhostNet, Snooping Dragon",
    "category": "APT",
    "type": "-",
    "modified": "2021-05-21",
    "all_data": {
        "actor": "GhostNet, Snooping Dragon",
        "names": [
            {
                "name": "GhostNet",
                "name-giver": "Information Warfare Monitor"
            },
            {
                "name": "Snooping Dragon",
                "name-giver": "UCAM"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored, PLA Unit 61398",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2009",
        "description": "(Information Warfare Monitor) Cyber espionage is an issue whose time has come. In this second report from the Information Warfare Monitor, we lay out the findings of a 10-month investigation of alleged Chinese cyber spying against Tibetan institutions.  The investigation, consisting of fieldwork, technical scouting, and laboratory analysis, discovered a lot more. The investigation ultimately uncovered a network of over 1,295 infected hosts in 103 countries. Up to 30% of the infected hosts are considered high-value targets and include computers located at ministries of foreign affairs, embassies, international organizations, news media, and NGOs. The Tibetan computer systems we manually investigated, and from which our investigations began, were conclusively compromised by multiple infections that gave attackers unprecedented access to potentially sensitive information.\n\n(UCAM) Attacks on the Dalai Lama\u2019s Private Office\nThe OHHDL started to suspect it was under surveillance while setting up meetings be-tween His Holiness and foreign dignitaries. They sent an email invitation on behalf of His Holiness to a foreign diplomat, but before they could follow it up with a courtesy telephone call, the diplomat\u2019s office was contacted by the Chinese government and warned not to go ahead with the meeting. The Tibetans wondered whether a computer compromise might be the explanation; they called ONI Asia who called us. (Until May 2008, the first author was employed on a studentship funded by the OpenNet Initiative and the second author was a principal investigator for ONI.)\n\nAlso see {{Shadow Network}}.",
        "observed-sectors": [
            "Embassies",
            "Financial",
            "Government",
            "Media",
            "NGOs"
        ],
        "observed-countries": [
            "Bangladesh",
            "Barbados",
            "Bhutan",
            "Brunei",
            "Philippines",
            "Cyprus",
            "Germany",
            "India",
            "Indonesia",
            "Iran",
            "Latvia",
            "Malta",
            "Pakistan",
            "Portugal",
            "Romania",
            "South Korea",
            "Taiwan",
            "Thailand",
            "ASEAN",
            "NATO",
            "SAARC (South Asian Association for Regional Cooperation), the Asian Development Bank and news organizations"
        ],
        "tools": [
            "Gh0stnet",
            "Gh0st RAT",
            "TOM-Skype"
        ],
        "counter-operations": [
            {
                "date": "2010",
                "activity": "Taken down by the Shadowserver Foundation."
            }
        ],
        "information": [
            "http://www.nartv.org/mirror/ghostnet.pdf",
            "https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-746.pdf",
            "https://en.wikipedia.org/wiki/GhostNet"
        ],
        "uuid": "b3621d74-4802-4c40-995b-cf9258c832ce",
        "last-card-change": "2021-05-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ghostnet_snooping_dragon",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://en.wikipedia.org/wiki/GhostNet",
            "date": "2009-03-29",
            "organization": "Wikipedia",
            "author": "Various",
            "title": "GhostNet",
            "categories": [
                "Gh0stnet",
                "GhostNet"
            ]
        },
        {
            "data_url": "http://www.nartv.org/mirror/ghostnet.pdf",
            "date": "2009-03-28",
            "organization": "Infinitum Labs",
            "author": "Information Warfare Monitor",
            "title": "Tracking GhostNet: Investigating a Cyber Espionage Network",
            "categories": [
                "Ghost RAT",
                "GhostNet"
            ]
        },
        {
            "data_url": "https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-746.pdf",
            "date": "2009-03",
            "organization": "",
            "author": "Shishir Nagaraja",
            "title": "The snooping dragon:social-malware surveillanceof the Tibetan movement",
            "categories": [
                "GhostNet"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "net",
            "procedure_code": "s0039",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0039",
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
                    "procedure_description": "the net start and net stop commands can be used in net to execute or stop windows services.[36]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1136.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1136/001",
                    "technique_name": "create account : local account",
                    "technique_description": "adversaries may create a local account to maintain access to victim systems. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service. with a sufficient level of access, the net user /add command can be used to create a local account. on macos systems the dscl -create command can be used to create a local account. local accounts may also be added to network devices, often via common network device cli commands such as username.",
                    "procedure_description": "the net user username \\password commands in net can be used to create a local account.[20]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1136.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1136/002",
                    "technique_name": "create account : domain account",
                    "technique_description": "adversaries may create a domain account to maintain access to victim systems. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover user, administrator, and service accounts. with a sufficient level of access, the net user /add /domain command can be used to create a domain account.",
                    "procedure_description": "the net user username \\password \\domain commands in net can be used to create a domain account.[6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/005",
                    "technique_name": "indicator removal : network share connection removal",
                    "technique_description": "adversaries may remove share connections that are no longer useful in order to clean up traces of their operation. windows shared drive and smb/windows admin shares connections can be removed when no longer needed. net is an example utility that can be used to remove network share connections with the net use \\system\\share /delete command.",
                    "procedure_description": "the net use \\system\\share /delete command can be used in net to remove an established connection to a network share.[1]"
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
                    "procedure_description": "commands under net user can be used in net to gather information about and manipulate user accounts.[27]"
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
                    "procedure_description": "net commands used with the /domain flag can be used to gather information about and manipulate user accounts on the current domain.[32]"
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
                    "procedure_description": "the net view \\remotesystem and net share commands in net can be used to find shared drives and directories on remote and local systems respectively.[38]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1201",
                    "technique_link": "https://attack.mitre.org/techniques/T1201",
                    "technique_name": "password policy discovery",
                    "technique_description": "adversaries may attempt to access detailed information about the password policy used within an enterprise network or cloud environment. password policies are a way to enforce complex passwords that are difficult to guess or crack through brute force. this information may help the adversary to create a list of common passwords and launch dictionary and/or brute force attacks which adheres to the policy (e.g. if the minimum password length should be 8, then not trying passwords such as 'pass123'; not checking for more than 3-4 passwords per account if the lockout is set to 6 as to not lock out accounts).",
                    "procedure_description": "the net accounts and net accounts /domain commands with net can be used to obtain password policy information.[9]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/001",
                    "technique_name": "permission groups discovery : local groups",
                    "technique_description": "adversaries may attempt to find local system groups and permission settings. the knowledge of local system permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as the users found within the local administrators group.",
                    "procedure_description": "commands such as net group and net localgroup can be used in net to gather information about and manipulate groups.[17]"
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
                    "procedure_description": "commands such as net group /domain can be used in net to gather information about and manipulate groups.[21]"
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
                    "procedure_description": "commands such as net view can be used in net to gather information about available remote systems.[62]"
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
                    "procedure_description": "commands such as net use and net session can be used in net to gather information about network connections from a particular host.[56]"
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
                    "procedure_description": "the net start command can be used in net to find information about windows services.[37]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1124",
                    "technique_link": "https://attack.mitre.org/techniques/T1124",
                    "technique_name": "system time discovery",
                    "technique_description": "an adversary may gather the system time and/or time zone from a local or remote system. the system time is set and stored by the windows time service within a domain to maintain time synchronization between systems and services in an enterprise network.",
                    "procedure_description": "the net time command can be used in net to determine the local or remote system time.[52]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/002",
                    "technique_name": "remote services : smb/windows admin shares",
                    "technique_description": "adversaries may use valid accounts to interact with a remote network share using server message block (smb). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "lateral movement can be done with net through net use commands to connect to the on remote systems.[37]"
                }
            ]
        },
        {
            "procedure_name": "ping",
            "procedure_code": "s0097",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0097",
            "techniques": [
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
                    "procedure_description": "ping can be used to identify remote systems within a network.[68]"
                }
            ]
        }
    ]
};