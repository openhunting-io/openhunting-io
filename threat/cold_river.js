var threatdata = {
    "name": "Cold River",
    "alias": "Cold River, Nahr el bared, Nahr Elbard, Cobalt Edgewater, TA446, Seaborgium, TAG-53, BlueCharlie, Blue Callisto, Calisto, Star Blizzard",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-06",
    "all_data": {
        "actor": "Cold River",
        "names": [
            {
                "name": "Cold River",
                "name-giver": "Lastline"
            },
            {
                "name": "Nahr el bared",
                "name-giver": "original place"
            },
            {
                "name": "Nahr Elbard",
                "name-giver": "transliteration"
            },
            {
                "name": "Cobalt Edgewater",
                "name-giver": "SecureWorks"
            },
            {
                "name": "TA446",
                "name-giver": "Proofpoint"
            },
            {
                "name": "Seaborgium",
                "name-giver": "Microsoft"
            },
            {
                "name": "TAG-53",
                "name-giver": "Recorded Future"
            },
            {
                "name": "BlueCharlie",
                "name-giver": "Recorded Future"
            },
            {
                "name": "Blue Callisto",
                "name-giver": "PWC"
            },
            {
                "name": "Calisto",
                "name-giver": "Sekoia"
            },
            {
                "name": "Star Blizzard",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "Russia"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2019",
        "description": "(Lastline) While reviewing some network anomalies, we recently uncovered Cold River, a sophisticated threat actor making malicious use of DNS tunneling for command and control activities. We have been able to decode the raw traffic in command and control, find sophisticated lure documents used in the campaign, connect other previously unknown samples, and associate a number of legitimate organizations whose infrastructure is referenced and used in the campaign.\n\nThe campaign targets Middle Eastern organizations largely from the Lebanon and United Arab Emirates, though, Indian and Canadian companies with interests in those Middle Eastern countries are also targeted. There are new TTPs used in this attack \u2013 for example Agent_Drable is leveraging the Django python framework for command and control infrastructure, the technical details of which are outlined later in the blog.",
        "observed-sectors": [
            "Defense",
            "NGOs",
            "Think Tanks"
        ],
        "observed-countries": [
            "Canada",
            "India",
            "Lebanon",
            "UAE",
            "Ukraine",
            "USA",
            "NATO"
        ],
        "tools": [
            "DNSpionage"
        ],
        "operations": [
            {
                "date": "2022-02",
                "activity": "Blue Callisto orbits around US Laboratories in 2022\nhttps://www.pwc.com/gx/en/issues/cybersecurity/cyber-threat-intelligence/blue-callisto-orbits-around-us.html"
            },
            {
                "date": "2022-03",
                "activity": "COLDRIVER, a Russian-based threat actor sometimes referred to as Calisto, has launched credential phishing campaigns, targeting several US based NGOs and think tanks, the military of a Balkans country, and a Ukraine based defense contractor. However, for the first time, TAG has observed COLDRIVER campaigns targeting the military of multiple Eastern European countries, as well as a NATO Centre of Excellence.\nhttps://blog.google/threat-analysis-group/tracking-cyber-activity-eastern-europe/"
            },
            {
                "date": "2022-04",
                "activity": "COLDRIVER, a Russian-based threat actor sometimes referred to as Callisto, continues to use Gmail accounts to send credential phishing emails to a variety of Google and non-Google accounts.\nhttps://blog.google/threat-analysis-group/update-on-cyber-activity-in-eastern-europe/"
            },
            {
                "date": "2022-07",
                "activity": "Exposing TAG- 53\u2019s Credential Harvesting Infrastructure Used for Russia-Aligned Espionage Operations\nhttps://go.recordedfuture.com/hubfs/reports/cta-2022-1205.pdf"
            },
            {
                "date": "2022-08",
                "activity": "Russian hackers targeted U.S. nuclear scientists\nhttps://www.reuters.com/world/europe/russian-hackers-targeted-us-nuclear-scientists-2023-01-06/"
            },
            {
                "date": "2023-03",
                "activity": "BlueCharlie, Previously Tracked as TAG 53, Continues to Deploy New Infrastructure in 2023\nhttps://go.recordedfuture.com/hubfs/reports/cta-2023-0802.pdf"
            }
        ],
        "counter-operations": [
            {
                "date": "2022-08",
                "activity": "Disrupting SEABORGIUM\u2019s ongoing phishing operations\nhttps://www.microsoft.com/security/blog/2022/08/15/disrupting-seaborgiums-ongoing-phishing-operations/"
            }
        ],
        "information": [
            "https://www.lastline.com/labsblog/threat-actor-cold-river-network-traffic-analysis-and-a-deep-dive-on-agent-drable/"
        ],
        "uuid": "00b16489-daf4-4c61-90bf-0ffba2400e98",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cold_river",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.knowbe4.com/russian-threat-actor-impersonates-aerospace-and-defense-companies",
            "date": "2022-12-07",
            "organization": "KnowBe4",
            "author": "Stu Sjouwerman",
            "title": "Russian Threat Actor Impersonates Aerospace and Defense Companies",
            "categories": [
                "TAG-53"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2022-1205.pdf",
            "date": "2022-12-05",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Exposing TAG-53\u2019s Credential Harvesting Infrastructure Used for Russia-Aligned Espionage Operations",
            "categories": [
                "TAG-53"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/exposing-tag-53-credential-harvesting-infrastructure-for-russia-aligned-espionage-operations?utm_campaign=PostBeyond&utm_source=Twitter&utm_medium=359877&utm_term=Exposing+TAG-53%E2%80%99s+Credential+Harvesting+Infrastructure+Used+for+Russia-Aligned+Espionage+Operations",
            "date": "2022-12-05",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Exposing TAG-53\u2019s Credential Harvesting Infrastructure Used for Russia-Aligned Espionage Operations",
            "categories": [
                "TAG-53"
            ]
        },
        {
            "data_url": "https://www.lastline.com/labsblog/threat-actor-cold-river-network-traffic-analysis-and-a-deep-dive-on-agent-drable/",
            "date": "2019-01-11",
            "organization": "Lastline",
            "author": "Quentin Fois",
            "title": "Threat Actor \u201cCold River\u201d: Network Traffic Analysis and a Deep Dive on Agent Drable",
            "categories": [
                "Cold River"
            ]
        }
    ],
    "mitre": [
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
            "procedure_name": "calisto",
            "procedure_code": "s0274",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0274",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1569.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1569/001",
                    "technique_name": "system services : launchctl",
                    "technique_description": "adversaries may abuse launchctl to execute commands or programs. launchctl interfaces with launchd, the service management framework for macos. launchctl supports taking subcommands on the command-line, interactively, or even redirected from standard input.",
                    "procedure_description": "calisto uses launchctl to enable screen sharing on the victim\u2019s machine.[5]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1098",
                    "technique_link": "https://attack.mitre.org/techniques/T1098",
                    "technique_name": "account manipulation",
                    "technique_description": "adversaries may manipulate accounts to maintain access to victim systems. account manipulation may consist of any action that preserves adversary access to a compromised account, such as modifying credentials or permission groups. these actions could also include account activity designed to subvert security policies, such as performing iterative password updates to bypass password duration policies and preserve the life of compromised credentials.",
                    "procedure_description": "calisto adds permissions and remote logins to all users.[4]"
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
                    "procedure_description": "calisto has the capability to add its own account to the victim's machine.[5]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/001",
                    "technique_name": "create or modify system process : launch agent",
                    "technique_description": "adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence. when a user logs in, a per-user launchd process is started which loads the parameters for each launch-on-demand user agent from the property list (.plist) file found in /system/library/launchagents, /library/launchagents, and ~/library/launchagents.  property list files use the label, programarguments , and runatload keys to identify the launch agent's name, executable location, and execution time. launch agents are often installed to perform updates to programs, launch user specified programs at login, or to conduct other developer tasks.",
                    "procedure_description": "calisto adds a .plist file to the /library/launchagents folder to maintain persistence.[10]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/001",
                    "technique_name": "create or modify system process : launch agent",
                    "technique_description": "adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence. when a user logs in, a per-user launchd process is started which loads the parameters for each launch-on-demand user agent from the property list (.plist) file found in /system/library/launchagents, /library/launchagents, and ~/library/launchagents.  property list files use the label, programarguments , and runatload keys to identify the launch agent's name, executable location, and execution time. launch agents are often installed to perform updates to programs, launch user specified programs at login, or to conduct other developer tasks.",
                    "procedure_description": "calisto adds a .plist file to the /library/launchagents folder to maintain persistence.[10]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/001",
                    "technique_name": "hide artifacts : hidden files and directories",
                    "technique_description": "adversaries may set files and directories to be hidden to evade detection mechanisms. to prevent normal users from accidentally changing special files on a system, most operating systems have the concept of a \u2018hidden\u2019 file. these files don\u2019t show up when a user browses the file system with a gui or when using normal commands on the command line. users must explicitly ask to show the hidden files either via a series of graphical user interface (gui) prompts or with command line switches (dir /a for windows and ls \u2013a for linux and macos).",
                    "procedure_description": "calisto uses a hidden directory named .calisto to store data from the victim\u2019s machine before exfiltration.[10][11]"
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
                    "procedure_description": "calisto has the capability to use rm -rf to remove folders and files from the victim's machine.[35]"
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
                    "procedure_description": "calisto's installation file is an unsigned dmg image under the guise of intego\u2019s security solution for mac.[34]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/001",
                    "technique_name": "credentials from password stores : keychain",
                    "technique_description": "adversaries may acquire credentials from keychain. keychain (or keychain services) is the macos credential management system that stores account names, passwords, private keys, certificates, sensitive application data, payment data, and secure notes. there are three types of keychains: login keychain, system keychain, and local items (icloud) keychain. the default keychain is the login keychain, which stores user passwords and information. the system keychain stores items accessed by the operating system, such as items shared among users on a host. the local items (icloud) keychain is used for items synced with apple\u2019s icloud service.",
                    "procedure_description": "calisto collects keychain storage data and copies those passwords/tokens to a file.[6][7]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/002",
                    "technique_name": "input capture : gui input capture",
                    "technique_description": "adversaries may mimic common operating system gui components to prompt users for credentials with a seemingly legitimate prompt. when programs are executed that need additional privileges than are present in the current user context, it is common for the operating system to prompt the user for proper credentials to authorize the elevated privileges for the task (ex: bypass user account control).",
                    "procedure_description": "calisto presents an input prompt asking for the user's login and password.[7]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1217",
                    "technique_link": "https://attack.mitre.org/techniques/T1217",
                    "technique_name": "browser information discovery",
                    "technique_description": "adversaries may enumerate information about browsers to learn more about compromised environments. data saved by browsers (such as bookmarks, accounts, and browsing history) may reveal a variety of personal information about users (e.g., banking sites, relationships/interests, social media, etc.) as well as details about internal network resources such as servers, tools/dashboards, or other related infrastructure.",
                    "procedure_description": "calisto collects information on bookmarks from google chrome.[4]"
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
                    "procedure_description": "calisto runs the ifconfig command to obtain the ip address from the victim\u2019s machine.[47]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/001",
                    "technique_name": "archive collected data : archive via utility",
                    "technique_description": "adversaries may use utilities to compress and/or encrypt collected data prior to exfiltration. many utilities include functionalities to compress, encrypt, or otherwise package data into a format that is easier/more secure to transport.",
                    "procedure_description": "calisto uses the zip -r command to compress the data collected on the local system.[15][16]"
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
                    "procedure_description": "calisto can collect data from user directories.[35]"
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
                    "procedure_description": "calisto uses a hidden directory named .calisto to store data from the victim\u2019s machine before exfiltration.[17][18]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/002",
                    "technique_name": "input capture : gui input capture",
                    "technique_description": "adversaries may mimic common operating system gui components to prompt users for credentials with a seemingly legitimate prompt. when programs are executed that need additional privileges than are present in the current user context, it is common for the operating system to prompt the user for proper credentials to authorize the elevated privileges for the task (ex: bypass user account control).",
                    "procedure_description": "calisto presents an input prompt asking for the user's login and password.[7]"
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
                    "procedure_description": "calisto has the capability to upload and download files to the victim's machine.[90]"
                }
            ]
        }
    ]
};