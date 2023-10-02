var threatdata = {
    "name": "APT 4, Maverick Panda, Wisp Team",
    "alias": "APT 4, APT 4, Maverick Panda, Wisp Team, Sykipot, TG-0623, Bronze Edison",
    "category": "APT",
    "type": "-",
    "modified": "2021-01-07",
    "all_data": {
        "actor": "APT 4, Maverick Panda, Wisp Team",
        "names": [
            {
                "name": "APT 4",
                "name-giver": "Mandiant"
            },
            {
                "name": "APT 4",
                "name-giver": "FireEye"
            },
            {
                "name": "Maverick Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Wisp Team",
                "name-giver": "Symantec"
            },
            {
                "name": "Sykipot",
                "name-giver": "AlienVault"
            },
            {
                "name": "TG-0623",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Bronze Edison",
                "name-giver": "SecureWorks"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored, PLA Navy",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2007",
        "description": "(Trend Micro) Sykipot has a history of primarily targeting US Defense Initial Base (DIB) and key industries such as telecommunications, computer hardware, government contractors, and aerospace. Open source review of 15 major Sykipot attacks over the last 6 years confirm this.\n\nRecently, we encountered a case where Sykipot variants were gathering information related to the civil aviation sector.  The exploitation occurred at a target consistent with their history, the information sought raises new interest. The intentions of this latest round of targeting are unclear, but it represents a change in shift in objectives or mission.",
        "observed-sectors": [
            "Aerospace",
            "Aviation",
            "Defense",
            "Government",
            "Telecommunications"
        ],
        "observed-countries": [
            "USA"
        ],
        "tools": [
            "Sykipot",
            "XMRig"
        ],
        "operations": [
            {
                "date": "2011-12",
                "activity": "Are the Sykipot\u2019s authors obsessed with next generation US drones?\nhttps://cybersecurity.att.com/blogs/labs-research/are-the-sykipots-authors-obsessed-with-next-generation-us-drones"
            },
            {
                "date": "2012-01",
                "activity": "Sykipot variant hijacks DOD and Windows smart cards\nhttps://cybersecurity.att.com/blogs/labs-research/sykipot-variant-hijacks-dod-and-windows-smart-cards"
            },
            {
                "date": "2012-07",
                "activity": "Sykipot is back\nhttps://cybersecurity.att.com/blogs/labs-research/sykipot-is-back"
            },
            {
                "date": "2013-03",
                "activity": "New Sykipot developments\nhttps://cybersecurity.att.com/blogs/labs-research/new-sykipot-developments"
            },
            {
                "date": "2013-09",
                "activity": "Sykipot Now Targeting US Civil Aviation Sector Information\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/sykipot-now-targeting-us-civil-aviation-sector-information/"
            },
            {
                "date": "2015",
                "activity": "A group dubbed APT4 is suspected to be behind a breach of an Asian airline company discovered in the second quarter of this year. Its attack style uses well-written and researched \u2018spear-phishes\u2019 with industry themes. The attacks were aimed at public key infrastructure targets.\nhttps://www.digitalnewsasia.com/digital-economy/asia-in-the-crosshairs-of-apt-attackers-fireeye-cto"
            },
            {
                "date": "2018-10",
                "activity": "The report also mentions some attacks conducted by APT4 which includes sending malicious emails to a blockchain gaming start-up last year and attacking a cryptocurrency exchange in June 2018. In last October, the group also used XMRig, a Monero cryptocurrency mining tool in the target\u2019s computer.\nhttps://mycryptomag.com/2019/08/08/cryptocurrency-firms-are-targets-of-state-sponsored-hacking-group-from-china/"
            }
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/sykipot-now-targeting-us-civil-aviation-sector-information/"
        ],
        "uuid": "37543431-9ac9-488b-ad5a-eded5a6ff964",
        "last-card-change": "2021-01-07",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "apt_4_maverick_panda_wisp_team",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "sykipot",
            "procedure_code": "s0018",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0018",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "sykipot has been known to establish persistence by adding programs to the run registry key.[253]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "sykipot has been known to establish persistence by adding programs to the run registry key.[253]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "sykipot injects itself into running instances of outlook.exe, iexplore.exe, or firefox.exe.[66]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "sykipot injects itself into running instances of outlook.exe, iexplore.exe, or firefox.exe.[66]"
                },
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
                    "procedure_description": "sykipot contains keylogging functionality to steal passwords.[170]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1111",
                    "technique_link": "https://attack.mitre.org/techniques/T1111",
                    "technique_name": "multi-factor authentication interception",
                    "technique_description": "adversaries may target multi-factor authentication (mfa) mechanisms, (i.e., smart cards, token generators, etc.) to gain access to credentials that can be used to access systems, services, and network resources. use of mfa is recommended and provides a higher level of security than usernames and passwords alone, but organizations should be aware of techniques that could be used to intercept and bypass these security mechanisms.",
                    "procedure_description": "sykipot is known to contain functionality that enables targeting of smart card technologies to proxy authentication for connections to restricted network resources using detected hardware tokens.[8]"
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
                    "procedure_description": "sykipot may use net group \"domain admins\" /domain to display accounts in the \"domain admins\" permissions group and net localgroup \"administrators\" to list local system administrator group membership.[47]"
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
                    "procedure_description": "sykipot may gather a list of running processes by running tasklist /v.[245]"
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
                    "procedure_description": "sykipot may use net view /domain to display hostnames of available systems on a network.[84]"
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
                    "procedure_description": "sykipot may use ipconfig /all to gather system network configuration details.[223]"
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
                    "procedure_description": "sykipot may use netstat -ano to display active network connections.[83]"
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
                    "procedure_description": "sykipot may use net start to display running services.[51]"
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
                    "procedure_description": "sykipot contains keylogging functionality to steal passwords.[170]"
                },
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
                    "procedure_description": "sykipot uses ssl for encrypting c2 communications.[57]"
                }
            ]
        }
    ]
};