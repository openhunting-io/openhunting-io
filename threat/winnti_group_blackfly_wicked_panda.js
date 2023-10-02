var threatdata = {
    "name": "Winnti Group, Blackfly, Wicked Panda",
    "alias": "Winnti Group, Blackfly, Wicked Panda",
    "category": "APT",
    "type": "-",
    "modified": "2022-07-19",
    "all_data": {
        "actor": "Winnti Group, Blackfly, Wicked Panda",
        "names": [
            {
                "name": "Winnti Group",
                "name-giver": "Kaspersky"
            },
            {
                "name": "Blackfly",
                "name-giver": "Symantec"
            },
            {
                "name": "Wicked Panda",
                "name-giver": "CrowdStrike"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2010",
        "description": "Winnti Group is a threat group with Chinese origins that has been active since at least 2010. The group has heavily targeted the gaming industry, but it has also expanded the scope of its targeting. Some reporting suggests a number of other groups, including {{APT 41}}, {{Axiom, Group 72}}, {{APT 17, Deputy Dog, Elderwood, Sneaky Panda}}, and {{Ke3chang, Vixen Panda, APT 15, GREF, Playful Dragon}}, are closely linked to or overlap with Winnti Group.\n\n(Trend Micro) The group behind the Winnti malware (which we will call the Winnti group for brevity) sprung up as a band of traditional cyber crooks, comprising black hats whose technical skills were employed to perpetrate financial fraud. Based on the use of domain names they registered, the group started out in the business of fake/rogue anti-virus products in 2007. In 2009, the Winnti group shifted to targeting gaming companies in South Korea using a self-named data- and file-stealing malware.\n\nThe group, which was primarily motivated by profit, is noted for utilizing self-developed technically-proficient tools for their attacks. They once attacked a game server to illicitly farm in-game currency (\u201cgaming gold\u201d, which also has real-world value) and stole source codes of online game projects. The group also engaged in the theft of digital certificates which they then used to sign their malware to make them stealthier. The Winnti group diversified its targets to include enterprises such as those in pharmaceutics and telecommunications. The group has since earned infamy for being involved in malicious activities associated with targeted attacks, such as deploying spear-phishing campaigns and building a backdoor.",
        "observed-sectors": [
            "Online video game companies",
            "Aviation",
            "Defense",
            "Education",
            "Financial",
            "Government",
            "Healthcare",
            "Pharmaceutical",
            "Technology",
            "Telecommunications"
        ],
        "observed-countries": [
            "Belarus",
            "Brazil",
            "China",
            "Germany",
            "India",
            "Indonesia",
            "Japan",
            "Peru",
            "Philippines",
            "Russia",
            "South Korea",
            "Taiwan",
            "Thailand",
            "USA",
            "Vietnam"
        ],
        "tools": [
            "Cobalt Strike",
            "FunnySwitch",
            "Winnti"
        ],
        "operations": [
            {
                "date": "2010",
                "activity": "HBGary investigated an information security incident at an American video game company."
            },
            {
                "date": "2011",
                "activity": "In the autumn of 2011, a Trojan was detected on a huge number of computers \u2013 all of them linked by the fact that they were used by players of a popular online game. It emerged that the piece of malware landed on users\u2019 computers as part of a regular update from the game\u2019s official update server. Some even suspected that the publisher itself was spying on players. However, it later became clear that the malicious program ended up on the users\u2019 computers by mistake: the cybercriminals were in fact targeting the companies that develop and release computer games.\nhttps://securelist.com/winnti-more-than-just-a-game/37029/"
            },
            {
                "date": "2011",
                "activity": "For example, by 2011, one of their victims was Gameforge, a company that offers so-called freemium games: while playing the games is free, it is possible to buy virtual items/money with real money.The Winnti hackers were able to directly access Gameforge\u2019s databases and modify accounts to become \u2018virtually\u2019 richer.\nhttps://media.cert.europa.eu/static/MEMO/2019/TLP-WHITE-CERT-EU-MEMO-190725-1.pdf"
            },
            {
                "date": "2014 Summer",
                "activity": "The Winnti hackers broke into Henkel\u2019s network in 2014. We have three files showing that this happened.\nhttps://web.br.de/interaktiv/winnti/english/"
            },
            {
                "date": "2014-08",
                "activity": "This time the operators put such tag in the configuration and it turned out to be the name of the well-known global pharmaceutical company headquartered in Europe.\nhttps://securelist.com/games-are-over/70991/"
            },
            {
                "date": "2015",
                "activity": "The hackers behind Winnti have also set their sights on Japan\u2019s biggest chemical company, Shin-Etsu Chemical. We have in our hands several varieties of the 2015 malware which was most likely used for the attack.\nhttps://web.br.de/interaktiv/winnti/english/"
            },
            {
                "date": "2015-07",
                "activity": "A BASF spokeswoman tells us in an email that in July 2015, hackers had successfully overcome \u201cthe first levels\u201d of defense.\nhttps://web.br.de/interaktiv/winnti/english/"
            },
            {
                "date": "2015-10",
                "activity": "Breach of a Vietnamese gaming company\nhttps://blog.vsec.com.vn/apt/initial-winnti-analysis-against-vietnam-game-company.html\nDuring the investigation, a Linux version of Winnti was found.\nhttps://medium.com/chronicle-blog/winnti-more-than-just-windows-and-gates-e4f03436031a"
            },
            {
                "date": "2016-02",
                "activity": "Breach of German Steelmaker ThyssenKrupp\nhttps://www.dw.com/en/thyssenkrupp-victim-of-cyber-attack/a-36695341"
            },
            {
                "date": "2016-06",
                "activity": "According to Siemens, they were penetrated by the hackers in June 2016.\nhttps://web.br.de/interaktiv/winnti/english/"
            },
            {
                "date": "2016 Summer",
                "activity": "In the case of another Japanese company, Sumitomo Electric, Winnti apparently penetrated their networks during the summer of 2016.\nhttps://web.br.de/interaktiv/winnti/english/"
            },
            {
                "date": "2017-03",
                "activity": "Recently, the Winnti group, a threat actor with a past of traditional cybercrime \u2013particularly with financial fraud, has been seen abusing GitHub by turning it into a conduit for the command and control (C&C) communications of their seemingly new backdoor (detected by Trend Micro as BKDR64_WINNTI.ONM).\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/winnti-abuses-github/"
            },
            {
                "date": "2018-04",
                "activity": "Breach of German chemicals giant Bayer\nhttps://www.dw.com/en/bayer-points-finger-at-wicked-panda-in-cyberattack/a-48196004"
            },
            {
                "date": "2018-11",
                "activity": "Breach of Swiss drug maker Roche\nhttps://www.reuters.com/article/us-germany-cyber/basf-siemens-henkel-roche-target-of-cyber-attacks-idUSKCN1UJ147"
            },
            {
                "date": "2019 Early",
                "activity": "Covestro is regarded as Germany\u2019s most successful spin-off in the recent past. Up until June 2019, they had at least two systems on which the Winnti malware had been installed.\nhttps://web.br.de/interaktiv/winnti/english/"
            },
            {
                "date": "2019 Early",
                "activity": "Another manufacturer of adhesives, Bostik of France, was infected with Winnti in early 2019.\nhttps://web.br.de/interaktiv/winnti/english/"
            },
            {
                "date": "2019",
                "activity": "Lion Air, Marriott and Valve declined to comment or were not immediately available for comment\nhttps://www.reuters.com/article/us-germany-cyber/basf-siemens-henkel-roche-target-of-cyber-attacks-idUSKCN1UJ147"
            },
            {
                "date": "2019 Late",
                "activity": "Breach of German chemicals company Lanxess\nhttps://www.tagesschau.de/investigativ/ndr/hackerangriff-chemieunternehmen-101.html"
            },
            {
                "date": "2020-02",
                "activity": "Based on previous knowledge and targeting of the Winnti Group, we assess that this sample was likely used to target Gravity Co., Ltd., a South Korean video game company. The company is known for its Massive Multiplayer Online Role Playing Game (MMORPG) Ragnarok Online, which is also offered as a mobile application.\nhttps://quointelligence.eu/2020/04/winnti-group-insights-from-the-past/"
            },
            {
                "date": "2021-03",
                "activity": "Exchange servers under siege from at least 10 APT groups\nhttps://www.welivesecurity.com/2021/03/10/exchange-servers-under-siege-10-apt-groups/"
            }
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/pigs-malware-examining-possible-member-winnti-group/",
            "https://securelist.com/winnti-more-than-just-a-game/37029/",
            "https://401trg.com/burning-umbrella/",
            "https://www.blackberry.com/us/en/pdfviewer?file=/content/dam/blackberry-com/asset/enterprise/pdf/direct/report-bb-decade-of-the-rats.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0044/"
        ],
        "uuid": "55d0e323-bb26-4779-b09f-cae04740b0bd",
        "last-card-change": "2022-07-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "winnti_group_blackfly_wicked_panda",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "winnti group",
            "procedure_code": "g0044",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0044",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/001",
                    "technique_name": "acquire infrastructure : domains",
                    "technique_description": "adversaries may acquire domains that can be used during targeting. domain names are the human readable names used to represent one or more ip addresses. they can be purchased or, in some cases, acquired for free.",
                    "procedure_description": "winnti group has registered domains for c2 that mimicked sites of their intended targets.[70]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1014",
                    "technique_link": "https://attack.mitre.org/techniques/T1014",
                    "technique_name": "rootkit",
                    "technique_description": "adversaries may use rootkits to hide the presence of programs, files, network connections, services, drivers, and other system components. rootkits are programs that hide the existence of malware by intercepting/hooking and modifying operating system api calls that supply system information.",
                    "procedure_description": "winnti group used a rootkit to modify typical server functionality.[31]"
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
                    "procedure_description": "winnti group used stolen certificates to sign its malware.[72]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "winnti group has used a program named ff.exe to search for specific documents on compromised hosts.[329]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "winnti group looked for a specific process running on infected servers.[274]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "winnti group has downloaded an auxiliary program named ff.exe to infected machines.[481]"
                }
            ]
        }
    ]
};