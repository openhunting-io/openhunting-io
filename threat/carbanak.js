var threatdata = {
    "name": "Carbanak",
    "alias": "Carbanak, Anunak, Sekur, Sekur RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Carbanak",
        "names": [
            {
                "name": "Carbanak"
            },
            {
                "name": "Anunak"
            },
            {
                "name": "Sekur"
            },
            {
                "name": "Sekur RAT"
            }
        ],
        "description": "(Kaspersky) Carbanak is a backdoor used by the attackers to compromise the victim's machine once the exploit, either in the spear phishing email or exploit kit, successfully executes its payload. This section provides a functional analysis of Carbanak\u2019s capabilities.\n\nCarbanak copies itself into \u201c%system32%\\com\u201d with the name \u201csvchost.exe\u201d with the file attributes: system, hidden and read-only. The original file created by the exploit payload is then deleted.\n\nTo ensure that Carbanak has autorun privileges the malware creates a new service. The naming syntax is \u201c<ServiceName>Sys\u201d where ServiceName is any existing service randomly chosen, with the first character deleted. For example, if the existing service \u0301s name is \u201caspnet\u201d and the visible name is \u201cAsp.net state service\u201d, the service created by the malware would be \u201caspnetSys\u201d with a visible name of \u201cSp.net state service\u201d.\n\nBefore creating the malicious service, Carbanak determines if either the avp.exe or avpui.exe processes (components of Kaspersky Internet Security) is running. If found on the target system, Carbanak will try to exploit a known vulnerability in Windows XP, Windows Server 2003, Windows Vista, Windows Server 2008, Windows 7, Windows 8, and Windows Server 2012, CVE-2013-3660, for local privilege escalation. We believe this is not relevant and that the attackers adapt their tools to the victim \u0301s defenses.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08064518/Carbanak_APT_eng.pdf",
            "https://www.fireeye.com/blog/threat-research/2017/06/behind-the-carbanak-backdoor.html",
            "https://www.fireeye.com/blog/threat-research/2019/04/carbanak-week-part-one-a-rare-occurrence.html",
            "https://www.fox-it.com/en/wp-content/uploads/sites/11/Anunak_APT-against-financial-institutions2.pdf",
            "https://documents.trendmicro.com/assets/white_papers/wp-cashing-in-on-atm-malware.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0030/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.carbanak"
        ],
        "uuid": "d4ee0ad6-9ba5-48cb-a289-f29476852d0e",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "carbanak",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.prodaft.com/m/reports/FIN7_TLPCLEAR.pdf",
            "date": "2022-12-22",
            "organization": "PRODAFT",
            "author": "PRODAFT",
            "title": "Fin7 Unveiled: A deep dive into notorious cybercrime gang",
            "categories": [
                "Carbanak"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/malware/2022/07/30/malware-av-evasion-8.html",
            "date": "2022-07-30",
            "organization": "",
            "author": "cocomelonc",
            "title": "Malware AV evasion - part 8. Encode payload via Z85",
            "categories": [
                "Agent Tesla",
                "Carbanak",
                "Carberp",
                "Cardinal RAT",
                "Cobalt Strike",
                "donut_injector"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/mulelibra/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Mule Libra",
            "categories": [
                "Carbanak",
                "Cobalt"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2022/05/09/malware-pers-4.html",
            "date": "2022-05-09",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "Malware development: persistence - part 4. Windows services. Simple C++ example.",
            "categories": [
                "Anchor",
                "AppleJeus",
                "Attor",
                "BBSRAT",
                "BlackEnergy",
                "Carbanak",
                "Cobalt Strike",
                "DuQu"
            ]
        },
        {
            "data_url": "https://cert.ssi.gouv.fr/uploads/20220427_NP_TLPWHITE_ANSSI_FIN7.pdf",
            "date": "2022-04-27",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "LE GROUPE CYBERCRIMINEL FIN7",
            "categories": [
                "Bateleur",
                "BELLHOP",
                "Griffon",
                "SQLRat",
                "POWERSOURCE",
                "Andromeda",
                "BABYMETAL",
                "BlackCat",
                "BlackMatter",
                "BOOSTWRITE",
                "Carbanak",
                "Cobalt Strike",
                "DNSMessenger",
                "Dridex",
                "DRIFTPIN",
                "Gameover P2P",
                "MimiKatz",
                "Murofet",
                "Qadars",
                "Ranbyus",
                "SocksBot"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/evolution-of-fin7",
            "date": "2022-04-04",
            "organization": "Mandiant",
            "author": "Bryce Abdo",
            "title": "FIN7 Power Hour: Adversary Archaeology and the Evolution of FIN7",
            "categories": [
                "Griffon",
                "BABYMETAL",
                "Carbanak",
                "Cobalt Strike",
                "JSSLoader",
                "Termite"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2021/09/06/simple-malware-av-evasion-2.html",
            "date": "2021-09-06",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "AV engines evasion for C++ simple malware: part 2",
            "categories": [
                "Agent Tesla",
                "Amadey",
                "Anchor",
                "AnchorMTea",
                "Carbanak",
                "Carberp",
                "Cardinal RAT",
                "Felixroot",
                "Konni",
                "Loki Password Stealer (PWS)",
                "Maze"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-embraces-big-game-hunting-part-1/",
            "date": "2021-08-30",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "CARBON SPIDER Embraces Big Game Hunting, Part 1",
            "categories": [
                "Bateleur",
                "Griffon",
                "Carbanak",
                "DarkSide",
                "JSSLoader",
                "PILLOWMINT",
                "REvil"
            ]
        },
        {
            "data_url": "https://therecord.media/two-carbanak-hackers-sentenced-to-eight-years-in-prison-in-kazakhstan/",
            "date": "2021-06-02",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Two Carbanak hackers sentenced to eight years in prison in Kazakhstan",
            "categories": [
                "Carbanak"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-sprite-spider-target-esxi-servers-with-ransomware/?utm_campaign=blog&utm_medium=soc&utm_source=twtr&utm_content=sprout",
            "date": "2021-02-26",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "Hypervisor Jackpotting: CARBON SPIDER and SPRITE SPIDER Target ESXi Servers With Ransomware to Maximize Impact",
            "categories": [
                "DarkSide",
                "RansomEXX",
                "Griffon",
                "Carbanak",
                "Cobalt Strike",
                "DarkSide",
                "IcedID",
                "MimiKatz",
                "PyXie",
                "RansomEXX",
                "REvil"
            ]
        },
        {
            "data_url": "https://blog.truesec.com/2020/12/22/collaboration-between-fin7-and-the-ryuk-group-a-truesec-investigation/",
            "date": "2020-12-22",
            "organization": "TRUESEC",
            "author": "Mattias W\u00e5hl\u00e9n",
            "title": "Collaboration between FIN7 and the RYUK group, a Truesec Investigation",
            "categories": [
                "Carbanak",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://threatintel.blog/OPBlueRaven-Part2/",
            "date": "2020-09-01",
            "organization": "PRODAFT Threat Intelligence",
            "author": "PRODAFT",
            "title": "OpBlueRaven: Unveiling Fin7/Carbanak - Part II : BadUSB Attacks",
            "categories": [
                "Bella",
                "Carbanak",
                "FIN7"
            ]
        },
        {
            "data_url": "https://threatintel.blog/OPBlueRaven-Part1/",
            "date": "2020-07-31",
            "organization": "PRODAFT Threat Intelligence",
            "author": "PRODAFT",
            "title": "OpBlueRaven: Unveiling Fin7/Carbanak - Part 1 : Tirion",
            "categories": [
                "Carbanak",
                "REvil",
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.brighttalk.com/webcast/15591/382191/fin7-apt-how-billion-dollar-crime-ring-remains-active-after-leaders-arrest",
            "date": "2020-03-23",
            "organization": "Kaspersky Labs",
            "author": "F\u00e9lix Aime",
            "title": "Fin7 APT: how billion dollar crime ring remains active after leaders\u2019 arrest",
            "categories": [
                "Carbanak"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/uploads/2020/02/13/cb78386a082f465f259b37dae5df4884.pdf",
            "date": "2020-02-13",
            "organization": "Qianxin",
            "author": "Qi Anxin Threat Intelligence Center",
            "title": "APT Report 2019",
            "categories": [
                "Chrysaor",
                "Exodus",
                "Dacls",
                "VPNFilter",
                "DNSRat",
                "Griffon",
                "KopiLuwak",
                "More_eggs",
                "SQLRat",
                "AppleJeus",
                "BONDUPDATER",
                "Agent.BTZ",
                "Anchor",
                "AndroMut",
                "AppleJeus",
                "BOOSTWRITE",
                "Brambul",
                "Carbanak",
                "Cobalt Strike",
                "Dacls",
                "DistTrack",
                "DNSpionage",
                "Dtrack",
                "ELECTRICFISH",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Grateful POS",
                "HOPLIGHT",
                "Imminent Monitor RAT",
                "jason",
                "Joanap",
                "KerrDown",
                "KEYMARBLE",
                "Lambert",
                "LightNeuron",
                "LoJax",
                "MiniDuke",
                "PolyglotDuke",
                "PowerRatankba",
                "Rising Sun",
                "SDBbot",
                "ServHelper",
                "Snatch",
                "Stuxnet",
                "TinyMet",
                "tRat",
                "TrickBot",
                "Volgmer",
                "X-Agent",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-niagara",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD NIAGARA",
            "categories": [
                "Bateleur",
                "Griffon",
                "Carbanak",
                "Cobalt Strike",
                "DRIFTPIN",
                "TinyMet",
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2019/04/carbanak-week-part-three-behind-the-backdoor.html",
            "date": "2019-04-24",
            "organization": "FireEye",
            "author": "James T. Bennett",
            "title": "CARBANAK Week Part Three: Behind the CARBANAK Backdoor",
            "categories": [
                "Carbanak"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2019/04/carbanak-week-part-one-a-rare-occurrence.html",
            "date": "2019-04-22",
            "organization": "FireEye",
            "author": "Michael Bailey",
            "title": "CARBANAK Week Part One: A Rare Occurrence",
            "categories": [
                "Carbanak"
            ]
        },
        {
            "data_url": "https://summit.fireeye.com/content/dam/fireeye-www/summit/cds-2018/presentations/cds18-technical-s05-att&cking-fin7.pdf",
            "date": "2018-10-01",
            "organization": "FireEye",
            "author": "Regina Elwell",
            "title": "ATT&CKing FIN7",
            "categories": [
                "Bateleur",
                "BELLHOP",
                "Griffon",
                "ANTAK",
                "POWERPIPE",
                "POWERSOURCE",
                "HALFBAKED",
                "BABYMETAL",
                "Carbanak",
                "Cobalt Strike",
                "DNSMessenger",
                "DRIFTPIN",
                "PILLOWMINT",
                "SocksBot"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/06/behind-the-carbanak-backdoor.html",
            "date": "2017-06-12",
            "organization": "FireEye",
            "author": "Barry Vengerik",
            "title": "Behind the CARBANAK Backdoor",
            "categories": [
                "Carbanak",
                "DRIFTPIN"
            ]
        },
        {
            "data_url": "https://app.box.com/s/p7qzcury97tuwk26694uutujwqmwqyhe",
            "date": "2015-02",
            "organization": "Kaspersky SAS",
            "author": "GReAT",
            "title": "Carbanak APT: The Great Bank Robbery",
            "categories": [
                "Carbanak",
                "FIN7"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "carbanak",
            "procedure_code": "g0008",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0008",
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
                    "procedure_description": "carbanak has obtained and used open-source tools such as psexec and mimikatz.[33]"
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
                    "procedure_description": "carbanak actors used legitimate credentials of banking employees to perform operations that sent them millions of dollars.[16]"
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
                    "procedure_description": "carbanak has a command to create a reverse shell.[61]"
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
                    "procedure_description": "carbanak stores a configuration files in the startup directory to automatically execute commands in order to persist across reboots.[52]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1136.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1136/001",
                    "technique_name": "create account : local account",
                    "technique_description": "adversaries may create a local account to maintain access to victim systems. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service. with a sufficient level of access, the net user /add command can be used to create a local account. on macos systems the dscl -create command can be used to create a local account. local accounts may also be added to network devices, often via common network device cli commands such as username.",
                    "procedure_description": "carbanak can create a windows account.[6]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "carbanak malware installs itself as a service to provide persistence and system privileges.[30]"
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
                    "procedure_description": "carbanak actors used legitimate credentials of banking employees to perform operations that sent them millions of dollars.[16]"
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
                    "procedure_description": "carbanak stores a configuration files in the startup directory to automatically execute commands in order to persist across reboots.[52]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "carbanak malware installs itself as a service to provide persistence and system privileges.[30]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/002",
                    "technique_name": "process injection : portable executable injection",
                    "technique_description": "adversaries may inject portable executables (pe) into processes in order to evade process-based defenses as well as possibly elevate privileges. pe injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "carbanak downloads an executable and injects it directly into a new process.[2]"
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
                    "procedure_description": "carbanak actors used legitimate credentials of banking employees to perform operations that sent them millions of dollars.[16]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/004",
                    "technique_name": "impair defenses : disable or modify system firewall",
                    "technique_description": "adversaries may disable or modify system firewalls in order to bypass controls limiting network usage. changes could be disabling the entire mechanism as well as adding, deleting, or modifying particular rules. this can be done numerous ways depending on the operating system, including via command-line, editing windows registry keys, and windows control panel.",
                    "procedure_description": "carbanak may use netsh to add local firewall rule exceptions.[5]"
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
                    "procedure_description": "carbanak has a command to delete files.[36]"
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
                    "procedure_description": "carbanak has copied legitimate service names to use for malicious services.[17]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "carbanak has named malware \"svchost.exe,\" which is the name of the windows shared service host program.[35]"
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
                    "procedure_description": "carbanak encrypts strings to make analysis more difficult.[69]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/002",
                    "technique_name": "process injection : portable executable injection",
                    "technique_description": "adversaries may inject portable executables (pe) into processes in order to evade process-based defenses as well as possibly elevate privileges. pe injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "carbanak downloads an executable and injects it directly into a new process.[2]"
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
                    "procedure_description": "carbanak installs vnc server software that executes through rundll32.[30]"
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
                    "procedure_description": "carbanak actors used legitimate credentials of banking employees to perform operations that sent them millions of dollars.[16]"
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
                    "procedure_description": "carbanak logs key strokes for configured processes and sends them back to the c2 server.[33][34]"
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
                    "procedure_description": "carbanak obtains windows logon password details.[8]"
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
                    "procedure_description": "carbanak lists running processes.[51]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1012",
                    "technique_link": "https://attack.mitre.org/techniques/T1012",
                    "technique_name": "query registry",
                    "technique_description": "adversaries may interact with the windows registry to gather information about the system, configuration, and installed software.",
                    "procedure_description": "carbanak checks the registry key hkcu\\software\\microsoft\\windows\\currentversion\\internet settings for proxy configurations information.[18]"
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
                    "procedure_description": "carbanak enables concurrent remote desktop protocol (rdp) sessions.[14]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1114.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1114/001",
                    "technique_name": "email collection : local email collection",
                    "technique_description": "adversaries may target user email on local systems to collect sensitive information. files containing email data can be acquired from a user\u2019s local system, such as outlook storage or cache files.",
                    "procedure_description": "carbanak searches recursively for outlook personal storage tables (pst) files within user directories and sends them back to the c2 server.[4]"
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
                    "procedure_description": "carbanak logs key strokes for configured processes and sends them back to the c2 server.[33][34]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "carbanak performs desktop video recording and captures screenshots of the desktop and sends it to the c2 server.[32]"
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
                    "procedure_description": "the carbanak malware communicates to its command server using http with an encrypted payload.[54]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1132/001",
                    "technique_name": "data encoding : standard encoding",
                    "technique_description": "adversaries may encode data with a standard data encoding system to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a standard data encoding system that adheres to existing protocol specifications. common data encoding schemes include ascii, unicode, hexadecimal, base64, and mime. some data encoding systems may also result in data compression, such as gzip.",
                    "procedure_description": "carbanak encodes the message body of http traffic with base64.[18][19]"
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
                    "procedure_description": "carbanak encrypts the message body of http traffic with rc2 (in cbc mode). carbanak also uses xor with random keys for its communications.[23][24]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1219",
                    "technique_link": "https://attack.mitre.org/techniques/T1219",
                    "technique_name": "remote access software",
                    "technique_description": "an adversary may use legitimate desktop support and remote access software, such as team viewer, anydesk, go2assist, logmein, ammyyadmin, etc, to establish an interactive command and control channel to target systems within networks. these services are commonly used as legitimate technical support software, and may be allowed by application control within a target environment. remote access tools like vnc, ammyy, and teamviewer are used frequently when compared with other legitimate software commonly used by adversaries.",
                    "procedure_description": "carbanak has a plugin for vnc and ammyy admin tool.[7]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1219",
                    "technique_link": "https://attack.mitre.org/techniques/T1219",
                    "technique_name": "remote access software",
                    "technique_description": "an adversary may use legitimate desktop support and remote access software, such as team viewer, anydesk, go2assist, logmein, ammyyadmin, etc, to establish an interactive command and control channel to target systems within networks. these services are commonly used as legitimate technical support software, and may be allowed by application control within a target environment. remote access tools like vnc, ammyy, and teamviewer are used frequently when compared with other legitimate software commonly used by adversaries.",
                    "procedure_description": "carbanak used legitimate programs such as ammyyadmin and team viewer for remote interactive c2 to target systems.[8]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/002",
                    "technique_name": "web service : bidirectional communication",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for sending commands to and receiving output from a compromised system over the web service channel. compromised systems may leverage popular websites and social media to host command and control (c2) instructions. those infected systems can then send the output from those commands back over that web service channel. the return traffic may occur in a variety of ways, depending on the web service being utilized. for example, the return traffic may take the form of the compromised system posting a comment on a forum, issuing a pull request to development project, updating a document hosted on a web service, or by sending a tweet.",
                    "procedure_description": "carbanak has used a vbscript named \"ggldr\" that uses google apps script, sheets, and forms services for c2.[15]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1030",
                    "technique_link": "https://attack.mitre.org/techniques/T1030",
                    "technique_name": "data transfer size limits",
                    "technique_description": "an adversary may exfiltrate data in fixed size chunks instead of whole files or limit packet sizes below certain thresholds. this approach may be used to avoid triggering network data transfer threshold alerts.",
                    "procedure_description": "carbanak exfiltrates data in compressed chunks if a message is larger than 4096 bytes .[4]"
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