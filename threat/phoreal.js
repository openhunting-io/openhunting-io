var threatdata = {
    "name": "PHOREAL",
    "alias": "PHOREAL, Rizzo",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-03-07",
    "all_data": {
        "tool": "PHOREAL",
        "names": [
            {
                "name": "PHOREAL"
            },
            {
                "name": "Rizzo"
            }
        ],
        "description": "(Cylance) Rizzo is a very simple backdoor that is capable of creating a reverse shell, performing simple file I/O and top-level window enumeration. It communicates to a list of four preconfigured C2 servers via ICMP on port 53.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.cylance.com/content/dam/cylance-web/en-us/resources/knowledge-center/resource-library/reports/SpyRATsofOceanLotusMalwareWhitePaper.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0158/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.phoreal"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:PHOREAL"
        ],
        "uuid": "debf2ce2-bb35-478d-b77a-6ed8ac297c97",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "phoreal",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://elastic.github.io/security-research/intelligence/2022/03/02.phoreal-targets-southeast-asia-financial-sector/article/",
            "date": "2022-03-07",
            "organization": "Elastic",
            "author": "Daniel Stepanic",
            "title": "PHOREAL Malware Targets the Southeast Asian Financial Sector",
            "categories": [
                "PHOREAL"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/tin-woodlawn",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "TIN WOODLAWN",
            "categories": [
                "Cobalt Strike",
                "KerrDown",
                "MimiKatz",
                "PHOREAL",
                "RatSnif",
                "Remy",
                "SOUNDBITE",
                "APT32"
            ]
        },
        {
            "data_url": "https://www.cylance.com/content/dam/cylance-web/en-us/resources/knowledge-center/resource-library/reports/SpyRATsofOceanLotusMalwareWhitePaper.pdf",
            "date": "2018-11-02",
            "organization": "Cylance",
            "author": "Cylance",
            "title": "The SpyRATs of OceanLotus",
            "categories": [
                "KOMPROGO",
                "PHOREAL"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "phoreal",
            "procedure_code": "s0158",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0158",
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
                    "procedure_description": "phoreal is capable of creating reverse shell.[182]"
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
                    "procedure_description": "phoreal is capable of manipulating the registry.[114]"
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
                    "procedure_description": "phoreal communicates via icmp for c2.[49]"
                }
            ]
        }
    ]
};