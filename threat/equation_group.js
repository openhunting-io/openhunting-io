var threatdata = {
    "name": "Equation Group",
    "alias": "Equation Group, Tilded Team, Platinum Colony",
    "category": "APT",
    "type": "-",
    "modified": "2022-04-03",
    "all_data": {
        "actor": "Equation Group",
        "names": [
            {
                "name": "Equation Group",
                "name-giver": "real name"
            },
            {
                "name": "Tilded Team",
                "name-giver": "CrySys"
            },
            {
                "name": "Platinum Colony",
                "name-giver": "SecureWorks"
            }
        ],
        "country": [
            "USA"
        ],
        "sponsor": "State-sponsored, believed to be tied to the NSA\u2019s Tailored Access Operations unit",
        "motivation": [
            "Information theft and espionage",
            "Sabotage and destruction"
        ],
        "first-seen": "2001",
        "description": "(Ars Technica) Kaspersky researchers have documented 500 infections by Equation Group in at least 42 countries, with Iran, Russia, Pakistan, Afghanistan, India, Syria, and Mali topping the list. Because of a self-destruct mechanism built into the malware, the researchers suspect that this is just a tiny percentage of the total; the actual number of victims likely reaches into the tens of thousands.\n\nA long list of almost superhuman technical feats illustrate Equation Group\u2019s extraordinary skill, painstaking work, and unlimited resources. They include:\n\u2022 The use of virtual file systems, a feature also found in the highly sophisticated Regin malware. Recently published documents provided by Ed Snowden indicate that the NSA used Regin to infect the partly state-owned Belgian firm Belgacom.\n\u2022 The stashing of malicious files in multiple branches of an infected computer\u2019s registry. By encrypting all malicious files and storing them in multiple branches of a computer\u2019s Windows registry, the infection was impossible to detect using antivirus software.\n\u2022 Redirects that sent iPhone users to unique exploit Web pages. In addition, infected machines reporting to Equation Group command servers identified themselves as Macs, an indication that the group successfully compromised both iOS and OS X devices.\n\u2022 The use of more than 300 Internet domains and 100 servers to host a sprawling command and control infrastructure.\n\u2022 USB stick-based reconnaissance malware to map air-gapped networks, which are so sensitive that they aren\u2019t connected to the Internet. Both Stuxnet and the related Flame malware platform also had the ability to bridge airgaps.\n\u2022 An unusual if not truly novel way of bypassing code-signing restrictions in modern versions of Windows, which require that all third-party software interfacing with the operating system kernel be digitally signed by a recognized certificate authority. To circumvent this restriction, Equation Group malware exploited a known vulnerability in an already signed driver for CloneCD to achieve kernel-level code execution.\n\nTaken together, the accomplishments led Kaspersky researchers to conclude that Equation Group is probably the most sophisticated computer attack group in the world, with technical skill and resources that rival the groups that developed Stuxnet and the Flame espionage malware in {{Operation Olympic Games}}.\n\nOther publicly exposed major APT activities from the NSA involve the wholesale worldwide spying from programs such as PRISM and, together with {{GCHQ}}, INCENSER, where various international Internet trunks were tapped.",
        "observed-sectors": [
            "Aerospace",
            "Defense",
            "Education",
            "Energy",
            "Government",
            "Media",
            "Oil and gas",
            "Telecommunications",
            "Transportation",
            "Nanotechnology, Nuclear research, Islamic activists and scholars, and companies developing cryptographic technologies"
        ],
        "observed-countries": [
            "Afghanistan",
            "Algeria",
            "Austria",
            "Bangladesh",
            "Belgium",
            "Bolivia",
            "Bosnia and Herzegovina",
            "Botswana",
            "Brazil",
            "Chile",
            "China",
            "Cyprus",
            "Ecuador",
            "Egypt",
            "Finland",
            "France",
            "Gabon",
            "Germany",
            "Greece",
            "Hong Kong",
            "Hungary",
            "India",
            "Iran",
            "Iraq",
            "Israel",
            "Italy",
            "Japan",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Lebanon",
            "Libya",
            "Malaysia",
            "Mali",
            "Mexico",
            "Netherlands",
            "Nicaragua",
            "Nigeria",
            "Norway",
            "Pakistan",
            "Palestine",
            "Philippines",
            "Poland",
            "Qatar",
            "Romania",
            "Russia",
            "Saudi Arabia",
            "Singapore",
            "Somalia",
            "South Africa",
            "South Korea",
            "Spain",
            "Sudan",
            "Sweden",
            "Switzerland",
            "Syria",
            "Thailand",
            "Turkey",
            "UAE",
            "UK",
            "USA",
            "Venezuela",
            "Yemen"
        ],
        "tools": [
            "Bvp47",
            "DanderSpritz",
            "DarkPulsar",
            "DOUBLEFANTASY",
            "DoubleFeature",
            "DoublePulsar",
            "Duqu",
            "EQUATIONDRUG",
            "EQUATIONLASER",
            "FANNY",
            "Flame",
            "GRAYFISH",
            "GROK",
            "Lambert",
            "OddJob",
            "Regin",
            "TRIPLEFANTASY",
            "UNITEDRAKE",
            "many others"
        ],
        "counter-operations": [
            {
                "date": "2016-08",
                "activity": "Their arsenal of 0-day cyber weapons was stolen by an actor {{Shadow Brokers}}, who leaked a large section on the internet and tried to sell the rest afterward.\nMost notable among the dumps were 0-days such as ETERNALBLUE and ETERNALROMANCE that were used by other groups for the creation of infamous ransomware explosions such as WannaCry and NotPetya."
            }
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08064459/Equation_group_questions_and_answers.pdf",
            "https://arstechnica.com/information-technology/2015/02/how-omnipotent-hackers-tied-to-the-nsa-hid-for-14-years-and-were-found-at-last/",
            "https://en.wikipedia.org/wiki/Equation_Group",
            "https://en.wikipedia.org/wiki/PRISM_(surveillance_program)",
            "https://www.electrospaces.net/2014/11/incenser-or-how-nsa-and-gchq-are.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0020/"
        ],
        "uuid": "29bfd981-357b-4871-ba4b-ada033ba3217",
        "last-card-change": "2022-04-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "equation_group",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/platinum-terminal",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "PLATINUM TERMINAL",
            "categories": [
                "TalentRAT",
                "Equation Group",
                "Longhorn"
            ]
        },
        {
            "data_url": "https://en.wikipedia.org/wiki/Equation_Group",
            "date": "2019-11-08",
            "organization": "Wikipedia",
            "author": "Various",
            "title": "Wikipedia Entry on Equation Group",
            "categories": [
                "Equation Group"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0020/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: Equation",
            "categories": [
                "Equation Group"
            ]
        },
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/equation-group",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Equation Group",
            "categories": [
                "Equation Group"
            ]
        },
        {
            "data_url": "https://www.dropbox.com/s/buxkfotx1kei0ce/Whitepaper%20Shadow%20Broker%20-%20Equation%20Group%20Hack.pdf?dl=0",
            "date": "2016-10-05",
            "organization": "",
            "author": "ThaiCERT",
            "title": "The Shadow Brokers auctions cyber weapons from Equation Group",
            "categories": [
                "Equation Group"
            ]
        },
        {
            "data_url": "https://arstechnica.com/information-technology/2015/02/how-omnipotent-hackers-tied-to-the-nsa-hid-for-14-years-and-were-found-at-last/",
            "date": "2015-02-16",
            "organization": "Ars Technica",
            "author": "Dan Goodin",
            "title": "How \u201comnipotent\u201d hackers tied to NSA hid for 14 years\u2014and were found at last",
            "categories": [
                "Equation Group"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08064459/Equation_group_questions_and_answers.pdf",
            "date": "2015-02",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky",
            "title": "Equation Group: Questions and Answers",
            "categories": [
                "Equation Group"
            ]
        },
        {
            "data_url": "https://en.wikipedia.org/wiki/Stuxnet",
            "date": "2010-09",
            "organization": "Wikipedia",
            "author": "Wikipedia",
            "title": "Stuxnet",
            "categories": [
                "Equation Group"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "platinum",
            "procedure_code": "g0068",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0068",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1189",
                    "technique_link": "https://attack.mitre.org/techniques/T1189",
                    "technique_name": "drive-by compromise",
                    "technique_description": "adversaries may gain access to a system through a user visiting a website over the normal course of browsing. with this technique, the user's web browser is typically targeted for exploitation, but adversaries may also use compromised websites for non-exploitation behavior such as acquiring application access token.",
                    "procedure_description": "platinum has sometimes used drive-by attacks against vulnerable browser plugins.[41]"
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
                    "procedure_description": "platinum has sent spearphishing emails with attachments to victims as its primary initial access vector.[178]"
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
                    "procedure_description": "platinum has attempted to get users to open malicious files by sending spearphishing emails with attachments to victims.[185]"
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
                    "procedure_description": "platinum has leveraged a zero-day vulnerability to escalate privileges.[27]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "platinum has used various methods of process injection including hot patching.[34]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036",
                    "technique_link": "https://attack.mitre.org/techniques/T1036",
                    "technique_name": "masquerading",
                    "technique_description": "adversaries may attempt to manipulate features of their artifacts to make them appear legitimate or benign to users and/or security tools. masquerading occurs when the name or location of an object, legitimate or malicious, is manipulated or abused for the sake of evading defenses and observation. this may include manipulating file metadata, tricking users into misidentifying the file type, and giving legitimate task or service names.",
                    "procedure_description": "platinum has renamed rar.exe to avoid detection.[27]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "platinum has used various methods of process injection including hot patching.[34]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "platinum has used several different keyloggers.[83]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/004",
                    "technique_name": "input capture : credential api hooking",
                    "technique_description": "adversaries may hook into windows application programming interface (api) functions to collect user credentials. malicious hooking mechanisms may capture api calls that include parameters that reveal user authentication credentials. unlike keylogging,  this technique focuses specifically on api functions that include parameters that reveal user credentials. hooking involves redirecting calls to these functions and can be implemented via:",
                    "procedure_description": "platinum is capable of using windows hook interfaces for information gathering such as credential access.[11]"
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
                    "procedure_description": "platinum has used keyloggers that are also capable of dumping credentials.[71]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "platinum has used several different keyloggers.[83]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/004",
                    "technique_name": "input capture : credential api hooking",
                    "technique_description": "adversaries may hook into windows application programming interface (api) functions to collect user credentials. malicious hooking mechanisms may capture api calls that include parameters that reveal user authentication credentials. unlike keylogging,  this technique focuses specifically on api functions that include parameters that reveal user credentials. hooking involves redirecting calls to these functions and can be implemented via:",
                    "procedure_description": "platinum is capable of using windows hook interfaces for information gathering such as credential access.[11]"
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
                    "procedure_description": "platinum has transferred files using the intel\u00ae active management technology (amt) serial-over-lan (sol) channel.[345]"
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
                    "procedure_description": "platinum has used the intel\u00ae active management technology (amt) serial-over-lan (sol) channel for command and control.[52]"
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
        },
        {
            "procedure_name": "equation",
            "procedure_code": "g0020",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0020",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1542.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1542/002",
                    "technique_name": "pre-os boot : component firmware",
                    "technique_description": "adversaries may modify component firmware to persist on systems. some adversaries may employ sophisticated means to compromise computer components and install malicious firmware that will execute adversary code outside of the operating system and main system firmware or bios. this technique may be similar to system firmware but conducted upon other system components/devices that may not have the same capability or level of integrity checking.",
                    "procedure_description": "equation is known to have the capability to overwrite the firmware on hard drives from some manufacturers.[2]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1480.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1480/001",
                    "technique_name": "execution guardrails : environmental keying",
                    "technique_description": "adversaries may environmentally key payloads or other features of malware to evade defenses and constraint execution to a specific target environment. environmental keying uses cryptography to constrain execution or actions based on adversary supplied environment specific conditions that are expected to be present on the target. environmental keying is an implementation of execution guardrails that utilizes cryptographic techniques for deriving encryption/decryption keys from specific types of values in a given computing environment.",
                    "procedure_description": "equation has been observed utilizing environmental keying in payload delivery.[2][9]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/005",
                    "technique_name": "hide artifacts : hidden file system",
                    "technique_description": "adversaries may use a hidden file system to conceal malicious activity from users and security tools. file systems provide a structure to store and access data from physical storage. typically, a user engages with a file system through applications that allow them to access files and directories, which are an abstraction from their physical location (ex: disk sector). standard file systems include fat, ntfs, ext4, and apfs. file systems can also contain other structures, such as the volume boot record (vbr) and master file table (mft) in ntfs.",
                    "procedure_description": "equation has used an encrypted virtual file system stored in the windows registry.[4]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1542.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1542/002",
                    "technique_name": "pre-os boot : component firmware",
                    "technique_description": "adversaries may modify component firmware to persist on systems. some adversaries may employ sophisticated means to compromise computer components and install malicious firmware that will execute adversary code outside of the operating system and main system firmware or bios. this technique may be similar to system firmware but conducted upon other system components/devices that may not have the same capability or level of integrity checking.",
                    "procedure_description": "equation is known to have the capability to overwrite the firmware on hard drives from some manufacturers.[2]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1120",
                    "technique_link": "https://attack.mitre.org/techniques/T1120",
                    "technique_name": "peripheral device discovery",
                    "technique_description": "adversaries may attempt to gather information about attached peripheral devices and components connected to a computer system. peripheral devices could include auxiliary resources that support a variety of functionalities such as keyboards, printers, cameras, smart card readers, or removable storage. the information may be used to enhance their awareness of the system and network environment or may be used for further actions.",
                    "procedure_description": "equation has used tools with the functionality to search for specific information about the attached hard drive that could be used to identify and overwrite the firmware.[18]"
                }
            ]
        }
    ]
};