var threatdata = {
    "name": "Ruler",
    "alias": "Ruler",
    "category": "Tools",
    "type": "Info stealer, Credential stealer",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "Ruler",
        "names": [
            {
                "name": "Ruler"
            }
        ],
        "description": "Ruler is a tool to abuse Microsoft Exchange services. It is publicly available on GitHub and the tool is executed via the command line. The creators of Ruler have also released a defensive tool, NotRuler, to detect its usage.",
        "category": "Tools",
        "type": [
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://github.com/sensepost/ruler"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0358/"
        ],
        "uuid": "4c90bc7c-0dad-4d8f-b72a-424eb6b852e5",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ruler",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "ruler",
            "procedure_code": "s0358",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0358",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1137.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1137/003",
                    "technique_name": "office application startup : outlook forms",
                    "technique_description": "adversaries may abuse microsoft outlook forms to obtain persistence on a compromised system. outlook forms are used as templates for presentation and functionality in outlook messages. custom outlook forms can be created that will execute code when a specifically crafted email is sent by an adversary utilizing the same custom outlook form.",
                    "procedure_description": "ruler can be used to automate the abuse of outlook forms to establish persistence.[2]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1137.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1137/004",
                    "technique_name": "office application startup : outlook home page",
                    "technique_description": "adversaries may abuse microsoft outlook's home page feature to obtain persistence on a compromised system. outlook home page is a legacy feature used to customize the presentation of outlook folders. this feature allows for an internal or external url to be loaded and presented whenever a folder is opened. a malicious html page can be crafted that will execute code when loaded by outlook home page.",
                    "procedure_description": "ruler can be used to automate the abuse of outlook home pages to establish persistence.[3]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1137.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1137/005",
                    "technique_name": "office application startup : outlook rules",
                    "technique_description": "adversaries may abuse microsoft outlook rules to obtain persistence on a compromised system. outlook rules allow a user to define automated behavior to manage email messages. a benign rule might, for example, automatically move an email to a particular folder in outlook if it contains specific words from a specific sender. malicious outlook rules can be created that can trigger code execution when an adversary sends a specifically crafted email to that user.",
                    "procedure_description": "ruler can be used to automate the abuse of outlook rules to establish persistence.[2]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/003",
                    "technique_name": "account discovery : email account",
                    "technique_description": "adversaries may attempt to get a listing of email addresses and accounts. adversaries may try to dump exchange address lists such as global address lists (gals).",
                    "procedure_description": "ruler can be used to enumerate exchange users and dump the gal.[12]"
                }
            ]
        }
    ]
};