var threatdata = {
    "name": "Olympic Destroyer",
    "alias": "Olympic Destroyer, SOURGRAPE",
    "category": "Malware",
    "type": "Credential stealer, Wiper, Worm, Remote command",
    "modified": "2022-08-13",
    "all_data": {
        "tool": "Olympic Destroyer",
        "names": [
            {
                "name": "Olympic Destroyer"
            },
            {
                "name": "SOURGRAPE"
            }
        ],
        "description": "(Kaspersky) The main malware module is a network worm that consists of multiple components, including a legitimate {{PsExec}} tool from {{SysInternals}}\u2019 suite, a few credential stealer modules and a wiper. From a technical perspective, the purpose of the malware is to deliver and start the wiper payload which attempts to destroy files on the remote network shares over the next 60 minutes. Meanwhile, the main module collects user passwords from browser and Windows storage and crafts a new generation of the worm that contains old and freshly collected compromised credentials. The new generation of the worm is pushed to accessible local network computers and starts using the PsExec tool, leveraging the collected credentials and current user privileges.\n\nOnce the wiper has run for 60 minutes it cleans Windows event logs, resets backups, deletes shadow copies from the file system, disables the recovery item in the Windows boot menu, disables all the services on the system and reboots the computer. Those files on the network shares that it managed to wipe within 60 minutes remain destroyed. The malware doesn\u2019t use any persistence and even contains protection (also a killswitch) against recurring reinfection. Incidentally, only 1MB of the remote files are fully overwritten with zeroes; larger files were wiped with just 1K of zeroes in the header. The local files are not destroyed and the worm doesn\u2019t wipe itself or its components.",
        "category": "Malware",
        "type": [
            "Credential stealer",
            "Wiper",
            "Worm",
            "Remote command"
        ],
        "information": [
            "https://securelist.com/olympicdestroyer-is-here-to-trick-the-industry/84295/",
            "http://blog.talosintelligence.com/2018/02/olympic-destroyer.html",
            "https://www.lastline.com/labsblog/olympic-destroyer-south-korea/",
            "https://securelist.com/the-devils-in-the-rich-header/84348/",
            "https://cyber.wtf/2018/03/28/dissecting-olympic-destroyer-a-walk-through/",
            "https://securelist.com/olympic-destroyer-is-still-alive/86169/",
            "http://blog.talosintelligence.com/2018/02/who-wasnt-responsible-for-olympic.html",
            "https://www.lastline.com/labsblog/attribution-from-russia-with-code/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0365/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.olympic_destroyer"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Olympic%20Destroyer"
        ],
        "uuid": "0662a96f-61af-4f1c-b978-9f42d155cf0c",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "olympic_destroyer",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.youtube.com/watch?v=rjA0Vf75cYk",
            "date": "2022-08-13",
            "organization": "YoutTube (Blue Team Village)",
            "author": "Seongsu Park",
            "title": "Attribution and Bias: My terrible mistakes in threat intelligence attribution",
            "categories": [
                "AppleJeus",
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/the-anatomy-of-wiper-malware-part-1/",
            "date": "2022-08-12",
            "organization": "CrowdStrike",
            "author": "Ioan Iacob",
            "title": "The Anatomy of Wiper Malware, Part 1: Common Techniques",
            "categories": [
                "Apostle",
                "CaddyWiper",
                "DEADWOOD",
                "DistTrack",
                "DoubleZero",
                "DUSTMAN",
                "HermeticWiper",
                "IsaacWiper",
                "IsraBye",
                "KillDisk",
                "Meteor",
                "Olympic Destroyer",
                "Ordinypt",
                "Petya",
                "Sierra(Alfa,Bravo, ...)",
                "StoneDrill",
                "WhisperGate",
                "ZeroCleare"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/the-increasing-wiper-malware-threat",
            "date": "2022-04-28",
            "organization": "Fortinet",
            "author": "Gergely Revay",
            "title": "An Overview of the Increasing Wiper Malware Threat",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "DistTrack",
                "DoubleZero",
                "EternalPetya",
                "HermeticWiper",
                "IsaacWiper",
                "Olympic Destroyer",
                "Ordinypt",
                "WhisperGate",
                "ZeroCleare"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=1jgdMY12mI8",
            "date": "2020-11-12",
            "organization": "YouTube (Tomorrow Unlocked)",
            "author": "Tomorrow Unlocked",
            "title": "Who hacked the 2018 Winter Games?",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=a4BZ3SZN-CI",
            "date": "2020-11-12",
            "organization": "YouTube (Tomorrow Unlocked)",
            "author": "Tomorrow Unlocked",
            "title": "They wanted us to point the finger in the wrong direction!",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=wCv9SiSA7Sw",
            "date": "2020-11-12",
            "organization": "YouTube (Tomorrow Unlocked)",
            "author": "Tomorrow Unlocked",
            "title": "Those hackers wanted to be found!",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://www.riskint.blog/post/revisited-fancy-bear-s-new-faces-and-sandworms-too",
            "date": "2020-10-19",
            "organization": "Riskint Blog",
            "author": "Curtis",
            "title": "Revisited: Fancy Bear's New Faces...and Sandworms' too",
            "categories": [
                "BlackEnergy",
                "EternalPetya",
                "Industroyer",
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://www.wired.com/story/us-indicts-sandworm-hackers-russia-cyberwar-unit/",
            "date": "2020-10-19",
            "organization": "Wired",
            "author": "Andy Greenberg",
            "title": "US Indicts Sandworm, Russia's Most Destructive Cyberwar Unit",
            "categories": [
                "EternalPetya",
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q2-2020/97937/",
            "date": "2020-07-29",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2020",
            "categories": [
                "PhantomLance",
                "Dacls",
                "Penquin Turla",
                "elf.wellmess",
                "AppleJeus",
                "Dacls",
                "AcidBox",
                "Cobalt Strike",
                "Dacls",
                "EternalPetya",
                "Godlike12",
                "Olympic Destroyer",
                "PlugX",
                "shadowhammer",
                "ShadowPad",
                "Sinowal",
                "VHD Ransomware",
                "Volgmer",
                "WellMess",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://www.wired.com/story/untold-story-2018-olympics-destroyer-cyberattack/",
            "date": "2019-10-17",
            "organization": "Wired",
            "author": "Andy Greenberg",
            "title": "The Untold Story of the 2018 Olympics Cyberattack, the Most Deceptive Hack in History",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q2-2019/91897/",
            "date": "2019-08-01",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2019",
            "categories": [
                "ZooPark",
                "magecart",
                "POWERSTATS",
                "Chaperone",
                "COMpfun",
                "EternalPetya",
                "FinFisher RAT",
                "HawkEye Keylogger",
                "HOPLIGHT",
                "Microcin",
                "NjRAT",
                "Olympic Destroyer",
                "PLEAD",
                "RokRAT",
                "Triton",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://enterprise.verizon.com/resources/reports/2019-data-breach-investigations-report.pdf",
            "date": "2019-05-08",
            "organization": "Verizon Communications Inc.",
            "author": "Verizon Communications Inc.",
            "title": "2019 Data Breach Investigations Report",
            "categories": [
                "BlackEnergy",
                "Cobalt Strike",
                "DanaBot",
                "Gandcrab",
                "GreyEnergy",
                "Mirai",
                "Olympic Destroyer",
                "SamSam"
            ]
        },
        {
            "data_url": "https://securelist.com/olympic-destroyer-is-still-alive/86169/",
            "date": "2018-06-19",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Hades, the actor behind Olympic Destroyer is still alive",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://cyber.wtf/2018/03/28/dissecting-olympic-destroyer-a-walk-through/",
            "date": "2018-03-28",
            "organization": "",
            "author": "Robert Michel",
            "title": "Dissecting Olympic Destroyer \u2013 a walk-through",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://www.lastline.com/labsblog/attribution-from-russia-with-code/",
            "date": "2018-03-09",
            "organization": "Lastline",
            "author": "lastline Labs Team",
            "title": "From Russia(?) with Code",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://securelist.com/olympicdestroyer-is-here-to-trick-the-industry/84295/",
            "date": "2018-03-08",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "OlympicDestroyer is here to trick the industry",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://securelist.com/the-devils-in-the-rich-header/84348/",
            "date": "2018-03-08",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "The devil\u2019s in the Rich header",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2018/02/who-wasnt-responsible-for-olympic.html",
            "date": "2018-02-26",
            "organization": "Cisco Talos",
            "author": "Paul Rascagn\u00e8res",
            "title": "Who Wasn\u2019t Responsible for Olympic Destroyer?",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://www.lastline.com/labsblog/olympic-destroyer-south-korea/",
            "date": "2018-02-21",
            "organization": "Lastline",
            "author": "Alexander Sevtsov",
            "title": "Olympic Destroyer: A new Candidate in South Korea",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://www.mbsd.jp/blog/20180215.html",
            "date": "2018-02-15",
            "organization": "MBSD",
            "author": "Takashi Yoshikawa",
            "title": "Olympic Destroyer",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://www.endgame.com/blog/technical-blog/stopping-olympic-destroyer-new-process-injection-insights",
            "date": "2018-02-13",
            "organization": "Endgame",
            "author": "Devon Kerr",
            "title": "Stopping Olympic Destroyer: New Process Injection Insights",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2018/02/olympic-destroyer.html",
            "date": "2018-02-12",
            "organization": "Cisco",
            "author": "Warren Mercer",
            "title": "Olympic Destroyer Takes Aim At Winter Olympics",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/virusbulletin/2018/10/vb2018-paper-who-wasnt-responsible-olympic-destroyer/",
            "date": "2018",
            "organization": "Virus Bulletin",
            "author": "Paul Rascagn\u00e8res",
            "title": "VB2018 paper: Who wasn\u2019t responsible for Olympic Destroyer",
            "categories": [
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0034",
            "date": "2017-05-31",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Sandworm Team",
            "categories": [
                "CyclopsBlink",
                "Exaramel",
                "BlackEnergy",
                "EternalPetya",
                "Exaramel",
                "GreyEnergy",
                "KillDisk",
                "MimiKatz",
                "Olympic Destroyer",
                "Sandworm"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "olympic destroyer",
            "procedure_code": "s0365",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0365",
            "techniques": [
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
                    "procedure_description": "olympic destroyer utilizes psexec to help propagate itself across a network.[42]"
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
                    "procedure_description": "olympic destroyer uses wmi to help propagate itself across a network.[95]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/001",
                    "technique_name": "indicator removal : clear windows event logs",
                    "technique_description": "adversaries may clear windows event logs to hide the activity of an intrusion. windows event logs are a record of a computer's alerts and notifications. there are three system-defined sources of events: system, application, and security, with five event types: error, warning, information, success audit, and failure audit.",
                    "procedure_description": "olympic destroyer will attempt to clear the system and security event logs using wevtutil.[26]"
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
                    "procedure_description": "olympic destroyer contains a module that tries to obtain stored credentials from web browsers.[1]"
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
                    "procedure_description": "olympic destroyer contains a module that tries to obtain credentials from lsass, similar to mimikatz. these credentials are used with psexec and windows management instrumentation to help the malware propagate itself across a network.[69]"
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
                    "procedure_description": "olympic destroyer will attempt to enumerate mapped network shares to later attempt to wipe all files on those shares.[39]"
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
                    "procedure_description": "olympic destroyer uses windows management instrumentation to enumerate all systems in the network.[65]"
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
                    "procedure_description": "olympic destroyer uses api calls to enumerate the infected system's arp table.[165]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1570",
                    "technique_link": "https://attack.mitre.org/techniques/T1570",
                    "technique_name": "lateral tool transfer",
                    "technique_description": "adversaries may transfer tools or other files between systems in a compromised environment. once brought into the victim environment (i.e. ingress tool transfer) files may then be copied from one system to another to stage adversary tools or other files over the course of an operation. adversaries may copy files between internal victim systems to support lateral movement using inherent file sharing protocols such as file sharing over smb/windows admin shares to connected network shares or with authenticated connections via remote desktop protocol.",
                    "procedure_description": "olympic destroyer attempts to copy itself to remote machines on the network.[23]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/002",
                    "technique_name": "remote services : smb/windows admin shares",
                    "technique_description": "adversaries may use valid accounts to interact with a remote network share using server message block (smb). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "olympic destroyer uses psexec to interact with the admin$ network share to execute commands on remote systems.[42][41]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1485",
                    "technique_link": "https://attack.mitre.org/techniques/T1485",
                    "technique_name": "data destruction",
                    "technique_description": "adversaries may destroy data and files on specific systems or in large numbers on a network to interrupt availability to systems, services, and network resources. data destruction is likely to render stored data irrecoverable by forensic techniques through overwriting files or data on local and remote drives. common operating system file deletion commands such as del and rm often only remove pointers to files without wiping the contents of the files themselves, making the files recoverable by proper forensic methodology. this behavior is distinct from disk content wipe and disk structure wipe because individual files are destroyed rather than sections of a storage disk or the disk's logical structure.",
                    "procedure_description": "olympic destroyer overwrites files locally and on remote shares.[6][23]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1490",
                    "technique_link": "https://attack.mitre.org/techniques/T1490",
                    "technique_name": "inhibit system recovery",
                    "technique_description": "adversaries may delete or remove built-in data and turn off services designed to aid in the recovery of a corrupted system to prevent recovery. this may deny access to available backups and recovery options.",
                    "procedure_description": "olympic destroyer uses the native windows utilities vssadmin, wbadmin, and bcdedit to delete and disable operating system recovery features such as the windows backup catalog and windows automatic repair.[1]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1489",
                    "technique_link": "https://attack.mitre.org/techniques/T1489",
                    "technique_name": "service stop",
                    "technique_description": "adversaries may stop or disable services on a system to render those services unavailable to legitimate users. stopping critical services or processes can inhibit or stop response to an incident or aid in the adversary's overall objectives to cause damage to the environment.",
                    "procedure_description": "olympic destroyer uses the api call changeserviceconfigw to disable all services on the affected system.[1]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1529",
                    "technique_link": "https://attack.mitre.org/techniques/T1529",
                    "technique_name": "system shutdown/reboot",
                    "technique_description": "adversaries may shutdown/reboot systems to interrupt access to, or aid in the destruction of, those systems. operating systems may contain commands to initiate a shutdown/reboot of a machine or network device. in some cases, these commands may also be used to initiate a shutdown/reboot of a remote computer or network device via network device cli (e.g. reload).",
                    "procedure_description": "olympic destroyer will shut down the compromised system after it is done modifying system configuration settings.[4][16]"
                }
            ]
        }
    ]
};