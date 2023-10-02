var threatdata = {
    "name": "Green Lambert",
    "alias": "Green Lambert",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Green Lambert",
        "names": [
            {
                "name": "Green Lambert"
            }
        ],
        "description": "(Kaspersky) Looking further for malware similar to {{Blue Lambert}}, we came by another family of malware we called Green Lambert. Green Lambert is a lighter, more reliable, but older version of Blue Lambert. Interestingly, while most Blue Lambert variants have version numbers in the range of 2.x, Green Lambert is mostly in 3.x versions. This stands in opposition to the data gathered from export timestamps and C&C domain activity that points to Green Lambert being considerably older than the Blue variant. Perhaps both Blue and Green Lamberts have been developed in parallel by two different teams working under the same umbrella, as normal software version iterations, with one seeing earlier deployment than the other.\n\nSignatures created for Green Lambert (Windows) have also triggered on an OS X variant of Green Lambert, with a very low version number: 1.2.0. This was uploaded to a multiscanner service in September 2014. The OS X variant of Green Lambert is in many regards functionally identical to the Windows version, however it misses certain functionality such as running plugins directly in memory.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://securelist.com/unraveling-the-lamberts-toolkit/77990/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0690/"
        ],
        "uuid": "ca7ec4d8-ddd5-4a6a-a1ef-891f53ce52be",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "green_lambert",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "green lambert",
            "procedure_code": "s0690",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0690",
            "techniques": [
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
                    "procedure_description": "green lambert can use shell scripts for execution, such as /bin/sh -c.[19][20]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.015",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/015",
                    "technique_name": "boot or logon autostart execution : login items",
                    "technique_description": "adversaries may add login items to execute upon user login to gain persistence or escalate privileges. login items are applications, documents, folders, or server connections that are automatically launched when a user logs in. login items can be added via a shared file list or service management framework. shared file list login items can be set using scripting languages such as applescript, whereas the service management framework uses the api call smloginitemsetenabled.",
                    "procedure_description": "green lambert can add login items to establish persistence.[13][14]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1037.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1037/004",
                    "technique_name": "boot or logon initialization scripts : rc scripts",
                    "technique_description": "adversaries may establish persistence by modifying rc scripts which are executed during a unix-like system\u2019s startup. these files allow system administrators to map and start custom services at startup for different run levels. rc scripts require root privileges to modify.",
                    "procedure_description": "green lambert can add init.d and rc.d files in the /etc folder to establish persistence.[9][10]"
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
                    "procedure_description": "green lambert can create a launch agent with the runatload key-value pair set to true, ensuring the com.apple.growlhelper.plist file runs every time a user logs in.[18][19]"
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
                    "procedure_description": "green lambert can add a plist file in the library/launchdaemons to establish persistence.[13][14]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/004",
                    "technique_name": "event triggered execution : unix shell configuration modification",
                    "technique_description": "adversaries may establish persistence through executing malicious commands triggered by a user\u2019s shell. user unix shells execute several configuration scripts at different points throughout the session based on events. for example, when a user opens a command-line interface or remotely logs in (such as via ssh) a login shell is initiated. the login shell executes scripts from the system (/etc) and the user\u2019s home directory (~/) to configure the environment. all login shells on a system use /etc/profile when initiated. these configuration scripts run at the permission level of their directory and are often used to set environment variables, create aliases, and customize the user\u2019s environment. when the shell exits or terminates, additional shell scripts are executed to ensure the shell exits appropriately.",
                    "procedure_description": "green lambert can establish persistence on a compromised host through modifying the profile, login, and run command (rc) files associated with the bash, csh, and tcsh shells. [12][13]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.015",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/015",
                    "technique_name": "boot or logon autostart execution : login items",
                    "technique_description": "adversaries may add login items to execute upon user login to gain persistence or escalate privileges. login items are applications, documents, folders, or server connections that are automatically launched when a user logs in. login items can be added via a shared file list or service management framework. shared file list login items can be set using scripting languages such as applescript, whereas the service management framework uses the api call smloginitemsetenabled.",
                    "procedure_description": "green lambert can add login items to establish persistence.[13][14]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1037.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1037/004",
                    "technique_name": "boot or logon initialization scripts : rc scripts",
                    "technique_description": "adversaries may establish persistence by modifying rc scripts which are executed during a unix-like system\u2019s startup. these files allow system administrators to map and start custom services at startup for different run levels. rc scripts require root privileges to modify.",
                    "procedure_description": "green lambert can add init.d and rc.d files in the /etc folder to establish persistence.[9][10]"
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
                    "procedure_description": "green lambert can create a launch agent with the runatload key-value pair set to true, ensuring the com.apple.growlhelper.plist file runs every time a user logs in.[18][19]"
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
                    "procedure_description": "green lambert can add a plist file in the library/launchdaemons to establish persistence.[13][14]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/004",
                    "technique_name": "event triggered execution : unix shell configuration modification",
                    "technique_description": "adversaries may establish persistence through executing malicious commands triggered by a user\u2019s shell. user unix shells execute several configuration scripts at different points throughout the session based on events. for example, when a user opens a command-line interface or remotely logs in (such as via ssh) a login shell is initiated. the login shell executes scripts from the system (/etc) and the user\u2019s home directory (~/) to configure the environment. all login shells on a system use /etc/profile when initiated. these configuration scripts run at the permission level of their directory and are often used to set environment variables, create aliases, and customize the user\u2019s environment. when the shell exits or terminates, additional shell scripts are executed to ensure the shell exits appropriately.",
                    "procedure_description": "green lambert can establish persistence on a compromised host through modifying the profile, login, and run command (rc) files associated with the bash, csh, and tcsh shells. [12][13]"
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
                    "procedure_description": "green lambert can use multiple custom routines to decrypt strings prior to execution.[102][103]"
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
                    "procedure_description": "green lambert can delete the original executable after initial installation in addition to unused functions.[89][90]"
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
                    "procedure_description": "green lambert has created a new executable named software update check to appear legitimate.[31][32]"
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
                    "procedure_description": "green lambert has been disguised as a growl help file.[69][70]"
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
                    "procedure_description": "green lambert has encrypted strings.[142][143]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/001",
                    "technique_name": "credentials from password stores : keychain",
                    "technique_description": "adversaries may acquire credentials from keychain. keychain (or keychain services) is the macos credential management system that stores account names, passwords, private keys, certificates, sensitive application data, payment data, and secure notes. there are three types of keychains: login keychain, system keychain, and local items (icloud) keychain. the default keychain is the login keychain, which stores user passwords and information. the system keychain stores items accessed by the operating system, such as items shared among users on a host. the local items (icloud) keychain is used for items synced with apple\u2019s icloud service.",
                    "procedure_description": "green lambert can use keychain services api functions to find and collect passwords, such as seckeychainfindinternetpassword and seckeychainitemcopyattributesanddata.[8][9]"
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
                    "procedure_description": "green lambert can use uname to identify the operating system name, version, and processor type.[150][151]"
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
                    "procedure_description": "green lambert can obtain proxy information from a victim's machine using system environment variables.[96][97]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1124",
                    "technique_link": "https://attack.mitre.org/techniques/T1124",
                    "technique_name": "system time discovery",
                    "technique_description": "an adversary may gather the system time and/or time zone from a local or remote system. the system time is set and stored by the windows time service within a domain to maintain time synchronization between systems and services in an enterprise network.",
                    "procedure_description": "green lambert can collect the date and time from a compromised host.[41][42]"
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
                    "procedure_description": "green lambert can collect data from a compromised host.[83]"
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
                    "procedure_description": "green lambert can use dns for c2 communications.[28][29]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090",
                    "technique_link": "https://attack.mitre.org/techniques/T1090",
                    "technique_name": "proxy",
                    "technique_description": "adversaries may use a connection proxy to direct network traffic between systems or act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, reduce the number of simultaneous outbound network connections, provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between victims to avoid suspicion. adversaries may chain together multiple proxies to further disguise the source of malicious traffic.",
                    "procedure_description": "green lambert can use proxies for c2 traffic.[18][19]"
                }
            ]
        }
    ]
};