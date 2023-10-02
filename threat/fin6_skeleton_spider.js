var threatdata = {
    "name": "FIN6, Skeleton Spider",
    "alias": "FIN6, Skeleton Spider, Gold Franklin, White Giant, ITG08, ATK 88, TAG-CR2, TAAL, Camouflage Tempest",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "FIN6, Skeleton Spider",
        "names": [
            {
                "name": "FIN6",
                "name-giver": "FireEye"
            },
            {
                "name": "Skeleton Spider",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Gold Franklin",
                "name-giver": "Secureworks"
            },
            {
                "name": "White Giant",
                "name-giver": "PWC"
            },
            {
                "name": "ITG08",
                "name-giver": "IBM"
            },
            {
                "name": "ATK 88",
                "name-giver": "Thales"
            },
            {
                "name": "TAG-CR2",
                "name-giver": "Recorded Future"
            },
            {
                "name": "TAAL",
                "name-giver": "Microsoft"
            },
            {
                "name": "Camouflage Tempest",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime",
            "Financial gain"
        ],
        "first-seen": "2015",
        "description": "FIN6 is a cybercrime group that has stolen payment card data and sold it for profit on underground marketplaces. This group has aggressively targeted and compromised point of sale (PoS) systems in the hospitality and retail sectors.\n\n(FireEye) FIN6 is a cybercriminal group intent on stealing payment card data for monetization. In 2015, FireEye Threat Intelligence supported several Mandiant Consulting investigations in the hospitality and retail sectors where FIN6 actors had aggressively targeted and compromised point-of-sale (POS) systems, making off with millions of payment card numbers. Through iSIGHT, we learned that the payment card numbers stolen by FIN6 were sold on a \u201ccard shop\u201d \u2014 an underground criminal marketplace used to sell or exchange payment card data.",
        "observed-sectors": [
            "Chemical",
            "Energy",
            "Hospitality",
            "Manufacturing",
            "Retail"
        ],
        "tools": [
            "AbaddonPOS",
            "Anchor",
            "BlackPOS",
            "CmdSQL",
            "Cobalt Strike",
            "FlawedAmmyy",
            "Grateful POS",
            "JSPSPY",
            "LockerGoga",
            "Magecart",
            "Meterpreter",
            "Mimikatz",
            "More_eggs",
            "Ryuk",
            "SCRAPMINT",
            "TerraStealer",
            "Vawtrak",
            "Windows Credentials Editor",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2018",
                "activity": "Based on Visa Payment Fraud Disruption\u2019s (PFD) analysis of eCommerce compromises throughout 2018, FIN6\u2019s focus on the CNP environment has only amplified, suggesting that the cybercrime group has fully incorporated targeting CNP environments into their criminal methodology.\nhttps://usa.visa.com/dam/VCOM/global/support-legal/documents/fin6-cybercrime-group-expands-threat-To-ecommerce-merchants.pdf"
            },
            {
                "date": "2019-01",
                "activity": "Over the past 8-10 weeks, Morphisec has been tracking multiple sophisticated attacks targeting Point of Sale thin clients globally. More specifically, on the 6th of February we identified an extremely high number of prevention events stopping Cobalt Strike backdoor execution, with some of the attacks expressly targeting Point of Sale VMWare Horizon thin clients.\nhttp://blog.morphisec.com/new-global-attack-on-point-of-sale-systems"
            },
            {
                "date": "2019-01",
                "activity": "Hackers have infected the systems of Altran Technologies with malware that spread through the company network, affecting operations in some European countries. To protect client data and their own assets, Altran decided to shut down its network and applications.\nhttps://www.bleepingcomputer.com/news/security/new-lockergoga-ransomware-allegedly-used-in-altran-attack/"
            },
            {
                "date": "2019-03",
                "activity": "One of the largest aluminum producers in the world, Norsk Hydro, has been forced to switch to partial manual operations due to a cyber attack that is allegedly pushing LockerGoga ransomware.\nhttps://www.bleepingcomputer.com/news/security/lockergoga-ransomware-sends-norsk-hydro-into-manual-mode/"
            },
            {
                "date": "2019-04",
                "activity": "The Securonix Threat Research Team has been closely monitoring the LockerGoga targeted cyber sabotage/ransomware (TC/R) attacks impacting Norsk Hydro (one of the largest aluminum companies worldwide), Hexion/Momentive (a chemical manufacturer), and other companies\u2019 IT and operational technology (OT) infrastructure, causing over US$40 million in damages.\nhttps://www.securonix.com/securonix-threat-research-detecting-lockergoga-targeted-it-ot-cyber-sabotage-ransomware-attacks/"
            },
            {
                "date": "2019-08",
                "activity": "Based on our investigation and analysis of its adversarial tactics, techniques and procedures (TTPs), we believe ITG08 is actively attacking multinational organizations, targeting specific employees with spear phishing emails advertising fake job advertisements and repeatedly deploying the More_eggs Jscript backdoor malware.\nhttps://securityintelligence.com/posts/more_eggs-anyone-threat-actor-itg08-strikes-again/"
            },
            {
                "date": "2019-09",
                "activity": "Hackers have breached the infrastructure of Volusion, a provider of cloud-hosted online stores, and are delivering malicious code that records and steals payment card details entered by users in online forms.\nhttps://www.zdnet.com/article/hackers-breach-volusion-and-start-collecting-card-details-from-thousands-of-sites/\nhttps://www.zdnet.com/article/card-data-from-the-volusion-web-skimmer-incident-surfaces-on-the-dark-web/"
            },
            {
                "date": "2020-03",
                "activity": "In a new and dangerous twist to this trend, IBM X-Force Incident Response and Intelligence Services (IRIS) research believes that the elite cybercriminal threat actor ITG08, also known as FIN6, has partnered with the malware gang behind one of the most active Trojans \u2014 TrickBot \u2014 to use TrickBot\u2019s new malware framework dubbed \u201cAnchor\u201d against organizations for financial profit.\nhttps://securityintelligence.com/posts/itg08-aka-fin6-partners-with-trickbot-gang-uses-anchor-framework/"
            }
        ],
        "counter-operations": [
            {
                "date": "2021-10",
                "activity": "Europol detains suspects behind LockerGoga, MegaCortex, and Dharma ransomware attacks\nhttps://therecord.media/europol-detains-suspects-behind-lockergoga-megacortex-and-dharma-ransomware-attacks/"
            }
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html",
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt-fin6.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0037/"
        ],
        "uuid": "61c8ecd4-e4e1-4f36-b209-ca55106ec22f",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "fin6_skeleton_spider",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/gold-franklin",
            "date": "2021",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "Threat Profile: GOLD FRANKLIN",
            "categories": [
                "Grateful POS",
                "Meterpreter",
                "MimiKatz",
                "RemCom",
                "FIN6"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/more_eggs-anyone-threat-actor-itg08-strikes-again/",
            "date": "2019-08-29",
            "organization": "Security Intelligence",
            "author": "Ole Villadsen",
            "title": "More_eggs, Anyone? Threat Actor ITG08 Strikes Again",
            "categories": [
                "More_eggs",
                "FIN6"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html",
            "date": "2019-04-05",
            "organization": "FireEye",
            "author": "Brendan McKeague",
            "title": "Pick-Six: Intercepting a FIN6 Intrusion, an Actor Recently Tied to Ryuk and LockerGoga Ransomware",
            "categories": [
                "LockerGoga",
                "Ryuk",
                "FIN6"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/",
            "date": "2019",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2019 CrowdStrike Global Threat Report",
            "categories": [
                "APT40",
                "BOSS SPIDER",
                "FIN6",
                "Flash Kitten",
                "GURU SPIDER",
                "LUNAR SPIDER",
                "NOMAD PANDA",
                "PINCHY SPIDER",
                "RATPAK SPIDER",
                "SALTY SPIDER",
                "TINY SPIDER"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0037/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: FIN6",
            "categories": [
                "FIN6"
            ]
        },
        {
            "data_url": "https://www2.fireeye.com/rs/848-DID-242/images/rpt-fin6.pdf",
            "date": "2016-04",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "Follow the Money: Dissecting the Operations of the Cyber Crime Group FIN6",
            "categories": [
                "Grateful POS",
                "FIN6"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "fin6",
            "procedure_code": "g0037",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0037",
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
                    "procedure_description": "fin6 has obtained and used tools such as mimikatz, cobalt strike, and adfind.[49][50]"
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
                    "procedure_description": "fin6 has targeted victims with e-mails containing malicious attachments.[93]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/003",
                    "technique_name": "phishing : spearphishing via service",
                    "technique_description": "adversaries may send spearphishing messages via third-party services in an attempt to gain access to victim systems. spearphishing via service is a specific variant of spearphishing. it is different from other forms of spearphishing in that it employs the use of third party services rather than directly via enterprise email channels.",
                    "procedure_description": "fin6 has used fake job advertisements sent via linkedin to spearphish targets.[6]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "to move laterally on a victim network, fin6 has used credentials stolen from various systems on which it gathered usernames and password hashes.[29][30][31]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059",
                    "technique_link": "https://attack.mitre.org/techniques/T1059",
                    "technique_name": "command and scripting interpreter",
                    "technique_description": "adversaries may abuse command and script interpreters to execute commands, scripts, or binaries. these interfaces and languages provide ways of interacting with computer systems and are a common feature across many different platforms. most systems come with some built-in command-line interface and scripting capabilities, for example, macos and linux distributions include some flavor of unix shell while windows installations include the windows command shell and powershell.",
                    "procedure_description": "fin6 has used scripting to iterate through a list of compromised pos systems, copy data to a log file, and remove the original data files.[18][19]"
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
                    "procedure_description": "fin6 has used powershell to gain access to merchant's networks, and a metasploit powershell module to download and execute shellcode and to set up a local listener.[92][93][94]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "fin6 has used kill.bat script to disable security tools.[123]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/007",
                    "technique_name": "command and scripting interpreter : javascript",
                    "technique_description": "adversaries may abuse various implementations of javascript for execution. javascript (js) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though js can be executed in runtime environments outside the browser.",
                    "procedure_description": "fin6 has used malicious javascript to steal payment card data from e-commerce sites.[34]"
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
                    "procedure_description": "fin6 has used scheduled tasks to establish persistence for various malware it uses, including downloaders known as hardtack and shipbread and frameworkpos.[58]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1569.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1569/002",
                    "technique_name": "system services : service execution",
                    "technique_description": "adversaries may abuse the windows service control manager to execute malicious commands or payloads. the windows service control manager (services.exe) is an interface to manage and manipulate services. the service control manager is accessible to users via gui components as well as system utilities such as sc.exe and net.",
                    "procedure_description": "fin6 has created windows services to execute encoded powershell commands.[21]"
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
                    "procedure_description": "fin6 has used malicious documents to lure victims into allowing execution of powershell scripts.[87]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "fin6 has used wmi to automate the remote execution of powershell scripts.[44]"
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
                    "procedure_description": "fin6 has used registry run keys to establish persistence for its downloader tools known as hardtack and shipbread.[91]"
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
                    "procedure_description": "fin6 has used scheduled tasks to establish persistence for various malware it uses, including downloaders known as hardtack and shipbread and frameworkpos.[58]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "to move laterally on a victim network, fin6 has used credentials stolen from various systems on which it gathered usernames and password hashes.[29][30][31]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134",
                    "technique_link": "https://attack.mitre.org/techniques/T1134",
                    "technique_name": "access token manipulation",
                    "technique_description": "adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls. windows uses access tokens to determine the ownership of a running process. a user can manipulate access tokens to make a running process appear as though it is the child of a different process or belongs to someone other than the user that started the process. when this occurs, the process also takes on the security context associated with the new token.",
                    "procedure_description": "fin6 has used has used metasploit\u2019s named-pipe impersonation technique to escalate privileges.[10]"
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
                    "procedure_description": "fin6 has used registry run keys to establish persistence for its downloader tools known as hardtack and shipbread.[91]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1068",
                    "technique_link": "https://attack.mitre.org/techniques/T1068",
                    "technique_name": "exploitation for privilege escalation",
                    "technique_description": "adversaries may exploit software vulnerabilities in an attempt to elevate privileges. exploitation of a software vulnerability occurs when an adversary takes advantage of a programming error in a program, service, or within the operating system software or kernel itself to execute adversary-controlled code. security constructs such as permission levels will often hinder access to information and use of certain techniques, so adversaries will likely need to perform privilege escalation to include use of software exploitation to circumvent those restrictions.",
                    "procedure_description": "fin6 has used tools to exploit windows vulnerabilities in order to escalate privileges. the tools targeted cve-2013-3660, cve-2011-2005, and cve-2010-4398, all of which could allow local users to access kernel-level privileges.[19]"
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
                    "procedure_description": "fin6 has used scheduled tasks to establish persistence for various malware it uses, including downloaders known as hardtack and shipbread and frameworkpos.[58]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "to move laterally on a victim network, fin6 has used credentials stolen from various systems on which it gathered usernames and password hashes.[29][30][31]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134",
                    "technique_link": "https://attack.mitre.org/techniques/T1134",
                    "technique_name": "access token manipulation",
                    "technique_description": "adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls. windows uses access tokens to determine the ownership of a running process. a user can manipulate access tokens to make a running process appear as though it is the child of a different process or belongs to someone other than the user that started the process. when this occurs, the process also takes on the security context associated with the new token.",
                    "procedure_description": "fin6 has used has used metasploit\u2019s named-pipe impersonation technique to escalate privileges.[10]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/001",
                    "technique_name": "impair defenses : disable or modify tools",
                    "technique_description": "adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. this may take many forms, such as killing security software processes or services, modifying / deleting registry keys or configuration files so that tools do not operate properly, or other methods to interfere with security tools scanning or reporting information. adversaries may also disable updates to prevent the latest security patches from reaching tools on victim systems.",
                    "procedure_description": "fin6 has deployed a utility script named kill.bat to disable anti-virus.[35]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "fin6 has removed files from victim machines.[73]"
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
                    "procedure_description": "fin6 has renamed the \"psexec\" service name to \"mstdc\" to masquerade as a legitimate windows service.[25]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/010",
                    "technique_name": "obfuscated files or information : command obfuscation",
                    "technique_description": "adversaries may obfuscate content during command execution to impede detection. command-line obfuscation is a method of making strings and patterns within commands and scripts more difficult to signature and analyze. this type of obfuscation can be included within commands executed by delivered payloads (e.g., phishing and drive-by compromise) or interactively via command and scripting interpreter.",
                    "procedure_description": "fin6 has used encoded powershell commands.[35]"
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
                    "procedure_description": "fin6 has used comodo code-signing certificates.[31]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "to move laterally on a victim network, fin6 has used credentials stolen from various systems on which it gathered usernames and password hashes.[29][30][31]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1110.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1110/002",
                    "technique_name": "brute force : password cracking",
                    "technique_description": "adversaries may use password cracking to attempt to recover usable credentials, such as plaintext passwords, when credential material such as password hashes are obtained. os credential dumping can be used to obtain password hashes, this may only get an adversary so far when pass the hash is not an option. further,  adversaries may leverage data from configuration repository in order to obtain hashed credentials for network devices.",
                    "procedure_description": "fin6 has extracted password hashes from ntds.dit to crack offline.[7]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555",
                    "technique_link": "https://attack.mitre.org/techniques/T1555",
                    "technique_name": "credentials from password stores",
                    "technique_description": "adversaries may search for common password storage locations to obtain user credentials. passwords are stored in several places on a system, depending on the operating system or application holding the credentials. there are also specific applications that store passwords to make it easier for users manage and maintain. once credentials are obtained, they can be used to perform lateral movement and access restricted information.",
                    "procedure_description": "fin6 has used the stealer one credential stealer to target e-mail and file transfer utilities including ftp.[9]"
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
                    "procedure_description": "fin6 has used the stealer one credential stealer to target web browsers.[27]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/001",
                    "technique_name": "os credential dumping : lsass memory",
                    "technique_description": "adversaries may attempt to access credential material stored in the process memory of the local security authority subsystem service (lsass). after a user logs on, the system generates and stores a variety of credential materials in lsass process memory. these credential materials can be harvested by an administrative user or system and used to conduct lateral movement using use alternate authentication material.",
                    "procedure_description": "fin6 has used windows credential editor for credential dumping.[29][30]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/003",
                    "technique_name": "os credential dumping : ntds",
                    "technique_description": "adversaries may attempt to access or create a copy of the active directory domain database in order to steal credential information, as well as obtain other information about domain members such as devices, users, and access rights. by default, the ntds file (ntds.dit) is located in %systemroot%\\ntds\\ntds.dit of a domain controller.",
                    "procedure_description": "fin6 has used metasploit\u2019s psexec ntdsgrab module to obtain a copy of the victim's active directory database.[11][12]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/002",
                    "technique_name": "account discovery : domain account",
                    "technique_description": "adversaries may attempt to get a listing of domain accounts. this information can help adversaries determine which domain accounts exist to aid in follow-on behavior such as targeting specific accounts which possess particular privileges.",
                    "procedure_description": "fin6 has used metasploit\u2019s psexec ntdsgrab module to obtain a copy of the victim's active directory database.[24]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1046",
                    "technique_link": "https://attack.mitre.org/techniques/T1046",
                    "technique_name": "network service discovery",
                    "technique_description": "adversaries may attempt to get a listing of services running on remote hosts and local network infrastructure devices, including those that may be vulnerable to remote software exploitation. common methods to acquire this information include port and/or vulnerability scans using tools that are brought onto a system.",
                    "procedure_description": "fin6 used publicly available tools (including microsoft's built-in sql querying tool, osql.exe) to map the internal network and conduct reconnaissance against active directory, structured query language (sql) servers, and netbios.[27]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "fin6 used publicly available tools (including microsoft's built-in sql querying tool, osql.exe) to map the internal network and conduct reconnaissance against active directory, structured query language (sql) servers, and netbios.[38]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/001",
                    "technique_name": "remote services : remote desktop protocol",
                    "technique_description": "adversaries may use valid accounts to log into a computer using the remote desktop protocol (rdp). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "fin6 used rdp to move laterally in victim networks.[22][23]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560",
                    "technique_link": "https://attack.mitre.org/techniques/T1560",
                    "technique_name": "archive collected data",
                    "technique_description": "an adversary may compress and/or encrypt data that is collected prior to exfiltration. compressing the data can help to obfuscate the collected data and minimize the amount of data sent over the network. encryption can be used to hide information that is being exfiltrated from detection or make exfiltration less conspicuous upon inspection by a defender.",
                    "procedure_description": "following data collection, fin6 has compressed log files into a zip archive prior to staging and exfiltration.[24]"
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
                    "procedure_description": "fin6 has encoded data gathered from the victim with a simple substitution cipher and single-byte xor using the 0xaa key, and base64 with character permutation.[8][9]"
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
                    "procedure_description": "fin6 has used a script to iterate through a list of compromised pos systems, copy and remove data to a log file, and to bind to events from the submit payment button.[14][15]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1213",
                    "technique_link": "https://attack.mitre.org/techniques/T1213",
                    "technique_name": "data from information repositories",
                    "technique_description": "adversaries may leverage information repositories to mine valuable information. information repositories are tools that allow for storage of information, typically to facilitate collaboration or information sharing between users, and can store a wide variety of data that may aid adversaries in further objectives, or direct access to the target information. adversaries may also abuse external sharing features to share sensitive documents with recipients outside of the organization.",
                    "procedure_description": "fin6 has collected schemas and user accounts from systems running sql server.[2]"
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
                    "procedure_description": "fin6 has collected and exfiltrated payment card data from compromised systems.[67][68][69]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1074/002",
                    "technique_name": "data staged : remote data staging",
                    "technique_description": "adversaries may stage data collected from multiple systems in a central location or directory on one system prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "fin6 actors have compressed data from remote systems and moved it to another staging system before exfiltration.[5]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "fin6 used the plink command-line utility to create ssh tunnels to c2 servers.[19]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1095",
                    "technique_link": "https://attack.mitre.org/techniques/T1095",
                    "technique_name": "non-application layer protocol",
                    "technique_description": "adversaries may use an osi non-application layer protocol for communication between host and c2 server or among infected hosts within a network. the list of possible protocols is extensive. specific examples include use of network layer protocols, such as the internet control message protocol (icmp), transport layer protocols, such as the user datagram protocol (udp), session layer protocols, such as socket secure (socks), as well as redirected/tunneled protocols, such as serial over lan (sol).",
                    "procedure_description": "fin6 has used metasploit bind and reverse tcp stagers.[25]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1572",
                    "technique_link": "https://attack.mitre.org/techniques/T1572",
                    "technique_name": "protocol tunneling",
                    "technique_description": "adversaries may tunnel network communications to and from a victim system within a separate protocol to avoid detection/network filtering and/or enable access to otherwise unreachable systems. tunneling involves explicitly encapsulating a protocol within another. this behavior may conceal malicious traffic by blending in with existing traffic and/or provide an outer layer of encryption (similar to a vpn). tunneling could also enable routing of network packets that would otherwise not reach their intended destination, such as smb, rdp, or other traffic that would be filtered by network appliances or not routed over the internet.",
                    "procedure_description": "fin6 used the plink command-line utility to create ssh tunnels to c2 servers.[14]"
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
                    "procedure_description": "fin6 has used pastebin and google storage to host content for their operations.[16]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1048.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1048/003",
                    "technique_name": "exfiltration over alternative protocol : exfiltration over unencrypted non-c2 protocol",
                    "technique_description": "adversaries may steal data by exfiltrating it over an un-encrypted network protocol other than that of the existing command and control channel. the data may also be sent to an alternate network location from the main command and control server.",
                    "procedure_description": "fin6 has sent stolen payment card data to remote servers via http posts.[18]"
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