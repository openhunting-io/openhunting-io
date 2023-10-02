var threatdata = {
    "name": "Vadokrist",
    "alias": "Vadokrist",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Keylogger, Info stealer, Credential stealer",
    "modified": "2021-06-03",
    "all_data": {
        "tool": "Vadokrist",
        "names": [
            {
                "name": "Vadokrist"
            }
        ],
        "description": "(ESET) Vadokrist is a Latin American banking trojan that ESET has been tracking since 2018 and that is active almost exclusively in Brazil. In this installment of our series, we examine its main features and some connections to other Latin American banking trojan families.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://www.welivesecurity.com/2021/01/21/vadokrist-wolf-sheeps-clothing/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.vadokrist"
        ],
        "uuid": "6b15656b-df52-484a-964e-8033785546eb",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Vadokrist",
            "malware_alias": null,
            "malware": "win.vadokrist",
            "last_update": "2022-08-08 09:03:11",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "26cccd15142a1a8217598ece4fb28a1f70886b353c45e2b49f58c1bce963023b",
                        "timestamp": "2022-08-08 09:03:11"
                    },
                    {
                        "value": "ba6ceed0ce77372e2f67672206158a685e5af68cfc3ef1cd96b89b3732a2a8fa",
                        "timestamp": "2022-08-08 09:03:09"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-08-08 09:03:11",
    "file_name": "vadokrist",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2021/05/eset_threat_report_t12021.pdf",
            "date": "2021-06-03",
            "organization": "ESET Research",
            "author": "roman kovac",
            "title": "ESET Threat Report T\u200a1 2021",
            "categories": [
                "Kobalos",
                "Janeleiro",
                "Vadokrist"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2021/01/21/vadokrist-wolf-sheeps-clothing/",
            "date": "2021-01-21",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "Vadokrist: A wolf in sheep\u2019s clothing",
            "categories": [
                "Vadokrist"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "dok",
            "procedure_code": "s0281",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0281",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/002",
                    "technique_name": "command and scripting interpreter : applescript",
                    "technique_description": "adversaries may abuse applescript for execution. applescript is a macos scripting language designed to control applications and parts of the os via inter-application messages called appleevents. these appleevent messages can be sent independently or easily scripted with applescript. these events can locate open windows, send keystrokes, and interact with almost any open application locally or remotely.",
                    "procedure_description": "dok uses applescript to create a login item for persistence.[6]"
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
                    "procedure_description": "dok uses applescript to install a login item by sending apple events to the system events process.[8]"
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
                    "procedure_description": "dok installs two launchagents to redirect all network traffic with a randomly generated name for each plist file maintaining the format com.random.name.plist.[16][17]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1548.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/003",
                    "technique_name": "abuse elevation control mechanism : sudo and sudo caching",
                    "technique_description": "adversaries may perform sudo caching and/or use the sudoers file to elevate privileges. adversaries may do this to execute commands as other users or spawn processes with higher privileges.",
                    "procedure_description": "dok adds admin  all=(all) nopasswd: all to the /etc/sudoers file.[5]"
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
                    "procedure_description": "dok uses applescript to install a login item by sending apple events to the system events process.[8]"
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
                    "procedure_description": "dok installs two launchagents to redirect all network traffic with a randomly generated name for each plist file maintaining the format com.random.name.plist.[16][17]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1548.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/003",
                    "technique_name": "abuse elevation control mechanism : sudo and sudo caching",
                    "technique_description": "adversaries may perform sudo caching and/or use the sudoers file to elevate privileges. adversaries may do this to execute commands as other users or spawn processes with higher privileges.",
                    "procedure_description": "dok adds admin  all=(all) nopasswd: all to the /etc/sudoers file.[5]"
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
                    "procedure_description": "dok gives all users execute permissions for the application using the command chmod +x /users/shared/appstore.app.[6]"
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
                    "procedure_description": "dok is packed with an upx executable packer.[31]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/004",
                    "technique_name": "subvert trust controls : install root certificate",
                    "technique_description": "adversaries may install a root certificate on a compromised system to avoid warnings when connecting to adversary controlled web servers. root certificates are used in public key cryptography to identify a root certificate authority (ca). when a root certificate is installed, the system or application will trust certificates in the root's chain of trust that have been signed by the root certificate. certificates are commonly used for establishing secure tls/ssl communications within a web browser. when a user attempts to browse a website that presents a certificate that is not trusted an error message will be displayed to warn the user of the security risk. depending on the security settings, the browser may not allow the user to establish a connection to the website.",
                    "procedure_description": "dok installs a root certificate to aid in adversary-in-the-middle actions using the command add-trusted-cert -d -r trustroot -k /library/keychains/system.keychain /tmp/filename.[7][8]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1557",
                    "technique_link": "https://attack.mitre.org/techniques/T1557",
                    "technique_name": "adversary-in-the-middle",
                    "technique_description": "adversaries may attempt to position themselves between two or more networked devices using an adversary-in-the-middle (aitm) technique to support follow-on behaviors such as network sniffing or transmitted data manipulation. by abusing features of common networking protocols that can determine the flow of network traffic (e.g. arp, dns, llmnr, etc.), adversaries may force a device to communicate through an adversary controlled system so they can collect information or perform additional actions.",
                    "procedure_description": "dok proxies web traffic to potentially monitor and alter victim http(s) traffic.[9][10]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/002",
                    "technique_name": "input capture : gui input capture",
                    "technique_description": "adversaries may mimic common operating system gui components to prompt users for credentials with a seemingly legitimate prompt. when programs are executed that need additional privileges than are present in the current user context, it is common for the operating system to prompt the user for proper credentials to authorize the elevated privileges for the task (ex: bypass user account control).",
                    "procedure_description": "dok prompts the user for credentials.[8]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1557",
                    "technique_link": "https://attack.mitre.org/techniques/T1557",
                    "technique_name": "adversary-in-the-middle",
                    "technique_description": "adversaries may attempt to position themselves between two or more networked devices using an adversary-in-the-middle (aitm) technique to support follow-on behaviors such as network sniffing or transmitted data manipulation. by abusing features of common networking protocols that can determine the flow of network traffic (e.g. arp, dns, llmnr, etc.), adversaries may force a device to communicate through an adversary controlled system so they can collect information or perform additional actions.",
                    "procedure_description": "dok proxies web traffic to potentially monitor and alter victim http(s) traffic.[9][10]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/002",
                    "technique_name": "input capture : gui input capture",
                    "technique_description": "adversaries may mimic common operating system gui components to prompt users for credentials with a seemingly legitimate prompt. when programs are executed that need additional privileges than are present in the current user context, it is common for the operating system to prompt the user for proper credentials to authorize the elevated privileges for the task (ex: bypass user account control).",
                    "procedure_description": "dok prompts the user for credentials.[8]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "dok downloads and installs tor via homebrew.[8]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1048.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1048/003",
                    "technique_name": "exfiltration over alternative protocol : exfiltration over unencrypted non-c2 protocol",
                    "technique_description": "adversaries may steal data by exfiltrating it over an un-encrypted network protocol other than that of the existing command and control channel. the data may also be sent to an alternate network location from the main command and control server.",
                    "procedure_description": "dok exfiltrates logs of its execution stored in the /tmp folder over ftp using the curl command.[17]"
                }
            ]
        }
    ]
};