var threatdata = {
    "name": "HiKit",
    "alias": "HiKit",
    "category": "Malware",
    "type": "Backdoor, Tunneling",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "HiKit",
        "names": [
            {
                "name": "HiKit"
            }
        ],
        "description": "(Novetta) Hikit consists of at least two generations of malware that provides basic RAT functionality. The first generation of Hikit (referred to as \u201cGen 1\u201d) operates as a server and requires an externally exposed network interface in order for an attacker to access the victim machine. The second generation of Hikit (referred to as \u201cGen 2\u201d) uses the more traditional client model and beacons out to an attacker\u2019s C2 server. While the communication models shifted dramatically between Gen 1 and Gen 2, both generations of Hikit retain the same basic RAT function consisting of remote command shell, file management, network proxy and port forwarding.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://www.novetta.com/wp-content/uploads/2014/11/HiKit.pdf",
            "https://www.recordedfuture.com/hidden-lynx-analysis/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0009/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hikit"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:hikit"
        ],
        "uuid": "4b11af2b-ef10-4160-ac62-046b4289e683",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hikit",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-keystone",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE KEYSTONE",
            "categories": [
                "9002 RAT",
                "BLACKCOFFEE",
                "DeputyDog",
                "Derusbi",
                "HiKit",
                "PlugX",
                "Poison Ivy",
                "ZXShell",
                "APT17"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0001/",
            "date": "2017-05-31",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Axiom",
            "categories": [
                "Derusbi",
                "9002 RAT",
                "BLACKCOFFEE",
                "Derusbi",
                "Ghost RAT",
                "HiKit",
                "PlugX",
                "ZXShell",
                "APT17"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/security-vendors-take-action-against-hidden-lynx-malware",
            "date": "2014-10-14",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Security vendors take action against Hidden Lynx malware",
            "categories": [
                "HiKit"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20141016080249/http://www.symantec.com/connect/blogs/security-vendors-take-action-against-hidden-lynx-malware",
            "date": "2014-10-14",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Security vendors take action against Hidden Lynx malware",
            "categories": [
                "Gameover P2P",
                "HiKit",
                "Shylock",
                "APT17"
            ]
        },
        {
            "data_url": "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2013/hidden_lynx.pdf",
            "date": "2013-09-17",
            "organization": "Symantec",
            "author": "Stephen Doherty",
            "title": "Hidden Lynx \u2013 Professional Hackers for Hire",
            "categories": [
                "9002 RAT",
                "HiKit",
                "APT17"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "hikit",
            "procedure_code": "s0009",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0009",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566",
                    "technique_link": "https://attack.mitre.org/techniques/T1566",
                    "technique_name": "phishing",
                    "technique_description": "adversaries may send phishing messages to gain access to victim systems. all forms of phishing are electronically delivered social engineering. phishing can be targeted, known as spearphishing. in spearphishing, a specific individual, company, or industry will be targeted by the adversary. more generally, adversaries can conduct non-targeted phishing, such as in mass malware spam campaigns.",
                    "procedure_description": "hikit has been spread through spear phishing.[9]"
                },
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
                    "procedure_description": "hikit has the ability to create a remote shell and run given commands.[158]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "hikit has used dll search order hijacking to load oci.dll as a persistence mechanism.[23]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "hikit has used dll search order hijacking to load oci.dll as a persistence mechanism.[23]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "hikit has used dll search order hijacking to load oci.dll as a persistence mechanism.[23]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1014",
                    "technique_link": "https://attack.mitre.org/techniques/T1014",
                    "technique_name": "rootkit",
                    "technique_description": "adversaries may use rootkits to hide the presence of programs, files, network connections, services, drivers, and other system components. rootkits are programs that hide the existence of malware by intercepting/hooking and modifying operating system api calls that supply system information.",
                    "procedure_description": "hikit is a rootkit that has been used by axiom.[16] [17]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/004",
                    "technique_name": "subvert trust controls : install root certificate",
                    "technique_description": "adversaries may install a root certificate on a compromised system to avoid warnings when connecting to adversary controlled web servers. root certificates are used in public key cryptography to identify a root certificate authority (ca). when a root certificate is installed, the system or application will trust certificates in the root's chain of trust that have been signed by the root certificate. certificates are commonly used for establishing secure tls/ssl communications within a web browser. when a user attempts to browse a website that presents a certificate that is not trusted an error message will be displayed to warn the user of the security risk. depending on the security settings, the browser may not allow the user to establish a connection to the website.",
                    "procedure_description": "hikit uses certmgr.exe -add globalsign.cer -c -s -r localmachine root and certmgr.exe -add globalsign.cer -c -s -r localmachinetrustedpublisher to install a self-generated certificate to the local trust store as a root ca and trusted publisher.[9]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/006",
                    "technique_name": "subvert trust controls : code signing policy modification",
                    "technique_description": "adversaries may modify code signing policies to enable execution of unsigned or self-signed code. code signing provides a level of authenticity on a program from a developer and a guarantee that the program has not been tampered with. security controls can include enforcement mechanisms to ensure that only valid, signed code can be run on an operating system.",
                    "procedure_description": "hikit has attempted to disable driver signing verification by tampering with several registry keys prior to the loading of a rootkit driver component.[5]"
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
                    "procedure_description": "hikit can upload files from compromised machines.[18]"
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
                    "procedure_description": "hikit has used http for c2.[158]"
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
                    "procedure_description": "hikit performs xor encryption.[65]"
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
                    "procedure_description": "hikit has the ability to download files to a compromised host.[214]"
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
                    "procedure_description": "hikit supports peer connections.[12]"
                }
            ]
        }
    ]
};