var threatdata = {
    "name": "Retefe",
    "alias": "Retefe, Dok, Tsukuba, Werdlod",
    "category": "Malware",
    "type": "Tunneling",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Retefe",
        "names": [
            {
                "name": "Retefe"
            },
            {
                "name": "Dok"
            },
            {
                "name": "Tsukuba"
            },
            {
                "name": "Werdlod"
            }
        ],
        "description": "(Check Point) Once OSX/Dok infection is complete, the attackers gain complete access to all victim communication, including communication encrypted by SSL. This is done by redirecting victim traffic through a malicious proxy server.",
        "category": "Malware",
        "type": [
            "Tunneling"
        ],
        "information": [
            "https://blog.checkpoint.com/2017/04/27/osx-malware-catching-wants-read-https-traffic/",
            "https://www.govcert.admin.ch/blog/33/the-retefe-saga",
            "http://www.brycampbell.co.uk/new-blog/2017/4/30/retefe-and-osxdok-one-and-the-same",
            "https://blog.checkpoint.com/2017/07/13/osxdok-refuses-go-away-money/",
            "https://www.proofpoint.com/us/threat-insight/post/retefe-banking-trojan-leverages-eternalblue-exploit-swiss-campaigns",
            "https://blog.avast.com/the-evolution-of-the-retefe-banking-trojan",
            "https://threatpost.com/eternalblue-exploit-used-in-retefe-banking-trojan-campaign/128103/",
            "https://github.com/cocaman/retefe",
            "https://www.govcert.admin.ch/blog/35/reversing-retefe",
            "https://researchcenter.paloaltonetworks.com/2015/08/retefe-banking-trojan-targets-sweden-switzerland-and-japan/",
            "https://github.com/Tomasuh/retefe-unpacker",
            "https://securityintelligence.com/news/retefe-banking-trojan-returns-with-smoke-loader-as-its-intermediate-loader/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0281/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.retefe",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.retefe"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Retefe"
        ],
        "uuid": "7816abd3-afe2-413c-a0f8-5c080d92ed82",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Retefe",
            "malware_alias": null,
            "malware": "apk.retefe",
            "last_update": "2022-01-21 19:00:41",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "c76482802a369e6230d198123ceba32a801c6300fc7af306872a5a642adc445a",
                        "timestamp": "2022-01-21 19:00:41"
                    },
                    {
                        "value": "f44b80767dd5d095a338f4a2ef6f80358b43764b4ec00827922bd7e4b19ecc83",
                        "timestamp": "2022-01-21 19:00:36"
                    },
                    {
                        "value": "fd0e2aab29278cdbb6fc77665adcbf334040b7a0a3bbda315b943009e84618a0",
                        "timestamp": "2022-01-21 19:00:30"
                    },
                    {
                        "value": "8e679f87ba503f3dfad96266ca79de7bfe3092dc6a58c0fe0438f7d4b19f0bbd",
                        "timestamp": "2022-01-21 19:00:27"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-01-21 19:00:41",
    "file_name": "retefe",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://vulnerability.ch/2019/05/analysing-retefe-with-sysmon-and-splunk/",
            "date": "2019-05-23",
            "organization": "Vulnerability.ch Blog",
            "author": "Corsin Camichel",
            "title": "Analysing \"Retefe\" with Sysmon and Splunk",
            "categories": [
                "Retefe"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/2019-return-retefe",
            "date": "2019-05-02",
            "organization": "Proofpoint",
            "author": "Bryan Campbell",
            "title": "2019: The Return of Retefe",
            "categories": [
                "Dok",
                "Retefe",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://github.com/cocaman/retefe",
            "date": "2019-03-09",
            "organization": "Github (cocaman)",
            "author": "Corsin Camichel",
            "title": "retefe: Artefacts from various retefe campaigns",
            "categories": [
                "Retefe"
            ]
        },
        {
            "data_url": "https://github.com/Tomasuh/retefe-unpacker",
            "date": "2018-12-30",
            "organization": "Github (Tomasuh)",
            "author": "Tomasuh",
            "title": "Retefe unpacker",
            "categories": [
                "Retefe"
            ]
        },
        {
            "data_url": "https://www.govcert.admin.ch/blog/35/reversing-retefe",
            "date": "2018-11-08",
            "organization": "GovCERT.ch",
            "author": "GovCERT.ch",
            "title": "Reversing Retefe",
            "categories": [
                "Retefe"
            ]
        },
        {
            "data_url": "https://threatpost.com/eternalblue-exploit-used-in-retefe-banking-trojan-campaign/128103/",
            "date": "2017-09-22",
            "organization": "Threatpost",
            "author": "Tom Spring",
            "title": "EternalBlue Exploit Used in Retefe Banking Trojan Campaign",
            "categories": [
                "Retefe"
            ]
        },
        {
            "data_url": "https://www.govcert.admin.ch/blog/33/the-retefe-saga",
            "date": "2017-08-03",
            "organization": "GovCERT.ch",
            "author": "GovCERT.ch",
            "title": "The Retefe Saga",
            "categories": [
                "Retefe",
                "Dok",
                "Retefe"
            ]
        },
        {
            "data_url": "http://blog.checkpoint.com/2017/04/27/osx-malware-catching-wants-read-https-traffic/",
            "date": "2017-05-04",
            "organization": "Check Point Software Technologies Ltd",
            "author": "Ofer Caspi",
            "title": "OSX Malware is Catching Up, and it wants to Read Your HTTPS Traffic",
            "categories": [
                "Dok"
            ]
        },
        {
            "data_url": "http://blog.angelalonso.es/2017/02/hunting-retefe-with-splunk-some24.html",
            "date": "2017-02-24",
            "organization": "Some stuff about security.. Blog",
            "author": "Angel Alonso",
            "title": "Hunting Retefe with Splunk - some interesting points",
            "categories": [
                "Retefe"
            ]
        },
        {
            "data_url": "http://blog.angelalonso.es/2015/11/reversing-sms-c-protocol-of-emmental.html",
            "date": "2015-11-03",
            "organization": "",
            "author": "Angel Alonso-Parrizas",
            "title": "Reversing the SMS C&C protocol of Emmental (1st part - understanding the code)",
            "categories": [
                "Retefe"
            ]
        },
        {
            "data_url": "http://blog.angelalonso.es/2015/10/reversing-c2c-http-emmental.html",
            "date": "2015-10-28",
            "organization": "",
            "author": "Angel Alonso-Parrizas",
            "title": "Reversing the C2C HTTP Emmental communication",
            "categories": [
                "Retefe"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2015/08/retefe-banking-trojan-targets-sweden-switzerland-and-japan/",
            "date": "2015-08-20",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Brandon Levene",
            "title": "Retefe Banking Trojan Targets Sweden, Switzerland and Japan",
            "categories": [
                "Retefe"
            ]
        },
        {
            "data_url": "http://maldr0id.blogspot.ch/2014/09/android-malware-based-on-sms-encryption.html",
            "date": "2014-09-23",
            "organization": "maldr0id blog",
            "author": "\u0141ukasz Siewierski",
            "title": "Android malware based on SMS encryption and with KitKat support",
            "categories": [
                "Retefe"
            ]
        },
        {
            "data_url": "http://blog.dornea.nu/2014/07/07/disect-android-apks-like-a-pro-static-code-analysis/",
            "date": "2014-07-07",
            "organization": "",
            "author": "Victor Dorneanu",
            "title": "Disect Android APKs like a Pro - Static code analysis",
            "categories": [
                "Retefe"
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