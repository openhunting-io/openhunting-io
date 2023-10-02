var threatdata = {
    "name": "ObliqueRAT",
    "alias": "ObliqueRAT, Oblique RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Dropper, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "ObliqueRAT",
        "names": [
            {
                "name": "ObliqueRAT"
            },
            {
                "name": "Oblique RAT"
            }
        ],
        "description": "(Talos) Cisco Talos has recently discovered a new campaign distributing a malicious remote access trojan (RAT) family we're calling 'ObliqueRAT.' Cisco Talos also discovered a link between ObliqueRAT and another campaign from December 2019 distributing {{Crimson RAT}} sharing similar maldocs and macros. CrimsonRAT has been known to target diplomatic and government organizations in Southeast Asia.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Dropper",
            "Exfiltration"
        ],
        "information": [
            "https://www.pwc.co.uk/cyber-security/pdf/pwc-cyber-threats-2020-a-year-in-retrospect.pdf",
            "https://securelist.com/transparent-tribe-part-2/98233/",
            "https://www.secrss.com/articles/24995",
            "https://blog.talosintelligence.com/2020/02/obliquerat-hits-victims-via-maldocs.html",
            "https://blog.talosintelligence.com/2021/02/obliquerat-new-campaign.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0644/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.oblique_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:obliquerat"
        ],
        "uuid": "4cd8fd56-3b1e-4e12-90b1-9dd8c4b84793",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "obliquerat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.talosintelligence.com/2022/07/transparent-tribe-targets-education.html",
            "date": "2022-07-13",
            "organization": "Cisco",
            "author": "Nick Biasini",
            "title": "Transparent Tribe begins targeting education sector in latest campaign",
            "categories": [
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/hackers-use-modified-mfa-tool-against-indian-govt-employees/",
            "date": "2022-03-29",
            "organization": "Bleeping Computer",
            "author": "Bill Toulas",
            "title": "Hackers use modified MFA tool against Indian govt employees",
            "categories": [
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/22/a/investigating-apt36-or-earth-karkaddans-attack-chain-and-malware.html",
            "date": "2022-01-24",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "Investigating APT36 or Earth Karkaddan\u2019s Attack Chain and Malware Arsenal",
            "categories": [
                "CapraRAT",
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/a/investigating-apt36-or-earth-karkaddan-attack-chain-and-malware-arsenal/Earth%20Karkaddan%20APT-%20Adversary%20Intelligence%20and%20Monitoring%20Report.pdf",
            "date": "2022-01-24",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "Investigating APT36 or Earth Karkaddan\u2019s Attack Chain and Malware Arsenal",
            "categories": [
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/a/investigating-apt36-or-earth-karkaddan-attack-chain-and-malware-arsenal/IoCs_Investigating%20APT36%20or%20Earth%20Karkaddan%20Attack%20Chain%20and%20Malware%20Arsenal.rtf",
            "date": "2022-01-24",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "Investigating APT36 or Earth Karkaddan\u2019s Attack Chain and Malware Arsenal (IOCs)",
            "categories": [
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://umbrella.cisco.com/blog/cybersecurity-threat-spotlight-backdoors-rats-loaders-evasion-techniques",
            "date": "2021-06-01",
            "organization": "Cisco",
            "author": "Josh Pyorre",
            "title": "Backdoors, RATs, Loaders evasion techniques",
            "categories": [
                "BazarNimrod",
                "GoldMax",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2021/05/transparent-tribe-infra-and-targeting.html",
            "date": "2021-05-13",
            "organization": "Talos",
            "author": "Asheer Malhotra",
            "title": "Transparent Tribe APT expands its Windows malware arsenal",
            "categories": [
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2021/02/obliquerat-new-campaign.html",
            "date": "2021-03-02",
            "organization": "Cisco Talos",
            "author": "Asheer Malhotra",
            "title": "ObliqueRAT returns with new campaign using hijacked websites",
            "categories": [
                "Oblique RAT"
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
            "data_url": "https://blog.talosintelligence.com/2020/12/2020-year-in-malware.html",
            "date": "2020-12-21",
            "organization": "Cisco Talos",
            "author": "JON MUNSHAW",
            "title": "2020: The year in malware",
            "categories": [
                "WolfRAT",
                "Prometei",
                "Poet RAT",
                "Agent Tesla",
                "Astaroth",
                "Ave Maria",
                "CRAT",
                "Emotet",
                "Gozi",
                "IndigoDrop",
                "JhoneRAT",
                "Nanocore RAT",
                "NjRAT",
                "Oblique RAT",
                "SmokeLoader",
                "StrongPity",
                "WastedLocker",
                "Zloader"
            ]
        },
        {
            "data_url": "https://securelist.com/transparent-tribe-part-2/98233/",
            "date": "2020-08-26",
            "organization": "Kaspersky Labs",
            "author": "Giampaolo Dedola",
            "title": "Transparent Tribe: Evolution analysis, part 2",
            "categories": [
                "AhMyth",
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://www.secrss.com/articles/24995",
            "date": "2020-08-25",
            "organization": "Qianxin",
            "author": "Qi'anxin Threat Intelligence",
            "title": "\u5357\u4e9aAPT\u7ec4\u7ec7\u201c\u900f\u660e\u90e8\u843d\u201d\u5728\u79fb\u52a8\u7aef\u4e0a\u4e0e\u5bf9\u624b\u7684\u8f83\u91cf",
            "categories": [
                "AhMyth",
                "Crimson RAT",
                "Oblique RAT"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/02/obliquerat-hits-victims-via-maldocs.html",
            "date": "2020-02-20",
            "organization": "Cisco Talos",
            "author": "Asheer Malhotra",
            "title": "ObliqueRAT: New RAT hits victims' endpoints via malicious documents",
            "categories": [
                "Oblique RAT"
            ]
        }
    ],
    "mitre": [
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
            "procedure_name": "obliquerat",
            "procedure_code": "s0644",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0644",
            "techniques": [
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
                    "procedure_description": "obliquerat has gained execution on targeted systems through luring users to click on links to malicious urls.[66][67]"
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
                    "procedure_description": "obliquerat can gain persistence by a creating a shortcut in the infected user's startup directory.[184]"
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
                    "procedure_description": "obliquerat can gain persistence by a creating a shortcut in the infected user's startup directory.[184]"
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
                    "procedure_description": "obliquerat can hide its payload in bmp images hosted on compromised websites.[16]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "obliquerat can halt execution if it identifies processes belonging to virtual machine software or analysis tools.[33]"
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
                    "procedure_description": "obliquerat has the ability to recursively enumerate files on an infected endpoint.[209]"
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
                    "procedure_description": "obliquerat can discover pluggable/removable drives to extract files from.[30]"
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
                    "procedure_description": "obliquerat can check for blocklisted process names on a compromised host.[183]"
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
                    "procedure_description": "obliquerat has the ability to check for blocklisted computer names on infected endpoints.[254]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1033",
                    "technique_link": "https://attack.mitre.org/techniques/T1033",
                    "technique_name": "system owner/user discovery",
                    "technique_description": "adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. they may do this, for example, by retrieving account usernames or by using os credential dumping. the information may be collected in a number of different ways using other discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. adversaries may use the information from system owner/user discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "obliquerat can check for blocklisted usernames on infected endpoints.[131]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "obliquerat can halt execution if it identifies processes belonging to virtual machine software or analysis tools.[33]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1025",
                    "technique_link": "https://attack.mitre.org/techniques/T1025",
                    "technique_name": "data from removable media",
                    "technique_description": "adversaries may search connected removable media on computers they have compromised to find files of interest. sensitive data can be collected from any removable media (optical disk drive, usb memory, etc.) connected to the compromised system prior to exfiltration. interactive command shells may be in use, and common functionality within cmd may be used to gather information.",
                    "procedure_description": "obliquerat has the ability to extract data from removable devices connected to the endpoint.[19]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1074/001",
                    "technique_name": "data staged : local data staging",
                    "technique_description": "adversaries may stage collected data in a central location or directory on the local system prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "obliquerat can copy specific files, webcam captures, and screenshots to local directories.[69]"
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
                    "procedure_description": "obliquerat can capture a screenshot of the current screen.[115]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1125",
                    "technique_link": "https://attack.mitre.org/techniques/T1125",
                    "technique_name": "video capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., integrated cameras or webcams) or applications (e.g., video call services) to capture video recordings for the purpose of gathering information. images may also be captured from devices or applications, potentially in specified intervals, in lieu of video files.",
                    "procedure_description": "obliquerat can capture images from webcams on compromised hosts.[32]"
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
                    "procedure_description": "obliquerat can break large files of interest into smaller chunks to prepare them for exfiltration.[11]"
                }
            ]
        }
    ]
};