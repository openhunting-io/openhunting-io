var threatdata = {
    "name": "DarkHydrus, LazyMeerkat",
    "alias": "DarkHydrus, LazyMeerkat, ATK 77",
    "category": "APT",
    "type": "-",
    "modified": "2022-07-18",
    "all_data": {
        "actor": "DarkHydrus, LazyMeerkat",
        "names": [
            {
                "name": "DarkHydrus",
                "name-giver": "Palo Alto"
            },
            {
                "name": "LazyMeerkat",
                "name-giver": "Kaspersky"
            },
            {
                "name": "ATK 77",
                "name-giver": "Thales"
            }
        ],
        "country": [
            "Iran"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2016",
        "description": "DarkHydrus is a threat group that has targeted government agencies and educational institutions in the Middle East since at least 2016. The group heavily leverages open-source tools and custom payloads for carrying out attacks.\n\nSome analysts track Dark Hydrus, {{APT 19, Deep Panda, C0d0so0}} and {{Turbine Panda, APT 26, Shell Crew, WebMasters, KungFu Kittens}} as the same group, but it is unclear from open source information if the groups are the same.",
        "observed-sectors": [
            "Education",
            "Government"
        ],
        "observed-countries": [
            "Iran",
            "Middle East"
        ],
        "tools": [
            "Cobalt Strike",
            "Mimikatz",
            "Phishery",
            "RogueRobin"
        ],
        "operations": [
            {
                "date": "2018-06",
                "activity": "On June 24, 2018, Unit 42 observed DarkHydrus carrying out a credential harvesting attack on an educational institution in the Middle East. The attack involved a spear-phishing email with a subject of \u201cProject Offer\u201d and a malicious Word document as an attachment.\nhttps://unit42.paloaltonetworks.com/unit42-darkhydrus-uses-phishery-harvest-credentials-middle-east/"
            },
            {
                "date": "2018-07",
                "activity": "Attack on Middle East Government\nThis attack diverged from previous attacks we observed from this group as it involved spear-phishing emails sent to targeted organizations with password protected RAR archive attachments that contained malicious Excel Web Query files (.iqy).\nhttps://unit42.paloaltonetworks.com/unit42-new-threat-actor-group-darkhydrus-targets-middle-east-government/"
            },
            {
                "date": "2019-01",
                "activity": "New Attacks in the Middle East\n360 Threat Intelligence Center captured several lure Excel documents written in Arabic in January 9, 2019. A backdoor dropped by macro in the lure documents can communicate with C2 server through DNS tunnel, as well as Google Drive API.\nhttps://ti.360.net/blog/articles/latest-target-attack-of-darkhydruns-group-against-middle-east-en/\nhttps://unit42.paloaltonetworks.com/darkhydrus-delivers-new-trojan-that-can-use-google-drive-for-c2-communications/"
            }
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-new-threat-actor-group-darkhydrus-targets-middle-east-government/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0079/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=darkhydrus"
        ],
        "uuid": "2849cc26-d6c8-4484-821e-cb0f7006bddc",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "darkhydrus_lazymeerkat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/obscureserpens/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Obscure Serpens",
            "categories": [
                "Cobalt Strike",
                "Empire Downloader",
                "Meterpreter",
                "MimiKatz",
                "DarkHydrus"
            ]
        },
        {
            "data_url": "https://ti.360.net/blog/articles/latest-target-attack-of-darkhydruns-group-against-middle-east-en/",
            "date": "2019-01-16",
            "organization": "360.cn",
            "author": "Qi Anxin",
            "title": "Latest Target Attack of DarkHydruns Group Against Middle East",
            "categories": [
                "RogueRobinNET",
                "DarkHydrus"
            ]
        },
        {
            "data_url": "https://mobile.twitter.com/360TIC/status/1083289987339042817",
            "date": "2019-01-10",
            "organization": "Twitter (@RedDrip7)",
            "author": "RedDrip Team",
            "title": "Tweet on DarkHydrus",
            "categories": [
                "DarkHydrus"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/darkhydrus-delivers-new-trojan-that-can-use-google-drive-for-c2-communications/",
            "date": "2019-01-08",
            "organization": "paloalto Netoworks: Unit42",
            "author": "Robert Falcone",
            "title": "DarkHydrus delivers new Trojan that can use Google Drive for C2 communications",
            "categories": [
                "RogueRobinNET",
                "DarkHydrus"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0079/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: DarkHydrus",
            "categories": [
                "DarkHydrus"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-darkhydrus-uses-phishery-harvest-credentials-middle-east/",
            "date": "2018-08-07",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "DarkHydrus Uses Phishery to Harvest Credentials in the Middle East",
            "categories": [
                "DarkHydrus"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2018/07/unit42-new-threat-actor-group-darkhydrus-targets-middle-east-government/",
            "date": "2018-07-27",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "New Threat Actor Group DarkHydrus Targets Middle East Government",
            "categories": [
                "RogueRobin",
                "DarkHydrus"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "darkhydrus",
            "procedure_code": "g0079",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0079",
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
                    "procedure_description": "darkhydrus has obtained and used tools such as mimikatz, empire, and cobalt strike.[41]"
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
                    "procedure_description": "darkhydrus has sent spearphishing emails with password-protected rar archives containing malicious excel web query files (.iqy). the group has also sent spearphishing emails that contained malicious microsoft office documents that use the \"attachedtemplate\" technique to load a template from a remote server.[70][71][72]"
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
                    "procedure_description": "darkhydrus leveraged powershell to download and execute additional scripts for execution.[70][71]"
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
                    "procedure_description": "darkhydrus has sent malware that required users to hit the enable button in microsoft excel to allow an .iqy file to be downloaded.[70][71]"
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
                    "procedure_description": "darkhydrus has used -windowstyle hidden to conceal powershell windows. [15]"
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
                    "procedure_description": "darkhydrus used an open-source tool, phishery, to inject malicious remote template urls into microsoft word documents and then sent them to victims to enable forced authentication.[13]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1187",
                    "technique_link": "https://attack.mitre.org/techniques/T1187",
                    "technique_name": "forced authentication",
                    "technique_description": "adversaries may gather credential material by invoking or forcing a user to automatically provide authentication information through a mechanism in which they can intercept.",
                    "procedure_description": "darkhydrus used template injection to launch an authentication window for users to enter their credentials.[8]"
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