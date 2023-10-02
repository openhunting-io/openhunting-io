var threatdata = {
    "name": "ChChes",
    "alias": "ChChes, HAYMAKER, Ham Backdoor, Scorpion",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "ChChes",
        "names": [
            {
                "name": "ChChes"
            },
            {
                "name": "HAYMAKER"
            },
            {
                "name": "Ham Backdoor"
            },
            {
                "name": "Scorpion"
            }
        ],
        "description": "(Palo Alto) In addition to using {{PlugX}} and {{Poison Ivy}} (PIVY), both known to be used by the group, they also used a new Trojan called \u201cChChes\u201d by the Japan Computer Emergency Response Team Coordination Center (JPCERT).  In contrast to PlugX and PIVY, which are used by multiple campaigns, ChChes appears to be unique to this group. An analysis of the malware family can be found later in this blog.\n\nInterestingly, the ChChes samples we observed were digitally signed using a certificate originally used by HackingTeam and later part of the data leaked when they were themselves hacked. Wapack labs also observed a similar sample targeting Japan in November. It\u2019s not clear why the attackers chose to use this certificate, as it was old, had been leaked online, and had already been revoked by the time they used it. Digital certificates are typically used because they afford an air of legitimacy, which this one definitely does not.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-menupass-returns-new-malware-new-attacks-japanese-academics-organizations/",
            "https://www.cylance.com/en_us/blog/the-deception-project-a-new-japanese-centric-threat.html",
            "https://www.jpcert.or.jp/magazine/acreport-ChChes_ps1.html",
            "https://www.jpcert.or.jp/magazine/acreport-ChChes.html",
            "https://www.pwc.co.uk/cyber-security/pdf/cloud-hopper-annex-b-final.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0144/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.chches"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:chches"
        ],
        "uuid": "641359e0-3415-45b2-a304-860ecb58ac7d",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "chches",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-riverside",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE RIVERSIDE",
            "categories": [
                "Anel",
                "ChChes",
                "Cobalt Strike",
                "PlugX",
                "Poison Ivy",
                "Quasar RAT",
                "RedLeaves",
                "APT10"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/pdf/cloud-hopper-annex-b-final.pdf",
            "date": "2017-04",
            "organization": "PricewaterhouseCoopers",
            "author": "PricewaterhouseCoopers",
            "title": "Operation Cloud Hopper: Technical Annex",
            "categories": [
                "ChChes",
                "PlugX",
                "Quasar RAT",
                "RedLeaves",
                "Trochilus RAT"
            ]
        },
        {
            "data_url": "https://www.cylance.com/en_us/blog/the-deception-project-a-new-japanese-centric-threat.html",
            "date": "2017-02-27",
            "organization": "Threat Vector",
            "author": "Jon Gross",
            "title": "The Deception Project: A New Japanese-Centric Threat",
            "categories": [
                "ChChes",
                "Snake Wine"
            ]
        },
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2017/02/unit42-menupass-returns-new-malware-new-attacks-japanese-academics-organizations/",
            "date": "2017-02-16",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Jen Miller-Osborn",
            "title": "menuPass Returns with New Malware and New Attacks Against Japanese Academics and Organizations",
            "categories": [
                "ChChes"
            ]
        },
        {
            "data_url": "https://www.jpcert.or.jp/magazine/acreport-ChChes_ps1.html",
            "date": "2017-02-10",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "PowerSploit",
            "categories": [
                "ChChes"
            ]
        },
        {
            "data_url": "https://www.jpcert.or.jp/magazine/acreport-ChChes.html",
            "date": "2017-01-26",
            "organization": "JPCERT/CC",
            "author": "Yu Nakamura",
            "title": "Malware ChChes interacts with C & C server using Cookie header",
            "categories": [
                "ChChes",
                "Snake Wine"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "chches",
            "procedure_code": "s0144",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0144",
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
                    "procedure_description": "chches establishes persistence by adding a registry run key.[56]"
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
                    "procedure_description": "chches establishes persistence by adding a registry run key.[56]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/001",
                    "technique_name": "impair defenses : disable or modify tools",
                    "technique_description": "adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. this may take many forms, such as killing security software processes or services, modifying / deleting registry keys or configuration files so that tools do not operate properly, or other methods to interfere with security tools scanning or reporting information. adversaries may also disable updates to prevent the latest security patches from reaching tools on victim systems.",
                    "procedure_description": "chches can alter the victim's proxy configuration.[21]"
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
                    "procedure_description": "chches copies itself to an .exe file with a filename that is likely intended to imitate norton antivirus but has several letters reversed (e.g. notron.exe).[39]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "chches samples were digitally signed with a certificate originally used by hacking team that was later leaked and subsequently revoked.[16][17][18]"
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
                    "procedure_description": "chches steals credentials stored inside internet explorer.[19]"
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
                    "procedure_description": "chches collects the victim's %temp% directory path and version of internet explorer.[72]"
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
                    "procedure_description": "chches collects its process identifier (pid) on the victim.[57]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "chches collects the victim hostname, window resolution, and microsoft windows version.[86][87]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "chches communicates to its c2 server over http and embeds data within the cookie http header.[60][61]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1132/001",
                    "technique_name": "data encoding : standard encoding",
                    "technique_description": "adversaries may encode data with a standard data encoding system to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a standard data encoding system that adheres to existing protocol specifications. common data encoding schemes include ascii, unicode, hexadecimal, base64, and mime. some data encoding systems may also result in data compression, such as gzip.",
                    "procedure_description": "chches can encode c2 data with a custom technique that utilizes base64.[22][23]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/001",
                    "technique_name": "encrypted channel : symmetric cryptography",
                    "technique_description": "adversaries may employ a known symmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. symmetric encryption algorithms use the same key for plaintext encryption and ciphertext decryption. common symmetric encryption algorithms include aes, des, 3des, blowfish, and rc4.",
                    "procedure_description": "chches can encrypt c2 traffic with aes or rc4.[28][29]"
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
                    "procedure_description": "chches is capable of downloading files, including additional modules.[103][104][105]"
                }
            ]
        }
    ]
};