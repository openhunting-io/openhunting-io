var threatdata = {
    "name": "Leafminer, Raspite",
    "alias": "Leafminer, Raspite, Flash Kitten",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-22",
    "all_data": {
        "actor": "Leafminer, Raspite",
        "names": [
            {
                "name": "Leafminer",
                "name-giver": "Symantec"
            },
            {
                "name": "Raspite",
                "name-giver": "Dragos"
            },
            {
                "name": "Flash Kitten",
                "name-giver": "CrowdStrike"
            }
        ],
        "country": [
            "Iran"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2017",
        "description": "(Symantec) Symantec has uncovered the operations of a threat actor named Leafminer that is targeting a broad list of government organizations and business verticals in various regions in the Middle East since at least early 2017. The group tends to adapt publicly available techniques and tools for their attacks and experiments with published proof-of-concept exploits. Leafminer attempts to infiltrate target networks through various means of intrusion: watering hole websites, vulnerability scans of network services on the internet, and brute-force/dictionary login attempts. The actor\u2019s post-compromise toolkit suggests that the group is looking for email data, files, and database servers on compromised target systems.\n\n(Dragos) Analysis of Raspite tactics, techniques, and procedures (TTPs) indicate the group has been active in some form since early- to mid-2017. Raspite targeting includes entities in the US, Middle East, Europe, and East Asia. Operations against electric utility organizations appear limited to the US at this time.\n\nRaspite leverages strategic website compromise to gain initial access to target networks. Raspite uses the same methodology as {{Berserk Bear, Dragonfly 2.0}} and {{Allanite}} in embedding a link to a resource to prompt an SMB connection, from which it harvests Windows credentials. The group then deploys install scripts for a malicious service to beacon back to Raspite \u2013controlled infrastructure, allowing the adversary to remotely access the victim machine.",
        "observed-sectors": [
            "Energy",
            "Financial",
            "Government",
            "Transportation"
        ],
        "observed-countries": [
            "Israel",
            "Kuwait",
            "Lebanon",
            "USA",
            "Europe and East Asia"
        ],
        "tools": [
            "Imecab",
            "LaZagne",
            "Mimikatz",
            "PhpSpy",
            "Sorgu"
        ],
        "information": [
            "https://www.symantec.com/blogs/threat-intelligence/leafminer-espionage-middle-east",
            "https://dragos.com/resource/raspite/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0077/"
        ],
        "uuid": "bde56229-34b6-4a33-b6c0-358d41416ee3",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "leafminer_raspite",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/",
            "date": "2019",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2019 CrowdStrike Global Threat Report",
            "categories": [
                "APT40",
                "BOSS SPIDER",
                "FIN6",
                "Flash Kitten",
                "GURU SPIDER",
                "LUNAR SPIDER",
                "NOMAD PANDA",
                "PINCHY SPIDER",
                "RATPAK SPIDER",
                "SALTY SPIDER",
                "TINY SPIDER"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2019GlobalThreatReport.pdf",
            "date": "2019",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2019 CrowdStrike Global Threat Report",
            "categories": [
                "BOSS SPIDER",
                "Flash Kitten",
                "GURU SPIDER",
                "LUNAR SPIDER",
                "NOMAD PANDA",
                "PINCHY SPIDER",
                "RATPAK SPIDER",
                "SALTY SPIDER",
                "TINY SPIDER"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "leafminer",
            "procedure_code": "g0077",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0077",
            "techniques": [
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
                    "procedure_description": "leafminer has obtained and used tools such as lazagne, mimikatz, psexec, and mailsniper.[66]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1189",
                    "technique_link": "https://attack.mitre.org/techniques/T1189",
                    "technique_name": "drive-by compromise",
                    "technique_description": "adversaries may gain access to a system through a user visiting a website over the normal course of browsing. with this technique, the user's web browser is typically targeted for exploitation, but adversaries may also use compromised websites for non-exploitation behavior such as acquiring application access token.",
                    "procedure_description": "leafminer has infected victims using watering holes.[33]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/007",
                    "technique_name": "command and scripting interpreter : javascript",
                    "technique_description": "adversaries may abuse various implementations of javascript for execution. javascript (js) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though js can be executed in runtime environments outside the browser.",
                    "procedure_description": "leafminer infected victims using javascript code.[49]"
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
                    "procedure_description": "leafminer used a tool called imecab to set up a persistent remote access account on the victim machine.[16]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.013",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/013",
                    "technique_name": "process injection : process doppelg\u00e4nging",
                    "technique_description": "adversaries may inject malicious code into process via process doppelg\u00e4nging in order to evade process-based defenses as well as possibly elevate privileges. process doppelg\u00e4nging is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "leafminer has used process doppelg\u00e4nging to evade security software while deploying tools on compromised systems.[7]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/010",
                    "technique_name": "obfuscated files or information : command obfuscation",
                    "technique_description": "adversaries may obfuscate content during command execution to impede detection. command-line obfuscation is a method of making strings and patterns within commands and scripts more difficult to signature and analyze. this type of obfuscation can be included within commands executed by delivered payloads (e.g., phishing and drive-by compromise) or interactively via command and scripting interpreter.",
                    "procedure_description": "leafminer obfuscated scripts that were used on victim machines.[49]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.013",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/013",
                    "technique_name": "process injection : process doppelg\u00e4nging",
                    "technique_description": "adversaries may inject malicious code into process via process doppelg\u00e4nging in order to evade process-based defenses as well as possibly elevate privileges. process doppelg\u00e4nging is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "leafminer has used process doppelg\u00e4nging to evade security software while deploying tools on compromised systems.[7]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1110.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1110/003",
                    "technique_name": "brute force : password spraying",
                    "technique_description": "adversaries may use a single or small list of commonly used passwords against many different accounts to attempt to acquire valid account credentials. password spraying uses one password (e.g. 'password01'), or a small list of commonly used passwords, that may match the complexity policy of the domain. logins are attempted with that password against many different accounts on a network to avoid account lockouts that would normally occur when brute forcing a single account with many passwords.",
                    "procedure_description": "leafminer used a tool called total smb bruteforcer to perform internal password spraying.[16]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555",
                    "technique_link": "https://attack.mitre.org/techniques/T1555",
                    "technique_name": "credentials from password stores",
                    "technique_description": "adversaries may search for common password storage locations to obtain user credentials. passwords are stored in several places on a system, depending on the operating system or application holding the credentials. there are also specific applications that store passwords to make it easier for users manage and maintain. once credentials are obtained, they can be used to perform lateral movement and access restricted information.",
                    "procedure_description": "leafminer used several tools for retrieving login and password information, including lazagne.[13]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "leafminer used several tools for retrieving login and password information, including lazagne.[45]"
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
                    "procedure_description": "leafminer used several tools for retrieving login and password information, including lazagne and mimikatz.[47]"
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
                    "procedure_description": "leafminer used several tools for retrieving login and password information, including lazagne.[18]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/005",
                    "technique_name": "os credential dumping : cached domain credentials",
                    "technique_description": "adversaries may attempt to access cached domain credentials used to allow authentication to occur in the event a domain controller is unavailable.",
                    "procedure_description": "leafminer used several tools for retrieving login and password information, including lazagne.[8]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1552.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1552/001",
                    "technique_name": "unsecured credentials : credentials in files",
                    "technique_description": "adversaries may search local file systems and remote file shares for files containing insecurely stored credentials. these can be files created by users to store their own credentials, shared credential stores for a group of individuals, configuration files containing passwords for a system or service, or source code/binary files containing embedded passwords.",
                    "procedure_description": "leafminer used several tools for retrieving login and password information, including lazagne.[21]"
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
                    "procedure_description": "leafminer used a tool called mailsniper to search for files on the desktop and another utility called sobolsoft to extract attachments from eml files.[178]"
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
                    "procedure_description": "leafminer scanned network services to search for vulnerabilities in the victim system.[37]"
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
                    "procedure_description": "leafminer used microsoft\u2019s sysinternals tools to gather detailed information about remote systems.[54]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1114.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1114/002",
                    "technique_name": "email collection : remote email collection",
                    "technique_description": "adversaries may target an exchange server, office 365, or google workspace to collect sensitive information. adversaries may leverage a user's credentials and interact directly with the exchange server to acquire information from within a network. adversaries may also access externally facing exchange services, office 365, or google workspace to access email using credentials or access tokens. tools such as mailsniper can be used to automate searches for specific keywords.",
                    "procedure_description": "leafminer used a tool called mailsniper to search through the exchange server mailboxes for keywords.[14]"
                }
            ]
        }
    ]
};