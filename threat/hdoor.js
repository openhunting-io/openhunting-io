var threatdata = {
    "name": "HDoor",
    "alias": "HDoor, Custom HDoor",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Wiper, Tunneling",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "HDoor",
        "names": [
            {
                "name": "HDoor"
            },
            {
                "name": "Custom HDoor"
            }
        ],
        "description": "(Kaspersky) The Naikon APT frequently used a custom backdoor that appears to be an HDoor variant, based on old \u201cHonker Union\u201d code like \u201chscan v120\u201d. For example, once on a victim network, one of the first steps is to run the hdoor -hbs scan to identify target local network hosts.\n\nThe Naikon APT\u2019s custom-built HDoor tool is a robust reconnaissance tool for lateral movement, supporting the identification of, interfacing with and attacking of multiple technologies and resources:\n\u2022 host, user, group, and related authentication resources and cracking/brute forcing capabilities\n\u2022 network asset scanning and identification, including SQL database, embedded network devices like home or SMB routers, and other common network services\n\u2022 fake service listener to sniff traffic\n\u2022 disk wiping \u2013 safe delete with multiple overwrites\n\u2022 process management\n\u2022 local filetime modifier\n\u2022 SQL administration toolset\n\u2022 SOCKS5 proxy service\n\u2022 banner-based scanner\n\u2022 AV killer",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Wiper",
            "Tunneling"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07205555/TheNaikonAPT-MsnMM1.pdf",
            "https://securelist.com/cycldek-bridging-the-air-gap/97157/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0061/"
        ],
        "uuid": "69ede5dc-4d7a-4ae5-8469-e4d93f62b2a6",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hdoor",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "hdoor",
            "procedure_code": "s0061",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0061",
            "techniques": [
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/001",
                    "technique_name": "impair defenses : disable or modify tools",
                    "technique_description": "adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. this may take many forms, such as killing security software processes or services, modifying / deleting registry keys or configuration files so that tools do not operate properly, or other methods to interfere with security tools scanning or reporting information. adversaries may also disable updates to prevent the latest security patches from reaching tools on victim systems.",
                    "procedure_description": "hdoor kills anti-virus found on the victim.[41]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1046",
                    "technique_link": "https://attack.mitre.org/techniques/T1046",
                    "technique_name": "network service discovery",
                    "technique_description": "adversaries may attempt to get a listing of services running on remote hosts and local network infrastructure devices, including those that may be vulnerable to remote software exploitation. common methods to acquire this information include port and/or vulnerability scans using tools that are brought onto a system.",
                    "procedure_description": "hdoor scans to identify open ports on the victim.[30]"
                }
            ]
        }
    ]
};