var threatdata = {
    "name": "RARSTONE",
    "alias": "RARSTONE",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2020-06-13",
    "all_data": {
        "tool": "RARSTONE",
        "names": [
            {
                "name": "RARSTONE"
            }
        ],
        "description": "(Trend Micro) The new sample detected by Trend Micro as BKDR_RARSTONE.A is similar (but not) {{PlugX}}, as it directly loads a backdoor \u201cfile\u201d in memory without dropping any \u201cfile\u201d. However, as we proceeded with our analysis, we found that BKDR_RARSTONE has some tricks of its own.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/bkdr_rarstone-new-rat-to-watch-out-for/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0055/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:rarstone"
        ],
        "uuid": "fd4b3d40-a16d-4451-bcc9-d620176310e1",
        "last-card-change": "2020-06-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rarstone",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "rarstone",
            "procedure_code": "s0055",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0055",
            "techniques": [
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "after decrypting itself in memory, rarstone downloads a dll file from its c2 server and loads it in the memory space of a hidden internet explorer process. this \"downloaded\" file is actually not dropped onto the system.[58]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "after decrypting itself in memory, rarstone downloads a dll file from its c2 server and loads it in the memory space of a hidden internet explorer process. this \"downloaded\" file is actually not dropped onto the system.[58]"
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
                    "procedure_description": "rarstone obtains installer properties from uninstall registry key entries to obtain information about installed applications and how to uninstall certain applications.[244]"
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
                    "procedure_description": "rarstone downloads its backdoor component from a c2 server and loads it directly into memory.[371]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1095",
                    "technique_link": "https://attack.mitre.org/techniques/T1095",
                    "technique_name": "non-application layer protocol",
                    "technique_description": "adversaries may use an osi non-application layer protocol for communication between host and c2 server or among infected hosts within a network. the list of possible protocols is extensive. specific examples include use of network layer protocols, such as the internet control message protocol (icmp), transport layer protocols, such as the user datagram protocol (udp), session layer protocols, such as socket secure (socks), as well as redirected/tunneled protocols, such as serial over lan (sol).",
                    "procedure_description": "rarstone uses ssl to encrypt its communication with its c2 server.[56]"
                }
            ]
        }
    ]
};