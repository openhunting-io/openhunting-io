var threatdata = {
    "name": "DILLJUICE",
    "alias": "DILLJUICE, FYAnti",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Credential stealer, Exfiltration",
    "modified": "2021-04-27",
    "all_data": {
        "tool": "DILLJUICE",
        "names": [
            {
                "name": "DILLJUICE"
            },
            {
                "name": "FYAnti"
            }
        ],
        "description": "(Cylance) {{QuasarRAT}} is a lightweight remote administration tool written in C#. It can collect system information, download and execute applications, upload files, log keystrokes, grab screenshots/camera captures, retrieve system passwords and run shell commands. The remote access Trojan (RAT) is loaded by a bespoke loader (a.k.a. {{DILLWEED}}). The encrypted QuasarRAT payload is stored in the Microsoft.NET directory, decrypted into memory, and instantiated using a CLR host application. In later variants an additional component is also used to install the RAT as a service (a.k.a DILLJUICE).\n\nThe following technical analysis focuses on the bespoke QuasarRAT loader developed by MenuPass and modifications made to the QuasarRAT backdoor.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://threatvector.cylance.com/en_us/home/threat-spotlight-menupass-quasarrat-backdoor.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dilljuice"
        ],
        "uuid": "d7ec9af2-2901-4191-a761-4662e997d2a5",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dilljuice",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/apt-trends-report-q1-2021/101967/",
            "date": "2021-04-27",
            "organization": "Kaspersky",
            "author": "GReAT",
            "title": "APT trends report Q1 2021",
            "categories": [
                "PAS",
                "Artra Downloader",
                "BadNews",
                "Bozok",
                "DILLJUICE",
                "Kazuar",
                "Quasar RAT",
                "SodaMaster"
            ]
        },
        {
            "data_url": "https://threatvector.cylance.com/en_us/home/threat-spotlight-menupass-quasarrat-backdoor.html",
            "date": "2019-06-10",
            "organization": "Cylance",
            "author": "Cylance Threat Research Team",
            "title": "Threat Spotlight: MenuPass/QuasarRAT Backdoor",
            "categories": [
                "DILLJUICE"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "fyanti",
            "procedure_code": "s0628",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0628",
            "techniques": [
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
                    "procedure_description": "fyanti has the ability to decrypt an embedded .net module.[81]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/002",
                    "technique_name": "obfuscated files or information : software packing",
                    "technique_description": "adversaries may perform software packing or virtual machine software protection to conceal their code. software packing is a method of compressing or encrypting an executable. packing an executable changes the file signature in an attempt to avoid signature-based detection. most decompression techniques decompress the executable code in memory. virtual machine software protection translates an executable's original code into a special format that only a special virtual machine can run. a virtual machine is then called to run this code.",
                    "procedure_description": "fyanti has used confuserex to pack its .net module.[43]"
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
                    "procedure_description": "fyanti can search the c:\\windows\\microsoft.net\\ directory for files of a specified size.[131]"
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
                    "procedure_description": "fyanti can download additional payloads to a compromised host.[159]"
                }
            ]
        }
    ]
};