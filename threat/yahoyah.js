var threatdata = {
    "name": "Yahoyah",
    "alias": "Yahoyah, W32/Seeav",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Yahoyah",
        "names": [
            {
                "name": "Yahoyah"
            },
            {
                "name": "W32/Seeav"
            }
        ],
        "description": "Yahoyah is a Trojan used by Tropic Trooper as a second-stage backdoor.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "http://researchcenter.paloaltonetworks.com/2016/11/unit42-tropic-trooper-targets-taiwanese-government-and-fossil-fuel-provider-with-poison-ivy/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0388/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.yahoyah"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:yahoyah"
        ],
        "uuid": "258ae019-4da1-4600-876c-e782eb1391e1",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "yahoyah",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2016/11/unit42-tropic-trooper-targets-taiwanese-government-and-fossil-fuel-provider-with-poison-ivy/",
            "date": "2016-11-22",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Vicky Ray",
            "title": "Tropic Trooper Targets Taiwanese Government and Fossil Fuel Provider With Poison Ivy",
            "categories": [
                "Winsloader",
                "Yahoyah",
                "APT23"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "yahoyah",
            "procedure_code": "s0388",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0388",
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
                    "procedure_description": "yahoyah decrypts downloaded files before execution.[262]"
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
                    "procedure_description": "yahoyah encrypts its configuration file using a simple algorithm.[361]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1518/001",
                    "technique_name": "software discovery : security software discovery",
                    "technique_description": "adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. this may include things such as firewall rules and anti-virus. adversaries may use the information from security software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "yahoyah checks for antimalware solution processes on the system.[120]"
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
                    "procedure_description": "yahoyah checks for the system\u2019s windows os version and hostname.[376]"
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
                    "procedure_description": "yahoyah uses http for c2.[375]"
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
                    "procedure_description": "yahoyah uses http get requests to download other files that are executed in memory.[486]"
                }
            ]
        }
    ]
};