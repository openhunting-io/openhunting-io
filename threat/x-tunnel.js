var threatdata = {
    "name": "X-Tunnel",
    "alias": "X-Tunnel, XTunnel, Shunnael, Trojan.Shunnael, XAPS",
    "category": "Malware",
    "type": "Tunneling",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "X-Tunnel",
        "names": [
            {
                "name": "X-Tunnel"
            },
            {
                "name": "XTunnel"
            },
            {
                "name": "Shunnael"
            },
            {
                "name": "Trojan.Shunnael"
            },
            {
                "name": "XAPS"
            }
        ],
        "description": "X-Tunnel is a network proxy tool that implements a custom network protocol encapsulated in the TLS protocol.\nwin.xtunnel_net is a rewrite of win.xtunnel using the .NET framework that surfaced late 2017.",
        "category": "Malware",
        "type": [
            "Tunneling"
        ],
        "information": [
            "https://netzpolitik.org/2015/digital-attack-on-german-parliament-investigative-report-on-the-hack-of-the-left-party-infrastructure-in-bundestag/",
            "https://www.root9b.com/sites/default/files/whitepapers/R9b_FSOFACY_0.pdf",
            "https://www.root9b.com/sites/default/files/whitepapers/root9b_follow_up_report_apt28.pdf",
            "https://www.invincea.com/2016/07/tunnel-of-gov-dnc-hack-and-the-russian-xtunnel/",
            "http://www.welivesecurity.com/wp-content/uploads/2016/10/eset-sednit-part-2.pdf",
            "https://www.crowdstrike.com/blog/bears-midst-intrusion-democratic-national-committee/",
            "http://download.microsoft.com/download/4/4/C/44CDEF0E-7924-4787-A56A-16261691ACE3/Microsoft_Security_Intelligence_Report_Volume_19_English.pdf",
            "https://www.ncsc.gov.uk/alerts/indicators-compromise-malware-used-apt28"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0117/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.xtunnel",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.xtunnel_net"
        ],
        "uuid": "a8450b3f-871c-4628-8057-0880894101f1",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "x-tunnel",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/apt-trends-report-q2-2020/97937/",
            "date": "2020-07-29",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2020",
            "categories": [
                "PhantomLance",
                "Dacls",
                "Penquin Turla",
                "elf.wellmess",
                "AppleJeus",
                "Dacls",
                "AcidBox",
                "Cobalt Strike",
                "Dacls",
                "EternalPetya",
                "Godlike12",
                "Olympic Destroyer",
                "PlugX",
                "shadowhammer",
                "ShadowPad",
                "Sinowal",
                "VHD Ransomware",
                "Volgmer",
                "WellMess",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://securelist.com/big-threats-using-code-similarity-part-1/97239/",
            "date": "2020-06-09",
            "organization": "Kaspersky Labs",
            "author": "Costin Raiu",
            "title": "Looking at Big Threats Using Code Similarity. Part 1",
            "categories": [
                "Penquin Turla",
                "CCleaner Backdoor",
                "EternalPetya",
                "Regin",
                "WannaCryptor",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/iron-twilight",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "IRON TWILIGHT",
            "categories": [
                "X-Agent",
                "X-Agent",
                "X-Agent",
                "Computrace",
                "HideDRV",
                "Sedreco",
                "Seduploader",
                "X-Agent",
                "XTunnel",
                "Zebrocy",
                "Zebrocy (AutoIT)"
            ]
        },
        {
            "data_url": "https://www.symantec.com/blogs/election-security/apt28-espionage-military-government",
            "date": "2018-10-04",
            "organization": "Symantec",
            "author": "Security Response Attack Investigation Team",
            "title": "APT28: New Espionage Operations Target Military and Government Organizations",
            "categories": [
                "XTunnel"
            ]
        },
        {
            "data_url": "https://symantec-blogs.broadcom.com/blogs/election-security/apt28-espionage-military-government",
            "date": "2018-10-04",
            "organization": "Symantec",
            "author": "Critical Attack Discovery and Intelligence Team",
            "title": "APT28: New Espionage Operations Target Military and Government Organizations",
            "categories": [
                "LoJax",
                "Seduploader",
                "X-Agent",
                "XTunnel",
                "Zebrocy",
                "APT28"
            ]
        },
        {
            "data_url": "https://contagiodump.blogspot.de/2017/02/russian-apt-apt28-collection-of-samples.html",
            "date": "2017-02-20",
            "organization": "Contagio Dump",
            "author": "Mila Parkour",
            "title": "Part I. Russian APT - APT28 collection of samples including OSX XAgent",
            "categories": [
                "X-Agent",
                "Komplex",
                "Coreshell",
                "Downdelph",
                "HideDRV",
                "SEADADDY",
                "Sedreco",
                "Seduploader",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "http://www.welivesecurity.com/wp-content/uploads/2016/10/eset-sednit-part-2.pdf",
            "date": "2016-10-20",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "En Route with Sednit Part 2: Observing the Comings and Goings",
            "categories": [
                "X-Agent",
                "Sedreco",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/bears-midst-intrusion-democratic-national-committee/",
            "date": "2016-06-15",
            "organization": "CrowdStrike",
            "author": "Dmitri Alperovitch",
            "title": "Bears in the Midst: Intrusion into the Democratic National Committee",
            "categories": [
                "X-Agent",
                "ATI-Agent",
                "SEADADDY",
                "Seduploader",
                "X-Agent",
                "XTunnel",
                "APT28"
            ]
        },
        {
            "data_url": "http://download.microsoft.com/download/4/4/C/44CDEF0E-7924-4787-A56A-16261691ACE3/Microsoft_Security_Intelligence_Report_Volume_19_English.pdf",
            "date": "2015-11-20",
            "organization": "Microsoft",
            "author": "Microsoft",
            "title": "Microsoft Security Intelligence Report Volume 19",
            "categories": [
                "XTunnel"
            ]
        },
        {
            "data_url": "https://www.root9b.com/sites/default/files/whitepapers/root9b_follow_up_report_apt28.pdf",
            "date": "2015-08",
            "organization": "root9b",
            "author": "root9b",
            "title": "TECHNICAL FOLLOW UP - APT28",
            "categories": [
                "XTunnel"
            ]
        },
        {
            "data_url": "https://netzpolitik.org/2015/digital-attack-on-german-parliament-investigative-report-on-the-hack-of-the-left-party-infrastructure-in-bundestag/",
            "date": "2015-06-19",
            "organization": "Netzpolitik.org",
            "author": "Claudio Guarnieri",
            "title": "Digital Attack on German Parliament: Investigative Report on the Hack of the Left Party Infrastructure in Bundestag",
            "categories": [
                "XTunnel",
                "APT28"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "xtunnel",
            "procedure_code": "s0117",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0117",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "xtunnel has been used to execute remote commands.[354]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "a version of xtunnel introduced in july 2015 obfuscated the binary using opaque predicates and other techniques in a likely attempt to obfuscate it and bypass security products.[360]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/001",
                    "technique_name": "obfuscated files or information : binary padding",
                    "technique_description": "adversaries may use binary padding to add junk data and change the on-disk representation of malware. this can be done without affecting the functionality or behavior of a binary, but can increase the size of the binary beyond what some security tools are capable of handling due to file size limitations.",
                    "procedure_description": "a version of xtunnel introduced in july 2015 inserted junk code into the binary in a likely attempt to obfuscate it and bypass security products.[38]"
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
                    "procedure_description": "xtunnel is capable of accessing locally stored passwords on victims.[41]"
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
                    "procedure_description": "xtunnel is capable of probing the network for open ports.[68]"
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
                    "procedure_description": "xtunnel uses ssl/tls and rc4 to encrypt traffic.[71][8]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1008",
                    "technique_link": "https://attack.mitre.org/techniques/T1008",
                    "technique_name": "fallback channels",
                    "technique_description": "adversaries may use fallback or alternate communication channels if the primary channel is compromised or inaccessible in order to maintain reliable command and control and to avoid data transfer thresholds.",
                    "procedure_description": "the c2 server used by xtunnel provides a port number to the victim to use as a fallback in case the connection closes on the currently used port.[11]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090",
                    "technique_link": "https://attack.mitre.org/techniques/T1090",
                    "technique_name": "proxy",
                    "technique_description": "adversaries may use a connection proxy to direct network traffic between systems or act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, reduce the number of simultaneous outbound network connections, provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between victims to avoid suspicion. adversaries may chain together multiple proxies to further disguise the source of malicious traffic.",
                    "procedure_description": "xtunnel relays traffic between a c2 server and a victim.[53]"
                }
            ]
        }
    ]
};