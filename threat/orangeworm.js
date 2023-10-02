var threatdata = {
    "name": "Orangeworm",
    "alias": "Orangeworm",
    "category": "APT",
    "type": "-",
    "modified": "2022-04-03",
    "all_data": {
        "actor": "Orangeworm",
        "names": [
            {
                "name": "Orangeworm",
                "name-giver": "Symantec"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2015",
        "description": "(Symantec) Symantec has identified a previously unknown group called Orangeworm that has been observed installing a custom backdoor called Trojan.Kwampirs within large international corporations that operate within the healthcare sector in the United States, Europe, and Asia.\n\nFirst identified in January 2015, Orangeworm has also conducted targeted attacks against organizations in related industries as part of a larger supply-chain attack in order to reach their intended victims. Known victims include healthcare providers, pharmaceuticals, IT solution providers for healthcare and equipment manufacturers that serve the healthcare industry, likely for the purpose of corporate espionage.\n\nBased on the list of known victims, Orangeworm does not select its targets randomly or conduct opportunistic hacking. Rather, the group appears to choose its targets carefully and deliberately, conducting a good amount of planning before launching an attack.\n\nAccording to Symantec telemetry, almost 40 percent of Orangeworm\u2019s confirmed victim organizations operate within the healthcare industry. The Kwampirs malware was found on machines which had software installed for the use and control of high-tech imaging devices such as X-Ray and MRI machines. Additionally, Orangeworm was observed to have an interest in machines used to assist patients in completing consent forms for required procedures. The exact motives of the group are unclear.\n\n(Cylera Labs) At Cylera Labs we assess with medium-high confidence that Shamoon ({{OilRig, APT 34, Helix Kitten, Chrysene}}) and Kwapirs are the same group or really close collaborators, sharing updates, techniques and code over the course of multiple years.",
        "observed-sectors": [
            "Food and Agriculture",
            "Healthcare",
            "IT",
            "Manufacturing",
            "Shipping and Logistics"
        ],
        "observed-countries": [
            "Belgium",
            "Brazil",
            "Canada",
            "Chile",
            "China",
            "France",
            "Germany",
            "Hong Kong",
            "Hungary",
            "India",
            "Malaysia",
            "Netherlands",
            "Norway",
            "Philippines",
            "Poland",
            "Saudi Arabia",
            "Spain",
            "Sweden",
            "Switzerland",
            "Turkey",
            "UK",
            "USA"
        ],
        "tools": [
            "Kwampirs",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2020-01",
                "activity": "The FBI has issued an alert on Monday about state-sponsored hackers using the Kwampirs malware to attack supply chain companies and other industry sectors as part of a global hacking campaign.\nhttps://www.zdnet.com/article/fbi-re-sends-alert-about-supply-chain-attacks-for-the-third-time-in-three-months/"
            }
        ],
        "information": [
            "https://www.symantec.com/blogs/threat-intelligence/orangeworm-targets-healthcare-us-europe-asia",
            "https://resources.cylera.com/new-evidence-linking-kwampirs-malware-to-shamoon-apts"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0071/"
        ],
        "uuid": "571b223a-c3cd-4c5c-a4fb-7fa7f3ce4502",
        "last-card-change": "2022-04-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "orangeworm",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://attack.mitre.org/groups/G0071/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: Orangeworm",
            "categories": [
                "Orangeworm"
            ]
        },
        {
            "data_url": "https://www.symantec.com/blogs/threat-intelligence/orangeworm-targets-healthcare-us-europe-asia",
            "date": "2018-04-23",
            "organization": "Symantec",
            "author": "Security Response Attack Investigation Team",
            "title": "New Orangeworm attack group targets the healthcare sector in the U.S., Europe, and Asia",
            "categories": [
                "Kwampirs",
                "Orangeworm"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "orangeworm",
            "procedure_code": "g0071",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0071",
            "techniques": [
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/002",
                    "technique_name": "remote services : smb/windows admin shares",
                    "technique_description": "adversaries may use valid accounts to interact with a remote network share using server message block (smb). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "orangeworm has copied its backdoor across open network shares, including admin$, c$windows, d$windows, and e$windows.[32]"
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
                    "procedure_description": "orangeworm has used http for c2.[239]"
                }
            ]
        }
    ]
};