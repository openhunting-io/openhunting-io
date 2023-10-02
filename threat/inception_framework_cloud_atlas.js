var threatdata = {
    "name": "Inception Framework, Cloud Atlas",
    "alias": "Inception Framework, Cloud Atlas, Oxygen, ATK 116, Blue Odin, The Rocra",
    "category": "APT",
    "type": "-",
    "modified": "2023-01-01",
    "all_data": {
        "actor": "Inception Framework, Cloud Atlas",
        "names": [
            {
                "name": "Inception Framework",
                "name-giver": "Symantec"
            },
            {
                "name": "Cloud Atlas",
                "name-giver": "Kaspersky"
            },
            {
                "name": "Oxygen",
                "name-giver": "Microsoft"
            },
            {
                "name": "ATK 116",
                "name-giver": "Thales"
            },
            {
                "name": "Blue Odin",
                "name-giver": "PWC"
            },
            {
                "name": "The Rocra",
                "name-giver": "?"
            }
        ],
        "country": [
            "Russia"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2012",
        "description": "(Symantec) Researchers from Blue Coat Labs have identified the emergence of a previously undocumented attack framework that is being used to launch highly targeted attacks in order to gain access to, and extract confidential information from, victims\u2019 computers. Because of the many layers used in the design of the malware, we\u2019ve named it Inception\u2014a reference to the 2010 movie \u201cInception\u201d about a thief who entered peoples\u2019 dreams and stole secrets from their subconscious. Targets include individuals in strategic positions: Executives in important businesses such as oil, finance and engineering, military officers, embassy personnel and government officials. The Inception attacks began by focusing on targets primarily located in Russia or related to Russian interests, but have since spread to targets in other locations around the world.  The preferred malware delivery method is via phishing emails containing trojanized documents.\n\n\u2022 Initially targeted at Russia, but expanding globally\n\u2022 Masterful identity cloaking and diversionary tactics\n\u2022 Clean and elegant code suggesting strong backing and top-tier talent\n\u2022 Includes malware targeting mobile devices: Android, Blackberry and iOS\n\u2022 Using a free cloud hosting service based in Sweden for command and control",
        "observed-sectors": [
            "Aerospace",
            "Defense",
            "Embassies",
            "Energy",
            "Engineering",
            "Financial",
            "Government",
            "Oil and gas",
            "Research"
        ],
        "observed-countries": [
            "Afghanistan",
            "Armenia",
            "Austria",
            "Azerbaijan",
            "Belarus",
            "Belgium",
            "Brazil",
            "Congo",
            "Cyprus",
            "France",
            "Georgia",
            "Germany",
            "Greece",
            "India",
            "Indonesia",
            "Iran",
            "Italy",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kyrgyzstan",
            "Lebanon",
            "Lithuania",
            "Malaysia",
            "Moldova",
            "Morocco",
            "Mozambique",
            "Oman",
            "Pakistan",
            "Paraguay",
            "Portugal",
            "Qatar",
            "Romania",
            "Russia",
            "Saudi Arabia",
            "South Africa",
            "Suriname",
            "Switzerland",
            "Tajikistan",
            "Tanzania",
            "Turkey",
            "Turkmenistan",
            "Uganda",
            "Ukraine",
            "UAE",
            "USA",
            "Uzbekistan",
            "Venezuela",
            "Vietnam"
        ],
        "tools": [
            "Inception",
            "Lastacloud",
            "PowerShower",
            "VBShower",
            "many 0-day exploits"
        ],
        "operations": [
            {
                "date": "2012-10",
                "activity": "Operation \u201cRedOctober\u201d\nIn October 2012, Kaspersky Lab\u2019s Global Research & Analysis Team initiated a new threat research after a series of attacks against computer networks of various international diplomatic service agencies. A large scale cyber-espionage network was revealed and analyzed during the investigation, which we called \u201cRed October\u201d (after famous novel \u201cThe Hunt For The Red October\u201d).\nhttps://securelist.com/red-october-diplomatic-cyber-attacks-investigation/36740/#8"
            },
            {
                "date": "2014-05",
                "activity": "Hiding Behind Proxies\nSince 2014, Symantec has found evidence of a steady stream of attacks from the Inception Framework targeted at organizations on several continents. As time has gone by, the group has become ever more secretive, hiding behind an increasingly complex framework of proxies and cloud services.\nhttps://www.symantec.com/blogs/threat-intelligence/inception-framework-hiding-behind-proxies"
            },
            {
                "date": "2014-08",
                "activity": "Operation \u201cCloud Atlas\u201d\nIn August 2014, some of our users observed targeted attacks with a variation of CVE-2012-0158 and an unusual set of malware. We did a quick analysis of the malware and it immediately stood out because of certain unusual things that are not very common in the APT world.\nhttps://securelist.com/cloud-atlas-redoctober-apt-is-back-in-style/68083/"
            },
            {
                "date": "2018-10",
                "activity": "This blog describes attacks against European targets observed in October 2018, using CVE-2017-11882 and a new PowerShell backdoor we\u2019re calling POWERSHOWER due to the attention to detail in terms of cleaning up after itself, along with the malware being written in PowerShell.\nhttps://unit42.paloaltonetworks.com/unit42-inception-attackers-target-europe-year-old-office-vulnerability/"
            },
            {
                "date": "2019",
                "activity": "During its recent campaigns, Cloud Atlas used a new \u201cpolymorphic\u201d infection chain relying no more on PowerShower directly after infection, but executing a polymorphic HTA hosted on a remote server, which is used to drop three different files on the local system.\nhttps://securelist.com/recent-cloud-atlas-activity/92016/"
            },
            {
                "date": "2022-02",
                "activity": "Cloud Atlas targets entities in Russia and Belarus amid the ongoing war in Ukraine\nhttps://research.checkpoint.com/2022/cloud-atlas-targets-entities-in-russia-and-belarus-amid-the-ongoing-war-in-ukraine/"
            }
        ],
        "information": [
            "https://www.symantec.com/connect/blogs/blue-coat-exposes-inception-framework-very-sophisticated-layered-malware-attack-targeted-milit",
            "https://www.akamai.com/uk/en/multimedia/documents/white-paper/upnproxy-blackhat-proxies-via-nat-injections-white-paper.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0100/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=inception"
        ],
        "uuid": "7849ff33-1be0-4715-89b1-3adcb182561a",
        "last-card-change": "2023-01-01",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "inception_framework_cloud_atlas",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/clean-ursa",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit42",
            "title": "Clean Ursa",
            "categories": [
                "PowerShower",
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/clean-ursa/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Clean Ursa",
            "categories": [
                "PowerShower",
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://www.pwc.com/gx/en/issues/cybersecurity/cyber-threat-intelligence/cyber-year-in-retrospect/yir-cyber-threats-report-download.pdf",
            "date": "2022-04-28",
            "organization": "PWC",
            "author": "PWC UK",
            "title": "Cyber Threats 2021: A Year in Retrospect",
            "categories": [
                "BPFDoor",
                "APT15",
                "APT31",
                "APT41",
                "APT9",
                "BlackTech",
                "BRONZE EDGEWOOD",
                "DAGGER PANDA",
                "Earth Lusca",
                "HAFNIUM",
                "HAZY TIGER",
                "Inception Framework",
                "LOTUS PANDA",
                "QUILTED TIGER",
                "RedAlpha",
                "Red Dev 17",
                "Red Menshen",
                "Red Nue",
                "VICEROY TIGER"
            ]
        },
        {
            "data_url": "https://www.pwc.com/gx/en/issues/cybersecurity/cyber-threat-intelligence/cyber-year-in-retrospect/yir-cyber-threats-annex-download.pdf",
            "date": "2022-04-28",
            "organization": "PWC",
            "author": "PWC UK",
            "title": "Cyber Threats 2021: A Year in Retrospect (Annex)",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "PlugX",
                "RokRAT",
                "Inception Framework",
                "Red Menshen"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/pdf/pwc-cyber-threats-2020-a-year-in-retrospect.pdf",
            "date": "2021-02-28",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2020: A Year in Retrospect",
            "categories": [
                "elf.wellmess",
                "FlowerPower",
                "PowGoop",
                "8.t Dropper",
                "Agent.BTZ",
                "Agent Tesla",
                "Appleseed",
                "Ave Maria",
                "Bankshot",
                "BazarBackdoor",
                "BLINDINGCAN",
                "Chinoxy",
                "Conti",
                "Cotx RAT",
                "Crimson RAT",
                "DUSTMAN",
                "Emotet",
                "FriedEx",
                "FunnyDream",
                "Hakbit",
                "Mailto",
                "Maze",
                "METALJACK",
                "Nefilim",
                "Oblique RAT",
                "Pay2Key",
                "PlugX",
                "QakBot",
                "REvil",
                "Ryuk",
                "StoneDrill",
                "StrongPity",
                "SUNBURST",
                "SUPERNOVA",
                "TrickBot",
                "TurlaRPC",
                "Turla SilentMoon",
                "WastedLocker",
                "WellMess",
                "Winnti",
                "ZeroCleare",
                "APT10",
                "APT23",
                "APT27",
                "APT31",
                "APT41",
                "BlackTech",
                "BRONZE EDGEWOOD",
                "Inception Framework",
                "MUSTANG PANDA",
                "Red Charon",
                "Red Nue",
                "Sea Turtle",
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://www.cfr.org/cyber-operations/red-october",
            "date": "2020-07-05",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Red October",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0100",
            "date": "2020-05-08",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Inception",
            "categories": [
                "PowerShower",
                "LaZagne",
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://securelist.com/recent-cloud-atlas-activity/92016",
            "date": "2019-08-12",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Recent Cloud Atlas activity",
            "categories": [
                "PowerShower",
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/inception-framework",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Inception Framework",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/cloud-atlas",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Cloud Atlas",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-inception-attackers-target-europe-year-old-office-vulnerability",
            "date": "2018-11-05",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tom Lancaster",
            "title": "Inception Attackers Target Europe with Year-old Office Vulnerability",
            "categories": [
                "PowerShower",
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://www.symantec.com/blogs/threat-intelligence/inception-framework-hiding-behind-proxies",
            "date": "2018-03-14",
            "organization": "Symantec",
            "author": "Security Response Attack Investigation Team",
            "title": "Inception Framework: Alive and Well, and Hiding Behind Proxies",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://www.akamai.com/uk/en/multimedia/documents/white-paper/upnproxy-blackhat-proxies-via-nat-injections-white-paper.pdf",
            "date": "2017-10-16",
            "organization": "Akamai",
            "author": "Akamei",
            "title": "UPnProxy: Blackhat Proxies via NAT Injections",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://securelist.com/an-undocumented-word-feature-abused-by-attackers/81899",
            "date": "2017-09-18",
            "organization": "Kaspersky Labs",
            "author": "Alexander Liskin",
            "title": "An (un)documented Word feature abused by attackers",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2015/Inception_APT_Analysis_Bluecoat.pdf",
            "date": "2015-01-20",
            "organization": "Blue Coat",
            "author": "Basavaraj K. Biradar",
            "title": "Reversing the Inception APT malware",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://logrhythm.com/blog/catching-the-inception-framework-phishing-attack/",
            "date": "2015-01-14",
            "organization": "LogRhythm",
            "author": "Tony Mass\u00e9",
            "title": "Catching the \u201cInception Framework\u201d Phishing Attack",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://logrhythm.com/blog/catching-the-inception-framework-phishing-attack",
            "date": "2015-01-14",
            "organization": "LogRhythm",
            "author": "Tony Mass\u00e9",
            "title": "Catching the \u201cInception Framework\u201d Phishing Attack",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://securelist.com/cloud-atlas-redoctober-apt-is-back-in-style/68083",
            "date": "2014-12-10",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Cloud Atlas: RedOctober APT is back in style",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://securelist.com/cloud-atlas-redoctober-apt-is-back-in-style/68083/",
            "date": "2014-12-10",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Cloud Atlas: RedOctober APT is back in style",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20160710180729/https://www.bluecoat.com/security-blog/2014-12-09/blue-coat-exposes-%E2%80%9C-inception-framework%E2%80%9D-very-sophisticated-layered-malware",
            "date": "2014-12-09",
            "organization": "Blue Coat",
            "author": "Snorre Fagerland",
            "title": "Blue Coat Exposes \u201cThe Inception Framework\u201d; Very Sophisticated, Layered Malware Attack Targeted at Military, Diplomats, and Business Execs",
            "categories": [
                "CloudAtlas",
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/blue-coat-exposes-inception-framework-very-sophisticated-layered-malware-attack-targeted-milit",
            "date": "2014-12-09",
            "organization": "Symantec",
            "author": "Waylon Grange",
            "title": "Blue Coat Exposes \u201cThe Inception Framework\u201d; Very Sophisticated, Layered Malware Attack Targeted at Military, Diplomats, and Bus",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2014/bcs_wp_InceptionReport_EN_v12914.pdf",
            "date": "2014-12-09",
            "organization": "Blue Coat",
            "author": "Snorre Fagerland",
            "title": "The Inception Framework: Cloud-hosted APT",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://securelist.com/red-october-part-two-the-modules/57645",
            "date": "2013-01-17",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "\u201cRed October\u201d \u2013 Part Two, the Modules",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://securelist.com/the-red-october-campaign/57647",
            "date": "2013-01-14",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "The \u201cRed October\u201d Campaign \u2013 An Advanced Cyber Espionage Network Targeting Diplomatic and Government Agencies",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://securelist.com/red-october-diplomatic-cyber-attacks-investigation/36740",
            "date": "2013-01-14",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "\u201cRed October\u201d Diplomatic Cyber Attacks Investigation",
            "categories": [
                "Inception Framework"
            ]
        },
        {
            "data_url": "https://securelist.com/red-october-diplomatic-cyber-attacks-investigation/36740/",
            "date": "2013-01-14",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "\"Red October\" Diplomatic Cyber Attacks Investigation",
            "categories": [
                "Inception Framework"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "inception",
            "procedure_code": "g0100",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0100",
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
                    "procedure_description": "inception has obtained and used open-source tools such as lazagne.[58]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/001",
                    "technique_name": "phishing : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. spearphishing attachment is a specific variant of spearphishing. spearphishing attachment is different from other forms of spearphishing in that it employs the use of malware attached to an email. all forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. in this scenario, adversaries attach a file to the spearphishing email and usually rely upon user execution to gain execution. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "inception has used weaponized documents attached to spearphishing emails for reconnaissance and initial compromise.[115][116][117][118]"
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
                    "procedure_description": "inception has used powershell to execute malicious commands and payloads.[118][119]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "inception has used vbscript to execute malicious commands and payloads.[67][68]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1203",
                    "technique_link": "https://attack.mitre.org/techniques/T1203",
                    "technique_name": "exploitation for client execution",
                    "technique_description": "adversaries may exploit software vulnerabilities in client applications to execute code. vulnerabilities can exist in software due to unsecure coding practices that can lead to unanticipated behavior. adversaries can take advantage of certain vulnerabilities through targeted exploitation for the purpose of arbitrary code execution. oftentimes the most valuable exploits to an offensive toolkit are those that can be used to obtain code execution on a remote system because they can be used to gain access to that system. users will expect to see files related to the applications they commonly used to do work, so they are a useful target for exploit research and development because of their high utility.",
                    "procedure_description": "inception has exploited cve-2012-0158, cve-2014-1761, cve-2017-11882 and cve-2018-0802 for execution.[52][53][54][55]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/002",
                    "technique_name": "user execution : malicious file",
                    "technique_description": "an adversary may rely upon a user opening a malicious file in order to gain execution. users may be subjected to social engineering to get them to open a file that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing attachment. adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, and .cpl.",
                    "procedure_description": "inception lured victims into clicking malicious files for machine reconnaissance and to execute malware.[111][112][113][114]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "inception has maintained persistence by modifying registry run key value  hkey_current_user\\software\\microsoft\\windows\\currentversion\\run\\.[122]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "inception has maintained persistence by modifying registry run key value  hkey_current_user\\software\\microsoft\\windows\\currentversion\\run\\.[122]"
                },
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
                    "procedure_description": "inception has encrypted malware payloads dropped on victim machines with aes and rc4 encryption.[166]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/005",
                    "technique_name": "system binary proxy execution : mshta",
                    "technique_description": "adversaries may abuse mshta.exe to proxy execution of malicious .hta files and javascript or vbscript through a trusted windows utility. there are several examples of different types of threats leveraging mshta.exe during initial compromise and for execution of code",
                    "procedure_description": "inception has used malicious hta files to drop and execute malware.[17]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/010",
                    "technique_name": "system binary proxy execution : regsvr32",
                    "technique_description": "adversaries may abuse regsvr32.exe to proxy execution of malicious code. regsvr32.exe is a command-line program used to register and unregister object linking and embedding controls, including dynamic link libraries (dlls), on windows systems. the regsvr32.exe binary may also be signed by microsoft.",
                    "procedure_description": "inception has ensured persistence at system boot by setting the value regsvr32 %path%\\ctfmonrn.dll /s.[22]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1221",
                    "technique_link": "https://attack.mitre.org/techniques/T1221",
                    "technique_name": "template injection",
                    "technique_description": "adversaries may create or modify references in user document templates to conceal malicious code or force authentication attempts. for example, microsoft\u2019s office open xml (ooxml) specification defines an xml-based format for office documents (.docx, xlsx, .pptx) to replace older binary formats (.doc, .xls, .ppt). ooxml files are packed together zip archives compromised of various xml files, referred to as parts, containing properties that collectively define how a document is rendered.",
                    "procedure_description": "inception has used decoy documents to load malicious remote payloads via http.[22]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "inception used a browser plugin to steal passwords and sessions from internet explorer, chrome, opera, firefox, torch, and yandex.[33]"
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
                    "procedure_description": "inception used a file listing plugin to collect information about file and directories both on local and remote drives.[150]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/002",
                    "technique_name": "permission groups discovery : domain groups",
                    "technique_description": "adversaries may attempt to find domain-level groups and permission settings. the knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as domain administrators.",
                    "procedure_description": "inception has used specific malware modules to gather domain membership.[17]"
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
                    "procedure_description": "inception has used a reconnaissance module to identify active processes and other associated loaded modules.[129]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518",
                    "technique_link": "https://attack.mitre.org/techniques/T1518",
                    "technique_name": "software discovery",
                    "technique_description": "adversaries may attempt to get a listing of software and software versions that are installed on a system or in a cloud environment. adversaries may use the information from software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "inception has enumerated installed software on compromised systems.[12]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "inception has used a reconnaissance module to gather information about the operating system and hardware on the infected host.[171]"
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
                    "procedure_description": "inception used a file hunting plugin to collect .txt, .pdf, .xls or .doc files from the infected host.[88]"
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
                    "procedure_description": "inception has used http, https, and webdav in network communications.[164][165]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/001",
                    "technique_name": "encrypted channel : symmetric cryptography",
                    "technique_description": "adversaries may employ a known symmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. symmetric encryption algorithms use the same key for plaintext encryption and ciphertext decryption. common symmetric encryption algorithms include aes, des, 3des, blowfish, and rc4.",
                    "procedure_description": "inception has encrypted network communications with aes.[71]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "inception used chains of compromised routers to proxy c2 communications between them and cloud service providers.[12]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102",
                    "technique_link": "https://attack.mitre.org/techniques/T1102",
                    "technique_name": "web service",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for relaying data to/from a compromised system. popular websites and social media acting as a mechanism for c2 may give a significant amount of cover due to the likelihood that hosts within a network are already communicating with them prior to a compromise. using common services, such as those offered by google or twitter, makes it easier for adversaries to hide in expected noise. web service providers commonly use ssl/tls encryption, giving adversaries an added level of protection.",
                    "procedure_description": "inception has incorporated at least five different cloud service providers into their c2 infrastructure including cloudme.[22][23]"
                }
            ]
        },
        {
            "procedure_name": "at",
            "procedure_code": "s0110",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0110",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                }
            ]
        }
    ]
};