var threatdata = {
    "name": "Anel",
    "alias": "Anel, lena, UpperCut",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Anel",
        "names": [
            {
                "name": "Anel"
            },
            {
                "name": "lena"
            },
            {
                "name": "UpperCut"
            }
        ],
        "description": "(Carbon Black) ANEL (also referred to as UpperCut) is a RAT program used by APT10 and observed in Japan uniquely. According to SecureWorks, all ANEL samples whose version is 5.3.0 or later are obfuscated with opaque predicates and control flow flattening.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.carbonblack.com/2019/02/25/defeating-compiler-level-obfuscations-used-in-apt10-malware/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/chessmaster-adds-updated-tools-to-its-arsenal/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0275/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.anel"
        ],
        "uuid": "111fc591-4d6f-43ea-8e30-fcbd65f55dd9",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "anel",
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
            "data_url": "https://www.virusbulletin.com/uploads/pdf/conference_slides/2019/VB2019-Haruyama.pdf",
            "date": "2019-10-24",
            "organization": "Carbon Black",
            "author": "Takahiro Haruyama",
            "title": "Defeating APT10 Compiler-level Obfuscations",
            "categories": [
                "Anel"
            ]
        },
        {
            "data_url": "https://www.macnica.net/file/mpressioncss_ta_report_2019.pdf",
            "date": "2019-04-01",
            "organization": "Macnica Networks",
            "author": "Macnica Networks",
            "title": "Trends in Cyber \u200b\u200bEspionage Targeting Japan 2nd Half of 2018",
            "categories": [
                "Anel",
                "Cobalt Strike",
                "Datper",
                "PLEAD",
                "Quasar RAT",
                "RedLeaves",
                "taidoor",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://www.macnica.net/file/mpressioncss_2018-1h-report_mnc_rev3_nopw.pdf",
            "date": "2018-10-01",
            "organization": "Macnica Networks",
            "author": "Macnica Networks",
            "title": "Trends in cyber espionage (targeted attacks) targeting Japan | First half of 2018",
            "categories": [
                "Anel",
                "Cobalt Strike",
                "Datper",
                "FlawedAmmyy",
                "Quasar RAT",
                "RedLeaves",
                "taidoor",
                "Winnti",
                "xxmm"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/chessmaster-adds-updated-tools-to-its-arsenal/",
            "date": "2018-03-29",
            "organization": "Trend Micro",
            "author": "Tamada Kiyotaka",
            "title": "ChessMaster Adds Updated Tools to Its Arsenal",
            "categories": [
                "Anel"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "uppercut",
            "procedure_code": "s0275",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0275",
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
                    "procedure_description": "uppercut uses cmd.exe to execute commands on the victim\u2019s machine.[214]"
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
                    "procedure_description": "uppercut has the capability to gather the victim's current directory.[312]"
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
                    "procedure_description": "uppercut has the capability to gather the system\u2019s hostname and os version.[384]"
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
                    "procedure_description": "uppercut has the capability to gather the victim's proxy information.[242]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1033",
                    "technique_link": "https://attack.mitre.org/techniques/T1033",
                    "technique_name": "system owner/user discovery",
                    "technique_description": "adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. they may do this, for example, by retrieving account usernames or by using os credential dumping. the information may be collected in a number of different ways using other discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. adversaries may use the information from system owner/user discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "uppercut has the capability to collect the current logged on user\u2019s username from a machine.[194]"
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
                    "procedure_description": "uppercut has the capability to obtain the time zone information and current timestamp of the victim\u2019s machine.[80]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "uppercut can capture desktop screenshots in the png format and send them to the c2 server.[173]"
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
                    "procedure_description": "uppercut has used http for c2, including sending error codes in cookie headers.[353]"
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
                    "procedure_description": "some versions of uppercut have used the hard-coded string \"this is the encrypt key\" for blowfish encryption when communicating with a c2. later versions have hard-coded keys uniquely for each c2 address.[140]"
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
                    "procedure_description": "uppercut can download and upload files to and from the victim\u2019s machine.[456]"
                }
            ]
        }
    ]
};