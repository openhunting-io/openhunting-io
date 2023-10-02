var threatdata = {
    "name": "Confucius",
    "alias": "Confucius",
    "category": "APT",
    "type": "-",
    "modified": "2022-12-30",
    "all_data": {
        "actor": "Confucius",
        "names": [
            {
                "name": "Confucius",
                "name-giver": "Palo Alto"
            }
        ],
        "country": [
            "India"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2013",
        "description": "(Trend Micro) Confucius\u2019 campaigns were reportedly active as early as 2013, abusing Yahoo! And Quora forums as part of their command-and-control (C&C) communications. We stumbled upon Confucius, likely from South Asia, while delving into Patchwork\u2019s cyberespionage operations.\n\nConfucius\u2019 operations include deploying bespoke backdoors and stealing files from their victim\u2019s systems with tailored file stealers. The stolen files are then exfiltrated by abusing a cloud service provider. Some of these file stealers specifically target files from USB devices, probably to overcome air-gapped environments.\n\nThis group seems to be associated with {{Patchwork, Dropping Elephant}}.",
        "observed-countries": [
            "Azerbaijan",
            "Bangladesh",
            "France",
            "India",
            "Indonesia",
            "Iran",
            "Italy",
            "Mongolia",
            "Pakistan",
            "Poland",
            "Russia",
            "Slovakia",
            "Spain",
            "Trinidad and Tobago",
            "UAE",
            "UK",
            "Ukraine",
            "USA",
            "most of the South and Southeast Asian countries, most of the Middle Eastern countries and most of the African countries"
        ],
        "tools": [
            "ApacheStealer",
            "Confucius",
            "Hornbill",
            "MY24",
            "sctrls",
            "remote-access-c3",
            "sip_telephone",
            "SunBird",
            "swissknife2",
            "Sneepy"
        ],
        "operations": [
            {
                "date": "2017-10",
                "activity": "In recent weeks, Unit 42 has discovered three documents crafted to exploit the InPage program. InPage is a word processor program that supports languages such as Urdu, Persian, Pashto, and Arabic. The three InPage exploit files are linked through their use of very similar shellcode, which suggests that either the same actor is behind these attacks, or the attackers have access to a shared builder.\nhttps://unit42.paloaltonetworks.com/unit42-recent-inpage-exploits-lead-multiple-malware-families/"
            },
            {
                "date": "2017 Late",
                "activity": "Probing Confucius\u2019 infrastructure, we came across websites offering Windows and Android chat applications, most likely iterations of its predecessor, Simple Chat Point: Secret Chat Point, and Tweety Chat. We are admittedly uncertain of the extent \u2014 and success \u2014 of their use, but it\u2019s one of the ingredients of the group\u2019s operations.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/deciphering-confucius-cyberespionage-operations/"
            },
            {
                "date": "2018-05",
                "activity": "During their previous campaign, we found Confucius using fake romance websites to entice victims into installing malicious Android applications. This time, the threat actor seems to have a new modus operandi, setting up two new websites and new payloads with which to compromise its targets.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/confucius-update-new-tools-and-techniques-further-connections-with-patchwork/"
            },
            {
                "date": "2021-08",
                "activity": "Confucius Uses Pegasus Spyware-related Lures to Target Pakistani Military\nhttps://www.trendmicro.com/en_us/research/21/h/confucius-uses-pegasus-spyware-related-lures-to-target-pakistani.html"
            }
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-confucius-says-malware-families-get-further-by-abusing-legitimate-websites/",
            "https://documents.trendmicro.com/assets/research-deciphering-confucius-cyberespionage-operations.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0142/"
        ],
        "uuid": "5cfcb0a9-c819-4cc2-ad43-36fe47aca3d4",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Confucius",
            "malware_alias": null,
            "malware": "win.confucius",
            "last_update": "2022-08-27 22:24:53",
            "tags": [
                "Confucius"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "a61a50f712b2cf3262c07ec7516c766e",
                        "timestamp": "2022-08-27 22:24:53"
                    },
                    {
                        "value": "b1fecb0b98a86e2243b2163d9d720dc0",
                        "timestamp": "2022-08-27 22:24:53"
                    },
                    {
                        "value": "5b817c7dc6bf17ef2fa32136b9c106cd",
                        "timestamp": "2022-08-27 22:24:53"
                    },
                    {
                        "value": "f82bd6ccf7370b37b306654a44c3189c",
                        "timestamp": "2022-08-27 22:24:53"
                    },
                    {
                        "value": "a91be9529d06cd4a6c06a01b5c595630",
                        "timestamp": "2021-10-21 03:13:33"
                    },
                    {
                        "value": "5397cbaf89ff40a8b08004ac5164c8a0",
                        "timestamp": "2021-10-21 03:13:33"
                    },
                    {
                        "value": "ae3e8679df2976d31da858fd7af67185",
                        "timestamp": "2021-10-21 03:13:33"
                    }
                ],
                "domain": [
                    {
                        "value": "bonimoni.xyz",
                        "timestamp": "2022-08-23 17:22:31"
                    },
                    {
                        "value": "viterwin.club",
                        "timestamp": "2022-08-23 17:22:31"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "66a9b9955fa7240b45137d09dc265306ae751541de510cd9f4288f1a9972b02c",
                        "timestamp": "2021-08-09 13:48:46"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-08-27 22:24:53",
    "file_name": "confucius",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/h/confucius-uses-pegasus-spyware-related-lures-to-target-pakistani.html",
            "date": "2021-08-17",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "Confucius Uses Pegasus Spyware-related Lures to Target Pakistani Military",
            "categories": [
                "Chrysaor",
                "Confucius"
            ]
        },
        {
            "data_url": "https://www.uptycs.com/blog/confucius-apt-deploys-warzone-rat",
            "date": "2021-01-12",
            "organization": "Uptycs",
            "author": "Abhijit Mohanta",
            "title": "Confucius APT deploys Warzone RAT",
            "categories": [
                "Ave Maria",
                "Confucius"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2017/11/unit42-recent-inpage-exploits-lead-multiple-malware-families/",
            "date": "2017-11-02",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Jacob Soo",
            "title": "Recent InPage Exploits Lead to Multiple Malware Families",
            "categories": [
                "Confucius"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2016/09/unit42-confucius-says-malware-families-get-further-by-abusing-legitimate-websites/",
            "date": "2016-09-28",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tom Lancaster",
            "title": "Confucius Says\u2026Malware Families Get Further By Abusing Legitimate Websites",
            "categories": [
                "Confucius",
                "SNEEPY"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "confucius",
            "procedure_code": "g0142",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0142",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/006",
                    "technique_name": "acquire infrastructure : web services",
                    "technique_description": "adversaries may register for web services\u00a0that can be used during targeting. a variety of popular websites exist for adversaries to register for a web-based service that can be abused during later stages of the adversary lifecycle, such as during command and control (web service), exfiltration over web service, or phishing. using common services, such as those offered by google or twitter, makes it easier for adversaries to hide in expected noise. by utilizing a web service, adversaries can make it difficult to physically tie back operations to them.",
                    "procedure_description": "confucius has obtained cloud storage service accounts to host stolen data.[6]"
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
                    "procedure_description": "confucius has crafted and sent victims malicious attachments to gain initial access.[66]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/002",
                    "technique_name": "phishing : spearphishing link",
                    "technique_description": "adversaries may send spearphishing emails with a malicious link in an attempt to gain access to victim systems. spearphishing with a link is a specific variant of spearphishing. it is different from other forms of spearphishing in that it employs the use of links to download malware contained in email, instead of attaching malicious files to the email itself, to avoid defenses that may inspect email attachments. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "confucius has sent malicious links to victims through email campaigns.[35]"
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
                    "procedure_description": "confucius has used powershell to execute malicious files and payloads.[64]"
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
                    "procedure_description": "confucius has used vbscript to execute malicious code.[37]"
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
                    "procedure_description": "confucius has exploited microsoft office vulnerabilities, including cve-2015-1641, cve-2017-11882, and cve-2018-0802.[40][41]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "confucius has created scheduled tasks to maintain persistence on a compromised host.[43]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/001",
                    "technique_name": "user execution : malicious link",
                    "technique_description": "an adversary may rely upon a user clicking a malicious link in order to gain execution. users may be subjected to social engineering to get them to click on a link that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing link. clicking on a link may also lead to other execution techniques such as exploitation of a browser or application vulnerability via exploitation for client execution. links may also lead users to download files that require execution via malicious file.",
                    "procedure_description": "confucius has lured victims into clicking on a malicious link sent through spearphishing.[26]"
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
                    "procedure_description": "confucius has lured victims to execute malicious attachments included in crafted spearphishing emails related to current topics.[62]"
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
                    "procedure_description": "confucius has dropped malicious files into the startup folder %appdata%\\microsoft\\windows\\start menu\\programs\\startup on a compromised host in order to maintain persistence.[64]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "confucius has created scheduled tasks to maintain persistence on a compromised host.[43]"
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
                    "procedure_description": "confucius has dropped malicious files into the startup folder %appdata%\\microsoft\\windows\\start menu\\programs\\startup on a compromised host in order to maintain persistence.[64]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "confucius has created scheduled tasks to maintain persistence on a compromised host.[43]"
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
                    "procedure_description": "confucius has used mshta.exe to execute malicious vbscript.[14]"
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
                    "procedure_description": "confucius has used a weaponized microsoft word document with an embedded rtf exploit.[12]"
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
                    "procedure_description": "confucius has used a file stealer that checks the document, downloads, desktop, and picture folders for documents and images with specific extensions.[81]"
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
                    "procedure_description": "confucius has used a file stealer that can examine system drives, including those other than the c drive.[94]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1119",
                    "technique_link": "https://attack.mitre.org/techniques/T1119",
                    "technique_name": "automated collection",
                    "technique_description": "once established within a system or network, an adversary may use automated techniques for collecting internal data. methods for performing this technique could include use of a command and scripting interpreter to search for and copy information fitting set criteria such as file type, location, or name at specific time intervals. in cloud-based environments, adversaries may also use cloud apis, command line interfaces, or extract, transform, and load (etl) services to automatically collect data. this functionality could also be built into remote access tools.",
                    "procedure_description": "confucius has used a file stealer to steal documents and images with the following extensions: txt, pdf, png, jpg, doc, xls, xlm, odp, ods, odt, rtf, ppt, xlsx, xlsm, docx, pptx, and jpeg.[10]"
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
                    "procedure_description": "confucius has used http for c2 communications.[78]"
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
                    "procedure_description": "confucius has downloaded additional files and payloads onto a compromised host following initial access.[120][121]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1041",
                    "technique_link": "https://attack.mitre.org/techniques/T1041",
                    "technique_name": "exfiltration over c2 channel",
                    "technique_description": "adversaries may steal data by exfiltrating it over an existing command and control channel. stolen data is encoded into the normal communications channel using the same protocol as command and control communications.",
                    "procedure_description": "confucius has exfiltrated stolen files to its c2 server.[29]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1567.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1567/002",
                    "technique_name": "exfiltration over web service : exfiltration to cloud storage",
                    "technique_description": "adversaries may exfiltrate data to a cloud storage service rather than over their primary command and control channel. cloud storage services allow for the storage, edit, and retrieval of data from a remote cloud storage server over the internet.",
                    "procedure_description": "confucius has exfiltrated victim data to cloud storage service accounts.[7]"
                }
            ]
        }
    ]
};