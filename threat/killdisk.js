var threatdata = {
    "name": "KillDisk",
    "alias": "KillDisk, Win32/KillDisk.NBI, Win32/KillDisk.NBH, Win32/KillDisk.NBD, Win32/KillDisk.NBC, Win32/KillDisk.NBB",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "KillDisk",
        "names": [
            {
                "name": "KillDisk"
            },
            {
                "name": "Win32/KillDisk.NBI"
            },
            {
                "name": "Win32/KillDisk.NBH"
            },
            {
                "name": "Win32/KillDisk.NBD"
            },
            {
                "name": "Win32/KillDisk.NBC"
            },
            {
                "name": "Win32/KillDisk.NBB"
            }
        ],
        "description": "(Trend Micro) The malware has since metamorphosed into a threat used for digital extortion, affecting Windows and Linux platforms. The note accompanying the ransomware versions, like in the case of Petya, was a ruse: Because KillDisk also overwrites and deletes files (and don\u2019t store the encryption keys on disk or online), recovering the scrambled files was out of the question. The new variant we found, however, does not include a ransom note.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/new-killdisk-variant-hits-financial-organizations-in-latin-america/",
            "http://www.welivesecurity.com/2016/12/13/rise-telebots-analyzing-disruptive-killdisk-attacks/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0607/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.killdisk"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:killdisk"
        ],
        "uuid": "b3b552bc-dd11-4722-9d0b-5f00e4707473",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "killdisk",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.youtube.com/watch?v=mrTdSdMMgnk",
            "date": "2022-10-24",
            "organization": "Youtube (Virus Bulletin)",
            "author": "Alexander Adamov",
            "title": "Russian wipers in the cyberwar against Ukraine",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "DesertBlade",
                "DoubleZero",
                "EternalPetya",
                "HermeticWiper",
                "HermeticWizard",
                "INDUSTROYER2",
                "IsaacWiper",
                "KillDisk",
                "PartyTicket",
                "WhisperGate"
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
            "data_url": "https://blog.nviso.eu/2022/02/24/threat-update-ukraine-russia-tensions/",
            "date": "2022-02-24",
            "organization": "nviso",
            "author": "Michel Coene",
            "title": "Threat Update \u2013 Ukraine & Russia conflict",
            "categories": [
                "EternalPetya",
                "GreyEnergy",
                "HermeticWiper",
                "Industroyer",
                "KillDisk",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/iron-viking",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "IRON VIKING",
            "categories": [
                "BlackEnergy",
                "EternalPetya",
                "GreyEnergy",
                "Industroyer",
                "KillDisk",
                "TeleBot",
                "TeleDoor"
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
        },
        {
            "data_url": "https://www.welivesecurity.com/2017/01/05/killdisk-now-targeting-linux-demands-250k-ransom-cant-decrypt",
            "date": "2017-01-05",
            "organization": "ESET Research",
            "author": "Robert Lipovsky",
            "title": "KillDisk now targeting Linux: Demands $250K ransom, but can\u2019t decrypt",
            "categories": [
                "KillDisk",
                "Sandworm"
            ]
        },
        {
            "data_url": "http://www.welivesecurity.com/2016/12/13/rise-telebots-analyzing-disruptive-killdisk-attacks",
            "date": "2016-12-13",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "The rise of TeleBots: Analyzing disruptive KillDisk attacks",
            "categories": [
                "KillDisk",
                "TeleBot",
                "Sandworm"
            ]
        },
        {
            "data_url": "http://www.welivesecurity.com/2016/12/13/rise-telebots-analyzing-disruptive-killdisk-attacks/",
            "date": "2016-12-13",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "The rise of TeleBots: Analyzing disruptive KillDisk attacks",
            "categories": [
                "Credraptor",
                "KillDisk",
                "TeleBot"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "killdisk",
            "procedure_code": "s0607",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0607",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "killdisk has called the windows api to retrieve the hard disk handle and shut down the machine.[103]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1129",
                    "technique_link": "https://attack.mitre.org/techniques/T1129",
                    "technique_name": "shared modules",
                    "technique_description": "adversaries may execute malicious payloads via loading shared modules. the windows module loader can be instructed to load dlls from arbitrary local paths and arbitrary universal naming convention (unc) network paths. this functionality resides in ntdll.dll and is part of the windows native api which is called from functions like createprocess, loadlibrary, etc. of the win32 api.",
                    "procedure_description": "killdisk loads and executes functions from a dll.[13]"
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
                    "procedure_description": "killdisk has attempted to get the access token of a process by calling openprocesstoken. if killdisk gets the access token, then it attempt to modify the token privileges with adjusttokenprivileges.[15]"
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
                    "procedure_description": "killdisk has attempted to get the access token of a process by calling openprocesstoken. if killdisk gets the access token, then it attempt to modify the token privileges with adjusttokenprivileges.[15]"
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
                    "procedure_description": "killdisk deletes application, security, setup, and system windows event logs.[8]"
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
                    "procedure_description": "killdisk has the ability to quit and delete itself.[121]"
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
                    "procedure_description": "killdisk registers as a service under the plug-and-play support name.[40]"
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
                    "procedure_description": "killdisk uses vmprotect to make reverse engineering the malware more difficult.[184]"
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
                    "procedure_description": "killdisk has used the findnextfile command as part of its file deletion process.[165]"
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
                    "procedure_description": "killdisk has called getcurrentprocess.[145]"
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
                    "procedure_description": "killdisk retrieves the hard disk name by calling the createfilea to \\.\\physicaldrive0 api.[191]"
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
                    "procedure_description": "killdisk deletes system files to make the os unbootable. killdisk also targets and deletes files with 35 different file extensions.[19]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1486",
                    "technique_link": "https://attack.mitre.org/techniques/T1486",
                    "technique_name": "data encrypted for impact",
                    "technique_description": "adversaries may encrypt data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources. they can attempt to render stored data inaccessible by encrypting files or data on local and remote drives and withholding access to a decryption key. this may be done in order to extract monetary compensation from a victim in exchange for decryption or a decryption key (ransomware) or to render data permanently inaccessible in cases where the key is not saved or transmitted.",
                    "procedure_description": "killdisk has a ransomware component that encrypts files with an aes key that is also rsa-1028 encrypted.[50]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1561.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1561/002",
                    "technique_name": "disk wipe : disk structure wipe",
                    "technique_description": "adversaries may corrupt or wipe the disk data structures on a hard drive necessary to boot a system; targeting specific critical systems or in large numbers in a network to interrupt availability to system and network resources.",
                    "procedure_description": "killdisk overwrites the first sector of the master boot record with \"0x00\".[16]"
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
                    "procedure_description": "killdisk terminates various processes to get the user to reboot the victim machine.[23]"
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
                    "procedure_description": "killdisk attempts to reboot the machine by terminating specific processes.[11]"
                }
            ]
        }
    ]
};