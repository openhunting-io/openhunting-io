var threatdata = {
    "name": "CARROTBALL",
    "alias": "CARROTBALL",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "CARROTBALL",
        "names": [
            {
                "name": "CARROTBALL"
            }
        ],
        "description": "(Palo Alto) CARROTBALL, initially discovered in an attack during October 2019, is a simple FTP downloader utility which facilitates the installation of {{Syscon}}, a full-featured Remote Access Trojan (RAT) which leverages FTP for Command and Control (C2). It was found embedded in a malicious Word document sent as a phishing lure to a US government agency and two non-US foreign nationals professionally associated with North Korea.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/the-fractured-statue-campaign-u-s-government-targeted-in-spear-phishing-attacks/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0465/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.carrotball"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:carrotball"
        ],
        "uuid": "9ab63043-dd17-4e16-97af-d79d55b5c5da",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "carrotball",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/the-fractured-statue-campaign-u-s-government-targeted-in-spear-phishing-attacks/",
            "date": "2020-01-23",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Adrian McCabe",
            "title": "The Fractured Statue Campaign: U.S. Government Targeted in Spear-Phishing Attacks",
            "categories": [
                "CARROTBALL",
                "CarrotBat",
                "Syscon"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "carrotball",
            "procedure_code": "s0465",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0465",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/002",
                    "technique_name": "user execution : malicious file",
                    "technique_description": "an adversary may rely upon a user opening a malicious file in order to gain execution. users may be subjected to social engineering to get them to open a file that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing attachment. adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, and .cpl.",
                    "procedure_description": "carrotball has been executed through users being lured into opening malicious e-mail attachments.[57]"
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
                    "procedure_description": "carrotball has used a custom base64 alphabet to decode files.[74]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/002",
                    "technique_name": "application layer protocol : file transfer protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with transferring files to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "carrotball has the ability to use ftp in c2 communications.[3]"
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
                    "procedure_description": "carrotball has the ability to download and install a remote payload.[96]"
                }
            ]
        }
    ]
};