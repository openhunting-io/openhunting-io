var threatdata = {
    "name": "xHunt",
    "alias": "xHunt, SectorD01, Hive0081, Cobalt Katana",
    "category": "APT",
    "type": "-",
    "modified": "2021-08-10",
    "all_data": {
        "actor": "xHunt",
        "names": [
            {
                "name": "xHunt",
                "name-giver": "Palo Alto"
            },
            {
                "name": "SectorD01",
                "name-giver": "ThreatRecon"
            },
            {
                "name": "Hive0081",
                "name-giver": "IBM"
            },
            {
                "name": "Cobalt Katana",
                "name-giver": "SecureWorks"
            }
        ],
        "country": [
            "Iran"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2018",
        "description": "(Palo Alto) Between May and June 2019, Unit 42 observed previously unknown tools used in the targeting of transportation and shipping organizations based in Kuwait.\n\nThe first known attack in this campaign targeted a Kuwait transportation and shipping company in which the actors installed a backdoor tool named Hisoka. Several custom tools were later downloaded to the system in order to carry out post-exploitation activities. All of these tools appear to have been created by the same developer. We were able to collect several variations of these tools including one dating back to July 2018.\n\nThe developer of the collected tools used character names from the anime series Hunter x Hunter, which is the basis for the campaign name \u201cxHunt.\u201d The names of the tools collected include backdoor tools Sakabota, Hisoka, Netero and Killua. These tools not only use HTTP for their command and control (C2) channels, but certain variants of these tools use DNS tunneling or emails to communicate with their C2 as well. While DNS tunneling as a C2 channel is fairly common, the specific method in which this group used email to facilitate C2 communications has not been observed by Unit 42 in quite some time. This method uses Exchange Web Services (EWS) and stolen credentials to create email \u201cdrafts\u201d to communicate between the actor and the tool. In addition to the aforementioned backdoor tools, we also observed tools referred to as Gon and EYE, which provide the backdoor access and the ability to carry out post-exploitation activities.",
        "observed-sectors": [
            "Shipping and Logistics"
        ],
        "observed-countries": [
            "Kuwait"
        ],
        "tools": [
            "BumbleBee",
            "CASHY200",
            "Gon",
            "EYE",
            "Hisoka",
            "Killua",
            "Netero",
            "Sakabota",
            "Snugy",
            "TriFive"
        ],
        "operations": [
            {
                "date": "2018-05",
                "activity": "On May 1 and June 3, 2018, we first saw executables that installed and executed CASHY200 PowerShell scripts\nhttps://unit42.paloaltonetworks.com/more-xhunt-new-powershell-backdoor-blocked-through-dns-tunnel-detection/"
            },
            {
                "date": "2019-08",
                "activity": "Newly Discovered Backdoors Using Deleted Email Drafts and DNS Tunneling for Command and Control\nhttps://unit42.paloaltonetworks.com/xhunt-campaign-backdoors/\nhttps://unit42.paloaltonetworks.com/bumblebee-webshell-xhunt-campaign/"
            }
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/xhunt-campaign-attacks-on-kuwait-shipping-and-transportation-organizations/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=temp-xhunt"
        ],
        "uuid": "3a8ec920-4dfd-4a06-81e7-7be8ee639b73",
        "last-card-change": "2021-08-10",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "xhunt",
    "analysis": null,
    "articles": [],
    "mitre": [
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
        },
        {
            "procedure_name": "tor",
            "procedure_code": "s0183",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0183",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "tor encapsulates traffic in multiple layers of encryption, using tls by default.[59]"
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
                    "procedure_description": "traffic traversing the tor network will be forwarded to multiple nodes before exiting the tor network and continuing on to its intended destination.[21]"
                }
            ]
        }
    ]
};