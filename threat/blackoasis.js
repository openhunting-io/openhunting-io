var threatdata = {
    "name": "BlackOasis",
    "alias": "BlackOasis",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-22",
    "all_data": {
        "actor": "BlackOasis",
        "names": [
            {
                "name": "BlackOasis",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "[Middle East]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2015",
        "description": "BlackOasis is a Middle Eastern threat group that is believed to be a customer of Gamma Group. The group has shown interest in prominent figures in the United Nations, as well as opposition bloggers, activists, regional news correspondents, and think tanks. A group known by Microsoft as {{Neodymium}} is reportedly associated closely with BlackOasis operations, but evidence that the group names are aliases has not been identified.",
        "observed-sectors": [
            "Media",
            "Think Tanks",
            "activists and the UN"
        ],
        "observed-countries": [
            "Afghanistan",
            "Angola",
            "Bahrain",
            "Iran",
            "Iraq",
            "Jordan",
            "Libya",
            "Netherlands",
            "Nigeria",
            "Russia",
            "Saudi Arabia",
            "Tunisia",
            "UK"
        ],
        "tools": [
            "FinFisher",
            "Wingbird",
            "0-day vulnerabilities in Flash"
        ],
        "operations": [
            {
                "date": "2015-06",
                "activity": "Leveraging data from Kaspersky Security Network, we identified two other similar exploit chains used by BlackOasis in June 2015 which were zero days at the time. Those include CVE-2015-5119 and CVE-2016-0984, which were patched in July 2015 and February 2016 respectively.  These exploit chains also delivered FinSpy installation packages.\nhttps://securelist.com/blackoasis-apt-and-new-targeted-attacks-leveraging-zero-day-exploit/82732/"
            },
            {
                "date": "2016-05",
                "activity": "We first became aware of BlackOasis\u2019 activities in May 2016, while investigating another Adobe Flash zero day. On May 10, 2016, Adobe warned of a vulnerability (CVE-2016-4117) affecting Flash Player 21.0.0.226 and earlier versions for Windows, Macintosh, Linux, and Chrome OS. The vulnerability was actively being exploited in the wild."
            },
            {
                "date": "2017-09",
                "activity": "FireEye recently detected a malicious Microsoft Office RTF document that leveraged CVE-2017-8759, a SOAP WSDL parser code injection vulnerability. This vulnerability allows a malicious actor to inject arbitrary code during the parsing of SOAP WSDL definition contents.\nhttps://www.fireeye.com/blog/threat-research/2017/09/zero-day-used-to-distribute-finspy.html"
            },
            {
                "date": "2017-10",
                "activity": "On October 10, 2017, Kaspersky Lab\u2019s advanced exploit prevention systems identified a new Adobe Flash zero day exploit used in the wild against our customers. The exploit was delivered through a Microsoft Office document and the final payload was the latest version of FinSpy malware.\nhttps://securelist.com/blackoasis-apt-and-new-targeted-attacks-leveraging-zero-day-exploit/82732/"
            }
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0063/"
        ],
        "uuid": "7db7cd4f-ca76-4176-9d94-80429033ef49",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "blackoasis",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://attack.mitre.org/groups/G0063/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: BlackOasis",
            "categories": [
                "BlackOasis"
            ]
        },
        {
            "data_url": "https://securelist.com/blackoasis-apt-and-new-targeted-attacks-leveraging-zero-day-exploit/82732/",
            "date": "2017-10-16",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "BlackOasis APT and new targeted attacks leveraging zero-day exploit",
            "categories": [
                "FinFisher RAT",
                "BlackOasis"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/09/zero-day-used-to-distribute-finspy.html",
            "date": "2017-09-12",
            "organization": "FireEye",
            "author": "Ben Read",
            "title": "FireEye Uncovers CVE-2017-8759: Zero-Day Used in the Wild to Distribute FINSPY,FireEye Uncovers CVE-2017-8759: Zero-Day Used in the Wild to Distribute FINSPY",
            "categories": [
                "FinFisher RAT",
                "BlackOasis"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "blackoasis",
            "procedure_code": "g0063",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0063",
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
                    "procedure_description": "blackoasis's first stage shellcode contains a nop sled with alternative instructions that was likely designed to bypass antivirus tools.[54]"
                }
            ]
        }
    ]
};