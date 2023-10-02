var threatdata = {
    "name": "Tonto Team, HartBeat, Karma Panda",
    "alias": "Tonto Team, HeartBeat, Karma Panda, CactusPete, Bronze Huntley, LoneRanger",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "Tonto Team, HartBeat, Karma Panda",
        "names": [
            {
                "name": "Tonto Team",
                "name-giver": "FireEye"
            },
            {
                "name": "HeartBeat",
                "name-giver": "Trend Micro"
            },
            {
                "name": "Karma Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "CactusPete",
                "name-giver": "Kaspersky"
            },
            {
                "name": "Bronze Huntley",
                "name-giver": "SecureWorks"
            },
            {
                "name": "LoneRanger",
                "name-giver": "?"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored, Shenyang Military Region Technical Reconnaissance Bureau, possibly Unit 65017",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2009",
        "description": "(Trend Micro) The first HeartBeat campaign remote access tool (RAT) component was discovered in June 2012 in a Korean newspaper company network. Further investigation revealed that the campaign has been actively distributing their RAT component to their targets in 2011 and the first half of 2012. Furthermore, we uncovered one malware component that dates back to November 2009. This indicates that the campaign started during that time or earlier.\n\nThe HeartBeat campaign appears to target government organizations and institutions or communities that are in some way related to the South Korean government. Specifically, we were able to identify the following targets:\n\n\u2022 Political parties\n\u2022 Media outfits\n\u2022 A national policy research institute\n\u2022 A military branch of South Korean armed forces\n\u2022 A small business sector organization\n\u2022 Branches of South Korean government\n\nThe profile of their targets suggests that the motive behind the campaign may be politically motivated.\n\n(Kaspersky) The actor has quite likely relied on much the same codebase and implant variants for the past six years. However these have broadened substantially since 2018. The group spear-phishes its targets, deploys Word and Equation Editor exploits and an appropriated/repackaged {{DarkHotel}} VBScript zero-day, delivers modified and compiled unique Mimikatz variants, GSEC and WCE credential stealers, a keylogger, various Escalation of Privilege exploits, various older utilities and an updated set of backdoors, and what appear to be new variants of custom downloader and backdoor modules.",
        "observed-sectors": [
            "Defense",
            "Financial",
            "Government",
            "IT",
            "Media"
        ],
        "observed-countries": [
            "India",
            "Japan",
            "Mongolia",
            "Russia",
            "South Korea",
            "Taiwan",
            "USA",
            "Eastern Europe"
        ],
        "tools": [
            "8.t Dropper",
            "Bioazih",
            "Bisonal",
            "Dexbia",
            "DoubleT",
            "Flapjack",
            "Mimikatz",
            "ShadowPad Winnti",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2009-11",
                "activity": "Operation \u201cBitter Biscuit\u201d\nhttps://asec.ahnlab.com/1078"
            },
            {
                "date": "2017-02",
                "activity": "FireEye's director of cyber-espionage analysis John Hultquist told the Wall Street Journal that FireEye had detected a surge in attacks against South Korean targets from China since February, when South Korea announced it would deploy THAAD in response to North Korean missile tests.\nhttps://arstechnica.com/information-technology/2017/04/researchers-claim-china-trying-to-hack-south-korea-missile-defense-efforts/"
            },
            {
                "date": "2019-03",
                "activity": "CactusPete APT group\u2019s updated Bisonal backdoor\nThe backdoor was used to target financial and military organizations in Eastern Europe\nhttps://securelist.com/cactuspete-apt-groups-updated-bisonal-backdoor/97962/"
            },
            {
                "date": "2019 Late",
                "activity": "At the end of 2019 the group seemed to shift towards a heavier focus on Mongolian and Russian organizations.\nhttps://securelist.com/apt-trends-report-q1-2020/96826/"
            },
            {
                "date": "2019-12",
                "activity": "In this campaign, the CactusPete threat actor used a new method to drop an updated version of the DoubleT backdoor onto the computers.\nhttps://securelist.com/apt-trends-report-q2-2020/97937/"
            },
            {
                "date": "2021-03",
                "activity": "Exchange servers under siege from at least 10 APT groups\nhttps://www.welivesecurity.com/2021/03/10/exchange-servers-under-siege-10-apt-groups/"
            },
            {
                "date": "2022-06",
                "activity": "Nice Try Tonto Team\nhttps://www.group-ib.com/blog/tonto-team/"
            },
            {
                "date": "2023-04",
                "activity": "Tonto Team Using Anti-Malware Related Files for DLL Side-Loading\nhttps://asec.ahnlab.com/en/51746/"
            }
        ],
        "information": [
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp_the-heartbeat-apt-campaign.pdf",
            "https://securelist.com/apt-trends-report-q1-2019/90643/",
            "https://www.fireeye.com/content/dam/fireeye-www/summit/cds-2019/presentations/cds19-executive-s08-achievement-unlocked.pdf",
            "https://blog.talosintelligence.com/2020/03/bisonal-10-years-of-play.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0131/"
        ],
        "uuid": "85b77804-7780-4bd9-9332-f250525122a8",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tonto_team_hartbeat_karma_panda",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2021/03/10/exchange-servers-under-siege-10-apt-groups/",
            "date": "2021-03-10",
            "organization": "ESET Research",
            "author": "Thomas Dupuy",
            "title": "Exchange servers under siege from at least 10 APT groups",
            "categories": [
                "Microcin",
                "MimiKatz",
                "PlugX",
                "Winnti",
                "APT27",
                "APT41",
                "Calypso",
                "Tick",
                "ToddyCat",
                "Tonto Team",
                "Vicious Panda"
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
            "data_url": "https://securelist.com/cactuspete-apt-groups-updated-bisonal-backdoor/97962/",
            "date": "2020-08-13",
            "organization": "Kaspersky Labs",
            "author": "Konstantin Zykov",
            "title": "CactusPete APT group\u2019s updated Bisonal backdoor",
            "categories": [
                "Korlia",
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/content/dam/fireeye-www/summit/cds-2019/presentations/cds19-executive-s08-achievement-unlocked.pdf",
            "date": "2019-11-19",
            "organization": "FireEye",
            "author": "Nalani Fraser",
            "title": "Achievement Unlocked: Chinese Cyber Espionage Evolves to Support Higher Level Missions",
            "categories": [
                "APT1",
                "APT10",
                "APT2",
                "APT26",
                "APT3",
                "APT30",
                "APT41",
                "Naikon",
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://arstechnica.com/information-technology/2017/04/researchers-claim-china-trying-to-hack-south-korea-missile-defense-efforts/",
            "date": "2017-04-21",
            "organization": "Ars Technica",
            "author": "Sean Gallagher",
            "title": "Researchers claim China trying to hack South Korea missile defense efforts",
            "categories": [
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://www.wsj.com/articles/chinas-secret-weapon-in-south-korea-missile-fight-hackers-1492766403?emailToken=JRrydPtyYnqTg9EyZsw31FwuZ7JNEOKCXF7LaW/HM1DLsjnUp6e6wLgph560pnmiTAN/5ssf7moyADPQj2p2Gc+YkL1yi0zhIiUM9M6aj1HTYQ==",
            "date": "2017-04-21",
            "organization": "The Wall Street Journal",
            "author": "Jonathan Cheng",
            "title": "China Hacked South Korea Over Missile Defense, U.S. Firm Says",
            "categories": [
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://www.wsj.com/articles/chinas-secret-weapon-in-south-korea-missile-fight-hackers-1492766403",
            "date": "2017-04-21",
            "organization": "The Wall Street Journal",
            "author": "Jonathan Cheng",
            "title": "China Hacked South Korea Over Missile Defense, U.S. Firm Says",
            "categories": [
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://docs.huihoo.com/rsaconference/usa-2014/anf-t07b-the-art-of-attribution-identifying-and-pursuing-your-cyber-adversaries-final.pdf",
            "date": "2014-02-24",
            "organization": "RSA Conference",
            "author": "Dmitri Alperovitch",
            "title": "The Art of Attribution Identifying and Pursuing your Cyber Adversaries",
            "categories": [
                "ANDROMEDA SPIDER",
                "APT19",
                "DEXTOROUS SPIDER",
                "Silent Chollima",
                "SINGING SPIDER",
                "Tonto Team",
                "TOXIC PANDA",
                "UNION SPIDER"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "tonto team",
            "procedure_code": "g0131",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0131",
            "techniques": [
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
                    "procedure_description": "tonto team has delivered payloads via spearphishing attachments.[227]"
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
                    "procedure_description": "tonto team has used powershell to download additional payloads.[230]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/006",
                    "technique_name": "command and scripting interpreter : python",
                    "technique_description": "adversaries may abuse python commands and scripts for execution. python is a very popular scripting/programming language, with capabilities to perform many functions. python can be executed interactively from the command-line (via the python.exe interpreter) or via scripts (.py) that can be written and distributed to different systems. python code can also be compiled into binary executables.",
                    "procedure_description": "tonto team has used python-based tools for execution.[43]"
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
                    "procedure_description": "tonto team has exploited microsoft vulnerabilities, including cve-2018-0798, cve-2018-8174, cve-2018-0802, cve-2017-11882, cve-2019-9489 cve-2020-8468, and cve-2018-0798 to enable execution of their delivered malicious payloads.[84][85][86][87]"
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
                    "procedure_description": "tonto team has relied on user interaction to open their malicious rtf documents.[238][37]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "tonto team abuses a legitimate and signed microsoft executable to launch a malicious dll.[36]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1505.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1505/003",
                    "technique_name": "server software component : web shell",
                    "technique_description": "adversaries may backdoor web servers with web shells to establish persistent access to systems. a web shell is a web script that is placed on an openly accessible web server to allow an adversary to use the web server as a gateway into a network. a web shell may provide a set of functions to execute or a command-line interface on the system that hosts the web server.",
                    "procedure_description": "tonto team has used a first stage web shell after compromising a vulnerable exchange server.[39]"
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
                    "procedure_description": "tonto team has exploited cve-2019-0803 and ms16-032 to escalate privileges.[35]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "tonto team abuses a legitimate and signed microsoft executable to launch a malicious dll.[36]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "tonto team abuses a legitimate and signed microsoft executable to launch a malicious dll.[36]"
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
                    "procedure_description": "tonto team has used keylogging tools in their operations.[176]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003",
                    "technique_link": "https://attack.mitre.org/techniques/T1003",
                    "technique_name": "os credential dumping",
                    "technique_description": "adversaries may attempt to dump credentials to obtain account login and credential material, normally in the form of a hash or a clear text password, from the operating system and software. credentials can then be used to perform lateral movement and access restricted information.",
                    "procedure_description": "tonto team has used a variety of credential dumping tools.[16]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1135",
                    "technique_link": "https://attack.mitre.org/techniques/T1135",
                    "technique_name": "network share discovery",
                    "technique_description": "adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for collection and to identify potential systems of interest for lateral movement. networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.",
                    "procedure_description": "tonto team has used tools such as nbtscan to enumerate network shares.[55]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/001",
                    "technique_name": "permission groups discovery : local groups",
                    "technique_description": "adversaries may attempt to find local system groups and permission settings. the knowledge of local system permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as the users found within the local administrators group.",
                    "procedure_description": "tonto team has used the showlocalgroupdetails command to identify administrator, user, and guest accounts on a compromised host.[28]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1210",
                    "technique_link": "https://attack.mitre.org/techniques/T1210",
                    "technique_name": "exploitation of remote services",
                    "technique_description": "adversaries may exploit remote services to gain unauthorized access to internal systems once inside of a network. exploitation of a software vulnerability occurs when an adversary takes advantage of a programming error in a program, service, or within the operating system software or kernel itself to execute adversary-controlled code.\u00a0a common goal for post-compromise exploitation of remote services is for lateral movement to enable access to a remote system.",
                    "procedure_description": "tonto team has used eternalblue exploits for lateral movement.[34]"
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
                    "procedure_description": "tonto team has used keylogging tools in their operations.[176]"
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
                    "procedure_description": "tonto team has downloaded malicious dlls which served as a shadowpad loader.[445]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/002",
                    "technique_name": "proxy : external proxy",
                    "technique_description": "adversaries may use an external proxy to act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, to provide resiliency in the face of connection loss, or to ride over existing trusted communications paths to avoid suspicion.",
                    "procedure_description": "tonto team has routed their traffic through an external server in order to obfuscate their location.[25]"
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