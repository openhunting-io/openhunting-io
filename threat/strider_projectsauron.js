var threatdata = {
    "name": "Strider, ProjectSauron",
    "alias": "Strider, ProjectSauron",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-22",
    "all_data": {
        "actor": "Strider, ProjectSauron",
        "names": [
            {
                "name": "Strider",
                "name-giver": "Symantec"
            },
            {
                "name": "ProjectSauron",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "USA"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2011",
        "description": "(Symantec) Strider has been active since at least October 2011. The group has maintained a low profile until now and its targets have been mainly organizations and individuals that would be of interest to a nation state\u2019s intelligence services. Symantec obtained a sample of the group\u2019s Remsec malware from a customer who submitted it following its detection by our behavioral engine.\n\nRemsec is primarily designed to spy on targets. It opens a back door on an infected computer, can log keystrokes, and steal files.\n\nStrider has been highly selective in its choice of targets and, to date, Symantec has found evidence of infections in 36 computers across seven separate organizations. The group\u2019s targets include a number of organizations and individuals located in Russia, an airline in China, an organization in Sweden, and an embassy in Belgium.",
        "observed-sectors": [
            "Defense",
            "Embassies",
            "Financial",
            "Government",
            "Telecommunications",
            "Scientific research centers"
        ],
        "observed-countries": [
            "Belgium",
            "China",
            "Iran",
            "Russia",
            "Rwanda",
            "Sweden"
        ],
        "tools": [
            "Remsec"
        ],
        "information": [
            "https://www.symantec.com/connect/blogs/strider-cyberespionage-group-turns-eye-sauron-targets",
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07190154/The-ProjectSauron-APT_research_KL.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0041/"
        ],
        "uuid": "d7d99de3-c515-4117-b40c-7696babb69c1",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "strider_projectsauron",
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
            "procedure_name": "strider",
            "procedure_code": "g0041",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0041",
            "techniques": [
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
                    "procedure_description": "strider has registered its persistence module on domain controllers as a windows lsa (local system authority) password filter to acquire credentials any time a domain, local user, or administrator logs in or changes a password.[2]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/005",
                    "technique_name": "hide artifacts : hidden file system",
                    "technique_description": "adversaries may use a hidden file system to conceal malicious activity from users and security tools. file systems provide a structure to store and access data from physical storage. typically, a user engages with a file system through applications that allow them to access files and directories, which are an abstraction from their physical location (ex: disk sector). standard file systems include fat, ntfs, ext4, and apfs. file systems can also contain other structures, such as the volume boot record (vbr) and master file table (mft) in ntfs.",
                    "procedure_description": "strider has used a hidden file system that is stored as a file on disk.[6]"
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
                    "procedure_description": "strider has registered its persistence module on domain controllers as a windows lsa (local system authority) password filter to acquire credentials any time a domain, local user, or administrator logs in or changes a password.[2]"
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
                    "procedure_description": "strider has registered its persistence module on domain controllers as a windows lsa (local system authority) password filter to acquire credentials any time a domain, local user, or administrator logs in or changes a password.[2]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/001",
                    "technique_name": "proxy : internal proxy",
                    "technique_description": "adversaries may use an internal proxy to direct command and control traffic between two or more systems in a compromised environment. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use internal proxies to manage command and control communications inside a compromised environment, to reduce the number of simultaneous outbound network connections, to provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between infected systems to avoid suspicion. internal proxy connections may use common peer-to-peer (p2p) networking protocols, such as smb, to better blend in with the environment.",
                    "procedure_description": "strider has used local servers with both local network and internet access to act as internal proxy nodes to exfiltrate data from other parts of the network without direct internet access.[23]"
                }
            ]
        }
    ]
};