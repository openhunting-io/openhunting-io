var threatdata = {
    "name": "OceanLotus",
    "alias": "OceanLotus, OSX_OCEANLOTUS.D, Backdoor.MacOS.OCEANLOTUS.F",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "OceanLotus",
        "names": [
            {
                "name": "OceanLotus"
            },
            {
                "name": "OSX_OCEANLOTUS.D"
            },
            {
                "name": "Backdoor.MacOS.OCEANLOTUS.F"
            }
        ],
        "description": "OSX_OCEANLOTUS.D is a MacOS backdoor that has been used by APT32.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/new-macos-backdoor-linked-to-oceanlotus-found/",
            "https://www.welivesecurity.com/2019/04/09/oceanlotus-macos-malware-update/",
            "https://researchcenter.paloaltonetworks.com/2017/06/unit42-new-improved-macos-backdoor-oceanlotus/",
            "https://www.alienvault.com/blogs/labs-research/oceanlotus-for-os-x-an-application-bundle-pretending-to-be-an-adobe-flash-update"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0352/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.oceanlotus"
        ],
        "uuid": "36d247e3-947d-44ec-aec7-fdb514618882",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "OceanLotus",
            "malware_alias": null,
            "malware": "osx.oceanlotus",
            "last_update": "2022-08-10 11:07:46",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "8128a63bab1a0e5802d9db94eb2ce551",
                        "timestamp": "2022-08-10 11:07:46"
                    },
                    {
                        "value": "10246345345312321313253453547877",
                        "timestamp": "2022-08-10 11:07:46"
                    },
                    {
                        "value": "2cac346547f90788e731189573828c53",
                        "timestamp": "2022-04-29 09:45:01"
                    },
                    {
                        "value": "5b87ef34d174361f35b65c5ee684f1c3",
                        "timestamp": "2021-09-18 05:24:17"
                    },
                    {
                        "value": "9b4c57e61f4df3b546aedf58b2f299cf",
                        "timestamp": "2021-09-18 05:24:17"
                    },
                    {
                        "value": "f8ccff73406a3b6acad964a6376b2ae9",
                        "timestamp": "2021-08-24 10:07:25"
                    },
                    {
                        "value": "943cb4b5ffb69926803d7f9c3dd1bc7c",
                        "timestamp": "2021-09-02 02:42:43"
                    },
                    {
                        "value": "ec44a1e0f5af1c4bd3f308ff1b3fc879",
                        "timestamp": "2021-08-03 07:34:43"
                    },
                    {
                        "value": "204e1ad9eb40cdb8270dc9f4d5dfa0ab",
                        "timestamp": "2021-07-29 23:27:38"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "ed47f3141fd6ac45a8fd8c535ae8814c6cb65bbb86741956ee9a950e74fd11dd",
                        "timestamp": "2022-07-25 11:18:28"
                    },
                    {
                        "value": "8c3eb1bf5f4b150d29883a548be9e1922c1751409f78c49d1560d219390b5422",
                        "timestamp": "2022-07-25 10:51:59"
                    },
                    {
                        "value": "eeafcce05f9b40cb1c95b36dc9ee5eb109d16e289c6f9bae5fb85772a756d76a",
                        "timestamp": "2022-05-30 15:53:01"
                    },
                    {
                        "value": "09b9f43c8c70c9d1e2aded67a6c4b4e743e6e5886a25995abd40ad663fa07238",
                        "timestamp": "2022-05-30 15:52:59"
                    },
                    {
                        "value": "88ea4a892b416cc67d4554a1aa1b7f76c2aa8c31bd3ef2c801f0456c16317cac",
                        "timestamp": "2022-05-30 15:52:57"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-08-10 11:07:46",
    "file_name": "oceanlotus",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://github.com/microsoft/Microsoft-365-Defender-Hunting-Queries",
            "date": "2021-05-20",
            "organization": "Github (microsoft)",
            "author": "Microsoft",
            "title": "Microsoft 365 Defender Hunting Queries for hunting multiple threat actors' TTPs and malwares",
            "categories": [
                "STRRAT",
                "OceanLotus",
                "BabyShark",
                "Elise",
                "Revenge RAT",
                "WastedLocker",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://github.com/AmnestyTech/investigations/tree/master/2021-02-24_vietnam",
            "date": "2021-02-24",
            "organization": "Github (AmnestyTech)",
            "author": "Amnesty International",
            "title": "Overview of Ocean Lotus Samples used to target Vietnamese Human Rights Defenders",
            "categories": [
                "OceanLotus",
                "Cobalt Strike",
                "KerrDown"
            ]
        },
        {
            "data_url": "https://about.fb.com/news/2020/12/taking-action-against-hackers-in-bangladesh-and-vietnam/",
            "date": "2020-12-10",
            "organization": "Facebook",
            "author": "Nathaniel Gleicher",
            "title": "Taking Action Against Hackers in Bangladesh and Vietnam",
            "categories": [
                "OceanLotus"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/apt32-multi-stage-macos-trojan-innovates-on-crimeware-scripting-technique/",
            "date": "2020-12-02",
            "organization": "SentinelOne",
            "author": "Phil Stokes",
            "title": "APT32 Multi-stage macOS Trojan Innovates on Crimeware Scripting Technique",
            "categories": [
                "OceanLotus"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/20/k/new-macos-backdoor-connected-to-oceanlotus-surfaces.html",
            "date": "2020-11-27",
            "organization": "Trend Micro",
            "author": "Luis Magisa",
            "title": "New MacOS Backdoor Connected to OceanLotus Surfaces",
            "categories": [
                "OceanLotus",
                "APT32"
            ]
        },
        {
            "data_url": "https://tradahacking.vn/%C4%91%E1%BB%A3t-r%E1%BB%93i-t%C3%B4i-c%C3%B3-%C4%91%C4%83ng-m%E1%BB%99t-status-xin-d%E1%BA%A1o-tr%C3%AAn-fb-may-qu%C3%A1-c%C5%A9ng-c%C3%B3-v%C3%A0i-b%E1%BA%A1n-nhi%E1%BB%87t-t%C3%ACnh-g%E1%BB%ADi-cho-537b19ee3468",
            "date": "2019-10-08",
            "organization": "",
            "author": "m4n0w4r",
            "title": "M\u1ed9t sample nh\u1eafm v\u00e0o Bank \u1edf VN",
            "categories": [
                "OceanLotus"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2019/04/09/oceanlotus-macos-malware-update/",
            "date": "2019-04-09",
            "organization": "ESET Research",
            "author": "Romain Dumont",
            "title": "OceanLotus: macOS malware update",
            "categories": [
                "OceanLotus"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/new-macos-backdoor-linked-to-oceanlotus-found/",
            "date": "2018-04-04",
            "organization": "Trend Micro",
            "author": "Jarom\u00edr Ho\u0159ej\u0161\u00ed",
            "title": "New MacOS Backdoor Linked to OceanLotus Found",
            "categories": [
                "OceanLotus"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2017/06/unit42-new-improved-macos-backdoor-oceanlotus/",
            "date": "2017-06-22",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Erye Hernandez",
            "title": "The New and Improved macOS Backdoor from OceanLotus",
            "categories": [
                "OceanLotus"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/05/cyber-espionage-apt32.html",
            "date": "2017-05-14",
            "organization": "FireEye",
            "author": "Nick Carr",
            "title": "Cyber Espionage is Alive and Well: APT32 and the Threat to Global Corporations",
            "categories": [
                "OceanLotus",
                "Cuegoe",
                "KOMPROGO",
                "SOUNDBITE",
                "APT32"
            ]
        },
        {
            "data_url": "https://www.alienvault.com/blogs/labs-research/oceanlotus-for-os-x-an-application-bundle-pretending-to-be-an-adobe-flash-update",
            "date": "2016-02-17",
            "organization": "AT&T Cybersecurity",
            "author": "Eddie Lee",
            "title": "OceanLotus for OS X \u2013 an Application Bundle Pretending to be an Adobe Flash Update",
            "categories": [
                "OceanLotus"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "osx_oceanlotus.d",
            "procedure_code": "s0352",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0352",
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
                    "procedure_description": "osx_oceanlotus.d uses powershell scripts.[173]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/004",
                    "technique_name": "command and scripting interpreter : unix shell",
                    "technique_description": "adversaries may abuse unix shell commands and scripts for execution. unix shells are the primary command prompt on linux and macos systems, though many variations of the unix shell exist (e.g. sh, bash, zsh, etc.) depending on the specific os or distribution. unix shells can control every aspect of a system, with certain commands requiring elevated privileges.",
                    "procedure_description": "osx_oceanlotus.d uses a shell script as the main executable inside an app bundle and drops an embedded base64-encoded payload to the /tmp folder.[34][35]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "osx_oceanlotus.d uses word macros for execution.[115]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/001",
                    "technique_name": "create or modify system process : launch agent",
                    "technique_description": "adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence. when a user logs in, a per-user launchd process is started which loads the parameters for each launch-on-demand user agent from the property list (.plist) file found in /system/library/launchagents, /library/launchagents, and ~/library/launchagents.  property list files use the label, programarguments , and runatload keys to identify the launch agent's name, executable location, and execution time. launch agents are often installed to perform updates to programs, launch user specified programs at login, or to conduct other developer tasks.",
                    "procedure_description": "osx_oceanlotus.d can create a persistence file in the folder /library/launchagents.[25][26]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/004",
                    "technique_name": "create or modify system process : launch daemon",
                    "technique_description": "adversaries may create or modify launch daemons to execute malicious payloads as part of persistence. launch daemons are plist files used to interact with launchd, the service management framework used by macos. launch daemons require elevated privileges to install, are executed for every user on a system prior to login, and run in the background without the need for user interaction. during the macos initialization startup, the launchd process loads the parameters for launch-on-demand system-level daemons from plist files found in /system/library/launchdaemons/ and /library/launchdaemons/. required launch daemons parameters include a label to identify the task, program to provide a path to the executable, and runatload to specify when the task is run. launch daemons are often used to provide access to shared resources, updates to software, or conduct automation tasks.",
                    "procedure_description": "if running with root permissions, osx_oceanlotus.d can create a persistence file in the folder /library/launchdaemons.[16][17]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/001",
                    "technique_name": "create or modify system process : launch agent",
                    "technique_description": "adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence. when a user logs in, a per-user launchd process is started which loads the parameters for each launch-on-demand user agent from the property list (.plist) file found in /system/library/launchagents, /library/launchagents, and ~/library/launchagents.  property list files use the label, programarguments , and runatload keys to identify the launch agent's name, executable location, and execution time. launch agents are often installed to perform updates to programs, launch user specified programs at login, or to conduct other developer tasks.",
                    "procedure_description": "osx_oceanlotus.d can create a persistence file in the folder /library/launchagents.[25][26]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/004",
                    "technique_name": "create or modify system process : launch daemon",
                    "technique_description": "adversaries may create or modify launch daemons to execute malicious payloads as part of persistence. launch daemons are plist files used to interact with launchd, the service management framework used by macos. launch daemons require elevated privileges to install, are executed for every user on a system prior to login, and run in the background without the need for user interaction. during the macos initialization startup, the launchd process loads the parameters for launch-on-demand system-level daemons from plist files found in /system/library/launchdaemons/ and /library/launchdaemons/. required launch daemons parameters include a label to identify the task, program to provide a path to the executable, and runatload to specify when the task is run. launch daemons are often used to provide access to shared resources, updates to software, or conduct automation tasks.",
                    "procedure_description": "if running with root permissions, osx_oceanlotus.d can create a persistence file in the folder /library/launchdaemons.[16][17]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1222.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1222/002",
                    "technique_name": "file and directory permissions modification : linux and mac file and directory permissions modification",
                    "technique_description": "adversaries may modify file or directory permissions/attributes to evade access control lists (acls) and access protected files. file and directory permissions are commonly managed by acls configured by the file or directory owner, or users with the appropriate permissions. file and directory acl implementations vary by platform, but generally explicitly designate which users or groups can perform which actions (read, write, execute, etc.).",
                    "procedure_description": "osx_oceanlotus.d has changed permissions of a second-stage payload to an executable via chmod.[10]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/001",
                    "technique_name": "hide artifacts : hidden files and directories",
                    "technique_description": "adversaries may set files and directories to be hidden to evade detection mechanisms. to prevent normal users from accidentally changing special files on a system, most operating systems have the concept of a \u2018hidden\u2019 file. these files don\u2019t show up when a user browses the file system with a gui or when using normal commands on the command line. users must explicitly ask to show the hidden files either via a series of graphical user interface (gui) prompts or with command line switches (dir /a for windows and ls \u2013a for linux and macos).",
                    "procedure_description": "osx_oceanlotus.d sets the main loader file\u2019s attributes to hidden.[37]"
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
                    "procedure_description": "osx_oceanlotus.d has a command to delete a file from the system. osx_oceanlotus.d deletes the app bundle and dropper after execution.[169][170]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/006",
                    "technique_name": "indicator removal : timestomp",
                    "technique_description": "adversaries may modify file time attributes to hide new or changes to existing files. timestomping is a technique that modifies the timestamps of a file (the modify, access, create, and change times), often to mimic files that are in the same folder. this is done, for example, on files that have been modified or created by the adversary so that they do not appear conspicuous to forensic investigators or file analysis tools.",
                    "procedure_description": "osx_oceanlotus.d can use the touch -t command to change timestamps.[39][40]"
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
                    "procedure_description": "osx_oceanlotus.d has disguised its app bundle by adding special characters to the filename and using the icon for legitimate word documents.[53]"
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
                    "procedure_description": "osx_oceanlotus.d encrypts its strings in rsa256 and encodes them in a custom base64 scheme and xor.[245]"
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
                    "procedure_description": "osx_oceanlotus.d has a variant that is packed with upx.[66]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/001",
                    "technique_name": "subvert trust controls : gatekeeper bypass",
                    "technique_description": "adversaries may modify file attributes and subvert gatekeeper functionality to evade user prompts and execute untrusted programs. gatekeeper is a set of technologies that act as layer of apple\u2019s security model to ensure only trusted applications are executed on a host. gatekeeper was built on top of file quarantine in snow leopard (10.6, 2009) and has grown to include code signing, security policy compliance, notarization, and more. gatekeeper also treats applications running for the first time differently than reopened applications.",
                    "procedure_description": "osx_oceanlotus.d uses the command xattr -d com.apple.quarantine to remove the quarantine file attribute used by gatekeeper.[12][4]"
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
                    "procedure_description": "osx_oceanlotus.d has variants that check a number of system parameters to see if it is being run on real hardware or in a virtual machine environment, such as sysctl hw.model.[37][38]"
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
                    "procedure_description": "osx_oceanlotus.d collects processor information, memory information, computer name, hardware uuid, serial number, and operating system version. osx_oceanlotus.d has used the ioreg command to gather some of this information.[268][269][3]"
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
                    "procedure_description": "osx_oceanlotus.d can collect the network interface mac address on the infected host.[168][169]"
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
                    "procedure_description": "osx_oceanlotus.d has variants that check a number of system parameters to see if it is being run on real hardware or in a virtual machine environment, such as sysctl hw.model.[37][38]"
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
                    "procedure_description": "osx_oceanlotus.d scrambles and encrypts data using aes256 before sending it to the c2 server.[28][29]"
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
                    "procedure_description": "osx_oceanlotus.d has the ability to upload files from a compromised host.[132]"
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
                    "procedure_description": "osx_oceanlotus.d can use http post and get requests to send and receive c2 information.[240]"
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
                    "procedure_description": "osx_oceanlotus.d has a command to download and execute a file on the victim\u2019s machine.[337][338]"
                }
            ]
        }
    ]
};