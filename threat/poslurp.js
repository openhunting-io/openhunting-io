var threatdata = {
    "name": "PoSlurp",
    "alias": "PoSlurp, PUNCHTRACK, PSVC",
    "category": "Malware",
    "type": "POS malware, Backdoor, Info stealer",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "PoSlurp",
        "names": [
            {
                "name": "PoSlurp"
            },
            {
                "name": "PUNCHTRACK"
            },
            {
                "name": "PSVC"
            }
        ],
        "description": "(Trend Micro) PoSlurp scrapes credit card data processed by the PoS devices, including stored and encrypted card data prior to malware infection. Once the information is extracted from the infected system, the attackers can check and verify the validity of the data offline. PoSlurp also allows the attackers to inject other commands, access files, copy log files back to the server, and delete log files, among others.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/fin8-reemerges-with-new-pos-malware-badhatch"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0197/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.poslurp"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:PoSlurp"
        ],
        "uuid": "40074bfa-a8db-4cd2-89d4-200c99d717f2",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "poslurp",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://norfolkinfosec.com/fuel-pumps-ii-poslurp-b/",
            "date": "2019-12-31",
            "organization": "One Night in Norfolk",
            "author": "Norfolk",
            "title": "Fuel Pumps II \u2013 PoSlurp.B",
            "categories": [
                "PoSlurp"
            ]
        },
        {
            "data_url": "https://twitter.com/just_windex/status/1162118585805758464",
            "date": "2019-08-15",
            "organization": "Twitter (@just_windex)",
            "author": "Windex",
            "title": "Tweet on PoSlurp.B",
            "categories": [
                "PoSlurp"
            ]
        },
        {
            "data_url": "https://atr-blog.gigamon.com/2019/07/23/abadbabe-8badf00d-discovering-badhatch-and-a-detailed-look-at-fin8s-tooling/",
            "date": "2019-07-23",
            "organization": "Gigamon",
            "author": "Kristina Savelesky",
            "title": "ABADBABE 8BADF00D: Discovering BADHATCH and a Detailed Look at FIN8\u2019s Tooling",
            "categories": [
                "PoSlurp",
                "Powersniff"
            ]
        },
        {
            "data_url": "https://www.root9b.com/sites/default/files/whitepapers/PoS%20Malware%20ShellTea%20PoSlurp.pdf",
            "date": "2017-06-19",
            "organization": "root9b",
            "author": "root9b",
            "title": "SHELLTEA + POSLURP Malware Memory-resident Point-of-Sale Malware Attacks Industry",
            "categories": [
                "PoSlurp",
                "FIN8"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "punchtrack",
            "procedure_code": "s0197",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0197",
            "techniques": [
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
                    "procedure_description": "punchtrack is loaded and executed by a highly obfuscated launcher.[260]"
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
                    "procedure_description": "punchtrack scrapes memory for properly formatted payment card data.[147][148]"
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
                    "procedure_description": "punchtrack aggregates collected data in a tmp file.[80]"
                }
            ]
        }
    ]
};