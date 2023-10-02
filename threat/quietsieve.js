var threatdata = {
    "name": "QuietSieve",
    "alias": "QuietSieve",
    "category": "Malware",
    "type": "Info stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "QuietSieve",
        "names": [
            {
                "name": "QuietSieve"
            }
        ],
        "description": "(Microsoft) The QuietSieve malware family refers to a series of heavily-obfuscated .NET binaries specifically designed to steal information from the target host.",
        "category": "Malware",
        "type": [
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2022/02/04/actinium-targets-ukrainian-organizations/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0686/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.quietsieve"
        ],
        "uuid": "fe59dd39-ff4d-4f89-a5d4-89ceb6235b7c",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "quietsieve",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/02/04/actinium-targets-ukrainian-organizations/",
            "date": "2022-02-04",
            "organization": "Microsoft",
            "author": "Microsoft Threat Intelligence Center (MSTIC)",
            "title": "ACTINIUM targets Ukrainian organizations",
            "categories": [
                "DilongTrash",
                "DinoTrain",
                "Pteranodon",
                "QuietSieve",
                "Gamaredon Group"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "quietsieve",
            "procedure_code": "s0686",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0686",
            "techniques": [
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/003",
                    "technique_name": "hide artifacts : hidden window",
                    "technique_description": "adversaries may use hidden windows to conceal malicious activity from the plain sight of users. in some cases, windows that would typically be displayed when an application carries out an operation can be hidden. this may be utilized by system administrators to avoid disrupting user work environments when carrying out administrative tasks.",
                    "procedure_description": "quietsieve has the ability to execute payloads in a hidden window.[35]"
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
                    "procedure_description": "quietsieve can search files on the target host by extension, including doc, docx, xls, rtf, odt, txt, jpg, pdf, rar, zip, and 7z.[241]"
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
                    "procedure_description": "quietsieve can identify and search networked drives for specific file name extensions.[47]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1120",
                    "technique_link": "https://attack.mitre.org/techniques/T1120",
                    "technique_name": "peripheral device discovery",
                    "technique_description": "adversaries may attempt to gather information about attached peripheral devices and components connected to a computer system. peripheral devices could include auxiliary resources that support a variety of functionalities such as keyboards, printers, cameras, smart card readers, or removable storage. the information may be used to enhance their awareness of the system and network environment or may be used for further actions.",
                    "procedure_description": "quietsieve can identify and search removable drives for specific file name extensions.[36]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1016/001",
                    "technique_name": "system network configuration discovery : internet connection discovery",
                    "technique_description": "adversaries may check for internet connectivity on compromised systems. this may be performed during automated discovery and can be accomplished in numerous ways such as using ping, tracert, and get requests to websites.",
                    "procedure_description": "quietsieve can check c2 connectivity with a ping to 8.8.8.8 (google public dns).[11]"
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
                    "procedure_description": "quietsieve can collect files from a compromised host.[152]"
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
                    "procedure_description": "quietsieve has taken screenshots every five minutes and saved them to the user's local application data folder under temp\\symbolsourcesymbols\\icons or temp\\modeauto\\icons.[132]"
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
                    "procedure_description": "quietsieve can use https in c2 communications.[264]"
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
                    "procedure_description": "quietsieve can download and execute payloads on a target host.[193]"
                }
            ]
        }
    ]
};