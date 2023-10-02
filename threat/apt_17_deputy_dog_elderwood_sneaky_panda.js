var threatdata = {
    "name": "APT 17, Deputy Dog, Elderwood, Sneaky Panda",
    "alias": "APT 17, Tailgater Team, Elderwood, Elderwood Gang, Sneaky Panda, SIG22, Beijing Group, Bronze Keystone, TG-8153, TEMP.Avengers, Dogfish, Deputy Dog, ATK 2",
    "category": "APT",
    "type": "-",
    "modified": "2022-12-29",
    "all_data": {
        "actor": "APT 17, Deputy Dog, Elderwood, Sneaky Panda",
        "names": [
            {
                "name": "APT 17",
                "name-giver": "Mandiant"
            },
            {
                "name": "Tailgater Team",
                "name-giver": "Symantec"
            },
            {
                "name": "Elderwood",
                "name-giver": "Symantec"
            },
            {
                "name": "Elderwood Gang",
                "name-giver": "Symantec"
            },
            {
                "name": "Sneaky Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "SIG22",
                "name-giver": "NSA"
            },
            {
                "name": "Beijing Group",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Bronze Keystone",
                "name-giver": "SecureWorks"
            },
            {
                "name": "TG-8153",
                "name-giver": "SecureWorks"
            },
            {
                "name": "TEMP.Avengers",
                "name-giver": "FireEye"
            },
            {
                "name": "Dogfish",
                "name-giver": "iDefense"
            },
            {
                "name": "Deputy Dog",
                "name-giver": "iDefense"
            },
            {
                "name": "ATK 2",
                "name-giver": "Thales"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored, Jinan bureau of the Chinese Ministry of State Security",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2009",
        "description": "(Symantec) In 2009, Google was attacked by a group using the Hydraq (Aurora) Trojan horse. Symantec has monitored this group\u2019s activities for the last three years as they have consistently targeted a number of industries. Interesting highlights in their method of operations include: the use of seemingly an unlimited number of zero-day exploits, attacks on supply chain manufacturers who service the target organization, and a shift to \u201cwatering hole\u201d attacks (compromising certain websites likely to be visited by the target organization). The targeted industry sectors include, but are not restricted to; defense, various defense supply chain manufacturers, human rights and non-governmental organizations (NGOs), and IT service providers. These attackers are systematic and re-use components of an infrastructure we have termed the \u201cElderwood platform\u201d. The name \u201cElderwood\u201d comes from a source code variable used by the attackers. This attack platform enables them to quickly deploy zero-day exploits. Attacks are deployed through spear phishing emails and also, increasingly, through Web injections in watering hole attacks.\n\nIt is likely the attackers have gained access to the source code for some widely used applications, or have thoroughly reverse-engineered the compiled applications in order to discover these vulnerabilities. The vulnerabilities are used as needed, often within close succession of each other if exposure of any of the vulnerabilities is imminent. The scale of the attacks, in terms of the number of victims and the duration of the attacks, are another indication of the resources available to the attackers. Victims are attacked, not for petty crime or theft, but for the wholesale gathering of intelligence and intellectual property. The resources required to identify and acquire useful information\u2014let alone analyze that information\u2014could only be provided by a large criminal organization, attackers supported by a nation state, or a nation state itself.\n\nThis group appears to be closely associated with {{Hidden Lynx, Aurora Panda}} and has infrastructure overlap with {{RedAlpha}}.\n\nCould also be related to {{Axiom, Group 72}}.",
        "observed-sectors": [
            "Defense",
            "Education",
            "Energy",
            "Financial",
            "Government",
            "High-Tech",
            "IT",
            "Media",
            "Mining",
            "NGOs",
            "lawyers"
        ],
        "observed-countries": [
            "Belgium",
            "China",
            "Germany",
            "Indonesia",
            "Italy",
            "Japan",
            "Netherlands",
            "Switzerland",
            "Russia",
            "UK",
            "USA"
        ],
        "tools": [
            "9002 RAT",
            "BlackCoffee",
            "Briba",
            "Comfoo",
            "DeputyDog",
            "Gh0st RAT",
            "HiKit",
            "Jumpall",
            "Linfo",
            "Naid",
            "Nerex",
            "Pasam",
            "Poison Ivy",
            "PlugX",
            "Vasport",
            "Wiarp",
            "ZoxRPC",
            "several 0-days for IE"
        ],
        "operations": [
            {
                "date": "2009",
                "activity": "Operation Aurora\nFirst publicly disclosed by Google on January 12, 2010, in a blog post, the attacks began in mid-2009 and continued through December 2009.\nThe attack has been aimed at dozens of other organizations, of which Adobe Systems, Juniper Networks and Rackspace have publicly confirmed that they were targeted. According to media reports, Yahoo, Symantec, Northrop Grumman, Morgan Stanley and Dow Chemical were also among the targets.\nhttps://en.wikipedia.org/wiki/Operation_Aurora\nhttps://googleblog.blogspot.com/2010/01/new-approach-to-china.html"
            },
            {
                "date": "2010-11",
                "activity": "Visitors to Amnesty International's Hong Kong website are being bombarded with a host of lethal exploits, including one that attacks an unpatched vulnerability in Microsoft's Internet Explorer browser, researchers at security firm Websense said.\nhttps://www.theregister.co.uk/2010/11/11/amnesty_international_hosts_ie_exploit/"
            },
            {
                "date": "2012-05",
                "activity": "Amnesty International UK's website was hacked early this week in an assault ultimately geared towards planting malware onto the PCs of visiting surfers.\nhttps://www.theregister.co.uk/2012/05/11/amnesty_malware_rat/"
            },
            {
                "date": "2012-07",
                "activity": "Breach of Bit9\nBit9, a company that provides software and network security services to the U.S. government and at least 30 Fortune 100 firms, has suffered an electronic compromise that cuts to the core of its business: helping clients distinguish known \u201csafe\u201d files from computer viruses and other malicious software.\nhttps://krebsonsecurity.com/tag/bit9-breach/"
            },
            {
                "date": "2013-08",
                "activity": "Operation \u201cDeputyDog\u201d\nTarget: Organizations in Japan\nMethod: Campaign leveraging the then recently announced zero-day CVE-2013-3893.\nhttps://www.fireeye.com/blog/threat-research/2013/09/operation-deputydog-zero-day-cve-2013-3893-attack-against-japanese-targets.html"
            },
            {
                "date": "2013-11",
                "activity": "Operation \u201cEphemeral Hydra\u201d\nMethod: Inserting a zero-day exploit into a strategically important website, known to draw visitors that are likely interested in national and international security policy.\nhttps://www.fireeye.com/blog/threat-research/2013/11/operation-ephemeral-hydra-ie-zero-day-linked-to-deputydog-uses-diskless-method.html"
            },
            {
                "date": "2014 Late",
                "activity": "FireEye Threat Intelligence and Microsoft Threat Intelligence Center discovered a China-based threat group dubbed APT17 using Microsoft\u2019s TechNet blog for its Command-and-Control (CnC) operation.\nhttps://www.fireeye.com/current-threats/apt-groups/rpt-apt17.html"
            },
            {
                "date": "2017-08",
                "activity": "Operation \u201cRAT Cook\u201d\nMethod: Spear-phishing attack using a Game of Thrones lure.\nhttps://www.proofpoint.com/us/threat-insight/post/operation-rat-cook-chinese-apt-actors-use-fake-game-thrones-leaks-lures"
            },
            {
                "date": "2017-09",
                "activity": "Ccleaner supply-chain attack\nTalos recently observed a case where the download servers used by software vendor to distribute a legitimate software package were leveraged to deliver malware to unsuspecting victims. For a period of time, the legitimate signed version of Ccleaner 5.33 being distributed by Avast also contained a multi-stage malware payload that rode on top of the installation of Ccleaner.\nhttps://blog.talosintelligence.com/2017/09/avast-distributes-malware.html"
            }
        ],
        "information": [
            "http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/the-elderwood-project.pdf",
            "https://intrusiontruth.wordpress.com/2019/07/24/apt17-is-run-by-the-jinan-bureau-of-the-chinese-ministry-of-state-security/",
            "https://intezer.com/evidence-aurora-operation-still-active-supply-chain-attack-through-ccleaner/",
            "https://intezer.com/evidence-aurora-operation-still-active-part-2-more-ties-uncovered-between-ccleaner-hack-chinese-hackers-2/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0025/",
            "https://attack.mitre.org/groups/G0066/"
        ],
        "uuid": "58f101e3-5fe8-43d4-8d92-f09987604385",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "apt_17_deputy_dog_elderwood_sneaky_panda",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/sneaky-panda",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Sneaky Panda",
            "categories": [
                "Beijing Group"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0066/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: Elderwood",
            "categories": [
                "Beijing Group"
            ]
        },
        {
            "data_url": "https://www.infopoint-security.de/medien/the-elderwood-project.pdf",
            "date": "2012-09-07",
            "organization": "Symantec",
            "author": "Gavin O'Gorman",
            "title": "The Elderwood Project",
            "categories": [
                "9002 RAT",
                "Beijing Group"
            ]
        },
        {
            "data_url": "https://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/the-elderwood-project.pdf",
            "date": "2012-09-06",
            "organization": "Symantec",
            "author": "Gavin O'Gorman",
            "title": "The Elderwood Project",
            "categories": [
                "Beijing Group"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "elderwood",
            "procedure_code": "g0066",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0066",
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
                    "procedure_description": "elderwood has delivered zero-day exploits and malware to victims by injecting malicious code into specific public web pages visited by targets within a particular sector.[26][27][28]"
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
                    "procedure_description": "elderwood has delivered zero-day exploits and malware to victims via targeted emails containing malicious attachments.[76][77]"
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
                    "procedure_description": "elderwood has delivered zero-day exploits and malware to victims via targeted emails containing a link to malicious content hosted on an uncommon web server.[37][38]"
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
                    "procedure_description": "elderwood has used exploitation of endpoint software, including microsoft internet explorer adobe flash vulnerabilities, to gain execution. they have also used zero-day exploits.[45]"
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
                    "procedure_description": "elderwood has leveraged multiple types of spearphishing in order to attempt to get a user to open links.[28][29]"
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
                    "procedure_description": "elderwood has leveraged multiple types of spearphishing in order to attempt to get a user to open attachments.[77][78]"
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
                    "procedure_description": "elderwood has encrypted documents and malicious executables.[112]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/002",
                    "technique_name": "obfuscated files or information : software packing",
                    "technique_description": "adversaries may perform software packing or virtual machine software protection to conceal their code. software packing is a method of compressing or encrypting an executable. packing an executable changes the file signature in an attempt to avoid signature-based detection. most decompression techniques decompress the executable code in memory. virtual machine software protection translates an executable's original code into a special format that only a special virtual machine can run. a virtual machine is then called to run this code.",
                    "procedure_description": "elderwood has packed malware payloads before delivery to victims.[37]"
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
                    "procedure_description": "the ritsol backdoor trojan used by elderwood can download files onto a compromised host from a remote location.[162]"
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
            "procedure_name": "avenger",
            "procedure_code": "s0473",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0473",
            "techniques": [
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
                    "procedure_description": "avenger has the ability to inject shellcode into svchost.exe.[1]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "avenger has the ability to decrypt files downloaded from c2.[4]"
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
                    "procedure_description": "avenger has the ability to xor encrypt files to be sent to c2.[43]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/003",
                    "technique_name": "obfuscated files or information : steganography",
                    "technique_description": "adversaries may use steganography techniques in order to prevent the detection of hidden information. steganographic techniques can be used to hide data in digital media such as images, audio tracks, video clips, or text files.",
                    "procedure_description": "avenger can extract backdoor malware from downloaded images.[3]"
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
                    "procedure_description": "avenger has the ability to inject shellcode into svchost.exe.[1]"
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
                    "procedure_description": "avenger has the ability to browse files in directories such as program files and the desktop.[25]"
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
                    "procedure_description": "avenger has the ability to use tasklist to identify running processes.[17]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1518/001",
                    "technique_name": "software discovery : security software discovery",
                    "technique_description": "adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. this may include things such as firewall rules and anti-virus. adversaries may use the information from security software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "avenger has the ability to identify installed anti-virus products on a compromised host.[3]"
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
                    "procedure_description": "avenger has the ability to identify the host volume id and the os architecture on a compromised host.[36]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "avenger can identify the domain of the compromised host.[25]"
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
                    "procedure_description": "avenger has the ability to use http in communication with c2.[3]"
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
                    "procedure_description": "avenger has the ability to download files from c2 to a compromised host.[3]"
                }
            ]
        }
    ]
};