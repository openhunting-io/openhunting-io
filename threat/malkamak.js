var threatdata = {
    "name": "MalKamak",
    "alias": "MalKamak, Operation GhostShell",
    "category": "APT",
    "type": "-",
    "modified": "2021-11-02",
    "all_data": {
        "actor": "MalKamak",
        "names": [
            {
                "name": "MalKamak",
                "name-giver": "Cybereason"
            },
            {
                "name": "Operation GhostShell",
                "name-giver": "Cybereason"
            }
        ],
        "country": [
            "Iran"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2018",
        "description": "(Cybereason) In July 2021, the Cybereason Nocturnus and Incident Response Teams responded to Operation GhostShell, a highly-targeted cyber espionage campaign targeting the Aerospace and Telecommunications industries mainly in the Middle East, with additional victims in the U.S., Russia and Europe.\nThe Operation GhostShell campaign aims to steal sensitive information about critical assets, organizations\u2019 infrastructure and technology. During the investigation, the Nocturnus Team uncovered a previously undocumented and stealthy RAT (Remote Access Trojan) dubbed ShellClient which was employed as the primary espionage tool.\nThe Nocturnus Team found evidence that the ShellClient RAT has been under ongoing development since at least 2018, with several iterations that introduced new functionalities, while it evaded antivirus tools and managed to remain undetected and publicly unknown.\nAssessments as to the identity of the operators and authors of ShellClient resulted in the identification of a new Iranian threat actor dubbed MalKamak that has operated since at least 2018 and remained publicly unknown thus far. In addition, our research points out possible connections to other Iranian state-sponsored APT threat actors such as {{Chafer, APT 39}} and {{Agrius}} APT. However, we assess that MalKamak has distinct features that separate it from the other Iranian groups.",
        "observed-sectors": [
            "Aerospace",
            "Telecommunications"
        ],
        "observed-countries": [
            "Russia",
            "USA",
            "Europe and Middle East"
        ],
        "tools": [
            "PAExec",
            "SafetyKatz",
            "ShellClient",
            "WinRAR"
        ],
        "information": [
            "https://www.cybereason.com/blog/operation-ghostshell-novel-rat-targets-global-aerospace-and-telecoms-firms"
        ],
        "uuid": "1ef36ba9-41f8-42a4-94e6-56678a7b8268",
        "last-card-change": "2021-11-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "malkamak",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "operation ghost",
            "procedure_code": "c0023",
            "procedure_type": "campaign",
            "procedure_link": "https://attack.mitre.org/campaigns/C0023",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/001",
                    "technique_name": "acquire infrastructure : domains",
                    "technique_description": "adversaries may acquire domains that can be used during targeting. domain names are the human readable names used to represent one or more ip addresses. they can be purchased or, in some cases, acquired for free.",
                    "procedure_description": "for operation ghost, apt29 registered domains for use in c2 including some crafted to appear as existing legitimate domains.[53]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1587.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1587/001",
                    "technique_name": "develop capabilities : malware",
                    "technique_description": "adversaries may develop malware and malware components that can be used during targeting. building malicious software can include the development of payloads, droppers, post-compromise tools, backdoors (including backdoored images), packers, c2 protocols, and the creation of infected removable media. adversaries may develop malware to support their operations, creating a means for maintaining control of remote machines, evading defenses, and executing post-compromise behaviors.",
                    "procedure_description": "for operation ghost, apt29 used new strains of malware including fatduke, miniduke, regduke, and polyglotduke.[26]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1585.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1585/001",
                    "technique_name": "establish accounts : social media accounts",
                    "technique_description": "adversaries may create and cultivate social media accounts that can be used during targeting. adversaries can create social media accounts that can be used to build a persona to further operations. persona development consists of the development of public information, presence, history and appropriate affiliations.",
                    "procedure_description": "for operation ghost, apt29 registered twitter accounts to host c2 nodes.[15]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "for operation ghost, apt29 used stolen administrator credentials for lateral movement on compromised networks.[14]"
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
                    "procedure_description": "during operation ghost, apt29 used wmi event subscriptions to establish persistence for malware.[14]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "for operation ghost, apt29 used stolen administrator credentials for lateral movement on compromised networks.[14]"
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
                    "procedure_description": "during operation ghost, apt29 used wmi event subscriptions to establish persistence for malware.[14]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "for operation ghost, apt29 used stolen administrator credentials for lateral movement on compromised networks.[14]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/003",
                    "technique_name": "obfuscated files or information : steganography",
                    "technique_description": "adversaries may use steganography techniques in order to prevent the detection of hidden information. steganographic techniques can be used to hide data in digital media such as images, audio tracks, video clips, or text files.",
                    "procedure_description": "during operation ghost, apt29 used steganography to hide payloads inside valid images.[14]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "for operation ghost, apt29 used stolen administrator credentials for lateral movement on compromised networks.[14]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/002",
                    "technique_name": "data obfuscation : steganography",
                    "technique_description": "adversaries may use steganographic techniques to hide command and control traffic to make detection efforts more difficult. steganographic techniques can be used to hide data in digital messages that are transferred between systems. this hidden information can be used for command and control of compromised systems. in some cases, the passing of files embedded using steganography, such as image or document files, can be used for command and control.",
                    "procedure_description": "during operation ghost, apt29 used steganography to hide the communications between the implants and their c&c servers.[6]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/002",
                    "technique_name": "web service : bidirectional communication",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for sending commands to and receiving output from a compromised system over the web service channel. compromised systems may leverage popular websites and social media to host command and control (c2) instructions. those infected systems can then send the output from those commands back over that web service channel. the return traffic may occur in a variety of ways, depending on the web service being utilized. for example, the return traffic may take the form of the compromised system posting a comment on a forum, issuing a pull request to development project, updating a document hosted on a web service, or by sending a tweet.",
                    "procedure_description": "for operation ghost, apt29 used social media platforms to hide communications to c2 servers.[37]"
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