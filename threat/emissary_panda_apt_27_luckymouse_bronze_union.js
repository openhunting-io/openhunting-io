var threatdata = {
    "name": "Emissary Panda, APT 27, LuckyMouse, Bronze Union",
    "alias": "Emissary Panda, APT 27, LuckyMouse, Bronze Union, TG-3390, TEMP.Hippo, Budworm, Group 35, ATK 15, Iron Tiger, Earth Smilodon, Red Phoenix, ZipToken",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-25",
    "all_data": {
        "actor": "Emissary Panda, APT 27, LuckyMouse, Bronze Union",
        "names": [
            {
                "name": "Emissary Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "APT 27",
                "name-giver": "Mandiant"
            },
            {
                "name": "LuckyMouse",
                "name-giver": "Kaspersky"
            },
            {
                "name": "Bronze Union",
                "name-giver": "Secureworks"
            },
            {
                "name": "TG-3390",
                "name-giver": "SecureWorks"
            },
            {
                "name": "TEMP.Hippo",
                "name-giver": "Symantec"
            },
            {
                "name": "Budworm",
                "name-giver": "Symantec"
            },
            {
                "name": "Group 35",
                "name-giver": "Talos"
            },
            {
                "name": "ATK 15",
                "name-giver": "Thales"
            },
            {
                "name": "Iron Tiger",
                "name-giver": "Trend Micro"
            },
            {
                "name": "Earth Smilodon",
                "name-giver": "Trend Micro"
            },
            {
                "name": "Red Phoenix",
                "name-giver": "PWC"
            },
            {
                "name": "ZipToken",
                "name-giver": "?"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2010",
        "description": "Threat Group-3390 is a Chinese threat group that has extensively used strategic Web compromises to target victims. The group has been active since at least 2010 and has targeted organizations in the aerospace, government, defense, technology, energy, and manufacturing sectors.\n\nEmissary Panda has some overlap with {{Turbine Panda, APT 26, Shell Crew, WebMasters, KungFu Kittens}} and possibly {{UNC215}}.\n\nThis actor worked together with {{TA428}} in Operation StealthyTrident.",
        "observed-sectors": [
            "Aerospace",
            "Aviation",
            "Defense",
            "Education",
            "Embassies",
            "Government",
            "Manufacturing",
            "Technology",
            "Telecommunications",
            "Think Tanks"
        ],
        "observed-countries": [
            "Australia",
            "Canada",
            "China",
            "Germany",
            "Hong Kong",
            "India",
            "Iran",
            "Israel",
            "Japan",
            "Mongolia",
            "Philippines",
            "Russia",
            "Spain",
            "South Korea",
            "Taiwan",
            "Thailand",
            "Tibet",
            "Turkey",
            "UK",
            "USA",
            "Middle East"
        ],
        "tools": [
            "Antak",
            "ASPXSpy",
            "China Chopper",
            "Gh0st RAT",
            "gsecdump",
            "HTTPBrowser",
            "HTran",
            "Hunter",
            "HyperBro",
            "Mimikatz",
            "Nishang",
            "OwaAuth",
            "PlugX",
            "ProcDump",
            "PsExec",
            "SysUpdate",
            "TwoFace",
            "Windows Credentials Editor",
            "ZXShell",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2010",
                "activity": "Operation \u201cIron Tiger\u201d\nOperation Iron Tiger is a targeted attack campaign discovered to have stolen trillions of data from defense contractors in the US, including stolen emails, intellectual property, strategic planning documents \u2013 data and records that could be used to destabilize an organization.\nhttps://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections/blob/master/2015/2015.09.17.Operation_Iron_Tiger/wp-operation-iron-tiger.pdf"
            },
            {
                "date": "2015",
                "activity": "Penetration of networks for industrial espionage\nDesignated as Threat Group 3390 and nicknamed \u201cEmissary Panda\u201d by researchers, the hacking group has compromised victims\u2019 networks largely through \u201cwatering hole\u201d attacks launched from over 100 compromised legitimate websites, sites picked because they were known to be frequented by those targeted in the attack.\nhttps://arstechnica.com/information-technology/2015/08/newly-discovered-chinese-hacking-group-hacked-100-websites-to-use-as-watering-holes/"
            },
            {
                "date": "2017-07",
                "activity": "Operation \u201cPZChao\u201d\nThe past few years have seen high-profile cyber-attacks shift to damaging the targets\u2019 digital infrastructures to stealing highly sensitive data, silently monitoring the victim and constantly laying the ground for a new wave of attacks.\nThis is also the case of a custom-built piece of malware that we have been monitoring for several months as it wrought havoc in Asia. Our threat intelligence systems picked up the first indicators of compromise in July last year, and we have kept an eye on the threat ever since.\nhttps://labs.bitdefender.com/2018/02/operation-pzchao-a-possible-return-of-the-iron-tiger-apt/"
            },
            {
                "date": "2018-03",
                "activity": "Campaign targeting a national data center in the Central Asia\nThe choice of target made this campaign especially significant \u2013 it meant the attackers gained access to a wide range of government resources at one fell swoop. We believe this access was abused, for example, by inserting malicious scripts in the country\u2019s official websites in order to conduct watering hole attacks.\nhttps://securelist.com/luckymouse-hits-national-data-center/86083/"
            },
            {
                "date": "2018-04",
                "activity": "Operation \u201cSpoiledLegacy\u201d\nWe have been monitoring a campaign targeting Vietnamese government and diplomatic entities abroad since at least April 2018.\nhttps://securelist.com/apt-trends-report-q1-2019/90643/"
            },
            {
                "date": "2019-04",
                "activity": "In April 2019, Unit 42 observed the Emissary Panda (AKA APT27, TG-3390, Bronze Union, Lucky Mouse) threat group installing webshells on Sharepoint servers to compromise Government Organizations of two different countries in the Middle East.\nhttps://unit42.paloaltonetworks.com/emissary-panda-attacks-middle-east-government-sharepoint-servers/"
            },
            {
                "date": "2019 Summer",
                "activity": "Operation \u201cDRBControl\u201d\nhttps://documents.trendmicro.com/assets/white_papers/wp-uncovering-DRBcontrol.pdf"
            },
            {
                "date": "2020",
                "activity": "APT27 Turns to Ransomware\nhttps://shared-public-reports.s3-eu-west-1.amazonaws.com/APT27+turns+to+ransomware.pdf"
            },
            {
                "date": "2020",
                "activity": "Iron Tiger APT Updates Toolkit With Evolved SysUpdate Malware\nhttps://www.trendmicro.com/en_us/research/21/d/iron-tiger-apt-updates-toolkit-with-evolved-sysupdate-malware-va.html"
            },
            {
                "date": "2020-03",
                "activity": "Is APT27 Abusing COVID-19 To Attack People ?!\nhttps://marcoramilli.com/2020/03/19/is-apt27-abusing-covid-19-to-attack-people/"
            },
            {
                "date": "2020-04",
                "activity": "Investigation with a twist: an accidental APT attack and averted data destruction\nhttps://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/incident-response-polar-ransomware-apt27/"
            },
            {
                "date": "2020-06",
                "activity": "Operation \u201cStealthyTrident\u201d\nESET researchers discovered that chat software called Able Desktop, part of a business management suite popular in Mongolia and used by 430 government agencies in Mongolia.\nhttps://www.welivesecurity.com/2020/12/10/luckymouse-ta428-compromise-able-desktop/\nhttps://decoded.avast.io/luigicamastra/apt-group-targeting-governmental-agencies-in-east-asia/"
            },
            {
                "date": "2021-03",
                "activity": "Exchange servers under siege from at least 10 APT groups\nhttps://www.welivesecurity.com/2021/03/10/exchange-servers-under-siege-10-apt-groups/"
            },
            {
                "date": "2021-03",
                "activity": "German government warns of APT27 activity targeting local companies\nhttps://therecord.media/german-government-warns-of-apt27-activity-targeting-local-companies/"
            },
            {
                "date": "2022-04",
                "activity": "Budworm: Espionage Group Returns to Targeting U.S. Organizations\nhttps://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/budworm-espionage-us-state"
            },
            {
                "date": "2022-05",
                "activity": "LuckyMouse uses a backdoored Electron app to target MacOS\nhttps://blog.sekoia.io/luckymouse-uses-a-backdoored-electron-app-to-target-macos/"
            },
            {
                "date": "2022-07",
                "activity": "Iron Tiger\u2019s SysUpdate Reappears, Adds Linux Targeting\nhttps://www.trendmicro.com/en_us/research/23/c/iron-tiger-sysupdate-adds-linux-targeting.html"
            },
            {
                "date": "2022-08",
                "activity": "Iron Tiger Compromises Chat Application Mimi, Targets Windows, Mac, and Linux Users\nhttps://www.trendmicro.com/en_us/research/22/h/irontiger-compromises-chat-app-Mimi-targets-windows-mac-linux-users.html"
            }
        ],
        "information": [
            "https://www.secureworks.com/research/threat-group-3390-targets-organizations-for-cyberespionage",
            "https://www.secureworks.com/research/a-peek-into-bronze-unions-toolbox",
            "https://www.secureworks.com/research/bronze-union"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0027/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=emissary_panda"
        ],
        "uuid": "e67091ab-cbea-4d73-984d-e4b29f6c48a9",
        "last-card-change": "2023-04-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "emissary_panda_apt_27_luckymouse_bronze_union",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "emissary",
            "procedure_code": "s0082",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0082",
            "techniques": [
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
                    "procedure_description": "emissary has the capability to create a remote shell and execute specified commands.[113]"
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
                    "procedure_description": "variants of emissary have added run registry keys to establish persistence.[80]"
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
                    "procedure_description": "emissary is capable of configuring itself as a service.[47]"
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
                    "procedure_description": "variants of emissary have added run registry keys to establish persistence.[80]"
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
                    "procedure_description": "emissary is capable of configuring itself as a service.[47]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "emissary injects its dll file into a newly spawned internet explorer process.[25]"
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
                    "procedure_description": "variants of emissary encrypt payloads using various xor ciphers, as well as a custom algorithm that uses the \"srand\" and \"rand\" functions.[115][116]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/001",
                    "technique_name": "obfuscated files or information : binary padding",
                    "technique_description": "adversaries may use binary padding to add junk data and change the on-disk representation of malware. this can be done without affecting the functionality or behavior of a binary, but can increase the size of the binary beyond what some security tools are capable of handling due to file size limitations.",
                    "procedure_description": "a variant of emissary appends junk data to the end of its dll file to create a large file that may exceed the maximum size that anti-virus programs can scan.[14]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "emissary injects its dll file into a newly spawned internet explorer process.[25]"
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
                    "procedure_description": "variants of emissary have used rundll32.exe in registry values added to establish persistence.[41]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1615",
                    "technique_link": "https://attack.mitre.org/techniques/T1615",
                    "technique_name": "group policy discovery",
                    "technique_description": "adversaries may gather information on group policy settings to identify paths for privilege escalation, security measures applied within a domain, and to discover patterns in domain objects that can be manipulated or used to blend in the environment. group policy allows for centralized management of user and computer settings in active directory (ad). group policy objects (gpos) are containers for group policy settings made up of files stored within a predictable network path \\<domain>\\sysvol\\<domain>\\policies\\.",
                    "procedure_description": "emissary has the capability to execute gpresult.[6]"
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
                    "procedure_description": "emissary has the capability to execute the command net localgroup administrators.[7]"
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
                    "procedure_description": "emissary has the capability to execute ver and systeminfo commands.[124]"
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
                    "procedure_description": "emissary has the capability to execute the command ipconfig /all.[80]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1007",
                    "technique_link": "https://attack.mitre.org/techniques/T1007",
                    "technique_name": "system service discovery",
                    "technique_description": "adversaries may try to gather information about registered local system services. adversaries may obtain information about services using tools as well as os utility commands such as sc query, tasklist /svc, systemctl --type=service, and net start.",
                    "procedure_description": "emissary has the capability to execute the command net start to interact with services.[18]"
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
                    "procedure_description": "emissary uses http or https for c2.[112]"
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
                    "procedure_description": "the c2 server response to a beacon sent by a variant of emissary contains a 36-character guid value that is used as an encryption key for subsequent network communications. some variants of emissary use various xor operations to encrypt c2 data.[44]"
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
                    "procedure_description": "emissary has the capability to download files from the c2 server.[165]"
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