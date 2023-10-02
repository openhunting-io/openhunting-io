var threatdata = {
    "name": "Volatile Cedar",
    "alias": "Volatile Cedar, Dancing Salome, DeftTorero",
    "category": "APT",
    "type": "-",
    "modified": "2022-12-30",
    "all_data": {
        "actor": "Volatile Cedar",
        "names": [
            {
                "name": "Volatile Cedar",
                "name-giver": "Check Point"
            },
            {
                "name": "Dancing Salome",
                "name-giver": "Kaspersky"
            },
            {
                "name": "DeftTorero",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "Lebanon"
        ],
        "sponsor": "State-sponsored, Hezbollah",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2012",
        "description": "(Check Point) Beginning in late 2012, the carefully orchestrated attack campaign we call Volatile Cedar has been targeting individuals, companies and institutions worldwide. This campaign, led by a persistent attacker group, has successfully penetrated a large number of targets using various attack techniques, and specifically, a custom-made malware implant codenamed Explosive. This report provides an extended technical analysis of Volatile Cedar and the Explosive malware.\n\nWe have seen clear evidence that Volatile Cedar has been active for almost 3 years. While many of the technical aspects of the threat are not considered \u201ccutting edge\u201d, the campaign has been continually and successfully operational throughout this entire timeline, evading detection by the majority of AV products. This success is due to a well-planned and carefully managed operation that constantly monitors its victims\u2019 actions and rapidly responds to detection incidents.",
        "observed-sectors": [
            "Education",
            "Government",
            "Hosting"
        ],
        "observed-countries": [
            "Canada",
            "Egypt",
            "Israel",
            "Jordan",
            "Lebanon",
            "Russia",
            "Saudi Arabia",
            "UAE",
            "UK",
            "USA",
            "Palestinian Authority"
        ],
        "tools": [
            "Adminer",
            "ASPXSpy",
            "Caterpillar",
            "DirBuster",
            "Explosive",
            "GoBuster",
            "JuicyPotato",
            "RottenPotato",
            "SharPyShell"
        ],
        "operations": [
            {
                "date": "2015-06",
                "activity": "After going public with our findings, we were provided with a new configuration belonging to a newly discovered sample we have never seen before.\nhttps://blog.checkpoint.com/2015/06/09/new-data-volatile-cedar/"
            },
            {
                "date": "2020 Early",
                "activity": "In early 2020, suspicious network activities and hacking tools were found in a range of companies.\nhttps://www.clearskysec.com/cedar/"
            }
        ],
        "information": [
            "https://www.checkpoint.com/downloads/volatile-cedar-technical-report.pdf",
            "https://securelist.com/sinkholing-volatile-cedar-dga-infrastructure/69421/",
            "https://securelist.com/defttorero-tactics-techniques-and-procedures/107610/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0123/"
        ],
        "uuid": "238acb51-8489-43d7-83b2-9ea4db18ddb6",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "volatile_cedar",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/defttorero-tactics-techniques-and-procedures/107610/",
            "date": "2022-10-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "DeftTorero: tactics, techniques and procedures of intrusions revealed",
            "categories": [
                "Nightrunner",
                "Tunna",
                "ASPXSpy",
                "LaZagne",
                "ExplosiveRAT",
                "reGeorg",
                "Volatile Cedar"
            ]
        },
        {
            "data_url": "https://www.clearskysec.com/wp-content/uploads/2021/01/Lebanese-Cedar-APT.pdf",
            "date": "2021-01-28",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "\u201cLebanese Cedar\u201d APT Global Lebanese Espionage Campaign Leveraging Web Servers",
            "categories": [
                "Volatile Cedar"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07170728/Guerrero-Saade-Raiu-VB2017.pdf",
            "date": "2017-08-25",
            "organization": "Kaspersky Labs",
            "author": "Juan Andr\u00e9s Guerrero-Saade",
            "title": "Walking in your Enemy's Shadow: When Fourth-Party Collection becomes Attribution Hell",
            "categories": [
                "NetTraveler",
                "RCS",
                "WannaCryptor",
                "Dancing Salome"
            ]
        },
        {
            "data_url": "https://blog.checkpoint.com/2015/06/09/new-data-volatile-cedar/",
            "date": "2015-06-09",
            "organization": "Check Point",
            "author": "Check Point",
            "title": "New Data: Volatile Cedar Malware Campaign",
            "categories": [
                "Volatile Cedar"
            ]
        },
        {
            "data_url": "https://securelist.com/sinkholing-volatile-cedar-dga-infrastructure/69421/",
            "date": "2015-03-31",
            "organization": "Kaspersky Labs",
            "author": "Kurt Baumgartner",
            "title": "Sinkholing Volatile Cedar DGA Infrastructure",
            "categories": [
                "Volatile Cedar"
            ]
        },
        {
            "data_url": "https://blog.checkpoint.com/2015/03/31/volatilecedar/",
            "date": "2015-03-31",
            "organization": "Check Point Research",
            "author": "Check Point Research",
            "title": "Volatile Cedar - Analysis of a Global Cyber Espionage Campaign",
            "categories": [
                "Volatile Cedar"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2015/03/20082004/volatile-cedar-technical-report.pdf",
            "date": "2015-03-30",
            "organization": "Check Point",
            "author": "Check Point",
            "title": "Volatile Cedar",
            "categories": [
                "Volatile Cedar"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "volatile cedar",
            "procedure_code": "g0123",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0123",
            "techniques": [
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1595.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1595/002",
                    "technique_name": "active scanning : vulnerability scanning",
                    "technique_description": "adversaries may scan victims for vulnerabilities that can be used during targeting. vulnerability scans typically check if the configuration of a target host/application (ex: software and version) potentially aligns with the target of a specific exploit the adversary may seek to use.",
                    "procedure_description": "volatile cedar has performed vulnerability scans of the target server.[11][12]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1595.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1595/003",
                    "technique_name": "active scanning : wordlist scanning",
                    "technique_description": "adversaries may iteratively probe infrastructure using brute-forcing and crawling techniques. while this technique employs similar methods to brute force, its goal is the identification of content and infrastructure rather than the discovery of valid credentials. wordlists used in these scans may contain generic, commonly used names and file extensions or terms specific to a particular software. adversaries may also create custom, target-specific wordlists using data gathered from other reconnaissance techniques (ex: gather victim org information, or search victim-owned websites).",
                    "procedure_description": "volatile cedar has used dirbuster and gobuster to brute force web directories and dns subdomains.[1]"
                },
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
                    "procedure_description": "volatile cedar has targeted publicly facing web servers, with both automatic and manual vulnerability discovery.[58] [59]"
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
                    "procedure_description": "volatile cedar can inject web shell code into a server.[41][42]"
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
                    "procedure_description": "volatile cedar can deploy additional tools.[98]"
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
        },
        {
            "procedure_name": "tor",
            "procedure_code": "s0183",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0183",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "tor encapsulates traffic in multiple layers of encryption, using tls by default.[59]"
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
                    "procedure_description": "traffic traversing the tor network will be forwarded to multiple nodes before exiting the tor network and continuing on to its intended destination.[21]"
                }
            ]
        }
    ]
};