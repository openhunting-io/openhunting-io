var threatdata = {
    "name": "RGDoor",
    "alias": "RGDoor",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2021-08-06",
    "all_data": {
        "tool": "RGDoor",
        "names": [
            {
                "name": "RGDoor"
            }
        ],
        "description": "RGDoor is a malicious Internet Information Services (IIS) backdoor developed in the C++ language. RGDoor has been seen deployed on webservers belonging to the Middle East government organizations. RGDoor provides backdoor access to compromised IIS servers.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-oilrig-uses-rgdoor-iis-backdoor-targets-middle-east/",
            "https://researchcenter.paloaltonetworks.com/2017/09/unit42-striking-oil-closer-look-adversary-infrastructure/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0258/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.rgdoor"
        ],
        "uuid": "260ce10a-405e-4723-a836-5430dcf54336",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rgdoor",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2021/08/06/anatomy-native-iis-malware/",
            "date": "2021-08-06",
            "organization": "ESET Research",
            "author": "Zuzana Hromcov\u00e1",
            "title": "Anatomy of native IIS malware",
            "categories": [
                "IISniff",
                "RGDoor"
            ]
        },
        {
            "data_url": "https://i.blackhat.com/USA21/Wednesday-Handouts/us-21-Anatomy-Of-Native-Iis-Malware-wp.pdf",
            "date": "2021-08-04",
            "organization": "ESET Research",
            "author": "Zuzana Hromcov\u00e1",
            "title": "Anatomy of Native IIS Malware (white papaer)",
            "categories": [
                "IISniff",
                "RGDoor"
            ]
        },
        {
            "data_url": "https://i.blackhat.com/USA21/Wednesday-Handouts/us-21-Anatomy-Of-Native-Iis-Malware.pdf",
            "date": "2021-08-04",
            "organization": "ESET Research",
            "author": "Zuzana Hromcov\u00e1",
            "title": "Anatomy of Native IIS Malware (slides)",
            "categories": [
                "IISniff",
                "RGDoor"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/ongoing-campaign-leveraging-exchange-vulnerability-potentially-linked-to-iran",
            "date": "2021-07-20",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Ongoing Campaign Leveraging Exchange Vulnerability Potentially Linked to Iran",
            "categories": [
                "CHINACHOPPER",
                "MimiKatz",
                "RGDoor"
            ]
        },
        {
            "data_url": "https://drive.google.com/file/d/1oA4YSwXLxEF-EXJcrM76Bc4_7ZfBGYE4/view",
            "date": "2020-09-25",
            "organization": "",
            "author": "Emanuele De Lucia",
            "title": "APT vs Internet Service Providers",
            "categories": [
                "TwoFace",
                "RGDoor"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/cobalt-lyceum",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT LYCEUM",
            "categories": [
                "danbot",
                "RGDoor",
                "LYCEUM"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/cobalt-gypsy",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT GYPSY",
            "categories": [
                "TwoFace",
                "MacDownloader",
                "BONDUPDATER",
                "pupy",
                "Helminth",
                "jason",
                "RGDoor",
                "TinyZbot",
                "OilRig"
            ]
        },
        {
            "data_url": "https://cyware.com/blog/apt34-the-helix-kitten-cybercriminal-group-loves-to-meow-middle-eastern-and-international-organizations-48ae",
            "date": "2019-08-22",
            "organization": "Cyware",
            "author": "Cyware",
            "title": "APT34: The Helix Kitten Cybercriminal Group Loves to Meow Middle Eastern and International Organizations",
            "categories": [
                "TwoFace",
                "BONDUPDATER",
                "POWRUNER",
                "QUADAGENT",
                "Helminth",
                "ISMAgent",
                "Karkoff",
                "LONGWATCH",
                "OopsIE",
                "PICKPOCKET",
                "RGDoor",
                "VALUEVAULT"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2018/01/unit42-oilrig-uses-rgdoor-iis-backdoor-targets-middle-east/",
            "date": "2018-01-25",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "OilRig uses RGDoor IIS Backdoor on Targets in the Middle East",
            "categories": [
                "RGDoor"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2017/09/unit42-striking-oil-closer-look-adversary-infrastructure/",
            "date": "2017-09-26",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Striking Oil: A Closer Look at Adversary Infrastructure",
            "categories": [
                "RGDoor"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "rgdoor",
            "procedure_code": "s0258",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0258",
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
                    "procedure_description": "rgdoor uses cmd.exe to execute commands on the victim\u2019s machine.[286]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1505.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1505/004",
                    "technique_name": "server software component : iis components",
                    "technique_description": "adversaries may install malicious components that run on internet information services (iis) web servers to establish persistence. iis provides several mechanisms to extend the functionality of the web servers. for example, internet server application programming interface (isapi) extensions and filters can be installed to examine and/or modify incoming and outgoing iis web requests. extensions and filters are deployed as dll files that export three functions: get{extension/filter}version, http{extension/filter}proc, and (optionally) terminate{extension/filter}. iis modules may also be installed to extend iis web servers.",
                    "procedure_description": "rgdoor establishes persistence on webservers as an iis module.[12][9]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "rgdoor decodes base64 strings and decrypts strings using a custom xor algorithm.[197]"
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
                    "procedure_description": "rgdoor executes the whoami on the victim\u2019s machine.[158]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/003",
                    "technique_name": "archive collected data : archive via custom method",
                    "technique_description": "an adversary may compress or encrypt data that is collected prior to exfiltration using a custom method. adversaries may choose to use custom archival methods, such as encryption with xor or stream ciphers implemented with no external library or utility references. custom implementations of well-known compression algorithms have also been used.",
                    "procedure_description": "rgdoor encrypts files with xor before sending them back to the c2 server.[36]"
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
                    "procedure_description": "rgdoor uses http for c2 communications.[285]"
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
                    "procedure_description": "rgdoor uploads and downloads files to and from the victim\u2019s machine.[385]"
                }
            ]
        }
    ]
};