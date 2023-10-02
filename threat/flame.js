var threatdata = {
    "name": "Flame",
    "alias": "Flame, Flamer, sKyWIper, Skywiper",
    "category": "Malware",
    "type": "Backdoor, Rootkit, Keylogger, Info stealer, Exfiltration",
    "modified": "2021-12-01",
    "all_data": {
        "tool": "Flame",
        "names": [
            {
                "name": "Flame"
            },
            {
                "name": "Flamer"
            },
            {
                "name": "sKyWIper"
            },
            {
                "name": "Skywiper"
            }
        ],
        "description": "(Wikipedia) Flame, also known as Flamer, sKyWIper, and Skywiper, is modular computer malware discovered in 2012 that attacks computers running the Microsoft Windows operating system. The program is being used for targeted cyber espionage in Middle Eastern countries.\n\nIts discovery was announced on 28 May 2012 by MAHER Center of Iranian National Computer Emergency Response Team (CERT), Kaspersky Lab and CrySyS Lab of the Budapest University of Technology and Economics. The last of these stated in its report that Flame 'is certainly the most sophisticated malware we encountered during our practice; arguably, it is the most complex malware ever found.' Flame can spread to other systems over a local network (LAN). It can record audio, screenshots, keyboard activity and network traffic. The program also records Skype conversations and can turn infected computers into Bluetooth beacons which attempt to download contact information from nearby Bluetooth-enabled devices. This data, along with locally stored documents, is sent on to one of several command and control servers that are scattered around the world. The program then awaits further instructions from these servers.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Rootkit",
            "Keylogger",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://en.wikipedia.org/wiki/Flame_(malware)",
            "https://storage.googleapis.com/chronicle-research/Flame%202.0%20Risen%20from%20the%20Ashes.pdf",
            "https://securelist.com/the-flame-questions-and-answers-51/34344/",
            "https://www.crysys.hu/publications/files/skywiper.pdf",
            "https://www.crysys.hu/publications/files/tedi/ukatemicrysys_territorialdispute.pdf",
            "https://www.symantec.com/connect/blogs/flamer-recipe-bluetoothache"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0143/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.flame"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Flame"
        ],
        "uuid": "f2db51e8-30f4-4e61-a5df-c51fee52e2b4",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "flame",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2021/12/eset_jumping_the_air_gap_wp.pdf",
            "date": "2021-12-01",
            "organization": "ESET Research",
            "author": "Alexis Dorais-Joncas",
            "title": "Jumping the air gap: 15 years of nation\u2011state effort",
            "categories": [
                "Agent.BTZ",
                "Fanny",
                "Flame",
                "Gauss",
                "PlugX",
                "Ramsay",
                "Retro",
                "Stuxnet",
                "USBCulprit",
                "USBferry"
            ]
        },
        {
            "data_url": "https://github.com/juanandresgs/papers/raw/master/Flame%202.0%20Risen%20from%20the%20Ashes.pdf",
            "date": "2019-04-09",
            "organization": "Chronicle Security",
            "author": "Juan Andr\u00e9s Guerrero-Saade",
            "title": "Flame 2.0: Risen from the Ashes",
            "categories": [
                "Flame"
            ]
        },
        {
            "data_url": "https://www.crysys.hu/publications/files/tedi/ukatemicrysys_territorialdispute.pdf",
            "date": "2018-03",
            "organization": "CrySyS Lab",
            "author": "Boldizsar Bencsath",
            "title": "Territorial Dispute \u2013 NSA\u2019s perspective on APT landscape",
            "categories": [
                "9002 RAT",
                "Agent.BTZ",
                "DuQu",
                "EYService",
                "Flame",
                "FlowerShop",
                "Stuxnet",
                "Uroburos"
            ]
        },
        {
            "data_url": "https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=ce2df4da-afe9-4a24-b28c-0fb3ba671d95&CommunityKey=1ecf5f55-9545-44d6-b0f4-4e4a7f5f5e68&tab=librarydocuments",
            "date": "2016-08-08",
            "organization": "Symantec",
            "author": "A L Johnson",
            "title": "Strider: Cyberespionage group turns eye of Sauron on targets",
            "categories": [
                "Flame",
                "Regin",
                "Remsec",
                "ProjectSauron"
            ]
        },
        {
            "data_url": "https://www.crysys.hu/publications/files/skywiper.pdf",
            "date": "2012-05-31",
            "organization": "CrySyS Lab",
            "author": "CrySyS Lab",
            "title": "sKyWIper (a.k.a. Flame a.k.a. Flamer): A complex malware for targeted attacks",
            "categories": [
                "Flame"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/flamer-recipe-bluetoothache",
            "date": "2012-05-31",
            "organization": "Symantec",
            "author": "Security Response",
            "title": "Flamer: A Recipe for Bluetoothache",
            "categories": [
                "Flame"
            ]
        },
        {
            "data_url": "https://securelist.com/the-flame-questions-and-answers-51/34344/",
            "date": "2012-05-28",
            "organization": "Kaspersky Labs",
            "author": "Alexander Gostev",
            "title": "The Flame: Questions and Answers",
            "categories": [
                "Flame"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "flame",
            "procedure_code": "s0143",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0143",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1091",
                    "technique_link": "https://attack.mitre.org/techniques/T1091",
                    "technique_name": "replication through removable media",
                    "technique_description": "adversaries may move onto systems, possibly those on disconnected or air-gapped networks, by copying malware to removable media and taking advantage of autorun features when the media is inserted into a system and executes. in the case of lateral movement, this may occur through modification of executable files stored on removable media or by copying malware and renaming it to look like a legitimate file to trick users into executing it on a separate system. in the case of initial access, this may occur through manual manipulation of the media, modification of systems used to initially format the media, or modification to the media's firmware itself.",
                    "procedure_description": "flame contains modules to infect usb sticks and spread laterally to other windows systems the stick is plugged into using autorun functionality.[15]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/002",
                    "technique_name": "boot or logon autostart execution : authentication package",
                    "technique_description": "adversaries may abuse authentication packages to execute dlls when the system boots. windows authentication package dlls are loaded by the local security authority (lsa) process at system start. they provide support for multiple logon processes and multiple security protocols to the operating system.",
                    "procedure_description": "flame can use windows authentication packages for persistence.[2]"
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
                    "procedure_description": "flame can create backdoor accounts with login \"helpassistant\" on domain connected systems if appropriate rights are available.[9][10]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/002",
                    "technique_name": "boot or logon autostart execution : authentication package",
                    "technique_description": "adversaries may abuse authentication packages to execute dlls when the system boots. windows authentication package dlls are loaded by the local security authority (lsa) process at system start. they provide support for multiple logon processes and multiple security protocols to the operating system.",
                    "procedure_description": "flame can use windows authentication packages for persistence.[2]"
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
                    "procedure_description": "rundll32.exe is used as a way of executing flame at the command-line.[46]"
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
                    "procedure_description": "flame identifies security software such as antivirus through the security module.[42][43]"
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
                    "procedure_description": "flame can use ms10-061 to exploit a print spooler vulnerability in a remote system with a shared printer in order to move laterally.[18][19]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1091",
                    "technique_link": "https://attack.mitre.org/techniques/T1091",
                    "technique_name": "replication through removable media",
                    "technique_description": "adversaries may move onto systems, possibly those on disconnected or air-gapped networks, by copying malware to removable media and taking advantage of autorun features when the media is inserted into a system and executes. in the case of lateral movement, this may occur through modification of executable files stored on removable media or by copying malware and renaming it to look like a legitimate file to trick users into executing it on a separate system. in the case of initial access, this may occur through manual manipulation of the media, modification of systems used to initially format the media, or modification to the media's firmware itself.",
                    "procedure_description": "flame contains modules to infect usb sticks and spread laterally to other windows systems the stick is plugged into using autorun functionality.[15]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1123",
                    "technique_link": "https://attack.mitre.org/techniques/T1123",
                    "technique_name": "audio capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., microphones and webcams) or applications (e.g., voice and video call services) to capture audio recordings for the purpose of listening into sensitive conversations to gather information.",
                    "procedure_description": "flame can record audio using any existing hardware recording devices.[12][13]"
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
                    "procedure_description": "flame can take regular screenshots when certain applications are open that are sent to the command and control server.[63]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1011.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1011/001",
                    "technique_name": "exfiltration over other network medium : exfiltration over bluetooth",
                    "technique_description": "adversaries may attempt to exfiltrate data over bluetooth rather than the command and control channel. if the command and control network is a wired internet connection, an adversary may opt to exfiltrate data using a bluetooth communication channel.",
                    "procedure_description": "flame has a module named beetlejuice that contains bluetooth functionality that may be used in different ways, including transmitting encoded information from the infected system over the bluetooth protocol, acting as a bluetooth beacon, and identifying other bluetooth devices in the vicinity.[1]"
                }
            ]
        },
        {
            "procedure_name": "wiper",
            "procedure_code": "s0041",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0041",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1072",
                    "technique_link": "https://attack.mitre.org/techniques/T1072",
                    "technique_name": "software deployment tools",
                    "technique_description": "adversaries may gain access to and use third-party software suites installed within an enterprise network, such as administration, monitoring, and deployment systems, to move laterally through the network. third-party applications and software deployment systems may be in use in the network environment for administration purposes (e.g., sccm, hbss, altiris, etc.).",
                    "procedure_description": "it is believed that a patch management system for an anti-virus product commonly installed among targeted companies was used to distribute the wiper malware.[6]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1072",
                    "technique_link": "https://attack.mitre.org/techniques/T1072",
                    "technique_name": "software deployment tools",
                    "technique_description": "adversaries may gain access to and use third-party software suites installed within an enterprise network, such as administration, monitoring, and deployment systems, to move laterally through the network. third-party applications and software deployment systems may be in use in the network environment for administration purposes (e.g., sccm, hbss, altiris, etc.).",
                    "procedure_description": "it is believed that a patch management system for an anti-virus product commonly installed among targeted companies was used to distribute the wiper malware.[6]"
                }
            ]
        }
    ]
};