var threatdata = {
    "name": "CopyKittens, Slayer Kitten",
    "alias": "CopyKittens, Slayer Kitten",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-22",
    "all_data": {
        "actor": "CopyKittens, Slayer Kitten",
        "names": [
            {
                "name": "CopyKittens",
                "name-giver": "Trend Micro"
            },
            {
                "name": "Slayer Kitten",
                "name-giver": "CrowdStrike"
            }
        ],
        "country": [
            "Iran"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2013",
        "description": "CopyKittens is an Iranian cyberespionage group that has been operating since at least 2013. It has targeted countries including Israel, Saudi Arabia, Turkey, the U.S., Jordan, and Germany. The group is responsible for the campaign known as Operation Wilted Tulip.",
        "observed-sectors": [
            "Defense",
            "Education",
            "Government",
            "IT",
            "Media"
        ],
        "observed-countries": [
            "Germany",
            "Israel",
            "Jordan",
            "Saudi Arabia",
            "Turkey",
            "USA"
        ],
        "tools": [
            "Cobalt Strike",
            "EmpireProject",
            "Matryoshka RAT",
            "TDTESS",
            "Vminst",
            "ZPP"
        ],
        "operations": [
            {
                "date": "2013",
                "activity": "Operation \u201cWilted Tulip\u201d\nIn this report, Trend Micro and ClearSky expose a vast espionage apparatus spanning the entire time the group has been active. It includes recent incidents as well as older ones that have not been publicly reported; new malware; exploitation, delivery and command and control infrastructure; and the group\u2019s modus operandi. We dubbed this activity Operation Wilted Tulip.\nhttps://www.clearskysec.com/wp-content/uploads/2017/07/Operation_Wilted_Tulip.pdf"
            },
            {
                "date": "2015",
                "activity": "CopyKittens has conducted at least three waves of cyber-attacks in the past year. In each of the attacks the infection method was almost identical and included an extraordinary number of stages used to avoid detection. As with other common threat actors, the group relies on social engineering methods to deceive its targets prior to infection.\nhttps://s3-eu-west-1.amazonaws.com/minervaresearchpublic/CopyKittens/CopyKittens.pdf"
            },
            {
                "date": "2017-01",
                "activity": "Breach of the Israeli newspaper Jerusalem Post\nAs part of our monitoring of Iranian threat agents activities, we have detected that since October 2016 and until the end of January 2017, the Jerusalem Post, as well as multiple other Israeli websites and one website in the Palestinian Authority were compromised by Iranian threat agent CopyKittens.\nhttps://www.clearskysec.com/copykitten-jpost/"
            }
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0052/"
        ],
        "uuid": "a674fc23-26e8-4f6e-ba55-1a6ef4029878",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "copykittens_slayer_kitten",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://attack.mitre.org/groups/G0052/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: CopyKittens",
            "categories": [
                "CopyKittens"
            ]
        },
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/copykittens",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "CopyKittens",
            "categories": [
                "CopyKittens"
            ]
        },
        {
            "data_url": "http://www.clearskysec.com/tulip/",
            "date": "2017-07-25",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "Operation Wilted Tulip \u2013 Exposing a Cyber Espionage Apparatus",
            "categories": [
                "Matryoshka RAT",
                "TDTESS",
                "CopyKittens"
            ]
        },
        {
            "data_url": "https://www.clearskysec.com/wp-content/uploads/2017/07/Operation_Wilted_Tulip.pdf",
            "date": "2017-07",
            "organization": "ClearSky",
            "author": "ClearSky",
            "title": "OperationWilted Tulip",
            "categories": [
                "Matryoshka RAT",
                "CopyKittens"
            ]
        },
        {
            "data_url": "http://www.clearskysec.com/copykitten-jpost/",
            "date": "2017-03-30",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "Jerusalem Post and other Israeli websites compromised by Iranian threat agent CopyKitten",
            "categories": [
                "CopyKittens"
            ]
        },
        {
            "data_url": "https://www.domaintools.com/resources/blog/case-study-hunting-campaign-indicators-on-privacy-protected-attack-infrastr",
            "date": "2017-03-21",
            "organization": "DomainTools",
            "author": "DomainTools",
            "title": "Hunt Case Study: Hunting Campaign Indicators on Privacy Protected Attack Infrastructure",
            "categories": [
                "CopyKittens"
            ]
        },
        {
            "data_url": "https://s3-eu-west-1.amazonaws.com/minervaresearchpublic/CopyKittens/CopyKittens.pdf",
            "date": "2015-11-23",
            "organization": "MinervaLabs",
            "author": "MinervaLabs",
            "title": "CopyKittens Attack Group",
            "categories": [
                "CopyKittens"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "copykittens",
            "procedure_code": "g0052",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0052",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1588.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1588/002",
                    "technique_name": "obtain capabilities : tool",
                    "technique_description": "adversaries may buy, steal, or download software tools that can be used during targeting. tools can be open or closed source, free or commercial. a tool can be used for malicious purposes by an adversary, but (unlike malware) were not intended to be used for those purposes (ex: psexec). tool acquisition can involve the procurement of commercial software licenses, including for red teaming tools such as cobalt strike. commercial software may be obtained through purchase, stealing licenses (or licensed copies of the software), or cracking trial versions.",
                    "procedure_description": "copykittens has used metasploit, empire, and airvpn for post-exploitation activities.[38][39]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "copykittens has used powershell empire.[66]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/003",
                    "technique_name": "hide artifacts : hidden window",
                    "technique_description": "adversaries may use hidden windows to conceal malicious activity from the plain sight of users. in some cases, windows that would typically be displayed when an application carries out an operation can be hidden. this may be utilized by system administrators to avoid disrupting user work environments when carrying out administrative tasks.",
                    "procedure_description": "copykittens has used -w hidden and -windowstyle hidden to conceal powershell windows. [13]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "copykittens digitally signed an executable with a stolen certificate from legitimate company ai squared.[22]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/011",
                    "technique_name": "system binary proxy execution : rundll32",
                    "technique_description": "adversaries may abuse rundll32.exe to proxy execution of malicious code. using rundll32.exe, vice executing directly (i.e. shared modules), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. rundll32.exe is commonly associated with executing dll payloads (ex: rundll32.exe {dllname, dllfunction}).",
                    "procedure_description": "copykittens uses rundll32 to load various tools on victims, including a lateral movement tool named vminst, cobalt strike, and shellcode.[34]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/001",
                    "technique_name": "archive collected data : archive via utility",
                    "technique_description": "adversaries may use utilities to compress and/or encrypt collected data prior to exfiltration. many utilities include functionalities to compress, encrypt, or otherwise package data into a format that is easier/more secure to transport.",
                    "procedure_description": "copykittens uses zpp, a .net console program, to compress files with zip.[22]"
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
                    "procedure_description": "copykittens encrypts data with a substitute cipher prior to exfiltration.[6]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090",
                    "technique_link": "https://attack.mitre.org/techniques/T1090",
                    "technique_name": "proxy",
                    "technique_description": "adversaries may use a connection proxy to direct network traffic between systems or act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, reduce the number of simultaneous outbound network connections, provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between victims to avoid suspicion. adversaries may chain together multiple proxies to further disguise the source of malicious traffic.",
                    "procedure_description": "copykittens has used the airvpn service for operational activity.[10]"
                }
            ]
        }
    ]
};