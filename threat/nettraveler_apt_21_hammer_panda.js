var threatdata = {
    "name": "NetTraveler, APT 21, Hammer Panda",
    "alias": "NetTraveler, APT 21, Hammer Panda, TEMP.Zhenbao",
    "category": "APT",
    "type": "-",
    "modified": "2020-11-27",
    "all_data": {
        "actor": "NetTraveler, APT 21, Hammer Panda",
        "names": [
            {
                "name": "NetTraveler",
                "name-giver": "Kaspersky"
            },
            {
                "name": "APT 21",
                "name-giver": "Mandiant"
            },
            {
                "name": "Hammer Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "TEMP.Zhenbao",
                "name-giver": "FireEye"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2004",
        "description": "(Kaspersky) Over the last few years, we have been monitoring a cyber-espionage campaign that has successfully compromised more than 350 high profile victims in 40 countries. The main tool used by the threat actors during these attacks is NetTraveler, a malicious program used for covert computer surveillance.\n\nThe name NetTraveler comes from an internal string which is present in early versions of the malware: NetTraveler Is Running! This malware is used by APT actors for basic surveillance of their victims. Earliest known samples have a timestamp of 2005, although references exist indicating activity as early as 2004. The largest number of samples we observed were created between 2010 and 2013.\n\nThe later group {{RedAlpha}} has infrastructure overlap with NetTraveler.",
        "observed-sectors": [
            "Defense",
            "Embassies",
            "Government",
            "Oil and gas",
            "Scientific research centers and institutes and Tibetan/Uyghur activists"
        ],
        "observed-countries": [
            "Afghanistan",
            "Australia",
            "Austria",
            "Bangladesh",
            "Belarus",
            "Belgium",
            "Cambodia",
            "Canada",
            "Chile",
            "China",
            "Germany",
            "Greece",
            "Hong Kong",
            "India",
            "Indonesia",
            "Iran",
            "Japan",
            "Jordan",
            "Kazakhstan",
            "Kyrgyzstan",
            "Lithuania",
            "Malaysia",
            "Mongolia",
            "Morocco",
            "Nepal",
            "Pakistan",
            "Qatar",
            "Russia",
            "Slovenia",
            "South Korea",
            "Spain",
            "Suriname",
            "Syria",
            "Tajikistan",
            "Thailand",
            "Turkey",
            "Turkmenistan",
            "UK",
            "Ukraine",
            "USA",
            "Uzbekistan"
        ],
        "tools": [
            "NetTraveler",
            "PlugX"
        ],
        "operations": [
            {
                "date": "2014-08",
                "activity": "NetTraveler Gets a Makeover for 10th Anniversary\nMost recently, the main focus of interest for cyber-espionage activities revolved around diplomatic (32%), government (19%), private (11%), military (9%), industrial and infrastructure (7%), airspace (6%), research (4%), activism (3%), financial (3%), IT (3%), health (2%) and press (1%).\nhttps://www.kaspersky.com/about/press-releases/2014_nettraveler-gets-a-makeover-for-10th-anniversary"
            },
            {
                "date": "2015-12",
                "activity": "Spear-Phishing Email Targets Diplomat of Uzbekistan\nUnit 42 recently identified a targeted attack against an individual working for the Foreign Ministry of Uzbekistan in China. A spear-phishing email was sent to a diplomat of the Embassy of Uzbekistan who is likely based in Beijing, China.\nhttps://unit42.paloaltonetworks.com/nettraveler-spear-phishing-email-targets-diplomat-of-uzbekistan/"
            }
        ],
        "information": [
            "https://www.kaspersky.com/about/press-releases/2013_kaspersky-lab-uncovers--operation-nettraveler--a-global-cyberespionage-campaign-targeting-government-affiliated-organizations-and-research-institutes",
            "https://www.proofpoint.com/us/threat-insight/post/nettraveler-apt-targets-russian-european-interests"
        ],
        "uuid": "8650e8c5-55a5-4441-8903-0f2bf5753ef1",
        "last-card-change": "2020-04-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "nettraveler_apt_21_hammer_panda",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cybergeeks.tech/dissecting-apt21-samples-using-a-step-by-step-approach/",
            "date": "2020-11-27",
            "organization": "CYBER GEEKS  All Things Infosec",
            "author": "CyberMasterV",
            "title": "Dissecting APT21 samples using a step-by-step approach",
            "categories": [
                "NetTraveler"
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
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/nettraveler-apt-targets-russian-european-interests",
            "date": "2016-07-07",
            "organization": "Proofpoint",
            "author": "Axel F",
            "title": "NetTraveler APT Targets Russian, European Interests",
            "categories": [
                "NetTraveler",
                "APT21"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20200509171721/https://raw.githubusercontent.com/fdiskyou/threat-INTel/master/2015/GlobalThreatIntelReport.pdf",
            "date": "2015-02-06",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "CrowdStrike Global Threat Intel Report 2014",
            "categories": [
                "BlackPOS",
                "CryptoLocker",
                "Derusbi",
                "Elise",
                "Enfal",
                "EvilGrab",
                "Gameover P2P",
                "HttpBrowser",
                "Medusa",
                "Mirage",
                "Naikon",
                "NetTraveler",
                "pirpi",
                "PlugX",
                "Poison Ivy",
                "Sakula RAT",
                "Sinowal",
                "sykipot",
                "taidoor"
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
            "procedure_name": "nettraveler",
            "procedure_code": "s0033",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0033",
            "techniques": [
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "nettraveler contains a keylogger.[121]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1010",
                    "technique_link": "https://attack.mitre.org/techniques/T1010",
                    "technique_name": "application window discovery",
                    "technique_description": "adversaries may attempt to get a listing of open application windows. window listings could convey information about how the system is used. for example, information about application windows could be used identify potential data to collect as well as identifying security tooling (security software discovery) to evade.",
                    "procedure_description": "nettraveler reports window names along with keylogger information to provide application context.[21]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "nettraveler contains a keylogger.[121]"
                }
            ]
        }
    ]
};