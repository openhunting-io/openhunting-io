var threatdata = {
    "name": "BUBBLEWRAP",
    "alias": "BUBBLEWRAP, Backdoor.APT.FakeWinHTTPHelper",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "BUBBLEWRAP",
        "names": [
            {
                "name": "BUBBLEWRAP"
            },
            {
                "name": "Backdoor.APT.FakeWinHTTPHelper"
            }
        ],
        "description": "(FireEye) BUBBLEWRAP is a full-featured backdoor that is set to run when the system boots, and can communicate using HTTP, HTTPS, or a SOCKS proxy. This backdoor collects system information, including the operating system version and hostname, and includes functionality to check, upload, and register plugins that can further enhance its capabilities.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2015/11/china-based-threat.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0043/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bubblewrap"
        ],
        "uuid": "afe305f3-ba57-4b16-a33a-e679e5853383",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bubblewrap",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://attack.mitre.org/software/S0043/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Tool description: BUBBLEWRAP",
            "categories": [
                "BUBBLEWRAP"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2015/11/china-based-threat.html",
            "date": "2015-12-01",
            "organization": "FireEye",
            "author": "FireEye Threat Intelligence",
            "title": "China-based Cyber Threat Group Uses Dropbox for Malware Communications and Targets Hong Kong Media Outlets",
            "categories": [
                "BUBBLEWRAP",
                "LOWBALL",
                "TEMPER PANDA"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "bubblewrap",
            "procedure_code": "s0043",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0043",
            "techniques": [
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
                    "procedure_description": "bubblewrap collects system information, including the operating system version and hostname.[9]"
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
                    "procedure_description": "bubblewrap can communicate using http or https.[49]"
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
                    "procedure_description": "bubblewrap can communicate using socks.[13]"
                }
            ]
        }
    ]
};