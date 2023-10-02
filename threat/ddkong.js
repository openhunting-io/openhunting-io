var threatdata = {
    "name": "DDKONG",
    "alias": "DDKONG",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-07-18",
    "all_data": {
        "tool": "DDKONG",
        "names": [
            {
                "name": "DDKONG"
            }
        ],
        "description": "(Palo Alto) The malware in question is configured with the following three exported functions:\n\u2022 ServiceMain\n\u2022 Rundll32Call\n\u2022 DllEntryPoint\n\nThe ServiceMain exported function indicates that this DLL is expected to be loaded as a service. If this function is successfully loaded, it will ultimately spawn a new instance of itself with the Rundll32Call export via a call to rundll32.exe.\nThe Rundll32Call exported function begins by creating a named event named \u2018RunOnce\u2019. This event ensures that only a single instance of DDKong is executed at a given time. If this is the only instance of DDKong running at the time, the malware continues. If it\u2019s not, it dies. This ensures that only a single instance of DDKong is executed at a given time.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-rancor-targeted-attacks-south-east-asia-using-plaintee-ddkong-malware-families/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0255/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ddkong"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DDKONG"
        ],
        "uuid": "84cd6758-4303-4a23-a102-3853651997fa",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ddkong",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/rancortaurus/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Rancor Taurus",
            "categories": [
                "DDKONG",
                "KHRAT",
                "PLAINTEE",
                "RANCOR"
            ]
        },
        {
            "data_url": "https://nao-sec.org/2020/01/an-overhead-view-of-the-royal-road.html",
            "date": "2020-01-29",
            "organization": "nao_sec blog",
            "author": "nao_sec",
            "title": "An Overhead View of the Royal Road",
            "categories": [
                "BLACKCOFFEE",
                "Cotx RAT",
                "Datper",
                "DDKONG",
                "Derusbi",
                "Icefog",
                "Korlia",
                "NewCore RAT",
                "PLAINTEE",
                "Poison Ivy",
                "Sisfader"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-overbrook",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE OVERBROOK",
            "categories": [
                "Aveo",
                "DDKONG",
                "IsSpace",
                "PLAINTEE",
                "PlugX",
                "Rambo",
                "DragonOK"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/rancor-cyber-espionage-group-uses-new-custom-malware-to-attack-southeast-asia/",
            "date": "2019-12-17",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Jen Miller-Osborn",
            "title": "Rancor: Cyber Espionage Group Uses New Custom Malware to Attack Southeast Asia",
            "categories": [
                "DDKONG",
                "Derusbi",
                "KHRAT"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2018/06/unit42-rancor-targeted-attacks-south-east-asia-using-plaintee-ddkong-malware-families/",
            "date": "2018-06-26",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Brittany Ash",
            "title": "RANCOR: Targeted Attacks in South East Asia Using PLAINTEE and DDKONG Malware Families",
            "categories": [
                "DDKONG",
                "PLAINTEE"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "ddkong",
            "procedure_code": "s0255",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0255",
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
                    "procedure_description": "ddkong decodes an embedded configuration using xor.[72]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/011",
                    "technique_name": "system binary proxy execution : rundll32",
                    "technique_description": "adversaries may abuse rundll32.exe to proxy execution of malicious code. using rundll32.exe, vice executing directly (i.e. shared modules), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. rundll32.exe is commonly associated with executing dll payloads (ex: rundll32.exe {dllname, dllfunction}).",
                    "procedure_description": "ddkong uses rundll32 to ensure only a single instance of itself is running at once.[37]"
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
                    "procedure_description": "ddkong lists files on the victim\u2019s machine.[99]"
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
                    "procedure_description": "ddkong downloads and uploads files on the victim\u2019s machine.[141]"
                }
            ]
        }
    ]
};