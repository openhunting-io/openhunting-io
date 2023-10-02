var threatdata = {
    "name": "Moriya",
    "alias": "Moriya",
    "category": "Malware",
    "type": "Rootkit, Backdoor",
    "modified": "2021-12-28",
    "all_data": {
        "tool": "Moriya",
        "names": [
            {
                "name": "Moriya"
            }
        ],
        "description": "(Kaspersky) Based on string artefacts within the malware\u2019s binaries, we named this rootkit Moriya. This tool is a passive backdoor which allows attackers to inspect all incoming traffic to the infected machine, filter out packets that are marked as designated for the malware and respond to them. This forms a covert channel over which attackers are able to issue shell commands and receive back their outputs.",
        "category": "Malware",
        "type": [
            "Rootkit",
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/operation-tunnelsnake-and-moriya-rootkit/101831/https://securelist.com/operation-tunnelsnake-and-moriya-rootkit/101831/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.moriya"
        ],
        "uuid": "b0096525-5d1e-434a-9060-4c73f5da2492",
        "last-card-change": "2021-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "moriya",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/operation-tunnelsnake-and-moriya-rootkit/101831/",
            "date": "2021-05-06",
            "organization": "Kaspersky",
            "author": "Mark Lechtik",
            "title": "Operation TunnelSnake",
            "categories": [
                "Moriya"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "mori",
            "procedure_code": "s1047",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S1047",
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
                    "procedure_description": "mori can resolve networking apis from strings that are add-encrypted.[152]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "mori can delete its dll file and related files by registry value.[153]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1112",
                    "technique_link": "https://attack.mitre.org/techniques/T1112",
                    "technique_name": "modify registry",
                    "technique_description": "adversaries may interact with the windows registry to hide configuration information within registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.",
                    "procedure_description": "mori can write data to hklm\\software\\nfc\\ipa and hklm\\software\\nfc\\ and delete registry values.[95][96]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/010",
                    "technique_name": "system binary proxy execution : regsvr32",
                    "technique_description": "adversaries may abuse regsvr32.exe to proxy execution of malicious code. regsvr32.exe is a command-line program used to register and unregister object linking and embedding controls, including dynamic link libraries (dlls), on windows systems. the regsvr32.exe binary may also be signed by microsoft.",
                    "procedure_description": "mori can use regsvr32.exe for dll execution.[27]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1012",
                    "technique_link": "https://attack.mitre.org/techniques/T1012",
                    "technique_name": "query registry",
                    "technique_description": "adversaries may interact with the windows registry to gather information about the system, configuration, and installed software.",
                    "procedure_description": "mori can read data from the registry including from hklm\\software\\nfc\\ipa andhklm\\software\\nfc\\.[61]"
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
                    "procedure_description": "mori can communicate using http over ipv4 or ipv6 depending on a flag set.[215]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/004",
                    "technique_name": "application layer protocol : dns",
                    "technique_description": "adversaries may communicate using the domain name system (dns) application layer protocol to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "mori can use dns tunneling to communicate with c2.[42][43]"
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
                    "procedure_description": "mori can use base64 encoded json libraries used in c2.[57]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/001",
                    "technique_name": "data obfuscation : junk data",
                    "technique_description": "adversaries may add junk data to protocols used for command and control to make detection more difficult. by adding random or meaningless data to the protocols used for command and control, adversaries can prevent trivial methods for decoding, deciphering, or otherwise analyzing the traffic. examples may include appending/prepending data with junk characters or writing junk characters between significant characters.",
                    "procedure_description": "mori has obfuscated the fml.dll with 200mb of junk data.[7]"
                }
            ]
        }
    ]
};