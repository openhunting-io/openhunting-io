var threatdata = {
    "name": "FLIPSIDE",
    "alias": "FLIPSIDE",
    "category": "Malware",
    "type": "Tunneling",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "FLIPSIDE",
        "names": [
            {
                "name": "FLIPSIDE"
            }
        ],
        "description": "FLIPSIDE is a simple tool similar to {{Plink}} that is used by FIN5 to maintain access to victims.",
        "category": "Malware",
        "type": [
            "Tunneling"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0173/"
        ],
        "uuid": "d116ebce-95ed-42da-86d8-8b35fc2ce795",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "flipside",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "flipside",
            "procedure_code": "s0173",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0173",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1572",
                    "technique_link": "https://attack.mitre.org/techniques/T1572",
                    "technique_name": "protocol tunneling",
                    "technique_description": "adversaries may tunnel network communications to and from a victim system within a separate protocol to avoid detection/network filtering and/or enable access to otherwise unreachable systems. tunneling involves explicitly encapsulating a protocol within another. this behavior may conceal malicious traffic by blending in with existing traffic and/or provide an outer layer of encryption (similar to a vpn). tunneling could also enable routing of network packets that would otherwise not reach their intended destination, such as smb, rdp, or other traffic that would be filtered by network appliances or not routed over the internet.",
                    "procedure_description": "flipside uses rdp to tunnel traffic from a victim environment.[15]"
                }
            ]
        }
    ]
};