var threatdata = {
    "name": "RawPOS",
    "alias": "RawPOS, FIENDCRY, DUEBREW, DRIFTWOOD",
    "category": "Malware",
    "type": "POS malware, Backdoor, Info stealer",
    "modified": "2020-05-25",
    "all_data": {
        "tool": "RawPOS",
        "names": [
            {
                "name": "RawPOS"
            },
            {
                "name": "FIENDCRY"
            },
            {
                "name": "DUEBREW"
            },
            {
                "name": "DRIFTWOOD"
            }
        ],
        "description": "(Trend Micro) Despite being one of the oldest Point-of-Sale (PoS) RAM scraper malware families out in the wild, RawPOS (detected by Trend Micro as TSPY_RAWPOS) is still very active today, with the threat actors behind it primarily focusing on the lucrative multibillion-dollar hospitality industry. While the threat actor\u2019s tools for lateral movement, as well as RawPOS\u2019 components, remain consistent, new behavior from the malware puts its victims at greater risk via potential identity theft. Specifically, this new behavior involves RawPOS stealing the driver\u2019s license information from the user to aid in the threat group\u2019s malicious activities.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/rawpos-new-behavior-risks-identity-theft/",
            "https://usa.visa.com/dam/VCOM/download/merchants/alert-rawpos.pdf",
            "https://threatvector.cylance.com/en_us/home/rawpos-malware.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0169/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.rawpos"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:rawpos"
        ],
        "uuid": "72670111-f95a-423c-a296-f424939cc08e",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rawpos",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://blog.trendmicro.com/trendlabs-security-intelligence/rawpos-new-behavior-risks-identity-theft/?platform=hootsuite",
            "date": "2017-04-19",
            "organization": "Trend Micro",
            "author": "Trend Micro Cyber Safety Solutions Team",
            "title": "RawPOS: New Behavior Risks Identity Theft",
            "categories": [
                "RawPOS"
            ]
        },
        {
            "data_url": "https://threatvector.cylance.com/en_us/home/rawpos-malware.html",
            "date": "2017-03-08",
            "organization": "Cylance",
            "author": "Threat Research Team",
            "title": "RawPOS Malware Rides Again",
            "categories": [
                "RawPOS"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=fevGZs0EQu8",
            "date": "2016-10-07",
            "organization": "FireEye",
            "author": "Matt Bromiley",
            "title": "Attacking the Hospitality and Gaming Industries: Tracking an Attacker Around the World in 7 Years",
            "categories": [
                "RawPOS"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "rawpos",
            "procedure_code": "s0169",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0169",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "rawpos installs itself as a service to maintain persistence.[101][102][103]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "rawpos installs itself as a service to maintain persistence.[101][102][103]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/004",
                    "technique_name": "masquerading : masquerade task or service",
                    "technique_description": "adversaries may attempt to manipulate the name of a task or service to make it appear legitimate or benign. tasks/services executed by the task scheduler or systemd will typically be given a name and/or description. windows services will have a service name as well as a display name. many benign tasks and services exist that have commonly associated names. adversaries may give tasks or services names that are similar or identical to those of legitimate ones.",
                    "procedure_description": "new services created by rawpos are made to appear like legitimate windows services, with names such as \"windows management help service\", \"microsoft support\", and \"windows advanced task manager\".[59][60][61]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/003",
                    "technique_name": "archive collected data : archive via custom method",
                    "technique_description": "an adversary may compress or encrypt data that is collected prior to exfiltration using a custom method. adversaries may choose to use custom archival methods, such as encryption with xor or stream ciphers implemented with no external library or utility references. custom implementations of well-known compression algorithms have also been used.",
                    "procedure_description": "rawpos encodes credit card data it collected from the victim with xor.[32][33][34]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "rawpos dumps memory from specific processes on a victim system, parses the dumped files, and scrapes them for credit card data.[155][156][157]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1074/001",
                    "technique_name": "data staged : local data staging",
                    "technique_description": "adversaries may stage collected data in a central location or directory on the local system prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "data captured by rawpos is placed in a temporary file under a directory named \"memdump\".[85]"
                }
            ]
        }
    ]
};