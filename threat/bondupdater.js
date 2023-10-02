var threatdata = {
    "name": "BONDUPDATER",
    "alias": "BONDUPDATER, Poison Frog, Glimpse",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "BONDUPDATER",
        "names": [
            {
                "name": "BONDUPDATER"
            },
            {
                "name": "Poison Frog"
            },
            {
                "name": "Glimpse"
            }
        ],
        "description": "(Palo Alto) BONDUPDATER is a PowerShell-based Trojan first discovered by FireEye in mid-November 2017, when OilRig targeted a different Middle Eastern governmental organization.\n\nThe BONDUPDATER Trojan contains basic backdoor functionality, allowing threat actors to upload and download files, as well as the ability to execute commands. BONDUPDATER, like other OilRig tools, uses DNS tunneling to communicate with its C2 server. During the past month, Unit 42 observed several attacks against a Middle Eastern government leveraging an updated version of the BONDUPDATER malware, which now includes the ability to use TXT records within its DNS tunneling protocol for its C2 communications.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-oilrig-uses-updated-bondupdater-target-middle-eastern-government/",
            "https://www.fireeye.com/blog/threat-research/2017/12/targeted-attack-in-middle-east-by-apt34.html",
            "https://www.boozallen.com/s/insight/blog/dark-labs-discovers-apt34-malware-variants.html",
            "https://unit42.paloaltonetworks.com/dns-tunneling-in-the-wild-overview-of-oilrigs-dns-tunneling/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0360/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.bondupdater"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:BONDUPDATER"
        ],
        "uuid": "5ca10b6c-95cb-4ff3-abb0-afc59394a633",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bondupdater",
    "analysis": null,
    "articles": [
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
            "data_url": "https://www.secureworks.com/research/threat-profiles/cobalt-gypsy",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT GYPSY",
            "categories": [
                "TwoFace",
                "MacDownloader",
                "BONDUPDATER",
                "pupy",
                "Helminth",
                "jason",
                "RGDoor",
                "TinyZbot",
                "OilRig"
            ]
        },
        {
            "data_url": "https://nsfocusglobal.com/apt34-event-analysis-report/",
            "date": "2019-11-09",
            "organization": "NSFOCUS",
            "author": "Mina Hao",
            "title": "APT34 Event Analysis Report",
            "categories": [
                "BONDUPDATER",
                "DNSpionage"
            ]
        },
        {
            "data_url": "https://ironnet.com/blog/chirp-of-the-poisonfrog/",
            "date": "2019-09-18",
            "organization": "IronNet",
            "author": "Jonathan Lepore",
            "title": "Chirp of the PoisonFrog",
            "categories": [
                "BONDUPDATER"
            ]
        },
        {
            "data_url": "https://cyware.com/blog/apt34-the-helix-kitten-cybercriminal-group-loves-to-meow-middle-eastern-and-international-organizations-48ae",
            "date": "2019-08-22",
            "organization": "Cyware",
            "author": "Cyware",
            "title": "APT34: The Helix Kitten Cybercriminal Group Loves to Meow Middle Eastern and International Organizations",
            "categories": [
                "TwoFace",
                "BONDUPDATER",
                "POWRUNER",
                "QUADAGENT",
                "Helminth",
                "ISMAgent",
                "Karkoff",
                "LONGWATCH",
                "OopsIE",
                "PICKPOCKET",
                "RGDoor",
                "VALUEVAULT"
            ]
        },
        {
            "data_url": "https://marcoramilli.com/2019/05/02/apt34-glimpse-project/",
            "date": "2019-05-02",
            "organization": "Marco Ramilli's Blog",
            "author": "Marco Ramilli",
            "title": "APT34: Glimpse project",
            "categories": [
                "BONDUPDATER"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/behind-the-scenes-with-oilrig/",
            "date": "2019-04-30",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Bryan Lee",
            "title": "Behind the Scenes with OilRig",
            "categories": [
                "BONDUPDATER"
            ]
        },
        {
            "data_url": "https://blog.0day.rocks/hacking-back-and-influence-operations-85cd52c1e933",
            "date": "2019-04-19",
            "organization": "Medium",
            "author": "x0rz",
            "title": "Hacking (Back) and Influence Operations",
            "categories": [
                "BONDUPDATER"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/dns-tunneling-in-the-wild-overview-of-oilrigs-dns-tunneling/",
            "date": "2019-04-16",
            "organization": "",
            "author": "Robert Falcone",
            "title": "DNS Tunneling in the Wild: Overview of OilRig\u2019s DNS Tunneling",
            "categories": [
                "BONDUPDATER",
                "QUADAGENT",
                "Alma Communicator",
                "Helminth",
                "ISMAgent"
            ]
        },
        {
            "data_url": "https://www.netscout.com/blog/asert/tunneling-under-sands",
            "date": "2018-09-14",
            "organization": "NetScout",
            "author": "ASERT Team",
            "title": "Tunneling Under the Sands",
            "categories": [
                "BONDUPDATER"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2018/09/unit42-oilrig-uses-updated-bondupdater-target-middle-eastern-government/",
            "date": "2018-09-12",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Kyle Wilhoit",
            "title": "OilRig Uses Updated BONDUPDATER to Target Middle Eastern Government",
            "categories": [
                "BONDUPDATER"
            ]
        },
        {
            "data_url": "https://www.boozallen.com/s/insight/blog/dark-labs-discovers-apt34-malware-variants.html?cid=spo-csatb-2",
            "date": "2018-04-20",
            "organization": "Booz Allen Hamilton",
            "author": "Jay Novak",
            "title": "Researchers Discover New variants of APT34 Malware",
            "categories": [
                "BONDUPDATER",
                "POWRUNER"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/source-code-of-iranian-cyber-espionage-tools-leaked-on-telegram/",
            "date": "2015-09-17",
            "organization": "F-Secure",
            "author": "F-Secure Global",
            "title": "The Dukes: 7 Years Of Russian Cyber-Espionage",
            "categories": [
                "TwoFace",
                "BONDUPDATER",
                "DNSpionage"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "bondupdater",
            "procedure_code": "s0360",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0360",
            "techniques": [
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
                    "procedure_description": "bondupdater is written in powershell.[38][39]"
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
                    "procedure_description": "bondupdater can read batch commands in a file sent from its c2 server and execute them with cmd.exe.[53]"
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
                    "procedure_description": "bondupdater persists using a scheduled task that executes every minute.[31]"
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
                    "procedure_description": "bondupdater persists using a scheduled task that executes every minute.[31]"
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
                    "procedure_description": "bondupdater persists using a scheduled task that executes every minute.[31]"
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
                    "procedure_description": "bondupdater uses -windowstyle hidden to conceal a powershell window that downloads a payload.[12]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/004",
                    "technique_name": "application layer protocol : dns",
                    "technique_description": "adversaries may communicate using the domain name system (dns) application layer protocol to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "bondupdater can use dns and txt records within its dns tunneling protocol for command and control.[9]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1568.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1568/002",
                    "technique_name": "dynamic resolution : domain generation algorithms",
                    "technique_description": "adversaries may make use of domain generation algorithms (dgas) to dynamically identify a destination domain for command and control traffic rather than relying on a list of static ip addresses or domains. this has the advantage of making it much harder for defenders to block, track, or take over the command and control channel, as there potentially could be thousands of domains that malware can check for instructions.",
                    "procedure_description": "bondupdater uses a dga to communicate with command and control servers.[12]"
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
                    "procedure_description": "bondupdater can download or upload files from its c2 server.[73]"
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