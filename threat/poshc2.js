var threatdata = {
    "name": "PoshC2",
    "alias": "PoshC2",
    "category": "Tools",
    "type": "Backdoor",
    "modified": "2022-09-06",
    "all_data": {
        "tool": "PoshC2",
        "names": [
            {
                "name": "PoshC2"
            }
        ],
        "description": "PoshC2 is an open source remote administration and post-exploitation framework that is publicly available on GitHub. The server-side components of the tool are primarily written in Python, while the implants are written in PowerShell. Although PoshC2 is primarily focused on Windows implantation, it does contain a basic Python dropper for Linux/macOS.",
        "category": "Tools",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://github.com/nettitude/PoshC2/",
            "https://www.prodefence.org/poshc2-red-teaming-post-exploitation-tool/",
            "https://www.fireeye.com/blog/threat-research/2018/12/overruled-containing-a-potentially-destructive-adversary.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0378/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.poshc2"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:poshc2"
        ],
        "uuid": "18ebfad6-64bd-4c68-9339-3352d14a982e",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "PoshC2",
            "malware_alias": null,
            "malware": "win.poshc2",
            "last_update": "2023-11-22 19:53:47",
            "tags": [
                "YANDEXCLOUD",
                "censys",
                "AMAZON-02",
                "PostC2",
                "OVH",
                "VDSINA-NL",
                "c2",
                "CHANGWAY-AS",
                "C2",
                "Posh",
                "CONTABO",
                "AMAZON-AES"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "51.250.38.28:443",
                        "timestamp": "2023-11-22 19:53:47"
                    },
                    {
                        "value": "116.203.51.117:443",
                        "timestamp": "2023-11-22 19:53:46"
                    },
                    {
                        "value": "68.183.227.107:444",
                        "timestamp": "2023-11-15 12:00:49"
                    },
                    {
                        "value": "79.143.181.62:443",
                        "timestamp": "2023-11-11 10:01:10"
                    },
                    {
                        "value": "184.72.153.18:443",
                        "timestamp": "2023-11-09 04:04:59"
                    },
                    {
                        "value": "132.145.106.12:443",
                        "timestamp": "2023-11-09 04:04:58"
                    },
                    {
                        "value": "13.48.77.144:80",
                        "timestamp": "2023-11-03 15:11:49"
                    },
                    {
                        "value": "13.48.77.144:443",
                        "timestamp": "2023-11-01 01:09:28"
                    },
                    {
                        "value": "3.253.77.60:443",
                        "timestamp": "2023-10-27 03:49:24"
                    },
                    {
                        "value": "94.23.228.43:443",
                        "timestamp": "2023-10-26 12:12:11"
                    },
                    {
                        "value": "213.219.37.158:443",
                        "timestamp": "2023-10-20 16:07:16"
                    },
                    {
                        "value": "159.100.29.105:8888",
                        "timestamp": "2023-10-19 17:53:23"
                    },
                    {
                        "value": "45.79.196.203:443",
                        "timestamp": "2023-11-11 17:01:05"
                    },
                    {
                        "value": "185.234.216.64:443",
                        "timestamp": "2023-10-24 03:00:49"
                    },
                    {
                        "value": "88.210.9.139:443",
                        "timestamp": "2023-10-16 21:00:55"
                    },
                    {
                        "value": "18.134.14.164:443",
                        "timestamp": "2023-10-11 20:14:56"
                    },
                    {
                        "value": "18.134.14.164:443",
                        "timestamp": "2023-10-11 12:59:06"
                    },
                    {
                        "value": "188.166.116.129:6969",
                        "timestamp": "2023-10-11 20:14:56"
                    },
                    {
                        "value": "94.198.53.143:443",
                        "timestamp": "2023-10-11 20:14:56"
                    },
                    {
                        "value": "95.213.145.101:443",
                        "timestamp": "2022-10-17 18:59:43"
                    },
                    {
                        "value": "46.243.186.112:3790",
                        "timestamp": "2021-06-22 14:59:36"
                    },
                    {
                        "value": "185.255.79.26:3790",
                        "timestamp": "2021-06-22 14:59:36"
                    },
                    {
                        "value": "103.39.230.213:3790",
                        "timestamp": "2021-06-22 14:59:36"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-22 19:53:47",
    "file_name": "poshc2",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://research.checkpoint.com/2022/dangeroussavanna-two-year-long-campaign-targets-financial-institutions-in-french-speaking-africa/",
            "date": "2022-09-06",
            "organization": "Check Point",
            "author": "Check Point Research",
            "title": "DangerousSavanna: Two-year long campaign targets financial institutions in French-speaking Africa",
            "categories": [
                "AsyncRAT",
                "Meterpreter",
                "PoshC2",
                "DangerousSavanna"
            ]
        },
        {
            "data_url": "https://michaelkoczwara.medium.com/hunting-c2-with-shodan-223ca250d06f",
            "date": "2022-09-01",
            "organization": "Medium michaelkoczwara",
            "author": "Michael Koczwara",
            "title": "Hunting C2/Adversaries Infrastructure with Shodan and Censys",
            "categories": [
                "Brute Ratel C4",
                "Cobalt Strike",
                "Deimos",
                "GRUNT",
                "IcedID",
                "Merlin",
                "Meterpreter",
                "Nighthawk",
                "PoshC2",
                "Sliver"
            ]
        },
        {
            "data_url": "https://5851803.fs1.hubspotusercontent-na1.net/hubfs/5851803/Russian%20Ransomware%20C2%20Network%20Discovered%20in%20Censys%20Data.pdf",
            "date": "2022-07-18",
            "organization": "Censys",
            "author": "Censys",
            "title": "Russian Ransomware C2  Network Discovered in  Censys Data",
            "categories": [
                "Cobalt Strike",
                "MimiKatz",
                "PoshC2"
            ]
        },
        {
            "data_url": "https://ti.dbappsecurity.com.cn/blog/articles/2021/09/06/operation-maskface/",
            "date": "2021-09-06",
            "organization": "dbappsecurity",
            "author": "\u730e\u5f71\u5b9e\u9a8c\u5ba4",
            "title": "\u5047\u9762\u884c\u52a8(Operation MaskFace)-\u7591\u4f3c\u9488\u5bf9\u5883\u5916\u94f6\u884c\u7684\u5229\u7528\u95ee\u5377\u8c03\u67e5\u4e3a\u4e3b\u9898\u7684\u9493\u9c7c\u653b\u51fb\u4e8b\u4ef6\u5206\u6790",
            "categories": [
                "PoshC2"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2021-0107.pdf",
            "date": "2021-01-07",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "Aversary Infrastructure Report 2020: A Defender's View",
            "categories": [
                "Octopus",
                "pupy",
                "Cobalt Strike",
                "Empire Downloader",
                "Meterpreter",
                "PoshC2"
            ]
        },
        {
            "data_url": "https://redcanary.com/blog/getsystem-offsec/",
            "date": "2021-01-06",
            "organization": "Red Canary",
            "author": "Tony Lambert",
            "title": "Hunting for GetSystem in offensive security tools",
            "categories": [
                "Cobalt Strike",
                "Empire Downloader",
                "Meterpreter",
                "PoshC2"
            ]
        },
        {
            "data_url": "https://paper.seebug.org/1301/",
            "date": "2020-08-20",
            "organization": "Seebug Paper",
            "author": "Malayke",
            "title": "Use ZoomEye to track multiple Redteam C&C post-penetration attack frameworks",
            "categories": [
                "Cobalt Strike",
                "Empire Downloader",
                "PoshC2"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2020/07/scandalous-external-detection-using-network-scan-data-and-automation.html",
            "date": "2020-07-13",
            "organization": "FireEye",
            "author": "Andrew Thompson",
            "title": "SCANdalous! (External Detection Using Network Scan Data and Automation)",
            "categories": [
                "POWERTON",
                "QUADAGENT",
                "PoshC2"
            ]
        },
        {
            "data_url": "https://labs.nettitude.com/blog/detecting-poshc2-indicators-of-compromise/",
            "date": "2020-06-17",
            "organization": "Nettitude Labs",
            "author": "Rob Bone",
            "title": "Detecting PoshC2 \u2013 Indicators of Compromise",
            "categories": [
                "PoshC2"
            ]
        },
        {
            "data_url": "https://jsac.jpcert.or.jp/archive/2020/pdf/JSAC2020_0_JPCERT_en.pdf",
            "date": "2020-01-17",
            "organization": "JPCERT/CC",
            "author": "Takayoshi Shiigi",
            "title": "Looking back on the incidents in 2019",
            "categories": [
                "TSCookie",
                "NodeRAT",
                "Emotet",
                "PoshC2",
                "Quasar RAT"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/cobalt-trinity",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT TRINITY",
            "categories": [
                "POWERTON",
                "pupy",
                "Imminent Monitor RAT",
                "Koadic",
                "Nanocore RAT",
                "NetWire RC",
                "PoshC2",
                "APT33"
            ]
        },
        {
            "data_url": "https://github.com/nettitude/PoshC2_Python/",
            "date": "2020-01-01",
            "organization": "Github (nettitude)",
            "author": "Nettitude",
            "title": "Repository for Python Server for PoshC2",
            "categories": [
                "PoshC2"
            ]
        },
        {
            "data_url": "https://github.com/jeFF0Falltrades/IoCs/blob/master/APT/poshc2_apt_33.md",
            "date": "2019-12-05",
            "organization": "Github (jeFF0Falltrades)",
            "author": "Jeff Archer",
            "title": "PoshC2 (specifically as used by APT33)",
            "categories": [
                "PoshC2"
            ]
        },
        {
            "data_url": "http://www.rewterz.com/rewterz-news/rewterz-threat-alert-iranian-apt-uses-job-scams-to-lure-targets",
            "date": "2019-11-18",
            "organization": "Rewterz Information Security",
            "author": "Rewterz Information Security",
            "title": "REWTERZ THREAT ALERT \u2013 IRANIAN APT USES JOB SCAMS TO LURE TARGETS",
            "categories": [
                "PoshC2"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2018/12/overruled-containing-a-potentially-destructive-adversary.html",
            "date": "2018-12-21",
            "organization": "FireEye",
            "author": "Geoff Ackerman",
            "title": "OVERRULED: Containing a Potentially Destructive Adversary",
            "categories": [
                "POWERTON",
                "PoshC2",
                "pupy"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "poshc2",
            "procedure_code": "s0378",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0378",
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
                    "procedure_description": "poshc2 contains an implementation of psexec for remote execution.[46]"
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
                    "procedure_description": "poshc2 has a number of modules that use wmi to execute tasks.[99]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/003",
                    "technique_name": "event triggered execution : windows management instrumentation event subscription",
                    "technique_description": "adversaries may establish persistence and elevate privileges by executing malicious content triggered by a windows management instrumentation (wmi) event subscription. wmi can be used to install event filters, providers, consumers, and bindings that execute code when a defined event occurs. examples of events that may be subscribed to are the wall clock time, user loging, or the computer's uptime.",
                    "procedure_description": "poshc2 has the ability to persist on a system using wmi events.[15]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "poshc2 can utilize multiple methods to bypass uac.[48]"
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
                    "procedure_description": "poshc2 can use invoke-tokenmanipulation for manipulating tokens.[18]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/002",
                    "technique_name": "access token manipulation : create process with token",
                    "technique_description": "adversaries may create a new process with an existing token to escalate privileges and bypass access controls. processes can be created with the token and resulting security context of another user using features such as createprocesswithtokenw and runas.",
                    "procedure_description": "poshc2 can use invoke-runas to make tokens.[11]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/003",
                    "technique_name": "event triggered execution : windows management instrumentation event subscription",
                    "technique_description": "adversaries may establish persistence and elevate privileges by executing malicious content triggered by a windows management instrumentation (wmi) event subscription. wmi can be used to install event filters, providers, consumers, and bindings that execute code when a defined event occurs. examples of events that may be subscribed to are the wall clock time, user loging, or the computer's uptime.",
                    "procedure_description": "poshc2 has the ability to persist on a system using wmi events.[15]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1068",
                    "technique_link": "https://attack.mitre.org/techniques/T1068",
                    "technique_name": "exploitation for privilege escalation",
                    "technique_description": "adversaries may exploit software vulnerabilities in an attempt to elevate privileges. exploitation of a software vulnerability occurs when an adversary takes advantage of a programming error in a program, service, or within the operating system software or kernel itself to execute adversary-controlled code. security constructs such as permission levels will often hinder access to information and use of certain techniques, so adversaries will likely need to perform privilege escalation to include use of software exploitation to circumvent those restrictions.",
                    "procedure_description": "poshc2 contains modules for local privilege escalation exploits such as cve-2016-9192 and cve-2016-0099.[28]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "poshc2 contains multiple modules for injecting into processes, such as invoke-psinject.[45]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "poshc2 can utilize multiple methods to bypass uac.[48]"
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
                    "procedure_description": "poshc2 can use invoke-tokenmanipulation for manipulating tokens.[18]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/002",
                    "technique_name": "access token manipulation : create process with token",
                    "technique_description": "adversaries may create a new process with an existing token to escalate privileges and bypass access controls. processes can be created with the token and resulting security context of another user using features such as createprocesswithtokenw and runas.",
                    "procedure_description": "poshc2 can use invoke-runas to make tokens.[11]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "poshc2 contains multiple modules for injecting into processes, such as invoke-psinject.[45]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1550.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1550/002",
                    "technique_name": "use alternate authentication material : pass the hash",
                    "technique_description": "adversaries may \"pass the hash\" using stolen password hashes to move laterally within an environment, bypassing normal system access controls. pass the hash (pth) is a method of authenticating as a user without having access to the user's cleartext password. this method bypasses standard authentication steps that require a cleartext password, moving directly into the portion of the authentication that uses the password hash.",
                    "procedure_description": "poshc2 has a number of modules that leverage pass the hash for lateral movement.[16]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1557.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1557/001",
                    "technique_name": "adversary-in-the-middle : llmnr/nbt-ns poisoning and smb relay",
                    "technique_description": "by responding to llmnr/nbt-ns network traffic, adversaries may spoof an authoritative source for name resolution to force communication with an adversary controlled system. this activity may be used to collect or relay authentication materials.",
                    "procedure_description": "poshc2 can use inveigh to conduct name service poisoning for credential theft and associated relay attacks.[12]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1110",
                    "technique_link": "https://attack.mitre.org/techniques/T1110",
                    "technique_name": "brute force",
                    "technique_description": "adversaries may use brute force techniques to gain access to accounts when passwords are unknown or when password hashes are obtained. without knowledge of the password for an account or set of accounts, an adversary may systematically guess the password using a repetitive or iterative mechanism. brute forcing passwords can take place via interaction with a service that will check the validity of those credentials or offline against previously acquired credential data, such as password hashes.",
                    "procedure_description": "poshc2 has modules for brute forcing local administrator and ad user accounts.[19]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555",
                    "technique_link": "https://attack.mitre.org/techniques/T1555",
                    "technique_name": "credentials from password stores",
                    "technique_description": "adversaries may search for common password storage locations to obtain user credentials. passwords are stored in several places on a system, depending on the operating system or application holding the credentials. there are also specific applications that store passwords to make it easier for users manage and maintain. once credentials are obtained, they can be used to perform lateral movement and access restricted information.",
                    "procedure_description": "poshc2 can decrypt passwords stored in the rdcman configuration file.[32]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "poshc2 has modules for keystroke logging and capturing credentials from spoofed outlook authentication messages.[137]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1040",
                    "technique_link": "https://attack.mitre.org/techniques/T1040",
                    "technique_name": "network sniffing",
                    "technique_description": "adversaries may sniff network traffic to capture information about an environment, including authentication material passed over the network. network sniffing refers to using the network interface on a system to monitor or capture information sent over a wired or wireless connection. an adversary may place a network interface into promiscuous mode to passively access data in transit over the network, or use span ports to capture a larger amount of data.",
                    "procedure_description": "poshc2 contains a module for taking packet captures on compromised hosts.[24]"
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
                    "procedure_description": "poshc2 contains an implementation of mimikatz to gather credentials from memory.[73]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1552.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1552/001",
                    "technique_name": "unsecured credentials : credentials in files",
                    "technique_description": "adversaries may search local file systems and remote file shares for files containing insecurely stored credentials. these can be files created by users to store their own credentials, shared credential stores for a group of individuals, configuration files containing passwords for a system or service, or source code/binary files containing embedded passwords.",
                    "procedure_description": "poshc2 contains modules for searching for passwords in local and remote files.[28]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/001",
                    "technique_name": "account discovery : local account",
                    "technique_description": "adversaries may attempt to get a listing of local system accounts. this information can help adversaries determine which local accounts exist on a system to aid in follow-on behavior.",
                    "procedure_description": "poshc2 can enumerate local and domain user account information.[33]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/002",
                    "technique_name": "account discovery : domain account",
                    "technique_description": "adversaries may attempt to get a listing of domain accounts. this information can help adversaries determine which domain accounts exist to aid in follow-on behavior such as targeting specific accounts which possess particular privileges.",
                    "procedure_description": "poshc2 can enumerate local and domain user account information.[39]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1482",
                    "technique_link": "https://attack.mitre.org/techniques/T1482",
                    "technique_name": "domain trust discovery",
                    "technique_description": "adversaries may attempt to gather information on domain trust relationships that may be used to identify lateral movement opportunities in windows multi-domain/forest environments. domain trusts provide a mechanism for a domain to allow access to resources based on the authentication procedures of another domain. domain trusts allow the users of the trusted domain to access resources in the trusting domain. the information discovered may help the adversary conduct sid-history injection, pass the ticket, and kerberoasting. domain trusts can be enumerated using the dsenumeratedomaintrusts() win32 api call, .net methods, and ldap. the windows utility nltest is known to be used by adversaries to enumerate domain trusts.",
                    "procedure_description": "poshc2 has modules for enumerating domain trusts.[22]"
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
                    "procedure_description": "poshc2 can enumerate files on the local file system and includes a module for enumerating recently accessed files.[233]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1046",
                    "technique_link": "https://attack.mitre.org/techniques/T1046",
                    "technique_name": "network service discovery",
                    "technique_description": "adversaries may attempt to get a listing of services running on remote hosts and local network infrastructure devices, including those that may be vulnerable to remote software exploitation. common methods to acquire this information include port and/or vulnerability scans using tools that are brought onto a system.",
                    "procedure_description": "poshc2 can perform port scans from an infected host.[48]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1040",
                    "technique_link": "https://attack.mitre.org/techniques/T1040",
                    "technique_name": "network sniffing",
                    "technique_description": "adversaries may sniff network traffic to capture information about an environment, including authentication material passed over the network. network sniffing refers to using the network interface on a system to monitor or capture information sent over a wired or wireless connection. an adversary may place a network interface into promiscuous mode to passively access data in transit over the network, or use span ports to capture a larger amount of data.",
                    "procedure_description": "poshc2 contains a module for taking packet captures on compromised hosts.[24]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1201",
                    "technique_link": "https://attack.mitre.org/techniques/T1201",
                    "technique_name": "password policy discovery",
                    "technique_description": "adversaries may attempt to access detailed information about the password policy used within an enterprise network or cloud environment. password policies are a way to enforce complex passwords that are difficult to guess or crack through brute force. this information may help the adversary to create a list of common passwords and launch dictionary and/or brute force attacks which adheres to the policy (e.g. if the minimum password length should be 8, then not trying passwords such as 'pass123'; not checking for more than 3-4 passwords per account if the lockout is set to 6 as to not lock out accounts).",
                    "procedure_description": "poshc2 can use get-passpol to enumerate the domain password policy.[12]"
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
                    "procedure_description": "poshc2 contains modules, such as get-locadm for enumerating permission groups.[22]"
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
                    "procedure_description": "poshc2 contains modules, such as get-computerinfo, for enumerating common system information.[281]"
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
                    "procedure_description": "poshc2 can enumerate network adapter information.[176]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1049",
                    "technique_link": "https://attack.mitre.org/techniques/T1049",
                    "technique_name": "system network connections discovery",
                    "technique_description": "adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.",
                    "procedure_description": "poshc2 contains an implementation of netstat to enumerate tcp and udp connections.[65]"
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
                    "procedure_description": "poshc2 can enumerate service and service permission information.[42]"
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
                    "procedure_description": "poshc2 contains a module for exploiting smb via eternalblue.[30]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1550.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1550/002",
                    "technique_name": "use alternate authentication material : pass the hash",
                    "technique_description": "adversaries may \"pass the hash\" using stolen password hashes to move laterally within an environment, bypassing normal system access controls. pass the hash (pth) is a method of authenticating as a user without having access to the user's cleartext password. this method bypasses standard authentication steps that require a cleartext password, moving directly into the portion of the authentication that uses the password hash.",
                    "procedure_description": "poshc2 has a number of modules that leverage pass the hash for lateral movement.[16]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1557.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1557/001",
                    "technique_name": "adversary-in-the-middle : llmnr/nbt-ns poisoning and smb relay",
                    "technique_description": "by responding to llmnr/nbt-ns network traffic, adversaries may spoof an authoritative source for name resolution to force communication with an adversary controlled system. this activity may be used to collect or relay authentication materials.",
                    "procedure_description": "poshc2 can use inveigh to conduct name service poisoning for credential theft and associated relay attacks.[12]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/001",
                    "technique_name": "archive collected data : archive via utility",
                    "technique_description": "adversaries may use utilities to compress and/or encrypt collected data prior to exfiltration. many utilities include functionalities to compress, encrypt, or otherwise package data into a format that is easier/more secure to transport.",
                    "procedure_description": "poshc2 contains a module for compressing data using zip.[59]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1119",
                    "technique_link": "https://attack.mitre.org/techniques/T1119",
                    "technique_name": "automated collection",
                    "technique_description": "once established within a system or network, an adversary may use automated techniques for collecting internal data. methods for performing this technique could include use of a command and scripting interpreter to search for and copy information fitting set criteria such as file type, location, or name at specific time intervals. in cloud-based environments, adversaries may also use cloud apis, command line interfaces, or extract, transform, and load (etl) services to automatically collect data. this functionality could also be built into remote access tools.",
                    "procedure_description": "poshc2 contains a module for recursively parsing through files and directories to gather valid credit card numbers.[34]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "poshc2 has modules for keystroke logging and capturing credentials from spoofed outlook authentication messages.[137]"
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
                    "procedure_description": "poshc2 can use protocols like http/https for command and control traffic.[250]"
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
                    "procedure_description": "poshc2 contains modules that allow for use of proxies in command and control.[36]"
                }
            ]
        }
    ]
};